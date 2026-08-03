/* Phát âm tiếng Nhật bằng Web Speech API có sẵn trong trình duyệt.
   Không cần file audio, không cần internet (giọng đọc do hệ điều hành cung cấp). */

const Speech = (() => {
  let voices = [];
  let jaVoice = null;

  function refreshVoices() {
    if (!('speechSynthesis' in window)) return;
    voices = speechSynthesis.getVoices();
    const preferred = Store.settings().voice;
    jaVoice =
      voices.find(v => v.name === preferred) ||
      voices.find(v => v.lang === 'ja-JP') ||
      voices.find(v => v.lang && v.lang.startsWith('ja')) ||
      null;
  }

  if ('speechSynthesis' in window) {
    refreshVoices();
    speechSynthesis.onvoiceschanged = refreshVoices;
  }

  const supported = () => 'speechSynthesis' in window;
  const hasJapanese = () => !!jaVoice;
  const japaneseVoices = () => voices.filter(v => v.lang && v.lang.startsWith('ja'));

  /** Đọc một đoạn text tiếng Nhật. rate: tốc độ (0.5 chậm - 1.2 nhanh). */
  function speak(text, rate) {
    if (!supported() || !text) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'ja-JP';
    u.rate = rate != null ? rate : (Store.settings().rate || 0.9);
    if (jaVoice) u.voice = jaVoice;
    speechSynthesis.speak(u);
  }

  const stop = () => supported() && speechSynthesis.cancel();

  function setVoice(name) {
    Store.setSetting('voice', name);
    refreshVoices();
  }

  return { speak, stop, supported, hasJapanese, japaneseVoices, setVoice, refreshVoices };
})();
