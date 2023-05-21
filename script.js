let izraz = "";
let broj1 = "";
let broj0 = "";
let operacija = "";

function number0(){
    var tekst = document.getElementById("calc");
    broj1 += "0";
    izraz += "0";
    let prviBroj = izraz.toString();
    tekst.innerText = prviBroj;
}
function number1(){
    var tekst = document.getElementById("calc");
    broj1 += "1";
    izraz += "1";
    let prviBroj = izraz.toString();
    tekst.innerText = prviBroj;
}
function number2(){
    var tekst = document.getElementById("calc");
        broj1 += "2";
        izraz += "2";
    let prviBroj = izraz.toString();
    tekst.innerText = prviBroj;
}
function number3(){
    var tekst = document.getElementById("calc");
        broj1 += "3";
        izraz += "3";
    let prviBroj = izraz.toString();
    tekst.innerText = prviBroj;
}
function number4(){
    var tekst = document.getElementById("calc");
        broj1 += "4";
        izraz += "4";
    let prviBroj = izraz.toString();
    tekst.innerText = prviBroj;
}
function number5(){
    var tekst = document.getElementById("calc");
        broj1 += "5";
        izraz += "5";
    let prviBroj = izraz.toString();
    tekst.innerText = prviBroj;
}
function number6(){
    var tekst = document.getElementById("calc");
        broj1 += "6";
        izraz += "6";
    let prviBroj = izraz.toString();
    tekst.innerText = prviBroj;
}
function number7(){
    var tekst = document.getElementById("calc");
        broj1 += "7";
        izraz += "7";
    let prviBroj = izraz.toString();
    tekst.innerText = prviBroj;
}
function number8(){
    var tekst = document.getElementById("calc");
        broj1 += "8";
        izraz += "8";
    let prviBroj = izraz.toString();
    tekst.innerText = prviBroj;
}
function number9(){
    var tekst = document.getElementById("calc");
        broj1 += "9";
        izraz += "9";
    let prviBroj = izraz.toString();
    tekst.innerText = prviBroj;
}
function dot(){
    var tekst = document.getElementById("calc");
        broj1 += ".";
        izraz += ".";
    let prviBroj = izraz.toString();
    tekst.innerText = prviBroj;
}
function plus(){
    var tekst = document.getElementById("calc");
        izraz += " + ";
        broj0 = broj1;
        broj1 = "";
        operacija = "+";
        let prviBroj = izraz.toString();
    tekst.innerText = prviBroj;
}
function minus(){
    var tekst = document.getElementById("calc");
        izraz += " - ";
        broj0 = broj1;
        broj1 = "";
        operacija = "-";
        let prviBroj = izraz.toString();
    tekst.innerText = prviBroj;
}
function puta(){
    var tekst = document.getElementById("calc");
        izraz += " * ";
        broj0 = broj1;
        broj1 = "";
        operacija = "*";
        let prviBroj = izraz.toString();
    tekst.innerText = prviBroj;
}
function podeljeno(){
    var tekst = document.getElementById("calc");
        izraz += " / ";
        broj0 = broj1;
        broj1 = "";
        operacija = "/";
        let prviBroj = izraz.toString();
    tekst.innerText = prviBroj;
}
function jednako(){
    var tekst = document.getElementById("calc");
    let broj00 = parseFloat(broj0);
    let broj11 = parseFloat(broj1);
    let rezultat = 0.0;

    if(operacija == "+"){
        rezultat = broj00 + broj11;
    }
    if(operacija == "-"){
        rezultat = broj00 - broj11;
    }
    if(operacija == "*"){
        rezultat = broj00 * broj11;
    }
    if(operacija == "/"){
        rezultat = broj00 / broj11;
    }
    let prviBroj = rezultat.toString();
    tekst.innerText = prviBroj;
    izraz = "";
    broj0 = "";
    broj1 = "";
}