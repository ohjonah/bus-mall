'use strict';

var counter = 0;
var randNumSet = [];
var chosenImages = [];
var shownImages =[];

var allImages = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dogduck', 'dragon', 'pen', 'petsweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'watercan', 'wineglass'];

var allImageObjects = [];

function Images(name, path) {
  this.name = name;
  this.path = path;
}

function instantiateImages() {
  for (var i = 0; i < allImages.length; i++) {
    if (allImages[i] !== 'sweep' && allImages[i] !== 'usb') {
      allImageObjects.push(new Images(allImages[i], 'img/' + allImages[i] + '.jpg'));

    } else if (allImages[i] === 'sweep') {
      allImageObjects.push(new Images(allImages[i], 'img/' + allImages[i] + '.png'));

    } else if (allImages[i] === 'usb') {
      allImageObjects.push(new Images(allImages[i], 'img/' + allImages[i] + '.gif'));
    }
  }
}

// var bag = new Images('bag', 'img/bag.jpg');
// var banana = new Images('banana', 'img/banana.jpg');
// var bathroom = new Images('bathroom', 'img/bathroom.jpg');
// var boots = new Images('boots', 'img/boots.jpg');
// var breakfast = new Images('breakfast', 'img/breakfast.jpg');
// var bubblegum = new Images('bubblegum', 'img/bubblegum.jpg');
// var chair = new Images('chair', 'img/chair.jpg');
// var cthulhu = new Images('cthulhu', 'img/cthulhu.jpg');
// var dogduck = new Images('dogduck', 'img/dog-duck.jpg');
// var dragon = new Images('dragon', 'img/dragon.jpg');
// var pen = new Images('pen', 'img/pen.jpg');
// var petsweep = new Images('petsweep', 'img/pet-sweep.jpg');
// var scissors = new Images('scissors', 'img/scissors.jpg');
// var shark = new Images('shark', 'img/shark.jpg');
// var sweep = new Images('sweep', 'img/sweep.png');
// var tauntaun = new Images('tauntaun', 'img/tauntaun.jpg');
// var unicorn = new Images('unicorn', 'img/unicorn.jpg');
// var usb = new Images('usb', 'img/usb.gif');
// var watercan = new Images('watercan', 'img/water-can.jpg');
// var wineglass = new Images('wineglass', 'img/wine-glass.jpg');

var imageOne = document.getElementById('image-one');
var imageTwo = document.getElementById('image-two');
var imageThree = document.getElementById('image-three');

function randNumGenerator() {
  while (true) {
    var randNumOne = Math.floor(Math.random() * 20);
    var randNumTwo = Math.floor(Math.random() * 20);
    var randNumThree = Math.floor(Math.random() * 20);

    if (randNumOne !== randNumTwo && randNumThree !== randNumOne && randNumThree !== randNumTwo) {
      if (randNumOne !== randNumSet[0] && randNumOne !== randNumSet[1] && randNumOne !== randNumSet[2] && randNumTwo !== randNumSet[0] && randNumTwo !== randNumSet[1] && randNumTwo !== randNumSet[2]  && randNumThree !== randNumSet[0] && randNumThree !== randNumSet[1] && randNumThree !== randNumSet[2]) {

        randNumSet[0] = randNumOne;
        randNumSet[1] = randNumTwo;
        randNumSet[2] = randNumThree;
        console.log('ran num set: ', randNumSet);

        shownImages.push(randNumOne, randNumTwo, randNumThree);

        break;
      }
    }
  }
}

function randomImgOnDom() {
  imageOne.src = (allImageObjects[randNumSet[0]]).path;
  imageTwo.src = (allImageObjects[randNumSet[1]]).path;
  imageThree.src = (allImageObjects[randNumSet[2]]).path;
}

function clickImage() {
  imageOne.onclick = function() {
    var srcAttr = this.getAttribute('src');
    chosenImages.push(srcAttr.split('.')[0].split('/')[1]);
    refreshedImages();
  };

  imageTwo.onclick = function() {
    var srcAttr = this.getAttribute('src');
    chosenImages.push(srcAttr.split('.')[0].split('/')[1]);
    refreshedImages();
  };

  imageThree.onclick = function() {
    var srcAttr = this.getAttribute('src');
    chosenImages.push(srcAttr.split('.')[0].split('/')[1]);
    refreshedImages();
  };
  console.log('chosen images arr:', chosenImages);
  console.log('chosen images length:',chosenImages.length);
}

function refreshedImages() {

  if (counter === 25) {
    alert('done');

  } else {
    randNumGenerator();
    randomImgOnDom();
    clickImage();
    counter++;
    console.log('outside of scope:', counter);
    console.log('shown images', shownImages);
  }
}

instantiateImages();
console.log(allImageObjects);
randNumGenerator();
randomImgOnDom();
clickImage();
