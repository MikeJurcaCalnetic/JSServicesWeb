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


	//console.log(JSON.stringify(arr.data));

	localStorage.setItem("arr", JSON.stringify(arr));
	localStorage.setItem("arrData", JSON.stringify(arr.data));

//    var arrData = JSON.parse(localStorage.getItem("arrData"));
	//    var arrData = JSON.parse(localStorage.getItem("arrFilterDates"));
}