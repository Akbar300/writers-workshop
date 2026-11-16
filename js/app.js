/* Writer's Workshop app: storage, item engine, screens, print.
   Static, no build step. The engine (top half) is pure and also runs in Node for tests. */
(function (root) {
  'use strict';
  const D = root.WW_DATA;

  /* ------------------------------------------------------------------ helpers */
  const rnd = (n) => Math.floor(Math.random() * n);
  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = rnd(i + 1); const t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  const tokens = (s) => String(s).split(/\s+/).filter(Boolean);
  const norm = (s) => String(s || '').replace(/[“”„]/g, '"').replace(/[‘’]/g, "'").replace(/\s+/g, ' ').trim();
  const hasCap = (w) => /^[^A-Za-z]*[A-Z]/.test(w);
  const lowerFirst = (w) => w.replace(/[A-Z]/, (c) => c.toLowerCase());
  const stripEnd = (s) => s.replace(/[.!?]+$/, '');
  const sameArr = (a, b) => a.length === b.length && a.every((x, i) => x === b[i]);

  /* ------------------------------------------------------------------ skills */
  const SKILLS = {
    3: [
      { id: 'caps', name: 'Capitals', icon: '🔠', rule: 'Capital letters start every sentence. They also start names of people, places, days, months, holidays, and the word I.' },
      { id: 'end', name: 'End marks', icon: '❓', rule: 'A telling sentence ends with a period (.). A question ends with a question mark (?). A strong feeling ends with an exclamation point (!).' },
      { id: 'commas', name: 'Commas in a list', icon: '🧺', rule: 'Put a comma after each thing in a list except the last one: apples, cheese, and crackers. Commas also go between a city and a state, and between the day and the year.' },
      { id: 'apos', name: 'Apostrophes', icon: '✏️', rule: "An apostrophe shows who owns something (the dog's tail) or takes the place of missing letters (can't = can not)." },
      { id: 'verbs', name: 'Verbs', icon: '🏃', rule: 'The verb must match who is doing it (one dog barks, two dogs bark) and when it happened (today I run, yesterday I ran).' },
      { id: 'join', name: 'Joining sentences', icon: '🔗', rule: 'Join two short sentences with because (tells why), so (tells the result), or but (shows a difference). Put a comma before so and but.' },
      { id: 'kinds', name: 'Complete sentence?', icon: '🧩', rule: 'A complete sentence tells WHO (or what) and what they DO or ARE. A fragment is missing one of those parts.' },
      { id: 'dialogue', name: 'Dialogue', icon: '💬', stretch: true, rule: 'Quotation marks hug the exact words someone says. The comma, period, question mark, or exclamation point goes inside the closing mark.' },
      { id: 'typeit', name: 'Type it right', icon: '⌨️', rule: 'Read the sentence, then type it again with every capital letter and end mark fixed.' }
    ],
    5: [
      { id: 'caps', name: 'Capitals', icon: '🔠', rule: 'Capitalize proper nouns: names, titles used with a name (Dr. Patel, Coach Rivera), places, buildings, books, days, months, and holidays.' },
      { id: 'commas', name: 'Commas', icon: '✒️', rule: 'Use a comma after an opening word or phrase (After the storm,), before and/but/so/or when they join two sentences, around the name of someone you talk to (Maya, can you…), and in a list.' },
      { id: 'kinds', name: 'Run-ons & fragments', icon: '🧩', rule: 'A run-on jams two sentences together. Fix it with a period, or a comma plus and/but/so. A fragment is missing a who or a what-happened.' },
      { id: 'combine', name: 'Combining sentences', icon: '🔗', rule: 'Combine sentences with words like when, although, because, and who. If the sentence starts with the joining part, put a comma after that part.' },
      { id: 'dialogue', name: 'Dialogue', icon: '💬', rule: 'Quotation marks hug the exact words someone says. The comma, period, question mark, or exclamation point goes inside the closing mark. Start a new paragraph each time the speaker changes.' },
      { id: 'homo', name: 'Homophones', icon: '👂', rule: "Homophones sound alike but mean different things: their (belongs to them), there (a place), they're (they are); its (belongs to it), it's (it is); to, too, two." },
      { id: 'verbs', name: 'Verbs & agreement', icon: '🏃', rule: 'The verb agrees with its subject. Each, every, and everyone are singular: Each of the players has a bottle. Keep the same tense all through a story.' },
      { id: 'poss', name: 'Possessives', icon: '🎒', rule: "One owner: add 's (the dog's bowl). More than one owner ending in s: add only an apostrophe (the dogs' bowls). Plurals without s: children's, people's." },
      { id: 'trans', name: 'Transitions', icon: '🌉', rule: 'Transitions show how ideas connect: however (a change), for example (an example), as a result / therefore (a result), in addition (one more idea), meanwhile (at the same time).' },
      { id: 'typeit', name: 'Type it right', icon: '⌨️', rule: 'Read the sentence, then type it again with capitals, commas, quotation marks, and end marks fixed.' }
    ]
  };
  const PARA = [
    { id: 'p-order', name: 'Order the paragraph', icon: '🪜', rule: 'A paragraph starts with a topic sentence, gives details in order with linking words, and ends with a closing sentence.' },
    { id: 'p-odd', name: 'What does not belong?', icon: '🚫', rule: 'Every sentence in a paragraph must be about the topic sentence. A sentence about something else does not belong.' },
    { id: 'p-topic', name: 'Best sentence', icon: '🎯', rule: 'A topic sentence covers ALL the details. A closing sentence says the main idea again in new words. A hook makes the reader want more.' },
    { id: 'p-cloze', name: 'Linking words', icon: '🌉', rule: 'Linking words (transitions) glue ideas together: First, Next, Then, Finally for order; However for a change; For example for an example.' },
    { id: 'p-breaks', name: 'New paragraph?', icon: '↩️', rule: 'Start a new paragraph when the time, the place, the topic, or the speaker changes.' }
  ];
  const skillList = (g) => SKILLS[g];
  function skillMeta(g, id) { return SKILLS[g].find((s) => s.id === id) || PARA.find((p) => p.id === id); }

  /* item keys: skill:source:index */
  function sources(g, skill) {
    const G = D[g]; const k = [];
    const each = (arr, pre) => (arr || []).forEach((_, i) => k.push(pre + i));
    switch (skill) {
      case 'caps': G.sents.forEach((s, i) => { if (tokens(s).some(hasCap)) k.push('caps:s:' + i); }); break;
      case 'end': each(G.sents, 'end:s:'); break;
      case 'commas': each(G.commas, 'commas:c:'); break;
      case 'kinds': each(G.kinds, 'kinds:k:'); break;
      case 'dialogue': each(G.dialogue, 'dialogue:d:'); break;
      case 'join': each(G.blanks.join, 'join:b:'); each(G.combine, 'join:c:'); break;
      case 'combine': each(G.combine, 'combine:c:'); break;
      case 'typeit':
        each(G.retype, 'typeit:r:'); /* Grade 3 has no retype bank: build from short correct sentences */
        if (!(G.retype || []).length) G.sents.forEach((s, i) => { if (tokens(s).length <= 8) k.push('typeit:s:' + i); });
        break;
      case 'p-order': each(G.para.order, 'p-order:x:'); break;
      case 'p-odd': each(G.para.odd, 'p-odd:x:'); break;
      case 'p-topic': each(G.para.topic, 'p-topic:x:'); break;
      case 'p-cloze': each(G.para.cloze, 'p-cloze:x:'); break;
      case 'p-breaks': each(G.para.breaks, 'p-breaks:x:'); break;
      default: each(G.blanks[skill], skill + ':b:');
    }
    return k;
  }

  const END_WHY = {
    '.': 'It tells something, so it ends with a period.',
    '?': 'It asks something, so it ends with a question mark.',
    '!': 'It shows a strong feeling, so it ends with an exclamation point.'
  };
  const listWords = (arr) => arr.map((w) => '“' + w + '”').join(', ');

  function capsWrong(s) {
    const t = tokens(s); const targets = []; const words = t.map((w, j) => { if (hasCap(w)) { targets.push(j); return lowerFirst(w); } return w; });
    return { t, words, targets };
  }

  function makeItem(g, key) {
    const parts = key.split(':'); const skill = parts[0]; const src = parts[1]; const i = +parts[2];
    const G = D[g]; const base = { key, skill, g };
    if (skill === 'caps') {
      const c = capsWrong(G.sents[i]);
      return Object.assign(base, { type: 'tap', prompt: 'Tap every word that needs a capital letter.', words: c.words, fixed: c.t, targets: c.targets,
        why: 'Capitals: ' + listWords(c.targets.map((j) => c.t[j].replace(/[^A-Za-z.']/g, ''))) + '. Sentence starts, names, places, days, months, and I get capitals.' });
    }
    if (skill === 'end') {
      const s = G.sents[i]; const mark = s.slice(-1);
      return Object.assign(base, { type: 'mc', prompt: 'Which end mark does this sentence need?', q: stripEnd(s) + '___', choices: ['.', '?', '!'], noShuffle: true,
        labels: { '.': 'period', '?': 'question mark', '!': 'exclamation point' }, answer: mark, why: END_WHY[mark] || '' });
    }
    if (skill === 'commas') {
      const t = tokens(G.commas[i]); const targets = []; const words = t.map((w, j) => { if (/,$/.test(w)) { targets.push(j); return w.slice(0, -1); } return w; });
      return Object.assign(base, { type: 'tap', prompt: g === 3 ? 'Tap each word that needs a comma after it.' : 'Tap each word that should have a comma right after it.', words, fixed: t, targets,
        why: 'Commas go after ' + listWords(targets.map((j) => words[j])) + '. ' + (g === 3 ? 'Lists, dates, and city-and-state need commas.' : 'Commas follow opening words, come before and/but/so joining two sentences, and set off names and extra information.') });
    }
    if (skill === 'kinds') {
      const k = G.kinds[i]; const opts = g === 3 ? ['Complete sentence', 'Fragment'] : ['Complete sentence', 'Run-on', 'Fragment'];
      const ans = { c: 'Complete sentence', f: 'Fragment', r: 'Run-on' }[k[1]];
      return Object.assign(base, { type: 'mc', prompt: g === 3 ? 'Is this a complete sentence or a fragment?' : 'Complete sentence, run-on, or fragment?', q: k[0], choices: opts, noShuffle: true, layout: 'row words', answer: ans, why: k[2] });
    }
    if (skill === 'dialogue') {
      const d = G.dialogue[i];
      return Object.assign(base, { type: 'mc', prompt: 'Which one is punctuated correctly?', choices: shuffle([d[0]].concat(d[1])), answer: d[0], why: d[2], mono: true });
    }
    if ((skill === 'join' || skill === 'combine') && src === 'c') {
      const c = G.combine[i]; let chunks;
      do { chunks = shuffle(c.out.concat(c.x)); } while (sameArr(chunks.slice(0, c.out.length), c.out));
      return Object.assign(base, { type: 'build', prompt: 'Join the two sentences. Tap the pieces in order.', context: [c.a, c.b], chunks, answer: c.out, why: c.why });
    }
    if (skill === 'typeit') {
      if (src === 'r') { const r = G.retype[i]; return Object.assign(base, { type: 'type', prompt: 'Type this sentence correctly.', wrong: r.wrong, accept: r.accept, why: r.why }); }
      const s = G.sents[i]; const c = capsWrong(s);
      return Object.assign(base, { type: 'type', prompt: 'Type this sentence correctly.', wrong: stripEnd(c.words.join(' ')), accept: [s],
        why: 'Capitals for ' + listWords(c.targets.map((j) => c.t[j].replace(/[^A-Za-z.']/g, ''))) + ', and ' + (END_WHY[s.slice(-1)] || '').replace(/^It /, 'it ') });
    }
    if (skill === 'p-order') {
      const o = G.para.order[i]; let chunks;
      do { chunks = shuffle(o.strips); } while (sameArr(chunks, o.strips));
      return Object.assign(base, { type: 'build', vertical: true, prompt: 'Tap the sentences in order to build the paragraph.', title: o.t, chunks, answer: o.strips, why: o.why });
    }
    if (skill === 'p-odd') {
      const o = G.para.odd[i];
      return Object.assign(base, { type: 'mc', prompt: 'Tap the sentence that does not belong.', choices: o.strips, noShuffle: true, layout: 'col', answer: o.strips[o.bad], why: o.why });
    }
    if (skill === 'p-topic') {
      const o = G.para.topic[i];
      return Object.assign(base, { type: 'mc', prompt: o.q, show: o.show, choices: shuffle([o.r].concat(o.w)), layout: 'col', answer: o.r, why: o.why });
    }
    if (skill === 'p-cloze') {
      const o = G.para.cloze[i];
      return Object.assign(base, { type: 'cloze', prompt: 'Fill each blank with a linking word.', title: o.t, text: o.text, bank: o.bank, ans: o.ans, why: o.why });
    }
    if (skill === 'p-breaks') {
      const o = G.para.breaks[i];
      return Object.assign(base, { type: 'tap', sentences: true, prompt: 'Tap each sentence that should START a new paragraph.', title: o.t, words: o.s, fixed: o.s, targets: o.br, locked: [0], why: o.why });
    }
    /* blanks: multiple choice */
    const b = G.blanks[skill][i];
    return Object.assign(base, { type: 'mc', prompt: 'Choose the word that fits.', q: b[0], choices: shuffle([b[1]].concat(b[2])), answer: b[1], why: b[3] });
  }

  /* Check a response. Returns { ok, empty } */
  function check(it, r) {
    switch (it.type) {
      case 'mc': if (r == null) return { empty: true }; return { ok: r === it.answer };
      case 'tap': { const on = Array.from(r || []); if (!on.length) return { empty: true }; const t = it.targets; return { ok: on.length === t.length && t.every((x) => on.indexOf(x) >= 0) }; }
      case 'build': { const a = r || []; if (!a.length) return { empty: true }; return { ok: sameArr(a, it.answer) }; }
      case 'type': { const s = norm(r); if (!s) return { empty: true }; return { ok: it.accept.some((a) => norm(a) === s) }; }
      case 'cloze': { const f = r || []; if (!f.some((x) => x)) return { empty: true }; return { ok: it.ans.every((a, i) => f[i] && a.indexOf(f[i]) >= 0) && new Set(f).size === f.length }; }
    }
    return { ok: false };
  }

  function correctResponse(it) {
    if (it.type === 'mc') return it.answer;
    if (it.type === 'tap') return it.targets.slice();
    if (it.type === 'build') return it.answer.slice();
    if (it.type === 'type') return it.accept[0];
    if (it.type === 'cloze') { const used = []; return it.ans.map((a) => { const w = a.find((x) => used.indexOf(x) < 0); used.push(w); return w; }); }
  }

  /* Fix This Writing: word diff between messy and clean */
  function fixDiff(piece) {
    const m = tokens(piece.messy);
    const sents = []; const starts = []; let w = 0;
    piece.clean.forEach((p) => p.forEach((s, j) => { if (j === 0) starts.push(sents.length); sents.push({ s, from: w }); w += tokens(s).length; }));
    const c = tokens(piece.clean.map((p) => p.join(' ')).join(' '));
    const errs = []; m.forEach((x, i) => { if (x !== c[i]) errs.push(i); });
    return { messy: m, clean: c, errs, sents: sents.map((x) => x.s), paraStarts: starts.slice(1), aligned: m.length === c.length };
  }

  const Engine = { SKILLS, PARA, skillList, skillMeta, sources, makeItem, check, correctResponse, fixDiff, norm, shuffle, tokens };
  root.WWEngine = Engine;
  if (typeof module !== 'undefined' && module.exports) module.exports = Engine;
  if (typeof document === 'undefined') return;

  /* ================================================================== UI ==== */
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const plural = (n, w, ws) => n + ' ' + (n === 1 ? w : (ws || w + 's'));
  const todayStr = () => { const d = new Date(); return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate(); };
  const wordCount = (s) => (String(s || '').match(/[A-Za-z0-9][A-Za-z0-9'’-]*/g) || []).length;

  /* ------------------------------------------------------------------ storage */
  const KEY = 'ww.v1';
  function blankGrade() { return { xp: 0, stats: {}, count: {}, misses: [], drafts: [], cur: null, fixDone: {}, rounds: 0, recent: [] }; }
  function load() {
    let s = null; try { s = JSON.parse(localStorage.getItem(KEY)); } catch (e) { s = null; }
    if (!s || typeof s !== 'object') s = {};
    s.v = 1; s.grade = s.grade === 3 || s.grade === 5 ? s.grade : null;
    s.names = s.names || { 3: '', 5: '' }; s.days = Array.isArray(s.days) ? s.days : [];
    s.g = s.g || {}; [3, 5].forEach((g) => { s.g[g] = Object.assign(blankGrade(), s.g[g] || {}); });
    return s;
  }
  let S = load();
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* storage full or blocked */ } }
  let saveTimer = null;
  function saveSoon() { clearTimeout(saveTimer); saveTimer = setTimeout(save, 250); }
  function flushSave() { if (saveTimer) { clearTimeout(saveTimer); saveTimer = null; } save(); }
  window.addEventListener('pagehide', flushSave);
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') flushSave(); });
  const P = () => S.g[S.grade];
  function markDay() { const t = todayStr(); if (S.days[S.days.length - 1] !== t) { S.days.push(t); if (S.days.length > 60) S.days = S.days.slice(-60); } }
  function streak() {
    let n = 0; const d = new Date();
    for (let k = 0; k < 60; k++) {
      const s = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
      if (S.days.indexOf(s) >= 0) n++; else if (k > 0) break;
      d.setDate(d.getDate() - 1);
    }
    return n;
  }
  const level = (xp) => Math.floor(xp / 100) + 1;
  function mastery(skill) { const a = P().stats[skill] || []; if (!a.length) return null; return a.reduce((x, y) => x + y, 0) / a.length; }
  function recordStat(skill, first) {
    const p = P(); const a = p.stats[skill] || (p.stats[skill] = []); a.push(first ? 1 : 0); if (a.length > 12) a.shift();
    p.count[skill] = (p.count[skill] || 0) + 1;
  }
  function addMiss(key) { const m = P().misses; const f = m.find((x) => x.k === key); if (f) f.n = 0; else m.push({ k: key, n: 0, t: Date.now() }); }
  const writerName = () => (S.names[S.grade] || '').trim();

  /* ------------------------------------------------------------------ shell */
  const NAV = [
    ['home', '🏠', 'Home', 'Home'], ['gym', '🏋️', 'Sentence Gym', 'Gym'], ['para', '🧱', 'Paragraph Builder', 'Paragraph'],
    ['write', '✍️', 'Write a Piece', 'Write'], ['fix', '🔍', 'Fix This Writing', 'Fix It'], ['misses', '🔁', 'Fix My Misses', 'Misses'], ['grown', '👪', 'Grown-ups', 'Adults']
  ];
  const app = $('#app'); const view = $('#view');

  function shell() {
    $('#nav').innerHTML = '<div class="brand side-brand"><span class="logo">✍️</span><span>Writer\'s<br>Workshop</span></div>' +
      NAV.map((n) => '<a href="#/' + n[0] + '" class="nav-i" data-r="' + n[0] + '"><span class="ni-ic">' + n[1] + '</span><span class="ni-tx"><span class="lg">' + n[2] + '</span><span class="sh">' + n[3] + '</span></span><span class="badge" data-badge="' + n[0] + '" hidden></span></a>').join('') +
      '<div class="side-foot" id="side-foot"></div>';
    updateTop();
  }
  function updateTop() {
    const g = S.grade;
    $('#topbar').innerHTML =
      '<a class="brand top-brand" href="#/home"><span class="logo">✍️</span><span>Writer\'s Workshop</span></a>' +
      '<div class="top-r">' +
      (g ? '<div class="seg" role="group" aria-label="Grade"><button data-g="3" class="' + (g === 3 ? 'on' : '') + '">Grade 3</button><button data-g="5" class="' + (g === 5 ? 'on' : '') + '">Grade 5</button></div>' : '') +
      (g ? '<span class="xp-pill" title="Experience points">⭐ ' + P().xp + '</span>' : '') +
      '<button class="icon-btn" id="theme-btn" aria-label="Switch light or dark mode">' + (document.documentElement.dataset.theme === 'dark' ? '☀️' : '🌙') + '</button>' +
      '</div>';
    $$('#topbar [data-g]').forEach((b) => b.addEventListener('click', () => { S.grade = +b.dataset.g; save(); R = null; updateTop(); route(); }));
    $('#theme-btn').addEventListener('click', () => {
      const t = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = t; S.theme = t; save(); updateTop();
    });
    const nm = g ? (writerName() || 'Writer') : '';
    const sf = $('#side-foot'); if (sf) sf.innerHTML = g ? '<div class="sf-name">' + esc(nm) + '</div><div class="sf-meta">Level ' + level(P().xp) + ' · 🔥 ' + streak() + '-day streak</div>' : '';
    const mb = $$('[data-badge="misses"]'); mb.forEach((b) => { const n = g ? P().misses.length : 0; b.textContent = n ? n : ''; b.hidden = !n; });
  }
  function setNav(r) { $$('.nav-i').forEach((a) => a.classList.toggle('on', a.dataset.r === r)); }
  function setFocus(on) { document.body.classList.toggle('focus', !!on); }
  function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove('show'), 2200); }

  /* ------------------------------------------------------------------ router */
  let R = null; /* current round */
  const routes = { home: renderHome, gym: renderGym, para: renderPara, misses: renderMisses, write: renderWrite, fix: renderFix, grown: renderGrown };
  function route() {
    flushSave();
    const h = (location.hash || '').replace(/^#\/?/, '') || 'home';
    const name = h.split('/')[0];
    R = null; FX = null; setFocus(false);
    if (!S.grade && name !== 'grown') { setNav('home'); renderPickGrade(); return; }
    setNav(routes[name] ? name : 'home');
    (routes[name] || renderHome)();
    updateTop();
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route);
  /* tapping a link to the screen you are already on (for example after a round) still re-opens it */
  document.addEventListener('click', (e) => {
    const a = e.target.closest && e.target.closest('a[href^="#/"]');
    if (a && !e.defaultPrevented && a.getAttribute('href') === location.hash) { e.preventDefault(); route(); }
  });
  function go(r) { if (location.hash === '#/' + r) route(); else location.hash = '#/' + r; }

  function renderPickGrade() {
    view.innerHTML = '<section class="pick"><div class="pick-in"><div class="pick-logo">✍️</div><h1>Welcome to Writer\'s Workshop</h1><p>Short, calm practice for strong sentences, clear paragraphs, and real writing.</p>' +
      '<h2>Who is writing today?</h2><div class="pick-btns"><button class="pick-b" data-g="3"><b>Grade 3</b><span>Capitals, end marks, joining sentences, short pieces</span></button>' +
      '<button class="pick-b" data-g="5"><b>Grade 5</b><span>Commas, run-ons, dialogue, transitions, longer pieces</span></button></div>' +
      '<p class="muted small">You can switch grades any time at the top.</p></div></section>';
    $$('.pick-b').forEach((b) => b.addEventListener('click', () => { S.grade = +b.dataset.g; save(); updateTop(); go('home'); }));
  }

  /* ------------------------------------------------------------------ home */
  function renderHome() {
    const p = P(); const nm = writerName(); const cur = p.drafts.find((d) => d.id === p.cur && !d.done) || p.drafts.find((d) => !d.done);
    const skills = skillList(S.grade);
    const weak = skills.filter((s) => mastery(s.id) != null).sort((a, b) => mastery(a.id) - mastery(b.id))[0];
    const lvl = level(p.xp); const into = p.xp % 100;
    view.innerHTML = '<section class="home">' +
      '<div class="hello"><div><h1>Hi, ' + esc(nm || 'writer') + '!</h1><p class="muted">' + D[S.grade].label + ' · Level ' + lvl + ' · 🔥 ' + plural(streak(), 'day') + ' in a row</p></div>' +
      '<div class="lvl"><div class="lvl-bar"><div style="width:' + into + '%"></div></div><span class="small muted">' + (100 - into) + ' XP to Level ' + (lvl + 1) + '</span></div></div>' +
      '<div class="cards">' +
      card('gym', '🏋️', 'Sentence Gym', '6 quick questions · about 3 minutes', 'Start a round', 'primary',
        '<div class="c-extra"><span class="small">Today\'s mix leans on:</span>' + skills.slice().sort((a, b) => (mastery(a.id) == null ? 0.5 : mastery(a.id)) - (mastery(b.id) == null ? 0.5 : mastery(b.id))).slice(0, 3).map((s) => '<span class="c-chip">' + s.icon + ' ' + esc(s.name) + '</span>').join('') + '</div>') +
      card('misses', '🔁', 'Fix My Misses', p.misses.length ? plural(p.misses.length, 'question') + ' to fix. Get each right twice to clear it.' : 'Nothing to fix right now. Nice work!', p.misses.length ? 'Review ' + Math.min(6, p.misses.length) : 'All clear', p.misses.length ? 'warm' : '', '<div class="c-extra big-n"><b>' + p.misses.length + '</b><span>' + (p.misses.length === 1 ? 'question waiting' : 'questions waiting') + '</span></div>') +
      card('para', '🧱', 'Paragraph Builder', 'Order sentences, find the one that does not belong, add linking words.', 'Build', '',
        '<div class="c-extra">' + PARA.map((x) => '<span class="c-chip">' + x.icon + ' ' + esc(x.name) + '</span>').join('') + '</div>') +
      card('write', '✍️', 'Write a Piece', cur ? 'Keep going: ' + esc(D[S.grade].write[cur.type].name) + ' about “' + esc(cur.topic) + '”' : 'Plan it, draft it part by part, check it, publish it.', cur ? 'Continue' : 'Start writing', '', '<div class="c-extra">' + Object.keys(D[S.grade].write).map((t) => '<span class="c-chip">' + D[S.grade].write[t].icon + ' ' + esc(D[S.grade].write[t].name) + '</span>').join('') + '<span class="small muted">' + p.drafts.filter((d) => d.done).length + ' finished in your folder</span></div>') +
      card('fix', '🔍', 'Fix This Writing', 'A messy draft needs your editing eyes. Find every mistake.', 'Edit', '',
        '<div class="c-extra">' + D[S.grade].fix.map((f) => '<span class="c-chip">' + (p.fixDone[f.id] ? '✅ ' : '📝 ') + esc(f.t) + '</span>').join('') + '</div>') +
      '<a class="card skills-card" href="#/gym"><div class="c-top"><span class="c-ic">📈</span><h2>My skills</h2></div><div class="mini-meters">' +
      skills.map((s) => meterRow(s)).join('') + '</div>' + (weak ? '<p class="small muted">Practice next: ' + weak.icon + ' ' + esc(weak.name) + '</p>' : '') + '</a>' +
      '</div></section>';
    function card(r, ic, t, d, btn, kind, extra) {
      return '<a class="card c-' + r + ' ' + (kind || '') + '" href="#/' + r + '" data-card="' + r + '"><div class="c-top"><span class="c-ic">' + ic + '</span><h2>' + t + '</h2></div><p>' + d + '</p>' + (extra || '') + '<span class="c-btn">' + btn + ' →</span></a>';
    }
    const gc = $('[data-card="gym"]'); gc.addEventListener('click', (e) => { e.preventDefault(); startGym(null); });
    const mc = $('[data-card="misses"]'); mc.addEventListener('click', (e) => { if (P().misses.length) { e.preventDefault(); startMisses(); } });
  }
  function meterRow(s) {
    const m = mastery(s.id); const pct = m == null ? 0 : Math.round(m * 100);
    return '<div class="mm"><span class="mm-n">' + s.icon + ' ' + esc(s.name) + '</span><span class="meter"><span style="width:' + pct + '%"></span></span><span class="mm-p">' + (m == null ? '–' : pct + '%') + '</span></div>';
  }

  /* ------------------------------------------------------------------ gym / para / misses screens */
  function renderGym() {
    const skills = skillList(S.grade);
    view.innerHTML = '<section class="page"><div class="page-head"><h1>🏋️ Sentence Gym</h1><p class="muted">Rounds of 6. Two tries per question. First-try answers earn ⭐ 10 XP. Misses come back in Fix My Misses.</p></div>' +
      '<button class="hero" id="mixed"><span class="hero-ic">▶</span><span><b>Mixed round</b><small>Picks the skills you need most</small></span></button>' +
      '<div class="tiles">' + skills.map((s) => tile(s, (P().count[s.id] || 0))).join('') + '</div></section>';
    $('#mixed').addEventListener('click', () => startGym(null));
    $$('.tile').forEach((t) => t.addEventListener('click', () => startGym(t.dataset.s)));
  }
  function tile(s, n) {
    const m = mastery(s.id); const pct = m == null ? 0 : Math.round(m * 100);
    return '<button class="tile" data-s="' + s.id + '"><span class="t-ic">' + s.icon + '</span><span class="t-n">' + esc(s.name) + (s.stretch ? ' <em class="tag">stretch</em>' : '') + '</span>' +
      '<span class="meter"><span style="width:' + pct + '%"></span></span><span class="t-m">' + (n ? plural(n, 'answer') + ' · ' + pct + '% first try' : 'Not started') + '</span></button>';
  }
  function renderPara() {
    view.innerHTML = '<section class="page"><div class="page-head"><h1>🧱 Paragraph Builder</h1><p class="muted">A paragraph is a team of sentences about one idea. Build them, check them, link them.</p></div>' +
      '<button class="hero" id="mixed"><span class="hero-ic">▶</span><span><b>Mixed paragraph round</b><small>One of each, 5 questions</small></span></button>' +
      '<div class="tiles">' + PARA.map((s) => tile(s, (P().count[s.id] || 0))).join('') + '</div></section>';
    $('#mixed').addEventListener('click', () => startPara(null));
    $$('.tile').forEach((t) => t.addEventListener('click', () => startPara(t.dataset.s)));
  }
  function renderMisses() {
    const m = P().misses;
    if (!m.length) {
      view.innerHTML = '<section class="page center-page"><div class="empty"><div class="big-emoji">🎉</div><h1>No misses to fix</h1><p class="muted">When you miss a question, it waits here until you get it right twice.</p><a class="btn primary" href="#/gym">Go to Sentence Gym</a></div></section>';
      return;
    }
    const by = {}; m.forEach((x) => { const s = x.k.split(':')[0]; by[s] = (by[s] || 0) + 1; });
    view.innerHTML = '<section class="page"><div class="page-head"><h1>🔁 Fix My Misses</h1><p class="muted">Each miss clears after you get it right on the first try twice (in two different rounds).</p></div>' +
      '<button class="hero warm" id="go"><span class="hero-ic">▶</span><span><b>Review ' + Math.min(6, m.length) + ' now</b><small>' + plural(m.length, 'miss', 'misses') + ' waiting</small></span></button>' +
      '<div class="tiles">' + Object.keys(by).map((s) => { const meta = skillMeta(S.grade, s) || { icon: '•', name: s }; const done = m.filter((x) => x.k.split(':')[0] === s && x.n > 0).length;
        return '<div class="tile static"><span class="t-ic">' + meta.icon + '</span><span class="t-n">' + esc(meta.name) + '</span><span class="t-m">' + plural(by[s], 'miss', 'misses') + (done ? ' · ' + done + ' halfway fixed' : '') + '</span></div>'; }).join('') + '</div></section>';
    $('#go').addEventListener('click', startMisses);
  }

  /* ------------------------------------------------------------------ round setup */
  /* Session pools: shuffled once, drawn without repeats until the pool is used up. */
  const POOLS = {};
  function freshPool(skill) {
    const recent = P().recent; const all = shuffle(sources(S.grade, skill));
    return all.filter((k) => recent.indexOf(k) < 0).concat(all.filter((k) => recent.indexOf(k) >= 0));
  }
  function drawKey(skill, avoid) {
    const id = S.grade + ':' + skill; let pool = POOLS[id];
    if (!pool || !pool.length) pool = POOLS[id] = freshPool(skill);
    for (let t = 0; t < pool.length; t++) if (avoid.indexOf(pool[t]) < 0) return pool.splice(t, 1)[0];
    const fresh = freshPool(skill).filter((k) => avoid.indexOf(k) < 0); if (!fresh.length) return null;
    POOLS[id] = fresh; return fresh.shift();
  }
  function startGym(skill) {
    const keys = [];
    if (skill) { const n = Math.min(6, sources(S.grade, skill).length); for (let k = 0; k < n; k++) { const key = drawKey(skill, keys); if (key) keys.push(key); } }
    else {
      const sk = skillList(S.grade);
      const w = sk.map((s) => { const m = mastery(s.id); return (m == null ? 0.8 : 1.15 - m) * (s.stretch ? 0.45 : 1); });
      const used = {}; let guard = 0;
      while (keys.length < 6 && guard++ < 60) {
        const ww = w.map((x, i) => (used[sk[i].id] >= 2 ? 0 : x / (1 + (used[sk[i].id] || 0) * 2))); let tot = 0; ww.forEach((x) => { tot += x; });
        let r = Math.random() * tot; let i = 0; while (i < ww.length - 1 && r > ww[i]) { r -= ww[i]; i++; }
        const k = drawKey(sk[i].id, keys); used[sk[i].id] = (used[sk[i].id] || 0) + 1; if (k) keys.push(k);
      }
    }
    startRound(skill ? 'gym:' + skill : 'gym', keys, skill ? skillMeta(S.grade, skill).name : 'Mixed round');
  }
  function startPara(kind) {
    const keys = [];
    if (kind) { const n = Math.min(4, sources(S.grade, kind).length); for (let k = 0; k < n; k++) { const key = drawKey(kind, keys); if (key) keys.push(key); } }
    else PARA.forEach((p) => { const k = drawKey(p.id, keys); if (k) keys.push(k); });
    startRound(kind ? 'para:' + kind : 'para', keys, kind ? skillMeta(S.grade, kind).name : 'Paragraph round');
  }
  function startMisses() {
    const keys = P().misses.slice().sort((a, b) => a.t - b.t).slice(0, 6).map((x) => x.k);
    startRound('misses', keys, 'Fix My Misses');
  }
  const isWide = () => window.innerWidth >= 1100;
  function newEntry(it) { return { it, tries: 0, done: false, result: null, msg: '', hint: false, fixMsg: '', lastSel: null, st: { sel: null, bad: [], on: [], good: [], placed: [], fill: [], active: 0, text: '', lockN: 0 } }; }
  function startRound(kind, keys, title) {
    R = { kind, title, items: keys.map((k) => newEntry(makeItem(S.grade, k))), i: 0, xp: 0, fixed: 0, saved: 0, multi: isWide() };
    setFocus(true); renderRound(); window.scrollTo(0, 0);
  }
  root.__R = () => R;

  /* ------------------------------------------------------------------ round view */
  function layoutClass(it) {
    if (it.layout) return it.layout;
    const ch = it.choices; const max = Math.max.apply(null, ch.map((c) => c.length));
    if (ch.every((c) => !/\s/.test(c.trim())) && ch.length <= 5 && max <= 14) return 'row';
    if (max <= 52) return 'grid2' + (max > 13 ? ' gw' : '');
    return 'col';
  }
  const BIG = /^(p-|dialogue)/;
  function gridCols() {
    const big = R.items.some((e) => BIG.test(e.it.skill) || e.it.type === 'build' || e.it.type === 'type');
    if (R.items.length <= 2) return R.items.length;
    if (big) return window.innerWidth >= 1800 ? 3 : 2;
    return window.innerWidth >= 1500 ? 3 : 2;
  }
  const doneCount = () => R.items.filter((e) => e.done).length;

  function renderRound() {
    const meta = skillMeta(S.grade, R.items[0].it.skill) || {};
    if (R.multi) {
      const cols = gridCols(); const all = doneCount() === R.items.length;
      view.innerHTML = '<section class="act multi">' +
        '<div class="act-head"><button class="icon-btn" id="quit" aria-label="Leave this round">✕</button><h2 class="round-t">' + esc(R.title) + '</h2>' +
        '<div class="prog" aria-label="Progress"><div id="progbar" style="width:' + Math.round(doneCount() / R.items.length * 100) + '%"></div></div>' +
        '<span class="count" id="count">' + doneCount() + ' of ' + R.items.length + ' done</span><span class="xp-pill" id="rxp">⭐ ' + R.xp + '</span></div>' +
        '<div class="card-grid" style="--cols:' + cols + '">' + R.items.map((e, i) => '<article class="q-card" id="qc-' + i + '"></article>').join('') + '</div>' +
        '<div class="act-foot finish-bar' + (all ? ' good' : '') + '" id="finbar"></div></section>';
      R.items.forEach((e, i) => renderCard(i));
      renderFinish();
    } else {
      const e = R.items[R.i]; const m = skillMeta(S.grade, e.it.skill) || meta;
      view.innerHTML = '<section class="act">' +
        '<div class="act-head"><button class="icon-btn" id="quit" aria-label="Leave this round">✕</button>' +
        '<div class="prog" aria-label="Progress"><div style="width:' + Math.round((R.i / R.items.length) * 100) + '%"></div></div>' +
        '<span class="count">' + (R.i + 1) + ' / ' + R.items.length + '</span></div>' +
        '<div class="act-body"><article class="q-card single" id="qc-' + R.i + '"></article></div>' +
        '<div class="act-foot" id="foot"></div></section>';
      renderCard(R.i);
    }
    $('#quit').addEventListener('click', () => { R = null; setFocus(false); route(); });
  }
  function renderFinish() {
    const fb = $('#finbar'); if (!fb) return;
    const n = doneCount(); const all = n === R.items.length;
    fb.className = 'act-foot finish-bar' + (all ? ' good' : '');
    fb.innerHTML = '<div class="fb">' + (all ? '<b>✅ All done!</b> <span class="why">' + R.items.filter((e) => e.result === 'first').length + ' of ' + R.items.length + ' right on the first try.</span>' : '<span class="why">Answer each card and press its Check button. ' + (R.items.length - n) + ' to go.</span>') + '</div>' +
      '<div class="btns"><button class="btn primary' + (all ? '' : ' soft') + '" id="finish"' + (all ? '' : ' disabled') + '>Finish round →</button></div>';
    $('#finish').addEventListener('click', () => { if (doneCount() === R.items.length) endRound(); });
    const pb = $('#progbar'); if (pb) pb.style.width = Math.round(n / R.items.length * 100) + '%';
    const c = $('#count'); if (c) c.textContent = n + ' of ' + R.items.length + ' done';
    const x = $('#rxp'); if (x) x.textContent = '⭐ ' + R.xp;
  }

  function cardHtml(i) {
    const e = R.items[i]; const it = e.it; const st = e.st; const meta = skillMeta(S.grade, it.skill) || {};
    const done = e.done;
    let h = '<div class="qc-top"><span class="skill-tag">' + (meta.icon || '') + ' ' + esc(meta.name || '') + '</span>' + (R.multi ? '<span class="qc-n">' + (i + 1) + '</span>' : '') +
      '<button class="icon-btn hint-btn" data-hint="' + i + '" aria-label="Show the rule" aria-pressed="' + e.hint + '">💡</button></div>' +
      '<h2 class="prompt">' + esc(it.prompt) + '</h2>';
    if (e.hint) h += '<div class="rule-pop">💡 ' + esc(meta.rule || '') + '</div>';
    if (it.title) h += '<div class="it-title">' + esc(it.title) + '</div>';
    if (it.context) h += '<div class="context"><span><b>1</b> ' + esc(it.context[0]) + '</span><span><b>2</b> ' + esc(it.context[1]) + '</span></div>';
    if (it.show) h += '<div class="show-box">' + esc(it.show) + '</div>';
    if (it.type === 'mc') {
      if (it.q) {
        const filled = done ? it.answer : st.sel;
        const blank = '<span class="blank' + (filled != null ? ' filled' : '') + (done ? ' ok' : '') + '">' + (filled != null ? esc(filled) : '&nbsp;') + '</span>';
        h += '<div class="q">' + esc(it.q).replace('___', blank) + '</div>';
      }
      h += '<div class="choices ' + layoutClass(it) + (it.mono ? ' mono' : '') + '" style="--n:' + it.choices.length + '">' + it.choices.map((c, j) => {
        let cls = 'choice';
        if (done) { if (c === it.answer) cls += ' right'; else if (c === e.lastSel && e.result === 'miss') cls += ' wrong'; else cls += ' dim'; }
        else { if (st.sel === c) cls += ' sel'; if (st.bad.indexOf(c) >= 0) cls += ' bad'; }
        const lab = it.labels ? '<span class="big-mark">' + esc(c) + '</span><small>' + esc(it.labels[c]) + '</small>' : esc(c);
        return '<button class="' + cls + '" data-c="' + j + '"' + ((done || st.bad.indexOf(c) >= 0) ? ' disabled' : '') + ' aria-pressed="' + (st.sel === c) + '">' + (R.multi ? '' : '<span class="key">' + (j + 1) + '</span>') + '<span class="c-t">' + lab + '</span></button>';
      }).join('') + '</div>';
    } else if (it.type === 'tap') {
      h += '<div class="taps' + (it.sentences ? ' sents' : '') + '">' + it.words.map((w, j) => {
        const locked = it.locked && it.locked.indexOf(j) >= 0; let cls = 'tw'; let inner = esc(w);
        const isT = it.targets.indexOf(j) >= 0; const on = st.on.indexOf(j) >= 0;
        if (done) { if (isT && on) { cls += ' right'; inner = fixLabel(it, j); } else if (isT) { cls += ' miss'; inner = fixLabel(it, j); } else if (on) cls += ' extra'; }
        else { if (on) cls += ' on'; if (st.good.indexOf(j) >= 0) cls += ' good'; }
        if (locked) cls += ' lock';
        return '<button class="' + cls + '" data-w="' + j + '"' + (done || locked || st.good.indexOf(j) >= 0 ? ' disabled' : '') + ' aria-pressed="' + on + '">' + inner + '</button>';
      }).join(it.sentences ? '' : ' ') + '</div>';
      if (!done) h += '<p class="small muted tap-count">' + (st.on.length ? plural(st.on.length, it.sentences ? 'sentence' : 'word') + ' tapped. Tap again to undo.' : 'Tap to mark. Tap again to undo.') + '</p>';
    } else if (it.type === 'build') {
      const placed = done ? it.answer.map((a) => it.chunks.indexOf(a)) : st.placed;
      h += '<div class="build-ans' + (it.vertical ? ' vert' : '') + (done ? (e.result === 'miss' ? ' shown' : ' ok') : '') + '">' +
        (placed.length ? placed.map((ci, n) => '<button class="chunk placed" data-p="' + n + '"' + (done || n < st.lockN ? ' disabled' : '') + '>' + (it.vertical ? '<span class="num">' + (n + 1) + '</span>' : '') + esc(it.chunks[ci]) + '</button>').join('') : '<span class="ph">Tap the pieces below in order</span>') + '</div>';
      if (!done) h += '<div class="build-pool' + (it.vertical ? ' vert' : '') + '">' + it.chunks.map((c, ci) => st.placed.indexOf(ci) >= 0 ? '' : '<button class="chunk" data-k="' + ci + '">' + esc(c) + '</button>').join('') + '</div>';
    } else if (it.type === 'cloze') {
      const fill = done ? correctResponse(it) : st.fill;
      h += '<div class="cloze-text">' + esc(it.text).replace(/\{(\d)\}/g, (m, d) => {
        const b = +d; const f = fill[b];
        return '<button class="cblank' + (f ? ' filled' : '') + (!done && st.active === b ? ' active' : '') + (done ? ' ok' : '') + '" data-b="' + b + '"' + (done ? ' disabled' : '') + '>' + (f ? esc(f) : '<span class="bn">' + (b + 1) + '</span>') + '</button>';
      }) + '</div>';
      if (!done) h += '<div class="bank">' + it.bank.map((w, j) => '<button class="chunk' + (st.fill.indexOf(w) >= 0 ? ' used' : '') + '" data-bw="' + j + '"' + (st.fill.indexOf(w) >= 0 ? ' disabled' : '') + '>' + esc(w) + '</button>').join('') + '</div>' +
        '<p class="small muted">Tap a word to fill the glowing blank. Tap a filled blank to empty it.</p>';
    } else if (it.type === 'type') {
      h += '<div class="wrong-box"><span class="small muted">Fix this:</span><div class="wrong-s">' + esc(it.wrong) + '</div></div>';
      if (done) h += '<div class="answer-box"><span class="small muted">' + (e.result === 'miss' ? 'Correct version:' : 'You typed:') + '</span><div>' + esc(e.result === 'miss' ? it.accept[0] : st.text) + '</div></div>';
      else h += '<textarea class="type-in" data-type="' + i + '" rows="2" autocapitalize="off" autocorrect="off" autocomplete="off" spellcheck="false" placeholder="Type the fixed sentence here">' + esc(st.text) + '</textarea>' +
        '<button class="btn ghost small-btn" data-startwith="' + i + '">Start with the sentence and fix it</button>';
    }
    return h;
  }
  function fixLabel(it, j) { return it.sentences ? '<span class="pmark">¶</span> ' + esc(it.words[j]) : esc(it.fixed[j]); }

  function footHtml(i) {
    const e = R.items[i]; const it = e.it; const last = i === R.items.length - 1;
    let cls = ''; let fb = ''; let btns = '';
    if (e.done) {
      if (e.result === 'first') { cls = 'good'; fb = '<b>✅ Correct! +10 XP</b>'; }
      else if (e.result === 'second') { cls = 'good'; fb = '<b>✅ Got it on the second try.</b>'; }
      else { cls = 'reveal'; fb = '<b>Here is the answer.</b>'; }
      if (e.fixMsg) fb += ' <span class="fixmsg">' + esc(e.fixMsg) + '</span>';
      fb += '<span class="why">' + esc(it.why) + '</span>';
      if (!R.multi) btns = '<button class="btn primary" id="next">' + (last ? 'Finish' : 'Next') + ' →</button>';
    } else {
      const empty = check(it, response(e)).empty;
      if (e.tries === 1) { cls = 'warn'; fb = '<b>Not quite.</b> <span class="why">' + esc(e.msg || 'Try once more.') + '</span>'; btns = '<button class="btn ghost" data-show="' + i + '">Show answer</button>'; }
      else if (e.msg) fb = '<span class="why">' + esc(e.msg) + '</span>';
      btns += '<button class="btn primary' + (empty ? ' soft' : '') + '" data-check="' + i + '">Check</button>';
    }
    return { cls, html: '<div class="fb" role="status" aria-live="polite">' + fb + '</div><div class="btns">' + btns + '</div>' };
  }

  function renderCard(i) {
    const card = $('#qc-' + i); if (!card) return;
    const e = R.items[i]; const f = footHtml(i);
    if (R.multi) {
      card.className = 'q-card' + (e.done ? ' is-done ' + e.result : '') + (e.tries === 1 && !e.done ? ' is-warn' : '');
      card.innerHTML = cardHtml(i) + '<div class="qc-foot ' + f.cls + '">' + f.html + '</div>';
      renderFinish();
    } else {
      card.innerHTML = cardHtml(i);
      const ft = $('#foot'); ft.className = 'act-foot ' + f.cls; ft.innerHTML = f.html;
      if ($('#next')) $('#next').addEventListener('click', nextItem);
    }
    bindCard(i);
  }
  function rerender(i) { const y = window.scrollY; renderCard(i); if (R.multi) window.scrollTo(0, y); }

  function bindCard(i) {
    const e = R.items[i]; const it = e.it; const st = e.st; const box = $('#qc-' + i); const scope = R.multi ? box : view;
    const hb = $('[data-hint="' + i + '"]', box); if (hb) hb.addEventListener('click', () => { e.hint = !e.hint; rerender(i); });
    const ck = $('[data-check="' + i + '"]', scope); if (ck) ck.addEventListener('click', () => onCheck(i));
    const sh = $('[data-show="' + i + '"]', scope); if (sh) sh.addEventListener('click', () => finishItem(i, 'miss'));
    if (e.done) return;
    const changed = () => { e.msg = ''; rerender(i); };
    if (it.type === 'mc') $$('.choice', box).forEach((b) => b.addEventListener('click', () => { const c = it.choices[+b.dataset.c]; st.sel = st.sel === c ? null : c; changed(); }));
    if (it.type === 'tap') $$('.tw', box).forEach((b) => b.addEventListener('click', () => { const j = +b.dataset.w; const k = st.on.indexOf(j); if (k >= 0) st.on.splice(k, 1); else st.on.push(j); changed(); }));
    if (it.type === 'build') {
      $$('.chunk[data-k]', box).forEach((b) => b.addEventListener('click', () => { st.placed.push(+b.dataset.k); changed(); }));
      $$('.chunk[data-p]', box).forEach((b) => b.addEventListener('click', () => { st.placed.splice(+b.dataset.p, 1); changed(); }));
    }
    if (it.type === 'cloze') {
      const nb = it.ans.length;
      $$('.cblank', box).forEach((b) => b.addEventListener('click', () => { const k = +b.dataset.b; if (st.fill[k]) st.fill[k] = null; st.active = k; changed(); }));
      $$('[data-bw]', box).forEach((b) => b.addEventListener('click', () => {
        const w = it.bank[+b.dataset.bw]; let a = st.active; if (st.fill[a]) { a = -1; for (let k = 0; k < nb; k++) if (!st.fill[k]) { a = k; break; } }
        if (a < 0) a = st.active; st.fill[a] = w;
        let nx = -1; for (let k = 1; k <= nb; k++) { const j = (a + k) % nb; if (!st.fill[j]) { nx = j; break; } }
        st.active = nx < 0 ? a : nx; changed();
      }));
    }
    if (it.type === 'type') {
      const ta = $('[data-type="' + i + '"]', box);
      const upd = () => { const f = footHtml(i); const foot = R.multi ? $('.qc-foot', box) : $('#foot'); const btn = $('[data-check="' + i + '"]', foot); if (btn) btn.classList.toggle('soft', check(it, response(e)).empty); };
      ta.addEventListener('input', () => { st.text = ta.value; upd(); });
      ta.addEventListener('keydown', (ev) => { if (ev.key === 'Enter') { ev.preventDefault(); onCheck(i); } });
      $('[data-startwith="' + i + '"]', box).addEventListener('click', () => { ta.value = it.wrong; st.text = it.wrong; ta.focus(); upd(); });
    }
  }

  function response(e) {
    const it = e.it; const st = e.st;
    if (it.type === 'mc') return st.sel;
    if (it.type === 'tap') return st.on;
    if (it.type === 'build') return st.placed.map((k) => it.chunks[k]);
    if (it.type === 'type') return st.text;
    if (it.type === 'cloze') { const a = []; for (let k = 0; k < it.ans.length; k++) a.push(st.fill[k] || null); return a; }
  }

  function onCheck(i) {
    if (!R) return; const e = R.items[i]; if (!e || e.done) return;
    const it = e.it; const res = check(it, response(e));
    if (res.empty) { e.msg = it.type === 'type' ? 'Type the sentence first.' : (it.type === 'tap' ? 'Tap at least one first.' : 'Choose an answer first.'); rerender(i); return; }
    e.lastSel = e.st.sel;
    if (res.ok) { finishItem(i, e.tries === 0 ? 'first' : 'second'); return; }
    e.tries++;
    if (e.tries >= 2) { finishItem(i, 'miss'); return; }
    partial(e); rerender(i);
  }

  function partial(e) {
    const it = e.it; const st = e.st;
    if (it.type === 'mc') { st.bad.push(st.sel); st.sel = null; e.msg = 'That one is crossed out. Try once more.'; }
    if (it.type === 'tap') {
      const good = st.on.filter((j) => it.targets.indexOf(j) >= 0); const extra = st.on.length - good.length; const word = it.sentences ? 'sentence' : 'word';
      st.on = good.slice(); st.good = good.slice();
      e.msg = 'You found ' + good.length + ' of ' + it.targets.length + '.' + (extra ? ' ' + plural(extra, word) + ' you tapped ' + (extra === 1 ? 'was' : 'were') + ' already fine, so I cleared ' + (extra === 1 ? 'it' : 'them') + '.' : '') + ' Look again.';
    }
    if (it.type === 'build') {
      let k = 0; while (k < st.placed.length && it.chunks[st.placed[k]] === it.answer[k]) k++;
      st.placed = st.placed.slice(0, k); st.lockN = k;
      e.msg = k ? 'The first ' + plural(k, 'piece') + (k === 1 ? ' is' : ' are') + ' right. Keep going from there.' : 'The first piece is not right. What should come first?';
    }
    if (it.type === 'cloze') {
      let ok = 0; it.ans.forEach((a, k) => { if (st.fill[k] && a.indexOf(st.fill[k]) >= 0) ok++; else st.fill[k] = null; });
      st.active = st.fill.findIndex((x) => !x); if (st.active < 0) st.active = 0;
      e.msg = ok + ' of ' + it.ans.length + ' blanks are right. The wrong ones are empty again.';
    }
    if (it.type === 'type') {
      const a = tokens(norm(st.text)); const b = tokens(norm(it.accept[0])); let k = 0; while (k < a.length && a[k] === b[k]) k++;
      e.msg = k < a.length ? 'Look closely at “' + a[k] + '”. Check capitals, commas, apostrophes, quotation marks, and the end mark.' : 'Something is missing at the end. Check the end mark.';
    }
  }

  function finishItem(i, result) {
    const e = R.items[i]; const it = e.it; const p = P();
    e.done = true; e.result = result; e.fixMsg = '';
    recordStat(it.skill, result === 'first');
    p.recent.push(it.key); if (p.recent.length > 40) p.recent = p.recent.slice(-40);
    if (result === 'first') { R.xp += 10; p.xp += 10; }
    const f = p.misses.find((x) => x.k === it.key);
    if (result === 'first' && f) {
      f.n++;
      if (f.n >= 2) { p.misses.splice(p.misses.indexOf(f), 1); R.fixed++; e.fixMsg = 'This miss is fixed for good!'; }
      else e.fixMsg = 'One more first-try right clears this miss.';
    } else if (result !== 'first') { addMiss(it.key); if (R.kind !== 'misses') { R.saved++; e.fixMsg = 'Saved to Fix My Misses.'; } }
    markDay(); save(); updateTop();
    rerender(i);
  }

  function nextItem() {
    if (R.i >= R.items.length - 1) { endRound(); return; }
    const y = window.scrollY;
    R.i++; renderRound();
    /* keep the scroll position; only nudge if the new prompt is out of view */
    window.scrollTo(0, y);
    const pr = $('.prompt'); const top = $('#topbar').getBoundingClientRect().bottom;
    if (pr) { const r = pr.getBoundingClientRect(); if (r.top < top || r.top > window.innerHeight * 0.6) window.scrollTo(0, Math.max(0, window.scrollY + r.top - top - 70)); }
  }

  window.addEventListener('resize', () => {
    if (!R || !view.querySelector('.act')) return;
    const w = isWide();
    if (w !== R.multi) { if (!w) { const k = R.items.findIndex((e) => !e.done); R.i = k < 0 ? R.items.length - 1 : k; } R.multi = w; renderRound(); }
    else if (R.multi) { const g = $('.card-grid'); if (g) g.style.setProperty('--cols', gridCols()); }
  });

  function endRound() {
    const p = P(); p.rounds++; markDay(); save(); updateTop();
    const res = R.items.map((e) => e.result || 'miss');
    const first = res.filter((x) => x === 'first').length; const n = res.length;
    const emoji = first === n ? '🌟' : first >= n / 2 ? '💪' : '🌱';
    const msg = first === n ? 'Perfect round!' : first >= n / 2 ? 'Strong work!' : 'Good practice. Misses make you stronger.';
    const kind = R.kind; const title = R.title; const xp = R.xp; const saved = R.saved; const fixed = R.fixed;
    view.innerHTML = '<section class="summary"><div class="sum-in"><div class="big-emoji">' + emoji + '</div><h1>' + msg + '</h1><p class="muted">' + esc(title) + '</p>' +
      '<div class="dots big">' + res.map((r) => '<span class="dot ' + r + '"></span>').join('') + '</div>' +
      '<div class="sum-stats"><div><b>' + first + '/' + n + '</b><span>first try</span></div><div><b>+' + xp + '</b><span>XP</span></div>' +
      (kind === 'misses' ? '<div><b>' + fixed + '</b><span>fixed for good</span></div>' : '<div><b>' + saved + '</b><span>saved to review</span></div>') + '</div>' +
      '<div class="sum-btns"><button class="btn primary" id="again">Another round</button>' + (p.misses.length && kind !== 'misses' ? '<button class="btn" id="mis">Fix my misses (' + p.misses.length + ')</button>' : '') + '<a class="btn ghost" href="#/home">Home</a></div></div></section>';
    R = null; setFocus(false); window.scrollTo(0, 0);
    $('#again').addEventListener('click', () => {
      if (kind === 'misses') { if (P().misses.length) startMisses(); else go('misses'); }
      else if (kind.indexOf('para') === 0) startPara(kind.split(':')[1] || null);
      else startGym(kind.split(':')[1] || null);
    });
    if ($('#mis')) $('#mis').addEventListener('click', startMisses);
  }

  document.addEventListener('keydown', (ev) => {
    if (!R || R.multi || ev.altKey || ev.ctrlKey || ev.metaKey) return;
    const tag = (ev.target.tagName || '').toLowerCase();
    if (tag === 'textarea' || tag === 'input') return;
    const e = R.items[R.i];
    if (ev.key === 'Enter') { ev.preventDefault(); const b = $('#next') || $('[data-check="' + R.i + '"]'); if (b) b.click(); }
    else if (/^[1-9]$/.test(ev.key) && e.it.type === 'mc' && !e.done) { const b = $$('#qc-' + R.i + ' .choice')[+ev.key - 1]; if (b && !b.disabled) b.click(); }
  });

  /* ------------------------------------------------------------------ write a piece */
  let WZ = null; /* setup wizard state */
  const W = (d) => D[S.grade].write[d.type];
  const curDraft = () => P().drafts.find((d) => d.id === P().cur) || null;
  function draftText(d) { return W(d).parts.map((pt) => String(d.parts[pt.id] || '').trim()).filter(Boolean).join('\n'); }
  function touch(d) { d.updated = Date.now(); saveSoon(); }

  function renderWrite() {
    const d = curDraft();
    if (WZ) return renderSetup();
    if (d && d.step) return renderDraftStep(d);
    renderWriteHome();
  }
  function renderWriteHome() {
    const p = P(); const done = p.drafts.slice().sort((a, b) => (a.done - b.done) || (b.updated - a.updated)); const wip = done.find((d) => !d.done);
    view.innerHTML = '<section class="page write-home"><div class="page-head"><h1>✍️ Write a Piece</h1><p class="muted">Plan → Draft one part at a time → Check → Publish. Type it here or write on paper.</p></div>' +
      '<div class="wh-grid"><div class="wh-new">' + (wip ? '<button class="hero warm" data-open="' + wip.id + '"><span class="hero-ic">' + W(wip).icon + '</span><span><b>Keep going: ' + esc(wip.topic) + '</b><small>' + esc(W(wip).name) + ' · next step: ' + esc(wip.step || 'plan') + '</small></span></button>' : '') +
      '<button class="hero" id="newp"><span class="hero-ic">＋</span><span><b>Start a new piece</b><small>' + (S.grade === 3 ? '3 short parts · about 50 words' : '4 parts · about 150 words') + '</small></span></button>' +
      Object.keys(D[S.grade].write).map((t) => { const w = D[S.grade].write[t]; return '<button class="type-card" data-t="' + t + '"><span class="tc-ic">' + w.icon + '</span><span><b>' + esc(w.name) + '</b><small>' + esc(w.blurb) + '</small></span></button>'; }).join('') +
      '</div><div class="wh-folder"><h2>📁 My folder</h2>' +
      (done.length ? '<div class="folder">' + done.map((d) => '<div class="fold-i"><span class="tc-ic">' + W(d).icon + '</span><span class="fi-t"><b>' + esc(d.title || d.topic) + '</b><small>' + esc(W(d).name) + ' · ' + new Date(d.updated).toLocaleDateString() + (d.mode === 'paper' ? ' · on paper' : ' · ' + plural(wordCount(draftText(d)), 'word')) + (d.done ? '' : ' · in progress') + '</small></span>' +
        '<button class="btn small-btn" data-open="' + d.id + '">' + (d.done ? 'Open' : 'Continue') + '</button></div>').join('') + '</div>' : '<p class="muted">Finished pieces will be saved here.</p>') +
      '</div></div></section>';
    $('#newp').addEventListener('click', () => { P().cur = null; WZ = { step: 1 }; renderSetup(); });
    $$('.type-card').forEach((b) => b.addEventListener('click', () => { WZ = { step: 2, type: b.dataset.t }; renderSetup(); }));
    $$('[data-open]').forEach((b) => b.addEventListener('click', () => { const d = P().drafts.find((x) => x.id === b.dataset.open); if (d) { P().cur = d.id; d.step = d.done ? 'publish' : (d.step || 'plan'); save(); renderWrite(); window.scrollTo(0, 0); } }));
  }

  function renderSetup() {
    const G = D[S.grade]; let h = '<section class="page setup"><div class="setup-in">';
    h += '<div class="mini-steps">' + [1, 2, 3].map((n) => '<span class="' + (WZ.step >= n ? 'on' : '') + '">' + n + '</span>').join('') + '</div>';
    if (WZ.step === 1) {
      h += '<h1>What kind of writing?</h1><div class="type-cards">' + Object.keys(G.write).map((t) => '<button class="type-card big" data-t="' + t + '"><span class="tc-ic">' + G.write[t].icon + '</span><span><b>' + esc(G.write[t].name) + '</b><small>' + esc(G.write[t].blurb) + '</small></span></button>').join('') + '</div>';
    } else if (WZ.step === 2) {
      const w = G.write[WZ.type];
      h += '<h1>What will you write about?</h1><p class="muted">' + w.icon + ' ' + esc(w.name) + '. Pick an idea or type your own.</p><div class="choices grid2 gw prompts">' +
        w.prompts.map((pr) => '<button class="choice' + (WZ.topic === pr ? ' sel' : '') + '" data-pr="' + esc(pr) + '"><span class="c-t">' + esc(pr) + '</span></button>').join('') + '</div>' +
        '<label class="own"><span>My own idea</span><input id="own" type="text" maxlength="90" placeholder="Type a topic" value="' + esc(WZ.own || '') + '"></label>';
    } else {
      h += '<h1>How will you write it?</h1><p class="muted">You get the same tips, starters, and examples either way.</p><div class="type-cards two">' +
        '<button class="type-card big" data-m="type"><span class="tc-ic">⌨️</span><span><b>Type it here</b><small>Write each part in a box. The computer checks capitals, end marks, and more.</small></span></button>' +
        '<button class="type-card big" data-m="paper"><span class="tc-ic">📝</span><span><b>Write on paper</b><small>Use the plan and tips here, write with a pencil, tick each part when it is done.</small></span></button></div>';
    }
    h += '</div><div class="act-foot plain"><div class="fb"></div><div class="btns"><button class="btn ghost" id="back">← Back</button>' + (WZ.step === 2 ? '<button class="btn primary" id="nx">Next →</button>' : '') + '</div></div></section>';
    view.innerHTML = h;
    $('#back').addEventListener('click', () => { if (WZ.step === 1) { WZ = null; renderWrite(); } else { WZ.step--; renderSetup(); } });
    $$('[data-t]').forEach((b) => b.addEventListener('click', () => { WZ.type = b.dataset.t; WZ.step = 2; WZ.topic = null; renderSetup(); }));
    $$('[data-pr]').forEach((b) => b.addEventListener('click', () => { WZ.topic = WZ.topic === b.dataset.pr ? null : b.dataset.pr; WZ.own = ''; renderSetup(); }));
    const own = $('#own'); if (own) own.addEventListener('input', () => { WZ.own = own.value; if (own.value.trim()) { WZ.topic = null; $$('[data-pr]').forEach((x) => x.classList.remove('sel')); } });
    const nx = $('#nx'); if (nx) nx.addEventListener('click', () => {
      const topic = (WZ.own || '').trim() || WZ.topic;
      if (!topic) { $('.setup .fb').innerHTML = '<span class="why">Pick an idea or type your own first.</span>'; return; }
      WZ.topicFinal = topic; WZ.step = 3; renderSetup();
    });
    $$('[data-m]').forEach((b) => b.addEventListener('click', () => {
      const d = { id: 'd' + Date.now().toString(36), type: WZ.type, topic: WZ.topicFinal, mode: b.dataset.m, plan: {}, parts: {}, paper: {}, manual: {}, cups: {}, title: '', step: 'plan', part: 0, created: Date.now(), updated: Date.now(), done: false, rubric: {}, note: '' };
      P().drafts.push(d); P().cur = d.id; WZ = null; markDay(); save(); renderWrite(); window.scrollTo(0, 0);
    }));
  }

  const STEPS = [['plan', 'Plan'], ['draft', 'Draft'], ['check', 'Check'], ['publish', 'Publish']];
  function stepper(d) {
    const idx = STEPS.findIndex((s) => s[0] === d.step);
    return '<div class="stepper">' + STEPS.map((s, i) => '<button class="stp ' + (i < idx ? 'past' : i === idx ? 'now' : '') + '" data-step="' + s[0] + '"><span>' + (i < idx ? '✓' : i + 1) + '</span>' + s[1] + '</button>').join('') +
      '<span class="stp-topic">' + W(d).icon + ' ' + esc(d.topic) + (d.mode === 'paper' ? ' · 📝 paper' : '') + '</span></div>';
  }
  function gotoStep(d, s) { flushSave(); d.step = s; touch(d); flushSave(); renderDraftStep(d); window.scrollTo(0, 0); }
  function bindStepper(d) { $$('.stp').forEach((b) => b.addEventListener('click', () => gotoStep(d, b.dataset.step))); }

  function renderDraftStep(d) {
    setFocus(false);
    if (d.step === 'plan') return renderPlan(d);
    if (d.step === 'draft') return renderDraft(d);
    if (d.step === 'check') return renderCheck(d);
    return renderPublish(d);
  }

  function renderPlan(d) {
    const w = W(d); const ex = !!d.showEx;
    view.innerHTML = '<section class="wr">' + stepper(d) +
      '<div class="wr-head"><div><h1>Plan your ' + esc(w.name.toLowerCase()) + '</h1><p class="muted">Just a few words in each box. ' + (d.mode === 'paper' ? 'You can fill these in here or on a printed plan sheet.' : 'Your notes show up beside you while you draft.') + '</p></div>' +
      '<div class="wr-tools"><button class="btn ghost" id="ex">' + (ex ? 'Hide' : 'Show') + ' an example plan</button>' + (d.mode === 'paper' ? '<button class="btn ghost" id="prplan">🖨️ Print plan sheet</button>' : '') + '</div></div>' +
      '<div class="plan-grid n' + w.plan.length + '">' + w.plan.map((r, i) => '<label class="plan-box"><span class="pb-l"><span class="pb-n">' + (i + 1) + '</span>' + esc(r[1]) + '</span>' +
        '<textarea data-f="' + r[0] + '" rows="2" placeholder="' + esc(r[2]) + '">' + esc(d.plan[r[0]] || '') + '</textarea>' + (ex ? '<span class="pb-ex">Example: ' + esc(r[3]) + '</span>' : '') + '</label>').join('') + '</div>' +
      '<div class="act-foot plain"><div class="fb small muted" id="savedmsg">Saved automatically.</div><div class="btns"><button class="btn ghost" id="exit">Close</button><button class="btn primary" id="go">Start drafting →</button></div></div></section>';
    bindStepper(d);
    $$('[data-f]').forEach((t) => t.addEventListener('input', () => { d.plan[t.dataset.f] = t.value; touch(d); }));
    $('#ex').addEventListener('click', () => { d.showEx = !ex; renderPlan(d); });
    if ($('#prplan')) $('#prplan').addEventListener('click', () => printOrganizer(S.grade, d.type, d));
    $('#exit').addEventListener('click', () => { flushSave(); P().cur = null; save(); renderWriteHome(); window.scrollTo(0, 0); });
    $('#go').addEventListener('click', () => { d.part = 0; gotoStep(d, 'draft'); });
  }

  function insertAt(ta, text) {
    const s = ta.selectionStart == null ? ta.value.length : ta.selectionStart; const e = ta.selectionEnd == null ? s : ta.selectionEnd;
    const before = ta.value.slice(0, s); const after = ta.value.slice(e);
    const atStart = !before.trim() || /[.!?]["”’]?\s*$/.test(before) || /\n\s*$/.test(before);
    let t = text; if (atStart) t = t.charAt(0).toUpperCase() + t.slice(1); else t = t.charAt(0).toLowerCase() === t.charAt(0) ? t : t;
    if (before && !/\s$/.test(before)) t = ' ' + t;
    if (!/\s$/.test(t) && after && !/^\s/.test(after)) t += ' ';
    ta.value = before + t + after; const pos = before.length + t.length; ta.focus(); ta.setSelectionRange(pos, pos);
    ta.dispatchEvent(new Event('input'));
  }

  function renderDraft(d) {
    const w = W(d); const k = Math.min(d.part || 0, w.parts.length - 1); const pt = w.parts[k]; const paper = d.mode === 'paper';
    const tab = d.tab || 'ex'; const last = k === w.parts.length - 1;
    const total = wordCount(draftText(d)); const target = w.minWords;
    view.innerHTML = '<section class="wr">' + stepper(d) +
      '<div class="draft"><div class="d-left">' +
      '<div class="pills">' + w.parts.map((x, i) => '<button class="pill ' + (i === k ? 'now' : (paper ? d.paper[x.id] : String(d.parts[x.id] || '').trim()) ? 'done' : '') + '" data-pt="' + i + '">' + (i + 1) + '. ' + esc(x.label) + '</button>').join('') + '</div>' +
      '<h1 class="part-h">Part ' + (k + 1) + ' of ' + w.parts.length + ': ' + esc(pt.label) + '</h1>' +
      '<p class="tip">💡 ' + esc(pt.tip) + '</p>' +
      '<div class="starters"><span class="small muted">' + (paper ? 'Sentence starters you can use:' : 'Stuck? Tap a starter:') + '</span>' + pt.starters.map((s, i) => '<button class="chip" data-st="' + i + '"' + (paper ? ' disabled' : '') + '>' + esc(s.trim()) + '…</button>').join('') + '</div>' +
      (paper ? '<label class="paper-check' + (d.paper[pt.id] ? ' on' : '') + '"><input type="checkbox" id="pc"' + (d.paper[pt.id] ? ' checked' : '') + '><span>I wrote this part on my paper</span></label>' +
        '<p class="small muted">Write the ' + esc(pt.label.toLowerCase()) + ' on your paper. Use your plan notes and the example on the ' + (window.innerWidth >= 1100 ? 'right' : 'tabs below') + '. Start a new paragraph for each part.</p>'
        : '<textarea class="draft-box" id="dbox" autocapitalize="sentences" spellcheck="true" placeholder="Write your ' + esc(pt.label.toLowerCase()) + ' here. Press Enter to start a new paragraph.">' + esc(d.parts[pt.id] || '') + '</textarea>' +
        '<div class="wc small muted"><span id="wc-part">' + plural(wordCount(d.parts[pt.id]), 'word') + ' in this part</span><span id="wc-all">' + total + ' / ' + target + ' words total</span></div>') +
      '</div><aside class="d-right"><div class="tabs" role="tablist">' + [['ex', 'Example'], ['plan', 'My plan'], ['words', 'Linking words']].map((t) => '<button role="tab" class="tab' + (tab === t[0] ? ' on' : '') + '" data-tab="' + t[0] + '">' + t[1] + '</button>').join('') + '</div>' +
      '<div class="panel' + (tab === 'ex' ? ' on' : '') + '" data-pn="ex"><h3>📄 Example ' + esc(pt.label.toLowerCase()) + '</h3><p class="model">' + esc(pt.model) + '</p><p class="small muted">Do not copy it. Notice how it starts and what details it uses.</p></div>' +
      '<div class="panel' + (tab === 'plan' ? ' on' : '') + '" data-pn="plan"><h3>🗒️ My plan notes</h3>' + pt.plan.map((id) => { const r = w.plan.find((x) => x[0] === id) || [id, id]; const v = (d.plan[id] || '').trim(); return '<div class="pn-row"><b>' + esc(r[1]) + '</b><span' + (v ? '' : ' class="muted"') + '>' + esc(v || '(empty, that is okay)') + '</span></div>'; }).join('') + '</div>' +
      '<div class="panel' + (tab === 'words' ? ' on' : '') + '" data-pn="words"><h3>🌉 Linking words</h3><div class="wbank">' + w.trans.map((t, i) => '<button class="chip" data-tr="' + i + '"' + (paper ? ' disabled' : '') + '>' + esc(t) + '</button>').join('') + '</div></div>' +
      '</aside></div>' +
      '<div class="act-foot plain"><div class="fb small muted">Saved as you type.</div><div class="btns"><button class="btn ghost" id="prev">← ' + (k ? 'Back' : 'Plan') + '</button><button class="btn primary" id="nxt">' + (last ? 'Check my writing →' : 'Next part →') + '</button></div></div></section>';
    bindStepper(d);
    const ta = $('#dbox');
    if (ta) {
      const fit = () => { if (window.innerWidth < 1100) { ta.style.height = 'auto'; ta.style.height = Math.max(ta.scrollHeight + 4, 180) + 'px'; } };
      ta.addEventListener('input', () => { d.parts[pt.id] = ta.value; touch(d); $('#wc-part').textContent = plural(wordCount(ta.value), 'word') + ' in this part'; $('#wc-all').textContent = wordCount(draftText(d)) + ' / ' + target + ' words total'; fit(); });
      ta.addEventListener('blur', flushSave); fit();
      $$('[data-st]').forEach((b) => b.addEventListener('click', () => insertAt(ta, pt.starters[+b.dataset.st])));
      $$('[data-tr]').forEach((b) => b.addEventListener('click', () => insertAt(ta, w.trans[+b.dataset.tr])));
    }
    const pc = $('#pc'); if (pc) pc.addEventListener('change', () => { d.paper[pt.id] = pc.checked; touch(d); flushSave(); pc.parentElement.classList.toggle('on', pc.checked); });
    $$('.tab').forEach((b) => b.addEventListener('click', () => { d.tab = b.dataset.tab; $$('.tab').forEach((x) => x.classList.toggle('on', x === b)); $$('.panel').forEach((p) => p.classList.toggle('on', p.dataset.pn === d.tab)); }));
    $$('[data-pt]').forEach((b) => b.addEventListener('click', () => { d.part = +b.dataset.pt; touch(d); renderDraft(d); }));
    $('#prev').addEventListener('click', () => { if (k) { d.part = k - 1; touch(d); renderDraft(d); } else gotoStep(d, 'plan'); });
    $('#nxt').addEventListener('click', () => { if (last) gotoStep(d, 'check'); else { d.part = k + 1; touch(d); flushSave(); renderDraft(d); const ph = $('.part-h'); if (ph && ph.getBoundingClientRect().top < 0) ph.scrollIntoView({ block: 'start' }); } });
  }

  function checkOpts(d) { const w = W(d); return { grade: S.grade, type: d.type, minParas: w.minParas, minWords: w.minWords, trans: w.trans, because: !!w.because }; }
  function checksHtml(d) {
    const r = root.WWChecks.run(draftText(d), checkOpts(d)); const w = W(d);
    const order = { fix: 0, tip: 1, ok: 2 }; const items = r.items.slice().sort((a, b) => order[a.level] - order[b.level]);
    return '<div class="stats-bar"><div><b>' + r.stats.words + '</b><span>/ ' + w.minWords + ' words</span></div><div><b>' + r.stats.paragraphs + '</b><span>/ ' + w.minParas + ' paragraphs</span></div><div><b>' + r.stats.sentences + '</b><span>sentences</span></div></div>' +
      '<p class="check-sum ' + (r.fixes ? 'warn' : 'good') + '">' + (r.fixes ? '🔧 ' + plural(r.fixes, 'thing') + ' to fix. Edit on the ' + (window.innerWidth >= 1100 ? 'right' : 'boxes below') + '; the list updates as you type.' : '✅ The computer found nothing to fix. Now read it out loud!') + '</p>' +
      '<ul class="checks">' + items.map((x) => '<li class="ck ' + x.level + '"><span class="ck-i">' + (x.level === 'fix' ? '🔧' : x.level === 'tip' ? '💡' : '✅') + '</span><span><b>' + esc(x.label) + '</b>' + (x.detail ? '<small>' + esc(x.detail) + '</small>' : '') + '</span></li>').join('') + '</ul>';
  }
  function manualHtml(d, list, store, title) {
    return '<div class="manual"><h3>' + title + '</h3>' + list.map((m, i) => { const label = Array.isArray(m) ? '<b>' + esc(m[0]) + ' · ' + esc(m[1]) + '</b><small>' + esc(m[2]) + '</small>' : esc(m); const on = !!d[store][i];
      return '<label class="tick' + (on ? ' on' : '') + '"><input type="checkbox" data-' + store + '="' + i + '"' + (on ? ' checked' : '') + '><span>' + label + '</span></label>'; }).join('') + '</div>';
  }
  function renderCheck(d) {
    const w = W(d); const paper = d.mode === 'paper';
    let left; let right;
    if (paper) {
      left = '<h1>Check your paper</h1><p class="muted">Read your writing out loud, slowly, with a pencil in your hand. Tick each box when it is true.</p>' + manualHtml(d, D.cups, 'cups', 'CUPS editing check');
      right = manualHtml(d, w.manual, 'manual', 'Read-it-out-loud checklist') + '<p class="small muted">Tip: a grown-up can score it with the rubric on the Grown-ups page.</p>';
    } else {
      left = '<h1>Check your writing</h1><div id="checks">' + checksHtml(d) + '</div>' + manualHtml(d, w.manual, 'manual', 'Read-it-out-loud checklist');
      right = '<h2 class="yw">Your writing</h2>' + w.parts.map((pt) => '<label class="part-edit"><span>' + esc(pt.label) + '</span><textarea data-pe="' + pt.id + '" spellcheck="true">' + esc(d.parts[pt.id] || '') + '</textarea></label>').join('');
    }
    view.innerHTML = '<section class="wr">' + stepper(d) + '<div class="check-grid"><div class="c-left">' + left + '</div><div class="c-right">' + right + '</div></div>' +
      '<div class="act-foot plain"><div class="fb small muted">Saved as you type.</div><div class="btns"><button class="btn ghost" id="prev">← Draft</button><button class="btn primary" id="pub">Publish →</button></div></div></section>';
    bindStepper(d);
    let t = null;
    $$('[data-pe]').forEach((ta) => {
      const fit = () => { ta.style.height = 'auto'; ta.style.height = (ta.scrollHeight + 4) + 'px'; }; fit();
      ta.addEventListener('input', () => { d.parts[ta.dataset.pe] = ta.value; touch(d); fit(); clearTimeout(t); t = setTimeout(() => { $('#checks').innerHTML = checksHtml(d); }, 400); });
      ta.addEventListener('blur', flushSave);
    });
    ['manual', 'cups'].forEach((store) => $$('[data-' + store + ']').forEach((c) => c.addEventListener('change', () => { d[store][c.getAttribute('data-' + store)] = c.checked; c.parentElement.classList.toggle('on', c.checked); touch(d); })));
    $('#prev').addEventListener('click', () => { d.part = w.parts.length - 1; gotoStep(d, 'draft'); });
    $('#pub').addEventListener('click', () => gotoStep(d, 'publish'));
  }

  function pieceHtml(d) {
    const title = (d.title || '').trim() || d.topic; const nm = writerName();
    const pars = draftText(d).split(/\n+/).map((x) => x.trim()).filter(Boolean);
    return '<h1>' + esc(title) + '</h1><p class="by">' + (nm ? 'by ' + esc(nm) + ' · ' : '') + new Date(d.updated).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' }) + '</p>' + pars.map((p) => '<p>' + esc(p) + '</p>').join('');
  }
  function renderPublish(d) {
    const paper = d.mode === 'paper';
    view.innerHTML = '<section class="wr">' + stepper(d) + '<div class="pub"><div class="pub-left">' +
      '<h1>' + (d.done ? '📁 From your folder' : '🎉 Publish it') + '</h1>' +
      '<label class="own"><span>Title</span><input id="title" type="text" maxlength="80" placeholder="' + esc(d.topic) + '" value="' + esc(d.title || '') + '"></label>' +
      (paper ? '<p>Copy your best version neatly onto a clean page. Fix every mistake you circled. Print a final-copy page if you want lines and a title spot.</p>' : '<p class="muted">This is your clean copy. Copy it into an email or document, or print it.</p>') +
      '<div class="pub-btns">' + (paper ? '' : '<button class="btn" id="copy">📋 Copy</button>') + '<button class="btn" id="print">🖨️ Print' + (paper ? ' final-copy page' : '') + '</button>' +
      (d.done ? '<button class="btn ghost" id="edit">✏️ Edit again</button><button class="btn ghost" id="del">🗑️ Delete</button>' : '') + '</div></div>' +
      '<article class="paper-copy">' + (paper ? '<h1>' + esc((d.title || '').trim() || d.topic) + '</h1><p class="by">Written on paper' + (writerName() ? ' by ' + esc(writerName()) : '') + '</p><div class="ruled"></div>' : pieceHtml(d)) + '</article></div>' +
      '<div class="act-foot plain"><div class="fb small muted"></div><div class="btns">' + (d.done ? '<button class="btn primary" id="close">Back to my folder</button>' : '<button class="btn ghost" id="prev">← Check</button><button class="btn primary" id="done">Done, save it ✓</button>') + '</div></div></section>';
    bindStepper(d);
    const ti = $('#title'); ti.addEventListener('input', () => { d.title = ti.value; touch(d); if (!paper) $('.paper-copy').innerHTML = pieceHtml(d); else $('.paper-copy h1').textContent = ti.value.trim() || d.topic; });
    if ($('#copy')) $('#copy').addEventListener('click', () => {
      const txt = ((d.title || '').trim() || d.topic) + '\n\n' + draftText(d).split(/\n+/).join('\n\n');
      const ok = () => toast('Copied!');
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(ok, () => fallbackCopy(txt)); else fallbackCopy(txt);
    });
    $('#print').addEventListener('click', () => printPiece(d));
    if ($('#prev')) $('#prev').addEventListener('click', () => gotoStep(d, 'check'));
    if ($('#done')) $('#done').addEventListener('click', () => {
      if (!d.done) { d.done = true; P().xp += 30; toast('Saved to your folder. +30 XP'); markDay(); }
      P().cur = null; d.step = null; touch(d); flushSave(); updateTop(); renderWriteHome(); window.scrollTo(0, 0);
    });
    if ($('#close')) $('#close').addEventListener('click', () => { P().cur = null; d.step = null; save(); renderWriteHome(); window.scrollTo(0, 0); });
    if ($('#edit')) $('#edit').addEventListener('click', () => { d.done = false; gotoStep(d, 'check'); });
    if ($('#del')) $('#del').addEventListener('click', (e) => {
      const b = e.currentTarget; if (!b.dataset.sure) { b.dataset.sure = '1'; b.textContent = 'Tap again to delete'; return; }
      P().drafts = P().drafts.filter((x) => x !== d); P().cur = null; save(); renderWriteHome();
    });
  }
  function fallbackCopy(txt) {
    const ta = document.createElement('textarea'); ta.value = txt; ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); toast('Copied!'); } catch (e) { toast('Select the text and copy it.'); } ta.remove();
  }

  /* ------------------------------------------------------------------ fix this writing */
  let FX = null;
  function renderFix() {
    if (FX) return renderFixStep();
    const G = D[S.grade]; const p = P();
    view.innerHTML = '<section class="page"><div class="page-head"><h1>🔍 Fix This Writing</h1><p class="muted">Someone wrote this fast and did not check it. Be the editor: find the mistakes, then split it into paragraphs.</p></div>' +
      '<div class="fix-list">' + G.fix.map((f) => { const df = fixDiff(f); const done = p.fixDone[f.id];
        return '<button class="fix-card" data-fx="' + f.id + '"><span class="fc-top"><b>' + esc(f.t) + '</b>' + (done ? '<span class="tag ok">✓ ' + esc(done) + '</span>' : '') + '</span><span class="fc-prev">' + esc(f.messy.slice(0, 150)) + '…</span><span class="small muted">' + plural(df.errs.length, 'mistake') + ' · ' + plural(df.paraStarts.length + 1, 'paragraph') + ' · 3 steps</span></button>'; }).join('') +
      '</div><div class="side-card rule wide"><h3>What editors look for</h3><p>' + D.cups.map((c) => '<b>' + c[0] + '</b> ' + esc(c[1]) + ': ' + esc(c[2])).join('<br>') + '</p></div></section>';
    $$('[data-fx]').forEach((b) => b.addEventListener('click', () => {
      const f = G.fix.find((x) => x.id === b.dataset.fx);
      FX = { f, df: fixDiff(f), step: 1, on: [], good: [], tries: 0, done: false, msg: '', score: { s1: false, s2: false } };
      setFocus(true); renderFixStep(); window.scrollTo(0, 0);
    }));
  }
  function renderFixStep() {
    const fx = FX; const df = fx.df; let body = ''; let side = ''; let fb = ''; let btns = '';
    const head = '<div class="act-head"><button class="icon-btn" id="quit" aria-label="Leave">✕</button><div class="prog"><div style="width:' + ((fx.step - 1) / 3 * 100) + '%"></div></div><span class="count">Step ' + fx.step + ' / 3</span></div>';
    if (fx.step === 1) {
      body = '<div class="skill-tag">✏️ ' + esc(fx.f.t) + '</div><h2 class="prompt">Tap every word with a mistake.</h2><p class="muted small">There ' + (df.errs.length === 1 ? 'is 1 mistake' : 'are ' + df.errs.length + ' mistakes') + ': capitals, end marks, commas, apostrophes, quotation marks, and words that sound right but are spelled wrong.</p>' +
        '<div class="taps fixtext">' + df.messy.map((w, j) => {
          const isE = df.errs.indexOf(j) >= 0; const on = fx.on.indexOf(j) >= 0; let cls = 'tw'; let inner = esc(w);
          if (fx.done) { if (isE) { cls += on ? ' right' : ' miss'; inner = '<s>' + esc(w) + '</s> ' + esc(df.clean[j]); } else if (on) cls += ' extra'; }
          else { if (on) cls += ' on'; if (fx.good.indexOf(j) >= 0) cls += ' good'; }
          return '<button class="' + cls + '" data-w="' + j + '"' + (fx.done || fx.good.indexOf(j) >= 0 ? ' disabled' : '') + '>' + inner + '</button>';
        }).join(' ') + '</div>';
      side = '<div class="side-card"><h3>Found</h3><p class="big-count">' + (fx.done ? fx.on.filter((j) => df.errs.indexOf(j) >= 0).length : fx.on.length) + ' <small>/ ' + df.errs.length + '</small></p><p class="small muted">' + (fx.done ? 'Green = you found it. Gold = missed. Dashed = not a mistake.' : 'Tap a word again to undo.') + '</p></div>' +
        '<div class="side-card rule"><h3>🔎 Look for</h3><ul class="notes"><li><b>Capitals</b> at the start of sentences and for names</li><li><b>End marks</b> where a sentence stops</li><li><b>Commas</b> in lists and before and/but/so</li><li><b>Apostrophes</b> in words like didn\'t and it\'s</li><li><b>Sound-alike words</b>: there/their, here/hear</li></ul></div>';
    } else if (fx.step === 2) {
      const t = df.paraStarts;
      body = '<div class="skill-tag">↩️ ' + esc(fx.f.t) + '</div><h2 class="prompt">Tap each sentence that should START a new paragraph.</h2><p class="muted small">The mistakes are fixed now. The first sentence already starts paragraph 1. Look for changes in time, place, topic, or speaker. There are ' + t.length + ' more paragraphs.</p>' +
        '<div class="taps sents">' + df.sents.map((s, j) => {
          const isT = t.indexOf(j) >= 0; const on = fx.on.indexOf(j) >= 0; let cls = 'tw'; let inner = esc(s);
          if (j === 0) cls += ' lock';
          if (fx.done) { if (isT) { cls += on ? ' right' : ' miss'; inner = '<span class="pmark">¶</span> ' + inner; } else if (on) cls += ' extra'; }
          else { if (on) cls += ' on'; if (fx.good.indexOf(j) >= 0) cls += ' good'; }
          return '<button class="' + cls + '" data-w="' + j + '"' + (fx.done || j === 0 || fx.good.indexOf(j) >= 0 ? ' disabled' : '') + '>' + inner + '</button>';
        }).join('') + '</div>';
      side = '<div class="side-card rule"><h3>↩️ New paragraph when…</h3><p>the <b>time</b> changes, the <b>place</b> changes, the <b>topic</b> changes, or a new <b>speaker</b> talks.</p></div>';
    } else {
      body = '<div class="skill-tag">🌟 ' + esc(fx.f.t) + '</div><h2 class="prompt">Here is the fixed version.</h2><article class="paper-copy inline"><h1>' + esc(fx.f.t) + '</h1>' + fx.f.clean.map((p) => '<p>' + esc(p.join(' ')) + '</p>').join('') + '</article>';
      side = '<div class="side-card rule"><h3>📚 Rules used</h3><ul class="notes">' + fx.f.notes.map((n) => '<li>' + esc(n) + '</li>').join('') + '</ul></div>';
    }
    if (fx.step < 3) {
      if (fx.done) { fb = '<b>' + (fx.result === 'first' ? '✅ Perfect! +10 XP' : fx.result === 'second' ? '✅ Got it on the second try.' : 'Here are all of them.') + '</b>'; btns = '<button class="btn primary" id="next">Next step →</button>'; }
      else { if (fx.tries === 1) fb = '<b>Not quite.</b> <span class="why">' + esc(fx.msg) + '</span>'; else if (fx.msg) fb = '<span class="why">' + esc(fx.msg) + '</span>'; btns = (fx.tries === 1 ? '<button class="btn ghost" id="show">Show me</button>' : '') + '<button class="btn primary' + (fx.on.length ? '' : ' soft') + '" id="check">Check</button>'; }
    } else { fb = '<b>Editing done!</b>'; btns = '<button class="btn ghost" id="prfix">🖨️ Worksheet</button><button class="btn primary" id="fin">Finish ✓</button>'; }
    const cls = fx.step < 3 && fx.done ? (fx.result === 'miss' ? ' reveal' : ' good') : (fx.tries === 1 && !fx.done ? ' warn' : '');
    view.innerHTML = '<section class="act">' + head + '<div class="act-body"><div class="act-main">' + body + '</div><aside class="act-side">' + side + '</aside></div><div class="act-foot' + cls + '"><div class="fb" role="status">' + fb + '</div><div class="btns">' + btns + '</div></div></section>';
    $('#quit').addEventListener('click', () => { FX = null; setFocus(false); renderFix(); });
    $$('.taps .tw').forEach((b) => b.addEventListener('click', () => { const j = +b.dataset.w; const k = fx.on.indexOf(j); if (k >= 0) fx.on.splice(k, 1); else fx.on.push(j); fx.msg = ''; keepScroll(renderFixStep); }));
    if ($('#check')) $('#check').addEventListener('click', () => {
      const t = fx.step === 1 ? df.errs : df.paraStarts;
      if (!fx.on.length) { fx.msg = 'Tap at least one first.'; keepScroll(renderFixStep); return; }
      const good = fx.on.filter((j) => t.indexOf(j) >= 0); const extra = fx.on.length - good.length;
      if (good.length === t.length && !extra) { finishFix(fx.tries === 0 ? 'first' : 'second'); return; }
      fx.tries++;
      if (fx.tries >= 2) { finishFix('miss'); return; }
      fx.on = good.slice(); fx.good = good.slice();
      fx.msg = 'You found ' + good.length + ' of ' + t.length + '.' + (extra ? ' ' + plural(extra, 'tap') + ' ' + (extra === 1 ? 'was' : 'were') + ' not a mistake, so I cleared ' + (extra === 1 ? 'it' : 'them') + '.' : '') + ' Look again.';
      keepScroll(renderFixStep);
    });
    if ($('#show')) $('#show').addEventListener('click', () => finishFix('miss'));
    if ($('#next')) $('#next').addEventListener('click', () => { fx.step++; fx.on = []; fx.good = []; fx.tries = 0; fx.done = false; fx.msg = ''; renderFixStep(); const pr = $('.prompt'); if (pr && pr.getBoundingClientRect().top < 0) window.scrollTo(0, 0); });
    if ($('#prfix')) $('#prfix').addEventListener('click', () => printFixIt(S.grade, fx.f.id));
    if ($('#fin')) $('#fin').addEventListener('click', () => {
      const s = (fx.score.s1 ? 1 : 0) + (fx.score.s2 ? 1 : 0);
      P().fixDone[fx.f.id] = s === 2 ? 'perfect' : 'done'; P().xp += 10; markDay(); save(); toast('+10 XP for editing'); FX = null; setFocus(false); updateTop(); renderFix(); window.scrollTo(0, 0);
    });
  }
  function finishFix(result) {
    FX.done = true; FX.result = result; if (result === 'first') { P().xp += 10; FX.score['s' + FX.step] = true; save(); updateTop(); }
    keepScroll(renderFixStep);
  }
  function keepScroll(fn) { const y = window.scrollY; fn(); window.scrollTo(0, y); }

  /* ------------------------------------------------------------------ grown-ups */
  let GU = { open: null };
  function renderGrown() {
    if (!S.grade) S.grade = 5;
    const g = S.grade; const p = P(); const G = D[g];
    const drafts = p.drafts.slice().sort((a, b) => b.updated - a.updated);
    const by = {}; p.misses.forEach((x) => { const s = x.k.split(':')[0]; by[s] = (by[s] || 0) + 1; });
    const rowFor = (s) => { const m = mastery(s.id); const n = p.count[s.id] || 0; return '<tr><td>' + s.icon + ' ' + esc(s.name) + '</td><td><span class="meter"><span style="width:' + (m == null ? 0 : Math.round(m * 100)) + '%"></span></span></td><td>' + (n ? Math.round(m * 100) + '%' : '–') + '</td><td>' + n + '</td><td>' + (by[s.id] || '') + '</td></tr>'; };
    const ptype = GU.ptype || 'narrative';
    view.innerHTML = '<section class="page grown"><div class="page-head"><h1>👪 Grown-ups</h1><p class="muted">Showing ' + G.label + '. Switch grades at the top. Everything is saved only on this device.</p></div><div class="gu-grid">' +
      '<div class="gu-card"><h2>Writer names</h2><p class="small muted">Shown on the home screen and published pieces. Stored only on this device, never in the app code.</p>' +
      [3, 5].map((x) => '<label class="own"><span>Grade ' + x + ' writer</span><input data-name="' + x + '" type="text" maxlength="30" value="' + esc(S.names[x] || '') + '" placeholder="First name"></label>').join('') +
      '<div class="gu-stats"><div><b>' + p.xp + '</b><span>XP</span></div><div><b>' + p.rounds + '</b><span>rounds</span></div><div><b>' + streak() + '</b><span>day streak</span></div><div><b>' + p.drafts.filter((d) => d.done).length + '</b><span>pieces</span></div></div></div>' +
      '<div class="gu-card span2"><h2>Skill progress</h2><p class="small muted">First-try accuracy over the last 12 answers per skill. Open misses come back in Fix My Misses until answered right twice.</p><div class="tbl-wrap"><table class="prog-t"><thead><tr><th>Skill</th><th></th><th>First try</th><th>Answered</th><th>Misses</th></tr></thead><tbody>' +
      skillList(g).map(rowFor).join('') + PARA.map(rowFor).join('') + '</tbody></table></div></div>' +
      '<div class="gu-card span2"><h2>Writing folder</h2>' + (drafts.length ? '<div class="folder">' + drafts.map((d) => {
        const w = G.write[d.type]; const tot = D.rubric.reduce((s, r) => s + (d.rubric[r[0]] || 0), 0); const open = GU.open === d.id;
        return '<div class="fold-i' + (open ? ' open' : '') + '"><span class="tc-ic">' + w.icon + '</span><span class="fi-t"><b>' + esc(d.title || d.topic) + '</b><small>' + esc(w.name) + ' · ' + (d.done ? 'finished' : 'in progress') + ' · ' + new Date(d.updated).toLocaleDateString() + (d.mode === 'paper' ? ' · on paper' : ' · ' + plural(wordCount(draftText(d)), 'word')) + (tot ? ' · rubric ' + tot + '/16' : '') + '</small></span><button class="btn small-btn" data-rb="' + d.id + '">' + (open ? 'Close' : 'Read & score') + '</button></div>' +
          (open ? rubricHtml(d) : '');
      }).join('') + '</div>' : '<p class="muted">No drafts yet. Pieces from Write a Piece show up here for scoring.</p>') + '</div>' +
      '<div class="gu-card"><h2>Printables</h2><p class="small muted">US Letter. Light headers, dark text, made to fill the page.</p><div class="seg wide" role="group">' + Object.keys(G.write).map((t) => '<button data-pt="' + t + '" class="' + (t === ptype ? 'on' : '') + '">' + G.write[t].icon + ' ' + esc(G.write[t].name.split(' /')[0]) + '</button>').join('') + '</div>' +
      '<div class="pr-btns"><button class="btn" data-pr="org">🗒️ Plan sheet + draft page</button><button class="btn" data-pr="ex">📄 Example sheet</button><button class="btn" data-pr="chk">✅ Editing checklist</button>' +
      G.fix.map((f) => '<button class="btn" data-prf="' + f.id + '">🔍 Fix-it: ' + esc(f.t) + ' + key</button>').join('') + '</div></div>' +
      '<div class="gu-card"><h2>About the standards</h2><p class="small">Practice is built on the Virginia 2024 English Standards of Learning for Grades 3 and 5: writing modes (narrative, opinion, informational), organization and composition, and usage and mechanics. The 4-point home rubric scores focus and organization, ideas and details, sentences and word choice, and conventions. It is a home guide, not an official school rubric.</p></div>' +
      '<div class="gu-card"><h2>Reset</h2><p class="small muted">Clears progress on this device. Cannot be undone.</p><div class="pr-btns"><button class="btn danger" id="rs1">Reset ' + G.label + '</button><button class="btn danger" id="rsall">Reset everything</button></div></div>' +
      '</div></section>';
    $$('[data-name]').forEach((i) => i.addEventListener('input', () => { S.names[i.dataset.name] = i.value; saveSoon(); updateTop(); }));
    $$('[data-rb]').forEach((b) => b.addEventListener('click', () => { GU.open = GU.open === b.dataset.rb ? null : b.dataset.rb; keepScroll(renderGrown); }));
    $$('[data-score]').forEach((b) => b.addEventListener('click', () => { const d = p.drafts.find((x) => x.id === GU.open); const k = b.dataset.score.split(':'); d.rubric[k[0]] = d.rubric[k[0]] === +k[1] ? 0 : +k[1]; save(); keepScroll(renderGrown); }));
    const note = $('#rnote'); if (note) note.addEventListener('input', () => { const d = p.drafts.find((x) => x.id === GU.open); d.note = note.value; saveSoon(); });
    $$('[data-pt]').forEach((b) => b.addEventListener('click', () => { GU.ptype = b.dataset.pt; keepScroll(renderGrown); }));
    $$('[data-pr]').forEach((b) => b.addEventListener('click', () => { const k = b.dataset.pr; if (k === 'org') printOrganizer(g, ptype); if (k === 'ex') printExamples(g, ptype); if (k === 'chk') printChecklist(g); }));
    $$('[data-prf]').forEach((b) => b.addEventListener('click', () => printFixIt(g, b.dataset.prf)));
    const conf = (b, fn) => b.addEventListener('click', () => { if (!b.dataset.sure) { b.dataset.sure = '1'; b.textContent = 'Tap again to confirm'; return; } fn(); save(); updateTop(); renderGrown(); toast('Reset done'); });
    conf($('#rs1'), () => { S.g[g] = blankGrade(); });
    conf($('#rsall'), () => { const th = S.theme; localStorage.removeItem(KEY); S = load(); S.theme = th; S.grade = g; });
  }
  function rubricHtml(d) {
    const w = D[S.grade].write[d.type]; const tot = D.rubric.reduce((s, r) => s + (d.rubric[r[0]] || 0), 0);
    return '<div class="rubric-box"><div class="rb-text">' + (d.mode === 'paper' && !draftText(d) ? '<p class="muted">Written on paper. Read the paper copy and score it here.</p>' : pieceHtml(d)) + '</div>' +
      '<div class="rb-score"><h3>Home rubric <span class="rb-tot">' + tot + ' / 16</span></h3>' + D.rubric.map((r) => '<div class="rb-row"><b>' + esc(r[1]) + '</b><div class="rb-lv">' + r[2].map((desc, i) => '<button class="rb-b' + (d.rubric[r[0]] === i + 1 ? ' on' : '') + '" data-score="' + r[0] + ':' + (i + 1) + '"><span>' + (i + 1) + '</span><small>' + esc(desc) + '</small></button>').join('') + '</div></div>').join('') +
      '<label class="own"><span>Note for next time</span><textarea id="rnote" rows="2">' + esc(d.note || '') + '</textarea></label>' +
      (w ? '' : '') + '</div></div>';
  }

  /* ------------------------------------------------------------------ print */
  function sheet(title, sub, body, opts) {
    opts = opts || {};
    return '<section class="sheet' + (opts.cls ? ' ' + opts.cls : '') + '"><header class="sh-head"><div><h1>' + esc(title) + '</h1>' + (sub ? '<p>' + sub + '</p>' : '') + '</div>' +
      (opts.noName ? '' : '<div class="sh-name"><span>Name ____________________</span><span>Date ____________</span></div>') + '</header><div class="sh-body">' + body + '</div>' +
      '<footer class="sh-foot"><span>Writer\'s Workshop · ' + D[opts.g || S.grade].label + '</span><span>' + (opts.foot || '') + '</span></footer></section>';
  }
  const lines = (flex) => '<div class="lines" style="flex:' + (flex || 1) + '"></div>';
  function doPrint(html, title) {
    const pr = $('#print-root'); pr.innerHTML = html; document.body.classList.add('printing');
    const old = document.title; if (title) document.title = title;
    const done = () => { document.body.classList.remove('printing'); pr.innerHTML = ''; document.title = old; window.removeEventListener('afterprint', done); };
    window.addEventListener('afterprint', done);
    setTimeout(() => { try { window.print(); } catch (e) { done(); } }, 60);
  }
  root.WWPrintPreview = (html) => { $('#print-root').innerHTML = html; document.body.classList.add('printing'); };
  function printOrganizer(g, type, d) {
    const w = D[g].write[type];
    const p1 = sheet(w.name + ': my plan', 'Topic: ' + (d ? esc(d.topic) : '_______________________________________________'),
      '<div class="pp-grid n' + w.plan.length + '">' + w.plan.map((r, i) => '<div class="pp-box"><div class="pp-l"><span class="pb-n">' + (i + 1) + '</span><b>' + esc(r[1]) + '</b> <small>' + esc(r[2]) + '</small></div>' + (d && d.plan[r[0]] ? '<p class="pp-fill">' + esc(d.plan[r[0]]) + '</p>' : '') + lines(1) + '</div>').join('') + '</div>', { g, foot: 'Plan' });
    const p2 = sheet(w.name + ': my draft', 'Write one paragraph for each part. Skip a line so you have room to fix things.',
      w.parts.map((pt) => '<div class="dp-part"><div class="dp-l"><b>' + esc(pt.label) + '</b> <small>' + esc(pt.tip) + '</small></div><div class="dp-st">Starters: ' + pt.starters.map((s) => esc(s.trim()) + '…').join('  ·  ') + '</div>' + lines(1) + '</div>').join(''), { g, foot: 'Draft' });
    doPrint(p1 + p2, 'Plan and draft');
  }
  function printExamples(g, type) {
    const w = D[g].write[type];
    const body = '<div class="ex-parts">' + w.parts.map((pt) => '<div class="ex-part"><h3>' + esc(pt.label) + '</h3><p class="ex-tip">' + esc(pt.tip) + '</p><p class="ex-model">' + esc(pt.model) + '</p></div>').join('') + '</div>' +
      '<div class="ex-bottom"><div class="ex-box"><h3>Example plan</h3><ul>' + w.plan.map((r) => '<li><b>' + esc(r[1]) + ':</b> ' + esc(r[3]) + '</li>').join('') + '</ul></div>' +
      '<div class="ex-box"><h3>Linking words</h3><p class="wb">' + w.trans.map(esc).join(' · ') + '</p><h3>Sentence starters</h3><p class="wb">' + w.parts.map((pt) => pt.starters.map((s) => esc(s.trim()) + '…').join(' · ')).join(' · ') + '</p></div></div>';
    doPrint(sheet(w.name + ': example', esc(w.blurb), body, { g, noName: true, foot: 'Example sheet', cls: 'ex-sheet' }), 'Example sheet');
  }
  function printChecklist(g) {
    const G = D[g];
    const body = '<div class="cl-cups">' + D.cups.map((c) => '<div class="cl-row"><span class="box"></span><span class="cl-letter">' + c[0] + '</span><div><b>' + esc(c[1]) + '</b><p>' + esc(c[2]) + '</p></div></div>').join('') + '</div>' +
      '<div class="cl-types">' + Object.keys(G.write).map((t) => '<div class="cl-type"><h3>' + G.write[t].icon + ' ' + esc(G.write[t].name) + '</h3>' + G.write[t].manual.map((m) => '<div class="cl-i"><span class="box sm"></span>' + esc(m) + '</div>').join('') + '</div>').join('') + '</div>' +
      '<div class="cl-goal"><b>My goal for next time:</b>' + lines(1) + '</div>';
    doPrint(sheet('Editing checklist', 'Read your writing out loud, slowly. Tick each box when it is true.', body, { g, foot: 'Checklist', cls: 'cl-sheet' }), 'Editing checklist');
  }
  function printFixIt(g, id) {
    const f = D[g].fix.find((x) => x.id === id); const df = fixDiff(f);
    const p1 = sheet('Fix this writing: ' + f.t, 'Circle every mistake (' + df.errs.length + ' in all). Mark ¶ where each new paragraph should start (' + (df.paraStarts.length + 1) + ' paragraphs). Then copy it correctly.',
      '<p class="fx-messy">' + esc(f.messy) + '</p><div class="fx-copy"><b>Copy it correctly:</b>' + lines(1) + '</div>', { g, foot: 'Worksheet' });
    let w = 0; const key = f.clean.map((p) => '<p>' + p.map((s) => tokens(s).map((t) => { const isE = df.errs.indexOf(w) >= 0; w++; return isE ? '<b class="fixw">' + esc(t) + '</b>' : esc(t); }).join(' ')).join(' ') + '</p>').join('');
    const p2 = sheet('Answer key: ' + f.t, 'Fixed words are in bold. Each paragraph starts on a new line.',
      '<div class="key-text">' + key + '</div><div class="key-cols"><div><h3>The ' + df.errs.length + ' fixes</h3><ol class="key-list">' + df.errs.map((j) => '<li><s>' + esc(df.messy[j]) + '</s> → <b>' + esc(df.clean[j]) + '</b></li>').join('') + '</ol></div>' +
      '<div><h3>Rules used</h3><ul>' + f.notes.map((n) => '<li>' + esc(n) + '</li>').join('') + '</ul></div></div>', { g, noName: true, foot: 'Answer key', cls: 'key-sheet' });
    doPrint(p1 + p2, 'Fix-it worksheet');
  }
  function printPiece(d) {
    const html = d.mode === 'paper'
      ? sheet((d.title || '').trim() || d.topic, 'Final copy · ' + esc(D[S.grade].write[d.type].name), lines(1), { foot: 'Final copy' })
      : '<section class="sheet piece-sheet"><div class="piece">' + pieceHtml(d) + '</div></section>';
    doPrint(html, (d.title || d.topic));
  }

  /* ------------------------------------------------------------------ start */
  if (S.theme) document.documentElement.dataset.theme = S.theme;
  document.addEventListener('dblclick', (e) => { if (e.target.closest('button, .choice, .tw, .chunk')) e.preventDefault(); }, { passive: false });
  shell(); route();
})(typeof window !== 'undefined' ? window : globalThis);
