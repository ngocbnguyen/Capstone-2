"use strict";

const locationRadioBtn = document.getElementById("locationRadioBtn");
const parkTypeRadioBtn = document.getElementById("parkTypeRadioBtn");
const selectList = document.getElementById("selectList");


function loadSelections() {

    if (locationRadioBtn.checked) {
        locationsArray.forEach((location) => {
          let newOption = new Option(location, location);
          selectList.appendChild(newOption);
        });
      } else if (parkTypeRadioBtn.checked) {
        parkTypesArray.forEach((park) => {
          let parkTypeOption = new Option(park, park);
          selectList.appendChild(parkTypeOption);
        });
      }
}

window.onload = () => {
    onclick = loadSelections;
}