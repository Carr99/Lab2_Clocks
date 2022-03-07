async function loadJsonAndDisplay() {
  let rawData = await fetch('/cities.json')
  let citys = await rawData.json()
  let html = ''

  let existingCity = JSON.parse(localStorage.getItem("AllCity"));
  if (existingCity != null) {
    for (let city of existingCity) {
      html += `
    <Button class="citySquare" id="own@${city.city}@${city.timezone}" >
      <p class="cityTitle">${city.city}</p>
    </Button>
    `
    }
  }

  for (let city of citys) {
    html += `
    <Button class="citySquare" id="${city.id}@${city.city}@${city.timezone}" >
      <p>${city.city}</p>
    </Button>
    `
  }
  document.querySelector('.citys').innerHTML = html
}
loadJsonAndDisplay();