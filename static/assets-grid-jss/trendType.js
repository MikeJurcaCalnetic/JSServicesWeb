export default function getColorBlockTrendTypeObj(blockItemObj) {
  const MCSTAG = blockItemObj.posState ? blockItemObj.posState : "ERROR";

  const trendtypeInfo = {
    NEU: {
      code: 100,
      type: "NT",
      typeDectription: "NON TREND",
      mcsDescription: "NEUTRAL DIGESTION",
      bgcolor: "rgb(118, 63, 24)",
    },
    NPS: {
      code: 110,
      type: "NT",
      typeDectription: "NON TREND",
      mcsDescription: "NEUTRAL POSITIVE SHIFT",
      bgcolor: "rgb(118, 63, 24)",
    },
    NPT: {
      code: 120,
      type: "TP",
      typeDectription: "TREND",
      mcsDescription: "NEUTRAL POSITIVE TRANSITION",
      bgcolor: "rgb(118, 63, 24)",
    },
    NPE: {
      code: 130,
      type: "DVP",
      typeDectription: "NON TREND",
      mcsDescription: "NEUTRAL POSITIVE EXTREME",
      bgcolor: "rgb(118, 63, 24)",
    },
    NNS: {
      code: 150,
      type: "NT",
      typeDectription: "NON TREND",
      mcsDescription: "NEUTRAL NEGATIVE SHIFT",
      bgcolor: "rgb(118, 63, 24)",
    },
    NNT: {
      code: 160,
      type: "TN",
      typeDectription: "TREND",
      mcsDescription: "NEUTRAL NEGATIVE TRANSITION",
      bgcolor: "rgb(118, 63, 24)",
    },
    NNE: {
      code: 170,
      type: "DVN",
      typeDectription: "NON TREND",
      mcsDescription: "NEUTRAL NEGATIVE EXTREME",
      bgcolor: "rgb(118, 63, 24)",
    },
    UPC: {
      code: 210,
      type: "NT",
      typeDectription: "NON TREND",
      mcsDescription: "BULL TREND CORRECTION",
      bgcolor: "rgb(255, 102, 255)",
    },
    UPE: {
      code: 220,
      type: "DVP",
      typeDectription: "NON TREND",
      mcsDescription: "BULL TREND EXTREME",
      bgcolor: "rgb(0, 176, 240)",
    },
    UPPE: {
      code: 230,
      type: "DVP",
      typeDectription: "NON TREND",
      mcsDescription: "BULL TREND POSITIVE EXTREME",
      bgcolor: "rgb(0, 0, 255)",
    },
    UPAE: {
      code: 240,
      type: "DVP",
      typeDectription: "NON TREND",
      mcsDescription: "BULL TREND ACCELERATION EXTREME",
      bgcolor: "rgb(0, 255, 0)",
    },
    UPD: {
      code: 250,
      type: "NT",
      typeDectription: "NON TREND",
      mcsDescription: "BULL TREND Digestion",
      bgcolor: "rgb(68, 116, 159)",
    },
    UPT: {
      code: 260,
      type: "TP",
      typeDectription: "TREND",
      mcsDescription: "BULL TREND",
      bgcolor: "rgb(0, 0, 255)",
    },
    UPP: {
      code: 270,
      type: "TP",
      typeDectription: "TREND",
      mcsDescription: "BULL TREND POSITIVE",
      bgcolor: "rgb(0, 0, 255)",
    },
    UPA: {
      code: 280,
      type: "TP",
      typeDectription: "TREND",
      mcsDescription: "BULL TREND ACCELERATION",
      bgcolor: "rgb(0, 255, 0)",
    },
    DNA: {
      code: 320,
      type: "TN",
      typeDectription: "TREND",
      mcsDescription: "BEAR TREND ACCELERATION",
      bgcolor: "rgb(255, 192, 0)",
    },
    DNN: {
      code: 330,
      type: "TN",
      typeDectription: "TREND",
      mcsDescription: "BEAR TREND NEGATIVE",
      bgcolor: "rgb(255, 0, 0)",
    },
    DNT: {
      code: 340,
      type: "TN",
      typeDectription: "TREND",
      mcsDescription: "BEAR TREND",
      bgcolor: "rgb(255, 0, 0)",
    },
    DND: {
      code: 350,
      type: "NT",
      typeDectription: "NON TREND",
      mcsDescription: "BEAR TREND Digestion",
      bgcolor: "rgb(153, 0, 0)",
    },
    DNAE: {
      code: 360,
      type: "DVN",
      typeDectription: "NON TREND",
      mcsDescription: "BEAR TREND ACCELERATION EXTREME",
      bgcolor: "rgb(255, 153, 0)",
    },
    DNNE: {
      code: 370,
      type: "DVN",
      typeDectription: "NON TREND",
      mcsDescription: "BEAR TREND NEGATIVE EXTREME",
      bgcolor: "rgb(255, 0, 0)",
    },
    DNE: {
      code: 380,
      type: "DVN",
      typeDectription: "NON TREND",
      mcsDescription: "BEAR TREND EXTREME",
      bgcolor: "rgb(255, 0, 255)",
    },
    DNC: {
      code: 390,
      type: "NT",
      typeDectription: "NON TREND",
      mcsDescription: "BEAR TREND CORRECTION",
      bgcolor: "rgb(0, 255, 255)",
    },
    PE: {
      code: 400,
      type: "DVP",
      typeDectription: "NON TREND",
      mcsDescription: "POSITIVE EXTREME",
      bgcolor: "rgb(255, 255, 0)",
    },
    NE: {
      code: 500,
      type: "DVN",
      typeDectription: "NON TREND",
      mcsDescription: "NEGATIVE EXTREME",
      bgcolor: "rgb(255, 255, 0)",
    },
    NEUT: {
      code: 900,
      type: "TNT",
      typeDectription: "TREND NON TREND",
      mcsDescription: "NEUTRAL DIGESTION TRANSITION",
      bgcolor: "rgb(102, 0, 204)",
    },
    NT: {
      code: 1000,
      type: "NT",
      bgcolor: "#262626",
    },
    TP: {
      code: 2600,
      type: "TP",
      bgcolor: "#6872C2",
    },
    TN: {
      code: 3200,
      type: "TN",
      bgcolor: "rgb(153, 0, 0)",
    },
    DVP: {
      code: 4000,
      type: "DVP",
      bgcolor: "#FFFF00",
    },
    DVN: {
      code: 5000,
      type: "DVN",
      bgcolor: "#FFFF00",
    },
    TNT: {
      code: 5000,
      type: "TNT",
      bgcolor: "#FFFF00",
    },
    ERROR: {
      code: "error",
      type: "error",
      bgcolor: "#FF0000",
      typeDectription: "error",
      mcsDescription: "error",
    },
  };
  return trendtypeInfo[MCSTAG];
}
