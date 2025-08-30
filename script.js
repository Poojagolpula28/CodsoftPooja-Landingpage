
if (this.getAttribute("href") === "#home") {
  window.scrollTo({ top: 0, behavior: "smooth" });
} else {
  const target = document.querySelector(this.getAttribute("href"));
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}

document.querySelectorAll(".nav-link, .visit-btn, .btn").forEach(link => {
  link.addEventListener("click", function (e) {
    if (this.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});


window.addEventListener("load", () => {
  const heroText = document.querySelector(".hero-content");
  heroText.style.opacity = "0";
  heroText.style.transform = "translateY(40px)";

  setTimeout(() => {
    heroText.style.transition = "all 1s ease";
    heroText.style.opacity = "1";
    heroText.style.transform = "translateY(0)";
  }, 300);
});


const fadeElements = document.querySelectorAll(
  ".about, .menu-category, .review-card, .contact"
);

function fadeInOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  fadeElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", fadeInOnScroll);

document.querySelectorAll(".btn, .visit-btn").forEach(button => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "scale(1.08)";
    button.style.transition = "transform 0.3s ease";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "scale(1)";
  });
});
