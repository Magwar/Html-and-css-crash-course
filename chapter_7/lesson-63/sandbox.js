const form = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback");
const usernamePattern = /^[a-zA-Z]{6,12}$/;

// validation
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = form.username.value;

  if (usernamePattern.test(username)) {
    feedback.textContent = "that username is valid!";
  } else {
    feedback.textContent =
      "username must contain only letters & be between 6 & 12 characters";
  }
});

// live feedback
form.username.addEventListener("keyup", (e) => {
  const usernameInput = form.querySelector("input"); // Get the first input element

  //   console.log(e.target.value, form.username.value);
  if (usernamePattern.test(e.target.value)) {
    // console.log('passed');
    usernameInput.setAttribute("class", "success");
  } else {
    // console.log('failed');
    usernameInput.setAttribute("class", "error");
  }
});