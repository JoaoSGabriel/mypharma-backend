import { jest } from "@jest/globals";

import productService from "../../src/services/product.service";
import productRepository from "../../src/repositories/product.repository";

import { alphabeticProducts } from "../factories/product.factory";

describe("Product searcher unit test suite", () => {
  it("should return products in alphabetic order", async () => {
    jest
      .spyOn(productRepository, "showAlphabeticProducts")
      .mockImplementationOnce((): any => {
        return alphabeticProducts;
      });

    const result = await productService.showProducts("name");
    expect(result).toEqual(alphabeticProducts);
  });

  it("should return products in rising order", () => {});

  it("should return all products", () => {});

  it("should return one category products in alphabetic order", () => {});

  it("should return one category products in rising order", () => {});

  it("should return one category products", () => {});

  it("should return products thats contains the word", () => {});
});
