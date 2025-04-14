let person = {
  name: 'Steven',
}
// console.log(person)

let personPropertyDescriptor = Object.getOwnPropertyDescriptor(person, 'name')
// console.log(personPropertyDescriptor)

for (const key in person) {
  console.log(key)
}

Object.defineProperty(person, 'name', {
  enumerable: false,
})

for (const key in person) {
  console.log(key)
}

// let objectBase = Object.getPrototypeOf(person)
// let objectBasePropertyDescriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString')
// console.log(objectBasePropertyDescriptor)
