import { test } from '../../fixtures/base';

test('should open automationteststore page successfully', async ({ homePage }) => {
  await test.step('Open home page', async () => {
      await homePage.open();
      await homePage.expectLoaded();
  });
});