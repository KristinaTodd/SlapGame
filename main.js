let shipHealth = 100
let yourShipHealth = 100
let damagers = {
  canon: { damage: 7, detriment: 5 },
  molotov: { damage: 3, detriment: 1 },
  rifle: { damage: 1, detriment: 0 }
}

function playGame() {
  document.getElementById("game-area").classList.remove("hidden")
  document.getElementById("play-button").classList.add("hidden")

  setInterval(gameTimer, 900)
}


function damageShip(damager) {
  let damageStrength = damagers[damager].damage
  shipHealth = shipHealth - damageStrength

  updatePirateHealth()

  if (shipHealth <= 50) {
    document.getElementById("pirate-ship").classList.add("damaged")
  }

  winGame()

}

function damageYourShip(damager) {
  let damageStrength = damagers[damager].detriment
  yourShipHealth = yourShipHealth - damageStrength

  updatePirateHealth()

  if (yourShipHealth <= 50) {
    document.getElementById("your-ship").classList.add("damaged")
  }

  loseGame()

}

function winGame() {
  if (shipHealth <= 0) {
    alert("you win")
    location.reload()
  }
}

function loseGame() {
  if (yourShipHealth == 0) {
    alert("you lose")
    location.reload()
  }
}

function gameTimer() {
  yourShipHealth--
  updateYourShipHealth()

  if (yourShipHealth <= 50) {
    document.getElementById("your-ship").classList.add("damaged")
  }

  loseGame()
}

function applyBandages() {
  yourShipHealth = yourShipHealth + 5
  console.log(yourShipHealth)
  updateYourShipHealth()

  if (yourShipHealth >= 100) {
    document.getElementById("bandages").classList.add("invisible")

    setTimeout(bandageTimeOutOver, 4000);
  }
}

function updatePirateHealth() {
  document.getElementById("ship-health").innerHTML = `${shipHealth}`
}

function updateYourShipHealth() {
  document.getElementById("your-ship-health").innerHTML = `${yourShipHealth}`
}

function canonBallTimer() {
  document.getElementById("canon-ball").classList.add("invisible")
  setTimeout(canonTimeOutOver, 4000);
}

function molotovTimer() {
  document.getElementById("molotov").classList.add("invisible")
  setTimeout(molotovTimeOutOver, 2000);
}

function canonTimeOutOver() {
  document.getElementById("canon-ball").classList.remove("invisible")
}

function bandageTimeOutOver() {
  document.getElementById("bandages").classList.remove("invisible")
}

function molotovTimeOutOver() {
  document.getElementById("molotov").classList.remove("invisible")
}
