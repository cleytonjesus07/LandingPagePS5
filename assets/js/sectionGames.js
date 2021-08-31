let sliderGames = document.getElementsByClassName("slider_games")[0];
let path = './assets/images/games/', videoPath = '../assets/media/games/';
let backgroundGames = [
    {
        title: "Days Gone",
        pic: `${path}dg.jpg`,
        description: 'Days Gone é um jogo eletrônico de ação-aventura e sobrevivência desenvolvido pela SIE Bend Studio e publicado pela Sony Interactive Entertainment, sendo lançado para PlayStation 4, PlayStation 5 e Microsoft Windows.',
        videoInfo: `${videoPath}dg.mp4`
    },
    {
        title: "Ghost Of Tsushima",
        pic: `${path}got.png`,
        description: 'Ghost of Tsushima é um jogo eletrônico de ação-aventura desenvolvido pela Sucker Punch Productions e publicado pela Sony Interactive Entertainment. Foi lançado em 17 de julho de 2020 exclusivamente para PlayStation 4.',
        videoInfo: `${videoPath}got.mp4`
    },
    {
        title: "God Of War",
        pic: `${path}gow4.jpg`,
        description: 'God of War é um jogo eletrônico de ação-aventura desenvolvido pela Santa Monica Studio e publicado pela Sony Interactive Entertainment.',
        videoInfo: `${videoPath}gow4.mp4`
    },
    {
        title: "Horizon Forbidden West",
        pic: `${path}hfbw.jpg`,
        description: 'Horizon Forbidden West é um futuro jogo eletrônico de RPG de ação desenvolvido pela Guerrilla Games e publicado pela Sony Interactive Entertainment. Está previsto para ser lançado em 18 de fevereiro de 2022 para PlayStation 4 e PlayStation 5.',
        videoInfo: `${videoPath}hfbw.mp4`
    },
    {
        title: "Ratchet & Clank: Em Uma Outra Dimensão",
        pic: `${path}ratchet.jpg`,
        description: 'Ratchet & Clank: Rift Apart é um jogo eletrônico de plataforma desenvolvido pela Insomniac Games e publicado pela Sony Interactive Entertainment. É o décimo segundo título principal da série Ratchet & Clank, uma sequência de Ratchet & Clank: Into the Nexus de 2013, e será lançado exclusivamente para PlayStation 5.',
        videoInfo: `${videoPath}ratchet.mp4`
    },
    {
        title: "Spider Man Miles Morales",
        pic: `${path}spmm.jpg`,
        description: 'Spider-Man: Miles Morales é um jogo eletrônico de ação-aventura desenvolvido pela Insomniac Games e publicado pela Sony Interactive Entertainment para o PlayStation 4 e PlayStation 5.',
        videoInfo: `${videoPath}spmm.mp4`
    },
    {
        title: "The Last Of Us parte 2",
        pic: `${path}tlou2.jpg`,
        description: 'The Last of Us Part II é um jogo eletrônico de ação-aventura desenvolvido pela Naughty Dog e publicado pela Sony Interactive Entertainment. É o segundo jogo da franquia e foi lançado em 19 de junho de 2020 exclusivamente para PlayStation 4.',
        videoInfo: `${videoPath}tlou2.mp4`
    },
    {
        title: "Uncharted 4",
        pic: `${path}uc4.jpg`,
        description: "Uncharted 4: A Thief's End é um jogo eletrônico de ação-aventura desenvolvido pela Naughty Dog e publicado pela Sony Computer Entertainment. É o quarto título principal da série Uncharted e foi lançado exclusivamente para PlayStation 4 em 10 de maio de 2016.",
        videoInfo: `${videoPath}uc4.mp4`
    }
]
let title = document.getElementById("title_game");
let desc = document.getElementById("desc_game");
let bgCounter = 0;
let playbtn = document.getElementById("play"), infobtn = document.getElementById("info");
let times = 0;
let videoGame = document.getElementById("video_game");
$(document).ready(() => {

    appendBgs();
    document.getElementsByClassName("games")[0].style.width = sliderGames.clientWidth * backgroundGames.length + "px";
    title.innerText =backgroundGames[0].title;
    desc.innerText =backgroundGames[0].description;
    document.getElementsByClassName("about_game")[0].clientHeight = document.getElementsByClassName("games")[0].style.width / 2;

})





function appendBgs() {
    backgroundGames.forEach((games) => {
        let div = document.createElement("div");
        let img = document.createElement("img");
        $(sliderGames).append(div);
        $(div).append(img);
        img.src = games.pic;
        div.setAttribute("style", `height:100%;width:100vw;display:flex;justify-content:center;align-items:center;`)
        img.setAttribute("style", "width:100%;height:100%")
    })
    moverSlider();
}
let clicked = false;
function clicou(){
    if(clicked == false){  
        contentGames.style.left = 0
        clicked = true;
        return;
    } else{
        contentGames.style.left = "-600px";
        clicked = false;
    } 
}
$(infobtn).on("click",clicou)
playbtn.addEventListener("click", () => {
    if (playVideo == false) {
        clearInterval(sliderLoop);
        playVideoAboutGame(backgroundGames.findIndex((game) => game.title == title.innerText));
    }
})

let sliderLoop, contentMedia = document.getElementsByClassName("content_media")[0],timer = 9500;
let sliderBanner = (time) => {
    sliderLoop = setInterval(() => {
       


        title.innerText = backgroundGames[times].title;
        desc.innerText = backgroundGames[times].description;
        
        let margem = 100 * times++;

        if (times == backgroundGames.length) {
            times = 0;
            sliderGames.style.marginRight = `${margem}vw`;
        }

        sliderGames.style.margin = `0 -${margem}vw`;

    }, time)
};


function moverSlider() {
    sliderBanner(timer);
}



document.getElementsByClassName("games")[0].addEventListener("mouseleave", () => {
    if (playVideo == false)
        sliderBanner(timer);
})

document.getElementsByClassName("games")[0].addEventListener("mouseenter", () => clearInterval(sliderLoop))

let contentGames = document.getElementsByClassName("content_games")[0];
function playVideoAboutGame(times) {
   
    playVideo = true;

    videoGame.src = backgroundGames[times].videoInfo;
    $(contentGames).css("opacity", 0)
    $(contentMedia).css("opacity", 1);
    videoGame.play();
    let verificar = setInterval(() => {


        if (videoGame.currentTime >= videoGame.duration) {
            playVideo = false;
            $(contentMedia).css("opacity", 0);
            $(contentGames).css("opacity", 1)
            videoGame.stop();
            clearInterval(verificar);
        }

    }, 100)
}