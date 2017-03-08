$(document).ready(function() {
    $('#collegename').focus();
    $('#error-message').hide();
    $( "#search" ).click(function( event ) {
            event.preventDefault();
            searchplace();
    });
});

function searchplace() {
    var cname= $('#collegename').val();
       if(cname.match(/[^a-zA-Z]/)) {
                $('#error-message').show();
                document.getElementById("collegename").style.border= "thick solid red";
                return false;
        }
        if (cname) {
            var xhttp = new XMLHttpRequest();
            SERVER_URL = "http://localhost:9001/indexdetails/";
            var params = "cname="+cname;
            xhttp.open( "POST",SERVER_URL, true );
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.onreadystatechange = function() { 
            if ( xhttp.readyState === 4 && xhttp.status === 200 ) {
                string = xhttp.responseText;
                if(string == "0"){
                    console.log(string);
                    window.location="../collegedetails.html?name="+cname;
                }
                else{
                    window.location="../index.html";   
                }
             }
           }
           xhttp.send(params);
           }
}