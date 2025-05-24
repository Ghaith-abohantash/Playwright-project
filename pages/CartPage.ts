import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async openCart() {
    await this.page.click('.shopping_cart_link');
  }
async removeFromCart(productName: string) {
  const productLocator = this.page.locator(`.cart_item:has-text("${productName}")`);
  const removeButton = productLocator.locator('button:has-text("Remove")');
  await removeButton.click();
}


  async proceedToCheckout() {
    await this.page.click('[data-test="checkout"]');
  }

  async isCartEmpty() {
    const items = await this.page.$$('.cart_item');
    return items.length === 0;
  }
}
