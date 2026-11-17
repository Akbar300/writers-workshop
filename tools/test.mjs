// Writer's Workshop sanity tests: node tools/test.mjs
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ctx = { window: {}, globalThis: null, console };
ctx.window = ctx; ctx.globalThis = ctx;
vm.createContext(ctx);
for (const f of ['js/content.js', 'js/content-more.js', 'js/units.js', 'js/checks.js', 'js/app.js']) vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), ctx, { filename: f });
const D = ctx.WW_DATA; const C = ctx.WWChecks; const E = ctx.WWEngine;

let pass = 0; const fails = [];
const ok = (cond, msg) => { if (cond) pass++; else fails.push(msg); };
const uniq = (a) => new Set(a).size === a.length;

/* ---------- content shape */
for (const g of [3, 5]) {
  const G = D[g]; const L = 'G' + g + ' ';
  ok(G.sents.length >= 10 && G.sents.every((s) => /[.?!]$/.test(s)), L + 'sents end with a mark');
  ok(G.commas.every((s) => s.includes(',')), L + 'every commas sentence has a comma');
  for (const [k, arr] of Object.entries(G.blanks)) arr.forEach((b, i) => {
    ok(b.length === 4 && b[0].includes('___'), L + k + i + ' blank shape');
    ok(Array.isArray(b[2]) && b[2].length >= 2 && !b[2].includes(b[1]) && uniq([b[1], ...b[2]]), L + k + i + ' choices unique, answer not a distractor');
    ok(b[3] && b[3].length > 5, L + k + i + ' has a why');
  });
  G.kinds.forEach((k, i) => ok(['c', 'f', 'r'].includes(k[1]) && (g === 5 || k[1] !== 'r') && k[2], L + 'kinds' + i));
  G.combine.forEach((c, i) => ok(c.a && c.b && c.out.length >= 2 && c.x.every((x) => !c.out.includes(x)) && c.why, L + 'combine' + i));
  G.dialogue.forEach((d, i) => ok(d[1].length >= 2 && !d[1].includes(d[0]) && uniq([d[0], ...d[1]]), L + 'dialogue' + i));
  (G.retype || []).forEach((r, i) => ok(r.wrong && r.accept.length && !r.accept.includes(r.wrong), L + 'retype' + i));
  G.para.order.forEach((o, i) => ok(o.strips.length >= 4 && uniq(o.strips), L + 'order' + i));
  G.para.odd.forEach((o, i) => ok(o.bad > 0 && o.bad < o.strips.length, L + 'odd' + i));
  G.para.topic.forEach((o, i) => ok(o.q && o.r && !o.w.includes(o.r) && o.w.length >= 2, L + 'topic' + i));
  G.para.cloze.forEach((o, i) => {
    const n = (o.text.match(/\{\d\}/g) || []).length;
    ok(n === o.ans.length && o.ans.every((a) => a.every((w) => o.bank.includes(w))), L + 'cloze' + i + ' blanks match answers and bank');
  });
  G.para.breaks.forEach((o, i) => ok(o.br.length && o.br.every((b) => b > 0 && b < o.s.length), L + 'breaks' + i));
  G.fix.forEach((f) => {
    const df = E.fixDiff(f);
    ok(df.aligned, L + 'fix ' + f.id + ' messy and clean have the same word count');
    ok(df.errs.length >= 6, L + 'fix ' + f.id + ' has mistakes (' + df.errs.length + ')');
    ok(df.paraStarts.length >= 1 && f.notes.length, L + 'fix ' + f.id + ' paragraphs and notes');
  });
  for (const [t, w] of Object.entries(G.write)) {
    const ids = w.plan.map((r) => r[0]);
    ok(w.plan.every((r) => r.length === 4), L + t + ' plan rows');
    ok(w.parts.every((p) => p.tip && p.starters.length && p.model && p.plan.every((id) => ids.includes(id))), L + t + ' parts link to plan ids');
    ok(w.prompts.length >= 4 && w.trans.length >= 5 && w.manual.length >= 3 && w.minParas && w.minWords, L + t + ' prompts/trans/manual/targets');
    ok(w.minParas === w.parts.length, L + t + ' minParas equals number of parts');
    // the joined model paragraphs must pass the strict checks
    const model = w.parts.map((p) => p.model).join('\n');
    const r = C.run(model, { grade: g, type: t, minParas: w.minParas, minWords: w.minWords, trans: w.trans, because: !!w.because });
    ok(r.fixes === 0, L + t + ' model passes its own checks: ' + r.items.filter((x) => x.level === 'fix').map((x) => x.id).join(','));
  }
}
ok(D.rubric.length === 4 && D.rubric.every((r) => r[2].length === 4), 'rubric is 4 x 4');
ok(D.cups.length === 4, 'CUPS has 4 rows');

