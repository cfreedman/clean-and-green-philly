import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://127.0.0.1:3001/');
});

test('Should have correct metadata and elements', async ({ page }) => {
  await expect(page).toHaveTitle(
    'Clean & Green Philly - Helping communities clean vacant properties'
  );
});

// Testing routing
test('Should navigate to properties page correctly', async ({ page }) => {
  const propertiesLinks = await page
    .getByRole('link', {
      name: 'Find Properties',
    })
    .all();

  for (const link of propertiesLinks) {
    await link.click();
    await expect(page).toHaveURL('/find-properties');
    await page.pause();
    await page.goBack();
  }
});

test('Should navigate to access page correctly', async ({ page }) => {
  const accessLinks = await page
    .getByRole('link', { name: 'Get Access' })
    .all();

  for (const link of accessLinks) {
    await link.click();
    await expect(page).toHaveURL('/get-access');
    await page.pause();
    await page.goBack();
  }
});

test('Should navigate to transform page correctly', async ({ page }) => {
  const transformLinks = await page
    .getByRole('link', { name: 'Transform' })
    .all();

  for (const link of transformLinks) {
    await link.click();
    await expect(page).toHaveURL('/transform-property');
    await page.pause();
    await page.goBack();
  }
});

test('Should navigate to about page correctly', async ({ page }) => {
  await page.getByRole('link', { name: 'About' }).click();

  await expect(page).toHaveURL('/about');
});

test('Should navigate to donate page correctly', async ({ page }) => {
  await page.getByRole('link', { name: 'Donate' }).click();

  await expect(page).toHaveURL('/donate');
});

test('Call to action link should navigate to find properties page', async ({
  page,
}) => {
  await page.getByRole('link', { name: 'Get Started' }).click();

  await expect(page).toHaveURL('/find-properties');
});
