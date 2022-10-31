"use strict";

const locationRadioBtn = document.getElementById("locationRadioBtn");
const parkTypeRadioBtn = document.getElementById("parkTypeRadioBtn");
const selectList = document.getElementById("selectList");
const parkTable = document.getElementById(
    "parkTable");

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
    parkTable.innerHTML = "";
  
    if (locationRadioBtn.checked) {
      nationalParksArray.forEach((park) => {
        if (selectedValue === park.State) {
          buildTable(parkTable, park);
        }
      });
    } else if (parkTypeRadioBtn.checked) {
      nationalParksArray.forEach((park) => {
        if (park.LocationName.includes(selectedValue)) {
          buildTable(parkTable, park);
        }
      });
    }
  }
  
  function buildTable(table, park) {
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    cell1.innerText = park.LocationName;
  
    let cell2 = row.insertCell(1);
    cell2.innerText = park.Address;
    let cell3 = row.insertCell(2);
    cell3.innerText = park.City;
    let cell4 = row.insertCell(3);
    cell4.innerText = park.State;
    let cell5 = row.insertCell(4);
    cell5.innerText = park.ZipCode;
    let cell6 = row.insertCell(5);
    cell6.innerText = park.Phone;
    let cell7 = row.insertCell(6);
    cell7.innerText = park.Visit;
  }

window.onload = () => {
    onclick = loadSelections;
    selectList.onchange = loadTableBody;
}