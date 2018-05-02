var css = document.querySelector("h3");
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var random = document.querySelector('.random');
var body = document.getElementById('gradient');

function setGradient() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

function randColor() {
  var color = "#";
  for (k = 0; k < 3; k++) {
    color += ("0" + (Math.random()*256|0).toString(16)).substr(-2);
  }
  return color;
}

function colorizer(leftSide, rightSide) {
  leftSide.value = randColor();
  rightSide.value = randColor();
  setGradient();
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", function () {
  colorizer(color1, color2);
});

colorizer(color1, color2);
setGradient();
