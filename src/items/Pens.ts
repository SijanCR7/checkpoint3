import type { Item } from "../interfaces/Item";

// Class for pens
export class Pens implements Item {

  // Price of one pen
  price = 12;

  // Returns the price of a pen
  getCost(): number {
    return this.price;
  }
}