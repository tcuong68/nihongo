<#
  Tạo scheduled task mở app Nihongo vào một giờ cố định MỖI NGÀY.

  Chạy MỘT LẦN trên mỗi máy sau khi clone repo:
      powershell -ExecutionPolicy Bypass -File setup-daily.ps1
      powershell -ExecutionPolicy Bypass -File setup-daily.ps1 -At 21:30

  Khác với setup-startup.ps1: shortcut trong thư mục Startup chỉ chạy lúc đăng nhập
  Windows, nên máy để bật liên tục nhiều ngày thì nó không kích hoạt lần nào. Task này
  chạy theo giờ nên vẫn mở đều đặn.

  Script tự lấy đường dẫn từ vị trí của chính nó ($PSScriptRoot) nên clone vào
  thư mục nào cũng chạy đúng. Không cần quyền admin (task chạy dưới tài khoản hiện tại).
#>

param(
    # Giờ mở app mỗi ngày, dạng 24h: '08:00', '21:30'...
    [string]$At = '08:00'
)

$ErrorActionPreference = 'Stop'

$taskName = 'NihongoDailyOpen'
$root     = $PSScriptRoot
$target   = Join-Path $root 'open-app.ps1'

if (-not (Test-Path $target)) {
    Write-Error "Không tìm thấy '$target'. Hãy đặt script này trong thư mục gốc của project."
    exit 1
}

try {
    $time = [datetime]::ParseExact($At, 'HH:mm', $null)
} catch {
    Write-Error "Giờ không hợp lệ: '$At'. Dùng dạng 24h, ví dụ -At 08:00 hoặc -At 21:30."
    exit 1
}

# Đăng ký lại từ đầu cho chắc, tránh trường hợp task cũ trỏ sai đường dẫn.
$existing = Get-ScheduledTask -TaskName $taskName -ErrorAction SilentlyContinue
if ($existing) {
    Write-Host "Task đã tồn tại, sẽ tạo lại theo đường dẫn và giờ hiện tại." -ForegroundColor Yellow
    Unregister-ScheduledTask -TaskName $taskName -Confirm:$false
}

# Gọi open-app.ps1 chứ không mở thẳng index.html: nó tự bật server cục bộ rồi mở
# http://127.0.0.1:8765/ nếu có Python, không thì quay về mở file như cũ.
# -WindowStyle Hidden để không nháy cửa sổ console.
$action = New-ScheduledTaskAction -Execute 'powershell.exe' `
    -Argument "-NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File `"$target`"" `
    -WorkingDirectory $root

$trigger = New-ScheduledTaskTrigger -Daily -At $time

# StartWhenAvailable: nếu đúng giờ đó máy đang tắt/ngủ thì chạy bù khi máy hoạt động lại,
# thay vì bỏ qua luôn ngày hôm đó.
$settings = New-ScheduledTaskSettingsSet -StartWhenAvailable -DontStopOnIdleEnd `
    -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries `
    -ExecutionTimeLimit ([TimeSpan]::Zero)

$principal = New-ScheduledTaskPrincipal -UserId "$env:USERDOMAIN\$env:USERNAME" `
    -LogonType Interactive -RunLevel Limited

Register-ScheduledTask -TaskName $taskName -Action $action -Trigger $trigger `
    -Settings $settings -Principal $principal `
    -Description "Mo app Nihongo (hoc tieng Nhat N5/N4) hang ngay luc $At" | Out-Null

$next = (Get-ScheduledTask -TaskName $taskName | Get-ScheduledTaskInfo).NextRunTime

Write-Host ""
Write-Host "Xong." -ForegroundColor Green
Write-Host "  Task      : $taskName"
Write-Host "  Trỏ tới   : $target"
Write-Host "  Chạy lúc  : $At mỗi ngày"
Write-Host "  Lần tới   : $next"
Write-Host ""
Write-Host "Thử ngay  : Start-ScheduledTask -TaskName $taskName"
Write-Host "Muốn gỡ   : powershell -ExecutionPolicy Bypass -File remove-daily.ps1"
