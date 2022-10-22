
// Select Elements
let openMenu = document.querySelector('.list');
let closeMenu = document.querySelector('.close-menu');
let navBar = document.querySelector('.nav-bar');

openMenu.addEventListener('click', () => {
    openMenu.classList.toggle('show');
    closeMenu.classList.toggle('show');
    navBar.classList.toggle('sm');
})
closeMenu.addEventListener('click', () => {
    console.log("Clicked");
    openMenu.classList.toggle('show');
    closeMenu.classList.toggle('show');
    navBar.classList.toggle('sm');
})

// Add Event Listener To Nav Bar
// Select Elements
let tab = document.querySelectorAll(" .nav-bar li a");
let tabsArray = Array.from(tab);
// To make Nav Elements Active Or Unactive
tabsArray.forEach((ele) =>{
    ele.addEventListener('click',(e) => {
        tabsArray.forEach((ele) =>{
            ele.classList.remove('active');
        });
        e.currentTarget.classList.add("active");
        navBar.classList.toggle('sm');
    });
});