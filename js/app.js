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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const Ul = document.querySelector('ul');
const fragment = document.createDocumentFragment();

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

// build the nav
sections.forEach(function(section){
    const navData = section.getAttribute("data-nav");
    const IdAttribute = section.getAttribute('id');
    const newli = document.createElement("li");
    const links = document.createElement("a");
    links.classList.add("menu__link");
    links.setAttribute('href',IdAttribute);
    links.addEventListener('click',function(event){
        event.preventDefault();
        section.scrollIntoView({behavior : "smooth"})
    });
    const text = document.createTextNode(navData);

    links.appendChild(text);
    newli.appendChild(links);
    fragment.appendChild(newli);
});

Ul.appendChild(fragment);

// Add class 'active' to section when near top of viewport
window.addEventListener('scroll',()=>{const activesec = document.getElementsByClassName('your-active-class')[0];
    if(activesec !== undefined){
        activesec.classList.remove('your-active-class')
    };
    sections.forEach(function(section){
        const react = section.getBoundingClientRect();
        if(react.top >=-50 && react.top<400){
            section.classList.add('your-active-class');
        }
    })
});

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


