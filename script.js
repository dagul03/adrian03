$(document).ready(function(){   
    $("#menu li").click(function() { 
        $("#menu li").removeClass("active"); 
        $(this).addClass("active");
        var mn=$(this).index()+1;   
        $("#content div") .css("display", "none");
        $("#content div:nth-child("+(mn)+")").fadeTo('slow',1);  
    });
    
     /*IMAGES*/   
    $(".button1").click(function(){
            $("#img2, #img3, #img4, #img5, #img6, #img7").hide();
            $("#img1").fadeIn("slow");
            
            $(".button2, .button3, .button4, .button5, .button6, .button7").removeClass("active3");
            $(this).addClass("active3");
    });
                    
     $(".button2").click(function(){
            $("#img1, #img3, #img4, #img5, #img6, #img7").hide();
             $("#img2").fadeIn("slow");
             
              $(".button1, .button3, .button4, .button5, .button6, .button7").removeClass("active3");
            $(this).addClass("active3");
    });
    
     $(".button3").click(function(){
            $("#img2, #img1, #img4, #img5, #img6, #img7").hide();
             $("#img3").fadeIn("slow");
              $(".button2, .button1, .button4, .button5, .button6, .button7").removeClass("active3");
            $(this).addClass("active3");
    });
    
     $(".button4").click(function(){
            $("#img2, #img3, #img1, #img5, #img6, #img7").hide();
             $("#img4").fadeIn("slow");
              $(".button2, .button3, .button1, .button5, .button6, .button7").removeClass("active3");
            $(this).addClass("active3");
    });
    
     $(".button5").click(function(){
            $("#img2, #img3, #img4, #img1, #img6, #img7").hide();
             $("#img5").fadeIn("slow");
              $(".button2, .button3, .button4, .button1, .button6, .button7").removeClass("active3");
            $(this).addClass("active3");
    });
    
     $(".button6").click(function(){
            $("#img2, #img3, #img4, #img5, #img1, #img7").hide();
             $("#img6").fadeIn("slow");
              $(".button2, .button3, .button4, .button5, .button1, .button7").removeClass("active3");
            $(this).addClass("active3");
    });
    
    $(".button7").click(function(){
            $("#img2, #img3, #img4, #img5, #img1, #img6").hide();
             $("#img7").fadeIn("slow");
              $(".button2, .button3, .button4, .button5, .button1, .button6").removeClass("active3");
            $(this).addClass("active3");
    });
    
   
});
