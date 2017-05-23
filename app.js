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
var dogduck = new Images('dog-duck', 'img/dog-duck.jpg', false, 0);
var dragon = new Images('dragon', 'img/dragon.jpg', false, 0);
var pen = new Images('pen', 'img/pen.jpg', false, 0);
var petsweep = new Images('pet-sweep', 'img/pet-sweep.jpg', false, 0);
var scissors = new Images('scissors', 'img/scissors.jpg', false, 0);
var shark = new Images('shark', 'img/shark.jpg', false, 0);
var sweep = new Images('sweep', 'img/sweep.jpg', false, 0);
var tauntaun = new Images('tauntaun', 'img/tauntaun.jpg', false, 0);
var unicorn = new Images('unicorn', 'img/unicorn.jpg', false, 0);
var usb = new Images('usb', 'img/usb.gif', false, 0);
var watercan = new Images('water-can', 'img/water-can.jpg', false, 0);
var wineglass = new Images('wine-glass', 'img/wine-glass.jpg', false, 0);

var counter = 0;
var randNumSetOne = [];
var chosenImages = [];
var shownImages =[];

var gallery = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogduck, dragon, pen, petsweep, scissors, shark, sweep, tauntaun, unicorn, usb, watercan, wineglass];

var imageOne = document.getElementById('image-one');
var imageTwo = document.getElementById('image-two');
var imageThree = document.getElementById('image-three');

function randNumGenerator() {
  while (true) {
    var randNumOne = Math.floor(Math.random() * 20);
    var randNumTwo = Math.floor(Math.random() * 20);
    var randNumThree = Math.floor(Math.random() * 20);

    if (randNumOne !== randNumTwo && randNumThree !== randNumOne && randNumThree !== randNumTwo) {
      randNumSetOne.push(randNumOne, randNumTwo, randNumThree);
      shownImages.push(randNumOne, randNumTwo, randNumThree);
      break;
    }
  }
}

function secondRandNumGenerator() {
  while (true) {
    var randNumOne = Math.floor(Math.random() * 20);
    var randNumTwo = Math.floor(Math.random() * 20);
    var randNumThree = Math.floor(Math.random() * 20);

    if (randNumOne !== randNumTwo && randNumThree !== randNumOne && randNumThree !== randNumTwo) {
      if (randNumOne !== randNumSetOne[0] && randNumOne !== randNumSetOne[1] && randNumOne !== randNumSetOne[2] && randNumTwo !== randNumSetOne[0] && randNumTwo !== randNumSetOne[1] && randNumTwo !== randNumSetOne[2]  && randNumThree !== randNumSetOne[0] && randNumThree !== randNumSetOne[1] && randNumThree !== randNumSetOne[2]) {
        randNumSetOne = [randNumOne, randNumTwo, randNumThree];

        shownImages.push(randNumOne, randNumTwo, randNumThree);

        break;
      }
    }
  }
}

function randomImgOnDom() {
  imageOne.src = (gallery[randNumSetOne[0]]).path;
  imageTwo.src = (gallery[randNumSetOne[1]]).path;
  imageThree.src = (gallery[randNumSetOne[2]]).path;
}

function clickImage() {
  imageOne.addEventListener('click', function() {
    var srcAttr = this.getAttribute('src');
    chosenImages.push(srcAttr.split('.jpg')[0].split('/')[1]);
    counter++;
    console.log(counter);
    refreshedImages();
  });

  imageTwo.addEventListener('click', function() {
    var srcAttr = this.getAttribute('src');
    chosenImages.push(srcAttr.split('.jpg')[0].split('/')[1]);
    counter++;
    refreshedImages();
    console.log(counter);
  });

  imageThree.addEventListener('click', function() {
    var srcAttr = this.getAttribute('src');
    chosenImages.push(srcAttr.split('.jpg')[0].split('/')[1]);
    counter++;
    refreshedImages();
    console.log(counter);
  });
}

function refreshedImages() {
  secondRandNumGenerator();
  randomImgOnDom();
  clickImage();
  console.log('outside of scope:', counter);
  console.log('rand one', randNumSetOne);
  console.log('shown images', shownImages);
}

randNumGenerator();
console.log('rand one', randNumSetOne);
console.log('shown images', shownImages);
randomImgOnDom();
clickImage();


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
