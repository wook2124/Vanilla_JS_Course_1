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