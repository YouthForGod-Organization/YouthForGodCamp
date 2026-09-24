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

  await page.getByRole('button', { name: /schedule/i }).click()
  await expect(
    page.getByRole('heading', { level: 1, name: /the week/i }),
  ).toBeVisible()
  await page.getByRole('button', { name: /tue 23/i }).click()
  await expect(page.getByText(/tuesday — trail day/i)).toBeVisible()

  await page.getByRole('button', { name: /faq/i }).click()
  const costQuestion = page.getByRole('button', {
    name: /what does the week cost/i,
  })
  await costQuestion.click()
  await expect(costQuestion).toHaveAttribute('aria-expanded', 'true')
  await expect(page.getByText(/\$525/i)).toBeVisible()

  await page.getByRole('button', { name: /home/i }).click()
  await expect(
    page.getByRole('link', { name: /register now/i }).first(),
  ).toHaveAttribute('href', 'https://app.camp-paradise.org/')

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze()
  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth,
  )

  expect(accessibilityScanResults.violations).toEqual([])
  expect(browserErrors).toEqual([])
  expect(hasHorizontalOverflow).toBe(false)
})
