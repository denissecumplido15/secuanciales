function area(){
    const base = parseFloat(document.getElementById("base").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const resultado = (base*altura)/2;
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
};

function conversion(){
    const num1 = parseFloat(document.getElementById("num1").value);
    const resultado = (num1*0.052);
    document.getElementById("resultado").innerText = "Dolares: " + resultado;
};

function edades(){
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultado = (num1-num2);
    document.getElementById("resultado").innerText = "Edad: " + resultado;
};

function cobro(){
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultado = (num1*num2);
    document.getElementById("resultado").innerText = "Total: " + resultado;
};

function pintura(){
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultado = (num1*num2);
    document.getElementById("resultado").innerText = "Total: " + resultado;
};

function hipotenusa(){
    const ca = parseFloat(document.getElementById("ca").value);
    const cb = parseFloat(document.getElementById("cb").value);
    const x = ((ca*ca)+(cb*cb));
    const resultado = Math.sqrt(x);
    document.getElementById("resultado").innerText = "Hipotenusa: " + resultado;
};

function viaje(){
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultado = (num1/num2);
    document.getElementById("resultado").innerText = "Tiempo (hr): " + resultado;
};

function llamada(){
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultado = (num1*num2);
    document.getElementById("resultado").innerText = "Total: " + resultado;
}