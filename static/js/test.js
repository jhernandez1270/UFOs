// grab references to the input element and the output div
let dateEntered = d3.select("#datetime");
let cityEntered = d3.select("#city");
let stateEntered = d3.select("#state");
let countryEntered = d3.select("#country");
let shapeEntered = d3.select("#shape");
// let text = d3.selectAll("text");
let output = d3.select(".output");


// Function to handle input change
function handleChange(event) {
  // grab the value of the input field
  let element = d3.event.target;
  let inputText = element.value;
  let inputID = element.id;
//   let inputText = d3.event.target.value;
//   let inputID = d3.event.target.id;
  console.log(element)
  console.log(inputText)
  console.log(inputID)


}

dateEntered.on("change", handleChange);
cityEntered.on("change", handleChange);
stateEntered.on("change", handleChange);
countryEntered.on("change", handleChange);
shapeEntered.on("change", handleChange);
// text.on("change", handleChange);
