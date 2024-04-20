
//tab
$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})


//tab: a
$(document).ready(function(){
	
	$('ul.tabsa li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabsa li').removeClass('currenta');
		$('.tab-contenta').removeClass('currenta');

		$(this).addClass('currenta');
		$("#"+tab_id).addClass('currenta');
	})

})
    

//tab: B
$(document).ready(function(){
	
	$('ul.tabsb li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabsb li').removeClass('currentb');
		$('.tab-contentb').removeClass('currentb');

		$(this).addClass('currentb');
		$("#"+tab_id).addClass('currentb');
	})

})


//tab: C
$(document).ready(function(){
	
	$('ul.tabsc li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabsc li').removeClass('currentc');
		$('.tab-contentc').removeClass('currentc');

		$(this).addClass('currentc');
		$("#"+tab_id).addClass('currentc');
	})

})


//tab: D
$(document).ready(function(){
	
	$('ul.tabsd li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabsd li').removeClass('currentd');
		$('.tab-contentd').removeClass('currentd');

		$(this).addClass('currentd');
		$("#"+tab_id).addClass('currentd');
	})

})

//tab: E
$(document).ready(function(){
	
	$('ul.tabse li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabse li').removeClass('currente');
		$('.tab-contente').removeClass('currente');

		$(this).addClass('currente');
		$("#"+tab_id).addClass('currente');
	})

})




//tab: F
$(document).ready(function(){
	
	$('ul.tabsf li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabsf li').removeClass('currentf');
		$('.tab-contentf').removeClass('currentf');

		$(this).addClass('currentf');
		$("#"+tab_id).addClass('currentf');
	})

})




//Smooth Scrolling
$(window).load(function(){
$('a').click(function(){
$('html, body').animate({
scrollTop: $( $(this).attr('href') ).offset().top
}, 1000);
return false;
});
});





//OVERVIEW Wireframe 


$(document).ready(function() { 
    $("#overview").click(function() {

        var src = $('#overview1').attr('src');

        //if the current image is picture1.png, change it to picture2.png
        
        if(src == 'images/vault/overview/desktop_overview1.png') {
            $("#overview1").attr("src","images/vault/overview/desktop_overview3.png");

        //if the current image is picture2.png, change it to picture3.png 
            
        } else if(src == "images/vault/overview/desktop_overview3.png") {
            $("#overview1").attr("src","images/vault/overview/desktop_overview2.png");
            

        //if the current image is anything else, change it back to picture1.png
            
        } else {
            $("#overview1").attr("src","images/vault/overview/desktop_overview1.png");
        }
    }); 
});


    //OVERVIEW Visual Designs 

$(document).ready(function() { 
    $("#overviewa").click(function() {

        var src = $('#overview2').attr('src');

        //if the current image is picture1.png, change it to picture2.png
        
        if(src == 'images/vault/overview/overview_v_overview1.png') {
            $("#overview2").attr("src","images/vault/overview/overview_v_overview2.png");

        //if the current image is picture2.png, change it to picture3.png 
            
        } else if(src == "images/vault/overview/overview_v_overview2.png") {
            $("#overview2").attr("src","images/vault/overview/overview_v_overview3.png");
            
               //if the current image is picture3.png, change it to picture4.png 
            
        } else if(src == "images/vault/overview/overview_v_overview3.png") {
            $("#overview2").attr("src","images/vault/overview/overview_v_overview4.png");
            
            
        //if the current image is anything else, change it back to picture1.png
            
        } else {
            $("#overview2").attr("src","images/vault/overview/overview_v_overview2.png");
     
      
        }
    }); 
});



    //OVERVIEW MOBILE

$(document).ready(function() { 
    $("#overviewm").click(function() {

        var src = $('#overviewm1').attr('src');

        //if the current image is picture1.png, change it to picture2.png
        
        if(src == 'images/vault/overview/overview_m_overview1.png') {
            $("#overviewm1").attr("src","images/vault/overview/overview_m_overview2.png");

        //if the current image is picture2.png, change it to picture3.png 
            
        } else if(src == "images/vault/overview/overview_m_overview2.png") {
            $("#overviewm1").attr("src","images/vault/overview/overview_m_overview3.png");
            
               //if the current image is picture3.png, change it to picture4.png 
            
        } else if(src == "images/vault/overview/overview_m_overview3.png") {
            $("#overviewm1").attr("src","images/vault/overview/overview_m_overview4.png");
            
            
        //if the current image is anything else, change it back to picture1.png
            
        } else {
            $("#overviewm1").attr("src","images/vault/overview/overview_m_overview2.png");
     
      
        }
    }); 
});





    //ACTION Wireframes

