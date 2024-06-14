export default function progressOk() {
    const progressCicle = document.querySelectorAll('.progress');
    const btnRegistrar = document.getElementById('btn-register');
    const trainingRecordsInfos = document.querySelector('.training-records-infos'); // Obter a lista de semanas
    const modalRegisterWeek = document.querySelector('.modal-week-ctn');
    const registerConfirm = document.getElementById('registerConfirm');
    const registerCancel = document.getElementById('registerCancel');

    progressCicle.forEach((cicle) => {
        cicle.addEventListener('click', () => {
            cicle.classList.toggle('ok');

            // Verifica se algum item de progresso tem a classe 'ok'
            const algumOk = Array.from(progressCicle).some(cicle => cicle.classList.contains('ok'));

            // Adiciona ou remove a classe do botão com base na condição
            if (algumOk) {
                btnRegistrar.classList.add('btn-registrar-ativo');
            } else {
                btnRegistrar.classList.remove('btn-registrar-ativo');
            }
        });
    });



    
    // Função que será chamada ao clicar no botão de registro
    function registerWeek() {
        // Verifica se o botão tem a classe 'btn-registrar-ativo'
        if (btnRegistrar.classList.contains('btn-registrar-ativo')) {
            // Verifica o número de semanas existentes
            const currentWeeksCount = trainingRecordsInfos.children.length;

            // Verifica se já existem 4 semanas
            if (currentWeeksCount >= 4) {
                alert('Você já completou todas as semanas de treino.');
                return; // Sai da função se já existirem 4 semanas
            }

            // Exibe o modal de confirmação
            modalRegisterWeek.classList.add('registerShow');

            // Define o evento para o botão "Sim"
            registerConfirm.onclick = () => {
                // Adiciona uma nova semana à lista
                const newWeek = document.createElement('li');
                newWeek.classList.add('training-records-week');

                // Conteúdo da nova semana (modifique conforme necessário)
                const weekNumber = currentWeeksCount + 1; // Número da nova semana
                newWeek.innerHTML = `
                    <h3 class="text-20 color-0">Semana ${weekNumber}</h3>
                    <span class="text-20 color-brand">100%</span>
                `;

                // Adiciona a nova semana à lista de progresso
                trainingRecordsInfos.appendChild(newWeek);

                // Remove a classe 'ok' de todos os itens de progresso
                progressCicle.forEach((cicle) => {
                    cicle.classList.remove('ok');
                });

                // Remove a classe 'btn-registrar-ativo' do botão
                btnRegistrar.classList.remove('btn-registrar-ativo');

                // Fecha o modal
                modalRegisterWeek.classList.remove('registerShow');

                // Limpa o evento do botão "Sim" para evitar acumulação
                registerConfirm.onclick = null;
            };

            // Define o evento para o botão "Não"
            registerCancel.onclick = () => {
                // Fecha o modal sem adicionar a semana
                modalRegisterWeek.classList.remove('registerShow');

                // Limpa o evento do botão "Não" para evitar acumulação
                registerCancel.onclick = null;
            };
        }
    }

    // Adiciona o evento de clique ao botão de registro
    btnRegistrar.addEventListener('click', registerWeek);
}

