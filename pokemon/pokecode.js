async function getAPIData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

getAPIData(`https://pokeapi.co/api/v2/pokemon/snorlax`)
.then((data) => {
    console.log(data)
    populatePokeCards(data);
})

const pokeGrid = document.querySelector('.pokeGrid')

function populatePokeCards(singlePokemon) {
    const pokeScene = document.createElement('div')
    pokeScene.className = 'scene'
    const pokeCard = document.createElement('div')
    pokeCard.className = 'card'
    pokeCard.addEventListener('click', () => pokeCard.classList.toggle('is-flipped'))

const front = populateCardFront(singlePokemon)
const back = populateCardBack(singlePokemon)
    

    pokeCard.appendChild(front)
    pokeCard.appendChild(back)
    pokeScene.appendChild(pokeCard)
    pokeGrid.appendChild(pokeScene)
}

function populateCardFront(pokemon) {
    const pokeFront = document.createElement('div')
    pokeFront.className = 'cardFace front'
    pokeFront.textContent = 'Front'
    const pokeImg = document.createElement('img')
    pokeImg.src = '../images/pokeball.png'

    const pokeCaption = document.createElement('figCaption')
    pokeCaption.textContent = pokemon.name
    pokeFront.appendChild(pokeImg)
    pokeFront.appendChild(pokeCaption)
    return pokeFront
}
function populateCardBack(pokemon) {
    const pokeBack = document.createElement('div')
    pokeBack.className = 'cardFace back'
    pokeBack.textContent = 'Back'
    return pokeBack
}



