for (let i = 0; i < 5; i++) {
console.log("Practicando con el bucle for");
}

for (let i = 0; i < 10; i++) {
console.log(`la variable i tiene el valor ${i}`);
}

for (let i = 0; i <= 20; i += 2) {
console.log(i);
}

for (let i = 0; i < 50; i+= 5)  {
    console.log(i);
}

for (let i = 100; i>=0; i--) {
console.log(i);
}

let base = 2;
 let resultados = [];

for (let i=1; i<=10; i++) {
 resultados.push(base * i);
}
console.log(resultados);


let base2 = 3;
 let resultados2 = [];

for (let i=1; i<=10; i++) {
 resultados2.push(base2 * i);
}
console.log(resultados2);

   
   let base3 = 5;
    let resultados3 = [];
   
   for (let i=1; i<=10; i++) {
    resultados3.push(base3 * i);
   }
   console.log(resultados3);

   //obtendiendo total
   let ganancias = [2, 5,-7, -8, 20, 4, 6, -9, -6, -3];
   let sumas = 0;
   for (let i = 0; i<ganancias.length; i++) {
sumas += ganancias[i];
   }

console.log(sumas);

//recoriendo arays

let healingIsDifficult = [
    'Fear',
    'Drink to Get Drunk',
    'Taken for Granted',
    'Blow It All Away',
    'Get Me',
    'Im Not Important to You',
    'Sober and Unkissed',
    'Healing Is Difficult',
    'Judge Me',
    'Little Man',
    'Insidiously'
           ];
           let numero = 0;
           for (let i = 0; i<healingIsDifficult.length; i++) {
            console.log((i + 1) + " " + healingIsDifficult[i]);
           }

    // Recorriendo arrays de objetos literales
    let got = [
        {
            nombre: "Jon",
            apellido: "Snow",
            edad: 23,
            ciudad: "Winterfell"
        },
        {
            nombre: "Daenerys",
            apellido: "Targaryen",
            edad: 19
        },
        {
            nombre: "Arya",
            apellido: "Stark",
            edad: 12,
            ciudad: "Winterfell"
        },
        {
            nombre: "Tyrion",
            apellido: "Lannister",
            edad: 32,
            ciudad: "Casterly Rock"
        }
    ]

    for(let i = 0; i < got.length; i++) {
console.log(`Hola ${got[i].nombre} ${got[i].apellido} criatura viajera`);
console.log(`Soy ${got[i].nombre} ${got[i].apellido} de la ciudad ${got[i].ciudad}`);
    }
    
    


    