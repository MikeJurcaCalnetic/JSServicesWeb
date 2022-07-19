import {
    setDataMode,
    setData,
    getData,
    getDataMode,
    getRefreshUrl,
    setRefreshUrl,
} from "./status.js";


export default function setUpDropDownListeners() {

	const filterBlockDates = document.getElementById("date-select-dropdown");
	const filterExchanges = document.getElementById("indicator-select-dropdown");
	const filterBlockSymbols = document.getElementById("symbol-select-dropdown");


    filterBlockSymbols.addEventListener("change", async function (e) {
        console.log("filterBlockSymbols");
        const boxWrapItems = document.querySelectorAll(".boxes-wrap .item");
        const filterSymbol = document.getElementById("symbol-select-dropdown").value;

        boxWrapItems.forEach((item) => {
            if (item.dataset.fullName === filterSymbol) {
                item.click();
            }
        });

    });

    filterExchanges.addEventListener("change", async function (e) {


        var group = filterExchanges.options[filterExchanges.selectedIndex].parentElement;

        if (group.getAttribute("label") === "EXCHANGE") {
            filterItemsByIndicator(filterExchanges.value);
        }
        else if (group.getAttribute("label") === "R=") {
            filterItemsByRVal(filterExchanges.value);
        }
        //populateSymbolFilter();

    });

    filterBlockDates.addEventListener("change", async function (e) {

        filterExchanges.value = "ALL";
        const filterBlockDates = document.getElementById("date-select-dropdown");
        renderBlocksForDate(filterBlockDates.value);
        //populateSymbolFilter();

    });

}

export function populateAllDropDowns() {
    setDropDownData();
    populateDatesDropDown();
    populateExchangesDropDown();
    populateSymbolDropDown();

}

function setDropDownData() {

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
}

export function populateSymbolDropDown() {
    const filterBlockSymbols = document.getElementById("symbol-select-dropdown");

    let newOption = document.createElement("option");

    newOption.innerText = "ALL";
    newOption.setAttribute("value", "ALL");

    filterBlockSymbols.append(newOption.cloneNode(true));
}

export function populateExchangesDropDown() {
    const filterExchanges = document.getElementById("indicator-select-dropdown");

    let newOption = document.createElement("option");

    newOption.innerText = "ALL";
    newOption.setAttribute("value", "ALL");

    filterExchanges.append(newOption.cloneNode(true));

    var arrExchanges = JSON.parse(localStorage.getItem("arrFilterExchange"));

    let filterItemGroup = document.createElement("optgroup");
    filterItemGroup.setAttribute("label", "EXCHANGE");


    for (var i = 0; i < arrExchanges.length; i++) {

        newOption.innerText = arrExchanges[i];
        newOption.setAttribute("value", arrExchanges[i]);

        filterItemGroup.append(newOption.cloneNode(true));
    }

    filterExchanges.append(filterItemGroup);
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