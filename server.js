import express from "express";
import cors from "cors";
import AuthRouter from './Routes/AuthRouter.js';

const app = express()
import dotenv from 'dotenv';
dotenv.config();
import mongoConnection from "./Models/db.js"

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
// "http://localhost:5173/"
app.use('/api', AuthRouter)

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})