
$(document).ready(function() {

  $('#submit').click(function() {
   
    var name = $('#name').val();
    var email = $('#email').val();
    var number = $('#phone').val();
    var message = $('#message-area').val();
    var required = [name, email, number];

    for (var i = 0; i < required.length; i++){
      if(required[i] === ""){
        $('p').text("Please Fill Out Required Fields");
        $('p').addClass("warning");
        $('label').addClass("warning");
      }else{
        $('p').removeClass("warning");
        $('label').removeClass("warning");
      }
   
    }
if (!$('label').hasClass ('warning')){
$('#form').remove();
$('h2').text("Thanks for your feedback!");
}   
  });

});