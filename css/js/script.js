/* =====================================================
   REVIZE DASHBOARD JAVASCRIPT
===================================================== */


/* ================= EXAM COUNTDOWN ================= */

/*
   Change this date to your actual exam date.

   Format:
   YYYY-MM-DDTHH:MM:SS
*/

const examDate = new Date("2026-09-10T09:00:00").getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const distance = examDate - now;


    if (distance <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }


    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );


    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}


updateCountdown();

setInterval(updateCountdown, 1000);


/* ================= DARK MODE ================= */

const themeButton = document.getElementById("themeToggle");


themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");


    if (document.body.classList.contains("dark")) {

        themeButton.textContent = "☀";

        localStorage.setItem(
            "revizeTheme",
            "dark"
        );

    } else {

        themeButton.textContent = "☾";

        localStorage.setItem(
            "revizeTheme",
            "light"
        );
    }

});


/* Load saved theme */

const savedTheme =
    localStorage.getItem("revizeTheme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeButton.textContent = "☀";
}


/* ================= PLAN CHECKBOX ================= */

const checkboxes =
    document.querySelectorAll(".checkbox");


checkboxes.forEach(function (checkbox) {

    checkbox.addEventListener("click", function () {

        this.classList.toggle("checked");

        if (this.classList.contains("checked")) {

            this.innerHTML = "✓";

            this.style.background = "#6038f5";
            this.style.borderColor = "#6038f5";
            this.style.color = "white";

        } else {

            this.innerHTML = "";

            this.style.background = "";
            this.style.borderColor = "";
            this.style.color = "";
        }

    });

});
