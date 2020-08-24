function search() {
    // TODO: Obtener los terminos de busqueda del input de texto
    // TODO: Redireccion a la pagina de listado con el filtro ya aplicados
    alert('Aun queda trabajo por hacer :)')
}

function getDataFromAPI(filtros) {
    // TODO: Obtener datos del servidor
    // De momento vamos a retornar datos "quemados", luego deben venir del servidor

    const propiedades = [
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
            descripcion: '',
            imagenes: [
                'imagenes/inmuebles/inmueble-1-img-1.jpg',
                'imagenes/inmuebles/inmueble-1-img-2.jpg'
            ],
            ubicacion: {
                departamento: '',
                barrio: 'Reducto',
                codigoPostal: ''
            },
            referencia: '',
            amenities: {
                garaje: true,
                jardin: true,
                calefaccion: false,
                amueblado: false,
                seguridad: true,
                piscina: true
            }
        },
        {
            operacion: 'Venta',
            tipoDePropiedad: 'Apartamento',
            estado: {
                enConstruccion: false,
                usada: false,
                aEstrenar: true
            },
            precio: {
                monto: 210000,
                divisa: 'USD'
            },
            metraje: {
                total: 100,
                edificado: 200
            },
            habitaciones: {
                dormitorios: 3,
                banos: 2
            },
            descripcion: '',
            imagenes: [
                'imagenes/inmuebles/inmueble-2-img-1.jpg',
            ],
            ubicacion: {
                departamento: '',
                barrio: 'Malvin',
                codigoPostal: ''
            },
            referencia: '',
            amenities: {
                garaje: false,
                jardin: true,
                calefaccion: true,
                amueblado: true,
                seguridad: true,
                piscina: false
            }
        },
        {
            operacion: 'Alquiler',
            tipoDePropiedad: 'Apartamento',
            estado: {
                enConstruccion: false,
                usada: true,
                aEstrenar: false
            },
            precio: {
                monto: 21000,
                divisa: 'UYU'
            },
            metraje: {
                total: 150,
                edificado: 150
            },
            habitaciones: {
                dormitorios: 2,
                banos: 1
            },
            descripcion: '',
            imagenes: [
                'imagenes/inmuebles/inmueble-2-img-1.jpg',
            ],
            ubicacion: {
                departamento: 'Montevideo',
                barrio: 'Parque Batlle',
                codigoPostal: '11200'
            },
            referencia: '003',
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
            // Resultado del filtro
            return laOperacionCoincide && mostrarCasas && mostrarApartamentos && conGaraje && tieneSeguridad && tieneJardin && tieneCalefaccion && tienePiscina && estaAmueblado && propiedadAEstrenar && porpiedadUsada && propiedadEnConstruccion
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
            amueblado: document.querySelector('#amenityAmueblado').checked
        }
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