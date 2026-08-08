/* Lưu tiến độ học vào localStorage.
   Bao gồm: lịch sử điểm bài tập, danh sách từ đánh dấu, và lịch ôn tập
   theo phương pháp Leitner (spaced repetition) đơn giản. */

const Store = (() => {
  const KEY = 'nihongo-app-v1';

  // Số ngày chờ trước lần ôn tiếp theo, theo từng "hộp" Leitner
  const INTERVALS = [0, 1, 2, 4, 7, 15, 30];

  const defaults = () => ({
    srs: {},      // { wordId: { box, due (timestamp), seen, correct } }
    starred: {},  // { wordId: true }
    scores: {},   // { "N5-12-vocab": { best, last, count } }
    // quizBatch: số câu mỗi đợt làm bài (0 = làm hết từ vựng của bài trong một lượt)
    settings: { rate: 0.9, showRomaji: true, voice: '', quizBatch: 15 },
    // Bộ kanji mỗi ngày: date/chars là bộ đã chốt cho hôm nay, shown là ngày đã hiện popup
    daily: { enabled: true, count: 20, level: 'all', date: '', chars: [], shown: '' },
    // Bài mở gần nhất — dùng cho nhắc ôn tập hằng giờ (js/notify.js)
    current: { level: '', lesson: 0, at: 0 }
  });

  let state = load();

  // Chạy sau mỗi lần lưu, để notify.js gửi tiến độ về server cục bộ.
  let afterSave = null;

  /** Bổ sung những khoá còn thiếu để bản lưu cũ vẫn dùng được với bản app mới. */
  function normalize(saved) {
    const d = defaults();
    const settings = Object.assign({}, d.settings, saved.settings || {});
    const daily = Object.assign({}, d.daily, saved.daily || {});
    const current = Object.assign({}, d.current, saved.current || {});
    return Object.assign(d, saved, { settings, daily, current });
  }

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return defaults();
      return normalize(JSON.parse(raw));
    } catch (e) {
      console.warn('Không đọc được dữ liệu đã lưu, dùng mặc định.', e);
      return defaults();
    }
  }

  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Không lưu được tiến độ.', e);
    }
    // Hook không được phép làm hỏng việc lưu, nên nuốt lỗi ở đây.
    if (afterSave) {
      try { afterSave(state); } catch (e) { console.warn('Hook sau khi lưu lỗi.', e); }
    }
  }

  const onSave = fn => { afterSave = fn; };

  /** Mã định danh duy nhất cho một từ / kanji. */
  function wordId(level, lesson, word) {
    return `${level}|${lesson}|${word.h || word.c}`;
  }

  const startOfToday = () => new Date().setHours(0, 0, 0, 0);

  /** Ghi nhận kết quả trả lời một từ, cập nhật hộp Leitner. */
  function review(id, correct) {
    const item = state.srs[id] || { box: 0, due: 0, seen: 0, correct: 0 };
    item.seen++;
    if (correct) {
      item.correct++;
      item.box = Math.min(item.box + 1, INTERVALS.length - 1);
    } else {
      item.box = 0;
    }
    item.due = startOfToday() + INTERVALS[item.box] * 86400000;
    state.srs[id] = item;
    save();
    return item;
  }

  /** Lọc ra những từ đến hạn ôn tập (chưa học cũng tính là đến hạn). */
  function due(list, level, lesson) {
    const now = Date.now();
    return list.filter(w => {
      const it = state.srs[wordId(level, lesson, w)];
      return !it || it.due <= now;
    });
  }

  /** Mức độ thành thạo của một từ: 0..6 */
  function boxOf(id) {
    return state.srs[id] ? state.srs[id].box : 0;
  }

  /** Số lần một từ đã được luyện — dùng để biết đã đụng tới từ nào chưa. */
  const seenOf = id => (state.srs[id] ? state.srs[id].seen : 0);

  function toggleStar(id) {
    if (state.starred[id]) delete state.starred[id];
    else state.starred[id] = true;
    save();
    return !!state.starred[id];
  }

  const isStarred = id => !!state.starred[id];

  function saveScore(key, score, total) {
    const pct = total ? Math.round((score / total) * 100) : 0;
    const rec = state.scores[key] || { best: 0, last: 0, count: 0 };
    rec.last = pct;
    rec.best = Math.max(rec.best, pct);
    rec.count++;
    state.scores[key] = rec;
    save();
    return rec;
  }

  const getScore = key => state.scores[key] || null;

  function setSetting(k, v) {
    state.settings[k] = v;
    save();
  }

  const settings = () => state.settings;

  const daily = () => state.daily;

  function setDaily(patch) {
    Object.assign(state.daily, patch);
    save();
  }

  const current = () => state.current;

  /** Ghi nhận bài vừa mở. Mở lại đúng bài đó thì không lưu lại cho đỡ ghi thừa. */
  function setCurrent(level, lesson) {
    const c = state.current;
    if (c.level === level && c.lesson === lesson) return;
    state.current = { level, lesson, at: Date.now() };
    save();
  }

  /** Thống kê tổng quan hiển thị ở trang chủ. */
  function stats() {
    const ids = Object.keys(state.srs);
    const mastered = ids.filter(id => state.srs[id].box >= 4).length;
    const learning = ids.length - mastered;
    const dueNow = ids.filter(id => state.srs[id].due <= Date.now()).length;
    const scores = Object.values(state.scores);
    const avg = scores.length
      ? Math.round(scores.reduce((s, r) => s + r.best, 0) / scores.length)
      : 0;
    return {
      total: ids.length,
      mastered,
      learning,
      due: dueNow,
      starred: Object.keys(state.starred).length,
      quizzes: scores.length,
      avgBest: avg
    };
  }

  function reset() {
    state = defaults();
    save();
  }

  /* ---------- Xuất / nhập tiến độ để mang sang máy khác ---------- */

  const FORMAT = 'nihongo-progress';

  function exportData() {
    return { app: FORMAT, version: 1, exportedAt: new Date().toISOString(), data: state };
  }

  /**
   * Nhập tiến độ từ file đã xuất.
   * mode 'merge'   : gộp vào tiến độ hiện có, mỗi mục giữ mức thành thạo cao hơn.
   * mode 'replace' : thay thế toàn bộ.
   * Trả về số mục đã nhận để hiển thị cho người dùng.
   */
  function importData(payload, mode) {
    if (!payload || payload.app !== FORMAT || !payload.data || typeof payload.data !== 'object') {
      throw new Error('File không phải bản xuất tiến độ của Nihongo.');
    }
    const src = payload.data;
    if (!src.srs || typeof src.srs !== 'object') {
      throw new Error('File thiếu dữ liệu học tập.');
    }

    if (mode === 'replace') {
      state = normalize(src);
      save();
      return { srs: Object.keys(state.srs).length, scores: Object.keys(state.scores).length };
    }

    let srsCount = 0;
    Object.entries(src.srs).forEach(([id, item]) => {
      if (!item || typeof item.box !== 'number') return;
      const cur = state.srs[id];
      // Giữ bản có mức Leitner cao hơn; bằng nhau thì giữ bản đến hạn muộn hơn
      if (!cur || item.box > cur.box || (item.box === cur.box && (item.due || 0) > (cur.due || 0))) {
        state.srs[id] = item;
      }
      srsCount++;
    });

    Object.assign(state.starred, src.starred || {});

    let scoreCount = 0;
    Object.entries(src.scores || {}).forEach(([key, rec]) => {
      if (!rec) return;
      const cur = state.scores[key];
      state.scores[key] = cur
        ? { best: Math.max(cur.best, rec.best || 0), last: rec.last || 0, count: cur.count + (rec.count || 0) }
        : rec;
      scoreCount++;
    });

    save();
    return { srs: srsCount, scores: scoreCount };
  }

  return {
    wordId, review, due, boxOf, seenOf, toggleStar, isStarred,
    saveScore, getScore, setSetting, settings, daily, setDaily, stats, reset,
    current, setCurrent, onSave,
    exportData, importData,
    raw: () => state
  };
})();
