export default function trainingAccordion(){
    const titleAccordionUser = document.querySelector(".training-today-title-box");
    const trainingInfos = document.querySelector(".training-today-infos");
    const arrowAccordion = document.querySelector(".arrow-accordion");

    console.log(titleAccordionUser)

    function listClickUser(){
        trainingInfos.classList.toggle('ativoUser');
        titleAccordionUser.classList.toggle('ativoUser');
        arrowAccordion.classList.toggle('ativoUser');
    }
        
    titleAccordionUser.addEventListener('click', listClickUser);
}
