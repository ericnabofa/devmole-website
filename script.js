// document.addEventListener('DOMContentLoaded', () => {
//     const themeToggleButton = document.getElementById('theme-toggle');
//     const currentTheme = localStorage.getItem('theme');

//     // Apply the saved theme or default to light mode
//     if(currentTheme) {
//         document.body.classList.add(currentTheme);
//     } else {
//         document.body.classList.add('light-mode');
//     }

//     themeToggleButton.addEventListener('click', () => {
//         if(document.body.classList.contains('light-mode')) {
//             document.body.classList.replace('light-mode', 'dark-mode');
//             document.querySelector('header').classList.replace('light-mode', 'dark-mode');
//             themeToggleButton.textContent = '☀️' // Sun icon for light mode
//             localStorage.setItem('theme', 'dark-mode');
//         } else {
//             document.body.classList.replace('dark-mode', 'light-mode');
//             document.querySelector('header').classList.replace('dark-mode', 'light-mode');
//             themeToggleButton.textContent = '🌙' // Moon icon for dark mode
//             localStorage.setItem('theme', 'light-mode');
//         }
//     })
// })

const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    // Update header based on theme
    if (isDarkMode) {
        document.querySelector('header').classList.add('dark-mode');
    } else {
        document.querySelector('header').classList.remove('dark-mode');
    }
});
