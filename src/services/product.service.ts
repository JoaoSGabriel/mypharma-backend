import productRepository from "../repositories/product.repository";

async function showProducts() {
  return productRepository.showProducts();
}

const productService = {
  showProducts,
};

export default productService;
