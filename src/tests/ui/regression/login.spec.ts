import { test, expect } from '../../../fixtures/base';
import { HomePage } from '../../../pages/ats/home.page';
import { users } from '../../../testdata/users'

test('should login existing user successfully', async ({ loginPage, page }) => {
    let homePage: HomePage;

    await test.step('Login as existing user', async () => {
        const [response] = await Promise.all([
            page.waitForResponse(res =>
                res.url().includes('/product/product/addToCar') &&
                res.request().method() === 'GET' &&
                res.status() === 200
            ),
            homePage = await loginPage.loginUser(users.user2.login, users.user2.password)
        ]);       
    });

    await test.step('Check if user is logged in', async () => {
        expect(await homePage.isUserLoggedIn(users.user2.name)).toBeTruthy();
    });
});

test('should not login not existing user', async ({ loginPage }) => {
    await test.step('Login as not existing user', async () => {
        await loginPage.loginUser(users.user1.login, users.user1.password);
        expect(await loginPage.isLoginErrorVisible()).toBeTruthy();
    });
});