/* Writer's Workshop: content round 2 (Nov 2026).
   Appends to the lists in content.js. Item keys are positional (skill:source:index),
   so ALWAYS append here; never insert or reorder, or saved misses point at the wrong question.
   Many items follow the FCPS units for the year (Grade 3: water cycle, Egypt, government;
   Grade 5: the Constitution, landforms, Greece and Rome, force and energy). */
(function (w) {
  const D = w.WW_DATA; if (!D) return;
  const add = (arr, more) => { more.forEach((x) => arr.push(x)); };

  /* ================================================================ Grade 3 */
  const G3 = D[3];
  add(G3.blanks.apos, [
    ['___ backpack is heavy.', "Kim's", ['Kims', "Kims'"], "Kim owns the backpack, so add 's."],
    ['We ___ go outside in the rain.', "won't", ['wont', "wo'nt"], "won't = will not."],
    ['___ going to the zoo today!', "We're", ['Were', "Wer'e"], "We're = we are. Were (no apostrophe) is a past-tense verb."],
    ['The ___ bowl is empty.', "cat's", ['cats', 'cat'], "One cat owns the bowl: cat's."],
    ['She ___ like spinach.', "doesn't", ['doesnt', "does'nt"], "doesn't = does not. The apostrophe goes where the o was."]
  ]);
  add(G3.blanks.verbs, [
    ['Yesterday, we ___ to the park.', 'walked', ['walk', 'walks'], 'Yesterday means the past: walked.'],
    ['The birds ___ in the tree.', 'sing', ['sings', 'singed'], 'More than one bird: birds sing.'],
    ['Last night, I ___ a scary dream.', 'had', ['have', 'haves'], 'Last night is the past: had.'],
    ['My friends ___ the bus every day.', 'ride', ['rides', 'rided'], 'More than one friend: friends ride.'],
    ['Tomorrow, Dad ___ bake cookies.', 'will', ['did', 'was'], 'Tomorrow is the future: will bake.']
  ]);
  add(G3.dialogue, [
    ['"I love pizza," said Sam.', ['"I love pizza" said Sam.', '"I love pizza." said Sam.', 'I love pizza, said Sam.'], 'A comma goes inside the closing quotation mark, right before said.'],
    ['Mom asked, "Did you feed the cat?"', ['Mom asked, "Did you feed the cat"?', 'Mom asked, Did you feed the cat?', 'Mom asked "did you feed the cat?"'], 'Put a comma after asked. The question mark goes inside the closing quotation mark.'],
    ['"Look out!" yelled Kai.', ['"Look out"! yelled Kai.', 'Look out! yelled Kai.', '"Look out!" Yelled Kai.'], 'The exclamation point stays inside. Yelled is not capitalized because the sentence keeps going.'],
    ['Grandpa said, "It is time for dinner."', ['Grandpa said, "It is time for dinner".', 'Grandpa said "it is time for dinner."', 'Grandpa said, It is time for dinner.'], 'Comma after said, a capital letter to start his words, and the period inside the closing mark.'],
    ['"Can we go to the park?" asked Lily.', ['"Can we go to the park." asked Lily.', '"Can we go to the park"? asked Lily.', 'Can we go to the park? asked Lily.'], 'Lily asks a question, so a question mark goes inside the closing quotation mark.']
  ]);

  add(G3.para.order, [
    { t: 'The Water Cycle', strips: ['Water moves in a cycle that never ends.', 'First, the sun heats water in oceans and lakes.', 'Next, the water evaporates and rises into the sky.', 'Then, the water vapor cools and forms clouds.', 'Finally, the water falls back down as rain or snow.'], why: 'The topic sentence comes first. First, Next, Then, Finally put the steps in order.' },
    { t: 'A Rainy Saturday', strips: ['Last Saturday, it rained all day long.', 'At first, I felt bored because I could not go outside.', 'Then, my brother and I built a blanket fort in the living room.', 'After that, we read books inside the fort with a flashlight.', 'By bedtime, I decided rainy days can be fun after all.'], why: 'A story goes in time order: the beginning, what happened, and how it ended.' },
    { t: 'Why Every Class Should Vote', strips: ['I think every class should vote on big decisions.', 'First, voting is fair because everyone gets a say.', 'Second, voting teaches kids how our government works.', 'Third, kids feel proud when their ideas are heard.', 'That is why every class should vote.'], why: 'Opinion first, then reasons in order (First, Second, Third), then the opinion again.' },
    { t: 'Making a Mummy', strips: ['The ancient Egyptians made mummies to protect the body after death.', 'First, workers removed the organs and dried the body with salt.', 'Next, they wrapped the body in long strips of cloth.', 'Last, they placed the mummy in a decorated coffin.', 'Because of this careful work, some mummies still exist today.'], why: 'The topic sentence tells what the paragraph is about. The steps follow in order, and the closing tells why it matters.' },
    { t: 'My School Morning', strips: ['Every school morning, I follow the same routine.', 'First, I get dressed and make my bed.', 'Next, I eat breakfast with my family.', 'Then, I brush my teeth and grab my backpack.', 'Finally, I run to the bus stop just in time.'], why: 'Time-order words show the steps: First, Next, Then, Finally.' },
    { t: 'Making a Sandwich', strips: ['Making a peanut butter sandwich only takes a few steps.', 'First, take out two slices of bread.', 'Next, spread peanut butter on one slice.', 'Then, put the other slice on top.', 'Now your sandwich is ready to eat!'], why: 'Topic sentence, steps in order, and a closing that wraps it up.' }
  ]);
  add(G3.para.odd, [
    { strips: ['Maps help us find our way.', 'A map key explains what the symbols mean.', 'A compass rose shows north, south, east, and west.', 'I had pancakes for breakfast.', 'A scale tells how far apart places are.'], bad: 3, why: 'Every sentence is about maps except the one about breakfast.' },
    { strips: ['Rain is an important part of the water cycle.', 'Rain falls from clouds when water drops get heavy.', 'It fills lakes, rivers, and oceans.', 'Rain helps plants grow.', 'My umbrella is red with white dots.'], bad: 4, why: 'The umbrella is about rain, but it does not tell how rain is part of the water cycle.' },
    { strips: ['The Nile River was important to ancient Egypt.', 'It gave people water to drink.', 'Farmers used its water to grow crops.', 'The pyramids were built as tombs for kings.', 'Boats carried goods up and down the river.'], bad: 3, why: 'The pyramids are about Egypt, but this paragraph is about why the Nile River was important.' },
    { strips: ['Recess is my favorite part of the day.', 'I play tag with my friends.', 'Sometimes we swing as high as we can.', 'My math test is on Friday.', 'Recess helps me feel ready to learn again.'], bad: 3, why: 'The math test is not about recess.' },
    { strips: ['Firefighters keep our community safe.', 'They put out fires quickly.', 'They teach kids about fire safety.', 'They also rescue people in emergencies.', 'Some people like to collect stamps.'], bad: 4, why: 'Collecting stamps has nothing to do with how firefighters keep us safe.' },
    { strips: ['Owls are amazing night hunters.', 'Their big eyes help them see in the dark.', 'They can fly almost silently.', 'Some birds fly south for the winter.', 'Owls can turn their heads very far to spot prey.'], bad: 3, why: 'Other birds flying south does not tell us how owls hunt at night.' }
  ]);
  add(G3.para.topic, [
    { q: 'Which is the best topic sentence for these details?', show: 'Ladybugs eat aphids that hurt plants. Bees carry pollen from flower to flower. Worms make the soil healthy.', r: 'Many small creatures help gardens grow.', w: ['Ladybugs are red with black spots.', 'Worms live underground.', 'I like to plant flowers.'], why: 'The topic sentence must cover ALL three details: ladybugs, bees, and worms.' },
    { q: 'Which is the best topic sentence for these details?', show: 'Pharaohs ruled ancient Egypt. Scribes wrote with symbols called hieroglyphs. Farmers grew food near the Nile.', r: 'People in ancient Egypt had many different jobs.', w: ['Pharaohs were very rich.', 'The Nile is a long river.', 'Egypt is a hot country.'], why: 'Pharaoh, scribe, and farmer are all jobs, so the topic sentence is about jobs.' },
    { q: 'Which is the best closing sentence?', show: 'Our town library has thousands of books. It has a free computer lab. Every Saturday, there is a story time for kids.', r: 'Our library is a great place for everyone in town.', w: ['The library opens at nine.', 'I read a book about dogs.', 'Computers are fun.'], why: 'A closing sentence sums up the main idea in new words.' },
    { q: 'Which is the best opening for a story about a lost puppy?', r: '"Max! Where are you?" I shouted into the dark yard.', w: ['This story is about a puppy.', 'I have a puppy named Max.', 'Puppies are baby dogs.'], why: 'A strong opening pulls the reader right into the action.' },
    { q: 'Which sentence best supports this opinion? “Every kid should learn to swim.”', r: 'Knowing how to swim keeps kids safe near pools and lakes.', w: ['Some pools have slides.', 'My cousin has a blue swimsuit.', 'The ocean is very big.'], why: 'A good reason tells WHY the opinion is right.' },
    { q: 'Which is the best closing sentence?', show: 'Clouds form when water vapor cools. Rain falls when the drops get heavy. Then the water flows back to lakes and oceans.', r: 'Water keeps moving around and around in the water cycle.', w: ['Clouds are white.', 'I like rainy days.', 'Oceans have salty water.'], why: 'The closing sentence sums up all the steps: the water cycle.' }
  ]);
  add(G3.para.cloze, [
    { t: 'Making Lemonade', text: '{0}, squeeze the lemons into a pitcher. {1}, add water and sugar. {2}, stir it with a big spoon. {3}, pour it over ice and enjoy!', bank: ['First', 'Next', 'Then', 'Finally'], ans: [['First'], ['Next', 'Then'], ['Then', 'Next'], ['Finally']], why: 'First starts the steps and Finally ends them. Next and Then go in the middle.' },
    { t: 'Snow Day', text: 'We wanted to build a snowman, {0} the snow was too powdery. We waited an hour, {1} the sun came out and made the snow sticky. We rolled three big balls {2} our snowman would be tall.', bank: ['but', 'and', 'so', 'because'], ans: [['but'], ['and'], ['so']], why: 'but = a problem. and = one more thing happened. so = the result.' },
    { t: 'Why I Love Fall', text: 'I love fall for three reasons. {0}, the leaves turn red and orange. {1}, I get to jump in leaf piles. {2}, we bake apple pie. {3}, fall is the best season!', bank: ['First', 'Also', 'Last', 'In conclusion', 'Yesterday'], ans: [['First'], ['Also'], ['Last'], ['In conclusion']], why: 'First, Also, Last list the reasons. In conclusion starts the ending.' },
    { t: 'Desert Animals', text: 'Desert animals have special ways to stay cool. {0}, fennec foxes have huge ears that let out heat. {1}, many desert animals sleep during the hot day. {2}, they hunt at night when it is cooler.', bank: ['For example', 'Also', 'Then', 'However'], ans: [['For example'], ['Also'], ['Then']], why: 'For example gives an example. Also adds another idea. Then tells what happens next.' },
    { t: 'The Big Goal', text: 'I wanted to score a goal, {0} the goalie was really fast. I kicked the ball hard, {1} it zoomed into the corner of the net. Everyone cheered {2} we won the game!', bank: ['but', 'and', 'because', 'so'], ans: [['but'], ['and', 'so'], ['because']], why: 'but = a problem. and or so = what happened next. because = the reason everyone cheered.' },
    { t: 'Our Class Plant', text: 'Our class plant was drooping. {0}, we moved it next to the sunny window. {1}, we watered it every Monday. {2}, it grew three new leaves!', bank: ['First', 'Then', 'After two weeks', 'But'], ans: [['First'], ['Then'], ['After two weeks']], why: 'First and Then show the steps. After two weeks tells how much time passed.' }
  ]);
  add(G3.para.breaks, [
    { t: 'A Day at the Beach', s: ['Last summer, we drove to the beach.', 'The car ride took three hours.', 'When we got there, I ran straight to the water.', 'The waves were cold and splashy.', 'That night, we ate pizza on the hotel balcony.', 'It was the best day of the summer.'], br: [2, 4], why: 'New paragraph when the place changes (arriving at the beach) and when the time changes (that night).' },
    { t: 'Frogs and Toads', s: ['Frogs have smooth, wet skin.', 'They have long legs for jumping.', 'Toads are different.', 'Toads have bumpy, dry skin.', 'They walk or take small hops.'], br: [2], why: 'The topic changes from frogs to toads.' },
    { t: 'The Big Race', s: ['Mia and Leo lined up at the starting line.', '"Ready, set, go!" shouted the coach.', 'Mia ran as fast as she could.', '"Wait for me!" yelled Leo.'], br: [1, 2, 3], why: 'Start a new paragraph each time a different person speaks or acts.' },
    { t: 'Ancient Egypt', s: ['The Egyptians built huge pyramids.', 'Workers moved giant stone blocks.', 'The pyramids were tombs for pharaohs.', 'The Egyptians also invented a kind of paper.', 'They made it from a plant called papyrus.', 'They wrote on it with symbols called hieroglyphs.'], br: [3], why: 'The topic changes from pyramids to paper and writing.' },
    { t: 'Saturday Chores', s: ['On Saturday morning, I cleaned my room.', 'I put my toys in the bin.', 'In the afternoon, I helped Dad wash the car.', 'We sprayed each other with the hose!'], br: [2], why: 'The time changes: morning, then afternoon.' },
    { t: 'The Rain Forest', s: ['Rain forests are hot and wet.', 'It rains there almost every day.', 'Many animals live in the rain forest.', 'Monkeys swing from tree to tree.', 'Bright frogs hide under leaves.'], br: [2], why: 'The topic changes from the weather to the animals.' }
  ]);

  add(G3.fix, [
    { id: 'water3', t: 'Where Rain Comes From',
      clean: [['Have you ever wondered where rain comes from?', 'It is part of the water cycle.'],
        ['First, the sun warms the water in lakes and oceans.', 'The water turns into a gas called water vapor.', 'This is called evaporation.'],
        ['Next, the vapor rises and cools.', 'It forms tiny drops that make clouds.', 'When the drops get too heavy, they fall as rain or snow.'],
        ['The water flows back to the ocean, and the cycle starts again.', "I think it's amazing that the same water moves around and around!"]],
      messy: 'have you ever wondered where rain comes from. It is part of the water cycle First the sun warms the water in lakes and oceans. the water turns into a gas called water vapor. This is called evaporation Next, the vapor rises and cools. It forms tiny drops that make clouds. When the drops get to heavy, they fall as rain or snow. The water flows back to the ocean and the cycle starts again. i think its amazing that the same water moves around and around!',
      notes: ['Sentences and the word I start with capitals.', 'A question ends with a question mark. Every sentence needs an end mark.', "too = more than enough (too heavy). it's = it is.", 'New paragraphs: the question, step 1, step 2, the ending.'] },
    { id: 'egypt3', t: 'Food in Ancient Egypt',
      clean: [['Long ago, people in ancient Egypt lived near the Nile River.', 'The river gave them water for drinking and farming.'],
        ['Farmers grew wheat, onions, and beans.', 'They baked the wheat into flat bread.', 'Kids helped by carrying water and feeding the animals.'],
        ['On special days, families ate fish, figs, and honey cakes.', 'My favorite would be the honey cakes!']],
      messy: 'Long ago, people in ancient egypt lived near the nile river. The river gave them water for drinking and farming Farmers grew wheat onions, and beans. they baked the wheat into flat bread. Kids helped by carrying water and feeding the animals. On special days, families ate fish figs, and honey cakes. My favorite would be the honey cakes!',
      notes: ['Names of places get capitals: Egypt, Nile River.', 'Commas go between things in a list: wheat, onions, and beans.', 'Every sentence starts with a capital and ends with an end mark.', 'New paragraphs: the river, everyday food, special days.'] },
    { id: 'vote3', t: 'Our Class Vote',
      clean: [['On Monday, our class voted on a name for our fish.', 'Mrs. Green wrote three choices on the board.'],
        ['The choices were Bubbles, Captain, and Speedy.', 'Each student got one paper ballot.', 'We folded our ballots and put them in a box.'],
        ['Speedy won with twelve votes.', "Everyone clapped, even the kids who didn't pick it.", 'That is how voting works!']],
      messy: "on monday, our class voted on a name for our fish. mrs. green wrote three choices on the board The choices were bubbles, Captain and Speedy. Each student got one paper ballot. We folded our ballots and put them in a box. Speedy won with twelve votes. Everyone clapped, even the kids who didnt pick it. That is how voting works!",
      notes: ['Days, names, and titles like Mrs. get capitals. So do names like Bubbles.', 'Put a comma after each thing in a list except the last.', "didn't = did not, so it needs an apostrophe.", 'New paragraphs: the plan, how we voted, the result.'] },
    { id: 'map3', t: 'A Map of My Room',
      clean: [['Yesterday, I drew a map of my bedroom.', 'I used a ruler to make straight lines.'],
        ['My bed is on the north wall.', 'My desk is next to the window on the east side.', 'I added a compass rose so people know which way is north.'],
        ['Then I made a map key.', 'A blue square stands for my toy box, and a star shows my bookshelf.'],
        ['My mom said, "This is a great map!"', 'Now I want to draw a map of our whole house.']],
      messy: 'Yesterday I drew a map of my bedroom. i used a ruler to make straight lines. My bed is on the north wall. my desk is next to the window on the east side. I added a compass rose so people no which way is north Then I made a map key. A blue square stands for my toy box and a star shows my bookshelf. My mom said, This is a great map! Now I want to draw a map of our whole house.',
      notes: ['The word I and every sentence start get capitals.', 'know = understand; no = the opposite of yes.', 'Quotation marks go around the exact words Mom said.', 'New paragraphs: making it, what is on it, the key, what Mom said.'] }
  ]);

  /* ================================================================ Grade 5 */
  const G5 = D[5];
  add(G5.blanks.homo, [
    ['The team lost ___ first game.', 'its', ["it's", "its'"], 'its = belongs to it. It\'s = it is.'],
    ['I ate ___ much candy.', 'too', ['to', 'two'], 'too = more than enough.'],
    ['___ backpacks are in the hall.', 'Their', ['There', "They're"], 'Their = belongs to them.']
  ]);
  add(G5.blanks.verbs, [
    ['Neither of my brothers ___ to bed early.', 'goes', ['go', 'going'], 'Neither means not one of them, so it is singular: goes.'],
    ['Everyone in the class ___ a library card.', 'has', ['have', 'having'], 'Everyone is singular: has.'],
    ['The pack of wolves ___ through the snow.', 'runs', ['run', 'running'], 'The subject is pack (one group), not wolves: runs.'],
    ['My dog and my cat ___ best friends.', 'are', ['is', 'be'], 'Two subjects joined by and are plural: are.'],
    ['The box of crayons ___ on the shelf.', 'is', ['are', 'be'], 'The subject is box (one), not crayons: is.']
  ]);
  add(G5.blanks.poss, [
    ['All of the ___ uniforms were washed after the game.', "players'", ["player's", 'players'], "Many players own the uniforms: players'."],
    ['The ___ voices filled the gym.', "people's", ["peoples'", 'peoples'], "People is already plural, so add 's."],
    ['Both ___ tails were wagging.', "dogs'", ["dog's", 'dogs'], "Both means more than one dog: dogs'."],
    ['One ___ wing was hurt.', "bird's", ['birds', "birds'"], "One bird owns the wing: bird's."],
    ['The ___ team won the trophy.', "women's", ["womens'", 'womens'], "Women is already plural, so add 's."],
    ['Our ___ coach blew the whistle.', "team's", ['teams', "teams'"], "One team: team's."],
    ['All three ___ projects won ribbons.', "sisters'", ["sister's", 'sisters'], "Three sisters: sisters'."],
    ['The ___ library was quiet.', "school's", ['schools', "schools'"], "One school owns the library: school's."],
    ['The ___ teeth were sharp.', "wolves'", ["wolve's", "wolfs'"], "Wolves already ends in s, so add only an apostrophe."]
  ]);
  add(G5.blanks.trans, [
    ['The bridge was closed. ___, we took a different road.', 'As a result', ['For example', 'Similarly'], '“As a result” shows what happened because of it.'],
    ['Some animals hibernate. ___, bears sleep through most of the winter.', 'For example', ['However', 'Finally'], '“For example” introduces an example.'],
    ['I wanted to go swimming. ___, the pool was closed.', 'However', ['Therefore', 'For example'], '“However” shows a change or a problem.'],
    ['Mix the flour and sugar. ___, add the eggs.', 'Next', ['However', 'For example'], '“Next” shows the order of steps.'],
    ['Exercise makes your heart stronger. ___, it can improve your mood.', 'In addition', ['However', 'Instead'], '“In addition” adds one more idea.'],
    ['The Greeks loved theater. ___, the Romans enjoyed plays.', 'Similarly', ['However', 'Instead'], '“Similarly” shows two things are alike.'],
    ['Maya practiced piano every day. ___, she played perfectly at the recital.', 'As a result', ['Instead', 'For example'], '“As a result” shows the effect of all that practice.'],
    ['Dad cooked dinner. ___, I set the table.', 'Meanwhile', ['For example', 'Therefore'], '“Meanwhile” means at the same time.'],
    ['We did not take the bus. ___, we rode our bikes.', 'Instead', ['Therefore', 'For example'], '“Instead” shows one choice in place of another.']
  ]);
  add(G5.dialogue, [
    ['"I think," said Mia, "that we should leave now."', ['"I think" said Mia, "that we should leave now."', '"I think," said Mia, "That we should leave now."', '"I think," said Mia. "that we should leave now."'], 'When one sentence is split by the speaker tag, put a comma after each part and do not capitalize the second part.'],
    ['"Watch out!" Coach Diaz yelled.', ['"Watch out"! Coach Diaz yelled.', '"Watch out!" coach Diaz yelled.', '"Watch out!," Coach Diaz yelled.'], 'The exclamation point goes inside, with no comma after it. Coach is part of his name, so it is capitalized.'],
    ['Grandma asked, "Have you seen my glasses?"', ['Grandma asked, "Have you seen my glasses"?', 'Grandma asked "have you seen my glasses?"', 'Grandma asked, "Have you seen my glasses?".'], 'Comma after asked, a capital to start her words, and one question mark inside the closing mark.'],
    ['"The library closes at five," said Mr. Ortiz.', ['"The library closes at five." said Mr. Ortiz.', '"The library closes at five", said Mr. Ortiz.', 'The library closes at five, said Mr. Ortiz.'], 'A telling sentence followed by a speaker tag ends with a comma, inside the closing mark.'],
    ['Lena whispered, "Is anyone there?"', ['Lena whispered, "is anyone there?"', 'Lena whispered "Is anyone there"?', 'Lena whispered, "Is anyone there."'], 'Her words start with a capital, and the question mark stays inside.'],
    ['"Did you hear that?" asked Omar.', ['"Did you hear that?", asked Omar.', '"Did you hear that" asked Omar?', '"Did you hear that?" Asked Omar.'], 'The question mark goes inside the quotation marks, and no comma is added after it.']
  ]);
  add(G5.combine, [
    { a: 'The storm was loud.', b: 'The baby slept.', out: ['Although', 'the storm was loud,', 'the baby slept.'], x: ['Because', 'so'], why: '“Although” shows a surprise. A comma follows the opening part.' },
    { a: 'Ms. Patel is our principal.', b: 'Ms. Patel plays the violin.', out: ['Ms. Patel,', 'who is our principal,', 'plays the violin.'], x: ['which is our principal,', 'but'], why: '“who” adds information about a person. Commas go around the extra part.' },
    { a: 'We finished our project.', b: 'We celebrated with pizza.', out: ['After', 'we finished our project,', 'we celebrated with pizza.'], x: ['Although', 'but'], why: '“After” tells the time order. A comma follows the opening part.' },
    { a: 'I studied every night.', b: 'I passed the test.', out: ['I studied every night,', 'so', 'I passed the test.'], x: ['but', 'although'], why: '“so” shows a result. Put a comma before it.' },
    { a: 'The museum was closed.', b: 'We visited the park instead.', out: ['Because', 'the museum was closed,', 'we visited the park instead.'], x: ['Although', 'and'], why: '“Because” gives the reason. A comma follows the opening part.' },
    { a: 'The Romans built aqueducts.', b: 'The aqueducts carried fresh water to cities.', out: ['The Romans built aqueducts,', 'which carried fresh water to cities.'], x: ['who carried fresh water to cities.', 'because'], why: '“which” adds information about a thing; “who” is only for people.' },
    { a: 'I wanted to play outside.', b: 'It was raining.', out: ['I wanted to play outside,', 'but', 'it was raining.'], x: ['so', 'when'], why: '“but” shows a difference. Put a comma before it.' },
    { a: 'The sun set.', b: 'The bats flew out of the cave.', out: ['When', 'the sun set,', 'the bats flew out of the cave.'], x: ['Although', 'so'], why: '“When” tells the time. A comma follows the opening part.' }
  ]);
  add(G5.retype, [
    { wrong: 'my favorite book is holes by louis sachar', accept: ['My favorite book is Holes by Louis Sachar.'], why: "Capitalize the first word, the book title, and the author's name. End with a period." },
    { wrong: 'after school we went to the library', accept: ['After school, we went to the library.'], why: 'Capitalize the first word and put a comma after the opening phrase.' },
    { wrong: "its going to rain so bring you're umbrella", accept: ["It's going to rain, so bring your umbrella."], why: "It's = it is; your = belongs to you. Put a comma before so when it joins two sentences." },
    { wrong: 'did you finish your homework asked dad', accept: ['"Did you finish your homework?" asked Dad.'], why: 'Quotation marks around his words, the question mark inside, and Dad is capitalized because it is used as his name.' },
    { wrong: 'the dogs bowl is empty', accept: ["The dog's bowl is empty.", "The dogs' bowl is empty."], why: 'Add an apostrophe to show who owns the bowl.' },
    { wrong: 'we visited richmond virginia in july', accept: ['We visited Richmond, Virginia, in July.', 'We visited Richmond, Virginia in July.'], why: 'Capitalize the city, state, and month. A comma goes between the city and the state.' },
    { wrong: 'sam can you help me carry this', accept: ['Sam, can you help me carry this?'], why: 'A comma follows the name of the person you are talking to. A question ends with a question mark.' },
    { wrong: 'the team practiced hard they won the championship', accept: ['The team practiced hard, and they won the championship.', 'The team practiced hard. They won the championship.', 'The team practiced hard, so they won the championship.'], why: 'This is a run-on. Use a period, or a comma plus and or so.' },
    { wrong: 'each of the students have a laptop', accept: ['Each of the students has a laptop.'], why: 'Each is singular, so use has.' },
    { wrong: 'however the game was canceled because of rain', accept: ['However, the game was canceled because of rain.'], why: 'Capitalize the first word and put a comma after however.' }
  ]);

  add(G5.para.order, [
    { t: 'Three Branches', strips: ['The Constitution divides power among three branches of government.', 'First, the legislative branch, Congress, makes the laws.', 'Next, the executive branch, led by the President, carries out the laws.', 'Finally, the judicial branch, led by the Supreme Court, decides what the laws mean.', 'Because each branch can check the others, no single branch becomes too powerful.'], why: 'Topic sentence, three branches in order (First, Next, Finally), and a closing that explains why it matters.' },
    { t: 'Up the Mountain', strips: ['As the sun rose, my dad and I started up the trail.', 'At first, the path was wide and easy.', 'By midmorning, the trail turned steep and rocky, and my legs burned.', 'Just when I wanted to quit, we reached the top and saw the whole valley below.', 'Standing there, I realized the hardest climbs lead to the best views.'], why: 'Time clues (as the sun rose, at first, by midmorning) move the story. The last line is the lesson.' },
    { t: 'Democracy in Athens', strips: ['Ancient Athens was one of the first places to try democracy.', 'In Athens, citizens gathered in a large assembly to vote on laws.', 'However, not everyone could take part.', 'Women, enslaved people, and foreigners were not allowed to vote.', 'Even so, the idea of citizens choosing their laws still shapes governments today.'], why: 'Main idea, how it worked, the limit (However), the detail of the limit, and why it still matters.' },
    { t: 'Phones in Class', strips: ['Schools should not allow phones during class.', 'First, phones distract students from the lesson.', "For instance, one notification can pull a student's attention away for several minutes.", 'Second, putting phones away gives students more time to talk face to face.', 'Some argue that phones are needed for emergencies, but students can still use the office phone.', 'For these reasons, phones should stay in backpacks during class.'], why: 'Claim, reason 1 with its example, reason 2, the other side with an answer, conclusion.' },
    { t: 'How a Delta Forms', strips: ['A delta is new land built by a river.', 'First, a fast-moving river picks up sand, silt, and mud.', 'When the river reaches the ocean, it slows down.', 'As it slows, it drops the sediment it was carrying.', 'Over many years, the sediment piles up and forms a fan-shaped delta.'], why: 'A cause-and-effect chain: each step causes the next.' },
    { t: 'Forces on the Playground', strips: ['Forces are at work all over the playground.', 'When you push a swing, you apply a force that starts it moving.', 'The harder you push, the faster and higher the swing goes.', 'Then friction and air resistance slowly work against the swing until it stops.', 'Without these forces, recess would look very different.'], why: 'Topic sentence, how the force starts motion, how more force changes it, what stops it, and a closing.' },
    { t: 'The Lost Dog', strips: ['On Saturday morning, I found a muddy dog sitting on our porch.', 'He had no collar, so I gave him water and a blanket.', 'Then my mom helped me post his photo on our neighborhood website.', 'That evening, a girl named Ana knocked on our door, crying with relief.', 'Watching her hug him, I knew we had done the right thing.'], why: 'Time order (Saturday morning, then, that evening) and a closing reflection.' }
  ]);
  add(G5.para.odd, [
    { strips: ['The Bill of Rights protects important freedoms.', 'It guarantees freedom of speech and religion.', 'It protects the right to a fair trial.', 'George Washington was the first President.', 'It also protects people from unreasonable searches.'], bad: 3, why: 'Washington is true history, but it does not tell about the freedoms in the Bill of Rights.' },
    { strips: ['Weathering slowly breaks rocks into smaller pieces.', 'Ice can freeze in cracks and split rocks apart.', 'Plant roots can push into rocks and crack them.', 'Volcanoes erupt when magma rises to the surface.', 'Rain can slowly dissolve some kinds of rock.'], bad: 3, why: 'A volcano builds land; it is not an example of weathering breaking rock down.' },
    { strips: ['Roman roads helped the empire grow strong.', 'Soldiers could march quickly from city to city.', 'Traders used the roads to carry goods.', 'Romans enjoyed watching chariot races.', 'Messages traveled faster along the roads.'], bad: 3, why: 'Chariot races are Roman, but they do not show how roads made the empire strong.' },
    { strips: ['Smartphones have changed how people communicate.', 'Friends can send messages in seconds.', 'Families can video-chat across the world.', 'The first telephone was invented in 1876.', 'People can share photos instantly.'], bad: 3, why: 'The first telephone is history, not a way smartphones changed communication.' },
    { strips: ['Our school should start a garden.', 'A garden would teach us about plant life cycles.', 'Students could eat fresh vegetables at lunch.', 'Gardening would get kids outside and moving.', 'Tomatoes are actually a kind of fruit.'], bad: 4, why: 'A fun fact about tomatoes is not a reason the school should start a garden.' },
    { strips: ['Magnets have many uses in everyday life.', 'They hold notes on refrigerators.', 'They help motors spin in fans and cars.', "Earth's magnetic field helps some birds migrate.", 'They keep cabinet doors closed.'], bad: 3, why: 'Bird migration is about magnetism, but not about how people use magnets every day.' },
    { strips: ['Sound travels in waves.', 'When an object vibrates, it pushes on the air around it.', 'These vibrations move through the air to our ears.', 'Light travels much faster than sound.', 'Sound can also travel through water and solids.'], bad: 3, why: 'The speed of light is a different topic. The paragraph explains how sound travels.' }
  ]);
  add(G5.para.topic, [
    { q: 'Which is the best topic sentence for these details?', show: 'The Greeks built temples with tall marble columns. Greek writers created some of the first plays. Greek thinkers asked big questions about math and science.', r: 'Ancient Greece made lasting contributions to art, theater, and ideas.', w: ['Marble is a hard stone.', 'Plays are fun to watch.', 'Some Greek temples still stand today.'], why: 'The topic sentence must cover buildings, plays, AND thinking.' },
    { q: 'Which is the best closing sentence?', show: 'Congress makes the laws. The President carries them out. The courts decide what the laws mean.', r: 'Together, the three branches share power so that no one branch rules alone.', w: ['Congress meets in Washington, D.C.', 'The President lives in the White House.', 'There are nine Supreme Court justices.'], why: 'A closing sentence pulls the details together into the main idea.' },
    { q: 'Which is the strongest hook for an essay arguing for a longer lunch period?', r: 'Imagine trying to finish a whole meal in less time than it takes to tie your shoes twice.', w: ['This essay is about lunch.', 'Lunch is a meal.', 'I am going to tell you about lunch.'], why: 'A hook makes the reader picture the problem. Never announce “This essay is about...”' },
    { q: 'Which sentence best supports this claim? “Recycling programs help our town.”', r: "Last year, recycling kept 400 tons of trash out of our town's landfill.", w: ['Recycling bins are blue.', 'Some people forget to recycle.', 'Our town has a park.'], why: 'Strong support is a fact or number that proves the claim.' },
    { q: 'Which sentence best answers the other side in an essay arguing that kids should have chores?', r: 'Some say chores take time away from homework, but even fifteen minutes a day teaches responsibility.', w: ['Chores are boring.', 'Many kids have chores.', 'I do the dishes.'], why: 'A counterclaim names what the other side says, then answers it.' },
    { q: 'Which is the best topic sentence for these details?', show: 'Earthquakes can lift land and create mountains. Volcanoes build new islands. Rivers carve deep canyons.', r: "Many forces work together to change Earth's surface.", w: ['Volcanoes are dangerous.', 'Earthquakes happen often in California.', 'Canyons are deep.'], why: 'Earthquakes, volcanoes, and rivers all change the land, so the topic sentence must cover all three.' }
  ]);
  add(G5.para.cloze, [
    { t: 'Roman Builders', text: 'The Romans were skilled builders. {0}, they built aqueducts that carried water into cities. {1}, they invented a strong type of concrete. {2}, many Roman bridges are still standing. {3}, Roman ideas still shape how we build today.', bank: ['For example', 'In addition', 'As a result', 'Overall', 'However'], ans: [['For example'], ['In addition'], ['As a result'], ['Overall']], why: 'For example = an example. In addition = one more. As a result = an effect. Overall = the big idea.' },
    { t: 'Electricity Safety', text: 'Electricity is useful, {0} it can also be dangerous. {1}, never touch an outlet with wet hands. {2}, stay away from fallen power lines. {3}, following safety rules keeps everyone safe.', bank: ['but', 'For instance', 'Also', 'In conclusion', 'Because'], ans: [['but'], ['For instance'], ['Also'], ['In conclusion']], why: 'but = a contrast. For instance = an example. Also = one more. In conclusion = the ending.' },
    { t: 'The Storm', text: '{0} the storm hit, we brought our bikes inside. {1} the wind howled, we played board games by flashlight. {2}, the power came back on. {3}, we stepped outside to see branches everywhere.', bank: ['Before', 'While', 'Hours later', 'The next morning', 'However'], ans: [['Before'], ['While'], ['Hours later'], ['The next morning']], why: 'Time words move a story: before, while (at the same time), hours later, the next morning.' },
    { t: 'Tablets in Class', text: 'Tablets can help students learn. {0}, students can watch videos that explain hard ideas. {1}, teachers can see right away who needs help. {2}, some people worry about too much screen time. {3}, tablets should be used for short, focused lessons.', bank: ['For example', 'In addition', 'However', 'Therefore', 'Meanwhile'], ans: [['For example'], ['In addition'], ['However'], ['Therefore']], why: 'For example, In addition (one more reason), However (the other side), Therefore (the conclusion).' },
    { t: 'Sound and Light', text: 'Sound and light both travel in waves. {0}, light can travel through empty space, {1} sound cannot. {2}, astronauts on a spacewalk need radios to hear each other.', bank: ['However', 'while', 'As a result', 'For example'], ans: [['However'], ['while'], ['As a result']], why: 'However and while show the difference. As a result shows the effect.' },
    { t: 'Athens and Sparta', text: 'Athens and Sparta were both Greek city-states. {0}, they were very different. Athens valued art and learning. {1}, Sparta focused on training soldiers. {2}, the two cities joined together to fight Persia.', bank: ['However', 'In contrast', 'Even so', 'For example'], ans: [['However', 'In contrast'], ['In contrast', 'However'], ['Even so']], why: 'However and In contrast show differences. Even so means “in spite of that.”' }
  ]);
  add(G5.para.breaks, [
    { t: 'Writing the Constitution', s: ['The Constitutional Convention began in May 1787.', 'Delegates met in secret so they could speak freely.', 'By September, they had finished a final draft.', 'Thirty-nine delegates signed it.', 'Next, the states had to approve the new plan.', 'Some states demanded a list of rights first.'], br: [2, 4], why: 'New paragraphs when the time jumps (by September) and when the topic moves to the states approving it.' },
    { t: 'The Broken Vase', s: ['Jamal stared at the broken vase.', '"I didn\'t mean to," he whispered.', '"I know," said his grandmother gently.', 'She knelt down and picked up the pieces.', '"Let\'s fix it together," she said.'], br: [1, 2], why: 'A new paragraph for each new speaker. The grandmother keeps talking and acting, so she stays in one paragraph.' },
    { t: 'Mountains and Valleys', s: ['Mountains form in several ways.', "Some rise when two plates of Earth's crust push together.", 'Others are volcanoes built from cooled lava.', 'Valleys form in different ways.', 'Rivers can carve V-shaped valleys.', 'Glaciers scrape out wide U-shaped valleys.'], br: [3], why: 'The topic changes from mountains to valleys.' },
    { t: 'Rome', s: ['Rome began as a small village along the Tiber River.', 'Over hundreds of years, it grew into a powerful city.', 'Roman armies conquered land all around the Mediterranean Sea.', 'Life in the city of Rome was crowded and noisy.', 'Most people lived in tall apartment buildings.', 'Wealthy families lived in large homes with gardens.'], br: [3], why: 'The topic changes from how Rome grew to daily life in the city.' },
    { t: 'Game Day', s: ['Our soccer team practiced every Tuesday.', 'Coach made us run drills until our legs ached.', 'On game day, the bleachers were packed.', 'We scored in the first five minutes.', '"Keep it up!" Coach shouted from the sideline.'], br: [2, 4], why: 'New paragraph when the time changes (game day) and when someone speaks.' },
    { t: 'Bats', s: ['Many people think bats are scary.', 'In fact, bats are helpful animals.', 'A single bat can eat hundreds of insects in one night.', 'Bats also pollinate plants like bananas and agave.', 'Sadly, bat populations are shrinking.', 'Scientists are working to protect their caves.'], br: [4], why: 'The topic changes from how bats help to the danger they face.' }
  ]);

  add(G5.fix, [
    { id: 'const5', t: 'Writing the Rules of a Nation',
      clean: [['In 1787, leaders from twelve states met in Philadelphia.', 'Their goal was to fix a weak plan of government called the Articles of Confederation.'],
        ['The delegates argued for weeks about how many votes each state should get.', 'Large states wanted more power, but small states were afraid of being ignored.', 'Finally, they agreed on a compromise that created two houses of Congress.'],
        ['The new Constitution also split the government into three branches.', 'This system of checks and balances keeps any one branch from becoming too powerful.'],
        ['Today, the Constitution is the oldest written national constitution still in use.', "It's amazing that a document written so long ago still guides our country."]],
      messy: 'In 1787, leaders from twelve states met in philadelphia. There goal was to fix a weak plan of government called the articles of Confederation. The delegates argued for weeks about how many votes each state should get. large states wanted more power but small states were afraid of being ignored. Finally they agreed on a compromise that created two houses of congress. The new Constitution also split the government into three branches This system of checks and balances keeps any one branch from becoming to powerful. Today, the Constitution is the oldest written national constitution still in use. Its amazing that a document written so long ago still guides our country.',
      notes: ['Names of places, documents, and groups are capitalized: Philadelphia, Articles of Confederation, Congress.', 'Their / there, too / to, it\'s / its.', 'A comma goes after an opening word (Finally,) and before but when it joins two sentences.', 'New paragraphs: the meeting, the argument, the three branches, why it matters today.'] },
    { id: 'olymp5', t: 'The First Olympic Games',
      clean: [['The first Olympic Games were held in Olympia, Greece, in 776 BCE.', 'They honored Zeus, the king of the Greek gods.'],
        ['At first, there was only one event, a short footrace.', 'Over time, the Greeks added wrestling, boxing, and chariot racing.', 'Winners did not get gold medals.', 'Instead, they received crowns made of olive leaves.'],
        ['"Why did the games stop?" my brother asked.', 'I explained that a Roman emperor ended them more than a thousand years later.'],
        ['In 1896, the modern Olympics began in Athens.', 'Now athletes from around the world compete in them.']],
      messy: 'The first Olympic Games were held in olympia, Greece in 776 BCE. They honored Zeus the king of the Greek gods. At first there was only one event, a short footrace. Over time, the greeks added wrestling, boxing and chariot racing. Winners did not get gold medals. Instead they received crowns made of olive leaves. Why did the games stop? my brother asked. I explained that a roman emperor ended them more than a thousand years later. In 1896, the modern Olympics began in Athens. Now athletes from around the world compete in them.',
      notes: ['Places and peoples are capitalized: Olympia, Greeks, Roman.', 'Commas: around Greece and around “the king of the Greek gods,” after opening words, and in a list.', 'Spoken words need quotation marks, with the question mark inside.', 'New paragraphs: the beginning, how the games grew, the dialogue, modern times.'] },
    { id: 'river5', t: 'How Rivers Shape the Land',
      clean: [['The Grand Canyon is more than a mile deep in some places.', 'Believe it or not, a river carved most of it.'],
        ['Over millions of years, the Colorado River wore away layers of rock.', 'This process is called erosion.', 'The fast water carried sand and pebbles, which scraped the riverbed like sandpaper.'],
        ['Rivers can also build new land.', 'When a river slows down near the ocean, it drops its sand and mud.', 'Over time, this sediment forms a delta, like the one at the mouth of the Mississippi River.'],
        ['Weathering and erosion are slow, but they never stop.', 'The land we see today will look different thousands of years from now.']],
      messy: "The grand canyon is more than a mile deep in some places. Believe it or not a river carved most of it. Over millions of years the Colorado river wore away layers of rock. This process is called erosion The fast water carried sand and pebbles, which scraped the riverbed like sandpaper. Rivers can also build new land. When a river slows down near the ocean, it drops it's sand and mud. Over time, this sediment forms a delta, like the one at the mouth of the mississippi River. Weathering and erosion are slow but they never stop. The land we see today will look different thousands of years from now.",
      notes: ['Names of landforms and rivers are capitalized: Grand Canyon, Colorado River, Mississippi River.', 'its = belongs to it (its sand). it\'s = it is.', 'Commas go after opening phrases and before but when it joins two sentences.', 'New paragraphs: the hook, wearing land away, building land up, the conclusion.'] },
    { id: 'robot5', t: 'The Robot Science Fair',
      clean: [['My robot, Bolt, was finally ready for the science fair.', 'I had spent three weekends wiring its motors.'],
        ['"Does it actually work?" asked my friend Priya.', '"Watch this," I said, and I pressed the green button.'],
        ['Bolt rolled forward, turned left, and stopped right in front of the judges.', 'Then it beeped loudly and raised its arm to wave.'],
        ['The judges laughed and wrote something on their clipboards.', "I didn't win first place, but I learned that testing your work pays off."]],
      messy: "My robot Bolt was finally ready for the science fair. I had spent three weekends wiring it's motors. Does it actually work? asked my friend priya. Watch this I said, and I pressed the green button. Bolt rolled forward, turned left and stopped right in front of the judges. then it beeped loudly and raised its arm to wave. The judges laughed and wrote something on there clipboards. I didnt win first place but I learned that testing your work pays off.",
      notes: ['Commas go around a name that renames something (my robot, Bolt,) and before but.', 'its / it\'s, their / there, didn\'t needs an apostrophe.', 'Quotation marks hug the spoken words; a comma goes inside after “Watch this.”', 'New paragraphs: getting ready, the dialogue, the demo, the result.'] }
  ]);
})(window);
