
let count = 0
let countEl = document.getElementById("count-el")
let savePhrase = document.getElementById("save-el")

function increment() {
 count+=1
 countEl.textContent = count
}

function save(){
 savePhrase.textContent+= " - " + count
 count= 0
 countEl.textContent = 0
}

let welcomeEl = document.getElementById("welcome-el")
let name = 'J.kavipriyan'
let greeting = `Welcome back ${name}`
welcomeEl.innerText = greeting
welcomeEl.innerText += '🤝'

