import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'src/tests',
  reporter: 'list',
  use: {
    trace: 'retain-on-failure',
    baseURL: process.env.APP_BASE_URL ?? 'https://automationteststore.com',
    headless: true,
  },
  projects: [
    {
      name: 'Chrome',
      use: { browserName: 'chromium', channel: 'chrome' },
    }
  ],
});