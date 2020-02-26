// API(Application Programming Interface), 다른 서버로부터 손쉽게 데이터를 가져올 수 있는 수단
// https://openweathermap.org/에 가서 API를 가져와줌
// 복사해야할 API call - lat(latitude 위도), lon(longitude 경도), your api key(API_KEY)를 복사한다음 각각 앞에 $ 붙여서 인자화해줘야함!
// fetch() - 안에 가져올 데이터를 넣어주면 되는데 `__` 백틱(backtick)을 이용하고 가져온 URL링크 앞에 https를 적어줘야함!
const API_KEY = "ded8b1690ab3da1a4ef762795e744b2f";
const COORDS = "coords";

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );
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
    // getWeather
  }
}

function init() {
  loadCoords();
}

init();

// else 값 입력하기 - parseCoords가 잘 나타나는 것을 알 수 있다. - parse는 string 값을 object로 바꾸는 것! (LS에 있는 string값을 object로 바꿔서 나타냄!)
function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    console.log(parseCoords);
  }
}

// getWeather 입력하기
// network 패널은 내가 request한 내용을 보여준다.
function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

// F(fahrenheit, 화씨)에서 C(celsius, 섭씨)로 바꿔서 나타내기!
// C를 사용하려면 use 'metric units(미터법)', F를 사용하려면 use 'imperial units(야드 파운드법)'
// &units=metric를 URL링크 맨 마지막에 추가해줌
function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );
}

// fetch 함수로 서버로부터 가져오는 데이터가 들어올때까지 기다린 후(데이터가 들어온게 완료된 후) then 함수 기능으로 JSON 데이터 가져오기!
function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  ).then(function(json) {
    console.log(json);
  });
}

// network안에 있는 response에서 json 정보 가져오기!
function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  ).then(function(response) {
    console.log(response.json());
  });
}

// response에서 json을 가져온 것을 보류하지 않고 바로 json을 출력하도록 함!
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
// index.html에 span class="js-weather" 추가하기
    <span class="js-weather"></span>
// temparatur(온도), place(장소)를 json을 추출한 정보로 설정해주고, weather.innerText = `__`으로 html에 들어갈 문자를 넣어준다. 그리고 querySelector로 class로 저장한 ".js-weather" 찾아주기, 끝!!
const weather = document.querySelector(".js-weather");

const API_KEY = "ded8b1690ab3da1a4ef762795e744b2f";
const COORDS = "coords";

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
