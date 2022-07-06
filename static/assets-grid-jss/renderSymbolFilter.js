//import renderBlockInformationOnClick from "/static/assets-grid-jss/events.js";
//import renderPriceMap from "/static/assets-grid-jss/renderPriceMap.js";
//import { getDataMode } from "/static/assets-grid-jss/status.js";
//import SymbolDescription from "/static/assets-grid-jss/symbolDescription.js";

//export default function renderSymbolFilter(blockItemObj, arr) {
//  const filterBlockSymbols = document.getElementById("symbol-select-dropdown");
//  const filterItem = document.createElement("option");
//  const splitedFilterName = blockItemObj["name"].split(".");
//  const filterName = splitedFilterName[splitedFilterName.length - 2];

//  filterItem.className = "filter-item";

//    if (getDataMode() === "futures") {
//        filterItem.innerText = filterName + " - " + SymbolDescription(filterName);
//    }
//    else {
//        filterItem.innerText = filterName;
//    }

//    filterItem.setAttribute("value", blockItemObj["name"].replace(".", "_").replace(".", "_"));

//    filterBlockSymbols.append(filterItem);

//}
//export function setSymbolFilter(e) {
//    const filterBlockSymbols = document.getElementById("symbol-select-dropdown");
//    filterBlockSymbols.value = e;
//  //const thisBlock = e.currentTarget;
//  //const thisSplitedBlockName = thisBlock
//  //  .getAttribute("data-full-name")
//  //  .split(".");

//  //const thisBlockName = thisSplitedBlockName[thisSplitedBlockName.length - 2];

//  //const symbolFilterItems = document.querySelectorAll(
//  //  ".filter-symbol .filter-item"
//  //);

//  //symbolFilterItems.forEach((item) => {
//  //  if (item.classList.contains("active")) item.classList.remove("active");
//  //});

//  //symbolFilterItems.forEach((item) => {
//  //  if (item.getAttribute("value") == thisBlockName)
//  //    item.classList.add("active");
//  //});
//}
