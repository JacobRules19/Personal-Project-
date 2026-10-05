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

let votes = localStorage.getItem('jacobVotes') || 0;
const voteBtn = document.getElementById('voteBtn');
const voteDisplay = document.getElementById('voteCount');

// Update UI on load
voteDisplay.textContent = `Total Votes for Jacob: ${votes}`;

voteBtn.addEventListener('click', () => {
  votes++;
  localStorage.setItem('jacobVotes', votes);
  voteDisplay.textContent = `Total votes for Jacob: ${votes}`;

  // Fun animation feedback
  voteBtn.textContent = "The Tribe Has Spoken! \u{1F5FF} (+1 Vote)";
  setTimeout(() => {
    voteBtn.textContent = "Cast vote for Jacob on Survivor";
  }, 1500)
});