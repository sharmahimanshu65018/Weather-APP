
async function weather(city) {
  let response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=eb6d8bf47a86db70ff00fe7c546c317d"
  );
  let weather = await response.json();
  return weather;
}

let form = document.getElementById("regform");

function showdata(data) {
  let ic = data.weather[0].icon;
  let info = data.weather[0].description;
  let temprature = parseFloat(data.main.temp) - 273.15;
  temprature = temprature.toFixed(1);
  let ws = data.wind.speed;
  ws += "meter/sec";


  let im = document.createElement("img");
  im.src = "https://openweathermap.org/img/wn/" + ic + "@2x.png";
  let eledes = document.createElement("h4");
  eledes.innerHTML = "<h4>" + info + "</h4>";

  let eletemp = document.createElement("h4");
  eletemp.innerHTML = "<h4>Temp</h4>";

  let eletempinfo = document.createElement("h4");
  eletempinfo.innerHTML = "<h4>" + temprature + "C</h4>";

  let elews = document.createElement("h4");
  elews.innerHTML = "<h4>Wind speed</h4>";

  let elewsinfo = document.createElement("h4");
  elewsinfo.innerHTML = "<h4>" + ws + "</h4>";

  let ele = document.createElement("div");
  ele.appendChild(elewsinfo);
  ele.appendChild(eletempinfo);
  ele.appendChild(im);
  ele.classList.add("info");

  let eletitl = document.createElement("div");
  ele.appendChild(elews);
  ele.appendChild(eletemp);
  ele.appendChild(eledes);
  eletitl.classList.add("desatt");

  let wea = document.getElementById("weatherimg");
  while (wea.lastElementChild != null) {
    wea.lastElementChild.remove();
  }
  let br = document.createElement("br");
  wea.appendChild(ele);
  wea.appendChild(br);
  wea.appendChild(eletitl);
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let val = document.getElementById("city");
  let data = await weather(val.value);
  showdata(data);
});

