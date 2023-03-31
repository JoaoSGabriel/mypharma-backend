import prisma from "../configs/prisma";
import { Prisma, Product } from "@prisma/client";

async function showProducts(filter?: filter): Promise<Product[]> {
  return await prisma.product.findMany({
    orderBy: {
      price: filter,
    },
  });
}

async function filterByCategorie(
  category: string,
  obj?: Prisma.ProductOrderByWithRelationInput
): Promise<Product[]> {
  return await prisma.product.findMany({
    where: {
      category,
    },
    orderBy: obj,
  });
}

const productRepository = {
  showProducts,
  filterByCategorie,
};

export type filter = Prisma.SortOrder;

export default productRepository;