$(document).ready(function() { 
    $("#action").click(function() {

        var src = $('#action1').attr('src');

        //if the current image is picture1.png, change it to picture2.png
        
        if(src == 'images/vault/action/action_action1.png') {
            $("#action1").attr("src","images/vault/action/action_action2.png");

        //if the current image is picture2.png, change it to picture3.png 
            
        } else if(src == "images/vault/action/action_action2.png") {
            $("#action1").attr("src","images/vault/action/action_action3.png");
            
               //if the current image is picture3.png, change it to picture4.png 
            
        } else if(src == "images/vault/action/action_action3.png") {
            $("#action1").attr("src","images/vault/action/action_action4.png");
            
                         //if the current image is picture3.png, change it to picture4.png 
            
        } else if(src == "images/vault/action/action_action4.png") {
            $("#action1").attr("src","images/vault/action/action_action5.png");
            
            
                                //if the current image is picture3.png, change it to picture4.png 
            
        } else if(src == "images/vault/action/action_action5.png") {
            $("#action1").attr("src","images/vault/action/action_action6.png");
            
            
                   
                                //if the current image is picture3.png, change it to picture4.png 
            
        } else if(src == "images/vault/action/action_action6.png") {
            $("#action1").attr("src","images/vault/action/action_action7.png");
               
            
                
            
        //if the current image is anything else, change it back to picture1.png
            
        } else {
            $("#action1").attr("src","images/vault/action/action_action1.png");
     
      
        }
    }); 
});






//ACTION Visual Designs 

$(document).ready(function() { 
    $("#actiona").click(function() {

        var src = $('#action2').attr('src');

        //if the current image is picture1.png, change it to picture2.png
        
        if(src == 'images/vault/action/action_v_action1.png') {
            $("#action2").attr("src","images/vault/action/action_v_action2.png");

        //if the current image is picture2.png, change it to picture3.png 
            
        } else if(src == "images/vault/action/action_v_action2.png") {
            $("#action2").attr("src","images/vault/action/action_v_action3.png");
            
               //if the current image is picture3.png, change it to picture4.png 
            
        } else if(src == "images/vault/action/action_v_action3.png") {
            $("#action2").attr("src","images/vault/action/action_v_action4.png");
            
                         //if the current image is picture3.png, change it to picture4.png 
            
        } else if(src == "images/vault/action/action_v_action4.png") {
            $("#action2").attr("src","images/vault/action/action_v_action5.png");
            
            
                                //if the current image is picture3.png, change it to picture4.png 
            
        } else if(src == "images/vault/action/action_v_action5.png") {
            $("#action2").attr("src","images/vault/action/action_v_action6.png");
            
            
            
        //if the current image is anything else, change it back to picture1.png
            
        } else {
            $("#action2").attr("src","images/vault/action/action_v_action2.png");
     
      
        }
    }); 
});






    //Action MOBILE

$(document).ready(function() { 
    $("#actionm").click(function() {

        var src = $('#actionm1').attr('src');

        //if the current image is picture1.png, change it to picture2.png
        
        if(src == 'images/vault/action/action_m_action1.png') {
            $("#actionm1").attr("src","images/vault/action/action_m_action2.png");

        //if the current image is picture2.png, change it to picture3.png 
            
        } else if(src == "images/vault/action/action_m_action2.png") {
            $("#actionm1").attr("src","images/vault/action/action_m_action3.png");
            
 
            
            
        //if the current image is anything else, change it back to picture1.png
            
        } else {
            $("#actionm1").attr("src","images/vault/action/action_m_action1.png");
     
      
        }
    }); 
});



 //UPLOAD Wireframes

