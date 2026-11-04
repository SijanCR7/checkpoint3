import type { Item } from "../interfaces/Item";

// Class for sharpeners
export class Sharpener implements Item {

  // Price of one sharpener
  price = 18;

  // Returns the price
  getCost(): number {
    return this.price;
  }
}