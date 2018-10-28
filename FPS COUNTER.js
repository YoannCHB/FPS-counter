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

setInterval(function(){
	appendDiv(fpsCounter.fps);
}, 1500);
FPSloop();
appendDiv(fpsCounter.fps);