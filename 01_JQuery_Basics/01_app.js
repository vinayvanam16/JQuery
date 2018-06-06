$('#success-button').click(function () {
    $('#success-card').fadeToggle('slow'); // toggle the any element
    var value = $('#success-button').attr('value'); // to get the value of any attribute
    if(value === 'SHOW'){ // check the button value
        $('#success-button').attr('value','HIDE');
    }
    else if(value === 'HIDE'){
        $('#success-button').attr('value','SHOW');
    }
});