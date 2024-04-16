const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ULI20190",
  database: "ropa_route"
});

function conectar(){
  connection.connect((err) => {
    if (err) {
      console.error("Error al conectar a la base de datos: ", err);
      return;
    }
    console.log('conectado :)');
  });
}
function desconectar(){
  connection.destroy();
}

module.exports={conectar, desconectar,connection};