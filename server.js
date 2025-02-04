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


const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Node.js Server</title>
</head>
<body>
    <h1>Welcome to My Simple Node.js Server</h1>
    <p>This is a basic HTML page served with Express.</p>
</body>
</html>
`;

// Define the route for the landing page
app.get('/', (req, res) => {
    res.send(htmlContent);
});

app.use('/api', AuthRouter)

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})