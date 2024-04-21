const express = require("express");
const query = require("./Consultas");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hola1");
});

app.post("/login", (req, res) => {
  query.getUsuario(req.body, (error, result) => {
    
    if (error || result.length==0) {
      console.log(":(");
      res.send([-1]);
    } else  {
      res.send([result[0].id]);
    // console.log(result);
    }
  });
});

app.post("/registro", (req, res) => {
  query.crearUsuario(req.body, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      //console.log(result);
      res.send(result);
    }
  });
});

app.get("/tiendas", (req, res)=>{
  query.getTiendas((error, result)=>{
    if(error){
      console.log(error);
    }else{
      res.send(result);
    }
  });
});



app.listen(3000);
console.log("server en el puerto 3000");
