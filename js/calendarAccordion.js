export default function calendarAccordion(){

    const titleAccordion = document.querySelectorAll('[data-accordion="js-accordion"],.calendar-days-title')
        console.log('olá')

        if(titleAccordion.length){
        
        function listClick(){
        
        this.classList.toggle('ativo');
      
        // Encontre a resposta associada à pergunta clicada
         const infosAccordion = this.nextElementSibling;
      
         // Se encontrar a resposta associada, aplique a classe 'ativo'
         if (infosAccordion) {
             infosAccordion.classList.toggle('ativo');
         }
      }
        
        
      titleAccordion.forEach((item) => {
        
      
            item.addEventListener('click', listClick);
        });
    }




};