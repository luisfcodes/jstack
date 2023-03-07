const user = {
  firstName: 'Luis Fernando',
  lastName: 'Da Silva',
  age: 25,
  instagram: '@luisfcodes',
  skills: ['Front-end'],
  active: false
}

const updateUser = {
  ...user,
  active: true
}

console.log(updateUser)

const updateUserSkills = {
  ...user,
  skills: [...user.skills, 'Back-end'],
  active: true
}

console.log(updateUserSkills)