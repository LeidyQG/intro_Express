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

router.get(
    '/aleatorio',
    (req:Request, res:Response)=>{
        const min = 1;
        const max = 100000;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(randomNumber);
        res.send(randomNumber.toString())
    }
)





export default router
