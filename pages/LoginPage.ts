import { Page } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto(process.env.BASE_URL!);
  }

  async login(username: string, password: string) {
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');
  }
async isLoginSuccessful() {
  await this.page.waitForURL('**/inventory.html', { timeout: 5000 });
  return this.page.url().includes('/inventory.html');
}




  async getErrorMessage() {
    return this.page.locator('[data-test="error"]').textContent();
  }
}
