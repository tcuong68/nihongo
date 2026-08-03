/* Tiện ích xử lý kana: chuyển kana -> romaji, katakana -> hiragana.
   Nhờ vậy dữ liệu từ vựng chỉ cần lưu kana, romaji được sinh tự động. */

const KANA_MAP = {
  'あ':'a','い':'i','う':'u','え':'e','お':'o',
  'か':'ka','き':'ki','く':'ku','け':'ke','こ':'ko',
  'さ':'sa','し':'shi','す':'su','せ':'se','そ':'so',
  'た':'ta','ち':'chi','つ':'tsu','て':'te','と':'to',
  'な':'na','に':'ni','ぬ':'nu','ね':'ne','の':'no',
  'は':'ha','ひ':'hi','ふ':'fu','へ':'he','ほ':'ho',
  'ま':'ma','み':'mi','む':'mu','め':'me','も':'mo',
  'や':'ya','ゆ':'yu','よ':'yo',
  'ら':'ra','り':'ri','る':'ru','れ':'re','ろ':'ro',
  'わ':'wa','ゐ':'i','ゑ':'e','を':'o','ん':'n',
  'が':'ga','ぎ':'gi','ぐ':'gu','げ':'ge','ご':'go',
  'ざ':'za','じ':'ji','ず':'zu','ぜ':'ze','ぞ':'zo',
  'だ':'da','ぢ':'ji','づ':'zu','で':'de','ど':'do',
  'ば':'ba','び':'bi','ぶ':'bu','べ':'be','ぼ':'bo',
  'ぱ':'pa','ぴ':'pi','ぷ':'pu','ぺ':'pe','ぽ':'po',
  'ぁ':'a','ぃ':'i','ぅ':'u','ぇ':'e','ぉ':'o',
  'ゃ':'ya','ゅ':'yu','ょ':'yo','ゎ':'wa',
  'ー':'-','　':' ',' ':' ','、':', ','。':'. ','・':' '
};

// Âm ghép: phụ âm + ya/yu/yo
const YOON = {
  'き':'ky','ぎ':'gy','し':'sh','じ':'j','ち':'ch','ぢ':'j','に':'ny','ひ':'hy',
  'び':'by','ぴ':'py','み':'my','り':'ry'
};
const YOON_VOWEL = { 'ゃ':'a', 'ゅ':'u', 'ょ':'o' };

/** Katakana -> Hiragana (giữ nguyên ký tự khác). */
function toHiragana(str) {
  return String(str || '').replace(/[ァ-ヶ]/g, ch =>
    String.fromCharCode(ch.charCodeAt(0) - 0x60)
  );
}

/** Chuyển chuỗi kana (hira hoặc kata) sang romaji kiểu Hepburn. */
function kanaToRomaji(input) {
  const s = toHiragana(input);
  let out = '';
  let i = 0;
  while (i < s.length) {
    const ch = s[i];
    const next = s[i + 1];

    // Âm ngắt っ -> gấp đôi phụ âm kế tiếp
    if (ch === 'っ') {
      const rest = kanaToRomaji(s.slice(i + 1));
      const c = rest[0];
      out += (c && /[a-z]/.test(c)) ? (c === 'c' ? 't' : c) : '';
      i++;
      continue;
    }

    // Âm ghép (きゃ, しゅ, ちょ...)
    if (YOON[ch] && YOON_VOWEL[next]) {
      const base = YOON[ch];
      const v = YOON_VOWEL[next];
      out += (base.endsWith('h') || base === 'j') ? base + (v === 'u' && base === 'sh' ? 'u' : v) : base + v;
      i += 2;
      continue;
    }

    // Trường âm ー -> kéo dài nguyên âm trước đó
    if (ch === 'ー') {
      const last = out[out.length - 1];
      out += /[aiueo]/.test(last || '') ? last : '';
      i++;
      continue;
    }

    // ん trước b/m/p đọc là m
    if (ch === 'ん') {
      const r = next ? (KANA_MAP[next] || '') : '';
      out += /^[bmp]/.test(r) ? 'm' : 'n';
      i++;
      continue;
    }

    out += KANA_MAP[ch] !== undefined ? KANA_MAP[ch] : ch;
    i++;
  }
  return out;
}

/** Bỏ dấu, hạ chữ thường – dùng để so khớp câu trả lời của người học. */
function normalizeAnswer(str) {
  return String(str || '')
    .trim()
    .toLowerCase()
    .replace(/[\s'’\-_.,!?]/g, '')
    .replace(/ō|ô/g, 'ou')
    .replace(/ū|û/g, 'uu');
}

/** So sánh đáp án: chấp nhận kana đúng hoặc romaji đúng. */
function answerMatches(userInput, word) {
  const u = normalizeAnswer(userInput);
  if (!u) return false;
  const candidates = [
    word.h,
    toHiragana(word.h),
    word.k,
    kanaToRomaji(word.h)
  ].filter(Boolean).map(normalizeAnswer);
  return candidates.includes(u);
}
