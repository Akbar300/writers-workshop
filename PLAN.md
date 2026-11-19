# Writer's Workshop: build plan

A writing-practice web app for a Grade 3 writer and a Grade 5 writer. Static site, no build step
(`index.html` + `css/app.css` + `js/*.js`), deployable on Vercel or GitHub Pages. Progress is saved
in `localStorage` on the device. No kids' names in the code (public repo); a name can be typed in
the Grown-ups page and is stored only on the device.

**Status:** see the checklist at the bottom. Anything unchecked is still to build.

## Who it is for
- **Grade 5:** types on a computer. Keep screens short, one thing at a time, no wall of text.
- **Grade 3:** types or writes on paper with help. Every writing step shows an example and sentence starters.
- Parent wants: structure, punctuation, and organizing thoughts into paragraphs. Misses must come back
  in short review rounds until fixed. No memory-match games. Calm navy/blue/teal colors, no purple or pink.
- Printables: US Letter, light tinted header (no dark solid fills), dark crisp text.

## Standards basis
Virginia 2024 English Standards of Learning, Grades 3 and 5:
- **Writing (W):** modes and purposes (narrative, opinion/persuasive, informational/expository),
  organization and composition, usage and mechanics (revising and editing).
- **Language Usage (LU):** grammar and mechanics.
The 4-point home rubric (Focus & organization, Ideas & details, Sentences & word choice, Conventions)
is modeled on the two things Virginia writing rubrics score: composing/written expression and
usage/mechanics. It is a home guide, not an official school rubric.

## Sections

### 1. Sentence Gym (rounds of 6 questions)
Question types (all implemented by one item engine in `js/app.js`):
- `mc`: pick the right answer (end marks, fill-the-blank grammar, dialogue punctuation, sentence kind).
- `tap`: tap every word that has a mistake (capitals, missing commas).
- `build`: tap chunks into order (combine two sentences with because/but/so; Grade 5: although/when/who).
- `type`: retype a sentence correctly.
- `cloze`: choose a word for each blank.
Rules: two tries per question; only first-try answers earn XP; a correct second try says "Got it on
the second try". Any miss is saved and comes back in **Fix My Misses** until answered right twice.

Skills. Grade 3: capitals, end marks, commas in a list, apostrophes, verbs, joining sentences,
complete sentence or not, dialogue (stretch), type it right.
Grade 5: capitals (titles, places), commas (intro words, compound sentences, direct address),
run-ons and fragments, combining sentences, dialogue punctuation, homophones, verbs and agreement,
possessives, transitions, type it right.

### 2. Paragraph Builder
- Put sentence strips in order (topic sentence, details with transitions, closing).
- Tap the sentence that does not belong.
- Pick the best topic sentence / closing sentence / hook.
- Fill in the linking words.
- Tap the sentence that should start a new paragraph (time, place, topic, or speaker changes).

### 3. Write a Piece (guided draft)
Types: personal narrative, opinion, informational. Flow:
1. **Set up:** choose type, choose a prompt or type a topic, choose "Type it" or "Write on paper".
2. **Plan:** graphic organizer with short boxes; "Show an example plan" button.
3. **Draft:** one part at a time. Left: tip, tappable sentence starters, writing box.
   Right: example paragraph, your plan notes, linking-word bank.
   Paper mode: same help, but a checkbox "I wrote this part on my paper".
4. **Check:** automatic checks from `js/checks.js` (capitals, small "i", end marks, very long
   sentences, "and then" chains, three sentences starting the same way, paragraph count, length,
   linking words, "because" in opinions, doubled words, spacing, unpaired quotes, common slips like
   "dont" and "could of"), plus a short checklist the writer ticks.
5. **Publish:** title, clean copy, Copy and Print buttons.
Grade 3 targets: 3 short parts, about 50+ words. Grade 5 targets: 4 parts, about 150+ words.

### 4. Fix This Writing
A messy draft in one block (like the real assignment that needed fixing):
1. Tap every mistake (capitals, missing periods, commas, apostrophes, homophones).
2. Tap the sentences that should start new paragraphs.
3. Compare with the clean version and read the rules used.

### 5. Grown-ups
Writer name per grade, skill progress, open misses, saved drafts with a 4-point rubric to score,
printables (blank organizer + draft page with starters, example sheet, editing checklist), reset.

## Files
- `js/checks.js`: automatic draft checks (pure functions; runs in Node for tests).
- `js/content-more.js`: round 2 content, appended onto the content.js lists.
- `js/units.js`: FCPS unit prompts (`window.WW_UNITS[3|5]`).
- `js/content.js`: all content for both grades (`window.WW_DATA[3]` and `[5]`): sentence banks,
  paragraph activities, fix-it pieces, and the three writing types (plan fields, parts, starters,
  example paragraphs, prompts).
- `js/app.js`: storage, item engine, screens, print.
- `css/app.css`: styles, light and dark, print rules.
- `tools/test.mjs`: content and checks sanity tests (`node tools/test.mjs`).

## Later ideas (not in the first build)
- More prompts tied to the FCPS Benchmark units (for example writing about a text they read).
- A "write about reading" response frame (answer, evidence, explain) for the Grade 5 Integrated
  Reading and Writing test day.
