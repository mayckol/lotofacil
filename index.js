document.addEventListener('DOMContentLoaded', function () {
    createElement()
}, false);

function replaceMe(html, data) {
    const pattern = /:\s*(\w+?)\s*:/g;
    return html.replace(pattern, (_, token) => data[token] || '');
}

function generateRandomNumbers() {
    let generatedNumbers = []
    let number = 0
    let index = 1
    while (index < 16) {
        number = Math.floor((Math.random() * 25) + 1)
        if (generatedNumbers.includes(number)) {
            continue
        }
        generatedNumbers.push(number)
        index++
    }
    return generatedNumbers
}

function createElement() {
    const html = `<label id="number-:number:">:number:</label>
`
    let data = {number: ''}

    let divAppendNumbers = document.getElementById('div-append-numbers');
    let index = 1
    while (index < 26) {
        data.number = index > 9 ? index : `0${index}`
        let singleTmp = replaceMe(html, data)
        index++
        let spam = document.createElement("span")
        spam.innerHTML = singleTmp
        divAppendNumbers.appendChild(spam)
    }
}

function generateNewBet() {
    document.querySelectorAll('.selected').forEach(el => el.classList.remove('selected'))
    let generateNumbers = generateRandomNumbers().sort((a, b) => a-b)
    let index = 0
    while (index < generateNumbers.length) {
        let id = generateNumbers[index] > 9 ? `number-${generateNumbers[index]}`
            : `number-0${generateNumbers[index]}`
        if (document.getElementById(id)) {
            document.getElementById(id).classList.add('selected')
        }
        index ++
    }
}
