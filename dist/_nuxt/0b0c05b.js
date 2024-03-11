(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{348:function(t,e,n){var content=n(388);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("65c61c69",content,!0,{sourceMap:!1})},378:function(t,e,n){"use strict";n.r(e);n(30),n(384),n(67),n(236),n(22),n(240);var o={props:{video:{type:Object,required:!0},index:{type:Number,required:!0}},methods:{handleVideo:function(t){this.$emit("openModal",t)},getSeconds:function(t){var a=t.match(/\d+/g);return t.indexOf("M")>=0&&-1===t.indexOf("H")&&-1===t.indexOf("S")&&(a=[0,a[0],0]),t.indexOf("H")>=0&&-1===t.indexOf("M")&&(a=[a[0],0,a[1]]),t.indexOf("H")>=0&&-1===t.indexOf("M")&&-1===t.indexOf("S")&&(a=[a[0],0,0]),t=0,3===a.length&&(t+=3600*parseInt(a[0]),t+=60*parseInt(a[1]),t+=parseInt(a[2])),2===a.length&&(t+=60*parseInt(a[0]),t+=parseInt(a[1])),1===a.length&&(t+=parseInt(a[0])),t},formatDuration:function(t){var e=this.getSeconds(t);e%=3600;var n=Math.floor(e/60);return(e%=60)<10&&(e="0".concat(e)),"".concat(n,":").concat(e)}}},r=n(387),d=n(16);var component=Object(d.a)(o,(function(){var t=this,e=t._self._c;return e("div",{class:t.$style.item},[e("a",{class:t.$style.link,attrs:{href:t.video.url},on:{click:function(e){return e.preventDefault(),t.handleVideo(t.index)}}},[e("div",{class:t.$style.image},[t.video.thumb?e("img",{directives:[{name:"lazyload",rawName:"v-lazyload",value:t.video.thumb,expression:"video.thumb"}],staticClass:"lazyload",attrs:{alt:t.video.name}}):t._e(),t._v(" "),t.video.duration?e("div",{class:t.$style.duration},[t._v("\n        "+t._s(t.formatDuration(t.video.duration))+"\n      ")]):t._e(),t._v(" "),e("div",{class:t.$style.play},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 55 55"}},[e("circle",{attrs:{cx:"27.5",cy:"27.5",r:"26.75",fill:"none",stroke:"#fff","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"}}),e("path",{attrs:{fill:"none",stroke:"#fff","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M20.97 40.81L40.64 27.5 20.97 14.19v26.62z"}})])])]),t._v(" "),e("h2",{class:t.$style.name},[t._v("\n      "+t._s(t.video.name)+"\n    ")]),t._v(" "),e("div",{class:t.$style.type},[t._v("\n      "+t._s(t.video.type)+"\n    ")])])])}),[],!1,(function(t){this.$style=r.default.locals||r.default}),null,null);e.default=component.exports},384:function(t,e,n){"use strict";var o=n(2),r=n(385);o({target:"String",proto:!0,forced:n(386)("link")},{link:function(t){return r(this,"a","href",t)}})},385:function(t,e,n){"use strict";var o=n(4),r=n(32),d=n(17),l=/"/g,m=o("".replace);t.exports=function(t,e,n,o){var c=d(r(t)),f="<"+e;return""!==n&&(f+=" "+n+'="'+m(d(o),l,"&quot;")+'"'),f+">"+c+"</"+e+">"}},386:function(t,e,n){"use strict";var o=n(3);t.exports=function(t){return o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},387:function(t,e,n){"use strict";var o=n(348),r=n.n(o);n.d(e,"default",(function(){return r.a}))},388:function(t,e,n){var o=n(56)((function(i){return i[1]}));o.push([t.i,".item_tX3Rt{display:flex;margin-bottom:2rem;padding:1rem;width:100%}@media(min-width:640px){.item_tX3Rt{width:50%}}@media(min-width:1024px){.item_tX3Rt{width:33.3333333%}}@media(min-width:1450px){.item_tX3Rt{width:25%}}@media(min-width:2000px){.item_tX3Rt{width:20%}}@media(min-width:3000px){.item_tX3Rt{width:16.6666667%}}.link_Z-CB7{display:flex;flex-direction:column;width:100%}.image_6yJUs{background-color:#202124;height:0;overflow:hidden;padding-bottom:56.25%;position:relative}.image_6yJUs img,.image_6yJUs span{height:100%;left:0;position:absolute;top:0;width:100%}.image_6yJUs span{align-items:center;display:flex;justify-content:center}.image_6yJUs.lazyloaded_OeTVe .lazyload_sKQ\\+t{opacity:.8}.play_zin1m{left:50%;top:50%;transform:translate(-50%,-50%)}.duration_hQGk8,.play_zin1m{position:absolute}.duration_hQGk8{background-color:rgba(0,0,0,.7);bottom:0;padding:.4rem 1.2rem .2rem;right:0}.duration_hQGk8,.name_H6EBG{font-size:1.3rem}.name_H6EBG{flex:1 0 auto;letter-spacing:.4px;margin-top:1rem}@media(min-width:1200px){.name_H6EBG{font-size:1.5rem;margin-bottom:.5rem}}.type_WtRmn{color:#80868b;font-size:1.2rem;letter-spacing:.4px}@media(min-width:1200px){.type_WtRmn{font-size:1.4rem}}",""]),o.locals={item:"item_tX3Rt",link:"link_Z-CB7",image:"image_6yJUs",lazyloaded:"lazyloaded_OeTVe",lazyload:"lazyload_sKQ+t",play:"play_zin1m",duration:"duration_hQGk8",name:"name_H6EBG",type:"type_WtRmn"},t.exports=o}}]);