import { Router } from "express";
import {
  getAllProducts,
  getProductByName,
  getProductCategory,
} from "../controllers/product.controller";

const productRouter = Router();

productRouter.get("/", getAllProducts);
productRouter.get("/filter", getProductCategory);
productRouter.get("/search", getProductByName);

export { productRouter };
