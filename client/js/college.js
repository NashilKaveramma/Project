$(document).ready(function() {
	var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
    var dataval=$('#studcomment').val();
    var sample = data.name;
    document.getElementById("collegename").innerHTML=sample;
    $( "#placementsubmit" ).click(function( event ) {
    		var upload="placement";
            placement();
    });
    $( "#hostelsubmit" ).click(function( event ) {
    		var upload="hostel";
            hostel();
    });
    $( "#infrasubmit" ).click(function( event ) {
    		var upload="infra";
            infra();
    });
    $( "#tellussubmit" ).click(function( event ) {
            update();
    });
});

function update(){
	var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
    var dataval=$('#studcomment').val();
    sample = data.name;
       var url = "http://localhost:9001/update/"+sample+"/"+dataval+"/"+upload;  
       $.ajax({
  			type: 'GET',
  			url: url,
  			dataType: 'json',
  			success: function(statusText){
  				console.log(statusText);
  				window.location="../collegedetails.html?name="+sample;
  			}
		});
}


function placement(){
	upload="placement";
	var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
    sample = data.name;
	$('#users').remove();
	var element3 = document.createElement("ol");
	element3.setAttribute("class","commentlist");
	element3.setAttribute("id","users");
	document.getElementById("comments").appendChild(element3);
       var url = "http://localhost:9001/placement/"+sample;  
       $.ajax({
  			type: 'GET',
  			url: url,
  			dataType: 'json',
  			success: function(statusText){
  				var sam=statusText;
  				for(i=0;i<sam.length;i++){
					var element = document.createElement("li");
					element.setAttribute("id","user"+i);
					document.getElementById("users").appendChild(element);
					var elem = document.createElement("img");
					elem.setAttribute("src", "images/user.png");
					elem.setAttribute("height", "66");
					elem.setAttribute("width", "66");
					elem.setAttribute("class","avatar");
					document.getElementById("user"+i).appendChild(elem);
					var div = document.createElement("div");
					div.innerHTML = "Anonymous"+i;
					div.setAttribute("class","comment");
					document.getElementById("user"+i).appendChild(div);
					var div = document.createElement("div");
					div.setAttribute("class","comment-body");
					div.innerHTML = sam[i].details;
					document.getElementById("user"+i).appendChild(div);
				}
  			}
		});
}
function hostel(){
	upload="hostel";
	var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
    sample = data.name;
	$('#users').remove();
	var element3 = document.createElement("ol");
	element3.setAttribute("class","commentlist");
	element3.setAttribute("id","users");
	document.getElementById("comments").appendChild(element3);
	var url = "http://localhost:9001/hostel/"+sample;  
       $.ajax({
  			type: 'GET',
  			url: url,
  			dataType: 'json',
  			success: function(statusText){
  				var sam=statusText;
  				for(i=0;i<sam.length;i++){
					var element = document.createElement("li");
					element.setAttribute("id","user"+i);
					document.getElementById("users").appendChild(element);
					var elem = document.createElement("img");
					elem.setAttribute("src", "images/user.png");
					elem.setAttribute("height", "66");
					elem.setAttribute("width", "66");
					elem.setAttribute("class","avatar");
					document.getElementById("user"+i).appendChild(elem);
					var div = document.createElement("div");
					div.innerHTML = "Anonymous"+i;
					div.setAttribute("class","comment");
					document.getElementById("user"+i).appendChild(div);
					var div = document.createElement("div");
					div.setAttribute("class","comment-body");
					div.innerHTML = sam[i].details;
					document.getElementById("user"+i).appendChild(div);
					}
  			}
		});
}
function infra(){
	upload="infra";
	var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
    sample = data.name;
	$('#users').remove();
	var element3 = document.createElement("ol");
	element3.setAttribute("class","commentlist");
	element3.setAttribute("id","users");
	document.getElementById("comments").appendChild(element3);
	var url = "http://localhost:9001/infra/"+sample;  
       $.ajax({
  			type: 'GET',
  			url: url,
  			dataType: 'json',
  			success: function(statusText){
  				var sam=statusText;
  				for(i=0;i<sam.length;i++){
					var element = document.createElement("li");
					element.setAttribute("id","user"+i);
					document.getElementById("users").appendChild(element);
					var elem = document.createElement("img");
					elem.setAttribute("src", "images/user.png");
					elem.setAttribute("height", "66");
					elem.setAttribute("width", "66");
					elem.setAttribute("class","avatar");
					document.getElementById("user"+i).appendChild(elem);
					var div = document.createElement("div");
					div.innerHTML = "Anonymous"+i;
					div.setAttribute("class","comment");
					document.getElementById("user"+i).appendChild(div);
					var div = document.createElement("div");
					div.setAttribute("class","comment-body");
					div.innerHTML = sam[i].details;
					document.getElementById("user"+i).appendChild(div);
					}
  			}
		});
}