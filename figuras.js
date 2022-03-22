//-------------------Código del Cuadrado-----------------------

console.group("Cuadrado");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

console.log("El perímetro del cuadrado es: " + perimetroCuadrado(56) + " cm");

console.log("El área del cuadrado es: " + areaCuadrado(56) + " cm^2");

console.groupEnd();

// -------------------Código del Triángulo-------------------

console.group("Triángulo");

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//const alturaTriangulo = 5.5;

//console.log(
//    "Los lados del triángulo miden: "
//+ ladoTriangulo1 + " cm, "
//+ ladoTriangulo2 + " cm, "
//+ baseTriangulo + " cm" );

//console.log("La altura del triángulo es de: " + alturaTriangulo + " cm");

function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base ;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
};

console.log("El perímetro del triángulo es: " + perimetroTriangulo(6,6,4) + " cm");

console.log("El área del triángulo es: " + areaTriangulo(4,5.5) + " cm^2");

console.groupEnd();
// -------------------Código del Triángulo Isosceles-------------------
function alturaTrianguloIsosceles(a, b) {
    const altura = Math.sqrt(Math.pow(a,2)-(Math.pow(b,2)/4));
    return altura;
}
//-----------------------Código del Círculo--------------------

console.group("Círculo");

/* const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI; */
/* 
console.log( "El radio del circulo mide: " + radioCirculo + " cm" );

console.log("El diametro del círculo es de: " + diametroCirculo + " cm");

console.log("PI es: " + PI + " cm"); */

function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo(radio){
    return diametroCirculo(radio) * Math.PI ;
}

function areaCirculo(radio){
    return (radio * radio) * Math.PI
}

console.log("El diametro del círculo es: " + diametroCirculo(5) + " cm");

console.log("El perímetro del círculo es: " + perimetroCirculo(5) + " cm");

console.log("El área del círculo es: " + areaCirculo(5) + " cm^2");

console.groupEnd();

// Aqui interactuamos con HTML

//-----------------------Cuadrado--------------------------
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);

    alert(area);
}
//-----------------------Triángulo--------------------------
function calcularPerimetroTriangulo(){
    const lado1 = parseInt((document.getElementById("InputTrianguloLado1")).value);
    const lado2 = parseInt((document.getElementById("InputTrianguloLado2")).value);
    const base = parseInt((document.getElementById("InputTrianguloBase")).value);

    const perimetro = perimetroTriangulo(lado1, lado2, base);

    alert(perimetro);
}
function calcularAreaTriangulo(){
    const altura = (document.getElementById("InputTrianguloAltura")).value;
    const base = (document.getElementById("InputTrianguloBase")).value;

    const area = areaTriangulo(altura, base);

    alert(area);
}
//------------------Altura Triángulo Isosceles------------
function calcularAlturaTrianguloIsosceles(){
    const lado1 = parseInt((document.getElementById("InputTrianguloIsoscelesLado1")).value);
    const lado2 = parseInt((document.getElementById("InputTrianguloIsoscelesLado2")).value);
    const lado3 = parseInt((document.getElementById("InputTrianguloIsoscelesLado3")).value);

    if (lado1 == lado2) {
        if(lado1 != lado3){
            const altura = alturaTrianguloIsosceles(lado1,lado3);
            alert(altura);
        }
    } else if (lado1 == lado3) {
        if(lado1 != lado2){
            const altura = alturaTrianguloIsosceles(lado1, lado2);
            alert(altura);
        }
    } else if( lado2 == lado3){
        if(lado2 != lado1){
            const altura = alturaTrianguloIsosceles(lado2, lado1);
            alert(altura);
        }
    } else {
        alert("El triángulo no es Isosceles");
    }
}
//-----------------------Círculo--------------------------
function calcularDiametroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const diametro = diametroCirculo(value);

    alert(diametro);
}
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);

    alert(perimetro);
}
function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);

    alert(area);
}
