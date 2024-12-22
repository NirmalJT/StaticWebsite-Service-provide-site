function showNavbar() {
  document.querySelector(".navBar").style.display = "block";
}
function hideNavbar() {
  document.querySelector(".navBar").style.display = "none";
}
let currentVisible = null;
function handleToggle(index) {
  const dataDiv = document.getElementById(`data-${index}`);
  const arrow = document.getElementById(`arrow-${index}`);

  if (dataDiv.classList.contains("hidden")) {
    handleShow(index);
  } else {
    handleHide(index);
  }
}

function handleShow(index) {
  if (currentVisible !== null && currentVisible !== index) {
    document.getElementById(`data-${currentVisible}`).classList.add("hidden");
    document.getElementById(`arrow-${currentVisible}`).textContent =
      "arrow_drop_down";
  }

  const dataDiv = document.getElementById(`data-${index}`);
  const arrow = document.getElementById(`arrow-${index}`);
  dataDiv.classList.remove("hidden");
  arrow.textContent = "arrow_drop_up";

  currentVisible = index;
}

function handleHide(index) {
  const dataDiv = document.getElementById(`data-${index}`);
  const arrow = document.getElementById(`arrow-${index}`);
  dataDiv.classList.add("hidden");
  arrow.textContent = "arrow_drop_down";

  if (currentVisible === index) {
    currentVisible = null;
  }
}

setTimeout(() => {
  let flashmessage = document.getElementById("flash-message");
  if (flashmessage) {
    flashmessage.style.opacity = "0";
    setTimeout(() => {
      flashmessage.style.display = "none";
    }, 500);
  }
  console.log("flashmessage");
}, 5000);

//typed js

var options = {
  strings: [
    "MIGHTYTECH CONSULTANCY SERVICE",
  ],
  typeSpeed: 70, // Speed of typing in milliseconds
  backSpeed: 60, // Speed of backspacing
  backDelay: 1000, // Delay before starting to backspace
  startDelay: 500, // Delay before typing starts
  loop: true, // Whether to loop the animation
};

var typed = new Typed("#typed-output", options);
