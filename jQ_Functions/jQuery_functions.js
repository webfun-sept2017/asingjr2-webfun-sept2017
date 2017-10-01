$(document).ready(function(){
    alert('Welcome Back');

    $("#b1").click(function(){
        alert('You selected click!')
    });
    $('#b2').click(function(){
        $('#p2').hide()
    });
    $('#b3').click(function(){
        $('#p2').show();
        $('#p2').data("hello kind sir", {"game": "melee"})
    });
    $('#b4').click(function(){
       $('#p4').toggle()
    });
    $('#b5').click(function(){
        $('#p5').slideDown()});
    $('#b6').click(function(){
        $('#p5').slideUp()
    });
    $('#b7').click(function(){
        $('p7').slideToggle()
    })

    $('#b9').click(function(){
        $('.fadein').fadeOut()
    });
    $('#b8').click(function(){
        $('.fadein').fadeIn()
    });
    $(document).on('click', '#b10',function(){
        $(".red").addClass( "more_height");
        //dynamic content that will need to be reloaded or called back
    })
    $('#b11').click(function(){
        $('#b8').before(".red")
    });
    $('#b12').click(function(){
        $('#b8').after("<p>This is dynamic content also")
    });
    $(document).on(function(){
        'click', '#b17', function(){
        $("#data_results").text("i could not figure out .data so i wrote this")

    }})

})
/*
.val, .html, .text, .append I have used before */