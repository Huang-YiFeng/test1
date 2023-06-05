document.write("HELLO My name is 黃浥鳳 ")
document.write("Follow me")
var count = 0;
    var counterElement = document.getElementById("counter");

    function increment() {
      count+=2;
      counterElement.textContent = count;
    }