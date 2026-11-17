/* Writer's Workshop: content round 3, Grade 3 (Nov 2026).
   New Sentence Gym skills from the Virginia 2024 English SOL that were missing:
   comparing words (3.LU.1C), no double negatives (3.LU.1F), grow a sentence (3.LU.1A),
   spelling patterns (3.LU.2D); Organize It basics (3.W.1, 3.W.2); a Respond to Reading
   writing type (3.W.1E); and bigger banks. Same shapes as content-r3-g5.js. ALWAYS append. */
(function (w) {
  const D = w.WW_DATA; if (!D) return;
  const G = D[3]; G.mc = G.mc || {}; G.ord = G.ord || {}; G.typ = G.typ || {};
  const add = (arr, more) => { more.forEach((x) => arr.push(x)); };
  const mc = (skill, p, list, layout) => { const a = G.mc[skill] || (G.mc[skill] = []); list.forEach((x) => a.push(Object.assign({ p }, layout ? { layout } : {}, x))); };
  const fb = (skill, p, list) => mc(skill, p, list.map((x) => ({ q: x[0], r: x[1], w: x[2], why: x[3] })));
  const pick = (skill, p, list, show) => mc(skill, p, list.map((x) => ({ r: x[0], w: x[1], why: x[2], show: x[3] || show })), 'col');
  const ord = (skill, p, list) => { const a = G.ord[skill] || (G.ord[skill] = []); list.forEach((x) => a.push(Object.assign({ p }, x))); };

  /* ================================================================ Comparing words (3.LU.1C) */
  fb('adj', 'Choose the right word.', [
    ['A cheetah is ___ than a lion.', 'faster', ['fastest', 'more fast'], 'Comparing two animals: add -er.'],
    ['The blue whale is the ___ animal on Earth.', 'biggest', ['bigger', 'most big'], 'Comparing ALL animals: add -est. Big doubles the g: biggest.'],
    ['Today is ___ than yesterday.', 'colder', ['coldest', 'more cold'], 'Two days: -er.'],
    ['That was the ___ movie I have ever seen!', 'funniest', ['funnier', 'funnyest'], 'Ever seen means all movies: -est. Change y to i: funniest.'],
    ['My sister is ___ than I am.', 'taller', ['tallest', 'more tall'], 'Two people: taller.'],
    ['This puzzle is ___ than the last one.', 'harder', ['hardest', 'more hard'], 'Two puzzles: harder.'],
    ['Of all the fruits, I like grapes the ___.', 'best', ['better', 'goodest'], 'Good, better, best. All fruits: best.'],
    ['My cold is ___ today than it was yesterday.', 'worse', ['badder', 'worst'], 'Bad, worse, worst. Two days: worse.'],
    ['Sam\'s drawing is ___ than mine.', 'better', ['gooder', 'best'], 'Good, better, best. Two drawings: better.'],
    ['This is the ___ day of the whole summer.', 'hottest', ['hotter', 'hotest'], 'The whole summer means all days: hottest (double the t).'],
    ['A turtle is ___ than a rabbit.', 'slower', ['slowest', 'more slow'], 'Two animals: slower.'],
    ['Mount Everest is the ___ mountain in the world.', 'highest', ['higher', 'most high'], 'In the world means all mountains: highest.'],
    ['That rose is ___ than the daisy.', 'more beautiful', ['beautifuler', 'most beautiful'], 'Long words use more instead of -er: more beautiful.'],
    ['This is the ___ book in the library.', 'most interesting', ['interestingest', 'more interesting'], 'Long words use most instead of -est.'],
    ['Pablo is ___ than his brother.', 'happier', ['happyer', 'more happier'], 'Change y to i and add -er: happier. Never use more and -er together.'],
    ['That was the ___ storm of the year.', 'worst', ['baddest', 'worse'], 'Bad, worse, worst. The whole year: worst.']
  ]);
  /* ================================================================ No double negatives (3.LU.1F) */
  pick('neg', 'Which sentence is correct?', [
    ['I don\'t have any homework.', ['I don\'t have no homework.', 'I don\'t have none homework.'], 'Don\'t is already a no-word, so use any, not no.'],
    ['There isn\'t anything in the box.', ['There isn\'t nothing in the box.', 'There isn\'t no thing in the box.'], 'Isn\'t + anything. Isn\'t + nothing is two no-words.'],
    ['Nobody wants to go to bed early.', ['Nobody don\'t want to go to bed early.', 'Nobody doesn\'t want to go to bed early.'], 'Nobody is already a no-word.'],
    ['I never eat anything green.', ['I never eat nothing green.', 'I don\'t never eat anything green.'], 'Never + anything. Never + nothing is a double negative.'],
    ['She can\'t find her shoes anywhere.', ['She can\'t find her shoes nowhere.', 'She can\'t not find her shoes.'], 'Can\'t + anywhere, not nowhere.'],
    ['We didn\'t see anybody at the park.', ['We didn\'t see nobody at the park.', 'We didn\'t see no one at the park.'], 'Didn\'t + anybody.'],
    ['There is nothing to do.', ['There isn\'t nothing to do.', 'There ain\'t nothing to do.'], 'One no-word only: is nothing.'],
    ['He hardly ever cries.', ['He doesn\'t hardly ever cry.', 'He hardly never cries.'], 'Hardly is a no-word too, so do not add doesn\'t or never.'],
    ['I don\'t want any peas.', ['I don\'t want no peas.', 'I don\'t want none peas.'], 'Don\'t + any.'],
    ['The cat won\'t ever come down.', ['The cat won\'t never come down.', 'The cat won\'t not come down.'], 'Won\'t + ever.']
  ]);
  /* ================================================================ Grow a sentence (3.LU.1A) */
  pick('grow', 'Which sentence grows the small sentence best?', [
    ['The little brown dog ran across the yard.', ['The dog ran and ran.', 'The dog ran, the dog ran.'], 'It tells what kind of dog (little, brown) and where (across the yard).', 'Small sentence: The dog ran.'],
    ['After school, my friends played tag on the playground.', ['My friends played.', 'Friends played tag tag tag.'], 'It tells when (after school), what (tag), and where (on the playground).', 'Small sentence: My friends played.'],
    ['The hungry bird ate seeds from the feeder.', ['The bird ate.', 'The bird ate food things.'], 'It tells what kind of bird, what it ate, and where.', 'Small sentence: The bird ate.'],
    ['Last night, a loud storm shook our house.', ['A storm came.', 'A storm was there.'], 'It tells when, what kind of storm, and what it did.', 'Small sentence: A storm came.'],
    ['My grandma baked warm cookies for the party.', ['Grandma baked.', 'Grandma baked baked cookies.'], 'It tells what kind of cookies and why.', 'Small sentence: Grandma baked.'],
    ['The tiny frog jumped into the cool pond.', ['The frog jumped.', 'The frog jumped somewhere.'], 'It tells what kind of frog and where.', 'Small sentence: The frog jumped.'],
    ['On Saturday, we picked red apples at the farm.', ['We picked.', 'We picked apples apples.'], 'It tells when, what, what kind, and where.', 'Small sentence: We picked apples.'],
    ['The brave firefighter climbed the tall ladder quickly.', ['The firefighter climbed.', 'The firefighter climbed a thing.'], 'It tells what kind of firefighter, what she climbed, and how.', 'Small sentence: The firefighter climbed.']
  ]);
  pick('grow', 'Which sentence joins the two sentences best?', [
    ['I like pizza, and my brother likes tacos.', ['I like pizza my brother likes tacos.', 'I like pizza, my brother likes tacos.'], 'Join two sentences with a comma and and.', 'I like pizza. My brother likes tacos.'],
    ['The sun came out, so we went outside.', ['The sun came out so, we went outside.', 'The sun came out we went outside.'], 'So shows what happened next. Put the comma before so.', 'The sun came out. We went outside.'],
    ['Mia and Leo walked to school.', ['Mia walked to school, Leo walked to school.', 'Mia walked and Leo walked to school and school.'], 'Two people doing the same thing: Mia and Leo walked.', 'Mia walked to school. Leo walked to school.'],
    ['The kitten is soft and fluffy.', ['The kitten is soft, the kitten is fluffy.', 'The kitten is soft. And fluffy.'], 'Two describing words can join with and.', 'The kitten is soft. The kitten is fluffy.'],
    ['I wanted to swim, but the pool was closed.', ['I wanted to swim the pool was closed.', 'I wanted to swim but, the pool was closed.'], 'But shows a problem. The comma goes before but.', 'I wanted to swim. The pool was closed.']
  ]);
  /* ================================================================ Spelling patterns (3.LU.2D) */
  fb('spell', 'Choose the correct spelling.', [
    ['We are ___ cookies for the bake sale.', 'baking', ['bakeing', 'bakking'], 'Drop the silent e before -ing: bake, baking.'],
    ['The frog was ___ across the lily pads.', 'hopping', ['hoping', 'hopeing'], 'Hop has a short o, so double the p: hopping. (Hoping means wishing.)'],
    ['There are three ___ in the nursery.', 'babies', ['babys', 'babyes'], 'Change y to i and add -es: babies.'],
    ['I ___ to the store with Dad.', 'walked', ['walkt', 'walkd'], 'Add -ed for the past: walked.'],
    ['She ___ the ball to me.', 'tossed', ['tost', 'tosed'], 'Toss + ed = tossed.'],
    ['The ___ were full of toys.', 'boxes', ['boxs', 'boxies'], 'Words ending in x add -es.'],
    ['We ___ the movie last night.', 'liked', ['likeed', 'likd'], 'Like ends in e, so just add -d.'],
    ['My dog is ___ in the sun.', 'sitting', ['siting', 'sittin'], 'Sit has a short i, so double the t: sitting.'],
    ['I have two ___ for the field trip.', 'lunches', ['lunchs', 'lunchies'], 'Words ending in ch add -es.'],
    ['The ___ turned orange in the fall.', 'leaves', ['leafs', 'leafes'], 'Leaf becomes leaves: change f to v and add -es.'],
    ['He ___ his glass of milk.', 'spilled', ['spild', 'spilld'], 'Spill + ed = spilled.'],
    ['We saw five ___ on the hike.', 'deer', ['deers', 'deeres'], 'Deer stays the same: one deer, five deer.'],
    ['The ___ played in the sandbox.', 'children', ['childs', 'childrens'], 'One child, many children.'],
    ['I ___ my brother clean his room.', 'helped', ['helpt', 'helpped'], 'Help ends in two consonants, so just add -ed.'],
    ['She is the ___ runner on the team.', 'fastest', ['fasttest', 'fastist'], 'Fast + est = fastest.'],
    ['My ___ fell out last night!', 'tooth', ['tuth', 'toothe'], 'One tooth, two teeth.'],
    ['We need to ___ our seats now.', 'take', ['tak', 'taik'], 'Silent e makes the a say its name: take.'],
    ['The ___ hooted in the dark.', 'owl', ['oul', 'owel'], 'Owl is spelled with ow.']
  ]);

  /* ================================================================ Organize It basics */
  mc('o-claim', 'What is the main idea of all these details?', [
    { show: 'Cows give milk. Hens lay eggs. Sheep give wool.', r: 'Farm animals give us useful things.', w: ['Cows are big.', 'Hens live in coops.', 'I like sheep.'], why: 'All three details are about things farm animals give us.' },
    { show: 'Rain falls from clouds. It fills rivers and lakes. Then the sun heats the water, and it rises again.', r: 'Water moves in a cycle.', w: ['Clouds are white.', 'Lakes are fun.', 'The sun is hot.'], why: 'The details follow water around the water cycle.' },
    { show: 'Pharaohs ruled Egypt. Scribes wrote in hieroglyphs. Farmers grew crops by the Nile.', r: 'People in ancient Egypt had different jobs.', w: ['Pharaohs were rich.', 'The Nile is long.', 'Hieroglyphs are pictures.'], why: 'Ruling, writing, and farming are jobs.' },
    { show: 'Ladybugs eat bugs that hurt plants. Bees help flowers make seeds. Worms make soil healthy.', r: 'Small animals help gardens grow.', w: ['Ladybugs are red.', 'Worms live in dirt.', 'Bees can sting.'], why: 'All three help gardens.' },
    { show: 'A lever helps lift heavy things. A ramp helps move boxes up. A pulley helps raise a flag.', r: 'Simple machines make work easier.', w: ['Flags are on poles.', 'Ramps are slanted.', 'Boxes are heavy.'], why: 'Lever, ramp, and pulley are simple machines that help with work.' },
    { show: 'We wear coats in winter. We wear shorts in summer. We carry umbrellas when it rains.', r: 'We dress for the weather.', w: ['Coats are warm.', 'Summer is hot.', 'Umbrellas are fun.'], why: 'Each detail shows clothes that fit the weather.' },
    { show: 'Firefighters put out fires. Police officers keep us safe. Doctors help sick people.', r: 'Community helpers keep us safe and healthy.', w: ['Doctors work in hospitals.', 'Fire trucks are red.', 'Police have cars.'], why: 'All three are community helpers.' },
    { show: 'The Great Wall kept out invaders. Chinese inventors made paper. They also made the compass.', r: 'Ancient China gave the world important things.', w: ['The Great Wall is long.', 'Paper is white.', 'A compass points north.'], why: 'The wall, paper, and the compass are all things from ancient China.' }
  ], 'col');
  const sortQ = (claim, reasons, list) => list.map((x) => ({ show: 'Opinion: ' + claim, q: '“' + x[0] + '”', r: reasons[x[1]], w: reasons.filter((_, i) => i !== x[1]), keep: reasons, why: x[2], layout: 'col' }));
  mc('o-sort', 'Which reason does this detail go with?', [].concat(
    sortQ('Dogs make great pets.', ['Reason: Dogs are loyal friends.', 'Reason: Dogs keep you active.'], [
      ['My dog waits by the door every day when I come home.', 0, 'Waiting for you shows loyalty.'],
      ['We walk my dog two times a day.', 1, 'Walking keeps you active.'],
      ['My dog sits next to me when I am sad.', 0, 'Staying by you is loyal and friendly.'],
      ['Playing fetch makes me run around the yard.', 1, 'Running around keeps you active.']
    ]),
    sortQ('Recess should be longer.', ['Reason: Kids need exercise.', 'Reason: Kids learn to get along.'], [
      ['We run and jump during tag.', 0, 'Running and jumping are exercise.'],
      ['We take turns on the swings.', 1, 'Taking turns is getting along.'],
      ['Climbing on the monkey bars makes our arms strong.', 0, 'Strong arms come from exercise.'],
      ['We solve problems when we disagree about a game.', 1, 'Solving problems helps kids get along.']
    ]),
    sortQ('Our class should have a garden.', ['Reason: We can learn about plants.', 'Reason: We can eat healthy food.'], [
      ['We could watch seeds grow roots.', 0, 'Watching roots grow is learning about plants.'],
      ['We could make a salad with our lettuce.', 1, 'Salad is healthy food.'],
      ['We could measure how tall the beans grow.', 0, 'Measuring plants is learning about them.'],
      ['Fresh carrots are a crunchy snack.', 1, 'Carrots are healthy food.']
    ])
  ));
  mc('o-evidence', 'Which detail BEST supports this sentence?', [
    { show: 'Main idea: Owls are good night hunters.', r: 'Their big eyes help them see in the dark.', w: ['Owls have feathers.', 'I saw an owl at the zoo.', 'Some birds sing.'], why: 'Seeing in the dark helps them hunt at night.' },
    { show: 'Main idea: The Nile River was important to Egypt.', r: 'Farmers used its water to grow food.', w: ['The Nile is in Africa.', 'Egypt is hot.', 'Rivers have fish.'], why: 'Growing food shows why it was important.' },
    { show: 'Opinion: Summer is the best season.', r: 'We get to swim at the pool every day.', w: ['Summer comes after spring.', 'Winter is cold.', 'Seasons change.'], why: 'Swimming every day is a reason summer is great.' },
    { show: 'Main idea: Maps help us find our way.', r: 'A compass rose shows which way is north.', w: ['Maps can be big.', 'My map is folded.', 'I like blue.'], why: 'Knowing north helps you find your way.' },
    { show: 'Main idea: Kai was nervous.', r: 'His hands shook as he walked to the stage.', w: ['Kai has a dog.', 'The stage was big.', 'Kai is eight.'], why: 'Shaking hands show he was nervous.' },
    { show: 'Opinion: Kids should help with chores.', r: 'Chores teach kids how to take care of a home.', w: ['Chores can be dishes.', 'My house is blue.', 'Dad cooks dinner.'], why: 'It gives a reason chores are good for kids.' },
    { show: 'Main idea: Bees are busy workers.', r: 'They visit hundreds of flowers every day.', w: ['Bees are yellow.', 'Bees can sting.', 'Flowers smell nice.'], why: 'Visiting hundreds of flowers shows how busy they are.' }
  ], 'col');
  ord('o-outline', 'Put the plan in order: beginning, middle, end.', [
    { t: 'My Opinion Plan', strips: ['Opinion: Cats are the best pets.', 'Reason 1: Cats are easy to care for.', 'Reason 2: Cats are soft and cuddly.', 'Closing: That is why cats are the best pets.'], why: 'Opinion first, then reasons, then say your opinion again.' },
    { t: 'How to Plant a Seed', strips: ['First, fill a cup with soil.', 'Next, push the seed into the soil.', 'Then, water it a little.', 'Last, put it in a sunny window.'], why: 'Steps go in order: First, Next, Then, Last.' },
    { t: 'My Story Plan', strips: ['Beginning: We drove to the beach.', 'Middle: A big wave knocked down my sandcastle.', 'Middle: My sister helped me build a new one.', 'End: I learned that friends help you start again.'], why: 'A story has a beginning, middle, and end.' },
    { t: 'All About Owls', strips: ['Topic: Owls are amazing birds.', 'Fact: They hunt at night.', 'Fact: They can turn their heads very far.', 'Closing: Owls are one of a kind.'], why: 'Topic sentence, facts, then a closing.' },
    { t: 'A Day in Ancient Egypt', strips: ['In the morning, I helped my father in the fields by the Nile.', 'At noon, we ate bread and figs in the shade.', 'In the afternoon, I watched workers move giant stones.', 'At night, I fell asleep on the cool roof.'], why: 'Time order: morning, noon, afternoon, night.' }
  ]);
  mc('o-intro', 'Which is the best beginning?', [
    { show: 'Story about losing a tooth', r: '"Mom! Look!" I yelled, holding up my tiny tooth.', w: ['This story is about my tooth.', 'I have teeth.', 'Teeth are white.'], why: 'Start with action or talking to hook the reader.' },
    { show: 'Report about sharks', r: 'Did you know some sharks have been around longer than trees?', w: ['I will tell you about sharks.', 'Sharks are fish.', 'This is my report.'], why: 'A surprising question hooks the reader.' },
    { show: 'Opinion about the best season', r: 'Nothing beats jumping into a cool pool on a hot summer day!', w: ['I am going to tell you about seasons.', 'There are four seasons.', 'Summer is a season.'], why: 'A fun, strong start makes the reader want more.' },
    { show: 'Story about a snow day', r: 'I peeked out the window, and everything was white!', w: ['One day it snowed.', 'This is about snow.', 'Snow is cold.'], why: 'A strong start shows the moment.' }
  ], 'col');
  mc('o-intro', 'Which is the best ending?', [
    { show: 'Opinion: Dogs make great pets.', r: 'That is why I think dogs are the best pets for any family.', w: ['The end.', 'Bye!', 'Cats are okay too.'], why: 'A closing says the opinion again in new words.' },
    { show: 'Report: How plants grow', r: 'With sun, water, and soil, a tiny seed can grow into a tall plant.', w: ['That is all.', 'The end of my report.', 'I like flowers.'], why: 'The ending sums up the main idea.' },
    { show: 'Story: My first time riding a bike', r: 'Now I ride my bike everywhere, and I never give up on hard things.', w: ['Then I went home. The end.', 'Bikes have two wheels.', 'That is my story.'], why: 'A story ending tells how you felt or what you learned.' }
  ], 'col');
  const P = (title, paras) => title + '\n' + paras.map((t, i) => '(' + (i + 1) + ') ' + t).join('\n');
  mc('o-prove', 'Which answer is the BEST? It answers, proves, and explains.', [
    { show: P('The Lost Kite', ['Ana\'s kite got stuck in a tall tree.', 'She did not cry. Instead, she asked her brother for help.', 'Together, they used a long broom to get it down.']) + '\n\nQuestion: How does Ana solve her problem?',
      r: 'Ana solves her problem by asking for help. In paragraph 2, she "asked her brother for help." This shows that working together can fix a problem.',
      w: ['Ana has a kite.', 'Ana gets her kite because it is a good kite.', 'Paragraph 3 talks about a broom.'], why: 'The best answer gives an answer, a detail from the text, and an explanation.' },
    { show: P('Busy Beavers', ['Beavers live near rivers and streams.', 'They cut down trees with their strong teeth.', 'They use the sticks to build dams and homes called lodges.']) + '\n\nQuestion: Why do beavers cut down trees?',
      r: 'Beavers cut down trees to build. Paragraph 3 says they use the sticks "to build dams and homes." This means trees give them what they need to make their homes.',
      w: ['Beavers live near rivers.', 'Beavers have strong teeth.', 'Beavers cut trees because they like trees.'], why: 'Answer the why, show where the text says it, then explain.' },
    { show: P('Grandpa\'s Garden', ['Grandpa gave Leo some bean seeds.', 'Leo watered them every day, but nothing happened.', 'After two weeks, a tiny green sprout popped up. Leo smiled.']) + '\n\nQuestion: How does Leo feel at the end?',
      r: 'Leo feels happy at the end. In paragraph 3, when the sprout pops up, "Leo smiled." His smile shows he is proud that his work paid off.',
      w: ['Leo has beans.', 'Leo feels happy.', 'Leo waters the seeds every day.'], why: '"Leo feels happy" is a good answer but has no proof. The best answer proves it and explains.' }
  ], 'col');

  /* ================================================================ Bigger banks */
  add(G.sents, [
    'We visited Mount Vernon in Virginia last summer.',
    'Is Thanksgiving on a Thursday this year?',
    'My cousin Lily lives in Texas.',
    'Our class went to the Smithsonian on Monday.',
    'Dr. Green checked my teeth on Tuesday.',
    'Did you finish reading Charlotte\'s Web?',
    'The Nile River is in Egypt.',
    'Grandma and I baked a cake for Mother\'s Day.',
    'We will go to the beach in July.',
    'Ms. Park took our class to the library.',
    'Wow, that firework was huge!',
    'My birthday is in December.'
  ]);
  add(G.commas, [
    'We need paper, glue, and scissors for art.',
    'My grandma lives in Richmond, Virginia.',
    'I was born on May 3, 2018.',
    'The flag is red, white, and blue.',
    'We saw lions, tigers, and bears at the zoo.',
    'Dear Aunt Rosa,',
    'Your friend, Jada',
    'Our trip is on June 12, 2027.',
    'The museum is in Washington, D.C.',
    'For lunch I had a sandwich, an apple, and milk.'
  ]);
  add(G.kinds, [
    ['The big yellow bus.', 'f', 'What did the bus do? Add it: The big yellow bus stopped at my house.'],
    ['My cat sleeps on my bed.', 'c', 'It tells who (my cat) and what she does (sleeps).'],
    ['Ran to the park after lunch.', 'f', 'Who ran? Add it: We ran to the park after lunch.'],
    ['The rain fell all night.', 'c', 'It tells what (the rain) and what it did (fell).'],
    ['Under the kitchen table.', 'f', 'Who or what is under the table, and what is it doing? Add it: The puppy hid under the kitchen table.'],
    ['Pharaohs ruled ancient Egypt.', 'c', 'Who (pharaohs) and what they did (ruled).'],
    ['Because I was hungry.', 'f', 'Because needs the rest of the thought: I ate a snack because I was hungry.'],
    ['Birds build nests in the spring.', 'c', 'Who (birds) and what they do (build).']
  ]);
  add(G.dialogue, [
    ['"Can I have a turn?" asked Ben.', ['"Can I have a turn"? asked Ben.', 'Can I have a turn? asked Ben.'], 'The question mark goes inside the quotation marks.'],
    ['"I found a shell!" shouted Mia.', ['"I found a shell"! shouted Mia.', 'I found a shell! shouted Mia.'], 'Quotation marks go around the words Mia shouted. The ! goes inside.'],
    ['Dad said, "Time for bed."', ['Dad said, "Time for bed".', 'Dad said "time for bed."'], 'A comma after said, a capital letter to start, and the period inside.'],
    ['"Let\'s play outside," said Rosa.', ['"Let\'s play outside." said Rosa.', '"Let\'s play outside" said Rosa.'], 'Use a comma (not a period) inside the closing mark before said.']
  ]);
  add(G.blanks.apos, [
    ['I ___ find my other shoe.', "can't", ['cant', "ca'nt"], "can't = can not."],
    ['The ___ hat blew away.', "boy's", ['boys', "boys's"], "One boy owns the hat: boy's."],
    ['___ coming to my party?', "Who's", ['Whos', "Who'se"], "Who's = who is."],
    ['They ___ been to the zoo yet.', "haven't", ['havent', "have'nt"], "haven't = have not."],
    ['The ___ leash is by the door.', "dog's", ['dogs', "dogs's"], "One dog owns the leash: dog's."]
  ]);
  add(G.blanks.verbs, [
    ['Yesterday, I ___ a picture of a horse.', 'drew', ['draw', 'drawed'], 'Draw, drew. Yesterday needs the past: drew.'],
    ['Last week, we ___ to the museum.', 'went', ['goed', 'go'], 'Go, went. Goed is not a word.'],
    ['My brother ___ milk every morning.', 'drinks', ['drink', 'drinked'], 'One brother: drinks.'],
    ['The kids ___ a snowman yesterday.', 'built', ['builded', 'build'], 'Build, built.'],
    ['She ___ her lunch at home this morning.', 'forgot', ['forgetted', 'forget'], 'Forget, forgot.']
  ]);

  /* ================================================================ Respond to Reading (3.W.1E) */
  G.write.response = {
    name: 'Respond to Reading', icon: '📜', blurb: 'Answer a question about a book or story, and prove it with details.',
    plan: [
      ['book', 'What did you read?', 'The title', 'Frog and Toad Are Friends'],
      ['answer', 'My answer', 'Answer the question in one sentence', 'Toad is a good friend.'],
      ['detail', 'Proof from the book', 'A detail that shows your answer', 'He tells Frog a story when Frog is sick.'],
      ['why', 'Why it matters', 'What does the detail show?', 'Good friends take care of each other.']
    ],
    parts: [
      { id: 'answer', label: 'My answer', tip: 'Tell the title. Then answer the question in a full sentence.', starters: ['In the story ', 'In the book ', 'I think ', 'The character '], model: 'In the book Frog and Toad Are Friends, Toad is a very good friend. He always tries to help Frog.', plan: ['book', 'answer'] },
      { id: 'proof', label: 'My proof', tip: 'Give a detail from the book that shows your answer is right.', starters: ['For example, ', 'In the story, ', 'One time, ', 'The book says '], model: 'For example, when Frog is sick, Toad tells him a story. He tries very hard to think of a good one.', plan: ['detail'] },
      { id: 'why', label: 'What it shows', tip: 'Tell what your detail shows. Use the words "This shows."', starters: ['This shows that ', 'That is how I know ', 'This means '], model: 'This shows that good friends take care of each other. Toad helps Frog feel better because he cares about him.', plan: ['why'] }
    ],
    prompts: ['Who is your favorite character, and why?', 'What lesson does the story teach?', 'How does the main character solve the problem?', 'How does a character feel at the end?', 'What is the most important fact you learned from a book?', 'Would you want to be friends with the main character? Why?'],
    trans: ['in the story', 'for example', 'one time', 'this shows', 'because', 'that is how', 'also', 'first', 'at the end'],
    manual: ['I told the title of the book.', 'I answered the question in a full sentence.', 'I gave a detail from the book as proof.', 'I wrote what the detail shows.', 'I read it out loud and it makes sense.'],
    minParas: 3, minWords: 45
  };
})(window);
