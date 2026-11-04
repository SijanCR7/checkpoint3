import type { Item } from "../interfaces/Item";

// Class for pencils
export class Pencils implements Item {

  // Price of one pencil
  price = 10;

  // Returns the pencil price
  getCost(): number {
    return this.price;
  }
}