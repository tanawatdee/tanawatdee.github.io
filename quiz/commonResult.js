document.body.addEventListener("keypress", start);
document.getElementById("btnShare").addEventListener("click", start);
document.getElementById("btnRe").addEventListener("click", start);

function start(event){
	if(event.keyCode == undefined && event.target.id == 'btnRe' || event.keyCode == 110)
		window.location = "index.html";
	if(event.keyCode == undefined && event.target.id == 'btnShare' || event.keyCode == 121)
		window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(urlShare),'facebook-share-dialog','width=626,height=436');
}