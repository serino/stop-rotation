let image = document.getElementById(`image`)
let paragraph = document.getElementById(`paragraph`)

let randomNum 
let intervalId
let rotation = 0
let started = false

image.addEventListener(`click`, startStopRotation)

function startStopRotation() {

  if (started == false) {
    randomNum = Math.floor(Math.random() * 360) + 1
    paragraph.innerHTML = `Click the image when its rotation is ${randomNum} degrees`

    intervalId = setInterval(rotateCompass, 15)
    started = true
  }
  else {
    clearInterval(intervalId)

    if (rotation == randomNum) {
      paragraph.innerHTML = `Rotation is ${rotation}. You were correct!`
    }
    else {
      paragraph.innerHTML = `Rotation is ${rotation}. You were off by ${Math.abs(randomNum - rotation)} degrees.`
    }
    rotation = 0
    started = false
  }
}

function rotateCompass() {
    rotation++
    console.log(randomNum)

    if (rotation == 361) {
      rotation = 1
    }
    image.style.transform = `rotate(${rotation}deg)`
}