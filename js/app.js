const img = document.getElementById('img')
const botoes = document.getElementById('buttons')
let corIndex = 0
let intervaloId = null

const semaforo = (event) => {
    pararAutomatico()
    ligar[event.target.id]()

}

// const proximoIndex = () => {
const proximoIndex = () => corIndex = corIndex < 2 ? ++corIndex : 0
    // if (corIndex < 2) {
    //     corIndex++

// } else {
//     corIndex = 0
// }
// }

const alterarCor = () => {
    const cores = ['vermelho', 'amarelo', 'verde']
    const cor = cores[corIndex]
    ligar[cor]()
        // corIndex++
    proximoIndex()
}

const pararAutomatico = () => {
    clearInterval(intervaloId)
}

const ligar = {

    'vermelho': () => img.src = './img/vermelho.png',
    'amarelo': () => img.src = './img/amarelo.png',
    'verde': () => img.src = './img/verde.png',
    'automatico': () => intervaloId = setInterval(alterarCor, 1000)
}

botoes.addEventListener('click', semaforo)