- Typing-speed warm-up for Grade 5; handwriting tie-in for Grade 3.
- Export all drafts as one file for a portfolio.

## Build checklist
- [x] Plan
- [x] `js/checks.js`
- [x] `js/content.js` (both grades: sentence banks, paragraph activities, 2 fix-it pieces each, 3 writing types with plans, parts, starters, model paragraphs, prompts; home rubric; CUPS checklist)
- [x] `js/app.js` item engine, Sentence Gym, Paragraph Builder, Fix My Misses
- [x] Write a Piece (plan, draft, check, publish, paper mode)
- [x] Fix This Writing
- [x] Grown-ups page, rubric, printables
- [x] Browser test on phone and desktop sizes, light and dark
- [x] `tools/test.mjs` (content shape, every generated item answerable, checks behavior, banned words)

Build notes (second pass):
- Wide screens (1100px+) show the whole round as a grid of question cards (2 columns, 3 on very wide
  screens), each with its own Check; phones show one card at a time with a sticky Check / Next bar.
- Questions come from per-session shuffled pools, so nothing repeats until a pool is used up.
- Grade 3 "Type it right" is built from short `sents` (no retype bank), as the handoff notes say.
- `checks.js`: "reasons" now counts as giving reasons (the Grade 5 opinion model was flagged).

Round 2 (Nov 17, 2026, Claude review of the first build):
- [x] Content tripled in `js/content-more.js` (APPEND ONLY: item keys are positional). Paragraph Builder
  8-10 per activity per grade, Fix This Writing 6 pieces per grade (new ones follow FCPS units:
  water cycle, Egypt, class vote, maps; Constitution, Olympics, rivers and landforms, robot fair),
  Grade 5 Type it right / combining / possessives / transitions / homophones / verbs to 15 each,
  more dialogue for both grades.
- [x] Class-unit prompts (`js/units.js`): one prompt per writing type for every FCPS unit through June,
  shown first in Write a Piece as "From class right now". Dates are estimates; Grown-ups → Class units
  nudges a subject earlier or later (`S.pace`).
- [x] Check step shows fixes 3 at a time, quick wins first (capitals, I, end marks, slips...), then
  sentence fixes, then length and paragraphs. A "🔒 N more" line shows what is left.
- [x] Weekend Loop feed: Grown-ups → Send to Weekend Loop makes a `WW1.` paste code
  (`WWLoop.payload(g)`): `ww_<skill>` = last 6 first-try results, `ww_w_<check>` = what the auto-check caught
  on the FIRST check of each typed draft (sentence-level checks only; length and paragraphs are not
  logged because drafts are often unfinished). Weekend Loop imports it in Grown-ups → Miss log.
- [x] Small fixes: Grown-ups skill table fits a phone; non-word distractor "youre" replaced.

### Round 3 (Nov 17, 2026): every grade-level skill, Organize It, much bigger banks
- [x] Generic banks: any skill can have `G.mc[skill]` (multiple choice: `{p, q?, show?, r, w, why, keep?, layout?}`),
  `G.ord[skill]` (put in order: `{t, p, strips, why}`), and `G.typ[skill]` (type it: `{p, wrong, accept, why}`).
  Keys are `skill:m:i`, `skill:o:i`, `skill:t:i`. Skills and Organize It tiles only show when the grade has items.
- [x] New Grade 5 Gym skills: Tense shifts (5.LU.1D), Expand & combine (5.LU.1A), Conjunctions & adverbs (5.LU.1B-C),
  Colons & hyphens (5.LU.2A-C), Word choice (5.W.2ii, 5.W.3A), Formal or informal, Spelling & word parts (5.FFW.2).
- [x] New Grade 3 Gym skills: Comparing words (3.LU.1C), No double negatives (3.LU.1F), Grow a sentence (3.LU.1A),
  Spelling patterns (3.LU.2D).
- [x] Organize It (new section, `#/org`): Main idea & claim, Sort the details, Pick the best evidence, Explain it,
  Build the outline, Hooks & conclusions, Prove it from the text (answer + evidence with paragraph number + explain).
  Grade 3 gets every one except Explain it.
- [x] New writing types: Grade 5 Multi-paragraph Essay (5 paragraphs, 220+ words) and Respond to Reading (both grades).
- [x] Bigger banks for every round 1-2 skill (Grade 5 now about 25-45 items per skill), 2 more Grade 5 Fix-its.
- Files: `js/content-r3-g5.js` (new Gym skills), `js/content-r3-g5b.js` (Organize It), `js/content-r3-g5c.js`
  (bank top-ups, essay and response types, Fix-its), `js/content-r3-g3.js` (Grade 3). ALWAYS append.
- Next: more Grade 3 Organize It items; an optional AI writing coach (server function on Vercel, rubric score +
  one praise + one fix, never rewrites) if a grown-up adds an API key.

## Handoff notes (for whoever builds the rest)
Data shapes in `js/content.js` (`WW_DATA[3]`, `WW_DATA[5]`):
- `sents`: CORRECT sentences for the capitals skill. Make the wrong version yourself: lowercase the
  first letter, names, places, days, months, titles; the child taps the words that need a capital.
