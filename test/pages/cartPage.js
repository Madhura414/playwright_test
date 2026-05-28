export class CartPage {
  constructor(page) {
    this.page = page;
    this.numberOfProducts = '//tbody[@id="tbodyid"]/tr//td[2]';
  }
  async CheckProductInCart(productName) {
    const products = await this.page.$$(this.numberOfProducts);
    for (const product of products) {
      console.log(await product.textContent());
      if (productName === (await product.textContent())) {
        return true;
        break;
      }
    }
  }
}
