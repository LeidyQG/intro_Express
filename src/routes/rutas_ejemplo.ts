import express, {Router,Request, Response} from "express"

const router:Router= Router()

//Usualmente las rutas corresponden a métodos CRUD

router.get(
    '/mensaje',
    (req:Request, res:Response)=>{

        res.send('Hoy es un día fabuloso')
    }
)

router.get(
    '/despedida',
    (req:Request, res:Response)=>{

        res.send('Hasta luego')
    }
)




export default router
