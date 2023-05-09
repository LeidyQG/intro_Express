import express, {Router,Request, Response} from "express"
import jwt from 'jsonwebtoken'
const router:Router= Router()

//Usualmente las rutas corresponden a métodos CRUD

router.get(
    '/login',
    (req:Request, res:Response)=>{
        //TO DO:OBTENER DATOS DE LA DB
        const payload={
            id:"user_id",
            username:"paulo"
        }

        const options={
            expiresIn:"2h",
        }

        const secretKey=process.env.SECRET_KEY //Esto no debería colocarse en el código fuente sino en un .env npm install dotenv para la biblioteca que permite usar las variables de entorno
        if(typeof secretKey=='string'){
            const token=jwt.sign(payload,secretKey,options)
            res.json({token})
        }
    
    }

)






export default router
