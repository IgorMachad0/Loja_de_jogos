//carousel

let count = 1;
document.getElementById("caro1").checked = true;

setInterval( function() {

    nextImage();
}, 3500)

function nextImage(){
    
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("caro"+count).checked = true;
}

/*document.getElementById("caro1").addEventListener("click", () => count = 1);
document.getElementById("caro2").addEventListener("click", () => count = 2);
document.getElementById("caro3").addEventListener("click", () => count = 3);
document.getElementById("caro4").addEventListener("click", () => count = 4);

$(document).ready(function(){

    $("#controle").click(function(){

        if($("#menu").hasClass("menu_mostrar")){

            $("#menu").removeClass("menu_mostrar")
            $("#icon_menu").attr("src", "Imagens/controller.svg");
        }else{

            $("#menu").addClass("menu_mostrar")
            $("#icon_menu").attr("src", "Imagens/controllerWW.svg");
        }

    })

    $("#giftcards").mouseover(function(){

        $("#giftanim").addClass("giftanim2")
        $("#giftcards").addClass("giftanim3")
    })

    $("#giftcards").mouseout(function(){

        $("#giftanim").removeClass("giftanim2")
        $("#giftcards").removeClass("giftanim3")

    })

})

*/