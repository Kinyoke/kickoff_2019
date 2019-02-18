var url = "http://www.kickoff.co.tz/kickoff/php/validate.php?";

window.onload = isLogged();
setInterval(isLogged, 30000*60);

function isLogged(){
	var sessionId = localStorage.getItem("userSession_Id");
	requestService(url, "client_request=ussid,"+sessionId, redirectPage);
}


function requestService(url, query, cfunction) {
	pushRequest = new XMLHttpRequest();
    pushRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          cfunction(this);
        }
      };
      pushRequest.open("POST",url,true);
      pushRequest.setRequestHeader("Content-type", "application/json");
      //pushRequest.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
      pushRequest.send(query);
}


function redirectPage(pushRequest) {
	var response = JSON.parse(pushRequest.responseText);
	if (response["sessionPass"] == "Thabit") { $("body").css("display","block"); }
	else{ window.location.href = "http://www.kickoff.co.tz/kickoff/Admin.html"; }
}


