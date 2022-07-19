import SymbolDescription from "/static/assets-grid-jss/symbolDescription.js";
import {
    setDataMode,
    setData,
    getData,
    getDataMode,
    getRefreshUrl,
    setRefreshUrl,
} from "./status.js";


export default function setUpPlaybookDropDownListeners() {

	const filterBlockDates = document.getElementById("date-select-dropdown");
	const filterExchanges = document.getElementById("indicator-select-dropdown");
	const filterBlockSymbols = document.getElementById("symbol-select-dropdown");
    const futuresSelect = document.getElementById("futures-select-dropdown");

    filterBlockSymbols.addEventListener("change", async function (e) {
        console.log("symbol-select-dropdown = " + document.getElementById("symbol-select-dropdown").value);
        //const boxWrapItems = document.querySelectorAll(".boxes-wrap .item");
        //const filterSymbol = document.getElementById("symbol-select-dropdown").value;

        //boxWrapItems.forEach((item) => {
        //    if (item.dataset.fullName === filterSymbol) {
        //        item.click();
        //    }
        //});

    });

    filterExchanges.addEventListener("change", async function (e) {
        console.log("indicator-select-dropdown = " + document.getElementById("indicator-select-dropdown").value);

        //var group = filterExchanges.options[filterExchanges.selectedIndex].parentElement;

        //if (group.getAttribute("label") === "EXCHANGE") {
        //    filterItemsByIndicator(filterExchanges.value);
        //}
        //else if (group.getAttribute("label") === "R=") {
        //    filterItemsByRVal(filterExchanges.value);
        //}
        //populateSymbolFilter();

    });

    filterBlockDates.addEventListener("change", async function (e) {
        console.log("date-select-dropdown = " + document.getElementById("date-select-dropdown").value);
        //filterExchanges.value = "ALL";
        //const filterBlockDates = document.getElementById("date-select-dropdown");
        //renderBlocksForDate(filterBlockDates.value);
        //populateSymbolFilter();

    });

    futuresSelect.addEventListener("change", async function (e) {
        console.log("futures-select-dropdown = " + document.getElementById("futures-select-dropdown").value);


    });
    

}

export function populateAllPlayBookDropDowns() {
    console.log("populateAllPlayBookDropDowns");

    setPlayBookDropDownData();
    populateDatesDropDown();
    populateExchangesDropDown();
    populateSymbolDropDown();

}

function setPlayBookDropDownData() {

    var arr = JSON.parse(localStorage.getItem("arr"));

    //** Date Dropdown **//
    var dateFilter = arr.filters.d;

    dateFilter.sort(function (a, b) {
        return new Date(b) - new Date(a);
    });

    localStorage.setItem("arrFilterDates", JSON.stringify(dateFilter));

    //** Exchange Dropdown **//

    var arrData = JSON.parse(localStorage.getItem("arrData"));
    var exchangeFilter = [];

    if (getDataMode() === "futures") {
        arrData.forEach((item) => {
            var filter = "";

            filter = item.MARKET;

            if (!exchangeFilter.includes(filter))
                exchangeFilter.push(filter);
        });
    }
    else {
        arrData.forEach((item) => {
            var filter = "";

            filter = item.name.split(".")[0];
            filter = filter.replace(/GDAX/g, "CoinBase");

            if (!exchangeFilter.includes(filter))
                exchangeFilter.push(filter);
        });
    }

    localStorage.setItem("arrFilterExchange", JSON.stringify(exchangeFilter));

    //** Symbol Dropdown **//

    var symbolFilter = [];

    for (var i = 0; i < arr.data.length; i++) {

        symbolFilter.push(arr.data[i].name);
    }

    symbolFilter.sort();

    localStorage.setItem("arrFilterSymbol", JSON.stringify(symbolFilter));

}

export function populateSymbolDropDown() {
    const filterBlockSymbols = document.getElementById("symbol-select-dropdown");

    var arrSymbols = JSON.parse(localStorage.getItem("arrFilterSymbol"));

    let newOption = document.createElement("option");

    for (var i = 0; i < arrSymbols.length; i++) {

        
        newOption.className = "filter-item";

        var splitedFilterName = arrSymbols[i].split(".");

        var filterName = "";

        if (getDataMode() === "futures") {
            filterName = splitedFilterName[0];
            newOption.innerText = filterName + " - " + SymbolDescription(filterName);
        }
        else {
            filterName = splitedFilterName[1];
            newOption.innerText = filterName + " - " + splitedFilterName[0];
        }

        newOption.setAttribute("value", arrSymbols[i]);

        filterBlockSymbols.append(newOption.cloneNode(true));
    }

}

export function populateExchangesDropDown() {
    const filterExchanges = document.getElementById("indicator-select-dropdown");

    let newOption = document.createElement("option");

    newOption.innerText = "ALL";
    newOption.setAttribute("value", "ALL");

    let AllOption = newOption.cloneNode(true);
    AllOption.setAttribute("style", "font-weight: 900;");
    filterExchanges.append(AllOption);

    var arrExchanges = JSON.parse(localStorage.getItem("arrFilterExchange"));

    let filterItemGroup = document.createElement("optgroup");
    filterItemGroup.setAttribute("label", "EXCHANGE");

    for (var i = 0; i < arrExchanges.length; i++) {

        newOption.innerText = arrExchanges[i];
        newOption.setAttribute("value", arrExchanges[i]);

        filterItemGroup.append(newOption.cloneNode(true));
    }

    const rValArry = ["R>UT1", "R=UT1", "R=CRX+", "R=UP", "R=DIR", "R=DP", "R=CRX-", "R=DT1", "R<DT1"];

    let RfilterItemGroup = document.createElement("optgroup");
    RfilterItemGroup.setAttribute("label", "R=");

    rValArry.forEach((filterArrItem) => {
        newOption.innerText = filterArrItem;
        newOption.setAttribute("value", filterArrItem.replace("R", ""));

        RfilterItemGroup.append(newOption.cloneNode(true));
    });

    filterExchanges.append(filterItemGroup);
    filterExchanges.append(RfilterItemGroup);
}

export function populateDatesDropDown() {
    const filterBlockDates = document.getElementById("date-select-dropdown");

    let newOption = document.createElement("option");

    var arrDates = JSON.parse(localStorage.getItem("arrFilterDates"));

    for (var i = 0; i < arrDates.length; i++) {
        newOption.innerText = arrDates[i];
        newOption.setAttribute("value", arrDates[i]);
        filterBlockDates.append(newOption.cloneNode(true));
    }
}