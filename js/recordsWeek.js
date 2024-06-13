export default function recordsWeek(){
    const titleAccordionRecords = document.querySelector(".training-records-title-box");
    const recordsInfos = document.querySelector(".training-records-infos");
    const arrowAccordionRecords = document.querySelector(".arrow-accordion");

 

    function listClickRecords(){
        recordsInfos.classList.toggle('ativoRecords');
        titleAccordionRecords.classList.toggle('ativoRecords');
        arrowAccordionRecords.classList.toggle('ativoRecords');
    }
        
    titleAccordionRecords.addEventListener('click', listClickRecords);


}