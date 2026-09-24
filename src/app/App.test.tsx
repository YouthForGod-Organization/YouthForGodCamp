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
    expect(screen.getByRole('button', { name: /mon 22/i })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    expect(screen.getByText(/monday — the first full day/i)).toBeVisible()

    await user.click(screen.getByRole('button', { name: /tue 23/i }))

    expect(screen.getByRole('button', { name: /tue 23/i })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    expect(screen.getByText(/tuesday — trail day/i)).toBeVisible()
    expect(
      screen.getByText(/hike out by cabin, sack lunch at the overlook/i),
    ).toBeVisible()
  })

  it('opens FAQ answers and exposes accordion state', async () => {
    const user = userEvent.setup()

    render(<App />)

    await user.click(screen.getByRole('button', { name: /faq/i }))

    expect(
      screen.getByRole('heading', { level: 1, name: /questions/i }),
    ).toBeInTheDocument()

    const costQuestion = screen.getByRole('button', {
      name: /what does the week cost/i,
    })

    expect(costQuestion).toHaveAttribute('aria-expanded', 'false')

    await user.click(costQuestion)

    expect(costQuestion).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/\$525/i)).toBeVisible()
  })

  it('links registration controls to the confirmed destination', () => {
    render(<App />)

    for (const link of screen.getAllByRole('link', { name: /register now/i })) {
      expect(link).toHaveAttribute('href', 'https://app.camp-paradise.org/')
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
