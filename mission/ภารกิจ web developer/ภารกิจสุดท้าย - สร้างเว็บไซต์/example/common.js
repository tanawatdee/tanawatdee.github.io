document.body.addEventListener("keypress", start);
document.getElementById("btnYes").addEventListener("click", start);
document.getElementById("btnNo").addEventListener("click", start);

function start(event){
	if(event.keyCode == undefined && event.target.id == 'btnNo' || event.keyCode == 110)
		window.location = urlNo;
	if(event.keyCode == undefined && event.target.id == 'btnYes' || event.keyCode == 121)
		window.location = urlYes;
}