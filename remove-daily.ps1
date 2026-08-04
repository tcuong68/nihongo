<#
  Gỡ scheduled task do setup-daily.ps1 tạo ra.

      powershell -ExecutionPolicy Bypass -File remove-daily.ps1

  Chỉ xoá đúng task tên NihongoDailyOpen của người dùng hiện tại,
  không đụng tới bất cứ thứ gì trong project.
#>

$ErrorActionPreference = 'Stop'

$taskName = 'NihongoDailyOpen'

if (Get-ScheduledTask -TaskName $taskName -ErrorAction SilentlyContinue) {
    Unregister-ScheduledTask -TaskName $taskName -Confirm:$false
    Write-Host "Đã gỡ task: $taskName" -ForegroundColor Green
} else {
    Write-Host "Không tìm thấy task nào để gỡ ($taskName)." -ForegroundColor Yellow
}
