//Dark Theme Toggler code from INSTAGRAM
let icon = document.getElementById('icon');
const body = document.querySelector('body');
const initialTheme = 'light';

const setTheme = (theme) => {
    localStorage.setItem('theme', theme);
    body.setAttribute('data-theme', theme)

}

const toggleTheme = () => {
    const activeTheme = localStorage.getItem('theme');
    document.getElementById("toggleDay").style.background = "none";
    icon.className = 'bi-moon-stars-fill text-light';


    if (activeTheme === 'light') {
    
    
    setTheme('dark');
}
    else{ 
        setTheme('light');
        document.getElementById("toggleDay").style.background = "yellow";
        icon.className = 'bi-brightness-high-fill';
}
}

const setThemeOnInit = () => {
    const savedTheme = localStorage.getItem('theme');
    savedTheme
        ? body.setAttribute('data-theme', savedTheme)
        : setTheme(initialTheme);
    
        
}




//For portfolio file
document.addEventListener("click", function (e){
    if(e.target.classList.contains("gallery-item")){
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
        myModal.show();
    }
})
