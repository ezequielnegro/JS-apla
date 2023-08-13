

document.addEventListener("DOMContentLoaded", () => {

    if (localStorage.getItem("busqueda")) {

        let almacen = new Array()
        almacen=JSON.parse(localStorage.getItem("busqueda"))
        mostrarTarjetas(almacen)
    }
    else{
    mostrarTarjetas(arregloEstilos)
    }
})

document.getElementById("link").addEventListener("click",()=>{mostrarTarjetas(arregloEstilos)})

// document.getElementById("search-clear").addEventListener("click",()=>{mostrarTarjetas(arregloEstilos)})
document.getElementById("buscar").addEventListener("input", (e) => {
    let buscar = document.getElementById("buscar").value
    if (buscar == "") {
        mostrarTarjetas(arregloEstilos)
    }
    else{
        document.querySelector("#buscar").addEventListener("keyup", () => {
            let ingreso = document.querySelector("#buscar").value
            if (ingreso.length >= 2) {
                busquedaEstilos(ingreso)
            }
            else { 
                mostrarTarjetas(arregloEstilos)
            }
        })
    }
  })




function busquedaEstilos(ingreso) {
    let arregloBusqueda = arregloEstilos.filter(estilo => estilo.nombre.toLowerCase().includes(ingreso.toLowerCase())
        || estilo.sabor.toLowerCase().includes(ingreso.toLowerCase())
        || estilo.aroma.toLowerCase().includes(ingreso.toLowerCase())
        || estilo.origen.toLowerCase().includes(ingreso.toLowerCase()))
    guardarEnStorage(arregloBusqueda)
    mostrarTarjetas(arregloBusqueda)
    
}

function mostrarTarjetas(arreglo) {
    const divNiveles = document.querySelector("#niveles")
    divNiveles.innerHTML = ""
    arreglo.forEach((ficha) => {
        const { id, tipo, nombre, origen, aroma, sabor, img, nivelesObjeto } = ficha
        const niveles = arregloNiveles.find((id) => id = nivelesObjeto)
        console.log(niveles)
        let divnivel = document.createElement("div")
        divnivel.classList.add('card', 'tarjeta-con-niveles')
        divnivel.id = "niv-" + id
        divnivel.innerHTML = `<img src="${img}" class="card-img-top" alt="${origen}">
    <div class="card-body">
        <h5 class="card-title">${nombre}</h5>
        <p class="card-text">${aroma} ${sabor}</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item tipo">${tipo}</li>
        <li class="list-group-item">Densidad: ${niveles.densidad[0]} - ${niveles.densidad[1]}</li>
        <li class="list-group-item">Alcohol: ${niveles.alcohol[0]} - ${niveles.alcohol[1]}</li>
        <li class="list-group-item">Ibu: ${niveles.ibu[0]} - ${niveles.ibu[1]}</li>
        <li class="list-group-item">Color Srm: ${niveles.colorSrm[0]} - ${niveles.colorSrm[1]}</li>
    </ul> `
        divNiveles.appendChild(divnivel)

    })
}

function guardarEnStorage(arreglo){
    let almacen= new Array()
    almacen=JSON.stringify(arreglo)
    console.log(almacen)
    localStorage.setItem("busqueda",almacen)
}


/* function mostrarNiveles(arregloNiveles) {
    const divNiveles = document.querySelector("#niveles")
    divNiveles.innerHTML = ""
    if (arregloNiveles.length == 0) {
        sinNiveles("No hay cervezas")
    }
    else {
        arregloNiveles.forEach((nivel) => {
            const { id, nombre, cuerpo, densidad, alcohol, color, colorSrm, amargor, ibu } = nivel
            let divnivel = document.createElement("div")
            divnivel.classList.add('card', 'tarjeta-con-niveles')
            divnivel.id = "niv-" + id
            divnivel.innerHTML = `<img src="img/logo4.png" class="card-img-top" alt="logo">
        <div class="card-body">
            <h5 class="card-title">${nombre}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Densidad: ${densidad[0]} - ${densidad[1]}</li>
            <li class="list-group-item">Alcohol: ${alcohol[0]} - ${alcohol[1]}</li>
            <li class="list-group-item">Ibu: ${ibu[0]} - ${ibu[1]}</li>
            <li class="list-group-item">Color Srm: ${colorSrm[0]} - ${colorSrm[1]}</li>
        </ul> `
            divNiveles.appendChild(divnivel)
        })
    }
}

function sinNiveles() { } */