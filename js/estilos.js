class Estilo {
    constructor(id, tipo, nombre, origen, aroma, sabor, img) {
        this.id = id
        this.tipo = tipo
        this.nombre = nombre
        this.origen = origen
        this.aroma = aroma
        this.sabor = sabor
        this.img = img
        this.nivelesObjeto = null
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
    setNivelesObjeto(niveles) {
        this.nivelesObjeto = niveles
    }

    
}