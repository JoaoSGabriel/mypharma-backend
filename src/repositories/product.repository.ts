import prisma from "../configs/prisma";
import { Product } from "@prisma/client";

async function showProducts(): Promise<Product[]> {
  return await prisma.product.findMany();
}

const productRepository = {
  showProducts,
};

export default productRepository;
