/* Writer's Workshop content for Grade 3 and Grade 5.
   blanks: [sentence with ___, right, [wrong...], why]
   kinds:  [text, 'c' complete | 'f' fragment | 'r' run-on, how to fix it]
   dialogue: [right, [wrong...], why] */
(function (w) {
  const G3 = {
    label: 'Grade 3',
    sents: [
      'My friend Maya has a new puppy.',
      'We went to Burke Lake on Saturday.',
      'Did you see the full moon last night?',
      'Mr. Lopez reads to our class every Friday.',
      'In October, we picked pumpkins at the farm.',
      'My cousin lives in Texas.',
      'Can I borrow your blue marker?',
      'Dad and I baked banana bread.',
      'Our class visited the National Zoo in May.',
      'Watch out for that puddle!',
      'Grandma calls me every Sunday.',
      'Is Tuesday the day of the field trip?',
      'I think Virginia is a beautiful state.',
      'Ms. Carter gave Leo a gold star.',
      'Wow, that was the best game ever!',
      'My birthday is in July.',
      'Does Sam know how to swim?',
      'On Monday, Nora and I rode our bikes.',
      'The Potomac River is very wide.',
      'Hooray, we won the spelling bee!',
      'Where did Omar put the soccer ball?',
      'Last December, it snowed on my birthday.'
    ],
    commas: [
      'We packed apples, cheese, and crackers.',
      'My dog can sit, roll, and shake.',
      'I like red, blue, and green.',
      'Maya, Leo, and Sam built a fort.',
      'We saw lions, zebras, and giraffes at the zoo.',
      'Bring a pencil, an eraser, and a notebook.',
      'The soup has carrots, beans, and corn.',
      'She ran, jumped, and laughed.',
      'We moved to Fairfax, Virginia last year.',
      'My sister was born on May 4, 2019.',
      'I need socks, shoes, and a jacket.',
      'Frogs, turtles, and ducks live at the pond.'
    ],
    blanks: {
      apos: [
        ['The ___ tail is wagging.', "dog's", ['dogs', "dogs'"], "One dog owns the tail, so add 's."],
        ['I ___ find my shoe.', "can't", ['cant', "ca'nt"], "can't = can not. The apostrophe takes the place of the missing letters."],
        ['___ going to the park.', "We're", ['Were', "Wer'e"], "We're = We are."],
        ['That is ___ backpack.', "Maya's", ['Mayas', "Mayas'"], "The backpack belongs to Maya, so add 's."],
        ['She ___ like peas.', "doesn't", ['doesnt', "does'nt"], "doesn't = does not. The apostrophe goes where the o was."],
        ['___ raining outside.', "It's", ['Its', "Its'"], "It's = It is."],
        ['The ___ nest is in the tree.', "bird's", ['birds', "bird'"], "The nest belongs to one bird: bird's."],
        ['I ___ seen that movie.', "haven't", ['havent', "have'nt"], "haven't = have not."],
        ['My ___ bike is red.', "brother's", ['brothers', "brothers's"], "The bike belongs to my brother: brother's."],
        ['___ my best friend.', "She's", ['Shes', "Shes'"], "She's = She is."]
      ],
      verbs: [
        ['The dogs ___ loudly.', 'bark', ['barks', 'barking'], 'More than one dog: dogs bark.'],
        ['My sister ___ soccer.', 'plays', ['play', 'playing'], 'One sister: she plays.'],
        ['We ___ at the library yesterday.', 'were', ['was', 'is'], 'We were. (I was, we were.)'],
        ['He ___ his lunch every day.', 'brings', ['bring', 'bringing'], 'One person: he brings.'],
        ['The birds ___ south last fall.', 'flew', ['flied', 'fly'], 'Fly changes to flew in the past.'],
        ['Yesterday I ___ a letter.', 'wrote', ['writed', 'write'], 'Write changes to wrote in the past.'],
        ['The children ___ happy.', 'are', ['is', 'am'], 'More than one child: children are.'],
        ['She ___ to school yesterday.', 'ran', ['runned', 'run'], 'Run changes to ran in the past.'],
        ['Last night we ___ pizza.', 'ate', ['eated', 'eat'], 'Eat changes to ate in the past.'],
        ['My friends ___ coming over.', 'are', ['is', 'am'], 'More than one friend: friends are.']
      ],
      join: [
        ['I was hungry, ___ I ate a snack.', 'so', ['but', 'because'], '“So” tells what happened next because of it.'],
        ['I wore boots ___ it was snowing.', 'because', ['but', 'so'], '“Because” tells why.'],
        ['I like cats, ___ my brother likes dogs.', 'but', ['so', 'because'], '“But” shows two things that are different.'],
        ['The game was canceled ___ it rained.', 'because', ['but', 'so'], '“Because” tells why.'],
        ['It was late, ___ we went home.', 'so', ['but', 'because'], '“So” tells the result.'],
        ['I wanted to swim, ___ the pool was closed.', 'but', ['so', 'because'], '“But” shows a problem or a change.'],
        ['She smiled ___ she got a gift.', 'because', ['but', 'so'], '“Because” tells why.'],
        ['The puppy was tired, ___ it took a nap.', 'so', ['but', 'because'], '“So” tells the result.']
      ]
    },
    kinds: [
      ['The frog jumped into the pond.', 'c', 'It tells who (the frog) and what it did (jumped).'],
      ['My brother laughed.', 'c', 'Short, but it has a who and a what.'],
      ['We ate lunch outside.', 'c', 'It tells who (we) and what we did.'],
      ['Birds build nests in spring.', 'c', 'It tells who (birds) and what they do.'],
      ['She found a shiny coin.', 'c', 'It tells who and what happened.'],
      ['Ran to the bus stop.', 'f', 'Who ran? Fix: I ran to the bus stop.'],
      ['The tall tree in our yard.', 'f', 'What about the tree? Fix: The tall tree in our yard lost its leaves.'],
      ['Because it was raining.', 'f', 'What happened because of the rain? Fix: We stayed inside because it was raining.'],
      ['After the game.', 'f', 'What happened after the game? Fix: After the game, we got ice cream.'],
      ['My best friend and her dog.', 'f', 'What did they do? Fix: My best friend and her dog ran to the park.'],
      ['Jumping over the fence.', 'f', 'Who was jumping? Fix: The deer was jumping over the fence.']
    ],
    combine: [
      { a: 'I wore my coat.', b: 'It was cold.', out: ['I wore my coat', 'because', 'it was cold.'], x: ['but', 'so'], why: '“Because” tells why you wore the coat.' },
      { a: 'I was tired.', b: 'I went to bed early.', out: ['I was tired,', 'so', 'I went to bed early.'], x: ['but', 'because'], why: '“So” tells what happened as a result.' },
      { a: 'I like apples.', b: 'I do not like pears.', out: ['I like apples,', 'but', 'I do not like pears.'], x: ['so', 'because'], why: '“But” joins two ideas that are different.' },
      { a: 'The bell rang.', b: 'We lined up.', out: ['The bell rang,', 'so', 'we lined up.'], x: ['but', 'or'], why: '“So” tells the result.' },
      { a: 'Maya smiled.', b: 'She won the race.', out: ['Maya smiled', 'because', 'she won the race.'], x: ['but', 'so'], why: '“Because” tells why Maya smiled.' },
      { a: 'The dog is small.', b: 'The dog is loud.', out: ['The dog is small,', 'but', 'it is loud.'], x: ['so', 'because'], why: '“But” shows a surprise or a difference.' },
      { a: 'It started to rain.', b: 'We ran inside.', out: ['It started to rain,', 'so', 'we ran inside.'], x: ['but', 'or'], why: '“So” tells the result.' }
    ],
    dialogue: [
      ['"Where is my hat?" asked Ben.', ['"Where is my hat"? asked Ben.', 'Where is my hat? asked Ben.', '"Where is my hat? asked Ben."'], 'Quotation marks hug only the words Ben said. The question mark stays inside.'],
      ['Mom said, "Dinner is ready."', ['Mom said "Dinner is ready".', 'Mom said, "dinner is ready."', 'Mom said, Dinner is ready.'], 'Comma after said, capital letter to start the talking, period inside the marks.'],
      ['"I found it!" shouted Mia.', ['"I found it"! shouted Mia.', '"I found it!" Shouted Mia.', 'I found it! shouted Mia.'], 'The end mark stays inside the quotation marks, and “shouted” is not capitalized.'],
      ['"Let\'s go," said Dad.', ['"Let\'s go." said Dad.', '"Let\'s go", said Dad.', '"Let\'s go, said Dad."'], 'Use a comma inside the marks when the sentence keeps going with “said Dad.”'],
      ['Leo whispered, "Is anyone there?"', ['Leo whispered, "Is anyone there"?', 'Leo whispered "is anyone there?"', 'Leo whispered, Is anyone there?'], 'Comma after whispered, capital letter, and the question mark inside.']
    ],
    retype: [],
    para: {
      order: [
        { t: 'How to Plant a Seed', strips: ['Planting a seed is easy if you follow a few steps.', 'First, fill a small pot with soil.', 'Next, push the seed into the soil and cover it.', 'Then, water the soil a little every day.', 'Soon, a tiny green sprout will pop up!'], why: 'The topic sentence comes first. Time words (First, Next, Then, Soon) put the steps in order.' },
        { t: 'My Favorite Season', strips: ['Fall is my favorite season.', 'One reason is that the leaves turn bright red and gold.', 'Another reason is that I get to wear my cozy sweaters.', 'Best of all, my family picks apples together.', 'That is why I love fall the most.'], why: 'Opinion first, then reasons (One reason, Another reason, Best of all), then a closing sentence.' },
        { t: 'The Loose Tooth', strips: ['Last night, something exciting happened at dinner.', 'First, I bit into a crunchy apple.', 'Then, I felt my loose tooth pop out.', 'After that, I ran to show my mom.', 'In the end, I put the tooth under my pillow and smiled.'], why: 'A story goes in time order: beginning, middle, end.' },
        { t: 'Penguins', strips: ['Penguins are amazing birds.', 'To begin, they cannot fly, but they are fast swimmers.', 'Also, they have thick feathers that keep them warm.', 'Finally, penguin parents take turns caring for their eggs.', 'Penguins are truly special animals.'], why: 'Topic sentence, three facts with linking words, then a closing sentence.' }
      ],
      odd: [
        { strips: ['Dogs make great pets.', 'They love to play fetch.', 'They wag their tails when you come home.', 'My favorite color is green.', 'Dogs can even learn tricks.'], bad: 3, why: 'Every sentence must be about the topic: dogs as pets. A favorite color does not belong.' },
        { strips: ['Our school library is a wonderful place.', 'It has thousands of books.', 'The librarian helps us find stories we love.', 'Pizza is the best lunch.', 'There are soft chairs for reading.'], bad: 3, why: 'The paragraph is about the library. Lunch is a different topic.' },
        { strips: ['Bees are important insects.', 'They carry pollen from flower to flower.', 'My bike has a flat tire.', 'Bees also make honey.'], bad: 2, why: 'The bike sentence is not about bees.' },
        { strips: ['Winter is a fun season.', 'We build snowmen in the yard.', 'We drink hot cocoa by the window.', 'Sharks have many rows of teeth.', 'Sometimes school is closed for snow.'], bad: 3, why: 'Sharks have nothing to do with winter fun.' }
      ],
      topic: [
        { q: 'Which is the best topic sentence for these details?', show: 'They have long necks to reach tall trees. They have spots that help them hide. They can run very fast.', r: 'Giraffes have bodies that help them survive.', w: ['Giraffes have spots.', 'I saw a giraffe once.', 'Zebras have stripes.'], why: 'A topic sentence tells what ALL the details are about, not just one of them.' },
        { q: 'Which is the best topic sentence for these details?', show: 'First we set up the tent. Then we roasted marshmallows. At night we looked at the stars.', r: 'Our camping trip was full of fun.', w: ['Marshmallows are sweet.', 'Tents are hard to set up.', 'I like stars.'], why: 'The topic sentence covers the whole trip.' },
        { q: 'Which is the best topic sentence for these details?', show: 'You can borrow books for free. You can use the computers. You can join the summer reading club.', r: 'The public library has many things to offer.', w: ['Books are free.', 'Computers are fun.', 'Summer is hot.'], why: 'It names the topic (the library) and fits every detail.' },
        { q: 'Which is the best closing sentence?', show: 'I think soccer is the best sport. You get to run a lot. You play on a team with your friends.', r: 'That is why soccer is my favorite sport.', w: ['Also, soccer balls are round.', 'Basketball is fun too.', 'My shoes are blue.'], why: 'A closing sentence says the main idea again in new words. It does not add a new detail.' }
      ],
      cloze: [
        { t: 'My Morning', text: '{0}, I woke up and brushed my teeth. {1}, I ate a bowl of oatmeal. {2}, I packed my backpack. {3}, I walked to the bus stop.', bank: ['First', 'Next', 'Then', 'Finally'], ans: [['First'], ['Next', 'Then'], ['Then', 'Next'], ['Finally']], why: 'First starts, Finally ends. Next and Then go in the middle.' },
        { t: 'The Best Pet', text: 'I think dogs are the best pets. {0}, they are friendly. {1}, they can learn tricks. {2}, a dog is a great choice.', bank: ['First', 'Also', 'In conclusion', 'But'], ans: [['First'], ['Also'], ['In conclusion']], why: 'First gives reason one, Also adds another, In conclusion wraps it up.' },
        { t: 'Making Lemonade', text: '{0}, squeeze four lemons into a pitcher. {1}, add water and sugar. {2}, stir it all together. {3}, pour it over ice and enjoy!', bank: ['First', 'Next', 'After that', 'Last'], ans: [['First'], ['Next', 'After that'], ['After that', 'Next'], ['Last']], why: 'Steps need time words so the reader can follow along.' }
      ],
      breaks: [
        { t: 'Cats and Dogs', s: ['Cats are easy pets to care for.', 'They clean themselves.', 'They use a litter box.', 'Dogs need more work.', 'You must walk a dog every day.', 'Dogs also need baths.'], br: [3], why: 'The topic changes from cats to dogs, so a new paragraph starts there.' },
        { t: 'Beach Day', s: ['In the morning, we drove to the beach.', 'We found a spot near the water.', 'I built a sand castle.', 'After lunch, we looked for shells.', 'I found a pink one shaped like a fan.', 'That night, we watched the sunset.', 'It was the best day of summer.'], br: [3, 5], why: 'The time changes (after lunch, that night). A new time means a new paragraph.' }
      ]
    },
    fix: [
      {
        id: 'zoo', t: 'My Trip to the Zoo',
        clean: [
          ['Last Saturday, my family went to the zoo.', 'We got there early in the morning.', 'I wore my favorite hat.'],
          ['First, we saw the lions.', 'They were sleeping in the sun.', 'Then we watched the monkeys swing from ropes.', 'My brother laughed so hard!'],
          ['At the end of the day, I didn\'t want to leave.', 'The zoo is my favorite place.']
        ],
        messy: 'last saturday my family went to the zoo we got there early in the morning. i wore my favorite hat First, we saw the lions. they were sleeping in the sun Then we watched the monkeys swing from ropes. My brother laughed so hard At the end of the day, I didnt want to leave. the zoo is my favorite place',
        notes: ['Sentences, days of the week, and the word I start with capitals.', 'Every sentence needs an end mark.', 'didn\'t needs an apostrophe.', 'New paragraph when the time changes: getting there, seeing the animals, the end of the day.']
      },
      {
        id: 'cat', t: 'The Best Pet',
        clean: [
          ['I think a cat is the best pet.', 'Cats are soft, quiet, and funny.'],
          ['One reason is that cats are easy to care for.', 'They don\'t need walks.', 'Another reason is that cats love to cuddle.', 'My cat Luna sleeps on my bed every night.'],
          ['That is why I think everyone should have a cat.']
        ],
        messy: 'i think a cat is the best pet. Cats are soft quiet and funny. One reason is that cats are easy to care for they dont need walks. another reason is that cats love to cuddle. My cat luna sleeps on my bed every night That is why I think everyone should have a cat',
        notes: ['Commas go between things in a list: soft, quiet, and funny.', 'Names like Luna start with a capital.', 'New paragraphs: the opinion, the reasons, the closing.']
      }
    ],
    write: {
      narrative: {
        name: 'Personal Narrative', icon: '📖', blurb: 'A true story about one small moment in your life.',
        plan: [
          ['who', 'Who was there?', 'You and one or two others', 'Me, my family, my little brother Sam'],
          ['where', 'Where and when?', 'A place and a time', 'The beach, last summer'],
          ['first', 'What happened first?', 'How the moment began', 'We raced to the water'],
          ['next', 'What happened next?', 'The most exciting part', 'We built a sand castle and a wave knocked it down'],
          ['last', 'How did it end?', 'The last thing that happened', 'We built a bigger castle far from the waves'],
          ['feel', 'How did you feel?', 'A feeling or what you learned', 'Proud and happy']
        ],
        parts: [
          { id: 'begin', label: 'Beginning', tip: 'Tell who, where, and when. Start with a sentence that makes the reader curious.', starters: ['Last summer, ', 'One snowy morning, ', 'I will never forget the day ', 'It all started when '], model: 'Last summer, my family went to the beach for the very first time. I could not wait to see the ocean. My little brother Sam carried his red bucket the whole way.', plan: ['who', 'where'] },
          { id: 'middle', label: 'Middle', tip: 'Tell what happened in order. Use time words. Add details: what did you see, hear, or feel?', starters: ['First, ', 'Next, ', 'After that, ', 'Suddenly, '], model: 'First, we raced to the water. The waves were cold and tickled my toes. Next, Sam and I built a giant sand castle with three towers. Suddenly, a big wave rushed in and knocked it all down! We laughed so hard that we fell over.', plan: ['first', 'next'] },
          { id: 'end', label: 'End', tip: 'Tell how it ended. Then tell how you felt or what you learned.', starters: ['In the end, ', 'Finally, ', 'I felt ', 'I learned that '], model: 'In the end, we built an even bigger castle far from the waves. I felt proud and happy. I learned that the beach is the best place for a family day.', plan: ['last', 'feel'] }
        ],
        prompts: ['A time I felt proud', 'My best day ever', 'A time I tried something new', 'A time I helped someone', 'A surprise I will never forget', 'My first day of third grade'],
        trans: ['first', 'next', 'then', 'after that', 'suddenly', 'later', 'finally', 'in the end', 'last'],
        manual: ['My story is about ONE small moment.', 'I told who, where, and when.', 'I told things in the order they happened.', 'I added details (what I saw, heard, or felt).', 'I read it out loud and it makes sense.'],
        minParas: 3, minWords: 50
      },
      opinion: {
        name: 'Opinion', icon: '💬', blurb: 'Tell what you think and give reasons.',
        plan: [
          ['opinion', 'What do you think?', 'Your opinion in one sentence', 'Recess should be longer'],
          ['r1', 'Reason 1', 'Why? Start with because', 'Playing helps us pay attention'],
          ['e1', 'Example for reason 1', 'A time this was true', 'After recess I can sit still and listen'],
          ['r2', 'Reason 2', 'Another reason', 'We practice being good friends'],
          ['e2', 'Example for reason 2', 'A time this was true', 'We share and take turns'],
          ['close', 'Closing', 'Say your opinion again in new words', 'A longer recess makes the day better']
        ],
        parts: [
          { id: 'intro', label: 'My opinion', tip: 'Name the topic and tell exactly what you think.', starters: ['I think ', 'In my opinion, ', 'I believe ', 'The best '], model: 'I think recess should be longer at our school. Kids need more time to play.', plan: ['opinion'] },
          { id: 'reasons', label: 'My reasons', tip: 'Give at least two reasons. Use “because” and give an example for each reason.', starters: ['One reason is ', 'Another reason is ', 'For example, ', 'Also, '], model: 'One reason is that playing helps us pay attention in class. For example, after recess I can sit still and listen. Another reason is that recess is when we practice being good friends. We learn to share and take turns because we play together.', plan: ['r1', 'e1', 'r2', 'e2'] },
          { id: 'close', label: 'Closing', tip: 'Say your opinion again using new words.', starters: ['That is why ', 'For these reasons, ', 'In conclusion, '], model: 'For these reasons, I believe our school should have a longer recess. It would make every student\'s day better.', plan: ['close'] }
        ],
        prompts: ['The best pet', 'Should kids have homework?', 'The best season', 'The best book I have read', 'Should recess be longer?', 'The best food for lunch'],
        trans: ['one reason', 'another reason', 'for example', 'also', 'because', 'that is why', 'for these reasons', 'in conclusion', 'first'],
        manual: ['My first sentence tells my opinion.', 'I gave at least two reasons.', 'Each reason has an example or a “because”.', 'My closing says my opinion again.', 'I read it out loud and it makes sense.'],
        minParas: 3, minWords: 45, because: true
      },
      info: {
        name: 'All-About Report', icon: '🔎', blurb: 'Teach the reader facts about a topic you know.',
        plan: [
          ['topic', 'My topic', 'What will you teach about?', 'Honeybees and how they make honey'],
          ['f1', 'Fact 1', 'A fact and a detail', 'Bees collect nectar from flowers'],
          ['f2', 'Fact 2', 'A fact and a detail', 'They carry it to the hive in a special stomach'],
          ['f3', 'Fact 3', 'A fact and a detail', 'They fan it with their wings until it is thick'],
          ['close', 'Closing', 'A wow fact or a last thought', 'Thank a bee when you eat honey']
        ],
        parts: [
          { id: 'intro', label: 'Introduction', tip: 'Name your topic. Make the reader want to learn more.', starters: ['Did you know that ', 'Have you ever wondered ', 'Let me tell you about ', 'Many people do not know that '], model: 'Have you ever wondered how honeybees make honey? Honeybees are amazing insects.', plan: ['topic'] },
          { id: 'facts', label: 'Facts', tip: 'Give three facts. Explain each one with a detail.', starters: ['First, ', 'Also, ', 'Another fact is ', 'For example, '], model: 'First, honeybees fly from flower to flower to collect sweet nectar. Also, they carry the nectar back to the hive in a special stomach. Another fact is that bees fan the nectar with their wings until it turns into thick honey.', plan: ['f1', 'f2', 'f3'] },
          { id: 'close', label: 'Closing', tip: 'Wrap it up. Remind the reader what they learned.', starters: ['Now you know ', 'As you can see, ', 'In conclusion, '], model: 'As you can see, honeybees work hard to make honey. The next time you taste honey, you can thank a bee!', plan: ['close'] }
        ],
        prompts: ['An animal I know a lot about', 'How to take care of a pet', 'My favorite sport or game', 'A place I have visited', 'How to make my favorite snack', 'The moon or a planet'],
        trans: ['first', 'also', 'another fact', 'for example', 'next', 'finally', 'as you can see', 'in conclusion', 'now you know'],
        manual: ['My first sentence names my topic.', 'I gave three facts.', 'Each fact has a detail.', 'My closing wraps it up.', 'I read it out loud and it makes sense.'],
        minParas: 3, minWords: 45
      }
    }
  };

  const G5 = {
    label: 'Grade 5',
    sents: [
      'Last summer, my family drove to Shenandoah National Park.',
      'Dr. Patel explained how volcanoes form.',
      'Have you ever read a book by Roald Dahl?',
      'On Thursday, Coach Rivera moved practice to the gym.',
      'The Chesapeake Bay is the largest estuary in the United States.',
      'When I visited Richmond, I toured the Virginia State Capitol.',
      'Did Thomas Jefferson really design Monticello?',
      'In December, the Lincoln Memorial glows at night.',
      'My brother and I built a robot for the science fair in March.',
      'Aunt Rosa mailed a postcard from Mexico City.',
      'Is the Atlantic Ocean colder than the Pacific Ocean?',
      'Every Fourth of July, we watch fireworks over the Potomac River.',
      'My neighbor, Mrs. Nguyen, speaks English and Vietnamese.',
      'The Wright brothers first flew at Kitty Hawk, North Carolina.',
      'Next Friday, Principal Adams will visit our classroom.',
      'Grandpa and I watched the Washington Nationals play in April.',
      'Have you seen the Blue Ridge Mountains in October?',
      'My cousin Omar is learning Spanish at Colin Powell Elementary School.'
    ],
    commas: [
      'After the storm, the sky turned orange.',
      'Yes, I finished my project.',
      'Maya, can you pass the glue?',
      'First, measure the flour.',
      'The bus was late, so we missed the opening song.',
      'I wanted to play outside, but it started to rain.',
      'When the bell rang, everyone lined up.',
      'Before you leave, please push in your chair.',
      'We packed sandwiches, fruit, and water for the hike.',
      'Although he was tired, Omar finished the race.',
      'Well, that was a surprise.',
      'However, the second plan worked better.',
      'My sister, who is in second grade, loves frogs.',
      'If it snows tonight, school might open late.',
      'The puppy was tiny, fluffy, and very loud.',
      'We can walk to the park, or we can ride our bikes.'
    ],
    blanks: {
      homo: [
        ['The players grabbed ___ water bottles.', 'their', ['there', "they're"], 'their = belongs to them.'],
        ['___ going to be late for the bus.', "They're", ['Their', 'There'], "They're = They are."],
        ['Put the books over ___.', 'there', ['their', "they're"], 'there = a place.'],
        ['The dog wagged ___ tail.', 'its', ["it's", "its'"], 'its = belongs to it. No apostrophe.'],
        ['___ almost time for lunch.', "It's", ['Its', "Its'"], "It's = It is."],
        ['Is this ___ jacket?', 'your', ["you're", 'youre'], 'your = belongs to you.'],
        ['___ the fastest runner on the team.', "You're", ['Your', 'Youre'], "You're = You are."],
        ['I ate ___ much candy.', 'too', ['to', 'two'], 'too = more than enough (or also).'],
        ['My sister is taller ___ I am.', 'than', ['then', 'that'], 'than compares. then tells when.'],
        ['___ backpack is this?', 'Whose', ["Who's", 'Whos'], "Whose = belongs to whom. Who's = Who is."],
        ['We walked ___ the tunnel.', 'through', ['threw', 'thru'], 'through = in one side and out the other. threw = tossed.'],
        ['I could ___ the music from outside.', 'hear', ['here', 'heer'], 'hear = with your ears. here = a place.']
      ],
      verbs: [
        ['Each of the players ___ a water bottle.', 'has', ['have', 'having'], '“Each” means one at a time, so use has.'],
        ['The team ___ practicing right now.', 'is', ['are', 'be'], 'One team: the team is.'],
        ['My friends and I ___ building a fort.', 'are', ['is', 'am'], 'More than one person: we are.'],
        ['She has ___ three books this month.', 'written', ['wrote', 'writed'], 'After has, use written.'],
        ['He ___ the ball over the fence yesterday.', 'threw', ['throwed', 'through'], 'Past of throw is threw.'],
        ['I should ___ studied more.', 'have', ['of', 'had of'], 'It is “should have,” never “should of.”'],
        ['There ___ many reasons to recycle.', 'are', ['is', 'be'], 'Many reasons: there are.'],
        ['___ went to the store.', 'He and I', ['Me and him', 'Him and me'], 'Test it alone: “He went,” “I went.” So: He and I went.'],
        ['The box of crayons ___ on the shelf.', 'is', ['are', 'were'], 'The subject is the box (one thing), not the crayons.'],
        ['By the time we arrived, the movie had already ___.', 'begun', ['began', 'beginned'], 'After had, use begun.']
      ],
      poss: [
        ['All three ___ jackets were muddy.', "girls'", ["girl's", 'girls'], "More than one girl owns them: girls'."],
        ['The ___ toys were everywhere.', "children's", ["childrens'", 'childrens'], "Children is already plural, so add 's."],
        ['The ___ cover is torn.', "book's", ['books', "books'"], "One book: book's."],
        ['Both ___ engines were loud.', "trucks'", ["truck's", 'trucks'], "Two trucks: trucks'."],
        ['My ___ names are Luna and Max.', "dogs'", ["dog's", 'dogs'], "Two dogs own the names: dogs'."],
        ['The ___ locker room is down the hall.', "men's", ["mens'", 'mens'], "Men is already plural, so add 's."]
      ],
      trans: [
        ['I studied hard. ___, I earned an A.', 'As a result', ['However', 'For example'], '“As a result” shows what happened because of it.'],
        ['Dogs need exercise. ___, a daily walk keeps them healthy.', 'For example', ['However', 'In conclusion'], '“For example” introduces an example.'],
        ['I wanted to go outside. ___, it was raining.', 'However', ['For example', 'As a result'], '“However” shows a change or a problem.'],
        ['Recycling saves energy. ___, it keeps trash out of landfills.', 'In addition', ['However', 'In contrast'], '“In addition” adds another reason.'],
        ['___, I believe every school needs a garden.', 'In conclusion', ['For example', 'Meanwhile'], '“In conclusion” starts the last paragraph.'],
        ['Mia set the table. ___, her dad finished cooking.', 'Meanwhile', ['Therefore', 'For instance'], '“Meanwhile” means at the same time.']
      ]
    },
    kinds: [
      ['Although it was late, we kept reading.', 'c', 'It has a complete thought: we kept reading.'],
      ['The river flooded after three days of rain.', 'c', 'Subject (the river) and what it did (flooded).'],
      ['Because the bridge was closed, we took a different road.', 'c', 'The “because” part is attached to a complete thought.'],
      ['She smiled.', 'c', 'Short, but it has a subject and a verb.'],
      ['I love pizza it is my favorite food.', 'r', 'Two sentences run together. Fix: I love pizza. It is my favorite food.'],
      ['We went to the museum we saw dinosaur bones.', 'r', 'Fix: We went to the museum, and we saw dinosaur bones.'],
      ['The dog barked the cat ran away.', 'r', 'Fix: The dog barked, so the cat ran away.'],
      ['It was getting dark, we headed home.', 'r', 'A comma alone cannot join two sentences. Fix: It was getting dark, so we headed home.'],
      ['Maya plays the violin she practices every day.', 'r', 'Fix: Maya plays the violin. She practices every day.'],
      ['I finished my homework then I played outside.', 'r', 'Fix: I finished my homework. Then I played outside.'],
      ['When the bell finally rang.', 'f', 'What happened then? Fix: When the bell finally rang, we cheered.'],
      ['Although she studied all night.', 'f', 'It leaves you waiting. Fix: Although she studied all night, she still felt nervous.'],
      ['The scientist who discovered the cure.', 'f', 'What about the scientist? Fix: The scientist who discovered the cure won a prize.'],
      ['Such as apples and pears.', 'f', 'Attach it to a sentence: I like fruit, such as apples and pears.'],
      ['Running through the hallway after lunch.', 'f', 'Who was running? Fix: Two boys were running through the hallway after lunch.']
    ],
    combine: [
      { a: 'The bell rang.', b: 'Everyone rushed outside.', out: ['When', 'the bell rang,', 'everyone rushed outside.'], x: ['Although', 'but'], why: '“When” tells the time. A comma follows the opening part.' },
      { a: 'My uncle is a pilot.', b: 'He has visited thirty countries.', out: ['My uncle,', 'who is a pilot,', 'has visited thirty countries.'], x: ['which is a pilot,', 'he'], why: 'Use “who” for people. Commas go around the extra information.' },
      { a: 'We planted the seeds.', b: 'We watered them every day.', out: ['After', 'we planted the seeds,', 'we watered them every day.'], x: ['Although', 'but'], why: '“After” shows the order of events.' },
      { a: 'The trail was steep.', b: 'The view was worth it.', out: ['The trail was steep,', 'but', 'the view was worth it.'], x: ['so', 'because'], why: 'A comma and “but” join two complete sentences that contrast.' },
      { a: 'It rained all night.', b: 'The field was too muddy to play on.', out: ['Because', 'it rained all night,', 'the field was too muddy to play on.'], x: ['Although', 'but'], why: '“Because” gives the cause.' },
      { a: 'The museum was crowded.', b: 'We still saw every exhibit.', out: ['Even though', 'the museum was crowded,', 'we still saw every exhibit.'], x: ['Because', 'so'], why: '“Even though” shows that the second part is a surprise.' },
      { a: 'The game was close.', b: 'We never gave up.', out: ['Although', 'the game was close,', 'we never gave up.'], x: ['Unless', 'or'], why: '“Although” connects two ideas that contrast.' }
    ],
    dialogue: [
      ['"Where is my hat?" asked Ben.', ['"Where is my hat"? asked Ben.', 'Where is my hat? asked Ben.', '"Where is my hat?" Asked Ben.'], 'The question mark stays inside, and the speaker tag is not capitalized.'],
      ['Mom said, "Dinner is ready."', ['Mom said "Dinner is ready".', 'Mom said, "dinner is ready."', 'Mom said, Dinner is ready.'], 'Comma after the tag, capital to start the quote, period inside.'],
      ['"Let\'s go," said Dad.', ['"Let\'s go." said Dad.', '"Let\'s go", said Dad.', '"Let\'s go, said Dad."'], 'A comma (inside the marks) replaces the period when a tag follows.'],
      ['"If we hurry," said Ana, "we can catch the bus."', ['"If we hurry," said Ana, "We can catch the bus."', '"If we hurry" said Ana "we can catch the bus."', '"If we hurry, said Ana, we can catch the bus."'], 'When one sentence is split by the tag, the second half starts with a small letter.'],
      ['"Watch out!" yelled the coach.', ['"Watch out"! yelled the coach.', '"Watch out!" Yelled the coach.', '"Watch out!", yelled the coach.'], 'The exclamation point is inside. No extra comma. The tag is lowercase.'],
      ['Leo whispered, "Is anyone there?"', ['Leo whispered, "Is anyone there"?', 'Leo whispered "is anyone there?"', 'Leo whispered, Is anyone there?'], 'Comma after whispered, capital letter, question mark inside.']
    ],
    retype: [
      { wrong: 'I can\'t wait for the trip said Omar.', accept: ['"I can\'t wait for the trip," said Omar.', '"I can\'t wait for the trip!" said Omar.'], why: 'Put quotation marks around Omar\'s words and a comma (or !) inside before the tag.' },
      { wrong: 'ms. lee asked who wants to go first', accept: ['Ms. Lee asked, "Who wants to go first?"'], why: 'Capitalize the name, add a comma after asked, and put the question inside quotation marks.' },
      { wrong: 'we went to the store we bought milk eggs and bread', accept: ['We went to the store. We bought milk, eggs, and bread.', 'We went to the store, and we bought milk, eggs, and bread.'], why: 'Split the run-on (or join it with a comma and “and”), and put commas in the list.' },
      { wrong: 'their going to there grandmas house on friday', accept: ["They're going to their grandma's house on Friday."], why: "They're = they are, their = belongs to them, grandma's shows ownership, and Friday is a proper noun." },
      { wrong: 'after the game we got ice cream', accept: ['After the game, we got ice cream.'], why: 'Capital to start, comma after the opening phrase, period at the end.' }
    ],
    para: {
      order: [
        { t: 'A Longer Recess', strips: ['Students at our school should have a longer recess.', 'To begin with, exercise helps our brains focus in class.', 'For example, after running around, I can sit still and listen better.', 'In addition, recess gives us time to practice solving problems with friends.', 'Some people worry that we would lose learning time, but focused students actually learn faster.', 'For these reasons, a longer recess would help everyone.'], why: 'Claim, first reason, its example, a second reason, an answer to the other side, then the conclusion.' },
        { t: 'The Water Cycle', strips: ['Water on Earth is always moving through the water cycle.', 'First, the sun heats water in oceans and lakes, and it evaporates into the air.', 'Next, the water vapor cools and condenses into clouds.', 'When the clouds become heavy, the water falls as rain or snow.', 'Finally, the water collects in rivers and oceans, and the cycle begins again.'], why: 'A topic sentence, then the steps in order, each step linked to the one before.' },
        { t: 'The Talent Show', strips: ['My heart pounded as I stepped onto the stage for the talent show.', 'At first, my fingers froze above the piano keys.', 'Then I spotted my grandmother smiling in the front row.', 'I took a deep breath and began to play.', 'By the last note, the whole audience was clapping.', 'That night, I learned that being brave means trying even when you are scared.'], why: 'A hook, the problem, the turning point, the action, the result, and a reflection.' }
      ],
      odd: [
        { strips: ['Recycling helps protect our planet.', 'It reduces the amount of trash in landfills.', 'It saves energy because making new materials takes more power.', 'My neighbor drives a blue recycling truck.', 'Recycling also protects forests because fewer trees are cut down.'], bad: 3, why: 'The truck is about recycling, but it does not support the main idea: how recycling helps the planet.' },
        { strips: ['The Wright brothers changed the world with their invention.', 'In 1903, they flew the first powered airplane at Kitty Hawk.', 'Their first flight lasted only twelve seconds.', 'Kitty Hawk has beautiful beaches for swimming.', 'Today, airplanes carry millions of people every day.'], bad: 3, why: 'Beaches at Kitty Hawk are off topic. Every detail should support the invention of the airplane.' },
        { strips: ['Sleep is important for students.', 'It helps the brain store what we learned.', 'Kids who sleep enough pay better attention.', 'Some animals, like bats, sleep upside down.', 'Without sleep, even simple math feels hard.'], bad: 3, why: 'The bat fact is interesting but does not support why students need sleep.' }
      ],
      topic: [
        { q: 'Which is the best topic sentence for these details?', show: 'Honeybees pollinate about one third of the food we eat. Without them, crops like apples and almonds would be scarce. Scientists are working to protect bee habitats.', r: 'Honeybees play a vital role in our food supply.', w: ['Honeybees can sting.', 'Almonds are a healthy snack.', 'Scientists study many insects.'], why: 'The topic sentence must cover every detail, not just one.' },
        { q: 'Which is the best closing sentence?', show: 'School uniforms would save families money. They would also make mornings faster. Finally, students could focus on learning instead of clothes.', r: 'For these reasons, our school should adopt uniforms.', w: ['Uniforms come in many colors.', 'Also, uniforms are easy to wash.', 'Some schools have uniforms.'], why: 'A conclusion restates the claim. It does not add a new reason or a random fact.' },
        { q: 'Which is the strongest opening for a story about a storm?', show: '', r: 'Thunder shook the windows as the lights flickered and died.', w: ['This story is about a storm.', 'One day there was a storm.', 'I am going to tell you about a storm.'], why: 'A strong lead drops the reader into the action instead of announcing the topic.' },
        { q: 'Which sentence best supports this claim? “Every student should learn to cook.”', show: '', r: 'Cooking teaches fractions and measuring, which are real-life math skills.', w: ['My uncle is a chef in Richmond.', 'Pizza is the most popular food.', 'Some kitchens have two ovens.'], why: 'Evidence must give a reason the claim is true.' }
      ],
      cloze: [
        { t: 'Sharks', text: 'Many people think sharks are dangerous. {0}, most sharks never harm humans. {1}, the whale shark eats only tiny plankton. {2}, sharks keep oceans healthy by eating sick fish. {3}, we should protect sharks instead of fearing them.', bank: ['However', 'For example', 'In addition', 'Therefore', 'Meanwhile'], ans: [['However'], ['For example'], ['In addition'], ['Therefore']], why: 'However = contrast. For example = an example. In addition = one more reason. Therefore = so, as a result.' },
        { t: 'The Storm', text: '{0}, the sky was clear and blue. {1}, dark clouds rolled in from the west. {2} the first drops fell, we sprinted for the car. {3}, we were soaked but laughing.', bank: ['At first', 'Suddenly', 'As soon as', 'In the end', 'For example'], ans: [['At first'], ['Suddenly'], ['As soon as'], ['In the end']], why: 'Narrative transitions show when things happen.' }
      ],
      breaks: [
        { t: 'The Science Fair', s: ['I had waited all year for the science fair.', 'My volcano model sat ready on the table.', 'I checked the baking soda one more time.', 'The next morning, the gym buzzed with voices.', 'Judges walked slowly from table to table.', '"Tell me about your project," said a judge with a clipboard.', '"It shows how pressure builds inside a volcano," I answered.'], br: [3, 5, 6], why: 'New paragraph when the time changes (the next morning) and every time a new person speaks.' },
        { t: 'Sea Turtles', s: ['Sea turtles are ancient reptiles.', 'They have lived in the oceans for millions of years.', 'Sea turtles eat different foods depending on the species.', 'Green turtles munch on sea grass.', 'Leatherbacks prefer jellyfish.', 'Today, sea turtles face many dangers.', 'Plastic bags can look like jellyfish to a hungry turtle.'], br: [2, 5], why: 'Each paragraph has one main idea: what they are, what they eat, what threatens them.' }
      ]
    },
    fix: [
      {
        id: 'game', t: 'The Championship Game',
        clean: [
          ['The gym was so loud that I could barely hear my own thoughts.', 'It was the championship game, and our team was down by one point.', 'There were only ten seconds left on the clock.'],
          ['"Pass it to Jordan!" shouted Coach Rivera.', 'My hands were shaking, but I caught the ball anyway.', 'I dribbled past two defenders and looked at the basket.'],
          ['Then I took the shot.', 'The ball spun through the air, bounced off the rim, and dropped through the net.', 'Their fans went silent, and ours exploded with cheers.'],
          ['That night, I learned that it\'s okay to be nervous.', 'What matters is that you try anyway.']
        ],
        messy: 'The gym was so loud that I could barely here my own thoughts. it was the championship game and our team was down by one point there were only ten seconds left on the clock. Pass it to Jordan! shouted coach Rivera. My hands were shaking but I caught the ball anyway. I dribbled passed two defenders and looked at the basket Then I took the shot. The ball spun threw the air bounced off the rim and dropped through the net. There fans went silent, and ours exploded with cheers. That night I learned that its okay to be nervous. what matters is that you try anyway',
        notes: ['hear / here, past / passed, through / threw, their / there, it\'s / its.', 'A comma goes before and / but when they join two complete sentences.', 'Spoken words need quotation marks. Titles used with a name (Coach Rivera) are capitalized.', 'New paragraphs: setting the scene, the dialogue, the big moment, the reflection.']
      },
      {
        id: 'leaves', t: 'Why Leaves Change Color',
        clean: [
          ['Every autumn, the trees in Virginia put on a colorful show.', 'Have you ever wondered why leaves change color?'],
          ['During spring and summer, leaves are full of chlorophyll.', 'This green chemical helps trees make food from sunlight.', 'Because there is so much of it, the green hides the other colors.'],
          ['When fall arrives, the days get shorter and cooler.', 'Trees stop making chlorophyll, so the green fades away.', 'Then the yellow, orange, and red colors finally appear.'],
          ['The next time you see a bright red maple, you\'ll know the science behind its beauty.']
        ],
        messy: 'Every autumn the trees in virginia put on a colorful show. have you ever wondered why leaves change color. During spring and summer, leaves are full of chlorophyll this green chemical helps trees make food from sunlight. Because their is so much of it the green hides the other colors. When fall arrives, the days get shorter and cooler Trees stop making chlorophyll so the green fades away. Then the yellow orange and red colors finally appear. The next time you see a bright red maple youll know the science behind it\'s beauty',
        notes: ['A comma follows an opening phrase or clause (Every autumn, … Because there is so much of it, …).', 'A question ends with a question mark.', 'there / their and its / it\'s.', 'New paragraphs: the hook, summer leaves, fall changes, the conclusion.']
      }
    ],
    write: {
      narrative: {
        name: 'Personal Narrative', icon: '📖', blurb: 'A true story about one important moment, told so the reader feels it.',
        plan: [
          ['moment', 'The ONE moment', 'Small and specific, not a whole day', 'Jumping off the high dive for the first time'],
          ['setting', 'Where and when?', 'Place, time, who is there', 'The pool, last day of swim camp, my cousin Maya'],
          ['problem', 'The problem or worry', 'What made it hard?', 'I was scared of the height'],
          ['events', 'What happened, in order', '2 or 3 quick events', 'Climbed the ladder, froze, Maya cheered'],
          ['climax', 'The big moment', 'The most important second', 'I stepped off the edge'],
          ['lesson', 'How it ended and what you learned', 'A feeling or a lesson', 'Fear shrinks when you face it']
        ],
        parts: [
          { id: 'lead', label: 'Lead', tip: 'Hook the reader with action, dialogue, or a vivid detail. Then show where you are and who is there.', starters: ['My heart pounded as ', 'The moment I ', 'Nobody expected ', '"Are you sure about this?" '], model: 'My heart pounded as I climbed the ladder to the high dive. Below me, the pool looked as small as a postage stamp. It was the last day of swim camp, and I had promised my cousin Maya that I would finally jump.', plan: ['moment', 'setting'] },
          { id: 'build', label: 'Build-up', tip: 'Tell the events in order. Show, don\'t tell: use actions, thoughts, and dialogue. Start a new line when someone speaks.', starters: ['At first, ', 'A few minutes later, ', 'Just then, ', 'Without thinking, '], model: 'At first, my legs refused to move. I gripped the cold metal rail and stared at the water.\n"You can do it!" Maya shouted from the deck.\nI was not so sure. A line of kids waited behind me, and my face burned.', plan: ['problem', 'events'] },
          { id: 'climax', label: 'The big moment', tip: 'Slow down. This is the most important part, so stretch it out with details and feelings.', starters: ['Finally, ', 'In that instant, ', 'I took a deep breath and ', 'Time seemed to '], model: 'I took a deep breath and counted to three. Then I stepped off the edge. For one second, I was flying. The water rushed up, and I crashed through the surface with a giant splash. When I came up, everyone was cheering.', plan: ['climax'] },
          { id: 'ending', label: 'Ending', tip: 'End with a thought, a feeling, or a lesson. How did this moment change you?', starters: ['Looking back, ', 'From that day on, ', 'I realized that ', 'Now I know '], model: 'Looking back, the jump lasted only a second, but the feeling has stayed with me. I realized that fear shrinks when you face it. Now, whenever something scares me, I remember the high dive.', plan: ['lesson'] }
        ],
        prompts: ['A time I faced a fear', 'A moment I am proud of', 'A time something went wrong', 'A time I learned a lesson the hard way', 'An adventure with a friend or family member', 'A time I had to make a hard choice'],
        trans: ['at first', 'then', 'a few minutes later', 'just then', 'suddenly', 'meanwhile', 'finally', 'after that', 'looking back', 'from that day on', 'when', 'as soon as'],
        manual: ['My story is about ONE moment, not a whole day.', 'My lead hooks the reader.', 'I showed feelings with actions, thoughts, or dialogue.', 'The big moment is the longest, most detailed part.', 'My ending tells what I learned or how I changed.', 'I read it out loud and fixed anything that sounded wrong.'],
        minParas: 4, minWords: 150
      },
      opinion: {
        name: 'Opinion / Persuasive', icon: '💬', blurb: 'Make a claim and convince the reader with reasons and evidence.',
        plan: [
          ['claim', 'My claim', 'What should happen? One clear sentence', 'Our school should have a longer recess'],
          ['r1', 'Reason 1 and evidence', 'A reason plus a fact or example', 'Exercise helps focus; I finish math faster after recess'],
          ['r2', 'Reason 2 and evidence', 'A different reason plus an example', 'Recess teaches teamwork and solving arguments'],
          ['counter', 'What might someone who disagrees say?', 'And how would you answer?', 'Less learning time; but social skills are learning too'],
          ['action', 'Call to action', 'What do you want the reader to do?', 'Principal should add ten minutes']
        ],
        parts: [
          { id: 'intro', label: 'Introduction', tip: 'Hook the reader, give a little background, then state your claim clearly.', starters: ['Imagine ', 'Have you ever ', 'Every student deserves ', 'I strongly believe that '], model: 'Imagine sitting through a whole afternoon of class with no break at all. At many schools, recess lasts only fifteen minutes. I strongly believe that our school should give students a longer recess every day.', plan: ['claim'] },
          { id: 'r1', label: 'Reason 1', tip: 'Start with a topic sentence that gives your first reason. Support it with a fact, an example, or an explanation.', starters: ['To begin with, ', 'The most important reason is ', 'For example, ', 'This shows that '], model: 'To begin with, exercise helps students focus. After running and playing, the brain is ready to learn again. For example, I always finish my math faster after recess than before it. This shows that play time is not wasted time.', plan: ['r1'] },
          { id: 'r2', label: 'Reason 2', tip: 'Give a different reason. You can also answer what someone who disagrees might say.', starters: ['In addition, ', 'Another reason is ', 'Some people might say ', 'As a result, '], model: 'In addition, recess teaches skills that we cannot learn at a desk. On the playground, we practice teamwork, solve arguments, and include others. Some people might say a longer recess takes time away from learning, but these social skills are a kind of learning too.', plan: ['r2', 'counter'] },
          { id: 'concl', label: 'Conclusion', tip: 'Restate your claim in new words, sum up your reasons, and end with a call to action.', starters: ['For these reasons, ', 'In conclusion, ', 'Clearly, ', 'I urge '], model: 'For these reasons, a longer recess would make our school better. Students would be healthier, more focused, and kinder to one another. I urge our principal to add ten more minutes of recess to every school day.', plan: ['action'] }
        ],
        prompts: ['Should students have a longer recess?', 'Should kids get an allowance for chores?', 'Should schools require uniforms?', 'What is the best book for a fifth grader to read?', 'Should every class have a pet?', 'Should homework be optional on weekends?'],
        trans: ['to begin with', 'for example', 'in addition', 'another reason', 'as a result', 'however', 'therefore', 'this shows', 'for these reasons', 'in conclusion', 'some people', 'because'],
        manual: ['My introduction ends with a clear claim.', 'Each body paragraph starts with a topic sentence.', 'Every reason has evidence or an example.', 'I answered what someone who disagrees might say.', 'My conclusion restates the claim and asks for action.', 'I read it out loud and fixed anything that sounded wrong.'],
        minParas: 4, minWords: 150, because: true
      },
      info: {
        name: 'Informational Report', icon: '🔎', blurb: 'Explain a topic clearly with facts, details, and special words.',
        plan: [
          ['topic', 'My topic', 'Narrow enough to cover well', 'How trees grow and why they matter'],
          ['hook', 'Hook', 'A question or surprising fact', 'How does a tiny seed become a towering oak?'],
          ['s1', 'Subtopic 1 and facts', 'One main idea plus 2 or 3 facts', 'Stages: seed, roots, sapling, rings'],
          ['s2', 'Subtopic 2 and facts', 'A second main idea plus facts', 'Trees help: oxygen, homes for animals'],
          ['close', 'Conclusion', 'Why does this matter?', 'A tree is more than wood and leaves']
        ],
        parts: [
          { id: 'intro', label: 'Introduction', tip: 'Hook the reader, then tell what the report will explain.', starters: ['Have you ever wondered ', 'Most people do not know that ', 'Deep in ', 'This report explains '], model: 'Have you ever wondered how a tiny seed becomes a towering oak tree? The life of a tree is a slow and amazing journey. This report explains how trees grow and why they matter to every living thing.', plan: ['topic', 'hook'] },
          { id: 's1', label: 'Subtopic 1', tip: 'Topic sentence first. Then facts, definitions, and details. Explain any special words.', starters: ['First of all, ', 'One important fact is ', 'This means that ', 'For instance, '], model: 'First of all, trees grow in stages. A seed sprouts roots that pull water from the soil. Then a thin young tree called a sapling pushes toward the light. Each year, the trunk adds a new ring of wood, which means you can count the rings to learn a tree\'s age.', plan: ['s1'] },
          { id: 's2', label: 'Subtopic 2', tip: 'A new main idea gets a new paragraph. Link it to the one before.', starters: ['In addition, ', 'Another important fact is ', 'As a result, ', 'Scientists have found that '], model: 'In addition, trees help the whole planet. Their leaves take in carbon dioxide and release the oxygen we breathe. Trees also give homes to birds, squirrels, and insects. As a result, a single oak can support hundreds of living things.', plan: ['s2'] },
          { id: 'concl', label: 'Conclusion', tip: 'Sum up the main ideas and leave the reader with something to think about.', starters: ['In conclusion, ', 'As you can see, ', 'The next time you ', 'Clearly, '], model: 'As you can see, a tree is much more than wood and leaves. It grows patiently for decades and gives life to everything around it. The next time you walk past an oak, look up and remember the tiny seed it once was.', plan: ['close'] }
        ],
        prompts: ['An animal and how it survives', 'How something works (a volcano, a tornado, the water cycle)', 'A person from history I admire', 'A sport or hobby I know well', 'A place in Virginia worth visiting', 'An invention that changed the world'],
        trans: ['first of all', 'for instance', 'for example', 'in addition', 'another', 'as a result', 'this means', 'also', 'in conclusion', 'as you can see', 'however', 'then'],
        manual: ['My introduction tells what the report explains.', 'Each paragraph has ONE main idea and a topic sentence.', 'I used facts and details, not opinions.', 'I explained any special words.', 'My conclusion sums up the main ideas.', 'I read it out loud and fixed anything that sounded wrong.'],
        minParas: 4, minWords: 150
      }
    }
  };

  w.WW_DATA = {
    3: G3, 5: G5,
    rubric: [
      ['focus', 'Focus & organization', ['Hard to tell the topic; ideas in no order.', 'Topic is there, but parts are missing or out of order.', 'Clear beginning, middle, and end; mostly stays on topic.', 'Strong opening and closing; every paragraph has one clear job; smooth linking words.']],
      ['ideas', 'Ideas & details', ['Very few details.', 'Some details, but mostly lists what happened.', 'Enough details, examples, or reasons to be clear.', 'Specific, vivid details and examples that make the writing convincing or alive.']],
      ['sent', 'Sentences & word choice', ['Many fragments or run-ons.', 'Simple sentences that all sound alike.', 'Complete sentences with some variety.', 'Sentences vary in length and beginnings; precise, interesting words.']],
      ['conv', 'Conventions', ['Errors make it hard to read.', 'Many errors in capitals, end marks, or spelling.', 'A few errors that do not get in the way.', 'Capitals, punctuation, grammar, and spelling are almost all correct.']]
    ],
    cups: [
      ['C', 'Capitals', 'First word of every sentence, names, places, days, months, and the word I.'],
      ['U', 'Usage', 'Does each sentence sound right? Verbs match (we were, he runs). No missing words.'],
      ['P', 'Punctuation', 'End marks, commas in lists, apostrophes, quotation marks around talking.'],
      ['S', 'Spelling', 'Circle words that look wrong. Check them with a word wall, a dictionary, or a grown-up.']
    ]
  };
})(window);