$(document).ready(function() { 
    $("#upload").click(function() {

        var src = $('#upload1').attr('src');

        //if the current image is picture1.png, change it to picture2.png
        
        if(src == 'images/vault/upload/upload_upload1.png') {
            $("#upload1").attr("src","images/vault/upload/upload_upload2.png");

        //if the current image is picture2.png, change it to picture3.png 
            
        } else if(src == "images/vault/upload/upload_upload2.png") {
            $("#upload1").attr("src","images/vault/upload/upload_upload3.png");
            
               //if the current image is picture3.png, change it to picture4.png 
            
        } else if(src == "images/vault/upload/upload_upload3.png") {
            $("#upload1").attr("src","images/vault/upload/upload_upload4.png");
            
                         //if the current image is picture3.png, change it to picture4.png 
            
        } else if(src == "images/vault/upload/upload_upload4.png") {
            $("#upload1").attr("src","images/vault/upload/upload_upload5.png");
            
            
                                //if the current image is picture3.png, change it to picture4.png 
            
        } else if(src == "images/vault/upload/upload_upload5.png") {
            $("#upload1").attr("src","images/vault/upload/upload_upload6.png");
            
            
                
            
        //if the current image is anything else, change it back to picture1.png
            
        } else {
            $("#upload1").attr("src","images/vault/upload/upload_upload2.png");
     
      
        }
    }); 
});






//Upload Visual Designs 

$(document).ready(function() { 
    $("#uploada").click(function() {

        var src = $('#upload2').attr('src');

        //if the current image is picture1.png, change it to picture2.png
        
        if(src == 'images/vault/upload/upload_v_upload1.png') {
            $("#upload2").attr("src","images/vault/upload/upload_v_upload2.png");

        //if the current image is picture2.png, change it to picture3.png 
            
        } else if(src == "images/vault/upload/upload_v_upload2.png") {
            $("#upload2").attr("src","images/vault/upload/upload_v_upload3.png");
            
               //if the current image is picture3.png, change it to picture4.png 
            
        } else if(src == "images/vault/upload/upload_v_upload3.png") {
            $("#upload2").attr("src","images/vault/upload/upload_v_upload4.png");
            
                         //if the current image is picture3.png, change it to picture4.png 
            
        } else if(src == "images/vault/upload/upload_v_upload4.png") {
            $("#upload2").attr("src","images/vault/upload/upload_v_upload5.png");
            
            
                                //if the current image is picture3.png, change it to picture4.png 
            
        } else if(src == "images/vault/upload/upload_v_upload5.png") {
            $("#upload2").attr("src","images/vault/upload/upload_v_upload6.png");
            
            
            
        //if the current image is anything else, change it back to picture1.png
            
        } else {
            $("#upload2").attr("src","images/vault/upload/upload_v_upload2.png");
     
      
        }
    }); 
});





//Upload MOBILE

$(document).ready(function() { 
    $("#uploadm").click(function() {

        var src = $('#uploadm1').attr('src');

        //if the current image is picture1.png, change it to picture2.png
        
        if(src == 'images/vault/upload/upload_m_upload1.png') {
            $("#uploadm1").attr("src","images/vault/upload/upload_m_upload2.png");

        //if the current image is picture2.png, change it to picture3.png 
            
        } else if(src == "images/vault/upload/upload_m_upload2.png") {
            $("#uploadm1").attr("src","images/vault/upload/upload_m_upload3.png");
            
 
              //if the current image is picture2.png, change it to picture3.png 
            
        } else if(src == "images/vault/upload/upload_m_upload3.png") {
            $("#uploadm1").attr("src","images/vault/upload/upload_m_upload4.png");
            
   
            
        //if the current image is anything else, change it back to picture1.png
            
        } else {
            $("#uploadm1").attr("src","images/vault/upload/upload_m_upload2.png");
     
      
        }
    }); 
});






 //Share Wireframes

