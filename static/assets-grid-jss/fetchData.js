import {
	setDataMode,
	setData,
	getData,
	getDataMode,
	getRefreshUrl,
	setRefreshUrl,
} from "./status.js";

export default async function InitalDataFetch() {
	console.log('InitalDataFetch');
	await FetchDataForTable("binance");
}


async function FetchDataForTable(tableName) {
	console.log('FetchDataForTable ' + tableName);

	setDataMode(tableName);

	const url =
		"https://6tlrxvd6d9.execute-api.ap-south-1.amazonaws.com/live/getlist?getfilters=";

	let arr = await fetch(url + tableName)
		.then((r) => r.text())
		.then((r) => JSON.parse(r.replace(/GDAX/g, "COINBASE")))
		.then((r) => r);


    setDateStamps();

	//console.log(JSON.stringify(arr.data));

	sessionStorage.setItem("arr", JSON.stringify(arr));
	sessionStorage.setItem("arrData", JSON.stringify(arr.data));

//    var arrData = JSON.parse(sessionStorage.getItem("arrData"));
	//    var arrData = JSON.parse(sessionStorage.getItem("arrFilterDates"));
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