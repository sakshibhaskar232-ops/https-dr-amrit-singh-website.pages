// ===============================
// DR. AMRIT SINGH WEBSITE
// ===============================


// -------------------------------
// DARK MODE
// -------------------------------

const themeToggle =
  document.getElementById("themeToggle");

const savedTheme =
  localStorage.getItem("doctorTheme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  const isDark =
    document.body.classList.contains("dark");

  localStorage.setItem(
    "doctorTheme",
    isDark ? "dark" : "light"
  );

});


// -------------------------------
// MOBILE MENU
// -------------------------------

const menuButton =
  document.getElementById("menuButton");

const mobileMenu =
  document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {

  mobileMenu.classList.toggle("open");

});


// Close mobile menu after clicking link

document
  .querySelectorAll(".mobile-menu a")
  .forEach(link => {

    link.addEventListener("click", () => {

      mobileMenu.classList.remove("open");

    });

  });


// -------------------------------
// CONFIGURATION
// -------------------------------
//
// IMPORTANT:
//
// Leave blank until the doctor
// gives you the verified information.
//
// Do NOT invent contact details.
//

const CONFIG = {

  googleMapsUrl: "",

  googleReviewsUrl: "",

  phone: "",

  email: "",

  whatsapp: ""

};


// -------------------------------
// DIRECTIONS
// -------------------------------

const directions =
  document.getElementById("directions");

directions.addEventListener("click", event => {

  if (!CONFIG.googleMapsUrl) {

    event.preventDefault();

    alert(
      "The verified Google Maps link will be added after the doctor confirms it."
    );

    return;

  }

  directions.href =
    CONFIG.googleMapsUrl;

  directions.target = "_blank";

});


// -------------------------------
// GOOGLE REVIEWS
// -------------------------------

const reviewsLink =
  document.getElementById("reviewsLink");

reviewsLink.addEventListener("click", event => {

  if (!CONFIG.googleReviewsUrl) {

    event.preventDefault();

    alert(
      "The verified Google Reviews link will be added after confirmation."
    );

    return;

  }

  reviewsLink.href =
    CONFIG.googleReviewsUrl;

  reviewsLink.target = "_blank";

});


// -------------------------------
// APPOINTMENT FORM
// -------------------------------

const form =
  document.getElementById("appointmentForm");

const success =
  document.getElementById("success");

form.addEventListener("submit", event => {

  event.preventDefault();


  const name =
    document.getElementById("name").value.trim();

  const phone =
    document.getElementById("phone").value.trim();


  if (!name || !phone) {

    alert(
      "Please enter your name and phone number."
    );

    return;

  }


  success.classList.add("show");


  form.reset();


  success.scrollIntoView({

    behavior: "smooth",

    block: "center"

  });

});


// -------------------------------
// DATE LIMIT
// -------------------------------

const dateInput =
  document.getElementById("date");

const today =
  new Date()
    .toISOString()
    .split("T")[0];

dateInput.min = today;


// -------------------------------
// SCROLL NAVIGATION
// -------------------------------

document
  .querySelectorAll('a[href^="#"]')
  .forEach(link => {

    link.addEventListener("click", event => {

      const target =
        document.querySelector(
          link.getAttribute("href")
        );

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth"
      });

    });

  });


// -------------------------------
// NAVBAR SCROLL EFFECT
// -------------------------------

const nav =
  document.getElementById("nav");

window.addEventListener("scroll", () => {

  if (window.scrollY > 30) {

    nav.style.boxShadow =
      "0 10px 40px rgba(0,0,0,.04)";

  } else {

    nav.style.boxShadow = "none";

  }

});


// -------------------------------
// REVEAL ANIMATION
// -------------------------------

const revealElements =
  document.querySelectorAll(
    ".credential, .expertise-row, .clinic-card, .rating"
  );


const observer =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (
          entry.isIntersecting
        ) {

          entry.target.style.opacity = "1";

          entry.target.style.transform =
            "translateY(0)";

          observer.unobserve(
            entry.target
          );

        }

      });

    },
    {
      threshold: 0.12
    }
  );


revealElements.forEach(element => {

  element.style.opacity = "0";

  element.style.transform =
    "translateY(20px)";

  element.style.transition =
    "opacity .7s ease, transform .7s ease";

  observer.observe(element);

});
