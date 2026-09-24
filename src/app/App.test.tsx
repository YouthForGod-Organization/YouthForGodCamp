import { render, screen } from '@testing-library/react'
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
        name: /grace that transforms/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getAllByRole('img', { name: /youthforgod camp logo/i }),
    ).not.toHaveLength(0)
    expect(
      screen.getByText(/12725 la porte rd, strawberry valley, ca 95981/i),
    ).toBeInTheDocument()
    expect(screen.getByText(/november 25-29/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/camp selah/i)).not.toBeInTheDocument()
    expect(screen.getByText(/scripture, taught straight/i)).toBeInTheDocument()
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
    expect(screen.getByText(/romans 3:24 and romans 5:15/i)).toBeVisible()
  })

  it('opens FAQ answers and exposes accordion state', async () => {
    const user = userEvent.setup()

    render(<App />)

    await user.click(screen.getByRole('button', { name: /faq/i }))

    expect(
      screen.getByRole('heading', { level: 1, name: /questions/i }),
    ).toBeInTheDocument()
    expect(screen.queryByText(/\(828\) 555-0142/i)).not.toBeInTheDocument()

    const costQuestion = screen.getByRole('button', {
      name: /what does the week cost/i,
    })

    expect(costQuestion).toHaveAttribute('aria-expanded', 'false')

    await user.click(costQuestion)

    expect(costQuestion).toHaveAttribute('aria-expanded', 'true')
    expect(
      screen.getByText(/pricing has not been confirmed yet/i),
    ).toBeVisible()
    expect(screen.queryByText(/\$525/i)).not.toBeInTheDocument()

    const locationQuestion = screen.getByRole('button', {
      name: /where is camp, and can we carpool/i,
    })

    await user.click(locationQuestion)

    expect(locationQuestion).toHaveAttribute('aria-expanded', 'true')
    const locationAnswerId = locationQuestion.getAttribute('aria-controls')
    const locationAnswer = document.getElementById(locationAnswerId ?? '')

    if (!locationAnswer) {
      throw new Error('Expected FAQ location answer to be rendered')
    }

    expect(locationAnswer).toHaveTextContent(
      /12725 la porte rd, strawberry valley, ca 95981/i,
    )
    expect(locationAnswer).not.toHaveTextContent(/black mountain/i)
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
