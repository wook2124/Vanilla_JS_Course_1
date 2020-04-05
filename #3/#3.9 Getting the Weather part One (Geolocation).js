// index.html에 <script src="weather.js"></script> 추가 
// weather를 가져오기 전에 geolocation을 가져옴 (coords, 좌표)
// loadCords === null이면 askForCords가 실행되서 현재 내 위치를 물어볼 것임
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


// function handleGeoSuccess로 coords(좌표)의 latitude(위도), longitude(경도)를 정의하고 
// SaveCoords로 위에서 나온 값을 LS에 value 값으로 저장함
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


// https://openweathermap.org/api 가입 후 API keys란에서 Key 복사 
// API(Application Programming Interface)
// 다른 서버로부터 손쉽게 데이터를 가져올 수 있는 수단


// 최종 코드
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
