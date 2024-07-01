import dotenv from "dotenv"
import connectDB from "./db/index.js";
import express from "express";
import cors from "cors"
import bodyParser from "body-parser";
import contactRoutes from './routes/contact.js';
import Collaboration from './routes/sponsor.js'

dotenv.config({
    path: './.env'
})

connectDB()
const app = express();
const port = process.env.PORT || 5000;


// Middleware
app.use(cors());
app.use(bodyParser.json());


// Routes
app.use('/api', contactRoutes);
app.use('/api', Collaboration);


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

 