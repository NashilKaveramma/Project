$(document).ready(function() {
    $('#name').focus();
    $('#signup').click(function( event ) {
    event.preventDefault();
    verify();
});
});
function verify() {
    var name = $('#name').val(),
        mail= $('#mail').val(),
        uname= $('#uname').val(),
        password = $('#pass').val(),
        cpassword = $('#pass1').val(),
        cname = $('#cname').val(),
        dept = $('#dept').val(),
        year = $('#year').val(),
        rnumber = $('#rnumber').val(),
        SERVER_URL = "http://localhost:3000/signup/";
    if (name && mail && uname && password && cpassword && cname && dept && year && rnumber) {
        var url = SERVER_URL + name + '/' + mail + '/' + uname + '/' + password + '/' + cpassword + '/' + cname + '/' + dept + '/' + year + '/' + rnumber;
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