/* ---------- engine: every item in every skill is answerable */
let items = 0;
for (const g of [3, 5]) {
  const skills = E.SKILLS[g].map((s) => s.id).concat(E.PARA.map((p) => p.id));
  for (const s of skills) {
    const keys = E.sources(g, s);
    ok(keys.length >= 2, 'G' + g + ' skill ' + s + ' has items (' + keys.length + ')');
    for (const k of keys) {
      const it = E.makeItem(g, k); items++;
      const r = E.check(it, E.correctResponse(it));
      ok(r.ok === true, 'G' + g + ' ' + k + ' correct answer passes');
      ok(E.check(it, it.type === 'tap' || it.type === 'build' ? [] : it.type === 'cloze' ? [null] : (it.type === 'type' ? '  ' : null)).empty === true, 'G' + g + ' ' + k + ' empty is not a try');
      if (it.type === 'mc') ok(it.choices.includes(it.answer) && uniq(it.choices), 'G' + g + ' ' + k + ' mc choices');
      if (it.type === 'tap') ok(it.targets.length >= 1 && E.check(it, [it.words.length + 5]).ok === false, 'G' + g + ' ' + k + ' tap targets');
      if (it.type === 'type') ok(E.check(it, it.wrong).ok === false, 'G' + g + ' ' + k + ' the wrong sentence is not accepted');
      if (it.type === 'build') ok(E.check(it, it.chunks.slice(0, it.answer.length)).ok === false || it.chunks.slice(0, it.answer.length).join() !== it.answer.join(), 'G' + g + ' ' + k + ' build is shuffled');
    }
  }
}
ok(E.sources(3, 'typeit').every((k) => k.startsWith('typeit:s:')), 'G3 type-it is built from sentences (no retype bank)');
{ const it = E.makeItem(5, 'typeit:r:0'); ok(E.check(it, it.accept[0].replace(/"/g, '“')).ok, 'curly quotes accepted in type-it'); }
{ const it = E.makeItem(3, 'p-cloze:x:0'); ok(E.check(it, ['First', 'Next', 'Next', 'Finally']).ok === false, 'cloze: a word cannot be used twice'); }

/* ---------- checks.js behavior */
const run = (t, o) => C.run(t, Object.assign({ grade: 5 }, o || {}));
const has = (r, id, level) => r.items.some((x) => x.id === id && (!level || x.level === level));
ok(has(run('i went home'), 'i', 'fix') && has(run('i went home'), 'caps', 'fix') && has(run('i went home'), 'end', 'fix'), 'checks: small i, capital, end mark');
ok(!has(run('I went home.'), 'i') && has(run('I went home.'), 'caps', 'ok'), 'checks: clean sentence passes');
ok(has(run('We ran and then we ate and then we slept.'), 'andthen', 'fix'), 'checks: and then chain');
ok(has(run('I like cats. I like dogs. I like fish.'), 'openers', 'fix'), 'checks: three same openers');
ok(has(run('I dont know.'), 'slips', 'fix') && has(run('I could of won.'), 'slips', 'fix'), 'checks: common slips');
ok(has(run('He said, "Hi.'), 'quotes', 'fix'), 'checks: unpaired quote');
ok(C.sentences('"Where is it?" asked Ben.').length === 1, 'checks: speaker tag stays with the quote');
ok(C.sentences('Mr. Lopez is here. He reads.').length === 2, 'checks: Mr. does not split');
ok(has(run('The the dog ran.'), 'double', 'fix'), 'checks: doubled word');
ok(has(run('I ran ,fast.'), 'space', 'fix'), 'checks: spacing');
ok(has(run('One.\nTwo.', { minParas: 3 }), 'paras', 'fix') && has(run('One.\nTwo.\nThree.', { minParas: 3 }), 'paras', 'ok'), 'checks: paragraphs split on line breaks');
ok(has(run('I think pizza is good.', { because: true }), 'because', 'fix') && has(run('I think pizza is good because it is hot.', { because: true }), 'because', 'ok'), 'checks: because in opinions');
ok(has(run(Array(40).fill('word').join(' ') + '.', { grade: 3 }), 'long', 'fix'), 'checks: long sentence');


/* ---------- class units */
const UN = ctx.WW_UNITS;
for (const g of [3, 5]) {
  ok(Array.isArray(UN[g]) && UN[g].length >= 10, 'G' + g + ' has class units');
  UN[g].forEach((u, i) => ok(/^\d{4}-\d{2}-\d{2}$/.test(u.from) && u.subj && u.name && ['narrative', 'opinion', 'info'].every((t) => u.p[t] && u.p[t].length > 10), 'G' + g + ' unit ' + i + ' shape'));
  const subs = {}; UN[g].forEach((u) => { (subs[u.subj] = subs[u.subj] || []).push(u.from); });
  Object.entries(subs).forEach(([s, f]) => ok(f.every((x, i) => !i || x > f[i - 1]), 'G' + g + ' ' + s + ' units in date order'));
}

/* ---------- public repo hygiene */
const files = ['index.html', 'css/app.css', 'js/app.js', 'js/content.js', 'js/content-more.js', 'js/units.js', 'js/checks.js', 'PLAN.md', 'README.md'];
const banned = new RegExp(['ali' + 'ya', 'ars' + 'lan', 'bo' + 'mb'].join('|'), 'i');
for (const f of files) { const p = path.join(ROOT, f); if (fs.existsSync(p)) ok(!banned.test(fs.readFileSync(p, 'utf8')), 'no private names or banned words in ' + f); }

console.log(`${pass} passed, ${fails.length} failed, ${items} items generated`);
if (fails.length) { fails.forEach((f) => console.log('  FAIL ' + f)); process.exit(1); }
