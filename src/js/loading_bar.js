var percent = 0;
function loadBar(percent){
	var bar = document.getElementById('progress-bar');
	var percentage = document.getElementById('load-percentage');
	percentage.innerHTML = percent + '%';
	bar.style.width = percent + '%';
}
var load = setInterval(function(){
	loadBar(percent);
	if(percent < 100){
		percent++;
	}
	else{
		percent = 0;
	}
},500);