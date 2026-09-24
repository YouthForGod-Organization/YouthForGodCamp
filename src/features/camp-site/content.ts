export type CampPage = 'home' | 'schedule' | 'faq'

export type ScheduleRow = {
  time: string
  what: string
  where: string
}

export type ScheduleDay = {
  date: string
  title: string
  note: string
  rows: readonly ScheduleRow[]
}

export type Pillar = {
  num: string
  title: string
  body: string
}

export type Faq = {
  question: string
  answer: string
}

export type CampTheme = {
  title: string
  verse: string
  reference: string
}

export const CAMP_THEME: CampTheme = {
  title: 'Grace That Transforms',
  verse:
    'For the grace of God has appeared, bringing salvation for all people, training us to renounce ungodliness and worldly passions, and to live self-controlled, upright, and godly lives in the present age, waiting for our blessed hope, the appearing of the glory of our great God and Savior Jesus Christ, who gave himself for us to redeem us from all lawlessness and to purify for himself a people for his own possession who are zealous for good works.',
  reference: 'Titus 2:11-14 ESV',
}

export const REGISTRATION_URL = 'https://app.camp-paradise.org/'

export const PILLARS: readonly Pillar[] = [
  {
    num: 'One',
    title: 'Scripture, taught straight',
    body: 'One book, all week. Morning teaching in the pavilion, then an hour in small groups where students do the reading themselves. Hard questions especially welcome.',
  },
  {
    num: 'Two',
    title: 'Afternoons outside',
    body: 'Lake swim, climbing wall, trail runs, the blob, canoe races that get competitive fast. Cabins compete all week for a painted paddle that matters enormously.',
  },
  {
    num: 'Three',
    title: 'Counselors who stay',
    body: 'Every leader is background-checked, CPR-certified and trained for two weeks before campers arrive. Most come back three summers running.',
  },
]

export const SCHEDULE_DAYS: readonly ScheduleDay[] = [
  {
    date: 'Sun 21',
    title: 'Sunday — Arrival',
    note: 'A soft landing: bags in, names learned, one big meal, one short talk. Lights out early because nobody sleeps anyway.',
    rows: [
      {
        time: '2–4 PM',
        what: 'Check-in, health forms, cabin assignments',
        where: 'Dining hall porch',
      },
      {
        time: '4:30',
        what: "Cabin meeting — the eight people you'll know best",
        where: 'Cabins',
      },
      {
        time: '5:30',
        what: 'Dinner and the all-camp welcome',
        where: 'Dining hall',
      },
      {
        time: '7:00',
        what: 'Opening session — Psalm 46, the week ahead',
        where: 'Pavilion',
      },
      {
        time: '8:30',
        what: "Fire, s'mores, cabin games",
        where: 'Lower fire ring',
      },
      { time: '10:30', what: 'Lights out', where: 'Cabins' },
    ],
  },
  {
    date: 'Mon 22',
    title: 'Monday — The first full day',
    note: 'The rhythm every weekday follows: Word in the morning, water in the afternoon, worship at night.',
    rows: [
      {
        time: '7:00',
        what: 'Polar bear swim (optional, cold, popular)',
        where: 'Lake dock',
      },
      { time: '8:00', what: 'Breakfast', where: 'Dining hall' },
      {
        time: '9:00',
        what: 'Morning session — teaching',
        where: 'Pavilion',
      },
      {
        time: '10:15',
        what: 'Small groups — eight students, one leader, open Bibles',
        where: 'Cabin porches',
      },
      {
        time: '12:00',
        what: 'Lunch and rest hour',
        where: 'Dining hall',
      },
      {
        time: '2:00',
        what: 'Free rec — lake, climbing wall, blob, trails, courts',
        where: 'Waterfront and ridge',
      },
      {
        time: '4:30',
        what: 'Cabin competition, round one',
        where: 'Field',
      },
      { time: '6:00', what: 'Dinner', where: 'Dining hall' },
      {
        time: '7:30',
        what: 'Evening worship and message',
        where: 'Pavilion',
      },
      {
        time: '9:15',
        what: 'Cabin devotions, then canteen',
        where: 'Cabins',
      },
      { time: '10:30', what: 'Lights out', where: 'Cabins' },
    ],
  },
  {
    date: 'Tue 23',
    title: 'Tuesday — Trail day',
    note: 'Cabins hike out after small groups. Sack lunches on the summit, back by rec time, blisters compared at dinner.',
    rows: [
      {
        time: '9:00',
        what: 'Morning session — teaching',
        where: 'Pavilion',
      },
      { time: '10:15', what: 'Small groups', where: 'Cabin porches' },
      {
        time: '11:00',
        what: 'Hike out by cabin, sack lunch at the overlook',
        where: 'Selah Ridge',
      },
      {
        time: '3:00',
        what: 'Return, lake swim, canteen open',
        where: 'Waterfront',
      },
      { time: '6:00', what: 'Cookout dinner', where: 'Fire ring' },
      {
        time: '7:30',
        what: 'Evening worship and message',
        where: 'Pavilion',
      },
      { time: '9:15', what: 'Cabin devotions', where: 'Cabins' },
    ],
  },
  {
    date: 'Wed 24',
    title: 'Wednesday — Service and games',
    note: 'Half the day goes to neighbors: trail repair, a food pantry run, yard work down the road. The other half is the messiest game of the week.',
    rows: [
      {
        time: '9:00',
        what: 'Morning session — teaching',
        where: 'Pavilion',
      },
      {
        time: '10:15',
        what: 'Service projects by cabin',
        where: 'Camp and town',
      },
      {
        time: '1:00',
        what: 'Lunch back at camp, rest hour',
        where: 'Dining hall',
      },
      {
        time: '2:30',
        what: 'All-camp mud game',
        where: 'Lower field',
      },
      {
        time: '4:30',
        what: "Lake swim (mandatory, for everyone's sake)",
        where: 'Lake dock',
      },
      {
        time: '7:30',
        what: 'Evening worship and message',
        where: 'Pavilion',
      },
      { time: '9:15', what: 'Cabin devotions', where: 'Cabins' },
    ],
  },
  {
    date: 'Thu 25',
    title: 'Thursday — Family night',
    note: 'The night families are invited up. Worship at seven, cookout after, students showing parents around until dark.',
    rows: [
      {
        time: '9:00',
        what: 'Morning session — teaching',
        where: 'Pavilion',
      },
      { time: '10:15', what: 'Small groups', where: 'Cabin porches' },
      {
        time: '2:00',
        what: 'Cabin competition finals — the painted paddle',
        where: 'Field and waterfront',
      },
      {
        time: '5:00',
        what: 'Families arrive, cabin tours',
        where: 'All camp',
      },
      {
        time: '7:00',
        what: 'Worship night — families welcome',
        where: 'Pavilion',
      },
      { time: '8:30', what: 'Cookout and dessert', where: 'Fire ring' },
      { time: '10:30', what: 'Lights out', where: 'Cabins' },
    ],
  },
  {
    date: 'Fri–Sat',
    title: 'Friday night and Saturday — Sending',
    note: 'Friday ends late at the fire; Saturday is short on purpose. Students leave with a letter from their counselor and a plan for home.',
    rows: [
      {
        time: 'Fri 7:30',
        what: 'Final session — commitment and commissioning',
        where: 'Pavilion',
      },
      {
        time: 'Fri 9:00',
        what: 'Fire circle — students share what changed',
        where: 'Upper fire ring',
      },
      {
        time: 'Fri 11:30',
        what: 'Late lights out (the one exception)',
        where: 'Cabins',
      },
      {
        time: 'Sat 8:00',
        what: 'Breakfast and cabin clean-out',
        where: 'Dining hall',
      },
      {
        time: 'Sat 9:00',
        what: 'Closing circle, counselor letters, phones returned',
        where: 'Pavilion',
      },
      { time: 'Sat 10:00', what: 'Pickup', where: 'Dining hall porch' },
    ],
  },
]

