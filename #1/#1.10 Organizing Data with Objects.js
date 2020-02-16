// {} - python의 dictionary 기능임!
// 각각 Object(개체)로 묶어주는 것 - name, age, gender, isHandsome 각각 개체의 변수로써 존재함
const wookInfo = {
  name: "YoungWook",
  age: 27,
  gender: "Male",
  isHandsome: true
};

console.log(wookInfo);

// wookInfo.gender - {}안의 각각의 변수를 호출하려면 '.변수' 만 뒤에 붙이면됨!
const wookInfo = {
  name: "YoungWook",
  age: 27,
  gender: "Male",
  isHandsome: true
};

console.log(wookInfo.gender);

// {} 안에 있는 변수는 const로 정해진 변수 안에 있는 것이라도 바꿀 수 있음!
const wookInfo = {
  name: "YoungWook",
  age: 27,
  gender: "Male",
  isHandsome: true
};

console.log(wookInfo.gender);

wookInfo.gender = "Female"

console.log(wookInfo.gender);

// wookInfo Object{} 안 favMovies Object는 Array[]로 정렬하고, favFood Object는 Array[]안에 다시 Object{}를 이용해서 Data를 정리함!
const wookInfo = {
  name: "YoungWook",
  age: 27,
  gender: "Male",
  isHandsome: true,
  favMovies: ["Lord of the ring", "Parasite"],
  favFood: [
    { 
      name: "참치", 
      fatty: true 
    }, 
    { name: "김치", 
      fatty: false 
    }
  ]
};

console.log(wookInfo);

// favFood Object{}는 Array[]로 되있기때문에 [0]을 이용해서 둘 중에 하나를 고를 수 있다. '.변수.변수'
const wookInfo = {
  name: "YoungWook",
  age: 27,
  gender: "Male",
  isHandsome: true,
  favMovies: ["Lord of the ring", "Parasite"],
  favFood: [
    { 
      name: "참치", 
      fatty: true 
    }, 
    { name: "김치", 
      fatty: false 
    }
  ]
};

console.log(wookInfo.favFood[0].name);

// 여러가지 한꺼번에 출력하기, 끝!
const wookInfo = {
  name: "YoungWook",
  age: 27,
  gender: "Male",
  isHandsome: true,
  favMovies: ["Lord of the ring", "Parasite"],
  favFood: [
    { 
      name: "참치", 
      fatty: true 
    }, 
    { name: "김치", 
      fatty: false 
    }
  ]
};

console.log(wookInfo.favFood[1].name, wookInfo.favMovies[0], wookInfo.favFood[0].fatty);