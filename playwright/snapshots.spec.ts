import { test, expect } from '@playwright/test';

// Snapshot visual tests for consistency across the main pages of the site - these will need to updated each time a visual change goes into effect for changign some content

test('Home page snapshot test', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveScreenshot();
});
