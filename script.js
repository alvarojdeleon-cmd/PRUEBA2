function obtenerNumeros() {
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);

    return [numero1, numero2];
}

function mostrarResultado(resultado) {
    document.getElementById("resultado").textContent = resultado;
}

function sumar() {
    let [a, b] = obtenerNumeros();
    mostrarResultado(a + b);
}

function restar() {
    let [a, b] = obtenerNumeros();
    mostrarResultado(a - b);
}

function multiplicar() {
    let [a, b] = obtenerNumeros();
    mostrarResultado(a * b);
}

function dividir() {
    let [a, b] = obtenerNumeros();

    if (b === 0) {
        mostrarResultado("No se puede dividir entre 0");
    } else {
        mostrarResultado(a / b);
    }
}