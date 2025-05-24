import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import * as dotenv from 'dotenv';
dotenv.config();

test.describe('Sort Feature Tests', () => {
  let loginPage: LoginPage;
  let productsPage: ProductsPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
      await page.goto('https://www.saucedemo.com/inventory.html');

  });

  test('Sort products from high to low price', async ({ page }) => {
    await productsPage.sortBy('hilo');
    expect(await productsPage.isSortedByPriceDesc()).toBeTruthy();
  }

);
test('Sort products from low to high price', async ({ page }) => {
  await productsPage.sortBy('lohi');
  expect(await productsPage.isSortedByPriceAsc()).toBeTruthy();
});

test('Sort products alphabetically A to Z', async ({ page }) => {
  await productsPage.sortBy('az');
  expect(await productsPage.isSortedByNameAsc()).toBeTruthy();
});
test('Sort products alphabetically Z to A', async ({ page }) => {
  await productsPage.sortBy('za');
  expect(await productsPage.isSortedByNameDesc()).toBeTruthy();
});




});
