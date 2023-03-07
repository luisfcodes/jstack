const user = {
  firstName: 'Luis Fernando',
  lastName: 'Da Silva',
  full_name: 'Luis Fernando da Silva',
  age: 25,
  instagram: '@luisfcodes',
  skills: ['Front-end']
}

const { firstName, skills, ...params } = user
const [ primary ] = skills

console.log(firstName, primary, params)