/*
* @Author: denghaiyang
* @Date:   2017-02-14 17:23:06
* @Last Modified by:   denghaiyang
* @Last Modified time: 2017-02-14 17:27:52
*/

'use strict';


// Watcher.js
Watcher.prototype = {
    get: function(key) {
        Dep.target = this;
        this.value = data[key];    // 这里会触发属性的getter，从而添加订阅者
        Dep.target = null;
    }
}