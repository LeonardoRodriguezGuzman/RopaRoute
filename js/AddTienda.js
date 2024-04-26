let btnCrear=document.getElementById("btnCrear");
let txtNombre=document.getElementById("txtNombreTienda");
let txtUbicacion=document.getElementById("txtUbicacion");
let txtDescripcion=document.getElementById("txtDescripcion");
let txtTelefono=document.getElementById("txtTelefono");

btnCrear.addEventListener("click",(e)=>{
    e.preventDefault();
    let id=parseInt(localStorage.getItem("user"));
    axios
    .post("http://localhost:3000/AddTienda", {
        nombre:txtNombre.value,
        ubicacion:txtUbicacion.value,
        telefono:txtTelefono.value,
        descripcion:txtDescripcion.value,
        idUser:id
    })
    .then(function (response) {
      console.log("Respuesta del servidor:", response.data);
      if(response.data=="ok"){
        alert("Registro de tienda exitoso");
        txtNombre.value="";
        txtUbicacion.value="";
        txtDescripcion.value="";
        txtTelefono.value="";
      }
    })
    .catch(function (error) {
      console.error("Ocurrió un error al realizar la solicitud POST:", error);
    });

});