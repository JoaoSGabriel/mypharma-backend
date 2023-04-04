import prisma from "../configs/prisma";
import { Category, Prisma, Product } from "@prisma/client";

async function showProducts(price?: Prisma.SortOrder): Promise<Product[]> {
  return await prisma.product.findMany({
    orderBy: {
      price: price,
    },
  });
}

async function showAlphabeticProducts(): Promise<Product[]> {
  return await prisma.product.findMany({
    orderBy: {
      name: "asc",
    },
  });
}

async function filterByCategorie(
  category: Categories,
  price?: Prisma.SortOrder
): Promise<Product[]> {
  return await prisma.product.findMany({
    where: {
      category,
    },
    orderBy: {
      price: price,
    },
  });
}

async function filterByAlphabeticCategorie(
  category: Categories
): Promise<Product[]> {
  return await prisma.product.findMany({
    where: {
      category,
    },
    orderBy: {
      name: "asc",
    },
  });
}

async function searchProductByName(name: string) {
  return await prisma.product.findMany({
    where: {
      name: {
        contains: name,
      },
    },
  });
}

export type Categories = Prisma.EnumCategoryFilter;

const productRepository = {
  showProducts,
  showAlphabeticProducts,
  filterByCategorie,
  filterByAlphabeticCategorie,
  searchProductByName,
};

export default productRepository;
