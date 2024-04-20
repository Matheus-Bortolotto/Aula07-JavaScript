
// const preco = document.getElementById('resultado')
// function calcular() {
//     const numeroDelivros = parseFloat(document.getElementById("numBooks").value)

//     var resultado = ""

//     if (numeroDelivros >= 7   ) {
//         resultado = numeroDelivros * 15
//     }
//     else{
//         resultado = numeroDelivros *22 
//     }

//     preco.innerText = `o resultado é ${resultado}`
// }



// const preco = document.getElementById('resultado')
// function calcular() {
//     const velocidade = parseFloat(document.getElementById("velocidade").value)

//     var resultado = ""

//     if (velocidade <= 60   ) {
//         resultado = "Boa pessoa"
//         preco.innerText = `vc não recebeu multa`
//     }
//     else{
//         resultado = velocidade *100
//         preco.innerText = `sua multa é de ${resultado}`
//     }

// }


let cargo = document.getElementById("cargo")
let salario = 3000
function calcular(){

switch(cargo){
    case 'Junior':
    console.log('Junior ganha R$3,000');
    break
    case 'Pleno':
    console.log(salario*2 )
    break
    case 'Senior':
    console.log(salario*3)
    break
    case 'TechLead':
    console.log(salario*4)
    break
    case 'Diretor':
    console.log(salario*10)
    break
}
}