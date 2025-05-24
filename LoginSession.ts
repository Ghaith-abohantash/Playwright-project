import { chromium, FullConfig } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

async function LoginSession(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', process.env.USER_NAME!);
  await page.fill('#password', process.env.PASSWORD!);
  await page.click('#login-button');

  await page.waitForURL('**/inventory.html');

  await page.context().storageState({ path: 'storageState.json' });

  await browser.close();
}

export default LoginSession;
