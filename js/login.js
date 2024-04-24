const user = document.getElementById("user");
const password = document.getElementById("password");
const btnLogin = document.getElementById("btnLogin");

localStorage.setItem("user", -1);
localStorage.setItem("rol", "?");

btnLogin.addEventListener("click", (e) => {
  
  e.preventDefault();
  //localStorage.setItem("prueba","siuu");
  axios
    .post("http://localhost:3000/login", {
      user: user.value,
      password: password.value,
    })
    .then(function (response) {
      //console.log("Respuesta del servidor:", response.data);
      let id=response.data[0];
      let rol=response.data[1];
      if(id!=-1){
        window.location.href = "./perfil.html";
        localStorage.setItem("user", id);
        localStorage.setItem("rol", rol);
      }else{
        localStorage.setItem("user", -1);
        localStorage.setItem("rol", "?");
        alert("usuario o password incorrectos");
      }

    })
    .catch(function (error) {
      console.error("Ocurrió un error al realizar la solicitud POST:", error);
    });
});
