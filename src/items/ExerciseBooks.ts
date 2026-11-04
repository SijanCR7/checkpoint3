import type { Item } from "../interfaces/Item";

// Class for exercise books
export class ExerciseBooks implements Item {

  // Price of one exercise book
  price = 30;

  // Returns the price
  getCost(): number {
    return this.price;
  }
}