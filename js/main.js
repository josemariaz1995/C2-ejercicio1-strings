const palabra = "hola buenos dias que tal";
function upperCase() {
    let separar = palabra.split(" ")
    separar = separar.map(
        function (n) {
            return n.charAt(0).toUpperCase() + n.slice(1);
        })
    separar = separar.join(" ").toString();
    console.log(separar)

}
upperCase();