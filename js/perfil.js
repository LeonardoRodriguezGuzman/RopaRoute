let divVer=document.getElementById("containerVer");
let divAdd=document.getElementById("containerAdd");

document.addEventListener("DOMContentLoaded", function(e) {
    let rol=localStorage.getItem("rol");
    if(rol=="Comprador"){
        divVer.style.display="none";
        divAdd.style.display="none";

    }else if(rol=="?"){
        window.location.href = "./login.html";
    }
});
  