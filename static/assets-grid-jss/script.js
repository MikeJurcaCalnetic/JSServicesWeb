import dateUpdates from "/static/assets-grid-jss/dataUpdates.js";
import dataFetch from "/static/assets-grid-jss/dataFetch.js";
import { getRefreshUrl } from "/static/assets-grid-jss/status.js";
import renderFilters from "/static/assets-grid-jss/renderFilters.js";
dateUpdates();

document.querySelectorAll(".section-info .header .tab a").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.target.getAttribute("href");

    document.querySelectorAll(".section-info .tab").forEach((node) => {
      node.classList.remove("active-tab");
    });

    document
      .querySelectorAll(".section-info .info-wrap .item")
      .forEach((node) => {
        node.classList.remove("active");
      });

    e.target.parentElement.classList.add("active-tab");
    document.querySelector(`#${id}`).classList.add("active");
  });
});
function colorize() {
  return (ctx) => {
    var v = ctx.parsed.x;
    var c = v > 0 ? "blue" : "red";
    return c;
  };
}

function discoveryGraphCalculations(currentObj, last, arr) {
  const currentObject = currentObj[0];
  const currentDaySymbol = currentObject.name.split(".")[0] + ".D";
  const currentDay = null || currentObj[0].currentDate;
  const currentDateObject = arr.filter(
    (item) => item.name == currentDaySymbol
  )[0];

  const varValue = +currentObject.var;
  const adValue = +currentObject.ad;
  const lastValue = +last;

  class ObjectZones {
    constructor() {}
    set values(itemObj) {
      const adValue = +itemObj.ad,
        varValue = +itemObj.var,
        rValue = +itemObj.r,
        cPlus = +itemObj.cplus,
        ut4 = +itemObj.pricemap2ut4,
        ul08 = +itemObj.pricemap3ut32,
        ul07 = +itemObj.pricemap4ut31,
        ut3 = +itemObj.pricemap5ut3,
        ul05 = +itemObj.pricemap6ut22,
        ul04 = +itemObj.pricemap7ut21,
        ut2 = +itemObj.pricemap8ut2,
        ul02 = +itemObj.pricemap9ut11,
        ut1 = +itemObj.pricemap10ut1,
        crxPlux = +itemObj.pricemap11crx,
        up = +itemObj.pricemap12up,
        crPlus = +itemObj.pricemap13cr,
        dir = +itemObj.pricemap14dir,
        crMinus = +itemObj.pricemap15cr,
        dp = +itemObj.pricemap16dp,
        crxMinus = +itemObj.pricemap17crx,
        dt1 = +itemObj.pricemap18dt1,
        dl02 = +itemObj.pricemap19dt11,
        dt2 = +itemObj.pricemap20dt2,
        dl04 = +itemObj.pricemap21dt21,
        dl05 = +itemObj.pricemap22dt22,
        dt3 = +itemObj.pricemap23dt3,
        dl07 = +itemObj.pricemap24dt31,
        dl08 = +itemObj.pricemap25dt32,
        dt4 = +itemObj.pricemap26dt4,
        cMinus = +itemObj.cminus;

      this.RR2 = rValue + adValue;
      this.RR1 = rValue + varValue;
      this.RR = rValue;
      this.RR01 = rValue - varValue;
      this.RR02 = rValue - adValue;
      this.XXX = null;
      this.AA2 = cPlus + adValue;
      this.AA1 = cPlus + varValue;
      this.AA = cPlus;
      this.AA01 = cPlus - varValue;
      this.AA02 = cPlus - adValue;
      this.NO = null;
      this.N2 = ut4 + adValue;
      this.N1 = ut4 + varValue;
      this.N = ut4;
      this.N01 = ut4 - varValue;
      this.N02 = ut4 - adValue;
      this.MN = (ut4 + ul08) / 2;
      this.M1 = ul08 + varValue;
      this.M01 = ul08;
      this.M02 = ul08 - varValue;
      this.LM = (ul08 + ul07) / 2;
      this.K1 = ul07 + varValue;
      this.K01 = ul07;
      this.K02 = ul07 - varValue;
      this.JK = (ul07 + ut3) / 2;
      this.J2 = ut3 + adValue;
      this.H1 = ut3 + varValue;
      this.J = ut3;
      this.J01 = ut3 - varValue;
      this.J02 = ut3 - adValue;
      this.IJ = (ut3 + ul05) / 2;
      this.I1 = ul05 + varValue;
      this.I01 = ul05;
      this.I02 = ul05 - varValue;
      this.HI = (ul05 + ul04) / 2;
      this.HI1 = ul04 + varValue;
      this.H01 = ul04;
      this.H02 = ul04 - varValue;
      this.GH = (ul04 + ut2) / 2;
      this.G2 = ut2 + adValue;
      this.G1 = ut2 + varValue;
      this.G = ut2;
      this.G01 = ut2 - varValue;
      this.G02 = ut2 - adValue;
      this.FG = (ul02 + ut2) / 2;
      this.F1 = ul02 + varValue;
      this.F = ul02;
      this.F01 = ul02 - varValue;
      this.EF = (ul02 + ut1) / 2;
      this.E2 = ut1 + adValue;
      this.E1 = ut1 + varValue;
      this.E = ut1;
      this.E01 = ut1 - varValue;
      this.E02 = ut1 - adValue;
      this.DE = (ut1 + crxPlux) / 2;
      this.D1 = crxPlux + varValue;
      this.D = crxPlux;
      this.D01 = crxPlux - varValue;
      this.CD = (up + crxPlux) / 2;
      this.C2 = up + adValue;
      this.C1 = up + varValue;
      this.C = up;
      this.C01 = up - varValue;
      this.C02 = up - adValue;
      this.BC = (crPlus + up) / 2;
      this.B1 = crPlus + varValue;
      this.B = crPlus;
      this.B01 = crPlus - varValue;
      this.AB = (dir + crPlus) / 2;
      this.A2 = dir + adValue;
      this.A1 = dir + varValue;
      this.A = dir;
      this.A01 = dir - varValue;
      this.A02 = dir - adValue;
      this.AZ = (dir + crMinus) / 2;
      this.Z1 = crMinus + varValue;
      this.Z = crMinus;
      this.Z01 = crMinus - varValue;
      this.ZY = (dp + crMinus) / 2;
      this.Y2 = dp + adValue;
      this.Y1 = dp + varValue;
      this.Y = dp;
      this.Y01 = dp - varValue;
      this.Y02 = dp - adValue;
      this.YX = (dp + crxMinus) / 2;
      this.X1 = crxMinus + varValue;
      this.X = crxMinus;
      this.X01 = crxMinus - varValue;
      this.XW = (crxMinus + dt1) / 2;
      this.W2 = dt1 + adValue;
      this.W1 = dt1 + varValue;
      this.W = dt1;
      this.W01 = dt1 - varValue;
      this.W02 = dt1 - adValue;
      this.WV = (dt1 + dl02) / 2;
      this.V1 = dl02 + varValue;
      this.V = dl02;
      this.V01 = dl02 - varValue;
      this.VU = (dl02 + dt2) / 2;
      this.U2 = dt2 + adValue;
      this.U1 = dt2 + varValue;
      this.U = dt2;
      this.U01 = dt2 - varValue;
      this.U02 = dt2 - adValue;
      this.UT = (dt2 + dl04) / 2;
      this.T1 = dl04 + varValue;
      this.T = dl04;
      this.T01 = dl04 - varValue;
      this.TS = (dl04 + dl05) / 2;
      this.S1 = dl05 + varValue;
      this.S = dl05;
      this.S01 = dl05 - varValue;
      this.SR = (dl05 + dt3) / 2;
      this.R2 = dt3 + adValue;
      this.R1 = dt3 + varValue;
      this.R = dt3;
      this.R01 = dt3 - varValue;
      this.R02 = dt3 - adValue;
      this.RQ = (dt3 + dl07) / 2;
      this.Q1 = dl07 + varValue;
      this.Q = dl07;
      this.Q01 = dl07 - varValue;
      this.QP = (dl07 + dl08) / 2;
      this.P1 = dl08 + varValue;
      this.P = dl08;
      this.P01 = dl08 - varValue;
      this.PO = (dl08 + dt4) / 2;
      this.O2 = dt4 + adValue;
      this.O1 = dt4 + varValue;
      this.O = dt4;
      this.O01 = dt4 - varValue;
      this.O02 = dt4 - adValue;
      this.ON = null;
      this.ZZ2 = dt4 + adValue;
      this.ZZ1 = dt4 + varValue;
      this.ZZ = dt4;
      this.ZZ01 = dt4 - varValue;
      this.ZZ02 = dt4 - adValue;

    }
    get priceMapZoneValues() {
      return {
        ut3: this.J,
        ul05p: this.I1,
        ul05m: this.I02,
        ul04p: this.HI1,
        ul04m: this.H02,
        ut2pp: this.G2,
        ut2p: this.G1,
        ut2: this.G,
        ut2m: this.G01,
        ut2mm: this.G02,
        ul02p: this.F1,
        ul02: this.F,
        ul02m: this.F01,
        ut1pp: this.E2,
        ut1p: this.E1,
        ut1: this.E,
        ut1m: this.E01,
        ut1mm: this.E02,
        crxPlusp: this.DT1,
        crxPlus: this.D,
        crxPlusm: this.D01,
        uppp: this.C2,
        upp: this.C1,
        up: this.C,
        upm: this.C01,
        upmm: this.C02,
        crPlusp: this.B1,
        crPlus: this.B,
        crPlusm: this.B01,
        dirpp: this.A2,
        dirp: this.A1,
        dir: this.A,
        dirm: this.A01,
        dirmm: this.A02,
        crMinusp: this.Z1,
        crMinus: this.Z,
        crMinusm: this.Z01,
        dppp: this.Y2,
        dpp: this.Y1,
        dp: this.Y,
        dpm: this.Y01,
        dpmm: this.Y02,
        crxMinusp: this.X1,
        crxMinus: this.X,
        crxMinusm: this.X01,
        dt1pp: this.W2,
        dt1p: this.W1,
        dt1: this.W,
        dt1m: this.W01,
        dt1mm: this.W02,
        dl02p: this.V1,
        dl02: this.V,
        dl02m: this.V01,
        dt2pp: this.U2,
        dt2p: this.U1,
        dt2: this.U,
        dt2m: this.U01,
        dt2mm: this.U02,
        dl04p: this.T1,
        dl04: this.T,
        dl04m: this.T01,
        dl05p: this.S1,
        dl05: this.S,
        dl05m: this.S01,
        dt3pp: this.R2,
        dt3p: this.R1,
        dt3: this.R,
        dt3m: this.R01,
        dt3mm: this.R02,
      };
    }
    get priceMapValues() {
      return {
        ut3: this.J,
        ul05: this.I01,
        ul04: this.H01,
        ut2: this.G,
        ul02: this.F,
        ut1: this.E,
        crxPlus: this.D,
        up: this.C,
        crPlus: this.B,
        dir: this.A,
        crMinus: this.Z,
        dp: this.Y,
        crxMinus: this.X,
        dt1: this.W,
        dl02: this.V,
        dt2: this.U,
        dl04: this.T,
        dl05: this.S,
        dt3: this.R,
      };
    }
    get getTopBottom() {
      return {
        ut3Top: this.JK,
        ut3Bottom: this.IJ,
        ut2Top: this.GH,
        ut2Bottom: this.FG,
        ut1Top: this.EF,
        ut1Bottom: this.DE,
        upTop: this.CD,
        upBottom: this.BC,
        dirTop: this.AB,
        dirBottom: this.AZ,
        dpTop: this.ZY,
        dpBottom: this.YX,
        dt1Top: this.XW,
        dt1Bottom: this.WV,
        dt2Top: this.VU,
        dt2Bottom: this.UT,
        dt3Top: this.SR,
        dt3Bottom: this.RQ,
      };
    }
  }

  const currentItemZonesObject = new ObjectZones();
  const currentDayZonesObject = new ObjectZones();
  currentItemZonesObject.values = currentObject;
  currentDayZonesObject.values = currentDateObject;

  function graphDataObjectTest(
    zoneObj,
    varValue,
    adValue,
    lastValue,
    dayZoneMainObj
  ) {
    let graphValuesObj = {};
    let arrJJ = {};
    for (let priceMapItem in zoneObj.priceMapValues) {
      let priceItemCounts = setGraphValues(
        zoneObj.priceMapValues[priceMapItem],
        varValue,
        adValue,
        lastValue,
        dayZoneMainObj,
        dayZoneMainObj.getTopBottom[`${priceMapItem}Top`],
        dayZoneMainObj.getTopBottom[`${priceMapItem}Bottom`]
      );

      for (let item in priceItemCounts)
        graphValuesObj[item] == 0 || graphValuesObj[item] == null
          ? (graphValuesObj[item] = priceItemCounts[item])
          : 0;
      arrJJ[priceMapItem] = priceItemCounts;

    }

    function setGraphValues(
      zoneObj,
      varValue,
      adValue,
      lastValue,
      dayZoneObj,
      zoneObjTop,
      zoneObjBottom
    ) {
      return {
        ut3: countIfSeven(
          zoneObj,
          adValue,
          varValue,
          dayZoneObj.J,
          zoneObjTop,
          zoneObjBottom
        ),

        ul05p: countIfThree(zoneObj, varValue, dayZoneObj.I1),
        ul05m: countIfThree(zoneObj, varValue, dayZoneObj.I02),

        ul04p: countIfThree(zoneObj, varValue, dayZoneObj.HI1),
        ul04m: countIfThree(zoneObj, varValue, dayZoneObj.H02),

        ut2pp: countIfSeven(
          zoneObj,
          adValue,
          varValue,
          dayZoneObj.G2,
          zoneObjTop,
          zoneObjBottom
        ),
        ut2p: countIfSeven(
          zoneObj,
          adValue,
          varValue,
          dayZoneObj.G1,
          zoneObjTop,
          zoneObjBottom
        ),
        ut2: countIfSeven(
          zoneObj,
          adValue,
          varValue,
          dayZoneObj.G,
          zoneObjTop,
          zoneObjBottom
        ),
        ut2m: countIfSeven(
          zoneObj,
          adValue,
          varValue,
          dayZoneObj.G01,
          zoneObjTop,
          zoneObjBottom
        ),
        ut2mm: countIfSeven(
          zoneObj,
          adValue,
          varValue,
          dayZoneObj.G02,
          zoneObjTop,
          zoneObjBottom
        ),

        ul02p: countIfThree(zoneObj, varValue, dayZoneObj.F1),
        ul02: countIfThree(zoneObj, varValue, dayZoneObj.F),
        ul02m: countIfThree(zoneObj, varValue, dayZoneObj.F01),

        ut1pp: countIfSeven(
          zoneObj,
          adValue,
          varValue,
          dayZoneObj.E2,
          zoneObjTop,
          zoneObjBottom
        ),
        ut1p: countIfSeven(
          zoneObj,
          adValue,
          varValue,
          dayZoneObj.E1,
          zoneObjTop,
          zoneObjBottom
        ),
        ut1: countIfSeven(
          zoneObj,
          adValue,
          varValue,
          dayZoneObj.E,
          zoneObjTop,
          zoneObjBottom
        ),
        ut1m: countIfSeven(
          zoneObj,
          adValue,
          varValue,
          dayZoneObj.E01,
          zoneObjTop,
          zoneObjBottom
        ),
        ut1mm: countIfSeven(
          zoneObj,
          adValue,
          varValue,
          dayZoneObj.E02,
          zoneObjTop,
          zoneObjBottom
        ),

        crxPlusp: countIfThree(zoneObj, varValue.DT1, dayZoneObj),
        crxPlus: countIfThree(zoneObj, varValue.D, dayZoneObj),
        crxPlusm: countIfThree(zoneObj, varValue.D01, dayZoneObj),

        uppp: countIfSeven(
          zoneObj,
          adValue,
          varValue,
          dayZoneObj.C2,
          zoneObjTop,
          zoneObjBottom
        ),
        upp: countIfSeven(
          zoneObj,
          adValue,
          varValue,
          dayZoneObj.C1,
          zoneObjTop,
          zoneObjBottom
        ),
        up: countIfSeven(
          zoneObj,
          adValue,
          varValue,
          dayZoneObj.C,
          zoneObjTop,
          zoneObjBottom
        ),
        upm: countIfSeven(
          zoneObj,
          adValue,
          varValue,
          dayZoneObj.C01,
          zoneObjTop,
          zoneObjBottom
        ),
        upmm: countIfSeven(
          zoneObj,
          adValue,
          varValue,
          dayZoneObj.C02,
          zoneObjTop,
          zoneObjBottom
        ),

        crPlusp: countIfThree(zoneObj, varValue, dayZoneObj.B1),
        crPlus: countIfThree(zoneObj, varValue, dayZoneObj.B),
        crPlusm: countIfThree(zoneObj, varValue, dayZoneObj.B01),

        dirpp: countIfSeven(
          zoneObj,
          adValue,
          varValue,
          dayZoneObj.A2,
          zoneObjTop,
          zoneObjBottom
        ),
        dirp: countIfSeven(
          zoneObj,
          adValue,
          varValue,
          dayZoneObj.A1,
          zoneObjTop,
          zoneObjBottom
        ),
        dir: countIfSeven(
          zoneObj,
          adValue,
          varValue,
          dayZoneObj.A,
          zoneObjTop,
          zoneObjBottom
        ),
        dirm: countIfSeven(
          zoneObj,
          adValue,
          varValue,
          dayZoneObj.A01,
          zoneObjTop,
          zoneObjBottom
        ),
        dirmm: countIfSeven(
          zoneObj,
          adValue,
          varValue,
          dayZoneObj.A02,
          zoneObjTop,
          zoneObjBottom
        ),

        crMinusp: countIfThree(zoneObj, varValue, dayZoneObj.Z1),
        crMinus: countIfThree(zoneObj, varValue, dayZoneObj.Z),
        crMinusm: countIfThree(zoneObj, varValue, dayZoneObj.Z01),

        dppp: countIfSeven(
          zoneObj,
          adValue,
          varValue,
          dayZoneObj.Y2,
          zoneObjTop,
          zoneObjBottom
        ),
        dpp: countIfSeven(
          zoneObj,
          adValue,
          varValue,
          dayZoneObj.Y1,
          zoneObjTop,
          zoneObjBottom
        ),
        dp: countIfSeven(
          zoneObj,
          adValue,
          varValue,
          dayZoneObj.Y,
          zoneObjTop,
          zoneObjBottom
        ),
        dpm: countIfSeven(
          zoneObj,
          adValue,
          varValue,
          dayZoneObj.Y01,
          zoneObjTop,
          zoneObjBottom
        ),
        dpmm: countIfSeven(
          zoneObj,
          adValue,
          varValue,
          dayZoneObj.Y02,
          zoneObjTop,
          zoneObjBottom
        ),

        crxMinusp: countIfThree(zoneObj, varValue, dayZoneObj.X1),
        crxMinus: countIfThree(zoneObj, varValue, dayZoneObj.X),
        crxMinusm: countIfThree(zoneObj, varValue, dayZoneObj.X01),

        dt1pp: countIfSeven(
          zoneObj,
          adValue,
          varValue,
          dayZoneObj.W2,
          zoneObjTop,
          zoneObjBottom
        ),
        dt1p: countIfSeven(
          zoneObj,
          adValue,
          varValue,
          dayZoneObj.W1,
          zoneObjTop,
          zoneObjBottom
        ),
        dt1: countIfSeven(
          zoneObj,
          adValue,
          varValue,
          dayZoneObj.W,
          zoneObjTop,
          zoneObjBottom
        ),
        dt1m: countIfSeven(
          zoneObj,
          adValue,
          varValue,
          dayZoneObj.W01,
          zoneObjTop,
          zoneObjBottom
        ),
        dt1mm: countIfSeven(
          zoneObj,
          adValue,
          varValue,
          dayZoneObj.S02,
          zoneObjTop,
          zoneObjBottom
        ),

        dl02p: countIfThree(zoneObj, varValue, dayZoneObj.V1),
        dl02: countIfThree(zoneObj, varValue, dayZoneObj.V),
        dl02m: countIfThree(zoneObj, varValue, dayZoneObj.V01),

        dt2pp: countIfSeven(
          zoneObj,
          adValue,
          varValue,
          dayZoneObj.U2,
          zoneObjTop,
          zoneObjBottom
        ),
        dt2p: countIfSeven(
          zoneObj,
          adValue,
          varValue,
          dayZoneObj.U1,
          zoneObjTop,
          zoneObjBottom
        ),
        dt2: countIfSeven(
          zoneObj,
          adValue,
          varValue,
          dayZoneObj.U,
          zoneObjTop,
          zoneObjBottom
        ),
        dt2m: countIfSeven(
          zoneObj,
          adValue,
          varValue,
          dayZoneObj.U01,
          zoneObjTop,
          zoneObjBottom
        ),
        dt2mm: countIfSeven(
          zoneObj,
          adValue,
          varValue,
          dayZoneObj.U02,
          zoneObjTop,
          zoneObjBottom
        ),

        dl04p: countIfThree(zoneObj, varValue, dayZoneObj.T1),
        dl04m: countIfThree(zoneObj, varValue, dayZoneObj.T01),

        dl05p: countIfThree(zoneObj, varValue, dayZoneObj.S1),
        dl05m: countIfThree(zoneObj, varValue, dayZoneObj.S01),

        dt3pp: countIfSeven(
          zoneObj,
          adValue,
          varValue,
          dayZoneObj.R2,
          zoneObjTop,
          zoneObjBottom
        ),
        dt3p: countIfSeven(
          zoneObj,
          adValue,
          varValue,
          dayZoneObj.R1,
          zoneObjTop,
          zoneObjBottom
        ),
        dt3: countIfSeven(
          zoneObj,
          adValue,
          varValue,
          dayZoneObj.R,
          zoneObjTop,
          zoneObjBottom
        ),
        dt3m: countIfSeven(
          zoneObj,
          adValue,
          varValue,
          dayZoneObj.R01,
          zoneObjTop,
          zoneObjBottom
        ),
        dt3mm: countIfSeven(
          zoneObj,
          adValue,
          varValue,
          dayZoneObj.R02,
          zoneObjTop,
          zoneObjBottom
        ),
      };
    }
    function countIfThree(coreValue, varValue, item) {
      if (item <= coreValue && item > coreValue - varValue) return -0.5;
      if (item > coreValue && item <= coreValue + varValue) return 0.5;
      return 0;
    }
    function countIfSeven(coreValue, adValue, varValue, item, top, bottom) {
      if (item <= coreValue && item > coreValue - varValue) return -1;
      if (item <= coreValue - varValue && item > coreValue - adValue)
        return -0.75;
      if (item <= coreValue - adValue && item > bottom) return -0.25;
      if (item >= coreValue && item < coreValue + varValue) return 1;
      if (item >= coreValue + varValue && item < coreValue + adValue)
        return 0.75;
      if (item >= coreValue + adValue && item < top) return 0.25;
      return 0;
    }
    return graphValuesObj;
  }

  let dataArrText;
  const dataObjText = graphDataObjectTest(
    currentItemZonesObject,
    varValue,
    adValue,
    lastValue,
    currentDayZonesObject
  );
  discoveryChart.data.datasets[0].data = dataArrText;
  discoveryChart.update();
  discoveryChart.options.elements.bar.backgroundColor = colorize();
}

