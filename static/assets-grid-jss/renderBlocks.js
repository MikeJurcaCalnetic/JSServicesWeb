import getColorBlockTrendTypeObj from "/static/assets-grid-jss/trendType.js";
import {renderSymbolFilter, setSymbolFilter } from "/static/assets-grid-jss/renderFilters.js";
import renderBlockInformationOnClick from "/static/assets-grid-jss/events.js";
import renderPriceMap, { setClosestSymbolDateWeek, setClosestSymbolDateMonth, } from "/static/assets-grid-jss/renderPriceMap.js";
import { getColorBlockRValue, getColorBlockRValueRegime, } from "/static/assets-grid-jss/colorBlockValues.js";
import { getDataMode, getData } from "/static/assets-grid-jss/status.js";
import getMsbTextColor from "/static/assets-grid-jss/getMsbTextColor.js";
import { getDataByDate } from "/static/assets-grid-jss/dataFetch.js";

export default async function renderBlocks(blockGroup, dataByDate = false) {
  let arr;
 
  if (dataByDate != false) {
    arr = dataByDate;
  } else {
    arr = await getDataByDate(blockGroup);
    }

    localStorage.setItem("arr", JSON.stringify(arr));

  if (await arr) {
    let blockGroupArr = arr
      .filter((item) => {
        const endsOn = item.name.slice(item.name.length - 2, item.name.length);

        return item["date"] === blockGroup && endsOn === ".D";
      })
      .sort(function (a, b) {
        const titleA = a.name.toLowerCase(),
          titleB = b.name.toLowerCase();
        if (titleA < titleB) return -1;
        if (titleA > titleB) return 1;
        return 0;
      });

    const boxWrap = document.querySelector(".boxes-wrap");
    let thisDateObj = new Date(blockGroup);
    const filterBlockSymbols = document.getElementById("symbol-select-dropdown");;
      const filterBlockIndicators = document.getElementById("indicator-select-dropdown");
  

    while (boxWrap.firstChild) {
      boxWrap.removeChild(boxWrap.lastChild);
    }

    blockGroupArr.forEach((blockItem) => {
      let trendtypeData = getColorBlockTrendTypeObj(blockItem);
      let itemWrap = document.createElement("div");
      let itemEffects = document.createElement("div");
      let item = document.createElement("div");

      const textColor = getMsbTextColor(blockItem.posState);

      itemWrap.className = "itemWrap";
      itemEffects.className = "itemAffects";
      item.className = "item";
      item.setAttribute("data-full-name", blockItem["name"]);
      item.setAttribute("data-date", blockItem["date"]);
      item.setAttribute("data-rvalue", getColorBlockRValue(blockItem));
      item.setAttribute("data-mcv", blockItem["mcv"]);
      item.setAttribute("data-mcc", blockItem["mcc"]);
      item.setAttribute("data-mac", blockItem["mac"]);
      item.setAttribute("data-dmi", blockItem["dmi"]);
      item.setAttribute("data-adx", blockItem["adx"]);
      item.setAttribute("data-rsi", blockItem["rsi"]);
      item.setAttribute("data-sst", blockItem["sst"]);
      item.setAttribute("data-dc", blockItem["dc"]);
      item.setAttribute("data-text-color", textColor);
      if (trendtypeData.bgcolor) {
        item.style.backgroundColor = trendtypeData.bgcolor;
        item.setAttribute("data-mcs-color", trendtypeData.bgcolor);
      } else {
        item.style.backgroundColor = "#fff";
      }
      item.setAttribute("data-mcs-color", "#070606");
        //console.log(blockItem["name"]);
      let trendtype = document.createElement("div");
        trendtype.classList.add(
            'trendtype',
            'box-small-text'
        );
      trendtype.innerText = trendtypeData.typeDectription;
      trendtype.style.color = textColor;
      let symbol = document.createElement("div");
      symbol.className = "symbol";
      symbol.style.color = textColor;
      //if (getDataMode() === "crypto") symbol.style.fontSize = "12px";
        const splitedName = blockItem["name"].split(".");

        item.classList.add(blockItem["name"].replace(".", "_").replace(".", "_"));
      var symbolObject = getSymbol(splitedName[1]);

        /* (splitedName.length == 2) == futures and anything else is crypto */
        symbol.innerHTML =
            splitedName.length == 2
            ? splitedName[0].length >= 6 ? `<span class="box-bigger-text">${splitedName[0]}</span>` : `<span class="box-big-text">${splitedName[0]}</span>`
                : `<span class="box-small-text">${splitedName[0]}</span><span class="box-big-text">${symbolObject.coinSymbol}</span><span class="box-small-text">${symbolObject.currency}</span>`;

      let marketState = document.createElement("div");
        marketState.classList.add(
            'marketState',
            'box-small-text'
        );
      marketState.innerText = blockItem["posState"];
      marketState.style.color = textColor;

      let rValue = document.createElement("div");
        rValue.classList.add(
            'rValue',
            'box-small-text'
        );
      rValue.innerText = getColorBlockRValueRegime(blockItem);
      rValue.style.color = textColor;
      item.append(trendtype, symbol, marketState, rValue);
      itemWrap.append(item, itemEffects);
      boxWrap.append(itemWrap);
      itemWrap.addEventListener("click", function (e) {
        e.currentTarget.children[0].click();
      });
      item.addEventListener("click", async (e) => {
        document.querySelectorAll(".filter").forEach((item) => {
          item.classList.remove("show");
        });
        document
          .querySelectorAll(".page-jss .section-boxes .boxes-wrap .item ")
          .forEach((item) => {
            item.classList.remove("active_cell");
          });
          e.currentTarget.classList.add("active_cell");
        await renderBlockInformationOnClick(e);
        await renderPriceMap(e);
          setTradeHeadersValues(e, arr);
          
        setSymbolFilter(e.target.classList[1]);
      });

      if (blockGroupArr[0] == blockItem) item.click();
    });
    }
    renderSymbolFilter();
}
export function setTradeHeadersValues(e, arr) {
  const blockData = e.target.dataset;
  const timePeriod = document.querySelectorAll(
    ".page-jss .section-trades .trade-wrap_headers .trade-wrap_headers-period"
  );

  timePeriod.forEach((item) => {
    const { fullName, date } = blockData;

    if (item.classList.contains("trade-wrap_headers-day")) {
      item.classList.add("active");
      item.dataset.fullName = fullName;
      item.dataset.date = date;
      item.dataset.currentDate = date;
    }
    if (item.classList.contains("trade-wrap_headers-week")) {
      const weekFullName =
        fullName
          .split(".")
          .slice(0, fullName.split(".").length - 1)
          .join(".") + ".W";

      item.classList.remove("active");
      item.dataset.fullName = weekFullName;
      item.dataset.date = setClosestSymbolDateWeek(date, weekFullName, arr);
      item.dataset.currentDate = date;
    }
    if (item.classList.contains("trade-wrap_headers-month")) {
      const monthFullName =
        fullName
          .split(".")
          .slice(0, fullName.split(".").length - 1)
          .join(".") + ".M";
      item.classList.remove("active");
      item.dataset.fullName = monthFullName;
      item.dataset.date = setClosestSymbolDateMonth(date, monthFullName, arr);
      item.dataset.currentDate = date;
    }
  });

  timePeriod.forEach((item) => {
    item.addEventListener("click", function (e) {
      if (e.currentTarget.classList.contains("active")) return;
      const currentDate = getData();
      timePeriod.forEach((item) => item.classList.remove("active"));
      item.classList.add("active");

     // renderBlockInformationOnClick(e, currentDate);
      renderPriceMap(e, currentDate);
    });
  });
}
