(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{362:function(e,t,o){var content=o(406);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(57).default)("45f639a4",content,!0,{sourceMap:!1})},405:function(e,t,o){"use strict";var n=o(362),r=o.n(n);o.d(t,"default",(function(){return r.a}))},406:function(e,t,o){var n=o(56)((function(i){return i[1]}));n.push([e.i,".item_xE4uJ{display:flex;flex-direction:column;margin-bottom:2rem;padding:.4rem;width:100%}@media(min-width:640px){.item_xE4uJ{width:50%}}@media(min-width:1024px){.item_xE4uJ{width:33.3333333%}}@media(min-width:1450px){.item_xE4uJ{width:25%}}@media(min-width:2000px){.item_xE4uJ{width:20%}}@media(min-width:3000px){.item_xE4uJ{width:16.6666667%}}.image_dQZRG{background-color:#202124;height:0;margin-bottom:1.5rem;overflow:hidden;padding-top:56.25%;position:relative}.image_dQZRG img,.image_dQZRG span{height:100%;left:0;position:absolute;top:0;width:100%}.image_dQZRG span{align-items:center;display:flex;justify-content:center}.name_30cOV{font-size:1.6rem;letter-spacing:.4px;margin-bottom:1rem}.name_30cOV strong{color:#2196f3}.overview_vPrCc{color:#fafafa;flex:1 0 auto;font-size:1.3rem;margin-bottom:1rem}.aired_datF5{color:#80868b;font-size:1.2rem;letter-spacing:.4px}@media(min-width:1200px){.aired_datF5{font-size:1.4rem}}",""]),n.locals={item:"item_xE4uJ",image:"image_dQZRG",name:"name_30cOV",overview:"overview_vPrCc",aired:"aired_datF5"},e.exports=n},409:function(e,t,o){"use strict";o.r(t);o(30),o(67);var n=o(164),r={props:{episode:{type:Object,required:!0}},computed:{poster:function(){return this.episode.still_path?"".concat(n.a,"/w400").concat(this.episode.still_path):null}}},d=o(405),l=o(16);var component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("div",{class:e.$style.item},[t("div",{class:e.$style.image},[e.poster?t("img",{directives:[{name:"lazyload",rawName:"v-lazyload",value:e.poster,expression:"poster"}],staticClass:"lazyload",attrs:{alt:e.episode.name}}):t("span",[t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 24 24","fill-rule":"evenodd","clip-rule":"evenodd",fill:"#999"}},[t("path",{attrs:{d:"M24 22h-24v-20h24v20zm-1-19h-22v18h22v-18zm-1 16h-19l4-7.492 3 3.048 5.013-7.556 6.987 12zm-11.848-2.865l-2.91-2.956-2.574 4.821h15.593l-5.303-9.108-4.806 7.243zm-4.652-11.135c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zm0 1c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z"}})])])]),e._v(" "),t("h2",{class:e.$style.name},[t("strong",[e._v("E"+e._s(e._f("numberWithDoubleDigits")(e.episode.episode_number)))]),e._v(" "+e._s(e.episode.name)+"\n  ")]),e._v(" "),t("div",{class:e.$style.overview},[e._v("\n    "+e._s(e._f("truncate")(e.episode.overview,300))+"\n  ")]),e._v(" "),e.episode.air_date?t("div",{class:e.$style.aired},[e._v("\n    "+e._s(e._f("fullDate")(e.episode.air_date))+"\n  ")]):e._e()])}),[],!1,(function(e){this.$style=d.default.locals||d.default}),null,null);t.default=component.exports}}]);