const toggleButton = document.querySelector('.theme-toggle-button');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    toggleButton.textContent = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

// Initialize button text
toggleButton.textContent = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';