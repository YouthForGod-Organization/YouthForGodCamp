export type CampPage = 'home' | 'schedule' | 'faq'

export type ScheduleRow = {
  time: string
  what: string
  detail?: string
}

export type ScheduleDay = {
  date: string
  title: string
  note: string
  rows: readonly ScheduleRow[]
}

export type Faq = {
  question: string
  answer: string
}

export type CampTheme = {
  title: string
  titleRu: string
  verse: string
  reference: string
}

export const CAMP_THEME: CampTheme = {
  title: 'Grace That Transforms',
  titleRu: 'Преображающая благодать',
  verse:
    'For the grace of God has appeared, bringing salvation for all people, training us to renounce ungodliness and worldly passions, and to live self-controlled, upright, and godly lives in the present age, waiting for our blessed hope, the appearing of the glory of our great God and Savior Jesus Christ, who gave himself for us to redeem us from all lawlessness and to purify for himself a people for his own possession who are zealous for good works.',
  reference: 'Titus 2:11-14 ESV',
}

export const REGISTRATION_URL = 'https://app.camp-paradise.org/'
export const CAMP_ADDRESS = '12725 La Porte Rd, Strawberry Valley, CA 95981'
export const CAMP_DATE_RANGE = 'November 25-29'

type Lesson = {
  topic: string
  detail?: string
}

function teachingDayRows(
  lessons: readonly [Lesson, Lesson, Lesson],
): readonly ScheduleRow[] {
  const lessonRow = (index: 0 | 1 | 2, time: string): ScheduleRow => ({
    time,
    what: `Lesson ${index + 1} — ${lessons[index].topic}`,
    detail: lessons[index].detail,
  })

  return [
    { time: '8:00 AM', what: 'Wake up' },
    {
      time: '8:30 AM',
      what: 'Prayer hour',
      detail: 'Speaker to be announced.',
    },
    { time: '9:00 AM', what: 'Breakfast' },
    lessonRow(0, '10:00 AM'),
    lessonRow(1, '11:30 AM'),
    { time: '2:00 PM', what: 'Lunch' },
    lessonRow(2, '5:00 PM'),
    {
      time: '6:30 PM',
      what: 'Evening service',
    },
    { time: '8:00 PM', what: 'Dinner' },
    { time: '9:00 PM', what: 'Fellowship' },
    { time: '11:00 PM', what: 'Tea and sauna' },
    {
      time: '12:59 AM',
      what: 'Lights out',
      detail: 'The following morning (next day).',
    },
  ]
}

export const SCHEDULE_DAYS: readonly ScheduleDay[] = [
  {
    date: 'Nov 25',
    title: 'Wednesday — Intro to camp',
    note: 'Introduction: Why we need grace. Grace is neither cheap nor something we produce ourselves, and it is not permission to sin. It cost Jesus his life, calls us to holiness, and has power to transform us. Teaching time to be announced.',
    rows: [
      {
        time: 'From 3:00 PM',
        what: 'Arrival',
      },
      { time: '6:30 PM', what: 'Evening service' },
      { time: '8:00 PM', what: 'Dinner' },
      { time: '9:00 PM', what: 'Fellowship' },
      { time: '11:00 PM', what: 'Tea and sauna' },
      {
        time: '12:59 AM',
        what: 'Lights out',
        detail: 'The following morning (next day).',
      },
    ],
  },
  {
    date: 'Nov 26',
    title: "Thursday — Man's desperate need",
    note: 'The Law condemned us, restrained corruption, and could not transform the heart.',
    rows: teachingDayRows([
      { topic: "Man's desperate need for grace" },
      {
        topic: 'The Law condemns and restrains',
        detail:
          'The Law condemned us and kept us from total corruption. Galatians.',
      },
      {
        topic: "The Law's inability to transform",
        detail:
          'The Law could not transform the human heart. Galatians 3:21 and Ezekiel 36.',
      },
    ]),
  },
  {
    date: 'Nov 27',
    title: "Friday — Grace is God's free gift",
    note: 'Grace is a free gift of God, embodied in Jesus, and given to save, train, and turn hearts toward his glory.',
    rows: teachingDayRows([
      {
        topic: 'Grace is a free gift of God',
        detail:
          'Grace is given freely, not earned by works. Romans 3:24 and Romans 5:15.',
      },
      {
        topic: 'Jesus, full of grace and truth',
        detail:
          'Grace appeared and was embodied in Jesus. 1 John 1 and John 1.',
      },
      {
        topic: 'The gifts of grace',
        detail:
          "Grace brings salvation to all, trains us in righteous living, and gives us hearts that long for God's glory and Christ's second coming. Titus 2:11-14.",
      },
    ]),
  },
  {
    date: 'Nov 28',
    title: 'Saturday — The transforming power of grace',
    note: 'Christ redeems and purifies, creating a new people who belong to him and are zealous for good works.',
    rows: teachingDayRows([
      { topic: 'The transforming power of grace' },
      {
        topic: 'Christ redeems and purifies',
        detail: 'Christ buys back and cleanses his people.',
      },
      {
        topic: 'Creation of a new people',
        detail:
          'A people who belong to Christ, his own possession, zealous for good works.',
      },
    ]),
  },
  {
    date: 'Nov 29',
    title: 'Sunday — Declare these things',
    note: 'Paul ends by urging Titus to declare these things, exhort, and rebuke with all authority.',
    rows: [
      { time: '9:00 AM', what: 'Breakfast' },
      {
        time: '10:00 AM',
        what: 'Worship service — Declare, exhort, and rebuke',
        detail:
          'Declare these truths, strongly encourage and urge others, and rebuke with all authority. Let no one disregard you. Titus 2:15.',
      },
      { time: '12:00 PM', what: 'Cleanup' },
      { time: '1:00 PM', what: 'Lunch' },
      { time: '3:00 PM', what: 'Departure' },
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
