function loginValidation() {

    const emailLogin = document.getElementById("emailLogin").value;
    const passLogin = document.getElementById("passLogin").value;

    const formErrorGeneral = document.getElementById("formErrorGeneral");
    const formErrorEmail = document.getElementById("formErrorEmail");
    const formErrorPass = document.getElementById("formErrorPass");


    if (emailLogin !== "" && passLogin !== "") {
      if (emailLogin == "brunodiaz@dc.com" && passLogin == "imbatman2020") {
        location.replace("inmuebles.html");
      } else if(emailLogin != "brunodiaz@dc.com" || passLogin != "imbatman2020") {
        formErrorGeneral.innerHTML = "Email o Contraseña Incorrecto";
        formErrorPass.innerHTML = "";
        formErrorEmail.innerHTML = "";
      }
    } else {
      if (emailLogin == "") {
        formErrorEmail.innerHTML = "Campo Email requerido";
      } else {
        formErrorEmail.innerHTML = "";
        formErrorGeneral.innerHTML = "";
      }
      if (passLogin == "") {
        formErrorPass.innerHTML = "Campo Contraseña requerido";
      } else {
        formErrorPass.innerHTML = "";
        formErrorGeneral.innerHTML = "";
      }
    }
  }

