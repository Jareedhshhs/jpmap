const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const dashboard = document.getElementById("dashboard");
const authContainer = document.getElementById("authContainer");
const homePage = document.getElementById("homePage");

const getStartedBtn = document.getElementById("getStartedBtn");
const logoutBtn = document.getElementById("logoutBtn"); 
const displayUser = document.getElementById("displayUser");

// Navbar avatar
const navAvatar = document.getElementById("navAvatar");

// Hamburger menu
const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("sideMenu");
const closeMenu = document.getElementById("closeMenu");

hamburger.addEventListener("click", () => sideMenu.classList.add("active"));
closeMenu.addEventListener("click", () => sideMenu.classList.remove("active"));

// Switch forms
document.getElementById("toSignup").addEventListener("click", e => {
  e.preventDefault();
  loginForm.classList.add("hidden");
  signupForm.classList.remove("hidden");
});
document.getElementById("toLogin").addEventListener("click", e => {
  e.preventDefault();
  signupForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
});

// Sign-up logic
signupForm.addEventListener("submit", e => {
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
loginForm.addEventListener("submit", e => {
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

// Get Started → Home
getStartedBtn.addEventListener("click", () => {
  dashboard.classList.add("hidden");
  homePage.classList.remove("hidden");
});

// Logout
if (logoutBtn) logoutBtn.addEventListener("click", logout);
document.getElementById("logoutSide").addEventListener("click", logout);

function logout() {
  homePage.classList.add("hidden");
  if (profilePage) profilePage.classList.add("hidden");
  sideMenu.classList.remove("active");
  authContainer.classList.remove("hidden");
  loginForm.classList.remove("hidden");
  signupForm.classList.add("hidden");
}

/* PROFILE & HOME BUTTONS */
const accountSide = document.getElementById("accountSide");
const profilePage = document.getElementById("profilePage");
const profileUsername = document.getElementById("profileUsername");
const profileHomeBtn = document.getElementById("profileHomeBtn");
const homeSideBtn = document.getElementById("homeSideBtn");
const profilePic = document.getElementById("profilePic");
const sideAvatar = document.getElementById("sideAvatar");
const avatarInput = document.getElementById("avatarInput");

// Open Profile Page
accountSide.addEventListener("click", () => {
  sideMenu.classList.remove("active");
  homePage.classList.add("hidden");
  profilePage.classList.remove("hidden");
  profileUsername.textContent = localStorage.getItem("username") || "Unknown";

  const savedAvatar = localStorage.getItem("avatar");
  if (savedAvatar) {
    profilePic.src = savedAvatar;
    sideAvatar.src = savedAvatar;
    navAvatar.src = savedAvatar;
  }
});

// Back to Home
profileHomeBtn.addEventListener("click", () => {
  profilePage.classList.add("hidden");
  homePage.classList.remove("hidden");
});

// Home button in side menu
homeSideBtn.addEventListener("click", () => {
  profilePage.classList.add("hidden");
  homePage.classList.remove("hidden");
  sideMenu.classList.remove("active");
});

// Avatar upload
avatarInput.addEventListener("change", e => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      profilePic.src = reader.result;
      sideAvatar.src = reader.result;
      navAvatar.src = reader.result;
      localStorage.setItem("avatar", reader.result);
    };
    reader.readAsDataURL(file);
  }
});
