import { Page } from '@playwright/test';

export class ProductsPage {
  constructor(private page: Page) {}

  async addToCart(productName: string) {
    await this.page.locator(`.inventory_item:has-text("${productName}") >> button:has-text("Add to cart")`).click();
  }

  async sortBy(option: string) {
    await this.page.selectOption('[data-test="product-sort-container"]', option);
  }

  async isSortedByPriceDesc(): Promise<boolean> {
    const prices = await this.page.$$eval('.inventory_item_price', nodes =>
      nodes.map(n => parseFloat(n.textContent!.replace('$', '')))
    );
    return prices.every((element, index, array) => index === 0 || array[index - 1] >= element);
  }

  async isSortedByPriceAsc(): Promise<boolean> {
    const prices = await this.page.$$eval('.inventory_item_price', items  =>
      items .map(n => parseFloat(n.textContent!.replace('$', '')))
    );
    return prices.every((element, index, array) => index === 0 || array[index - 1] <= element);
  }

  async isSortedByNameAsc(): Promise<boolean> {
    const names = await this.page.$$eval('.inventory_item_name', items  =>
      items .map(n => n.textContent!.trim())
    );
    return names.every((element, index, array) => index === 0 || array[index - 1].localeCompare(element) <= 0);
  }

  async isSortedByNameDesc(): Promise<boolean> {
    const names = await this.page.$$eval('.inventory_item_name', items  =>
      items .map(n => n.textContent!.trim())
    );
    return names.every((element, index, array) => index === 0 || array[index - 1].localeCompare(element) >= 0);
  }
}
