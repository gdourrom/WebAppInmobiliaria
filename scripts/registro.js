function validarRegistro() {

    const regName = document.getElementById("regName").value;
    const regEmail = document.getElementById("regEmail").value;
    const regTel = document.getElementById("regTel").value;
    const regPass = document.getElementById("regPass").value;
    const regPassRepet = document.getElementById("regPassRepet").value;

    const regErrorGeneral = document.getElementById("regErrorGeneral");
    const regErrorName = document.getElementById("regErrorName");
    const regErrorEmail = document.getElementById( "regErrorEmail");
    const regErrorTel = document.getElementById("regErrorTel");
    const regErrorPass = document.getElementById( "regErrorPass");
    const regErrorPassRepet = document.getElementById("regErrorPassRepet");


    if (regName !== "" && regEmail !== "" && regTel !== "" && regPass !== "" && regPassRepet !== ""){
        if (regPass === regPassRepet){
            location.replace("inmuebles.html");
        }else {
            regErrorPass.innerHTML = "Contraseña no coincide";
            regErrorPassRepet.innerHTML = "Contraseña no coincide";
            regErrorGeneral.innerHTML = "";
            regErrorName.innerHTML = "";
            regErrorEmail.innerHTML = "";
            regErrorTel.innerHTML = "";
        }

    }else {
        regErrorGeneral.innerHTML = "Debes completar todos los campos";
    }

    if (regName === ""){
        regErrorName.innerHTML = "Campo Obligatorio";
        
    }else {
        regErrorName.innerHTML = "";
    }

    if (regEmail === ""){
        regErrorEmail.innerHTML = "Campo Obligatorio";
    }else{
        regErrorEmail.innerHTML = "";
    }

    if (regTel === ""){
        regErrorTel.innerHTML = "Campo Obligatorio";
    }else{
        regErrorTel.innerHTML = "";
    }
    
    if (regPass === "" || regPassRepet === ""){
        regErrorPass.innerHTML = "Campo Obligatorio";
        regErrorPassRepet.innerHTML = "Campo Obligatorio";
    }
   
}
    
    
    
    
    

