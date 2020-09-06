function validarPublicacion() {

const publicarTitulo = document.getElementById("publicarTitulo").value;
const publicarDescripcion = document.getElementById("publicarDescripcion").value;
const publicacionDivisa = document.querySelector ('input[name="publicacionDivisa"]:checked').value;
const publicacionPrecio = document.getElementById("publicacionPrecio").value;
const publicarTipoDeOperacion = document.querySelector('input[name="publicarTipoDeOperacion"]:checked').value;
const publicarTipoDePropiedad = document.querySelector('input[name="publicarTipoDePropiedad"]:checked').value;
const dormitorios = document.getElementById("dormitorios").value;
const banos = document.getElementById("banos").value;
const publicarDireccion = document.getElementById("publicarDireccion").value;
const departamento = document.getElementById("departamento").value;
const barrio = document.getElementById("barrio").value;
const publicarCodigoPostal = document.getElementById("publicarCodigoPostal").value;
const garaje = document.querySelector('#amenityGaraje').checked;
const jardin = document.querySelector('#amenityJardin').checked;
const seguridad = document.querySelector('#amenitySeguridad').checked;
const piscina = document.querySelector('#amenityPiscina').checked;
const amueblado = document.querySelector('#amenityAmueblado').checked;
const calefaccion = document.querySelector('#amenityCalefaccion').checked;
const publicarSubirImagen = document.getElementById("publicarSubirImagen").value;

// Datos de contacto
// const datosContacto = {
//     nombre : document.getElementById("nombreContacto").value,
//     inmobiliaria : document.getElementById("nombreInmobiliaria").value,
//     telefono : document.getElementById("telefonoContacto").value,
//     email : document.getElementById("emailContacto").value,
// };

// const resultContacto = Object.entries(datosContacto).length === 1

// if (resultContacto == false){
//     alert("No Completaste nada!! ta mal!");
// }

const nombreContacto = document.getElementById("nombreContacto").value;
const nombreInmobiliaria = document.getElementById("nombreInmobiliaria").value;
const telefonoContacto = document.getElementById("telefonoContacto").value;
const emailContacto = document.getElementById("emailContacto").value;



// errores

const publicacionErrorTitulo = document.getElementById("publicacionErrorTitulo");
const publicacionErrorDescripcion = document.getElementById("publicacionErrorDescripcion");
const publicacionErrorDivisa = document.getElementById("publicacionErrorDivisa");
const publicacionErrorDormitorios = document.getElementById("publicacionErrorDormitorios");
const publicacionErrorbanos = document.getElementById("publicacionErrorbanos");
const publicacionErrorDireccion = document.getElementById("publicacionErrorDireccion");
const publicacionErrorDepartamento = document.getElementById("publicacionErrorDepartamento");
const publicacionErrorBarrio = document.getElementById("publicacionErrorBarrio");
const publicacionErrorCodigoPostal = document.getElementById("publicacionErrorCodigoPostal");
const publicacionErrorSubirImagenes = document.getElementById("publicacionErrorSubirImagenes");
// datos de contacto
const publicarErrorNombreContacto = document.getElementById("publicarErrorNombreContacto");
const publicarErrorNombreInmobiliaria = document.getElementById("publicarErrorNombreInmobiliaria");
const publicarErrorTelefonoContacto = document.getElementById("publicarErrorTelefonoContacto");
const publicarErrorEmailContacto = document.getElementById("publicarErrorEmailContacto");

const errorGeneral = document.getElementById("publicarErrorGeneral");



if ((publicarTitulo !== "" && publicarDescripcion !== "" && publicacionDivisa !== true && publicacionPrecio !== "" && publicarTipoDeOperacion !== false && publicarTipoDePropiedad !== false && dormitorios > 0 && banos > 0 && publicarDireccion !== "" && departamento !== "" && barrio !== "" && publicarCodigoPostal !== "" && nombreContacto !== "" && nombreInmobiliaria !== "" && telefonoContacto !== "" && emailContacto !== "") && (garaje !== false || jardin !== false || seguridad !== false || piscina !== false || amueblado !== false || calefaccion !== false) ){
     if (publicarSubirImagen == 0){

        publicacionErrorSubirImagenes.innerHTML = "Seleccionar al menos una imagen";
        errorGeneral.innerHTML="";
     }else {
        location.replace("inmuebles.html");
     }
   
    
}else {
    errorGeneral.innerHTML="Debe completar los campos";
}

if (publicarTitulo == "") {
    publicacionErrorTitulo.innerHTML = "Agrege un titulo";
   
 
 }else {
     publicacionErrorTitulo.innerHTML = "";
 }

 if (publicarDescripcion == ""){
    publicacionErrorDescripcion.innerHTML = "Agregar una descripción";
    
 }else{
    publicacionErrorDescripcion.innerHTML = "";
 }

 if (publicacionPrecio == ""){
    publicacionErrorDivisa.innerHTML = "Agregar un precio";
 }else {
    publicacionErrorDivisa.innerHTML = "";
 }

 if (dormitorios == ""){
    publicacionErrorDormitorios.innerHTML = "Agregar cantidad de dormitorios";
 }else{
    publicacionErrorDormitorios.innerHTML = "";
 }

 if (banos == ""){
     publicacionErrorbanos.innerHTML = "Agregar cantidad de baños";
 }else{
     publicacionErrorbanos.innerHTML = "";
 }

 if(publicarDireccion == ""){
     publicacionErrorDireccion.innerHTML = "Agregar Dirección";
 }else {
     publicacionErrorDireccion.innerHTML = "";
 }

 if(departamento == "" ){
    publicacionErrorDepartamento.innerHTML = "Seleccionar un Departamento";
 } else {
    publicacionErrorDepartamento.innerHTML = "";

 }
 if(barrio == ""){
     publicacionErrorBarrio.innerHTML = "Seleccionar un Barrio";
 }else{
    publicacionErrorBarrio.innerHTML = "";
 }
 if(publicarCodigoPostal == ""){
    publicacionErrorCodigoPostal.innerHTML = "Agregar Cod. Postal";
 }else {
    publicacionErrorCodigoPostal.innerHTML = "";
 }

 if(nombreContacto == ""){
    publicarErrorNombreContacto.innerHTML = "Agregar Nombre";
 }else{
     publicarErrorNombreContacto.innerHTML = "";
 }
 if(nombreInmobiliaria == ""){
    publicarErrorNombreInmobiliaria.innerHTML = "Agregar Nombre Inmobiliaria";
 }else {
     publicarErrorNombreInmobiliaria.innerHTML = "";
 }
if(telefonoContacto == ""){
    publicarErrorTelefonoContacto.innerHTML = "Agregar un Teléfono";
}else {
    publicarErrorTelefonoContacto.innerHTML = "";
}
if(emailContacto == ""){
    publicarErrorEmailContacto.innerHTML = "Agregar un Email";
}else{
    publicarErrorEmailContacto.innerHTML = "";
}
if (publicarSubirImagen == 0){

    publicacionErrorSubirImagenes.innerHTML = "Seleccionar al menos una imagen";
 }else {
    publicacionErrorSubirImagenes.innerHTML = "";
 }

}//Fin function

  