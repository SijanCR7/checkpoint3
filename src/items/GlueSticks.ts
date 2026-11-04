import type { Item } from "../interfaces/Item";

// Class for glue sticks
export class GlueSticks implements Item {

  // Price of one glue stick
  price = 25;

  // Returns the glue stick price
  getCost(): number {
    return this.price;
  }
}