function setTradeHeadersValues(e, arr) {
  const blockData = e.currentTarget.dataset;
  const timePeriod = document.querySelectorAll(
    ".page-jss .section-trades .trade-wrap_headers .trade-wrap_headers-period"
  );

  timePeriod.forEach((item) => {
    if (item.classList.contains("trade-wrap_headers-day")) {
      item.classList.add("active");
      item.dataset.fullName = blockData.fullName;
      item.dataset.date = blockData.date;
      item.dataset.currentDate = blockData.date;
    }
    if (item.classList.contains("trade-wrap_headers-week")) {
      item.classList.remove("active");
      item.dataset.fullName = blockData.fullName.split(".")[0] + ".W";
      item.dataset.date = setClosestSymbolDateWeek(
        blockData.date,
        item.dataset.fullName,
        arr
      );
      item.dataset.currentDate = blockData.date;
    }
    if (item.classList.contains("trade-wrap_headers-month")) {
      item.classList.remove("active");
      item.dataset.fullName = blockData.fullName.split(".")[0] + ".M";
      item.dataset.date = setClosestSymbolDateMonth(
        blockData.date,
        item.dataset.fullName,
        arr
      );
      item.dataset.currentDate = blockData.date;
    }
  });

  timePeriod.forEach((item) => {
    item.addEventListener("click", function (e) {
      if (e.currentTarget.classList.contains("active")) return;
      timePeriod.forEach((item) => item.classList.remove("active"));
      item.classList.add("active");
      //await renderBlockInformationOnClick(e);
      //await renderPriceMap(e);
    });
  });
}
dataFetch();
document
  .querySelector(".header .refresh-button")
  .addEventListener("click", async function (e) {
    e.preventDefault;
    let tableName = getRefreshUrl();
    const newData = await dataFetch(tableName, true);
    const { filters, data } = await newData;
    renderFilters(await filters.d, await data);
  });
