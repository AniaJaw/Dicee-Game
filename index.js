function randomNumber() {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}

function showDice(number, player) {
  document.querySelector(player).className = '';
  document.querySelector(player).classList.add('face');
  if (number === 1) {
    document.querySelector(player).classList.add('first-face');
    document.querySelector(player).innerHTML = '<div class="dot"></div>';
  } else if (number === 2) {
    document.querySelector(player).classList.add('second-face');
    document.querySelector(player).innerHTML = '<div class="dot"></div><div class="dot"></div>';
  } else if (number === 3) {
    document.querySelector(player).classList.add('third-face');
    document.querySelector(player).innerHTML = '<div class="dot"></div><div class="dot"></div><div class="dot"></div>';
  } else if (number === 4) {
    document.querySelector(player).classList.add('fourth-face');
    document.querySelector(player).innerHTML = '<div class="column"><div class="dot"></div><div class="dot"></div></div><div class="column"><div class="dot"></div><div class="dot"></div></div>';
  } else if (number === 5) {
    document.querySelector(player).classList.add('fifth-face');
    document.querySelector(player).innerHTML = '<div class="column"><div class="dot"></div><div class="dot"></div> </div> <div class="column"><div class="dot"></div></div> <div class="column"> <div class="dot"></div> <div class="dot"></div> </div>';
  } else {
    document.querySelector(player).classList.add('sixth-face');
    document.querySelector(player).innerHTML = '<div class="column"><div class="dot"></div> <div class="dot"></div> <div class="dot"></div></div> <div class="column"><div class="dot"></div> <div class="dot"></div> <div class="dot"></div> </div>';
  }
}


function rollDices() {

  let player1 = randomNumber();
  let player2 = randomNumber();

  showDice(player1, "#player-1-dice > div");
  showDice(player2, "#player-2-dice > div");

  if (player1 > player2) {
    document.querySelector("h2").innerHTML = "Player 1 Wins!";
  } else if (player1 < player2) {
    document.querySelector("h2").innerHTML = "Player 2 Wins!";
  } else {
    document.querySelector("h2").innerHTML = "Draw!";
  }
  document.querySelector("h2").classList.add('active');


}
document.querySelector("#roll").addEventListener("click", rollDices);
