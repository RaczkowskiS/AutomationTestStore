import { expect } from '@playwright/test';

import { BasePage } from './base.page';
import { Routes } from '../config/routes';
import { HomePage } from './home.page';
import { log } from 'console';

export class LoginPage extends BasePage {
    static readonly path = Routes.login;

    async open(): Promise<void> {
        await super.open(LoginPage.path); 
    }

    async expectLoaded(): Promise<void> {
        await super.expectLoaded();

        const headerElement = this.page.locator(".heading1");
        await expect(headerElement).toBeVisible();
    }

    async isLoginErrorVisible(): Promise<boolean> {
        const logginErrorElement = this.page.locator(".alert");
        return await logginErrorElement.isVisible();
    }

    async loginUser(login: string, password: string, opts?: { expect: 'success' }): Promise<HomePage>;
    async loginUser(login: string, password: string, opts: { expect: 'error' }): Promise<LoginPage>;

    async loginUser(
        login: string,
        password: string,
        opts: { expect: 'success' | 'error' } = { expect: 'success' }
    ): Promise<HomePage | LoginPage> {
        const loginInputElement = this.page.locator("#loginFrm_loginname");
        const passwordInputElement = this.page.locator("#loginFrm_password")
        const submitButtonElement = this.page.locator("//button[@title='Login']");

        await loginInputElement.fill(login);
        await passwordInputElement.fill(password);
        await submitButtonElement.click();

        if (opts.expect === 'success') {
            const homePage = new HomePage(this.page);
            homePage.expectLoaded;
            return homePage;
        } else {
            this.expectLoaded();
            return this;
        }
    }
}