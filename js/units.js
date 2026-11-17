/* Writer's Workshop: writing prompts tied to the FCPS units for 2026-27.
   Dates are the estimated first Monday of each unit (same calendar as the home Weekend Loop).
   The app shows the unit that is current today for each subject, and a grown-up can nudge
   the pacing on the Grown-ups page when class runs ahead or behind.
   Each unit: one prompt per writing type (narrative, opinion, info). */
(function (w) {
  const U = (subj, from, name, narrative, opinion, info) => ({ subj, from, name, p: { narrative, opinion, info } });
  w.WW_UNITS = {
    3: [
      U('Reading', '2026-11-16', 'Government for the People', 'Tell about a time your class or family voted on something.', 'Should kids be allowed to vote on school rules?', 'Explain what a good leader does.'),
      U('Reading', '2027-01-04', 'Comparing Points of View', 'Tell the same day from your point of view, then from your pet\'s.', 'Is it better to be the oldest or the youngest kid?', 'Explain why two people can see the same thing differently.'),
      U('Reading', '2027-02-15', 'Advancements in Technology', 'Tell about a day when the power went out.', 'Which invention is the most important: the light bulb, the car, or the phone?', 'Explain how one invention changed the way people live.'),
      U('Reading', '2027-03-29', 'Making Decisions', 'Tell about a time you had to make a hard choice.', 'Should kids get to choose their own bedtime?', 'Explain the steps to make a good decision.'),
      U('Reading', '2027-05-03', 'Communities Then and Now', 'Tell about a day in your town 100 years ago, as if you lived then.', 'Is it better to live in a city or in the country?', 'Explain how your community has changed over time.'),
      U('Reading', '2027-05-24', 'Weather and Climate', 'Tell about the wildest weather you have ever seen.', 'Which season is the best?', 'Explain how to stay safe in a thunderstorm.'),
      U('Science', '2026-11-16', 'The Water Cycle', 'Tell the story of a raindrop\'s trip around the water cycle.', 'Should every family save water at home?', 'Explain the steps of the water cycle.'),
      U('Science', '2027-02-01', 'Soils', 'Tell about a time you planted something or dug in the dirt.', 'Should our school have a garden?', 'Explain what soil is made of and why plants need it.'),
      U('Science', '2027-04-19', 'Simple Machines', 'Tell about a time a simple machine helped you do a job.', 'Which simple machine is the most useful?', 'Explain how a lever, a pulley, or a ramp makes work easier.'),
      U('Social studies', '2026-11-16', 'World Geography', 'Tell about a trip you took or would love to take.', 'Should every kid learn to read a map?', 'Explain the parts of a map: title, key, compass rose, and scale.'),
      U('Social studies', '2026-12-07', 'Ancient Egypt', 'Pretend you are a kid in ancient Egypt. Tell about one day.', 'Were the pyramids worth all that work?', 'Explain why the Nile River was important to ancient Egypt.'),
      U('Social studies', '2027-02-01', 'Ancient China', 'Pretend you are walking along the Great Wall. Tell what happens.', 'Which ancient Chinese invention is the most important: paper, silk, or the compass?', 'Explain why the Great Wall of China was built.'),
      U('Social studies', '2027-03-01', 'Ancient Greece', 'Pretend you are running in the first Olympic Games. Tell the story.', 'Should our school hold its own Olympic Games?', 'Explain what the ancient Greeks gave the world.'),
      U('Social studies', '2027-04-19', 'Ancient Rome', 'Pretend you are a kid visiting the Colosseum in ancient Rome.', 'Which is more useful: Roman roads or Roman aqueducts?', 'Explain how the Romans got water to their cities.'),
      U('Social studies', '2027-05-17', 'Empire of Mali', 'Pretend you are a trader crossing the desert to Mali.', 'Should people trade things instead of using money?', 'Explain why gold and salt made Mali rich.')
    ],
    5: [
      U('Reading', '2026-11-16', 'The U.S. Constitution Then and Now', 'Tell about a time a rule seemed unfair and what you did about it.', 'Which right in the Bill of Rights matters most to kids, and why?', 'Explain how checks and balances keep any one branch from becoming too powerful.'),
      U('Reading', '2027-01-04', "Recognizing Author's Point of View", 'Retell a fairy tale from the villain\'s point of view.', 'Should news stories always show both sides?', 'Explain how a reader can tell what an author thinks about a topic.'),
      U('Reading', '2027-02-15', "Technology's Impact on Society", 'Tell about a day with no screens at all.', 'Should kids under 13 have their own smartphones?', 'Explain how one technology changed the way people communicate.'),
      U('Reading', '2027-03-29', 'Up Against the Wild', 'Tell a survival story: you are lost in the woods with only a backpack.', 'Should national parks limit how many visitors come each year?', 'Explain the most important things to pack for a hike, and why.'),
      U('Reading', '2027-05-03', 'Conflicts That Shaped a Nation', 'Tell about a disagreement that ended in a fair compromise.', 'Is compromise always the best way to settle a disagreement?', 'Explain how a conflict can lead to change.'),
      U('Reading', '2027-05-31', 'Water: Fact and Fiction', 'Tell a story about a town that suddenly runs out of water.', 'Should bottled water be banned at school?', 'Explain why clean water is important and how people can protect it.'),
      U('Science', '2026-11-16', 'Force, Motion and Energy', 'Tell about a ride on a roller coaster, a sled, or a bike, and the forces you felt.', 'Should every playground have a zip line? Use forces in your reasons.', 'Explain how friction helps and hurts us every day.'),
      U('Science', '2026-11-30', 'Landforms and Earth Changes', 'Tell the story of a rock that gets weathered, eroded, and carried to the ocean.', 'Should people be allowed to build homes on beaches that are eroding?', "Explain how water, wind, and ice change Earth's surface."),
      U('Science', '2027-02-01', 'Magnetism and Electricity', 'Tell about a day when all the electricity in town stopped.', 'Should our school switch to solar power?', 'Explain how a simple circuit works.'),
      U('Science', '2027-04-19', 'Light and Sound', 'Tell about a night when you heard a sound you could not explain.', 'Should schools have quiet zones?', 'Explain how sound travels from a drum to your ear.'),
      U('Social studies', '2026-11-16', 'Ancient Civilizations', 'Pretend you are a kid in an ancient civilization. Tell about one day.', 'Which ancient invention matters most today: writing, the wheel, or farming?', 'Explain why early civilizations grew up near rivers.'),
      U('Social studies', '2026-11-30', 'Greece and Rome', 'Pretend you are a citizen voting in the Athens assembly. Tell what happens.', 'Was Athens a true democracy if not everyone could vote?', 'Explain how ideas from Greece and Rome still shape the United States.'),
      U('Social studies', '2027-01-18', 'Trade and Kingdoms', 'Pretend you are a trader on a long journey. Tell about one day on the road.', 'Did trade help kingdoms more than wars did?', 'Explain how trade spread ideas between kingdoms.'),
      U('Social studies', '2027-03-01', 'Research Project', 'Tell how you would feel meeting the person you are researching.', 'Which person from history should every kid learn about?', 'Explain three important facts about your research topic.'),
      U('Social studies', '2027-05-03', 'Western Europe', 'Pretend you live in a castle in the Middle Ages. Tell about one day.', 'Would you rather have been a knight or a merchant in the Middle Ages?', 'Explain how life changed in Western Europe after the Middle Ages.')
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
