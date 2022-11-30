import express from 'express'
import { connectDB } from './Config/db';
import routerCont from './router/Routr'

const app=express();
connectDB()

app.use(express.json())

//middlware __________________________________________________
app.use('/api/v1/student', routerCont)
app.use('/api/v1/teacher', routerCont)
app.use('/api/v1/classroom', routerCont)
app.use('/api/v1/log', routerCont)
app.use('/api/v1/rigester', routerCont)



//_____________________________________________________
 const PORT =process.env.PORT || 5000
 app.listen(PORT ,()=>{
    console.log("The server that has port "+PORT+" is work ")
 })

