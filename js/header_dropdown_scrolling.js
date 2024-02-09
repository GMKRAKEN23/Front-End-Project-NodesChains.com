// function who toggle Menu
let burgerMenu = document.querySelector('.header_burger_menu');
let dropScrolling = document.getElementById('header_nav_bar_dropdown_scrolling');
let dropScrollingMenu = document.getElementById('header_nav_bar_dropdown_scrolling_menu');
let headerCross = document.getElementById('header_cross');

// add event click on btn burger menu
function burgerMenutoggle() {
    burgerMenu.addEventListener('click', function () {

        if (dropScrolling.style.display === "none" || dropScrolling.style.display === "") {
            dropScrollingMenu.style.display = "block";
        } else {
            dropScrollingMenu.style.display = "none";
        }
    })
}

// add event click on cross for delete menu nav bar
function crossHeader() {
    headerCross.addEventListener('click', function () {

        if (dropScrolling.style.display === "flex" || dropScrolling.style.display === "") {
            dropScrollingMenu.style.display = "none";
        }
    })
}

// export variables and functions toggleMenuNavBar
export { burgerMenu, dropScrolling, dropScrollingMenu, headerCross, burgerMenutoggle, crossHeader };