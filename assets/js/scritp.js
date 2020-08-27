function getFuncionarios() {
    let funcionariosOld = document.querySelectorAll(".func");
    let funcionarios = [];

    for (let i = 0; i < funcionariosOld.length; i++) {
        newFunc = {}
        newFunc[funcionariosOld[i].value] = departamentos[i]
        funcionarios.push(newFunc);
    }

    return funcionarios;
}


function getDepartamentos() {
    let departamentosOld = document.querySelectorAll(".dep");
    let departamentos = [];

    for (let i = 0; i < departamentosOld.length; i++) {
        departamentos.push(departamentosOld[i].value);
    }

    return departamentos;

}



function sortear(arr, departamentosOriginal) {

    sorteados = (arr.sort(() => Math.random() - 0.5))

    for (let i = 0; i < sorteados.length; i++) {

        if (sorteados[i] == departamentosOriginal[i]) {

            return sortear([...sorteados], departamentosOriginal)
        }

    }

    return sorteados

}

function main() {
    document.getElementById('resNome').innerHTML = ""
    document.getElementById('resSetor').innerHTML = ""
    document.getElementById('x').innerHTML = ""

    departamentos = getDepartamentos();

    departamentosOriginal = [...departamentos]

    departamentos = [...sortear(departamentos, departamentosOriginal)]

    funcionarios = getFuncionarios();

    for (let valor of funcionarios) {
        funcionarioNome = Object.keys(valor)
        funcionarioSetor = Object.values(valor)
        document.getElementById('resNome').innerHTML += `
    <p>${funcionarioNome}</p>
  `
  document.getElementById('x').innerHTML += `
    <p>X</p>
  `
  document.getElementById('resSetor').innerHTML += `
  <p>${funcionarioSetor}</p>
`
    }
}