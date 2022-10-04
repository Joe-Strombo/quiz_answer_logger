let saveEl = document.getElementById("save-el")
let answerEl = document.getElementById("answer-el")
let answer = ""
let result = ""

function answerA() {
    answer = "A"
    answerEl.textContent = answer
}

function answerB() {
    answer = "B"
    answerEl.textContent = answer
}

function answerC() {
    answer = "C"
    answerEl.textContent = answer
}

function answerD() {
    answer = "D"
    answerEl.textContent = answer
}

function save() {
    result = result + answer + " - " 
    saveEl.textContent = result
}
