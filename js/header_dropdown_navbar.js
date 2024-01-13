function dropdownNavBar() {
    let dropNav = document.querySelector('.header_nav_bar_drodpdown_container');
    let linkMore = document.querySelector('#more_link');

    linkMore.addEventListener('click', function () {

        if (dropNav.style.display === 'none' || dropNav.style.display === '') {
            dropNav.style.display = "flex";
            linkMore.style.color = "#1786F9";
        } else {
            dropNav.style.display = "none";
            linkMore.style.color = "#fbfafa";
        }
    })
}


export { dropdownNavBar };