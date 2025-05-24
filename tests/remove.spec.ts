import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import * as dotenv from 'dotenv';
dotenv.config();
const products = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt'];

for (const product of products) {
  test(`Add and remove product from cart: ${product}`, async ({ page }) => {
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

  await page.goto('https://www.saucedemo.com/inventory.html');

    await productsPage.addToCart(product);
    await cartPage.openCart();
    await cartPage.removeFromCart(product);

    expect(await cartPage.isCartEmpty()).toBeTruthy();
  });
}

