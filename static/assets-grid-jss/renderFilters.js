import renderBlocks from "/static/assets-grid-jss/renderBlocks.js";
import { filterItemsByIndicator } from "/static/assets-grid-jss/events.js";
import { getDataMode } from "/static/assets-grid-jss/status.js";

export default function renderFilters(filterArrDates, dataByDate) {
  const today = new Date();
  const nextDay = new Date();
  nextDay.setDate(today.getDate() + 1);
  const todayDayValue = `${today.getFullYear()}-${today.getFullMonth()}-${today.getFullDate()}`;

  const filterArrIndicators = ["ALL"];
  const filterBlockDates = document.querySelector(
    ".page-jss .header .filter-date ul"
  );

  if (filterBlockDates.childElementCount) {
    while (filterBlockDates.childElementCount) {
      filterBlockDates.firstChild.remove();
    }
  }
  const filterBlockIndicators = document.querySelector(
    ".page-jss .header .filter-indicator ul"
  );
  const filterBlockSymbols = document.querySelector(
    ".page-jss .header .filter-symbol ul"
  );
  filterBlockIndicators.innerHTML = "";
  if (getDataMode() === "futures") {
    filterBlockIndicators.style.display = "none";
  } else {
    filterBlockIndicators.style.display = "block";
    dataByDate.forEach((item) => {
      const filter = item.name.split(".")[0];

      if (!filterArrIndicators.includes(filter))
        filterArrIndicators.push(filter);
    });
  }
  filterArrDates
    .sort((a, b) => (a < b ? 1 : -1))
    .forEach((filterArrItem) => {
      let displayDate = new Date(filterArrItem + " ");
      let thisDay = displayDate.getDay();
      let thisDate = displayDate.getDate();

      if (getDataMode() === "futures") {
        switch (thisDay) {
          case 1:
          case 2:
          case 3:
          case 4:
            displayDate.setDate(thisDate + 1);
            break;
          case 5:
            displayDate.setDate(thisDate + 3);
          default:
            break;
        }
      } else {
        switch (thisDay) {
          default:
            displayDate.setDate(thisDate + 1);
            break;
        }
      }
      const displayDateString = `${displayDate.getFullYear()}-${displayDate.getFullMonth()}-${displayDate.getFullDate()}`;

      let filterItem = document.createElement("li");
      filterItem.className = "filter-item";
      filterItem.innerText = displayDateString;
      filterItem.setAttribute("value", filterArrItem);
      filterItem.dataset.filterPull = "date";

      if (filterArrItem === filterArrDates[0]) {
        filterItem.classList.add("active");
        renderBlocks(filterArrItem, dataByDate);
      }

      filterBlockDates.append(filterItem);
    });

  filterArrIndicators.forEach((filterArrItem) => {
    let filterItem = document.createElement("li");
    filterItem.className = "filter-item";
    filterItem.innerText = filterArrItem;
    filterItem.setAttribute("value", filterArrItem);
    filterItem.dataset.filterPull = "indicator";

    if (filterArrItem === filterArrIndicators[0]) {
      filterItem.classList.add("active");
    }

    filterBlockIndicators.append(filterItem);
  });

  const filters = document.querySelectorAll(".filter");
  const filterItemData = document.querySelectorAll(".filter-item");
  filters.forEach((item) => item.classList.remove("show"));

  filterItemData.forEach((item) => {
    item.addEventListener("click", function (e) {
      filters.forEach((item) => item.classList.remove("show"));
      item.parentElement.parentElement.classList.toggle("show");

      if (
        currentFilterActiveItem(item) !== item.getAttribute("value") &&
        item.dataset.filterPull == "indicator" &&
        !item.classList.contains("active")
      ) {
        filterItemsByIndicator(item.getAttribute("value"));
        filters.forEach((item) => item.classList.remove("show"));
      }
      if (
        currentFilterActiveItem(item) !== item.getAttribute("value") &&
        item.dataset.filterPull == "date" &&
        !item.classList.contains("active")
      ) {
        renderBlocks(item.getAttribute("value"));
        filters.forEach((item) => item.classList.remove("show"));
      }
      filterItemData.forEach((closeItem) => {
        if (item.dataset.filterPull == closeItem.dataset.filterPull)
          closeItem.classList.remove("active");
      });

      item.classList.add("active");
    });
  });
  function currentFilterActiveItem(item) {
    const currentFilteItems = item.parentElement.childNodes;

    currentFilteItems.forEach((filterItem) => {
      if (filterItem.classList.contains("active"))
        return filterItem.getAttribute("value");
    });
  }
}
