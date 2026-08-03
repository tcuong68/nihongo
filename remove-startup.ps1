<#
  Gỡ shortcut khởi động do setup-startup.ps1 tạo ra.

      powershell -ExecutionPolicy Bypass -File remove-startup.ps1

  Chỉ xoá đúng file Nihongo.lnk trong thư mục Startup của người dùng hiện tại,
  không đụng tới bất cứ thứ gì trong project.
#>

$ErrorActionPreference = 'Stop'

$link = Join-Path ([Environment]::GetFolderPath('Startup')) 'Nihongo.lnk'

if (Test-Path $link) {
    Remove-Item $link -Force
    Write-Host "Đã gỡ: $link" -ForegroundColor Green
} else {
    Write-Host "Không tìm thấy shortcut nào để gỡ ($link)." -ForegroundColor Yellow
}
