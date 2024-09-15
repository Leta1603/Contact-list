export function getDataFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

export function setDataInLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}