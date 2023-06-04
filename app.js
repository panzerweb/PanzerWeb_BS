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


//FOR MODAL
document.addEventListener("DOMContentLoaded", function() {
  // Get all image containers
  const imageContainers = document.querySelectorAll(".image-container");

  // Get the modal image element
  const modalImage = document.getElementById("modalImage");

  // Create a new instance of the Bootstrap Modal
  const modal = new bootstrap.Modal(document.getElementById("exampleModal"));

  // Loop through each image container
  imageContainers.forEach(function(container) {
    const img = container.querySelector("img");
    
    // Add click event listener to each image
    img.addEventListener("click", function() {
      // Set the source of the modal image to the clicked image source
      modalImage.src = img.src;

      // Show the modal
      modal.show();
    });
  });

  // Add event listener to the modal for when it is completely hidden
  modal.addEventListener("hidden.bs.modal", function() {
    // Clear the modal image source when the modal is closed
    modalImage.src = "";
  });
});


// Get all the filter buttons
const filterButtons = document.querySelectorAll('.filter-button');


// Add click event listener to each filter button
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the selected category from the data attribute
    const category = button.dataset.category;

    // Filter the image containers based on the selected category
    const imageContainers = document.querySelectorAll('.image-container1');

    imageContainers.forEach(container => {
      if (category === 'all' || container.dataset.category === category) {
        container.style.display = 'block'; // Show the container
      } else {
        container.style.display = 'none'; // Hide the container
      }
    });

    // Show or hide the carousel based on the selected category
  });
});


//!FOR GRAPHIC DESIGN

const filterButtons1 = document.querySelectorAll('.filter-button');
const graphicTitle = document.getElementById('Graphic-title');

// Get all the image containers
const imageContainers1 = document.querySelectorAll('.image-container');


// Add click event listener to each filter button
filterButtons1.forEach(button => {
  button.addEventListener('click', () => {
    // Get the selected category from the data attribute
    const category = button.dataset.category;

    // Filter the image containers based on the selected category
    imageContainers1.forEach(container => {
      if (category === 'all' || container.dataset.category === category) {
        container.style.display = 'block'; // Show the container
        graphicTitle.style.display = 'block';
        if(category === "graphic"){
          graphicTitle.style.display = 'block';
        }
      } else {
        container.style.display = 'none'; // Hide the container
        graphicTitle.style.display = 'none'
      }
    });
  });
});

