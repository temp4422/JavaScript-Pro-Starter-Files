function calculatePrice(groceryItem, price) {
  return groceryItem.quantity * price
}
const performCalculation = calculatePrice
performCalculation({ name: 'Apples', quantity: 2 }, 2)
