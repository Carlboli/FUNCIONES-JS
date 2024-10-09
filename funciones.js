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

