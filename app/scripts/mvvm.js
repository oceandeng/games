/*
* @Author: ocean_deng
* @Date:   2017-02-16 10:45:52
* @Last Modified by:   ocean_deng
* @Last Modified time: 2017-02-16 16:23:52
*/

'use strict';

function MVVM(options){
	this.$options = options
	var data = this._data = this.$options.data
	var me = this

	// 数据代理
	// 实现 vm.xxx -> vm._data.xxx
	Object.keys(data).forEach(function(key){
		me._proxy(key)
	})

	// 数据劫持 递归给每个属性添加getter/setter
	observe(data, this)

	// 模板编译
	this.$compile = new Compile(options.el || document.body, this)
}

MVVM.prototype = {
	$watch: function(key, cb, options){
		new Watcher(this, key, cb)
	},

	_proxy: function(key){
		var me = this
		Object.defineProperty(me, key, {
			configurable: false,
			enumerable: true,
			get: function proxyGetter(){
				return me._data[key]
			},
			set: function proxySetter(newVal){
				me._data[key] = newVal
			}
		})
	}
}