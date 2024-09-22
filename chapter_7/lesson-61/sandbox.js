const form = document.querySelector(".signup-form");
// const username = document.querySelector('#username'); // Long way to access the input field

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(username.value); //Access the value via the input field
  // form.username //We do not need to reference the input field(// const username = document.querySelector('#username');
  console.log(form.username.value); //This accesses the input field from the form ang gets the value from it
  //This can be done both via ID and name attributes.
});

// This has to run inside the function to use the submit event

// testing RegEx
const username = "shaunyp";
const pattern = /^[a-z]{6,}$/;

// let result = pattern.test(username);

// if(result){
//   console.log('regex test passed :)');
// } else {
//   console.log('regex test failed :(');
// }

let result = username.search(pattern);

console.log(result);
