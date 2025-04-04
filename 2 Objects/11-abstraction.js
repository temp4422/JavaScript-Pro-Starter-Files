function GroceryItem(name, quantity) {
  this.name = name
  this.quantity = quantity
  this.display = function () {
    console.log(`${this.quantity} x ${this.name}`)
  }
}

function GroceryList() {
  // Private property
  const items = []
  // Private methods
  const calculateTotalQuantity = function () {
    return items.reduce((total, item) => total + item.quantity, 0)
  }

  // Public methods
  this.addItem = function (name, quantity) {
    items.push(new GroceryItem(name, quantity))
  }
  this.displayItems = function () {
    items.forEach((item) => item.display())
  }
  this.getTotalQuantity = function () {
    return calculateTotalQuantity()
  }
}

const groceryList1 = new GroceryList()
groceryList1.addItem('Apples', 5)
groceryList1.addItem('Bananas', 3)
groceryList1.displayItems()
groceryList1.getTotalQuantity()
