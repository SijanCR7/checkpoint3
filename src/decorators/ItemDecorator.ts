import type { Item } from "../interfaces/Item";

// Base class for item decorators
export class ItemDecorator implements Item {

  protected item: Item;

  // Stores the selected item
  constructor(item: Item) {
    this.item = item;
  }

  // Returns the cost of the item
  getCost(): number {
    return this.item.getCost();
  }
}