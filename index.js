import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectdb from './Database/DBconfig.js';
import userrouter from './Routter/User.routter.js'

dotenv.config();

const app = express();

app.use(express.json());

connectdb();

app.use(cors());

app.get('/',(req,res) =>{
    res.status(200).send("welcome to api ramesh")
});

app.use('/api/auth',userrouter);

const port = process.env.PORT || 4000;

app.listen(port,()=>{
  console.log("server started Ramesh");
})