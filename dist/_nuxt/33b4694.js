(window.webpackJsonp=window.webpackJsonp||[]).push([[10,3],{340:function(t,e,o){"use strict";o.r(e);o(30),o(67);var l=o(164),r=o(342),n={mixins:[r.e,r.f],props:{item:{type:Object,required:!0}},computed:{poster:function(){return this.item.poster_path?"".concat(l.a,"/w370_and_h556_bestv2").concat(this.item.poster_path):!!this.item.profile_path&&"".concat(l.a,"/w370_and_h556_bestv2").concat(this.item.profile_path)},media:function(){return this.item.media_type?this.item.media_type:this.item.name?"tv":"movie"}}},c=o(16),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card"},[e("nuxt-link",{staticClass:"card__link",attrs:{to:{name:"".concat(t.media,"-id"),params:{id:t.item.id}}}},[e("div",{staticClass:"card__img"},[t.poster?e("img",{directives:[{name:"lazyload",rawName:"v-lazyload",value:t.poster,expression:"poster"}],staticClass:"lazyload",attrs:{alt:t.name}}):e("span",[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 24 24","fill-rule":"evenodd","clip-rule":"evenodd",fill:"#999"}},[e("path",{attrs:{d:"M24 22h-24v-20h24v20zm-1-19h-22v18h22v-18zm-1 16h-19l4-7.492 3 3.048 5.013-7.556 6.987 12zm-11.848-2.865l-2.91-2.956-2.574 4.821h15.593l-5.303-9.108-4.806 7.243zm-4.652-11.135c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zm0 1c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z"}})])])]),t._v(" "),e("h2",{staticClass:"card__name"},[t._v("\n      "+t._s(t.name)+"\n    ")]),t._v(" "),"person"!==t.media&&(t.stars||t.item.vote_average)?e("div",{staticClass:"card__rating"},[t.stars?e("div",{staticClass:"card__stars"},[e("div",{style:{width:"".concat(t.stars,"%")}})]):t._e(),t._v(" "),t.item.vote_average?e("div",{staticClass:"card__vote"},[t._v("\n        "+t._s(t._f("rating")(t.item.vote_average))+"\n      ")]):t._e()]):t._e()])],1)}),[],!1,null,null,null);e.default=component.exports},342:function(t,e,o){"use strict";o.d(e,"e",(function(){return r})),o.d(e,"f",(function(){return n})),o.d(e,"i",(function(){return c})),o.d(e,"h",(function(){return d})),o.d(e,"a",(function(){return f})),o.d(e,"b",(function(){return h})),o.d(e,"g",(function(){return v})),o.d(e,"d",(function(){return m})),o.d(e,"c",(function(){return _}));o(67),o(31),o(123),o(122),o(58),o(30),o(10);var l=o(164),r={computed:{name:function(){return this.item.title?this.item.title:this.item.name}}},n={computed:{stars:function(){if(this.item.vote_average)return 10*this.item.vote_average}}},c={computed:{yearStart:function(){var t=this.item.release_date?this.item.release_date:this.item.first_air_date;if(t)return t.split("-")[0]}}},d={computed:{yearEnd:function(){var t=this.item.last_air_date;if(t)return t.split("-")[0]}}},f={computed:{backdrop:function(){if(this.item.backdrop_path)return"".concat(l.a,"/original").concat(this.item.backdrop_path)}}},h={computed:{cert:function(){if(this.item.release_dates){var t=this.item.release_dates.results.find((function(t){return"GB"===t.iso_3166_1||"US"===t.iso_3166_1}));if(!t)return null;var e=t.release_dates.find((function(t){return""!==t.certification}));if(e)return e.certification}else if(this.item.content_ratings){var o=this.item.content_ratings.results.find((function(t){return"GB"===t.iso_3166_1||"US"===t.iso_3166_1}));return o?o.rating:null}}}},v={computed:{trailer:function(){var t=this.item.videos.results;return t.length&&(t=t.find((function(video){return"Trailer"===video.type})))?[{name:t.name,src:"https://www.youtube.com/embed/".concat(t.key,"?rel=0&showinfo=0&autoplay=1")}]:null}}},m={computed:{directors:function(){var t=this.item.credits.crew;if(t)return t.filter((function(t){return"Director"===t.job})).map((function(t){return'<a href="/person/'.concat(t.id,'">').concat(t.name,"</a>")})).join(", ")}}},_={computed:{creators:function(){var t=this.item.created_by;if(t)return t.map((function(t){return'<a href="/person/'.concat(t.id,'">').concat(t.name,"</a>")})).join(", ")}}}},352:function(t,e,o){"use strict";var l=o(363),r=o.n(l);e.a={data:function(){return{elementWidth:0,carouselWidth:0,visibleWidth:0,maximumPosition:0,unusableVisibleWidth:0,disableLeftButton:!0,disableRightButton:!1}},mounted:function(){r.a.polyfill(),window.addEventListener("resize",this.resizeEvent)},beforeDestroy:function(){window.removeEventListener("resize",this.resizeEvent)},methods:{calculateState:function(t){var e=72,o=this.$refs.carouselElement.firstChild.getBoundingClientRect().width,l=t*o,r=this.$refs.carouselElement.scrollWidth;window.innerWidth>=1200&&(e=92);var n=this.$refs.carouselElement.offsetWidth-e;this.unusableVisibleWidth=e,this.elementWidth=o,this.carouselWidth=l,this.visibleWidth=n,this.maximumPosition=r,this.disableLeftButton=!this.$refs.carouselElement.scrollLeft,this.disableRightButton=n>=l},moveTo:function(t){this.$refs.carouselElement.scrollTo({left:t,behavior:"smooth"})},moveToClickEvent:function(t){var e=this.$refs.carouselElement.scrollLeft+("left"===t?1-this.visibleWidth:this.visibleWidth),o=e-e%this.elementWidth;this.moveTo(o)},scrollEvent:function(){var t=this.$refs.carouselElement.scrollLeft,e=this.maximumPosition-this.visibleWidth-this.elementWidth;this.disableLeftButton=3>t,this.disableRightButton=t>e}}}},357:function(t,e,o){"use strict";o.r(e);var l=o(352),r={components:{Card:o(340).default},mixins:[l.a],props:{title:{type:String,required:!1,default:""},viewAllUrl:{type:Object,required:!1,default:function(){return null}},items:{type:Object,required:!0}},mounted:function(){var t=this.viewAllUrl?this.items.results.length+1:this.items.results.length;this.calculateState(t)},methods:{resizeEvent:function(){var t=this.viewAllUrl?this.items.results.length+1:this.items.results.length;this.calculateState(t)}}},n=o(16),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"listing listing--carousel"},[t.title||t.viewAllUrl?e("div",{staticClass:"listing__head"},[t.title?e("h2",{staticClass:"listing__title"},[t._v("\n      "+t._s(t.title)+"\n    ")]):t._e(),t._v(" "),t.viewAllUrl?e("nuxt-link",{staticClass:"listing__explore",attrs:{to:t.viewAllUrl}},[e("strong",[t._v("Explore All")])]):t._e()],1):t._e(),t._v(" "),e("div",{staticClass:"carousel"},[e("button",{staticClass:"carousel__nav carousel__nav--left",attrs:{"aria-label":"Previous",type:"button",disabled:t.disableLeftButton},on:{click:function(e){return t.moveToClickEvent("left")}}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[e("path",{attrs:{fill:"none",stroke:"#fff","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",d:"M17.9 23.2L6.1 12 17.9.8"}})])]),t._v(" "),e("div",{ref:"carouselElement",staticClass:"carousel__items",on:{scroll:t.scrollEvent}},[t._l(t.items.results,(function(t){return e("Card",{key:"card-".concat(t.id),attrs:{item:t}})})),t._v(" "),t.viewAllUrl?e("div",{staticClass:"card"},[e("nuxt-link",{staticClass:"card__link",attrs:{to:t.viewAllUrl}},[e("div",{staticClass:"card__img"},[e("span",[t._v("Explore All")])])])],1):t._e()],2),t._v(" "),e("button",{staticClass:"carousel__nav carousel__nav--right",attrs:{"aria-label":"Next",type:"button",disabled:t.disableRightButton},on:{click:function(e){return t.moveToClickEvent("right")}}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[e("path",{attrs:{fill:"none",stroke:"#fff","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",d:"M6.1 23.2L17.9 12 6.1.8"}})])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Card:o(340).default})},363:function(t,e,o){!function(){"use strict";t.exports={polyfill:function(){var t=window,e=document;if(!("scrollBehavior"in e.documentElement.style)||!0===t.__forceSmoothScrollPolyfill__){var o,l=t.HTMLElement||t.Element,r=468,n={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:l.prototype.scroll||f,scrollIntoView:l.prototype.scrollIntoView},c=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,d=(o=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(o)?1:0);t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==h(arguments[0])?y.call(t,e.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):n.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(h(arguments[0])?n.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):y.call(t,e.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},l.prototype.scroll=l.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==h(arguments[0])){var t=arguments[0].left,e=arguments[0].top;y.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===e?this.scrollTop:~~e)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},l.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==h(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},l.prototype.scrollIntoView=function(){if(!0!==h(arguments[0])){var o=function(t){for(;t!==e.body&&!1===_(t);)t=t.parentNode||t.host;return t}(this),l=o.getBoundingClientRect(),r=this.getBoundingClientRect();o!==e.body?(y.call(this,o,o.scrollLeft+r.left-l.left,o.scrollTop+r.top-l.top),"fixed"!==t.getComputedStyle(o).position&&t.scrollBy({left:l.left,top:l.top,behavior:"smooth"})):t.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else n.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function f(t,e){this.scrollLeft=t,this.scrollTop=e}function h(t){if(null===t||"object"!=typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"==typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function v(t,e){return"Y"===e?t.clientHeight+d<t.scrollHeight:"X"===e?t.clientWidth+d<t.scrollWidth:void 0}function m(e,o){var l=t.getComputedStyle(e,null)["overflow"+o];return"auto"===l||"scroll"===l}function _(t){var e=v(t,"Y")&&m(t,"Y"),o=v(t,"X")&&m(t,"X");return e||o}function w(e){var o,l,n,d,f=(c()-e.startTime)/r;d=f=f>1?1:f,o=.5*(1-Math.cos(Math.PI*d)),l=e.startX+(e.x-e.startX)*o,n=e.startY+(e.y-e.startY)*o,e.method.call(e.scrollable,l,n),l===e.x&&n===e.y||t.requestAnimationFrame(w.bind(t,e))}function y(o,l,r){var d,h,v,m,_=c();o===e.body?(d=t,h=t.scrollX||t.pageXOffset,v=t.scrollY||t.pageYOffset,m=n.scroll):(d=o,h=o.scrollLeft,v=o.scrollTop,m=f),w({scrollable:d,method:m,startTime:_,startX:h,startY:v,x:l,y:r})}}}}()}}]);