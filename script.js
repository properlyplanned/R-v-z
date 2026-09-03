/* =========================================================
   Rɪ'VAIZ — WEBSITE JAVASCRIPT
   ========================================================= */


/* =========================
   EXAM COUNTDOWN
   ========================= */

/*
   Change this date whenever you want
   to set a different exam date.

   Format:
   YYYY-MM-DDTHH:MM:SS
*/

const examDate = new Date("2026-09-10T09:00:00");


function updateCountdown() {

    const now = new Date();

    const difference = examDate - now;


    // If exam time has arrived
    if (difference <= 0) {

        setTime("days", "00");
        setTime("hours", "00");
        setTime("minutes", "00");
        setTime("seconds", "00");

        return;
    }


    // Calculate remaining time

    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference /
            (1000 * 60 * 60)) % 24
        );


    const minutes =
        Math.floor(
            (difference /
            (1000 * 60)) % 60
        );


    const seconds =
        Math.floor(
            (difference / 1000) % 60
        );


    // Display values

    setTime("days", days);
    setTime("hours", hours);
    setTime("minutes", minutes);
    setTime("seconds", seconds);
}


/* =========================
   SET COUNTDOWN VALUE
   ========================= */

function setTime(id, value) {

    const element =
        document.getElementById(id);

    if (!element) {
        return;
    }


    // Always show two digits

    element.textContent =
        String(value).padStart(2, "0");
}


/* =========================
   START COUNTDOWN
   ========================= */

updateCountdown();

setInterval(
    updateCountdown,
    1000
);


/* =========================
   DARK MODE
   ========================= */

function toggleTheme() {

    document.body.classList.toggle(
        "dark-mode"
    );


    // Save preference

    if (
        document.body.classList.contains(
            "dark-mode"
        )
    ) {

        localStorage.setItem(
            "rivaiz-theme",
            "dark"
        );

    } else {

        localStorage.setItem(
            "rivaiz-theme",
            "light"
        );
    }
}


/* =========================
   LOAD SAVED THEME
   ========================= */

function loadTheme() {

    const savedTheme =
        localStorage.getItem(
            "rivaiz-theme"
        );


    if (savedTheme === "dark") {

        document.body.classList.add(
            "dark-mode"
        );
    }
}


loadTheme();


/* =========================
   SIMPLE SEARCH
   ========================= */

const searchInput =
    document.querySelector(
        ".search-box input"
    );


if (searchInput) {

    searchInput.addEventListener(
        "keydown",
        function(event) {

            if (event.key !== "Enter") {
                return;
            }


            const searchValue =
                searchInput.value
                    .trim()
                    .toLowerCase();


            if (!searchValue) {
                return;
            }


            // Simple page navigation

            if (
                searchValue.includes(
                    "study"
                )
            ) {

                window.location.href =
                    "study-plan.html";

            } else if (
                searchValue.includes(
                    "pdf"
                ) ||
                searchValue.includes(
                    "notes"
                )
            ) {

                window.location.href =
                    "pdf-notes.html";

            } else if (
                searchValue.includes(
                    "practice"
                ) ||
                searchValue.includes(
                    "question"
                )
            ) {

                window.location.href =
                    "practice.html";

            } else if (
                searchValue.includes(
                    "hour"
                ) ||
                searchValue.includes(
                    "revision"
                )
            ) {

                window.location.href =
                    "final-hour.html";

            } else if (
                searchValue.includes(
                    "progress"
                )
            ) {

                window.location.href =
                    "progress.html";

            } else {

                alert(
                    "Try searching for Study Plan, PDF Notes, Practice, Final Hour, or Progress."
                );
            }
        }
    );
}
/* =========================
   SIGN UP
========================= */

function signUp(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("signup-email").value.trim();
  const password = document.getElementById("signup-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  localStorage.setItem("rivaizLoggedIn", "true");
  localStorage.setItem("rivaizUserName", name);
  localStorage.setItem("rivaizUserEmail", email);

  window.location.href = "dashboard.html";
}
/* =========================
   LOGOUT
========================= */

function logoutUser() {
  localStorage.removeItem("rivaizLoggedIn");
  localStorage.removeItem("rivaizUserName");
  localStorage.removeItem("rivaizUserEmail");

  window.location.href = "signin.html";
}

/* =========================
   SIGN IN
========================= */

function signIn(event) {
  event.preventDefault();

  const email = document.getElementById("signin-email").value.trim();
  const password = document.getElementById("signin-password").value;

  const savedEmail = localStorage.getItem("rivaizUserEmail");
  const savedPassword = localStorage.getItem("rivaizUserPassword");
  const savedName = localStorage.getItem("rivaizUserName");

  if (!email || !password) {
    alert("Please enter your email and password.");
    return;
  }

  if (email !== savedEmail || password !== savedPassword) {
    alert("Incorrect email or password. Please try again.");
    return;
  }

  localStorage.setItem("rivaizLoggedIn", "true");

  if (savedName) {
    localStorage.setItem("rivaizUserName", savedName);
  }

  window.location.href = "dashboard.html";
}
