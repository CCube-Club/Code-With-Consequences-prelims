const apiURL = "https://pokeapi.co/api/v2/pokemon/";
const cardContainer = document.getElementById("cards");
const filterInput = document.getElementById("search-bar");
const typeFilter = document.getElementById("tags");
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

  const types = document.createElement("p");
  types.textContent = pokemon.types.map((type) =>
    card.appendChild(typeTag(type.type.name))
  );

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
  if (!allTypeList.includes(type)) {
    allTypeList.push(type);
    typeFilter.appendChild(tag);
  }
  return tag;
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
