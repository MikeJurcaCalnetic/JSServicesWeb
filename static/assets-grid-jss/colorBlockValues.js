export function getColorBlockRValue(blockItemObj) {
  const R = blockItemObj.r;
  const rValue = {
    r9: "=R9",
    r8: "=R8",
    r7: "=R7",
    r6: "=R6",
    r5: "=R5",
    r4: "=R4",
    r3: "=R3",
    r2: "=R2",
    r1: "=R1",
  };

  if (R > blockItemObj.ut1) return rValue.r9;
  if (R == blockItemObj.ut1) return rValue.r8;
  if (R == blockItemObj["crxplus"]) return rValue.r7;
  if (R == blockItemObj.up) return rValue.r6;
  if (R == blockItemObj.dir) return rValue.r5;
  if (R == blockItemObj.dp) return rValue.r4;
  if (R == blockItemObj["crxminus"]) return rValue.r3;
  if (R == blockItemObj.dt1) return rValue.r2;
  if (R < blockItemObj.dt1) return rValue.r1;
  return "=ERROR";
}

export function getColorBlockRValueRegime(blockItemObj) {
  const R = blockItemObj.r;

  const rValue = {
    r9: ">UT1",
    r8: "=UT1",
    r7: "=CRX+",
    r6: "=UP",
    r5: "=DIR",
    r4: "=DP",
    r3: "=CRX-",
    r2: "=DT1",
    r1: "<DT1",
  };

  if (R > blockItemObj.ut1) return rValue.r9;
  if (R == blockItemObj.ut1) return rValue.r8;
  if (R == blockItemObj["crxplus"]) return rValue.r7;
  if (R == blockItemObj.up) return rValue.r6;
  if (R == blockItemObj.dir) return rValue.r5;
  if (R == blockItemObj.dp) return rValue.r4;
  if (R == blockItemObj["crxminus"]) return rValue.r3;
  if (R == blockItemObj.dt1) return rValue.r2;
  if (R < blockItemObj.dt1) return rValue.r1;
}
export function getColorBlockRRisk(blockItemObj) {
  const R = blockItemObj.r;

  const rRisk = {
    r9: "6fr 3fr 0px 6fr 10fr 0px",
    r8: "8fr 1fr 0px 6fr 10fr 0px",
    r7: "8fr 1fr 0px 6fr 10fr 0px",
    r6: "9fr 1fr 0px 5fr 10fr 0px",
    r5: "10fr 2fr 1fr 2fr 10fr 0px",
    r4: "10fr 5fr 0px 1fr 9fr 0px",
    r3: "10fr 6fr 0px 1fr 8fr 0px",
    r2: "10fr 6fr 0px 1fr 8fr 0px",
    r1: "10fr 6fr 0px 3fr 6fr 0px",
  };

  if (R >= blockItemObj.ut1) return rRisk.r9;
  if (R == blockItemObj.ut1) return rRisk.r8;
  if (R == blockItemObj["crxplus"]) return rRisk.r7;
  if (R == blockItemObj.up) return rRisk.r6;
  if (R == blockItemObj.dir) return rRisk.r5;
  if (R == blockItemObj.dp) return rRisk.r4;
  if (R == blockItemObj["crx"]) return rRisk.r3;
  if (R == blockItemObj.dt1) return rRisk.r2;
  if (R <= blockItemObj.dt1) return rRisk.r1;
}
export function getColorMarketState(stateTitle, value) {
  const valueColor = {
    2: "rgb(87, 205, 99)",
    1: "rgb(104, 114, 194)",
    0.5: "rgb(87, 205, 99)",
    0: "rgb(186, 163, 146)",
    "-0.5": "rgb(255, 102, 255)",
    "-1": "rgb(228, 124, 124)",
    "-2": "rgb(255, 102, 0)",
  };
  const valueColorADX = {
    0: "rgb(186, 163, 146)",
    2: "rgb(194, 104, 191)",
  };
  const valueColorMCV = {
    "-11": "rgb(246, 243, 135)",
    "-10": "rgb(246, 243, 135)",
    "-9": "rgb(228, 124, 124)",
    "-8": "rgb(228, 124, 124)",
    "-7": "rgb(228, 124, 124)",
    "-6": "rgb(228, 124, 124)",
    "-5": "rgb(228, 124, 124)",
    "-4": "rgb(228, 124, 124)",
    "-3": "rgb(186, 163, 146)",
    "-2": "rgb(186, 163, 146)",
    "-1": "rgb(186, 163, 146)",
    0: "rgb(186, 163, 146)",
    1: "rgb(186, 163, 146)",
    2: "rgb(186, 163, 146)",
    3: "rgb(186, 163, 146)",
    4: "rgb(104, 114, 194)",
    5: "rgb(104, 114, 194)",
    6: "rgb(104, 114, 194)",
    7: "rgb(104, 114, 194)",
    8: "rgb(104, 114, 194)",
    9: "rgb(104, 114, 194)",
    10: "rgb(246, 243, 135)",
    11: "rgb(246, 243, 135)",
  };
  function getValueColorMCV(value) {
    if (value < -9) return "rgb(246, 243, 135)";
    if (value >= -9 && value < -3) return "rgb(228, 124, 124)";
    if (value >= -3 && value < 4) return "rgb(186, 163, 146)";
    if (value >= 4 && value < 10) return "rgb(104, 114, 194)";
    if (value >= 10) return "rgb(246, 243, 135)";
  }
  const valueColorMCC = {
    "-22": "rgb(246, 243, 135)",
    "-21": "rgb(246, 243, 135)",
    "-20": "rgb(246, 243, 135)",
    "-19": "rgb(246, 243, 135)",
    "-18": "rgb(246, 243, 135)",
    "-17": "rgb(246, 243, 135)",
    "-16": "rgb(255, 102, 0)",
    "-15": "rgb(255, 102, 0)",
    "-14": "rgb(255, 102, 0)",
    "-13": "rgb(255, 102, 0)",
    "-12": "rgb(255, 102, 0)",
    "-11": "rgb(255, 102, 0)",
    "-10": "rgb(228, 124, 124)",
    "-9": "rgb(228, 124, 124)",
    "-8": "rgb(228, 124, 124)",
    "-7": "rgb(228, 124, 124)",
    "-6": "rgb(228, 124, 124)",
    "-5": "rgb(228, 124, 124)",
    "-4": "rgb(228, 124, 124)",
    "-3": "rgb(228, 124, 124)",
    "-2": "rgb(186, 163, 146)",
    "-1": "rgb(186, 163, 146)",
    0: "rgb(186, 163, 146)",
    1: "rgb(186, 163, 146)",
    2: "rgb(186, 163, 146)",
    3: "rgb(104, 114, 194)",
    4: "rgb(104, 114, 194)",
    5: "rgb(104, 114, 194)",
    6: "rgb(104, 114, 194)",
    7: "rgb(104, 114, 194)",
    8: "rgb(104, 114, 194)",
    9: "rgb(104, 114, 194)",
    10: "rgb(104, 114, 194)",
    11: "rgb(0, 255, 0)",
    12: "rgb(0, 255, 0)",
    13: "rgb(0, 255, 0)",
    14: "rgb(0, 255, 0)",
    15: "rgb(0, 255, 0)",
    16: "rgb(0, 255, 0)",
    17: "rgb(246, 243, 135)",
    18: "rgb(246, 243, 135)",
    19: "rgb(246, 243, 135)",
    20: "rgb(246, 243, 135)",
    21: "rgb(246, 243, 135)",
    22: "rgb(246, 243, 135)",
  };
  function getValueColorMCC(value) {
    if (value < -10) return "rgb(246, 243, 135)";
    if (value >= -10 && value < -2) return "rgb(228, 124, 124)";
    if (value >= -2 && value < 3) return "rgb(186, 163, 146)";
    if (value >= 3 && value < 11) return "rgb(104, 114, 194)";
    if (value >= 1 && value < 17) return "rgb(0, 255, 0)";
    if (value >= 17) return "rgb(246, 243, 135)";
  }
  if (stateTitle == "mcv") {
    return getValueColorMCV(value);
  }
  if (stateTitle == "mcc") {
    return getValueColorMCC(value);
  } else if (
    stateTitle != "mcs" &&
    stateTitle != "mcv" &&
    stateTitle != "mcc" &&
    stateTitle != "adx"
  ) {
    return valueColor[value];
  } else if (stateTitle == "adx") {
    return valueColorADX[value];
  }
}