$(document).ready(function() { 
    $("#share").click(function() {

        var src = $('#share1').attr('src');

        //if the current image is picture1.png, change it to picture2.png
        
        if(src == 'images/vault/share/share_share1.png') {
            $("#share1").attr("src","images/vault/share/share_share2.png");

        //if the current image is picture2.png, change it to picture3.png 
            
        } else if(src == "images/vault/share/share_share2.png") {
            $("#share1").attr("src","images/vault/share/share_share3.png");
            
               //if the current image is picture3.png, change it to picture4.png 
            
        } else if(src == "images/vault/share/share_share3.png") {
            $("#share1").attr("src","images/vault/share/share_share4.png");
            
                         //if the current image is picture3.png, change it to picture4.png 
            
        } else if(src == "images/vault/share/share_share4.png") {
            $("#share1").attr("src","images/vault/share/share_share5.png");
            
            
                                //if the current image is picture3.png, change it to picture4.png 
            
        } else if(src == "images/vault/share/share_share5.png") {
            $("#share1").attr("src","images/vault/share/share_share6.png");
            
                                 //if the current image is picture3.png, change it to picture4.png 
            
        } else if(src == "images/vault/share/share_share6.png") {
            $("#share1").attr("src","images/vault/share/share_share7.png");
            
            
                                       //if the current image is picture3.png, change it to picture4.png 
            
        } else if(src == "images/vault/share/share_share7.png") {
            $("#share1").attr("src","images/vault/share/share_share8.png");
            
            
                                       //if the current image is picture3.png, change it to picture4.png 
            
        } else if(src == "images/vault/share/share_share8.png") {
            $("#share1").attr("src","images/vault/share/share_share9.png");
            
            
                  
                
            
        //if the current image is anything else, change it back to picture1.png
            
        } else {
            $("#share1").attr("src","images/vault/share/share_share2.png");
     
      
        }
    }); 
});






//Share Visual Designs 

$(document).ready(function() { 
    $("#sharea").click(function() {

        var src = $('#share2').attr('src');

        //if the current image is picture1.png, change it to picture2.png
        
        if(src == 'images/vault/share/share_v_share1.png') {
            $("#share2").attr("src","images/vault/share/share_v_share2.png");

        //if the current image is picture2.png, change it to picture3.png 
            
        } else if(src == "images/vault/share/share_v_share2.png") {
            $("#share2").attr("src","images/vault/share/share_v_share3.png");
            
               //if the current image is picture3.png, change it to picture4.png 
            
        } else if(src == "images/vault/share/share_v_share3.png") {
            $("#share2").attr("src","images/vault/share/share_v_share4.png");
            
                         //if the current image is picture3.png, change it to picture4.png 
            
        } else if(src == "images/vault/share/share_v_share4.png") {
            $("#share2").attr("src","images/vault/share/share_v_share5.png");
            
            
                                //if the current image is picture3.png, change it to picture4.png 
            
        } else if(src == "images/vault/share/share_v_share5.png") {
            $("#share2").attr("src","images/vault/share/share_v_share6.png");
            
            
                     
                                //if the current image is picture3.png, change it to picture4.png 
            
        } else if(src == "images/vault/share/share_v_share6.png") {
            $("#share2").attr("src","images/vault/share/share_v_share7.png");
            
                     
                                //if the current image is picture3.png, change it to picture4.png 
            
        } else if(src == "images/vault/share/share_v_share7.png") {
            $("#share2").attr("src","images/vault/share/share_v_share8.png");
            
            
            
        //if the current image is anything else, change it back to picture1.png
            
        } else {
            $("#share2").attr("src","images/vault/share/share_v_share2.png");
     
      
        }
    }); 
});






    //Share MOBILE

$(document).ready(function() { 
    $("#sharem").click(function() {

        var src = $('#sharem1').attr('src');

        //if the current image is picture1.png, change it to picture2.png
        
        if(src == 'images/vault/share/share_sharem1.png') {
            $("#sharem1").attr("src","images/vault/share/share_sharem2.png");

        //if the current image is picture2.png, change it to picture3.png 
            
        } else if(src == "images/vault/share/share_sharem2.png") {
            $("#sharem1").attr("src","images/vault/share/share_sharem3.png");
            
 
              //if the current image is picture2.png, change it to picture3.png 
            
        } else if(src == "images/vault/share/share_sharem3.png") {
            $("#sharem1").attr("src","images/vault/share/share_sharem4.png");
            
   
                 //if the current image is picture2.png, change it to picture3.png 
            
        } else if(src == "images/vault/share/share_sharem4.png") {
            $("#sharem1").attr("src","images/vault/share/share_sharem5.png");
            
               //if the current image is picture2.png, change it to picture3.png 
            
        } else if(src == "iimages/vault/share/share_sharem5.png") {
            $("#sharem1").attr("src","images/vault/share/share_sharem6.png");
            
          
        //if the current image is anything else, change it back to picture1.png
            
        } else {
            $("#sharem1").attr("src","images/vault/share/share_sharem1.png");
     
      
        }
    }); 
});







 //Move Wireframes

