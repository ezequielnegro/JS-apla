

let opcionMenu = true

document.addEventListener("DOMContentLoaded",()=>{



while (opcionMenu != "3" && opcionMenu) {
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
}

function mostrarNiveles() {
    let niveles = ""
    for (let i = 0; i < arregloNiveles.length; i++) {
        niveles += "\n" + arregloNiveles[i].mostrarNombreIbus()
    }
    return niveles
}


})