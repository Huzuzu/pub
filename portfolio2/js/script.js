$(function () {
  var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    spaceBetween: 0,
    rewind: true,
    speed: 1000,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  var swiper2 = new Swiper(".mySwiper2", {
    direction: "horizontal",
    spaceBetween: 0,
    speed: 1000,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  //스와이퍼

  const content = `.creative() \n
      .sensitive()\n
      .careful()\n
      .Defamiliarization()\n
      .UserFriendly()`
  const text = document.querySelector(".maintext");
  let i = 0;

  function typing() {
    let txt = content[i++];
    text.innerHTML += txt === "\n" ? "<br/>" : txt;
    if (i > content.length) {
      text.textContent = "";
      i = 0
    }
  }

  setInterval(typing, 100)
  //타이핑

/*   let pointSize = $(".pointer").width()/2;
  $(".swiper").mousemove(function(e){    
      $('.pointer').css("top", e.pageY-pointSize);
      $('.pointer').css("left", e.pageX-pointSize);
      $('.pointer').fadeIn();
  });
  $(".swiper").on("mouseleave", function(){
    $('.pointer').fadeOut();
  }); */

});