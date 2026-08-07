/* Gửi tiến độ của bài đang học về server cục bộ (server.py) để Windows nhắc ôn tập.

   App không tự bắn thông báo hệ thống được: Chromium chặn Notification API trên
   file://, và dù có chạy được thì đóng trình duyệt là hết nhắc. Nên phần hiển thị
   giao cho notify-review.ps1 + scheduled task, còn file này chỉ lo đẩy dữ liệu ra.

   Snapshot mang theo mốc `due` của từng từ chứ không phải danh sách "đang đến hạn",
   nhờ vậy phía PowerShell tự tính lại được vào mọi thời điểm — snapshot cũ vài ngày
   vẫn cho ra kết quả đúng.

   Nạp sau app.js vì dùng lessonData(). */

const Notify = (() => {
  const ENDPOINT = '/api/progress';
  const FORMAT = 'nihongo-review-snapshot';

  // Gộp nhiều lần lưu liên tiếp (làm quiz bắn ra rất nhiều) thành một request.
  const DEBOUNCE = 1500;
  let timer = null;

  /** Chỉ chạy khi app được phục vụ qua http://127.0.0.1:8765; mở bằng file:// thì bỏ qua. */
  const available = () => location.protocol === 'http:' || location.protocol === 'https:';

  function snapshot() {
    const cur = Store.current();
    if (!cur || !cur.level) return null;

    const d = lessonData(cur.level, cur.lesson);
    if (!d) return null;

    const srs = Store.raw().srs;
    const words = d.words.map(w => {
      const it = srs[Store.wordId(cur.level, cur.lesson, w)];
      return {
        h: w.h,
        k: w.k || '',
        m: w.m,
        // Chưa học lần nào thì box 0 / due 0, tức là luôn được tính là đến hạn —
        // giống hệt cách Store.due() xử lý.
        box: it ? it.box : 0,
        due: it ? it.due : 0
      };
    });

    return {
      app: FORMAT,
      version: 1,
      updatedAt: new Date().toISOString(),
      lesson: { level: cur.level, n: cur.lesson, title: d.title, titleVi: d.titleVi },
      words
    };
  }

  function push() {
    if (!available()) return;
    const snap = snapshot();
    if (!snap) return;
    fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(snap)
    }).catch(() => {
      // Server chưa chạy — không sao, lần lưu sau sẽ thử lại.
    });
  }

  function schedule() {
    if (!available()) return;
    clearTimeout(timer);
    timer = setTimeout(push, DEBOUNCE);
  }

  Store.onSave(schedule);
  window.addEventListener('DOMContentLoaded', push);

  return { push, snapshot, available };
})();
