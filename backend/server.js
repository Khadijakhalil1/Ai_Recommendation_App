import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import dns from "node:dns/promises";
dns.setServers(["8.8.8.8","1.1.1.1"]);

dotenv.config()
//app config
const app = express()
const port = process.env.PORT || 4000
//midleware
app.use(express.json())
app.use(cors())
app.get('/', (req, res)=>
{
    res.send('Hello World')
})
connectDb()  // ← server ke andar nahi, bahar rakho

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port} 🚀`)
})