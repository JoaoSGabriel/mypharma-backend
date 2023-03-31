import { Router } from "express";
import {
  getAllProducts,
  getProductCategory,
} from "../controllers/product.controller";

const productRouter = Router();

productRouter.get("/", getAllProducts);
productRouter.get("/filter", getProductCategory);

export { productRouter };
