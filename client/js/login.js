$(document).ready(function() {
    $('#error-message').hide();
    $('#uname').focus();
    $('#login').click(function( event ){
    event.preventDefault();
    verify();
});
});
function verify() {
    
    var username = $('#uname').val(),
        password = $('#pass').val(),
        SERVER_URL = "http://localhost:9001/login/";
    if(username == "" || password == ""){
       $('#error-message').show();
            document.getElementById("error-message").innerHTML= "Should Enter all the values";
            return false;
    }
    if (username && password) {
            var xhttp = new XMLHttpRequest();
            var params = "username="+username+"&password="+password;
            xhttp.open( "POST",SERVER_URL, true );
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.onreadystatechange = function() { 
            if ( xhttp.readyState === 4 && xhttp.status === 200 ) {
                var sam=xhttp.responseText;
                if(sam == "1"){
                console.log(sam);
                window.location="../index.html";
                }
                else if(sam == "0"){
                  $('#error-message').show();
                  document.getElementById("error-message").innerHTML= "Incorrect Password";
                  return false;
                }
                else{
                  $('#error-message').show();
                  document.getElementById("error-message").innerHTML= "Incorrect Username";
                  return false;
                }
             }
           }
           xhttp.send(params);
    } else {
      $('p#error-message').show();
        
    }
}
