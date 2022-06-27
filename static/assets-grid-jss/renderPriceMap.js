import { getColorBlockRRisk } from "/static/assets-grid-jss/colorBlockValues.js";
import { getDataMode } from "/static/assets-grid-jss/status.js";

const tradesWrap = document.querySelector(".trades-wrap .trades-wrap_values");
const tradesWrapR = document.querySelector(".trades-wrap .trades-wrap_rValue");
const tradesWrapRisk = document.querySelector(
  ".trades-wrap .trades-wrap_risks"
);

export default function renderPriceMap(e, arr) {
  const thisBlock = e.currentTarget;
  const priceMapArr = [
    "ut4",
    "ul08",
    "ul07",
    "ut3",
    "ul05",
    "ul04",
    "ut2",
    "ul02",
    "ut1",
    "crxplus",
    "up",
    "crplus",
    "dir",
    "crminus",
    "dp",
    "crxminus",
    "dt1",
    "dl02",
    "dt2",
    "dl04",
    "dl05",
    "dt3",
    "dl07",
    "dl08",
    "dt4",
  ];

  const [trendtype, symbol, marketState, rValue] = thisBlock.childNodes;
  const date = thisBlock.dataset.date;
  const currentPriceMap = arr.filter(
    (item) => item.date === date && item.name === thisBlock.dataset.fullName
  );
  tradesWrap.innerHTML = "";
  tradesWrapR.innerHTML = "";
  tradesWrapRisk.style.gridTemplateRows = getColorBlockRRisk(
    currentPriceMap[0]
  );

  priceMapArr.forEach((item) => {
      currentPriceMap[0][item];
      console.log(item);
    renderPriceMapBlock(
      currentPriceMap[0][item],
      currentPriceMap[0]["r"],
        currentPriceMap[0]["name"],
      item
    );
  });

    function getCssClass(item) {
        var css = "";
        switch (item) {
            case "up":
                css = "UP";
                break;
            case "dir":
                css = "DIR";
                break;
            case "dp":
                css = "DP";
                break;
        }
        return css;
    }

    function renderPriceMapBlock(text, rValue, symbol, itemWord) {
  
    let item = document.createElement("div");
    let itemR = document.createElement("div");
    let symbolFullName = symbol.split(".").slice(0, -1).join(" ");


        var cssCLass = getCssClass(itemWord);

        if (cssCLass != "") {
            item.classList.add(cssCLass);
            itemR.classList.add(cssCLass);
        }

        item.classList.add("item");
        itemR.classList.add("itemR");

    if ((text.includes(".") && +text == +rValue) || text == rValue) {
      let blockR = document.createElement("div");
      let block = document.createElement("div");
      blockR.innerText = "R";
      blockR.classList.add("r-block");
      block.innerText = text;
      itemR.append(blockR);
        item.append(block);
        item.classList.add("r-block");
        itemR.classList.add("r-block");
      tradesWrapR.append(itemR);
      tradesWrap.append(item);

      document.querySelector(
        ".section-date p"
      ).innerText = `${symbolFullName} R = ${text}`;

      return;
    }
    item.innerText = text;
    tradesWrapR.append(itemR);
      tradesWrap.append(item);
     
  }
}
export function setClosestSymbolDateWeek(currentDate, fullName, arr) {
  const thisDate = new Date(currentDate + " ");

  const fullNameDates = arr
    .filter((item) => item.name == fullName && item.date <= currentDate)
    .map((item) => item.date);

  if (
    (thisDate.getDay() === 5 && getDataMode() === "futures") ||
    (thisDate.getDay() === 0 && getDataMode() !== "futures")
  ) {
    return fullNameDates.sort((a, b) => (a > b ? -1 : 1))[0];
  }
  return fullNameDates.sort((a, b) => (a > b ? -1 : 1))[0];
}

export function setClosestSymbolDateMonth(currentDate, fullName, arr) {
  const thisDate = new Date(currentDate + " ");
  const nextPriceDay = new Date(currentDate + " ");
  let numberToSetDate = thisDate.getDate();
  let fullNameDates;
  if (thisDate.getDay() === 5 && getDataMode() === "futures") {
    numberToSetDate += 3;
  } else {
    numberToSetDate += 1;
  }
  nextPriceDay.setDate(numberToSetDate);

  if (getDataMode() === "futures") {
    fullNameDates = arr
      .filter((item) => item.name == fullName)
      .map((item) => item.date);
    if (thisDate.getMonth() === nextPriceDay.getMonth())
      return fullNameDates.sort((a, b) => (a > b ? -1 : 1))[1];
    return fullNameDates.sort((a, b) => (a > b ? -1 : 1))[0];
  }
  if (getDataMode() !== "futures") {
    fullNameDates = arr
      .filter(
        (item) =>
          item.name == fullName &&
          new Date(item.date + " ").getMonth() < nextPriceDay.getMonth()
      )
      .map((item) => item.date);
    if (thisDate.getMonth() === nextPriceDay.getMonth())
      return fullNameDates.sort((a, b) => (a > b ? -1 : 1))[0];
    return fullNameDates.sort((a, b) => (a > b ? -1 : 1))[0];
  }
}
