const filterList = document.getElementById("filterList");
const listItems = document.querySelectorAll(".filter");
const resetLi = document.querySelector(".reset");
const searchBox = document.getElementById("searchBox");
const normal = document.getElementById(".normal");

for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("click", function () {
    for (let j = 0; j < listItems.length; j++) {
      listItems[j].classList.remove("selected");
    }
    this.classList.add("selected");
    let activeFilter = this.innerHTML.toLowerCase();
    // console.log(activeFilter);
    let pokeCards = document.querySelectorAll(".pokeCard");
    pokeCards.forEach(function (pokeCard) {
      let pokeType = pokeCard
        .querySelector(".typeFilter")
        .textContent.toLowerCase();
      if (activeFilter === "all" || activeFilter === "normal") {
        pokeCard.style.display = "";
      } else if (activeFilter === "normal") {
        if (pokeType === "normal") {
          pokeCard.style.display = "";
        } else {
          pokeCard.style.display = "none";
        }
      } else if (pokeType === activeFilter) {
        pokeCard.style.display = "";
      } else {
        pokeCard.style.display = "none";
      }
    });

  });
}

resetLi.addEventListener("click", function () {
  for (let j = 0; j < listItems.length; j++) {
    listItems[j].classList.remove("selected");
  }
  listItems[0].classList.add("selected");
  let pokeCards = document.querySelectorAll(".pokeCard");
  pokeCards.forEach(function (pokeCard) {
    pokeCard.style.display = "";
  });
});

fetch("https://pokeapi.co/api/v2/pokemon")
  .then((response) => response.json())
  .then((data) => {
    data.results.forEach((element, id) => {
      let pokeName = element.name;
      let pokeId = `${id + 1}`;
      let pokeExp, pokeImg, pokeType;
      //   console.log(pokeName);
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then((response) => response.json())
        .then((data2) => {
          pokeExp = data2.base_experience;
          pokeImg = data2.sprites.front_default;
          pokeType = data2.types[0].type.name;

          console.log(pokeImg);
          let card = document.createElement("div");
          card.classList.add("pokeCard");
          card.innerHTML = `
          <div class="pokeImg">
          <img
          class="img"
          src="${pokeImg}"
          />
          </div>
          <div class="idExpArea">
          <div class="pokeId">${pokeId}</div>
          <div class="pokeExp">EXP: ${pokeExp}</div>
        </div>
        <div class="pokeName">${pokeName}</div>
        <div class="${pokeType}  typeFilter">${pokeType}</div>
        </div>
        `;
          document.querySelector(".pokeArea").appendChild(card);
        });
    });
  })
  .catch((error) => console.error(error));

// https://pokeapi.co/api/v2/pokemon

searchBox.addEventListener("keyup", function () {
  let input = searchBox.value.toLowerCase().trim();
  let pokeCards = document.querySelectorAll(".pokeCard");

  pokeCards.forEach(function (pokeCard) {
    let pokeName = pokeCard
      .querySelector(".pokeName")
      .textContent.toLowerCase();
    if (pokeName.indexOf(input) !== -1) {
      pokeCard.style.display = "";
    } else {
      pokeCard.style.display = "none";
    }
  });
});
