var cityName;
var timeZone;
var control;

function loadCity() {
  document.getElementById("cityName").textContent = "" + cityName;
  control = setInterval(() => {
    let now = new Date();
    let myArray = timeZone.split('.')
    //Minute
    let minute = document.getElementById("minute");
    let min = now.getMinutes();
    if (myArray[1] !== undefined) {
      min += parseInt(myArray[1]);
    }
    let minDegrees = 6 * min;
    minute.style.transform = `rotate(${minDegrees}deg)`;

    //Hour
    let hour = document.getElementById("hour");
    let hr = now.getHours();
    if (min >= 60) {
      hr++;
      min -= 60;
    }
    hr -= 1;
    hr += parseInt(myArray[0]);
    let hrDegrees = 30 * hr + min / 2;
    hour.style.transform = `rotate(${hrDegrees}deg)`;
    if (hr >= 24) {
      hr -= 24;
    }

    //Second
    let second = document.getElementById("second");
    let sec = now.getSeconds();
    let secDegrees = 6 * sec;
    second.style.transform = `rotate(${secDegrees}deg)`;

    if (hr < 10 || min < 10 || sec < 10) {
      if (hr < 10) {
        document.getElementById("analogTime").textContent = "0" + hr + ":" + min + ":" + sec;
      } else if (min < 10) {
        document.getElementById("analogTime").textContent = hr + ":0" + min + ":" + sec;
      } else {
        document.getElementById("analogTime").textContent = hr + ":" + min + ":0" + sec;
      }
    } else {
      document.getElementById("analogTime").textContent = hr + ":" + min + ":" + sec;
    }
  }, 1000);
}

function turnOff() {
  clearInterval(control);
}