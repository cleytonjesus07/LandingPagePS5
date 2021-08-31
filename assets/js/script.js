let pDescriptions = document.getElementsByClassName("product_description")[0];
let contents = [
    {
        content: `<div class="part1">
        <h1>Jogar Não Tem Limites</h1>
        <p>

            Desfrute do carregamento extremamente rápido com o SSD de altíssima velocidade, uma imersão mais
            profunda com suporte a feedback tátil, gatilhos adaptáveis e áudio 3D, além de uma geração
            inédita
            de jogos incríveis para PlayStation®.

            <span>*Áudio em 3D com headphones compatíveis</span>

        </p>
    </div>`
    },
    {
        content: `<div class="part1">
        <h1>Veloz como um raio </h1>
        <p>Domine o poder de uma CPU e GPU personalizadas e o SSD com E/S integradas que redefinem as regras
            do que o console PlayStation pode fazer. </p>
    </div>`
    },
    {
        content: `<div class="part3 last">
        <div class="ssd">
            <img src="./assets/images/ssd.png">
            <h2>SSD ultrarrápido</h2>
            <p>
                Maximize suas sessões de jogo com tempos de carregamento praticamente instantâneos para
                jogos do PS5™ instalados.
            </p>
        </div>
        <div class="es">
            <img src="./assets/images/ps5-integrated-I-O-blue-icon-01-en-21aug20.png">
            <h2>E/S integrada</h2>
            <p>
                A integração personalizada dos sistemas de console PS5 permite que os criadores extraiam
                dados do SSD tão rápido que eles podem desenvolver jogos de formas que antes seriam
                impossíveis.
            </p>
        </div>
    </div>`
    },
    {
        content: `<div class="part1">
        <h1>Jogos impressionantes</h1>
        <p>

        Maravilhe-se com os gráficos incríveis e experimente os recursos do novo PS5.

        </p>
    </div>`
    },{
        content: `<div class="part1">
        <h1>Imersão de tirar o fôlego</h1>
        <p>

        Descubra uma experiência de jogos mais profunda com compatibilidade com resposta tátil, gatilhos adaptáveis e tecnologia de áudio em 3D!.

        </p>
    </div>`
    },
    {
        content: `<div class="part1">
        <video src="./assets/media/ps5.mp4" controls></video>
    </div>`
    }
]
let btnPlayVideo = document.getElementsByClassName("seeMore")[0];
let replay, playVideo = false;

$(document).ready(AlternadorDescricao());

btnPlayVideo.addEventListener("click", () => {

    if (playVideo == false)
        $(pDescriptions).delay(100).fadeOut('fast', () => {
            
            $(pDescriptions).fadeIn(executarVideo())
            btnAtivado();
        });

})



function btnAtivado() {
    if (playVideo == true) {
        btnPlayVideo.style.cursor = "unset";
        btnPlayVideo.value = "Vídeo demonstrativo";
        btnPlayVideo.style.opacity = .2;
    } else {
        btnPlayVideo.style.cursor = "pointer";
        btnPlayVideo.value = "Assistir vídeo";
        btnPlayVideo.style.opacity = 1;
    }
}

function AlternadorDescricao() {
    var atual = 0;
    $(pDescriptions).html(contents[atual++].content);

    //define intervalo de troca
    replay = setInterval(function () {

        //efeito de desaparecer
        $(pDescriptions).fadeOut(3000, function () {

            //função "callback" que mostra o próximo texto
            if ($(contents[atual].content).children().is('video')) atual = 0;
            $(pDescriptions).html(contents[atual++].content).fadeIn('fast');

        });

    }, 9000);
}



function executarVideo() {
    playVideo = true;
    clearInterval(replay);
    pDescriptions.innerHTML = contents[contents.length - 1].content;
    let video = document.getElementsByTagName('video')[0];
    video.style.opacity = 1;
    video.play();
    let verificarDuracao = setInterval(() => {
        console.log(video.currentTime, video.duration)
        if (video.currentTime == video.duration) {

            $(video).fadeOut(1000, () => {
                playVideo = false;
                btnAtivado();
                $(AlternadorDescricao()).fadeIn();
            })
            clearInterval(verificarDuracao);
        }
    }, 100)
}