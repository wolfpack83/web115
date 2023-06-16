// Josh Macy WEB 115
// JavaScript code for form validation

// Retrieve the input field value
let inputId = document.getElementById('inputField');
let myForm = document.getElementById('myForm');

// Regular expression pattern for alphanumeric input
let validInput = /^[a-zA-Z0-9]*$/;

myForm.addEventListener('submit', function (e) {
  // Prevent form from submitting
  e.preventDefault();
  let inputValue = inputId.value;
  // Check if the input value matches the pattern
 if (!validInput.test(inputValue)) {
    // Invalid input: display error message
    alert('Please enter only alphanumeric characters')
  } else if (inputValue == "") {
    alert('Please do not leave input field blank')
 } else {
    // Valid input: display confirmation and submit the form
    (alert('Valid input, successful submission!'))
    myForm.submit();
  }
})