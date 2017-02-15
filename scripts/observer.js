/*
* @Author: denghaiyang
* @Date:   2017-02-14 16:04:19
* @Last Modified by:   denghaiyang
* @Last Modified time: 2017-02-14 17:22:59
*/

'use strict';

var data = {name: 'kindeng'}
observe(data)
data.name = 'dmp' // 监听到值的变化 kingdeng --> dmq

function observe(data){
	if(!data || typeof data !== 'object') return

	// 取出所有属性遍历
	Object.keys(data).forEach(function(key){
		defineReactive(data, key, data[key])
	})
}

function defineReactive(data, key, val){
	var dep = new Dep();
	observe(val) //监听子属性
	Object.defineProperty(data, key, {
		enumerable: true,
		configurable: true,
		get: function(){
			// 由于需要在闭包内添加watcher,所以通过Dep定义一个全局target属性，暂存watcher,添加完移除
			Dep.target && dep.target(Dep.target)
			return val
		},
		set: function(newVal){
			if(val === newVal) return
			console.log('监听到值的变化了', val, '-->', newVal)
			val = newVal
			dep.notify() //通知所有订阅者
		}
	})
}

function Dep(){
	this.subs = []
}

Dep.prototype = {
	addSub: function(sub){
		this.subs.push(sub)
	},
	notify: function(){
		this.subs.forEach(function(sub){
			sub.update()
		})
	}
}