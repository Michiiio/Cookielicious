function getCurrentYear() {
  document.getElementById("year").textContent = new Date().getFullYear();
}

function subscribe() {
  const email = document.getElementById("email").value;
  if (email.trim()) {
    alert("Subscribed with: " + email);
  } else {
    alert("Please enter an email address.");
  }
}

document.addEventListener("DOMContentLoaded", getCurrentYear);
