//TRANSIÇÃO HERÓIS INICIAIS

//Nana
const boxNana = document.getElementById('box-nana');
const guiaNanaImagem = document.getElementById('guia-nana-imagem');
const guiaNanaInfo = document.getElementById('guia-nana-info');

// Adicione o evento mouseover
boxNana.addEventListener('mouseover', () => {
  guiaNanaImagem.style.display = 'none';
  guiaNanaInfo.style.display = 'block';
});

// Adicione o evento mouseout
boxNana.addEventListener('mouseout', () => {
  guiaNanaImagem.style.display = 'block';
  guiaNanaInfo.style.display = 'none';
});


// Adicione o evento de clique
boxNana.addEventListener('click', () => {
  if (guiaNanaImagem === 'block') {
    guiaNanaImagem.style.display = 'none';
    guiaNanaInfo.style.display = 'block';
  } else {
    
    guiaNanaImagem.style.display = 'block';
    guiaNanaInfo.style.display = 'none';
  }
});


//Miya
const boxMiya = document.getElementById('box-miya');
const guiaMiyaImagem = document.getElementById('guia-miya-imagem');
const guiaMiyaInfo = document.getElementById('guia-miya-info');

// Adicione o evento mouseover
boxMiya.addEventListener('mouseover', () => {
  guiaMiyaImagem.style.display = 'none';
  guiaMiyaInfo.style.display = 'block';
});

// Adicione o evento mouseout
boxMiya.addEventListener('mouseout', () => {
  guiaMiyaImagem.style.display = 'block';
  guiaMiyaInfo.style.display = 'none';
});

//Tigreal
const boxTigreal = document.getElementById('box-tigreal');
const guiaTigrealImagem = document.getElementById('guia-tigreal-imagem');
const guiaTigrealInfo = document.getElementById('guia-tigreal-info');

// Adicione o evento mouseover
boxTigreal.addEventListener('mouseover', () => {
  guiaTigrealImagem.style.display = 'none';
  guiaTigrealInfo.style.display = 'block';
});

// Adicione o evento mouseout
boxTigreal.addEventListener('mouseout', () => {
  guiaTigrealImagem.style.display = 'block';
  guiaTigrealInfo.style.display = 'none';
});


//Estes
const boxEstes = document.getElementById('box-estes');
const guiaEstesImagem = document.getElementById('guia-estes-imagem');
const guiaEstesInfo = document.getElementById('guia-estes-info');

// Adicione o evento mouseover
boxEstes.addEventListener('mouseover', () => {
  guiaEstesImagem.style.display = 'none';
  guiaEstesInfo.style.display = 'block';
});

// Adicione o evento mouseout
boxEstes.addEventListener('mouseout', () => {
  guiaEstesImagem.style.display = 'block';
  guiaEstesInfo.style.display = 'none';
});

//Saber
const boxSaber = document.getElementById('box-saber');
const guiaSaberImagem = document.getElementById('guia-saber-imagem');
const guiaSaberInfo = document.getElementById('guia-saber-info');

// Adicione o evento mouseover
boxSaber.addEventListener('mouseover', () => {
  guiaSaberImagem.style.display = 'none';
  guiaSaberInfo.style.display = 'block';
});

// Adicione o evento mouseout
boxSaber.addEventListener('mouseout', () => {
  guiaSaberImagem.style.display = 'block';
  guiaSaberInfo.style.display = 'none';
});

//Balmond
const boxBalmond = document.getElementById('box-balmond');
const guiaBalmondImagem = document.getElementById('guia-balmond-imagem');
const guiaBalmondInfo = document.getElementById('guia-balmond-info');

// Adicione o evento mouseover
boxBalmond.addEventListener('mouseover', () => {
  guiaBalmondImagem.style.display = 'none';
  guiaBalmondInfo.style.display = 'block';
});

// Adicione o evento mouseout
boxBalmond.addEventListener('mouseout', () => {
  guiaBalmondImagem.style.display = 'block';
  guiaBalmondInfo.style.display = 'none';
});



//Filtro de videos tutorial

document.addEventListener("DOMContentLoaded", () => {
    const videoToggles = Array.from(document.querySelectorAll(".video-toggle"));
    const videos = Array.from(document.querySelectorAll(".video"));

    videoToggles.forEach(toggle => {
        toggle.addEventListener("click", () => {
            const videoIndex = toggle.getAttribute("data-video");
            const videoContainer = videos.find(video => video.getAttribute("data-video") === videoIndex);

            // Verifica se o vídeo atual já está visível
            const isVideoVisible = videoContainer.style.display === "block";

            // Oculte todos os vídeos
            videos.forEach(video => video.style.display = "none");

            // Remova a classe "active" de todas as divs de ativação
            videoToggles.forEach(toggle => toggle.classList.remove("active"));

            // Se o vídeo atual não estava visível, mostre-o e marque a div como ativa
            if (!isVideoVisible) {
                videoContainer.style.display = "block";
                toggle.classList.add("active");
            }
        });
    });
});


