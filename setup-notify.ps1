<#
  Bật nhắc ôn tập bằng thông báo hệ thống: mỗi giờ hiện toast Windows liệt kê
  những từ đến hạn ôn của bài đang học.

  Chạy MỘT LẦN trên mỗi máy sau khi clone repo:
      powershell -ExecutionPolicy Bypass -File setup-notify.ps1
      powershell -ExecutionPolicy Bypass -File setup-notify.ps1 -From 9 -To 21

  Tạo hai scheduled task:
      NihongoServer  — bật server.py chạy nền khi đăng nhập, để app gửi tiến độ về
      NihongoReview  — mỗi giờ trong khung giờ đã chọn, gọi notify-review.ps1

  Nhắc chạy được kể cả khi đã đóng trình duyệt, vì dữ liệu nằm ở
  progress-snapshot.json chứ không phải trong localStorage.

  Cần Python (đã có sẵn nếu bạn chạy được `python --version`). Không cần quyền admin.
  Gỡ bằng remove-notify.ps1.
#>

param(
    # Khung giờ được phép nhắc, dạng 24h. Ngoài khung này thì im lặng.
    [ValidateRange(0, 23)][int]$From = 8,
    [ValidateRange(1, 24)][int]$To = 22
)

$ErrorActionPreference = 'Stop'

if ($To -le $From + 1) {
    Write-Error "Khung giờ phải rộng hơn 1 tiếng (-From $From -To $To không hợp lệ)."
    exit 1
}

$root       = $PSScriptRoot
$serverPy   = Join-Path $root 'server.py'
$notifyPs1  = Join-Path $root 'notify-review.ps1'
$port       = 8765
$appId      = 'Nihongo.Review'
$serverTask = 'NihongoServer'
$notifyTask = 'NihongoReview'

foreach ($f in @($serverPy, $notifyPs1)) {
    if (-not (Test-Path $f)) {
        Write-Error "Không tìm thấy '$f'. Hãy đặt script này trong thư mục gốc của project."
        exit 1
    }
}

# pythonw.exe chạy không hiện cửa sổ console; không có thì đành dùng python.exe.
$py = Get-Command pythonw -ErrorAction SilentlyContinue
if (-not $py) { $py = Get-Command python -ErrorAction SilentlyContinue }
if (-not $py) {
    Write-Error "Không tìm thấy Python. Cài Python rồi chạy lại, hoặc bỏ qua tính năng này."
    exit 1
}

$principal = New-ScheduledTaskPrincipal -UserId "$env:USERDOMAIN\$env:USERNAME" `
    -LogonType Interactive -RunLevel Limited

$settings = New-ScheduledTaskSettingsSet -StartWhenAvailable -DontStopOnIdleEnd `
    -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries `
    -ExecutionTimeLimit ([TimeSpan]::Zero)

function Reset-Task([string]$name) {
    if (Get-ScheduledTask -TaskName $name -ErrorAction SilentlyContinue) {
        Write-Host "Task $name đã có, tạo lại theo cấu hình hiện tại." -ForegroundColor Yellow
        Unregister-ScheduledTask -TaskName $name -Confirm:$false
    }
}

# ---------- Tên hiển thị của thông báo ----------
# Không có khoá này thì Windows không biết toast thuộc app nào và sẽ không hiện.
$key = "HKCU:\SOFTWARE\Classes\AppUserModelId\$appId"
if (-not (Test-Path $key)) { New-Item -Path $key -Force | Out-Null }
New-ItemProperty -Path $key -Name 'DisplayName' -Value 'Nihongo' -PropertyType String -Force | Out-Null

# ---------- Task 1: server chạy nền ----------
Reset-Task $serverTask
Register-ScheduledTask -TaskName $serverTask `
    -Action (New-ScheduledTaskAction -Execute $py.Source -Argument "`"$serverPy`"" -WorkingDirectory $root) `
    -Trigger (New-ScheduledTaskTrigger -AtLogOn -User "$env:USERDOMAIN\$env:USERNAME") `
    -Settings $settings -Principal $principal `
    -Description "Server cuc bo cua app Nihongo (http://127.0.0.1:$port)" | Out-Null

# ---------- Task 2: nhắc mỗi giờ ----------
# New-ScheduledTaskTrigger -Daily không nhận tham số lặp lại, nên mượn phần
# Repetition của một trigger -Once rồi gắn sang.
$start = Get-Date -Hour $From -Minute 0 -Second 0
$trigger = New-ScheduledTaskTrigger -Daily -At $start
$trigger.Repetition = (New-ScheduledTaskTrigger -Once -At $start `
    -RepetitionInterval (New-TimeSpan -Hours 1) `
    -RepetitionDuration (New-TimeSpan -Hours ($To - $From))).Repetition

Reset-Task $notifyTask
Register-ScheduledTask -TaskName $notifyTask `
    -Action (New-ScheduledTaskAction -Execute 'powershell.exe' `
        -Argument "-NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File `"$notifyPs1`" -From $From -To $To" `
        -WorkingDirectory $root) `
    -Trigger $trigger -Settings $settings -Principal $principal `
    -Description "Nhac on tap tu vung bai dang hoc, moi gio tu ${From}h den ${To}h" | Out-Null

# ---------- Bật server ngay ----------
$up = { [bool](Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue) }
if (-not (& $up)) {
    Start-ScheduledTask -TaskName $serverTask
    for ($i = 0; $i -lt 25 -and -not (& $up); $i++) { Start-Sleep -Milliseconds 200 }
}

Write-Host ""
if (& $up) {
    Write-Host "Xong." -ForegroundColor Green
} else {
    Write-Host "Đã tạo task nhưng server chưa lên cổng $port — kiểm tra bằng: python server.py" -ForegroundColor Yellow
}
Write-Host "  Server    : http://127.0.0.1:$port/  (task $serverTask, tự bật khi đăng nhập)"
Write-Host "  Nhắc ôn   : mỗi giờ, từ ${From}h đến ${To}h  (task $notifyTask)"
Write-Host "  Dữ liệu   : $(Join-Path $root 'progress-snapshot.json')"
Write-Host ""
Write-Host "Mở app bằng http://127.0.0.1:$port/ rồi vào một bài — snapshot sẽ được tạo."
Write-Host "open-app.ps1 và task NihongoDailyOpen đã tự dùng địa chỉ này."
Write-Host ""
Write-Host "Thử ngay  : powershell -ExecutionPolicy Bypass -File notify-review.ps1 -Force"
Write-Host "Muốn gỡ   : powershell -ExecutionPolicy Bypass -File remove-notify.ps1"
