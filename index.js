function theBeatlesPlay(musicians, instruments) {
  var beatlesArray = [];
  musicians;
  for (var i = 0; i < musicians.length; i++) {
    beatlesArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return beatlesArray;
}

function johnLennonFacts(johnLennonFactsArray){
 var factsArray = [];
  var i = 0;
while (i < johnLennonFactsArray.length) {
   factsArray.push(johnLennonFactsArray[i] + "!!!");
   i++;
  }
  return factsArray;
}

function iLoveTheBeatles(number) {
  var iLoveTheBeatlesArray = [];
  var i = 0;
  do {iLoveTheBeatlesArray.push("I love the Beatles!");
    i++;
  }
   while(i < 16);
}