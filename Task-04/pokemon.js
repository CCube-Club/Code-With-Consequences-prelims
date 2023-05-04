const apiURL = "https://pokeapi.co/api/v2/pokemon/";
const cardContainer = document.getElementById("cards");
const filterInput = document.getElementById("search-bar");
const typeFilter = document.getElementById("tags");
const copyMessage = document.getElementsByClassName("clipboard-message");
var allTypeList = [];

const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.results);
  return data;
};

const createCard = (pokemon) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.onclick = () => {
    copyContent(pokemon.name);
    copyMessage[0].style.display = "block";
    setTimeout(() => {
      copyMessage[0].style.display = "none";
    }, 1500);
  };

  const image = document.createElement("img");
  image.src = pokemon.sprites.front_default;
  card.appendChild(image);

  const details = document.createElement("div");
  details.classList.add("details");

  const id = document.createElement("p");
  id.textContent = `ID: ${pokemon.id}`;
  card.appendChild(id);

  const exp = document.createElement("p");
  exp.textContent = `Exp: ${pokemon.base_experience}`;
  card.appendChild(exp);

  details.appendChild(id);
  details.appendChild(exp);
  card.appendChild(details);

  const name = document.createElement("h2");
  name.textContent = pokemon.name;
  card.appendChild(name);

  const typeCard = document.createElement("div");
  typeCard.classList.add("type-card");
  const types = document.createElement("p");
  types.textContent = pokemon.types.map((type) => {
    typeCard.appendChild(typeTag(type.type.name));

    if (!allTypeList.includes(type.type.name)) {
      allTypeList.push(type.type.name);
      typeFilter.appendChild(typeTag(type.type.name));
    }

    card.appendChild(typeCard);
  });

  cardContainer.appendChild(card);
};

const typeTag = (type) => {
  const tag = document.createElement("div");
  switch (type) {
    case "grass":
      tag.style.backgroundColor = "green";
      break;
    case "poison":
      tag.style.backgroundColor = "purple";
      break;
    case "fire":
      tag.style.backgroundColor = "red";
      break;
    case "flying":
      tag.style.backgroundColor = "skyblue";
      break;
    case "water":
      tag.style.backgroundColor = "blue";
      break;
    case "bug":
      tag.style.backgroundColor = "yellow";
      break;
    case "normal":
      tag.style.backgroundColor = "grey";
      break;
    case "electric":
      tag.style.backgroundColor = "orange";
      break;
    case "ground":
      tag.style.backgroundColor = "brown";
      break;
    default:
      break;
  }

  tag.classList.add("tag");
  tag.textContent = type;
  // tag.addEventListener("click",)
  return tag;
};

const copyContent = async (content) => {
  try {
    await navigator.clipboard.writeText(content);
    console.log("Content copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

const displayData = (data) => {
  typeFilter.innerHTML = "";
  cardContainer.innerHTML = "";
  data.forEach(async (pokemon) => {
    var pokemonData = await fetchData(pokemon.url);
    createCard(pokemonData);
  });
};

const filterData = (data, searchTerm) => {
  const filteredData = data.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
  displayData(filteredData);
};

const init = async () => {
  const data = await fetchData(apiURL);
  displayData(data.results);

  filterInput.addEventListener("input", () => {
    filterData(data.results, filterInput.value);
  });
};

init();
