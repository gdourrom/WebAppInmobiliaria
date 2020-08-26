function validarEmail() {

    const emailOlvidoPass = document.getElementById("emailOlvidoPass").value;

    const formErrorEmail = document.getElementById("formErrorEmail");

    if(emailOlvidoPass == ""){
        formErrorEmail.innerHTML = "El Campo no puede estar vacio";
    }else if (emailOlvidoPass !== "brunodiaz@dc.com"){
        formErrorEmail.innerHTML = "Email ingresado no esta registrado";
    }else {
        location.replace("inicio-de-sesion.html");
    }

}
