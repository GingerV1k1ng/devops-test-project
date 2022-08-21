import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to http://localhost/
  await page.goto('http://localhost/');

  // Click text=Azure Container instance is UP
  await page.locator('text=Azure Container instance is UP').click();

});