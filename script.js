// Javascript to be added

if ( window.addEventListener ) {
  var state = 0, konami = [38,38,40,40,37,39,37,39,66,65];
  window.addEventListener("keydown", function(e) {
    if ( e.keyCode == konami[state] ) state++;
    else state = 0;
    if ( state == 10 )
      window.location = "http://www.go4expert.com";  //you can write your own code here
    }, true);
}
