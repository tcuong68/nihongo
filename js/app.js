/* ứng dụng học tiếng Nhật N5/N4 theo Minna no Nihongo
   Điều hướng bằng hash (#/...), toàn bộ dữ liệu nằm trong bộ nhớ trình duyệt. */

/* ---------- Tiện ích chung ---------- */

const $ = sel => document.querySelector(sel);
const app = () => $('#app');

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const sample = (arr, n) => shuffle(arr).slice(0, n);

/* ---------- Truy cập dữ liệu ---------- */

const LEVELS = {
  N5: { data: VOCAB_N5, book: 'Minna no Nihongo I', from: 1, to: 25 },
  N4: { data: VOCAB_N4, book: 'Minna no Nihongo II', from: 26, to: 50 }
};

const lessonsOf = level => Object.keys(LEVELS[level].data).map(Number).sort((a, b) => a - b);
const lessonData = (level, n) => LEVELS[level].data[n];

function allWords(level) {
  const out = [];
  lessonsOf(level).forEach(n => {
    lessonData(level, n).words.forEach(w => out.push({ ...w, lesson: n, level }));
  });
  return out;
}

/** Kanji xuất hiện trong từ vựng của một bài, đối chiếu với bảng kanji đã có. */
function kanjiOfLesson(level, n) {
  const chars = new Set();
  lessonData(level, n).words.forEach(w => {
    (w.k || '').split('').forEach(c => { if (/[一-鿿]/.test(c)) chars.add(c); });
  });
  const table = KANJI.N5.concat(KANJI.N4);
  return table.filter(k => chars.has(k.c));
}

/* ---------- Thành phần dùng lại ---------- */

function ruby(word) {
  // Hiện chữ Hán kèm kana nhỏ phía trên nếu từ có kanji
  if (word.k && word.k !== word.h) {
    return `<span class="ruby"><span class="rt">${esc(word.h)}</span>${esc(word.k)}</span>`;
  }
  return esc(word.h);
}

const romajiOf = w => kanaToRomaji(w.h);

function speakBtn(text, cls) {
  return `<button class="speak ${cls || ''}" data-speak="${esc(text)}" title="Nghe phát âm">🔊</button>`;
}

function levelBadge(level) {
  return `<span class="badge badge-${level.toLowerCase()}">${level}</span>`;
}

function progressBar(pct) {
  return `<div class="bar"><div class="bar-fill" style="width:${pct}%"></div></div>`;
}

/** Tỉ lệ thành thạo của một bài: trung bình box Leitner / 6 */
function lessonProgress(level, n) {
  const words = lessonData(level, n).words;
  if (!words.length) return 0;
  const sum = words.reduce((s, w) => s + Store.boxOf(Store.wordId(level, n, w)), 0);
  return Math.round((sum / (words.length * 6)) * 100);
}

