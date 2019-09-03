$(document).ready(function(){

  

  function alterMenu() {
    if($("#aside").css("display") === "none"){

      $("#conteiner").removeClass('conteiner-full').addClass('conteiner');
      $("#aside").removeClass('aside-none').addClass('aside');

    } else {

      
      $("#conteiner").removeClass('conteiner').addClass('conteiner-full');
      $("#aside").removeClass('aside').addClass('aside-none');

    }
  }

  $("#Page").click(() => alterMenu());
  $("#menuTitle").click(() => alterMenu());

  $("#dropdown").click(() => {
    $(".dropdown-content").fadeToggle("slow");
  });
});