$(document).ready(function() { 
    $("#move").click(function() {

        var src = $('#move1').attr('src');

        //if the current image is picture1.png, change it to picture2.png
        
        if(src == 'images/vault/move/move_move1.png') {
            $("#move1").attr("src","images/vault/move/move_move2.png");

        //if the current image is picture2.png, change it to picture3.png 
            
        } else if(src == "images/vault/move/move_move2.png") {
            $("#move1").attr("src","images/vault/move/move_move3.png");
            
               //if the current image is picture3.png, change it to picture4.png 
            
        } else if(src == "images/vault/move/move_move2.png") {
            $("#move1").attr("src","images/vault/move/move_move3.png");
            
                         //if the current image is picture3.png, change it to picture4.png 
            
        } else if(src == "images/vault/move/move_move3.png") {
            $("#move1").attr("src","images/vault/move/move_move4.png");
            
            
                                //if the current image is picture3.png, change it to picture4.png 
            
        } else if(src == "images/vault/move/move_move4.png") {
            $("#move1").attr("src","images/vault/move/move_move5.png");
            
                                 //if the current image is picture3.png, change it to picture4.png 
            
        } else if(src == "images/vault/move/move_move5.png") {
            $("#move1").attr("src","images/vault/move/move_move6.png");
            
            

                
            
        //if the current image is anything else, change it back to picture1.png
            
        } else {
            $("#move1").attr("src","images/vault/move/move_move2.png");
     
      
        }
    }); 
});






//Move Visual Designs 

$(document).ready(function() { 
    $("#movea").click(function() {

        var src = $('#move2').attr('src');

        //if the current image is picture1.png, change it to picture2.png
        
        if(src == 'images/vault/move/move_v_move1.png') {
            $("#move2").attr("src","images/vault/move/move_v_move2.png");

        //if the current image is picture2.png, change it to picture3.png 
            
        } else if(src == "images/vault/move/move_v_move2.png") {
            $("#move2").attr("src","images/vault/move/move_v_move3.png");
            
               //if the current image is picture3.png, change it to picture4.png 
            
        } else if(src == "images/vault/move/move_v_move3.png") {
            $("#move2").attr("src","images/vault/move/move_v_move4.png");
            
                         //if the current image is picture3.png, change it to picture4.png 
            
        } else if(src == "images/vault/move/move_v_move4.png") {
            $("#move2").attr("src","images/vault/move/move_v_move5.png");
            
                                    //if the current image is picture3.png, change it to picture4.png 
            
        } else if(src == "images/vault/move/move_v_move5.png") {
            $("#move2").attr("src","images/vault/move/move_v_move1.png");
            
            
        //if the current image is anything else, change it back to picture1.png
            
        } else {
            $("#move2").attr("src","images/vault/move/move_v_move1.png");
     
      
        }
    }); 
});






    //Move MOBILE

$(document).ready(function() { 
    $("#movem").click(function() {

        var src = $('#movem1').attr('src');

        //if the current image is picture1.png, change it to picture2.png
        
        if(src == 'images/vault/move/move_movem1.png') {
            $("#movem1").attr("src","images/vault/move/move_movem2.png");

        //if the current image is picture2.png, change it to picture3.png 
            
        } else if(src == "images/vault/move/move_movem2.png") {
            $("#movem1").attr("src","images/vault/move/move_movem3.png");
            
 
              //if the current image is picture2.png, change it to picture3.png 
            
        } else if(src == "images/vault/move/move_movem3.png") {
            $("#movem1").attr("src","images/vault/move/move_movem4.png");
            
   

          
        //if the current image is anything else, change it back to picture1.png
            
        } else {
            $("#movem1").attr("src","images/vault/move/move_movem1.png");
     
      
        }
    }); 
});




 //View Wireframes

