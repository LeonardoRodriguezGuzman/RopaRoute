const user = document.getElementById("user");
const password = document.getElementById("password");
const btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();


  axios
    .post("http://localhost:3000/login", {
      user: user.value,
      password: password.value,
    })
    .then(function (response) {
      console.log("Respuesta del servidor:", response.data);
    })
    .catch(function (error) {
      console.error("Ocurrió un error al realizar la solicitud POST:", error);
    });
});
