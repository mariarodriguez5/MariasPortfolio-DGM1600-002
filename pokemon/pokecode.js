 function getAPIData(url) {
  try {
    return fetch(url).then(data => data.json());
  } catch (error) {
    console.error(error);
  }
}
function loadPokemon(offset = 0, limit = 25) {
getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
.then((data) => {
  console.log(data);
  for (const pokemon of data.results) {
      console.log(pokemon)
       getAPIData(pokemon.url).then((pokeData) => populatePokeCards(pokeData), 
       )
};
}
)
}

const pokeGrid = document.querySelector(".pokeGrid");
const loadButton = document.querySelector('.loadPokemon')
loadButton.addEventListener('click', () => loadPokemon(100,5))

const newButton = document.querySelector('.newPokemon')
newButton.addEventListener('click', () => {
    let pokeName = prompt('What is the name of your new Pokemon?')
    let pokeHeight = prompt("What is the Pokemon's height?")
    let pokeWeight = prompt("What is the Pokemon's weight?")
    let newPokemon = new Pokemon(pokeName, pokeHeight, pokeWeight, [])
populatePokeCard(newPokemon)
})

class Pokemon {
    constructor(name, height, weight, abilities) {
        this.id = 100,
        this.name = name, 
        this.height= height,
        this.weight = weight
        this.abilities = abilities
    }
}



function populatePokeCards(singlePokemon) {
  const pokeScene = document.createElement("div");
  pokeScene.className = "scene";
  const pokeCard = document.createElement("div");
  pokeCard.className = "card";
  pokeCard.addEventListener("click", () =>
    pokeCard.classList.toggle("is-flipped")
  );

  const front = populateCardFront(singlePokemon);
  const back = populateCardBack(singlePokemon);

  pokeCard.appendChild(front);
  pokeCard.appendChild(back);
  pokeScene.appendChild(pokeCard);
  pokeGrid.appendChild(pokeScene);
}

function populateCardFront(pokemon) {
  const pokeFront = document.createElement("figure");
  pokeFront.className = "cardFace front";
  const pokeImg = document.createElement("img");
  pokeImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

  const pokeCaption = document.createElement("figCaption");
  pokeCaption.textContent = pokemon.name;
  pokeFront.appendChild(pokeImg);
  pokeFront.appendChild(pokeCaption);
  return pokeFront;
}
function populateCardBack(pokemon) {
  const pokeBack = document.createElement("div");
  pokeBack.className = "cardFace back";
  const label = document.createElement('h4')
  label.textContent = 'Abilities:'
  const abilityList = document.createElement('ul')
  pokemon.abilities.forEach((abilityItem) => {
let listItem = document.createElement('li')
listItem.textContent = abilityItem.ability.name
abilityList.appendChild(listItem)
  })
  pokeBack.appendChild(abilityList)
  return pokeBack;
}
