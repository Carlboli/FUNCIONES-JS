//punto 12
// let filas = Number(prompt("digite el numero de filas"))
// let columnas = Number(prompt("digite el numero de columnas"))
// let numeros = 1
// document.write("<table border='1'>")
// for(let x = 1; x <= filas; x++){
//     document.write("<tr>")
//     for(let y  = 1; y <= columnas; y++){
//         document.write("<td>")
//         document.write(numeros++)
//         document.write("</td>")
//     }

//     document.write("</tr>")

// }
// document.write("</table>")


// let cantidad = Number(prompt("digite cuantos numeros va ingresar"))
// for(let x = 1; x <=cantidad;x++){
//     let numero = Number(prompt("ingrese el numero " + x))
// let nombre = "carlos"




// function suma(n1,n2) {
//     let res=n1+n2
//     return res
// }
// document.write("la suma es: "+suma(9, 10))

// function operaciones(n1,n2,signo) {

//     if (signo == "+") {
//         return n1 + n2
//     }else if (signo == "-") {
//         return n1-n2
//     }else if (signo == "*") {
//         return  n1*n2
//     }else if (signo == "/") {
//         if(n2 == 0){
//             return "no se puede dividir entre cero"
//         }else{
//             return n1/n2
//         }
//     }else{
//         return  "no se reconoce el signo"

//     }
    
// }

// let num1 = Number(prompt("digite numero 1"))
// let num2 = Number(prompt("digite numero 2"))
// let s = prompt("digite signo de la operacion(+ - * /)")


// let resultado = operaciones(num1,num2,s)
// document.write("el resultado de: "+num1+" "+s+" "+num2+" = "+resultado)



// function saludar(nombre) {
//     document.write("hola caballero "+nombre+"<br>")
// }

// function cantidadSaludos(numero) {
//     for (let i = 1; i <= numero; i++) {
//         let nombres = prompt("digite el nombre "+i)
//         saludar(nombres)
//     }
    
// }
// let cantidad = Number(prompt("digite cantidad de saludos "))
// cantidadSaludos(cantidad)


// PUNTO 1 DEL TALLER
// function superficieRectangulo(n1,n2) {
//     let superficie = n1*n2
//     return superficie
// }
// let n1 =  Number(prompt("digite  el ancho del rectangulo"))
// let n2 = Number(prompt("digite la altura del rectangulo"))
// let resultado = superficieRectangulo(n1,n2)
// document.write("La superficie del Rectangulo es: "+resultado)


// PUNTO 11 FUNCIONES
// function registrarProductos(nPro) {
//     let totalCompra = 0
//     for(x = 1; x <= nPro;  x++){
//         let  nombrePro = prompt("nombre del producto "+x)
//         let cantidadPro = Number(prompt("cantidad a llevar"))
//         let valorPro = Number(prompt("valor del producto"))
//         let totalPro = cantidadPro * valorPro
//         document.write(x+ nombrePro+" $ "+valorPro+" X "+cantidadPro+"  = $"+totalPro+"<br>")
//         totalCompra += totalPro
//     }
//     return totalCompra

// }


// function calcularIva(valorCompra) {
//     let iva = valorCompra * 19/100
//     let compraConIva = valorCompra + iva
//     document.write("<hr>")
//     document.write("Total compra:  $"+valorCompra+"<br>")
//     document.write("Total iva:  $"+iva+"<br>")
//     document.write("Total a pagar: "+compraConIva+"<br>")


// }


// let cantidadPro =  Number(prompt("digite la cantidad de productos a registrar"))
// let compraTotal = registrarProductos(cantidadPro)
// calcularIva(compraTotal)



//PUNTO 8
// let nombre
// function pedirNombre() {
//      nombre = prompt("digite su nombre ")
// }
// function imprimirNombre(){
    
//     document.write("bienvenvenid@ "+nombre)
    
// }
// pedirNombre()
// imprimirNombre()


// PUNTO 2
// function velocidad() {
//     km = parseFloat(prompt("digite velocidad en kilometros"))
//     return km
// }
// function transormarMetros(km) {
//     return km * 1000
// }
// function transformarMillas(km) {
//     return  km * 0.621371
// }
// function mostrarResultados(km) {
//     let velocidadMetros = transormarMetros(km)
//     let velocidadMillas = transformarMillas(km)
//     document.write("velocidad en metros: "+velocidadMetros+"<br>")
//     document.write("velocidad en millas: "+velocidadMillas)
// }
// let velocidadUsuario = velocidad()
// mostrarResultados(velocidadUsuario)



//PUNTO 3
// function circunferencia(radio) {
//     return 2*Math.PI*radio
// }
// function calcularCubo(numero) {
//     return Math.pow(numero,3)
// }
// let radio = parseFloat(prompt("digite el radio del circulo"))
// let resultadoCircunferencia = circunferencia(radio)
// document.write("la circunferencia del circulo es: "+resultadoCircunferencia.toFixed(2)+"<br>")

// let numero = parseFloat(prompt("introduce numero a calcular el cubo"))
// let resultadoCubo = calcularCubo(numero)
// document.write("el cubo de "+numero+" es: "+resultadoCubo)


//PUNTO 4
// function mostrarNombre(nombre) {
//     // Verificar si el nombre es un número
//     if (isNaN(nombre) && nombre !== "") {
//         document.write("El nombre ingresado es: " + nombre);
//     } else {
//         document.write("Ingrese un nombre válido.");
//     }
// }

// // Pedir el nombre al usuario
// let nombreUsuario = prompt("Introduce tu nombre: ");
// mostrarNombre(nombreUsuario);




//PUNTO 5

function mostrarOperaciones(n1, n2) {
    let operaciones = prompt("Digite la operación a realizar: + - * /");
    let resultado;

    if (operaciones === "+") {
        resultado = n1 + n2;
    } else if (operaciones === "-") {
        resultado = n1 - n2;
    } else if (operaciones === "*") {
        resultado = n1 * n2;
    } else if (operaciones === "/") {
        if (n2 === 0) {
            alert("No se puede dividir entre 0");
            return null; // Retornar null si hay error
        } else {
            resultado = n1 / n2;
        }
    } else {
        alert("Operación no válida");
        return null; // Retornar null si la operación no es válida
    }

    // Retornar tanto el resultado como la operación para mostrar más tarde
    return { resultado, operaciones };
}

let n1 = Number(prompt("Digite número 1"));
let n2 = Number(prompt("Digite número 2"));
let resultadoObj = mostrarOperaciones(n1, n2);

if (resultadoObj && resultadoObj.resultado !== null) {
    document.write("El resultado de " + n1 + " " + resultadoObj.operaciones + " " + n2 + " es igual a " + resultadoObj.resultado);
}
