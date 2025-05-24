import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import * as dotenv from 'dotenv';
dotenv.config();

test.describe('Checkout Tests', () => {
  test('Complete checkout process', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await page.goto('https://www.saucedemo.com/inventory.html');

    await productsPage.addToCart('Sauce Labs Backpack');
    await cartPage.openCart();
    await cartPage.proceedToCheckout();

    await checkoutPage.fillCheckoutInformation('Ghaith', 'Test', '111');
    await checkoutPage.continueCheckout();
    await checkoutPage.finishCheckout();

    const pageTitle = await page.locator('.title').textContent();
    expect(pageTitle).toContain('Checkout: Complete');
  });

  test('Checkout with missing zip code', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await page.goto('https://www.saucedemo.com/inventory.html');

    await productsPage.addToCart('Sauce Labs Backpack');
    await cartPage.openCart();
    await cartPage.proceedToCheckout();

    await checkoutPage.fillCheckoutInformation('Ghaith', 'Test', '');

    await checkoutPage.continueCheckout();

    const errorMessage = await page.locator('[data-test="error"]').textContent();
    expect(errorMessage).toContain('Error: Postal Code is required');
  });

  test.skip('Should show error message when trying to checkout with empty cart', async ({ page }) => {
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await page.goto('https://www.saucedemo.com/inventory.html');

    await cartPage.openCart();

    await cartPage.proceedToCheckout();

    const errorMessage = await page.locator('[data-test="error"]').textContent();

    expect(errorMessage).toContain('Your cart is empty');
  });

  test.afterAll(async () => {
    console.log('All checkout tests completed!');
  });
});
