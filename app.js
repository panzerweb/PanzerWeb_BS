//Dark Theme Toggler code from INSTAGRAM
const body = document.querySelector('body');
const icon = document.getElementById('icon');
const initialTheme = 'light';

const setTheme = (theme) => {
    localStorage.setItem('theme', theme);
    body.setAttribute('data-theme', theme);
}

const toggleTheme = () => {
    const activeTheme = localStorage.getItem('theme');
    const isDarkMode = activeTheme === 'dark';

    if (isDarkMode) {
        setTheme('light');
        icon.className = 'bi-brightness-high-fill';
        document.getElementById("toggleDay").style.background = "yellow";
    } else { 
        setTheme('dark');
        icon.className = 'bi-moon-stars-fill text-light';
        document.getElementById("toggleDay").style.background = "none";
    }
}

const setThemeOnInit = () => {
    const savedTheme = localStorage.getItem('theme');
    savedTheme ? body.setAttribute('data-theme', savedTheme) : setTheme(initialTheme);
}

setThemeOnInit();





//For portfolio file
document.addEventListener("click", function (e){
    if(e.target.classList.contains("gallery-item")){
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
        myModal.show();
    }
})
