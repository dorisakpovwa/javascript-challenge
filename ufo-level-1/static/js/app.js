// from data.js
var ufoData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO data from data.js
// console.log(data);

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

