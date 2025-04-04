function BankAccount() {
  // Private
  let balance = 0
  const valid = function (amount) {
    if (typeof amount != 'number') return false
    if (amount <= 0) return false
    return true
  }

  // Public
  this.deposit = function (amount) {
    if (!valid(amount)) return 'Not valid deposit'
    balance += amount
  }
  this.withdraw = function (amount) {
    if (!valid(amount) || amount > balance) return 'Not valid withdraw' // Guard clauses
    balance -= amount

    // Alternative
    // if (valid(amount) && amount <= balance) balance -= amount // Nominal path
    // else return 'Not valid withdraw'
  }
  this.getBalance = function () {
    return balance
  }
}

const newBankAccount = new BankAccount()
newBankAccount.getBalance()
newBankAccount.deposit(5)
newBankAccount.withdraw(10)
newBankAccount.getBalance()
