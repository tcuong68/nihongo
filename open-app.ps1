<#
  Mở app Nihongo, ưu tiên chạy qua server cục bộ.

      powershell -ExecutionPolicy Bypass -File open-app.ps1

  Có Python và server.py thì bật server (nếu chưa chạy) rồi mở http://127.0.0.1:8765/ —
  chỉ ở dạng này app mới gửi được tiến độ sang cho phần nhắc ôn tập của Windows.
  Không có Python thì quay về mở thẳng index.html, app vẫn dùng bình thường,
  chỉ là không có nhắc ôn tập.

  Đây là thứ mà scheduled task NihongoDailyOpen gọi (xem setup-daily.ps1).
#>

$ErrorActionPreference = 'Stop'

$root   = $PSScriptRoot
$server = Join-Path $root 'server.py'
$page   = Join-Path $root 'index.html'
$port   = 8765
$url    = "http://127.0.0.1:$port/"

function Test-ServerUp {
    $c = Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue
    return [bool]$c
}

$py = Get-Command pythonw -ErrorAction SilentlyContinue
if (-not $py) { $py = Get-Command python -ErrorAction SilentlyContinue }

if ($py -and (Test-Path $server)) {
    if (-not (Test-ServerUp)) {
        Start-Process -FilePath $py.Source -ArgumentList "`"$server`"" -WorkingDirectory $root -WindowStyle Hidden
        # Chờ server mở cổng, tối đa ~5 giây.
        for ($i = 0; $i -lt 25 -and -not (Test-ServerUp); $i++) { Start-Sleep -Milliseconds 200 }
    }
    if (Test-ServerUp) {
        Start-Process $url
        exit 0
    }
    Write-Host "Server không lên được, mở thẳng file thay thế." -ForegroundColor Yellow
}

Start-Process $page
