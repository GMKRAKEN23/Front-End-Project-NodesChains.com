// function who display section vertical
function btnReactSection() {
    let btnShowDynamicSection = document.querySelector('.reactive_additional_information_section_btn');
    let iconBtn = document.querySelector('.bxs-radiation');
    let reactiveSection = document.querySelector('.reactive_additional_information_section');

    // add and delete class
    btnShowDynamicSection.addEventListener('click', function () {
        reactiveSection.classList.toggle('active_section_reactive');
        iconBtn.classList.toggle('active_section_reactive')
    })
}

// export function btnReactSection
export { btnReactSection };