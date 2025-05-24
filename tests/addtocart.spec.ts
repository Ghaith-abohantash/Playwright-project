import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';


test('Add product to cart', async ({ page }) => {
  const productsPage = new ProductsPage(page);

await page.goto('https://www.saucedemo.com/inventory.html');


  await productsPage.addToCart('Sauce Labs Onesie');

  const cartBadge = await page.locator('.shopping_cart_badge').textContent();
  expect(cartBadge).toBe('1');
}





);
