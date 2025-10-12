import * as dotenv from 'dotenv';
dotenv.config();

import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'src/tests',
  reporter: 'html',
  fullyParallel: false,
  
  use: {
    trace: 'on-first-retry',
    screenshot: "only-on-failure",
    video: "retain-on-failure"
  },
  projects: [
    { name: "setup", testMatch: /.*\.setup\.ts/ },
    {
      name: 'ats-chrome',
      use: { 
        browserName: 'chromium',
        channel: 'chrome',
        storageState: ".auth/user.json",
        viewport: { width: 1920, height: 1080}
      },
      dependencies: ["setup"]
    },
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