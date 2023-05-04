// Fetch the JSON data
fetch('Types.json')
    .then(response => response.json())
    .then(data => {
        // Get the types list element
        const typesList = document.getElementById('data-container');

        // Loop through each type and create a list item for it
        data.types.forEach(type => {
            const listItem = document.createElement('button');
            listItem.textContent = type.name;
            listItem.style.color = "#FFFFFF";
            listItem.style.padding = "5px";
            listItem.style.border = "None";
            listItem.style.paddingLeft = "20px";
            listItem.style.paddingRight = "20px";
            listItem.style.marginTop = "10px";
            listItem.style.marginRight = "15px";
            listItem.style.borderRadius = '10px';
            listItem.style.backgroundColor = type.color;
            listItem.addEventListener("click", () => {
                const pokemonContainer = document.getElementById("pokemon-list");
                const allPokemon = document.querySelectorAll(".card");
                allPokemon.forEach(pokemon => {
                    const typeEls = pokemon.querySelectorAll(".type-box");
                    let hasType = false;
                    let hasReset = false;
                    if (type.name === "Reset") {
                        hasReset = true;
                    }
                    typeEls.forEach(typeEl => {
                        if (typeEl.textContent.toLowerCase() === type.name.toLowerCase() || hasReset) {
                            hasType = true;
                        }
                    });
                    if (hasType) {
                        pokemon.style.display = "block";
                    } else {
                        pokemon.style.display = "none";
                    }
                });
            });
            typesList.appendChild(listItem);
        });
    })
    .catch(error => console.error(error));

const searchInput = document.getElementById("search-input");

searchInput.addEventListener("keyup", function (event) {
    const searchValue = event.target.value.toLowerCase();
    const pokemonCards = document.querySelectorAll(".card");

    pokemonCards.forEach(pokemonCard => {
        console.log(pokemonCard);
        const pokemonName = pokemonCard.querySelector(".name").innerText.toLowerCase();
        if (pokemonName.includes(searchValue)) {
            pokemonCard.style.display = "block";
        } else {
            pokemonCard.style.display = "none";
        }
    });
});




const pokemonListElement = document.getElementById('pokemon-list');

const typeColors = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD"
};

// Fetch the first 151 Pokémon from the API
const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=151";

const grid = document.querySelector('.grid-container');

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(data => {
        data.results.forEach((pokemon, index) => {
            fetch(pokemon.url)
                .then(response => response.json())
                .then(data => {
                    const card = document.createElement('div');
                    card.classList.add('card');
                    card.innerHTML = `
            <img class="pd-10" src="${data.sprites.front_default}" alt="${data.name}">
            <span>
                <p class="text-left">Pokédex ID: ${data.id}</p>
                <p class="text-right">${data.base_experience}</p>
            </span>
            <h2 class="name">${data.name}</h2>
            <div class="type-box-container"></div>
          `;
                    data.types.forEach(type => {
                        const typeBox = document.createElement('div');
                        typeBox.classList.add('type-box');
                        typeBox.classList.add(type.type.name);
                        typeBox.textContent = type.type.name;
                        card.querySelector('.type-box-container').appendChild(typeBox);
                    });
                    grid.appendChild(card);
                });
        });
    });


// SORT

const sortAscButton = document.getElementById('sort-asc-btn');
sortAscButton.addEventListener('click', () => {
  const pokemonList = Array.from(pokemonListElement.children);
  pokemonList.sort((a, b) => {
    const aPokedexId = parseInt(a.querySelector('.text-left').textContent.split(':')[1]);
    const bPokedexId = parseInt(b.querySelector('.text-left').textContent.split(':')[1]);
    return aPokedexId - bPokedexId;
  });
  pokemonList.forEach(pokemon => pokemonListElement.appendChild(pokemon));
});
// Add event listener to the Ascending button


// Add event listener to the Descending button


// Sort the cards by descending Pokédex ID
const sortCardsDescending = () => {
    const pokemonCards = [...document.querySelectorAll(".card")];
    pokemonCards.sort((a, b) => {
      const aId = parseInt(a.querySelector(".text-left").textContent.slice(12));
      const bId = parseInt(b.querySelector(".text-left").textContent.slice(12));
      return bId - aId;
    });
    const pokemonList = document.getElementById("pokemon-list");
    pokemonCards.forEach(pokemonCard => {
      pokemonList.appendChild(pokemonCard);
    });
  }
  
  // Add event listener to the sort button
  const sortDescButton = document.getElementById("sort-desc-btn");
  sortDescButton.addEventListener("click", sortCardsDescending);
  

  
