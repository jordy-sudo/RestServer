require('./server/config')

const express = require('express');
const bodyParser = require('body-Parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/usuario', function (req,res){
    //res.send("Hola mundo!");
    res.json("get usuario");
});

app.post('/usuario', function (req,res){
    let body = req.body;

    if(body.nombre === undefined){
        res.status(400).json({
            ok: false,
            mensaje: "El nombre del usuario es requerido"
        });
    }else{
        res.json({
            body
        });
    }
});

app.put('/usuario/:id', function (req,res){
    let id=req.params.id;

    res.json({
        id
    });
});

app.delete('/usuario', function (req,res){
    //res.send("Hola mundo!");
    res.json("delete usuario");
});

app.listen(process.env.PORT, () => {
    console.log("Escuchando en el puerto: ", process.env.PORT);
});