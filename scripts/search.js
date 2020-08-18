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
            estado: 'Usado',
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
                seguridad: false
            }
        },
        {
            operacion: 'Venta',
            tipoDePropiedad: 'Casa',
            estado: 'A estrenar',
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
                garaje: true,
                jardin: true,
                calefaccion: false,
                amueblado: false,
                seguridad: true
            }
        }
    ]

    // Esto realmente lo hace el API
    const propiedadesFiltradas = propiedades.filter(
        function (propiedad) {
            const laOperacionCoincide = propiedad.operacion === filtros.tipoDeOperacion

            const casa = filtros.tipoDePropiedad.casa && propiedad.tipoDePropiedad === 'Casa'
            const apartamento = filtros.tipoDePropiedad.apartamento && propiedad.tipoDePropiedad === 'Apartamento'

            const conGaraje = filtros.amenities.garaje && propiedad.amenities.garaje
            const tieneSeguridad = filtros.amenities.seguridad && propiedad.amenities.seguridad

            return laOperacionCoincide && (casa || apartamento) && (conGaraje || tieneSeguridad)
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
            garage: document.querySelector('#amenityGarage').checked,
            jardin: document.querySelector('#amenityJardin').checked,
            seguridad: document.querySelector('#amenitySeguridad').checked,
            piscina: document.querySelector('#amenityPiscina').checked,
            amueblado: document.querySelector('#amenityAmueblado').checked
        }
    }

    // Obtenemos la lista de propiedades a mostrar
    const propiedades = getDataFromAPI(filtros)
    console.log('asd', propiedades)

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
        }
    } else {
        // TODO: Mostrar mensaje de ayuda al usuario
    }
}
