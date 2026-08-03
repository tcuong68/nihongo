/* "Kanji hôm nay" — mỗi ngày chốt một bộ kanji (mặc định 20 chữ) và hiện popup nhắc học.
   Bộ chữ được chọn một lần duy nhất trong ngày và lưu lại, nên mở app bao nhiêu lần
   vẫn thấy đúng bộ đó. Ưu tiên những chữ đang ở mức Leitner thấp (chưa thuộc).

   Nạp sau app.js vì có dùng lại các tiện ích chung: route, app, esc, shuffle, sample,
   kanjiCard, runQuiz, progressBar. */

const Daily = (() => {
  const LESSON = 'kanji';   // "bài" giả cho kanji, không trùng với số bài từ vựng
  const DAYS = ['Chủ nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
  const pad = n => String(n).padStart(2, '0');

  function todayKey(d) {
    d = d || new Date();
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  }

  function todayLabel() {
    const d = new Date();
    return `${DAYS[d.getDay()]}, ${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`;
  }

  function pool() {
    const lv = Store.daily().level;
    if (lv === 'N5') return KANJI.N5;
    if (lv === 'N4') return KANJI.N4;
    return KANJI.ALL;
  }

  const idOf = k => Store.wordId(k.lv, LESSON, k);

  /** Bộ kanji của hôm nay. Sinh một lần rồi lưu, các lần gọi sau trả về đúng bộ đó. */
  function list() {
    const st = Store.daily();
    const today = todayKey();
    const byChar = new Map(pool().map(k => [k.c, k]));

    if (st.date === today) {
      const kept = st.chars.map(c => byChar.get(c)).filter(Boolean);
      if (kept.length) return kept;
    }

    // Xếp theo mức thành thạo tăng dần; trong cùng mức thì thứ tự ngẫu nhiên
    // (sort của JS ổn định nên shuffle trước vẫn giữ được tính ngẫu nhiên)
    const picked = shuffle(pool().slice())
      .sort((a, b) => Store.boxOf(idOf(a)) - Store.boxOf(idOf(b)))
      .slice(0, st.count);

    Store.setDaily({ date: today, chars: picked.map(k => k.c) });
    return picked;
  }

  /** Số chữ trong bộ hôm nay đã đạt mức thuộc (Leitner >= 4). */
  function doneCount(items) {
    return items.filter(k => Store.boxOf(idOf(k)) >= 4).length;
  }

  function gridHtml(items) {
    return `<div class="daily-grid">${items.map((k, i) => {
      const box = Store.boxOf(idOf(k));
      const cls = box >= 4 ? 'done' : box > 0 ? 'learning' : '';
      return `<button class="dk ${cls}" data-i="${i}" title="${esc(k.m)}">
        <b>${esc(k.c)}</b><span>${esc(k.m)}</span></button>`;
    }).join('')}</div>`;
  }

  /** Gắn sự kiện cho lưới kanji: bấm một chữ thì hiện chi tiết và đọc lên. */
  function wireGrid(root, items, detail) {
    root.querySelectorAll('.dk').forEach(btn => {
      btn.addEventListener('click', () => {
        root.querySelectorAll('.dk').forEach(b => b.classList.remove('on'));
        btn.classList.add('on');
        const k = items[Number(btn.dataset.i)];
        detail.innerHTML = kanjiCard(k);
        Speech.speak(k.c);
      });
    });
  }

  /* ---------- Popup ---------- */

  let openBox = null;

  function close() {
    if (!openBox) return;
    openBox.remove();
    openBox = null;
    document.removeEventListener('keydown', onEsc);
  }

  const onEsc = e => { if (e.key === 'Escape') close(); };

  function open() {
    close();
    const items = list();
    const done = doneCount(items);

    const bg = document.createElement('div');
    bg.className = 'modal-bg';
    bg.innerHTML = `
      <div class="modal" role="dialog" aria-label="Kanji hôm nay">
        <header class="modal-head">
          <div>
            <h3>🗓️ ${items.length} kanji hôm nay</h3>
            <p>${esc(todayLabel())} · đã thuộc ${done}/${items.length}</p>
          </div>
          <button class="x" data-close title="Đóng">×</button>
        </header>
        <div class="modal-body">
          ${gridHtml(items)}
          <div class="daily-detail" id="dd">
            <p class="note">Bấm vào một chữ để nghe cách đọc và xem âm On/Kun, số nét, từ ví dụ.</p>
          </div>
        </div>
        <footer class="modal-foot">
          <label class="chk"><input type="checkbox" id="dis"> Không nhắc tự động nữa</label>
          <span class="spacer"></span>
          <button data-close>Để sau</button>
          <a class="btn primary" href="#/daily" data-close>Học ngay →</a>
        </footer>
      </div>`;

    document.body.appendChild(bg);
    openBox = bg;
    document.addEventListener('keydown', onEsc);

    bg.addEventListener('click', e => {
      if (e.target === bg || e.target.closest('[data-close]')) close();
    });
    bg.querySelector('#dis').addEventListener('change', e => {
      Store.setDaily({ enabled: !e.target.checked });
    });
    wireGrid(bg, items, bg.querySelector('#dd'));
  }

  /** Hiện popup tối đa một lần mỗi ngày, nếu người dùng chưa tắt nhắc. */
  function maybeOpen() {
    const st = Store.daily();
    const today = todayKey();
    if (!st.enabled || st.shown === today) return;
    Store.setDaily({ shown: today });
    open();
  }

  /* ---------- Trang đầy đủ ---------- */

  route(/^\/daily$/, () => {
    const items = list();
    const st = Store.daily();
    const done = doneCount(items);

    app().innerHTML = `
      <div class="crumb"><a href="#/home">Trang chủ</a> › Kanji hôm nay</div>
      <h2>🗓️ ${items.length} kanji hôm nay</h2>
      <p class="note">${esc(todayLabel())} — bộ chữ này giữ nguyên đến hết ngày, mai sẽ tự đổi.
        Hệ thống ưu tiên những chữ bạn chưa thuộc.</p>

      <div class="daily-progress">
        ${progressBar(Math.round((done / items.length) * 100))}
        <span>Đã thuộc ${done}/${items.length}</span>
      </div>

      <div id="dbrowse">
        ${gridHtml(items)}
        <div class="daily-detail" id="dd">
          <p class="note">Bấm vào một chữ để nghe cách đọc và xem chi tiết.</p>
        </div>

        <div class="toolbar">
          <button id="quiz" class="primary">✍️ Kiểm tra ${items.length} chữ này</button>
          <button id="read">▶️ Đọc lần lượt</button>
          <label class="chk">Phạm vi
            <select id="lv">
              <option value="all" ${st.level === 'all' ? 'selected' : ''}>Cả N5 và N4</option>
              <option value="N5" ${st.level === 'N5' ? 'selected' : ''}>Chỉ N5</option>
              <option value="N4" ${st.level === 'N4' ? 'selected' : ''}>Chỉ N4</option>
            </select>
          </label>
        </div>
      </div>
      <div id="dquiz"></div>`;

    const detail = app().querySelector('#dd');
    wireGrid(app(), items, detail);

    // Vào bài kiểm tra thì ẩn lưới đi để quiz chiếm trọn màn hình, khỏi phải cuộn
    app().querySelector('#quiz').addEventListener('click', () => {
      const browse = app().querySelector('#dbrowse');
      const holder = app().querySelector('#dquiz');
      browse.hidden = true;
      holder.innerHTML = `<p class="note"><a href="#" id="back">← Quay lại danh sách</a></p>
        <div id="qbox"></div>`;
      holder.querySelector('#back').addEventListener('click', e => {
        e.preventDefault();
        Speech.stop();
        navigate();
      });
      runQuiz(holder.querySelector('#qbox'), questions(items), `daily-${todayKey()}`);
    });

    app().querySelector('#read').addEventListener('click', function () {
      const btns = app().querySelectorAll('.dk');
      let i = 0;
      this.disabled = true;
      const step = () => {
        btns.forEach(b => b.classList.remove('on'));
        if (i >= items.length) { this.disabled = false; return; }
        btns[i].classList.add('on');
        detail.innerHTML = kanjiCard(items[i]);
        Speech.speak(items[i].c);
        i++;
        setTimeout(step, 2200);
      };
      step();
    });

    // Đổi phạm vi thì chốt lại bộ chữ của hôm nay theo phạm vi mới
    app().querySelector('#lv').addEventListener('change', e => {
      Store.setDaily({ level: e.target.value, date: '', chars: [] });
      navigate();
    });
  });

  /** Câu hỏi trắc nghiệm: nhìn kanji, chọn nghĩa đúng. */
  function questions(items) {
    return shuffle(items).map(k => {
      const others = sample(KANJI.ALL.filter(x => x.m !== k.m), 3);
      const opts = shuffle([k, ...others]);
      return {
        type: 'choice',
        word: { h: k.c, k: k.c, m: k.m },
        id: idOf(k),
        prompt: k.c,
        sub: `${k.lv} · ${k.s} nét`,
        audio: k.c,
        choices: opts.map(o => o.m),
        answer: opts.indexOf(k)
      };
    });
  }

  window.addEventListener('DOMContentLoaded', maybeOpen);

  return { list, open, close, maybeOpen, todayKey, doneCount, idOf };
})();
