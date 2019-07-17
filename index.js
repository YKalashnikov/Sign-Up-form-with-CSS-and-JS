function animatedForm() {

const arrows = document.querySelectorAll(".fa-arrow-down");

const nextForm = parent.nextElementSibling;

arrows.forEach(arrow => {
    arrow.addEventListener("click", () => {
      const input = arrow.previousElementSibling;
      const parent = arrow.parentElement;
      const nextForm = parent.nextElementSibling;

      //Validation
      if (input.type === "text" && validateUser(input)) {
        nextStep(parent, nextForm);
      } else if (input.type === "email" && validateEmail(input)) {
        nextStep(parent, nextForm);
      } else if (input.type === "password" && validatePassword(input)) {
        nextStep(parent, nextForm);
      } else {
        parent.style.animation = "shake 0.2s ease";

      }
      parent.addEventListener("animationend", () => {
        parent.style.animation = "";
      })
    });

    const but = document.getElementById("myBtn")
    const arrows = document.querySelectorAll(".fa-arrow-down");
  });
};

function nextStep(parent, nextForm) {
  parent.classList.add("inactive");
  parent.classList.remove("active");
  nextForm.classList.add("active");
}

function validateUser(user) {
  if (user.value.length < 6) {
    console.log("enter more characters");
    error("rgb(189, 87, 87)");
    document.querySelector('.errorName').innerHTML = "Enter more characters"
    return false
  } else {
    error("rgb(87, 189, 130)");
    return true;
  }
}

function validateEmail(email) {
  const validator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (validator.test(email.value)) {
    error("rgb(87, 189, 130)");
    return true;
  } else {
    error("rgb(189, 87, 87)");
    console.log("email is not valid");
    document.querySelector('.errorEmail').innerHTML = "Email is not valid"
  }
}

function validatePassword(password) {
  if (password.value.length < 4) {
    console.log("password is short");
    error("rgb(189, 87, 87)");
    document.querySelector('.errorPassword').innerHTML = "Password is short"
  } else {
    error("rgb(87, 189, 130)");
    return true;
  }
}

function error(color) {
  document.body.style.background = color;
}

/* function keyPress (event) {
  if (event.which == 13 || event.keyCode == 13) {
    console.log('sfafd')
      //code to execute here
      return false;
  }
  return true;
}; */


/* const but = document.getElementById("myBtn")
const arrows = document.querySelectorAll(".fa-arrow-down");

document.body.addEventListener('keyup',(e) =>{
if ( e.keyCode == 13 ) {
  event.preventDefault();

  

   document.getElementById("myBtn").click();


  console.log('Enter')
}else {
  return false
}
}); */



animatedForm();