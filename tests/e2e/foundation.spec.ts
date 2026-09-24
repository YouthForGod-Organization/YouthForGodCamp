import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

test('YouthForGod Camp critical paths are accessible and responsive', async ({
  page,
}) => {
  const browserErrors: string[] = []

  page.on('console', (message) => {
    if (message.type() === 'error') {
      browserErrors.push(message.text())
    }
  })
  page.on('pageerror', (error) => {
    browserErrors.push(error.message)
  })

  await page.goto('/')

  await expect(
    page.getByRole('heading', {
      level: 1,
      name: /grace that transforms/i,
    }),
  ).toBeVisible()
  await expect(page.getByText(/titus 2:11-14 esv/i)).toBeVisible()
  await expect(page.getByText(/the grace of god has appeared/i)).toBeVisible()
  await expect(
    page.getByRole('img', { name: /youthforgod camp logo/i }).first(),
  ).toBeVisible()
  await expect(page.getByRole('img', { name: /wooded camp/i })).toBeVisible()
  await expect(
    page.getByText(/12725 la porte rd, strawberry valley, ca 95981/i),
  ).toBeVisible()
  await expect(page.getByText(/november 25-29/i).first()).toBeVisible()

  await page.getByRole('button', { name: /schedule/i }).click()
  await expect(
    page.getByRole('heading', { level: 1, name: /the week/i }),
  ).toBeVisible()
  await expect(page.getByText(/november 25-29/i).first()).toBeVisible()
  await expect(page.getByText(/\b20\d{2}\b/)).toHaveCount(0)
  await expect(page.getByText(/repeated all five weeks/i)).toHaveCount(0)
  await expect(page.getByRole('button', { name: /sun 21/i })).toHaveCount(0)
  await expect(page.getByRole('button', { name: /mon 22/i })).toHaveCount(0)
  await expect(page.getByRole('button', { name: /tue 23/i })).toHaveCount(0)
  await expect(page.getByRole('button', { name: /wed 24/i })).toHaveCount(0)
  await expect(page.getByRole('button', { name: /thu 25/i })).toHaveCount(0)
  await expect(page.getByRole('button', { name: /fri-sat/i })).toHaveCount(0)
  await expect(page.getByText(/sunday, 2.*4 pm/i)).toHaveCount(0)
  await expect(page.getByText(/saturday, by 10 am/i)).toHaveCount(0)
  await expect(page.getByText(/thursday night/i)).toHaveCount(0)
  for (const dateLabel of [
    /nov 25/i,
    /nov 26/i,
    /nov 27/i,
    /nov 28/i,
    /nov 29/i,
  ]) {
    await expect(page.getByRole('button', { name: dateLabel })).toBeVisible()
  }
  await expect(page.getByRole('button', { name: /nov 25/i })).toHaveAttribute(
    'aria-pressed',
    'true',
  )
  await expect(page.getByText(/wednesday — intro to camp/i)).toBeVisible()
  await page.getByRole('button', { name: /nov 27/i }).click()
  await expect(
    page.getByText(/friday — grace is god's free gift/i),
  ).toBeVisible()

  await page.getByRole('button', { name: /faq/i }).click()
  await expect(page.getByText(/\(828\) 555-0142/i)).toHaveCount(0)
  const costQuestion = page.getByRole('button', {
    name: /what does the week cost/i,
  })
  await costQuestion.click()
  await expect(costQuestion).toHaveAttribute('aria-expanded', 'true')
  await expect(
    page.getByText(/pricing has not been confirmed yet/i),
  ).toBeVisible()
  await expect(page.getByText(/\$525/i)).toHaveCount(0)
  const locationQuestion = page.getByRole('button', {
    name: /where is camp, and can we carpool/i,
  })
  await locationQuestion.click()
  await expect(locationQuestion).toHaveAttribute('aria-expanded', 'true')
  const locationAnswerId = await locationQuestion.getAttribute('aria-controls')
  expect(locationAnswerId).not.toBeNull()
  const locationAnswer = page.locator(`#${locationAnswerId}`)
  await expect(locationAnswer).toContainText(
    /12725 la porte rd, strawberry valley, ca 95981/i,
  )
  await expect(locationAnswer).not.toContainText(/black mountain/i)

  await page.getByRole('button', { name: /home/i }).click()
  await expect(
    page.getByRole('link', { name: /register now/i }).first(),
  ).toHaveAttribute('href', 'https://app.camp-paradise.org/')
  await expect(
    page.getByRole('link', { name: /register now/i }).first(),
  ).toHaveAttribute('target', '_blank')
  await expect(
    page.getByRole('link', { name: /register now/i }).first(),
  ).toHaveAttribute('rel', /noopener/)
  await expect(
    page.getByRole('link', { name: /register now/i }).first(),
  ).toHaveAttribute('rel', /noreferrer/)

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze()
  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth,
  )

  expect(accessibilityScanResults.violations).toEqual([])
  expect(browserErrors).toEqual([])
  expect(hasHorizontalOverflow).toBe(false)
})
