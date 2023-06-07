import app from './app.js'

const PORTA = 3333

// faz a conexao

  app.listen(PORTA, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORTA}`)
  })
