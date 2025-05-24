import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import * as dotenv from 'dotenv';
dotenv.config();

test.describe('Login Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('Successful login', async ({ page }) => {

    await loginPage.login(process.env.USER_NAME!, process.env.PASSWORD!);
    const loggedIn = await loginPage.isLoginSuccessful();
    expect(loggedIn).toBeTruthy();
  });

  test('try login with wrong password', async ({ page }) => {
    await loginPage.login(process.env.USERNAME!, 'wrongpassword');
    const error = await loginPage.getErrorMessage();
    expect(error).toContain('Username and password do not match');
  });

  test('try login with wrong username', async ({ page }) => {
    await loginPage.login('wrongusername', process.env.PASSWORD!);
    const error = await loginPage.getErrorMessage();
    expect(error).toContain('Username and password do not match');
  });

  test('Check login form elements are visible', async ({ page }) => {
    await loginPage.goto();
    await expect(page.locator('#user-name')).toBeVisible();
    await expect(page.locator('#password')).toBeVisible();
    await expect(page.locator('#login-button')).toBeVisible();
  });

  test.afterAll(async () => {
    console.log('All login tests are done!');
  });
});
