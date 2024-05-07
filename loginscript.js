document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");

  // Hardcoded login credentials (for demonstration purposes)
  const accounts = [
      { username: "fultmangamer@gmail.com", password: "probankowner1", dashboard: "dashboard.html" },
      { username: "fazetiko93@gmail.com", password: "rodrigoisaW0", dashboard: "dashboard.html" },
      { username: "owner@savebank.com", password: "rizzler2020", dashboard: "dashboard.html" },
  ];

  form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (form.checkValidity()) {
          const username = form.username.value;
          const password = form.password.value;
          const foundAccount = accounts.find(account => account.username === username && account.password === password);

          if (foundAccount) {
              // Redirect to the dashboard associated with the user
              window.location.href = foundAccount.dashboard;
          } else {
              alert("Invalid email or password. Please try again.");
          }
      } else {
          const inputs = form.querySelectorAll("input");
          inputs.forEach(function (input) {
              if (!input.validity.valid) {
                  const error = input.parentElement.querySelector(".invalid-feedback");
                  error.style.display = "block";
              }
          });
      }
  });

  form.addEventListener("input", function (event) {
      const input = event.target;
      if (input.validity.valid) {
          const error = input.parentElement.querySelector(".invalid-feedback");
          error.style.display = "none";
      }
  });
});