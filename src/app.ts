import express, { Application, NextFunction, Request, Response } from "express"
import dotenv from 'dotenv'
dotenv.config()//Lee la configuración del archivo .env
import rutas_ejemplo from './routes/rutas_ejemplo'
import rutas_auth from './routes/authRoutes'

const app:Application=express()

app.use('/auth',rutas_auth)
app.use('/',rutas_ejemplo)//Usar las rutas creadas

//Respuesta cuando el recurso no existe
app.use((req:Request, res:Response, next:NextFunction)=>{
    res.status(404).json({message: 'Upps!!, Lo que pidió no existe'}) //Sólo para personalización, si no utiliza los predeterminados
})


//Respuesta cuando existe un error de servidor


export default app