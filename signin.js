const signInForm = document.getElementById("signInForm");
signInForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    // Sign in the user
    await firebase.auth().signInWithEmailAndPassword(email, password);

    // Clear the input fields after successful sign-in
    document.getElementById("email").value = ""; // Clear email field
    document.getElementById("password").value = ""; // Clear password field

    // Show a comment indicating successful sign-in
    alert("Sign in successful!");
    window.location.href = "/Searchpage.html";

    // Redirect user to a protected area or dashboard
    // window.location.href = "/dashboard.html";
  } catch (error) {
    console.error("Sign in error:", error);
    alert("An error occurred during sign in. Please try again.");
  }
});
