// Selecione todos os radio buttons
const radioButtons = document.querySelectorAll('input[type="radio"]');

// Selecione o botão "Calcular"
const calcularButton = document.getElementById('calcular-button');

// Inicialize um objeto para armazenar as respostas
const respostas = {};

// Adicione um evento de mudança a todos os radio buttons
radioButtons.forEach((radio) => {
    radio.addEventListener('change', () => {
        // Atualize as respostas no objeto
        respostas[radio.name] = radio.value;

        // Verifique se todas as perguntas foram respondidas
        const todasPerguntasRespondidas = Object.keys(respostas).length === 7;

        // Atualize o estado do botão "Calcular"
        calcularButton.disabled = !todasPerguntasRespondidas;
    });
});

// Adicione um evento de clique ao botão "Calcular"
calcularButton.addEventListener('click', () => {
    // Agora, o objeto "respostas" contém as respostas de todas as perguntas
    console.log(respostas);
    // Faça seu cálculo com base nas respostas
});
