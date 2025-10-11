import { test, expect } from '../../fixtures/base';
import { users } from '../../testdata/users'

test('should login existing user successfully', async ({ loginPage }) => {
    await test.step('Login as existing user', async () => {
        const home = await loginPage.loginUser(users.user2.login, users.user2.password);
        expect(await home.isUserLoggedIn(users.user2.name)).toBeTruthy();
    });
});

test('should not login not existing user', async ({ loginPage }) => {
    await test.step('Login as not existing user', async () => {
        await loginPage.loginUser(users.user1.login, users.user1.password);
        expect(await loginPage.isLoginErrorVisible()).toBeTruthy();
    });
});