// from data.js
var tableData = data;

//reference to the table body
var tbody = d3.select("tbody");

//select button
var button = d3.select("#filter-btn");
//select form
var form = d3.select("#form");

//create event handlers
button.on("click", filterData);
form.on("submit", filterData);

//loop through data
data.forEach(function(UFOdata){
    var row = tbody.append("tr");
    Object.entries(UFOdata).forEach(function([key, value]) {
    //Append a cell to the row for each value
    // in the UFO data object
    var cell = row.append("td");
    cell.text(value);
    });
})

//create event handler function
function filterData() {
    //prevent the page from refreshing
    d3.event.preventDefault();

    //select input
    var inputElement = d3.select("#datetime");

    //get value of element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    
    //filter data
    var filter = tableData.filter(tableData => tableData.datetime === inputValue)

    //remove current data when filtering
    tbody.html("");

    //populate back to full when no value is filtered
    if (inputValue == "") {
        data.forEach(function(UFOdata){
            var row = tbody.append("tr");
            Object.entries(UFOdata).forEach(function([key, value]) {
            //Append a cell to the row for each value
            // in the UFO data object
            var cell = row.append("td");
            cell.text(value);
            });
        })
    }
    else{
    //add new filtered data
    filter.forEach(function(UFOdata){
        var row = tbody.append("tr");
        Object.entries(UFOdata).forEach(function([key, value]) {
        //Append a cell to the row for each value
        // in the UFO data object
        var cell = row.append("td");
        cell.text(value);
        });
    })}
    

};