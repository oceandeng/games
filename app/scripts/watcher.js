/*
* @Author: denghaiyang
* @Date:   2017-02-14 17:23:06
* @Last Modified by:   ocean_deng
* @Last Modified time: 2017-02-16 10:31:51
*/

'use strict';

function Watcher(vm, exp, cb){
	this.cb = cb
	this.vm = vm
	this.exp = exp
	this.depIds = {}
	this.value = this.get()
}

// Watcher.js
Watcher.prototype = {
	update: function(){
		this.run()
	},
	run: function(){
		var value = this.get()
		var oldVal = this.value
		if(value !== oldVal){
			this.value = value
			this.cb.call(this.vm, value, oldVal)
		}
	},
	addDep: function(dep){
		if(!this.depIds.hasOwnProperty(dep.id)){
			dep.addSub(this)
			this.depIds[dep.id] = dep
		}
	},
    get: function() {
        Dep.target = this
        var value = this.getVMVal()
        Dep.target = null
        return value
    },
    getVMVal: function(){
    	var exp = this.exp.split('.')
    	var val = this.vm._data
    	exp.forEach(function(k){
    		val = val[k]
    	})
    	return val
    }
}