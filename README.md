# Nihongo — Học tiếng Nhật N5 & N4

Web app chạy hoàn toàn trên máy (không cần cài đặt, không cần internet, không cần build),
bám theo giáo trình **Minna no Nihongo I & II**.

## Chạy ứng dụng

**Cách 1 — nhanh nhất:** nháy đúp vào `index.html`, trình duyệt sẽ mở ngay.

**Cách 2 — chạy qua web server cục bộ** (khuyến nghị nếu muốn dùng ổn định trên mọi trình duyệt):

```powershell
python -m http.server 8000
```

rồi mở http://localhost:8000

> Nên dùng **Chrome** hoặc **Edge** để có phần phát âm tiếng Nhật.

## Có gì trong app

| Mục | Nội dung |
|---|---|
| **Từ vựng** | 1.528 từ chia theo 50 bài (N5 bài 1–25: 778 từ, N4 bài 26–50: 750 từ), có kana, kanji, romaji tự sinh, nghĩa tiếng Việt và loại từ |
| **Kanji** | 263 chữ (N5: 103, N4: 160) kèm âm On/Kun, số nét và từ ví dụ. Tab Kanji trong mỗi bài tự lọc ra những chữ xuất hiện trong bài đó |
| **Ngữ pháp** | 126 mẫu câu với 149 câu ví dụ có dịch nghĩa, đủ cho cả 50 bài |
| **Luyện nghe** | 3 chế độ: nghe đoán từ, nghe chép chính tả (gõ lại bằng kana hoặc romaji), nghe câu mẫu |
| **Bài tập** | 5 dạng: Nhật→Việt, Việt→Nhật, Nghe→chọn nghĩa, Điền từ, và trắc nghiệm ngữ pháp |
| **Thẻ ghi nhớ** | Flashcard lật thẻ, tự đánh giá "Đã thuộc / Chưa thuộc" |
| **Ôn tập thông minh** | Lịch lặp lại ngắt quãng (Leitner): trả lời đúng thì giãn khoảng cách ôn (1→2→4→7→15→30 ngày), sai thì đưa từ về đầu |
| **Kanji hôm nay** | Mỗi ngày chốt một bộ 20 kanji và tự hiện popup nhắc một lần. Ưu tiên những chữ bạn chưa thuộc, kèm bài kiểm tra nhanh |

Tiến độ, điểm số và từ đánh dấu sao được lưu trong `localStorage` của trình duyệt —
không gửi đi đâu cả. Xoá tiến độ trong mục **Cài đặt**.

## Bật giọng đọc tiếng Nhật

App dùng Web Speech API có sẵn của trình duyệt nên không cần file audio.
Nếu chưa nghe được tiếng, cài giọng tiếng Nhật cho Windows:

**Cài đặt → Thời gian & ngôn ngữ → Giọng nói → Quản lý giọng nói → Thêm giọng nói → 日本語 (Japanese)**

Sau đó tải lại trang. Vào **Cài đặt** trong app để chọn giọng cụ thể và chỉnh tốc độ đọc (0.5×–1.2×).

## Kanji hôm nay

Mở app lần đầu trong ngày sẽ có popup hiện 20 kanji của hôm nay. Cách hoạt động:

- Bộ chữ được **chốt một lần mỗi ngày** rồi lưu lại, nên mở app bao nhiêu lần vẫn thấy đúng bộ đó;
  hôm sau tự đổi bộ mới.
- Chữ được chọn theo mức thành thạo tăng dần, tức là **ưu tiên chữ bạn chưa thuộc**.
  Chữ đang học viền cam, chữ đã thuộc viền xanh.
- Popup chỉ tự hiện **một lần mỗi ngày**. Muốn xem lại bất cứ lúc nào thì bấm **🗓️ Hôm nay** trên thanh menu.
- Tick *"Không nhắc tự động nữa"* để tắt popup; bật lại trong **Cài đặt**.

Trong **Cài đặt** có thể đổi số chữ mỗi ngày (5–50), giới hạn phạm vi (chỉ N5, chỉ N4, hoặc cả hai),
và chốt lại một bộ khác cho hôm nay.

> Đây là popup trong ứng dụng, không phải thông báo hệ thống — nó xuất hiện khi bạn mở app,
> chứ không tự bật lên khi trình duyệt đang đóng.

## Tự mở app

Hai cách, chạy độc lập nhau — dùng một hoặc cả hai đều được.

### Khi đăng nhập Windows

```powershell
powershell -ExecutionPolicy Bypass -File setup-startup.ps1
```

Script tạo một shortcut trong thư mục Startup của bạn, trỏ tới `index.html` trong chính
thư mục đang chứa script. Gỡ bằng `remove-startup.ps1`.

Lưu ý: shortcut này chỉ kích hoạt **lúc đăng nhập**. Nếu bạn hay để máy bật liên tục nhiều
ngày không tắt thì nó gần như không chạy lần nào — trường hợp đó dùng cách bên dưới.

### Vào giờ cố định mỗi ngày

