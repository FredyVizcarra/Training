


var perimetroCuadrado = function (lado) {
    return lado * 4;
}

var areaCuadrado = function (lado) {
    return lado * lado;
}

var perimetroTriangulo = function (lado1, lado2, base) {
    return lado1 + lado2 + base;
}

var areaTriangulo = function (altura, base) {
    return (base * altura) / 2;
}

var diametroCirculo = function (radio) {
    return radio * 2;
}

const PI = Math.PI

var perimetroCirculo = function (radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

var areaCirculo = function (radio) {

    return (radio * radio) * PI;
}

var calcularPerimetroCuadrado = function () {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

var calcularAreaCuadrado = function () {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

var calcularAlturaTrianguloI = function () {
    const input1 = document.getElementById("InputTrianguloI1");
    const value1 = input1.value;

    const input2 = document.getElementById("InputTrianguloI2");
    const value2 = input2.value;

    const inputb = document.getElementById("InputTrianguloIb");
    const valueb = inputb.value;

    if (value1 === value2) {
        const altura = Math.sqrt(value1 ** 2 - valueb ** 2 / 4)


        return alert(altura);
    } else {
        return alert("Esto no es un triangulo isoceles");
    }
}