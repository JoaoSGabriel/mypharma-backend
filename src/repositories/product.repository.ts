import prisma from "../configs/prisma";
import { Product } from "@prisma/client";

async function showProducts(price?: string): Promise<Product[]> {
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
  category: string,
  price?: string
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
  category: string
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

const productRepository = {
  showProducts,
  showAlphabeticProducts,
  filterByCategorie,
  filterByAlphabeticCategorie,
};

export default productRepository;
