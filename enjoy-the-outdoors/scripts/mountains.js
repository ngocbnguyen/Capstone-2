"use strict";

const mountainField = document.getElementById("mountainsField");
const cardSection = document.getElementById("card-section");

function loadMountSelect() {
  mountainField.innerHTML = "";
  let option = new Option("Select...", " ");
  mountainField.appendChild(option);
  mountainsArray.forEach((mountain) => {
    let newOption = new Option(mountain.name, mountain.name);
    mountainField.appendChild(newOption);
  });
}

function loadMountainInfo() {
  let selectedValue = mountainField.value;
  mountainsArray.forEach((mountain) => {
    if (selectedValue === mountain.name) {
      buildMountainCard(cardSection, mountain);
    }
  });
}


function buildMountainCard(section, mountain) {
  let colDiv = document.createElement("div");
  colDiv.className = "col";

  const div = document.createElement("div");
  div.className = "card p-3";
  div.style = "width: 22em;";
  section.appendChild(colDiv);
  colDiv.appendChild(div);

  let cardImg = document.createElement("img");
  cardImg.className = "card-img-top";
  cardImg.alt = mountain.name;
  cardImg.src = "./enjoy-the-outdoors/images/" + mountain.img;

  let cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.innerText = mountain.name;

  let desc = document.createElement("p");
  desc.innerText = mountain.desc;
  let elevation = document.createElement("p");
  elevation.innerText = `${mountain.elevation} ft`;
  let addInfo = document.createElement("p");
  addInfo.innerText = `Effort: ${mountain.effort}
    Coordinates: ${mountain.coords.lat}, ${mountain.coords.lng}`;

  const divBody = document.createElement("div");
  divBody.className = "card-body";
  div.append(cardImg, cardTitle, desc, elevation, addInfo);
}

  window.onload = () => {
    loadMountSelect();
    mountainField.onchange = loadMountainInfo;
  }