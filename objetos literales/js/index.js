let misDatos = {
    nombre: "Luzmila",
    apellido: "Centurion",
    dni: 47550970,
    edad: 18,
    comidasFavoritas: ["hamburguesa", "milanesas", "papas fritas", "pastel de papa"],
    saludar: function() {
        return `Hola mi nombre es ${this.nombre}  ${this.apellido} y tengo ${this.edad} años. Mi primer comida favorita son las ${this.comidasFavoritas[0]}.`;
    }
};

console.log(misDatos.saludar());

let auto = {
    marca: "toyota",
    modelo: "corsa",
    año: 2022,
    color: "gris",
    posicion: 0,
    avanzar: function(n) {
    this.posicion = this.posicion + n;
    },
    retroceder : function(n) {
    this.posicion = this.posicion - n;
    },
    movimiento: function(avanzar, retroceder) {
        this.avanzar(avanzar);
        this.retroceder(retroceder);
    }
};
auto.movimiento(15, 7);
let posicionFinal = auto.posicion;
console.log(posicionFinal);

let nuevoAuto = {
    marca: "toyota",
    modelo: "corsa",
    año: 2022,
    color: "gris",
    posicion: 0,
    moverse: function(n) {
       this.posicion = this.posicion + n;
       return this.posicion
    }
};

let n = 18;

let posicionFinalAuto = nuevoAuto.moverse(n)
console.log(posicionFinalAuto);


let ironMan = {
    nombre: "Iron Man",
    equipo: "Avengers",
    poderes: ["Volar", "Lanzar misiles", "Disparar láser"],
    energia: 100,
    getPoder: function(p) {
      this.energia = this.energia - 10
      return `Poder elejido de ${this.nombre}= ${this.poderes[2]}. Energia restante ${this.energia}`
    }

};
let p = 5;
console.log(ironMan.getPoder(p));


let Hulk  = {
    nombre: "hulk",
    equipo: "Avengers",
    poderes: ["Volar", "Lanzar misiles", "Disparar láser"],
    energia: 100,
    getPoder: function(h) {
      this.energia = this.energia - 10
      return `Poder elejido de ${this.nombre}= ${this.poderes[0]}. Energia restante ${this.energia}`
    }
};

let h = 2;
console.log(Hulk.getPoder(h));

// batalla

let contador = 0;
function numeroAleatorio() {
    let numero = contador % 3;
    contador++;
    return numero;
    };

    let posibleIronMan= {
        poderes: ["Volar", "Lanzar misiles", "Disparar láser"],
        energia: 100,
        getPoder: function(indice) {
         this.energia= this.energia -10;
         return`poder elejido de ironMan= ${this.poderes[indice]}.
         energia restante ${this.energia}`;}
    };

     let posibleHulk= {
        poderes: ["Aplastar", "Gritar", "Golpear"],
        energia: 100,
        getPoder: function(indice) {
         this.energia= this.energia -10;
         return`poder elejido de hulk= ${this.poderes[indice]}.
         energia restante ${this.energia}`;}
    }


console.log(posibleIronMan.getPoder(numeroAleatorio()));
console.log(posibleHulk.getPoder(numeroAleatorio()));
console.log(posibleIronMan.getPoder(numeroAleatorio()));
console.log(posibleHulk.getPoder(numeroAleatorio()));
console.log(posibleIronMan.getPoder(numeroAleatorio()));
console.log(posibleHulk.getPoder(numeroAleatorio()));