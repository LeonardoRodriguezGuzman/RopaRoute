let divVer=document.getElementById("containerVer");
let divAdd=document.getElementById("containerAdd");
let navLogout=document.getElementById("navLogout");

navLogout.addEventListener("click",(e)=>{
    e.preventDefault();
    localStorage.setItem('user',-1);
    localStorage.setItem('rol','?');
    window.location.href="index.html";
});

document.addEventListener("DOMContentLoaded", function(e) {
    let rol=localStorage.getItem("rol");
    if(rol=="Comprador"){
        divVer.style.display="none";
        divAdd.style.display="none";

    }else if(rol=="?"){
        window.location.href = "./login.html";
    }
});
  