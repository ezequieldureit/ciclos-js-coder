//LOGIN CON USUARIO - EJEMPLO CON WHILE

let user = "coder";
let pass = 12345678;

let inputUser = prompt("Ingrese usuario");
let inputPass = prompt("Ingrese password");

while (inputUser != user || inputPass != pass) {
    alert("El usuario o contraseña no son validos");
    inputUser = prompt("Ingrese su usuario");
    inputPass = prompt("Ingrese su password");
}

if (inputUser == user && inputPass == pass) {
    alert("Inicio de sesión correcto");

} else {

    alert("Datos incorrectos")
}

//CONTEO HELLO WORLD POR CONSOLA - EJEMPLO FOR

// for (let i = 1; i <= 10; i++){
//     console.log("Hello World from console " + i);
// }