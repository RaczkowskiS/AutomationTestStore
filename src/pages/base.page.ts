import { Page, expect } from '@playwright/test';

export abstract class BasePage {
  constructor(protected readonly page: Page) {}

  async open(url: string, path: string = '/'): Promise<void> {
    await this.page.goto(url + path);
  }

  async expectLoaded(): Promise<void> {
    await expect(this.page.locator('body')).toBeVisible();
  }
}