const apiURL = 'https://pokeapi.co/api/v2/pokemon/';
const cardContainer = document.getElementById('cards');
const filterInput = document.getElementById('filter-input');

const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.results)
  return data;
};

const createCard = (pokemon) => {
  const card = document.createElement('div');
  card.classList.add('card');

  const image = document.createElement('img');
  image.src = pokemon.sprites.front_default;
  card.appendChild(image);

  const name = document.createElement('h2');
  name.textContent = pokemon.name;
  card.appendChild(name);

  const id = document.createElement('p');
  id.textContent = `ID: ${pokemon.id}`;
  card.appendChild(id);

  const exp = document.createElement('p');
  exp.textContent = `Exp: ${pokemon.base_experience}`;
  card.appendChild(exp);

  const types = document.createElement('p');
  types.textContent = `Type: ${pokemon.types.map((type) => type.type.name).join(', ')}`;
  card.appendChild(types);

  cardContainer.appendChild(card);
};

const displayData = (data) => {
  cardContainer.innerHTML = '';
  data.forEach(async(pokemon) => {
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

  filterInput.addEventListener('input', () => {
    filterData(data.results, filterInput.value);
  });
};
  

init();
