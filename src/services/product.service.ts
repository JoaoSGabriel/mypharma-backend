import productRepository from "../repositories/product.repository";

async function showProducts() {
  const products = await productRepository.showProducts();

  return products;
}

async function filterProducts(category: string) {
  return productRepository.filterByCategorie(category);
}

const productService = {
  showProducts,
  filterProducts,
};

export default productService;
