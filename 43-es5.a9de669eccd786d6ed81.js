function _defineProperties(i,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(i,e.key,e)}}function _createClass(i,t,o){return t&&_defineProperties(i.prototype,t),o&&_defineProperties(i,o),i}(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{wHD8:function(i,t,o){"use strict";o.r(t),o.d(t,"ion_img",function(){return n});var e=o("84I9");o("8uXE");var n=function(){function i(i){var t=this;Object(e.l)(this,i),this.onLoad=function(){t.ionImgDidLoad.emit()},this.onError=function(){t.ionError.emit()},this.ionImgWillLoad=Object(e.d)(this,"ionImgWillLoad",7),this.ionImgDidLoad=Object(e.d)(this,"ionImgDidLoad",7),this.ionError=Object(e.d)(this,"ionError",7)}var t=i.prototype;return t.srcChanged=function(){this.addIO()},t.componentDidLoad=function(){this.addIO()},t.addIO=function(){var i=this;void 0!==this.src&&("IntersectionObserver"in window?(this.removeIO(),this.io=new IntersectionObserver(function(t){t[0].isIntersecting&&(i.load(),i.removeIO())}),this.io.observe(this.el)):setTimeout(function(){return i.load()},200))},t.load=function(){this.loadError=this.onError,this.loadSrc=this.src,this.ionImgWillLoad.emit()},t.removeIO=function(){this.io&&(this.io.disconnect(),this.io=void 0)},t.render=function(){return Object(e.i)(e.a,{class:Object(e.e)(this)},Object(e.i)("img",{decoding:"async",src:this.loadSrc,alt:this.alt,onLoad:this.onLoad,onError:this.loadError}))},_createClass(i,[{key:"el",get:function(){return Object(e.f)(this)}}],[{key:"watchers",get:function(){return{src:["srcChanged"]}}},{key:"style",get:function(){return":host{-o-object-fit:contain;object-fit:contain}:host,img{display:block}img{width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}"}}]),i}()}}]);