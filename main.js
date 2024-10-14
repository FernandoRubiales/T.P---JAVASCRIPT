//INTRODUCCION A JAVASCRIPT

//Ejercicio 2
let a = 5;
let b = 10;
let suma = a + b;

console.log("La suma de a y b es "+suma);

//Ejercicio 3

let nombre3 = prompt("Cual es tu nombre ?");

console.log("Hola, " + nombre3);

//OPERADORES LOGICOS Y CONDICIONALES

//Ejercicio 1

a = 10;
b = 20;
let c = 50;

if (a > b && a > c){
  console.log("El mayor de los tres numeros es a: " + a);
} else if (b > a && b > c) {
  console.log("El mayor de los tres numeros es b: " + b);
} else if (c > a && c > b){
  console.log("El mayor de los tres numeros es c: " + c);
}else{
  console.log("Hay dos que son iguales o los tres son iguales");
}

//Ejercicio 2

let numeroAnalizar = prompt("Ingrese un numero y te dire si es par o impar: ");

if(numeroAnalizar % 2 == 0 ){
  console.log("El numero " + numeroAnalizar +", es par");
}else{
  console.log("El numero " + numeroAnalizar +", es impar");
}

//OPERADORES DE ASIGNACION Y BUCLES

//Ejercicio 1
console.log("Inicializar una variable y restarle 1 en cada iteracion");
let variable = 10;
while(variable > 0){
  console.log(variable);
  variable--;
}

//Ejercicio 2
let num;

do{
  num = prompt("Ingrese un número mayor 100");
}while(num <=100);
console.log("Ingresaste un numero mayor a 100: "+num);

//FUNCIONES DE JAVASCRIPT

//Ejercicio 1
const esPar = (numero1) => {

  let resultadoLogico = numero1 % 2 == 0;
  console.log("El numero "+numero1+ " es par: "+resultadoLogico);
  return resultadoLogico;

}

esPar(8);
esPar(7);

//Ejercicio 2
const convertirCelsiusAFahrenheit = (valorCelsius) => {
  let fahrenheit = valorCelsius*1.8 + 32;
  console.log(valorCelsius +"°C es equivalente a "+fahrenheit+"°F");
  return fahrenheit;
}

convertirCelsiusAFahrenheit(30); //30 seria el valor en grados celsius

//OBJETOS EN JAVASCRIPT

//Ejercicio 1
let persona = {
  nombre: 'Carlos',
  edad: 25,
  ciudad: 'Godoy Cruz',
  cambiarCiudad(ciudadNueva){
    this.ciudad = ciudadNueva;

  },

};
persona.cambiarCiudad('Maipu');
console.log("Persona: "+persona.nombre+ ", Edad: "+persona.edad+ ", Ciudad: "+persona.ciudad);

//Ejercicio 2

let libro = {
  titulo: '"El Quijote"',
  autor: 'Miguel de Cervantes',
  año: 1990,
  antiguedadLibro(){
    let añoActual = new Date().getFullYear();
    let diferenciaAños = (añoActual - this.año) > 10;   //si es mayor a 10 años va a devolver true
    console.log("El libro "+libro.titulo+ " es antiguo: "+diferenciaAños);
    return diferenciaAños; 
    
  }

};
libro.antiguedadLibro();

//ARRAYS

//Ejercicio 1
let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrayMultiplicado = [];

for (let i = 0; i < arrayNumeros.length; i++) {
  arrayMultiplicado[i] = arrayNumeros[i] * 2; 
}

console.log("Numeros originales: ", arrayNumeros);
console.log("Numeros multiplicados por 2: ", arrayMultiplicado);

//Ejercicio 2
let arrayPares = [];

for (let i = 0; arrayPares.length < 10; i++) {
    if (i % 2 === 0) {
        arrayPares.push(i);
    }
}

console.log("Primeros 10 números pares:", arrayPares);

//INTRODUCCION AL DOM

//Ejercicio 1

function cambiarColorAzul() {
  const parrafos = document.querySelectorAll("p");
  parrafos.forEach(p => {
      p.style.color = "blue";
  });
}

//Ejercicio 2
function mostrarAlerta() {
  var texto = document.getElementById("txt").value;
  alert("Has ingresado: " + texto);
}

//EVENTOS EN DOM

//Ejercicio 1
document.addEventListener("DOMContentLoaded", function() {
  var listaElementos = document.querySelectorAll("li");

  listaElementos.forEach(function(elemento) {
      elemento.addEventListener("click", function() {
          console.log(elemento.textContent); //muestra el que seleccionemos
      });
  });
});

//Ejercicio 2
function deshabilitarCampo() {
  document.getElementById("campo").disabled = true; //si es true entonces lo deshabilita
}

function habilitarCampo() {
  document.getElementById("campo").disabled = false; //si es false lo habilita
}


//LOCALSTORGE

//Ejercicio 1
function mostrarCorreoGuardado() {
  const emailGuardado = localStorage.getItem('email');
  const divEmailGuardado = document.getElementById('divEmailGuardado');
  const botonEliminarEmail = document.getElementById('botonEliminarEmail');

  if (emailGuardado) {
      divEmailGuardado.textContent = `Correo guardado: ${emailGuardado}`;
      botonEliminarEmail.style.display = 'inline';
  } else {
      divEmailGuardado.textContent = '';
      botonEliminarEmail.style.display = 'none';
  }
}

//Con esta funcion podemos mostrar el correo que se guarda
document.addEventListener('DOMContentLoaded', mostrarCorreoGuardado);

// Se envia el formulario y se guarda el correo
document.getElementById('formularioEmail').addEventListener('submit', function(e) {
  e.preventDefault();
  const emailInput = document.getElementById('email');
  localStorage.setItem('email', emailInput.value);
  emailInput.value = ''; 
  mostrarCorreoGuardado();  
});

//Definimos el boton para poder eliminar el correo guardado
document.getElementById('botonEliminarEmail').addEventListener('click', function() {
  localStorage.removeItem('email');
  mostrarCorreoGuardado();  
});