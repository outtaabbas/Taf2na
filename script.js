/* =========================================================
   TAF2NA JAVASCRIPT
========================================================= */


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");

  menuBtn.textContent =
    mobileMenu.classList.contains("active") ? "✕" : "☰";
});


document.querySelectorAll(".mobile-menu a").forEach(link => {

  link.addEventListener("click", () => {

    mobileMenu.classList.remove("active");

    menuBtn.textContent = "☰";

  });

});


/* ================= FAQ ================= */

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

  question.addEventListener("click", () => {

    const item = question.parentElement;

    document.querySelectorAll(".faq-item").forEach(otherItem => {

      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }

    });

    item.classList.toggle("active");

  });

});


/* ================= SCROLL ANIMATION ================= */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);


revealElements.forEach(element => {
  observer.observe(element);
});


/* ================= SUBSCRIBE FORM ================= */

const form = document.getElementById("subscribeForm");
const successMessage = document.getElementById("formSuccess");

form.addEventListener("submit", (event) => {

  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const area = document.getElementById("area").value.trim();
  const issue = document.getElementById("issue").value.trim();

  if (!name || !phone || !area) {
    alert("Please fill in your name, phone number and area.");
    return;
  }


  /*
    WhatsApp message

    This uses your Taf2na number:
    +961 76 950 998
  */

  const message = `
مرحباً Taf2na 👋

بدي اشترك بخدمة الصيانة.

الاسم: ${name}
رقم الهاتف: ${phone}
المنطقة: ${area}

المشكلة:
${issue || "لا يوجد"}
  `;


  const whatsappURL =
    "https://wa.me/96176950998?text=" +
    encodeURIComponent(message);


  successMessage.classList.add("show");

  setTimeout(() => {

    window.open(
      whatsappURL,
      "_blank"
    );

  }, 700);

});


/* ================= CURRENT YEAR ================= */

document.getElementById("year").textContent =
  new Date().getFullYear();
