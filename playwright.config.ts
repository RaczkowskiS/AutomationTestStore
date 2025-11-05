import * as dotenv from 'dotenv';
dotenv.config();

import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'src/tests',
  fullyParallel: false,
  
  reporter: [
    ['line'],
    ['junit', { outputFile: 'test-results/results.xml' }],
    ['html',  { outputFolder: 'playwright-report', open: 'never' }],
  ],
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
        storageState: ".auth/user.json",
        viewport: { width: 1920, height: 1080}
      },
      dependencies: ["setup"]
    },
    {
      name: 'chrome',
      use: { 
        browserName: 'chromium',
        viewport: { width: 1920, height: 1080}
      },
    },
    {
      name: "no.browser"
    }
  ],
});
