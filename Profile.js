function previewImage(event) {
  const preview = document.getElementById("previewImage");
  const fileInput = event.target;
  const image = fileInput.files[0];

  if (image) {
    const reader = new FileReader();

    reader.onload = function (e) {
      preview.src = e.target.result;
    };

    reader.readAsDataURL(image);
    preview.style.display = "block";
  } else {
    preview.style.display = "none";
    preview.src = "";
  }
}
// flexbox-2
document.addEventListener("DOMContentLoaded", function () {
  const saveButtons = document.querySelectorAll(".save-button");
  const overlay = document.querySelector(".overlay");
  const popUp = document.querySelector(".pop-up");

  saveButtons.forEach((button) => {
    button.addEventListener("click", function () {
      overlay.style.display = "block";
      popUp.style.display = "block";
    });
  });

  overlay.addEventListener("click", function () {
    overlay.style.display = "none";
    popUp.style.display = "none";
  });
});
