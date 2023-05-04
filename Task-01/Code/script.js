var cards = document.getElementsByClassName("card");
var currentCard = 0;

cards[currentCard].classList.add("active");

document.querySelector(".next-btn").addEventListener("click", function () {
  cards[currentCard].classList.add("flip");
  setTimeout(function () {
    cards[currentCard].classList.remove("active");
    cards[currentCard].classList.remove("flip");
    currentCard = (currentCard + 1) % cards.length;
    cards[currentCard].classList.add("active");
  }, 1000); // 1000ms = 1s = the duration of the flip animation
});

document.querySelector(".prev-btn").addEventListener("click", function () {
  cards[currentCard].classList.add("flip");
  setTimeout(function () {
    cards[currentCard].classList.remove("active");
    cards[currentCard].classList.remove("flip");
    currentCard = (currentCard - 1 + cards.length) % cards.length;
    cards[currentCard].classList.add("active");
  }, 1000); // 1000ms = 1s = the duration of the flip animation
});
