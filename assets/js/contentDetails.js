let fisico = document.getElementById("fisico"), digital = document.getElementById("digital");
let elFisico = document.getElementsByClassName("fisico")[0], elDigital = document.getElementsByClassName("digital")[0];

window.onload = () => {
    digital.addEventListener("click", () => {
        $(digital).css("color","#000")
        $(digital).addClass("selected")
        $(elDigital).fadeIn();
        $(elFisico).fadeOut();
        $(fisico).removeClass("selected")
        $(fisico).css("color","#A8A8A8")
    })
    fisico.addEventListener("click", () => {
        $(fisico).css("color","#000")
        $(fisico).addClass("selected");
        $(elFisico).fadeIn();
        $(elDigital).fadeOut();
        $(digital).removeClass("selected")
        $(digital).css("color","#A8A8A8")
    })

}
