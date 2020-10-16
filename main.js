const toggleButton = document.getElementById('toggler');
const theme = document.getElementById('theme-mode');
const body = document.body;

toggleButton.onclick = () => {
  if (body.classList.contains('dark-theme')) {
    body.classList.replace('dark-theme', 'light-theme');
    theme.innerHTML = "Light mode";
  } else {
    body.classList.replace('light-theme', 'dark-theme');
    theme.innerHTML = "Dark mode";
  }
};