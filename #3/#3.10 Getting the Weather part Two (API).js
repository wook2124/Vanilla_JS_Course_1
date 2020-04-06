// https://openweathermap.org/
// API(Application Programming Interface), 다른 서버로부터 손쉽게 데이터를 가져올 수 있는 수단


// index.html에 span class="js-weather" 추가
<span class="js-weather"></span>


// fetch() - `__` 백틱(backtick)을 이용해서 복사한 URL링크 앞에 https를 적어줌
// lat(latitude 위도), lon(longitude 경도), your api key(API_KEY) 각각 앞에 $ 붙여서 인자화해줌
const API_KEY = "ded8b1690ab3da1a4ef762795e744b2f";

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );
}


// else(loadedCoords가 null이 !아니라면)
// parse는 Local Storage에 value로 저장되어있는 string 값을 object 값으로 바꿈
function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    console.log(parseCoords);
  }
}


// getWeather
// F12(inspection)의 network 패널에서 코드가 request한 내용을 보여줌
function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}


// F(fahrenheit, 화씨)에서 C(celsius, 섭씨)로 바꿔서 나타내기
// C를 사용하려면 use 'metric units(미터법)', F를 사용하려면 use 'imperial units(야드 파운드법)'
// "&units=metric"을 URL링크 맨 마지막에 추가해줌
function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );
}


// fetch 함수로 서버로부터 전송되는 데이터가 모두 수신될 때까지 기다린 후
// then, 데이터가 수신이 완료된 후 JSON 데이터를 가져옴
function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  ).then(function(json) {
    console.log(json);
  });
}


// F12(inspection)의 network 패널 안에 있는 response에서 JSON Data만 가져옴
function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  ).then(function(response) {
    console.log(response.json());
  });
}


// response에서 JSON Data 가져온 것을 보류하지 않고 바로 JSON Data를 출력함
function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log(json);
    });
}


// 최종 코드
const weather = document.querySelector(".js-weather");

const API_KEY = "ded8b1690ab3da1a4ef762795e744b2f";
const COORDS = "coords";
// temparatur(온도), place(장소)를 각각 JSON Data로 설정하고
// weather.innerText = `__`에 $로 각각 argumentation(인자화)해서 HTML에 출력함 
function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `온도: ${temperature} @ 장소: ${place}`;
    });
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude: latitude,
    longitude: longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError(position) {
  console.log("Can't access geo location");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
