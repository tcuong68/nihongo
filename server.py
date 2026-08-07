#!/usr/bin/env python3
"""Server cục bộ cho app Nihongo.

Làm hai việc:
  1. Phục vụ toàn bộ thư mục project qua http://127.0.0.1:8765/
     (app cần chạy qua http chứ không phải file:// thì mới gửi được tiến độ về đây).
  2. Nhận POST /api/progress từ app và ghi ra progress-snapshot.json.

Snapshot đó là cầu nối duy nhất giữa trình duyệt và Windows: notify-review.ps1 đọc
file này để biết bài đang học và từ nào đến hạn ôn, nhờ vậy vẫn nhắc được kể cả khi
đã đóng trình duyệt.

Chạy tay:  python server.py
Chạy nền:  đã có scheduled task do setup-notify.ps1 tạo (dùng pythonw.exe).

Chỉ lắng nghe trên 127.0.0.1 nên máy khác trong mạng LAN không truy cập được.
"""

import json
import os
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

ROOT = os.path.dirname(os.path.abspath(__file__))
SNAPSHOT = os.path.join(ROOT, 'progress-snapshot.json')

HOST = '127.0.0.1'
PORT = 8765

# Snapshot chỉ gồm từ vựng của một bài nên rất nhỏ; đặt trần để một request hỏng
# không thể nuốt hết bộ nhớ.
MAX_BODY = 2 * 1024 * 1024


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def do_POST(self):
        if self.path.rstrip('/') != '/api/progress':
            self.send_error(404, 'Khong co endpoint nay')
            return

        try:
            length = int(self.headers.get('Content-Length') or 0)
        except ValueError:
            length = 0
        if length <= 0 or length > MAX_BODY:
            self.send_error(400, 'Body rong hoac qua lon')
            return

        try:
            payload = json.loads(self.rfile.read(length).decode('utf-8'))
        except (UnicodeDecodeError, json.JSONDecodeError):
            self.send_error(400, 'JSON khong hop le')
            return

        # Ghi ra file tạm rồi đổi tên: notify-review.ps1 có thể đọc bất cứ lúc nào,
        # cách này đảm bảo nó không bao giờ đọc phải file ghi dở.
        tmp = SNAPSHOT + '.tmp'
        with open(tmp, 'w', encoding='utf-8') as f:
            json.dump(payload, f, ensure_ascii=False, indent=1)
        os.replace(tmp, SNAPSHOT)

        body = b'{"ok":true}'
        self.send_response(200)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def end_headers(self):
        # Sửa file js/data rồi tải lại trang là thấy ngay, khỏi phải Ctrl+F5.
        self.send_header('Cache-Control', 'no-store')
        super().end_headers()

    def log_message(self, fmt, *args):
        pass  # chạy nền bằng pythonw nên không có chỗ nào để in ra


def main():
    os.chdir(ROOT)
    server = ThreadingHTTPServer((HOST, PORT), Handler)
    print(f'Nihongo: http://{HOST}:{PORT}/   (Ctrl+C để dừng)')
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print('\nĐã dừng.')
    finally:
        server.server_close()


if __name__ == '__main__':
    main()
