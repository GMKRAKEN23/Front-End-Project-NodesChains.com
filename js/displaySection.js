let btnShowDynamicSection = document.querySelector('.reactive_additional_information_section_btn');
let iconBtn = document.querySelector('.bxs-radiation');
let reactiveSection = document.querySelector('.reactive_additional_information_section');

btnShowDynamicSection.addEventListener('click', function (){
    reactiveSection.classList.toggle('active_section_reactive');
    iconBtn.classList.toggle('active_section_reactive')
})