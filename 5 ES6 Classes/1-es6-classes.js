// function GroceryItemFunc(name, quantity) {
//   this.name = name
//   this.quantity = quantity

//   this.display = function () {
//     console.log(`${this.name} x ${this.quantity}`)
//   }
// }

class GroceryItemFunc {
  constructor(name, quantity) {
    this.name = name
    this.quantity = quantity
  }

  display() {
    console.log(`${this.name} x ${this.quantity}`)
  }
}

const groceryItem1 = new GroceryItemFunc('Apple', 4)
groceryItem1.display()
