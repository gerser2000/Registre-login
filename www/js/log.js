document.addEventListener('deviceready', onDeviceReady, false);
var log_button = document.getElementById("log_button");


function check_log(){
var user = document.getElementById("username").value;

var pass = document.getElementById("pass").value;

var users = JSON.parse(localStorage.getItem(user));


if( users==null){
	alert("Usuari no trovat");
}

else if (users["password"]!= pass){
	
	
	alert("contraseña incorrecta");

}else{
	alert("Hola mundo");
}

}
function check_reg(){
	window.location.replace("http://localhost:8000/index.html");
}

function onDeviceReady() {

   console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    document.getElementById("reg_button").onclick = check_reg;
    document.getElementById("log_button").onclick = check_log;

}
