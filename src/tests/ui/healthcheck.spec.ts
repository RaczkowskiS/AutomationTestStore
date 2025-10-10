import { test } from '../../fixtures/base';

test('should open automationteststore page successfully', async ({ homePage }) => {
  await homePage.open();
  await homePage.expectLoaded();
});