// FORMSPREE
var form = document.getElementById("form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        status.classList.add("success");
        form.reset();
        // status.classList.remove("success");
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
            status.classList.add("error");
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form";
          }
        });
      }
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
      status.classList.add("error");
    });
}
form.addEventListener("submit", handleSubmit);

// NAVBAR BURGER
const navSlide = () => {
  const toggleButton = document.querySelector(".toggle-button");
  const nav = document.querySelector(".navbar-links");
  const navLinks = document.querySelectorAll(".navbar-links li");

  toggleButton.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    toggleButton.classList.toggle("toggle");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `fadeIn 1s ease backwards ${index / 5}s`;
      }
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("nav-active");
        toggleButton.classList.remove("toggle");
      });
    });
  });
};

navSlide();

// SERVICE TOGGLE LONG WAY
const serviceToggle = () => {
  const serviceButton = document.getElementById("new-service-toggle");
  const overlayBox = document.getElementById("new-service-overlay");
  const toggleTest = document.querySelectorAll(".toggle");
  const message1 = document.getElementById("endMsg-new1");
  const message2 = document.getElementById("endMsg-new2");
  const message3 = document.getElementById("endMsg-new3");
  const message4 = document.getElementById("endMsg-new4");
  const button1 = document.getElementById("toggle-test1");
  const button2 = document.getElementById("toggle-test2");
  const button3 = document.getElementById("toggle-test3");
  const button4 = document.getElementById("toggle-test4");

  toggleTest.forEach((link, index) => {
    link.addEventListener("click", () => {
      overlayBox.classList.add("activate");
      overlayBox.style.animation = "createBox .2s ease backwards";
    });
  });

  button1.addEventListener("click", () => {
    message1.classList.add("shown");
  });
  button2.addEventListener("click", () => {
    message2.classList.add("shown");
  });
  button3.addEventListener("click", () => {
    message3.classList.add("shown");
  });
  button4.addEventListener("click", () => {
    message4.classList.add("shown");
  });

  serviceButton.addEventListener("click", () => {
    overlayBox.classList.remove("activate");
    message1.classList.remove("shown");
    message2.classList.remove("shown");
    message3.classList.remove("shown");
    message4.classList.remove("shown");
  });
};

serviceToggle();
