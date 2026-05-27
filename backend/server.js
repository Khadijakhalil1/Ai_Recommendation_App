import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import dns from "node:dns/promises";
import foodRouter from "./routes/foodroute.js";
dns.setServers(["8.8.8.8","1.1.1.1"]);

dotenv.config()
//app config
const app = express()
const port = process.env.PORT || 4000
//midleware
app.use(express.json())
app.use(cors())

connectDb()  // ← server ke andar nahi, bahar rakho


//api endpoint
app.use("/api/food",foodRouter)

app.get('/', (req, res)=>{
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port} 🚀`)
})