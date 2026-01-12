import { expect, test } from '@playwright/test';

test('homepage has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('portfolio-vite');
});

test('counter increments when clicked', async ({ page }) => {
  await page.goto('/');
  const button = page.getByText('count is 0');
  await expect(button).toBeVisible();

  await button.click();
  await expect(page.getByText('count is 1')).toBeVisible();
});
