import app from '../routes/rngRoute.js'

const PORTA = 3333

// fazer a conexao

  app.listen(PORTA, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORTA}`)
  })
