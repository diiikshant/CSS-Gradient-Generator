let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let css = document.querySelector(".generated");
let angle = document.querySelector(".angle");

function setGradient() {

  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  body.style.background = `linear-gradient( ${angle.value}deg , ${color1.value}, ${color2.value})`;
  css.textContent = body.style.background + ";";

}

angle.addEventListener("keydown", function(e){

  if(angle.value.length > 0 && e.keyCode === 13)
  setGradient();

});
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
