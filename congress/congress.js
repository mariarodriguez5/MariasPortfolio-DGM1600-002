import { senators } from '../data/senators.js';
import { representatives } from '../data/representatives.js';

const members = [...senators, ...representatives]; //modern combining arrays like a genus

const senatorDiv = document.querySelector('.senators');
const seniorityHeading = document.querySelector('.seniority')
const weaselOrderedList = document.querySelector('.weaselList')
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal-close");

function simplifiedMembers(chamberFilter) {
    
  const filteredArray = members.filter((member) =>
    chamberFilter ? member.short_title === chamberFilter : member
  );

  return filteredArray.map(senator => {
    const middleName = senator.middle_name ? `${senator.middle_name}` : ` `;
    return {
      id: senator.id,
      name: `${senator.first_name}${middleName}${senator.last_name}`,
      party: senator.party,
      imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-100px.jpeg`,
      gender: senator.gender,
      senority: +senator.seniority,
      missedVotesPct: senator.missed_votes_pct,
      loyaltyPct: senator.votes_with_party_pct,
    };
  });
}
populateSenatorDiv(simplifiedMembers(''));

function populateSenatorDiv(simpleSenators) {
  simpleSenators.forEach((senator) => {
    let senFigure = document.createElement("figure");
    let figImg = document.createElement("img");
    let figCaption = document.createElement("figcaption");

    figImg.src = senator.imgURL;

    figCaption.textContent = senator.name;
    senFigure.appendChild(figImg);
    senFigure.appendChild(figCaption);
    senatorDiv.appendChild(senFigure);
  });
}

const filterSenators = (prop, value) =>
  simplifiedMembers().filter((senator) => senator[prop] === value);

const republicans = filterSenators("party", "R");
const democrats = filterSenators("party", "D");
const femaleSenators = filterSenators("gender", "F");

//console.log(republicans, femaleSenators)

const mostSeniorMember = simplifiedMembers().reduce((acc, senator) => {
  return acc.senority > senator.seniority ? acc : senator;
});

seniorityHeading.textContent = `The most senior member of Congress is ${mostSeniorMember.name}.`;
weaselOrderedList.textContent = "Most known people of Congress:";

const mostLoyal = simplifiedMembers().reduce((acc, senator) => {
  if (senator.loyaltyPct === 100) {
    acc.push(senator);
  }
  return acc;
}, []);

const biggestWeasel = simplifiedMembers().reduce(
  (acc, senator) =>
    (acc.missedVotesPct || 0) > senator.missedVotesPct ? acc : senator,
  {}
);

const biggestWeasels = simplifiedMembers().filter(
  senator => senator.missedVotesPct >= 50) 

console.log(biggestWeasels)

biggestWeasels.forEach(weasel => {
    let listItem = document.createElement('li')
    listItem.textContent = weasel.name
    weaselOrderedList.appendChild(listItem)
})

function clearDiv() {
  senatorDiv.innerHTML = "";
}

function showRepublicans() {
  modal.classList.add("is-active");
  clearDiv();
  populateSenatorDiv(republicans);
}

document.getElementById("republicansBtn").addEventListener("click", showRepublicans);

function showDemocrats() {
  modal.classList.add("is-active");
  clearDiv();
  populateSenatorDiv(democrats);
}

document.getElementById("democratsBtn").addEventListener("click", showDemocrats);

function showSenators() {
  modal.classList.add("is-active");
  clearDiv();
  populateSenatorDiv(simplifiedMembers("Sen."));
}

document.getElementById("senatorsBtn").addEventListener("click", showSenators);

function showRepresentatives() {
  modal.classList.add("is-active");
  clearDiv();
  populateSenatorDiv(simplifiedMembers("Rep."));
}

document.getElementById("representativesBtn").addEventListener("click", showRepresentatives);

function closeModal() {
  modal.classList.remove("is-active");
}

modalCloseBtn.addEventListener("click", closeModal);

