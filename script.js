// Reveal sections as they scroll into view
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.15 },
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// Close the mobile menu after choosing a link
document
  .querySelectorAll(".nav nav a")
  .forEach((a) =>
    a.addEventListener(
      "click",
      () => (document.getElementById("menu").checked = false),
    ),
  );

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
