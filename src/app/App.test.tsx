import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { axe } from 'vitest-axe'

import App from './App'

describe('YouthForGod Camp site', () => {
  it('renders the home view with YouthForGod Camp branding and camp theme', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Преображающая благодать',
      }),
    ).toBeInTheDocument()
    expect(screen.queryByText('Transforming Grace')).not.toBeInTheDocument()
    expect(screen.getByText('Church Members Only')).toBeVisible()
    expect(screen.getByText('Преображающая благодать')).toHaveAttribute(
      'lang',
      'ru',
    )
    const heroArtwork = screen.getByRole('img', {
      name: 'Sunlit forest artwork for Transforming Grace.',
    })
    expect(heroArtwork).toHaveAttribute('width', '1920')
    expect(heroArtwork).toHaveAttribute('height', '1080')
    expect(heroArtwork).toHaveAttribute('fetchpriority', 'high')
    expect(heroArtwork).toHaveAttribute(
      'srcset',
      expect.stringMatching(/960w.*1920w/),
    )
    expect(
      screen.getAllByRole('img', { name: /youthforgod camp logo/i }),
    ).not.toHaveLength(0)
    expect(
      screen.getByText(/12725 la porte rd, strawberry valley, ca 95981/i),
    ).toBeInTheDocument()
    expect(screen.getByText(/november 25-29/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/camp selah/i)).not.toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'What we are about?' }),
    ).toBeVisible()
    const about = within(
      screen.getByRole('region', { name: 'What we are about?' }),
    )
    expect(about.getAllByRole('heading', { level: 3 })).toHaveLength(4)
    for (const focus of [
      /sound preaching/i,
      /christian fellowship/i,
      /prayer/i,
      /music/i,
    ]) {
      expect(
        about.getByRole('heading', { level: 3, name: focus }),
      ).toBeVisible()
    }
    expect(about.getByText(/sit under sound preaching/i)).toBeVisible()
    expect(
      about.getByText(/participate in christian fellowship/i),
    ).toBeVisible()
    const aboutImages = about.getAllByRole('img')
    expect(aboutImages).toHaveLength(4)
    for (const image of aboutImages) {
      expect(image).toHaveAttribute('alt', expect.stringMatching(/\S/))
      expect(image).toHaveAttribute('src', expect.stringMatching(/\S/))
      expect(image).toHaveAttribute('loading', 'lazy')
      expect(Number(image.getAttribute('width'))).toBeGreaterThan(0)
      expect(Number(image.getAttribute('height'))).toBeGreaterThan(0)
    }
    for (const oldTitle of [
      /scripture, taught straight/i,
      /afternoons outside/i,
      /counselors who stay/i,
    ]) {
      expect(screen.queryByText(oldTitle)).not.toBeInTheDocument()
    }
    expect(screen.getByText(/titus 2:11-14 esv/i)).toBeInTheDocument()
    const verse = screen.getByText(/the grace of god has appeared/i)

    expect(verse).toBeVisible()
    expect(window.getComputedStyle(verse).textTransform).toBe('none')
    expect(
      screen.queryByText(/psalm 46:10.*our verse for the summer/i),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByText(/engineering foundation/i),
    ).not.toBeInTheDocument()
  })

  it('switches to the schedule view and changes the selected day', async () => {
    const user = userEvent.setup()

    render(<App />)

    await user.click(screen.getByRole('button', { name: /schedule/i }))

    expect(
      screen.getByRole('heading', { level: 1, name: /the week/i }),
    ).toBeInTheDocument()
    expect(screen.getAllByText(/november 25-29/i)[0]).toBeVisible()
    expect(
      screen.getByText('November 25-29 · Transforming Grace'),
    ).toBeVisible()
    expect(screen.queryByText(/\b20\d{2}\b/)).not.toBeInTheDocument()
    expect(
      screen.queryByText(/repeated all five weeks/i),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: /mon 22/i }),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: /sun 21/i }),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: /tue 23/i }),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: /wed 24/i }),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: /thu 25/i }),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: /fri-sat/i }),
    ).not.toBeInTheDocument()
    expect(screen.queryByText(/sunday, 2.*4 pm/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/saturday, by 10 am/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/thursday night/i)).not.toBeInTheDocument()

    for (const dateLabel of [
      /nov 25/i,
      /nov 26/i,
      /nov 27/i,
      /nov 28/i,
      /nov 29/i,
    ]) {
      expect(screen.getByRole('button', { name: dateLabel })).toBeVisible()
    }

    expect(screen.getByRole('button', { name: /nov 25/i })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    expect(screen.getByText(/wednesday — intro to camp/i)).toBeVisible()

    await user.click(screen.getByRole('button', { name: /nov 27/i }))

    expect(screen.getByRole('button', { name: /nov 27/i })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    expect(screen.getByText(/friday — grace is god's free gift/i)).toBeVisible()
    for (const date of [
      /nov 25/i,
      /nov 26/i,
      /nov 27/i,
      /nov 28/i,
      /nov 29/i,
    ]) {
      await user.click(screen.getByRole('button', { name: date }))
      expect(screen.getByRole('main')).not.toHaveTextContent(
        /galatians|ezekiel|romans|john|titus/i,
      )
    }
  })

  it('shows confirmed arrival and departure day events without inventing an intro time', async () => {
    const user = userEvent.setup()

    render(<App />)

    await user.click(screen.getByRole('button', { name: /schedule/i }))

    const wednesday = screen.getByRole('list', { name: /wednesday.*events/i })
    const arrivals = within(wednesday)
      .getByText(/arrival/i)
      .closest('li')
    const introduction = within(
      screen.getByRole('region', { name: /wednesday.*intro/i }),
    ).getByText(/^introduction:/i)

    expect(arrivals).toHaveTextContent(/from 3(?::00)?\s*pm/i)
    const wednesdayEvents = within(wednesday).getAllByRole('listitem')
    expect(wednesdayEvents).toHaveLength(6)
    for (const [index, time, event] of [
      [1, /6:30 PM/, /Evening service/],
      [2, /8:00 PM/, /Dinner/],
      [3, /9:00 PM/, /Fellowship/],
      [4, /11:00 PM/, /Tea and sauna/],
      [5, /12:59 AM/, /Lights out/],
    ] as const) {
      expect(wednesdayEvents[index]).toHaveTextContent(time)
      expect(wednesdayEvents[index]).toHaveTextContent(event)
    }
    expect(wednesdayEvents[5]).toHaveTextContent(
      'The following morning (next day).',
    )
    expect(introduction).not.toHaveTextContent(/\d(?::\d{2})?\s*[ap]m/i)
    expect(introduction).toHaveTextContent(
      /^Introduction: Why we need grace\. Teaching time to be announced\.$/,
    )
    expect(
      screen.queryByText(/arrival.*departure.*not.*confirmed/i),
    ).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /nov 29/i }))

    expect(screen.getByRole('button', { name: /nov 29/i })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    expect(screen.getByRole('button', { name: /nov 25/i })).toHaveAttribute(
      'aria-pressed',
      'false',
    )
    const sunday = screen.getByRole('list', { name: /sunday.*events/i })
    const sundayEvents = within(sunday).getAllByRole('listitem')

    expect(sundayEvents).toHaveLength(5)
    for (const [index, time, event] of [
      [0, /9(?::00)?\s*am/i, /breakfast/i],
      [1, /10(?::00)?\s*am/i, /service/i],
      [2, /12(?::00)?\s*pm/i, /clean/i],
      [3, /1(?::00)?\s*pm/i, /lunch/i],
      [4, /3(?::00)?\s*pm/i, /depart/i],
    ] as const) {
      expect(sundayEvents[index]).toHaveTextContent(time)
      expect(sundayEvents[index]).toHaveTextContent(event)
    }
    expect(sundayEvents[1]).toHaveTextContent(
      /^10:00 AM\s*Worship service — Declare, exhort, and rebuke$/,
    )
  })

  it.each([
    {
      date: /nov 26/i,
      day: /thursday.*events/i,
      lessons: [
        "Man's desperate need for grace",
        'The Law condemns and restrains',
        "The Law's inability to transform",
      ],
    },
    {
      date: /nov 27/i,
      day: /friday.*events/i,
      lessons: [
        'Grace is a free gift of God',
        'Jesus, full of grace and truth',
        'The gifts of grace',
      ],
    },
    {
      date: /nov 28/i,
      day: /saturday.*events/i,
      lessons: [
        'The transforming power of grace',
        'Christ redeems and purifies',
        'Creation of a new people',
      ],
    },
  ])(
    'shows the complete timed program for $date',
    async ({ date, day, lessons }) => {
      const user = userEvent.setup()

      render(<App />)

      await user.click(screen.getByRole('button', { name: /schedule/i }))
      await user.click(screen.getByRole('button', { name: date }))

      const schedule = screen.getByRole('list', { name: day })
      const events = within(schedule).getAllByRole('listitem')

      expect(events).toHaveLength(12)
      for (const [index, time, event] of [
        [0, /^8(?::00)?\s*am/i, /wake/i],
        [1, /^8:30\s*am/i, /prayer/i],
        [2, /^9(?::00)?\s*am/i, /breakfast/i],
        [3, /^10(?::00)?\s*am/i, /lesson/i],
        [4, /^11:30\s*am/i, /lesson/i],
        [5, /^2(?::00)?\s*pm/i, /lunch/i],
        [6, /^5(?::00)?\s*pm/i, /lesson/i],
        [7, /^6:30\s*pm/i, /service/i],
        [8, /^8(?::00)?\s*pm/i, /dinner/i],
        [9, /^9(?::00)?\s*pm/i, /fellowship/i],
        [10, /^11(?::00)?\s*pm/i, /tea.*sauna/i],
        [11, /^12:59\s*am/i, /lights out/i],
      ] as const) {
        expect(events[index]).toHaveTextContent(time)
        expect(events[index]).toHaveTextContent(event)
      }
      expect(events[1]).toHaveTextContent(/speaker to be announced/i)
      expect(schedule).not.toHaveTextContent(/led by|auburn|astoria|dry creek/i)
      expect(events[11]).toHaveTextContent(/next day/i)

      for (const [lessonIndex, eventIndex] of [3, 4, 6].entries()) {
        expect(events[eventIndex]?.textContent).toBe(
          `${['10:00 AM', '11:30 AM', '5:00 PM'][lessonIndex]}Lesson ${lessonIndex + 1} — ${lessons[lessonIndex]}`,
        )
      }
    },
  )

  it('opens FAQ answers and exposes accordion state', async () => {
    const user = userEvent.setup()

    render(<App />)

    await user.click(screen.getByRole('button', { name: /faq/i }))

    expect(
      screen.getByRole('heading', { level: 1, name: /questions/i }),
    ).toBeInTheDocument()
    expect(screen.queryByText(/\(828\) 555-0142/i)).not.toBeInTheDocument()

    expect(screen.getByText('For youth church members')).toBeVisible()
    const faq = within(
      screen.getByRole('region', { name: 'Frequently asked questions' }),
    )
    const questions = [
      [
        'Who is camp for?',
        'Camp is for youth church members. Church members are individuals who have been baptized and are committed to a local church.',
      ],
      [
        'What to expect?',
        'Expect a full program including preaching, worship, fellowship, and great food.',
      ],
      ['What to bring?', 'Bible, notebook, bedding, and warm clothes.'],
      ['Where is camp?', '12725 La Porte Rd, Strawberry Valley, CA 95981'],
    ] as const
    expect(faq.getAllByRole('button')).toHaveLength(4)
    for (const [index, [question, answer]] of questions.entries()) {
      const button = faq.getByRole('button', { name: question })
      expect(button).toHaveAttribute(
        'aria-expanded',
        index === 0 ? 'true' : 'false',
      )
      if (index !== 0) await user.click(button)
      expect(button).toHaveAttribute('aria-expanded', 'true')
      const panel = document.getElementById(
        button.getAttribute('aria-controls') ?? '',
      )
      expect(panel).toBeVisible()
      expect(panel?.textContent).toBe(answer)
      await user.click(button)
      expect(button).toHaveAttribute('aria-expanded', 'false')
      expect(panel).not.toBeInTheDocument()
    }
    expect(
      screen.queryByText(/open house|not a brochure|parents & students/i),
    ).not.toBeInTheDocument()
  })

  it('links registration controls to the confirmed destination in a new tab', () => {
    render(<App />)

    for (const link of screen.getAllByRole('link', { name: /register now/i })) {
      expect(link).toHaveAttribute('href', 'https://app.camp-paradise.org/')
      expect(link).toHaveAttribute('target', '_blank')
      expect(link.getAttribute('rel')).toMatch(/\bnoopener\b/)
      expect(link.getAttribute('rel')).toMatch(/\bnoreferrer\b/)
    }
    expect(
      screen.queryByText(/registration link has not been provided yet/i),
    ).not.toBeInTheDocument()
  })

  it('has no automated accessibility violations', async () => {
    const { container } = render(<App />)

    const results = await axe(container, {
      rules: {
        'color-contrast': { enabled: false },
      },
    })

    expect(results.violations).toEqual([])
  })
})