export const FAQS: readonly Faq[] = [
  {
    question: 'Who is camp for?',
    answer:
      'Students entering grades 6 through 12 in the fall. Middle and high school share the property but sleep, eat, and meet in small groups separately, with programming pitched to each.',
  },
  {
    question: "My teenager isn't a Christian. Should they still come?",
    answer:
      'Yes — and plenty do every year. We teach the Bible openly and clearly, and we never pressure a student into a response. Questions and skepticism are welcome; leaders are trained to take them seriously rather than shut them down.',
  },
  {
    question: 'What does the week cost?',
    answer:
      '$525 covers lodging, all meals, activities and the camp T-shirt, with a $100 deposit to hold the spot. Nobody is turned away for cost: scholarships cover up to full tuition and the director reviews the one-page application privately.',
  },
  {
    question: 'How are students supervised?',
    answer:
      'One trained counselor for every eight students, sleeping in the cabin with them. Every staff member is background-checked and CPR/first-aid certified, a registered nurse lives on site all week, and lifeguards are on the dock whenever the water is open.',
  },
  {
    question: 'Do phones really get taken?',
    answer:
      "They're collected Sunday night and returned Saturday morning — the single change students thank us for most. You can reach your child any time through the camp office, and we call you first if anything comes up.",
  },
  {
    question: 'What about allergies and medication?',
    answer:
      'Note everything on the health form and our nurse builds a plan before arrival. The kitchen handles gluten-free, dairy-free, vegetarian and the common allergens as a matter of course — the camp is nut-free property-wide.',
  },
  {
    question: 'What should they bring?',
    answer:
      'Sleeping bag, pillow, towels, modest swimsuit, closed-toe shoes for the trail, rain jacket, flashlight, Bible, water bottle and a pen. Leave valuables and speakers at home; a full list goes out with your confirmation email.',
  },
  {
    question: 'Where is camp, and can we carpool?',
    answer:
      "1140 Ridge Road in Black Mountain, North Carolina — 25 minutes east of Asheville. Charter buses run from Charlotte, Greenville and Raleigh for $45 round trip, and we'll connect you with families nearby if you'd rather drive together.",
  },
]
