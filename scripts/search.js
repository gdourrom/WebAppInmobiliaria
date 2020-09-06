function search() {
    // TODO: Obtener los terminos de busqueda del input de texto
    // TODO: Redireccion a la pagina de listado con el filtro ya aplicados
    alert('Aun queda trabajo por hacer :)')
}

function getDataFromAPI(filtros) {
    // TODO: Obtener datos del servidor
    // De momento vamos a retornar datos "quemados", luego deben venir del servidor

    const propiedades = [
        // Venta Casa Reducto
        {
            operacion: 'Venta',
            tipoDePropiedad: 'Casa',
            estado: {
                enConstruccion: true,
                usada: false,
                aEstrenar: false
            },
            precio: {
                monto: 145000,
                divisa: 'USD'
            },
            metraje: {
                total: 120,
                edificado: 110
            },
            habitaciones: {
                dormitorios: 2,
                banos: 1
            },
            descripcion: 'Hermosa casa en Reducto',
            imagenes: [
                'imagenes/inmuebles/casa-1.jpg',
                'imagenes/inmuebles/apartamento-cocina-1.jpg',
                'imagenes/inmuebles/apartamento-dormitorio-1.jpg',
                'imagenes/inmuebles/apartamento-dormitorio-2.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-1.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-2.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-3.jpg',
            ],
            ubicacion: {
                departamento: 'Montevideo',
                barrio: 'Reducto',
                codigoPostal: '11100'
            },
            referencia: '001',
            amenities: {
                garaje: true,
                jardin: true,
                calefaccion: false,
                amueblado: false,
                seguridad: true,
                piscina: true
            }
        },
         // Venta Apartamento Reducto
         {
            operacion: 'Venta',
            tipoDePropiedad: 'Apartamento',
            estado: {
                enConstruccion: true,
                usada: false,
                aEstrenar: false
            },
            precio: {
                monto: 105322,
                divisa: 'USD'
            },
            metraje: {
                total: 120,
                edificado: 110
            },
            habitaciones: {
                dormitorios: 2,
                banos: 2
            },
            descripcion: 'Hermosa casa en Reducto',
            imagenes: [
                'imagenes/inmuebles/apartamento-1.jpg',
                'imagenes/inmuebles/apartamento-cocina-1.jpg',
                'imagenes/inmuebles/apartamento-dormitorio-1.jpg',
                'imagenes/inmuebles/apartamento-dormitorio-2.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-1.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-2.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-3.jpg',
            ],
            ubicacion: {
                departamento: 'Montevideo',
                barrio: 'Reducto',
                codigoPostal: '11100'
            },
            referencia: '002',
            amenities: {
                garaje: true,
                jardin: true,
                calefaccion: false,
                amueblado: false,
                seguridad: true,
                piscina: true
            }
        },
        // Venta Casa en Malvin 3 dormitorios y 4 baños
        {
            operacion: 'Venta',
            tipoDePropiedad: 'Casa',
            estado: {
                enConstruccion: false,
                usada: true,
                aEstrenar: false
            },
            precio: {
                monto: 230000,
                divisa: 'USD'
            },
            metraje: {
                total: 120,
                edificado: 110
            },
            habitaciones: {
                dormitorios: 4,
                banos: 3
            },
            descripcion: 'Espectacular apartamento a mts de la rambla',
            imagenes: [
                'imagenes/inmuebles/casa-4.jpg',
                'imagenes/inmuebles/apartamento-cocina-1.jpg',
                'imagenes/inmuebles/apartamento-dormitorio-1.jpg',
                'imagenes/inmuebles/apartamento-dormitorio-2.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-1.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-2.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-3.jpg',
            ],
            ubicacion: {
                departamento: 'Montevideo',
                barrio: 'Malvin',
                codigoPostal: '11200'
            },
            referencia: '003',
            amenities: {
                garaje: true,
                jardin: false,
                calefaccion: true,
                amueblado: true,
                seguridad: true,
                piscina: false
            }
        },
        // Venta Apartamento en Malvin 3 dormitorios y 4 baños
        {
            operacion: 'Venta',
            tipoDePropiedad: 'Apartamento',
            estado: {
                enConstruccion: false,
                usada: false,
                aEstrenar: true
            },
            precio: {
                monto: 175000,
                divisa: 'USD'
            },
            metraje: {
                total: 120,
                edificado: 110
            },
            habitaciones: {
                dormitorios: 3,
                banos: 2
            },
            descripcion: 'Espectacular apartamento a mts de la rambla',
            imagenes: [
                'imagenes/inmuebles/apartamento-2.jpg',
                'imagenes/inmuebles/apartamento-dormitorio-1.jpg',
                'imagenes/inmuebles/apartamento-dormitorio-2.jpg',
                'imagenes/inmuebles/apartamento-cocina-1.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-1.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-2.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-3.jpg',
            ],
            ubicacion: {
                departamento: 'Montevideo',
                barrio: 'Malvin',
                codigoPostal: '11200'
            },
            referencia: '004',
            amenities: {
                garaje: true,
                jardin: false,
                calefaccion: true,
                amueblado: false,
                seguridad: true,
                piscina: false
            }
        },
         // Venta Casa en Tres Cruces 2 dormitorios y 1 baños
        {
            operacion: 'Venta',
            tipoDePropiedad: 'Casa',
            estado: {
                enConstruccion: false,
                usada: true,
                aEstrenar: false
            },
            precio: {
                monto: 170000,
                divisa: 'USD'
            },
            metraje: {
                total: 100,
                edificado: 80
            },
            habitaciones: {
                dormitorios: 2,
                banos: 1
            },
            descripcion: 'Espectacular apartamento a mts de la rambla',
            imagenes: [
                'imagenes/inmuebles/casa-1.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-1.jpg',
                'imagenes/inmuebles/apartamento-cocina-1.jpg',
                'imagenes/inmuebles/apartamento-dormitorio-1.jpg',
                'imagenes/inmuebles/apartamento-dormitorio-2.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-2.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-3.jpg',
            ],
            ubicacion: {
                departamento: 'Montevideo',
                barrio: 'Tres Cruces',
                codigoPostal: '11200'
            },
            referencia: '005',
            amenities: {
                garaje: true,
                jardin: false,
                calefaccion: true,
                amueblado: true,
                seguridad: true,
                piscina: false
            }
        },
         // Venta Apartamento en Tres Cruces 2 dormitorios y 1 baños
         {
            operacion: 'Venta',
            tipoDePropiedad: 'Apartamento',
            estado: {
                enConstruccion: false,
                usada: true,
                aEstrenar: false
            },
            precio: {
                monto: 180000,
                divisa: 'USD'
            },
            metraje: {
                total: 60,
                edificado: 60
            },
            habitaciones: {
                dormitorios: 3,
                banos: 1
            },
            descripcion: 'Espectacular apartamento a mts de la rambla',
            imagenes: [
                'imagenes/inmuebles/apartamento-2.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-2.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-3.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-1.jpg',
                'imagenes/inmuebles/apartamento-cocina-1.jpg',
                'imagenes/inmuebles/apartamento-dormitorio-1.jpg',
                'imagenes/inmuebles/apartamento-dormitorio-2.jpg',
            ],
            ubicacion: {
                departamento: 'Montevideo',
                barrio: 'Tres Cruces',
                codigoPostal: '11200'
            },
            referencia: '006',
            amenities: {
                garaje: true,
                jardin: false,
                calefaccion: true,
                amueblado: false,
                seguridad: false,
                piscina: true
            }
        },
        // Venta Casa en Cordon 1 dormitorios y 1 baños
        {
            operacion: 'Venta',
            tipoDePropiedad: 'Casa',
            estado: {
                enConstruccion: false,
                usada: false,
                aEstrenar: true
            },
            precio: {
                monto: 145000,
                divisa: 'USD'
            },
            metraje: {
                total: 80,
                edificado: 70
            },
            habitaciones: {
                dormitorios: 1,
                banos: 1
            },
            descripcion: 'Espectacular apartamento a mts de la rambla',
            imagenes: [
                'imagenes/inmuebles/casa-2.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-1.jpg',
                'imagenes/inmuebles/apartamento-cocina-1.jpg',
                'imagenes/inmuebles/apartamento-dormitorio-1.jpg',
                'imagenes/inmuebles/apartamento-dormitorio-2.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-2.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-3.jpg',
            ],
            ubicacion: {
                departamento: 'Montevideo',
                barrio: 'Cordon',
                codigoPostal: '11200'
            },
            referencia: '007',
            amenities: {
                garaje: false,
                jardin: false,
                calefaccion: true,
                amueblado: false,
                seguridad: false,
                piscina: false
            }
        },
        // Venta Apartamento en Cordon 1 dormitorios y 1 baños
        {
            operacion: 'Venta',
            tipoDePropiedad: 'Apartamento',
            estado: {
                enConstruccion: false,
                usada: true,
                aEstrenar: false
            },
            precio: {
                monto: 230000,
                divisa: 'USD'
            },
            metraje: {
                total: 200,
                edificado: 160
            },
            habitaciones: {
                dormitorios:3,
                banos: 1
            },
            descripcion: 'Espectacular apartamento a mts de la rambla',
            imagenes: [
                'imagenes/inmuebles/apartamento-1.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-2.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-1.jpg',
                'imagenes/inmuebles/apartamento-cocina-1.jpg',
                'imagenes/inmuebles/apartamento-dormitorio-1.jpg',
                'imagenes/inmuebles/apartamento-dormitorio-2.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-3.jpg',
            ],
            ubicacion: {
                departamento: 'Montevideo',
                barrio: 'Cordon',
                codigoPostal: '11200'
            },
            referencia: '008',
            amenities: {
                garaje: true,
                jardin: false,
                calefaccion: false,
                amueblado: false,
                seguridad: true,
                piscina: false
            }
        },
        // Alquiler de Apartamento en Pocitos alquiler
        {
            operacion: 'Alquiler',
            tipoDePropiedad: 'Apartamento',
            estado: {
                enConstruccion: false,
                usada: false,
                aEstrenar: true
            },
            precio: {
                monto: 14500,
                divisa: 'UYU'
            },
            metraje: {
                total: 120,
                edificado: 110
            },
            habitaciones: {
                dormitorios: 2,
                banos: 2
            },
            descripcion: 'Espectacular apartamento a mts de la rambla',
            imagenes: [
                'imagenes/inmuebles/apartamento-1.jpg',
                'imagenes/inmuebles/apartamento-cocina-1.jpg',
                'imagenes/inmuebles/apartamento-dormitorio-1.jpg',
                'imagenes/inmuebles/apartamento-dormitorio-2.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-1.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-2.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-3.jpg',
            ],
            ubicacion: {
                departamento: 'Montevideo',
                barrio: 'Pocitos',
                codigoPostal: '11200'
            },
            referencia: '009',
            amenities: {
                garaje: true,
                jardin: false,
                calefaccion: true,
                amueblado: false,
                seguridad: true,
                piscina: false
            }
        },
        // Alquiler de Casa en Pocitos alquiler
        {
            operacion: 'Alquiler',
            tipoDePropiedad: 'Casa',
            estado: {
                enConstruccion: false,
                usada: true,
                aEstrenar: false
            },
            precio: {
                monto: 200000,
                divisa: 'UYU'
            },
            metraje: {
                total: 120,
                edificado: 110
            },
            habitaciones: {
                dormitorios: 4,
                banos: 2
            },
            descripcion: 'Espectacular apartamento a mts de la rambla',
            imagenes: [
                'imagenes/inmuebles/apartamento-1.jpg',
                'imagenes/inmuebles/apartamento-cocina-1.jpg',
                'imagenes/inmuebles/apartamento-dormitorio-1.jpg',
                'imagenes/inmuebles/apartamento-dormitorio-2.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-1.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-2.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-3.jpg',
            ],
            ubicacion: {
                departamento: 'Montevideo',
                barrio: 'Pocitos',
                codigoPostal: '11200'
            },
            referencia: '010',
            amenities: {
                garaje: true,
                jardin: true,
                calefaccion: false,
                amueblado: false,
                seguridad: true,
                piscina: false
            }
        },
        // Alquiler de Apartamento en Parque Batlle 6 dormitorios 6 baños
        {
            operacion: 'Alquiler',
            tipoDePropiedad: 'Apartamento',
            estado: {
                enConstruccion: false,
                usada: true,
                aEstrenar: false
            },
            precio: {
                monto: 45500,
                divisa: 'UYU'
            },
            metraje: {
                total: 300,
                edificado: 210
            },
            habitaciones: {
                dormitorios: 6,
                banos: 6
            },
            descripcion: 'Espectacular apartamento a mts de la rambla',
            imagenes: [
                'imagenes/inmuebles/apartamento-2.jpg',
                'imagenes/inmuebles/apartamento-piscina.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-1.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-2.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-3.jpg',
                'imagenes/inmuebles/apartamento-cocina-1.jpg',
                'imagenes/inmuebles/apartamento-dormitorio-1.jpg',
                'imagenes/inmuebles/apartamento-dormitorio-2.jpg',
            ],
            ubicacion: {
                departamento: 'Montevideo',
                barrio: 'Carrasco',
                codigoPostal: '11800'
            },
            referencia: '011',
            amenities: {
                garaje: true,
                jardin: true,
                calefaccion: true,
                amueblado: true,
                seguridad: true,
                piscina: true
            }
        },
        // Alquiler de Casa en Parque Batlle 3 dormitorios 2 baños
        {
            operacion: 'Alquiler',
            tipoDePropiedad: 'Casa',
            estado: {
                enConstruccion: false,
                usada: true,
                aEstrenar: false
            },
            precio: {
                monto: 45233,
                divisa: 'UYU'
            },
            metraje: {
                total: 200,
                edificado: 120
            },
            habitaciones: {
                dormitorios: 3,
                banos: 2
            },
            descripcion: 'Espectacular apartamento a mts de la rambla',
            imagenes: [
                'imagenes/inmuebles/apartamento-2.jpg',
                'imagenes/inmuebles/apartamento-piscina.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-1.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-2.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-3.jpg',
                'imagenes/inmuebles/apartamento-cocina-1.jpg',
                'imagenes/inmuebles/apartamento-dormitorio-1.jpg',
                'imagenes/inmuebles/apartamento-dormitorio-2.jpg',
            ],
            ubicacion: {
                departamento: 'Montevideo',
                barrio: 'Carrasco',
                codigoPostal: '11800'
            },
            referencia: '012',
            amenities: {
                garaje: true,
                jardin: false,
                calefaccion: true,
                amueblado: false,
                seguridad: true,
                piscina: true
            }
        },
        // Alquiler de Apartamento en Colon 2 dormitorios 1 baños
        {
            operacion: 'Alquiler',
            tipoDePropiedad: 'Apartamento',
            estado: {
                enConstruccion: false,
                usada: false,
                aEstrenar: true
            },
            precio: {
                monto: 12500,
                divisa: 'UYU'
            },
            metraje: {
                total: 100,
                edificado: 100
            },
            habitaciones: {
                dormitorios: 2,
                banos: 1
            },
            descripcion: 'Espectacular apartamento a mts de la rambla',
            imagenes: [
                'imagenes/inmuebles/apartamento-1.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-1.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-2.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-3.jpg',
                'imagenes/inmuebles/apartamento-piscina.jpg',
                'imagenes/inmuebles/apartamento-cocina-1.jpg',
                'imagenes/inmuebles/apartamento-dormitorio-1.jpg',
                'imagenes/inmuebles/apartamento-dormitorio-2.jpg',
            ],
            ubicacion: {
                departamento: 'Montevideo',
                barrio: 'Colon',
                codigoPostal: '10200'
            },
            referencia: '007',
            amenities: {
                garaje: false,
                jardin: false,
                calefaccion: true,
                amueblado: false,
                seguridad: true,
                piscina: false
            }
        },
        // Alquiler temporal Casa Carrasco
        {
            operacion: 'AlquilerTemporal',
            tipoDePropiedad: 'Casa',
            estado: {
                enConstruccion: false,
                usada: true,
                aEstrenar: false
            },
            precio: {
                monto: 8000,
                divisa: 'USD'
            },
            metraje: {
                total: 800,
                edificado: 500
            },
            habitaciones: {
                dormitorios: 6,
                banos: 6
            },
            descripcion: 'Espectacular apartamento a mts de la rambla',
            imagenes: [
                'imagenes/inmuebles/casa-2.jpg',
                'imagenes/inmuebles/apartamento-cocina-1.jpg',
                'imagenes/inmuebles/apartamento-dormitorio-2.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-1.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-2.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-3.jpg',
                'imagenes/inmuebles/apartamento-dormitorio-1.jpg',
                'imagenes/inmuebles/apartamento-piscina.jpg',
            ],
            ubicacion: {
                departamento: 'Montevideo',
                barrio: 'Carrasco',
                codigoPostal: '11800'
            },
            referencia: '013',
            amenities: {
                garaje: true,
                jardin: true,
                calefaccion: true,
                amueblado: true,
                seguridad: true,
                piscina: true
            }
        },
        // Alquiler Temporal Apartamento Carrasco 1 dormitorio 1 baño
        {
            operacion: 'AlquilerTemporal',
            tipoDePropiedad: 'Apartamento',
            estado: {
                enConstruccion: false,
                usada: true,
                aEstrenar: false
            },
            precio: {
                monto: 1000,
                divisa: 'USD'
            },
            metraje: {
                total: 200,
                edificado: 100
            },
            habitaciones: {
                dormitorios: 1,
                banos: 1
            },
            descripcion: 'Espectacular apartamento a mts de la rambla',
            imagenes: [
                'imagenes/inmuebles/apartamento-1.jpg',
                'imagenes/inmuebles/apartamento-cocina-1.jpg',
                'imagenes/inmuebles/apartamento-dormitorio-1.jpg',
                'imagenes/inmuebles/apartamento-dormitorio-2.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-1.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-2.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-3.jpg',
            ],
            ubicacion: {
                departamento: 'Montevideo',
                barrio: 'Carrasco',
                codigoPostal: '11800'
            },
            referencia: '014',
            amenities: {
                garaje: true,
                jardin: false,
                calefaccion: true,
                amueblado: true,
                seguridad: false,
                piscina: false
            }
        },
        // Alquiler Temporal Casa Parque Rodo
        {
            operacion: 'AlquilerTemporal',
            tipoDePropiedad: 'Casa',
            estado: {
                enConstruccion: false,
                usada: true,
                aEstrenar: false
            },
            precio: {
                monto: 900,
                divisa: 'USD'
            },
            metraje: {
                total: 150,
                edificado: 120
            },
            habitaciones: {
                dormitorios: 5,
                banos: 2
            },
            descripcion: 'Espectacular apartamento a mts de la rambla',
            imagenes: [
                'imagenes/inmuebles/casa-1.jpg',
                'imagenes/inmuebles/apartamento-dormitorio-2.jpg',
                'imagenes/inmuebles/apartamento-cocina-1.jpg',
                'imagenes/inmuebles/apartamento-dormitorio-1.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-1.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-2.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-3.jpg',
            ],
            ubicacion: {
                departamento: 'Montevideo',
                barrio: 'Parque Rodo',
                codigoPostal: '11500'
            },
            referencia: '007',
            amenities: {
                garaje: true,
                jardin: true,
                calefaccion: false,
                amueblado: true,
                seguridad: true,
                piscina: false
            }
        },
        // Alquiler Temporal Tres Cruces
        {
            operacion: 'AlquilerTemporal',
            tipoDePropiedad: 'Apartamento',
            estado: {
                enConstruccion: false,
                usada: true,
                aEstrenar: false
            },
            precio: {
                monto: 300,
                divisa: 'USD'
            },
            metraje: {
                total: 90,
                edificado: 90
            },
            habitaciones: {
                dormitorios: 1,
                banos: 1
            },
            descripcion: 'Espectacular apartamento a mts de la rambla',
            imagenes: [
                'imagenes/inmuebles/apartamento-2.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-2.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-3.jpg',
                'imagenes/inmuebles/apartamento-dormitorio-2.jpg',
                'imagenes/inmuebles/apartamento-cocina-1.jpg',
                'imagenes/inmuebles/apartamento-dormitorio-1.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-1.jpg',
               
            ],
            ubicacion: {
                departamento: 'Montevideo',
                barrio: 'Tres Cruces',
                codigoPostal: '11100'
            },
            referencia: '008',
            amenities: {
                garaje: true,
                jardin: true,
                calefaccion: false,
                amueblado: true,
                seguridad: true,
                piscina: false
            }
        },
        // VentaEn Construccion Tres Cruces
        {
            operacion: 'Venta',
            tipoDePropiedad: 'Apartamento',
            estado: {
                enConstruccion: true,
                usada: false,
                aEstrenar: false
            },
            precio: {
                monto: 130000,
                divisa: 'USD'
            },
            metraje: {
                total: 120,
                edificado: 110
            },
            habitaciones: {
                dormitorios: 2,
                banos: 1
            },
            descripcion: 'Espectacular apartamento a mts de la rambla',
            imagenes: [
                'imagenes/inmuebles/apartamento-2.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-2.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-3.jpg',
                'imagenes/inmuebles/apartamento-dormitorio-2.jpg',
                'imagenes/inmuebles/apartamento-cocina-1.jpg',
                'imagenes/inmuebles/apartamento-dormitorio-1.jpg',
                'imagenes/inmuebles/apartamento-living-comedor-1.jpg',
               
            ],
            ubicacion: {
                departamento: 'Montevideo',
                barrio: 'Puerto del Buceo',
                codigoPostal: '11100'
            },
            referencia: '015',
            amenities: {
                garaje: true,
                jardin: false,
                calefaccion: true,
                amueblado: false,
                seguridad: true,
                piscina: false
            }
        }

    ]

    // Esto realmente lo hace el API
    const propiedadesFiltradas = propiedades.filter(
        function (propiedad) {
            // Tipo de propiedad
            let mostrarCasas
            let mostrarApartamentos

            if (filtros.tipoDePropiedad.casa && filtros.tipoDePropiedad.apartamento) {
                mostrarCasas = true
                mostrarApartamentos = true
            } else {
                mostrarCasas = filtros.tipoDePropiedad.casa ? propiedad.tipoDePropiedad === 'Casa' : true
                mostrarApartamentos = filtros.tipoDePropiedad.apartamento ? propiedad.tipoDePropiedad === 'Apartamento' : true
            }

            // Operacion
            const laOperacionCoincide = propiedad.operacion === filtros.tipoDeOperacion

            // Amenities
            
                
            
            const conGaraje = filtros.amenities.garaje ? propiedad.amenities.garaje : true
            const tieneSeguridad = filtros.amenities.seguridad ? propiedad.amenities.seguridad : true
            const tieneJardin = filtros.amenities.jardin ? propiedad.amenities.jardin : true
            const tieneCalefaccion = filtros.amenities.calefaccion ? propiedad.amenities.calefaccion : true
            const estaAmueblado = filtros.amenities.amueblado ? propiedad.amenities.amueblado : true
            const tienePiscina = filtros.amenities.piscina ? propiedad.amenities.piscina : true

         
            // Estado 

            const propiedadEnConstruccion = filtros.estado.enConstruccion ? propiedad.estado.enConstruccion : true
            const porpiedadUsada = filtros.estado.usada ? propiedad.estado.usada : true
            const propiedadAEstrenar = filtros.estado.aEstrenar ? propiedad.estado.aEstrenar : true
           

            // Dormitorios

            let unDormitorio = false;
            let dosDormitorios = false;
            let tresDormitorios = false;
            let cuatroDormitorios = false;
            let cincoMasDormitorios = false;

            if ((
                filtros.habitaciones.unDormitorio &&
                filtros.habitaciones.dosDormitorios &&
                filtros.habitaciones.tresDormitorios &&
                filtros.habitaciones.cuatroDormitorios &&
                filtros.habitaciones.cincoMasDormitorios
                ) || (
                    !filtros.habitaciones.unDormitorio &&
                    !filtros.habitaciones.dosDormitorios &&
                    !filtros.habitaciones.tresDormitorios &&
                    !filtros.habitaciones.cuatroDormitorios &&
                    !filtros.habitaciones.cincoMasDormitorios)) {
                    unDormitorio = true
                    dosDormitorios = true
                    tresDormitorios = true
                    cuatroDormitorios = true
                    cincoMasDormitorios  = true
                } else {
                    if (filtros.habitaciones.unDormitorio) {
                        unDormitorio = propiedad.habitaciones.dormitorios === 1
                    }
                    if (filtros.habitaciones.dosDormitorios) {
                        dosDormitorios = propiedad.habitaciones.dormitorios === 2
                    }
                    if (filtros.habitaciones.tresDormitorios) {
                        tresDormitorios = propiedad.habitaciones.dormitorios === 3
                    }
                    if (filtros.habitaciones.cuatroDormitorios) {
                        cuatroDormitorios = propiedad.habitaciones.dormitorios === 4
                    }
                    if (filtros.habitaciones.cincoMasDormitorios) {
                        cincoMasDormitorios = propiedad.habitaciones.dormitorios  >= 5
                    }
                }


            // Baños
            

            let cantidadBaños1 = false;
            let cantidadBaños2  = false;
            let cantidadBaños3  = false;
            let cantidadBaños4  = false;
            let cantidadBaños5Mas = false;

            if ((
                filtros.habitaciones.cantidadBaños1 &&
                filtros.habitaciones.cantidadBaños2 &&
                filtros.habitaciones.cantidadBaños3 &&
                filtros.habitaciones.cantidadBaños4 &&
                filtros.habitaciones.cantidadBaños5Mas
                ) || (
                    !filtros.habitaciones.cantidadBaños1 &&
                    !filtros.habitaciones.cantidadBaños2 &&
                    !filtros.habitaciones.cantidadBaños3 &&
                    !filtros.habitaciones.cantidadBaños4 &&
                    !filtros.habitaciones.cantidadBaños5Mas)) {
                    cantidadBaños1 = true
                    cantidadBaños2 = true
                    cantidadBaños3 = true
                    cantidadBaños4 = true
                    cantidadBaños5Mas  = true
                } else {
                    if (filtros.habitaciones.cantidadBaños1) {
                        cantidadBaños1 = propiedad.habitaciones.banos === 1
                    }
                    if (filtros.habitaciones.cantidadBaños2) {
                        cantidadBaños2 = propiedad.habitaciones.banos === 2
                    }
                    if (filtros.habitaciones.cantidadBaños3) {
                        cantidadBaños3 = propiedad.habitaciones.banos === 3
                    }
                    if (filtros.habitaciones.cantidadBaños4) {
                        cantidadBaños4 = propiedad.habitaciones.banos === 4
                    }
                    if (filtros.habitaciones.cantidadBaños5Mas) {
                        cantidadBaños5Mas = propiedad.habitaciones.banos  >= 5
                    }
                }

        // Resultado del filtro
        return laOperacionCoincide &&
        mostrarCasas &&
        mostrarApartamentos &&
        propiedadAEstrenar &&
        porpiedadUsada &&
        propiedadEnConstruccion &&
        (unDormitorio || dosDormitorios || tresDormitorios || cuatroDormitorios || cincoMasDormitorios) &&
        (cantidadBaños1 || cantidadBaños2 || cantidadBaños3 || cantidadBaños4 || cantidadBaños5Mas)
            
        }
    )

    return propiedadesFiltradas
}

