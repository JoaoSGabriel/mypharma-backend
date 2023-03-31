import productRepository from "../repositories/product.repository";

function showProducts(filter?: string) {
  if (filter === "name") {
    return productRepository.showAlphabeticProducts();
  }

  return productRepository.showProducts(filter);
}

function filterProducts(category: string, filter?: string) {
  if (filter === "name") {
    return productRepository.filterByAlphabeticCategorie(category);
  }

  return productRepository.filterByCategorie(category, filter);
}

function searchProductByName(name: string) {
  return productRepository.searchProductByName(name);
}

const productService = {
  showProducts,
  filterProducts,
  searchProductByName,
};

export default productService;
