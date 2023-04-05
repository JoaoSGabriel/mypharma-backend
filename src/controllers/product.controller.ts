import { Category } from "@prisma/client";
import { Request, Response } from "express";
import httpStatus from "http-status";
import productService from "../services/product.service";

export async function getAllProducts(req: Request, res: Response) {
  const { filter } = req.query;

  if (typeof filter !== "string") {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }

  try {
    const products = await productService.showProducts(filter);
    res.status(httpStatus.OK).send(products);
  } catch (error) {
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function getProductCategory(req: Request, res: Response) {
  const { category, filter } = req.query;

  if (typeof filter !== "string" || typeof category !== "string") {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }

  if (
    category !== Category.Bakery &&
    category !== Category.Beverage &&
    category !== Category.Dairy &&
    category !== Category.Deli &&
    category !== Category.Meat &&
    category !== Category.PreparedFoods
  ) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }

  try {
    const products = await productService.filterProducts(category, filter);
    res.status(httpStatus.OK).send(products);
  } catch (error) {
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function getProductByName(req: Request, res: Response) {
  const { name } = req.query;

  if (typeof name !== "string") {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }

  try {
    const products = await productService.searchProductByName(name);
    res.status(httpStatus.OK).send(products);
  } catch (error) {
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function getProductById(req: Request, res: Response) {
  const { id } = req.query;

  if (typeof id !== "string") {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }

  try {
    const product = await productService.searchProductById(id);
    res.status(httpStatus.OK).send(product);
  } catch (error) {
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}
