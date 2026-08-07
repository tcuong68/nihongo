<#
  Tắt nhắc ôn tập bằng thông báo hệ thống — gỡ mọi thứ setup-notify.ps1 đã tạo.

      powershell -ExecutionPolicy Bypass -File remove-notify.ps1
      powershell -ExecutionPolicy Bypass -File remove-notify.ps1 -KeepSnapshot

  Gỡ hai scheduled task, dừng server đang chạy, xoá khoá AppUserModelId và
  progress-snapshot.json. Không đụng tới tiến độ học thật (nằm trong localStorage
  của trình duyệt) và không đụng tới mã nguồn.
#>

param(
    # Giữ lại progress-snapshot.json thay vì xoá
    [switch]$KeepSnapshot
)

$ErrorActionPreference = 'Stop'

$port     = 8765
$appId    = 'Nihongo.Review'
$snapshot = Join-Path $PSScriptRoot 'progress-snapshot.json'

foreach ($name in @('NihongoReview', 'NihongoServer')) {
    if (Get-ScheduledTask -TaskName $name -ErrorAction SilentlyContinue) {
        Unregister-ScheduledTask -TaskName $name -Confirm:$false
        Write-Host "Đã gỡ task: $name" -ForegroundColor Green
    } else {
        Write-Host "Không có task $name." -ForegroundColor Yellow
    }
}

# Dừng tiến trình đang giữ cổng 8765 (server.py chạy nền bằng pythonw).
$conn = Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue
if ($conn) {
    $conn | Select-Object -ExpandProperty OwningProcess -Unique | ForEach-Object {
        # Giữ PID ra biến riêng: trong khối catch thì $_ là đối tượng lỗi, không còn là PID.
        $procId = $_
        try {
            Stop-Process -Id $procId -Force -ErrorAction Stop
            Write-Host "Đã dừng server (PID $procId)." -ForegroundColor Green
        } catch {
            Write-Host "Không dừng được PID ${procId}: $($_.Exception.Message)" -ForegroundColor Yellow
        }
    }
} else {
    Write-Host "Server không chạy." -ForegroundColor Yellow
}

$key = "HKCU:\SOFTWARE\Classes\AppUserModelId\$appId"
if (Test-Path $key) {
    Remove-Item $key -Recurse -Force
    Write-Host "Đã xoá khoá thông báo: $appId" -ForegroundColor Green
}

if (-not $KeepSnapshot -and (Test-Path $snapshot)) {
    Remove-Item $snapshot -Force
    Write-Host "Đã xoá $snapshot" -ForegroundColor Green
}

Write-Host ""
Write-Host "Xong. App vẫn dùng bình thường, chỉ là không còn nhắc ôn tập nữa."
