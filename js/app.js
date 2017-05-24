'use strict';

var counter = 1;
var randNumSet = [];
var clickedImages = [];
var shownImages =[];

var allImages = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dogduck', 'dragon', 'pen', 'petsweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'watercan', 'wineglass'];

var instantiatedImages = [];

function Images(name, path) {
  this.name = name;
  this.path = path;
  this.clicked = 0;
  this.shown = 0;
}

function instantiateImages() {
  for (var i = 0; i < allImages.length; i++) {
    if (allImages[i] !== 'sweep' && allImages[i] !== 'usb') {
      instantiatedImages.push(new Images(allImages[i], 'img/' + allImages[i] + '.jpg'));

    } else if (allImages[i] === 'sweep') {
      instantiatedImages.push(new Images(allImages[i], 'img/' + allImages[i] + '.png'));

    } else if (allImages[i] === 'usb') {
      instantiatedImages.push(new Images(allImages[i], 'img/' + allImages[i] + '.gif'));
    }
  }
}

// captures DOM elements
var imageOne = document.getElementById('image-one');
var imageTwo = document.getElementById('image-two');
var imageThree = document.getElementById('image-three');
var results = document.getElementById('results');

// makes and displays chart
var canvas = document.getElementById('chart');
var ctx = canvas.getContext('2d');


// non-repeating random number generator
function randNumGenerator() {
  var flag = false;

  while (flag !== true) {
    var randNumOne = Math.floor(Math.random() * 20);
    var randNumTwo = Math.floor(Math.random() * 20);
    var randNumThree = Math.floor(Math.random() * 20);

    if (randNumOne !== randNumTwo && randNumThree !== randNumOne && randNumThree !== randNumTwo) {
      if (randNumOne !== randNumSet[0] && randNumOne !== randNumSet[1] && randNumOne !== randNumSet[2] && randNumTwo !== randNumSet[0] && randNumTwo !== randNumSet[1] && randNumTwo !== randNumSet[2]  && randNumThree !== randNumSet[0] && randNumThree !== randNumSet[1] && randNumThree !== randNumSet[2]) {

        randNumSet[0] = randNumOne;
        randNumSet[1] = randNumTwo;
        randNumSet[2] = randNumThree;

        shownImages.push(randNumOne, randNumTwo, randNumThree);
        flag = true;

        break;
      }
    }
  }
}

// assigns random number to array position
function randomImgOnDom() {
  imageOne.src = (instantiatedImages[randNumSet[0]]).path;
  imageTwo.src = (instantiatedImages[randNumSet[1]]).path;
  imageThree.src = (instantiatedImages[randNumSet[2]]).path;
}

// action attached to click
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
}

// conditional to see if it has user has selected 25 pictures
function refreshedImages() {

  if (counter === 25) {
    removeEventHandler();
    clickedImageIndexConverter();
    chartIndividualVotes();
    appendToDOM();
  } else {
    randNumGenerator();
    randomImgOnDom();
    clickImage();
    counter++;
  }
}

// converts array of clicked images as strings to index numbers
function clickedImageIndexConverter() {
  for (var i = 0; i < clickedImages.length; i++) {
    clickedImages[i] = allImages.indexOf(clickedImages[i]);
  }
  clickedImageCalc();
}

// increments images selected by user
function clickedImageCalc() {
  for (var i = 0; i < clickedImages.length; i++) {
    instantiatedImages[clickedImages[i]].clicked++;
  }
  shownImagesCalc();
}

// increments shown property
function shownImagesCalc() {
  for (var i = 0; i < shownImages.length; i++) {
    instantiatedImages[shownImages[i]].shown++;
  }
  clickShownPercent();
}

// ratio of clicked images to how many times it was displayed
function clickShownPercent() {
  for (var i = 0; i < instantiatedImages.length; i++) {
    instantiatedImages[i].clickThrough = ((instantiatedImages[i].clicked/instantiatedImages[i].shown)*100) + '%';
  }
  clickOverallClickPercent();
}

// ratio of how many times it was clicked for all images displayed
function clickOverallClickPercent() {
  for (var i = 0; i < instantiatedImages.length; i++) {
    instantiatedImages[i].overallClickRate = ((instantiatedImages[i].clicked/shownImages.length)*100) + '%';
  }
  save();
}

function chartIndividualVotes() {
  var clickedData = [];
  var clickShownData = [];

  for (var i = 0; i < instantiatedImages.length; i++) {
    clickedData.push(instantiatedImages[i].clicked);
    clickShownData.push(instantiatedImages[i].shown);
  }

  var chart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: allImages,
      datasets: [{
        label: 'Individual Votes per Product',
        data: clickShownData,
        backgroundColor: ['#C051FF', '#F4FF57', '#23E8D3', '#C051FF', '#F4FF57', '#23E8D3','#C051FF', '#F4FF57', '#23E8D3','#C051FF', '#F4FF57', '#23E8D3','#C051FF', '#F4FF57', '#23E8D3','#C051FF', '#F4FF57', '#23E8D3','#C051FF', '#F4FF57', '#23E8D3','#C051FF', '#F4FF57', '#23E8D3', '#C051FF']
      }],
    },
    options: {}
  });
}

function save() {
  localStorage.instantiatedImages = JSON.stringify(instantiatedImages);
  console.log('list array:', instantiatedImages);
  console.log('localStorage List', localStorage.instantiatedImages);
}

// removes event handler
function removeEventHandler() {
  imageOne.onclick = null;
  imageTwo.onclick = null;
  imageThree.onclick = null;
}

// appends results to DOM
function appendToDOM() {
  var listArr = [];

  for (var i = 0; i < instantiatedImages.length; i++) {
    listArr.push('<li>' + 'The picture: ' + instantiatedImages[i].name + ' received ' + instantiatedImages[i].clicked + ' clicks.' + '</li>');
  }
  results.innerHTML = listArr.join('');
}

instantiateImages();
randNumGenerator();
randomImgOnDom();
clickImage();
