import { expect } from '@playwright/test';

import { BasePage } from './base.page';
import { Routes } from '../config/routes';

export class HomePage extends BasePage {
  static readonly path = Routes.home;

  async open(): Promise<void> {
    await super.open(HomePage.path);
  }

  async expectLoaded(): Promise<void> {
    await super.expectLoaded();

    const logoElement = this.page.locator('//a[@class="logo"]');
    await expect(logoElement).toBeVisible();
  }

  async isUserLoggedIn(userName: string): Promise<boolean> {
    const userNameElement = this.page.locator(".subtext");

    if (await userNameElement.isVisible()) {
      const loggedUserName = await userNameElement.innerText();
      return loggedUserName == userName;
    }
    
    return false;
  }
}