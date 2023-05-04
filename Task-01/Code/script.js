// write code for your buttons here.
let currIndex = 0
let names = ["Akash", "Niranjan","Uday","Abhinand"]
let designation = ["A Methodical Web Developer","An Algorithmic ML Enthusiast", "Design-savvy & Highly Reactive ", "A Cautious Javascript Developer"]
let descr = [
    'A dedicated computer science student with a passion for software engineering. He spends his days coding, testing, and debugging, and is always looking for ways to improve his programming skills. In his free time, he enjoys playing video games and watching science fiction movies.',
    'A driven computer science student who is interested in artificial intelligence and machine learning. He spends hours studying complex algorithms and developing new models to improve data analysis. When he\'s not studying, he enjoys hiking and reading about philosophy.',
    'A creative computer science student with a talent for graphic design. He loves creating beautiful and functional interfaces and to implement them. He is always experimenting with new design techniques. Outside of class, he enjoys playing guitar and exploring new restaurants with his friends.',
    'A curious computer science student who is fascinated by the intersection of technology and society. He is interested in ethical hacking and cybersecurity, and is always looking for ways to improve his knowledge of digital security. In his free time, he enjoys playing soccer and trying to help in any way he can.',
]
let imagePath = [
    "../imgs/Akash.jpg",
    "../imgs/Niranjan.jpeg",
    "../imgs/Uday.jpeg",
    "../imgs/Abhinand.jpg"
]
//Name, Designation, Description

function display(){
    const title = document.getElementById('title')
    const name = document.getElementById('name')
    const desc = document.getElementById('desc')
    const profile = document.getElementById('profile-pic')
    title.innerText = designation[currIndex]
    name.innerText = names[currIndex]
    desc.innerText = descr[currIndex]
    profile.src = imagePath[currIndex]
    profile.alt = imagePath[currIndex]
}

function moveNext(){
    currIndex+=1
    if (currIndex>3){
        currIndex = 0
    }
    display()
}

function movePrev(){
    currIndex-=1
    if (currIndex<0){
        currIndex = 3
    }
    display()
}