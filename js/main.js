function redirecionar(){
    window.open("https://digitalinnovation.one/");
    //window.location.href = "https://digitalinnovation.one/";
}

function alteraTexto(elemento){
    //document.getElementById("mouseMove").innerHTML = "Voce passou o mouse."
    elemento.innerHTML = "Voce passou o mouse.";
}

function voltaTexto(elemento){
    elemento.innerHTML = "Passe o mouse aqui."
}

function load(){
    alert("Pagina carregada.");
}

function change(elemento){
    alert(elemento.value)
}


//---------- Aula 01 / 02 --------------------
/*
function soma(n1, n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var valIdade = prompt("Qual a sua idade ?");
console.log(validaIdade(valIdade))
*/
//---------- Aula 01 / 02 --------------------
/*
var nome = "Edgar Lopes da Silva";
var idade = 15;
var idade2 = 20;

console.log(nome);
console.log(idade + idade2);
console.log(nome.toUpperCase());

var listaFruta = ["maça", "banana", "pera"]
listaFruta.push("uva")
//listaFruta.pop() //Remove 

console.log(listaFruta)
console.log(listaFruta.toString())
console.log(listaFruta.join(" | "))
*/