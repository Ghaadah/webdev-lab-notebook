// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
let userInput = document.querySelector("#userInput1");
let copy = document.querySelector("#copy");
let output = document.querySelector("#output");

// add an event listener on the target element

copy.addEventListener("click", handleClick);

// callback function to handle event
function handleClick(event) {
  output.textContent = userInput.value;
}
////////////////////////////////////////////////////////////////
// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
let userInput2 = document.querySelector("#userInput2");
// add an event listener on the target element
userInput2.addEventListener("input", handleInput);

// we need to create the element as the html doesn't have element for the output
let element = document.createElement("div");
//I need to query the html to append the element to it
let section = document.querySelector("#inputEventExample");
section.append(element);
// set a class for fomating, we already have class output that we may use for the new element
element.setAttribute("class", "#output");

// callback function to handle event
function handleInput() {
  element.textContent = userInput2.value;
}
