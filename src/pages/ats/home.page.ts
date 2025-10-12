import { expect } from '@playwright/test';

import { AtsBasePage } from './ats.base.page';
import { Routes } from '../../config/routes';

export class HomePage extends AtsBasePage {
  static readonly path = Routes.ats.home;

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

  async isUserAlreadyLoggedIn(userName: string): Promise<boolean> {
    const userWelcomeElement = this.page.locator(`text=Welcome back ${userName}`);
    return await userWelcomeElement.isVisible();
  }
}