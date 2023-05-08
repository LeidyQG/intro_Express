import express, { Application, NextFunction, Request, Response } from "express"
import rutas_ejemplo from './routes/rutas_ejemplo'

const app:Application=express()

app.use('/',rutas_ejemplo)//Usar las rutas creadas

//Respuesta cuando el recurso no existe
app.use((req:Request, res:Response, next:NextFunction)=>{
    res.status(404).json({message: 'Upps!!, Lo que pidió no existe'}) //Sólo para personalización, si no utiliza los predeterminados
})


//Respuesta cuando existe un error de servidor


export default app