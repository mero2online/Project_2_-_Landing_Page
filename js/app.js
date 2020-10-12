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
const navbarMenu = document.querySelector('.navbar__menu')

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

// Build the nav & menu

allSections.forEach(item => {
    let navListItems = item = `<li><a href="#${item.id}" class="menu__link" data-menu-link="${item.id}">${item.getAttribute("data-nav")}</a></li>`
    navbarList.insertAdjacentHTML('beforeend', navListItems);
});

/**
 * End Main Functions
 * Begin Events
 * 
 */

// Add class 'active' to section when near top of viewport
// Set sections as active in navbar

window.addEventListener('scroll', event => {
    let fromTop = window.scrollY;

    allSections.forEach(item => {
        let currentSection = document.querySelector(`#${item.id}`);
        let navLink = document.querySelector(`[data-menu-link='${item.id}']`);

        // Ternary operator
        currentSection.offsetTop - 200 <= fromTop &&
            currentSection.offsetTop - 200 + currentSection.offsetHeight > fromTop ?
            item.classList.add("active") & navLink.classList.add("active") :
            item.classList.remove("active") & navLink.classList.remove("active");
    });
});

// Scroll to anchor ID using scrollTO event and scroll to section on link click
document.querySelectorAll('.menu__link').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        let ele = document.getElementById(`${link.getAttribute("data-menu-link")}`)
        ele.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
});

// Hide fixed navigation bar while not scrolling for 5s
let isScrolling;
window.addEventListener('scroll', function (event) {
    window.clearTimeout(isScrolling);

    isScrolling = setTimeout(function () {
        navbarMenu.classList.add("navbar__menu__hide");
        setTimeout(function () {
            navbarMenu.classList.add("navbar__menu__remove");
        }, 1000)

    }, 4000);
});

window.onscroll = function () {
    navbarMenu.classList.remove("navbar__menu__hide", "navbar__menu__remove"); // To show navbar while scrolling
    toggleBtnFunc() // to show and hide scroll to the top button while scrolling
};

// Click the button to scroll to the top of the page
let topBtn = document.querySelector(".goToTopBtn");

function toggleBtnFunc() {
    // Ternary operator
    document.body.scrollTop > 400 || document.documentElement.scrollTop > 400 ?
        topBtn.style.display = "block" :
        topBtn.style.display = "none";
}

function goToTop() {
    document.body.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
    document.documentElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

/**
 * 
 * End Events
 * 
 */