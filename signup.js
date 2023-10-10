document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signup-form");
  const errorContainer = document.getElementById("error-container");
  const errorText = document.getElementById("error-text");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the form from submitting

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Basic form validation
    if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
      showError("Please fill in all fields");
    } else if (!validateEmail(email)) {
      showError("Please enter a valid email address");
    } else {
      // Create user in Firebase
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const user = userCredential.user;

          // Store user data in the Realtime Database
          firebase
            .database()
            .ref("users/" + user.uid)
            .set({
              name: name,
              email: email,
            });

          showSuccess("Account created successfully!");
        })
        .catch((error) => {
          showError(error.message);
        });
    }
  });

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function showError(message) {
    errorText.textContent = message;
    errorContainer.style.display = "block";
  }

  function showSuccess(message) {
    errorText.textContent = message;
    errorContainer.style.display = "block";
    errorContainer.style.backgroundColor = "#4caf50";
  }
});
