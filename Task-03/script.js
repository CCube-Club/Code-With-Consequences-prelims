const root = document.querySelector("html");

let isRadian = false;
let isLog10 = false;
let isOrientationPortrait = true;

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
  let val = form.display.value;
  if (isRadian) {
    val = parseFloat(val);
  } else {
    val = (parseFloat(val) * Math.PI) / 180;
  }
  form.display.value = Math.cos(val);
}

function sin(form) {
  let val = form.display.value;
  if (isRadian) {
    val = parseFloat(val);
  } else {
    val = (parseFloat(val) * Math.PI) / 180;
  }
  form.display.value = Math.sin(val);
}

function tan(form) {
  let val = form.display.value;
  if (isRadian) {
    val = parseFloat(val);
  } else {
    val = (parseFloat(val) * Math.PI) / 180;
  }
  form.display.value = Math.tan(val);
}


function sqrt(form) {
  form.display.value = Math.sqrt(form.display.value);
}

function ln(form) {
  if (isLog10) {
    form.display.value = Math.log10(form.display.value);
  } else {
    form.display.value = Math.log(form.display.value);
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

function changeOrientation() {
  const orientation = document.getElementById('topButtons');
  orientation.classList.toggle('buttonCol');
  const orientation2 = document.getElementById('wrapper');
  orientation2.classList.toggle('wrapperCol');
  const orientation3 = document.getElementById('wrap');
  orientation3.classList.toggle('wrapCol');
}

function switchTheme() {
  var calculator = document.getElementById('calc_frame');
  calculator.classList.toggle('dark');
}

function toggleRad() {
  isRadian = !isRadian;
  const radToggle = document.getElementById('radToggle');
  radToggle.classList.toggle('radToggle');
  radToggle.innerText = isRadian ? 'Radian' : 'Degree';
  console.log(isRadian);
}

function toggleLog() {
  isLog10 = !isLog10;
  const logToggle = document.getElementById('log');
  logToggle.value = isLog10 ? 'log10' : 'ln';
  console.log(isLog10);
}