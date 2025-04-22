class GroceryItemFunc {
  constructor(name, quantity) {
    this.name = name
    this.quantity = quantity
  }

  display() {
    console.log(`${this.name} x ${this.quantity}`)
  }

  static compareQuantities(item1, item2) {
    if (item1.quantity > item2.quantity) {
      return console.log(`${item1.name} has more quantity than ${item2.name}`)
    }
    if (item1.quantity < item2.quantity) {
      return console.log(`${item2.name} has more quantity than ${item1.name}`)
    }
    if (item1.quantity === item2.quantity) {
      return console.log(`${item1.name} has same quantity as ${item2.name}`)
    }
  }
}

const groceryItem1 = new GroceryItemFunc('Apple', 4)
const groceryItem2 = new GroceryItemFunc('Bananas', 3)

GroceryItemFunc.compareQuantities(groceryItem1, groceryItem2)
