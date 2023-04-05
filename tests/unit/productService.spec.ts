import { jest } from "@jest/globals";

import productService from "../../src/services/product.service";
import productRepository from "../../src/repositories/product.repository";

import {
  alphabeticProducts,
  ascOrderProducts,
  products,
} from "../factories/product.factory";

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

  it("should return products in rising order", async () => {
    jest
      .spyOn(productRepository, "showProducts")
      .mockImplementationOnce((): any => {
        return ascOrderProducts;
      });

    const result = await productService.showProducts("asc");
    expect(result).toEqual(ascOrderProducts);
  });

  it("should return all products", async () => {
    jest
      .spyOn(productRepository, "showProducts")
      .mockImplementationOnce((): any => {
        return products;
      });

    const result = await productService.showProducts("asc");
    expect(result).toEqual(products);
  });

  it("should return one category products in alphabetic order", async () => {
    jest
      .spyOn(productRepository, "filterByAlphabeticCategorie")
      .mockImplementationOnce((): any => {
        return products[1];
      });

    const result = await productService.filterProducts("Beverage", "name");
    expect(result).toEqual(products[1]);
  });

  it("should return one category products in rising order", async () => {
    jest
      .spyOn(productRepository, "filterByCategorie")
      .mockImplementationOnce((): any => {
        return products[1];
      });

    const result = await productService.filterProducts("Beverage", "asc");
    expect(result).toEqual(products[1]);
  });

  it("should return one category products", async () => {
    jest
      .spyOn(productRepository, "filterByCategorie")
      .mockImplementationOnce((): any => {
        return products[1];
      });

    const result = await productService.filterProducts("Beverage");
    expect(result).toEqual(products[1]);
  });

  it("should return products thats contains the word", async () => {
    jest
      .spyOn(productRepository, "searchProductByName")
      .mockImplementationOnce((): any => {
        return products[2];
      });

    const result = await productService.searchProductByName("Cerveja");
    expect(result).toEqual(products[2]);
  });
});
