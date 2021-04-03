// from data.js assign data to a descriptive variable
var ufoData = data;
// select the button
var button = d3.select ("#button");
// select the form
var form = d3.select ("#form");
// create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);
// complete the event handler function for the form
function runEnter() {
// prevent the page from refreshing
d3.event.preventDefault();
// select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");
// Get the value property of the input element
var inputValue = inputElement.property("value");
console.log(inputValue);
console.log(ufoData);
var filteredData = ufoData.filter(dateTime => dateTime.datetime === inputValue);
console.log(filteredData);
}
// Get a reference to the table body
var tbody = d3.select("tbody");
// Console.log the UFO data from data.js
 console.log(ufoData);
 // Step 1: Loop Through `ufoData` and console.log each UFO object
 // Step 2:  Use d3 to append one table row `tr` for each UFO object
ufoData.forEach((item) => {
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

 //  console.log(item);

