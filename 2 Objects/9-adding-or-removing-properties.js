function GroceryItem(name, quantity) {
  this.name = name
  this.quantity = quantity
  this.display = function () {
    console.log(`${this.quantity} x ${this.name}`)
  }
}
const groceryItem1 = new GroceryItem('Apples', 4)

groceryItem1.name2 = 'Bananas'
groceryItem1['name3'] = 'Oranges'

groceryItem1.groceryAisle = 'Test'

console.log(groceryItem1)
