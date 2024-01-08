
// const radioButtons = document.querySelectorAll('input[type="radio"]');

// // Selecione o botão "Calcular"
// const calcularButton = document.getElementById('calcular-button');

// // Array para armazenar as respostas
// const respostas = [];

// // Array para as respostas corretas (substitua com suas respostas corretas)
// const respostasCorretas = [1, 2, 1, 2, 1, 2, 1];

// // Adicione um evento de mudança a todos os radio buttons
// radioButtons.forEach((radio, index) => {
//     radio.addEventListener('change', () => {
//         // Atualize as respostas no array
//         respostas[index] = parseInt(radio.value);

//         // Verifique se todas as perguntas foram respondidas
//         const todasPerguntasRespondidas = respostas.length === 7;

//         // Atualize o estado do botão "Calcular"
//         calcularButton.style.display = todasPerguntasRespondidas ? 'block' : 'none';
//     });
// });

// Adicione um evento de clique ao botão "Calcular"
// calcularButton.addEventListener('click', () => {
//     // Verifique se o usuário respondeu a todas as perguntas
//     if (respostas.length !== 7) {
//         alert('Por favor, responda todas as perguntas antes de calcular.');
//         return;
//     }

//     // Compare as respostas com as respostas corretas
//     const respostasIguais = respostas.every((valor, index) => valor === respostasCorretas[index]);

//     // Se as respostas forem iguais, mostre a imagem
//     if (respostasIguais) {
//         // Substitua o código para exibir a imagem aqui
//         alert('Parabéns! Suas respostas estão corretas.');
//     } else {
//         alert('Suas respostas estão incorretas. Tente novamente.');
//     }
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const btnLoja = document.getElementById("evento-loja-btn");
//     const btnInicial = document.getElementById("evento-inicial-btn");
//     const btnSazonal = document.getElementById("evento-sazonal-btn");

//     const sectionLoja = document.getElementById("evento-loja");
//     const sectionInicial = document.getElementById("evento-inicial");
//     const sectionSazonal = document.getElementById("evento-sazonal");

//     btnLoja.addEventListener("click", function () {
//         hideAllSections();
//         sectionLoja.classList.add("visible");
//     });

//     btnInicial.addEventListener("click", function () {
//         hideAllSections();
//         sectionInicial.classList.add("visible");
//     });

//     btnSazonal.addEventListener("click", function () {
//         hideAllSections();
//         sectionSazonal.classList.add("visible");
//     });

//     function hideAllSections() {
//         sectionLoja.classList.remove("visible");
//         sectionInicial.classList.remove("visible");
//         sectionSazonal.classList.remove("visible");
//     }
// });


const buttons = [...document.querySelectorAll(".btn-filter-h")];
const divs = [...document.querySelectorAll(".show-hidden")];

buttons.map((button) => {
    button.addEventListener("click", function () {
        const filterType = this.getAttribute("data-filter");
        const isActive = this.classList.contains("ativo");

        // Desativa todos os botões
        buttons.map((btn) => {
            btn.classList.remove("ativo");
        });

        // Oculta todas as divs
        divs.map((div) => {
            div.style.display = "none";
        });

        // Se o botão clicado não estava ativo, ativa e mostra as divs correspondentes
        if (!isActive) {
            this.classList.add("ativo");
            divs.map((div) => {
                if (div.classList.contains(filterType)) {
                    div.style.display = "block";
                }
            });
        }
    });
});
