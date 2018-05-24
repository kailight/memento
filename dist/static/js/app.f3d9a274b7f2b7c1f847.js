webpackJsonp([1],{NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),i=s("bOdI"),o=s.n(i);console.info;var a={name:"Memento",props:["t","f"],data:function(){return{now:"",defaultFormat:"%h : %m : %s",d:"0",h:"0",m:"0",s:"0",dd:"00",hh:"00",mm:"00",ss:"00"}},methods:{updateTimer:function(){this.now=new Date},manualUpdate:function(){if(this.now=new Date,!this.then||!this.now)return[];var t,e,s,n,i=void 0,o=void 0,a=void 0,r=void 0,m=void 0;try{i=this.then.getTime()-this.now.getTime()}catch(t){return}if((i=Math.floor(i/1e3))<0)return[0,0,0,0];m=Math.floor(i/60/60/24),r=Math.floor(i/60/60),a=Math.floor(i/60),o=Math.floor(i),m>0&&(r-=24*m,a-=24*m*60,o-=24*m*60*60),r>0&&(a-=60*r,o-=60*r*60),a>0&&(o-=60*a),o>=60&&(o-=60,a++),a>=60&&(a=0,r++),r>=24&&(r=0,m++),n=1==(""+m).length?"0"+m:m,s=1==(""+r).length?"0"+r:r,e=1==(""+a).length?"0"+a:a,t=1==(""+o).length?"0"+o:o,this.d=m,this.h=r,this.m=a,this.s=o,this.dd=n,this.hh=s,this.mm=e,this.ss=t}},computed:o()({countdown:function(){return"test"},then:function(){return new Date(this.t)},result:function(){var t=this.diff,e=this.format;return t[0]&&(this.d=t[0],this.h=t[1],this.m=t[2],this.s=t[3],e=(e=(e=(e=(e=(e=(e=(e=e.replace(/#dd/g,this.dd)).replace(/#hh/g,this.hh)).replace(/#mm/g,this.mm)).replace(/#ss/g,this.ss)).replace(/#d/g,this.d)).replace(/#h/g,this.h)).replace(/#m/g,this.m)).replace(/#s/g,this.s)),e},rawFormat:function(){return!!(this.$slots&&this.$slots.default&&this.$slots.default[0]&&this.$slots.default[0].text)},format:function(){return this.rawFormat?this.$slots.default[0].text:this.defaultFormat},diff:function(){if(!this.then||!this.now)return[];var t=void 0,e=void 0,s=void 0,n=void 0,i=void 0;try{t=this.then.getTime()-this.now.getTime()}catch(t){return}return t=Math.floor(t/1e3),t<0?[0,0,0,0]:(i=Math.floor(t/60/60/24),n=Math.floor(t/60/60),s=Math.floor(t/60),e=Math.floor(t),i>0&&(n-=24*i,s-=24*i*60,e-=24*i*60*60),n>0&&(s-=60*n,e-=60*n*60),s>0&&(e-=60*s),e>=60&&(e-=60,s++),s>=60&&(s=0,n++),n>=24&&(n=0,i++),[i,n,s,e])}},"result",function(){var t=this.defaultFormat;return this.rawFormat&&(t=this.$slots.default[0].text),t=(t=(t=(t=(t=(t=(t=(t=t.replace(/%ss/g,this.ss)).replace(/%mm/g,this.mm)).replace(/%hh/g,this.hh)).replace(/%dd/g,this.dd)).replace(/%s/g,this.s)).replace(/%m/g,this.m)).replace(/%h/g,this.h)).replace(/%d/g,this.d)}),mounted:function(){this.now=new Date,this.manualUpdate(),setInterval(this.manualUpdate,1e3)}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"memento-countdown"},[t.rawFormat?t._e():t._t("default",[t._v(t._s(t.hh)+" : "+t._s(t.mm)+" : "+t._s(t.ss))],{s:t.s,m:t.m,h:t.h,d:t.d,ss:t.ss,mm:t.mm,hh:t.hh,dd:t.dd}),t._v(" "),t.rawFormat?s("div",[t._v(t._s(t.result))]):t._e()],2)},staticRenderFns:[]};var m={name:"App",components:{memento:s("VU/8")(a,r,!1,function(t){s("nG78")},"data-v-65822934",null).exports},data:function(){return{format:"Its #h hours #m minutes #s seconds to MEMENTO",time:"2018-12-31 23:59:59 GMT+3",hhh:"{{m.hh}}",mmm:"{{m.mm}}",sss:"{{m.ss}}"}}},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"block intro"},[s("div",[s("h1",[t._v("Memento")]),s("div",{staticClass:"version"},[t._v("0.0.8")]),s("div",{staticClass:"motto"},[t._v("Simple VueJs countdown component")]),s("memento",{staticClass:"standard",attrs:{t:t.time}})],1)]),s("div",{staticClass:"block docs"},[s("h3",[t._v("Installation")]),s("p",[t._v("Install npm package with")]),t._m(0),s("p",[t._v("Require memento in vue file")]),t._m(1),s("p",[t._v("or")]),t._m(2),s("p",[t._v("Register component in global Vue instance or another component")]),t._m(3),s("h3",{staticClass:"usage"},[t._v("Basic usage")]),s("div",{staticClass:"controls"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.time,expression:"time"}],staticStyle:{width:"20rem"},attrs:{type:"text",size:"20"},domProps:{value:t.time},on:{input:function(e){e.target.composing||(t.time=e.target.value)}}})]),s("pre",[s("code",[t._v('<memento t="'+t._s(t.time)+'"></memento>')])]),s("memento",{attrs:{t:t.time}}),s("h3",{staticClass:"usage"},[t._v("Advanced usage")]),s("pre",[s("code",[t._v('<memento style="text-align: center; font-weight: bold" t="'+t._s(t.time)+'">\n  %dd days %hh hours %mm minutes and %ss seconds left\n</memento>')])]),s("memento",{staticStyle:{"text-align":"center","font-weight":"bold"},attrs:{t:t.time}},[t._v("%dd days %hh hours %mm minutes and %ss seconds left")]),s("p",[t._v("We can stylize output")]),t._m(4),s("p",[t._v("Possible entities:")]),t._m(5),s("h3",{staticClass:"usage"},[t._v("Pro usage")]),s("pre",[s("code",[t._v('<memento style="margin: 2rem auto; font-family: sans-serif; font-size: 1.6rem;" t="'+t._s(t.time)+'">\n  <template slot-scope="m">\n    <span style="color: #336699">'+t._s(t.mmm)+'</span> :\n    <span style="color: #996633">'+t._s(t.hhh)+'</span> :\n    <span style="color: #993366">'+t._s(t.sss)+"</span>\n  </template>\n</memento>")])]),s("memento",{staticStyle:{margin:"2rem auto","font-family":"sans-serif","font-size":"1.6rem","text-align":"center"},attrs:{t:t.time},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",{staticStyle:{color:"#996633"}},[t._v(t._s(e.hh)+" : ")]),s("span",{staticStyle:{color:"#336699"}},[t._v(t._s(e.mm)+" : ")]),s("span",{staticStyle:{color:"#993366"}},[t._v(t._s(e.ss))])]}}])}),t._m(6),s("p",[t._v("Possible entities:")]),t._m(7)],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("> npm install @kailight/memento")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("var Memento = require('@kailight/memento').default;")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("import Memento from '@kailight/memento';")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("components: {\n  'memento' : Memento,\n// other components")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("We can pass simple format string with entities we'd like to see."),e("br"),this._v("\nThis way we have more control over entities")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("b",[t._v("%s")]),t._v("- seconds")]),s("li",[s("b",[t._v("%m")]),t._v("- minutes")]),s("li",[s("b",[t._v("%h")]),t._v("- hours")]),s("li",[s("b",[t._v("%d")]),t._v("- days")]),s("li",[s("b",[t._v("%ss")]),t._v("- seconds with leading zeros")]),s("li",[s("b",[t._v("%mm")]),t._v("- minutes with leading zeros")]),s("li",[s("b",[t._v("%hh")]),t._v("- hours with leading zeros")]),s("li",[s("b",[t._v("%dd")]),t._v("- days with leading zeros")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("We can pass custom template to memento using slots."),e("br"),this._v("\nIn this case we have total control over how we display elements."),e("br")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("b",[t._v("s")]),t._v("- seconds")]),s("li",[s("b",[t._v("m")]),t._v("- minutes")]),s("li",[s("b",[t._v("h")]),t._v("- hours")]),s("li",[s("b",[t._v("d")]),t._v("- days")]),s("li",[s("b",[t._v("ss")]),t._v("- seconds with leading zeros")]),s("li",[s("b",[t._v("mm")]),t._v("- minutes with leading zeros")]),s("li",[s("b",[t._v("hh")]),t._v("- hours with leading zeros")]),s("li",[s("b",[t._v("dd")]),t._v("- days with leading zeros")])])}]};var l=s("VU/8")(m,h,!1,function(t){s("hWnP")},null,null).exports;n.a.config.productionTip=!1,new n.a({el:"#app",components:{App:l},template:"<App/>"})},hWnP:function(t,e){},nG78:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f3d9a274b7f2b7c1f847.js.map