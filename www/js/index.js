
document.addEventListener('deviceready', onDeviceReady, false);
var log_button = document.getElementById("log_button");
var users = {
	"luffy" : { "firstName" : "luffy",
				"lastName" : "D Monkey",
				"password" : "gomugomun0",
				"mail": "mugiwara@gmail.com"},
	"naruto" :{	"firstName":"Naruto",
				"lastName" :"Uzumaki",
				"password" :"datebayo",
				"mail" : "nuzumaki@gmail.com"},
	"songoku" :{"firstName":"Kakaroto",
				 "lastName" :"Anaro",
				 "password" :"ohaioVegeta",
				 "mail" : "songoku@gmail.com"}
};

function check_reg(){
var user = document.getElementById("username").value;

var pass = document.getElementById("pass").value;
var pass2 = document.getElementById("pass2").value;
var _name = document.getElementById("_name").value;
var lastName = document.getElementById("lastName").value;
var mail = document.getElementById("mail").value;
var nameid = user;

if( user==users [user]){
	alert("Usuario ya existente");
}
else if (pass!=pass2){
	alert("La contraseña no coincide");
}
else{
	nameid= {"firstName":_name,
				 "lastName" : lastName,
				 "password" : pass,
				 "mail" : mail}
	localStorage.setItem(user, JSON.stringify(nameid));		
	alert("usuario insertado");

}

}
function check_log(){
	window.location.replace("http://localhost:8000/logi.html")
}

function onDeviceReady() {

   console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    document.getElementById("reg_button").onclick = check_reg;
    document.getElementById("log_button").onclick = check_log;

}
