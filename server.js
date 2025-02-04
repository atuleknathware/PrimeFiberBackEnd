const express=require("express")
const app=express()
const cors=require("cors")
const AuthRouter=require('./Routes/AuthRouter')

require("dotenv").config()
require("./Models/db")
const PORT=process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
// "http://localhost:5173/"
app.use('/api',AuthRouter)

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})