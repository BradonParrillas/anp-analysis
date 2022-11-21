let dataJSON = [

]

class Anp {
    constructor(id, nombre, areaConservacion) {
        this.id = id
        this.nombre = nombre
        this.areaConservacion = areaConservacion
    }
}

class Ambito {
    constructor(id, nombre, peso, puntaje) {
        this.id = id
        this.nombre = nombre
        this.peso = peso
        this.puntaje = puntaje
        this.indicadores = []
        //Atributos calculados
        this.puntajeTotal = 0
        this.diferenciaPuntaje = 0
        this.porcentajeAvance = 0
    }
}

class Indicador {
    constructor(id, ambito, codigo, nombre, peso, puntaje) {
        this.id = id
        this.ambito = ambito
        this.codigo = codigo
        this.nombre = nombre
        this.peso = peso
        this.puntaje = puntaje
        //Atributos calculados
        this.peso = 0
        this.puntaje = 0
    }

    get calificacion() {
        return this.calcularCalificacion()
    }

    calcularCalificacion() {
        return 0
    }
}

let anps = []
let ambitos = []

anps.push(
    new Anp(1, "Nancuchiname Área de Reserva 1 y 2", "Bahía de Jiquilisco"),
    new Anp(2, "Cara Sucia", "El Imposible - Barra de Santiago"),
)

ambitos.push(

)

//window.addEventListener('load', )