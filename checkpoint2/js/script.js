'use strict';

//I was not successful in getting this to work. Tried a few different things
//without any luck and just left it as it was, sorry. Ideally it would get
//element from ID of smileyMain, which is the big smiley, and then display
//the number of clicks from that to the button. Didn't quite work out that way.


var button = document.getElementById("smileyMain"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "Click the nerd: " + count;
};
