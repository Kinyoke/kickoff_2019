var url = "http://www.kickoff.co.tz/kickoff/php/validate.php?";

$(".input-field:last").keyup(function(event) {
    if (event.keyCode === 13) {
        $(".btn-primary").click();
    }
});


$(".btn-primary").click(function() {
	var arg1 = $(".input-field:first").val();
	var arg2 = $(".input-field:last").val();
	if (arg1 != "" && arg2 != "") {
		$(".fa-user-shield").css("color","rgb(100,100,100)");
		var query = arg1+","+arg2;
		requestService(url, "client_request=validate,"+query, redirectPage);
	}else{
		$(".fa-user-shield").css("color","red");
	}
});


function requestService(url, query, cfunction) {
	pushRequest = new XMLHttpRequest();
    pushRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          cfunction(this);
        }
      };
      pushRequest.open("POST",url,true);
      pushRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      pushRequest.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
      pushRequest.send(query);
}


function redirectPage(pushRequest) {
	var response = JSON.parse(pushRequest.responseText);
	if (response["response"] == "valid") {
		localStorage.setItem("userSession_Id", response["sessionId"]);
		console.log(localStorage.getItem("userSession_Id", response["sessionId"]));
		window.location.href = "http://www.kickoff.co.tz/dashboard.html";
		$(".alert").css({"display": "none"});
	}else{
		//alert user...
		$(".alert").css({"display": "block", "color": "red"});
		$(".alert").text("Incorrect username or password!");
	}
}