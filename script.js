document.addEventListener("DOMContentLoaded", function () {
    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");
    const btn3 = document.getElementById("btn3");

    const div1 = document.getElementById("div1");
    const div2 = document.getElementById("div2");
    const div3 = document.getElementById("div3");

    btn1.addEventListener("click", function () {
        hideAllDivs();
        div1.classList.add("visible");
    });

    btn2.addEventListener("click", function () {
        hideAllDivs();
        div2.classList.add("visible");
    });

    btn3.addEventListener("click", function () {
        hideAllDivs();
        div3.classList.add("visible");
    });

    function hideAllDivs() {
        div1.classList.remove("visible");
        div2.classList.remove("visible");
        div3.classList.remove("visible");
    }
});


function mudarConteudo() {
    document.getElementById('conteudoOriginal1').style.display = 'none';
    document.getElementById('novoConteudo1').style.display = 'block';

    document.getElementById('conteudoOriginal2').style.display = 'none';
    document.getElementById('novoConteudo2').style.display = 'block';

    document.getElementById('conteudoOriginal3').style.display = 'none';
    document.getElementById('novoConteudo3').style.display = 'block';

    document.getElementById('conteudoOriginal4').style.display = 'none';
    document.getElementById('novoConteudo4').style.display = 'block';

    document.getElementById('conteudoOriginal5').style.display = 'none';
    document.getElementById('novoConteudo5').style.display = 'block';

    document.getElementById('conteudoOriginal6').style.display = 'none';
    document.getElementById('novoConteudo6').style.display = 'block';
}

function restaurarConteudo() {
    document.getElementById('conteudoOriginal1').style.display = 'block';
    document.getElementById('novoConteudo1').style.display = 'none';

    document.getElementById('conteudoOriginal2').style.display = 'block';
    document.getElementById('novoConteudo2').style.display = 'none';

    document.getElementById('conteudoOriginal3').style.display = 'block';
    document.getElementById('novoConteudo3').style.display = 'none';

    document.getElementById('conteudoOriginal4').style.display = 'block';
    document.getElementById('novoConteudo4').style.display = 'none';

    document.getElementById('conteudoOriginal5').style.display = 'block';
    document.getElementById('novoConteudo5').style.display = 'none';

    document.getElementById('conteudoOriginal6').style.display = 'block';
    document.getElementById('novoConteudo6').style.display = 'none';
}