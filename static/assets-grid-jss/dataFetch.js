import renderFilters from "/static/assets-grid-jss/renderFilters.js";
import {
  setDataMode,
  setData,
  getData,
  getDataMode,
  getRefreshUrl,
  setRefreshUrl,
} from "./status.js";





export default async function FetchData(tableName = "binance", reload = false) {
  document.querySelector(".page-jss-loading").style.display = "block";
  tableName = tableName.toLowerCase();

  let arrData;
  const arrValues = false;
  const url =
    "https://6tlrxvd6d9.execute-api.ap-south-1.amazonaws.com/live/getlist?getfilters=";

  if (arrValues && !reload) {
    arrData = JSON.parse(arrValues);
    tableName = localStorage.getItem("savedValues");
    renderButtons(tableName);
    setDataMode(tableName);
    renderFilters(arrData);
    document.querySelector(".page-jss-loading").style.display = "none";
  } else {
    renderButtons(tableName);
    setDataMode(tableName);

    arrData = await fetch(url + tableName)
      .then((r) => r.text())
      .then((r) => JSON.parse(r))
      .then((r) => r);

    localStorage.setItem("savedValues", tableName);

    const { data, filters } = await arrData;

    if (await arrData)
      document.querySelector(".page-jss-loading").style.display = "none";
    setData(await arrData);
    renderFilters(await filters.d, await data);

    return await arrData;
  }
}
export async function getDataByDate(date) {
  document.querySelector(".page-jss-loading").style.display = "block";
  const tableName = getDataMode();
    const url = `https://6tlrxvd6d9.execute-api.ap-south-1.amazonaws.com/live/getlist?getdata=${tableName}&date=${date}`;

  try {
    const arrData = await fetch(url)
      .then((r) => r.text())
      .then((r) => JSON.parse(r))
      .then((r) => r.data);
    return await arrData;
  } catch (error) {
    console.log(error);
  } finally {
    document.querySelector(".page-jss-loading").style.display = "none";
  }
}
function renderButtons(tableName) {
  const buttonFetchTableName = tableName == "futures" ? "binance" : "futures";
    const inputPlace = document.querySelector(".futures-select");
  const refReshInputPlace = document.querySelector(".header .refresh-button");
  inputPlace.style.display = "flex";
  while (inputPlace.childElementCount) {
    inputPlace.lastChild.remove();
  }
  fetchButton(buttonFetchTableName, inputPlace);
  setRefreshUrl(tableName);
  // refreshButton(tableName, refReshInputPlace);
}

function fetchButton(tableName, inputPlace) {
  const buttonWraper = document.createElement("div");
  const fetchButton = document.createElement("button");
  const fetchTitle = document.createElement("p");
  buttonWraper.style.margin = "5px 20px";

  fetchTitle.innerText = "Change to ";
  buttonEvents(fetchButton, tableName);
  buttonWraper.appendChild(fetchTitle).append(fetchButton);
  inputPlace.appendChild(buttonWraper);
}

function refreshButton(tableName, inputPlace) {
  // const buttonWraper = document.createElement("div");
  // const fetchButton = document.createElement("button");
  // const fetchTitle = document.createElement("p");
  // buttonWraper.style.margin = "5px 20px";
  // fetchTitle.innerText = `Refresh data `;
  // buttonEvents(fetchButton, tableName);
  // buttonWraper.appendChild(fetchTitle).append(fetchButton);
  // inputPlace.appendChild(buttonWraper);
}

function buttonEvents(button, tableName) {
  button.innerText = tableName;
  button.addEventListener("click", async function (e) {
    e.preventDefault;
    const newData = await FetchData(tableName, true);
    const { filters, data } = await newData;
    renderFilters(await filters.d, await data);
  });
}
