// small interactive helpers
document.getElementById('year').textContent = new Date().getFullYear();

// mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');
navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  if(!expanded){
    navList.setAttribute('aria-hidden','false');
  } else {
    navList.setAttribute('aria-hidden','true');
  }
});

// fake contact submit handler (for local preview)
function handleForm(e){
  e.preventDefault();
  const form = e.target;
  const name = form.name.value.trim() || 'Friend';
  alert(`Thanks, ${name}! Your message was received (preview).`);
  form.reset();
}
// Open sidebar when hamburger is clicked
document.querySelector(".hamburger").addEventListener("click", () => {
  document.getElementById("sidebar").classList.add("active");
});

// Close sidebar when a link is clicked
document.querySelectorAll(".sidebar a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("sidebar").classList.remove("active");
  });
});

// Optional: close sidebar if you click outside of it
document.addEventListener("click", (e) => {
  const sidebar = document.getElementById("sidebar");
  const hamburger = document.querySelector(".hamburger");

  if (
    sidebar.classList.contains("active") &&
    !sidebar.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    sidebar.classList.remove("active");
  }
});