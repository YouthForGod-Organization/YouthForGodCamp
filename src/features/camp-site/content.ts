export type CampPage = 'home' | 'schedule' | 'faq'

export type ScheduleRow = {
  time: string
  what: string
  detail?: string
}

export type ScheduleDay = {
  date: string
  title: string
  note?: string
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
  title: 'Transforming Grace',
  titleRu: 'Преображающая благодать',
  verse:
    'For the grace of God has appeared, bringing salvation for all people, training us to renounce ungodliness and worldly passions, and to live self-controlled, upright, and godly lives in the present age, waiting for our blessed hope, the appearing of the glory of our great God and Savior Jesus Christ, who gave himself for us to redeem us from all lawlessness and to purify for himself a people for his own possession who are zealous for good works.',
  reference: 'Titus 2:11-14 ESV',
}

export const REGISTRATION_URL = 'https://app.camp-paradise.org/'
export const CAMP_ADDRESS = '12725 La Porte Rd, Strawberry Valley, CA 95981'
export const CAMP_DATE_RANGE = 'November 25-29'

function teachingDayRows(
  lessons: readonly [string, string, string],
): readonly ScheduleRow[] {
  const lessonRow = (index: 0 | 1 | 2, time: string): ScheduleRow => ({
    time,
    what: `Lesson ${index + 1} — ${lessons[index]}`,
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
    note: 'Introduction: Why we need grace. Teaching time to be announced.',
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
    rows: teachingDayRows([
      "Man's desperate need for grace",
      'The Law condemns and restrains',
      "The Law's inability to transform",
    ]),
  },
  {
    date: 'Nov 27',
    title: "Friday — Grace is God's free gift",
    rows: teachingDayRows([
      'Grace is a free gift of God',
      'Jesus, full of grace and truth',
      'The gifts of grace',
    ]),
  },
  {
    date: 'Nov 28',
    title: 'Saturday — The transforming power of grace',
    rows: teachingDayRows([
      'The transforming power of grace',
      'Christ redeems and purifies',
      'Creation of a new people',
    ]),
  },
  {
    date: 'Nov 29',
    title: 'Sunday — Declare these things',
    rows: [
      { time: '9:00 AM', what: 'Breakfast' },
      {
        time: '10:00 AM',
        what: 'Worship service — Declare, exhort, and rebuke',
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
    answer: 'Camp is for youth church members.',
  },
  {
    question: 'What to expect?',
    answer:
      'Expect a full program including preaching, worship, fellowship, and great food.',
  },
  {
    question: 'What to bring?',
    answer: 'Bible, notebook, bedding, and warm clothes.',
  },
  {
    question: 'Where is camp?',
    answer: CAMP_ADDRESS,
  },
]
