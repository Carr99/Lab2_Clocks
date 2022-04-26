document.querySelector('body').addEventListener('click', function (event) {

  let aButton = event.target.closest('button');

  if (!aButton) { return; }
  let clickedButton = aButton.getAttribute('id');
  if (clickedButton == 'backButton1') {
    turnOff();
    newPage = '/start'
  } else if (clickedButton == 'addButton') {
    newPage = '/addCity'
  } else if (clickedButton == 'backButton2') {
    newPage = '/start'
  } else if (clickedButton == 'saveInfo') {
    return;
  } else {
    let myArray = clickedButton.split("@");
    timeZone = myArray[2];
    cityName = myArray[1];
    newPage = '/cityPage';
  }

  event.preventDefault();
  rotuer(newPage);
});

async function rotuer(aV) {
  let route = location.pathname;
  if (aV != null) {
    route = aV;
  }
  route = route === '/index.html' ? '/start' : route;
  route = route === '/' ? '/start' : route;
  route = '/partials' + route + '.html';
  // load partial
  let content = await (await fetch(route)).text();
  content.includes('<title>Error</title > ') && location.replace(' / ');
  document.querySelector('main').innerHTML = content;

  route === '/partials/cityPage.html' && loadCity();
  route === '/partials/start.html' && loadJsonAndDisplay();

}

window.addEventListener('popstate', rotuer);

rotuer();