function readUrlParameters() {
    const parametrosDeUrl = new URLSearchParams(location.search)

    if (parametrosDeUrl.get('tipoDeOperacion') === 'Alquiler') {
        document.querySelector("#tipoDeOperacionAlquiler").checked = true
    } else if (parametrosDeUrl.get('tipoDeOperacion') === 'AlquilerTemporal') {
        document.querySelector("#tipoDeOperacionAlquilerTemporal").checked = true
    } else {
        document.querySelector("#tipoDeOperacionVenta").checked = true
    }

    document.querySelector("#tipoDePropiedadCasa").checked = parametrosDeUrl.get('tipoDePropiedadCasa') === 'true'
    document.querySelector("#tipoDePropiedadApartamento").checked = parametrosDeUrl.get('tipoDePropiedadApartamento') === 'true'
}