/** Tải một object xuống máy dưới dạng file .json. */
function downloadJson(obj, filename) {
  const blob = new Blob([JSON.stringify(obj, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

/** Dòng nhắc bộ kanji hôm nay hiển thị ở trang chủ. */
function dailyTeaser() {
  const items = Daily.list();
  const done = Daily.doneCount(items);
  return done >= items.length
    ? `Đã thuộc cả ${items.length} kanji hôm nay — xem lại`
    : `Kanji hôm nay: ${done}/${items.length} chữ đã thuộc`;
}

/* ---------- Router ---------- */

const routes = [];
const route = (re, fn) => routes.push({ re, fn });

function navigate() {
  const hash = location.hash.replace(/^#\/?/, '');
  const parts = hash.split('/').filter(Boolean);
  const path = '/' + parts.join('/');
  for (const r of routes) {
    const m = path.match(r.re);
    if (m) {
      Speech.stop();
      app().innerHTML = '';
      r.fn(...m.slice(1));
      window.scrollTo(0, 0);
      highlightNav(parts[0] || 'home');
      return;
    }
  }
  location.hash = '#/home';
}

function highlightNav(section) {
  document.querySelectorAll('.nav a').forEach(a => {
    a.classList.toggle('active', a.dataset.section === section);
  });
}

/* ---------- Trang chủ ---------- */

route(/^\/(home)?$/, () => {
  const s = Store.stats();
  app().innerHTML = `
    <section class="hero">
      <h1>日本語を勉強しましょう</h1>
      <p>Học tiếng Nhật N5 &amp; N4 theo giáo trình Minna no Nihongo — từ vựng, kanji, luyện nghe và bài tập theo từng bài.</p>
    </section>

    <div class="stats">
      <div class="stat"><b>${s.total}</b><span>mục đã học</span></div>
      <div class="stat"><b>${s.mastered}</b><span>đã thuộc</span></div>
      <div class="stat"><b>${s.due}</b><span>cần ôn hôm nay</span></div>
      <div class="stat"><b>${s.avgBest}%</b><span>điểm trung bình</span></div>
    </div>

    <a class="cta" href="#/daily">🗓️ ${dailyTeaser()}</a>
    ${s.due > 0 ? `<a class="cta cta-alt" href="#/review">🔁 Ôn tập ${s.due} mục đến hạn hôm nay</a>` : ''}

    <div class="cards">
      <a class="card level-card n5" href="#/level/N5">
        <div class="card-top">${levelBadge('N5')}<span class="sub">Minna no Nihongo I</span></div>
        <h3>Bài 1 – 25</h3>
        <p>Sơ cấp: bảng chữ, mẫu câu cơ bản, ${allWords('N5').length} từ vựng, ${KANJI.N5.length} kanji.</p>
      </a>
      <a class="card level-card n4" href="#/level/N4">
        <div class="card-top">${levelBadge('N4')}<span class="sub">Minna no Nihongo II</span></div>
        <h3>Bài 26 – 50</h3>
        <p>Sơ trung cấp: thể khả năng, bị động, sai khiến, kính ngữ. ${allWords('N4').length} từ vựng, ${KANJI.N4.length} kanji.</p>
      </a>
      <a class="card" href="#/kanji/N5">
        <div class="card-top">📖<span class="sub">Tra cứu</span></div>
        <h3>Bảng Kanji</h3>
        <p>Toàn bộ kanji N5 và N4 kèm âm On, âm Kun, số nét và từ ví dụ.</p>
      </a>
      <a class="card" href="#/review">
        <div class="card-top">🔁<span class="sub">Spaced repetition</span></div>
        <h3>Ôn tập thông minh</h3>
        <p>Hệ thống tự chọn những từ bạn sắp quên để nhắc lại đúng lúc.</p>
      </a>
      <a class="card" href="#/daily">
        <div class="card-top">🗓️<span class="sub">Mỗi ngày một bộ</span></div>
        <h3>Kanji hôm nay</h3>
        <p>${Store.daily().count} chữ được chốt mỗi sáng, ưu tiên chữ bạn chưa thuộc. Popup tự nhắc một lần mỗi ngày.</p>
      </a>
    </div>`;
});

/* ---------- Danh sách bài ---------- */

route(/^\/level\/(N5|N4)$/, level => {
  const L = LEVELS[level];
  const items = lessonsOf(level).map(n => {
    const d = lessonData(level, n);
    const pct = lessonProgress(level, n);
    return `<a class="lesson-row" href="#/lesson/${level}/${n}">
      <div class="lesson-no">${n}</div>
      <div class="lesson-info">
        <h4>${esc(d.title)}</h4>
        <p>${esc(d.titleVi)} · ${d.words.length} từ</p>
        ${progressBar(pct)}
      </div>
      <div class="lesson-pct">${pct}%</div>
    </a>`;
  }).join('');

  app().innerHTML = `
    <div class="crumb"><a href="#/home">Trang chủ</a> › ${level}</div>
    <h2>${levelBadge(level)} ${esc(L.book)} — Bài ${L.from}–${L.to}</h2>
    <div class="lesson-list">${items}</div>`;
});

/* ---------- Chi tiết một bài ---------- */

const TABS = [
  ['vocab', '📚 Từ vựng'],
  ['kanji', '🈶 Kanji'],
  ['grammar', '📝 Ngữ pháp'],
  ['listen', '🎧 Luyện nghe'],
  ['quiz', '✍️ Bài tập']
];

route(/^\/lesson\/(N5|N4)\/(\d+)(?:\/(\w+))?$/, (level, nStr, tab) => {
  const n = Number(nStr);
  const d = lessonData(level, n);
  if (!d) { location.hash = `#/level/${level}`; return; }
  tab = tab || 'vocab';

  // Bài mở gần nhất chính là "bài đang học" mà nhắc ôn tập hằng giờ sẽ bám theo.
  Store.setCurrent(level, n);

  const ls = lessonsOf(level);
  const idx = ls.indexOf(n);
  const prev = idx > 0 ? ls[idx - 1] : null;
  const next = idx < ls.length - 1 ? ls[idx + 1] : null;

  app().innerHTML = `
    <div class="crumb"><a href="#/home">Trang chủ</a> › <a href="#/level/${level}">${level}</a> › Bài ${n}</div>
    <header class="lesson-head">
      <h2>Bài ${n} — ${esc(d.title)}</h2>
      <p>${esc(d.titleVi)}</p>
    </header>
    <nav class="tabs">
      ${TABS.map(([id, label]) =>
        `<a href="#/lesson/${level}/${n}/${id}" class="${id === tab ? 'on' : ''}">${label}</a>`).join('')}
    </nav>
    <div id="tab-body"></div>
    <div class="pager">
      ${prev ? `<a href="#/lesson/${level}/${prev}/${tab}">← Bài ${prev}</a>` : '<span></span>'}
      ${next ? `<a href="#/lesson/${level}/${next}/${tab}">Bài ${next} →</a>` : '<span></span>'}
    </div>`;

  const body = $('#tab-body');
  ({ vocab: renderVocab, kanji: renderKanji, grammar: renderGrammar,
     listen: renderListen, quiz: renderQuiz }[tab] || renderVocab)(body, level, n);
});

/* ---------- Tab: Từ vựng ---------- */

function renderVocab(box, level, n) {
  const words = lessonData(level, n).words;
  box.innerHTML = `
    <div class="toolbar">
      <button id="flash">🃏 Học bằng thẻ ghi nhớ</button>
      <button id="play-all">▶️ Đọc toàn bộ</button>
      <label class="chk"><input type="checkbox" id="romaji" ${Store.settings().showRomaji ? 'checked' : ''}> Hiện romaji</label>
    </div>
    <table class="vocab">
      <thead><tr><th>Từ</th><th>Kanji</th><th class="rj">Romaji</th><th>Nghĩa</th><th></th></tr></thead>
      <tbody>${words.map((w, i) => {
        const id = Store.wordId(level, n, w);
        return `<tr data-i="${i}">
          <td class="jp">${esc(w.h)}</td>
          <td class="kj">${esc(w.k || '')}</td>
          <td class="rj">${esc(romajiOf(w))}</td>
          <td>${esc(w.m)}${w.t ? ` <em class="pos">${esc(w.t)}</em>` : ''}</td>
          <td class="acts">
            ${speakBtn(w.h)}
            <button class="star ${Store.isStarred(id) ? 'on' : ''}" data-star="${esc(id)}" title="Đánh dấu">★</button>
          </td>
        </tr>`;
      }).join('')}</tbody>
    </table>`;

  const applyRomaji = () => box.classList.toggle('hide-romaji', !Store.settings().showRomaji);
  applyRomaji();

  box.querySelector('#romaji').addEventListener('change', e => {
    Store.setSetting('showRomaji', e.target.checked);
    applyRomaji();
  });

  box.querySelector('#play-all').addEventListener('click', function () {
    let i = 0;
    const rows = box.querySelectorAll('tbody tr');
    const step = () => {
      rows.forEach(r => r.classList.remove('reading'));
      if (i >= words.length) { this.textContent = '▶️ Đọc toàn bộ'; return; }
      rows[i].classList.add('reading');
      rows[i].scrollIntoView({ block: 'center', behavior: 'smooth' });
      Speech.speak(words[i].h);
      i++;
      setTimeout(step, 1800);
    };
    this.textContent = '⏳ Đang đọc...';
    step();
  });

  box.querySelector('#flash').addEventListener('click', () => flashcards(box, level, n, words));
}

/* ---------- Thẻ ghi nhớ (flashcard) ---------- */

function flashcards(box, level, n, words) {
  let deck = shuffle(Store.due(words, level, n));
  if (!deck.length) deck = shuffle(words);
  let i = 0, flipped = false;

  function draw() {
    if (i >= deck.length) {
      box.innerHTML = `<div class="done">
        <h3>🎉 Xong ${deck.length} thẻ!</h3>
        <p>Những từ bạn chọn "Chưa thuộc" sẽ được nhắc lại sớm hơn.</p>
        <button id="again">Học lại</button>
        <a class="btn" href="#/lesson/${level}/${n}/quiz">Làm bài tập →</a>
      </div>`;
      box.querySelector('#again').addEventListener('click', () => flashcards(box, level, n, words));
      return;
    }
    const w = deck[i];
    box.innerHTML = `
      <div class="flash-wrap">
        <div class="flash-meta">Thẻ ${i + 1}/${deck.length} · Bài ${n}</div>
        <div class="flash ${flipped ? 'flipped' : ''}" id="card">
          <div class="face front">
            <div class="big">${esc(w.k || w.h)}</div>
            ${w.k && w.k !== w.h ? `<div class="mid">${esc(w.h)}</div>` : ''}
            <div class="hint">Nhấn vào thẻ để xem nghĩa</div>
          </div>
          <div class="face back">
            <div class="mid">${esc(w.h)} · ${esc(romajiOf(w))}</div>
            <div class="big vi">${esc(w.m)}</div>
          </div>
        </div>
        <div class="flash-acts">
          ${speakBtn(w.h, 'big-speak')}
          <button id="bad" class="bad">Chưa thuộc</button>
          <button id="good" class="good">Đã thuộc</button>
        </div>
      </div>`;

    box.querySelector('#card').addEventListener('click', () => { flipped = !flipped; draw(); });
    const answer = ok => {
      Store.review(Store.wordId(level, n, w), ok);
      i++; flipped = false; draw();
    };
    box.querySelector('#good').addEventListener('click', () => answer(true));
    box.querySelector('#bad').addEventListener('click', () => answer(false));
  }
  draw();
}

/* ---------- Tab: Kanji của bài ---------- */

function renderKanji(box, level, n) {
  const list = kanjiOfLesson(level, n);
  if (!list.length) {
    box.innerHTML = `<p class="empty">Bài này chưa có kanji nào trong bảng tra cứu.
      Bạn có thể xem <a href="#/kanji/${level}">toàn bộ kanji ${level}</a>.</p>`;
    return;
  }
  box.innerHTML = `
    <p class="note">${list.length} kanji xuất hiện trong từ vựng bài ${n}.</p>
    <div class="kanji-grid">${list.map(kanjiCard).join('')}</div>`;
}

function kanjiCard(k) {
  return `<div class="kanji-card">
    <div class="kanji-char">${esc(k.c)} ${speakBtn(k.c)}</div>
    <div class="kanji-body">
      <div class="kanji-m">${esc(k.m)}</div>
      <div class="kanji-r"><b>On:</b> ${esc(k.on || '—')} · <b>Kun:</b> ${esc(k.kun || '—')} · ${k.s} nét</div>
      <ul class="kanji-ex">${(k.ex || []).map(([w, r, m]) =>
        `<li>${speakBtn(w)} <b>${esc(w)}</b> <span class="kana">${esc(r)}</span> — ${esc(m)}</li>`).join('')}</ul>
    </div>
  </div>`;
}

/* ---------- Tab: Ngữ pháp ---------- */

function renderGrammar(box, level, n) {
  const points = GRAMMAR[n];
  if (!points) { box.innerHTML = `<p class="empty">Chưa có ghi chú ngữ pháp cho bài này.</p>`; return; }
  box.innerHTML = points.map(p => `
    <article class="gram">
      <h3>${esc(p.p)}</h3>
      <p class="gram-d">${esc(p.d)}</p>
      ${p.ex.map(e => `<div class="ex">
        ${speakBtn(e.k || e.j)}
        <div>
          <div class="ex-j">${esc(e.j)}</div>
          ${e.k ? `<div class="ex-k">${esc(e.k)}</div>` : ''}
          <div class="ex-v">${esc(e.v)}</div>
        </div>
      </div>`).join('')}
    </article>`).join('');
}

/* ---------- Tab: Luyện nghe ---------- */

function renderListen(box, level, n) {
  const words = lessonData(level, n).words;
  const sentences = (GRAMMAR[n] || []).flatMap(p => p.ex);

  box.innerHTML = `
    ${Speech.supported()
      ? (Speech.hasJapanese() ? '' :
        `<p class="warn">⚠️ Trình duyệt chưa có giọng đọc tiếng Nhật. Hãy cài gói giọng nói tiếng Nhật
          trong Cài đặt Windows (Thời gian &amp; ngôn ngữ → Giọng nói) rồi tải lại trang.</p>`)
      : `<p class="warn">⚠️ Trình duyệt không hỗ trợ đọc thành tiếng. Hãy dùng Chrome hoặc Edge.</p>`}

    <div class="toolbar">
      <button class="mode on" data-mode="word">Nghe đoán từ</button>
      <button class="mode" data-mode="dictation">Nghe chép chính tả</button>
      <button class="mode" data-mode="sentence">Nghe câu</button>
      <label class="chk">Tốc độ
        <input type="range" id="rate" min="0.5" max="1.2" step="0.1" value="${Store.settings().rate}">
        <span id="rate-v">${Store.settings().rate}</span>×
      </label>
    </div>
    <div id="listen-body"></div>`;

  const rate = box.querySelector('#rate');
  rate.addEventListener('input', () => {
    Store.setSetting('rate', Number(rate.value));
    box.querySelector('#rate-v').textContent = rate.value;
  });

  const body = box.querySelector('#listen-body');
  box.querySelectorAll('.mode').forEach(b => {
    b.addEventListener('click', () => {
      box.querySelectorAll('.mode').forEach(x => x.classList.remove('on'));
      b.classList.add('on');
      show(b.dataset.mode);
    });
  });

  function show(mode) {
    if (mode === 'sentence') return listenSentences(body, sentences);
    if (mode === 'dictation') return dictation(body, level, n, words);
    return batchedQuiz(body, () => buildQuestions(words, 'listen', level, n),
      `${level}-${n}-listen`, 'từ');
  }
  show('word');
}

function listenSentences(box, sentences) {
  if (!sentences.length) { box.innerHTML = `<p class="empty">Bài này chưa có câu mẫu.</p>`; return; }
  box.innerHTML = `<p class="note">Nghe câu, thử nhắc lại rồi bấm "Xem đáp án" để đối chiếu.</p>
    <div class="sent-list">${sentences.map((e, i) => `
      <div class="sent" data-i="${i}">
        ${speakBtn(e.k || e.j, 'big-speak')}
        <div class="sent-body">
          <div class="hidden-part">
            <div class="ex-j">${esc(e.j)}</div>
            ${e.k ? `<div class="ex-k">${esc(e.k)}</div>` : ''}
            <div class="ex-v">${esc(e.v)}</div>
          </div>
          <button class="reveal">Xem đáp án</button>
        </div>
      </div>`).join('')}</div>`;

  box.querySelectorAll('.reveal').forEach(b => {
    b.addEventListener('click', () => {
      b.closest('.sent').classList.add('shown');
      b.remove();
    });
  });
}

/** Chép chính tả toàn bộ từ mới của bài, chia thành từng đợt như bài tập. */
function dictation(box, level, n, words) {
  let all = shuffle(words);
  let r = 0;
  if (!all.length) { box.innerHTML = `<p class="empty">Bài này chưa có từ vựng.</p>`; return; }

  function round() {
    const size = batchSize() > 0 ? Math.min(batchSize(), all.length) : all.length;
    const rounds = Math.ceil(all.length / size);
    if (r >= rounds) r = rounds - 1;
    const from = r * size;

    box.innerHTML = `
      <div class="batch-head">
        <div class="batch-info">Đợt <b>${r + 1}/${rounds}</b> · từ
          ${from + 1}–${Math.min(from + size, all.length)} trong ${all.length} từ của bài</div>
        <div class="batch-rounds">
          ${Array.from({ length: rounds }, (_, k) =>
            `<button class="round ${k === r ? 'on' : ''}" data-r="${k}">${k + 1}</button>`).join('')}
          <button class="reshuffle" id="mix" title="Trộn lại toàn bộ và chia đợt mới">🔀</button>
        </div>
      </div>
      <div id="dict-body"></div>`;

    box.querySelectorAll('.round').forEach(b =>
      b.addEventListener('click', () => { r = Number(b.dataset.r); round(); }));
    box.querySelector('#mix').addEventListener('click', () => { all = shuffle(words); r = 0; round(); });

    runDictation(box.querySelector('#dict-body'), level, n, all.slice(from, from + size),
      r < rounds - 1 ? { label: `Đợt ${r + 2}/${rounds} →`, run: () => { r++; round(); } } : null,
      () => round());
  }
  round();
}

function runDictation(box, level, n, deck, next, redo) {
  let i = 0, correct = 0;

  function draw() {
    if (i >= deck.length) {
      Store.saveScore(`${level}-${n}-dictation`, correct, deck.length);
      box.innerHTML = `<div class="done"><h3>Kết quả: ${correct}/${deck.length}</h3>
        <button id="again">Làm lại đợt này</button>
        ${next ? `<button id="next" class="primary">${esc(next.label)}</button>` : ''}</div>`;
      box.querySelector('#again').addEventListener('click', redo);
      if (next) box.querySelector('#next').addEventListener('click', next.run);
      return;
    }
    const w = deck[i];
    box.innerHTML = `
      <div class="dict">
        <div class="flash-meta">Câu ${i + 1}/${deck.length}</div>
        <p class="note">Bấm loa để nghe, rồi gõ lại bằng hiragana hoặc romaji.</p>
        ${speakBtn(w.h, 'huge-speak')}
        <input id="ans" type="text" autocomplete="off" placeholder="Gõ đáp án rồi Enter...">
        <div id="fb" class="fb"></div>
        <button id="skip">Bỏ qua / Xem đáp án</button>
      </div>`;

    const input = box.querySelector('#ans');
    input.focus();
    Speech.speak(w.h);

    const finish = ok => {
      Store.review(Store.wordId(level, n, w), ok);
      if (ok) correct++;
      box.querySelector('#fb').innerHTML = ok
        ? `<span class="ok">✓ Chính xác! ${esc(w.h)} — ${esc(w.m)}</span>`
        : `<span class="ng">✗ Đáp án: <b>${esc(w.h)}</b> ${w.k ? `(${esc(w.k)})` : ''} — ${esc(w.m)}</span>`;
      input.disabled = true;
      setTimeout(() => { i++; draw(); }, ok ? 900 : 2200);
    };

    input.addEventListener('keydown', e => {
      if (e.key !== 'Enter' || input.disabled) return;
      finish(answerMatches(input.value, w));
    });
    box.querySelector('#skip').addEventListener('click', () => !input.disabled && finish(false));
  }
  draw();
}

/* ---------- Tab: Bài tập ---------- */

const QUIZ_MODES = [
  ['jp2vi', 'Nhật → Việt'],
  ['vi2jp', 'Việt → Nhật'],
  ['listen', 'Nghe → chọn nghĩa'],
  ['type', 'Điền từ'],
  ['grammar', 'Ngữ pháp']
];

/** Số câu mỗi đợt làm bài. 0 = làm hết toàn bộ trong một lượt. */
const BATCH_SIZES = [10, 15, 25, 40, 0];

function batchSize() {
  const v = Number(Store.settings().quizBatch);
  return BATCH_SIZES.includes(v) ? v : 15;
}

/** Số từ của bài đã được luyện ít nhất một lần. */
function practicedCount(level, n) {
  return lessonData(level, n).words
    .filter(w => Store.seenOf(Store.wordId(level, n, w)) > 0).length;
}

function renderQuiz(box, level, n) {
  const words = lessonData(level, n).words;
  let mode = 'jp2vi';

  box.innerHTML = `
    <div class="toolbar">
      ${QUIZ_MODES.map(([id, label], i) =>
        `<button class="mode ${i === 0 ? 'on' : ''}" data-mode="${id}">${label}</button>`).join('')}
    </div>
    <div class="toolbar batch-bar">
      <label class="chk">Mỗi đợt
        <select id="batch">${BATCH_SIZES.map(s =>
          `<option value="${s}" ${s === batchSize() ? 'selected' : ''}>${s ? s + ' câu' : 'Làm hết một lượt'}</option>`
        ).join('')}</select>
      </label>
      <span class="cover" id="cover"></span>
    </div>
    <div id="quiz-body"></div>`;

  const body = box.querySelector('#quiz-body');

  /** Bài tập phủ hết từ mới, nên hiển thị luôn đã đụng tới bao nhiêu từ. */
  function updateCover() {
    const done = practicedCount(level, n);
    box.querySelector('#cover').innerHTML =
      `Bài ${n} có <b>${words.length}</b> từ mới · đã luyện <b>${done}/${words.length}</b>`;
  }

  box.querySelectorAll('.mode').forEach(b => {
    b.addEventListener('click', () => {
      box.querySelectorAll('.mode').forEach(x => x.classList.remove('on'));
      b.classList.add('on');
      mode = b.dataset.mode;
      start();
    });
  });

  box.querySelector('#batch').addEventListener('change', e => {
    Store.setSetting('quizBatch', Number(e.target.value));
    start();
  });

  function start() {
    if (mode === 'grammar') {
      if (!buildGrammarQuestions(n).length) {
        body.innerHTML = `<p class="empty">Bài này chưa có đủ câu ngữ pháp để luyện.</p>`;
        return;
      }
      batchedQuiz(body, () => buildGrammarQuestions(n), `${level}-${n}-grammar`, 'câu', updateCover);
      return;
    }
    if (words.length < 2) { body.innerHTML = `<p class="empty">Chưa đủ dữ liệu cho dạng bài này.</p>`; return; }
    batchedQuiz(body, () => buildQuestions(words, mode, level, n),
      `${level}-${n}-${mode}`, 'từ', updateCover);
  }

  updateCover();
  start();
}

/**
 * Chạy một bộ câu hỏi phủ kín phạm vi đã cho, chia thành các đợt nối tiếp nhau
 * để không phải làm 60 câu một lần mà vẫn đi hết toàn bộ từ mới của bài.
 * build() trả về toàn bộ câu hỏi đã trộn; gọi lại khi người học muốn trộn mới.
 */
function batchedQuiz(box, build, scoreKey, unit, onRoundDone) {
  let all = build();
  let r = 0;
  if (!all.length) { box.innerHTML = `<p class="empty">Chưa đủ dữ liệu cho dạng bài này.</p>`; return; }

  function draw() {
    const size = batchSize() > 0 ? Math.min(batchSize(), all.length) : all.length;
    const rounds = Math.ceil(all.length / size);
    if (r >= rounds) r = rounds - 1;
    const from = r * size;
    const part = all.slice(from, from + size);

    box.innerHTML = `
      <div class="batch-head">
        <div class="batch-info">Đợt <b>${r + 1}/${rounds}</b> · ${unit}
          ${from + 1}–${from + part.length} trong ${all.length} ${unit} của bài</div>
        <div class="batch-rounds">
          ${Array.from({ length: rounds }, (_, k) =>
            `<button class="round ${k === r ? 'on' : ''}" data-r="${k}">${k + 1}</button>`).join('')}
          <button class="reshuffle" id="mix" title="Trộn lại toàn bộ và chia đợt mới">🔀</button>
        </div>
      </div>
      <div id="round-body"></div>`;

    box.querySelectorAll('.round').forEach(b =>
      b.addEventListener('click', () => { r = Number(b.dataset.r); draw(); }));
    box.querySelector('#mix').addEventListener('click', () => { all = build(); r = 0; draw(); });

    // restart = null để nút "Làm lại" trộn lại đúng các câu của đợt này
    runQuiz(box.querySelector('#round-body'), part, scoreKey, null, {
      next: r < rounds - 1
        ? { label: `Đợt ${r + 2}/${rounds} →`, run: () => { r++; draw(); } }
        : null,
      done: r === rounds - 1 && rounds > 1
        ? `🎌 Bạn vừa đi hết ${all.length} ${unit} của bài ở dạng bài tập này.` : '',
      onFinish: onRoundDone
    });
  }
  draw();
}

/** Sinh câu hỏi trắc nghiệm / điền từ cho TOÀN BỘ từ vựng được truyền vào. */
function buildQuestions(words, mode, level, lesson) {
  if (words.length < 2) return [];
  const pool = allWords(level).concat(allWords(level === 'N5' ? 'N4' : 'N5'));

  // Chỉ đảo thứ tự, không cắt bớt: mọi từ mới của bài đều phải được hỏi.
  return shuffle(words).map(w => {
    const id = Store.wordId(level, lesson, w);
    if (mode === 'type') {
      return { type: 'type', word: w, id, prompt: w.m, sub: w.k ? `Gợi ý chữ Hán: ${w.k}` : '' };
    }
    const wrongPool = pool.filter(x => x.m !== w.m && x.h !== w.h);
    const distractors = sample(wrongPool, 3);
    const opts = shuffle([w, ...distractors]);

    if (mode === 'vi2jp') {
      return {
        type: 'choice', word: w, id, prompt: w.m, sub: 'Chọn từ tiếng Nhật tương ứng',
        choices: opts.map(o => `${o.h}${o.k && o.k !== o.h ? ` (${o.k})` : ''}`),
        answer: opts.indexOf(w)
      };
    }
    if (mode === 'listen') {
      return {
        type: 'choice', word: w, id, prompt: '', audio: w.h, sub: 'Nghe rồi chọn nghĩa đúng',
        choices: opts.map(o => o.m), answer: opts.indexOf(w)
      };
    }
    return {
      type: 'choice', word: w, id,
      prompt: w.k || w.h, sub: w.k && w.k !== w.h ? w.h : '', audio: w.h,
      choices: opts.map(o => o.m), answer: opts.indexOf(w)
    };
  });
}

/** Câu hỏi ngữ pháp: cho nghĩa tiếng Việt, chọn câu tiếng Nhật đúng. */
function buildGrammarQuestions(lesson) {
  const mine = (GRAMMAR[lesson] || []).flatMap(p => p.ex);
  if (mine.length < 2) return [];
  const others = Object.keys(GRAMMAR)
    .filter(k => Number(k) !== lesson)
    .flatMap(k => GRAMMAR[k])
    .flatMap(p => p.ex);

  return shuffle(mine).map(e => {
    const opts = shuffle([e, ...sample(others.filter(o => o.j !== e.j), 3)]);
    return {
      type: 'choice', prompt: e.v, sub: 'Chọn câu tiếng Nhật đúng nghĩa',
      choices: opts.map(o => o.j), answer: opts.indexOf(e), audio: e.k || e.j
    };
  });
}

/**
 * Bộ máy chạy một loạt câu hỏi và chấm điểm.
 * opts: { next: {label, run}, done: lời nhắn khi hết đợt cuối, onFinish: callback }
 */
function runQuiz(box, questions, scoreKey, restart, opts) {
  opts = opts || {};
  let i = 0, correct = 0;
  const wrong = [];

  function draw() {
    if (i >= questions.length) return finish();
    const q = questions[i];
    box.innerHTML = `
      <div class="quiz">
        <div class="quiz-top">
          <span>Câu ${i + 1}/${questions.length}</span>
          <span>Đúng: ${correct}</span>
        </div>
        ${progressBar(Math.round((i / questions.length) * 100))}
        ${q.prompt ? `<div class="q-prompt">${esc(q.prompt)}</div>` : ''}
        ${q.sub ? `<div class="q-sub">${esc(q.sub)}</div>` : ''}
        ${q.audio ? `<div class="q-audio">${speakBtn(q.audio, 'huge-speak')}</div>` : ''}
        ${q.type === 'choice'
          ? `<div class="choices">${q.choices.map((c, k) =>
              `<button class="choice" data-k="${k}">${esc(c)}</button>`).join('')}</div>`
          : `<div class="type-in"><input id="ans" type="text" autocomplete="off"
               placeholder="Gõ hiragana hoặc romaji rồi Enter..."><button id="check">Kiểm tra</button></div>`}
        <div id="fb" class="fb"></div>
      </div>`;

    if (q.audio) Speech.speak(q.audio);

    const fb = box.querySelector('#fb');

    const grade = (ok, chosenBtn) => {
      if (q.id) Store.review(q.id, ok);
      if (ok) correct++; else wrong.push(q);

      if (q.type === 'choice') {
        box.querySelectorAll('.choice').forEach((b, k) => {
          b.disabled = true;
          if (k === q.answer) b.classList.add('right');
          else if (b === chosenBtn) b.classList.add('wrong');
        });
      } else {
        box.querySelector('#ans').disabled = true;
        box.querySelector('#check').disabled = true;
      }

      const w = q.word;
      fb.innerHTML = ok
        ? `<span class="ok">✓ Chính xác!</span>`
        : `<span class="ng">✗ Đáp án đúng: <b>${esc(q.type === 'choice' ? q.choices[q.answer] : w.h)}</b>${
            w && w.m && q.type !== 'choice' ? ` — ${esc(w.m)}` : ''}</span>`;
      setTimeout(() => { i++; draw(); }, ok ? 700 : 1900);
    };

    if (q.type === 'choice') {
      box.querySelectorAll('.choice').forEach(b => {
        b.addEventListener('click', () => grade(Number(b.dataset.k) === q.answer, b));
      });
    } else {
      const input = box.querySelector('#ans');
      input.focus();
      const check = () => !input.disabled && grade(answerMatches(input.value, q.word));
      input.addEventListener('keydown', e => e.key === 'Enter' && check());
      box.querySelector('#check').addEventListener('click', check);
    }
  }

  function finish() {
    const pct = Math.round((correct / questions.length) * 100);
    if (scoreKey) Store.saveScore(scoreKey, correct, questions.length);
    if (opts.onFinish) opts.onFinish();
    const emoji = pct >= 90 ? '🏆' : pct >= 70 ? '👏' : pct >= 50 ? '💪' : '📖';
    box.innerHTML = `
      <div class="done">
        <div class="score">${emoji} ${correct}/${questions.length} <small>(${pct}%)</small></div>
        ${wrong.length ? `<div class="wrong-list">
          <h4>Cần xem lại (${wrong.length})</h4>
          <ul>${wrong.map(q => q.word
            ? `<li>${speakBtn(q.word.h)} <b>${esc(q.word.h)}</b>${q.word.k ? ` (${esc(q.word.k)})` : ''} — ${esc(q.word.m)}</li>`
            : `<li>${esc(q.choices[q.answer])}</li>`).join('')}</ul>
        </div>` : `<p>Không sai câu nào. Xuất sắc!</p>`}
        ${opts.done ? `<p class="note">${esc(opts.done)}</p>` : ''}
        <button id="again">Làm lại đợt này</button>
        ${opts.next ? `<button id="next" class="primary">${esc(opts.next.label)}</button>` : ''}
      </div>`;
    box.querySelector('#again').addEventListener('click', () => {
      if (restart) restart(); else { i = 0; correct = 0; wrong.length = 0; questions = shuffle(questions); draw(); }
    });
    if (opts.next) box.querySelector('#next').addEventListener('click', opts.next.run);
  }
  draw();
}

/* ---------- Bảng tra Kanji ---------- */

route(/^\/kanji\/(N5|N4)$/, level => {
  const list = KANJI[level];
  app().innerHTML = `
    <div class="crumb"><a href="#/home">Trang chủ</a> › Kanji</div>
    <h2>Bảng Kanji ${level} <small>(${list.length} chữ)</small></h2>
    <div class="toolbar">
      <a class="mode ${level === 'N5' ? 'on' : ''}" href="#/kanji/N5">N5</a>
      <a class="mode ${level === 'N4' ? 'on' : ''}" href="#/kanji/N4">N4</a>
      <input id="kq" type="search" placeholder="Tìm theo chữ, âm đọc hoặc nghĩa...">
    </div>
    <div class="kanji-grid" id="kg">${list.map(kanjiCard).join('')}</div>`;

  const q = $('#kq');
  q.addEventListener('input', () => {
    const s = q.value.trim().toLowerCase();
    const filtered = !s ? list : list.filter(k =>
      k.c.includes(s) || (k.m || '').toLowerCase().includes(s) ||
      (k.on || '').includes(s) || (k.kun || '').includes(s) ||
      (k.ex || []).some(e => e.join('').toLowerCase().includes(s)));
    $('#kg').innerHTML = filtered.length
      ? filtered.map(kanjiCard).join('')
      : `<p class="empty">Không tìm thấy kanji nào khớp "${esc(s)}".</p>`;
  });
});

/* ---------- Ôn tập tổng hợp (SRS) ---------- */

route(/^\/review$/, () => {
  const pool = [];
  ['N5', 'N4'].forEach(level => {
    lessonsOf(level).forEach(n => {
      Store.due(lessonData(level, n).words, level, n).forEach(w => {
        pool.push({ ...w, level, lesson: n });
      });
    });
  });

  // Ưu tiên những từ đã học và đến hạn, sau đó mới đến từ mới
  const known = pool.filter(w => Store.boxOf(Store.wordId(w.level, w.lesson, w)) > 0);
  const picked = shuffle(known.length >= 10 ? known : pool).slice(0, 20);

  app().innerHTML = `
    <div class="crumb"><a href="#/home">Trang chủ</a> › Ôn tập</div>
    <h2>🔁 Ôn tập thông minh</h2>
    <p class="note">Hệ thống chọn ${picked.length} từ dựa trên lịch lặp lại ngắt quãng (Leitner).
      Trả lời đúng → khoảng cách ôn dài ra; trả lời sai → từ đó sẽ quay lại sớm.</p>
    <div id="review-body"></div>`;

  if (!picked.length) {
    $('#review-body').innerHTML = `<p class="empty">Chưa có từ nào đến hạn ôn. Hãy học một bài mới nhé!</p>`;
    return;
  }

  const qs = picked.map(w => {
    const opts = shuffle([w, ...sample(pool.filter(x => x.m !== w.m), 3)]);
    return {
      type: 'choice', word: w, id: Store.wordId(w.level, w.lesson, w),
      prompt: w.k || w.h, sub: `${w.level} · Bài ${w.lesson}`, audio: w.h,
      choices: opts.map(o => o.m), answer: opts.indexOf(w)
    };
  });
  runQuiz($('#review-body'), qs, null);
});

/* ---------- Cài đặt ---------- */

route(/^\/settings$/, () => {
  const s = Store.settings();
  const d = Store.daily();
  const st = Store.stats();
  const voices = Speech.japaneseVoices();
  app().innerHTML = `
    <div class="crumb"><a href="#/home">Trang chủ</a> › Cài đặt</div>
    <h2>⚙️ Cài đặt</h2>

    <section class="panel">
      <h3>Giọng đọc tiếng Nhật</h3>
      ${voices.length
        ? `<select id="voice">
             <option value="">(Tự động chọn)</option>
             ${voices.map(v => `<option value="${esc(v.name)}" ${v.name === s.voice ? 'selected' : ''}>${esc(v.name)} — ${esc(v.lang)}</option>`).join('')}
           </select>
           <button id="test">Nghe thử</button>`
        : `<p class="warn">Máy chưa cài giọng đọc tiếng Nhật. Trên Windows: Cài đặt →
            Thời gian &amp; ngôn ngữ → Giọng nói → Thêm giọng nói → 日本語 (Japanese).</p>`}
      <label class="row">Tốc độ đọc
        <input type="range" id="rate" min="0.5" max="1.2" step="0.1" value="${s.rate}">
        <span id="rv">${s.rate}</span>×
      </label>
    </section>

    <section class="panel">
      <h3>🗓️ Kanji hôm nay</h3>
      <label class="row">
        <input type="checkbox" id="d-on" ${d.enabled ? 'checked' : ''}>
        Tự hiện popup một lần mỗi ngày khi mở app
      </label>
      <label class="row">Số chữ mỗi ngày
        <input type="number" id="d-count" min="5" max="50" step="5" value="${d.count}">
      </label>
      <label class="row">Phạm vi
        <select id="d-level">
          <option value="all" ${d.level === 'all' ? 'selected' : ''}>Cả N5 và N4</option>
          <option value="N5" ${d.level === 'N5' ? 'selected' : ''}>Chỉ N5</option>
          <option value="N4" ${d.level === 'N4' ? 'selected' : ''}>Chỉ N4</option>
        </select>
      </label>
      <button id="d-now">Xem bộ hôm nay</button>
      <button id="d-new">Chốt lại bộ khác cho hôm nay</button>
    </section>

    <section class="panel">
      <h3>Tiến độ</h3>
      <p>Đã học <b>${st.total}</b> mục · thuộc <b>${st.mastered}</b> · đến hạn ôn <b>${st.due}</b> ·
         đã làm <b>${st.quizzes}</b> bài tập.</p>
      <button id="reset" class="danger">Xoá toàn bộ tiến độ</button>
    </section>

    <section class="panel">
      <h3>💾 Chuyển tiến độ sang máy khác</h3>
      <p class="note">Tiến độ nằm trong bộ nhớ của trình duyệt chứ không nằm trong thư mục project,
        nên clone repo sang máy khác sẽ không mang theo. Dùng file dưới đây để chuyển thủ công.</p>
      <button id="exp">⬇️ Xuất ra file .json</button>
      <label class="row">Khi nhập
        <select id="imp-mode">
          <option value="merge">Gộp vào tiến độ hiện có</option>
          <option value="replace">Thay thế toàn bộ</option>
        </select>
      </label>
      <label class="btn file-btn" for="imp-file">⬆️ Chọn file để nhập</label>
      <input type="file" id="imp-file" accept="application/json,.json" hidden>
      <div id="imp-fb" class="fb"></div>
    </section>`;

  const rate = $('#rate');
  rate.addEventListener('input', () => {
    Store.setSetting('rate', Number(rate.value));
    $('#rv').textContent = rate.value;
  });
  const voice = $('#voice');
  if (voice) voice.addEventListener('change', () => Speech.setVoice(voice.value));
  const test = $('#test');
  if (test) test.addEventListener('click', () => Speech.speak('こんにちは。日本語を勉強しましょう。'));

  $('#d-on').addEventListener('change', e => Store.setDaily({ enabled: e.target.checked }));
  $('#d-count').addEventListener('change', e => {
    const n = Math.max(5, Math.min(50, Number(e.target.value) || 20));
    e.target.value = n;
    // Đổi số lượng thì chốt lại bộ của hôm nay
    Store.setDaily({ count: n, date: '', chars: [] });
  });
  $('#d-level').addEventListener('change', e =>
    Store.setDaily({ level: e.target.value, date: '', chars: [] }));
  $('#d-now').addEventListener('click', () => Daily.open());
  $('#d-new').addEventListener('click', () => {
    Store.setDaily({ date: '', chars: [] });
    Daily.open();
  });

  $('#reset').addEventListener('click', () => {
    if (confirm('Xoá toàn bộ tiến độ đã lưu? Thao tác này không thể hoàn tác.')) {
      Store.reset();
      location.hash = '#/home';
      navigate();
    }
  });

  $('#exp').addEventListener('click', () => {
    const d = new Date();
    const stamp = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    downloadJson(Store.exportData(), `nihongo-tien-do-${stamp}.json`);
  });

  $('#imp-file').addEventListener('change', e => {
    const file = e.target.files[0];
    const fb = $('#imp-fb');
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const n = Store.importData(JSON.parse(reader.result), $('#imp-mode').value);
        fb.innerHTML = `<span class="ok">✓ Đã nhập ${n.srs} mục học và ${n.scores} kết quả bài tập.</span>`;
        setTimeout(navigate, 1400);
      } catch (err) {
        fb.innerHTML = `<span class="ng">✗ ${esc(err.message)}</span>`;
      }
    };
    reader.onerror = () => { fb.innerHTML = `<span class="ng">✗ Không đọc được file.</span>`; };
    reader.readAsText(file);
    e.target.value = '';   // cho phép chọn lại đúng file đó lần sau
  });
});

/* ---------- Khởi động ---------- */

// Uỷ quyền sự kiện cho nút loa và nút đánh dấu sao ở mọi màn hình
document.addEventListener('click', e => {
  const sp = e.target.closest('[data-speak]');
  if (sp) { e.stopPropagation(); Speech.speak(sp.dataset.speak); return; }

  const st = e.target.closest('[data-star]');
  if (st) { st.classList.toggle('on', Store.toggleStar(st.dataset.star)); }
});

window.addEventListener('hashchange', navigate);
window.addEventListener('DOMContentLoaded', () => {
  if (!location.hash) location.hash = '#/home';
  navigate();
});
