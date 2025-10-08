import { Page, expect } from '@playwright/test';

export abstract class BasePage {
  constructor(protected readonly page: Page) {}

  async open(path: string = '/'): Promise<void> {
    await this.page.goto(path);
  }

  async expectLoaded(): Promise<void> {
    await expect(this.page.locator('body')).toBeVisible();
  }
}