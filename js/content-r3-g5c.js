/* Writer's Workshop: content round 3, Grade 5, part C: bigger banks for the round 1-2 skills,
   two new writing types (Multi-paragraph Essay, Respond to Reading), and more Fix This Writing pieces.
   ALWAYS append (item keys are positional). */
(function (w) {
  const D = w.WW_DATA; if (!D) return;
  const G = D[5];
  const add = (arr, more) => { more.forEach((x) => arr.push(x)); };

  /* ---------------------------------------------------------------- Capitals (correct sentences) */
  add(G.sents, [
    'Last July, my family drove across the Chesapeake Bay Bridge to Maryland.',
    'Did Dr. Okafor say the science fair is on Thursday, March 4?',
    'We read Charlotte\'s Web and Bridge to Terabithia in Mrs. Kim\'s class.',
    'The Potomac River flows past Washington, D.C., on its way to the Chesapeake Bay.',
    'George Washington led the Continental Army during the American Revolution.',
    'My cousin from Mexico City is visiting us for Thanksgiving.',
    'The Smithsonian National Air and Space Museum has the Wright brothers\' plane.',
    'Coach Rivera told us the tournament starts on Labor Day weekend.',
    'Thomas Jefferson wrote the Declaration of Independence in Philadelphia.',
    'Every spring, Japanese cherry trees bloom around the Tidal Basin.',
    'Have you ever hiked on the Appalachian Trail in the Blue Ridge Mountains?',
    'The ancient Romans built the Colosseum in the city of Rome.',
    'My aunt works for the National Park Service at Shenandoah National Park.',
    'Our class is writing letters to Governor Lee about the new library.',
    'In August, we flew from Dulles Airport to Chicago, Illinois.',
    'The Statue of Liberty was a gift from France.',
    'Uncle Ray and I watched the Fourth of July fireworks over the Lincoln Memorial.',
    'Mount St. Helens erupted on Sunday, May 18, 1980.',
    'Is the Amazon River longer than the Nile River?',
    'Principal Davis announced that Fairfax County schools will close on Monday.'
  ]);
  /* ---------------------------------------------------------------- Commas */
  add(G.commas, [
    'After the storm passed, we walked outside to look at the damage.',
    'Ava, could you please pass me the scissors?',
    'The rain stopped, and a rainbow stretched across the sky.',
    'We packed sandwiches, apples, granola bars, and water for the hike.',
    'Yes, I finished my book report last night.',
    'My best friend, Leo, lives two houses down from me.',
    'Although the test was hard, I answered every question.',
    'I wanted to play outside, but my homework was not finished.',
    'On July 4, 1776, the colonies declared independence.',
    'Well, I think we should try a different plan.',
    'When the bell rings, line up quietly at the door.',
    'Richmond, Virginia, is the capital of our state.',
    'Mom, have you seen my soccer cleats?',
    'The Romans built roads, bridges, aqueducts, and arenas.',
    'Because the river flooded, the road was closed for a week.',
    'Mr. Patel, our science teacher, brought in a real fossil.',
    'The puppy was small, but it barked like a giant dog.',
    'In the morning, the fog lifted, and we could see the mountains.',
    'No, the museum is not open on Mondays.',
    'Sarah ran to the bus stop, so she would not miss the bus.'
  ]);
  /* ---------------------------------------------------------------- Run-ons and fragments */
  add(G.kinds, [
    ['Because the bus was late this morning.', 'f', 'Starts with because but never finishes the thought. Add the main part: Because the bus was late this morning, I missed the announcements.'],
    ['The volcano erupted the villagers ran to safety.', 'r', 'Two sentences jammed together. Fix: The volcano erupted. The villagers ran to safety. (Or: The volcano erupted, so the villagers ran to safety.)'],
    ['Delegates met in Philadelphia to write the Constitution.', 'c', 'It has a who (delegates) and what they did (met). Complete.'],
    ['Running down the hallway with a giant smile.', 'f', 'Who is running? Add a subject and a verb: Mia was running down the hallway with a giant smile.'],
    ['I love science, my favorite topic is energy.', 'r', 'This is a comma splice: a comma alone cannot join two sentences. Fix: I love science, and my favorite topic is energy.'],
    ['After the game ended.', 'f', 'Tells when but not what happened. Fix: After the game ended, we celebrated with pizza.'],
    ['The cheetah sprinted across the grassland.', 'c', 'Subject (the cheetah) and verb (sprinted). Complete.'],
    ['We wanted to go to the beach it rained all day.', 'r', 'Two sentences with nothing joining them. Fix: We wanted to go to the beach, but it rained all day.'],
    ['The tall oak tree in the corner of the yard.', 'f', 'It names something but says nothing about it. Fix: The tall oak tree in the corner of the yard fell during the storm.'],
    ['Although Sparta had a strong army.', 'f', 'Although begins an idea that needs a main part. Fix: Although Sparta had a strong army, Athens had a stronger navy.'],
    ['My sister plays the violin she practices every night.', 'r', 'Fix: My sister plays the violin. She practices every night.'],
    ['When light hits a mirror, it bounces back.', 'c', 'The when part is joined to a complete sentence (it bounces back). Complete.'],
    ['Plants need sunlight, water, and air to grow.', 'c', 'Subject (plants) and verb (need). Complete.'],
    ['The storm knocked out the power, we used flashlights.', 'r', 'Comma splice. Fix: The storm knocked out the power, so we used flashlights.'],
    ['Such as rocks, soil, and water.', 'f', 'No subject or verb. Attach it to a sentence: Earth has nonliving things, such as rocks, soil, and water.'],
    ['Wait for me!', 'c', 'A command has a hidden subject (you). It is complete.'],
    ['The judges announced the winner everyone cheered loudly.', 'r', 'Fix: The judges announced the winner, and everyone cheered loudly.'],
    ['Who invented the telephone?', 'c', 'A question with a subject (who) and a verb (invented). Complete.'],
    ['Since the lake froze solid in January.', 'f', 'Since starts an idea that needs a main part. Fix: Since the lake froze solid in January, we went ice skating.'],
    ['I finished my essay, then I checked it for mistakes.', 'r', 'Then cannot join sentences with just a comma. Fix: I finished my essay, and then I checked it for mistakes.']
  ]);
  /* ---------------------------------------------------------------- Combining (build) */
  add(G.combine, [
    { a: 'The Grand Canyon is very deep.', b: 'The Colorado River carved it.', out: ['The Colorado River', 'carved', 'the very deep', 'Grand Canyon.'], x: ['and it', 'because'], why: 'Put the describing words into one sentence: The Colorado River carved the very deep Grand Canyon.' },
    { a: 'It was raining.', b: 'We played outside anyway.', out: ['Although it was raining,', 'we played', 'outside anyway.'], x: ['Because', 'so'], why: 'Although shows a surprise. Put a comma after the although part.' },
    { a: 'Ms. Chen is our principal.', b: 'She loves to read.', out: ['Ms. Chen,', 'who is our principal,', 'loves to read.'], x: ['and she', 'because'], why: 'Who adds extra information about Ms. Chen. Commas go around the extra part.' },
    { a: 'The bell rang.', b: 'Everyone rushed to the door.', out: ['When the bell rang,', 'everyone rushed', 'to the door.'], x: ['Although', 'but'], why: 'When shows the time. A comma follows the when part.' },
    { a: 'I studied hard.', b: 'I got an A on the test.', out: ['I studied hard,', 'so I got', 'an A on the test.'], x: ['but', 'although'], why: 'So shows the result of studying hard.' },
    { a: 'The kitten was tiny.', b: 'The kitten was gray.', out: ['The kitten', 'was tiny', 'and gray.'], x: ['because', 'who'], why: 'When two describing words tell about the same thing, join them with and.' },
    { a: 'Tomas likes soccer.', b: 'His brother likes baseball.', out: ['Tomas likes soccer,', 'but his brother', 'likes baseball.'], x: ['so', 'because'], why: 'But shows a difference. Put a comma before but.' },
    { a: 'Bats sleep during the day.', b: 'They hunt at night.', out: ['Bats sleep', 'during the day', 'and hunt at night.'], x: ['because they', 'although'], why: 'One subject (bats) can do two actions: sleep and hunt.' },
    { a: 'We cannot go to recess.', b: 'The rain stops.', out: ['We cannot go', 'to recess', 'until the rain stops.'], x: ['because', 'although'], why: 'Until tells how long you have to wait.' },
    { a: 'The Romans built aqueducts.', b: 'The aqueducts carried water to cities.', out: ['The Romans built', 'aqueducts that', 'carried water', 'to cities.'], x: ['and the', 'because'], why: 'That joins the extra information about the aqueducts.' }
  ]);
  /* ---------------------------------------------------------------- Dialogue */
  add(G.dialogue, [
    ['"We need more firewood," Dad said, "before it gets dark."', ['"We need more firewood," Dad said, "Before it gets dark."', '"We need more firewood" Dad said "before it gets dark."'], 'When one sentence is split by the speaker tag, the second part starts with a small letter and both parts get commas.'],
    ['"Is anyone there?" Lena whispered.', ['"Is anyone there"? Lena whispered.', '"Is anyone there?" Lena Whispered.'], 'The question mark goes inside the closing quotation mark. Whispered is not capitalized.'],
    ['Coach shouted, "Hustle back on defense!"', ['Coach shouted "Hustle back on defense!"', 'Coach shouted, "hustle back on defense"!'], 'A comma after shouted, a capital letter to start the quote, and the ! inside.'],
    ['"I finished my project," said Omar. "Can I help you with yours?"', ['"I finished my project," said Omar, "can I help you with yours?"', '"I finished my project." said Omar. "Can I help you with yours?"'], 'These are two separate sentences, so the second quote starts with a capital after a period.'],
    ['"Watch out for that branch!" yelled Priya.', ['"Watch out for that branch"! yelled Priya.', '"Watch out for that branch!," yelled Priya.'], 'The exclamation point goes inside and replaces the comma.'],
    ['Grandma asked, "Who wants hot chocolate?"', ['Grandma asked, "who wants hot chocolate?"', 'Grandma asked "Who wants hot chocolate"?'], 'Comma after asked, capital W, question mark inside.'],
    ['"The answer," Ms. Hall explained, "is in the second paragraph."', ['"The answer." Ms. Hall explained. "Is in the second paragraph."', '"The answer," Ms. Hall explained, "Is in the second paragraph."'], 'One sentence split by the tag: commas around the tag, and the second part starts with a small letter.'],
    ['"Let\'s go!" said Marcus. "We\'re going to be late."', ['"Let\'s go," said Marcus, "we\'re going to be late."', '"Let\'s go"! said Marcus. "We\'re going to be late".'], 'Two complete sentences. Punctuation stays inside the quotation marks.'],
    ['"Can you hear the ocean?" asked my sister.', ['"Can you hear the ocean." asked my sister.', '"Can you hear the ocean?", asked my sister.'], 'A question mark inside, and no extra comma after it.'],
    ['Mr. Lopez said, "Open your books to page forty."', ['Mr. Lopez said "Open your books to page forty".', 'Mr. Lopez said, "open your books to page forty."'], 'Comma after said, capital O, period inside.']
  ]);
  /* ---------------------------------------------------------------- Type it right */
  add(G.retype, [
    { wrong: 'on saturday we visited mount vernon in virginia', accept: ['On Saturday, we visited Mount Vernon in Virginia.', 'On Saturday we visited Mount Vernon in Virginia.'], why: 'Capitalize the first word, the day, and the place names. A comma after On Saturday is good style.' },
    { wrong: 'the dog ran outside it chased a squirrel', accept: ['The dog ran outside. It chased a squirrel.', 'The dog ran outside, and it chased a squirrel.'], why: 'Fix the run-on with a period, or with a comma and and.' },
    { wrong: 'where are you going asked mom', accept: ['"Where are you going?" asked Mom.'], why: 'Quotation marks around the question, the question mark inside, and Mom is a name here.' },
    { wrong: 'its time to feed the cat its bowl is empty', accept: ["It's time to feed the cat. Its bowl is empty."], why: "It's = it is. Its = belongs to it. Split the two sentences." },
    { wrong: 'we need three things flour sugar and eggs', accept: ['We need three things: flour, sugar, and eggs.'], why: 'A colon introduces the list after a complete sentence; commas separate the items.' },
    { wrong: 'although it was cold we went swimming', accept: ['Although it was cold, we went swimming.'], why: 'Capital to start, and a comma after the although part.' },
    { wrong: 'the childrens books are on the top shelf', accept: ["The children's books are on the top shelf."], why: "Children is already plural, so add 's to show ownership." },
    { wrong: 'my friend jake who lives in ohio is visiting', accept: ['My friend Jake, who lives in Ohio, is visiting.'], why: 'Capitalize names and places. Commas go around the extra part (who lives in Ohio).' },
    { wrong: 'the meeting starts at 330 dont be late', accept: ["The meeting starts at 3:30. Don't be late."], why: "A colon in the time, a period between the sentences, and an apostrophe in don't." },
    { wrong: 'yes i will help you said maria', accept: ['"Yes, I will help you," said Maria.'], why: 'Quotation marks, a comma after Yes, capital I, a comma inside the quote, and Maria is a name.' },
    { wrong: 'their going to the museum on tuesday', accept: ["They're going to the museum on Tuesday."], why: "They're = they are. Days of the week are capitalized." },
    { wrong: 'the team practiced hard so they won', accept: ['The team practiced hard, so they won.'], why: 'Comma before so when it joins two sentences.' }
  ]);
  /* ---------------------------------------------------------------- Homophones, verbs, possessives, transitions */
  add(G.blanks.homo, [
    ['The wind was so strong that it blew the hat off ___ head.', 'his', ["he's", 'hiss'], "His = belongs to him. He's = he is."],
    ['I can ___ the ocean from my window.', 'see', ['sea', 'cee'], 'See = look. Sea = the ocean.'],
    ['We waited an ___ for the bus.', 'hour', ['our', 'are'], 'Hour = 60 minutes. Our = belongs to us.'],
    ['The knight rode his horse through the dark ___.', 'night', ['knight', 'nite'], 'Night = when it is dark. A knight is a soldier in armor.'],
    ['Please ___ the gift in shiny paper.', 'wrap', ['rap', 'wrapp'], 'Wrap = cover. Rap = a knock or a style of music.'],
    ['The hikers stopped to ___ before the steep climb.', 'break', ['brake', 'braek'], 'Break = a rest (or to smash). Brake = what stops a car or bike.'],
    ['I ___ the answer to number five.', 'knew', ['new', 'gnu'], 'Knew = past of know. New = not old.'],
    ['Dad pressed the ___ to stop the car.', 'brake', ['break', 'brayk'], 'Brake = the pedal that stops a car.'],
    ['Our class ___ the spelling bee!', 'won', ['one', 'wun'], 'Won = past of win. One = the number 1.'],
    ['Do you know ___ backpack this is?', 'whose', ["who's", 'whos'], "Whose = belongs to whom. Who's = who is."],
    ['The ___ of the story is Ms. Lin, a brave pilot.', 'main character', ['mane character', 'main charactor'], 'Main = most important. A mane is the hair on a horse or lion.'],
    ['I ate ___ many cookies and got a stomachache.', 'too', ['to', 'two'], 'Too = more than enough.'],
    ['___ my turn to pick the game.', "It's", ['Its', "Its'"], "It's = it is."],
    ['We could not decide ___ to go to the beach or the lake.', 'whether', ['weather', 'wether'], 'Whether = if (a choice). Weather = rain, sun, snow.'],
    ['The ___ was perfect for a picnic: sunny and warm.', 'weather', ['whether', 'wheather'], 'Weather = what it is like outside.']
  ]);
  add(G.blanks.verbs, [
    ['Neither of the twins ___ to go first.', 'wants', ['want', 'wanting'], 'Neither means "not one," so it is singular: neither wants.'],
    ['The box of crayons ___ on the shelf.', 'is', ['are', 'be'], 'The subject is box (one), not crayons: the box is.'],
    ['My friends and I ___ to the park every Saturday.', 'go', ['goes', 'going'], 'Two people (my friends and I) = plural: go.'],
    ['Everyone in the class ___ a turn.', 'gets', ['get', 'getting'], 'Everyone is singular: everyone gets.'],
    ['The team ___ practiced every day this week.', 'has', ['have', 'having'], 'The team is one group: the team has practiced.'],
    ['Yesterday, the bell ___ early.', 'rang', ['ringed', 'rung'], 'Ring, rang, (have) rung. Yesterday needs rang.'],
    ['I have ___ that movie three times.', 'seen', ['saw', 'seed'], 'After have, use seen (I have seen).'],
    ['The birds have ___ south for the winter.', 'flown', ['flew', 'flied'], 'Fly, flew, (have) flown.'],
    ['There ___ many reasons to visit Virginia.', 'are', ['is', 'was'], 'Reasons is plural, so there are.'],
    ['Each of the students ___ a library card.', 'has', ['have', 'having'], 'Each is singular: each has.']
  ]);
  add(G.blanks.poss, [
    ['The ___ uniforms were muddy after the game.', "players'", ["player's", 'players'], "Many players own the uniforms: players'."],
    ['My ___ car is in the shop.', "mom's", ["moms'", 'moms'], "One mom: mom's."],
    ['The ___ playground has new swings.', "children's", ["childrens'", 'childrens'], "Children is plural without s: add 's."],
    ['The ___ nest was high in the oak tree.', "eagle's", ['eagles', "eagles'"], "One eagle: eagle's."],
    ['All the ___ lockers were painted blue.', "students'", ["student's", 'students'], "Many students: students'."],
    ['The ___ hats blew off in the wind.', "women's", ["womens'", 'womans'], "Women is plural without s: women's."],
    ['___ science project won first place.', "James's", ["James'es", 'Jameses'], "For one person whose name ends in s, add 's (James's). James' is also used by some writers."],
    ['The ___ leaves turned bright red.', "tree's", ["trees's", 'treeses'], "One tree: tree's."],
    ['Both ___ tails were wagging.', "dogs'", ["dog's", 'dogs'], "Both dogs: dogs'."],
    ['The ___ roar echoed through the zoo.', "lion's", ["lions's", 'lion'], "One lion: lion's."]
  ]);
  add(G.blanks.trans, [
    ['Sharks look scary. ___, most sharks never attack people.', 'However', ['For example', 'Therefore'], 'However shows a contrast between looking scary and being harmless.'],
    ['Plants need sunlight. ___, a plant in a dark closet will die.', 'As a result', ['For example', 'Meanwhile'], 'As a result shows the effect of no sunlight.'],
    ['Many animals hibernate. ___, bears sleep through most of the winter.', 'For example', ['However', 'Therefore'], 'For example introduces an example of hibernation.'],
    ['Recycling saves energy. ___, it keeps trash out of landfills.', 'In addition', ['However', 'Instead'], 'In addition adds one more reason.'],
    ['I set my alarm for 6:00. ___, I still woke up late.', 'Even so', ['For example', 'Similarly'], 'Even so means "in spite of that."'],
    ['First, mix the flour and sugar. ___, add the eggs.', 'Next', ['However', 'In conclusion'], 'Next shows the following step.'],
    ['Athens valued art. ___, Sparta valued military training.', 'In contrast', ['Similarly', 'As a result'], 'In contrast shows a difference.'],
    ['Lions live in groups called prides. ___, wolves live in groups called packs.', 'Similarly', ['However', 'Therefore'], 'Similarly shows how two things are alike.'],
    ['The bridge was damaged in the storm. ___, drivers had to take a long detour.', 'Consequently', ['For instance', 'In contrast'], 'Consequently means "as a result."'],
    ['___, these reasons show that every school needs a library.', 'In conclusion', ['For example', 'Meanwhile'], 'In conclusion begins the wrap-up.'],
    ['The team was losing at halftime. ___, they came back to win.', 'Nevertheless', ['For example', 'Similarly'], 'Nevertheless shows a surprising result.'],
    ['Mom cooked dinner. ___, Dad set the table.', 'Meanwhile', ['Therefore', 'For example'], 'Meanwhile means at the same time.'],
    ['Exercise strengthens your heart. ___, it improves your mood.', 'Furthermore', ['However', 'Instead'], 'Furthermore adds another point.'],
    ['We did not take the bus. ___, we walked.', 'Instead', ['Similarly', 'In addition'], 'Instead shows the other choice that was made.'],
    ['The ice melted. ___, the water level in the glass rose.', 'Because of this', ['For example', 'In contrast'], 'Because of this shows cause and effect.']
  ]);

  /* ---------------------------------------------------------------- Paragraph Builder */
  add(G.para.order, [
    { t: 'Why Bees Matter', strips: ['Honeybees are more important than most people realize.', 'To begin with, they pollinate about one third of the food we eat.', 'For example, apples, almonds, and blueberries all depend on bees.', 'In addition, bees make honey and beeswax that people use every day.', 'For these reasons, we must protect honeybees.'], why: 'Claim, first reason with an example, second reason, then a conclusion that restates the claim.' },
    { t: 'The Lost Dog', strips: ['When I opened the back door, Rocky was gone.', 'At first, I searched every corner of the yard.', 'Then I heard a faint bark coming from the neighbor\'s shed.', 'I pulled the door open, and Rocky leaped into my arms.', 'From then on, I always check the gate before I let him out.'], why: 'A narrative goes in time order and ends with a lesson.' },
    { t: 'How Erosion Works', strips: ['Erosion is the movement of rock and soil from one place to another.', 'First, weathering breaks rock into smaller pieces.', 'Next, water, wind, or ice picks up the pieces.', 'Then the pieces are carried away, sometimes for many miles.', 'Over time, erosion can carve valleys and canyons.'], why: 'Define the topic, give the steps in order, and end with the result.' },
    { t: 'A Bill of Rights', strips: ['Many Americans wanted a list of rights added to the Constitution.', 'They feared a strong government might take away their freedoms.', 'As a result, James Madison wrote ten amendments.', 'In 1791, these amendments became the Bill of Rights.', 'Today, they still protect freedoms like speech and religion.'], why: 'Cause, effect, and what it means today, in time order.' },
    { t: 'The Science Experiment', strips: ['Our class tested which paper towel absorbs the most water.', 'First, we cut three brands into equal squares.', 'Next, we dipped each square into a cup of water for ten seconds.', 'Then we measured how much water was left in each cup.', 'The results showed that Brand B absorbed the most water.'], why: 'An experiment write-up gives the question, the steps in order, and the result.' },
    { t: 'Why Reading Matters', strips: ['Reading every day helps kids in many ways.', 'First, it builds a bigger vocabulary.', 'Second, it improves writing because readers see how good sentences work.', 'Finally, reading lets you explore places and times you could never visit.', 'Clearly, twenty minutes of reading a day is time well spent.'], why: 'Claim, three reasons with First, Second, Finally, and a conclusion.' },
    { t: 'The Big Game', strips: ['The scoreboard read 3 to 3 with one minute left.', 'Suddenly, I saw an open path to the goal.', 'I dribbled past two defenders and kicked as hard as I could.', 'The ball sailed into the top corner of the net.', 'That night, I learned that staying ready pays off.'], why: 'Set the scene, build the action, the big moment, then the lesson.' },
    { t: 'Ancient Roman Roads', strips: ['The Romans were some of the greatest road builders in history.', 'They built more than 50,000 miles of stone roads.', 'These roads let soldiers and traders travel quickly across the empire.', 'Some Roman roads are still used today, after 2,000 years.', 'Roman roads show how skilled their engineers really were.'], why: 'Topic sentence, facts, why they mattered, and a closing.' },
    { t: 'Saving Water', strips: ['Every family can save water at home.', 'For example, turning off the faucet while brushing your teeth saves gallons a day.', 'Another way is to fix leaky faucets right away.', 'Families can also run the dishwasher only when it is full.', 'Small changes like these add up to a big difference.'], why: 'Topic sentence, three examples linked with transitions, and a closing.' },
    { t: 'The Talent Show Surprise', strips: ['My little brother begged to be in the talent show.', 'Everyone expected him to forget his lines.', 'Instead, he stepped up to the microphone and told three jokes perfectly.', 'The whole gym burst out laughing.', 'I never underestimated him again.'], why: 'Set-up, what people expected, the surprise, the reaction, the lesson.' }
  ]);
  add(G.para.odd, [
    { strips: ['Volcanoes can change the land quickly.', 'Lava flows can cover whole villages in hours.', 'Ash from an eruption can bury forests.', 'My uncle visited Hawaii last summer.', 'An eruption can even create a new island.'], bad: 3, why: 'The uncle\'s trip is not about how volcanoes change the land.' },
    { strips: ['The Constitution divides power among three branches.', 'Congress makes the laws.', 'The president carries out the laws.', 'The Fourth of July has fireworks.', 'The courts decide what the laws mean.'], bad: 3, why: 'Fireworks are not about the three branches.' },
    { strips: ['Owls are skilled night hunters.', 'Their large eyes help them see in the dark.', 'Soft feathers let them fly almost silently.', 'Some owls can turn their heads about 270 degrees.', 'Penguins cannot fly at all.'], bad: 4, why: 'Penguins are not about how owls hunt.' },
    { strips: ['Sleep helps students do well in school.', 'During sleep, the brain stores what we learned.', 'Well-rested students pay better attention in class.', 'My pillow is filled with feathers.', 'Kids who sleep enough also get sick less often.'], bad: 3, why: 'What a pillow is made of does not show how sleep helps in school.' },
    { strips: ['The ancient Greeks gave us many ideas we still use.', 'Athens created the first democracy.', 'Greek thinkers asked questions about science and math.', 'The Olympic Games began in Greece.', 'Today, Greece is famous for its beaches.'], bad: 4, why: 'Modern beaches are not an idea from ancient Greece.' },
    { strips: ['Our town should build a skate park.', 'Teens need a safe place to skate.', 'Right now, they skate in parking lots near traffic.', 'A skate park would give them exercise.', 'The town also has a nice duck pond.'], bad: 4, why: 'The duck pond does not support building a skate park.' },
    { strips: ['Magnets have many everyday uses.', 'They hold notes on the refrigerator.', 'They help compasses point north.', 'Inside speakers, magnets help make sound.', 'Iron is a metal found in the ground.'], bad: 4, why: 'Where iron comes from is not a use for magnets.' },
    { strips: ['Mateo is the hardest worker on our team.', 'He arrives at practice early every day.', 'He stays late to practice his free throws.', 'His favorite food is spaghetti.', 'Even when he is tired, he never gives up on a drill.'], bad: 3, why: 'His favorite food does not show that he works hard.' },
    { strips: ['Deserts are home to amazing animals.', 'Camels store fat in their humps.', 'Fennec foxes have huge ears that release heat.', 'The Sahara is the largest hot desert.', 'Kangaroo rats almost never need to drink water.'], bad: 3, why: 'This paragraph is about desert animals. The size of the Sahara is a fact about the desert, not an animal.' },
    { strips: ['Thomas Edison was a tireless inventor.', 'He tested thousands of materials to make a working light bulb.', 'He also invented the phonograph to record sound.', 'Edison held more than 1,000 patents.', 'Light bulbs come in many colors today.'], bad: 4, why: 'Colors of modern light bulbs are not about Edison being a tireless inventor.' }
  ]);
  add(G.para.topic, [
    { q: 'Which is the best topic sentence for these details?', show: 'Rivers carve valleys. Glaciers scrape out wide bowls. Wind wears rock into strange shapes.', r: 'Water, ice, and wind all shape Earth\'s surface.', w: ['Rivers are full of water.', 'Glaciers are very cold.', 'Wind can be strong.'], why: 'The topic sentence must cover rivers, glaciers, AND wind.' },
    { q: 'Which is the best topic sentence for these details?', show: 'Abigail Adams wrote letters urging leaders to "remember the ladies." Phillis Wheatley published poetry. Deborah Sampson disguised herself as a man to fight in the army.', r: 'Women played important roles during the American Revolution.', w: ['Abigail Adams wrote letters.', 'Poetry is a kind of writing.', 'The army needed soldiers.'], why: 'All three details are women who made a difference during the Revolution.' },
    { q: 'Which is the best closing sentence?', show: 'Our library has thousands of free books. It offers homework help after school. It also hosts science nights for families.', r: 'Our library is one of the most valuable places in our community.', w: ['The library closes at eight.', 'I borrowed three books last week.', 'Science is fun.'], why: 'A closing sentence restates the main idea in new words.' },
    { q: 'Which is the strongest opening for a story about a snowstorm?', r: 'The wind howled so loudly that I could barely hear my brother screaming my name.', w: ['This is a story about a snowstorm.', 'One day it snowed a lot.', 'Snow is frozen water.'], why: 'Start with action and sound, not an announcement.' },
    { q: 'Which sentence best supports this claim? “Schools should teach typing.”', r: 'Students type most of their writing tests, so fast typing saves time and stress.', w: ['Keyboards have many keys.', 'Some computers are black.', 'My cousin has a laptop.'], why: 'A strong reason explains WHY typing should be taught.' },
    { q: 'Which is the best topic sentence for these details?', show: 'A lever helps lift heavy loads. A pulley helps raise a flag. A ramp helps move a piano into a truck.', r: 'Simple machines make work easier.', w: ['A lever is a bar.', 'Pianos are heavy.', 'Flags fly on poles.'], why: 'Lever, pulley, and ramp are all simple machines that make work easier.' },
    { q: 'Which is the best closing sentence?', show: 'Chloe spent weeks practicing her piano piece. On the day of the recital, she missed two notes. Still, she finished the song with a smile.', r: 'Chloe learned that finishing with courage matters more than being perfect.', w: ['Pianos have 88 keys.', 'The recital was on Sunday.', 'Chloe has a cat.'], why: 'A narrative closing shares the lesson or how the character changed.' },
    { q: 'Which sentence best answers the opposing view?', show: 'Claim: Our school should have a longer recess. Opposing view: A longer recess means less learning time.', r: 'Although recess takes time, students who take breaks focus better and learn more in the time they have.', w: ['Recess is fun, so who cares?', 'Learning is boring anyway.', 'Some people are wrong about everything.'], why: 'A strong counterargument admits the concern, then explains why your side still wins.' },
    { q: 'Which is the best topic sentence for these details?', show: 'The Grand Canyon formed over millions of years. Tiny streams slowly carve rock. Mountains wear down grain by grain.', r: 'Some changes to Earth\'s surface happen very slowly.', w: ['The Grand Canyon is in Arizona.', 'Streams are small rivers.', 'Mountains are tall.'], why: 'All three are examples of slow changes.' },
    { q: 'Which is the best hook for a report on lightning?', r: 'A single bolt of lightning is about five times hotter than the surface of the sun.', w: ['Lightning happens during storms.', 'I will tell you about lightning.', 'Lightning is bright.'], why: 'A surprising fact makes the reader want to learn more.' }
  ]);
  add(G.para.cloze, [
    { t: 'The Volcano Trip', text: '{0} we arrived at the park, we watched a video about the volcano. {1}, we hiked to the edge of the crater. {2} we stood there, steam hissed from the rocks below. {3}, we rode the bus back, tired but amazed.', bank: ['When', 'Afterward', 'While', 'Later that day', 'For example'], ans: [['When'], ['Afterward', 'Later that day'], ['While'], ['Later that day', 'Afterward']], why: 'When and While show time relationships; Afterward and Later that day move the story forward.' },
    { t: 'Should We Have Longer Lunch?', text: 'Students need a longer lunch period. {0}, many students cannot finish eating in twenty minutes. {1}, a calm lunch gives students time to rest before afternoon classes. {2}, some teachers worry about losing class time. {3}, a few extra minutes would help students focus better all afternoon.', bank: ['For example', 'In addition', 'However', 'Even so', 'Meanwhile'], ans: [['For example'], ['In addition'], ['However'], ['Even so']], why: 'For example (an example), In addition (another reason), However (the other side), Even so (in spite of that).' },
    { t: 'Frogs and Toads', text: 'Frogs and toads are both amphibians. {0}, they look quite different. Frogs have smooth, wet skin. {1}, toads have dry, bumpy skin. {2}, both lay their eggs in water.', bank: ['However', 'In contrast', 'Similarly', 'As a result'], ans: [['However'], ['In contrast'], ['Similarly']], why: 'However and In contrast show differences; Similarly shows something alike.' },
    { t: 'The Water Shortage', text: 'Our town had very little rain this summer. {0}, the reservoir dropped to its lowest level in years. {1}, the mayor asked families to stop watering their lawns. {2}, the town will build a new water tank next year.', bank: ['As a result', 'Therefore', 'In the future', 'For example'], ans: [['As a result', 'Therefore'], ['Therefore', 'As a result'], ['In the future']], why: 'Cause and effect: As a result and Therefore show what happened because of no rain.' },
    { t: 'Training a Puppy', text: '{0}, choose a simple command like "sit." {1}, hold a treat above the puppy\'s nose. {2} the puppy sits, give it the treat right away. {3}, practice a few minutes every day until it learns.', bank: ['First', 'Next', 'As soon as', 'Finally', 'However'], ans: [['First'], ['Next'], ['As soon as'], ['Finally']], why: 'Order words show the steps of a process.' }
  ]);
  add(G.para.breaks, [
    { t: 'The Camping Trip', s: ['We set up our tent beside a quiet lake.', 'Dad lit a campfire while I gathered sticks.', 'In the middle of the night, a loud crash woke us up.', 'Something was knocking over our cooler.', '"It\'s a raccoon!" my sister whispered.', '"Stay in the tent," Dad said.'], br: [2, 4, 5], why: 'New paragraphs when the time changes (middle of the night) and each time a new person speaks.' },
    { t: 'Hurricanes', s: ['Hurricanes are powerful storms that form over warm ocean water.', 'Warm, wet air rises and begins to spin.', 'Hurricanes can cause terrible damage.', 'Strong winds tear roofs off houses.', 'Heavy rain causes floods.', 'Scientists now track hurricanes with satellites.', 'This helps people leave before the storm arrives.'], br: [2, 5], why: 'Topics change: how hurricanes form, the damage they cause, how scientists track them.' },
    { t: 'Ancient Rome\'s Water', s: ['Roman cities needed huge amounts of fresh water.', 'Engineers built aqueducts to carry water from mountain springs.', 'The aqueducts used a gentle downhill slope.', 'Gravity pulled the water all the way to the city.', 'Inside Rome, the water filled public fountains and baths.', 'Wealthy families even had pipes to their homes.'], br: [2, 4], why: 'New paragraphs as the topic moves: why water was needed, how aqueducts worked, how water was used in the city.' },
    { t: 'First Day at a New School', s: ['I stood outside the classroom door, clutching my backpack.', 'Everyone inside already seemed to know each other.', 'A girl with a green headband walked over to me.', '"Do you want to sit with us?" she asked.', '"Sure," I answered, surprised.', 'By lunchtime, I had three new friends.'], br: [2, 3, 4, 5], why: 'A new paragraph for a new person acting, each new speaker, and the jump in time (by lunchtime).' },
    { t: 'Energy at Home', s: ['Energy comes in many forms.', 'Electrical energy powers our lights and computers.', 'Heat energy warms our homes in winter.', 'Families can save energy in simple ways.', 'Turning off lights saves electricity.', 'Closing curtains at night keeps heat inside.'], br: [3], why: 'The topic changes from forms of energy to ways to save energy.' }
  ]);

  /* ---------------------------------------------------------------- Fix This Writing */
  add(G.fix, [
    { id: 'bees5', t: 'Why We Need Bees',
      clean: [['Have you ever thanked a bee for your breakfast?', 'You probably should.'],
        ['Honeybees pollinate crops like apples, almonds, and blueberries.', 'Without them, farmers would grow far less food.'],
        ['Sadly, bee colonies are in trouble.', "Scientists say pesticides, disease, and habitat loss are hurting the bees' health."],
        ['Luckily, families can help.', "If you plant flowers in your yard, you'll give bees the food they need."]],
      messy: "Have you ever thanked a bee for your breakfast. You probably should. Honeybees pollinate crops like apples almonds, and blueberries. Without them farmers would grow far less food. Sadly bee colonies are in trouble. scientists say pesticides, disease, and habitat loss are hurting the bees health. Luckily, families can help. If you plant flowers in your yard youll give bees the food they need.",
      notes: ['A question ends with a question mark.', 'Commas: in a list, after opening words (Without them, Sadly,), and after an if part.', "Apostrophes: bees' health (many bees own it), you'll = you will.", 'New paragraphs: the hook, why bees matter, the problem, the solution.'] },
    { id: 'storm5', t: 'The Night of the Storm',
      clean: [['The power went out at exactly 9:15 on Friday night.', 'My little sister grabbed my arm in the dark.'],
        ['"Are we going to be okay?" she whispered.', '"Of course," I said, even though my heart was pounding.'],
        ['We found three things in the kitchen drawer: a flashlight, candles, and matches.', 'Soon, the room glowed with warm light.'],
        ['By morning, the storm had passed.', "Our street was covered in branches, but we were safe, and that's what mattered."]],
      messy: "The power went out at exactly 915 on friday night. My little sister grabbed my arm in the dark. Are we going to be okay? she whispered. Of course I said, even though my heart was pounding. We found three things in the kitchen drawer a flashlight, candles, and matches. Soon the room glowed with warm light. By morning, the storm had passed. Our street was covered in branches but we were safe, and thats what mattered.",
      notes: ['Times use a colon (9:15), and days are capitalized (Friday).', 'Spoken words need quotation marks, with commas and question marks inside.', 'A colon introduces the list after a complete sentence.', "Comma after Soon and before but; that's needs an apostrophe."] }
  ]);

  /* ---------------------------------------------------------------- New writing types */
  G.write.essay = {
    name: 'Multi-paragraph Essay', icon: '🏛️', blurb: 'The big one: a five-paragraph essay with a thesis, three body paragraphs, and a conclusion.',
    plan: [
      ['hook', 'Hook', 'A question, a surprising fact, or a quick scene', 'Imagine a town where kids have nowhere safe to play.'],
      ['thesis', 'Thesis (claim + 3 reasons)', 'One sentence that takes a side and names your three reasons', 'Our town should build a park because it gives kids exercise, brings neighbors together, and keeps kids safe.'],
      ['r1', 'Body 1: reason + evidence', 'Reason, then a fact or example, then explain', 'Exercise: kids need 60 minutes a day; a park makes it easy'],
      ['r2', 'Body 2: reason + evidence', 'A different reason, fact, explain', 'Neighbors meet: picnics, games, events'],
      ['r3', 'Body 3: reason + evidence', 'Your strongest reason last', 'Safety: kids now play in parking lots'],
      ['concl', 'Conclusion', 'Restate the thesis in new words, sum up, final thought', 'A park is an investment in our kids and our community']
    ],
    parts: [
      { id: 'intro', label: 'Introduction', tip: 'Start with your hook. Add one or two sentences of background. End with your thesis: your claim plus your three reasons.', starters: ['Imagine ', 'Have you ever wondered ', 'Every year, ', 'Our town should '], model: 'Imagine a town where kids have nowhere safe to play after school. In our town, the closest playground is three miles away. Our town should build a new park because it would give kids exercise, bring neighbors together, and keep children safe.', plan: ['hook', 'thesis'] },
      { id: 'b1', label: 'Body 1', tip: 'Topic sentence with your first reason. Give evidence (a fact, a number, or an example). Then explain how it proves your point.', starters: ['To begin with, ', 'First of all, ', 'For example, ', 'This shows that '], model: 'To begin with, a park would help kids get the exercise they need. Doctors say children should be active for at least sixty minutes every day. For example, a park with a soccer field and a climbing wall would make it easy and fun to move. This shows that a park is a simple way to keep kids healthy.', plan: ['r1'] },
      { id: 'b2', label: 'Body 2', tip: 'Start with a transition and your second reason. Evidence, then explain.', starters: ['In addition, ', 'Another reason is ', 'For instance, ', 'As a result, '], model: 'In addition, a park would bring neighbors together. Families could meet for picnics, games, and summer concerts. For instance, many nearby towns hold summer movie nights in their parks that hundreds of people attend. As a result, neighbors get to know each other and look out for one another.', plan: ['r2'] },
      { id: 'b3', label: 'Body 3', tip: 'Save your strongest reason for last. You can also answer someone who disagrees.', starters: ['Most importantly, ', 'Finally, ', 'Some people might say ', 'However, '], model: 'Most importantly, a park would keep children safe. Right now, many kids play in parking lots near busy traffic. Some people might say a park costs too much. However, keeping kids safe is worth more than any price.', plan: ['r3'] },
      { id: 'concl', label: 'Conclusion', tip: 'Restate your thesis in new words. Sum up all three reasons. End with a final thought or a call to action.', starters: ['In conclusion, ', 'For these reasons, ', 'Clearly, ', 'I urge '], model: 'For these reasons, a new park would make our town healthier, friendlier, and safer. It would give kids a place to play and give families a place to gather. I urge the town council to vote yes on the new park.', plan: ['concl'] }
    ],
    prompts: ['Should our town build a new park?', 'Should students be allowed to bring phones to school?', 'What is the most important invention of all time?', 'Should every student learn a second language?', 'Should kids be paid for good grades?', 'Is it better to read the book or watch the movie?', 'Should schools have year-round calendars?', 'Which Bill of Rights freedom matters most?', 'Should zoos exist?', 'Should video games count as a sport?'],
    trans: ['to begin with', 'first of all', 'for example', 'for instance', 'in addition', 'another reason', 'most importantly', 'finally', 'however', 'as a result', 'this shows', 'for these reasons', 'in conclusion', 'clearly', 'because'],
    manual: ['My introduction ends with a thesis that names my three reasons.', 'Each body paragraph starts with a topic sentence and a transition.', 'Every body paragraph has evidence AND an explanation.', 'My strongest reason is last.', 'My conclusion restates the thesis in new words.', 'I read it out loud and fixed anything that sounded wrong.'],
    minParas: 5, minWords: 220, because: true
  };
  G.write.response = {
    name: 'Respond to Reading', icon: '📜', blurb: 'Answer a question about something you read: answer, prove it with evidence, and explain.',
    plan: [
      ['text', 'What did you read?', 'Title and author', 'Hatchet by Gary Paulsen'],
      ['question', 'The question', 'Write the question in your own words', 'How does Brian change during the story?'],
      ['answer', 'My answer', 'One sentence that answers the question', 'Brian changes from helpless to confident.'],
      ['ev1', 'Evidence 1', 'A detail or quote, with the page or chapter', 'Ch. 4: he cries and feels sorry for himself'],
      ['ev2', 'Evidence 2', 'Another detail or quote', 'Ch. 13: he builds a fish spear and a shelter'],
      ['explain', 'What it shows', 'How the evidence proves your answer', 'He learns to solve problems instead of giving up']
    ],
    parts: [
      { id: 'answer', label: 'Answer', tip: 'Name the text and author. Restate the question and answer it in one or two clear sentences.', starters: ['In the story ', 'In the article ', 'The author shows that ', 'The main character changes from '], model: 'In the novel Hatchet by Gary Paulsen, Brian changes from a helpless boy into a confident survivor. At the start, he does not know how to survive, but by the end, he can take care of himself.', plan: ['text', 'question', 'answer'] },
      { id: 'evidence', label: 'Evidence', tip: 'Give two pieces of evidence from the text. Use quotation marks for exact words and tell where they are (page, chapter, or paragraph).', starters: ['For example, in chapter ', 'The text states, "', 'Early in the story, ', 'Later, '], model: 'For example, in chapter 4, Brian cries and feels sorry for himself after the crash. Later, in chapter 13, he builds a shelter and makes a spear to catch fish. The text states that he "was not the same person" anymore.', plan: ['ev1', 'ev2'] },
      { id: 'explain', label: 'Explain', tip: 'Explain HOW your evidence proves your answer. Do not just repeat the evidence. End with what this teaches the reader.', starters: ['This shows that ', 'These details prove ', 'Because of this, ', 'The author wants readers to understand '], model: 'This shows that Brian learned to solve problems instead of giving up. Because he kept trying, his mistakes turned into skills. The author wants readers to understand that people can grow stronger when life gets hard.', plan: ['explain'] }
    ],
    prompts: ['How does the main character change in a book you read?', 'What is the theme (life lesson) of a story you read?', 'What is the author\'s purpose in an article you read?', 'Compare two characters from the same book.', 'What problem does the main character face, and how is it solved?', 'Summarize a nonfiction article and tell what you learned.', 'How does the setting affect the story?', 'What is the author\'s point of view, and how can you tell?'],
    trans: ['for example', 'the text states', 'in chapter', 'in paragraph', 'early in', 'later', 'this shows', 'because of this', 'these details', 'as a result', 'at first', 'by the end'],
    manual: ['My first sentence names the text and answers the question.', 'I gave TWO pieces of evidence from the text.', 'I used quotation marks for exact words.', 'I told where each piece of evidence is (chapter, page, or paragraph).', 'I explained how the evidence proves my answer.', 'I read it out loud and fixed anything that sounded wrong.'],
    minParas: 3, minWords: 100
  };
})(window);
