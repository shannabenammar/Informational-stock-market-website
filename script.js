function myKeyPress(e) {
  
  /* TODO1: retrieve the value from the text input */
  var inputNum = document.getElementById("textinput").value;
  var mytextbox = "my textbox element";
  var count = 0; // for 3
  var keyPressed;
  
  if (window.event) {
    // IE
    keyPressed = e.keyCode;
  } else if (e.which) {
    // Netscape/Firefox/Opera
    keyPressed = e.which;
  }


}
