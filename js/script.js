// import code JS
import { dropdownNavBar } from "./header_dropdown_navbar.js";
import { getChrono } from "./timer.js";
import { switchArticle } from "./switch_article.js";
import { isElementInViewport, showChartIfVisible, initialize } from "./chart_crypto.js";
import { btnReactSection } from "./displaySection.js";
import { swiperCard } from "./swiper.js";
import { hideLoader, showLoader, timerHideLoader} from "./loader.js";
import { arrowInput, inputNewsLetter, displayPopUp, overlay, btnConfirm, validateEmail } from "./newsletter_pop_pup.js";

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
// call function Loader
timerHideLoader();
// call function isElementInViewport
isElementInViewport();
// call function showChartIfVisible
showChartIfVisible();
// call function initialize for chart
initialize();