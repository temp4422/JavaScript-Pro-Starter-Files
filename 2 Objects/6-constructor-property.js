function GroceryItem(name, quantity) {
  this.name = name
  this.quantity = quantity
  this.display = function () {
    console.log(`${this.quantity} x ${this.name}`)
  }
}
const groceryItem1 = new GroceryItem('Apples', 4)
console.log(groceryItem1.constructor)
