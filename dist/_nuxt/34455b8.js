(window.webpackJsonp=window.webpackJsonp||[]).push([[34,3,9,19],{340:function(t,e,n){"use strict";n.r(e);n(30),n(67);var r=n(164),o=n(342),l={mixins:[o.e,o.f],props:{item:{type:Object,required:!0}},computed:{poster:function(){return this.item.poster_path?"".concat(r.a,"/w370_and_h556_bestv2").concat(this.item.poster_path):!!this.item.profile_path&&"".concat(r.a,"/w370_and_h556_bestv2").concat(this.item.profile_path)},media:function(){return this.item.media_type?this.item.media_type:this.item.name?"tv":"movie"}}},c=n(16),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card"},[e("nuxt-link",{staticClass:"card__link",attrs:{to:{name:"".concat(t.media,"-id"),params:{id:t.item.id}}}},[e("div",{staticClass:"card__img"},[t.poster?e("img",{directives:[{name:"lazyload",rawName:"v-lazyload",value:t.poster,expression:"poster"}],staticClass:"lazyload",attrs:{alt:t.name}}):e("span",[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 24 24","fill-rule":"evenodd","clip-rule":"evenodd",fill:"#999"}},[e("path",{attrs:{d:"M24 22h-24v-20h24v20zm-1-19h-22v18h22v-18zm-1 16h-19l4-7.492 3 3.048 5.013-7.556 6.987 12zm-11.848-2.865l-2.91-2.956-2.574 4.821h15.593l-5.303-9.108-4.806 7.243zm-4.652-11.135c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zm0 1c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z"}})])])]),t._v(" "),e("h2",{staticClass:"card__name"},[t._v("\n      "+t._s(t.name)+"\n    ")]),t._v(" "),"person"!==t.media&&(t.stars||t.item.vote_average)?e("div",{staticClass:"card__rating"},[t.stars?e("div",{staticClass:"card__stars"},[e("div",{style:{width:"".concat(t.stars,"%")}})]):t._e(),t._v(" "),t.item.vote_average?e("div",{staticClass:"card__vote"},[t._v("\n        "+t._s(t._f("rating")(t.item.vote_average))+"\n      ")]):t._e()]):t._e()])],1)}),[],!1,null,null,null);e.default=component.exports},341:function(t,e,n){var content=n(356);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("3ddd186e",content,!0,{sourceMap:!1})},342:function(t,e,n){"use strict";n.d(e,"e",(function(){return o})),n.d(e,"f",(function(){return l})),n.d(e,"i",(function(){return c})),n.d(e,"h",(function(){return d})),n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return f})),n.d(e,"g",(function(){return h})),n.d(e,"d",(function(){return v})),n.d(e,"c",(function(){return _}));n(67),n(31),n(123),n(122),n(58),n(30),n(10);var r=n(164),o={computed:{name:function(){return this.item.title?this.item.title:this.item.name}}},l={computed:{stars:function(){if(this.item.vote_average)return 10*this.item.vote_average}}},c={computed:{yearStart:function(){var t=this.item.release_date?this.item.release_date:this.item.first_air_date;if(t)return t.split("-")[0]}}},d={computed:{yearEnd:function(){var t=this.item.last_air_date;if(t)return t.split("-")[0]}}},m={computed:{backdrop:function(){if(this.item.backdrop_path)return"".concat(r.a,"/original").concat(this.item.backdrop_path)}}},f={computed:{cert:function(){if(this.item.release_dates){var t=this.item.release_dates.results.find((function(t){return"GB"===t.iso_3166_1||"US"===t.iso_3166_1}));if(!t)return null;var e=t.release_dates.find((function(t){return""!==t.certification}));if(e)return e.certification}else if(this.item.content_ratings){var n=this.item.content_ratings.results.find((function(t){return"GB"===t.iso_3166_1||"US"===t.iso_3166_1}));return n?n.rating:null}}}},h={computed:{trailer:function(){var t=this.item.videos.results;return t.length&&(t=t.find((function(video){return"Trailer"===video.type})))?[{name:t.name,src:"https://www.youtube.com/embed/".concat(t.key,"?rel=0&showinfo=0&autoplay=1")}]:null}}},v={computed:{directors:function(){var t=this.item.credits.crew;if(t)return t.filter((function(t){return"Director"===t.job})).map((function(t){return'<a href="/person/'.concat(t.id,'">').concat(t.name,"</a>")})).join(", ")}}},_={computed:{creators:function(){var t=this.item.created_by;if(t)return t.map((function(t){return'<a href="/person/'.concat(t.id,'">').concat(t.name,"</a>")})).join(", ")}}}},344:function(t,e,n){var content=n(354);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("14cfacb2",content,!0,{sourceMap:!1})},345:function(t,e,n){"use strict";n.r(e);var r={props:{title:{type:String,required:!0}}},o=(n(353),n(355)),l=n(16);var component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("nav",{class:t.$style.nav},[e("button",{class:t.$style.button,attrs:{type:"button","aria-label":"Go Back"},on:{click:function(e){return t.$router.go(-1)}}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[e("path",{attrs:{fill:"none",stroke:"#fff","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",d:"M16.5 20.5l-9-8.5 9-8.5"}})])]),t._v(" "),e("p",{class:t.$style.text},[t._v("\n    "+t._s(t.title)+"\n  ")])])}),[],!1,(function(t){this.$style=o.default.locals||o.default}),null,null);e.default=component.exports;installComponents(component,{Nav:n(60).default})},353:function(t,e,n){"use strict";n(344)},354:function(t,e,n){var r=n(56)((function(i){return i[1]}));r.push([t.i,"@media(max-width:1199px){.topnav-active{padding-top:4.5rem}}",""]),r.locals={},t.exports=r},355:function(t,e,n){"use strict";var r=n(341),o=n.n(r);n.d(e,"default",(function(){return o.a}))},356:function(t,e,n){var r=n(56)((function(i){return i[1]}));r.push([t.i,".nav_YMl7j{align-items:center;background-color:#000;bottom:0;display:flex;height:4.5rem;justify-content:center;left:0;padding:0 5.5rem;position:fixed;right:0;z-index:5}@media(min-width:1200px){.nav_YMl7j{display:none}}.text_lE0Ml{font-size:1.4rem;margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.button_Txmg3{background:none;height:100%;left:0;margin:0;outline:0;padding:0;position:absolute;top:0;transition:all .2s;width:4.5rem}.button_Txmg3:focus,.button_Txmg3:hover{opacity:.8}",""]),r.locals={nav:"nav_YMl7j",text:"text_lE0Ml",button:"button_Txmg3"},t.exports=r},358:function(t,e,n){"use strict";n.r(e);n(237),n(236);var r=n(39),o={components:{Card:n(340).default},props:{title:{type:String,required:!1,default:""},viewAllUrl:{type:Object,required:!1,default:function(){return null}},items:{type:Object,required:!0},show:{type:Number,required:!1,default:null},loading:{type:Boolean,required:!1,default:!1}},created:function(){this.show&&(this.items.results=this.items.results.splice(0,this.show),this.items.total_pages=1,this.items.total_results=this.show)},mounted:function(){window.addEventListener("scroll",this.getScrollPosition)},beforeDestroy:function(){window.removeEventListener("scroll",this.getScrollPosition)},methods:{getScrollPosition:Object(r.a)((function(){this.items.page<this.items.total_pages?window.innerHeight+window.pageYOffset>=document.body.offsetHeight-600&&!this.loading&&this.loadMore():window.removeEventListener("scroll",this.getScrollPosition)}),50),loadMore:function(){this.$emit("loadMore")}}},l=n(16),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"listing"},[t.title||t.viewAllUrl?e("div",{staticClass:"listing__head"},[t.title?e("h2",{staticClass:"listing__title"},[t._v("\n      "+t._s(t.title)+"\n    ")]):t._e(),t._v(" "),t.viewAllUrl?e("nuxt-link",{staticClass:"listing__explore",attrs:{to:t.viewAllUrl}},[e("strong",[t._v("Explore All")])]):t._e()],1):t._e(),t._v(" "),e("div",{staticClass:"listing__items"},t._l(t.items.results,(function(t){return e("Card",{key:"card-".concat(t.id),attrs:{item:t}})})),1),t._v(" "),t.items.page<t.items.total_pages?e("div",{staticClass:"listing__nav"},[t.loading?e("div",[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44",viewBox:"0 0 44 44",stroke:"#2196f3"}},[e("g",{attrs:{fill:"none","fill-rule":"evenodd","stroke-width":"2"}},[e("circle",{attrs:{cx:"22",cy:"22",r:"1"}},[e("animate",{attrs:{attributeName:"r",begin:"0s",dur:"1.8s",values:"1; 20",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.165, 0.84, 0.44, 1",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"stroke-opacity",begin:"0s",dur:"1.8s",values:"1; 0",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.3, 0.61, 0.355, 1",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"22",cy:"22",r:"1"}},[e("animate",{attrs:{attributeName:"r",begin:"-0.9s",dur:"1.8s",values:"1; 20",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.165, 0.84, 0.44, 1",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"stroke-opacity",begin:"-0.9s",dur:"1.8s",values:"1; 0",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.3, 0.61, 0.355, 1",repeatCount:"indefinite"}})])])])]):t._e()]):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Card:n(340).default})},439:function(t,e,n){"use strict";n.r(e);var r=n(11),o=(n(59),n(67),n(30),n(164)),l=n(345),c=n(358),d={components:{TopNav:l.default,Listing:c.default},data:function(){return{loading:!1}},head:function(){return{title:this.metaTitle,meta:[{hid:"og:title",property:"og:title",content:this.metaTitle},{hid:"og:url",property:"og:url",content:"".concat("http://localhost:2804").concat(this.$route.path)}],bodyAttrs:{class:"topnav-active"}}},computed:{metaTitle:function(){return this.title},title:function(){return Object(o.d)("tv",this.$route.params.name).title}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.params,r=t.error,e.prev=1,"trending"!==n.name){e.next=8;break}return e.next=5,Object(o.j)("tv");case 5:e.t0=e.sent,e.next=11;break;case 8:return e.next=10,Object(o.n)(n.name);case 10:e.t0=e.sent;case 11:return l=e.t0,e.abrupt("return",{items:l});case 15:e.prev=15,e.t1=e.catch(1),r({message:"Page not found"});case 18:case"end":return e.stop()}}),e,null,[[1,15]])})))()},methods:{loadMore:function(){var t=this;this.loading=!0,"trending"===this.$route.params.name?Object(o.j)("tv",this.items.page+1).then((function(e){t.items.results=t.items.results.concat(e.results),t.items.page=e.page,t.loading=!1})).catch((function(){t.loading=!1})):Object(o.n)(this.$route.params.name,this.items.page+1).then((function(e){t.items.results=t.items.results.concat(e.results),t.items.page=e.page,t.loading=!1})).catch((function(){t.loading=!1}))}}},m=n(16),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"main"},[e("TopNav",{attrs:{title:t.metaTitle}}),t._v(" "),t.items&&t.items.results.length?e("Listing",{attrs:{title:t.title,items:t.items,loading:t.loading},on:{loadMore:t.loadMore}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TopNav:n(345).default,Listing:n(358).default})}}]);