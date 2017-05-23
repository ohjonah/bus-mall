'use strict';

function Images(name, path, shown, clicked) {
  this.name = name;
  this.path = path;
  this.shown = false;
  this.clicked = 0;
}

var bag = new Images('bag', 'img/bag.jpg', false, 0);
var banana = new Images('banana', 'img/banana.jpg', false, 0);
var bathroom = new Images('bathroom', 'img/bathroom.jpg', false, 0);
var boots = new Images('boots', 'img/boots.jpg', false, 0);
var breakfast = new Images('breakfast', 'img/breakfast.jpg', false, 0);
var bubblegum = new Images('bubblegum', 'img/bubblegum.jpg', false, 0);
var chair = new Images('chair', 'img/chair.jpg', false, 0);
var cthulhu = new Images('cthulhu', 'img/cthulhu.jpg', false, 0);
var dogDuck = new Images('dog-duck', 'img/dog-duck.jpg', false, 0);
var dragon = new Images('dragon', 'img/dragon.jpg', false, 0);
var pen = new Images('pen', 'img/pen.jpg', false, 0);
var petSweep = new Images('pet-sweep', 'img/pet-sweep.jpg', false, 0);
var scissors = new Images('scissors', 'img/scissors.jpg', false, 0);
var shark = new Images('shark', 'img/shark.jpg', false, 0);
var sweep = new Images('sweep', 'img/sweep.png', false, 0);
var tauntaun = new Images('tauntaun', 'img/tauntaun.jpg', false, 0);
var unicorn = new Images('unicorn', 'img/unicorn.jpg', false, 0);
var usb = new Images('usb', 'img/usb.gif', false, 0);
var waterCan = new Images('water-can', 'img/water-can.jpg', false, 0);
var wineGlass = new Images('wine-glass', 'img/wine-glass.jpg', false, 0);

var counter = 0;
var randNumSetOne = [];
var randNumSetTwo = [];

var gallery = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];

var imageOne = document.getElementById('image-one');
var imageTwo = document.getElementById('image-two');
var imageThree = document.getElementById('image-three');


function randomNumberGenerator() {
  var randNumOne = Math.floor(Math.random() * 20);
  var randNumTwo = Math.floor(Math.random() * 20);
  var randNumThree = Math.floor(Math.random() * 20);

  if (randNumOne === randNumTwo) {
    
  }
    }
  console.log(randNumOne, randNumTwo, randNumThree);
}



function randomImgOnDom() {
  imageOne.src = (gallery[randNumSetOne[0]]).path;
  imageTwo.src = (gallery[randNumSetOne[1]]).path;
  imageThree.src = (gallery[randNumSetOne[2]]).path;
}
randomNumberGenerator();
randomImgOnDom();
console.log('random num array', randNumSetOne);

  // imageOne.setAttribute('src', gallery[]);

//
// function () {
//   var ranNum = Math.floor(Math.random() * 21);
//   console.log(ranNum);
//   imageOne.setAttribute('img src', gallery[ranNum].path);
// };




// imageOne.setAttribute('src', 'img/chair.jpg')







// Images.prototype.statsCounter = function () {
//
// }
