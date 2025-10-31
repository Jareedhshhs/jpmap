const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const dashboard = document.getElementById("dashboard");
const authContainer = document.getElementById("authContainer");
const homePage = document.getElementById("homePage");

const getStartedBtn = document.getElementById("getStartedBtn");
const logoutBtn = document.getElementById("logoutBtn");
const displayUser = document.getElementById("displayUser");

// Switch between forms
document.getElementById("toSignup").addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.classList.add("hidden");
  signupForm.classList.remove("hidden");
});

document.getElementById("toLogin").addEventListener("click", (e) => {
  e.preventDefault();
  signupForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
});

// Sign-up logic
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = document.getElementById("newUser").value;
  const pass = document.getElementById("newPass").value;

  if (user && pass) {
    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);
    alert("Account created! Please log in.");
    signupForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
  } else {
    alert("Please fill out both fields!");
  }
});

// Login logic
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  const savedUser = localStorage.getItem("username");
  const savedPass = localStorage.getItem("password");

  if (user === savedUser && pass === savedPass) {
    authContainer.classList.add("hidden");
    dashboard.classList.remove("hidden");
    displayUser.textContent = user;
  } else {
    alert("Invalid credentials. Try again!");
  }
});

// Get Started → go to Home
getStartedBtn.addEventListener("click", () => {
  dashboard.classList.add("hidden");
  homePage.classList.remove("hidden");
});

// Logout
logoutBtn.addEventListener("click", () => {
  homePage.classList.add("hidden");
  authContainer.classList.remove("hidden");
  loginForm.classList.remove("hidden");
  signupForm.classList.add("hidden");
});
