document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to ANTONIIO’s Portfolio – Marine Geologist.");
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to ANTONIIO’s Portfolio – Marine Geologist.");
});

function submitOpinion() {
  const name = document.getElementById("username").value.trim();
  const opinion = document.getElementById("opinion").value.trim();

  if (name && opinion) {
    const display = document.getElementById("feedbackDisplay");
    const entry = document.createElement("li");
    entry.innerHTML = `<strong>${name}:</strong> ${opinion}`;
    display.appendChild(entry);

    // Clear input fields
    document.getElementById("username").value = "";
    document.getElementById("opinion").value = "";
  } else {
    alert("Please fill in both fields before submitting.");
  }
}
