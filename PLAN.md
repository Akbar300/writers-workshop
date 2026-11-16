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
- [ ] `js/app.js` item engine, Sentence Gym, Paragraph Builder, Fix My Misses
- [ ] Write a Piece (plan, draft, check, publish, paper mode)
- [ ] Fix This Writing
- [ ] Grown-ups page, rubric, printables
- [ ] Browser test on phone and desktop sizes, light and dark
