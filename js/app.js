/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const navbarList = document.getElementById('navbar__list')
const allSections = document.querySelectorAll('section')

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Build the nav & menu and scroll to section on link click

allSections.forEach(item => {
    let navListItems = item = `<li><a href="#${item.id}" class="menu__link" data-menu-link="${item.id}">${item.getAttribute("data-nav")}</a></li>`
    navbarList.insertAdjacentHTML('beforeend', navListItems);
})

// Set sections as active

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/