function createMessage() {
  let messages = [
    "Please provide a valid e-mail address",
    "You must accept the terms and conditions",
    "Email address is required",
    "We are not accepting subscriptions from Colombia emails",
  ];
  const numberOfMessages = 4;
  let emailContainer = document.querySelector(".email-container");

  for (let i = 0; i < numberOfMessages; i++) {
    let validationMessage = document.createElement("p");
    validationMessage.setAttribute("class", "hide_message");
    validationMessage.setAttribute("id", `message${i + 1}`);
    validationMessage.innerText = messages[i];
    emailContainer.after(validationMessage);
  }
}
createMessage();

let submitButton = document.querySelector(".submit_button");
submitButton.disabled = true;

let emailInput = document.querySelector("#email");
emailInput.addEventListener("input", checkValidation);

function checkIfEmailIsValid() {
  let invalidEmailMessage = document.getElementById("message1");
  let tester = /\S+@\S+\.\S+/;
  let result = tester.test(emailInput.value);
  console.log(result);

  if (result) {
    invalidEmailMessage.classList.remove("show_message");
    invalidEmailMessage.classList.add("hide_message");
    return true;
  } else {
    invalidEmailMessage.classList.remove("hide_message");
    invalidEmailMessage.classList.add("show_message");
    return false;
  }
}

function checkIfEmailEndsWithCo() {
  let columbiaSub = document.getElementById("message4");

  if (emailInput.value.substring(emailInput.value.length - 3) === ".co") {
    columbiaSub.classList.remove("hide_message");
    columbiaSub.classList.add("show_message");
    return false;
  } else {
    columbiaSub.classList.remove("show_message");
    columbiaSub.classList.add("hide_message");
    return true;
  }
}

function checkIfEmailIsProvided() {
  let enterEmailMessage = document.getElementById("message3");

  if (emailInput.value === "") {
    enterEmailMessage.classList.remove("hide_message");
    enterEmailMessage.classList.add("show_message");
    return false;
  } else {
    enterEmailMessage.classList.remove("show_message");
    enterEmailMessage.classList.add("hide_message");
    return true;
  }
}

let checkboxInput = document.querySelector("#terms_agree");
checkboxInput.addEventListener("change", checkValidation);

function checkIfTermsAccepted() {
  let enterEmailMessage = document.getElementById("message2");

  if (checkboxInput.checked == false) {
    enterEmailMessage.classList.remove("hide_message");
    enterEmailMessage.classList.add("show_message");
    return false;
  } else if (checkboxInput.checked == true) {
    enterEmailMessage.classList.remove("show_message");
    enterEmailMessage.classList.add("hide_message");
    return true;
  }
}

function checkValidation() {
  let test1 = checkIfTermsAccepted();
  let test2 = checkIfEmailEndsWithCo();
  let test3 = checkIfEmailIsProvided();
  let test4 = checkIfEmailIsValid();
  if (test1 === true && test2 === true && test3 === true && test4 === true) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

let form = document.querySelector(".content__text-form");
form.addEventListener("submit", showSuccessMessage);

function showSuccessMessage(e) {
  let pageHeader = document.querySelector(".content__text-header");
  pageHeader.classList.add("margin-bottom-for-header");
  let heading = document.querySelector(".content__text-heading");
  heading.classList.add("margin-bottom-for-heading");
  let trophyLogo = document.createElement("img");
  trophyLogo.setAttribute("class", "trophy_logo");
  trophyLogo.setAttribute("src", "./images/ic_success.svg");
  heading.before(trophyLogo);
  heading.innerText = "Thanks for subscribing!";
  let paragraph = document.querySelector(".content__text-paragraph");
  paragraph.innerText =
    "You have successfully subscribed to our email listing. Check your email for the discount code.";
  paragraph.classList.add("margin-right-for-paragraph");
  form.remove();
  e.preventDefault();
}