$(document).ready(function() { 
    $("#view").click(function() {

        var src = $('#view1').attr('src');

        //if the current image is picture1.png, change it to picture2.png
        
        if(src == 'images/vault/view/hero3_view1.png') {
            $("#view1").attr("src","images/vault/view/hero3_view2.png");

        //if the current image is picture2.png, change it to picture3.png 
            
        } else if(src == "images/vault/view/hero3_view2.png") {
            $("#view1").attr("src","images/vault/view/hero3_view3.png");
            
               //if the current image is picture3.png, change it to picture4.png 
            
        } else if(src == "images/vault/view/hero3_view3.png") {
            $("#view1").attr("src","images/vault/view/hero3_view4.png");
    
        
        //if the current image is anything else, change it back to picture1.png
            
        } else {
            $("##view1").attr("src","images/vault/view/hero3_view2.png");
     
      
        }
    }); 
});






//View Visual Designs 

$(document).ready(function() { 
    $("#viewa").click(function() {

        var src = $('#view2').attr('src');

        //if the current image is picture1.png, change it to picture2.png
        
        if(src == 'images/vault/view/hero3_v_view1.png') {
            $("#view2").attr("src","images/vault/view/hero3_v_view3.png");

        //if the current image is picture2.png, change it to picture3.png 
            
        } else if(src == "images/vault/view/hero3_v_view3.png") {
            $("#view2").attr("src","images/vault/view/hero3_v_view4.png");
            
               //if the current image is picture3.png, change it to picture4.png 
            
        } else if(src == "images/vault/view/hero3_v_view4.png") {
            $("#view2").attr("src","images/vault/view/hero3_v_view5.png");
            
                         //if the current image is picture3.png, change it to picture4.png 
            
        } else if(src == "images/vault/view/hero3_v_view5.png") {
            $("#view2").attr("src","images/vault/view/hero3_v_view6.png");
            
                                    //if the current image is picture3.png, change it to picture4.png 
            
        } else if(src == "images/vault/view/hero3_v_view6.png") {
            $("#view2").attr("src","images/vault/view/hero3_v_view7.png");
            
                                  //if the current image is picture3.png, change it to picture4.png 
            
        } else if(src == "images/vault/view/hero3_v_view7.png") {
            $("#view2").attr("src","images/vault/view/hero3_v_view8.png");
            
                          
        //if the current image is anything else, change it back to picture1.png
            
        } else {
            $("#view2").attr("src","images/vault/view/hero3_v_view3.png");
     
      
        }
    }); 
});






    //View MOBILE

$(document).ready(function() { 
    $("#viewm").click(function() {

        var src = $('#viewm1').attr('src');

        //if the current image is picture1.png, change it to picture2.png
        
        if(src == 'images/vault/view/hero3_viewm1.png') {
            $("#viewm1").attr("src","images/vault/view/hero3_viewm2.png");

        //if the current image is picture2.png, change it to picture3.png 
            
        } else if(src == "images/vault/view/hero3_viewm2.png") {
            $("#viewm1").attr("src","images/vault/view/hero3_viewm3.png");
            
 
              //if the current image is picture2.png, change it to picture3.png 
            
        } else if(src == "images/vault/view/hero3_viewm3.png") {
            $("#viewm1").attr("src","images/vault/view/hero3_viewm4.png");
            
         //if the current image is picture2.png, change it to picture3.png 
            
        } else if(src == "images/vault/view/hero3_viewm4.png") {
            $("#viewm1").attr("src","images/vault/view/hero3_viewm5.png");
            
 
              //if the current image is picture2.png, change it to picture3.png 
            
        } else if(src == "images/vault/view/hero3_viewm5.png") {
            $("#viewm1").attr("src","images/vault/view/hero3_viewm6.png");
            
   
      //if the current image is picture2.png, change it to picture3.png 
            
        } else if(src == "images/vault/view/hero3_viewm6.png") {
            $("#viewm1").attr("src","images/vault/view/hero3_viewm7.png");
            
 
              //if the current image is picture2.png, change it to picture3.png 
            
        } else if(src == "images/vault/view/hero3_viewm7.png") {
            $("#viewm1").attr("src","images/vault/view/hero3_viewm8.png");
            
   


          
        //if the current image is anything else, change it back to picture1.png
            
        } else {
            $("#viewm1").attr("src","images/vault/view/hero3_viewm1.png");
     
      
        }
    }); 
});













