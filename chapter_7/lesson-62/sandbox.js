const form = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //Validation
  const username = document.querySelector("#username").value;
  // const username = form.username.value;
  const usernamePattern = /^[a-zA-Z]{6,12}$/;
  if (usernamePattern.test(username)) {
    // Valid feedback
    feedback.textContent = "Username is valid!";
  } else {
    //invalid feedback
    feedback.textContent =
      "Username must be between 6 and 12 characters long and can only contain letters.";
  }
});
