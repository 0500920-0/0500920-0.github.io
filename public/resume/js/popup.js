// this script is only for the navigation bar of smartphone-sized screen

const $nav = document.querySelector('#header nav');

document.querySelector('#header .menu').addEventListener('click', () => {
    // show the navigation list and make it fade in
    $nav.classList.add('show');
});

document.addEventListener('click', (event) => {
    // if click outside the navigation list
    if (!event.target.matches('#header .menu, #header nav')) {
        // make it fade out first
        $nav.classList.remove('show');
    }
}, { capture: true });