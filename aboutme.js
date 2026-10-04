const toggleBtn = document.getElementById('themeToggle');

// Define color themes
const themes = [
  { bg: '#ffd700', text: '#000000' }, // Current Yellow
  { bg: '#1e1e2e', text: '#cdd6f4' }, // Dark Mode
  { bg: '#8b956d', text: '#0f380f' }  // Game Boy Retro Green
];

let currentTheme = 0;

toggleBtn.addEventListener('click', () => {
    currentTheme = (currentTheme + 1) % themes.length;
    document.body.style.backgroundColor = themes[currentTheme].bg;
    document.body.style.color = themes[currentTheme].text;
});