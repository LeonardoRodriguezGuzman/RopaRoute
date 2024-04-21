const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ULI20190",
  database: "ropa__route"
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
  connection.end((err) => {
    if (err) {
      console.error("Error al cerrar la conexión a la base de datos:", err.message);
      return;
    }
    console.log('Conexión cerrada correctamente');
  });
}

module.exports={conectar, desconectar,connection};