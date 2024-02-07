// declare variable element input newsletter
let inputNewsLetter = document.querySelector('.footer_container_info_newsletter_input');
// declare variable element arrow input newsletter
let arrowInput = document.querySelector('.bx-right-arrow-alt');
// declare variable element pop up
let displayPopUp = document.querySelector('.footer_pop_up');
// declare variable element overlay
let overlay = document.querySelector('.overlay');
// declare variable element btn confirm in pop up
let btnConfirm = document.querySelector('.footer_pop_up_newsletter_link');

// function who return regular expression email
function validateEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

// Event handler for click on arrowInput
arrowInput.addEventListener('click', function () {
    if (validateEmail(inputNewsLetter.value)) {
        displayPopUp.style.display = "block";
        overlay.style.display = "block";
    } else {
        alert('email isn\'t validate');
    }
});

// Event handler for "Enter" key press on inputNewsLetter
inputNewsLetter.addEventListener('keydown', function (event) {
    if (event.key === "Enter") 
     if (validateEmail(inputNewsLetter.value)) {
        displayPopUp.style.display = "block";
        overlay.style.display = "block";
    } else {
        // alert error when email isn't validate 
        alert('L\'adresse e-mail n\'est pas valide');
    }
});

// Event who delete pop up
btnConfirm.addEventListener('click', function (e) {
    e.preventDefault();
    displayPopUp.style.display = "none";
    inputNewsLetter.value = "";
});

// export event and function
export { arrowInput, inputNewsLetter, displayPopUp, overlay, btnConfirm, validateEmail };