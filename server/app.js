import express from 'express';
import {config} from 'dotenv'
import connectDB from "./db/connectDB.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cookieParser from 'cookie-parser';
const app = express();

config({path:"./config/config.env"})

app.use(express.json());
app.use(cookieParser());

app.use('/',userRoutes)    

app.use('/product',productRoutes)

connectDB("mongodb://localhost:27017");

export default app;