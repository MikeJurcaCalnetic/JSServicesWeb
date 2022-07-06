import getColorBlockTrendTypeObj from "/static/assets-grid-jss/trendType.js";
import {
  getColorBlockRValue,
  getColorMarketState,
} from "/static/assets-grid-jss/colorBlockValues.js";
import { getDataMode } from "/static/assets-grid-jss/status.js";
//import { renderGraph } from "/static/assets-grid-jss/charts.js";
import SymbolDescription from "/static/assets-grid-jss/symbolDescription.js";
import Structure from "/static/assets-grid-jss/structure.js";
import getMarketAttributesByCode from "/static/assets-grid-jss/marketAtributes.js";
import Strategy from "/static/assets-grid-jss/strategy.js";
import timePhases from "/static/assets-grid-jss/timePhases.js";
import { getDataByDate } from "/static/assets-grid-jss/dataFetch.js";

export default async function renderBlockInformationOnClick(e) {


   // var arr = await getDataByDate(document.getElementById("date-select-dropdown").value);
    var arr = JSON.parse(localStorage.getItem("arr"));

  const blockData = e.target.dataset;



  const curentObjectDateArr = arr.filter(
    (item) => item.name == blockData.fullName
  );

  const currentObject = curentObjectDateArr.filter(
    (item) => item.date == blockData.date
  );


  if (blockData.currentDate)
    currentObject[0].currentDate = blockData.currentDate;

  const trendtypeData = getColorBlockTrendTypeObj(currentObject[0]);
  const thisRValueNumber = +getColorBlockRValue(currentObject[0])
    .split("")
    .filter((item) => +item);
  const trendNumber =
    trendtypeData.code !== "error"
      ? trendtypeData.code + thisRValueNumber
      : "error";
  const symbolValue = currentObject[0].symbol
    ? "- " + currentObject[0].symbol
    : "";
  const lastValueIndex = curentObjectDateArr.indexOf(blockData.date) + 1;
  const lastValue = curentObjectDateArr[lastValueIndex].close;

  const thisPhases = timePhases();
  const currentDateFixed = new Date(currentObject[0].date + " ");
  const contactDateText = currentObject[0].symbol
    ? ` - ${currentObject[0].symbol}`
    : "";

  // document.querySelector('.section-date p').innerText = getColorBlockRValue(currentObject[0])

  // const lastValue

  //state tab
  const informationBlock = document.querySelector(
    "#tab1 .area2 div.trend-item"
  );
  const informationBlockTrend = document.querySelector(
    "#tab1 .area2 div.trend-item_trend"
  );
  const informationBlockMark = document.querySelector(
    "#tab1 .area2 div.trend-item_mark"
  );
  const informationBlockType = document.querySelector(
    "#tab1 .area2 div.trend-item_type"
  );
  const infromationTrendNumberBlock = document.querySelector(
    "#tab1 .area2 div.trend-number"
  );
  const symbolInfo = document.querySelector("#tab1 .area2 div.symbol-info");
    const marketAttributesGraph1 = document.querySelector("#tab1 .area3 .graph");
    const marketAttributesGraph2 = document.querySelector("#tab1 .area5 .graph");
  const marketExpectationsGraph = document.querySelector("#tab1 .area4 .graph");
  const tab1Header = document.querySelector("#tab1 .area1 h3");
  const tab1Overview = document.querySelector("#tab1 .area1 p");

  //structure tab
  const marketStructureBiasGraph = document.querySelector(
    "#tab2 .area4 .graph"
  );
  const structureAPMD = document.querySelector(
    "#tab2 .metric-apmd"
    );
    const structureHalfAPMD = document.querySelector(
        "#tab2 .metric-halfapmd"
    );
    const structureAPMDTicks = document.querySelector(
        "#tab2 .metric-apmdt"
    );
  const structureVAR = document.querySelector(
    "#tab2 .metric-var"
  );
  const structureAD = document.querySelector(
    "#tab2 .metric-ad"
  );
  const structureMSD = document.querySelector(
    "#tab2 .metric-msd"
  );
  const marketStateItems = document.querySelectorAll(
    "#tab2 .area2 .market-state .market-state_item-value"
  );
  const tab2Header = document.querySelector("#tab2 .area1 h2");
  const tab2Overview = document.querySelector("#tab2 .area1 p");
  const informationBlockTab2 = document.querySelector(
    "#tab2 .area5 div.trend-item"
  );
  const informationBlockTrendTab2 = document.querySelector(
    "#tab2 .area5 div.trend-item_trend"
  );
  const informationBlockMarkTab2 = document.querySelector(
    "#tab2 .area5 div.trend-item_mark"
  );
  const informationBlockTypeTab2 = document.querySelector(
    "#tab2 .area5 div.trend-item_type"
  );
  const infromationTrendNumberBlockTab2 = document.querySelector(
    "#tab2 .area5 div.trend-number"
  );
  const symbolInfoTab2 = document.querySelector("#tab2 .area5 div.symbol-info");
  //strategy tab
  const tab3Header = document.querySelector("#tab3 .area1 h2");
  const tab3Overview = document.querySelector("#tab3 .area1 p");
  const optimalStrategyGraph = document.querySelector("#tab3 .area2 .graph");
  const hedgeStrategyGraph = document.querySelector("#tab3 .area3 .graph");
  const informationBlockTab3 = document.querySelector(
    "#tab3 .area4 div.trend-item"
  );
  const informationBlockTrendTab3 = document.querySelector(
    "#tab3 .area4 div.trend-item_trend"
  );
  const informationBlockMarkTab3 = document.querySelector(
    "#tab3 .area4 div.trend-item_mark"
  );
  const informationBlockTypeTab3 = document.querySelector(
    "#tab3 .area4 div.trend-item_type"
  );
  const infromationTrendNumberBlockTab3 = document.querySelector(
    "#tab3 .area4 div.trend-number"
  );
  const symbolInfoTab3 = document.querySelector("#tab3 .area4 div.symbol-info");
  // discovery tab
  //const phaseDailyRst = document.querySelector(
  //  "#tab4 .area2 #dailyrst .time-phase__value"
  //);
  //const phaseDaily24 = document.querySelector(
  //  "#tab4 .area2 #daily24h .time-phase__value"
  //);
  //const phaseWeekly = document.querySelector(
  //  "#tab4 .area2 #weekly .time-phase__value"
  //);
  //const phaseMonthly = document.querySelector(
  //  "#tab4 .area2 #monthly .time-phase__value"
  //);

  //state tab setdata
  [
    informationBlockTrend,
    informationBlockTrendTab2,
    informationBlockTrendTab3,
  ].forEach((item) => (item.innerText = trendtypeData.typeDectription));
  [
    informationBlockMark,
    informationBlockMarkTab2,
    informationBlockMarkTab3,
  ].forEach((item) => (item.innerText = currentObject[0].posState));
  [
    informationBlockType,
    informationBlockTypeTab2,
    informationBlockTypeTab3,
  ].forEach((item) => (item.innerText = trendtypeData.mcsDescription));
  [informationBlock, informationBlockTab2, informationBlockTab3].forEach(
    (item) =>{
      if(e.target.getAttribute('data-text-color')){
        item.style.color = e.target.getAttribute('data-text-color');
      }
      (item.style.backgroundColor = trendtypeData.bgcolor)}
  );

  [symbolInfo, symbolInfoTab2, symbolInfoTab3].forEach((item) => {
    if (getDataMode() === "futures") {
        const itemName = currentObject[0].name.split(".")[0];


        if (itemName.indexOf(SymbolDescription(itemName)) > -1 && contactDateText.indexOf(itemName) > -1) {
            item.innerHTML = `<span class="symbolInfoTitleSymbolFutures"> ${SymbolDescription(itemName)}</span>`;
        }
        else {
            item.innerHTML = `<span class="symbolInfoTitleSmallFutures">${itemName} -</span><span class="symbolInfoTitleSymbolFutures"> ${SymbolDescription(itemName)}</span> <span class="symbolInfoTitleSmallFutures">${contactDateText}</span>`;
        }


        

    } else {

        var symbolObject = getSymbol(currentObject[0].name.split(".")[1]);

        
        const itemName =
       
            // SymbolDescription(itemName)
            symbolObject.coinSymbol + " " + symbolObject.currency;
        item.innerHTML = `<span class="symbolInfoTitleSmall">${currentObject[0].name.split(".")[0]}</span><span class="symbolInfoTitleSymbol">${symbolObject.coinSymbol}</span> <span class="symbolInfoTitleSmall">${symbolObject.currency}</span>`;
    }
  });

  // infromationTrendNumberBlock.innerText = `#${currentObject[0].posState} - ${trendtypeData.mcsDescription} - ${trendtypeData.code}`;
  // infromationTrendNumberBlockTab2.innerText = `#${currentObject[0].posState} - ${trendtypeData.mcsDescription} - ${trendtypeData.code}`;
  // infromationTrendNumberBlockTab3.innerText = `#${currentObject[0].posState} - ${trendtypeData.mcsDescription} - ${trendtypeData.code}`;

  // infromationTrendNumberBlock.style.backgroundColor = trendtypeData.bgcolor;

    marketAttributesGraph1.innerHTML = "";
    marketAttributesGraph2.innerHTML = "";

    marketExpectationsGraph.style.backgroundImage = `url('/static/assets/imgs/playbook/MSB_${trendtypeData.code}.png')`;
    
  marketAttributesGraph1.append(getMarketAttributesByCode(trendtypeData.code, 1));
    marketAttributesGraph2.append(getMarketAttributesByCode(trendtypeData.code, 2));

  // marketAttributesGraph.style.backgroundImage = `url('../imgs/playbook/MSB_${trendtypeData.code}_MA.png')`;
  // tab1Header.innerText = `MARKET STATE:#${currentObject[0].msb} - ${trendtypeData.mcsDescription}`;



    tab1Overview.innerHTML = BreakupTextBlock(Strategy(trendtypeData.code).overview);


  //structure tab set data
    structureAPMD.innerText = currentObject[0].apmd;
    structureHalfAPMD.innerText = currentObject[0].apmd / 2;
  structureAPMDTicks.innerText = currentObject[0].apmdticks;
  structureVAR.innerText = currentObject[0].var;
  structureAD.innerText = currentObject[0].ad;
  structureMSD.innerText = currentObject[0].msd;

  marketStateItems.forEach((item) => {
    if (item.dataset.value == "mcs") {
      item.innerText = currentObject[0].posState || "";
      item.style.backgroundColor = getColorBlockTrendTypeObj(
        currentObject[0]
      ).bgcolor;
      return;
    }
    item.innerText = currentObject[0][item.dataset.value] || "";
    item.style.backgroundColor =
      getColorMarketState(
        item.dataset.value,
        currentObject[0][item.dataset.value]
      ) || "";
  });

    var splitHeaderTab2 = Structure(trendNumber).theme.split(" - ");


    var textOriginal = splitHeaderTab2[1];

    splitHeaderTab2[1] = splitHeaderTab2[1].replace(/NEGATIVE/g, '<span class="red-pastel">' + textOriginal + '</span>');
    splitHeaderTab2[1] = splitHeaderTab2[1].replace(/POSITIVE/g, '<span class="blue">' + textOriginal + '</span>');
    splitHeaderTab2[1] = splitHeaderTab2[1].replace(/NO BIAS/g, '<span class="tan">' + textOriginal + '</span>');  


    splitHeaderTab2[2] = '<span class="green-text">' + splitHeaderTab2[2] + '</span>';

    tab2Header.innerHTML= splitHeaderTab2.join(" - ");
    //console.log(tab2Header.innerHTML);

  //tab2Header.innerHTML = Structure(trendNumber).theme;
    tab2Overview.innerHTML = BreakupTextBlock(Structure(trendNumber).overview);

  marketStructureBiasGraph.style.backgroundImage = `url('/static/assets/imgs/playbook/MSB_${trendNumber}.png')`;
  //strategy tab set data
    tab3Header.innerHTML = Strategy(trendNumber).theme.replace(/HEDGE/g, '<br />HEDGE');


  tab3Overview.innerText = Strategy(trendNumber).overview.replace(/\<span class=\"red\"\>SELL\<\/span\>/g,'SELL')
        .replace(/\<span class=\"blue\"\>BUY\<\/span\>/g, 'BUY');

    tab3Overview.innerHTML = BreakupTextBlock(tab3Overview.innerText);


  optimalStrategyGraph.style.backgroundImage = `url('/static/assets/imgs/playbook/MSB_${trendNumber}_O.png')`;
  hedgeStrategyGraph.style.backgroundImage = `url('/static/assets/imgs/playbook/MSB_${trendNumber}_H.png')`;
  //renderGraph(
  //  arr
  //    .filter((item) => item.name == blockData.fullName)
  //    .map((item) => {
  //      return { date: item.date, apmd: item.apmd, volume: item.volume };
  //    })
  //);
  // discoveryGraphCalculations(currentObject, lastValue, arr);

  //discovery tab
 // phaseDailyRst.style.backgroundColor = `rgb(${thisPhases.dailyrst.bg})`;
 // phaseDaily24.style.backgroundColor = `rgb(${thisPhases.daily24.bg})`;
  //phaseWeekly.style.backgroundColor = `rgb(${thisPhases.weekly.bg})`;
  //phaseMonthly.style.backgroundColor = `rgb(${thisPhases.monthly.bg})`;

 // phaseDailyRst.innerText = `${thisPhases.dailyrst.value}`;
 // phaseDaily24.innerText = `${thisPhases.daily24.value}`;
  //phaseWeekly.innerText = `${thisPhases.weekly.value}`;
  //phaseMonthly.innerText = `${thisPhases.monthly.value}`;

    function BreakupTextBlock(originalText) {
        var everyPeriod = 2;
        var overviewArr = originalText.split(". ");

        for (var i = 0; i < overviewArr.length; i++) {
            if (i + 1 != overviewArr.length) {
                overviewArr[i] = overviewArr[i] + ". ";
            }
            if ((i + 1) % everyPeriod == 0) {
                overviewArr[i] = overviewArr[i] + "<br/><br/>";
            }
        }

        return overviewArr.join("");

    }

}
export function filterItemsByRVal(filterValue) {
    const boxRValItems = document.querySelectorAll(".boxes-wrap .item .rValue");
    boxRValItems.forEach((item) => (item.parentNode.parentNode.style.display = "block"));

    if (filterValue == "ALL") {
        return;
    } else {
        boxRValItems.forEach((item) => {
            if (!item.innerText.includes(filterValue))
                item.parentNode.parentNode.style.display = "none";
        });
    }
}

export function filterItemsByIndicator(filterValue) {
  const boxWrapItems = document.querySelectorAll(".boxes-wrap .item");
  boxWrapItems.forEach((item) => (item.parentNode.style.display = "block"));

  if (filterValue == "ALL") {
    return;
  } else {
    boxWrapItems.forEach((item) => {
      if (!item.dataset.fullName.includes(filterValue))
        item.parentNode.style.display = "none";
    });
  }
  // boxWrapItems.forEach((item) => item.classList.remove("hiden-item"));
  // if (filterValue == "MCS") {
  //   boxWrapItems.forEach((item) => {
  //     item.style.backgroundColor = item.dataset.mcsColor;
  //   });
  //   return;

  // }
  // if (filterValue == "MCV") {
  //   boxWrapItems.forEach((item) => {
  //     getColorMarketState("mcv", item.dataset.mcv)
  //       ? (item.style.backgroundColor = getColorMarketState(
  //           "mcv",
  //           item.dataset.mcv
  //         ))
  //       : (item.style.backgroundColor = "rgb(186, 163, 146)");
  //   });
  //   return;
  // }

  // if (filterValue == "MCC") {
  //   boxWrapItems.forEach((item) => {
  //     getColorMarketState("mcc", item.dataset.mcc)
  //       ? (item.style.backgroundColor = getColorMarketState(
  //           "mcc",
  //           item.dataset.mcc
  //         ))
  //       : (item.style.backgroundColor = "rgb(186, 163, 146)");
  //   });
  //   return;
  // }

  // if (filterValue == "MAC") {
  //   boxWrapItems.forEach((item) => {
  //     getColorMarketState("mac", item.dataset.mac)
  //       ? (item.style.backgroundColor = getColorMarketState(
  //           "mac",
  //           item.dataset.mac
  //         ))
  //       : (item.style.backgroundColor = "rgb(186, 163, 146)");
  //   });
  //   return;
  // }
  // if (filterValue == "DMI") {
  //   boxWrapItems.forEach((item) => {
  //     getColorMarketState("dmi", item.dataset.dmi)
  //       ? (item.style.backgroundColor = getColorMarketState(
  //           "dmi",
  //           item.dataset.dmi
  //         ))
  //       : (item.style.backgroundColor = "rgb(186, 163, 146)");
  //   });
  //   return;
  // }
  // if (filterValue == "ADX") {
  //   boxWrapItems.forEach((item) => {
  //     getColorMarketState("adx", item.dataset.adx)
  //       ? (item.style.backgroundColor = getColorMarketState(
  //           "adx",
  //           item.dataset.adx
  //         ))
  //       : (item.style.backgroundColor = "rgb(186, 163, 146)");
  //   });
  //   return;
  // }
  // if (filterValue == "RSI") {
  //   boxWrapItems.forEach((item) => {
  //     getColorMarketState("rsi", item.dataset.rsi)
  //       ? (item.style.backgroundColor = getColorMarketState(
  //           "rsi",
  //           item.dataset.rsi
  //         ))
  //       : (item.style.backgroundColor = "rgb(186, 163, 146)");
  //   });
  //   return;
  // }
  // if (filterValue == "SST") {
  //   boxWrapItems.forEach((item) => {
  //     getColorMarketState("sst", item.dataset.sst)
  //       ? (item.style.backgroundColor = getColorMarketState(
  //           "sst",
  //           item.dataset.sst
  //         ))
  //       : (item.style.backgroundColor = "rgb(186, 163, 146)");
  //   });
  //   return;
  // }
  // if (filterValue == "DC") {
  //   boxWrapItems.forEach((item) => {
  //     getColorMarketState("dc", item.dataset.dc)
  //       ? (item.style.backgroundColor = getColorMarketState(
  //           "dc",
  //           item.dataset.dc
  //         ))
  //       : (item.style.backgroundColor = "rgb(186, 163, 146)");
  //   });
  //   return;
  // }
}
