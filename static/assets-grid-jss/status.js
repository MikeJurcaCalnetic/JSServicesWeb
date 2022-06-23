const store = {
  data: [],
  filters: [],
  refreshUrl: "",
};

export function setDataMode(name) {
  store["datamode"] = name;
}
export function getDataMode() {
  return store["datamode"];
}
export function setData(data) {
  store.data = data.data;
}

export function getData() {
  return store.data;
}

export function getRefreshUrl() {
  return store.refreshUrl;
}

export function setRefreshUrl(url) {
  store.refreshUrl = url;
}
