// Java Script Challenge _ UFO Sightings


// Assign the data from `data.js` to a descriptive variable
var tableData = data;


// use D3 to select the html element that references the tablebody in html
var tbody = d3.select("tbody");


// create a function to build the table with certain data
function BuildTable(data) {
    tbody.html("");
    data.forEach((sighting) => {
        var row = tbody.append("tr"); 
        Object.entries(sighting).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    }); 
}; 
BuildTable(tableData);

//get reference to the button on the html page with id#
var button = d3.select("#filter-btn");

// Create an event handler to listen for the event of the button being clicked on the table
button.on("click", runEnter);


//trigger a function called runEnter when the button is clicked
function runEnter() {
    
    d3.event.preventDefault();
    
    var inputElement = d3.select("#datetime");
    
    var inputValue = inputElement.property("value");
    
    let sightings = tableData;
    
    var filterData = sightings.filter(sighting => sighting.datetime === inputValue);
    
    BuildTable(filterData);
}; 





