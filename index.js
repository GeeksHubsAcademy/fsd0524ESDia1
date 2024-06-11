// let Pikachu = 40;
// var Charmander = 60;

// {
// let Pikachu = 0.4;
// var Charmander = 0.6;

// console.log(Pikachu, Charmander);
// // Pikachu: 0.4, Charmander: 0.6
// }

// console.log(Pikachu, Charmander);
// // Pikachu: 40, Charmander: 0.6

//ARROW FUNCTIONS

// function Sumar (a, b) {
//     return a + b;
// };

// const Sumar = (a, b) => {
//     return a + b;
// }

// const Sumar = (a, b) => a + b;

// const ContarSaludar = (a, b) => {
//     for(let i = a; i <= b; i++){
//         console.log(i)
//     }
//     console.log(`Hola, has contado hasta ${b}, espero que te hayas divertido.`)
// }

// const Admitir = (edad, film) => {
//     if(edad >= 18 && film === "The Matrix"){
//         console.log(`Hola, bienvenido a la película`)
//         return true;
//     }
//     return false;
// }

// const Sumar = (a, b) => {
//     return a + b;
// }

// const Saludar = nombre => console.log(nombre)
// //Estas dos funciones Saludar hacen exactamente lo mismo.
// function Saludar (nombre) {
//     return console.log(nombre)
// }

//Si lo que devuelves en la función es un objeto, debes de envolverlo en paréntesis
// const Pokemon = nombre => ({Pokemon: nombre})

// console.log(Pokemon("Charmander"))

/////////////////////////
////////MAP/////////////
///////////////////////

// let bebida = ["nestea", "fanta", "coca-cola", "sprite", "agua"];
// let bebidas = bebida.map(elemento => elemento + 's');

// console.log(bebida)

// const impuestos = (valor, tasa = 0.21) => valor + (valor*tasa);

// console.log(impuestos(10, 0.16))

// const Robot = (letras = "RX") => letras + (Math.floor(Math.random() * 999) + 1);

// const Robot = (res = Math.floor(Math.random() * 999)+1 , letras = "RX") => res < 100 ? letras + "0" +res : letras + res

// for(let i = 0; i < 5; i++){
//     console.log(Robot())
// }

// //SPREAD

// const habilidades = (name, ps, atk, def, speed) => {

//     console.log("Nombre: ", name);
//     console.log("Vida: ", ps);
//     console.log("Ataque: ", atk);
//     console.log("Defensa: ", def);
//     console.log("Velocidad: ", speed);

// }

// let Pokemon = ["Pikachu", 35, 55, 40, 90]

// // habilidades(Pokemon[0], Pokemon[1], Pokemon[2], Pokemon[3], Pokemon[4])

// habilidades(...Pokemon)

//REST

// const FuncionConRest = (...Argumentos) => {
//     console.log(Argumentos.length)

// }

// FuncionConRest(1, 2, 3, 4, 5);
// FuncionConRest(1,2);
// FuncionConRest(1,2,3,4,5,6,7,8,9,10);

//DESESTRUCTURACIÓN

// let comida = ["verdura", "fruta", "pescado"];

// let [primera, segunda, tercera] = comida;

// console.log(primera, segunda, tercera);

// let abraham = {
//     hobbie1: "programar",
//     hobbie2: "matematicas",
//     hobbie3: "algebra"
// }

// let {hobbie1: uno, hobbie2: dos, hobbie3: tres} = abraham;
// let {hobbie1} = abraham;

// console.log(hobbie1);

// //INTERPOLACIÓN
// let nombre = "Santiago";

// console.log(`Hola ${nombre}`);

//FOR OF.... Y FOR IN COMO ALTERNATIVAS AL FOR

// let animales = ["panda", "lince", "koala", "tigre", "gato"];

// for(let i = 0; i < animales.length; i++){
//     console.log(animales[i])
// }

// //FOR OF...

// for(let animal of animales){
//     console.log(animal)
// }

//FOR IN

// for (let indice in animales) {
//   console.log(indice);
// }

//EL FOR IN RECORRE OBJETOS...MAGICCCCCC

// let bebidas2 = {
//   bebida1: "fernet",
//   bebida2: "agua",
//   bebida3: "sangria",
//   bebida4: "zumo de manzana",
//   bebida5: "tequila rosa",
// };

// for(let drink in bebidas2){
//     console.log(bebidas2[drink])
// }

// let colores = ["rojo", "verde", "negro", "azul", "amarillo"];

// console.log(colores.includes("negro"))

// let coche = {
//   marca: "Nissan",
//   //[marca, nissan]
//   year: 2020,
//   //[year, 2020]
//   motor: "gasolina",
//   //[motor, gasolina]
//   color: "blanco",
//   //[color, blanco]
//   new: true,
//   //[new, true]
// };

// Object.entries(coche).map(([clave, valor], index) =>
//   console.log(`${clave} en la posicion ${index}`)
// );

// console.log("las naves".padStart(20, "@"))
// console.log("las naves".padEnd(20, "@"))


// let arrayArrays = [1,2,3,4,[5,6,7,[8,9,10]]];

// console.log(arrayArrays.flat())


//EJEMPLO DE MAP

// let peliculas = [
//     {title:"La momia 1" , year: 2020, adult: false},
//     {title:"La momia 2" , year: 2021, adult: false},
//     {title:"La momia 3" , year: 2022, adult: false},
//     {title:"La momia 4" , year: 2023, adult: false}
// ]

// peliculas.map(
//     pelicula => {
//         console.log(pelicula.title, pelicula.adult)
//     }
// )

//OBJECT...FROMENTRIES

// let arrayDeArrays = [
//     ["deporte","boxeo"],["comida","hamburguesa"],["pelicula","dracula"]
// ]

// console.log(Object.fromEntries(arrayDeArrays))