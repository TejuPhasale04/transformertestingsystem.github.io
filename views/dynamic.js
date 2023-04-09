//
  var loginModal = document.getElementById("login-modal");
  var loginBtn = document.getElementById("login-btn");
  var closeBtn = document.getElementsByClassName("close")[0];

  loginBtn.onclick = function() {
    loginModal.style.display = "block";
  }

  closeBtn.onclick = function() {
    loginModal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == loginModal) {
      loginModal.style.display = "none";
    }
  }

  var signupLink = document.getElementById("signup-link");
  var signupModal = document.getElementById("signup-modal");
  var closeBtns = document.getElementsByClassName("close");

  // Show sign-up form when the link is clicked
  signupLink.onclick = function() {
    signupModal.style.display = "block";
  }

  // Hide sign-up form when the close button or outside the modal is clicked
  for (var i = 0; i < closeBtns.length; i++) {
    closeBtns[i].onclick = function() {
      signupModal.style.display = "none";
    }
  }
  window.onclick = function(event) {
    if (event.target == signupModal) {
      signupModal.style.display = "none";
    }
  }
  var loginForm = document.querySelector('#login-modal form');
loginForm.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent the form from submitting

  // get the email and password from the form
  var email = document.querySelector('#email').value;
  var password = document.querySelector('#password').value;

  // TODO: verify the email and password using your server-side code

  // if the email and password are correct, show the test menu
  var testMenu = document.querySelector('#test-menu');
  testMenu.style.display = 'block';

  // hide the login form
  var loginModal = document.querySelector('#login-modal');
  loginModal.style.display = 'none';
});
