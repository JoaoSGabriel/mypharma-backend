import { Request, Response } from "express";
import httpStatus from "http-status";
import productService from "../services/product.service";

export async function getAllProducts(req: Request, res: Response) {
  try {
    const products = productService.showProducts();
    res.status(httpStatus.OK).send(products);
  } catch (error) {
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}
