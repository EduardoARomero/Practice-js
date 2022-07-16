// Actividad 1:

// let name = "Homero";
// let lastName = "Simpson";
// let age = 39;

// Actividad 2:


// const cliveland = "cliveland"
// const sprinfield = "Sprinfield"
// const cordobaCap = "Cordoba capital"
// const philadelphia = "Filadelfia"
// const norway = "Oslo"


// Actividad 3:

// let nombre = "Bart";
// let apellido = "Simpson";
// let direccion = "742 Av siempre verde";
// let pais = "Sprinfield, Usa";
// let nacimiento = "02-11-70";
// let sexo = "masculino";

// let carnet ="Nombre: "+nombre+" "+apellido+" "+
//             "Pais: "+pais+ " "+
//             "Direccion: "+direccion+" "+
//             "Nacimiento: "+nacimiento+" "+
//             "Sexo: "+sexo+" ";

// console.log(carnet);

// let nombre1 = prompt("ingrese Persona N1: ");
// let nombre2 = prompt("Ingrese Persona N2: ");
// let nombre3 = prompt("Ingrese Persona N3: ");
// let nombre4 = prompt("Ingrese Persona N4: ");
// let nombre5 = prompt("Ingrese Persona N5: ");


// Actividad 4:

// let entradas="primera persona: " +nombre1+" "+
//             "Segunda persona: "+nombre2+" "+
//             "Tercera persona: "+nombre3+" "+ 
//             "Cuarta persona: "+nombre4+" "+ 
//             "Quintacence people: "+nombre5;

// console.log(entradas);


// Actividad 5:

// let precioUsuario = parseInt(prompt("Ingrese un precio: "));

// let descuento20 = precioUsuario - 20;
// let descuento50 = precioUsuario - 50;


// console.log(descuento20);
// console.log(descuento50);


// Actividad B1:

// let nombreUsuario = prompt("Ingrese un nombre: ");
// let nombre = "Marta".toUpperCase();

//         if (nombreUsuario == nombre) {
//             alert("Fui yo");
//         }else {
//             alert("Yo no fui");
//         }


// Actividad B2:

// let usuario = prompt("Ingrese una letra: ");

//     if ((usuario == "Y") || (usuario == "y")){
//         alert("CORRRREECTO");
//     }else{
//         alert("INCORRECTO");
//     }


// Actividad B3:

// let gamer = prompt("Ingrese un numero del 1 al 4: ");


// if (gamer == 1){
//     alert("elegiste a Homero");
// }

// else if (gamer == 2){
//     alert("Elegiste a Marge");
// }

// else if(gamer == 3){
//     alert("Elegiste a Bart");
// }
// else if (gamer == 4){
//     alert("Elegiste a Lisa");

// } else{
//     alert("Numero incorrecto!");
// }


// Actividad B4:

// let presupuesto = parseInt(prompt("Ingrese salario: "));

// if (presupuesto > 0 && presupuesto <= 1000){
//     alert("Presupuesto bajo");
// } else if (presupuesto >= 1001 && presupuesto<=3000){
//     alert("Presupuesto medio");
// }else {
//     alert("Laburas en Epec");
// }



// Actividad B5:

// let producto1 = prompt("ingrese 1er producto:");
// let producto2 = prompt("ingrese 2do producto:");
// let producto3 = prompt("ingrese 3ero producto:");
// let producto4 = prompt("ingrese 4to producto:");

// if ((producto1 != "") && (producto2 != "") && (producto3 !="") && (producto4 !="")){

//     let carritodecompra = "1 " +producto1+ " "+
//                         "2 "+ producto2+ " "+
//                         "3 "+ producto3+" "+
//                         "4 "+producto4;
//     console.log(carritodecompra);
// } else{
//     alert("Carga incorrecta");
// }


// Actividad C1:

// let repetidor = parseInt(prompt("ingresar numero de repeticiones: "));
// let texto = prompt("Ingresar texto a repetir: ");

// for (let i=0; i < repetidor; i++){
//     console.log(texto +" ");
// } 

// Actividad C3:

// let numeroUsuario = parseInt(prompt("Ingrese numero de repeticion: "));

// for (let i = 0; i< numeroUsuario; i++){
//     if (numeroUsuario>5){
//         break;
//     }
//     alert("lado")
// }


// Actividad C4:

// let alumnos = '';

// for (let i=0; i<10; i++){
//     alumnos += prompt("Ingrese nombre de alumno")+ "\n";
// }

// alert(alumnos);


// let perros= '';

// for(let i=0; i<5; i++){
//     perros += prompt("Ingrese nombre del Perro: ")+ "\n";
// }
// alert(perros);


// Actividad C4:

// let entrada = prompt("Ingresar nombre: ");
// let ingresados = "";

// while(entrada != "voldemort"){

//     ingresados += entrada +"\n";
//     entrada = prompt("Ingresar nombre: ");

// }

// alert(ingresados);


//DO WHILE:

