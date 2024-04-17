const { conectar, desconectar, connection } = require("./Conexion");

function getUsuario({user,password}, callback) {
  conectar();
  const sql = "select * from usuario where nombre=? and password=?";
  const values = [user,password];
  connection.query(sql, values, (error, results, fields) => {
    // desconectar();
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
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
