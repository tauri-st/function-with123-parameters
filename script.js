//No parameters
var startMyDay = function () {
  return `Time for coffee and a shower!`;
};
//console.log(startMyDay());

//One parameter
var favoriteCookie = function (cookie) {
  return `My favorite cookie is ${cookie}.`;
};

console.log(favoriteCookie("chocolate chip"));

//2 parameters

var introduce = function (name, occupation) {
  return `I am ${name} and I am a ${occupation};`;
};

console.log(introduce("Tauri", "front end developer"));
console.log(introduce("D", "artist"));

//Caputure input

var hydrationFeedback = function () {
  var numGlasses = Number(
    prompt("How many glasses of water did you drink today?")
  );
  if (numGlasses >= 8) {
    console.log("Yay, you are so hydrated!");
  } else if (numGlasses < 8) {
    console.log("You should drink more water!");
  }
};

//console.log(hydrationFeedback());
hydrationFeedback();
