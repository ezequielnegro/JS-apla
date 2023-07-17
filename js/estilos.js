class Estilo {
    constructor(id, tipo, nombre, origen, aroma, sabor) {
        this.id = id
        this.tipo = tipo
        this.nombre = nombre
        this.origen = origen
        this.aroma = aroma
        this.sabor = sabor
        this.nivelesId = null
    }
    getId() {
        return this.id
    }
    getTipo() {
        return this.tipo
    }
    mostrarEstilos() {
        return this.id + " - " + this.nombre
    }
    setNivelesId(niveles) {
        this.nivelesId = niveles
    }
}