// let entrada = prompt("ingrese nombre: ");
// let ingresados = '';

// do{
//     ingresados += entrada +"\n";
//     entrada = prompt("Ingresar nombre: ");
// } while (entrada != 'voldemort');

// alert(ingresados);


//EJERCICIO PROPIO, DO WHILE:

// let helados = prompt("Que sabor queres: ");
// let pedido = '';

// do{
//     pedido += helados + "\n";
//     helados = prompt("Que sabor queres: ");
// } while (helados != 'crema del cielo');

// alert(pedido);


//Actividad C5:

// let entrada = prompt("Ingrese un numero del 1 al 4: "));

// while(entrada.toUpperCase() != "ESC"){

//     switch(entrada){

//         case "1" :
//             alert("Tomate");
//             break;
        
//         case "2":
//             alert("Papa");
//             break;
//         case "3":
//             alert("Carne");
//             break;
//         case "4":
//             alert("Pollo");
//             break;
//         default:
//             alert("error");
//             break;
//     }
//     entrada = prompt("ingrese un numero del 1 al 4: ")
// }


// let chooise = prompt("Welcome, choose a n° 1..3 (Press ESC to end the programm): ");
// while(chooise.toUpperCase()!= "ESC"){

//     switch (chooise) {
//         case "1":
//             (alert("~Wake up and start making your dreams come true~"));
//             break;
//         case "2":
//             alert("~Easy on you, you are learning~");
//             break;
//         case "3":
//             alert("~Just need time, practice and a lot of patience, perseverance is the real key~");    
//             break;
//         default:
//             alert("~This is not the end. May you need to rest a while, and choose a number later...~");
//             break;
//     }
//     chooise = prompt("ingrese n° del 1 a 3: ");
// }


// FUNCIONES:
// Actividad  D1:


// function entrada() {
//     return prompt("Ingresar dato: ")
// }

// function procesamiento(valor) {
//     return "La entrada es: " + valor;
    
// }

// function salida(valor) {
//     alert(valor);
    
// }

// salida(procesamiento(entrada()));

// FUNCIONES DE ORDEN SUPERIOR (AFTER):

// const personas = [
//     { nombre: 'Sam', appellido: 'Hughes', fechaNacimiento: '1978-07-07', profesion: 'Desarrollador', salario: 45000 },
//     { nombre: 'Terri', appellido: 'Bishop', fechaNacimiento: '1989-02-04', profesion: 'Desarrollador', salario: 35000},
//     { nombre: 'Jar', appellido: 'Burke', fechaNacimiento: '2000-11-01', profesion: 'Medico', salario: 38000 },
//     { nombre: 'Julio', appellido: 'Miller', fechaNacimiento: '1991-12-07', profesion: 'Abogado', salario: 40000 },
//     { nombre: 'Chester', appellido: 'Flores', fechaNacimiento: '1988-03-15', profesion: 'Desarrollador', salario: 41000 },
//     { nombre: 'Madison', appellido: 'Marshall', fechaNacimiento: '1980-09-22', profesion: 'Abogado', salario: 32000 },
//     { nombre: 'Ava', appellido: 'Pena', fechaNacimiento: '2004-11-02', profesion: 'Desarrollador', salario: 38000 },
//     { nombre: 'Gabriella', appellido: 'Steward', fechaNacimiento: '1994-08-26', profesion: 'Medico', salario: 46000 },
//     { nombre: 'Charles', appellido: 'Campbell', fechaNacimiento: '1997-09-04', profesion: 'Abogado', salario: 42000 },
//     { nombre: 'Tiffany', appellido: 'Lambert', fechaNacimiento: '1990-05-11', profesion: 'Desarrollador', salario: 34000 },
//     { nombre: 'Antonio', appellido: 'Gonzalez', fechaNacimiento: '1985-03-24', profesion: 'Deportista', salario: 49000 },
//     { nombre: 'Aaron', appellido: 'Garrett', fechaNacimiento: '1985-09-04', profesion: 'Desarrollador', salario: 39000 },
// ];


//1- Filtar por profesion:

// const desarrollador = personas.filter(el => el.profesion == 'Desarrollador');


// console.log(desarrollador);


//2- ordenar por salario:


// personas.sort((a, b) => {
//     if (a.salario > b.salario){
//         return 1
//     }
//     if(a.salario < b.salario){
//         return -1 
//     }
//     return 0
// })

// console.log(personas);


// 3- Calcular promedio de salario:

// const totalSalarios = personas.reduce ((acumulador, el) => acumulador + el.salario, 0);
// console.log(totalSalarios);
// let promedio = Math.round(totalSalarios / personas.length);
// console.log(promedio);

//4- Una lista personas que sena mayores de 35 años.


// let edad = [];
// for (let persona of personas){
//     let fechaNac = new Date(persona.fechaNacimiento);
//     let fechHoy = new Date();
//     if ((fechHoy.getFullYear() - fechaNac.getFullYear()) > 35){
//         edad.push(personas);
//     }
// }
// console.log(edad);


