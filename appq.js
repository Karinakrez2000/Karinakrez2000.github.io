jQuery(function($) {
  let header =$("#header");
  let people =$("#people");
  let peopleH = people.innerHeight();

  let scrollPos = $(window).scrollTop();


checkScroll(scrollPos, peopleH);
  $(window).on("scroll  resize", function(){
    peopleH = people.innerHeight();
scrollPos = $(this).scrollTop();
checkScroll(scrollPos, peopleH);

  });

  function checkScroll(scrollPos, peopleH){
    if(scrollPos > peopleH) {
        header.addClass("fixed");
    }
    else {
        header.removeClass("fixed");
    }
  }


$("[data-scroll]").on("click", function(event){
  event.preventDefault();
  let elementId = $(this).data("scroll");
  let elementOffset = $(elementId).offset().top;



  $("html, body").animate({
    scrollTop: elementOffset - 70
  }, 700);
});
});
