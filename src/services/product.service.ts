import productRepository, { filter } from "../repositories/product.repository";

async function showProducts(filter?: filter) {
  if (filter) {
    return await productRepository.showProducts(filter);
  } else {
    return await productRepository.showProducts();
  }
}

async function filterProducts(category: string) {
  return productRepository.filterByCategorie(category);
}

const productService = {
  showProducts,
  filterProducts,
};

export default productService;