- `commas`: CORRECT sentences. Remove the commas; the child taps the word that should be followed by one.
- `blanks.<skill>`: `[sentence with ___, right, [wrong, wrong], why]` → multiple choice.
- `kinds`: `[text, 'c'|'f'|'r', how to fix]` → complete sentence / fragment / run-on (Grade 3 has no 'r').
- `combine`: `{a, b, out: [chunks in order], x: [distractor chunks], why}` → tap chunks to build the sentence.
- `dialogue`: `[right, [wrong...], why]` → pick the correctly punctuated sentence.
- `retype` (Grade 5 only; Grade 3 is empty, so skip it there): `{wrong, accept: [answers], why}`.
  Compare after trimming and normalizing curly quotes to straight quotes.
- `para.order` strips are already in the right order: shuffle them for display.
- `para.odd.bad` and `para.breaks.br` are 0-based indexes (br = sentences that START a new paragraph).
- `para.cloze.ans[i]` lists every acceptable word for blank i (a word cannot be used twice).
- `fix[].clean` is paragraphs → sentences; `fix[].messy` is one string. There is no list of the error
  positions: get them with a word-level diff between messy and the clean text (case, punctuation,
  missing apostrophes, homophones).
- `write.<type>`: `plan` rows are `[id, label, hint, example]`; each `parts[]` has `tip`, `starters`,
  `model`, and `plan` (the plan ids to show beside that part). `minParas`, `minWords`, `trans`, and
  `because` feed straight into `WWChecks.run`.

`WWChecks.run(text, {grade, type, minParas, minWords, trans, because})` returns
`{stats, items: [{id, level: 'fix'|'ok'|'tip', label, detail}], fixes}`.
Paragraphs are split on line breaks, so the draft box must keep Enter as a new paragraph.

Lessons from the sibling app g5-math-lab (same family, same users) to copy from the start:
- A right answer on a later try must show as right ("Got it on the second try"), never "Not quite".
  Only the first try earns XP. An empty Check press is not a try.
- Next / Try another must NOT scroll the page to the top; keep the scroll position.
- Light and dark mode; everything readable in both (light boxes must keep dark text in dark mode).
- iOS print: print a dedicated print container, not the live page.
- Test on a 390px-wide phone screen: no sideways scroll, big tap targets, no hover-only actions.
- Save drafts on every keystroke (debounced). Losing a typed story is the worst possible bug here.

### Round 4 (Nov 18, 2026): close the Grade 3 gaps (from real graded work + a full scan of the 2024 SOL)
Built on top of Round 3 (branch round3-skills-banks). Source of the gaps: a Grade 3 opinion paragraph
(scored 2/2/3 on the class rubric), a compound-word study week, and a reading-response sheet, then a
line-by-line check of the Virginia 2024 English SOL (3.W, 3.LU, 3.RV, 3.FFW, 3.DSR, 3.R) and the
FCPS Benchmark Advance Unit 2-3 sequence.
- [x] `js/content-r4-g3.js` (APPEND ONLY), loaded after `content-r3-g3.js`.
- [x] 8 new Grade 3 Gym skills: Run-ons, Copy check, Compound words, Adjectives & adverbs, Sound-alike words,
  Best word (precise words, shades of meaning, synonyms/antonyms), ABC & dictionary (ABC order, guide words,
  dictionary vs thesaurus vs glossary, multiple meanings), Prefixes & suffixes.
- [x] Bigger Grade 3 banks: verbs (irregular past, future, agreement), joining (and/but/so, comma place,
  rearranging), commas (dates, addresses, letter greetings/closings), spelling (high-frequency words kids miss),
  double negatives, grow a sentence, every Paragraph Builder activity (opinion paragraphs first).
- [x] Organize It, Grade 3: Prove it 3 -> 21 (incl. "restate the question in a complete sentence"), Explain it
  now on for Grade 3 (16), more evidence items with true-but-weak distractors, and two Grade 3-only tiles:
  Kinds of writing (3.W.1A) and My own words (quote, paraphrase, give credit: 3.DSR.C, 3.R.1E).
  Prove it items carry a long answer-plus-proof distractor so the right answer is never just the longest.
- [x] 3 new Grade 3 Fix This Writing pieces built from real slips (wrong mid-sentence capitals, missing
  comma before but/so, missing end marks, apostrophes, too/to, there/their, becase/lern).
- [x] `checks.js`: new `spell` (sure misspellings: becase, charactar, gratful, freind...), `echo`
  ("he but he" copied twice), and `midcap` tip (Dog, King mid-sentence). All three feed the Weekend Loop log
  (`ww_w_spell`, `ww_w_echo`); midcap is a tip only, because a character's name may be capitalized.
- Grade 3 playable items: 357 -> 755; Fix pieces 6 -> 9. Tests: 7368 pass. Browser-checked at 390px and 1440px.
- Not in this app on purpose: long-vowel and other phonics sorts (Block Bakery Word Lab), reading-comprehension
  question types (Reading Academy / Block Bakery Big Reads), cursive (handwriting printables).
