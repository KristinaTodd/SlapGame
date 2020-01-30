let shipHealth = 100
let manPower = 100
let damagers = {
  canon: { damage: 10 },
  molotov: { damage: 5 },
  rifle: { damage: 1 }
}

function playGame() {
  document.getElementById("game-area").classList.remove("hidden")
  document.getElementById("play-button").classList.add("hidden")
}

function damageShip(damager) {
  let damageStrength = damagers[damager].damage
  shipHealth = shipHealth - damageStrength
  console.log(shipHealth)
  updateShipHealth()

  if (shipHealth <= 50) {
    document.getElementById("pirate-ship").classList.add("damaged")
  }

  winGame()

}

function winGame() {
  if (shipHealth == 0) {
    alert("you win")
    location.reload()
  }

}



function updateShipHealth() {
  document.getElementById("ship-health").innerHTML = `${shipHealth}`
}

function canonBallTimer() {
  document.getElementById("time-out").classList.add("invisible")

  setTimeout(timeOutOver, 4000);
}

function timeOutOver() {
  document.getElementById("time-out").classList.remove("invisible")
}