/* 
* @Author: ocean
* @Date:   2015-06-11 14:10:49
* @Last Modified by:   ocean
* @Last Modified time: 2015-06-24 15:48:21
*/

'use strict';

var moneyObj = function(){
	this.x;
	this.y;
	this.top;
	this.left;
	this.speed;
};

moneyObj.prototype.init = function(){
	this.x = parseInt(mBagWidth * 0.8);
	this.y = parseInt(this.x / (380 / 772));
	this.top = parseInt(gHeight - this.y + 30);
	this.left = parseInt((gWidth - this.x) / 2);
	this.speed = -50;
	this.timer = 0;

}

moneyObj.prototype.update = function(){
	this.timer += deltaTime;
	if(switchy){
		if(this.timer > 30){
			this.top += this.speed;
		}
		if(Math.abs(this.top) > this.y + 100){
			this.top = parseInt(gHeight - this.y + 30);
			switchy = false;
			scoreNum++;
			console.log(scoreNum);
		}
	}
}

moneyObj.prototype.draw = function(){
	ctx.save();
	ctx.drawImage(moneyPic, this.left, this.top, this.x, this.y);
	ctx.restore();
}

function drawMoney(){
	// for(var i = 0; i < num; i++){
		money.update();
		money.draw();
	// }
}

function aliveUpdate(){

}