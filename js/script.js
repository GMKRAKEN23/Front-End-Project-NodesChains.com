// import code JS
import { dropdownNavBar } from "./header_dropdown_navbar.js";
import { getChrono } from "./timer.js";
import { switchArticle } from "./switch_article.js";
import { isElementInViewport, showChartIfVisible, initialize } from "./chart_crypto.js";
import { btnReactSection } from "./displaySection.js";
import { swiperCard } from "./swiper.js";

// call swipper call
swiperCard();
// call function btnReactSection
btnReactSection();
// call function dropdownNavBar 
dropdownNavBar();
// call function getChrono
getChrono();
// call function switchArticle
switchArticle();

isElementInViewport();

showChartIfVisible();

initialize();