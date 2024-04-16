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
  //console.log(req.body.correo);
  query.getUsuario(req.body.correo, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      //console.log(result);
      res.send(result);
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

app.listen(3000);
console.log("server en el puerto 3000");
