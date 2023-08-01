

let opcionMenu = true

document.addEventListener("DOMContentLoaded", () => {

    mostrarNiveles(arregloNiveles)
})



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