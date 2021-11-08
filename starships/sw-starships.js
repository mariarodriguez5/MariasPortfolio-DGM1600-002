import { starships } from "../data/starships.js"
import { getLastNumber, removeChildren } from "../utils/index.js"

const nav = document.querySelector('.nav')
const navlist = document.querySelector('.navList')
const shipView = document.querySelector('.shipViewer')

function populateNav() {
    starships.forEach(starship => {
        let anchorWrap = document.createElement('a')
        anchorWrap.href = '#'
        let listItem = document.createElement('li')
        listItem.textContent = starship.name

anchorWrap.addEventListener('click', () => populateShipView(starship))

        anchorWrap.appendChild(listItem)
        navlist.appendChild(anchorWrap)
    })
}

populateNav()

function populateShipView(shipData) {
    removeChildren(shipView)
console.log(`You clicked on ${shipData.name}`)
let shipImage = document.createElement('img')
let shipNum = getLastNumber(shipData.url)
shipImage.src = `https://starwars-visualguide.com/assets/img/starships/${shipNum}.jpg`
shipView.appendChild(shipImage)
}