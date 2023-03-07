const user = {
  firstName: 'Luis Fernando',
  lastName: 'Da Silva',
  full_name: 'Luis Fernando da Silva',
  age: 25,
  instagram: '@luisfcodes',
  skills: ['Front-end']
}

const { firstName, lastName, age } = user

console.log(firstName, lastName, age)

const fruits = ['apple', 'watermelon', 'banana', 'pear']

const [ primary, secondary, tertiary, quaternary ] = fruits

console.log(primary, secondary, tertiary, quaternary)

const { full_name: fullName } = user

console.log(fullName)