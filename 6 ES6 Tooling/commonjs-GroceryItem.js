class GroceryItem {
  constructor(name, quantity) {
    this.name = name
    this.quantity = quantity
  }
  display() {
    console.log(`${this.name} x ${this.quantity}`)
  }
}

module.exports = GroceryItem
