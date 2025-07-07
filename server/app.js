import express from 'express';
import {config} from 'dotenv'
import connectDB from "./db/connectDB.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cookieParser from 'cookie-parser';
import cors from 'cors';
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

config({path:"./config/config.env"})



app.use(cookieParser());

app.use('/api/auth',userRoutes)    
    
app.use('/product',productRoutes)

connectDB("mongodb://localhost:27017/medico_db");

export default app;