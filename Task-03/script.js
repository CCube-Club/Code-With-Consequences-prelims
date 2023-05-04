const root = document.querySelector("html");

let isRadian = false;
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
  //element.style.transform = translate3d(${e.clientX}px , ${e.clientY}px ,  0);
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
    form.display.value = Math.log10(form.display.value);
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

function switchTheme() {
  if (document.querySelector('.calculator').classList.contains('dark')) {
    document.querySelector('.calculator').classList.remove('dark');
    document.querySelector('.darkBtnTop').classList.remove('darkBtnTop');
    document.querySelector('.darkBtnNum').classList.remove('darkBtnNum');
    document.querySelector('.darkBtnColorGeneric').classList.remove('darkBtnColorGeneric');
    document.querySelector('.log').classList.remove('log');
  }
  else {
    document.querySelector('.calculator').classList.add('dark');
    document.querySelector('.btnTop').classList.add('darkBtnTop');
    document.querySelector('.btnNum').classList.add('darkBtnNum');
    document.querySelector('.btnMath').classList.add('darkBtnColorGeneric');
    document.querySelector('#log').classList.add('log');
  }
}

function toggleRad() {
  if (isRadian) {
    form.display.value = Math.toDegrees(form.display.value);
  }
  else {
    form.display.value = Math.toRadians(form.display.value);
  }
  isRadian = !isRadian;
}

function toggleLog() {
  if (isLog10) {
    document.querySelector('#log').innerHTML = 'ln';
  }
  else {
    document.querySelector('#log').innerHTML = 'log';
  }
  isLog10 = !isLog10;
}