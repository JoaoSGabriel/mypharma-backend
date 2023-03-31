import { Request, Response } from "express";
import httpStatus from "http-status";
import productService from "../services/product.service";

export async function getAllProducts(req: Request, res: Response) {
  const { filter } = req.query;

  if (filter && filter !== "asc" && filter !== "desc") {
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
  const { category } = req.query;

  if (typeof category !== "string") {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }

  try {
    const products = await productService.filterProducts(category);
    res.status(httpStatus.OK).send(products);
  } catch (error) {
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}
