class GroceryItem {
  #name
  #quantity

  constructor(name, quantity) {
    this.#name = name
    this.#quantity = quantity
  }

  // Public method to display item details
  displayItem() {
    return `Item: ${this.#name}, Quantity: ${this.#quantity}`
  }
}

class GroceryList {
  #items

  constructor() {
    this.#items = []
  }

  // Public method to add an item to the list
  addItem(name, quantity) {
    const item = new GroceryItem(name, quantity)
    this.#items.push(item)
  }

  // Public method to remove an item from the list by name
  removeItem(name) {
    this.#items = this.#items.filter((item) => !item.displayItem().includes(`Item: ${name},`))
  }

  // Public method to display all items in the list
  displayList() {
    return this.#items.map((item) => item.displayItem()).join('\n')
  }
}

const groceryList = new GroceryList()
groceryList.addItem('Apples', 5)
groceryList.addItem('Bananas', 3)
console.log(groceryList.displayList())
groceryList.removeItem('Apples')
console.log(groceryList.displayList())
