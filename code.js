// To run this assignment, right click on index.html in the Visual Studio file explorer to the left
// and select "Open with Live Server"

// Your Code Here.

// variables
let submitButton = document.querySelector("#submit-button");

// let submitButton = document.querySelector("button");

// event listeners
submitButton.addEventListener("click", submitForm);

// functions
function submitForm(event) {
  event.preventDefault();

  // grabbing input elements and their values
  let nameInput = document.querySelector("#name_input");
  let emailInput = document.querySelector("#email_input");
  let messageInput = document.querySelector("#message_input");
  let nameValue = nameInput.value;
  let emailValue = emailInput.value;
  let messageValue = messageInput.value;

  // alert the user with response
  alert(`${nameValue} said ${messageValue}: reach them at ${emailValue}`);

  // to refresh our form
  // nameInput.value = "";
  // emailValue.value = "";
  // messageInput.input = "";
}

