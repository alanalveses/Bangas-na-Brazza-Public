//SHOW RANK HERO
const buttons = [...document.querySelectorAll(".btn-filter-hero")];
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


//Filtrar os herois por classe e lane


const buttonLane = document.querySelectorAll(".button-lane");
const buttonClass = document.querySelectorAll(".button-class");
const spotlightHeros = document.querySelectorAll(".tierlist-hero");

function filterHeros() {
    const laneSelected = Array.from(buttonLane).filter(btn => btn.classList.contains("ativo"));
    const classSelected = Array.from(buttonClass).find(btn => btn.classList.contains("ativo"));

    spotlightHeros.forEach(hero => {
        const laneHero = hero.getAttribute("data-lane");
        const classHero = hero.getAttribute("data-class");

        const laneCorrespondente = laneSelected.length === 0 || laneSelected.some(btn => btn.getAttribute("data-lane") === laneHero);
        const classCorrespondente = !classSelected || classHero === classSelected.getAttribute("data-class");

        if (laneCorrespondente && classCorrespondente) {
            hero.style.display = "initial";
        } else {
            hero.style.display = "none";
        }
    });
}

// Adicionar ou remover a classe "ativo" quando um botão é clicado
function toggleAtivo(element) {
    element.classList.toggle("ativo");
}

buttonClass.forEach(botao => {
    botao.addEventListener("click", () => {
        toggleAtivo(botao);
        filterHeros();
    });
});

buttonLane.forEach(botao => {
    botao.addEventListener("click", () => {
        if (!botao.classList.contains("ativo")) {
            // Desativa todos os outros botões de gênero
            buttonLane.forEach(btn => btn.classList.remove("ativo"));
        }
        toggleAtivo(botao);
        filterHeros();
    });
});

filterHeros();


// Abrir a seção de contato

const openContat = document.getElementById('open-contact');

const telaContact = document.getElementById('contact');

openContat.addEventListener('click', () => toggleContact(telaContact));

function toggleContact(element) {
    element.style.display = element.style.display === 'none' ? 'block' : 'none';
}

//Refatorando o código
// const openContact = document.getElementById('open-contact');
// const telaContact = document.getElementById('contact');

// openContact.addEventListener('click', () => toggleContact(telaContact));

// function toggleContact(element) {
//     if (element.style.display === 'none' || element.style.display === '') {
//         element.style.display = 'block';
//     } else {
//         element.style.display = 'none';
//     }
// }
