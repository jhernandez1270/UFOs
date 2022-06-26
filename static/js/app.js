// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var dateEntered = d3.select("#datetime");
var cityEntered = d3.select("#city");
var stateEntered = d3.select("#state");
var countryEntered = d3.select("#country");
var shapeEntered = d3.select("#shape");

var filters = {};


// 3. Use this function to update the filters. 
function updateFilters(event) {

    // 4a. Save the element that was changed as a variable.
    let element = d3.event.target;
    console.log(element);


    // 4b. Save the value that was changed as a variable.
    let inputValue = element.value;
    console.log(inputValue);
    

    // 4c. Save the id of the filter that was changed as a variable.
    let filterID = element.id;
    console.log(filterID);

  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (inputValue) {
      filters[filterID] = inputValue;
    } else {
      // filters[filterID] = "";
      delete(filters[filterID]);
    }
    console.log("filters obj: ");
    console.log(filters);
 
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable(filters);
    console.log("Calling Filter Table function")
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable(filters) {
  
    // 8. Set the filtered data to the tableData.
    let filteredData = tableData;
    console.log("setting filteredData")
    console.log("passed in filters variable: ");
    console.log(filters);
    
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    Object.entries(filters).forEach(([key, value]) => {
      console.log("KEY: " + key);
      console.log("VAL: " + value);
      filteredData = filteredData.filter(row => row[key] === value);
      // filteredData = filteredData.filter(row => console.log(row[key]));
      console.log(filteredData);
      // let li = output.append("li").text(`${key}: ${value}`);
    });
    console.log("looping through each key,value in filters")
    
  
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
    console.log("Calling build table function")
  }
  
  // 2. Attach an event to listen for changes to each filter
dateEntered.on("change", updateFilters);
cityEntered.on("change", updateFilters);
stateEntered.on("change", updateFilters);
countryEntered.on("change", updateFilters);
shapeEntered.on("change", updateFilters);
  
  
  // Build the table when the page loads
  buildTable(tableData);
  console.log("Initial buildTable")
