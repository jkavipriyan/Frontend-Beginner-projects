let cards = []
let sum = 0;
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.getElementById("card-el")
let isAlive = false
let hasBlackJack = false
let message = ""
let playerEl = document.getElementById("player-el")

let player = {
 name: "Per",
 money: 150
}

playerEl.textContent = player.name + ": $" + player.money

function getRandomCard() {
 let randomNumber = Math.random() * 13
 randomNumber = Math.ceil(randomNumber)
 if (randomNumber === 1) {
  return 11
 } else if (randomNumber > 10) {
  return 10
 } else {
  return randomNumber
 }
}

function startgame() {
 isAlive = true
 let firstCard = getRandomCard()
 let secondCard = getRandomCard()
 cards = [firstCard, secondCard]
 sum = firstCard + secondCard
 rendergame()
}

function rendergame() {
 cardEl.textContent = "Cards: "
 for (let i = 0; i < cards.length; i++) {
  cardEl.textContent += cards[i] + " "
 }

 sumEl.textContent = "Sum: " + sum
 if (sum <= 20) {
  message = "Do you want to draw a new card?";
 } else if (sum === 21) {
  hasBlackJack = true
  message = "You got Blackjack!";
 } else {
  isAlive = false
  message = "You are out of the game!";
 }
 messageEl.textContent = message
}

function newcard() {
 if (isAlive === true && hasBlackJack === false) {
  let card = getRandomCard()
  cards.push(card)
  sum += card
  rendergame()
 }
}