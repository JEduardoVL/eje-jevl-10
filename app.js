//Crear el servidor

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//condfiguraciones
//para que busque el index.html
app.use(express.static('public'));

app.get('*',(req,res)=>{
    res.sendFile(__dirname+'public/not-found-404.html');
})

//procesos
app.listen(port,()=>{
    console.log('El servidor esta corriendo en el puerto:', port);
})

