// Toggle mobile nav
document.getElementById("toggleBtn").addEventListener("click", function () {
  const nav = document.getElementById("navMenu");
  nav.classList.toggle("active");
});

// Close nav on link click (mobile)
document.querySelectorAll('.nav-list a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById("navMenu").classList.remove("active");
  });
});
