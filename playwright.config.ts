import { defineConfig } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  globalSetup: './LoginSession', 

  use: {
    baseURL: process.env.BASE_URL,
    headless: true,
    storageState: 'storageState.json',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        headless: true,
      },
    },
    {
      name: 'firefox',
      use: {
        browserName: 'firefox',
      },
    },
  ],
});
