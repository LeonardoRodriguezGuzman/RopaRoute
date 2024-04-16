const { conectar, desconectar, connection } = require("./Conexion");

function getUsuario(correo, callback) {
  conectar();
  const sql = "select * from usuario where correo=?";
  const values = [correo];
  connection.query(sql, values, (error, results, fields) => {
    // desconectar();
    if (error) {
      callback(error, null);
    } else {
      callback(null, results[0]);
    }
  });
}

function crearUsuario({rfc,nombre,correo,password,direccion,rol}, callback) {
  conectar();
  const sql = "insert into usuario values(?,?,?,?,?,?)";
  const values = [rfc, nombre, correo, password,direccion,rol];
  connection.query(sql, values, (error, results, fields) => {
    // desconectar();
    if (error) {
      callback(error, null);
    } else {
      callback(null, "ok");
    }
  });
}

module.exports = { getUsuario, crearUsuario };
