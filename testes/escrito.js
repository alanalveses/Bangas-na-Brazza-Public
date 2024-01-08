const botoesTipo = document.querySelectorAll(".filtro-tipo");
const botoesGenero = document.querySelectorAll(".filtro-genero");
const brinquedos = document.querySelectorAll(".brinquedo");

function filtrarBrinquedos() {
    const tiposSelecionados = Array.from(botoesTipo).filter(btn => btn.classList.contains("ativo"));
    const generoSelecionado = Array.from(botoesGenero).find(btn => btn.classList.contains("ativo"));

    brinquedos.forEach(brinquedo => {
        const tipoBrinquedo = brinquedo.getAttribute("data-tipo");
        const generoBrinquedo = brinquedo.getAttribute("data-genero");

        const tipoCorrespondente = tiposSelecionados.length === 0 || tiposSelecionados.some(btn => btn.getAttribute("data-tipo") === tipoBrinquedo);
        const generoCorrespondente = !generoSelecionado || generoBrinquedo === generoSelecionado.getAttribute("data-genero");

        if (tipoCorrespondente && generoCorrespondente) {
            brinquedo.style.display = "block";
        } else {
            brinquedo.style.display = "none";
        }
    });
}

// Adicionar ou remover a classe "ativo" quando um botão é clicado
function toggleAtivo(element) {
    element.classList.toggle("ativo");
}

botoesTipo.forEach(botao => {
    botao.addEventListener("click", () => {
        toggleAtivo(botao);
        filtrarBrinquedos();
    });
});

botoesGenero.forEach(botao => {
    botao.addEventListener("click", () => {
        if (!botao.classList.contains("ativo")) {
            // Desativa todos os outros botões de gênero
            botoesGenero.forEach(btn => btn.classList.remove("ativo"));
        }
        toggleAtivo(botao);
        filtrarBrinquedos();
    });
});

// Inicialmente, mostrar todos os brinquedos
filtrarBrinquedos();











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

buttonLane.forEach(botao => {
    botao.addEventListener("click", () => {
        toggleAtivo(botao);
        filterHeros();
    });
});

buttonClass.forEach(botao => {
    botao.addEventListener("click", () => {
        if (!botao.classList.contains("ativo")) {
            // Desativa todos os outros botões de gênero
            buttonClass.forEach(btn => btn.classList.remove("ativo"));
        }
        toggleAtivo(botao);
        filterHeros();
    });
});

// Inicialmente, mostrar todos os brinquedos
filterHeros();

