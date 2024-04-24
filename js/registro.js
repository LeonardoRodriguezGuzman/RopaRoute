let txtUser = document.getElementById("txtUser");
let txtCorreo = document.getElementById("txtCorreo");
let txtPassword = document.getElementById("txtPassword");
let txtDireccion = document.getElementById("txtDireccion");
let rbtnVendedor = document.getElementById("rbtnVendedor");
let rbtnComprador = document.getElementById("rbtnComprador");
let btnRegistro = document.getElementById("btnRegistro");

function registrarNuevoUsuario() {

  let rol="Vendedor";
  if(rbtnComprador.checked)rol="Comprador";
  axios
    .post("http://localhost:3000/registro", {
      user: txtUser.value,
      password: txtPassword.value,
      correo: txtCorreo.value,
      direccion: txtDireccion.value,
      rol:rol
    })
    .then(function (response) {
      console.log("Respuesta del servidor:", response.data);
      if(response.data=="ok"){
        alert("Registro exitoso, por favor inicia sesion");
        window.location.href = "./login.html";
      }
    })
    .catch(function (error) {
      console.error("Ocurrió un error al realizar la solicitud POST:", error);
    });
}

btnRegistro.addEventListener("click", (e) => {
  e.preventDefault();
  //console.log(rbtnComprador.checked);

  // AQUI FALTA VALIDAR LOS CAMPOS ANTES DE LLAMAR EL METODO registrarNuevoUsuario
  registrarNuevoUsuario();
});
