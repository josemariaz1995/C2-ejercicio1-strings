const palabra = "hola buenos dias que tal";
const mayus = palabra.charAt(0).toUpperCase() + palabra.slice(1);
console.log(mayus);
function upperCase() {
    let separar = palabra.split(" ")
    separar = separar.map(
        (n) => 
           n.charAt(0).toUpperCase() + n.slice(1)
        ) 
    separar = separar.join(" ");
    console.log(separar)

}
upperCase();