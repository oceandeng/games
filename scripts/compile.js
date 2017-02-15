/*
* @Author: denghaiyang
* @Date:   2017-02-14 17:27:41
* @Last Modified by:   denghaiyang
* @Last Modified time: 2017-02-15 09:19:25
*/

'use strict';

function Compile(el){
	this.$el = this.isElementNode(el) ? el : document.querySelector(el)
	if(this.$el){
		this.$fragment = this.node2Fragment(this.$el)
		this.init()
		this.$el.appendChild(this.$fragment)
	}
}



function Compile(el) {
    this.$el = this.isElementNode(el) ? el : document.querySelector(el);
    if (this.$el) {
        this.$fragment = this.node2Fragment(this.$el);
        this.init();
        this.$el.appendChild(this.$fragment);
    }
}
Compile.prototype = {
    init: function() { this.compileElement(this.$fragment); },
    node2Fragment: function(el) {
        var fragment = document.createDocumentFragment(), child;
        // 将原生节点拷贝到fragment
        while (child = el.firstChild) {
            fragment.appendChild(child);
        }
        return fragment;
    }
};