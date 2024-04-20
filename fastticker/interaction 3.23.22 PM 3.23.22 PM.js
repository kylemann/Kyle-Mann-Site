//$(document).ready(function(){
//    $(".plus-toggle").click(function(){
//        $(".article").addClass("expand");
//    });
//});


$(document).ready(function(){
    $(".plus-toggle").click(function(){
        $(".article").toggleClass("expand");
        $("#popout").toggleClass("tab-page");
        $("#popout").toggleClass("fadeIn");
    });
    $(".plus-toggle").click(function() {

        var src = $('.plus-toggle').attr('src');

        
        if(src == 'plus.svg') {
            $(".plus-toggle").attr("src","minus.svg");

            
        } else if(src == "minus.svg") {
            $(".plus-toggle").attr("src","plus.svg");
            

            
        } else {
            $(".plus-toggle").attr("src","plus.svg");
        }
    }); 
     $("#icon").click(handleIconClick);
     function handleIconClick(){
        $("#stock").toggleClass("display");
        $("#markets").toggleClass("display");
        $("#stock").toggleClass("fadeIn");
    }
        $("#icon").click(function() {

        var src = $('#icon').attr('src');

        
        if(src == 'micon.svg') {
            $("#icon").attr("src","exit.svg");


            
        } else if(src == "exit.svg") {
            $("#icon").attr("src","micon.svg");
            

            
        } else {
            $("#icon").attr("src","micon.svg");
        }
    }); 
});

