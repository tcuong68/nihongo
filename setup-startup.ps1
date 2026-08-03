<#
  Tạo shortcut mở app Nihongo mỗi khi đăng nhập Windows.

  Chạy MỘT LẦN trên mỗi máy sau khi clone repo:
      powershell -ExecutionPolicy Bypass -File setup-startup.ps1

  Script tự lấy đường dẫn từ vị trí của chính nó ($PSScriptRoot) nên clone vào
  thư mục nào cũng chạy đúng. Gỡ bằng remove-startup.ps1.
#>

$ErrorActionPreference = 'Stop'

$root   = $PSScriptRoot
$target = Join-Path $root 'index.html'
$startup = [Environment]::GetFolderPath('Startup')
$link    = Join-Path $startup 'Nihongo.lnk'

if (-not (Test-Path $target)) {
    Write-Error "Không tìm thấy '$target'. Hãy đặt script này trong thư mục gốc của project."
    exit 1
}

if (Test-Path $link) {
    Write-Host "Shortcut đã tồn tại, sẽ ghi đè bằng đường dẫn hiện tại." -ForegroundColor Yellow
}

$shell = New-Object -ComObject WScript.Shell
$sc = $shell.CreateShortcut($link)
$sc.TargetPath       = $target
$sc.WorkingDirectory = $root
$sc.Description      = 'Nihongo - hoc tieng Nhat N5/N4'
$sc.Save()

Write-Host ""
Write-Host "Xong." -ForegroundColor Green
Write-Host "  Shortcut : $link"
Write-Host "  Trỏ tới  : $target"
Write-Host ""
Write-Host "App sẽ tự mở bằng trình duyệt mặc định ở lần đăng nhập Windows tiếp theo."
Write-Host "Muốn gỡ thì chạy: powershell -ExecutionPolicy Bypass -File remove-startup.ps1"
