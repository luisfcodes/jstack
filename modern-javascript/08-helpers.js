const tech = 'Node.js'
const array = ['Node.js', 'React', 'TypeScript']

const includesString = tech.includes('Node')
const includesArray = array.includes('React')

const startsWith = tech.startsWith('No');
const endsWith = tech.endsWith('js')

console.log(includesString, includesArray)
console.log(startsWith, endsWith)