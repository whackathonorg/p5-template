let backgroundColour
let whackImageHalf
let whackImageWhole

/* Setup function once called at the start */
function setup() {
  whackImageHalf = createImg('https://whackathon.org/images/whackathon_half.png')
  whackImageWhole = createImg('https://whackathon.org/images/whackathon_whole.png')
  whackImageHalf.hide()
  whackImageWhole.hide()
  backgroundColour = color('#4B8CFF')
  backgroundColour.setAlpha(80)
  createCanvas(windowWidth, windowHeight)
}

/* Called every x seconds */
function draw() {
  let offsetX = whackImageHalf.width / 2
  let offsetY = whackImageHalf.height / 2
  background(backgroundColour)
  if (mouseIsPressed) { // p5 provides handy global variables as mouseIsPressed or coordinates
    image(whackImageWhole, mouseX - offsetX, mouseY - offsetY)
  } else {
    image(whackImageHalf, mouseX - offsetX, mouseY - offsetY)
  }

}

/* Eventhandler function provided by p5 */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
  background(backgroundColour)
}
