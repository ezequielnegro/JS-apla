

let opcionMenu = true

document.addEventListener("DOMContentLoaded", () => {

    mostrarNiveles(arregloNiveles)
})

/*  while (opcionMenu != "3" && opcionMenu) {
    opcionMenu = menuEstilos()
}

function menuEstilos() {
    let opcionMenu = prompt("Que accion desea realizar ? \n1) Ver los estilos de cerveza \n2) Ordenar Los Estilos por ibu \n3)Salir ")
    if (opcionMenu == "1") {
        alert("Estilos de Cerveza:\n" + mostrarEstilos())
    } else if (opcionMenu == "2") {
        ordenarPorNivelDeAmargor()
        alert("Los estilos Ordenados por amargor de menor a mayor" + mostrarNiveles())
    } else if (opcionMenu == "3") {
        return opcionMenu
    } else {
        alert("Opcion incorrecta")
    }
    return opcionMenu 
}

function mostrarEstilos() {
    let estilos = ""
    for (let i = 0; i < arregloEstilos.length; i++) {
        estilos += "\n" + arregloEstilos[i].mostrarEstilos()
    }
    return estilos
}

function ordenarPorNivelDeAmargor() {
    arregloNiveles.sort(function (a, b) {
        return a.getPromedioIbu() - b.getPromedioIbu()
    })
} */

/* function mostrarNiveles() {
    let niveles = ""
    for (let i = 0; i < arregloNiveles.length; i++) {
        niveles += "\n" + arregloNiveles[i].mostrarNombreIbus()
    }
    return niveles
}
 */

function mostrarNiveles(arregloNiveles) {
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
            divnivel.innerHTML = `<img src="/img/logo4.png" class="card-img-top" alt="logo">
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
        });
    }
}
function sinNiveles() { }