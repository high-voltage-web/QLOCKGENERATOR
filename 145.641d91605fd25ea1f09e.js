(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{WLq3:function(t,o,e){"use strict";e.r(o),e.d(o,"IonToast",function(){return u}),e.d(o,"IonToastController",function(){return m});var n=e("B5Ai"),i=e("cBjU"),r=e("dnAA"),a=e("d6Vy");function s(t,o,e){var n=new t,i=new t,r=o.host||o,a=o.querySelector(".toast-wrapper");switch(i.addElement(a),e){case"top":i.fromTo("translateY","-100%","calc(10px + var(--ion-safe-area-top, 0px))");break;case"middle":var s=Math.floor(r.clientHeight/2-a.clientHeight/2);a.style.top=s+"px",i.fromTo("opacity",.01,1);break;default:i.fromTo("translateY","100%","calc(-10px - var(--ion-safe-area-bottom, 0px))")}return Promise.resolve(n.addElement(r).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).add(i))}function d(t,o,e){var n=new t,i=new t,r=o.host||o,a=o.querySelector(".toast-wrapper");switch(i.addElement(a),e){case"top":i.fromTo("translateY","calc(10px + var(--ion-safe-area-top, 0px))","-100%");break;case"middle":i.fromTo("opacity",.99,0);break;default:i.fromTo("translateY","calc(-10px - var(--ion-safe-area-bottom, 0px))","100%")}return Promise.resolve(n.addElement(r).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(i))}function c(t,o,e){var n=new t,i=new t,r=o.host||o,a=o.querySelector(".toast-wrapper");switch(i.addElement(a),e){case"top":a.style.top="calc(8px + var(--ion-safe-area-top, 0px))",i.fromTo("opacity",.01,1);break;case"middle":var s=Math.floor(r.clientHeight/2-a.clientHeight/2);a.style.top=s+"px",i.fromTo("opacity",.01,1);break;default:a.style.bottom="calc(8px + var(--ion-safe-area-bottom, 0px))",i.fromTo("opacity",.01,1)}return Promise.resolve(n.addElement(r).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(i))}function l(t,o){var e=new t,n=new t,i=o.host||o,r=o.querySelector(".toast-wrapper");return n.addElement(r),n.fromTo("opacity",.99,0),Promise.resolve(e.addElement(i).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(n))}var u=function(){function t(){this.presented=!1,this.duration=0,this.keyboardClose=!1,this.position="bottom",this.showCloseButton=!1,this.translucent=!1,this.animated=!0}return t.prototype.present=function(){return n.a(this,void 0,void 0,function(){var t=this;return n.c(this,function(o){switch(o.label){case 0:return[4,Object(r.c)(this,"toastEnter",s,c,this.position)];case 1:return o.sent(),this.duration>0&&(this.durationTimeout=setTimeout(function(){return t.dismiss(void 0,"timeout")},this.duration)),[2]}})})},t.prototype.dismiss=function(t,o){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(r.d)(this,t,o,"toastLeave",d,l,this.position)},t.prototype.onDidDismiss=function(){return Object(r.e)(this.el,"ionToastDidDismiss")},t.prototype.onWillDismiss=function(){return Object(r.e)(this.el,"ionToastWillDismiss")},t.prototype.getButtons=function(){var t=this,o=this.buttons?this.buttons.map(function(t){return"string"==typeof t?{text:t}:t}):[];return this.showCloseButton&&o.push({text:this.closeButtonText||"Close",handler:function(){return t.dismiss(void 0,"cancel")}}),o},t.prototype.buttonClick=function(t){return n.a(this,void 0,void 0,function(){var o;return n.c(this,function(e){switch(e.label){case 0:return Object(r.b)(o=t.role)?[2,this.dismiss(void 0,o)]:[4,this.callButtonHandler(t)];case 1:return e.sent()?[2,this.dismiss(void 0,t.role)]:[2,Promise.resolve()]}})})},t.prototype.callButtonHandler=function(t){return n.a(this,void 0,void 0,function(){var o;return n.c(this,function(e){switch(e.label){case 0:if(!t||!t.handler)return[3,4];e.label=1;case 1:return e.trys.push([1,3,,4]),[4,t.handler()];case 2:return!1===e.sent()?[2,!1]:[3,4];case 3:return o=e.sent(),console.error(o),[3,4];case 4:return[2,!0]}})})},t.prototype.hostData=function(){var t;return{style:{zIndex:6e4+this.overlayIndex},class:Object.assign((t={},t[""+this.mode]=!0,t),Object(a.c)(this.color),Object(a.a)(this.cssClass),{"toast-translucent":this.translucent})}},t.prototype.renderButtons=function(t,o){var e,n=this;if(0!==t.length){var r=((e={"toast-button-group":!0})["toast-button-group-"+o]=!0,e);return Object(i.b)("div",{class:r},t.map(function(t){return Object(i.b)("button",{type:"button",class:p(t),tabIndex:0,onClick:function(){return n.buttonClick(t)}},Object(i.b)("div",{class:"toast-button-inner"},t.icon&&Object(i.b)("ion-icon",{name:t.icon,slot:void 0===t.text?"icon-only":void 0,class:"toast-icon"}),t.text),"md"===n.mode&&Object(i.b)("ion-ripple-effect",{type:void 0!==t.icon&&void 0===t.text?"unbounded":"bounded"}))}))}},t.prototype.render=function(){var t,o=this.getButtons(),e=o.filter(function(t){return"start"===t.side}),n=o.filter(function(t){return"start"!==t.side}),r=((t={"toast-wrapper":!0})["toast-"+this.position]=!0,t);return Object(i.b)("div",{class:r},Object(i.b)("div",{class:"toast-container"},this.renderButtons(e,"start"),Object(i.b)("div",{class:"toast-content"},void 0!==this.header&&Object(i.b)("div",{class:"toast-header"},this.header),void 0!==this.message&&Object(i.b)("div",{class:"toast-message"},this.message)),this.renderButtons(n,"end")))},Object.defineProperty(t,"is",{get:function(){return"ion-toast"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},buttons:{type:"Any",attr:"buttons"},closeButtonText:{type:String,attr:"close-button-text"},color:{type:String,attr:"color"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},duration:{type:Number,attr:"duration"},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},header:{type:String,attr:"header"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},message:{type:String,attr:"message"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},position:{type:String,attr:"position"},present:{method:!0},showCloseButton:{type:Boolean,attr:"show-close-button"},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionToastDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-toast-md-h{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;left:0;top:0;display:block;position:absolute;width:100%;height:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:strict;z-index:1000;pointer-events:none}[dir=rtl].sc-ion-toast-md-h + b.sc-ion-toast-md{right:0}.overlay-hidden.sc-ion-toast-md-h{display:none}.ion-color.sc-ion-toast-md-h{--button-color:inherit;color:var(--ion-color-contrast)}.ion-color.sc-ion-toast-md-h   .toast-wrapper.sc-ion-toast-md{background:var(--ion-color-base)}.toast-wrapper.sc-ion-toast-md{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}[dir=rtl].sc-ion-toast-md-h   .toast-wrapper.sc-ion-toast-md, [dir=rtl]   .sc-ion-toast-md-h   .toast-wrapper.sc-ion-toast-md{left:var(--end);right:var(--start)}.toast-container.sc-ion-toast-md{-ms-flex-align:center;align-items:center;pointer-events:auto;contain:content}.toast-container.sc-ion-toast-md, .toast-content.sc-ion-toast-md{display:-ms-flexbox;display:flex}.toast-content.sc-ion-toast-md{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message.sc-ion-toast-md{-ms-flex:1;flex:1;white-space:pre-wrap}.toast-button-group.sc-ion-toast-md{display:-ms-flexbox;display:flex}.toast-button.sc-ion-toast-md{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon.sc-ion-toast-md{font-size:1.4em}.toast-button-inner.sc-ion-toast-md{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover:hover){.toast-button.sc-ion-toast-md:hover{cursor:pointer}}.sc-ion-toast-md-h{--background:var(--ion-color-step-800,#333);--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0,0,0,0.2),0 6px 10px 0 rgba(0,0,0,0.14),0 1px 18px 0 rgba(0,0,0,0.12);--button-color:var(--ion-color-primary,#3880ff);--color:var(--ion-color-step-50,#f2f2f2);--max-width:700px;--start:8px;--end:8px;font-size:14px}.toast-wrapper.sc-ion-toast-md{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:.01;z-index:10}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-wrapper.sc-ion-toast-md{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.toast-content.sc-ion-toast-md{padding-left:16px;padding-right:16px;padding-top:14px;padding-bottom:14px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-content.sc-ion-toast-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.toast-header.sc-ion-toast-md{margin-bottom:2px;font-weight:500}.toast-header.sc-ion-toast-md, .toast-message.sc-ion-toast-md{line-height:20px}.toast-button-group-start.sc-ion-toast-md{margin-left:8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button-group-start.sc-ion-toast-md{margin-left:unset;-webkit-margin-start:8px;margin-inline-start:8px}}.toast-button-group-end.sc-ion-toast-md{margin-right:8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button-group-end.sc-ion-toast-md{margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}.toast-button.sc-ion-toast-md{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:14px;font-weight:500;letter-spacing:.84px;text-transform:uppercase;overflow:hidden}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button.sc-ion-toast-md{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button-cancel.sc-ion-toast-md{color:var(--ion-color-step-100,#e6e6e6)}.toast-button-icon-only.sc-ion-toast-md{border-radius:50%;padding-left:9px;padding-right:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button-icon-only.sc-ion-toast-md{padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}@media (any-hover:hover){.toast-button.sc-ion-toast-md:hover{background-color:rgba(var(--ion-color-primary-rgb,56,128,255),.08)}.toast-button-cancel.sc-ion-toast-md:hover{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.08)}}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}();function p(t){var o;return Object.assign(((o={"toast-button":!0,"toast-button-icon-only":void 0!==t.icon&&void 0===t.text})["toast-button-"+t.role]=void 0!==t.role,o["ion-focusable"]=!0,o["ion-activatable"]=!0,o),Object(a.a)(t.cssClass))}var m=function(){function t(){}return t.prototype.create=function(t){return Object(r.f)(this.doc.createElement("ion-toast"),t)},t.prototype.dismiss=function(t,o,e){return Object(r.g)(this.doc,t,o,"ion-toast",e)},t.prototype.getTop=function(){return n.a(this,void 0,void 0,function(){return n.c(this,function(t){return[2,Object(r.h)(this.doc,"ion-toast")]})})},Object.defineProperty(t,"is",{get:function(){return"ion-toast-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),t}()}}]);