<#
  Hiện thông báo hệ thống (toast Windows) về những từ đến hạn ôn của bài đang học.

  Đọc progress-snapshot.json do app gửi sang qua server.py, tự tính lại xem từ nào
  đến hạn tại thời điểm chạy — nên snapshot cũ vài ngày vẫn cho kết quả đúng.

  Thường được scheduled task gọi mỗi giờ (xem setup-notify.ps1), nhưng chạy tay
  để thử cũng được:

      powershell -ExecutionPolicy Bypass -File notify-review.ps1 -Force

  Không có từ nào đến hạn thì im lặng, không hiện gì.
#>

param(
    # Khung giờ được phép nhắc (giờ 24h). Ngoài khung này thì thoát, khỏi đánh thức
    # bạn lúc 3 giờ sáng nếu máy để bật qua đêm.
    [int]$From = 8,
    [int]$To = 22,
    # Số từ hiện trong một thông báo
    [int]$Max = 4,
    # Bỏ qua kiểm tra khung giờ, dùng khi chạy thử
    [switch]$Force
)

$ErrorActionPreference = 'Stop'

$appId    = 'Nihongo.Review'
$snapshot = Join-Path $PSScriptRoot 'progress-snapshot.json'
$appUrl   = 'http://127.0.0.1:8765/'

if (-not $Force) {
    $h = (Get-Date).Hour
    if ($h -lt $From -or $h -ge $To) { exit 0 }
}

if (-not (Test-Path $snapshot)) {
    Write-Host "Chưa có $snapshot — hãy mở app qua $appUrl và vào một bài để tạo." -ForegroundColor Yellow
    exit 0
}

try {
    $snap = Get-Content $snapshot -Raw -Encoding UTF8 | ConvertFrom-Json
} catch {
    Write-Host "Không đọc được snapshot: $($_.Exception.Message)" -ForegroundColor Yellow
    exit 0
}

if (-not $snap.lesson -or -not $snap.words) {
    Write-Host "Snapshot không đúng định dạng." -ForegroundColor Yellow
    exit 0
}

# Mốc thời gian trong snapshot là milli giây kiểu JavaScript.
$nowMs = [DateTimeOffset]::UtcNow.ToUnixTimeMilliseconds()
$due = @($snap.words | Where-Object { [double]$_.due -le $nowMs } |
         Sort-Object @{ e = { [int]$_.box } }, @{ e = { [double]$_.due } })

if ($due.Count -eq 0) { exit 0 }

$show = @($due | Select-Object -First $Max)

function Esc([string]$s) {
    if ($null -eq $s) { return '' }
    $s.Replace('&', '&amp;').Replace('<', '&lt;').Replace('>', '&gt;').Replace('"', '&quot;')
}

$lines = $show | ForEach-Object {
    $head = if ($_.k) { "$($_.h)【$($_.k)】" } else { [string]$_.h }
    Esc "$head — $($_.m)"
}
$body = $lines -join "`n"
if ($due.Count -gt $show.Count) {
    $body += "`n… và $($due.Count - $show.Count) từ nữa"
}

$lesson = $snap.lesson
$title  = Esc "📖 Bài $($lesson.n) · $($lesson.level) — $($due.Count) từ cần ôn"
$attr   = Esc "$($lesson.titleVi)"
$launch = Esc "$appUrl#/lesson/$($lesson.level)/$($lesson.n)/vocab"

# Toast của desktop app phải gắn với một AppUserModelId đã đăng ký, nếu không Windows
# sẽ không hiện. Khoá HKCU này chỉ để đặt tên hiển thị, tạo sẵn cho chắc.
$key = "HKCU:\SOFTWARE\Classes\AppUserModelId\$appId"
if (-not (Test-Path $key)) {
    New-Item -Path $key -Force | Out-Null
    New-ItemProperty -Path $key -Name 'DisplayName' -Value 'Nihongo' -PropertyType String -Force | Out-Null
}

$xml = @"
<toast activationType="protocol" launch="$launch">
  <visual>
    <binding template="ToastGeneric">
      <text>$title</text>
      <text>$body</text>
      <text placement="attribution">$attr</text>
    </binding>
  </visual>
</toast>
"@

[Windows.UI.Notifications.ToastNotificationManager, Windows.UI.Notifications, ContentType = WindowsRuntime] | Out-Null
[Windows.Data.Xml.Dom.XmlDocument, Windows.Data.Xml.Dom.XmlDocument, ContentType = WindowsRuntime] | Out-Null

$doc = New-Object Windows.Data.Xml.Dom.XmlDocument
$doc.LoadXml($xml)
$toast = New-Object Windows.UI.Notifications.ToastNotification -ArgumentList $doc
[Windows.UI.Notifications.ToastNotificationManager]::CreateToastNotifier($appId).Show($toast)

Write-Host "Đã nhắc $($due.Count) từ của bài $($lesson.n) ($($lesson.level))." -ForegroundColor Green
