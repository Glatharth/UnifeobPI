$(document).ready(function(){

  // Admin

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
    $(".dropdown-content").fadeToggle();
  });


  // Chat

  function alterEmoji(){
    
    
    if($("#boxEmojis").css("display") === "none"){
    
      $("#chatMain").removeClass('chatConteiner').addClass('chatConteinerEmojis');
      $("#boxEmojis").removeClass('boxEmojisClose').addClass('boxEmojis');
      


    } else {

      $("#chatMain").removeClass('chatConteinerEmojis').addClass('chatConteiner');
      $("#boxEmojis").removeClass('boxEmojis').addClass('boxEmojisClose');

    }

  }

  $("#emojiButton").click(() => alterEmoji());

});