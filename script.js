//var inputName;
function onClick(data) {
  var inputName = document.getElementById("textinput").value;
  var mytextbox = "my textbox element";
  var count = 0;
  var keyPressed;
  getPrintData(inputName);
}
function loadJSON(path, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        if (success) success(JSON.parse(xhr.responseText));
      } else {
        if (error) error(xhr);
      }
    }
  };
  xhr.open("GET", path, true);
  xhr.send();
}

function getPrintData(input) {
  // Using this doc: https://polygon.io/docs/get_v2_reference_tickers_anchor
  input.toUpperCase();

  //URL with User specified stock name
  var url =
    "https://api.polygon.io/v2/reference/financials/" +
    input +
    "?limit=5&apiKey=e7AX6gnz3TFpOnM77kBd3kFiOH6EBqIY";

  //To use the url with the users specified url delete url in the loadJSON (below) and change to variable url
  //Currently doesnt work so i changed it to the original url with APPL stock by default

  loadJSON(
    url,
    function(data) {
      var ticker =
        "<span class='apireturn'>" + data.results[0].ticker + "</span>";
      var date =
        "<span class='apireturn'>" + data.results[0].calendarDate + "</span>";
      var reportPeriod =
        "<span class='apireturn'>" + data.results[0].reportPeriod + "</span>";
      var assets =
        "<span class='apireturn'>" + data.results[0].assets + "</span>";
      var dividendYield =
        "<span class='apireturn'>" + data.results[0].dividendYield + "</span>";
      var returnOnAverageAssets =
        "<span class='apireturn'>" +
        data.results[0].returnOnAverageAssets +
        "</span>";
      var shares =
        "<span class='apireturn'>" + data.results[0].shares + "</span>";

      console.log(ticker);
      console.log(date);
      console.log(reportPeriod);
      console.log(assets);
      console.log(dividendYield);
      console.log(returnOnAverageAssets);

      var div = document.createElement("div");

      //document.body.style.backgroundColor = "blue";

      div.innerHTML =
        "<div style='text-align:left; margin-top: -140px; margin-bottom: 100px;' id= 'stockInfo'>" +
        "<span id='jstitle'>" +
        "<h1>You Searched: " +
        input +
        " </h1>" +
        "</span>" +
        "<span class='js'>" +
        "<p> <li>Ticker: " +
        ticker +
        "</li>" +
        "</span>" +
        "<span class='js'>" +
        "<li> date: " +
        date +
        "</li>" +
        "</span>" +
        "<span class='js'>" +
        "<li> report period: " +
        reportPeriod +
        "</li>" +
        "</span>" +
        "<span class='js'>" +
        "<li> assets: " +
        assets +
        "</li>" +
        "</span>" +
        "<span class='js'>" +
        "<li> dividend yield " +
        dividendYield +
        "</li>" +
        "</span>" +
        "<span class='js'>" +
        "<li> return on average assets: " +
        returnOnAverageAssets +
        "</li>" +
        "</span>" +
        "<span class='js'>" +
        "<li> shares: " +
        shares +
        "</li>" +
        "</span>" +
        "</p>" +
        "<br/>" +
        "<br/>" +
        "</div>"; //"<img class= 'box2' src='https://cdn.lowgif.com/small/26edd87471bfb83d-animated-gif-transparent-background-5-gif-images-download.gif'/>"

      document.body.appendChild(div);
    },
    function(xhr) {
      console.error(xhr);
    }
  );
}
