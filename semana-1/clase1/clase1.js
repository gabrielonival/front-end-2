/* -------------------------------------------------------------------------- */
/*                                  FUNCION 1                                 */
/* -------------------------------------------------------------------------- */
function iniciarJuego() {
    // saludamos al usuario
    alert("Bienvenido al piedra papel o tijera de Frontend II.");
    let nombre = "";
    // guardamos en una variable en nombre ingresado
    while(true){
    nombre = prompt("Ingese su nombre por favor:");
    
    if(typeof nombre === "string" && nombre.length > 3 && !/\d/.test(nombre)){
        break;
    }else{
        alert("Por favor, ingresa un nombre valido");
    }
    
    }
    //let nombreEnMayus = nombre.toUpperCase;
    alert("Gracias por jugar " + nombre.toUpperCase() + ". ¡Mucha suerte!");
    // mostramos los datos por consola
    console.log("----------------------------");
    console.log("El jugador es:")
    console.log(nombre.toUpperCase());
    console.log("----------------------------");

    return nombre.toUpperCase();
}

// creamos una variable a nivel global para guardar el nombre del jugador que nos devuelve la función
const nombreJugador = iniciarJuego();

/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Modificar la funcion de iniciarJuego(), validar si ingresa un dato válido como nombre.
// 2- Si no ingresa un texto, o tiene menos de 3 caracteres debemos volverle a pedir que lo ingrese.
// 3- Finalmente el nombre devuelto debe estar todo en mayúsculas.


//Resolucion: creamos una variable sin valor para luego ingresarle dicho valor por el prompt solicitado.
//utilizamos el bucle while para que solicite el nombre las veces que sea necesario, mediante un if verificamos que el tipo de dato es string,
//que tiene mas de 3 caracteres y mediante la expresion "!/\d/.test" corroboramos que no tenga numeros(necesitamos poner el ! para que al encontrar numeros sea falso y rompa)
//si se cumplen las condiciones rompemos con "break" de lo contrario vuelve a solicitar el nombre
//al romper muestra un cartel con gracias y el nombre en mayuscula mediante la variable + la sentencia toUpperCase().
//por consola tambien muestra el nombre en mayus y devuelve el dato en mayus.
//por ultimo guardamos el nombre en una variable fuera de la funcion con el retorno de la misma