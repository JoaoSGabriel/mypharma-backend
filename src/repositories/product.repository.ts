import prisma from "../configs/prisma";
import { Prisma, Product } from "@prisma/client";

async function showProducts(): Promise<Product[]> {
  return await prisma.product.findMany({});
}

async function filterByCategorie(category: string) {
  return await prisma.product.findMany({
    where: {
      category,
    },
  });
}

const productRepository = {
  showProducts,
  filterByCategorie,
};

export default productRepository;
