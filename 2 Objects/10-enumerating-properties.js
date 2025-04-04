function GroceryItem(name, quantity) {
  this.name = name
  this.quantity = quantity
  this.display = function () {
    console.log(`${this.quantity} x ${this.name}`)
  }
}
const groceryItem1 = new GroceryItem('Apples', 4)

for (const key in groceryItem1) {
  console.log(key) // keys
  console.log(groceryItem1[key]) // values
  console.log(`${key} -> ${groceryItem1[key]}`) // values
}

// Alternative
for (const key of Object.keys(groceryItem1)) {
  console.log(key)
}
for (const value of Object.values(groceryItem1)) {
  console.log(value)
}
for (const entry of Object.entries(groceryItem1)) {
  console.log(entry)
}
