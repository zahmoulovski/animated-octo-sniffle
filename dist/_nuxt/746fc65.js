(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{346:function(e,t,o){"use strict";o.r(t);var l,n,d,r,m=o(18),c=(o(45),o(30),o(236),o(39)),h={props:{data:{type:Array,required:!1,default:function(){return[]}},type:{type:String,required:!1,default:"image"},modifier:{type:String,required:!1,default:""},nav:{type:Boolean,required:!1,default:!1},startAt:{type:Number,required:!1,default:0},ariaLabel:{type:String,required:!1,default:""}},head:function(){return{bodyAttrs:{class:"modal-open"}}},data:function(){return{selected:null,activeItem:null}},computed:{modalClass:function(){return Object(m.a)(Object(m.a)({"modal--nav":this.showNav},"modal--".concat(this.type),!0),this.modifier,!0)},showNav:function(){return this.nav&&this.data.length>1},label:function(){return this.ariaLabel?this.ariaLabel:this.activeItem&&this.activeItem.name?this.activeItem.name:null}},watch:{selected:function(){this.activeItem=this.data[this.selected]}},created:function(){this.selected=this.startAt},beforeMount:function(){window.addEventListener("keydown",this.handleKeyDown),l=document.activeElement},mounted:function(){n=this.$refs.modal.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'),n=Array.prototype.slice.call(n),d=n[0],r=n[n.length-1],d.focus(),"iframe"===this.type&&(this.handleIframeSize(),window.addEventListener("resize",this.resizeIframeSize))},beforeDestroy:function(){window.removeEventListener("keydown",this.handleKeyDown),"iframe"===this.type&&window.removeEventListener("resize",this.resizeIframeSize),l&&l.focus()},methods:{previous:function(){this.selected=(this.selected-1+this.data.length)%this.data.length},next:function(){this.selected=(this.selected+1)%this.data.length},close:function(){this.$emit("close")},handleKeyDown:function(e){if(27===e.keyCode)this.close();else if(this.nav&&39===e.keyCode)this.next();else if(this.nav&&37===e.keyCode)this.previous();else if(9===e.keyCode){if(1===n.length)return void e.preventDefault();e.shiftKey?this.handleBackwardTab(e):this.handleForwardTab(e)}},handleForwardTab:function(e){document.activeElement===r&&(e.preventDefault(),d.focus())},handleBackwardTab:function(e){document.activeElement===d&&(e.preventDefault(),r.focus())},handleIframeSize:function(){var e,t,o=16/9,l=getComputedStyle(this.$refs.modal),n=this.$refs.modal.offsetWidth,d=this.$refs.modal.offsetHeight;e=n-=parseFloat(l.paddingRight)+parseFloat(l.paddingLeft),t=d-=parseFloat(l.paddingTop)+parseFloat(l.paddingBottom),d>n/o?t=n/o:n>d*o&&(e=d*o),this.$refs.modal.querySelector(".modal__iframe").style.width="".concat(e,"px"),this.$refs.modal.querySelector(".modal__iframe").style.height="".concat(t,"px")},resizeIframeSize:Object(c.a)((function(){this.handleIframeSize()}),600)}},f=(o(367),o(16)),component=Object(f.a)(h,(function(){var e=this,t=e._self._c;return t("transition",{attrs:{name:"modal",appear:""}},[t("div",{ref:"modal",staticClass:"modal",class:e.modalClass,attrs:{tabindex:"-1","aria-hidden":"false","aria-label":e.label,role:"dialog"},on:{click:e.close}},[t("div",{staticClass:"modal__wrap"},[t("div",{staticClass:"modal__body",on:{click:function(e){e.stopPropagation()}}},[t("button",{staticClass:"modal__close",attrs:{"aria-label":"Close",type:"button"},on:{click:function(t){return t.stopPropagation(),e.close.apply(null,arguments)}}},[t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",viewBox:"0 0 15 15"}},[t("g",{attrs:{fill:"none",stroke:"#fff","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"1.5"}},[t("path",{attrs:{d:"M.75.75l13.5 13.5M14.25.75L.75 14.25"}})])])]),e._v(" "),t("div",{class:"modal__".concat(e.type)},["iframe"===e.type&&e.activeItem?t("iframe",{attrs:{src:e.activeItem.src,frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:""}}):e._e(),e._v(" "),"image"===e.type&&e.activeItem?t("img",{directives:[{name:"lazyload",rawName:"v-lazyload",value:e.activeItem.src,expression:"activeItem.src"}],staticClass:"lazyload",attrs:{alt:""}}):e._e()]),e._v(" "),e.showNav?t("div",{staticClass:"modal__nav"},[t("button",{staticClass:"modal__arrow modal__arrow--prev",attrs:{"aria-label":"Previous",type:"button"},on:{click:function(t){return t.stopPropagation(),e.previous.apply(null,arguments)}}},[t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"}},[t("path",{attrs:{fill:"none",stroke:"#fff","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",d:"M17.9 23.2L6.1 12 17.9.8"}})])]),e._v(" "),t("div",{staticClass:"modal__count"},[e._v("\n            "+e._s(e.selected+1)+" / "+e._s(e.data.length)+"\n          ")]),e._v(" "),t("button",{staticClass:"modal__arrow modal__arrow--next",attrs:{"aria-label":"Next",type:"button",title:"Next"},on:{click:function(t){return t.stopPropagation(),e.next.apply(null,arguments)}}},[t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"}},[t("path",{attrs:{fill:"none",stroke:"#fff","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",d:"M6.1 23.2L17.9 12 6.1.8"}})])])]):e._e()])])])])}),[],!1,null,null,null);t.default=component.exports},359:function(e,t,o){var content=o(368);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(57).default)("259de5e4",content,!0,{sourceMap:!1})},367:function(e,t,o){"use strict";o(359)},368:function(e,t,o){var l=o(56),n=o(238),d=o(369),r=l((function(i){return i[1]})),m=n(d);r.push([e.i,"body.modal-open{overflow:hidden}.modal{background-color:#000;bottom:0;cursor:pointer;left:0;overflow-x:hidden;overflow-y:auto;position:fixed;right:0;top:0;z-index:999}@media(min-width:1200px){.modal{padding:4.4rem 10rem}}.modal__wrap{display:flex;flex-direction:column;min-height:100%}.modal__body{cursor:default;margin:auto;position:relative}.modal__close{align-items:center;background:none;display:flex;height:4.4rem;justify-content:center;padding:0;position:absolute;right:0;top:0;width:4.4rem;z-index:1}@media(max-width:1199px){.modal__close{height:6rem;left:0;position:fixed;width:6rem}.modal--nav{padding-bottom:5rem}.modal--nav .modal__image img{max-height:calc(100vh - 5rem)}}.modal__nav{align-items:center;bottom:-4.4rem;display:flex;height:4.4rem;left:0;position:absolute;right:0}@media(max-width:1199px){.modal__nav{background-color:#000;bottom:0;height:5rem;justify-content:space-between;left:0;position:fixed;right:0}}@media(min-width:1200px){.modal__nav{justify-content:flex-end}}.modal__arrow{align-items:center;background:none;display:flex;justify-content:center;padding:0}@media(max-width:1199px){.modal__arrow{flex:1;height:5rem}}@media(min-width:1200px){.modal__arrow{height:10rem;margin-top:-5rem;position:fixed;top:50%;width:10rem}.modal__arrow--prev{left:0}.modal__arrow--next{right:0}}.modal__count{font-size:1.6rem;line-height:1}@media(min-width:1200px){.modal--images .modal__close{top:-4.4rem}}.modal__image.lazyloading{background:url("+m+") no-repeat 50%}.modal__image img{max-height:100vh}@media(min-width:1200px){.modal__image img{max-height:calc(100vh - 8.8rem)}.modal--iframe .modal__close{top:-4.4rem}}.modal__iframe{height:0;overflow:hidden;padding-bottom:56.25%;position:relative;width:100%}.modal__iframe iframe{background:#000;border:0;display:block;height:100%;left:0;margin:0;padding:0;position:absolute;top:0;width:100%}.modal-enter,.modal-leave-active{opacity:0}.modal-enter-active,.modal-leave-active{transition:opacity .3s ease}",""]),r.locals={},e.exports=r},369:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NCIgaGVpZ2h0PSI0NCIgdmlld0JveD0iMCAwIDQ0IDQ0IiBzdHJva2U9IiMyMTk2ZjMiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLXdpZHRoPSIyIj48Y2lyY2xlIGN4PSIyMiIgY3k9IjIyIiByPSIxIj48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0iMHMiIGR1cj0iMS44cyIgdmFsdWVzPSIxOyAyMCIgY2FsY01vZGU9InNwbGluZSIga2V5VGltZXM9IjA7IDEiIGtleVNwbGluZXM9IjAuMTY1LCAwLjg0LCAwLjQ0LCAxIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InN0cm9rZS1vcGFjaXR5IiBiZWdpbj0iMHMiIGR1cj0iMS44cyIgdmFsdWVzPSIxOyAwIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlUaW1lcz0iMDsgMSIga2V5U3BsaW5lcz0iMC4zLCAwLjYxLCAwLjM1NSwgMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L2NpcmNsZT48Y2lyY2xlIGN4PSIyMiIgY3k9IjIyIiByPSIxIj48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0iLTAuOXMiIGR1cj0iMS44cyIgdmFsdWVzPSIxOyAyMCIgY2FsY01vZGU9InNwbGluZSIga2V5VGltZXM9IjA7IDEiIGtleVNwbGluZXM9IjAuMTY1LCAwLjg0LCAwLjQ0LCAxIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InN0cm9rZS1vcGFjaXR5IiBiZWdpbj0iLTAuOXMiIGR1cj0iMS44cyIgdmFsdWVzPSIxOyAwIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlUaW1lcz0iMDsgMSIga2V5U3BsaW5lcz0iMC4zLCAwLjYxLCAwLjM1NSwgMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L2NpcmNsZT48L2c+PC9zdmc+Cg=="}}]);