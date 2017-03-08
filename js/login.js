$(document).ready(function() {
    $('#uname').focus();
    $('#login').click(function( event ) {
    event.preventDefault();
    verify();
});
});
function verify() {
    var username = $('#uname').val(),
        password = $('#pass').val(),
        SERVER_URL = "http://localhost:3000/login/";
    if (username && password) {
        var url = SERVER_URL + username + '/' + password;
        var jqxhr = $.ajax(url)
        .done(function(statusText) {
            if(statusText.responseStatus == 401)
            {
                $('p#error-message').show(); 
            }
        console.log(statusText);
        })
        .fail(function(statusText) {
            alert("FAILED");
        })
        .always(function(statusText) {
            alert("SUCCESS");
        })
    } else {
      $('p#error-message').show();
        
    }
}