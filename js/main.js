const palabra = "hola buenos dias que tal";
console.log(`${palabra.charAt(0).toUpperCase()}${ palabra.slice(1)}`);
function upperCase() {
    let separar = palabra.split(" ")
    separar = separar.map(
        (n) =>
           n.charAt(0).toUpperCase() + n.slice(1)
        )
    const palabrasToUpperCase = separar.join(" ");
    console.log(palabrasToUpperCase)

}
upperCase();
