import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from "./configs/mongodb.js";
import userRouter from '../server/routes/userRoute.js'

//App config

const PORT = process.env.PORT || 1000
const app = express()
await connectDB()
// Initialize Middlewares
app.use(express.json())
app.use(cors())


// API ROUTES
app.get('/', (req, res) => res.send('API WORKING!'))
app.use('/api/user', userRouter)
app.listen(PORT, ()=> console.log('server running on port', PORT))