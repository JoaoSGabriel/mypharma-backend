import productRepository from "../repositories/product.repository";

async function showProducts(filter?: string) {
  if (filter === "name") {
    return productRepository.showAlphabeticProducts();
  }

  return productRepository.showProducts(filter);
}

async function filterProducts(category: string, filter?: string) {
  if (filter === "name") {
    return productRepository.filterByAlphabeticCategorie(category);
  }

  return productRepository.filterByCategorie(category, filter);
}

const productService = {
  showProducts,
  filterProducts,
};

export default productService;
