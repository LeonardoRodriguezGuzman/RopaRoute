const { conectar, desconectar, connection } = require("./Conexion");

function getUsuario(correo, callback) {
  conectar();
  const sql = "select * from usuario where correo=?";
  const values = [correo];
  let r = null;
  connection.query(sql, values, (error, results, fields) => {
    desconectar();
    if (error) {
      callback(error, null);
    } else {
        callback(null, results);
    }
  });
}
module.exports = { getUsuario };
