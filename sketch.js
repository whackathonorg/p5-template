let backgroundColour
let whackImageHalf
let whackImageWhole

/* Setup function once called at the start */
function setup() {
  whackImageHalf = createImg('whackathon-logo-half.svg')
  whackImageWhole = createImg('whackathon-logo-full.svg')
  whackImageHalf.hide()
  whackImageWhole.hide()
  backgroundColour = color('#5865FF')
  backgroundColour.setAlpha(80)
  createCanvas(windowWidth, windowHeight)
}

/* Called every x seconds */
function draw() {
  let offsetX = whackImageHalf.width / 4
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
