
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
