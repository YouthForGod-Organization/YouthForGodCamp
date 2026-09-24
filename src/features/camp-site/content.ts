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
export const CAMP_ADDRESS = '12725 La Porte Rd, Strawberry Valley, CA 95981'
export const CAMP_DATE_RANGE = 'November 25-29'

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
    date: 'Nov 25',
    title: 'Wednesday — Intro to camp',
    note: 'Why we need grace, what grace is often mistaken for, and how costly grace in Christ urges holiness and transforms.',
    rows: [
      {
        time: 'Theme',
        what: 'Why we need grace.',
        where: 'Grace That Transforms',
      },
      {
        time: 'Focus',
        what: 'Grace is not cheap, and grace is not a license to sin.',
        where: 'Intro to camp',
      },
      {
        time: 'Truth',
        what: "Grace came at the cost of Jesus's life, urges holiness, and is powerful to transform.",
        where: 'Titus 2:11-14',
      },
    ],
  },
  {
    date: 'Nov 26',
    title: "Thursday — Man's desperate need",
    note: 'The Law condemned us, restrained corruption, and could not transform the heart.',
    rows: [
      {
        time: 'Theme',
        what: "Man's desperate need for grace.",
        where: 'Grace That Transforms',
      },
      {
        time: 'Focus',
        what: 'The Law condemned us and kept us from total corruption.',
        where: 'Galatians',
      },
      {
        time: 'Truth',
        what: 'The Law could not transform us.',
        where: 'Galatians 3:21 and Ezekiel 36',
      },
    ],
  },
  {
    date: 'Nov 27',
    title: "Friday — Grace is God's free gift",
    note: 'Grace is a free gift of God, embodied in Jesus, and given to save, train, and turn hearts toward his glory.',
    rows: [
      {
        time: 'Theme',
        what: 'Grace is a free gift of God, not of works.',
        where: 'Romans 3:24 and Romans 5:15',
      },
      {
        time: 'Focus',
        what: 'Jesus is full of grace and truth; grace appeared and was embodied in him.',
        where: 'John 1 and 1 John 1',
      },
      {
        time: 'Gifts',
        what: "Grace brings salvation to all, trains us in righteous living, and gives a heart that longs for God's glory and Christ's appearing.",
        where: 'Titus 2:11-14',
      },
    ],
  },
  {
    date: 'Nov 28',
    title: 'Saturday — The transforming power of grace',
    note: 'Christ redeems and purifies, creating a new people who belong to him and are zealous for good works.',
    rows: [
      {
        time: 'Theme',
        what: 'The transforming power of grace.',
        where: 'Grace That Transforms',
      },
      {
        time: 'Focus',
        what: 'Christ redeems and purifies: he bought and cleansed his people.',
        where: 'Titus 2:14',
      },
      {
        time: 'Truth',
        what: 'Grace creates a new people for Christ, his own possession, zealous for good works.',
        where: 'Titus 2:14',
      },
    ],
  },
  {
    date: 'Nov 29',
    title: 'Sunday — Declare these things',
    note: 'Paul ends by urging Titus to declare these things, exhort, and rebuke with all authority.',
    rows: [
      {
        time: 'Theme',
        what: 'Declare these things.',
        where: 'Titus 2:15',
      },
      {
        time: 'Exhort',
        what: 'Strongly encourage with the authority of the Word.',
        where: 'Titus 2:15',
      },
      {
        time: 'Rebuke',
        what: 'Rebuke with all authority, letting no one disregard the message.',
        where: 'Titus 2:15',
      },
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
      'Pricing has not been confirmed yet. Register Now opens the confirmed registration page for available registration details.',
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
    answer: `${CAMP_ADDRESS}. Transportation and carpool details have not been confirmed yet.`,
  },
]
