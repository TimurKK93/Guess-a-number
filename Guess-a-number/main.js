const guessNumber = {

    count: document.getElementById('count'),
    result: document.getElementById('result'),
    btnNum: document.getElementById('btn-num'),
    btnRes: document.getElementById('btn-res'),
    output: document.getElementById('output'),

    counts(c) {
        this.count.innerHTML = c
        return this.counter = this.count.innerHTML
    },

    launch(num) {
        const that = this
        this.btnNum.addEventListener('click', function () {
            that.btn()
        })
        this.btnRes.addEventListener('click', function () {
            that.btnR()
        })
        return this.numberRandom = Math.floor(Math.random() * num) + 1
    },

    btn() {
        if (this.output.value == this.numberRandom) {
            this.result.innerHTML = 'Поздравляю, вы угадали число ' + this.numberRandom
            this.output.value = ''
            this.count.innerHTML--
            this.output.disabled = true

        } else if (this.output.value == '') {

        } else if (this.count.innerHTML == 1) {
            this.result.innerHTML = 'Вы не угадали, это число ' + this.numberRandom
            this.count.innerHTML--
            this.output.value = ''
            this.output.disabled = true

        } else if (this.output.value > this.numberRandom) {
            this.result.innerHTML = 'меньше'
            this.output.value = ''
            this.count.innerHTML--

        } else if (this.output.value < this.numberRandom) {
            this.result.innerHTML = 'больше'
            this.output.value = ''
            this.count.innerHTML--
        }
    },

    btnR() {
        // this.count.innerHTML = this.counter
        // this.output.value = ''
        // this.output.disabled = false
        // this.result.innerHTML = ''
        window.location.reload()
    }
}
