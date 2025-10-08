import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/home.page';

test('should open automationteststore page successfully', async ({ page }) => {
  const home = new HomePage(page);
  await home.open();
  await home.expectLoaded();
});