function applyFilter() {
    // Obtenemos el elemento que representa el contenedor
    const container = document.querySelector('.items-container')

    // Obtenemos el elemento a ser utilizado como plantilla de card
    const itemTemplate = document.getElementById('item-template')

    // Obtenemos el elemento a ser utilizado como plantilla de imagen para carousel
    const carouselImageTemplate = document.getElementById('item-template-carousel-image')

    // Obtenemos los valores de los filtros
    const filtros = {
        tipoDeOperacion: document.querySelector('input[name="tipoDeOperacion"]:checked').value,
        tipoDePropiedad: {
            casa: document.querySelector('#tipoDePropiedadCasa').checked,
            apartamento: document.querySelector('#tipoDePropiedadApartamento').checked,
        },
        estado: {
            enConstruccion: document.querySelector('#estadoEnConstruccion').checked,
            aEstrenar: document.querySelector('#estadoAEstrenar').checked,
            usado: document.querySelector('#estadoUsado').checked,
        },
        amenities: {
            garaje: document.querySelector('#amenityGaraje').checked,
            jardin: document.querySelector('#amenityJardin').checked,
            seguridad: document.querySelector('#amenitySeguridad').checked,
            piscina: document.querySelector('#amenityPiscina').checked,
            amueblado: document.querySelector('#amenityAmueblado').checked,
            calefaccion: document.querySelector('#amenityCalefaccion').checked,
        },
        habitaciones: {
            // dormitorios
            unDormitorio: document.querySelector('#cantidadDormitorios1').checked,
            dosDormitorios: document.querySelector('#cantidadDormitorios2').checked,
            tresDormitorios: document.querySelector('#cantidadDormitorios3').checked,
            cuatroDormitorios: document.querySelector('#cantidadDormitorios4').checked,
            cincoMasDormitorios: document.querySelector('#cantidadDormitorios5mas').checked,
            unoYdosDormitorios: document.querySelector('#cantidadDormitorios1').checked && document.querySelector('#cantidadDormitorios2').checked,

            // baños 
            cantidadBaños1 : document.querySelector('#cantidadBaños1').checked, 
            cantidadBaños2  : document.querySelector('#cantidadBaños2').checked,
            cantidadBaños3  : document.querySelector('#cantidadBaños3').checked,
            cantidadBaños4  : document.querySelector('#cantidadBaños4').checked,
            cantidadBaños5Mas : document.querySelector('#cantidadBaños5Mas').checked,

        },
    }

    // Obtenemos la lista de propiedades a mostrar
    const propiedades = getDataFromAPI(filtros)
  

    // Debemos limpiar el contenedor para poder agregarle los nuevos resultados
    container.innerHTML = ''

    // Si dado el filtro, tenemos propiedades...
    if (propiedades.length > 0) {
        // Por cada una de las propiedades
        for (let indiceDePropiedad = 0; indiceDePropiedad < propiedades.length; indiceDePropiedad++) {
            // Clonamos el template para agregarlo al contenedor de cards
            const itemClone = itemTemplate.content.cloneNode(true)

            // Obtenemos el contenedor de imagenes del carousel
            const carouselImagesContainer = itemClone.querySelector('.carousel-inner')

            // Seteamos el titulo
            itemClone.querySelector('.item-title').innerText = propiedades[indiceDePropiedad].tipoDePropiedad + ' en ' +
                propiedades[indiceDePropiedad].ubicacion.barrio + ' con ' +
                propiedades[indiceDePropiedad].habitaciones.dormitorios + (propiedades[indiceDePropiedad].habitaciones.banos > 0 ? (propiedades[indiceDePropiedad].habitaciones.dormitorios > 1 ? ' dormitorios y ' : ' dormitorio y ') +
                propiedades[indiceDePropiedad].habitaciones.banos + (propiedades[indiceDePropiedad].habitaciones.banos > 1 ? ' baños' : ' baño') : (propiedades[indiceDePropiedad].habitaciones.dormitorios > 1 ? ' dormitorios' : ' dormitorio'))

            // Seteamos el precio
            itemClone.querySelector('.item-price').innerText = propiedades[indiceDePropiedad].precio.monto + ' ' + propiedades[indiceDePropiedad].precio.divisa

            // Seteo el id para el carousel y los botones de accion (atras, adelante)
            const carouselId = 'carousel-' + indiceDePropiedad
            itemClone.querySelector('.carousel').id = carouselId
            itemClone.querySelector('.carousel-control-prev').href = '#' + carouselId
            itemClone.querySelector('.carousel-control-next').href = '#' + carouselId

            // Por cada una de las imagenes de la propiedad
            for (let indiceDeImagen = 0; indiceDeImagen < propiedades[indiceDePropiedad].imagenes.length; indiceDeImagen++) {
                // Clonamos el template para agregarlo al contenedor del carousel
                const carouselImageClone = carouselImageTemplate.content.cloneNode(true)

                // Si es la primera imagen de la lista...
                if (indiceDeImagen === 0) {
                    // La seteo como activa en el carousel
                    carouselImageClone.querySelector('.carousel-item').classList.add('active')
                }

                // Seteamos la URL de la imagen
                carouselImageClone.querySelector('img').src = propiedades[indiceDePropiedad].imagenes[indiceDeImagen]

                // Agregamos el elemento clonado como hijo del carousel
                carouselImagesContainer.appendChild(carouselImageClone)
            }

            // Agregamos el elemento clonado como hijo del contenedor de cards
            container.appendChild(itemClone)

            // Quitar el mensaje de ayuda
            msjAyuda.innerHTML = "";

        }
    } else if (propiedades.length <= 0) {
        // TODO: Mostrar mensaje de ayuda al usuario
        // Obtenemos el campo span del mensaje de usuario 
        const msjAyuda = document.getElementById("msjAyuda");
        msjAyuda.innerHTML = "La busqueda no obtuvo ningun resultado, intenta con una nueva busqueda o escribenos a alfred@dc.com";
        
    }
}