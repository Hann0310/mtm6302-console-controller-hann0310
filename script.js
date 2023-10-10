function setTitle() {
    const newTitle = prompt("Enter a new title:");
    const pageTitle = document.getElementById("pageTitle");
    pageTitle.textContent = newTitle;
}

function setDescription() {
    const newDescription = prompt("Enter a new description:");
    const pageDescription = document.getElementById("pageDescription");
    pageDescription.textContent = newDescription;
}

function setBackgroundColor() {
    const newColor = prompt("Enter a new background color (e.g., #ff0000):");
    document.body.style.backgroundColor = newColor;
}

function setFontColor() {
    const newColor = prompt("Enter a new font color (e.g., #00ff00):");
    document.body.style.color = newColor;
}

function setTheme(theme) {
    if (theme === 'light') {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
    } else if (theme === 'dark') {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
    }
}

// Initialize with the light theme
setTheme('light');