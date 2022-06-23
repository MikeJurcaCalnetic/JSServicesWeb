export default function getMarketAttributesByCode(code, part) {
  if (code == "error") return;
  const marketAttributes = {
    100: {
      1: "AttributeNoMomentum_CLEAR",
      2: "AttributeNoBias_CLEAR",
      3: "AttributeVolalityDN_CLEAR",
      4: "AttributeNonTrend_CLEAR",
    },
    110: {
      1: "AttributeNoMomentum_CLEAR",
      2: "AttributeBiasUP_CLEAR",
      3: "AttributeVolalityDN_CLEAR",
      4: "AttributeNonTrend_CLEAR",
    },
    120: {
      1: "AttributeMomentum_CLEAR",
      2: "AttributeBiasUP_CLEAR",
      3: "AttributeVolalityUP_CLEAR",
      4: "AttributeTrendPositive_CLEAR",
    },
    130: {
      1: "AttributeNoMomentum_CLEAR",
      2: "AttributeBiasDN_CLEAR",
      3: "AttributeVolalityDN_CLEAR",
      4: "AttributePositiveExtreme_CLEAR",
    },
    150: {
      1: "AttributeNoMomentum_CLEAR",
      2: "AttributeBiasDN_CLEAR",
      3: "AttributeVolalityDN_CLEAR",
      4: "AttributeNonTrend_CLEAR",
    },
    160: {
      1: "AttributeMomentum_CLEAR",
      2: "AttributeBiasDN_CLEAR",
      3: "AttributeVolalityUP_CLEAR",
      4: "AttributeTrendNegative_CLEAR",
    },
    170: {
      1: "AttributeNoMomentum_CLEAR",
      2: "AttributeBiasUP_CLEAR",
      3: "AttributeVolalityDN_CLEAR",
      4: "AttributeNegativeExtreme_CLEAR",
    },
    210: {
      1: "AttributeNoMomentum_CLEAR",
      2: "AttributeBiasDN_CLEAR",
      3: "AttributeVolalityDN_CLEAR",
      4: "AttributeNonTrend_CLEAR",
    },
    220: {
      1: "AttributeNoMomentum_CLEAR",
      2: "AttributeBiasDN_CLEAR",
      3: "AttributeVolalityDN_CLEAR",
      4: "AttributePositiveExtreme_CLEAR",
    },
    230: {
      1: "AttributeNoMomentum_CLEAR",
      2: "AttributeBiasDN_CLEAR",
      3: "AttributeVolalityDN_CLEAR",
      4: "AttributePositiveExtreme_CLEAR",
    },
    240: {
      1: "AttributeNoMomentum_CLEAR",
      2: "AttributeNoBias_CLEAR",
      3: "AttributeVolalityUP_CLEAR",
      4: "AttributePositiveExtreme_CLEAR",
    },
    250: {
      1: "AttributeNoMomentum_CLEAR",
      2: "AttributeNoBias_CLEAR",
      3: "AttributeVolalityDN_CLEAR",
      4: "AttributeNonTrend_CLEAR",
    },
    260: {
      1: "AttributeMomentum_CLEAR",
      2: "AttributeBiasUP_CLEAR",
      3: "AttributeVolalityUP_CLEAR",
      4: "AttributeTrendPositive_CLEAR",
    },
    270: {
      1: "AttributeMomentum_CLEAR",
      2: "AttributeBiasUP_CLEAR",
      3: "AttributeVolalityUP_CLEAR",
      4: "AttributeTrendPositive_CLEAR",
    },
    280: {
      1: "AttributeMomentum_CLEAR",
      2: "AttributeBiasUP_CLEAR",
      3: "AttributeVolalityUP_CLEAR",
      4: "AttributeTrendPositive_CLEAR",
    },
    320: {
      1: "AttributeMomentum_CLEAR",
      2: "AttributeBiasDN_CLEAR",
      3: "AttributeVolalityUP_CLEAR",
      4: "AttributeTrendNegative_CLEAR",
    },
    330: {
      1: "AttributeMomentum_CLEAR",
      2: "AttributeBiasDN_CLEAR",
      3: "AttributeVolalityUP_CLEAR",
      4: "AttributeTrendNegative_CLEAR",
    },
    340: {
      1: "AttributeMomentum_CLEAR",
      2: "AttributeBiasDN_CLEAR",
      3: "AttributeVolalityUP_CLEAR",
      4: "AttributeTrendNegative_CLEAR",
    },
    350: {
      1: "AttributeNoMomentum_CLEAR",
      2: "AttributeNoBias_CLEAR",
      3: "AttributeVolalityDN_CLEAR",
      4: "AttributeNonTrend_CLEAR",
    },
    360: {
      1: "AttributeNoMomentum_CLEAR",
      2: "AttributeNoBias_CLEAR",
      3: "AttributeVolalityUP_CLEAR",
      4: "AttributeNegativeExtreme_CLEAR",
    },
    370: {
      1: "AttributeNoMomentum_CLEAR",
      2: "AttributeBiasUP_CLEAR",
      3: "AttributeVolalityDN_CLEAR",
      4: "AttributeNegativeExtreme_CLEAR",
    },
    380: {
      1: "AttributeNoMomentum_CLEAR",
      2: "AttributeBiasUP_CLEAR",
      3: "AttributeVolalityDN_CLEAR",
      4: "AttributeNegativeExtreme_CLEAR",
    },
    390: {
      1: "AttributeNoMomentum_CLEAR",
      2: "AttributeBiasUP_CLEAR",
      3: "AttributeVolalityDN_CLEAR",
      4: "AttributeNonTrend_CLEAR",
    },
    400: {
      1: "AttributeNoMomentum_CLEAR",
      2: "AttributeBiasDN_CLEAR",
      3: "AttributeVolalityDN_CLEAR",
      4: "AttributePositiveExtreme_CLEAR",
    },
    500: {
      1: "AttributeNoMomentum_CLEAR",
      2: "AttributeBiasUP_CLEAR",
      3: "AttributeVolalityDN_CLEAR",
      4: "AttributeNegativeExtreme_CLEAR",
    },
    900: {
      1: "AttributePivotal_CLEAR",
      2: "AttributeNoBias_CLEAR",
      3: "AttributeVolalityMixed_CLEAR",
      4: "AttributeTrendNonTrend_CLEAR",
    },
  };
  const imagesBlock = document.createElement("div");
  imagesBlock.classList.add("imagesBlock");

    var count = 0;

    Object.values(marketAttributes[code]).forEach((marketAttributesItem) => {

        if ((part == 1 && count < 2) || (part == 2 && count >= 2)) {
            const imgName = marketAttributesItem
                ? `url('/static/assets/imgs/wsImages/${marketAttributesItem}.png')`
                : "";
            const imgDescription = marketAttributesItem.includes("Bias")
                ? "Bias"
                : marketAttributesItem.includes("Volality")
                    ? "Volatility"
                    : marketAttributesItem.includes("Momentum") ||
                        marketAttributesItem.includes("Pivotal")
                        ? "Momentum"
                        : "Type";
            const imgItem = document.createElement("div");
            const imgTitle = document.createElement("p");

            imgTitle.innerText = imgDescription;
            imgItem.classList.add("imagesBlock-item");
            imgItem.style.backgroundImage = imgName;
            imgItem.append(imgTitle);
            imagesBlock.append(imgItem);
        }
        count++;
  });

  return imagesBlock;
}
