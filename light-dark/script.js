const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Dark or Light Image
function imageMode(color) {
   image1.src = `img/undraw_proud_coder_${color}.svg` ;
   image2.src =`img/undraw_feeling_proud_${color}.svg`;
   image3.src =`img/undraw_conceptual_idea_${color}.svg`;
}

// Another Way of Implement this function Dark and light Mode, Shorthand
// function toggleDarkLightMode (isDark) {
//     nav.style.backgroundColor = isDark ? 'rgb(0 0 0 /50%)' : 'rgb(255 255 255 /50%)';
//     textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
//     toggleIcon.children[0].textContent =  isDark ? 'Drak Mode' : 'Light Mode';
//     toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
//     toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');

//     isDark ? imageMode('dark') : imageMode('light');
// }

// Dark Mode Style
function darkMode() { 
    nav.style.backgroundColor = 'rgb(0 0 0 /50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Drak Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    // I comment this out cus i wanna use shorthand cute up
    // toggleIcon.children[1].classList.add('fa-moon');
    // Shorthand
    // image1.src ='img/undraw_proud_coder_dark.svg';
    // image2.src ='img/undraw_feeling_proud_dark.svg';
    // image3.src ='img/undraw_conceptual_idea_dark.svg';

    // In other for this to work will have to pass in the image function 
    imageMode('dark');
}

// Light Mode Style
function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 /50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    // toggleIcon.children[1].classList.add('fa-sun');

    // ShortHand
    // image1.src ='img/undraw_proud_coder_light.svg';
    // image2.src ='img/undraw_feeling_proud_light.svg';
    // image3.src ='img/undraw_conceptual_idea_light.svg';

    // In other for this to work will have to pass in the
    imageMode('light');
}


// Switch Theme Dynamically
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
        // toggleDarkLightMode(true);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
        // toggleDarkLightMode(false);
    }
}

// Evener Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage for Theme 
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        darkMode();
        // toggleDarkLightMode(true);
    }
}