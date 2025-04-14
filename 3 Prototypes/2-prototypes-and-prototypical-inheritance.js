let user = {
  name: 'Steven',
  surname: 'Garcia',
  email: 'steven@stevencodecraft.com',
  isActive: true,

  // user.fullName = 'Bruce Wayne';
  set fullName(value) {
    ;[this.name, this.surname] = value.split(' ')
  },

  get fullName() {
    return `${this.name} ${this.surname}`
  },

  login() {
    console.log(`${this.fullName} logged in`)
  },

  logout() {
    console.log(`${this.fullName} logged out.`)
  },
}

let admin = {
  __proto__: user,
  isAdmin: true,
  manageUsers() {
    console.log(`${this.fullName} is managing users.`)
  },
}
