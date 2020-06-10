let errorNumber = "Please enter the number of quotes";

const quoteButton = document.getElementById("btn-lg");
const quote_display = document.getElementById("quoteDisplay");
const radioButtons = document.getElementsByName("quote_types");
const quote_num = document.getElementById("number_quotes");
const errors = document.getElementById("error");
const container = document.querySelector(".wrapper");
const printMoreButton = document.createElement("button");
const quit = document.createElement("button");

printMoreButton.classList.add("button");
quit.classList.add("button");

/*
 Function to get the value of the radio button that is checked and return it
 */
function getRadioResult() {
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      return radioButtons[i].value;
    }
  }
}
/*
 Function to display the quote depending on the value of radio button that is checked
 */
function displayQuotes(radioResult) {
  if (radioResult === "successValue") {
    quote_display.innerHTML += success.print() + "<br>" + "<hr>";
  } else {
    quote_display.innerHTML += life.print() + "<br>" + "<hr>";
  }
}

/*
 Select the number of quotes to be printed and print messages if errors
 Run a for loop for the number the user has input and run the displayQuotes function that multiple times
 */

function generateMoreQuotes(radioResult) {
  let num_quotes = quote_num.value;
  errors.className = "error";
  if (!num_quotes) {
    errors.innerHTML = errorNumber;
  } else {
    errors.innerHTML = "";
    for (let i = 0; i < quote_num.value; i++) {
      displayQuotes(radioResult);
    }

    quote_num.value = "";
    container.appendChild(printMoreButton);
    container.appendChild(quit);
    quit.innerHTML = "Quit";
    printMoreButton.innerHTML = "Print more quotes";
    quoteButton.remove();
  }
}

/*
printMoreButton resets the quotes displayed and number of quotes making the user to input number of quotes  
and generate more quotes
*/
printMoreButton.addEventListener("click", () => {
  quote_display.innerHTML = "";
  quoteButton.innerHTML = "New quote";
  container.appendChild(quoteButton);
  quit.remove();
  printMoreButton.remove();
});

/*
quit is a button that calls the function closeWindow that prompts the user if he wants to close the window 
or to continue generating more quotes
*/
quit.addEventListener("click", () => {
  closeWindow();
});

//closing the window or continue generating quotes
function closeWindow() {
  if (confirm("Do you really want to close the window and exit the program?")) {
    close();
  }
}

/*
 event listener on click that gets the value of the radio button and stores it in a variable
 this is then passed to the generateMoreQuotes function so that we know which quote to print
 as this value is then passed down to the displayQuotes function
 */
quoteButton.addEventListener("click", (e) => {
  e.preventDefault();
  let radioResult = getRadioResult();
  generateMoreQuotes(radioResult);
});
