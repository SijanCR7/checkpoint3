import type { Item } from "../interfaces/Item";
import { ItemDecorator } from "./ItemDecorator";

// Calculates total cost based on quantity
export class QuantityDecorator extends ItemDecorator {

  private quantity: number;

  constructor(item: Item, quantity: number) {
    super(item);
    this.quantity = quantity;
  }

  // Multiplies item cost by selected quantity
  getCost(): number {
    return super.getCost() * this.quantity;
  }
}