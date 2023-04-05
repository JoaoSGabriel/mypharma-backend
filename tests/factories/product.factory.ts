type mockProduct = {
  name: string;
  price: number;
  category: string;
};

export const products = [
  {
    name: "Acém Bovino bandeja 500G",
    price: 27.9,
    category: "Meat",
  },
  {
    name: "Cerveja Barba Ruiva 500ml",
    price: 26.9,
    category: "Beverage",
  },
  {
    name: "Leite Longa Vida 1L",
    price: 4.99,
    category: "Dairy",
  },
];

function alphabeticOrder(a: mockProduct, b: mockProduct) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

export const alphabeticProducts = products.sort(alphabeticOrder);
