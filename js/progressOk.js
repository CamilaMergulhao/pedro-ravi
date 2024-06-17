export default function progressOk() {
    const progressCicle = document.querySelectorAll('.progress');
    const btnRegistrar = document.getElementById('btn-register');
    const trainingRecordsInfos = document.querySelector('.training-records-infos');
    const modalRegisterWeek = document.querySelector('.modal-week-ctn');
    const registerConfirm = document.getElementById('registerConfirm');
    const registerCancel = document.getElementById('registerCancel');
    const weekNumbers = document.getElementById('weekNumbers'); // Obter o elemento weekNumbers
    const msgComplete = document.querySelector('.register-box span');

    progressCicle.forEach((cicle) => {
        cicle.addEventListener('click', () => {
            cicle.classList.toggle('ok');

            const algumOk = Array.from(progressCicle).some(cicle => cicle.classList.contains('ok'));

            if (algumOk) {
                btnRegistrar.classList.add('btn-registrar-ativo');
            } else {
                btnRegistrar.classList.remove('btn-registrar-ativo');
            }
        });
    });

    function registerWeek() {
        if (btnRegistrar.classList.contains('btn-registrar-ativo')) {
            const currentWeeksCount = trainingRecordsInfos.children.length;

            if (currentWeeksCount >= 4) {
                msgComplete.classList.add('msgcomplete');
                return; // Adicionado return para sair da função se já existirem 4 semanas
            }

            modalRegisterWeek.classList.add('registerShow');

            registerConfirm.onclick = () => {
                const newWeek = document.createElement('li');
                newWeek.classList.add('training-records-week');

                const weekNumber = currentWeeksCount + 1;
                newWeek.innerHTML = `
                    <h3 class="text-20 color-0">Semana ${weekNumber}</h3>
                    <span class="text-20 color-brand">100%</span>
                `;

                trainingRecordsInfos.appendChild(newWeek);

                progressCicle.forEach((cicle) => {
                    cicle.classList.remove('ok');
                });

                btnRegistrar.classList.remove('btn-registrar-ativo');
                modalRegisterWeek.classList.remove('registerShow');

                weekNumbers.textContent = `${weekNumber}/4`; // Atualiza o texto do elemento weekNumbers

                registerConfirm.onclick = null;

                // Remove a mensagem de semana completa quando uma nova semana é adicionada
                msgComplete.classList.remove('msgcomplete');
            };

            registerCancel.onclick = () => {
                modalRegisterWeek.classList.remove('registerShow');
                registerCancel.onclick = null;
            };
        }
    }

    btnRegistrar.addEventListener('click', registerWeek);
}
