import app from "./app";


const puerto=3000
app.listen(
    puerto,
    ()=>{console.log(`El servidor está escuchando en el puerto ${puerto}`)}
    )