// Function switchArticle
function switchArticle() {

    // Select buttons and articles 
    let buttons = document.querySelectorAll('.section_service_company_container_header_menu_link');
    let articles = document.querySelectorAll('.section_service_swicth_container_article');

    // Loop initialize to 1 to leave the first item visible
    for (let i = 1; i < articles.length; i++) {
        articles[i].style.display = 'none'; // hide article 2,3, 4 except 1
    }

    // Add event listener to each button
    buttons.forEach(function (button) {
        // Add event click on button
        button.addEventListener('click', function (event) {
            // Prevent default to prevent the page from reloading
            event.preventDefault();
            // Get the index of the article associated with the button
            let articleIndex = button.getAttribute('data-index');
            // Hide all articles
            articles.forEach(function (article) {
                article.style.display = 'none';
            });

            // Display the selected article with display block and/or flex
            document.getElementById(articleIndex).style.display = 'block';
            document.getElementById(articleIndex).style.display = 'flex';
        });
    });
}

// export function switchArticle
export { switchArticle }

