const button = document.querySelector('input');
const rand = document.getElementById('radian-btn');
const base = document.getElementById('base-btn');
const root = document.querySelector("html");

let isLog10 = false;

const cursor = document.createElement("div");
cursor.classList.add("cursor");
root.appendChild(cursor);

const follower = document.createElement("div");
follower.classList.add("cursor", "cursor__follower");
root.appendChild(follower);

root.addEventListener("mousemove", (e) => {
  setPosition(follower, e);
  setPosition(cursor, e);
});

function setPosition(element, e) {
  element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
}

function addChar(input, character) {
  if (input.value == null || input.value == "0") input.value = character;
  else input.value += character;
}

function cos(form) {
  form.display.value = Math.cos(form.display.value);
}

function sin(form) {
  form.display.value = Math.sin(form.display.value);
}

function tan(form) {
  form.display.value = Math.tan(form.display.value);
}

function sqrt(form) {
  form.display.value = Math.sqrt(form.display.value);
}

function ln(form) {
  if (isLog10) {
    // Todo: Update the display value with log10 of the input
  } else {
    // Todo: Update the display value with log of the input
  }
}

function exp(form) {
  form.display.value = Math.exp(form.display.value);
}

function deleteChar(input) {
  input.value = input.value.substring(0, input.value.length - 1);
}
var val = 0.0;
function percent(input) {
  val = input.value;
  input.value = input.value + "%";
}

function changeSign(input) {
  if (input.value.substring(0, 1) == "-")
    input.value = input.value.substring(1, input.value.length);
  else input.value = "-" + input.value;
}

function compute(form) {
  form.display.value = eval(form.display.value);
}

function square(form) {
  form.display.value = eval(form.display.value) * eval(form.display.value);
}

function checkNum(str) {
  for (var i = 0; i < str.length; i++) {
    var ch = str.charAt(i);
    if (ch < "0" || ch > "9") {
      if (
        ch != "/" &&
        ch != "*" &&
        ch != "+" &&
        ch != "-" &&
        ch != "." &&
        ch != "(" &&
        ch != ")" &&
        ch != "%"
      ) {
        alert("invalid entry!");
        return false;
      }
    }
  }
  return true;
}

var y = document.getElementById("rad")

rand.addEventListener("click",toggleRad);

function toggleRad(){
  if(rand.value == 'Radian'){
  rand.value = "Degree";
}else{
  rand.value = "Radian";

}
}

base.addEventListener("click",toggleLog);
function toggleLog() {
  if(base.value == 'Normal'){
  base.value = "Base 10";  
}else{
  base.value = "Normal";
}
}

button.addEventListener("click",switchtheme);

function switchtheme(){
  if(button.value == 'Light Mode'){
  button.value = "Dark Mode";
  document.body.classList.toggle("darktheme")
}else{
  button.value = "Light Mode";
  document.body.classList.toggle("darktheme")

}
}

