/* Writer's Workshop: automatic draft checks.
   Only flags things a computer can check reliably. Quality is for a grown-up to judge. */
(function (root) {
  const ABBR = /\b(Mr|Mrs|Ms|Dr|St|Jr|Sr)\./g;

  function paragraphs(text) {
    return String(text || '').split(/\n+/).map((p) => p.trim()).filter(Boolean);
  }

  function sentences(par) {
    const t = par.replace(ABBR, '$1\u0001');
    const raw = t.match(/[^.!?]+(?:[.!?]+["”’')]*|$)/g) || [];
    const parts = raw.map((s) => s.replace(/\u0001/g, '.').trim()).filter((s) => /[A-Za-z0-9]/.test(s));
    /* "Where is it?" asked Ben.  -> keep the speaker tag with the quote. */
    const out = [];
    parts.forEach((s) => {
      const prev = out[out.length - 1];
      if (prev && /["”’']$/.test(prev) && /^[a-z]/.test(s)) out[out.length - 1] = prev + ' ' + s;
      else out.push(s);
    });
    return out;
  }

  function words(s) {
    return (String(s).match(/[A-Za-z0-9][A-Za-z0-9'’-]*/g) || []);
  }

  function firstWords(s, n) {
    return words(s).slice(0, n || 4).join(' ') + '…';
  }

  function run(text, o) {
    o = o || {};
    const grade = o.grade || 5;
    const pars = paragraphs(text);
    const sents = [];
    pars.forEach((p) => sentences(p).forEach((s) => sents.push(s)));
    const allWords = words(text);
    const lower = ' ' + String(text || '').toLowerCase().replace(/[’]/g, "'") + ' ';
    const items = [];
    const add = (id, level, label, detail) => items.push({ id, level, label, detail: detail || '' });

    /* 1. Capital at the start of each sentence */
    const noCap = sents.filter((s) => { const m = s.match(/[A-Za-z0-9]/); return m && /[a-z]/.test(m[0]); });
    if (noCap.length) add('caps', 'fix', 'Start every sentence with a capital letter.', noCap.slice(0, 3).map((s) => '“' + firstWords(s) + '”').join('  '));
    else add('caps', 'ok', 'Every sentence starts with a capital letter.');

    /* 2. The word I */
    const loneI = (String(text).match(/(^|[^A-Za-z'’])i(?=[^A-Za-z]|$)/g) || []).length;
    if (loneI) add('i', 'fix', 'The word “I” is always a capital letter.', 'Found ' + loneI + ' small “i”.');

    /* 3. End marks */
    const noEnd = pars.filter((p) => !/[.!?]["”’')]*$/.test(p));
    if (noEnd.length) add('end', 'fix', 'End every sentence with a period, question mark, or exclamation point.', noEnd.slice(0, 2).map((p) => '“…' + words(p).slice(-4).join(' ') + '”').join('  '));
    else add('end', 'ok', 'Paragraphs end with an end mark.');

    /* 4. Very long sentences (possible run-ons) */
    const maxLen = grade <= 3 ? 22 : 32;
    const long = sents.filter((s) => words(s).length > maxLen);
    if (long.length) add('long', 'fix', 'This sentence is very long. Is it really two or three sentences?', long.slice(0, 2).map((s) => '“' + firstWords(s, 6) + '” (' + words(s).length + ' words)').join('  '));
    else add('long', 'ok', 'No run-on sentences found.');

    /* 5. "and then" chains */
    const andThen = (lower.match(/\band then\b/g) || []).length;
    if (andThen >= 2) add('andthen', 'fix', 'You wrote “and then” ' + andThen + ' times. End the sentence and start a new one.', 'Try: Next, …  After that, …  Later, …');

    /* 6. Three sentences in a row that start the same way */
    const firsts = sents.map((s) => (words(s)[0] || '').toLowerCase());
    let rep = null;
    for (let i = 2; i < firsts.length; i++) if (firsts[i] && firsts[i] === firsts[i - 1] && firsts[i] === firsts[i - 2]) { rep = words(sents[i])[0]; break; }
    if (rep) add('openers', 'fix', 'Three sentences in a row start with “' + rep + '”. Change how one of them begins.', 'Try starting with a time word, a place, or an -ing word.');
    else if (sents.length >= 3) add('openers', 'ok', 'Sentences begin in different ways.');

    /* 7. Paragraphs and length */
    if (o.minParas) {
      if (pars.length < o.minParas) add('paras', 'fix', 'This kind of writing needs at least ' + o.minParas + ' paragraphs. You have ' + pars.length + '.', 'Start a new paragraph when the time, place, topic, or speaker changes.');
      else add('paras', 'ok', 'You have ' + pars.length + ' paragraphs.');
    }
    if (o.minWords) {
      if (allWords.length < o.minWords) add('words', 'fix', 'Add more details. You have ' + allWords.length + ' words; aim for at least ' + o.minWords + '.', 'What did you see, hear, or feel? Can you add an example?');
      else add('words', 'ok', allWords.length + ' words. Good length.');
    }

    /* 8. Transition words */
    if (o.trans && o.trans.length) {
      const found = o.trans.filter((t) => new RegExp('\\b' + t.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b').test(lower));
      const need = grade <= 3 ? 2 : 3;
      if (found.length < need) add('trans', 'fix', 'Use more linking words to connect your ideas (you used ' + found.length + ').', 'Word bank: ' + o.trans.slice(0, 8).join(', '));
      else add('trans', 'ok', 'Linking words used: ' + found.slice(0, 5).join(', ') + '.');
    }

    /* 9. Opinion writing needs reasons */
    if (o.because) {
      if (!/\b(because|reasons?|since)\b/.test(lower)) add('because', 'fix', 'Give reasons for your opinion. Use the word “because”.', '');
      else add('because', 'ok', 'You gave reasons.');
    }

    /* 10. Doubled words */
    const dbl = [];
    String(text).replace(/\b([A-Za-z]+)\s+\1\b/gi, (m, w) => { if (!/^(had|that|very|so|no|bye|ha|go)$/i.test(w)) dbl.push(m); return m; });
    if (dbl.length) add('double', 'fix', 'A word is typed twice.', dbl.slice(0, 3).map((x) => '“' + x + '”').join('  '));

    /* 11. Spacing around punctuation */
    if (/\s+[,.!?;:](\s|$)/.test(text) || /[,;!?][A-Za-z]/.test(text) || /[a-z]\.[A-Z]/.test(text)) {
      add('space', 'fix', 'Check your spacing: no space before a comma or period, one space after.', '');
    }

    /* 12. Quotation marks come in pairs */
    const q = (String(text).match(/["“”]/g) || []).length;
    if (q % 2 === 1) add('quotes', 'fix', 'A quotation mark is missing. They come in pairs: “ … ”', '');

    /* 13. Common slips */
    const slips = [
      ['alot', 'a lot'], ['could of', 'could have'], ['should of', 'should have'], ['would of', 'would have'],
      ['gonna', 'going to'], ['wanna', 'want to'], ['cuz', 'because'], ['kinda', 'kind of'],
      ['dont', "don't"], ['cant', "can't"], ['didnt', "didn't"], ['doesnt', "doesn't"], ['isnt', "isn't"],
      ['wasnt', "wasn't"], ['im', "I'm"], ['ive', "I've"], ['thats', "that's"], ['couldnt', "couldn't"],
      ['wouldnt', "wouldn't"], ['shouldnt', "shouldn't"], ['havent', "haven't"], ['theres', "there's"]
    ];
    const hit = slips.filter((s) => new RegExp('\\b' + s[0] + '\\b').test(lower));
    if (hit.length) add('slips', 'fix', 'Fix these words:', hit.slice(0, 5).map((s) => s[0] + ' → ' + s[1]).join('   '));

    /* Tips (never block publishing) */
    if (o.type === 'narrative' && grade >= 5 && q === 0 && allWords.length > 60) add('dialogue', 'tip', 'Tip: a line of dialogue can make your story come alive.', 'Example: “You can do it!” Maya shouted.');
    if (grade >= 5 && sents.length >= 5) {
      const lens = sents.map((s) => words(s).length);
      if (Math.max.apply(null, lens) - Math.min.apply(null, lens) < 5) add('variety', 'tip', 'Tip: mix short and long sentences so your writing has rhythm.', '');
    }

    return {
      stats: { words: allWords.length, sentences: sents.length, paragraphs: pars.length },
      items,
      fixes: items.filter((x) => x.level === 'fix').length
    };
  }

  const api = { run, sentences, paragraphs, words };
  root.WWChecks = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
