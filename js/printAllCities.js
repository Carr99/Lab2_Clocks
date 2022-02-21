async function loadJsonAndDisplay() {
  let rawData = await fetch('/cities.json')
  let citys = await rawData.json()
  let html = ''

  for (let city of citys) {
    html += `
    <Button class="citySquare" id="${city.id}@${city.city}@${city.timezone}" >
      <p class="names">${city.city}</p>
    </Button>
    `
  }
  document.querySelector('.citys').innerHTML = html
}
loadJsonAndDisplay();