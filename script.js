let mov = document.querySelector('.movendo')
let valor = document.querySelector ('#value')

mov.oninput = ()=>{
    let value = mov.value
    valor.textContent = value
}


