window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame || 
    window.webkitRequestAnimationFrame   || 
    window.mozRequestAnimationFrame      || 
    window.oRequestAnimationFrame        || 
    window.msRequestAnimationFrame       || 
    function(callback, element){
        window.setTimeout(function(){
            callback(+new Date);
        }, 1000 / 60);
    };
})();

var fpsCounter = {
	oldT: 0,
	fps: "Starting..."
}

function FPSloop(){
		let time = Date.now();
		if(Math.floor(1000/(time-fpsCounter.oldT))){
		fpsCounter.fps = Math.floor(1000/(time-fpsCounter.oldT));
		}
		fpsCounter.oldT = time;
		requestAnimFrame(FPSloop);
	}
	
function appendDiv(text){
	let c = document.getElementById('fps151001');
	if(!c){
		let div = document.createElement('div');
		div.id = "fps151001";
		div.style = "position: fixed; top: 0; left: 0; width: auto; height: auto; background: #000000c3; text-align: center; color: White";
		document.body.appendChild(div);
		c = document.getElementById('fps151001');
		c.innerHTML = "<p style='font-size: 16px; color: #00FF00; margin: 10px'>FPS: "+text+"</p>";
	} else {
		c.innerHTML = "<p style='font-size: 16px; color: #00FF00; margin: 10px'>FPS: "+text+"</p>";
	}
}

var stats = {
    speedCo: null
}
function speedConnexion(){
    let size = 32413;
    let time1 = new Date();
    time1 = time1.getTime();
    let img = new Image();
    img.src = "https://ak.picdn.net/assets/cms/14c40a5a7a7f50788cf9e346071ab49ad1201b12-17d705f0349ed08f5387b39c7644054a59affe52-LOHP_vector_module_shutterstock_307324316-min.jpg?"+time1;
    img.onload = function(){
        let time2 = new Date();
        time2 = time2.getTime();
        let  ms = time2-time1;
        let final = Math.round(size/ms*100)/100;
        stats.speedCo = final;
    }
}

/*
setTimeout(function(){
    console.log(stats.speedCo+" ko/s");
}, 1500);

setInterval(function(){
	appendDiv(fpsCounter.fps);
}, 1500);
*/
FPSloop();
speedConnexion();
