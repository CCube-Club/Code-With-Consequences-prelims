// write code for your buttons here.

var name = ["Yash", "Saumy", "Kiran","Satrudhan"];
var about = ["Web developer who loves cars","Aspirational Mathematician who also codes","Love food Travel and coffee","Avid reader and a writer"];
var des = ["Web Developer","Mathematician","App Dev","UI/UX Designer"];


function display(){
    const title = document.getElementById('des')
    const name = document.getElementById('name')
    const desc = document.getElementById('about')
    title.innerText = designation[i]
    name.innerText = names[i]
    desc.innerText = descr[i]
}

var i = 0;

function Next() {
    i++;
    if (i > 3) {
    } else {
        i = 0;
    }
    display();
    }

function Prev() {
    i--;
    if (i < 0) {
    } else {
        i = 3;
    }
    display();
}

