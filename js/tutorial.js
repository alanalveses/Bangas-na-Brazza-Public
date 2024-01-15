// Mudar atributos, skill, equipamento e história


document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.button-action');
  
    buttons.forEach(function(button, index) {
      button.addEventListener('click', function() {
        changeContent('content' + (index + 1));
      });
    });
});
  
function changeContent(contentId) {
var buttons = document.querySelectorAll('.button-action');
var contents = document.querySelectorAll('.sub-content');

buttons.forEach(function(button) {
    button.classList.remove('active');
});

contents.forEach(function(content) {
    content.classList.remove('active');
});

document.getElementById('button' + contentId[contentId.length - 1]).classList.add('active');
document.getElementById(contentId).classList.add('active');
}

// Mudar skills do heroi
document.addEventListener('DOMContentLoaded', function () {
  var skillButtons = document.querySelectorAll('.button-skill');

  skillButtons.forEach(function (button, index) {
    button.addEventListener('click', function () {
      changeSkillContent(index);
    });
  });

  function changeSkillContent(index) {
    var skillButtons = document.querySelectorAll('.button-skill');
    var skillContents = document.querySelectorAll('.content-skill');

    skillButtons.forEach(function (button) {
      button.classList.remove('active');
    });

    skillContents.forEach(function (content) {
      content.classList.remove('active');
    });

    skillButtons[index].classList.add('active');
    skillContents[index].classList.add('active');
  }
});


// Ver imagem maior

const nanaNormalSkin = document.getElementById('nana-normal');
const nanaAquaSkin = document.getElementById('nana-aqua');
const nanaMechaSkin = document.getElementById('nana-mecha');
const nanaChapeuSkin = document.getElementById('nana-chapeu');
const nanaCriadaSkin = document.getElementById('nana-criada');
const nanaElefantinhoSkin = document.getElementById('nana-elefantinho');
const nanaFadaSkin = document.getElementById('nana-fada');
const nanaFestaSkin = document.getElementById('nana-festa');
const nanaFuracaozinhoSkin = document.getElementById('nana-furacaozinho');
const nanaNevoasSkin = document.getElementById('nana-nevoas');

const closeNana = document.getElementById('close-nana');
const closeAqua = document.getElementById('close-aqua');
const closeMecha = document.getElementById('close-mecha');
const closeChapeu = document.getElementById('close-chapeu');
const closeCriada = document.getElementById('close-criada');
const closeElefantinho = document.getElementById('close-elefantinho');
const closeFada = document.getElementById('close-fada');
const closeFesta = document.getElementById('close-festa');
const closeFuracaozinho = document.getElementById('close-furacaozinho');
const closeNevoas = document.getElementById('close-nevoas');

const nanaExpand = document.getElementById('nanaExpand');
const aquaExpand = document.getElementById('aquaExpand');
const mechaExpand = document.getElementById('mechaExpand');
const chapeuExpand = document.getElementById('chapeuExpand');
const criadaExpand = document.getElementById('criadaExpand');
const elefantinhoExpand = document.getElementById('elefantinhoExpand');
const fadaExpand = document.getElementById('fadaExpand');
const festaExpand = document.getElementById('festaExpand');
const furacaozinhoExpand = document.getElementById('furacaozinhoExpand');
const nevoasExpand = document.getElementById('nevoasExpand');

nanaNormalSkin.addEventListener('click', () => toggleExpand(nanaExpand));
nanaAquaSkin.addEventListener('click', () => toggleExpand(aquaExpand));
nanaMechaSkin.addEventListener('click', () => toggleExpand(aquaExpand));
nanaChapeuSkin.addEventListener('click', () => toggleExpand(chapeuExpand));
nanaCriadaSkin.addEventListener('click', () => toggleExpand(criadaExpand));
nanaElefantinhoSkin.addEventListener('click', () => toggleExpand(elefantinhoExpand));
nanaFadaSkin.addEventListener('click', () => toggleExpand(fadaExpand));
nanaFestaSkin.addEventListener('click', () => toggleExpand(festaExpand));
nanaFuracaozinhoSkin.addEventListener('click', () => toggleExpand(furacaozinhoExpand));
nanaNevoasSkin.addEventListener('click', () => toggleExpand(nevoasExpand));

closeNana.addEventListener('click', () => closeExpand(nanaExpand));
closeAqua.addEventListener('click', () => closeExpand(aquaExpand));
closeMecha.addEventListener('click', () => closeExpand(aquaExpand));
closeChapeu.addEventListener('click', () => closeExpand(chapeuExpand));
closeCriada.addEventListener('click', () => closeExpand(criadaExpand));
closeElefantinho.addEventListener('click', () => closeExpand(elefantinhoExpand));
closeFada.addEventListener('click', () => closeExpand(fadaExpand));
closeFesta.addEventListener('click', () => closeExpand(festaExpand));
closeFuracaozinho.addEventListener('click', () => closeExpand(furacaozinhoExpand));
closeNevoas.addEventListener('click', () => closeExpand(nevoasExpand));

function toggleExpand(element) {
  element.style.display = element.style.display === 'none' ? 'block' : 'none';
}

function closeExpand(element) {
  element.style.display = 'none';
}
  

//                       reprodução de Video


// const videoSkill = [...document.querySelectorAll('.video-skill')];
// videoSkill.map = videoSkill
// const videoContainer = document.querySelector('.video-skill-content');

// videoContainer.addEventListener('mouseover', toggleVideo);
// videoContainer.addEventListener('click', toggleVideo);

// function toggleVideo() {
//     if (videoSkill.paused) {
//         videoSkill.play();
//         videoContainer.classList.add('playing');
//     } else {
//         videoSkill.pause();
//         videoContainer.classList.remove('playing');
//     }
// }

const videoSkills = document.querySelectorAll('.video-skill');
const videoContainer = document.querySelector('.video-skill-content');

videoSkills.forEach(videoSkill => {
    videoSkill.addEventListener('mouseover', toggleVideo);
    videoSkill.addEventListener('click', toggleVideo);
});

function toggleVideo() {
    if (this.paused) {
        this.play();
        videoContainer.classList.add('playing');
    } else {
        this.pause();
        videoContainer.classList.remove('playing');
    }
}