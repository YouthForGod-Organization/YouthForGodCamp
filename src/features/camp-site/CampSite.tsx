import { Minus, Plus } from 'lucide-react'
import { useState } from 'react'

import campSelahPhoto from '@/assets/camp-selah-photo.jpg'
import youthForGodLogo from '@/assets/updatedLogo2.png'

import {
  CAMP_ADDRESS,
  CAMP_DATE_RANGE,
  CAMP_THEME,
  FAQS,
  PILLARS,
  REGISTRATION_URL,
  SCHEDULE_DAYS,
  type CampPage,
} from './content'

const pages: ReadonlyArray<{ id: CampPage; label: string }> = [
  { id: 'home', label: 'Home' },
  { id: 'schedule', label: 'Schedule' },
  { id: 'faq', label: 'FAQ' },
]

function CampSite() {
  const [page, setPage] = useState<CampPage>('home')
  const [selectedDay, setSelectedDay] = useState(0)
  const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({ 0: true })

  const activeDay = SCHEDULE_DAYS[selectedDay] ?? SCHEDULE_DAYS[0]

  const toggleFaq = (index: number) => {
    setOpenFaqs((current) => ({
      ...current,
      [index]: !current[index],
    }))
  }

  return (
    <div className="camp-site">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <header className="camp-header">
        <nav className="camp-nav" aria-label="Primary">
          <NavButton
            label={pages[0].label}
            isActive={page === pages[0].id}
            onClick={() => setPage(pages[0].id)}
          />
          <NavButton
            label={pages[1].label}
            isActive={page === pages[1].id}
            onClick={() => setPage(pages[1].id)}
          />
          <Emblem />
          <NavButton
            label={pages[2].label}
            isActive={page === pages[2].id}
            onClick={() => setPage(pages[2].id)}
          />
          <a
            href={REGISTRATION_URL}
            className="camp-nav__link camp-nav__link--gold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register Now
          </a>
        </nav>
      </header>

      <main id="main-content">
        {page === 'home' ? <HomeView /> : null}
        {page === 'schedule' ? (
          <ScheduleView
            activeDay={activeDay}
            selectedDay={selectedDay}
            onSelectDay={setSelectedDay}
          />
        ) : null}
        {page === 'faq' ? (
          <FaqView openFaqs={openFaqs} onToggleFaq={toggleFaq} />
        ) : null}
      </main>

      <footer className="camp-footer">
        <div className="camp-footer__inner">
          <Emblem variant="footer" />
          <p>{CAMP_ADDRESS}</p>
        </div>
      </footer>
    </div>
  )
}

type NavButtonProps = {
  label: string
  isActive: boolean
  onClick: () => void
}

