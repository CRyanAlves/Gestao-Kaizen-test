import express from "express";
import  geraRandomNumbers from "../controller/rng.controller.js"

const app = express();

app.use(express.json());

app.get('/', (req, res) => { res.send(geraRandomNumbers())})

export default app;