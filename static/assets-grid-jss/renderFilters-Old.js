import renderBlocks from "/static/assets-grid-jss/renderBlocks.js";
import { filterItemsByIndicator, filterItemsByRVal } from "/static/assets-grid-jss/events.js";
import { getDataMode } from "/static/assets-grid-jss/status.js";
import renderBlockInformationOnClick from "/static/assets-grid-jss/events.js";
import SymbolDescription from "/static/assets-grid-jss/symbolDescription.js";

export default function renderFilters(filterArrDates, dataByDate) {
    console.log("FetchData");
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


        const boxWrapItems = document.querySelectorAll(".boxes-wrap .item");
        const filterSymbol = document.getElementById("symbol-select-dropdown").value;

        boxWrapItems.forEach((item) => {
            if (item.dataset.fullName === filterSymbol)
            {
                item.click();
            }
        });


    });

    filterBlockIndicators.addEventListener("change", async function (e) {


        var group = filterBlockIndicators.options[filterBlockIndicators.selectedIndex].parentElement;
        
        if (group.getAttribute("label") === "EXCHANGE") {
            filterItemsByIndicator(filterBlockIndicators.value);
        }
        else if (group.getAttribute("label") === "R=") {
            filterItemsByRVal(filterBlockIndicators.value);
        }
        //renderSymbolFilter();

    });

    filterBlockDates.addEventListener("change", async function (e) {

        filterBlockIndicators.value = "ALL";
        renderBlocks(filterBlockDates.value);

    });


   


    if (getDataMode() === "futures") {
        dataByDate.forEach((item) => {
            var filter = "";

            filter = item.MARKET;

            if (!filterArrIndicators.includes(filter))
                filterArrIndicators.push(filter);
        });
    }
    else {
        dataByDate.forEach((item) => {
            var filter = "";

            filter = item.name.split(".")[0];
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



    let filterItemGroup = document.createElement("optgroup");
    filterItemGroup.setAttribute("label", "EXCHANGE");

  filterArrIndicators.forEach((filterArrItem) => {
      let filterItem = document.createElement("option");
    //filterItem.className = "";
    filterItem.innerText = filterArrItem;
    filterItem.setAttribute("value", filterArrItem);
    //filterItem.dataset.filterPull = "indicator";

      if (filterArrItem === filterArrIndicators[0]) {
          filterBlockIndicators.value = filterArrItem;
    }

      filterItemGroup.append(filterItem);
  });

    const rValArry = ["R>UT1", "R=UT1", "R=CRX+", "R=UP", "R=DIR", "R=DP", "R=CRX-", "R=DT1", "R<DT1"];

    let RfilterItemGroup = document.createElement("optgroup");
    RfilterItemGroup.setAttribute("label", "R=");

    rValArry.forEach((filterArrItem) => {
        let filterItem = document.createElement("option");

        filterItem.innerText = filterArrItem;
        filterItem.setAttribute("value", filterArrItem.replace("R",""));

        RfilterItemGroup.append(filterItem);
    });

    

    filterBlockIndicators.append(filterItemGroup);
    filterBlockIndicators.append(RfilterItemGroup);

    renderBlocks(filterBlockDates.value);
        

}
export function renderSymbolFilter() {

    const blocks = document.querySelectorAll(".itemWrap .item");
    const filterBlockSymbols = document.getElementById("symbol-select-dropdown");
    filterBlockSymbols.innerHTML = "";

    for (var i = 0; i < blocks.length; i++) {

        if (blocks[i].parentElement.style.display != "none") {

            var filterItem = document.createElement("option");
            filterItem.className = "filter-item";

            var splitedFilterName = blocks[i].dataset["fullName"].split(".");
          
            var filterName = "";

            if (getDataMode() === "futures") {
                filterName = splitedFilterName[0];
                filterItem.innerText = filterName + " - " + SymbolDescription(filterName);
            }
            else {
                filterName = splitedFilterName[1];
                filterItem.innerText = filterName + " - " + splitedFilterName[0];
            }

            filterItem.setAttribute("value", blocks[i].dataset["fullName"]);

            filterBlockSymbols.append(filterItem);

        }
    }

    if (filterBlockSymbols.firstChild) {
        filterBlockSymbols.value = filterBlockSymbols.firstChild.value;
    }
}
export function setSymbolFilter(e) {
    const filterBlockSymbols = document.getElementById("symbol-select-dropdown");
    filterBlockSymbols.value = e;
}
