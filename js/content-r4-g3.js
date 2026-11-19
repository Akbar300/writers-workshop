/* Writer's Workshop: content round 4, Grade 3 (Nov 2026).
   Closes the Grade 3 gaps found in real graded work (opinion paragraph, word study, reading answers)
   and in a scan of the Virginia 2024 English SOL and the FCPS Benchmark Advance Unit 2-3 sequence.
   New Sentence Gym skills: Run-ons (3.LU.1A-B), Copy check (3.W.3B), Compound words (3.FFW.2, 3.LU.2D),
   Adjectives & adverbs (3.LU.1C, Benchmark U2), Sound-alike words (3.RV.1D), Best word (3.RV.1E/G, 3.W.3A),
   ABC & dictionary (3.LU.2E, 3.RV.1I), Prefixes & suffixes (3.FFW.2B, 3.RV.1C).
   Bigger banks: verbs (irregular past, future: 3.LU.1D-E), joining (compound sentences: 3.LU.1A),
   commas (dates, addresses, letters: 3.LU.2A), spelling (high-frequency words: 3.LU.2D).
   Organize It for Grade 3: many more Prove it items, Explain it, more evidence, plus two new tiles:
   Kinds of writing (3.W.1A) and My own words (quote, paraphrase, credit: 3.DSR.C, 3.R.1E).
   Three new Fix This Writing pieces built from real Grade 3 slips. Same shapes as content-r3-g3.js. ALWAYS append. */
