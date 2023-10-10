document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const dropdownToggle = dropdown.querySelector(".dropdown-toggle");
    const dropdownMenu = dropdown.querySelector(".dropdown-menu");

    dropdownToggle.addEventListener("click", function () {
      console.log("Dropdown clicked");
      dropdownMenu.classList.toggle("show");
    });

    document.addEventListener("click", function (event) {
      if (!dropdown.contains(event.target)) {
        dropdownMenu.classList.remove("show");
      }
    });
  });

  const profileLink = document.getElementById("profileLink");
  const logoutLink = document.getElementById("logoutLink");

  profileLink.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "Profile.html";
  });

  logoutLink.addEventListener("click", function () {
    console.log("Logout clicked");
    window.location.href = "./signin.html";
  });
});
