// index.html에 <script src="weather.js"></script> 추가해주고 (coords, 좌표)
// weather를 가져오기 전에 geolocation을 가져옴
// loadCords가 null이면 askForCords가 발동되서 내 위치를 물어볼 것임!
const COORDS = "coords";

function handleGeoSuccess(position) {
  console.log(position);
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
    // getWeather
  }
}

function init() {
  loadCoords();
}

init();

// function handleGeoSuccess로 position안에 coords(좌표)의 위도, 경도를 각각 const 해주고 묶어서 Value 값으로 LS에 저장해주는 function인 SaveCoords를 만듦
const COORDS = "coords";

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
    // getWeather
  }
}

function init() {
  loadCoords();
}

init();

// https://openweathermap.org/api 가입한다음 API keys에서 Key를 복사함 
// API(Application Programming Interface), 다른 서버로부터 손쉽게 데이터를 가져올 수 있는 수단
// const API_KEY로 openWeather Server를 가져오기 위한 API Key 가져오기 끝!
const API_KEY = "ded8b1690ab3da1a4ef762795e744b2f"
const COORDS = "coords";

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
    // getWeather
  }
}

function init() {
  loadCoords();
}

init();