function NavButton({ label, isActive, onClick }: NavButtonProps) {
  return (
    <button
      type="button"
      className="camp-nav__link"
      aria-current={isActive ? 'page' : undefined}
      data-active={isActive ? 'true' : undefined}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

type EmblemProps = {
  variant?: 'nav' | 'footer'
}

function Emblem({ variant = 'nav' }: EmblemProps) {
  return (
    <span className={`camp-logo camp-logo--${variant}`}>
      <img src={youthForGodLogo} alt="YouthForGod Camp logo" decoding="async" />
    </span>
  )
}

type RegisterProps = {
  className?: string
}

function RegisterLink({ className = '' }: RegisterProps) {
  return (
    <a
      href={REGISTRATION_URL}
      className={`register-link ${className}`.trim()}
      target="_blank"
      rel="noopener noreferrer"
    >
      Register Now
    </a>
  )
}

function HomeView() {
  return (
    <>
      <section className="hero" aria-labelledby="home-heading">
        <div className="hero__copy">
          <h1 id="home-heading">{CAMP_THEME.title}</h1>
          <p>
            Grace appeared in Christ, saves freely, trains us in holiness, and
            makes a people eager for good works.
          </p>
          <RegisterLink />
        </div>
        <figure className="hero__media">
          <img
            src={campSelahPhoto}
            alt="Black-and-white view of a wooded camp building and stone steps."
            decoding="async"
          />
        </figure>
      </section>

      <section className="intro-section" aria-labelledby="about-heading">
        <div className="intro-section__inner">
          <p className="script-heading" id="about-heading">
            What we’re about
          </p>
          <p>
            {CAMP_DATE_RANGE} at YouthForGod Camp. Students gather around the
            Word, worship, and the message of grace that saves freely, trains us
            in holiness, and makes a people eager for good works.
          </p>
        </div>
      </section>

      <section className="pillar-grid" aria-label="YouthForGod Camp pillars">
        {PILLARS.map((pillar) => (
          <article className="pillar" key={pillar.title}>
            <p className="pillar__number">{pillar.num}</p>
            <h2>{pillar.title}</h2>
            <p>{pillar.body}</p>
          </article>
        ))}
      </section>

      <section className="scripture-section" aria-labelledby="scripture-title">
        <div>
          <p className="script-heading" id="scripture-title">
            Main verse
          </p>
          <blockquote className="theme-verse">
            <p>{CAMP_THEME.verse}</p>
            <cite>{CAMP_THEME.reference}</cite>
          </blockquote>
          <RegisterLink className="register-link--filled" />
        </div>
      </section>
    </>
  )
}

type ScheduleViewProps = {
  activeDay: (typeof SCHEDULE_DAYS)[number]
  selectedDay: number
  onSelectDay: (index: number) => void
}

function ScheduleView({
  activeDay,
  selectedDay,
  onSelectDay,
}: ScheduleViewProps) {
  return (
    <>
      <section className="page-heading" aria-labelledby="schedule-heading">
        <h1 id="schedule-heading">The week</h1>
        <p>{CAMP_DATE_RANGE} · Grace That Transforms</p>
      </section>

      <div className="day-selector" role="group" aria-label="Choose a day">
        {SCHEDULE_DAYS.map((day, index) => {
          const isSelected = selectedDay === index

          return (
            <button
              type="button"
              key={day.date}
              aria-pressed={isSelected}
              data-selected={isSelected ? 'true' : undefined}
              onClick={() => onSelectDay(index)}
            >
              {day.date}
            </button>
          )
        })}
      </div>

      <section className="schedule-detail" aria-labelledby="active-day-title">
        <div className="schedule-detail__intro">
          <h2 id="active-day-title">{activeDay.title}</h2>
          <p>{activeDay.note}</p>
        </div>

        <ol className="schedule-list" aria-label={`${activeDay.title} events`}>
          {activeDay.rows.map((row) => (
            <li className="schedule-row" key={`${row.time}-${row.what}`}>
              <span className="schedule-row__time">{row.time}</span>
              <span className="schedule-row__event">{row.what}</span>
              <span className="schedule-row__place">{row.where}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="logistics-section" aria-label="Schedule logistics">
        <div className="logistics-grid">
          <article>
            <p className="script-heading">Dates</p>
            <h2>{CAMP_DATE_RANGE}</h2>
            <p>
              The confirmed camp dates are November 25-29. The year and exact
              arrival and departure times have not been confirmed yet.
            </p>
          </article>
          <article>
            <p className="script-heading">Location</p>
            <h2>{CAMP_ADDRESS}</h2>
            <p>
              Transportation and carpool details have not been confirmed yet.
            </p>
          </article>
          <article>
            <p className="script-heading">Registration</p>
            <h2>Register online</h2>
            <p>
              Register Now opens the confirmed Camp Paradise registration page
              in a new tab.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}

type FaqViewProps = {
  openFaqs: Record<number, boolean>
  onToggleFaq: (index: number) => void
}

function FaqView({ openFaqs, onToggleFaq }: FaqViewProps) {
  return (
    <>
      <section className="page-heading" aria-labelledby="faq-heading">
        <h1 id="faq-heading">Questions</h1>
        <p>For parents &amp; students</p>
      </section>

      <section className="faq-section" aria-label="Frequently asked questions">
        {FAQS.map((faq, index) => {
          const isOpen = Boolean(openFaqs[index])
          const panelId = `faq-answer-${index}`

          return (
            <article className="faq-item" key={faq.question}>
              <button
                type="button"
                className="faq-question"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => onToggleFaq(index)}
              >
                <span>{faq.question}</span>
                {isOpen ? (
                  <Minus aria-hidden="true" focusable="false" />
                ) : (
                  <Plus aria-hidden="true" focusable="false" />
                )}
              </button>
              {isOpen ? (
                <p className="faq-answer" id={panelId}>
                  {faq.answer}
                </p>
              ) : null}
            </article>
          )
        })}
      </section>

      <section className="closing-section" aria-labelledby="closing-title">
        <div>
          <p className="script-heading" id="closing-title">
            Come and see
          </p>
          <p>
            Open house every second Saturday in April and May. Tour the cabins,
            meet the directors, ask the hard questions in person.
          </p>
          <RegisterLink className="register-link--filled" />
        </div>
      </section>
    </>
  )
}

export default CampSite
