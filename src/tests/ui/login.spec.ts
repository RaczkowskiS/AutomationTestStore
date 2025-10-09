import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { users } from '../../testdata/users'

test('should login existing user successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.expectLoaded();

    var home = await loginPage.loginUser(users.user2.login, users.user2.password);
    expect(await home.isUserLoggedIn(users.user2.name)).toBeTruthy();
});

test('should not login not existing user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const expectedError = "Error: Incorrect login or password provided.";
    await loginPage.open();
    await loginPage.expectLoaded();

    await loginPage.loginUser(users.user1.login, users.user1.password);
    expect(await loginPage.isLoginErrorVisible()).toBeTruthy();
});