function myKeyPress(e) {
  
  /* TODO1: retrieve the value from the text input */
  var inputName = document.getElementById("textinput").value;
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
function loadJSON(path, success, error){
  
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}

// Using this doc: https://polygon.io/docs/get_v2_reference_tickers_anchor

loadJSON('https://api.polygon.io/v2/reference/financials/AAPL?limit=5&apiKey=e7AX6gnz3TFpOnM77kBd3kFiOH6EBqIY',
         function(data) { 
          var ticker = data.results[0].ticker;
          var date = data.results[0].calendarDate;
          var reportPeriod = data.results[0].reportPeriod;
          var assets = data.results[0].assets;
          var dividendYield = data.results[0].dividendYield;
          var returnOnAverageAssets = data.results[0].returnOnAverageAssets;
          var tempMax = data.main.temp_max;
          var tempMin = data.main.temp_min;
          var humidty = data.main.humidity;
          var pressure = data.main.pressure;
          var windSpeed = data.wind.speed;
  
          console.log(data);
          console.log(cityName);
          console.log(weatherDes);
          console.log(latCoord);
          console.log(longCoord);
          console.log(temp);
          console.log(tempFeel);
          console.log(tempMax);
          console.log(tempMin);
          console.log(humidty);
          console.log(pressure);
          console.log(windSpeed);
  
     document.body.style.backgroundColor = "blue";
     document.body.innerHTML = "<h1>The weather for " + cityName + " : </h1>" 
       + "<p> <li>Expected: " + weatherDes + "</li>" 
       + "<li> Latitude coordinate: " + latCoord + "</li>"
       + "<li> Longitude coordinate: " + longCoord + "</li>"
       + "<li> Tempature: " + Math.floor((((temp-273.15)*1.4)+32)) + "</li>"
       + "<li> Feels like: " + Math.floor((((tempFeel-273.15)*1.4)+32)) + "</li>"
       + "<li> Max Tempature: " + Math.floor((((tempMax-273.15)*1.4)+32)) + "</li>"
       + "<li> Min Tempature: " + Math.floor((((tempMin-273.15)*1.4)+32)) + "</li>"
       + "<li> Humidity: " + humidty + "%</li>"
       + "<li> Pressure: " + pressure + "</li>"
       + "<li> Wind Speed: " + windSpeed + "</li>"
       + "</p>" + "<br/>" + "<br/>" + "<img class= 'box2' src='https://cdn.lowgif.com/small/26edd87471bfb83d-animated-gif-transparent-background-5-gif-images-download.gif'/>"
  
          },
         function(xhr) { console.error(xhr); }
);