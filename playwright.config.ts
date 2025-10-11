import * as dotenv from 'dotenv';
dotenv.config();

import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'src/tests',
  reporter: 'list',
  fullyParallel: false,
  use: {
    trace: 'on-first-retry',
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    baseURL: process.env.APP_BASE_URL
  },
  projects: [
    {
      name: 'chrome',
      use: { 
        browserName: 'chromium',
        channel: 'chrome',
        viewport: { width: 1920, height: 1080}
      },
    },
    {
      name: "no.browser"
    }
  ],
});