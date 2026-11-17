/* Writer's Workshop: content round 3, Grade 5 (Nov 2026).
   New Sentence Gym skills (tense shifts, expand & combine, conjunctions & adverbs, colons & hyphens,
   word choice, formal or informal, spelling & word parts), Organize It, and bigger banks.
   Built on the Virginia 2024 English SOL: 5.W.1, 5.W.2, 5.W.3, 5.LU.1 A-E, 5.LU.2 A-C, 5.FFW.2.
   Item keys are positional (skill:source:index): ALWAYS append; never insert or reorder.
   mc item: { p: prompt, q: sentence with ___ (optional), show: text box (optional), r: right, w: [wrong...], why }
   ord item: { t: title, p: prompt, strips: [in the right order], why }
   typ item: { p: prompt, wrong, accept: [answers], why } */
(function (w) {
  const D = w.WW_DATA; if (!D) return;
  const G = D[5]; G.mc = G.mc || {}; G.ord = G.ord || {}; G.typ = G.typ || {};
  const add = (arr, more) => { more.forEach((x) => arr.push(x)); };
  const mc = (skill, p, list) => { const a = G.mc[skill] || (G.mc[skill] = []); list.forEach((x) => a.push(Object.assign({ p }, x))); };
  /* short form: [q, right, [wrong...], why] -> fill-the-blank */
  const fb = (skill, p, list) => mc(skill, p, list.map((x) => ({ q: x[0], r: x[1], w: x[2], why: x[3] })));
  /* short form: [right, [wrong...], why] -> pick the best sentence */
  const pick = (skill, p, list, show) => mc(skill, p, list.map((x) => ({ r: x[0], w: x[1], why: x[2], show: x[3] || show, layout: 'col' })));

  /* ================================================================ Tense shifts (5.LU.1D) */
  fb('tense', 'Choose the verb that keeps the time the same.', [
    ['Yesterday, Leo grabbed his glove and ___ to the field.', 'ran', ['runs', 'will run'], 'The sentence is in the past (Yesterday, grabbed), so the second verb is past too: ran.'],
    ['Every morning, my dog waits by the door and ___ when the bus comes.', 'barks', ['barked', 'will bark'], 'Every morning tells about something that happens again and again, so stay in the present: waits, barks.'],
    ['The volcano rumbled, and then it ___ ash high into the sky.', 'shot', ['shoots', 'is shooting'], 'Rumbled is past, so shot keeps the story in the past.'],
    ['When the timer rings, take the cookies out and ___ them cool.', 'let', ['letted', 'will have let'], 'Instructions stay in the present command form: take, let.'],
    ['Next summer, we will visit Rome and ___ the Colosseum.', 'tour', ['toured', 'touring'], 'Will visit and (will) tour: the future helper will covers both verbs.'],
    ['In 1787, delegates met in Philadelphia and ___ about the new government.', 'argued', ['argue', 'are arguing'], 'A date in the past keeps every verb in the past: met, argued.'],
    ['Maya opened the box, gasped, and ___ the puppy inside.', 'hugged', ['hugs', 'will hug'], 'A list of actions in one sentence uses the same tense: opened, gasped, hugged.'],
    ['Right now, the wind is blowing and the trees ___.', 'are swaying', ['swayed', 'were swaying'], 'Right now means the present. Is blowing and are swaying match.'],
    ['The Romans built roads that ___ their whole empire together.', 'connected', ['connect', 'will connect'], 'The Romans built them long ago, so connected stays in the past.'],
    ['After the bell rang, everyone ___ their pencils.', 'dropped', ['drops', 'drop'], 'Rang is past, so dropped is past.'],
    ['Each year, the monarch butterflies fly south and ___ the winter in Mexico.', 'spend', ['spent', 'spended'], 'Each year shows a repeated present action: fly, spend.'],
    ['Grandpa looked at the old photo and ___ softly.', 'smiled', ['smiles', 'is smiling'], 'Looked is past, so smiled is past.'],
    ['If it rains tomorrow, the game ___ canceled.', 'will be', ['was', 'is being'], 'Tomorrow is the future: will be.'],
    ['Light travels faster than sound, so we ___ lightning before we hear thunder.', 'see', ['saw', 'seen'], 'A science fact is always true, so it stays in the present: travels, see.'],
    ['Last night, the power went out, so we ___ by candlelight.', 'read', ['reads', 'will read'], 'Last night is past. Read (said like "red") is the past tense of read.']
  ]);
  pick('tense', 'Which sentence keeps the same tense all the way through?', [
    ['Jordan dribbled down the court, faked left, and scored.', ['Jordan dribbled down the court, fakes left, and scored.', 'Jordan dribbles down the court, faked left, and scores.'], 'Dribbled, faked, scored: all past.'],
    ['The scientist mixes the liquids and records the color change.', ['The scientist mixes the liquids and recorded the color change.', 'The scientist mixed the liquids and records the color change.'], 'Mixes and records are both present.'],
    ['We hiked to the top, ate our lunch, and watched the hawks.', ['We hiked to the top, eat our lunch, and watched the hawks.', 'We hike to the top, ate our lunch, and watch the hawks.'], 'Hiked, ate, watched: all past.'],
    ['When the alarm sounds, students line up and walk outside.', ['When the alarm sounded, students line up and walk outside.', 'When the alarm sounds, students lined up and walk outside.'], 'Sounds, line up, walk: all present.'],
    ['Tomorrow I will finish my report and print it.', ['Tomorrow I will finish my report and printed it.', 'Tomorrow I finished my report and will print it.'], 'Will finish and (will) print: both future.'],
    ['The ancient Greeks held games and honored their gods.', ['The ancient Greeks hold games and honored their gods.', 'The ancient Greeks held games and honor their gods.'], 'Held and honored: both past, because the Greeks lived long ago.'],
    ['Kai slipped on the ice, but he jumped right back up.', ['Kai slipped on the ice, but he jumps right back up.', 'Kai slips on the ice, but he jumped right back up.'], 'Slipped and jumped: both past.'],
    ['Plants take in sunlight and make their own food.', ['Plants took in sunlight and make their own food.', 'Plants take in sunlight and made their own food.'], 'A fact that is always true stays in the present: take, make.']
  ]);
  mc('tense', 'Find the verb that shifts tense by mistake.', [
    { show: 'The storm hit at midnight. Rain pounded the roof, and the wind howls through the trees.', r: 'howls', w: ['hit', 'pounded'], why: 'The paragraph is in the past (hit, pounded), so howls should be howled.' },
    { show: 'Every Saturday, my family wakes up early. We pack a picnic and drove to the lake.', r: 'drove', w: ['wakes', 'pack'], why: 'Every Saturday tells about a habit in the present (wakes, pack), so drove should be drive.' },
    { show: 'Benjamin Franklin flew a kite in a storm. He wanted to prove that lightning is electricity, and he proves it.', r: 'proves', w: ['flew', 'wanted'], why: 'The story is in the past, so proves should be proved. (Is stays because it is still true that lightning is electricity.)' },
    { show: 'I walked into the gym and saw the poster. My name is at the very top! I screamed with joy.', r: 'is', w: ['walked', 'screamed'], why: 'The story happened in the past, so is should be was.' },
    { show: 'The explorers crossed the river. They set up camp, built a fire, and cook dinner.', r: 'cook', w: ['crossed', 'built'], why: 'Crossed, set up, built are past, so cook should be cooked.' },
    { show: 'First, the caterpillar spins a chrysalis. Inside, its body changed completely. Then a butterfly comes out.', r: 'changed', w: ['spins', 'comes'], why: 'The steps are told in the present (spins, comes), so changed should be changes.' },
    { show: 'At the museum, we stared at the dinosaur bones. The T. rex skull was huge. My sister asks if it was real.', r: 'asks', w: ['stared', 'was'], why: 'Everything else is past, so asks should be asked.' }
  ]);

  /* ================================================================ Expand, combine & reduce (5.LU.1A) */
  pick('grow', 'Which sentence expands the base sentence with the most useful details?', [
    ['Before sunrise, the hungry fox crept silently toward the henhouse.', ['The fox crept.', 'The fox crept and crept and crept.', 'The fox crept toward something.'], 'It adds when (before sunrise), what kind (hungry), how (silently), and where (toward the henhouse).', 'Base sentence: The fox crept.'],
    ['During the championship game, our goalie dove sideways and blocked the final shot.', ['Our goalie blocked a shot in a game.', 'The goalie blocked it.', 'Our goalie, who is a goalie, blocked the shot.'], 'It tells when, how (dove sideways), and which shot (the final one).', 'Base sentence: The goalie blocked the shot.'],
    ['After the hurricane, volunteers from three towns cleared fallen trees from the roads.', ['Volunteers cleared trees.', 'Many people cleared lots of things.', 'Volunteers cleared trees, and they were volunteers.'], 'It adds when (after the hurricane), who exactly (from three towns), and where (from the roads).', 'Base sentence: Volunteers cleared trees.'],
    ['The tiny hummingbird hovered over the red flower, sipping its sweet nectar.', ['The bird flew.', 'The hummingbird was very, very small.', 'The hummingbird hovered over a thing.'], 'Precise details: what kind of bird, how it moved, where, and why.', 'Base sentence: The bird flew.'],
    ['In 1903, Orville Wright flew the first powered airplane for twelve seconds at Kitty Hawk.', ['Orville Wright flew.', 'A man flew a plane one time somewhere.', 'Orville Wright flew an airplane that flew.'], 'It adds when, what, how long, and where.', 'Base sentence: Orville Wright flew.']
  ]);
  pick('grow', 'Which sentence combines the short sentences best?', [
    ['The tall lighthouse stood on a rocky cliff.', ['The lighthouse was tall, and it stood, and it was on a cliff that was rocky.', 'The lighthouse stood. It was tall on a rocky cliff.'], 'Combine by moving the describing words (tall, rocky) into one sentence.', 'The lighthouse stood on a cliff. The lighthouse was tall. The cliff was rocky.'],
    ['Although the trail was steep, we reached the top before noon.', ['The trail was steep, we reached the top before noon.', 'The trail was steep and we reached the top and it was before noon.'], 'Although shows the surprise (it was steep, but we still made it). The comma goes after the although part.', 'The trail was steep. We reached the top before noon.'],
    ['Dr. Reyes, who studies volcanoes, visited our class.', ['Dr. Reyes studies volcanoes, she visited our class.', 'Dr. Reyes visited our class she studies volcanoes.'], 'Who adds the extra fact about Dr. Reyes inside one smooth sentence. The first choice is a comma splice; the last is a run-on.', 'Dr. Reyes visited our class. She studies volcanoes.'],
    ['My brother and my cousin both play the trumpet in the school band.', ['My brother plays the trumpet, my cousin plays the trumpet in the band.', 'My brother plays the trumpet in the band and my cousin does it and it is the school band.'], 'When two people do the same thing, join the subjects with and.', 'My brother plays the trumpet in the school band. My cousin plays the trumpet in the school band.'],
    ['When the bell rang, students grabbed their backpacks and raced outside.', ['The bell rang, students grabbed their backpacks, they raced outside.', 'Students grabbed their backpacks the bell rang and they raced outside.'], 'When joins the time part. One subject (students) can do two actions (grabbed and raced).', 'The bell rang. Students grabbed their backpacks. Students raced outside.'],
    ['The museum displays ancient Roman coins, pottery, and tools.', ['The museum displays coins, it displays pottery, it displays tools that are Roman and ancient.', 'The museum displays ancient Roman coins. And pottery. And tools.'], 'When the same verb repeats, make a list: coins, pottery, and tools.', 'The museum displays ancient Roman coins. It displays ancient Roman pottery. It also displays ancient Roman tools.'],
    ['It started to snow, so the principal closed school early.', ['It started to snow the principal closed school early.', 'It started to snow, the principal closed school early.'], 'Join two complete sentences with a comma plus so. The other choices are a run-on and a comma splice.', 'It started to snow. The principal closed school early.'],
    ['Because sea turtles mistake plastic bags for jellyfish, plastic trash can harm them.', ['Sea turtles mistake plastic bags for jellyfish, plastic trash can harm them.', 'Plastic trash can harm sea turtles, they mistake plastic bags for jellyfish because.'], 'Because shows the cause. When the sentence starts with the because part, add a comma after it.', 'Plastic trash can harm sea turtles. They mistake plastic bags for jellyfish.']
  ]);
  pick('grow', 'Which version cuts the extra words but keeps the meaning?', [
    ['In my opinion, recess should be longer.', ['In my opinion, I personally think that I believe recess should be longer.', 'I think in my opinion recess should be made longer than it is.'], 'In my opinion, I think, and I believe all say the same thing. Keep one.', 'Wordy: In my opinion, I personally think that I believe recess should be longer.'],
    ['The storm destroyed the old barn.', ['The storm totally and completely destroyed the old barn that was old.', 'The storm destroyed the barn that was old and it was destroyed.'], 'Destroyed already means totally ruined, and old was said twice.', 'Wordy: The storm totally and completely destroyed the old barn that was old.'],
    ['At noon, we ate lunch.', ['At 12:00 noon in the middle of the day, we ate lunch.', 'At noon in the day, we ate lunch at that time.'], 'Noon already means 12:00 in the middle of the day.', 'Wordy: At 12:00 noon in the middle of the day, we ate lunch.'],
    ['The final result surprised everyone.', ['The final end result surprised each and every person.', 'The result at the end, which was final, surprised everyone there.'], 'Final and end repeat, and each and every person is just everyone.', 'Wordy: The final end result surprised each and every person.'],
    ['Please repeat the directions.', ['Please repeat the directions again one more time.', 'Can you please repeat again the directions over?'], 'Repeat already means say again.', 'Wordy: Please repeat the directions again one more time.'],
    ['Many people visit the park every year.', ['There are many people who visit the park each year annually.', 'Every year, a lot of many people visit the park yearly.'], 'Each year and annually say the same thing. Start with the real subject instead of There are… who.', 'Wordy: There are many people who visit the park each year annually.']
  ]);

  /* ================================================================ Conjunctions, adverbs, interjections, phrases (5.LU.1B, C) */
  fb('parts', 'Choose the joining word that makes the most sense.', [
    ['I wanted to go swimming, ___ the pool was closed.', 'but', ['so', 'or'], 'But shows a contrast: you wanted to, but you could not.'],
    ['The ice was thin, ___ we stayed off the pond.', 'so', ['but', 'yet'], 'So shows the result: thin ice, so we stayed off.'],
    ['Do you want pizza, ___ would you rather have tacos?', 'or', ['so', 'for'], 'Or gives a choice.'],
    ['He studied for hours, ___ he still felt nervous.', 'yet', ['so', 'or'], 'Yet means "but still." He studied, yet he was nervous.'],
    ['We cannot go outside ___ the storm passes.', 'until', ['because', 'although'], 'Until tells how long: we wait until the storm passes.'],
    ['___ she was tired, Ava finished her homework.', 'Although', ['Because', 'Unless'], 'Although shows a surprise: tired, but she finished anyway.'],
    ['You will miss the bus ___ you hurry.', 'unless', ['because', 'since'], 'Unless means "if not": if you do not hurry, you will miss it.'],
    ['___ the Nile flooded every year, the soil near it was rich.', 'Because', ['Although', 'Unless'], 'Because gives the cause of the rich soil.'],
    ['I have not seen my cousin ___ she moved to Ohio.', 'since', ['unless', 'or'], 'Since tells from what time: since she moved.'],
    ['The crowd cheered ___ the runner crossed the finish line.', 'when', ['unless', 'although'], 'When tells the time the cheering happened.'],
    ['Neither the coach ___ the players expected the rain.', 'nor', ['or', 'but'], 'Neither goes with nor.'],
    ['Plants need sunlight, ___ they use it to make food.', 'for', ['or', 'nor'], 'For can mean "because": plants need sunlight, for they use it to make food.']
  ]);
  fb('parts', 'Choose the adverb that fits best.', [
    ['The test is ___ tomorrow, so I will study tonight.', 'definitely', ['quietly', 'yesterday'], 'Definitely shows how sure you are (level of certainty).'],
    ['My grandmother ___ forgets a birthday; she remembers every single one.', 'never', ['always', 'often'], 'Never tells how often (frequency). The second part proves she does not forget.'],
    ['The soup was ___ hot that I had to wait ten minutes.', 'so', ['soon', 'never'], 'So tells how much (degree).'],
    ['It will ___ rain later, but the forecast is not certain.', 'probably', ['certainly', 'never'], 'Probably shows the level of certainty: likely, not sure.'],
    ['We will leave ___, as soon as you tie your shoes.', 'soon', ['loudly', 'rarely'], 'Soon tells when (time).'],
    ['The cheetah ran ___ fast that the camera could barely follow it.', 'incredibly', ['sometimes', 'later'], 'Incredibly tells how fast (degree).'],
    ['I ___ eat broccoli, maybe once a year.', 'rarely', ['always', 'usually'], 'Rarely tells how often: almost never.'],
    ['The baby is sleeping, so please speak ___.', 'quietly', ['tomorrow', 'never'], 'Quietly tells how to speak (manner).']
  ]);
  mc('parts', 'What job does the underlined part do?', [
    { q: 'The kitten hid UNDER THE PORCH during the storm.', r: 'It tells where (prepositional phrase).', w: ['It tells when.', 'It is the subject.'], why: 'Under the porch starts with the preposition under and tells where the kitten hid.' },
    { q: 'DURING THE STORM, the kitten hid under the porch.', r: 'It tells when (prepositional phrase).', w: ['It tells where.', 'It tells how sure.'], why: 'During the storm tells when.' },
    { q: 'WOW! That was the best fireworks show ever.', r: 'It shows strong feeling (interjection).', w: ['It joins two sentences.', 'It tells where.'], why: 'An interjection like Wow, Oops, or Hooray shows feeling. It can stand alone with an exclamation point.' },
    { q: 'Ouch, that hurt!', r: 'Ouch is an interjection showing feeling.', w: ['Ouch is a verb.', 'Ouch is a noun.'], why: 'Interjections show a sudden feeling. A mild one is followed by a comma.' },
    { q: 'The book ON THE TOP SHELF is mine.', r: 'It tells which book (prepositional phrase).', w: ['It tells when.', 'It is the verb.'], why: 'On the top shelf describes which book.' },
    { q: 'We walked ACROSS THE BRIDGE and INTO THE PARK.', r: 'Both tell where (prepositional phrases).', w: ['Both tell when.', 'Both are interjections.'], why: 'Across and into are prepositions. The phrases tell where you walked.' }
  ]);
  pick('parts', 'Which sentence uses a conjunction correctly?', [
    ['I like soccer, but my sister likes basketball.', ['I like soccer but, my sister likes basketball.', 'I like soccer, my sister likes basketball but.'], 'The comma goes before but when it joins two complete sentences.'],
    ['Because it was raining, we played inside.', ['Because it was raining. We played inside.', 'Because, it was raining we played inside.'], '“Because it was raining” cannot stand alone. Join it to the main sentence with a comma.'],
    ['We stayed inside because it was raining.', ['We stayed inside, because, it was raining.', 'We stayed inside. Because it was raining.'], 'When because comes in the middle, no comma is needed. “Because it was raining.” alone is a fragment.'],
    ['Although Ben was nervous, he gave a great speech.', ['Although Ben was nervous he gave a great speech, although.', 'Although Ben was nervous. He gave a great speech.'], 'The although part goes first with a comma after it, then the main sentence.']
  ]);

  /* ================================================================ Colons & hyphens (5.LU.2B, C) */
  pick('punct', 'Which sentence uses the colon correctly?', [
    ['Bring three things to camp: a sleeping bag, a flashlight, and bug spray.', ['Bring: a sleeping bag, a flashlight, and bug spray.', 'Bring three things to camp a sleeping bag: a flashlight, and bug spray.'], 'A colon introduces a list after a complete sentence. “Bring” alone is not a complete thought, so no colon after it.'],
    ['The movie starts at 6:30.', ['The movie starts at 6;30.', 'The movie starts at: 6 30.'], 'A colon separates the hour and the minutes: 6:30.'],
    ['Our class studied three branches of government: legislative, executive, and judicial.', ['Our class studied: legislative, executive, and judicial.', 'Our class studied three branches of: government legislative, executive, and judicial.'], 'The colon comes after the complete sentence that sets up the list.'],
    ['The recipe needs only two ingredients: bananas and oats.', ['The recipe needs: bananas and oats.', 'The recipe: needs only two ingredients bananas and oats.'], 'No colon right after a verb like needs. Use it after a full sentence (…two ingredients:).'],
    ['School starts at 8:05 and ends at 3:15.', ['School starts at 8.05 and ends at 3.15.', 'School starts at 8,05 and ends at 3,15.'], 'Times use a colon between hours and minutes.'],
    ['The planets closest to the sun are these: Mercury, Venus, Earth, and Mars.', ['The planets closest to the sun are: Mercury, Venus, Earth, and Mars.', 'The planets: closest to the sun are Mercury, Venus, Earth, and Mars.'], 'Do not put a colon right after are. Adding “these” makes a complete sentence before the colon.'],
    ['I packed my favorite snacks: pretzels, grapes, and cheese.', ['I packed my favorite: snacks, pretzels, grapes, and cheese.', 'I packed my favorite snacks, pretzels: grapes, and cheese.'], 'The colon goes right before the list begins.'],
    ['The alarm went off at 5:45 in the morning.', ['The alarm went off at 5-45 in the morning.', 'The alarm went off at 545 in the morning.'], 'Use a colon in times: 5:45.']
  ]);
  pick('punct', 'A word does not fit at the end of a line. Which hyphen is correct?', [
    ['won-derful', ['wo-nderful', 'wonderfu-l'], 'Break words between syllables: won | der | ful. Never leave one letter alone on a line.'],
    ['basket-ball', ['bask-etball', 'b-asketball'], 'Compound words break between the two smaller words: basket | ball.'],
    ['inven-tion', ['inve-ntion', 'i-nvention'], 'In | ven | tion: break between syllables.'],
    ['remem-ber', ['reme-mber', 'rememb-er'], 'Re | mem | ber: break between syllables.'],
    ['beauti-ful', ['beaut-iful', 'beautif-ul'], 'Beau | ti | ful: break between syllables.'],
    ['thunder-storm', ['thund-erstorm', 'thunderst-orm'], 'Compound word: thunder | storm.'],
    ['ques-tion', ['qu-estion', 'questi-on'], 'Ques | tion: break between syllables.'],
    ['Do not hyphenate it: "jump" has only one syllable.', ['ju-mp', 'jum-p'], 'Never break a one-syllable word. Move the whole word to the next line.']
  ]);
  pick('punct', 'Which sentence uses commas correctly in a compound sentence?', [
    ['The rain stopped, and the sun came out.', ['The rain stopped and, the sun came out.', 'The rain, stopped and the sun came out.'], 'Two complete sentences joined by and: the comma goes right before and.'],
    ['Mia wanted to play, but she had to finish her chores.', ['Mia wanted to play but, she had to finish her chores.', 'Mia, wanted to play but she had to finish her chores.'], 'The comma goes before but, not after it.'],
    ['We can walk to the library, or Dad can drive us.', ['We can walk to the library or, Dad can drive us.', 'We can walk, to the library or Dad can drive us.'], 'Comma before or when it joins two complete sentences.'],
    ['The team practiced hard, so they won the tournament.', ['The team practiced hard so, they won the tournament.', 'The team, practiced hard so they won the tournament.'], 'Comma before so.'],
    ['I ran to the bus stop and caught the bus.', ['I ran to the bus stop, and caught the bus.', 'I ran, to the bus stop and caught the bus.'], 'No comma here: “caught the bus” is not a complete sentence, because it has no subject of its own.']
  ]);

  /* ================================================================ Word choice (5.W.2ii, 5.W.3A) */
  fb('words', 'Choose the most precise word.', [
    ['The marathon runner ___ across the finish line and collapsed on the grass.', 'staggered', ['went', 'moved'], 'Staggered shows exactly how a tired runner moves. Went and moved are vague.'],
    ['"Don\'t wake the baby," Mom ___.', 'whispered', ['said', 'told'], 'Whispered shows HOW she spoke, and it fits not waking the baby.'],
    ['The pizza was ___, with crispy crust and bubbling cheese.', 'delicious', ['good', 'nice'], 'Delicious is precise. Good and nice could mean anything.'],
    ['The old floorboards ___ under our feet.', 'creaked', ['made a sound', 'did something'], 'Creaked names the exact sound.'],
    ['The lion ___ so loudly that the ground seemed to shake.', 'roared', ['said', 'talked'], 'Roared is the exact sound a lion makes.'],
    ['After the long hike, I ___ three glasses of water.', 'gulped', ['had', 'got'], 'Gulped shows how thirsty you were.'],
    ['The ___ puppy wagged its tail at everyone in the park.', 'friendly', ['good', 'okay'], 'Friendly tells exactly what kind of puppy.'],
    ['The thunder ___, and the dog dove under the bed.', 'boomed', ['happened', 'went'], 'Boomed is a strong, exact verb.'],
    ['Scientists ___ the rock samples under a microscope.', 'examined', ['looked at stuff in', 'saw'], 'Examined means looked closely and carefully. It is the precise science word.'],
    ['The hungry kids ___ the whole plate of cookies in two minutes.', 'devoured', ['ate', 'had'], 'Devoured shows they ate fast and hungrily.'],
    ['The sky turned a ___ orange as the sun set.', 'fiery', ['nice', 'regular'], 'Fiery paints a picture of the color.'],
    ['Our team was ___ when the referee blew the final whistle.', 'thrilled', ['happy', 'fine'], 'Thrilled is stronger and more exact than happy.'],
    ['The mouse ___ across the kitchen floor and vanished.', 'scurried', ['went', 'got'], 'Scurried shows small, quick steps.'],
    ['The museum guide ___ how the pyramids were built.', 'explained', ['said', 'did'], 'Explained tells exactly what the guide did.'],
    ['I could hear rain ___ against the window all night.', 'pattering', ['doing things', 'being'], 'Pattering names the sound of rain.']
  ]);
  pick('words', 'Which sentence SHOWS the feeling instead of just telling it?', [
    ['My hands shook, and my voice cracked as I started my speech.', ['I was nervous during my speech.', 'I felt very, very nervous.'], 'Shaking hands and a cracking voice let the reader see the nerves.', 'Feeling: nervous'],
    ['Lily slammed her door and threw her backpack across the room.', ['Lily was angry.', 'Lily felt really mad about it.'], 'Slamming and throwing show anger without naming it.', 'Feeling: angry'],
    ['Marcus jumped up and down, pumping his fist in the air.', ['Marcus was happy.', 'Marcus felt excited and glad.'], 'The actions show the excitement.', 'Feeling: excited'],
    ['I pulled the blanket over my head and held my breath as the floor creaked.', ['I was scared.', 'I felt afraid of the noise.'], 'Hiding and holding your breath show fear.', 'Feeling: scared'],
    ['Grandma\'s eyes filled with tears as she hugged the letter to her chest.', ['Grandma was touched.', 'Grandma felt emotional and happy.'], 'Tears and hugging the letter show the feeling.', 'Feeling: deeply moved'],
    ['Sam stared at the clock, tapping his pencil and sighing every few seconds.', ['Sam was bored.', 'Sam felt very bored in class.'], 'Staring, tapping, and sighing show boredom.', 'Feeling: bored']
  ]);
  pick('words', 'Which word best replaces the vague word in capitals?', [
    ['The cave was DARK. → pitch-black', ['The cave was DARK. → nice', 'The cave was DARK. → big'], 'Pitch-black is a stronger, more exact way to say very dark.'],
    ['We had a GOOD time at the fair. → fantastic', ['We had a GOOD time at the fair. → okay', 'We had a GOOD time at the fair. → regular'], 'Fantastic shows how good it really was.'],
    ['The bridge is BIG. → enormous', ['The bridge is BIG. → fine', 'The bridge is BIG. → there'], 'Enormous is exact and vivid.'],
    ['He WENT up the stairs two at a time. → bounded', ['He WENT up the stairs two at a time. → was', 'He WENT up the stairs two at a time. → did'], 'Bounded shows the energy of taking two stairs at a time.'],
    ['I put my STUFF in my locker. → books and gym clothes', ['I put my STUFF in my locker. → things', 'I put my STUFF in my locker. → items and stuff'], 'Name the real things instead of stuff.']
  ]);

  /* ================================================================ Formal or informal (5.LU) */
  pick('formal', 'Which sentence is best for a school report?', [
    ['Honeybees are essential because they pollinate many crops.', ['Honeybees are super important cuz they help plants and stuff.', 'Bees are like, totally awesome for crops!!!'], 'Formal writing uses full words, no slang (cuz, stuff, like), and calm punctuation.'],
    ['The Constitution created three branches of government.', ['So basically the Constitution made three parts of government, ya know?', 'The Constitution made 3 branches lol.'], 'Reports state facts clearly, without slang or texting words.'],
    ['In conclusion, recycling protects our environment.', ['Anyway, recycling is cool so do it.', 'K so recycling = good for the earth.'], 'A formal conclusion uses complete sentences and real words.'],
    ['Many scientists believe that the climate is changing.', ['Tons of science people think the weather thing is changing.', 'Scientists are all like, the climate is changing.'], 'Formal: precise words (scientists, climate), no slang (tons, all like).'],
    ['The experiment did not work because the temperature was too low.', ['The experiment totally flopped cuz it was way too cold.', 'Experiment = fail. Too cold. Oops!'], 'Formal writing explains the result clearly in complete sentences.']
  ]);
  pick('formal', 'Which is the best way to start an email to your principal?', [
    ['Dear Dr. Martinez, I am writing to ask about the science fair.', ['Hey Dr. M! What\'s up with the science fair?', 'Yo, science fair question.'], 'An email to an adult at school uses a polite greeting and full sentences.'],
    ['Thank you for your time. Sincerely, Arjun', ['Thx! Bye!', 'K thanks, see ya'], 'A formal closing: Thank you, then Sincerely and your name.'],
    ['Could our class please have ten more minutes of recess?', ['Can we get more recess or what?', 'Gimme more recess pls.'], 'Polite and complete: Could… please…?']
  ]);
  mc('formal', 'Formal or informal? Pick where this sentence belongs.', [
    { q: '“Wanna come over after school? My mom\'s making tacos!”', r: 'A text to a friend (informal)', w: ['A research report (formal)', 'A letter to the mayor (formal)'], keep: ['A text to a friend (informal)', 'A research report (formal)', 'A letter to the mayor (formal)'], why: 'Wanna and the friendly tone are informal. That is fine with friends.' },
    { q: '“The Nile River provided water, food, and fertile soil for ancient Egypt.”', r: 'A research report (formal)', w: ['A text to a friend (informal)', 'A note on the fridge (informal)'], keep: ['A research report (formal)', 'A text to a friend (informal)', 'A note on the fridge (informal)'], why: 'Precise facts, full sentences, no slang: formal.' },
    { q: '“I respectfully ask the town council to build a skate park.”', r: 'A letter to the town council (formal)', w: ['A chat with your brother (informal)', 'A birthday card to a cousin (informal)'], keep: ['A letter to the town council (formal)', 'A chat with your brother (informal)', 'A birthday card to a cousin (informal)'], why: 'Respectfully ask is formal language for adults and leaders.' },
    { q: '“Dude, that game last night was epic!”', r: 'Talking with a friend (informal)', w: ['A book report (formal)', 'An email to your teacher (formal)'], keep: ['Talking with a friend (informal)', 'A book report (formal)', 'An email to your teacher (formal)'], why: 'Dude and epic are slang. Keep them for friends, not school writing.' }
  ]);

  /* ================================================================ Spelling & word parts (5.FFW.2) */
  fb('spell', 'Choose the correct spelling.', [
    ['We were ___ to see snow in April.', 'surprised', ['suprised', 'surprized'], 'Sur + prised: remember the first r. Sur-prise.'],
    ['The coach gave us a lot of ___ before the big game.', 'encouragement', ['encouragment', 'incouragement'], 'Keep the e in encourage before -ment: encourage + ment.'],
    ['She was ___ to finish the puzzle so quickly.', 'able', ['abel', 'abul'], 'Able ends in -le.'],
    ['The ___ of the light bulb changed the world.', 'invention', ['invension', 'inventsion'], 'Invent + -tion = invention.'],
    ['It is ___ to walk on thin ice.', 'dangerous', ['dangerus', 'dangrous'], 'Danger + -ous = dangerous.'],
    ['My little brother is always ___ me to play with him.', 'begging', ['beging', 'beggin'], 'Short vowel + one consonant: double it before -ing (beg, begging).'],
    ['The ___ ran out of the room screaming with laughter.', 'children', ['childs', 'childrens'], 'Children is already plural. No s needed.'],
    ['We are ___ a trip to Washington, D.C.', 'planning', ['planing', 'planeing'], 'Plan has a short a, so double the n: planning. (Planing means smoothing wood.)'],
    ['The puppy was so ___ that it chewed my shoe.', 'playful', ['playfull', 'plaful'], 'The suffix -ful has only one l.'],
    ['I ___ the paper into a perfect airplane.', 'folded', ['foldded', 'foldid'], 'Fold ends in two consonants, so just add -ed.'],
    ['The race was a ___ win for our team.', 'surprising', ['surpriseing', 'suprising'], 'Drop the silent e before -ing: surprise, surprising.'],
    ['Both ___ were filled with old toys.', 'boxes', ['boxs', 'boxies'], 'Words ending in x, s, sh, ch add -es.'],
    ['There are many ___ in the forest.', 'berries', ['berrys', 'berryes'], 'Consonant + y: change y to i and add -es.'],
    ['The ___ of the movie made everyone cry.', 'ending', ['endding', 'endeing'], 'End already ends in two consonants. Just add -ing.'],
    ['I ___ that the answer was right.', 'believed', ['beleived', 'belived'], 'I before e except after c: believe.'],
    ['Please ___ your name at the top.', 'write', ['right', 'rite'], 'Write means to put words on paper. Right means correct.'],
    ['The ___ was awarded to the best project.', 'achievement', ['acheivement', 'achievment'], 'Achieve (i before e) + ment.'],
    ['It was a ___ day at the beach.', 'beautiful', ['beutiful', 'beautifull'], 'Beauty: change y to i and add -ful (one l).'],
    ['The ___ of the bridge took three years.', 'construction', ['constructsion', 'constrution'], 'Construct + -ion = construction.'],
    ['The ___ were shining brightly.', 'stars', ["star's", "stars'"], 'Plural, not possessive: no apostrophe.']
  ]);
  mc('spell', 'What does the word part mean?', [
    { q: 'UNhappy, UNlock, UNfair', r: 'not', w: ['again', 'full of'], why: 'Un- means not: unhappy = not happy.' },
    { q: 'REread, REbuild, REwrite', r: 'again', w: ['not', 'before'], why: 'Re- means again: rebuild = build again.' },
    { q: 'hopeLESS, fearLESS, careLESS', r: 'without', w: ['full of', 'again'], why: '-less means without: fearless = without fear.' },
    { q: 'MISspell, MISread, MISplace', r: 'wrongly', w: ['again', 'before'], why: 'Mis- means wrongly: misspell = spell wrongly.' },
    { q: 'PREview, PREheat, PREschool', r: 'before', w: ['after', 'not'], why: 'Pre- means before: preheat = heat before.' },
    { q: 'readABLE, washABLE, breakABLE', r: 'can be', w: ['without', 'again'], why: '-able means can be: washable = can be washed.' },
    { q: 'DISagree, DIShonest, DISappear', r: 'not or opposite of', w: ['again', 'full of'], why: 'Dis- means not or the opposite: disagree.' },
    { q: 'TELEscope, TELEphone, TELEvision', r: 'far away', w: ['small', 'water'], why: 'Tele- comes from Greek and means far: a telescope sees far.' },
    { q: 'BIcycle, BIweekly, BIplane', r: 'two', w: ['one', 'many'], why: 'Bi- means two: a bicycle has two wheels.' },
    { q: 'teachER, paintER, farmER', r: 'a person who', w: ['more than', 'not'], why: '-er can mean a person who does something: a farmer farms.' },
    { q: 'AUTOgraph, AUTObiography', r: 'self', w: ['write', 'car'], why: 'Auto- means self: an autobiography is a story you write about yourself.' },
    { q: 'geoGRAPHY, autoGRAPH, paraGRAPH', r: 'write or draw', w: ['earth', 'sound'], why: 'Graph means write or draw: a paragraph is a written section.' }
  ]);

  pick('formal', 'Which sentence is best for a school report?', [
    ['The Wright brothers flew the first airplane in 1903.', ['OMG the Wright bros flew the first plane in 1903!!', 'So yeah, these two dudes flew a plane in 1903.'], 'Formal writing: names, facts, no slang or texting words.'],
    ['Volcanoes can be extremely dangerous to nearby towns.', ['Volcanoes are super scary and can wreck towns big time.', 'Volcanoes r dangerous 4 towns.'], 'Use precise, formal words (extremely dangerous), not slang (super scary, big time).'],
    ['Many students believe the cafeteria should offer more choices.', ['Kids are, like, totally sick of the same lunch.', 'Ugh, cafeteria food is the worst.'], 'Formal writing states the opinion calmly and clearly.']
  ]);
})(window);