(function (w) {
  const D = w.WW_DATA; if (!D) return;
  const G = D[3]; G.mc = G.mc || {}; G.ord = G.ord || {}; G.typ = G.typ || {};
  const add = (arr, more) => { more.forEach((x) => arr.push(x)); };
  const mc = (skill, p, list, layout) => { const a = G.mc[skill] || (G.mc[skill] = []); list.forEach((x) => a.push(Object.assign({ p }, layout ? { layout } : {}, x))); };
  const fb = (skill, p, list) => mc(skill, p, list.map((x) => ({ q: x[0], r: x[1], w: x[2], why: x[3] })));
  const pick = (skill, p, list, show) => mc(skill, p, list.map((x) => ({ r: x[0], w: x[1], why: x[2], show: x[3] || show })), 'col');
  const ord = (skill, p, list) => { const a = G.ord[skill] || (G.ord[skill] = []); list.forEach((x) => a.push(Object.assign({ p }, x))); };
  const typ = (skill, p, list) => { const a = G.typ[skill] || (G.typ[skill] = []); list.forEach((x) => a.push({ p, wrong: x[0], accept: x[1], why: x[2] })); };

  /* ================================================================ Run-ons (3.LU.1A-B) */
  mc('runon', 'Is this a run-on or a correct sentence?', [
    ['The dog has a bone he wants a bigger one.', 'Run-on', 'Two sentences are jammed together: “The dog has a bone.” “He wants a bigger one.”'],
    ['The dog has a bone, but he wants a bigger one.', 'Correct sentence', 'A comma plus but joins the two ideas the right way.'],
    ['We went to the park we played on the swings.', 'Run-on', 'Stop after park: “We went to the park. We played on the swings.”'],
    ['It started to rain, so we went inside.', 'Correct sentence', 'A comma plus so joins the cause (rain) and the result (going inside).'],
    ['The ant fell into the stream the dove dropped a leaf.', 'Run-on', 'Two complete ideas with no stop between them.'],
    ['My cat sleeps all day and plays all night.', 'Correct sentence', 'One cat doing two things is ONE sentence. No comma is needed.'],
    ['I like pizza my brother likes tacos.', 'Run-on', 'Two people, two ideas: “I like pizza, but my brother likes tacos.”'],
    ['Sam was tired, but he finished his homework.', 'Correct sentence', 'Comma plus but. Two ideas, joined the right way.'],
    ['The hunter wanted to catch the dove the ant bit his foot.', 'Run-on', 'Stop after dove, or join with “, but the ant bit his foot.”'],
    ['When the bell rang, we lined up at the door.', 'Correct sentence', '“When the bell rang” cannot stand alone, so this is one complete sentence.'],
    ['The fox was hungry he saw some grapes on a vine.', 'Run-on', '“The fox was hungry.” is a whole sentence. So is “He saw some grapes on a vine.”'],
    ['Our class voted for a new class pet.', 'Correct sentence', 'One who (our class) and one action (voted). Complete.'],
    ['The sun came out the snow began to melt.', 'Run-on', 'Fix it: “The sun came out, so the snow began to melt.”'],
    ['The popcorn fell like snow, and the workers put on their jackets.', 'Correct sentence', 'Comma plus and joins two complete ideas.']
  ].map((x) => ({ q: x[0], r: x[1], w: [x[1] === 'Run-on' ? 'Correct sentence' : 'Run-on'], keep: ['Correct sentence', 'Run-on'], layout: 'row words', why: x[2] })));
  pick('runon', 'Which is the best way to fix this run-on?', [
    ['The dog has a bone, but he wants a bigger one.', ['The dog has a bone, he wants a bigger one.', 'The dog has a bone but, he wants a bigger one.', 'The dog has. A bone he wants a bigger one.'], 'A comma ALONE cannot join two sentences. Use a comma plus but.', 'The dog has a bone he wants a bigger one.'],
    ['We went to the park. We played on the swings.', ['We went to the park, we played on the swings.', 'We went. To the park we played on the swings.', 'We went to the park we, played on the swings.'], 'End the first idea with a period. Start the next one with a capital.', 'We went to the park we played on the swings.'],
    ['It was cold, so we wore our coats.', ['It was cold, but we wore our coats.', 'It was cold, we wore our coats.', 'It was cold so, we wore our coats.'], 'Wearing coats is the RESULT of the cold, so use a comma plus so.', 'It was cold we wore our coats.'],
    ['I wanted to play outside, but it was raining.', ['I wanted to play outside, so it was raining.', 'I wanted to play outside, it was raining.', 'I wanted, to play outside but it was raining.'], 'The rain goes AGAINST what you wanted, so use but.', 'I wanted to play outside it was raining.'],
    ['The ant was in trouble, so the dove helped her.', ['The ant was in trouble, the dove helped her.', 'The ant was in trouble but, the dove helped her.', 'The ant was. In trouble the dove helped her.'], 'The dove helped BECAUSE of the trouble: comma plus so.', 'The ant was in trouble the dove helped her.'],
    ['My sister reads every night. She loves mysteries.', ['My sister reads every night, she loves mysteries.', 'My sister reads, every night she loves mysteries.', 'My sister reads every. Night she loves mysteries.'], 'A period and a capital make two clear sentences.', 'My sister reads every night she loves mysteries.'],
    ['The fox could not reach the grapes, so he walked away.', ['The fox could not reach the grapes, he walked away.', 'The fox could not reach, the grapes so he walked away.', 'The fox could not reach the grapes but, he walked away.'], 'Walking away is the result, so use comma plus so.', 'The fox could not reach the grapes he walked away.'],
    ['Leo likes math, and Mia likes art.', ['Leo likes math, so Mia likes art.', 'Leo likes math, Mia likes art.', 'Leo likes, math and Mia likes art.'], 'Two facts that go together: comma plus and. Leo liking math does not CAUSE Mia to like art, so “so” is wrong.', 'Leo likes math Mia likes art.'],
    ['The dog already has a bone, but he wants a bigger one.', ['The dog has a bone, but, he wants a bigger bone, but he already has a bone.', 'The dog has a bone he wants a bigger bone he already has a bone.', 'The dog has a bone, he wants a bigger bone, he has a bone.'], 'Say each idea ONE time. Two “but”s in one sentence is a sign to stop and rewrite.', 'The dog has a bone but he wants a bigger bone but he already has a bone.'],
    ['We planted the seeds, and then we watered them.', ['We planted the seeds, then we watered them.', 'We planted, the seeds and then we watered them.', 'We planted the seeds then, we watered them.'], '“Then” cannot join two sentences by itself. Use a comma plus “and then,” or a period.', 'We planted the seeds then we watered them.'],
    ['The class voted, and the turtle won.', ['The class voted, the turtle won.', 'The class, voted and the turtle won.', 'The class voted the, turtle won.'], 'Comma plus and joins the two events.', 'The class voted the turtle won.'],
    ['The ant got saved by the dove. Then the ant saved the dove.', ['The ant got saved by the dove then the ant saved the dove.', 'The ant got saved, by the dove then the ant saved the dove.', 'The ant got saved by the dove, then the ant saved the dove.'], 'Two events in order: put a period after the first one, then start “Then the ant…”.', 'The ant got saved by the dove then the ant saved the dove.']
  ]);
  typ('runon', 'Fix the run-on. Type it with a period or with a comma plus and, but, or so.', [
    ['I ran home I ate a snack', ['I ran home. I ate a snack.', 'I ran home, and I ate a snack.', 'I ran home, and then I ate a snack.', 'I ran home. Then I ate a snack.'], 'Two ideas: stop after home, or join with “, and.”'],
    ['The bus was late we missed the show', ['The bus was late, so we missed the show.', 'The bus was late. We missed the show.'], 'Missing the show was the RESULT: “, so we missed the show.”'],
    ['Mia wanted a puppy her mom said no', ['Mia wanted a puppy, but her mom said no.', 'Mia wanted a puppy. Her mom said no.'], 'Her mom said the OPPOSITE of what she wanted: “, but.”'],
    ['The wind blew hard the kite flew high', ['The wind blew hard, so the kite flew high.', 'The wind blew hard. The kite flew high.', 'The wind blew hard, and the kite flew high.'], 'Stop after hard, or join with “, so.”']
  ]);

  /* ================================================================ Copy check (3.W.3B) */
  typ('copy', 'Read it slowly and touch each word. Type it with the mistake fixed.', [
    ['The the ant got saved by the dove.', ['The ant got saved by the dove.'], 'The word “the” was written twice.'],
    ['He has a bone but he but he wants a bigger one.', ['He has a bone but he wants a bigger one.', 'He has a bone, but he wants a bigger one.'], '“but he” was copied twice. Say each word one time.'],
    ['The greedy Dog wanted the other bone.', ['The greedy dog wanted the other bone.'], '“dog” is not a name here, so it gets a small d.'],
    ['We went to to the library.', ['We went to the library.'], '“to” was written twice.'],
    ['My friend and I played in the the snow.', ['My friend and I played in the snow.'], '“the” was written twice.'],
    ['The ant saved the Dove from the hunter.', ['The ant saved the dove from the hunter.'], '“dove” is a kind of bird, not a name. No capital in the middle of a sentence.'],
    ['I put my notebook in in my backpack.', ['I put my notebook in my backpack.'], '“in” was written twice.'],
    ['She is the kindest Character in the story.', ['She is the kindest character in the story.'], '“character” is a common word. Only names, places, days, and I get capitals in the middle.'],
    ['The fox wanted the grapes because because he was hungry.', ['The fox wanted the grapes because he was hungry.'], '“because” was written twice.'],
    ['Our class has a new Fish named Bubbles.', ['Our class has a new fish named Bubbles.'], '“fish” gets a small f. Bubbles is the fish’s name, so it keeps its capital.'],
    ['I like to read books about about animals.', ['I like to read books about animals.'], '“about” was written twice.'],
    ['The hunter is mean because he he wants to catch the animals.', ['The hunter is mean because he wants to catch the animals.'], '“he” was written twice.'],
    ['The kindest character is the ant because the the ant helps.', ['The kindest character is the ant because the ant helps.'], '“the” was written twice. Reading aloud while pointing catches this.'],
    ['Then the King of the river looked down.', ['Then the king of the river looked down.'], '“king” here is not a name or a title before a name, so it gets a small k.']
  ]);
  pick('copy', 'Which one was copied EXACTLY right?', [
    ['The dove dropped a leaf into the water.', ['The dove dropped a leaf into the the water.', 'The dove droped a leaf into the water.', 'The dove dropped a leaf into water.'], 'Check word by word: no extra words, no missing words, no missing letters.', 'Copy this: The dove dropped a leaf into the water.'],
    ['Bo bragged less and listened more.', ['Bo bragged less and and listened more.', 'Bo braged less and listened more.', 'Bo bragged less listened more.'], 'The others add a word, drop a letter, or drop a word.', 'Copy this: Bo bragged less and listened more.'],
    ['The workers put on their jackets.', ['The workers put on there jackets.', 'The workers put on their their jackets.', 'The Workers put on their jackets.'], '“their” means belongs to them, said once, and “workers” needs no capital.', 'Copy this: The workers put on their jackets.'],
    ['A kind heart is never empty.', ['A kind heart is never empty empty.', 'A kind hart is never empty.', 'A kind heart is not empty.'], 'Copying means the exact words. “not” is not the same as “never.”', 'Copy this: A kind heart is never empty.'],
    ['Tomas took a deep breath and stepped out slowly.', ['Tomas took a deep breath and stepped out slow.', 'Tomas took a deep breath and and stepped out slowly.', 'Tomas took a deep breathe and stepped out slowly.'], 'Touch each word as you check: slowly (with -ly), one “and,” breath (the noun).', 'Copy this: Tomas took a deep breath and stepped out slowly.'],
    ['The cornstalks grew as tall as trees.', ['The corn stalks grew as tall as trees.', 'The cornstalks grew as tall as as trees.', 'The cornstalks grow as tall as trees.'], '“cornstalks” is one compound word, “grew” is past tense, and “as” appears only twice.', 'Copy this: The cornstalks grew as tall as trees.']
  ]);

  /* ================================================================ Compound words (3.FFW.2, 3.LU.2D) */
  fb('compound', 'Which is the right way to write the compound word?', [
    ['I love my pet ___.', 'goldfish', ['gold fish', 'gold-fish'], 'gold + fish = goldfish. A compound word is ONE word with no space.'],
    ['I helped my grandma push her ___.', 'wheelchair', ['wheel chair', 'wheel chare'], 'wheel + chair = wheelchair. Each small word keeps its spelling: chair, not chare.'],
    ['We ate ___ at the beach.', 'seafood', ['sea food', 'seefood'], 'sea + food = seafood. Sea (the ocean), not see.'],
    ['A tall ___ grew in the garden.', 'sunflower', ['sun flower', 'sunflour'], 'sun + flower = sunflower. Flour is for baking.'],
    ['We saw a ___ after the storm.', 'rainbow', ['rain bow', 'ranebow'], 'rain + bow = rainbow.'],
    ['Let\'s make ___ for the movie.', 'popcorn', ['pop corn', 'popkorn'], 'pop + corn = popcorn. Corn keeps its c.'],
    ['I left my ___ on the bus.', 'backpack', ['back pack', 'bakpack'], 'back + pack = backpack. Both small words end in -ck.'],
    ['We played tag on the ___.', 'playground', ['play ground', 'playgrownd'], 'play + ground = playground.'],
    ['We built a ___ in the yard.', 'snowman', ['snow man', 'snoman'], 'snow + man = snowman. Snow keeps its w.'],
    ['My ___ is in June.', 'birthday', ['birth day', 'berthday'], 'birth + day = birthday.'],
    ['I wrote the words in my ___.', 'notebook', ['note book', 'notbook'], 'note + book = notebook. Note keeps its silent e.'],
    ['Owls hunt in the ___.', 'nighttime', ['night time', 'nightime'], 'night + time = nighttime. Keep BOTH t\'s: one from night, one from time.'],
    ['Wear sunscreen so you do not get a ___.', 'sunburn', ['sun burn', 'sunbern'], 'sun + burn = sunburn.'],
    ['I cleaned my ___ on Saturday.', 'bedroom', ['bed room', 'bedrom'], 'bed + room = bedroom.'],
    ['We kicked the ___ across the field.', 'football', ['foot ball', 'footbal'], 'foot + ball = football. Ball keeps both l\'s.'],
    ['I finished my ___ before dinner.', 'homework', ['home work', 'homwork'], 'home + work = homework. Home keeps its silent e.'],
    ['I like to ___ about flying.', 'daydream', ['day dream', 'daydreem'], 'day + dream = daydream.'],
    ['A ___ landed on my arm.', 'ladybug', ['lady bug', 'ladybugg'], 'lady + bug = ladybug.']
  ]);
  fb('compound', 'Which small word finishes the compound word?', [
    ['wheel + ___ = wheelchair', 'chair', ['chare', 'cheer'], 'The second word is chair, the thing you sit on.'],
    ['sea + ___ = seashell', 'shell', ['shel', 'sell'], 'A seashell is a shell from the sea.'],
    ['rain + ___ = raincoat', 'coat', ['cote', 'boat'], 'A raincoat is a coat for the rain.'],
    ['foot + ___ = footprint', 'print', ['prent', 'paint'], 'A footprint is the print your foot leaves.'],
    ['butter + ___ = butterfly', 'fly', ['fli', 'flie'], 'butter + fly. Fly keeps its y.'],
    ['tooth + ___ = toothbrush', 'brush', ['bruch', 'brosh'], 'A toothbrush is a brush for your teeth.'],
    ['snow + ___ = snowflake', 'flake', ['flak', 'flaik'], 'flake has a long a with a silent e.'],
    ['gold + ___ = goldfish', 'fish', ['fich', 'fesh'], 'gold + fish. Fish ends in -sh.']
  ]);
  typ('compound', 'Fix the compound word. Type the sentence.', [
    ['I helped my grandma with her wheel chair.', ['I helped my grandma with her wheelchair.'], 'wheelchair is one word.'],
    ['I love gold fish.', ['I love goldfish.'], 'goldfish is one word.'],
    ['We ate sea food at the beach.', ['We ate seafood at the beach.'], 'seafood is one word.'],
    ['The sun flower grew very tall.', ['The sunflower grew very tall.'], 'sunflower is one word.'],
    ['I left my back pack on the bus.', ['I left my backpack on the bus.'], 'backpack is one word.'],
    ['We saw a rain bow after the storm.', ['We saw a rainbow after the storm.'], 'rainbow is one word.']
  ]);

  /* ================================================================ Adjectives & adverbs (3.LU.1C, Benchmark Unit 2) */
  pick('adjadv', 'Which word is the ADJECTIVE? (It describes a noun.)', [
    ['tiny', ['mouse', 'ran', 'home'], 'Tiny tells what kind of mouse.', 'The tiny mouse ran home.'],
    ['juicy', ['found', 'pear', 'log'], 'Juicy tells what kind of pear.', 'Lena found a juicy pear under a log.'],
    ['brave', ['crossed', 'bridge', 'Tomas'], 'Brave describes Tomas, a noun.', 'Brave Tomas crossed the bridge.'],
    ['Three', ['ducks', 'swam', 'pond'], 'Three tells HOW MANY ducks. Adjectives can tell how many.', 'Three ducks swam in the pond.'],
    ['heavy', ['blew', 'twig', 'path'], 'Heavy tells what kind of twig.', 'The wind blew a heavy twig onto the path.'],
    ['cold', ['wore', 'coats', 'morning'], 'Cold tells what kind of morning.', 'We wore coats on the cold morning.']
  ]);
  pick('adjadv', 'Which word is the ADVERB? (It tells how, when, or where.)', [
    ['loudly', ['beetle', 'spoke', 'The'], 'Loudly tells HOW the beetle spoke.', 'The beetle spoke loudly.'],
    ['gently', ['kite', 'floated', 'sky'], 'Gently tells HOW the kite floated.', 'The kite floated gently across the sky.'],
    ['Tomorrow', ['bake', 'bread', 'will'], 'Tomorrow tells WHEN we will bake.', 'Tomorrow we will bake bread.'],
    ['quietly', ['owl', 'listened', 'tree'], 'Quietly tells HOW the owl listened.', 'The owl listened quietly in the tree.'],
    ['outside', ['children', 'played', 'happy'], 'Outside tells WHERE they played. (Happy is an adjective.)', 'The happy children played outside.'],
    ['swiftly', ['stream', 'ran', 'rocks'], 'Swiftly tells HOW the stream ran.', 'The stream ran swiftly over the rocks.']
  ]);
  fb('adjadv', 'Adjective or adverb? Choose the word that fits.', [
    ['The turtle walked ___ across the road.', 'slowly', ['slow', 'slowness'], 'Walked HOW? Use the adverb: slowly.'],
    ['The ___ dog barked at the mail truck.', 'loud', ['loudly', 'loudness'], 'Which dog? Describe the noun with the adjective: loud.'],
    ['She sang ___ at the party.', 'happily', ['happy', 'happiness'], 'Sang HOW? Use the adverb: happily (y changes to i).'],
    ['The library is very ___.', 'quiet', ['quietly', 'quietness'], 'Describe the library (a noun) with the adjective: quiet.'],
    ['Bo pushed the twig ___.', 'hard', ['hardly', 'hardness'], 'Pushed HOW? With force: hard. (Hardly means almost not.)'],
    ['The ant was ___ to help the dove.', 'quick', ['quickly', 'quickness'], 'After “was,” describe the ant: quick.']
  ]);

  /* ================================================================ Sound-alike words / homophones (3.RV.1D) */
  fb('homo', 'Choose the right sound-alike word.', [
    ['I have ___ sisters.', 'two', ['to', 'too'], 'two is the number 2.'],
    ['We walked ___ the park.', 'to', ['two', 'too'], 'to means toward.'],
    ['I want to come ___!', 'too', ['to', 'two'], 'too means also.'],
    ['The soup is ___ hot to eat.', 'too', ['to', 'two'], 'too can also mean MORE than enough: too hot.'],
    ['The kids put on ___ jackets.', 'their', ['there', 'they\'re'], 'their means belongs to them.'],
    ['Put the box over ___.', 'there', ['their', 'they\'re'], 'there is a place. It has “here” inside it.'],
    ['___ going to the zoo today.', 'They\'re', ['Their', 'There'], 'They\'re = they are.'],
    ['Come ___ and sit with me.', 'here', ['hear', 'heer'], 'here is a place. hear is what your ear does.'],
    ['Did you ___ the thunder?', 'hear', ['here', 'heer'], 'hear has an EAR in it.'],
    ['Please ___ your name on the line.', 'write', ['right', 'rite'], 'write means to put words on paper.'],
    ['Turn ___ at the corner.', 'right', ['write', 'rite'], 'right is a direction (or means correct).'],
    ['I ___ the answer!', 'know', ['no', 'now'], 'know (with a silent k) means to understand.'],
    ['There are ___ cookies left.', 'no', ['know', 'now'], 'no means not any.'],
    ['I ___ three tacos for lunch.', 'ate', ['eight', 'eat'], 'ate is the past tense of eat.'],
    ['The spider has ___ legs.', 'eight', ['ate', 'eigth'], 'eight is the number 8.'],
    ['We swam in the ___.', 'sea', ['see', 'si'], 'sea is the ocean.'],
    ['I can ___ the boats.', 'see', ['sea', 'si'], 'see is what your eyes do.'],
    ['Mom used ___ to bake bread.', 'flour', ['flower', 'flore'], 'flour is the powder for baking.'],
    ['The wind ___ my hat away.', 'blew', ['blue', 'bloo'], 'blew is the past tense of blow.'],
    ['Our team ___ the game!', 'won', ['one', 'wun'], 'won is the past tense of win.'],
    ['This gift is ___ you.', 'for', ['four', 'fore'], 'for is a small helping word. four is 4.'],
    ['I will ___ a new book at the store.', 'buy', ['by', 'bye'], 'buy means to pay for something.'],
    ['He was as brave as a ___.', 'knight', ['night', 'nite'], 'A knight wears armor. Night is when it is dark.'],
    ['The ___ came up over the hill.', 'sun', ['son', 'sunn'], 'The sun is the star in the sky. A son is a boy in a family.']
  ]);

  /* ================================================================ Best word: precise words, shades, synonyms, antonyms (3.RV.1E/G, 3.W.3A) */
  fb('words', 'Pick the most exact word.', [
    ['“Shh, the baby is asleep,” Dad ___.', 'whispered', ['yelled', 'roared'], 'You speak very softly near a sleeping baby: whispered.'],
    ['The elephant was ___.', 'enormous', ['nice', 'okay'], 'Enormous paints a picture of its size. Nice and okay tell us almost nothing.'],
    ['The hungry puppy ___ its dinner.', 'gobbled', ['nibbled', 'had'], 'A hungry puppy eats fast: gobbled.'],
    ['The runner ___ to the finish line.', 'sprinted', ['went', 'strolled'], 'Sprinted means ran as fast as possible.'],
    ['After the long hike, my legs ___.', 'ached', ['were bad', 'danced'], 'Ached tells exactly how the legs felt.'],
    ['The ___ mouse hid under the leaf.', 'tiny', ['big', 'large'], 'Hiding under a leaf means it is very small: tiny.']
  ]);
  ord('words', 'Put the words in order from weakest to strongest.', [
    { t: 'How hot?', strips: ['warm', 'hot', 'scorching'], why: 'Warm is a little heat, hot is more, scorching is the most.' },
    { t: 'How cold?', strips: ['cool', 'cold', 'freezing'], why: 'Cool, then cold, then freezing (as cold as ice).' },
    { t: 'How fast?', strips: ['walk', 'jog', 'sprint'], why: 'Walking is slowest, jogging is faster, sprinting is fastest.' },
    { t: 'How loud?', strips: ['whisper', 'talk', 'shout'], why: 'From softest to loudest.' },
    { t: 'How big?', strips: ['tiny', 'small', 'big', 'enormous'], why: 'From smallest to biggest.' },
    { t: 'How happy?', strips: ['glad', 'happy', 'thrilled'], why: 'Thrilled is the strongest kind of happy.' }
  ]);
  pick('words', 'Which word means almost the SAME?', [
    ['fearless', ['afraid', 'tired', 'quiet'], 'Brave and fearless are synonyms: words that mean almost the same.', 'brave'],
    ['giving', ['selfish', 'greedy', 'angry'], 'A generous person is giving. Selfish and greedy are opposites.', 'generous'],
    ['shout', ['whisper', 'listen', 'sleep'], 'Yell and shout mean almost the same.', 'yell'],
    ['joyful', ['gloomy', 'grumpy', 'sleepy'], 'Cheerful and joyful are synonyms.', 'cheerful']
  ]);
  pick('words', 'Which word means the OPPOSITE?', [
    ['selfish', ['kind', 'helpful', 'giving'], 'Generous means happy to share. Selfish is the opposite: wanting everything for yourself.', 'generous'],
    ['timid', ['bold', 'strong', 'daring'], 'Brave is the opposite of timid (shy and easily scared).', 'brave'],
    ['ancient', ['new', 'modern', 'fresh'], 'Ancient means very old, the opposite of new.', 'new'],
    ['whisper', ['shout', 'yell', 'holler'], 'A whisper is very soft. It is the opposite of shout.', 'shout']
  ]);

  /* ================================================================ ABC order & dictionary (3.LU.2E, 3.RV.1I, 3.RI.2B) */
  pick('dict', 'Which word comes FIRST in ABC order?', [
    ['bake', ['bark', 'bat'], 'All three start with ba. Look at the third letter: k comes before r and t.'],
    ['crab', ['cub', 'cut'], 'Look at the second letter: r comes before u.'],
    ['dove', ['duck', 'dust'], 'Look at the second letter: o comes before u.'],
    ['seal', ['snail', 'stone'], 'Second letters: e, n, t. E comes first.'],
    ['team', ['tent', 'toad'], 'team and tent both start with te. Third letters: a comes before n.'],
    ['huge', ['hunter', 'hut'], 'All start with hu. Third letters: g, n, t. G comes first.']
  ]);
  ord('dict', 'Put the words in ABC order.', [
    { t: 'ABC order', strips: ['crab', 'cub', 'cut'], why: 'Second letters r, u, u. Then cub before cut, because b comes before t.' },
    { t: 'ABC order', strips: ['dove', 'duck', 'dust'], why: 'o comes before u. Then duck before dust, because c comes before s.' },
    { t: 'ABC order', strips: ['sail', 'seal', 'snail', 'stone'], why: 'Second letters a, e, n, t.' },
    { t: 'ABC order', strips: ['team', 'tent', 'toad', 'tree'], why: 'team before tent (a before n), then o, then r.' },
    { t: 'ABC order', strips: ['huge', 'hunter', 'hut'], why: 'All start with hu. Third letters g, n, t.' }
  ]);
  pick('dict', 'Which word would be on this dictionary page?', [
    ['pig', ['pan', 'pond', 'pup'], 'pig comes after pet (i after e) and before pine (g before n).', 'Guide words: pet ... pine'],
    ['cliff', ['bat', 'crab', 'cup'], 'cl comes after ca and before co.', 'Guide words: cat ... cow'],
    ['seed', ['salt', 'snow', 'soap'], 'se comes after sa and before sh. Salt is before sand (l before n).', 'Guide words: sand ... shell'],
    ['milk', ['lamp', 'mud', 'music'], 'mi comes after ma and before mo.', 'Guide words: mail ... moon']
  ]);
  pick('dict', 'Where would you look?', [
    ['a thesaurus', ['a glossary', 'an atlas'], 'A thesaurus lists words that mean the same (and the opposite).', 'You want a stronger word for “happy.”'],
    ['a dictionary', ['a thesaurus', 'a table of contents'], 'A dictionary shows the correct spelling and meaning of a word.', 'You are not sure how to spell “because.”'],
    ['the glossary in the back of the book', ['the table of contents', 'the title page'], 'A glossary is a mini dictionary for the hard words in that book.', 'Your science book uses the word “evaporate.” You want its meaning.'],
    ['the table of contents', ['the glossary', 'a thesaurus'], 'The table of contents lists the chapters and their page numbers.', 'You want to know which page the chapter on rain starts on.']
  ]);
  pick('dict', 'Which meaning is used in the sentence?', [
    ['meaning 2', ['meaning 1'], 'Swinging and hitting a home run means the wooden stick: meaning 2.', 'bat (noun)\n1. a flying animal that is active at night\n2. a wooden stick used to hit a ball\n\n“Ava swung the bat and hit a home run.”'],
    ['meaning 1', ['meaning 2'], 'A tree trunk is covered with bark, the outer covering: meaning 1.', 'bark (noun)\n1. the hard outer covering of a tree\n2. the sound a dog makes\n\n“The beaver chewed the bark off the log.”']
  ]);

  /* ================================================================ Prefixes & suffixes (3.FFW.2B, 3.RV.1C/E) */
  fb('affix', 'What does the word mean?', [
    ['unhappy means ___.', 'not happy', ['very happy', 'happy again'], 'un- means not.'],
    ['retell means ___.', 'tell again', ['not tell', 'tell before'], 're- means again.'],
    ['preheat means ___.', 'heat before', ['heat again', 'not heat'], 'pre- means before. You preheat the oven before baking.'],
    ['careless means ___.', 'without care', ['full of care', 'care again'], '-less means without.'],
    ['hopeful means ___.', 'full of hope', ['without hope', 'hope again'], '-ful means full of.'],
    ['dislike means ___.', 'not like', ['like a lot', 'like again'], 'dis- means not or the opposite.'],
    ['teacher means ___.', 'a person who teaches', ['to teach again', 'not teaching'], '-er can mean a person who does something.'],
    ['quickly means ___.', 'in a quick way', ['not quick', 'quick again'], '-ly means in a certain way.'],
    ['fearless means ___.', 'without fear', ['full of fear', 'fear again'], '-less means without. Fearless means brave.'],
    ['rebuild means ___.', 'build again', ['not build', 'build before'], 're- means again.'],
    ['unkind means ___.', 'not kind', ['very kind', 'kind again'], 'un- means not.'],
    ['painful means ___.', 'full of pain', ['without pain', 'pain again'], '-ful means full of.']
  ]);
  fb('affix', 'Add the prefix or suffix. Choose the right spelling.', [
    ['hope + ful = ___', 'hopeful', ['hopful', 'hopefull'], 'Keep the e in hope, and -ful has only ONE l.'],
    ['care + less = ___', 'careless', ['carless', 'careles'], 'Keep the e in care. (A carless family has no car.)'],
    ['use + ful = ___', 'useful', ['usful', 'usefull'], 'use + ful: keep the e, one l at the end.'],
    ['sad + ly = ___', 'sadly', ['sadley', 'saddly'], 'Just add -ly: sadly.'],
    ['happy + ly = ___', 'happily', ['happyly', 'happly'], 'Change y to i, then add -ly: happily.'],
    ['kind + ness = ___', 'kindness', ['kindnes', 'kindniss'], '-ness keeps both s letters.'],
    ['un + lock = ___', 'unlock', ['unnlock', 'onlock'], 'Just put un- in front: unlock.'],
    ['re + play = ___', 'replay', ['reeplay', 'riplay'], 'Just put re- in front: replay.'],
    ['help + er = ___', 'helper', ['helpper', 'helpur'], 'Just add -er: helper.'],
    ['dis + agree = ___', 'disagree', ['disagre', 'dissagree'], 'Just put dis- in front. Agree keeps its double e.']
  ]);

  /* ================================================================ Spelling: high-frequency words Grade 3 writers miss (3.LU.2D) */
  fb('spell', 'Choose the correct spelling.', [
    ['I stayed inside ___ it was raining.', 'because', ['becase', 'becuase'], 'because: be + cause. Say each part: be-cause.'],
    ['He should be ___ for what he has.', 'grateful', ['gratful', 'greatful'], 'grateful is spelled g-r-a-t-e-f-u-l. It sounds like great, but it is spelled grate.'],
    ['The ___ character is the dog.', 'greediest', ['greedyiest', 'greedyest'], 'greedy ends in y. Change the y to i, then add -est: greediest.'],
    ['Who is your favorite ___ in the story?', 'character', ['charactar', 'charecter'], 'character starts with ch but sounds like k, and ends with -er.'],
    ['My best ___ came over to play.', 'friend', ['freind', 'frend'], 'friend has “end” at the end: fri + end.'],
    ['We ___ to the park yesterday.', 'went', ['whent', 'wented'], 'went has no h. It is already past tense.'],
    ['I will see you ___.', 'tomorrow', ['tommorow', 'tomorow'], 'tomorrow has one m and two r\'s.'],
    ['That was a ___ good game!', 'really', ['realy', 'reely'], 'real + ly = really, with two l\'s.'],
    ['We waited ___ the bell rang.', 'until', ['untill', 'untell'], 'until ends with just one l.'],
    ['Pick the one ___ you like best.', 'which', ['wich', 'whitch'], 'which starts with wh and ends with ch.'],
    ['___ is your birthday?', 'When', ['Wen', 'Whin'], 'Question words start with wh: who, what, when, where, why.'],
    ['___ said hello to us.', 'They', ['Thay', 'Thei'], 'they ends in -ey.'],
    ['My cat is ___ from my dog.', 'different', ['diffrent', 'diferent'], 'different has two f\'s and three syllables: dif-fer-ent.'],
    ['I came in ___ place!', 'first', ['frist', 'ferst'], 'first: f-i-r-s-t. The ir makes the er sound.'],
    ['She ___ yes to the plan.', 'said', ['sayed', 'sed'], 'said is a tricky word. Remember: s-a-i-d.'],
    ['The popcorn fell ___ snow.', 'like', ['lik', 'liek'], 'like has a long i with a silent e.']
  ]);

  /* ================================================================ Verbs: irregular past, future, agreement (3.LU.1D-E) */
  fb('verbs', 'Choose the right verb.', [
    ['Yesterday, the goat ___ across the bridge.', 'ran', ['runned', 'runs'], 'run is irregular: today run, yesterday ran.'],
    ['Last night, we ___ popcorn.', 'ate', ['eated', 'eats'], 'eat becomes ate.'],
    ['The kite ___ high in the sky yesterday.', 'flew', ['flied', 'flys'], 'fly becomes flew.'],
    ['I ___ a rainbow after the rain.', 'saw', ['seen', 'seed'], 'see becomes saw. “I seen” is not correct.'],
    ['Mom ___ me a new notebook.', 'gave', ['gived', 'give'], 'give becomes gave.'],
    ['We ___ to the playground after lunch.', 'went', ['goed', 'go'], 'go becomes went.'],
    ['Leo ___ the ball with both hands.', 'caught', ['catched', 'catch'], 'catch becomes caught.'],
    ['She ___ her lunch from home.', 'brought', ['bringed', 'brung'], 'bring becomes brought.'],
    ['We ___ across the lake last summer.', 'swam', ['swimmed', 'swim'], 'swim becomes swam.'],
    ['The class ___ a song for the parents.', 'sang', ['singed', 'sing'], 'sing becomes sang.'],
    ['I ___ a letter to my aunt yesterday.', 'wrote', ['writed', 'writes'], 'write becomes wrote.'],
    ['He ___ the last cookie.', 'took', ['taked', 'take'], 'take becomes took.'],
    ['I ___ my lost shoe under the bed.', 'found', ['finded', 'find'], 'find becomes found.'],
    ['We ___ a card for Grandpa.', 'made', ['maked', 'make'], 'make becomes made.'],
    ['Tomorrow, Pip ___ the shelf again.', 'will climb', ['climbed', 'climbing'], 'Tomorrow means the future: will + verb.'],
    ['Next week, we ___ a snowman.', 'will build', ['built', 'builded'], 'Next week is the future: will build.'],
    ['The ants ___ the twig together.', 'push', ['pushes', 'pushs'], 'More than one ant: push (no -es).'],
    ['Every morning, the bird ___ by my window.', 'sings', ['sing', 'singing'], 'One bird: sings.'],
    ['My brother and I ___ to school.', 'walk', ['walks', 'walking'], 'Two people (my brother and I): walk.'],
    ['The dog ___ a bone in the yard.', 'hides', ['hide', 'hiding'], 'One dog: hides.']
  ]);

  /* ================================================================ Joining: compound sentences, comma placement, rearranging (3.LU.1A) */
  fb('join', 'Choose the joining word.', [
    ['I wanted to swim, ___ the pool was closed.', 'but', ['and', 'so'], 'The closed pool goes AGAINST what you wanted: but.'],
    ['Ben brought chips, ___ Ana brought juice.', 'and', ['but', 'so'], 'Two facts that go together: and.'],
    ['The baby was sleepy, ___ she took a nap.', 'so', ['but', 'and'], 'The nap is the RESULT of being sleepy: so.'],
    ['The fox was hungry, ___ he could not reach the grapes.', 'but', ['so', 'and'], 'Being hungry and not reaching the food go against each other: but.'],
    ['We planted seeds, ___ we watered them every day.', 'and', ['but', 'so'], 'Two things that happened, one after the other: and.'],
    ['The road was icy, ___ Dad drove slowly.', 'so', ['but', 'and'], 'Driving slowly is the RESULT of the ice: so.']
  ]);
  pick('join', 'Which sentence uses the comma correctly?', [
    ['The ant was small, but she was brave.', ['The ant was small but, she was brave.', 'The ant, was small but she was brave.'], 'The comma goes right BEFORE but when it joins two sentences.'],
    ['It was late, so we went home.', ['It was late so, we went home.', 'It was, late so we went home.'], 'Put the comma before so, not after it.'],
    ['Mia read a book, and Sam drew a map.', ['Mia read a book and, Sam drew a map.', 'Mia, read a book and Sam drew a map.'], 'The comma goes before and when two sentences are joined.'],
    ['Because it rained, the game was canceled.', ['Because it rained the game, was canceled.', 'Because, it rained the game was canceled.'], 'When “because” starts the sentence, put a comma after that whole part.']
  ]);
  pick('join', 'Which sentence means the same thing, just rearranged?', [
    ['Because it was raining, we went inside.', ['Because we went inside, it was raining.', 'It was raining because we went inside.'], 'Same idea, new order. The rain is still the reason.', 'We went inside because it was raining.'],
    ['After lunch, we went to recess.', ['After recess, we went to lunch.', 'We went to lunch after recess.'], 'Lunch still comes first. Only the order of the words changed.', 'We went to recess after lunch.'],
    ['When the bell rang, the class lined up.', ['When the class lined up, the bell rang.', 'The bell rang when the class lined up.'], 'The bell still rings first.', 'The class lined up when the bell rang.'],
    ['Since he was tired, Bo took a nap.', ['Since he took a nap, Bo was tired.', 'Bo was tired since he took a nap.'], 'Being tired is still the reason for the nap.', 'Bo took a nap since he was tired.']
  ]);

  /* ================================================================ Commas: dates, addresses, letters (3.LU.2A) */
  add(G.commas, [
    'Dear Mr. Lopez,',
    'Love, Nina',
    'Sincerely, Omar',
    'Your pal, Theo',
    'The fair is on Saturday, October 9, 2027.',
    'We moved here on March 1, 2025.',
    'My cousin lives in Austin, Texas.',
    'Our school is on Oak Street in Fairfax, Virginia.',
    'The letter was sent on July 4, 2026.',
    'I packed a towel, sunscreen, and a hat.',
    'We have art on Monday, music on Tuesday, and gym on Friday.',
    'Grandma flew in from Tampa, Florida.'
  ]);

  /* ================================================================ Organize It: Prove it from the text (3.W.1E, 3.RI.3D, 3.DSR.C) */
  const PROVE = 'Which answer is the BEST? It answers, proves, and explains.';
  pick('o-prove', PROVE, [
    ['It was called the Popcorn Blizzard because the popped corn fell like snow. Paragraph 2 says the popcorn “landed in huge piles.” This shows the corn looked just like a snowstorm.',
      ['Because popcorn is falls very hard.', 'The popcorn landed in huge piles.', 'It was a very hot day.'],
      'A full answer restates the question, gives proof from the text with the paragraph, and explains it.',
      'The Popcorn Day\n(1) One summer it was so hot that the corn in the fields began to pop.\n(2) Popped corn flew through the air and landed in huge piles.\n(3) The workers shivered and put on their jackets.\n\nQuestion: Why was the day called the Popcorn Blizzard?'],
    ['The heat made the corn start popping. Paragraph 1 says it was “so hot that the corn in the fields began to pop.” This shows the heat caused the popping.',
      ['The sun.', 'The workers put on their jackets.', 'Corn is yellow and grows in fields.'],
      'Answer in a full sentence, prove it, then explain. “The sun.” is not a sentence and gives no proof.',
      'The Popcorn Day\n(1) One summer it was so hot that the corn in the fields began to pop.\n(2) Popped corn flew through the air and landed in huge piles.\n(3) The workers shivered and put on their jackets.\n\nQuestion: What made the corn start popping?'],
    ['The dog is greedy. In paragraph 2, he already has a bone but “wants the bigger bone” in the water. This shows he is never happy with what he has.',
      ['The dog has a bone.', 'The greedy character is the dog because he acts like the king.', 'Paragraph 3 says the bone sank.'],
      'The best answer gives a trait, proof from the text with a paragraph number, and an explanation.',
      'The Dog and His Reflection\n(1) A dog carried a bone across a bridge.\n(2) He looked down and saw another dog with a bone. He wanted the bigger bone in the water.\n(3) He opened his mouth to grab it, and his own bone fell in and sank.\n\nQuestion: What trait describes the dog?'],
    ['The dog learns not to be greedy. In paragraph 3, “his own bone fell in and sank” when he tried to grab more. This shows that wanting more can make you lose what you have.',
      ['He learns about bones.', 'His bone fell in and sank.', 'The dog crossed a bridge.'],
      'A lesson answer needs the lesson, the event that teaches it, and an explanation.',
      'The Dog and His Reflection\n(1) A dog carried a bone across a bridge.\n(2) He looked down and saw another dog with a bone. He wanted the bigger bone in the water.\n(3) He opened his mouth to grab it, and his own bone fell in and sank.\n\nQuestion: What lesson does the dog learn?'],
    ['The ant is kind. Paragraph 3 says she “bit the hunter’s foot” so the dove could fly away. This shows she helped the dove the way the dove helped her.',
      ['The ant is small.', 'The dove dropped a leaf.', 'The kindest character is the ant because the the ant got saved.'],
      'Prove the trait with an action and explain why it fits.',
      'The Ant and the Dove\n(1) An ant fell into a stream.\n(2) A dove dropped a leaf, and the ant climbed onto it to safety.\n(3) Later, a hunter aimed at the dove. The ant bit the hunter’s foot, and the dove flew away.\n\nQuestion: How does the ant show kindness?'],
    ['The dove solves the problem by dropping a leaf. In paragraph 2, the ant “climbed onto it to safety.” This shows a small idea can save a life.',
      ['The ant fell into a stream.', 'Doves can fly.', 'A leaf.'],
      'Answer how the problem is solved, prove it, and explain.',
      'The Ant and the Dove\n(1) An ant fell into a stream.\n(2) A dove dropped a leaf, and the ant climbed onto it to safety.\n(3) Later, a hunter aimed at the dove. The ant bit the hunter’s foot, and the dove flew away.\n\nQuestion: How does the dove help the ant?'],
    ['Polar bears have thick fur to stay warm. Paragraph 2 says their fur and fat “keep out the cold.” This shows their bodies are made for icy places.',
      ['Polar bears are white.', 'Polar bears live in the Arctic.', 'Because it is cold.'],
      'An informational answer still needs an answer, proof, and an explanation.',
      'Built for the Cold\n(1) Polar bears live in the icy Arctic.\n(2) Their thick fur and a layer of fat keep out the cold.\n(3) Wide paws help them walk on snow without sinking.\n\nQuestion: How do polar bears stay warm?'],
    ['Wide paws help polar bears walk on snow. Paragraph 3 says the paws keep them from “sinking.” This means their feet work like snowshoes.',
      ['Polar bears have big feet.', 'Their fur is thick.', 'They like snow.'],
      'Pick the paragraph that matches the question, then explain the proof.',
      'Built for the Cold\n(1) Polar bears live in the icy Arctic.\n(2) Their thick fur and a layer of fat keep out the cold.\n(3) Wide paws help them walk on snow without sinking.\n\nQuestion: Why are wide paws useful?'],
    ['Communities need rules to keep people safe. Paragraph 2 says stop signs help “cars and people take turns.” This shows that rules prevent accidents.',
      ['Rules.', 'There is a stop sign on my street.', 'Leaders make rules.'],
      'Use the text, not only your own life, as proof.',
      'Rules for Everyone\n(1) Every community has rules and laws.\n(2) Stop signs help cars and people take turns at corners.\n(3) Leaders listen to citizens before they make new laws.\n\nQuestion: Why do communities need rules?'],
    ['Leaders listen to citizens before making laws. Paragraph 3 says leaders “listen to citizens” first. This shows that people in a community have a voice.',
      ['Leaders are important.', 'Stop signs help cars.', 'Citizens.'],
      'Answer in a full sentence and prove it with the paragraph that matches.',
      'Rules for Everyone\n(1) Every community has rules and laws.\n(2) Stop signs help cars and people take turns at corners.\n(3) Leaders listen to citizens before they make new laws.\n\nQuestion: What do leaders do before making new laws?'],
    ['Tomas is brave. In paragraph 2, his legs “felt like jelly,” but he still stepped onto the bridge. This shows that being brave means going on even when you are scared.',
      ['Tomas is scared.', 'The bridge was old.', 'His grandmother hugged him.'],
      'Show the trait with an action from the text, then explain it.',
      'The Windy Bridge\n(1) The rope bridge swung in the wind.\n(2) Tomas’s legs felt like jelly, but he took a deep breath and stepped out.\n(3) At the other side, his grandmother hugged him tight.\n\nQuestion: What trait does Tomas show?'],
    ['Water vapor turns back into drops in the clouds. Paragraph 2 says the vapor “cools and forms tiny drops.” This explains how clouds are made.',
      ['The sun is hot.', 'Clouds are white.', 'It rains.'],
      'Use the paragraph that matches the question.',
      'Where Clouds Come From\n(1) The sun warms water in lakes and oceans, and it turns into vapor.\n(2) High in the sky, the vapor cools and forms tiny drops. The drops make clouds.\n(3) When the drops get heavy, they fall as rain.\n\nQuestion: How do clouds form?']
  ]);
  /* Each new Prove it item also gets a long two-part distractor (answer + proof, no explanation),
     so the right answer is never just "the longest one" and the three-part rule gets practiced. */
  const TWO_PART = [
    'It was called the Popcorn Blizzard because the popcorn fell like snow. Paragraph 2 says the popcorn “landed in huge piles.”',
    'The heat made the corn start popping. Paragraph 1 says it was “so hot that the corn in the fields began to pop.”',
    'The dog is greedy. In paragraph 2, he “wanted the bigger bone in the water.”',
    'The dog learns not to be greedy. In paragraph 3, “his own bone fell in and sank.”',
    'The ant is kind. Paragraph 3 says she “bit the hunter’s foot.”',
    'The dove solves the problem by dropping a leaf. In paragraph 2, the ant “climbed onto it to safety.”',
    'Polar bears have thick fur to stay warm. Paragraph 2 says their fur and fat “keep out the cold.”',
    'Wide paws help polar bears walk on snow. Paragraph 3 says the paws keep them from “sinking.”',
    'Communities need rules to keep people safe. Paragraph 2 says stop signs help “cars and people take turns.”',
    'Leaders listen to citizens before making laws. Paragraph 3 says leaders “listen to citizens” first.',
    'Tomas is brave. In paragraph 2, his legs “felt like jelly,” but he still stepped onto the bridge.',
    'Water vapor turns back into drops in the clouds. Paragraph 2 says the vapor “cools and forms tiny drops.”'
  ];
  G.mc['o-prove'].slice(-TWO_PART.length).forEach((o, i) => { o.w.push(TWO_PART[i]); o.why += ' The answer-plus-proof choice is close, but it never explains what the proof shows.'; });
  pick('o-prove', 'Which answer restates the question in a complete sentence?', [
    ['The heat made the corn start popping.', ['The sun.', 'Because it was hot.', 'Popping.'], 'Turn the question into the start of your answer: “What made the corn pop?” → “The heat made the corn pop.”', 'Question: What made the corn start popping?'],
    ['It was called the Popcorn Blizzard because the popcorn fell like snow.', ['Because popcorn is falls very hard.', 'Snow.', 'It fell.'], 'Use the words of the question: “It was called the Popcorn Blizzard because…”', 'Question: Why was it called the Popcorn Blizzard?'],
    ['The ant helped the dove by biting the hunter.', ['By biting.', 'The hunter.', 'Biting the hunter’s foot.'], 'A complete answer says WHO did WHAT: “The ant helped the dove by…”', 'Question: How did the ant help the dove?'],
    ['The greediest character is the dog because he wants more than he has.', ['The dog.', 'Because he is greedy.', 'Greedy dog.'], 'Restate the question, name the character, and give the reason.', 'Question: Who is the greediest character, and why?'],
    ['Bo learned that it is better to ask for help.', ['Ask for help.', 'He learned.', 'Bo.'], 'Start with the character and the question words: “Bo learned that…”', 'Question: What did Bo learn?'],
    ['Polar bears stay warm with thick fur and fat.', ['Fur.', 'Because of fat.', 'Thick.'], 'Use the question’s words: “Polar bears stay warm with…”', 'Question: How do polar bears stay warm?']
  ]);

  /* ================================================================ Organize It: Explain it (Grade 3 gets it now) */
  pick('o-explain', 'Which sentence best EXPLAINS the evidence?', [
    ['This shows that wanting more made him lose what he had.', ['His bone fell in the water.', 'Dogs like bones.', 'The bridge was long.'], 'An explanation tells what the evidence MEANS. It does not just repeat it.', 'Answer: The dog is greedy.\nEvidence: “He wanted the bigger bone,” and then his own bone sank.'],
    ['This shows that friends help each other when there is trouble.', ['The ant bit the hunter.', 'The hunter had a net.', 'Ants are very small.'], 'Explain the lesson the evidence points to.', 'Answer: The ant is a good friend.\nEvidence: “The ant bit the hunter’s foot, and the dove flew away.”'],
    ['This means the popcorn looked just like a snowstorm.', ['The popcorn landed in piles.', 'Corn grows in fields.', 'It was summer.'], 'Connect the evidence to the answer: piles of white popcorn look like snow.', 'Answer: It was called the Popcorn Blizzard because the popcorn was like snow.\nEvidence: Popped corn “landed in huge piles.”'],
    ['This shows that being brave means going on even when you are afraid.', ['His legs felt like jelly.', 'The bridge was made of rope.', 'Tomas likes bread.'], 'Explain what the action teaches about the character.', 'Answer: Tomas is brave.\nEvidence: His legs “felt like jelly,” but he stepped out onto the bridge.'],
    ['Because of this, they can live in places where most animals would freeze.', ['They have thick fur.', 'Polar bears are big.', 'The Arctic has ice.'], 'Tell why the evidence matters.', 'Answer: Polar bears are built for the cold.\nEvidence: “Thick fur and a layer of fat keep out the cold.”'],
    ['This shows that rules help everyone stay safe.', ['Stop signs are red.', 'There are many cars.', 'Cars stop at signs.'], 'Explain HOW the evidence proves the answer.', 'Answer: Communities need rules.\nEvidence: Stop signs “help cars and people take turns at corners.”'],
    ['This means Bo changed from bragging to listening.', ['Bo said he was strong.', 'The ants worked together.', 'Beetles live in meadows.'], 'Explain the change the evidence shows.', 'Answer: Bo changed by the end.\nEvidence: “From that day on, Bo bragged less and listened more.”'],
    ['This shows that kindness can come back to you.', ['Lena gave away half the pear.', 'The forest was cold.', 'Mice eat acorns.'], 'Explain the lesson, not the event.', 'Answer: The lesson is that sharing brings kindness back.\nEvidence: Lena shared her pear, and the next day the mouse showed her a nest full of acorns.'],
    ['This explains why we see rain after clouds get dark and heavy.', ['The drops get heavy.', 'Clouds float.', 'Water is wet.'], 'Connect the evidence to something the reader can see.', 'Answer: Rain falls when cloud drops get heavy.\nEvidence: “When the drops get heavy, they fall as rain.”'],
    ['This shows that citizens help decide the rules.', ['Leaders make laws.', 'There are many citizens.', 'Laws are written down.'], 'Explain what the evidence tells us about the community.', 'Answer: People have a voice in their community.\nEvidence: “Leaders listen to citizens before they make new laws.”'],
    ['This means hard work and new ideas can solve a problem.', ['Pip stacked three acorns.', 'The cheese was yellow.', 'Pip is a mouse.'], 'Explain the meaning behind the action.', 'Answer: Pip never gives up.\nEvidence: Pip jumped again and again, then “stacked three acorns” to reach the cheese.'],
    ['This shows that teamwork makes hard jobs easier.', ['Her friends made a bridge.', 'Dara is an ant.', 'The puddle was wide.'], 'Explain what the evidence teaches.', 'Answer: Dara solved her problem with help.\nEvidence: “Her friends made a bridge from a long leaf.”']
  ]);

  /* ================================================================ Organize It: Pick the best evidence (more, with true-but-weak distractors) */
  pick('o-evidence', 'Which detail from the text BEST supports the answer?', [
    ['“He wanted the bigger bone in the water.”', ['“A dog carried a bone across a bridge.”', '“He looked down.”'], 'The best evidence shows the trait (greedy). The others are true, but they do not prove greed.', 'Answer: The dog is greedy.'],
    ['“The ant bit the hunter’s foot.”', ['“An ant fell into a stream.”', '“A hunter aimed at the dove.”'], 'Biting the hunter is what the ant DID to help.', 'Answer: The ant helped the dove.'],
    ['“Popped corn flew through the air and landed in huge piles.”', ['“The workers worked in the fields.”', '“It was summer.”'], 'Piles of falling popcorn are what made it look like a blizzard.', 'Answer: The popcorn looked like snow.'],
    ['“Wide paws help them walk on snow without sinking.”', ['“Polar bears live in the icy Arctic.”', '“Their fur is thick.”'], 'The question is about walking on snow, so pick the detail about paws.', 'Answer: Polar bears can walk on snow easily.'],
    ['“From that day on, Bo bragged less and listened more.”', ['“Bo the beetle loved to brag.”', '“The ants worked together.”'], 'To show a CHANGE, pick the detail from the end of the story.', 'Answer: Bo changed by the end of the story.'],
    ['“Leaders listen to citizens before they make new laws.”', ['“Every community has rules and laws.”', '“Stop signs help cars.”'], 'Only this detail shows citizens having a voice.', 'Answer: Citizens help shape the laws.'],
    ['“He took a deep breath and stepped out slowly.”', ['“The rope bridge swung in the wind.”', '“His grandmother was waiting.”'], 'Stepping out while scared is the brave ACTION.', 'Answer: Tomas is brave.'],
    ['“She broke the pear in half and gave the bigger piece to the mouse.”', ['“Winter was near.”', '“She found one juicy pear.”'], 'Giving away the bigger piece proves she is generous.', 'Answer: Lena is generous.']
  ]);

  /* ================================================================ Organize It: Kinds of writing (3.W.1A) — new tile */
  const KINDS = ['Story (narrative)', 'Opinion', 'Informational'];
  mc('o-form', 'What kind of writing is this?', [
    ['Last summer, my family drove to the beach. First, we built a giant sandcastle. Then a wave knocked it down!', 'Story (narrative)', 'It tells what happened, in order, with time words like first and then.'],
    ['I think recess should be longer. One reason is that kids need to move. Another reason is that we come back ready to learn.', 'Opinion', 'It gives the writer\'s opinion (I think) and reasons.'],
    ['Bees make honey from flower nectar. They store it in wax cells inside the hive. One hive can make many pounds of honey.', 'Informational', 'It teaches facts about a topic.'],
    ['The best season is fall because the leaves turn red and gold. Also, it is perfect weather for hiking.', 'Opinion', '“The best” and “because” show an opinion with reasons.'],
    ['When the power went out, we lit candles. Dad told stories, and we laughed until the lights came back on.', 'Story (narrative)', 'It tells events that happened to someone, in order.'],
    ['The water cycle has three main steps: evaporation, condensation, and precipitation. Each step moves water around Earth.', 'Informational', 'It explains how something works using facts.'],
    ['Every kid should learn to swim. Swimming keeps you safe near water, and it is great exercise.', 'Opinion', '“Should” and reasons tell you it is an opinion piece.'],
    ['A long time ago, a hungry fox found grapes on a high vine. He jumped and jumped, but he could not reach them.', 'Story (narrative)', 'It has a character, a problem, and events: a story.'],
    ['Leaders in a community make rules. A mayor leads a town. Voters choose their leaders in elections.', 'Informational', 'Facts about a topic: informational.']
  ].map((x) => ({ show: x[0], r: x[1], w: KINDS.filter((k) => k !== x[1]), keep: KINDS, layout: 'col', why: x[2] })));
  pick('o-form', 'Which sentence belongs in this kind of writing?', [
    ['In my opinion, cats are the best pets because they are calm.', ['Cats sleep about 15 hours a day.', 'One day, my cat climbed the curtains.'], 'An opinion piece needs an opinion and a reason.', 'Kind: Opinion'],
    ['Next, I grabbed my umbrella and ran outside.', ['Umbrellas were invented long ago.', 'Umbrellas are the best thing to carry.'], 'A story tells what happened next.', 'Kind: Story (narrative)'],
    ['Snakes shed their skin as they grow.', ['I think snakes are scary.', 'Yesterday, I saw a snake at the zoo.'], 'Informational writing gives facts.', 'Kind: Informational'],
    ['For these reasons, our town should build a new park.', ['The park has two swings.', 'We played at the park until dark.'], '“For these reasons” wraps up an opinion piece.', 'Kind: Opinion'],
    ['At the end of the day, I finally found my dog under the porch.', ['Dogs can hear sounds people cannot.', 'Dogs are better than cats.'], 'A story ending tells how the problem was solved.', 'Kind: Story (narrative)']
  ]);

  /* ================================================================ Organize It: My own words (quote, paraphrase, credit: 3.DSR.C, 3.R.1E) — new tile */
  pick('o-own', 'Which one is a PARAPHRASE? (The same idea in your own words.)', [
    ['Polar bears have heavy fur and fat that help them stay warm.', ['Their thick fur and a layer of fat keep out the cold.', 'Polar bears like to swim.'], 'A paraphrase keeps the meaning but uses new words. The first wrong choice copies the text.', 'Text: “Their thick fur and a layer of fat keep out the cold.”'],
    ['When there is trouble, real friends step in to help.', ['A friend in need is a friend indeed.', 'Friends play games together.'], 'Same idea, your own words.', 'Text: “A friend in need is a friend indeed.”'],
    ['Corn grew really tall in the summer heat.', ['The cornstalks grew as tall as trees.', 'Corn is a yellow vegetable.'], 'Changing the words while keeping the idea is paraphrasing.', 'Text: “The cornstalks grew as tall as trees.”'],
    ['A mayor is in charge of running a town.', ['A mayor leads a town.', 'A mayor lives in a big house.'], 'The wrong choices either copy the text or change the meaning.', 'Text: “A mayor leads a town.”']
  ]);
  pick('o-own', 'Which one QUOTES the text correctly?', [
    ['The story says the dove “dropped a leaf” to save the ant.', ['The story says the dove dropped a leaf to save the ant.', 'The story says the dove “threw a stick” to save the ant.'], 'A quote uses the EXACT words inside quotation marks.', 'Text: “A dove dropped a leaf, and the ant climbed onto it.”'],
    ['Paragraph 2 says the popcorn “landed in huge piles.”', ['Paragraph 2 says the popcorn “fell down a lot.”', 'Paragraph 2 says the popcorn landed in huge piles'], 'Exact words, in quotation marks, with the paragraph number and an end mark.', 'Text: “Popped corn flew through the air and landed in huge piles.”'],
    ['The author writes that bees store honey “in wax cells.”', ['The author writes that bees store honey “in jars.”', 'The author writes that bees store honey in wax cells'], 'Copy the exact words and put quotation marks around them.', 'Text: “They store it in wax cells inside the hive.”']
  ]);
  pick('o-own', 'Which is the best way to give CREDIT to a source?', [
    ['I learned this from “Built for the Cold” by Kim Ray.', ['I learned this from a book.', 'I made this up myself.'], 'Give credit with the title and the author, when you know them.'],
    ['According to “Rules for Everyone” by Sam Lee, leaders listen to citizens.', ['Leaders listen to citizens, and I thought of that.', 'Somebody said leaders listen.'], '“According to” plus the title and author tells where the idea came from.'],
    ['Copy the exact words in quotation marks and name the author.', ['Copy the words without quotation marks.', 'Change one word and call it yours.'], 'Using someone\'s words without credit is called plagiarism. Always give credit.'],
    ['Write the idea in your own words and still name the source.', ['Write it in your own words and say you thought of it.', 'Leave out where you found it.'], 'Even a paraphrase needs credit, because the IDEA came from the source.'],
    ['“The Ant and the Dove,” a fable by Aesop', ['the ant and the dove, by aesop', 'The Ant And The Dove by somebody'], 'Titles get capitals on the important words and go in quotation marks. Name the author.']
  ]);

  /* ================================================================ Fix This Writing: three pieces built from real Grade 3 slips */
  add(G.fix, [
    {
      id: 'greedy', t: 'The Greediest Character',
      clean: [
        ['I think the greediest character is the dog.', 'He already has a bone, but he wants a bigger one.'],
        ['One reason is that he never says thank you.', 'Another reason is that he tries to take the other dog\'s bone.', 'He even acts like he is the king of the river.'],
        ['In conclusion, the dog is the greediest character because he always wants more.']
      ],
      messy: 'i think the greediest charactar is the Dog. He already has a bone but he wants a bigger one One reason is that he never says thank you. another reason is that he tries to take the other dogs bone. He even acts like he is the King of the river. In conclusion, the dog is the greediest character becase he always wants more.',
      notes: ['Sentences and the word I start with capitals. Dog and king are not names here, so they get small letters.', 'Use a comma before but when it joins two sentences, and end every sentence with a period.', 'dog\'s bone needs an apostrophe: the bone belongs to the dog.', 'Spelling: character, because.', 'New paragraphs: the opinion, the reasons, the conclusion.']
    },
    {
      id: 'rules', t: 'Rules at Our School',
      clean: [
        ['Every community needs rules.', 'At our school, rules keep everyone safe.'],
        ['For example, we walk in the halls so nobody gets hurt.', 'We also raise our hands, so everyone gets a turn to talk.'],
        ['Our principal, Mrs. Diaz, says good rules are fair to everyone.', 'I agree with her because fair rules help us learn.']
      ],
      messy: 'every community needs rules. At our school, rules keep everyone safe For example, we walk in the halls so nobody gets hurt. We also raise our hands so everyone gets a turn too talk. our principal, mrs. Diaz, says good rules are fair to everyone. I agree with her becuase fair rules help us lern.',
      notes: ['Sentences and titles like Mrs. start with capitals.', 'Every sentence needs an end mark.', 'Put a comma before so when it joins two sentences.', 'to talk (toward), not too (also).', 'Spelling: because, learn.', 'New paragraphs: why rules matter, examples, what the principal says.']
    },
    {
      id: 'popcorn', t: 'The Popcorn Blizzard',
      clean: [
        ['The story is called the Popcorn Blizzard because the popped corn looked like snow.', 'It fell from the sky and piled up on the ground.'],
        ['In paragraph 3, the corn popped because it was so hot.', 'The workers thought the popcorn was snow, so they put on their jackets.'],
        ['This shows that Paul Bunyan\'s world is full of silly, amazing things.', 'That is why it is a tall tale.']
      ],
      messy: 'the story is called the Popcorn Blizzard becase the popped corn looked like snow. It fell from the sky and piled up on the ground In paragraph 3, the corn popped because it was so hot. The workers thought the popcorn was snow so they put on there jackets. this shows that Paul Bunyans world is full of silly amazing things. That is why it is a tall tale.',
      notes: ['Sentences start with capitals.', 'Every sentence needs an end mark.', 'Comma before so, and a comma between two describing words (silly, amazing).', 'their jackets: the jackets belong to them.', 'Paul Bunyan\'s world needs an apostrophe.', 'Spelling: because.', 'A reading answer has three parts: answer, proof, explain. Each one gets its own paragraph here.']
    }
  ]);

  /* ================================================================ Round 4b: fill the thin Grade 3 builders (opinion paragraphs first) */
  const P = G.para;
  add(P.order, [
    { t: 'The Greediest Character', strips: ['I think the dog is the greediest character in the fable.', 'One reason is that he already has a bone but wants another one.', 'Another reason is that he tries to grab the bone from the dog in the water.', 'In the end, he loses his own bone.', 'That is why the dog is the greediest character.'], why: 'Opinion first, then reasons with linking words, then the closing says the opinion again.' },
    { t: 'Kids Should Vote on Class Rules', strips: ['I think kids should help vote on class rules.', 'One reason is that kids follow rules better when they help make them.', 'Another reason is that voting teaches us how a community works.', 'For these reasons, kids should vote on class rules.'], why: 'Opinion, reason 1, reason 2, conclusion.' },
    { t: 'How a Bill Becomes a Rule at School', strips: ['Our class used voting to make a new rule.', 'First, students shared ideas for the rule.', 'Next, we talked about which idea was most fair.', 'Then, everyone voted by raising hands.', 'Finally, the idea with the most votes became our rule.'], why: 'Topic sentence, then steps in order with time words.' },
    { t: 'The Ant and the Dove', strips: ['The ant is the kindest character in the story.', 'At first, the dove saves the ant by dropping a leaf.', 'Later, a hunter tries to catch the dove.', 'The ant bites the hunter so the dove can fly away.', 'This shows that kindness comes back to you.'], why: 'Answer first, then events in order, then the explanation.' },
    { t: 'Why Owls Hunt at Night', strips: ['Owls have bodies that help them hunt at night.', 'Their big eyes can see in the dark.', 'Their sharp ears can hear a mouse moving in the grass.', 'Soft feathers let them fly without a sound.', 'These adaptations make owls great night hunters.'], why: 'Main idea, three details, and a closing that sums them up.' },
    { t: 'Two Points of View', strips: ['A rainy day can look different to different people.', 'To a farmer, rain is good news because crops need water.', 'To a kid with a soccer game, rain is bad news because the game is canceled.', 'Both people see the same rain in different ways.'], why: 'Topic, point of view 1, point of view 2, closing.' }
  ]);
  add(P.odd, [
    { strips: ['The dog in the fable is greedy.', 'He already has a bone.', 'He wants the bone in the water too.', 'My cousin has a puppy named Max.', 'He ends up with no bone at all.'], bad: 3, why: 'The paragraph is about the dog in the fable. A real puppy does not belong.' },
    { strips: ['Our town has many leaders.', 'The mayor leads the whole town.', 'The town council helps make laws.', 'Pizza is my favorite food.', 'Voters choose these leaders.'], bad: 3, why: 'Every sentence is about town leaders except the one about pizza.' },
    { strips: ['Ants work together in many ways.', 'They carry food back to the nest as a team.', 'Some ants guard the nest.', 'Butterflies have colorful wings.', 'Others take care of the baby ants.'], bad: 3, why: 'The topic is ants working together. Butterflies are off topic.' },
    { strips: ['The water cycle never stops.', 'The sun warms water and turns it into vapor.', 'The vapor cools and forms clouds.', 'I got new rain boots last week.', 'Rain falls, and the cycle starts again.'], bad: 3, why: 'New rain boots are about you, not about how the water cycle works.' },
    { strips: ['Bo the beetle learned an important lesson.', 'He bragged that he was the strongest bug.', 'Beetles have six legs.', 'He got stuck under a twig.', 'The ants helped him, and he learned to ask for help.'], bad: 2, why: 'A fact about beetle legs does not tell about Bo\'s lesson.' },
    { strips: ['I think fall is the best season.', 'The leaves turn red, orange, and gold.', 'The weather is cool and perfect for hiking.', 'Some birds fly south.', 'For these reasons, fall is my favorite season.'], bad: 3, why: 'Birds flying south is a fact, but it is not a reason fall is the best. Every sentence should support the opinion.' }
  ]);
  add(P.topic, [
    { q: 'Which is the best topic sentence for these reasons?', show: 'He already has a bone. He tries to take another bone. He never shares.', r: 'The dog is the greediest character in the fable.', w: ['The dog has a bone.', 'Dogs like bones.', 'The bone fell in the water.'], why: 'A topic sentence states the opinion that ALL the reasons support.' },
    { q: 'Which is the best closing sentence?', show: 'Opinion: Kids should have a longer recess. Reasons: Kids need to move. Kids come back ready to learn.', r: 'For these reasons, recess should be longer.', w: ['Recess is outside.', 'The end.', 'I like the swings.'], why: 'A closing restates the opinion and sums up the reasons.' },
    { q: 'Which is the best topic sentence for these details?', show: 'The mayor leads the town. The council makes laws. Citizens vote for their leaders.', r: 'Many people work together to run a community.', w: ['The mayor has an office.', 'I voted for class president.', 'Laws are rules.'], why: 'The topic sentence covers all three details: leaders, laws, and voters.' },
    { q: 'Which is the best closing sentence?', show: 'Story: Tomas crosses a scary bridge to bring bread to his grandmother.', r: 'Tomas learned that being brave means going on even when you are scared.', w: ['The bridge was made of rope.', 'Then he went home.', 'Bread is tasty.'], why: 'A story closing tells what the character learned or how they changed.' },
    { q: 'Which is the best topic sentence for these details?', show: 'Camels store fat in their humps. They have long eyelashes to block sand. Their wide feet do not sink in the sand.', r: 'Camels have special body parts for living in the desert.', w: ['Camels have humps.', 'The desert is hot.', 'I rode a camel once.'], why: 'All three details are adaptations for the desert.' },
    { q: 'Which is the best closing sentence?', show: 'Answer: The ant is kind. Evidence: She bit the hunter to save the dove.', r: 'This shows that the ant repays kindness with kindness.', w: ['The hunter had a net.', 'Ants are small.', 'The dove flew.'], why: 'Close a reading answer by explaining what the evidence shows.' }
  ]);
  add(P.cloze, [
    { t: 'My Opinion', text: 'I think dogs are the best pets. {0} is that dogs are loyal. {1} is that they keep you active. {2}, my dog walks with me every day. {3}, dogs are the best pets.', bank: ['One reason', 'Another reason', 'For example', 'In conclusion'], ans: [['One reason'], ['Another reason'], ['For example'], ['In conclusion']], why: 'One reason, Another reason, For example (a detail), In conclusion (the end).' },
    { t: 'The Greedy Dog', text: 'The dog has a bone. {0}, he wants the bone in the water. He opens his mouth, {1} his own bone falls in. {2}, he has no bone at all.', bank: ['However', 'and', 'In the end'], ans: [['However'], ['and'], ['In the end']], why: 'However shows a change, and joins two events, In the end tells how it finishes.' },
    { t: 'Making a Class Rule', text: '{0}, we shared our ideas. {1}, we talked about each one. {2}, we voted. The class picked the idea {3} it was the most fair.', bank: ['First', 'Next', 'Then', 'because'], ans: [['First'], ['Next', 'Then'], ['Then', 'Next'], ['because']], why: 'Time words put the steps in order. Because gives the reason.' },
    { t: 'Polar Bears', text: 'Polar bears live in the Arctic. They have thick fur {0} a layer of fat. {1}, their wide paws help them walk on snow. {2}, they are built for the cold.', bank: ['and', 'Also', 'As a result'], ans: [['and'], ['Also'], ['As a result']], why: 'And joins two things, Also adds a detail, As a result tells what all the details add up to.' },
    { t: 'A Rainy Day', text: 'I wanted to play outside, {0} it was raining. {1}, I read a book. {2} the rain stopped, I went out to jump in puddles.', bank: ['but', 'Instead', 'When'], ans: [['but'], ['Instead'], ['When']], why: 'But shows a problem, Instead tells what happened in its place, When tells the time.' },
    { t: 'Why We Need Bees', text: 'Bees are important. {0}, they help flowers make seeds. {1}, they make honey. {2}, without bees, there would be fewer fruits and vegetables. {3}, we should protect bees.', bank: ['First', 'Also', 'For example', 'That is why'], ans: [['First'], ['Also'], ['For example'], ['That is why']], why: 'First and Also add reasons, For example gives a detail, That is why gives the conclusion.' }
  ]);
  add(P.breaks, [
    { t: 'The Greediest Character', s: ['I think the dog is the greediest character.', 'He already has a bone, but he wants more.', 'One reason is that he never says thank you.', 'Another reason is that he tries to take the other bone.', 'In conclusion, the dog is the greediest character because he always wants more.'], br: [2, 4], why: 'Opinion, then the reasons, then the conclusion. Each part starts a new paragraph.' },
    { t: 'Our Town', s: ['Our town has a mayor.', 'The mayor leads town meetings.', 'Our town also has a library.', 'Anyone can borrow books there.', 'Kids can join a reading club in the summer.'], br: [2], why: 'The topic changes from the mayor to the library.' },
    { t: 'Snow Day', s: ['On Monday, it snowed all night.', 'School was closed!', 'In the morning, my sister and I built a snowman.', 'We gave him a carrot nose.', 'That night, we drank hot cocoa by the fire.'], br: [2, 4], why: 'New paragraphs when the time changes: the night before, the morning, that night.' },
    { t: 'Owls and Bats', s: ['Owls hunt at night.', 'They use their big eyes to see in the dark.', 'Bats also come out at night.', 'They use sound and echoes to find bugs.'], br: [2], why: 'The topic changes from owls to bats.' },
    { t: 'Prove It', s: ['The ant is the kindest character.', 'In paragraph 3, she bites the hunter\'s foot so the dove can escape.', 'This shows that the ant pays back kindness.'], br: [1, 2], why: 'Answer, proof, explanation: each can be its own short paragraph.' },
    { t: 'The Lost Mitten', s: ['"Where is my mitten?" asked Lea.', '"I saw it by the door," said her brother.', 'Lea ran to the door, and there it was.'], br: [1, 2], why: 'Start a new paragraph each time a new person speaks, and when the action changes.' },
    { t: 'Water Cycle', s: ['First, the sun warms water in the ocean.', 'The water turns into vapor and rises.', 'Next, the vapor cools high in the sky.', 'It forms tiny drops that make clouds.', 'Finally, the drops get heavy and fall as rain.'], br: [2, 4], why: 'Each new step (First, Next, Finally) starts a new paragraph.' }
  ]);
  pick('o-claim', 'What is the main idea of all these details?', [
    ['The dog is greedy.', ['The dog has a bone.', 'The dog crosses a bridge.'], 'All three details show the dog wanting more than he needs.', 'He has a bone. He wants another bone. He will not share.'],
    ['Leaders help a community run.', ['The mayor has a desk.', 'People vote in November.'], 'Every detail is about a leader\'s job.', 'The mayor plans the town budget. The council writes laws. The police chief keeps people safe.'],
    ['Bees help plants and people.', ['Bees can sting.', 'Bees are yellow and black.'], 'All details show how bees help.', 'Bees carry pollen so flowers make seeds. Bees make honey. Bees help fruit grow.'],
    ['Tomas is brave.', ['Tomas has a grandmother.', 'The wind is loud.'], 'Every detail shows Tomas facing fear.', 'His legs felt like jelly. He took a deep breath. He crossed the bridge anyway.'],
    ['Inventions changed how people live.', ['Phones are small.', 'Cars have four wheels.'], 'The details all show how inventions changed daily life.', 'Light bulbs let people work at night. Cars let people travel far. Phones let people talk from far away.'],
    ['Rain is part of the water cycle.', ['Clouds are white.', 'Puddles are fun.'], 'The details show water moving in a cycle.', 'Water evaporates from lakes. It forms clouds. It falls back down as rain.'],
    ['Pip never gives up.', ['Pip is a mouse.', 'Cheese is yummy.'], 'All three details show Pip trying again.', 'Pip jumped and missed. He jumped again. He stacked acorns until he reached the cheese.'],
    ['Communities change over time.', ['Some roads have stop signs.', 'Horses can run fast.'], 'Each detail compares long ago with today.', 'Long ago, people rode horses. Now people drive cars. Long ago, roads were dirt. Now most are paved.']
  ]);
  mc('o-sort', 'Which reason does this detail go with?', [
    ['Opinion: The dog is the greediest character.', '“He tries to grab the bone from the dog in the water.”', 'Reason: He always wants more.', 'Reason: He is a good swimmer.', 'Trying to grab another bone shows he wants more.'],
    ['Opinion: Kids should vote on class rules.', '“Last year, our class voted to have quiet reading after lunch.”', 'Reason: Voting gives everyone a voice.', 'Reason: Rules keep us safe.', 'The vote shows the class having a voice.'],
    ['Opinion: Owls are amazing hunters.', '“An owl can hear a mouse under the snow.”', 'Reason: They have super hearing.', 'Reason: They have soft feathers.', 'Hearing a mouse is about hearing.'],
    ['Opinion: Our school should have a garden.', '“We could measure how tall the plants grow each week.”', 'Reason: We can learn science and math.', 'Reason: We can eat healthy food.', 'Measuring plants is math and science learning.'],
    ['Opinion: Winter is the best season.', '“My family drinks hot cocoa after sledding.”', 'Reason: Winter has cozy treats.', 'Reason: Winter has snow sports.', 'Hot cocoa is a cozy treat.'],
    ['Opinion: Every kid should learn to swim.', '“Swimming works every muscle in your body.”', 'Reason: Swimming is great exercise.', 'Reason: Swimming keeps you safe near water.', 'Working your muscles is exercise.']
  ].map((x) => ({ show: x[0], q: x[1], r: x[2], w: [x[3]], keep: [x[2], x[3]].sort(), layout: 'col', why: x[4] })));
  ord('o-outline', 'Put the plan in order.', [
    { t: 'Opinion: The Greediest Character', strips: ['Opinion: The dog is the greediest character.', 'Reason 1: He already has a bone but wants more.', 'Reason 2: He tries to take the other dog\'s bone.', 'Closing: That is why the dog is the greediest.'], why: 'Opinion, reasons, closing.' },
    { t: 'Respond to Reading', strips: ['Answer: The ant is the kindest character.', 'Proof: In paragraph 3, she bites the hunter\'s foot.', 'Explain: This shows she pays back kindness.'], why: 'Answer, proof, explain: the three parts of a full-credit answer.' },
    { t: 'Informational: Owls', strips: ['Topic: Owls are built to hunt at night.', 'Detail: Big eyes see in the dark.', 'Detail: Sharp ears hear tiny sounds.', 'Closing: These adaptations help owls survive.'], why: 'Topic, details, closing.' },
    { t: 'Story: The Snow Day', strips: ['Beginning: School is canceled for snow.', 'Middle: We build a snowman, but it falls over.', 'Middle: We try again and make it stronger.', 'End: We drink cocoa and feel proud.'], why: 'Beginning, middle (problem and trying again), end.' },
    { t: 'Opinion: Class Rules', strips: ['Opinion: Kids should help make class rules.', 'Reason 1: Kids follow rules they help make.', 'Reason 2: It teaches how voting works.', 'Closing: For these reasons, kids should help make rules.'], why: 'Opinion, reasons, closing.' },
    { t: 'Compare: Two Fables', strips: ['Topic: Both fables teach a lesson.', 'Alike: Both characters have a problem.', 'Different: Pip solves it alone, but Dara gets help.', 'Closing: Both stories show ways to solve problems.'], why: 'Topic, how they are alike, how they are different, closing.' },
    { t: 'Respond to Reading: Why the Name?', strips: ['Answer: It was called the Popcorn Blizzard because the popcorn fell like snow.', 'Proof: The text says it “landed in huge piles.”', 'Explain: This shows it looked like a snowstorm.'], why: 'Restate the question in your answer, then prove, then explain.' },
    { t: 'Informational: Rain', strips: ['Topic: Rain comes from the water cycle.', 'Step 1: The sun warms water into vapor.', 'Step 2: Vapor cools and forms clouds.', 'Step 3: Heavy drops fall as rain.'], why: 'Topic, then the steps in order.' }
  ]);
  pick('o-intro', 'Which is the best beginning?', [
    ['Have you ever wanted something so much that you lost what you had?', ['This is about a dog.', 'Dogs are animals.', 'I will tell you my opinion.'], 'A question hook makes the reader want to keep reading.', 'Opinion about the greedy dog'],
    ['What if your class could vote on every rule?', ['Rules are rules.', 'This is my writing about voting.', 'I like school.'], 'Start with a question that makes the reader think.', 'Opinion: Kids should vote on class rules'],
    ['An owl can turn its head almost all the way around!', ['Owls are birds.', 'This report is about owls.', 'I like owls a lot.'], 'A surprising fact is a strong hook for informational writing.', 'Informational piece about owls'],
    ['The wind howled as I stared at the swinging rope bridge.', ['This story is about a bridge.', 'Once there was a bridge.', 'Bridges can be scary.'], 'Start a story with a scene: what you see, hear, or feel.', 'Story about crossing a scary bridge']
  ]);
  pick('o-intro', 'Which is the best ending?', [
    ['In conclusion, the dog is the greediest character because he always wants more.', ['That is all.', 'The dog had a bone.', 'The end.'], 'An opinion ending restates the opinion and the big reason.', 'Opinion about the greedy dog'],
    ['Now I know that trying again is how you get better.', ['Then I went inside.', 'That was my story.', 'Snow is cold.'], 'A story ending tells what you learned or felt.', 'Story about building a snowman that kept falling'],
    ['Owls truly are built for hunting in the dark.', ['Owls are cool.', 'The end of my report.', 'Some owls are brown.'], 'An informational ending sums up the main idea.', 'Informational piece about owls'],
    ['For these reasons, every class should vote on its rules.', ['Voting is fun.', 'Rules.', 'I am done.'], '“For these reasons” wraps up the opinion and the reasons.', 'Opinion: Kids should vote on class rules']
  ]);
  pick('neg', 'Which sentence is correct?', [
    ['I never want anything for dinner.', ['I never want nothing for dinner.', 'I don\'t never want nothing for dinner.'], 'Never is already a no-word, so use anything, not nothing.'],
    ['Nobody ate any of the cake.', ['Nobody ate none of the cake.', 'Nobody didn\'t eat the cake.'], 'Nobody is already a no-word, so use any, not none.'],
    ['The dog doesn\'t want any other bone.', ['The dog doesn\'t want no other bone.', 'The dog doesn\'t never want a bone.'], 'Doesn\'t already means no, so use any.'],
    ['We can\'t find anybody to play with.', ['We can\'t find nobody to play with.', 'We can\'t never find nobody.'], 'Can\'t already means no, so use anybody.'],
    ['There isn\'t any milk left.', ['There isn\'t no milk left.', 'There isn\'t none milk left.'], 'Isn\'t already means no, so use any.'],
    ['Bo didn\'t ask anybody for help.', ['Bo didn\'t ask nobody for help.', 'Bo didn\'t never ask for help.'], 'Didn\'t already means no, so use anybody.']
  ]);
  ord('o-outline', 'Put the plan in order.', [
    { t: 'Opinion: Best Invention', strips: ['Opinion: The light bulb is the most important invention.', 'Reason 1: People can work and read at night.', 'Reason 2: It made homes and streets safer.', 'Closing: For these reasons, the light bulb matters most.'], why: 'Opinion, reasons, closing.' },
    { t: 'Story: A Hard Choice', strips: ['Beginning: I found a lost wallet on the playground.', 'Middle: I wanted to keep the money, but I knew it was wrong.', 'Middle: I gave it to my teacher.', 'End: The owner thanked me, and I felt proud.'], why: 'Beginning, middle (the problem and the choice), end (how it felt).' }
  ]);
  pick('grow', 'Which sentence grows the small sentence best?', [
    ['The greedy dog stared hungrily at the bone in the water.', ['The dog stared and stared.', 'The dog, the dog stared.'], 'It adds what kind (greedy), how (hungrily), and where (in the water).', 'Small sentence: The dog stared.'],
    ['The tiny ant quickly climbed onto the floating leaf.', ['The ant climbed and climbed.', 'The ant climbed it.'], 'What kind (tiny), how (quickly), where (onto the floating leaf).', 'Small sentence: The ant climbed.'],
    ['Our whole class voted for a new pet on Friday.', ['We voted a lot.', 'We voted, we voted.'], 'Who (our whole class), what (for a new pet), when (on Friday).', 'Small sentence: We voted.'],
    ['Heavy rain fell on the town all night long.', ['Rain fell and fell.', 'It rained rain.'], 'What kind (heavy), where (on the town), when (all night long).', 'Small sentence: Rain fell.'],
    ['The brave boy slowly crossed the swinging bridge.', ['The boy crossed it.', 'The boy crossed, crossed.'], 'What kind (brave), how (slowly), what (the swinging bridge).', 'Small sentence: The boy crossed.'],
    ['The owl silently swooped down to catch a mouse.', ['The owl swooped.', 'The owl swooped and swooped and swooped.'], 'How (silently), where (down), why (to catch a mouse).', 'Small sentence: The owl swooped.']
  ]);
  pick('o-explain', 'Which sentence best EXPLAINS the evidence?', [
    ['This shows that voting gives everyone a fair say.', ['The class raised their hands.', 'There are 22 students.', 'Voting happens in November.'], 'Explain what the evidence means about fairness.', 'Answer: Voting is a fair way to decide.\nEvidence: “Every student got one vote, and the idea with the most votes won.”'],
    ['This means the owl can find food even when it cannot see it.', ['Owls have ears.', 'Mice live under snow.', 'Owls are birds.'], 'Tell how the evidence proves the answer.', 'Answer: Owls have amazing hearing.\nEvidence: “An owl can hear a mouse moving under the snow.”'],
    ['This shows that two people can see the same thing in different ways.', ['It rained on Saturday.', 'Farmers grow corn.', 'The game was canceled.'], 'Explain the big idea behind both points of view.', 'Answer: The farmer and the kid feel differently about rain.\nEvidence: The farmer is happy because crops need water, but the kid is sad because the game is canceled.'],
    ['Because of this, people can do more things after dark.', ['Light bulbs are bright.', 'Some bulbs are round.', 'Night is dark.'], 'Explain the result of the evidence.', 'Answer: The light bulb changed how people live.\nEvidence: “Light bulbs let people work and read at night.”']
  ]);
  pick('o-own', 'Which one is a PARAPHRASE? (The same idea in your own words.)', [
    ['People in a town pick their leaders by voting.', ['Voters choose their leaders in elections.', 'Leaders like to be picked.'], 'New words, same meaning.', 'Text: “Voters choose their leaders in elections.”'],
    ['Owls see well when it is dark because their eyes are large.', ['Their big eyes can see in the dark.', 'Owls have brown eyes.'], 'New words, same meaning. The first wrong choice copies the text.', 'Text: “Their big eyes can see in the dark.”'],
    ['Wanting too much can make you lose what you already have.', ['He opened his mouth, and his own bone fell in and sank.', 'Dogs should not cross bridges.'], 'A paraphrase of a lesson keeps the idea, not the exact words.', 'Text: The dog lost his bone because he wanted the bigger one.'],
    ['The vapor gets colder and turns into small drops.', ['The vapor cools and forms tiny drops.', 'The vapor gets hot and disappears.'], 'Same idea, new words. The last choice changes the meaning.', 'Text: “The vapor cools and forms tiny drops.”']
  ]);
  mc('o-form', 'What kind of writing is this?', [
    ['Camels can go days without drinking water. Their humps store fat for energy. Wide feet keep them from sinking in sand.', 'Informational', 'Facts about camels: informational.'],
    ['Kids should be allowed to choose their own books. When kids pick, they read more, and reading more makes them better readers.', 'Opinion', '“Should” plus reasons: opinion.']
  ].map((x) => ({ show: x[0], r: x[1], w: KINDS.filter((k) => k !== x[1]), keep: KINDS, layout: 'col', why: x[2] })));
})(typeof window !== 'undefined' ? window : globalThis);