//Acordion/Guia - TESTE SUA AFINIDADE

const mostrarBotao = document.querySelector("#btn-questions-accordion");
const minhaDiv = document.querySelector("#accordion-hidden");


mostrarBotao.addEventListener("click", function() {
    // Remova a classe "hidden" para mostrar a div
    minhaDiv.classList.remove("accordion-container-hidden");
});


function verificaSelecao() {
    const botoesRadio = document.querySelectorAll('input[type="radio"]');
    const botaoAccordion = document.getElementById('btn-questions-accordion');
  
    const todosSelecionados = Array.from(botoesRadio).every(radio => radio.checked);
  
    if (todosSelecionados) {
        botaoAccordion.classList.remove('disabled-button'); // Remove a classe "disabled-button"
    } else {
        botaoAccordion.classList.add('disabled-button'); // Adiciona a classe "disabled-button"
    }
  }
  
  // Adicione um ouvinte de evento de clique a todos os botões de rádio
  const botoesRadio = document.querySelectorAll('input[type="radio"]');
  botoesRadio.forEach(radio => {
    radio.addEventListener('click', verificaSelecao);
  });
  
  const imageMago = [
    'img/herois-png/mago/gord-no-1.png',
    'img/herois-png/mago/kagura-exorcist.png',
    'img/herois-png/mago/selena-thunder-flash.png',
    'img/herois-png/mago/kadita-white-robin.png',
    'img/herois-png/mago/luo-yi-elysium-guardian.png',
    'img/herois-png/mago/nana-collector.png',
    'img/herois-png/mago/valir-legend.png',
    'img/herois-png/mago/aurora-zodiac-aquarius.png',
    'img/herois-png/mago/lunox-legend.png'
  ];
  
  const imageAssassino = [
    'img/herois-png/assassino/gusion-collector.png',
    'img/herois-png/assassino/benedetta-death-oath.png',
    'img/herois-png/assassino/helcurt-ice-scythe.png',
    'img/herois-png/assassino/ling-m-world.png',
    'img/herois-png/assassino/lancelot-hero.png',
    'img/herois-png/assassino/karina-doom-duelist.png',
    'img/herois-png/assassino/alucard-sweet-fantasy.png',
    'img/herois-png/assassino/fanny-skylark.png',
    'img/herois-png/assassino/hayabusa-shura.png',
  ];
  
  const imageAtirador = [
    'img/herois-png/atirador/hanabi-riverland-phoenix.png',
    'img/herois-png/atirador/wanwan-m-world.png',
    'img/herois-png/atirador/layla-saber.png',
    'img/herois-png/atirador/miya-atomic-pop.png',
    'img/herois-png/atirador/moskov-twilight-dragon.png',
    'img/herois-png/atirador/brody-quantum-grip.png',
    'img/herois-png/atirador/claude-mecha-dragon.png',
    'img/herois-png/atirador/lesley-falcon-mistress.png',
    'img/herois-png/atirador/kimmy-astrocat.png'
  ];
  
  const imageTank = [
    'img/herois-png/tank/baxia-badass-roller.png',
    'img/herois-png/tank/fredrinn-neo-beasts.png',
    'img/herois-png/tank/khufra-dreadful-clown.png',
    'img/herois-png/tank/akai-imperial-assassin.png',
    'img/herois-png/tank/franco-king-of-hell.png',
    'img/herois-png/tank/minotaurtaurus-zodiac.png',
    'img/herois-png/tank/hylos-iron-steed.png',
    'img/herois-png/tank/lolita-lion-dance.png',
    'img/herois-png/tank/uranus-game-dominator.png'
  ];
  
  const imageSuporte = [
    'img/herois-png/suporte/mathilda-dream-groove.png',
    'img/herois-png/suporte/angela-the-aspirant.png',
    'img/herois-png/suporte/estes-galaxy-dominator.png',
    'img/herois-png/suporte/rafaela-biomedic.png',
    'img/herois-png/suporte/floryn-sanrio.png',
    'img/herois-png/suporte/diggie-onstellation.png',
    'img/herois-png/suporte/faramis-summer.png'
  ];
  
  const imageSoldado = [
    'img/herois-png/soldado/arlott-mobile-legends.png',
    'img/herois-png/soldado/x-borg-graffiti-fashion.png',
    'img/herois-png/soldado/martis-deathrock.png',
    'img/herois-png/soldado/ruby-prismatic-plume.png',
    'img/herois-png/soldado/dyrroth-mobile-legends.png',
    'img/herois-png/soldado/terizla-hammer-giant.png',
    'img/herois-png/soldado/yu-zhong-exorcist.png',
    'img/herois-png/soldado/lapu-lapu-vulcan.png',
    'img/herois-png/soldado/freya-raven-shogun.png',
  ];
  
  
  
  //calculo das radios
  const btnQuestionsAccordion = document.getElementById('btn-questions-accordion');
  
  btnQuestionsAccordion.addEventListener('click', function() {
      const valores = Array.from({ length: 4 }, (_, i) => {
          const valor = parseInt(document.querySelector(`input[name="pergunta${i + 1}"]:checked`).value);
          return valor;
      });
  
      const assassino = [1, 2, 1, 1];
      const assassino1 = [1, 2, 1, 2];
      const assassino2 = [1, 1, 1, 2];
    
      const mago = [2, 1, 1, 2];
      const mago1 = [2, 1, 2, 2];
      const mago2 = [2, 2, 2, 2];
      const mago3 = [2, 2, 2, 1];
    
      const atirador = [2, 2, 1, 1];
      const atirador1 = [2, 2, 1, 2];
    
      const tank = [1, 1, 1, 1];
      const tank1 = [1, 1, 2, 1];
    
      const soldado = [1, 1, 2, 2];
      const soldado1 = [1, 2, 2, 2];
      const soldado2 = [1, 2, 2, 1];
    
      const suporte = [2, 1, 1, 1];
      const suporte1 = [2, 1, 2, 1];
  
      const imagemRota = document.getElementById('imagemRota');
  
      if (
        valores.toString() === assassino.toString() || 
        valores.toString() === assassino1.toString() || 
        valores.toString() === assassino2.toString()
      ) {
  
        const respostaAssassino = imageAssassino[Math.floor(Math.random() * imageAssassino.length)];
        imagemRota.src = respostaAssassino;
        document.getElementById('sem-rota').classList.add('no-opacity');
        document.getElementById('rota-selva').classList.remove('no-opacity');
  
      } else if (
        valores.toString() === mago.toString() || 
        valores.toString() === mago1.toString() || 
        valores.toString() === mago2.toString() || 
        valores.toString() === mago3.toString()
      ) {
        
        const respostaMago = imageMago[Math.floor(Math.random() * imageMago.length)];
        imagemRota.src = respostaMago;
        document.getElementById('sem-rota').classList.add('no-opacity');
        document.getElementById('rota-meio').classList.remove('no-opacity');
      } else if (
        valores.toString() === atirador.toString() || 
        valores.toString() === atirador1.toString()
      ) {
  
        const respostaAtirador = imageAtirador[Math.floor(Math.random() * imageAtirador.length)];
        imagemRota.src = respostaAtirador;
        document.getElementById('sem-rota').classList.add('no-opacity');
        document.getElementById('rota-ouro').classList.remove('no-opacity');
      } else if (
        valores.toString() === tank.toString() || 
        valores.toString() === tank1.toString()
      ) {
        
        const respostaTank = imageTank[Math.floor(Math.random() * imageTank.length)];
        imagemRota.src = respostaTank;    
        document.getElementById('sem-rota').classList.add('no-opacity');
        document.getElementById('rota-tank').classList.remove('no-opacity');
      } else if (
        valores.toString() === soldado.toString() || 
        valores.toString() === soldado1.toString() || 
        valores.toString() === soldado2.toString()
      ) {
  
        const respostaSoldado = imageSoldado[Math.floor(Math.random() * imageSoldado.length)];
        imagemRota.src = respostaSoldado;
        document.getElementById('sem-rota').classList.add('no-opacity');
        document.getElementById('rota-experiencia').classList.remove('no-opacity');
      } else if (
        valores.toString() === suporte.toString() || 
        valores.toString() === suporte1.toString()
      ) {
  
        const respostaSuporte = imageSuporte[Math.floor(Math.random() * imageSuporte.length)];
        imagemRota.src = respostaSuporte;
        document.getElementById('sem-rota').classList.add('no-opacity');
        document.getElementById('rota-suporte').classList.remove('no-opacity');
      } else {
          alert(`Um erro inesperado ocorreu, tente novamente. Se persistir, entre em contato com o Suporte.`); 
      }
  });
  

  