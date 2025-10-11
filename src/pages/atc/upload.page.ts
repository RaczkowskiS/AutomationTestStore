import { expect } from '@playwright/test';

import { AtcBasePage } from './atc.base.page';
import { Routes } from '../../config/routes';

export class UploadPage extends AtcBasePage {
  static readonly path = Routes.atc.upload;

  async open(): Promise<void> {
    await super.open(UploadPage.path);
  }

  async expectLoaded(): Promise<void> {
    await super.expectLoaded();

    const logoElement = this.page.locator('#content');
    await expect(logoElement).toBeVisible();
  }
}

