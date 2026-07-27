import { test, expect } from '@playwright/test';

test('homepage loads', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/.+/);
});

test('all navigation links work', async ({ page }) => {
  await page.goto('/');

  // Collect hrefs up front and navigate directly rather than clicking —
  // several nav items (e.g. the Services dropdown) are only visible on
  // hover/focus-within, so a direct click reliably times out on them.
  const hrefs = await page.locator('nav a').evaluateAll((links) =>
    links.map((el) => el.getAttribute('href')).filter((href): href is string => !!href && href.startsWith('/'))
  );

  for (const href of [...new Set(hrefs)]) {
    await page.goto(href);
    await expect(page).not.toHaveURL(/404/);
  }
});
