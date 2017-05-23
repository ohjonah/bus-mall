'use strict';

var counter = 1;
var randNumSet = [];
var clickedImages = [];
var shownImages =[];

var allImages = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dogduck', 'dragon', 'pen', 'petsweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'watercan', 'wineglass'];

var allImageObjects = [];

function Images(name, path) {
  this.name = name;
  this.path = path;
  this.clicked = 0;
  this.shown = 0;
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
    clickedImages.push(srcAttr.split('.')[0].split('/')[1]);
    refreshedImages();
  };

  imageTwo.onclick = function() {
    var srcAttr = this.getAttribute('src');
    clickedImages.push(srcAttr.split('.')[0].split('/')[1]);
    refreshedImages();
  };

  imageThree.onclick = function() {
    var srcAttr = this.getAttribute('src');
    clickedImages.push(srcAttr.split('.')[0].split('/')[1]);
    refreshedImages();
  };
  console.log('clicked images arr:', clickedImages);
  console.log('clicked images length:',clickedImages.length);
}

function refreshedImages() {

  if (counter === 25) {
    alert('done');
    clickedImageIndexConverter();

  } else {
    randNumGenerator();
    randomImgOnDom();
    clickImage();
    counter++;
    console.log('shown images:', shownImages);
  }
}

function clickedImageIndexConverter() {
  for (var i = 0; i < clickedImages.length; i++) {
    clickedImages[i] = allImages.indexOf(clickedImages[i]);
  }
  clickedImageCalc();
}

function clickedImageCalc() {
  for (var i = 0; i < clickedImages.length; i++) {
    allImageObjects[clickedImages[i]].clicked++;
  }
}

function shownImagesCalc() {
  for (var i = 0; i < shownImages.length; i++) {
    all
  }
}

instantiateImages();
randNumGenerator();
randomImgOnDom();
clickImage();
