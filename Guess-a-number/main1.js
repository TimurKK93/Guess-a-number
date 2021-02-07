const random = Math.floor(Math.random() * 100) + 1

const count = document.getElementById('count')
const result = document.getElementById('result')
const btnNum = document.getElementById('btn-num')
const btnRes = document.getElementById('btn-res')
const output = document.getElementById('output')

btnNum.addEventListener('click', btn)
btnRes.addEventListener('click', btnR)

count.innerHTML = 7

function btn() {
    if (output.value == random) {
        result.innerHTML = 'Угадал'
        output.value = ''
        count.innerHTML--
        output.disabled = true

    } else if (output.value == '') {

    } else if (count.innerHTML == 1) {
        result.innerHTML = 'Загаданное число ' + random
        count.innerHTML--
        output.value = ''
        output.disabled = true

    } else if (output.value > random) {
        result.innerHTML = 'меньше'
        output.value = ''
        count.innerHTML--

    } else if (output.value < random) {
        result.innerHTML = 'больше'
        output.value = ''
        count.innerHTML--
    }
}

function btnR() {
    count.innerHTML = 7
    output.value = ''
    output.disabled = false
    result.innerHTML = ''
}
