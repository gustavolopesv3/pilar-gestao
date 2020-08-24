
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
        resultadoSetores.innerHTML += `<p>${listaSetores.value}</p>`
    }
}

function sorteioNomes(){
    let unshuffled = arrayNomes
    let shuffled = unshuffled
    .map((a) => ({sort: Math.random(), value: a}))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    console.log(shuffled)
}

// function sorteioSetores(){
//     let unshuffled = arraySetores
//     let shuffled = unshuffledpa
//     .map((a) => ({sort: Math.random(), value: a}))
//     .sort((a, b) => a.sort - b.sort)
//     .map((a) => a.value)
//     console.log(shuffled)
// }

function printNames(sorteioNomes){
    let embaralhado = sorteioNomes.shuffled.length
    for (i in embaralhado){
        console.log(`nome ${i}`)
        resultadoNomes.innerHTML += `<p>${i}</p>`
        console.log(`nome ${i}`)
    }
}

function startPilar(){
    getNames()
    getSetores()
    sorteioNomes()
    printNames()
    
}

