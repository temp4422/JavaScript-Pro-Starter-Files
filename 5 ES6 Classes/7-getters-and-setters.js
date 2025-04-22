const _language = new WeakMap()

class ProgrammerImplementation {
  constructor(name, language) {
    this.name = name
    _language.set(this, language)

    // // Approach 2
    // Object.defineProperty(this, 'language', {
    //   get: function () {
    //     return _language.get(this)
    //   },
    // })
  }

  // // Approach 1
  // getLanguage() {
  //   return _language.get(this)
  // }

  // Approach 3 RECOMMENDED!
  get language() {
    return _language.get(this)
  }

  set language(newLanguage) {
    if (!newLanguage) throw new Error('Language cannot be empty')
    _language.set(this, newLanguage)
  }
}

const newProgrammer = new ProgrammerImplementation('Steven', 'JavaScript')
console.log(newProgrammer.name)
// console.log(newProgrammer.getLanguage()) // Approach 1
console.log(newProgrammer.language)
newProgrammer.language = 'Python'
console.log(newProgrammer.language)
