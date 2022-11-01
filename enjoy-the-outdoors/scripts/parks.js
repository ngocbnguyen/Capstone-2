"use strict";

const locationRadioBtn = document.getElementById("locationRadioBtn");
const parkTypeRadioBtn = document.getElementById("parkTypeRadioBtn");
const selectList = document.getElementById("selectList");
const parkTable = document.getElementById("parkTable");
selectList.style.display = "none";

function loadSelections() {
  selectList.innerHTML = "";
  let option = new Option("Select your option");
  selectList.appendChild(option);

  if (locationRadioBtn.checked) {
    locationsArray.forEach((location) => {
      let locationOption = new Option(location);
      selectList.appendChild(locationOption);
    });
  } else if (parkTypeRadioBtn.checked) {
    parkTypesArray.forEach((park) => {
      let parkTypeOption = new Option(park);
      selectList.appendChild(parkTypeOption);
    });
  }
  selectList.style.display = "block";
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
  if (park.Phone == 0) {
    cell6.innerText = "N/A";
  }
  let cell7 = row.insertCell(6);
  let a = document.createElement("a");
  if (park.Visit == undefined) {
    cell7.innerText = "N/A";
  } else {
    a.href = park.Visit;
    a.innerText = "Website";
    cell7.append(a);
  }
}

window.onload = () => {
  locationRadioBtn.onclick = loadSelections;
  parkTypeRadioBtn.onclick = loadSelections;
  selectList.onchange = loadTableBody;
};
