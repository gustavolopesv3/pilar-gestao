
var inputNames = document.getElementsByClassName("names colunas")[0].children;
var inputSetores = document.getElementsByClassName("setores colunas")[0].children;

var resultadoNomes = document.getElementById("resultadoNomes");
var resultadoSetores = document.getElementById("resultadoSetores");


var arrayNomes = []
var arraySetores = []

function getNames(){
    for ( listaNames of inputNames){
        arrayNomes.push(listaNames.value)
        
    }
}

function getSetores(){
    for ( listaSetores of inputSetores){
        arraySetores.push(listaSetores.value)

    }
}

function sorteioNomes(){
    var unshuffled = arrayNomes
    var shuffled = unshuffled
    .map((a) => ({sort: Math.random(), value: a}))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    nomesAleatorio = shuffled
}



function sorteioSetores(){
    let unshuffled = arraySetores
    let shuffled = unshuffled
    .map((a) => ({sort: Math.random(), value: a}))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    setoresAleatorio = shuffled
}

function printNames(){
    for ( let i of nomesAleatorio){
        resultadoNomes.innerHTML +=`<p>${i}</p>`
    }   
}

function printSetores(){
    for ( let i of setoresAleatorio){
        resultadoSetores.innerHTML +=`<p>${i}</p>`
    }   
}

function clean(){
    resNome = document.getElementById('resultadoNomes').children
    resSetor = document.getElementById('resultadoSetores').children
    resNome = null
    resSetor = null
    arrayNomes = []
    arraySetores = []
    resultadoNomes.innerHTML = resNome
    resultadoSetores.innerHTML = resSetor
}

function addInput(){
    let newInputName = document.getElementsByClassName("names colunas")
    newInputName.push(`<input type="text" placeholder="Nome">`) 
}

function startPilar(){
    clean()
    getNames()
    getSetores()    
    sorteioNomes()
    printNames()
    sorteioSetores()
    printSetores()
    
}
