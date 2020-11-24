//var inputName;
function onClick(data) {
  
  
  var inputName = document.getElementById("textinput").value;
  var mytextbox = "my textbox element";
  var count = 0; 
  var keyPressed;
  getPrintData(inputName);
  


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

function getPrintData(input){
/ Using this doc: https://polygon.io/docs/get_v2_reference_tickers_anchor
  input.toUpperCase();
  
  //URL with User specified stock name
  var url = 'https://api.polygon.io/v2/reference/financials/' + input + '?limit=5&apiKey=e7AX6gnz3TFpOnM77kBd3kFiOH6EBqIY';

  //To use the url with the users specified url delete url in the loadJSON (below) and change to variable url
  //Currently doesnt work so i changed it to the original url with APPL stock by default
  
loadJSON("https://api.polygon.io/v2/reference/financials/AAPL?limit=5&apiKey=e7AX6gnz3TFpOnM77kBd3kFiOH6EBqIY",
         function(data) { 
          var ticker = data.results[0].ticker;
          var date = data.results[0].calendarDate;
          var reportPeriod = data.results[0].reportPeriod;
          var assets = data.results[0].assets;
          var dividendYield = data.results[0].dividendYield;
          var returnOnAverageAssets = data.results[0].returnOnAverageAssets;
          var shares = data.results[0].shares;
  
         
  
          console.log(ticker);
          console.log(date);
          console.log(reportPeriod);
          console.log(assets);
          console.log(dividendYield);
          console.log(returnOnAverageAssets);
  
 var div = document.createElement("div");          
  
    //document.body.style.backgroundColor = "blue";
      div.innerHTML =  "<div style='text-align:left' id= 'stockInfo'>" + "<h1>You Searched :" + input + " : </h1>" 
       + "<p> <li>Ticker: " + ticker + "</li>" 
       + "<li> date: " + date + "</li>"
       + "<li> report period: " + reportPeriod + "</li>"
       + "<li> assets: " + assets + "</li>"
       + "<li> dividend yield " + dividendYield + "</li>"
       + "<li> return on average assets: " + returnOnAverageAssets + "</li>"
       + "<li> shares: " + shares + "</li>"
       + "</p>" + "<br/>" + "<br/>" + "</div>" //"<img class= 'box2' src='https://cdn.lowgif.com/small/26edd87471bfb83d-animated-gif-transparent-background-5-gif-images-download.gif'/>"
  
  document.body.appendChild(div)
          },
         function(xhr) { console.error(xhr); }
);
}
