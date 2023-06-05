import express from "express";
import {geraRandomNumbers} from "../controller/rngController"

const app = express();

app.use(express.json());

app.get('/', geraRandomNumbers)





app.listen('38000', () => console.log('listening on http://localhost:38000'))