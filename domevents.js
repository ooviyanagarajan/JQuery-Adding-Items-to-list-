$(document).ready(function(){
    $("#b1").click(function(){
       var mytext= $('#t1').val() 

        $('ul').append('<li>'+mytext+'</li>')
        
    });
  });