```powershell
powershell -ExecutionPolicy Bypass -File setup-daily.ps1
powershell -ExecutionPolicy Bypass -File setup-daily.ps1 -At 21:30
```

Script tạo một scheduled task tên `NihongoDailyOpen` mở app hằng ngày, mặc định lúc **8:00**;
đổi giờ bằng tham số `-At` dạng 24h. Chạy theo giờ nên không phụ thuộc việc đăng nhập.
Gỡ bằng `remove-daily.ps1`.

Nếu đúng giờ đó máy đang tắt hoặc ngủ, task sẽ chạy bù khi máy hoạt động lại thay vì bỏ qua
luôn ngày hôm đó. Chạy lại script bất cứ lúc nào để đổi giờ, hoặc để cập nhật đường dẫn sau
khi bạn di chuyển thư mục project. Không cần quyền admin.

Thử ngay mà không đợi tới giờ:

```powershell
Start-ScheduledTask -TaskName NihongoDailyOpen
```

---

Cả hai đều cần chạy **một lần trên mỗi máy** sau khi clone, và chỉ dùng được trên Windows.
Không thể commit sẵn file `.lnk` hay scheduled task vào repo vì chúng nhúng cứng đường dẫn
tuyệt đối và nằm ngoài project (thư mục Startup là
`%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup`), nên chỉ pull repo về thì không có
gì tự chạy.

## Dùng trên nhiều máy

Mã nguồn đi theo git, còn **tiến độ học thì không** — lịch ôn tập, điểm số và từ đánh dấu sao
nằm trong `localStorage` của từng trình duyệt. Clone repo sang máy khác là bắt đầu lại từ đầu.

Để chuyển tiến độ, vào **Cài đặt → Chuyển tiến độ sang máy khác**:

1. Máy cũ: bấm **Xuất ra file .json**
2. Chép file sang máy mới (USB, cloud, email...)
3. Máy mới: chọn chế độ rồi bấm **Chọn file để nhập**
   - **Gộp vào tiến độ hiện có** (mặc định): mỗi mục giữ mức thành thạo cao hơn giữa hai bên —
     hợp khi bạn học rải rác trên cả hai máy
   - **Thay thế toàn bộ**: xoá tiến độ trên máy hiện tại và dùng hoàn toàn dữ liệu trong file

File xuất ra đã được `.gitignore` bỏ qua để bạn không vô tình commit dữ liệu cá nhân lên repo.

## Cấu trúc thư mục

```
index.html              trang chính, nạp toàn bộ script
css/style.css           giao diện
js/kana.js              chuyển kana → romaji, so khớp đáp án của người học
js/store.js             lưu tiến độ + thuật toán Leitner
js/speech.js            phát âm qua Web Speech API
js/app.js               định tuyến (hash router) và toàn bộ màn hình
js/daily.js             popup "Kanji hôm nay" và trang học bộ chữ trong ngày
setup-startup.ps1       tạo shortcut tự mở app khi đăng nhập Windows
remove-startup.ps1      gỡ shortcut đó
setup-daily.ps1         tạo scheduled task tự mở app vào giờ cố định mỗi ngày
remove-daily.ps1        gỡ scheduled task đó
js/data/vocab-n5.js     từ vựng bài 1–25
js/data/vocab-n4.js     từ vựng bài 26–50
js/data/kanji.js        bảng kanji N5 + N4
js/data/grammar.js      ngữ pháp và câu ví dụ
```

## Tự thêm từ vựng

Mở `js/data/vocab-n5.js` (hoặc `vocab-n4.js`) và thêm vào mảng `words` của bài tương ứng:

```js
{ h:'つくえ', k:'机', m:'cái bàn', t:'n' }
```

- `h` — cách đọc bằng kana (**bắt buộc**)
- `k` — chữ Hán, bỏ trống nếu từ không có kanji
- `m` — nghĩa tiếng Việt (**bắt buộc**)
- `t` — loại từ: `n` danh từ, `v` động từ, `ai` tính từ đuôi い, `na` tính từ đuôi な,
  `adv` phó từ, `num` số/lượng từ, `pron` đại từ, `exp` mẫu câu

Romaji được sinh tự động từ `h` nên không cần nhập tay. Lưu file rồi tải lại trang là xong —
từ mới sẽ tự xuất hiện trong bảng từ vựng, flashcard, bài tập và phần luyện nghe.

Thêm ngữ pháp thì sửa `js/data/grammar.js` theo cùng cách; mọi câu ví dụ thêm vào
sẽ tự động trở thành ngữ liệu cho tab **Luyện nghe** và dạng bài **trắc nghiệm ngữ pháp**.

## Ghi chú về dữ liệu

Trung bình khoảng 31 từ/bài ở N5 và 30 từ/bài ở N4. Danh sách bám theo chủ đề và ngữ pháp
của từng bài trong giáo trình, ưu tiên những từ thực sự thông dụng ở trình độ tương ứng,
nên có thể lệch đôi chút so với bảng từ mới in trong sách. Bạn có thể bổ sung hoặc chỉnh sửa
bất cứ lúc nào theo hướng dẫn ở trên.
