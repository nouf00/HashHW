import express from 'express'
import { connectDB } from './Config/db';
const app=express();
connectDB()

app.use(express.json())

//middlware __________________________________________________










//_____________________________________________________
 const PORT =process.env.PORT || 5000
 app.listen(PORT ,()=>{
    console.log("The server that has port "+PORT+" is work ")
 })

