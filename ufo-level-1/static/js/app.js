// from data.js assign data to a descriptive variable
var ufoData = data;
// select the button
var button = d3.select ("#filter-btn");
// select the form
var form = d3.select ("#form");
// create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

var filteredData = null;
// select table
var tbody = d3.select("tbody");
// complete the event handler function for the form
function Buildtable(data) { 
// remove any data from the table
 tbody.html("")
  // Console.log the UFO data from data.js
   console.log(data);
   // Step 1: Loop Through `ufoData` and console.log each UFO object
   // Step 2:  Use d3 to append one table row `tr` for each UFO object
  data.forEach((item) => {
      var row = tbody.append("tr");
      row.append("td").text(item["datetime"]);
      row.append("td").text(item["city"]);
      row.append("td").text(item["state"]);
      row.append("td").text(item["country"]);
      row.append("td").text(item["shape"]);
      row.append("td").text(item["durationMinutes"]);
      row.append("td").text(item["comments"]);
      console.log(item);
   });
  }
function runEnter() {
// prevent the page from refreshing
d3.event.preventDefault();
// select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");
// Get the value property of the input element
var inputValue = inputElement.property("value");
console.log(inputValue);
//console.log(ufoData);
// create a custom function to return dates that match user input
var datelist = ufoData;
function dates(datelist) {
  for (var i=0; i < datelist.length; i++) {
    var result = console.log(datelist[i]);
  }
  return result
}
filteredData = ufoData.filter(ufoDate => ufoDate.datetime === inputValue);
console.log(filteredData);

Buildtable(filteredData);
}
// Get a reference to the table body
Buildtable(ufoData);