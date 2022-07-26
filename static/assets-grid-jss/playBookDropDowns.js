import SymbolDescription from "/static/assets-grid-jss/symbolDescription.js";
import { getColorBlockRValue, getColorBlockRValueRegime, } from "/static/assets-grid-jss/colorBlockValues.js";
import renderBlocks from "/static/assets-grid-jss/renderBlocks.js";
import { FetchData, FetchDateFiltersForTable } from "/static/assets-grid-jss/fetchData.js";
import {
    setDataMode,
    setData,
    getData,
    getDataMode,
    getRefreshUrl,
    setRefreshUrl,
} from "./status.js";


export default function setUpPlaybookDropDownListeners() {
    //console.log("setUpPlaybookDropDownListeners");

	const filterBlockDates = document.getElementById("date-select-dropdown");
	const filterExchanges = document.getElementById("indicator-select-dropdown");
	const filterBlockSymbols = document.getElementById("symbol-select-dropdown");
    const futuresSelect = document.getElementById("futures-select-dropdown");

    filterBlockSymbols.addEventListener("change", async function (e) {
        //console.log("symbol-select-dropdown = " + document.getElementById("symbol-select-dropdown").value);

        const boxWrapItems = document.querySelectorAll(".boxes-wrap .item");
        const filterSymbol = document.getElementById("symbol-select-dropdown").value;

        sessionStorage.setItem("symbolSelect", filterSymbol);

        boxWrapItems.forEach((item) => {
            if (item.dataset.fullName === filterSymbol) {
                item.click();
            }
        });

    });

    filterExchanges.addEventListener("change", async function (e) {
        //console.log("indicator-select-dropdown = " + document.getElementById("indicator-select-dropdown").value);
        let filterExchangeDropdown = document.getElementById("indicator-select-dropdown");

        let value = filterExchangeDropdown.value;
        sessionStorage.setItem("exchangeSelect", value);

        var group = filterExchangeDropdown.options[filterExchangeDropdown.selectedIndex].parentElement;

        if (group.getAttribute("label") === "EXCHANGE") {
            filterSymbolsListByExchange(value);

        }
        else if (group.getAttribute("label") === "R=") {
            filterSymbolsListByRVal(value);
        }

        if (value === "ALL") {
            setSymbolFilterCollection();
        }

        populateSymbolDropDown(); 
        filterDataList();
        renderBlocks();

    });

    filterBlockDates.addEventListener("change", async function (e) {
        //console.log("date-select-dropdown = " + document.getElementById("date-select-dropdown").value);

        const value = document.getElementById("date-select-dropdown").value;
        sessionStorage.setItem("dateSelect", value);

        await FetchData(sessionStorage.getItem("futuresSelect"), value, sessionStorage.getItem("dateType"));

        setExchangeFilterCollection();
        setSymbolFilterCollection();

        filterDataList();

        populateExchangesDropDown();
        populateSymbolDropDown();
        renderBlocks();

    });

    futuresSelect.addEventListener("change", async function (e) {
        //console.log("futures-select-dropdown = " + document.getElementById("futures-select-dropdown").value);

        const value = document.getElementById("futures-select-dropdown").value;
        sessionStorage.setItem("futuresSelect", value);

        await FetchDateFiltersForTable(value);
        await FetchData(value, JSON.parse(sessionStorage.getItem("arrDates")).d[0], "D");

        sessionStorage.setItem("dateType", "D");
        sessionStorage.setItem("dateSelect", JSON.parse(sessionStorage.getItem("arrDates")).d[0]);

        populateAllPlayBookDropDowns();
  
        renderBlocks();

    });
    

}

export function populateAllPlayBookDropDowns() {
    console.log("populateAllPlayBookDropDowns");

    setDateFilterCollection();
    setExchangeFilterCollection();
    setSymbolFilterCollection();

    filterDataList();

    populateDatesDropDown();
    populateExchangesDropDown();
    populateSymbolDropDown();

}



function setDateFilterCollection() {
    var arrDates = JSON.parse(sessionStorage.getItem("arrDates"));

    var dateFilter = [];


    switch (sessionStorage.getItem("dateType")) {
        case "D":
            dateFilter = arrDates.d;
            break;
        case "W":
            dateFilter = arrDates.w;
            break;
        case "M":
            dateFilter = arrDates.m;
            break;
    }


    dateFilter.sort(function (a, b) {
        return new Date(b) - new Date(a);
    });

    sessionStorage.setItem("arrFilterDates", JSON.stringify(dateFilter));
}

