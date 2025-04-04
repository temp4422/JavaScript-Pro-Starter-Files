function createGroceryItem(name, quantity) {
  return {
    name,
    quantity,
    display() {
      console.log(`${this.quantity} x ${this.name}`)
    },
  }
}
const groceryItem1 = createGroceryItem('Apples', 4)
groceryItem1.display()
