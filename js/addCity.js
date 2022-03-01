function saveCity() {
  let newCity = document.getElementById('city').value;
  let time = document.getElementById('timezone').value;
  if (newCity != '' && time != '' && !isNaN(time)) {
    let existingCity = JSON.parse(localStorage.getItem("AllCity"));
    if (existingCity == null) existingCity = [];
    let city = {
      "city": newCity,
      "timezone": time
    };
    existingCity.push(city);
    localStorage.setItem("AllCity", JSON.stringify(existingCity));
    document.getElementById('city').value = "";
    document.getElementById('timezone').value = "";
  }

}