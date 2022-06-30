import renderBlocks from "/static/assets-grid-jss/renderBlocks.js";
import { filterItemsByIndicator } from "/static/assets-grid-jss/events.js";
import { getDataMode } from "/static/assets-grid-jss/status.js";
import renderBlockInformationOnClick from "/static/assets-grid-jss/events.js";


export default function renderFilters(filterArrDates, dataByDate) {
  const today = new Date();
  const nextDay = new Date();
  nextDay.setDate(today.getDate() + 1);
  const todayDayValue = `${today.getFullYear()}-${today.getFullMonth()}-${today.getFullDate()}`;

  const filterArrIndicators = ["ALL"];
  const filterBlockDates = document.getElementById("date-select-dropdown");
    const filterBlockIndicators = document.getElementById("indicator-select-dropdown");
  const filterBlockSymbols = document.getElementById("symbol-select-dropdown");



 filterBlockIndicators.innerHTML = "";
    filterBlockSymbols.innerHTML = "";

    filterBlockSymbols.addEventListener("change", async function (e) {
  
        
        

        const filterDate = document.getElementById("date-select-dropdown").value;
        const filterIndicator = document.getElementById("indicator-select-dropdown").value;
        const filterSymbol = document.getElementById("symbol-select-dropdown").value;

        var box = document.querySelector('.' + filterSymbol);


       // console.log(filterDate);
      //  console.log(filterIndicator);
       // console.log(filterSymbol);
        box.click();

    });

    filterBlockIndicators.addEventListener("change", async function (e) {
        filterItemsByIndicator(filterBlockIndicators.value);
    });

    filterBlockDates.addEventListener("change", async function (e) {

        filterBlockIndicators.value = "ALL";
        renderBlocks(filterBlockDates.value);

    });

  if (getDataMode() === "futures") {
      filterBlockIndicators.style.display = "none";
  } else {
     filterBlockIndicators.style.display = "block";
    dataByDate.forEach((item) => {
      var filter = item.name.split(".")[0];

        filter = filter.replace(/GDAX/g, "CoinBase");


      if (!filterArrIndicators.includes(filter))
        filterArrIndicators.push(filter);
    });
    }

  filterArrDates
    .sort((a, b) => (a < b ? 1 : -1))
      .forEach((filterArrItem) => {

      let displayDate = new Date(filterArrItem.replace("-", "/").replace("-", "/") + "  12:00:00");


      let thisDay = displayDate.getDay();
      let thisDate = displayDate.getDate();

      if (getDataMode() === "futures") {
        switch (thisDay) {
          case 1:
          case 2:
          case 3:
          case 4:
            displayDate.setDate(thisDate + 1);
            break;
          case 5:
            displayDate.setDate(thisDate + 3);
          default:
            break;
        }
      } else {
        switch (thisDay) {
          default:
            displayDate.setDate(thisDate + 1);
            break;
        }
        }

        
        const displayDateString = `${displayDate.getFullYear()}-${displayDate.getFullMonth()}-${displayDate.getFullDate()}`;
        
      let filterItem = document.createElement("option");
      //filterItem.className = "";
      filterItem.innerText = displayDateString;
      filterItem.setAttribute("value", filterArrItem);
      //filterItem.dataset.filterPull = "date";

      if (filterArrItem === filterArrDates[0]) {
          filterBlockDates.value = filterArrItem;
        renderBlocks(filterArrItem, dataByDate);
      }

      filterBlockDates.append(filterItem);
    });

  filterArrIndicators.forEach((filterArrItem) => {
      let filterItem = document.createElement("option");
    //filterItem.className = "";
    filterItem.innerText = filterArrItem;
    filterItem.setAttribute("value", filterArrItem);
    //filterItem.dataset.filterPull = "indicator";

      if (filterArrItem === filterArrIndicators[0]) {
          filterBlockIndicators.value = filterArrItem;
    }

    filterBlockIndicators.append(filterItem);
  });

    renderBlocks(filterBlockDates.value);
        

}
