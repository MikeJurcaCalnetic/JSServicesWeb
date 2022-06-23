import renderBlockInformationOnClick from "/static/assets-grid-jss/events.js";
import renderPriceMap from "/static/assets-grid-jss/renderPriceMap.js";
export default function renderSymbolFilter(blockItemObj, arr) {
  const filterBlockSymbols = document.querySelector(".filter-symbol ul");
  const filterItem = document.createElement("li");
  const splitedFilterName = blockItemObj["name"].split(".");
  const filterName = splitedFilterName[splitedFilterName.length - 2];

  filterItem.className = "filter-item";
  filterItem.innerText = filterName;
  filterItem.setAttribute("value", filterName);
  filterItem.dataset.filterPull = "symbol";
  filterItem.dataset.fullName = blockItemObj["name"];
  filterItem.dataset.date = blockItemObj["date"];
  filterItem.addEventListener("click", function (e) {
    const item = e.currentTarget;
    const filters = document.querySelectorAll(".filter");
    filters.forEach((item) => item.classList.remove("show"));
    item.parentElement.parentElement.classList.toggle("show");

    if (
      currentFilterActiveItem(item) !== item.getAttribute("value") &&
      item.dataset.filterPull == "date" &&
      !item.classList.contains("active")
    ) {
      renderBlocks(item.getAttribute("value"), arr);
      filters.forEach((item) => item.classList.remove("show"));
    }
    if (
      currentFilterActiveItem(item) !== item.getAttribute("value") &&
      item.dataset.filterPull == "symbol" &&
      !item.classList.contains("active")
    ) {
      renderBlockInformationOnClick(e, arr);
      renderPriceMap(e, arr);
      document
        .querySelectorAll(".page-jss .section-boxes .boxes-wrap .item")
        .forEach((boxItem) => {
          boxItem.classList.remove("active_cell");
          if (item.dataset.fullName === boxItem.dataset.fullName)
            boxItem.classList.add("active_cell");
        });
      filters.forEach((item) => item.classList.remove("show"));
      item.parentNode.childNodes.forEach((nodeItem) =>
        nodeItem.classList.remove("active")
      );
    }
    item.classList.add("active");

    function currentFilterActiveItem(item) {
      const currentFilteItems = item.parentElement.childNodes;

      currentFilteItems.forEach((filterItem) => {
        if (filterItem.classList.contains("active"))
          return filterItem.getAttribute("value");
      });
    }
  });
  filterBlockSymbols.append(filterItem);
}
export function setSymbolFilter(e) {
  const thisBlock = e.currentTarget;
  const thisSplitedBlockName = thisBlock
    .getAttribute("data-full-name")
    .split(".");

  const thisBlockName = thisSplitedBlockName[thisSplitedBlockName.length - 2];

  const symbolFilterItems = document.querySelectorAll(
    ".filter-symbol .filter-item"
  );

  symbolFilterItems.forEach((item) => {
    if (item.classList.contains("active")) item.classList.remove("active");
  });

  symbolFilterItems.forEach((item) => {
    if (item.getAttribute("value") == thisBlockName)
      item.classList.add("active");
  });
}
