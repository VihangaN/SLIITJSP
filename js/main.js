
$('.choose1 a').click(function(e) {
    e.preventDefault();

    $('.login_form').animate({
        opacity: 0
    }, 1000, function() {
        $('.title').text('Register');
        $('.login_form').css('display', 'none');
    });

    $('.Reg_form').animate({
        opacity: 1
    }, 1000, function() {

        $('.Reg_form').css('display', 'block');

    });
});

$('.choose2 a').click(function(e) {
    e.preventDefault();
    $('.login_form').animate({
        opacity: 1
    }, 1000, function() {
        $('.title').text('login');
        $('.login_form').css('display', 'block');
    });

    $('.Reg_form').animate({
        opacity: 0
    }, 1000, function() {

        $('.Reg_form').css('display', 'none');

    });
});


// form password validation

function validate() {
        var validator = $("#register").validate({
            rules: {
                pass: "required",
                confirm: {
                    equalTo: "#pass"
                }
            },
            messages: {
                pass: "Minimum length is 5 characters !",
                confirm: " Passwords doesn't match !"
            }
        });
        if (validator.form()) {
          
        }
    }

// menu anim

$(document).ready(function(){
    $('#mnu_btn').click(function(e){
      e.preventDefault();
    
      $('.mobnavitems').fadeToggle(650,function(){

        if( $('.mobnavitems').css('display') == 'none' ){
            $("#mnu_btn").find('i').removeClass('fa fa-close'); 
            $("#mnu_btn").find('i').addClass('fa fa-bars'); 
            console.log('hidden');
            
        } else {
            $("#mnu_btn").find('i').removeClass('fa fa-bars'); 
            $("#mnu_btn").find('i').addClass('fa fa-close'); 
            console.log('visible');
        }
     
      

      });
    

     

    })
  });

  $(window).resize(function(){

  if ( $(this).width() > 650) {

   
     $('.mobnavitems').hide();

  }
  else{
    $('.mobnavitems').hide();
  }


});


// searchbar



$(document).ready(function(){

  
   

     $('#searchbtn').click(function(){
    
      $("li").slice(0,4).fadeToggle(950);
      $('#searchbtn').find('i').toggleClass(' fa fa-search fa fa-close');
    $('#search_container').fadeToggle(950);
     


    });
    $(window).resize(function(){

        if ($(window).width() <= 600) {
        
            $("li").slice(0,4).show;
          
          $('#search_container').show;
          $('#searchbtn').hide;
        
               }    
               else{
                $("li").slice(0,4).hide;
          
                $('#search_container').hide;
                $('#searchbtn').show;

               } 
        
        });
   
    
});

// Control panel

$("#mnubtn , li ,#overlay").click(function(){
   
    $("#sidenav").toggleClass("show","slow")
    $(".icon").toggleClass("open");
    $("#overlay").fadeToggle();
       
 
});

$("#logout").click(function(){
    $("#overlay2").fadeIn();
    $("#confirm").fadeIn();
  
})

$("#logout_confirm").click(function(){
    $("#overlay2").fadeOut();
    $("#confirm").fadeOut();

    // do log out functionality here 
})

$("#logout_unconfirm").click(function(){
    $("#overlay2").fadeOut();
    $("#confirm").fadeOut();
})