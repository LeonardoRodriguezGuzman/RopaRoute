const { conectar, connection } = require("./Conexion");

function getUsuario({ user, password }, callback) {
  conectar();
  const sql = "select * from usuario where nombre=? and password=?";
  const values = [user, password];

  connection.query(sql, values, (error, results, fields) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
  
}

function getUserInfo({ id }, callback) {
  conectar();
  const sql = "select * from usuario where nombre=? and password=?";
  const sql2 = "select * from usuario where id=?";

  const values = [user, password];
  const values2 = [id];

  if (id) {
    connection.query(sql2, values2, (error, results, fields) => {
      // desconectar();
      if (error) {
        callback(error, null);
      } else {
        callback(null, results);
      }
    });
  } else {
    connection.query(sql, values, (error, results, fields) => {
      // desconectar();
      if (error) {
        callback(error, null);
      } else {
        callback(null, results);
      }
    });
  }
}

function crearUsuario({ user, correo, password, direccion, rol }, callback) {
  conectar();
  const sql = "insert into usuario values(null,?,?,?,?,?)";
  const values = [user, correo, password, direccion, rol];
  connection.query(sql, values, (error, results, fields) => {
    // desconectar();
    if (error) {
      callback(error, null);
    } else {
      callback(null, "ok");
    }
  });
}

function getTiendas(callback) {
  conectar();
  const sql = "select*from tienda";
  connection.query(sql, (error, results, fields) => {
    // desconectar();
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
}

module.exports = { getUsuario, crearUsuario, getTiendas };
