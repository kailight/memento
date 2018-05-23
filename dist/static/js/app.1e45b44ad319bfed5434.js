webpackJsonp([1],{C4E6:function(t,e){},M8ck:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW");console.info;var n={name:"Memento",props:["t","f"],data:function(){return{now:"",defaultFormat:"#h : #m : #s",d:"0",h:"0",m:"0",s:"0",dd:"00",hh:"00",mm:"00",ss:"00"}},methods:{updateTimer:function(){this.now=new Date},manualUpdate:function(){if(this.now=new Date,!this.then||!this.now)return[];var t,e,s,i,n=void 0,o=void 0,r=void 0,a=void 0,h=void 0;try{n=this.then.getTime()-this.now.getTime()}catch(t){return}if((n=Math.floor(n/1e3))<0)return[0,0,0,0];h=Math.floor(n/60/60/24),a=Math.floor(n/60/60),r=Math.floor(n/60),o=Math.floor(n),h>0&&(a-=24*h,r-=24*h*60,o-=24*h*60*60),a>0&&(r-=60*a,o-=60*a*60),r>0&&(o-=60*r),o>=60&&(o-=60,r++),r>=60&&(r=0,a++),a>=24&&(a=0,h++),i=1==(""+h).length?"0"+h:h,s=1==(""+a).length?"0"+a:a,e=1==(""+r).length?"0"+r:r,t=1==(""+o).length?"0"+o:o,this.d=h,this.h=a,this.m=r,this.s=o,this.dd=i,this.hh=s,this.mm=e,this.ss=t}},computed:{countdown:function(){return"test"},then:function(){return new Date(this.t)},result:function(){var t=this.diff,e=this.format;return t[0]&&(this.d=t[0],this.h=t[1],this.m=t[2],this.s=t[3],e=(e=(e=(e=(e=(e=(e=(e=e.replace(/#dd/g,this.dd)).replace(/#hh/g,this.hh)).replace(/#mm/g,this.mm)).replace(/#ss/g,this.ss)).replace(/#d/g,this.d)).replace(/#h/g,this.h)).replace(/#m/g,this.m)).replace(/#s/g,this.s)),e},useSlot:function(){return!!(this.$slots.default&&this.$slots.default[0]&&this.$slots.default[0].text)},format:function(){return this.f?this.f:this.useSlot?this.$slots.default[0].text:this.defaultFormat},diff:function(){if(!this.then||!this.now)return[];var t=void 0,e=void 0,s=void 0,i=void 0,n=void 0;try{t=this.then.getTime()-this.now.getTime()}catch(t){return}return t=Math.floor(t/1e3),t<0?[0,0,0,0]:(n=Math.floor(t/60/60/24),i=Math.floor(t/60/60),s=Math.floor(t/60),e=Math.floor(t),n>0&&(i-=24*n,s-=24*n*60,e-=24*n*60*60),i>0&&(s-=60*i,e-=60*i*60),s>0&&(e-=60*s),e>=60&&(e-=60,s++),s>=60&&(s=0,i++),i>=24&&(i=0,n++),[n,i,s,e])},__d:function(){return this.diff[0]},__h:function(){return this.diff[1]},__m:function(){return this.diff[2]},__s:function(){return this.diff[3]},__dd:function(){if(this.diff&&this.diff[0])return""+this.diff[0].length==1?"0"+this.diff[0]:this.diff[0]},__hh:function(){if(this.diff&&this.diff[1])return""+this.diff[1].length==1?"0"+this.diff[1]:this.diff[1]},__mm:function(){if(this.diff&&this.diff[2])return""+this.diff[2].length==1?"0"+this.diff[2]:this.diff[2]},_ss:function(){if(this.diff&&this.diff[3])return""+this.diff[3].length==1?"0"+this.diff[3]:this.diff[3]}},mounted:function(){this.now=new Date,this.manualUpdate(),setInterval(this.manualUpdate,1e3)}},o={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"memento-countdown"},[t._t("default",[t._v(t._s(t.h)+" : "+t._s(t.m)+" : "+t._s(t.s))],{s:t.s,m:t.m,h:t.h,d:t.d,ss:t.ss,mm:t.mm,hh:t.hh,dd:t.dd})],2)},staticRenderFns:[]};var r={name:"App",components:{memento:s("VU/8")(n,o,!1,function(t){s("M8ck")},"data-v-5891f3ec",null).exports},data:function(){return{format:"Its #h hours #m minutes #s seconds to MEMENTO",time:"2018-12-31 23:59:59 GMT+3",hhh:"{{m.hh}}",mmm:"{{m.mm}}",sss:"{{m.ss}}"}}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("h2",[t._v("Memento")]),t._v(" "),s("div",{staticClass:"motto"},[t._v("Easy to use VueJs countdown component")]),t._v(" "),s("div",{staticClass:"controls"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.time,expression:"time"}],staticStyle:{width:"20rem"},attrs:{type:"text",size:"20"},domProps:{value:t.time},on:{input:function(e){e.target.composing||(t.time=e.target.value)}}})]),t._v(" "),s("memento",{staticStyle:{margin:"2rem auto","font-family":"sans-serif","font-size":"1.6rem"},attrs:{t:t.time}}),t._v(" "),s("div",{staticClass:"docs"},[s("h3",[t._v("Installation")]),t._v(" "),s("p",[t._v("Install npm package with")]),t._v(" "),t._m(0),t._v(" "),s("p",[t._v("Require memento in vue file")]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("or")]),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("Register component in global Vue instance or another component")]),t._v(" "),t._m(3),t._v(" "),s("h3",[t._v("Basic usage")]),t._v(" "),s("div",[s("pre",[s("code",[t._v('<memento t="'+t._s(t.time)+'"></memento>')])])]),t._v(" "),s("memento",{attrs:{t:t.time}}),t._v(" "),s("h3",[t._v("Advanced usage")]),t._v(" "),s("pre",[s("code",[t._v('<memento style="margin: 2rem auto; font-family: sans-serif; font-size: 1.6rem;" t="'+t._s(t.time)+'">\n<template slot-scope="m">\n  <span style="color: #336699">'+t._s(t.mmm)+'</span> :\n  <span style="color: #996633">'+t._s(t.hhh)+'</span> :\n  <span style="color: #993366">'+t._s(t.sss)+"</span>\n</template>\n</memento>")])])],1),t._v(" "),s("memento",{staticStyle:{margin:"2rem auto","font-family":"sans-serif","font-size":"1.6rem"},attrs:{t:t.time},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",{staticStyle:{color:"#996633"}},[t._v(t._s(e.hh))]),t._v(" :\n        "),s("span",{staticStyle:{color:"#336699"}},[t._v(t._s(e.mm))]),t._v(" :\n        "),s("span",{staticStyle:{color:"#993366"}},[t._v(t._s(e.ss))])]}}])}),t._v(" "),t._m(4)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("> npm install @kailight/memento")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("var Memento = require('@kailight/memento').default;")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("import Memento from '@kailight/memento';")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("components: {\n  'memento' : Memento,\n  // other components\n},")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{"text-align":"left"}},[s("p",[t._v("\n        We can pass custom template to memento using slots.\n        In this case we have more control over display and entities\n      ")]),t._v(" "),s("p",[t._v("The entities are:")]),t._v(" "),s("ul",[s("li",[s("b",[t._v("s")]),t._v(" - seconds")]),t._v(" "),s("li",[s("b",[t._v("m")]),t._v(" - minutes")]),t._v(" "),s("li",[s("b",[t._v("h")]),t._v(" - hours")]),t._v(" "),s("li",[s("b",[t._v("d")]),t._v(" - days")]),t._v(" "),s("li",[s("b",[t._v("ss")]),t._v(" - seconds with leading zero")]),t._v(" "),s("li",[s("b",[t._v("mm")]),t._v(" - minutes with leading zero")]),t._v(" "),s("li",[s("b",[t._v("hh")]),t._v(" - hours with leading zero")]),t._v(" "),s("li",[s("b",[t._v("dd")]),t._v(" - days with leading zero")])])])}]};var h=s("VU/8")(r,a,!1,function(t){s("C4E6")},null,null).exports;i.a.config.productionTip=!1,new i.a({el:"#app",components:{App:h},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.1e45b44ad319bfed5434.js.map