function setExchangeFilterCollection() {
    var arrData = JSON.parse(sessionStorage.getItem("arrData"));
    var exchangeFilter = [];
    var rValueFilter = [];

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

            if (!rValueFilter.includes(getColorBlockRValueRegime(item)))
                rValueFilter.push(getColorBlockRValueRegime(item));

        });
    }

    sessionStorage.setItem("arrFilterExchange", JSON.stringify(exchangeFilter));
    sessionStorage.setItem("arrFilterRValue", JSON.stringify(rValueFilter));
}

function setSymbolFilterCollection() {
    var arr = JSON.parse(sessionStorage.getItem("arr"));

    var symbolFilter = [];

    for (var i = 0; i < arr.data.length; i++) {

        symbolFilter.push(arr.data[i].name);
    }

    symbolFilter.sort();

    sessionStorage.setItem("arrFilterSymbol", JSON.stringify(symbolFilter));
}

function filterSymbolsListByExchange(value) {

    var arr = JSON.parse(sessionStorage.getItem("arr"));

    var arrSymbols = [];

    let filteredData = [];
    var splitedValue = value.split(".");

    for (var i = 0; i < arr.data.length; i++) {

        if (arr.data[i].name.includes(splitedValue[0])) {
            filteredData.push(arr.data[i].name);
        }
    }
    filteredData.sort();
    sessionStorage.setItem("arrFilterSymbol", JSON.stringify(filteredData));
}

function filterSymbolsListByRVal(value) {
    var arr = JSON.parse(sessionStorage.getItem("arr"));

    let filteredData = [];

    for (var i = 0; i < arr.data.length; i++) {
        if (value.includes(getColorBlockRValueRegime(arr.data[i]))) {
            filteredData.push(arr.data[i].name);
        }
    }
    filteredData.sort();
    sessionStorage.setItem("arrFilterSymbol", JSON.stringify(filteredData));
}

function filterDataList() {

    var arrSymbols = JSON.parse(sessionStorage.getItem("arrFilterSymbol"));
    var arrData = JSON.parse(sessionStorage.getItem("arr")).data;
    let filteredData = [];


    for (var i = 0; i < arrData.length; i++) {

        if (arrSymbols.includes(arrData[i].name)) {
            filteredData.push(arrData[i]);
        }
    }

    sessionStorage.setItem("arrFilteredData", JSON.stringify(filteredData));
}

export function populateSymbolDropDown() {
    const filterBlockSymbols = document.getElementById("symbol-select-dropdown");
    filterBlockSymbols.innerHTML = '';

    var arrSymbols = JSON.parse(sessionStorage.getItem("arrFilterSymbol"));

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
    filterExchanges.innerHTML = '';

    let newOption = document.createElement("option");

    newOption.innerText = "ALL";
    newOption.setAttribute("value", "ALL");

    let AllOption = newOption.cloneNode(true);
    AllOption.setAttribute("style", "font-weight: 900;");
    filterExchanges.append(AllOption);

    var arrExchanges = JSON.parse(sessionStorage.getItem("arrFilterExchange"));

    let filterItemGroup = document.createElement("optgroup");
    filterItemGroup.setAttribute("label", "EXCHANGE");

    for (var i = 0; i < arrExchanges.length; i++) {

        newOption.innerText = arrExchanges[i];
        newOption.setAttribute("value", arrExchanges[i]);

        filterItemGroup.append(newOption.cloneNode(true));
    }

    //const rValArry = ["R>UT1", "R=UT1", "R=CRX+", "R=UP", "R=DIR", "R=DP", "R=CRX-", "R=DT1", "R<DT1"];
    var rValArry = JSON.parse(sessionStorage.getItem("arrFilterRValue"));

    let RfilterItemGroup = document.createElement("optgroup");
    RfilterItemGroup.setAttribute("label", "R=");

    rValArry.forEach((filterArrItem) => {
        newOption.innerText = filterArrItem;
        newOption.setAttribute("value", filterArrItem);

        RfilterItemGroup.append(newOption.cloneNode(true));
    });

    filterExchanges.append(filterItemGroup);
    filterExchanges.append(RfilterItemGroup);
}

export function populateDatesDropDown() {
    const filterBlockDates = document.getElementById("date-select-dropdown");
    filterBlockDates.innerHTML = '';

    let newOption = document.createElement("option");

    var arrDates = JSON.parse(sessionStorage.getItem("arrFilterDates"));

    for (var i = 0; i < arrDates.length; i++) {
        newOption.innerText = arrDates[i];
        newOption.setAttribute("value", arrDates[i]);
        filterBlockDates.append(newOption.cloneNode(true));
    }
}

export function setCurrentSymbolDropDown(e) {
    //console.log("setCurrentSymbolDropDown = " + e);
    const filterBlockSymbols = document.getElementById("symbol-select-dropdown");
    filterBlockSymbols.value = e;
}