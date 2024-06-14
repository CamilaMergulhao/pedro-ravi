export default function progressOk() {
    const progressCicle = document.querySelectorAll('.progress');
    const btnRegistrar = document.getElementById('btn-register');

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
};
