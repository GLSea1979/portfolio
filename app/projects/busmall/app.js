var timesViewed = 0;
var timesSelected = 0;
var totalClicks = 0;
var selectedProduct = 0;
var itemsForSale = [];
var previouslyDisplayed = [];
var chartSelected = [];
var chartViewed = [];
var percentageSelected = [];
var myStorage = [];
var leftRandom = 0;
var centerRandom = 0;
var rightRandom = 0;
var resultsToggle = 2;
var chartToggle = 2;
var left = document.getElementById('left');
var right = document.getElementById('right');
var center = document.getElementById('center');
var selection = document.getElementById('selection');
var results = document.getElementById('results');
var productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'usb', 'unicorn', 'water-can', 'wine-glass'];

// ******************************* constructor ***********************************************
function Product(productName) {
  this.productName = productName;
  this.path = 'img/' + productName + '.jpg';
  this.timesViewed = 0;
  this.timesSelected = 0;
  itemsForSale.push(this);
}
// **************************** create 3 random numbers that don't repeat each other or previous groups *****
function randomizeNumber() {
  leftRandom = Math.floor(Math.random() * 20);
  while (previouslyDisplayed.indexOf(leftRandom) > -1) {
    leftRandom = Math.floor(Math.random() * 20);
  }
  previouslyDisplayed.push(leftRandom);
  centerRandom = Math.floor(Math.random() * 20);
  while (previouslyDisplayed.indexOf(centerRandom) > -1) {
    centerRandom = Math.floor(Math.random() * 20);
  }
  previouslyDisplayed.push(centerRandom);
  rightRandom = Math.floor(Math.random() * 20);
  while (previouslyDisplayed.indexOf(rightRandom) > -1) {
    rightRandom = Math.floor(Math.random() * 20);
  }
  previouslyDisplayed.push(rightRandom);
}
// ***************************clear first 12 items in previouslyDisplayed array *************
function cleanUpArray() {
  if (previouslyDisplayed.length > 15) {
    for (var i= 0; i < 12; i++) {
      previouslyDisplayed.shift();
    }
  }
}
// ************************ three  random images onto screen **************
function putImageOnPage() {

  left.src = itemsForSale[leftRandom].path;
  itemsForSale[leftRandom].timesViewed += 1;
  center.src = itemsForSale[centerRandom].path;
  itemsForSale[centerRandom].timesViewed += 1;
  right.src = itemsForSale[rightRandom].path;
  itemsForSale[rightRandom].timesViewed += 1;
}
// ***************************** tally selected pics ***********************
function tallySelectedPic() {
  if (selectedProduct === 'left') {
    itemsForSale[leftRandom].timesSelected += 1;
  }
  if (selectedProduct === 'center') {
    itemsForSale[centerRandom].timesSelected += 1;
  }
  if (selectedProduct === 'right') {
    itemsForSale[rightRandom].timesSelected += 1;
  }
}
//********************************** Hide the list **********************
function hideList() {
  document.getElementById('results').hidden = true;
  document.getElementById('chart').hidden = true;
}
// ************************* Make a finished list ************************
function makeFinalList() {
  for (var i = 0; i < itemsForSale.length; i++) {
    var finalList = document.getElementById('piclist');
    var liEl = document.createElement('li');
    liEl.textContent = itemsForSale[i].productName + ' picked: ' + itemsForSale[i].timesSelected + ' of ' + itemsForSale[i].timesViewed + ' views. Chosen ' + percentageSelected[i] + '% of views.'
    finalList.appendChild(liEl);
  }

}
// ****************************** build data arrays for chart **********
function insertChartData() {
  for (var i = 0; i < itemsForSale.length; i++) {
    chartSelected[i] = itemsForSale[i].timesSelected;
    chartViewed[i] = itemsForSale[i].timesViewed;
    percentageSelected[i] = Math.round(itemsForSale[i].timesSelected/itemsForSale[i].timesViewed * 100) / 100;
  }
}
 // ******************** Event Handler ********************************
function handleSelectionSubmit(event) {
  event.preventDefault();
  totalClicks += 1;
  selectedProduct = event.target.id;
  if (selectedProduct === 'selection') {
    return alert('Sorry, that was not a valid selection.')
  }
  tallySelectedPic();
  localStorage.myStorage = JSON.stringify(itemsForSale);
  checkTotalClicks();
  cleanUpArray();
  randomizeNumber();
  putImageOnPage();
}
 // ************************** Show Hide Handler **************************
function showHideHandler(event) {
  event.preventDefault();
  var hideOrShow = event.target.id;
  if (hideOrShow === 'choicebar') {
    return alert('Sorry, that was not a valid choice.')
  }
  if (hideOrShow === 'results') {
    resultsToggle +=1;
    toggleResults();
  }
  if (hideOrShow === 'chart') {
    chartToggle += 1;
    toggleChart();
  }
}
// ******************** toggle the list and chart ***********************
function toggleResults() {
  var checkup = resultsToggle % 2;
  document.getElementById('piclist').hidden = true;
  if (checkup === 0) {
    document.getElementById('piclist').hidden = false;
  }
}
function toggleChart() {
  var checkdown = chartToggle % 2;
  console.log(checkdown);

  document.getElementById('chartcontainer').style.display = 'none';
  if (checkdown === 0) {
    document.getElementById('chartcontainer').style.display = 'inline-block';
  }
}
// *********************** check the total clicks and do stop actions ****
function checkTotalClicks() {
  if (totalClicks > 24) {
    selection.removeEventListener("click", handleSelectionSubmit);
    document.getElementById('results').hidden = false;
    document.getElementById('chart').style.display = 'inline-block';
    choicebar.addEventListener("click", showHideHandler);
    insertChartData();
    makeFinalList();
    makeChart();

  }
}
//********************* instances **************************************
function createArray () {
  for (var i = 0; i < productNames.length; i++) {
    new Product(productNames[i])
    if (itemsForSale[i].productName === 'sweep') {
      itemsForSale[i].path = 'img/sweep.png';
    }
    if (itemsForSale[i].productName === 'usb') {
      itemsForSale[i].path = 'img/usb.gif';
    }
  }
}
// ********************************** starting chart trial ********************
function makeChart() {
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: productNames,
      datasets: [{
        label: 'Times Viewed',
        data: chartViewed,
        backgroundColor: 'rgba(11, 54, 124, 0.6)'
      }, {
        label: 'Times Selected',
        data: chartSelected,
        backgroundColor: 'rgba(29, 147, 13, 0.6)'
      }]
    }
  });
}

//**************************Local Storage***********************
if (!localStorage.myStorage) {
  createArray();
  console.log('no local');
} else {
  var tempDataHolder = localStorage.getItem('myStorage');
  var parseData = JSON.parse(tempDataHolder);
  itemsForSale = parseData;
}

//***************************************************************
// ************************** page load functions ***************************
hideList();
randomizeNumber();
putImageOnPage();
// ********************* Event Listener *********************************
selection.addEventListener("click", handleSelectionSubmit);
