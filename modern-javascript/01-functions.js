function myFunction(){
  this.name = 'Luis Fernando'

  const myArrowFunction = () => {
    this.lastname = 'Da Silva'
  }

  myArrowFunction()
}

console.log(new myFunction())
console.log(this)

function somaFunction(firstArg, ...args) {
  console.log(arguments)
  console.log({ firstArg })
  console.log({ args })
}

const somaArrowFunction = () => {
  console.log(arguments)
}

somaFunction(1, 2, 3, 4, 5, 6, 7)
somaArrowFunction(1, 2, 3, 4, 5, 6, 7)

const getUserWithReturn = () => {
  return {
    id: 1,
    name: 'Luis Fernando'
  }
}

const getUserWithoutReturn = () => ({
  id: 1,
  name: 'Luis Fernando'
})

console.log(getUserWithReturn())
console.log(getUserWithoutReturn())