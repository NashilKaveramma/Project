$(document).ready(function() {
    $('#error-message').hide();
    $('#uname').focus();
    $('#signup').click(function( event ) {
    event.preventDefault();
    verify();
});
});
function verify() {
    var uname= $('#uname').val(),
        password = $('#pass').val(),
        cpassword = $('#pass1').val(),
        cname = $('#cname').val(),
        rnumber = $('#rnumber').val(),
        SERVER_URL = "http://localhost:9001/signup/";
        if(uname == "" || password == "" || cpassword == "" || cname == "" || rnumber == ""){
            $('#error-message').show();
            document.getElementById("error-message").innerHTML= "Should Enter all the values";
            return false;
        }
        if(uname.match(/[^a-zA-Z]/)) {
                $('#error-message').show();
                document.getElementById("error-message").innerText = "Username should be in characters";
                document.getElementById("uname").style.border= "thick solid red";
                return false;
        }
        var regex = /(?=.*\d{1,3})(?=.*[a-zA-Z]{1,3})(?=.*[!@#$%^&*_]{1,3}).{6,9}/;
            if(!regex.test(password)){
                $('#error-message').show();
                document.getElementById("error-message").innerText = "Invalid password";
                document.getElementById("pass").style.border= "thick solid red";
                return false;
        }
        if(password != cpassword){
                $('#error-message').show();
                document.getElementById("error-message").innerText = "password should be matched";
                document.getElementById("pass").style.border= "thick solid red";
                document.getElementById("pass1").style.border= "thick solid red";
                return false;
        }
        if(cname.match(/[^a-zA-Z]/)) {
                $('#error-message').show();
                document.getElementById("error-message").innerText = "Invalid college name";
                document.getElementById("cname").style.border= "thick solid red";
                return false;
        }
        if (uname && password && cpassword && cname && rnumber) {
            var xhttp = new XMLHttpRequest();
            var params = "uname="+uname+"&pass="+password+"&cname="+cname+"&rnumber="+rnumber;
            xhttp.open( "POST",SERVER_URL, true );
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.onreadystatechange = function() { 
            if ( xhttp.readyState === 4 && xhttp.status === 200 ) {
                string = xhttp.responseText;
                console.log(string);
               window.location="../login.html";
             }
           }
           xhttp.send(params);
           } else {
      $('p#error-message').show();
        
    }
}