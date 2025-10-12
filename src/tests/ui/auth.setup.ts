import { setup, expect } from '../../fixtures/base';
import { HomePage } from '../../pages/ats/home.page';
import path from 'path'
import { users } from '../../testdata/users'

const authFile = path.join(__dirname, '../../../.auth/user.json');

setup('authenticate', async ({ loginPage, page }) => {
    const homePage = await loginPage.loginUser(users.user2.login, users.user2.password); 
    await homePage.expectLoaded();
    await page.context().storageState({ path: authFile });
});