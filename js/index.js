$(document).ready(function() {
    $('#collegename').focus();
    $('#error-message').hide();
    $( "#search" ).click(function( event ) {
            event.preventDefault();
            searchplace();
    });
});

function searchplace() {
    var cname= $('#collegename').val(),
        SERVER_URL = "http://localhost:3000/indexdetails/";
       if(cname.match(/[^a-zA-Z]/)) {
                $('#error-message').show();
                document.getElementById("collegename").style.border= "thick solid red";
                return false;
        }
        var url = SERVER_URL + cname;
        var jqxhr = $.ajax(url)
        .done(function(statusText) {
            if(statusText.responseStatus == 404)
            {
              document.getElementById("error-message").innerText = "Invalid College Name";
            }
            console.log(statusText);
        })
        .fail(function(statusText) {
            alert("FAILED");
        })
        .always(function(statusText) {
            alert("SUCCESS");
        })
}