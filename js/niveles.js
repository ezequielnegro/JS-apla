class Niveles {
    constructor(id, nombre,cuerpo, densidadMin, densidadMax, alcoholMin, alcoholMax, color, colorSrmMin, colorSrmMax, amargor, ibuMin, ibuMax) {
        this.id = id
        this.nombre=nombre
        this.cuerpo = cuerpo
        this.densidad = [densidadMin,densidadMax]
        this.alcohol = [alcoholMin,alcoholMax]
        this.color = color
        this.colorSrm = [colorSrmMin,colorSrmMax]
        this.amargor = amargor
        this.ibu = [ibuMin,ibuMax]
    }

    getIbu() {
        return this.ibu[0] + " - " + this.ibu[1]
    }
    getAlcohol() {
        return this.alcohol[0] + "% - " + this.alcohol[1] + "%"
    }
    getDensidad() {
        return this.densidad[0] + " - " + this.densidad[1]
    }
    getColorSrm() {
        return this.colorSrm[0] + " - " + this.colorSrm[1]
    }
    getCuerpo() {
        return this.cuerpo
    }
    getAmargor() {
        return this.amargor
    }
    getColor() {
        return this.color
    }
    getPromedioIbu() {
        return (this.ibu[0] + this.ibu[1]) /2
    }
    getPromedioAlcohol() {
        return (this.alcohol[0] + this.alcohol[1]) /2
    }
    mostrarNombreIbus() {
        return this.nombre + " IBU: " + this.ibu[0] + " - " + this.ibu[1]
    }
    setIbu(min,max) {
        this.ibu=[min,max]
        
    }
}