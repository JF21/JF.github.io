var main = function() {
  /* Push the body and the nav over by 285px over */
  var retracted = true;
  
  $('.icon-menu').mouseenter(function() {
    if(retracted){
        $('.menu').animate({
          top: "0px"
        }, 200);
    
        $('body').animate({
          top: $('.menu').height()
        }, 200);
        
        retracted = false;
    }
  });

  /* Then push them back */
  $('.menu').mouseleave(function() {
    $('.menu').animate({
      top: -$('.menu').height()
    }, 500);

    $('body').animate({
      top: "0px"
    }, 500);
    
    setTimeout(function(){
    retracted = true;
}, 500);
   
  });

  $('.nav-tabs').click(function(){
    $('.active').removeClass('.active');
   // $(this).addClass('.active');
    //$("<p>").text("AddedClick").appendTo('')
  });
};


$(document).ready(main);