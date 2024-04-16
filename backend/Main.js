const express = require("express");
const mysql = require("mysql2");
const query = require("./Consultas");

const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ULI20190",
  database: "ropa_route"
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hola1");
});

app.post("/login", (req, res) => {
  
    query.getUsuario(req.body.correo, (error, result)=>{
        if(error){
            console.log('error :(');
        }else{
            res.send(result);
        }
    });
    
});

app.listen(3000);
console.log("server en el puerto 3000");
