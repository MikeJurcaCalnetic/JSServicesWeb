import {
	setDataMode,
	setData,
	getData,
	getDataMode,
	getRefreshUrl,
	setRefreshUrl,
} from "./status.js";


//https://6tlrxvd6d9.execute-api.ap-south-1.amazonaws.com/live/getlist?getdata=binance&date=2022-06-27&datetype=D
//https://6tlrxvd6d9.execute-api.ap-south-1.amazonaws.com/live/getlist?getdata=binance&date=2022-06-27&datetype=W
//https://6tlrxvd6d9.execute-api.ap-south-1.amazonaws.com/live/getlist?getdata=binance&date=2022-06-26&datetype=M

export default async function InitalDataFetch() {
	//console.log('InitalDataFetch');
    await FetchDateFiltersForTable("binance");
    await FetchData("binance", JSON.parse(sessionStorage.getItem("arrDates")).d[0], "D");
    sessionStorage.setItem("dateType", "D");
    sessionStorage.setItem("futuresSelect", "binance");
    sessionStorage.setItem("dateSelect", JSON.parse(sessionStorage.getItem("arrDates")).d[0]);
}

export async function FetchDateFiltersForTable(tableName) {
    document.querySelector(".page-jss-loading").style.display = "block";
    console.log('FetchDateFiltersForTable ' + tableName);

    const url =
        "https://6tlrxvd6d9.execute-api.ap-south-1.amazonaws.com/live/getlist?getfilters=";

    let arrfilters = await fetch(url + tableName)
        .then((r) => r.text())
        .then((r) => JSON.parse(r.replace(/GDAX/g, "COINBASE")))
        .then((r) => r);

    arrfilters.filters.d.sort(function (a, b) {
        return new Date(b) - new Date(a);
    });

    arrfilters.filters.w.sort(function (a, b) {
        return new Date(b) - new Date(a);
    });

    arrfilters.filters.m.sort(function (a, b) {
        return new Date(b) - new Date(a);
    });

    console.log(arrfilters);
    sessionStorage.setItem("arrDates", JSON.stringify(arrfilters.filters));
    document.querySelector(".page-jss-loading").style.display = "none";
}



export async function FetchData(tableName, date, dateType) {
    console.log('FetchDataForTableForDate table: ' + tableName + ", Date: " + date + ", dateType: " + dateType);
    document.querySelector(".page-jss-loading").style.display = "block";

	setDataMode(tableName);

	const url =
        "https://6tlrxvd6d9.execute-api.ap-south-1.amazonaws.com/live/getlist?getdata=" + tableName+"&date=" + date + "&datetype=" + dateType;

	let arr = await fetch(url)
		.then((r) => r.text())
		.then((r) => JSON.parse(r.replace(/GDAX/g, "COINBASE")))
		.then((r) => r);


    setDateStamps();
    console.log(arr);

	sessionStorage.setItem("arr", JSON.stringify(arr));
	sessionStorage.setItem("arrData", JSON.stringify(arr.data));

    document.querySelector(".page-jss-loading").style.display = "none";
}

function setDateStamps() {
    var utcDate = new Date();
    var utcDateStr = utcDate.toLocaleString("en-US", {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    })
    var userDate = new Date(utcDateStr + " UTC");
    var locale = window.navigator.userLanguage || window.navigator.language;
    var clientDateTimeStr = userDate.toLocaleString(locale, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });
    //console.log(utcDateStr);
    //console.log(clientDateTimeStr);

    document.getElementById("utc-date-stamp").innerHTML = utcDateStr;
    document.getElementById("local-date-stamp").innerHTML = clientDateTimeStr;
}