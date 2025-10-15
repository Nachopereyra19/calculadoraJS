//Funcion para obtener los valores de los inputs

function obtenerValores () {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    return {num1, num2};
}

// Cada operación tiene su propia función

function suma () {
    const { num1, num2 } = obtenerValores();
    mostrarResultado (num1 + num2);
}

function resta () {
    const { num1 , num2 } = obtenerValores();
    mostrarResultado (num1 - num2);
}

function multiplicado () {
  const { num1, num2 } = obtenerValores();
  mostrarResultado(num1 * num2);
}

function division () {
    const { num1, num2 } = obtenerValores ();
    if (num2 ==0) {
        mostrarResultado("No se puede dividir por 0")
    }
    else {
        mostrarResultado (num1 / num2);
    }
}

// Muestra el resultado en el div #resultado
function mostrarResultado(valor) {
  document.getElementById("resultado").innerText = `Resultado: ${valor}`;
}
