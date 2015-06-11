var gWidth,
	gHeight,
	canvas,
	ctx;

var moneyBagPic = new Image();
var moneyPic = new Image();

var	mBagTop,
	mBagLeft,
	mBagWidth,
	mBagHeight;

var startX,
	startY;

var timer = 0;

function init(){
	canvas = document.querySelector('#canvas');
	ctx = canvas.getContext('2d');

	gWidth = document.body.clientWidth;
	gHeight = document.body.clientHeight;

	canvas.width = gWidth;
	canvas.height = gHeight;

	moneyBagPic.src = 'media/game/moneybag.png';
	moneyPic.src = 'media/game/money.png';

	mBagWidth = parseInt(gWidth * 0.6);
	mBagHeight = parseInt(mBagWidth / (378 / 449));
	mBagTop = gHeight - mBagHeight;
	mBagLeft = (gWidth - mBagWidth) / 2;

	$(document).on('touchstart', function(e){touchstartfn(e)});
	$(document).on('touchmove', function(e){preventmove(e)});
	$(document).on('touchend', function(e){touchendfn(e)});

	moneyBagPic.onload = function(){
		gameLoop();
	}
}

function gameLoop(){
	window.requestAnimFrame(gameLoop);

	fillCanvas();
	drawMoneyBag();
}

function fillCanvas(){
	ctx.fillStyle = '#d42c2b';
	ctx.fillRect(0, 0, gWidth, gHeight);
}

function drawMoneyBag(){
		ctx.drawImage(moneyBagPic, mBagLeft, mBagTop, mBagWidth, mBagHeight);
}

function touchstartfn(event){
	var touch = event.touches[0];
	var x = parseInt(touch.pageX);
	var y = parseInt(touch.pageY);

	startX = x;
	startY = y;
	// alert(touch.pageX + '--------' + touch.pageY);
}

function preventmove(event){
	event.preventDefault();

	var touch = event.touches[0];
	var x = parseInt(touch.pageX);
	var y = parseInt(touch.pageY);

	if(startY - y > 100){
		timer = setTimeout(function(){
			if(timer){
				alert('a');
				
			}
			timer = 0;
		}
		, 500);
	}
}

function touchendfn(event){
	console.log(startX + '--------------' + startY);
}



$(document).ready(function(){
	init();
});