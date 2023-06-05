import express from "express";

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('olá mundo')
})





app.listen('38000', (req, res) => {
  console.log('listening on http://localhost:38000')
})