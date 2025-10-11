import * as dotenv from 'dotenv';
dotenv.config();

import { defineConfig } from '@playwright/test';
import { url } from './src/testdata/url'

export default defineConfig({
  testDir: 'src/tests',
  reporter: 'list',
  fullyParallel: false,
  use: {
    trace: 'on-first-retry',
    screenshot: "on",
    video: "retain-on-failure",
    baseURL: url.app_base_url
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