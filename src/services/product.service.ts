import { Category } from "@prisma/client";
import productRepository from "../repositories/product.repository";

function showProducts(filter?: string) {
  if (filter === "name") {
    return productRepository.showAlphabeticProducts();
  }

  if (filter === "asc" || filter === "desc") {
    return productRepository.showProducts(filter);
  }

  return productRepository.showProducts();
}

function filterProducts(category: Category, filter?: string) {
  if (filter === "name") {
    return productRepository.filterByAlphabeticCategorie(category);
  }

  if (filter === "asc" || filter === "desc") {
    return productRepository.filterByCategorie(category, filter);
  }

  return productRepository.filterByCategorie(category);
}

function searchProductByName(name: string) {
  return productRepository.searchProductByName(name);
}

function searchProductById(id: string) {
  return productRepository.findProductById(id);
}

const productService = {
  showProducts,
  filterProducts,
  searchProductByName,
  searchProductById,
};

export default productService;
