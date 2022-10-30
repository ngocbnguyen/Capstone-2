"use strict";

const locationRadioBtn = document.getElementById("locationRadioBtn");
const parkTypeRadioBtn = document.getElementById("parkTypeRadioBtn");
const selectList = document.getElementById("selectList");
const nationalParkResultsTableBody = document.getElementById(
    "nationalParkResultsTableBody");

function loadSelections() {
    selectList.innerHTML = "";
    let option = new Option("Select...", " ");
    selectList.appendChild(option);

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

function loadTableBody() {
    let selectedValue = selectList.value;
    nationalParkResultsTableBody.innerHTML = "";
  
    if (locationRadioBtn.checked) {
      nationalParksArray.forEach((park) => {
        if (selectedValue === park.State) {
          buildNationalParkRow(nationalParkResultsTableBody, park);
        }
      });
    } else if (parkTypeRadioBtn.checked) {
      nationalParksArray.forEach((park) => {
        if (park.LocationName.includes(selectedValue)) {
          buildNationalParkRow(nationalParkResultsTableBody, park);
        }
      });
    }
  }
  
  function buildNationalParkRow(tableBody, nationalPark) {
    let row = tableBody.insertRow(-1);
    let cell1 = row.insertCell(0);
    cell1.innerText = nationalPark.LocationName;
  
    let cell2 = row.insertCell(1);
    cell2.innerText = nationalPark.Address;
    let cell3 = row.insertCell(2);
    cell3.innerText = nationalPark.City;
    let cell4 = row.insertCell(3);
    cell4.innerText = nationalPark.State;
    let cell5 = row.insertCell(4);
    cell5.innerText = nationalPark.ZipCode;
    let cell6 = row.insertCell(5);
    cell6.innerText = nationalPark.Phone;
  }

window.onload = () => {
    onclick = loadSelections;
    selectList.onchange = loadTableBody;
}