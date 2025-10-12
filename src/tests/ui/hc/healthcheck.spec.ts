import { test, expect } from '../../../fixtures/base';
import { users } from '../../../testdata/users'

test.describe(() => {
  test.use({ storageState: { cookies: [], origins: [] } });

  test('should open automationteststore page successfully', async ({ homePage, page }) => {
    await test.step('Open home page', async () => {
        await homePage.open();
        await homePage.expectLoaded();
    });

    await test.step('Check if user is log out', async () => {
        expect(await homePage.isUserAlreadyLoggedIn(users.user2.name)).toBeFalsy();
    });
  });
});

test.describe(() => {
  test.use({ storageState: '.auth/user.json' });

  test('should open home for user already logged in', async ({ homePage }) => {
      await test.step('Open home page', async () => {
        await homePage.open();
        await homePage.expectLoaded();
      });

      await test.step('Check if user is logged in', async () => {
          expect(await homePage.isUserAlreadyLoggedIn(users.user2.name)).toBeTruthy();
      });
  });
});