function themeSwitcher() {
  const button = document.getElementById('theme-switcher');
  const body = document.body;
  
  button.addEventListener('click', () => {
    button.title = (body.classList.value === 'dark-theme') ? 'Switch to dark theme' : 'Switch to light theme';
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
  });
}



document.addEventListener('DOMContentLoaded', themeSwitcher);
