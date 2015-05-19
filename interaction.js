
$(window).load(function(){
$('a').click(function(){
$('html, body').animate({
scrollTop: $( $(this).attr('href') ).offset().top
}, 500);
return false;
});
});


$(document).ready(function() { 
    $("#clickMe").click(function() {

        var src = $('#myimage').attr('src');

        //if the current image is picture1.png, change it to picture2.png
        
        if(src == 'images/rittenhouse/CaliforniaSunset.jpg') {
            $("#myimage").attr("src","images/rittenhouse/mangos.jpg");

        //if the current image is picture2.png, change it to picture3.png 
            
        } else if(src == "images/rittenhouse/mangos.jpg") {
            $("#myimage").attr("src","images/rittenhouse/HawaiiSunset.jpg");
            

        //if the current image is picture2.png, change it to picture3.png 
            
        } else if(src == "images/rittenhouse/HawaiiSunset.jpg") {
            $("#myimage").attr("src","images/rittenhouse/FordIslandView.jpg"); 


             //if the current image is picture2.png, change it to picture3.png 
            
        } else if(src == "images/rittenhouse/FordIslandView.jpg") {
            $("#myimage").attr("src","images/rittenhouse/harborboats.jpg"); 



        //if the current image is anything else, change it back to picture1.png
            
        } else {
            $("#myimage").attr("src","images/rittenhouse/CaliforniaSunset.jpg");
        }
    }); 
});

   