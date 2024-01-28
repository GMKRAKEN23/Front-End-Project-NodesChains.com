function switchArticle() {

    let buttons = document.querySelectorAll('.section_service_company_container_header_menu_link');
    let articles = document.querySelectorAll('.section_service_swicth_container_article');

    for (let i = 1; i < articles.length; i++) {
        articles[i].style.display = 'none';
    }

    buttons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();

            let articleIndex = button.getAttribute('data-index');

            articles.forEach(function (article) {
                article.style.display = 'none';
            });

            document.getElementById(articleIndex).style.display = 'block';
            document.getElementById(articleIndex).style.display = 'flex';
        });
    });
}

export { switchArticle }

