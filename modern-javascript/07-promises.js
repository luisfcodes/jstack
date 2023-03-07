const apiCall = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ res: 'Sucesso!' })
    // reject({ err: 'Erro!' })
  }, 2000)
})

apiCall
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })

console.log('After promisse with then/catch...')

async function run() {
  try {
    const response = await apiCall
    console.log(response)
    console.log('After promisse with async/await...')
  } catch (err) {
    console.log(err)
  }
}

run()