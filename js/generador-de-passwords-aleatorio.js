let encriptador = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "{", "}", "|", ":", "<", ">", "?", "[", "]", ";", ",", ".", "/", "~", "`"]
    ;

function encriptadorFunc(longitud) {
    let mensajeEncriptado = "";

    for (let i = 0; i < longitud; i++) {
        let combinacion = Math.floor(Math.random() * encriptador.length);
        mensajeEncriptado += encriptador[combinacion]

    }
    return mensajeEncriptado;
}

function seleccionDeDificultad(nivel) {
    let longitudContrasena = "";

    let selector = prompt("nivel de dificultad")
    nivel = parseInt(selector)

    if (nivel == 1) {
        longitudContrasena = 7;
    } else if (nivel == 2) {
        longitudContrasena = 12;
    } else if (nivel == 3) {
        longitudContrasena = 17;
    } else {
        alert("selección incorrecta")
    }
    return longitudContrasena;
}
let longitudContrasena = seleccionDeDificultad()
let mensajeEncriptado = encriptadorFunc(longitudContrasena);

console.log(mensajeEncriptado)
