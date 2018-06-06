$('#submit-button').click(function(){
    var username_value = "username : " + $('#username').val();
    var password_value = "password : " + $('#password').val();
    var email_value = "Email : " + $('#email').val();

    $('#user_text').text(username_value);
    $('#password_text').text(password_value);
    $('#email_text').text(email_value);
});
