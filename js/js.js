$(document).ready(function(){
    
       $('#im1').width(200);
    
       $('#im1').mouseover(function()
    
       {
    
          $(this).css("cursor","pointer");
    
       });
    
       $("#im1").toggle(function()
    
         {$(this).animate({width: "500px"}, 'slow');},
    
         function()
    
         {$(this).animate({width: "200px"}, 'slow');
    
       });
    
    });
    