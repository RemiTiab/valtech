(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(45).concat([function(t,e,r){"use strict";var o={props:{error:{type:Object,default:null}},head:function(){return{title:"".concat(this.title," - Valtech")}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message},title:function(){return 404===this.statusCode?"Page introuvable":"Une erreur s'est produite"}}},n=(r(241),r(2)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("LayoutContent",[r("div",{staticClass:"page"},[r("PageTitle",{attrs:{title:t.title}}),t._v(" "),r("PageContent",[r("p",[t._v("\n        La page que vous cherchez n'existe pas ou est inaccessible. Nous vous\n        prions de bien vouloir nous en excuser.\n      ")]),t._v(" "),r("p",[r("nuxt-link",{attrs:{to:"/"}},[t._v("Retour sur la page d'accueil")])],1)])],1)])}),[],!1,null,"081f7834",null);e.a=component.exports;installComponents(component,{PageTitle:r(120).default,PageContent:r(121).default,LayoutContent:r(94).default})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,r){"use strict";r.r(e);var o=r(130),n=r(87);for(var c in n)["default"].indexOf(c)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(c);r(251);var l=r(2),component=Object(l.a)(n.default,o.a,o.b,!1,null,"0f32a758",null);e.default=component.exports,installComponents(component,{MainLogo:r(86).default,BurgerMenu:r(122).default})},function(t,e,r){"use strict";r.r(e);var o=r(131),n=r(89);for(var c in n)["default"].indexOf(c)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(c);r(257);var l=r(2),component=Object(l.a)(n.default,o.a,o.b,!1,null,"e64edc2e",null);e.default=component.exports,installComponents(component,{MainLogo:r(86).default})},function(t,e,r){"use strict";r.r(e);r(32),r(15),r(31),r(46),r(27),r(47);var o=r(14),n=r(9);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={props:{customclass:{type:String,required:!1,default:""}},computed:Object(n.c)(["menu"]),methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({handleBurger:function(){var t=document.querySelector("html");this.menu.isOpen&&(this.openBurger(!1),t.style.overflow="visible")}},Object(n.b)("menu",["openBurger"]))},d=(r(253),r(2)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("n-link",{class:["logo",t.customclass,{"is-white":t.menu.isOpen}],attrs:{to:"/"}},[r("svg",{attrs:{viewBox:"0 0 340 69.6",fill:"none",xmlns:"http://www.w3.org/2000/svg"},on:{click:t.handleBurger}},[r("title",[t._v("Valtech")]),t._v(" "),r("g",[r("path",{attrs:{d:"M32.25,68.24H18.3L0,17.7H14.85L25.35,55h.3L36.44,17.7H50.69Z"}}),t._v(" "),r("path",{attrs:{d:"M94.94,58.34c0,6,1.35,7.35,3,8v1.95H83.54a22.12,22.12,0,0,1-1.35-6,20.56,20.56,0,0,1-16.35,7.35c-7.65,0-15.45-4.2-15.45-14.7s6.3-15,14.7-16.2l12.15-1.8c2.1-.3,4.65-1.2,4.65-4C81.89,27.3,76.49,27,73,27c-6.6,0-7.8,4.05-8.1,7H52c1.5-15.44,12.3-17.69,22.65-17.69,7.2,0,20.25,2.25,20.25,14.7Zm-13-14.7c-1.35,1-3.6,2-9.15,2.7s-9,2.1-9,7.65a5.85,5.85,0,0,0,5.53,6.15h.62c6,0,12-3.9,12-10Z"}}),t._v(" "),r("path",{attrs:{d:"M116.38,68.24H103V0h13.35Z"}}),t._v(" "),r("path",{attrs:{d:"M141.73,17.7h8.4v9.45h-8.4V54.74c0,2.85.15,4,5.55,4h2.85V68.84H142c-11.55,0-13.65-4.35-13.65-11V27.15h-6.9V17.7h6.9V4.05h13.35Z"}}),t._v(" "),r("path",{attrs:{d:"M202.32,53.39c-3.6,12.3-13.8,16.2-22.5,16.2-14.24,0-25.19-6.75-25.19-27.6,0-6.15,2.1-25.64,24.29-25.64,10.05,0,23.85,4.8,23.85,27.89v2.4H168c.3,3.75,1.2,12.3,11.84,12.3,3.75,0,7.65-1.8,8.7-5.55Zm-13.2-15.45c-.75-8.09-6.15-10.64-10.35-10.64s-9.59,4.05-10.49,10.64Z"}}),t._v(" "),r("path",{attrs:{d:"M253,49.79c-.45,5.25-4.5,19.8-23.09,19.8S206.37,55,206.37,44.39c0-16.34,7.2-28,24.3-28,8.09,0,21.29,3.6,22.49,19.34h-13.5c-.6-3.14-2.54-8.09-8.24-8.09h-.75c-8.4,0-10.5,8.39-10.5,14.69s.15,16.35,10.2,16.35c6.9,0,9.14-6.45,9.14-8.85Z"}}),t._v(" "),r("path",{attrs:{d:"M305.06,68.24H291.71V37.64c0-3.74-.3-10-8.7-10-6,0-10.5,4-10.5,11.69V68.24H259.16V0h13.35V24.3h.15c1.65-4.2,7.5-7.95,14.7-7.95,9.9,0,17.7,5.85,17.7,16.95Z"}}),t._v(" "),r("rect",{staticStyle:{opacity:"1",visibility:"inherit"},attrs:{x:"313.3",y:"58.79",width:"26.7",height:"9.52"}})])])])}),[],!1,null,"1acddaa6",null);e.default=component.exports},function(t,e,r){"use strict";r.r(e);var o=r(88),n=r.n(o);for(var c in o)["default"].indexOf(c)<0&&function(t){r.d(e,t,(function(){return o[t]}))}(c);e.default=n.a},function(t,e){},function(t,e,r){"use strict";r.r(e);var o=r(90),n=r.n(o);for(var c in o)["default"].indexOf(c)<0&&function(t){r.d(e,t,(function(){return o[t]}))}(c);e.default=n.a},function(t,e){},function(t,e,r){"use strict";r.r(e);var o=r(92),n=r.n(o);for(var c in o)["default"].indexOf(c)<0&&function(t){r.d(e,t,(function(){return o[t]}))}(c);e.default=n.a},function(t,e){},,function(t,e,r){"use strict";r.r(e);var o={},n=r(2),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("main",{staticClass:"main-content"},[t._t("default")],2)}),[],!1,null,"17f75b49",null);e.default=component.exports},,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,r){"use strict";r.r(e);var o={props:{title:{type:String,required:!0},tag:{type:String,default:"h1"}}},n=(r(243),r(2)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return"h1"===t.tag?r("h1",[t._v(t._s(t.title))]):"h2"===t.tag?r("h2",[t._v(t._s(t.title))]):"h3"===t.tag?r("h3",[t._v(t._s(t.title))]):"h4"===t.tag?r("h4",[t._v(t._s(t.title))]):"h5"===t.tag?r("h5",[t._v(t._s(t.title))]):"h6"===t.tag?r("h6",[t._v(t._s(t.title))]):t._e()}),[],!1,null,"5d05c139",null);e.default=component.exports},function(t,e,r){"use strict";r.r(e);var o={},n=r(2),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"page-wrapper"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},function(t,e,r){"use strict";r.r(e);r(32),r(15),r(31),r(46),r(27),r(47);var o=r(14),n=r(9);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={data:function(){return{links:{0:{title:"Home",url:"/"},1:{title:"About",url:"/about"}}}},computed:Object(n.c)(["menu"]),methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({handleBurger:function(link){var t=document.querySelector("html");this.menu.isOpen?(this.openBurger(!1),t.style.overflow="visible"):(this.openBurger(!0),t.style.overflow="hidden")}},Object(n.b)("menu",["openBurger"]))},d=(r(255),r(2)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{class:["menu-icon",{active:t.menu.isOpen}],on:{click:t.handleBurger}},[r("span"),t._v(" "),r("span"),t._v(" "),r("span")]),t._v(" "),r("nav",{class:["burger-menu",{active:t.menu.isOpen}]},[r("ul",{staticClass:"burger-menu__list"},t._l(t.links,(function(link){return r("li",{key:link.id,on:{click:function(e){return t.handleBurger(link)}}},[r("n-link",{attrs:{to:link.url,prefetch:""}},[t._v("\n          "+t._s(link.title)+"\n        ")])],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports},function(t,e,r){"use strict";r.r(e);r(268);var o={props:{id:{type:Number,required:!1,default:0},surtitle:{type:String,required:!1,default:""},title:{type:String,required:!1,default:""},subtitle:{type:String,required:!1,default:""},chapo:{type:String,required:!1,default:""},ctaText:{type:String,required:!1,default:""},ctaLink:{type:String,required:!1,default:""},ctaTarget:{type:String,required:!1,default:""},backgroundSrc:{type:String,required:!1,default:""}}},n=(r(271),r(2)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card",attrs:{"data-card":t.id},on:{click:function(t){return t.target.classList.toggle("active")}}},[t.surtitle?r("h2",{staticClass:"card__surtitle"},[t._v(t._s(t.surtitle))]):t._e(),t._v(" "),t.title?r("h3",{staticClass:"card__title"},[r("span",[t._v(t._s(t.title))])]):t._e(),t._v(" "),t.subtitle?r("h4",{staticClass:"card__subtitle"},[t._v(t._s(t.subtitle))]):t._e(),t._v(" "),t.chapo?r("p",{staticClass:"card__chapo"},[t._v(t._s(t.chapo))]):t._e(),t._v(" "),t.ctaLink&&t.ctaText?r("a",{staticClass:"card__cta",attrs:{href:t.ctaLink,target:t.ctaTarget}},[t._v(t._s(t.ctaText))]):t._e(),t._v(" "),t.backgroundSrc?r("img",{staticClass:"card__background",attrs:{src:t.backgroundSrc,alt:""}}):t._e()])}),[],!1,null,"bfa7509e",null);e.default=component.exports},,,,,,function(t,e,r){"use strict";r(292);var o=r(0),n=r(204);o.a.use(n.a)},function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return n}));var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"wrapper"},[r("div",{staticClass:"container"},[r("div",{staticClass:"content"},[r("MainLogo",{attrs:{customclass:"logo--header"}}),t._v(" "),r("BurgerMenu")],1)])])},n=[]},function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return n}));var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"wrapper"},[r("div",{staticClass:"container"},[r("div",{staticClass:"content"},[t._m(0),t._v(" "),r("MainLogo",{attrs:{customclass:"logo--footer"}})],1)])])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"copyright"},[r("a",{attrs:{href:"https://www.remitiab.fr",target:"_blank"}},[t._v("Rémi Tiab - Frontend Developer")])])}]},function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return n}));var o=function(){var t=this.$createElement;return(this._self._c||t)("nav")},n=[]},function(t,e,r){"use strict";r.r(e);var o=r(9),n={computed:Object(o.c)(["countries"])},c=(r(266),r(2)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper wrapper--gallery"},[r("div",{staticClass:"container"},[r("div",{staticClass:"content"},[r("div",{ref:"list",staticClass:"cards"},t._l(t.countries.countries,(function(t){return r("GalleryCard",{key:t.id,attrs:{id:t.id,surtitle:t.surtitle,title:t.title,subtitle:t.subtitle,chapo:t.chapo,"cta-text":t.ctaText,"cta-link":t.ctaLink,"cta-target":t.ctaTarget,"background-src":t.backgroundSrc}})})),1)])])])}),[],!1,null,"c187041a",null);e.default=component.exports;installComponents(component,{GalleryCard:r(123).default})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,r){var content=r(242);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("ceb99de6",content,!0,{sourceMap:!1})},function(t,e,r){var content=r(244);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("506184ca",content,!0,{sourceMap:!1})},,function(t,e,r){var content=r(250);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("5c346d62",content,!0,{sourceMap:!1})},,function(t,e,r){t.exports=r.p+"fonts/Roboto-Regular.457c92b.woff"},function(t,e,r){t.exports=r.p+"fonts/Roboto-Light.d2d978b.woff"},function(t,e,r){t.exports=r.p+"fonts/Roboto-Bold.bd043ec.woff"},function(t,e,r){var content=r(252);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("740b7456",content,!0,{sourceMap:!1})},function(t,e,r){var content=r(254);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("53abf149",content,!0,{sourceMap:!1})},function(t,e,r){var content=r(256);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("0948a381",content,!0,{sourceMap:!1})},function(t,e,r){var content=r(258);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("b85c5b0a",content,!0,{sourceMap:!1})},function(t,e,r){var content=r(260);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("e39ba8aa",content,!0,{sourceMap:!1})},function(t,e,r){var content=r(267);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("2e5339d8",content,!0,{sourceMap:!1})},function(t,e,r){var content=r(272);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("4302fd74",content,!0,{sourceMap:!1})},function(t,e,r){"use strict";r.r(e);var o=r(132),n=r(91);for(var c in n)["default"].indexOf(c)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(c);var l=r(2),component=Object(l.a)(n.default,o.a,o.b,!1,null,"4c405e78",null);e.default=component.exports},,,,,,,,,,,,,,,,,,function(t,e,r){"use strict";var o=r(9),n={computed:Object(o.c)(["routing","windowParams"]),mounted:function(){var t={width:window.innerWidth,height:window.innerHeight};this.$store.dispatch("windowParams/updateParams",t)},methods:{handleResize:function(t){var e=t.width,r=t.height;this.$store.dispatch("windowParams/updateParams",{width:e,height:r})}}},c=(r(249),r(2)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("LayoutHeader"),t._v(" "),r("div",[r("Nuxt")],1),t._v(" "),r("LayoutFooter"),t._v(" "),r("div",{staticClass:"resizer"},[r("resize-observer",{on:{notify:t.handleResize}})],1)],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{LayoutHeader:r(84).default,LayoutFooter:r(85).default})},function(t,e,r){"use strict";var o=r(9),n={computed:Object(o.c)(["routing","windowParams"]),mounted:function(){var t={width:window.innerWidth,height:window.innerHeight};this.$store.dispatch("windowParams/updateParams",t)},methods:{handleResize:function(t){var e=t.width,r=t.height;this.$store.dispatch("windowParams/updateParams",{width:e,height:r})}}},c=(r(259),r(2)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("LayoutHeader"),t._v(" "),r("div",[r("Nuxt")],1),t._v(" "),r("LayoutFooter"),t._v(" "),r("div",{staticClass:"resizer"},[r("resize-observer",{on:{notify:t.handleResize}})],1)],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{LayoutHeader:r(84).default,LayoutFooter:r(85).default})},function(t,e,r){r(209),t.exports=r(210)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,r){"use strict";r(173)},function(t,e,r){var o=r(19)(!1);o.push([t.i,"[data-v-081f7834]:root{--container-width:90vw;--container-padding:0 1.25rem;--container-padding--small:0 0.938rem;--white-color:#fff;--black-color:#000}.error[data-v-081f7834]{display:flex;flex-direction:column}.page[data-v-081f7834]{padding:0 40px}@media (max-width:47.9375em){.page[data-v-081f7834]{padding:0 20px}}",""]),t.exports=o},function(t,e,r){"use strict";r(174)},function(t,e,r){var o=r(19)(!1);o.push([t.i,"[data-v-5d05c139]:root{--container-width:90vw;--container-padding:0 1.25rem;--container-padding--small:0 0.938rem;--white-color:#fff;--black-color:#000}h1[data-v-5d05c139]{font-size:calc(2.7rem + 6.61458vw);line-height:1;margin-bottom:.575em;color:#000;color:var(--black-color)}@media (max-width:47.9375em){h1[data-v-5d05c139]{font-size:2.7rem}}h2[data-v-5d05c139]{font-size:1.875rem;line-height:1.2;letter-spacing:-.01em}",""]),t.exports=o},,,function(t,e,r){var content=r(248);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("b13bd09c",content,!0,{sourceMap:!1})},function(t,e,r){var o=r(19)(!1);o.push([t.i,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}:root{--container-width:90vw;--container-padding:0 1.25rem;--container-padding--small:0 0.938rem;--white-color:#fff;--black-color:#000}html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;box-sizing:border-box;word-spacing:1px;background:var(--background-site-color)}a{text-decoration:none}img,object,svg,video{max-width:100%;height:auto;vertical-align:middle}iframe{max-width:100%}ol,ul{list-style:none}div,h1,h2,h3,h4,h5,h6,li,ol,ul{margin:0;padding:0;font-weight:400}a{color:unset;text-decoration:unset}body{font:normal 400 100%/normal "Roboto",sans-serif;font-feature-settings:"kern" off;font-variant:none;color:var(--text-color)}.visuallyhidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.visuallyhidden.focusable:active,.visuallyhidden.focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto;white-space:inherit}.wrapper>.container{width:90vw;width:var(--container-width);max-width:1320px;margin:0 auto;padding:0 1.25rem;padding:var(--container-padding)}@media (max-width:61.9375em){.wrapper>.container{padding:0 .938rem;padding:var(--container-padding--small)}}.wrapper>.container>.content{max-width:100%}',""]),t.exports=o},function(t,e,r){"use strict";r(176)},function(t,e,r){var o=r(19),n=r(177),c=r(178),l=r(179),d=r(180),f=o(!1),m=n(c),h=n(l),v=n(d);f.push([t.i,':root{--container-width:90vw;--container-padding:0 1.25rem;--container-padding--small:0 0.938rem;--white-color:#fff;--black-color:#000}@font-face{font-family:"Roboto";src:url('+m+') format("woff");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:"Roboto";src:url('+h+') format("woff");font-weight:300;font-style:normal;font-display:swap}@font-face{font-family:"Roboto";src:url('+v+') format("woff");font-weight:700;font-style:normal;font-display:swap}.resizer{z-index:-10000;position:fixed;top:0;left:0;width:100%;height:100%}',""]),t.exports=f},function(t,e,r){"use strict";r(181)},function(t,e,r){var o=r(19)(!1);o.push([t.i,"[data-v-0f32a758]:root{--container-width:90vw;--container-padding:0 1.25rem;--container-padding--small:0 0.938rem;--white-color:#fff;--black-color:#000}header[data-v-0f32a758]{padding-top:1.875rem;padding-bottom:1.875rem}header .content[data-v-0f32a758]{display:flex;justify-content:space-between;align-items:center}",""]),t.exports=o},function(t,e,r){"use strict";r(182)},function(t,e,r){var o=r(19)(!1);o.push([t.i,"[data-v-1acddaa6]:root{--container-width:90vw;--container-padding:0 1.25rem;--container-padding--small:0 0.938rem;--white-color:#fff;--black-color:#000}.logo[data-v-1acddaa6]{display:block}.logo--header[data-v-1acddaa6]{width:130px;z-index:99999999}.logo--header svg[data-v-1acddaa6]{padding:.3rem;fill:#000;fill:var(--black-color);transition:all .2s ease-in-out}.logo--header svg[data-v-1acddaa6]:focus,.logo--header svg[data-v-1acddaa6]:hover{background-color:#000;background-color:var(--black-color);fill:#fff;fill:var(--white-color)}.logo--footer[data-v-1acddaa6]{width:80px}.logo--footer svg[data-v-1acddaa6]{padding:.3rem;fill:#fff;fill:var(--white-color);transition:all .2s ease-in-out}.logo--footer svg[data-v-1acddaa6]:focus,.logo--footer svg[data-v-1acddaa6]:hover{background-color:#fff;background-color:var(--white-color);fill:#000;fill:var(--black-color)}.logo.is-white svg[data-v-1acddaa6]{background-color:#000;background-color:var(--black-color);fill:#fff;fill:var(--white-color)}.logo.is-white svg[data-v-1acddaa6]:hover{fill:#000;fill:var(--black-color);background-color:#fff;background-color:var(--white-color)}",""]),t.exports=o},function(t,e,r){"use strict";r(183)},function(t,e,r){var o=r(19)(!1);o.push([t.i,":root{--container-width:90vw;--container-padding:0 1.25rem;--container-padding--small:0 0.938rem;--white-color:#fff;--black-color:#000}.menu-icon{margin:20px auto;width:20px;height:14px;cursor:pointer;position:relative;z-index:99999999}.menu-icon span{background-color:#000;height:2px;position:absolute;width:100%;left:0;transition:all .3s ease;border-radius:10px}.menu-icon span:first-child{top:0}.menu-icon span:nth-child(2){top:6px}.menu-icon span:last-child{top:12px}.menu-icon.active span:nth-child(2){opacity:0}.menu-icon.active span:first-child,.menu-icon.active span:last-child{top:6px;background-color:#fff;background-color:var(--white-color)}.menu-icon.active span:first-child{transform:rotate(45deg)}.menu-icon.active span:last-child{transform:rotate(-45deg)}.burger-menu{position:absolute;z-index:100000;top:0;left:0;width:100vw;height:100vh;background-color:#000;background-color:var(--black-color);padding:2rem;transform:translate3d(0,-100%,0);transition:all .2s ease-in-out}.burger-menu.active{transform:translateZ(0)}.burger-menu__list{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;text-align:center}.burger-menu__list li{font-size:calc(1.125rem + 2.5vw);line-height:normal;font-weight:400;color:#fff;color:var(--white-color);text-transform:uppercase}@media (max-width:61.9375em){.burger-menu__list li{font-size:calc(1.125rem + 2.29167vw)}}@media (max-width:47.9375em){.burger-menu__list li{font-size:calc(1.125rem + 2.5vw)}}.burger-menu__list li:not(:last-child){margin-bottom:.3em}.burger-menu__list li a{padding:.3rem;background-color:#000;background-color:var(--black-color);color:#fff;color:var(--white-color);transition:all .2s ease-in-out}.burger-menu__list li a:focus,.burger-menu__list li a:hover{background-color:#fff;background-color:var(--white-color);color:#000;color:var(--black-color)}",""]),t.exports=o},function(t,e,r){"use strict";r(184)},function(t,e,r){var o=r(19)(!1);o.push([t.i,"[data-v-e64edc2e]:root{--container-width:90vw;--container-padding:0 1.25rem;--container-padding--small:0 0.938rem;--white-color:#fff;--black-color:#000}footer[data-v-e64edc2e]{background-color:#000;background-color:var(--black-color);padding-top:1.275rem;padding-bottom:1.275rem}footer .content[data-v-e64edc2e]{display:flex;justify-content:space-between;align-items:center}@media (max-width:47.9375em){footer .content[data-v-e64edc2e]{justify-content:center;flex-direction:column}}footer .copyright[data-v-e64edc2e]{font-size:.813rem;font-weight:300;color:#fff;color:var(--white-color);transform:scale(1);transform-origin:center center;transition:all .2s ease-in-out}@media (max-width:47.9375em){footer .copyright[data-v-e64edc2e]{margin-bottom:1rem}}footer .copyright[data-v-e64edc2e]:hover{transform:scale(1.1);font-weight:700}",""]),t.exports=o},function(t,e,r){"use strict";r(185)},function(t,e,r){var o=r(19),n=r(177),c=r(178),l=r(179),d=r(180),f=o(!1),m=n(c),h=n(l),v=n(d);f.push([t.i,':root{--container-width:90vw;--container-padding:0 1.25rem;--container-padding--small:0 0.938rem;--white-color:#fff;--black-color:#000}@font-face{font-family:"Roboto";src:url('+m+') format("woff");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:"Roboto";src:url('+h+') format("woff");font-weight:300;font-style:normal;font-display:swap}@font-face{font-family:"Roboto";src:url('+v+') format("woff");font-weight:700;font-style:normal;font-display:swap}.resizer{z-index:-10000;position:fixed;top:0;left:0;width:100%;height:100%}',""]),t.exports=f},function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return o})),r.d(e,"mutations",(function(){return n})),r.d(e,"actions",(function(){return c})),r.d(e,"getters",(function(){return l}));var o=function(){return{country:{},countries:[{id:0,surtitle:"Front-end",title:"valtech_",subtitle:"Lorem ipsun dolor sit a met lorem dolor sit a met factius lorem isun dolor sit a met ipsun lorem amet",chapo:"Factius lorem isun dolor sit a met ipsun lorem amet, lorem ipsun dolor sit a met lorem dolor sit a met dolce mateus.",ctaText:"Explore More",ctaLink:"#",ctaTarget:"_blank",backgroundSrc:"https://source.unsplash.com/random/700x400?sig=0"},{id:1,surtitle:"Italy",title:"Venice",subtitle:"",chapo:"Lorem ipsun dolor sit a met lorem dolor sit a met factius lorem isun dolor sit a met ipsun lorem amet",ctaText:"Explore More",ctaLink:"#",ctaTarget:"_blank",backgroundSrc:"https://source.unsplash.com/random/500x500?sig=1"},{id:2,surtitle:"Germany",title:"Berlin",subtitle:"",chapo:"Lorem ipsun dolor sit a met lorem dolor sit a met factius lorem isun dolor sit a met ipsun lorem amet",ctaText:"Explore More",ctaLink:"#",ctaTarget:"_blank",backgroundSrc:"https://source.unsplash.com/random/500x500?sig=2"},{id:3,surtitle:"Spain",title:"Barcelona",subtitle:"",chapo:"Lorem ipsun dolor sit a met lorem dolor sit a met factius lorem isun dolor sit a met ipsun lorem amet",ctaText:"Explore More",ctaLink:"#",ctaTarget:"_blank",backgroundSrc:"https://source.unsplash.com/random/500x500?sig=3"},{id:4,surtitle:"France",title:"Paris",subtitle:"",chapo:"Lorem ipsun dolor sit a met lorem dolor sit a met factius lorem isun dolor sit a met ipsun lorem amet",ctaText:"Explore More",ctaLink:"#",ctaTarget:"_blank",backgroundSrc:"https://source.unsplash.com/random/500x500?sig=4"},{id:5,surtitle:"Netherlands",title:"Amsterdam",subtitle:"",chapo:"Lorem ipsun dolor sit a met lorem dolor sit a met factius lorem isun dolor sit a met ipsun lorem amet",ctaText:"Explore More",ctaLink:"#",ctaTarget:"_blank",backgroundSrc:"https://source.unsplash.com/random/500x500?sig=5"},{id:6,surtitle:"United Kingdom",title:"London",subtitle:"",chapo:"Lorem ipsun dolor sit a met lorem dolor sit a met factius lorem isun dolor sit a met ipsun lorem amet",ctaText:"Explore More",ctaLink:"#",ctaTarget:"_blank",backgroundSrc:"https://source.unsplash.com/random/500x500?sig=6"}]}},n={},c={},l={}},function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return o})),r.d(e,"mutations",(function(){return n})),r.d(e,"actions",(function(){return c})),r.d(e,"getters",(function(){return l}));var o=function(){return{isOpen:!1}},n={SET_BURGER_STATUS:function(t,e){t.isOpen=e}},c={openBurger:function(t,e){(0,t.commit)("SET_BURGER_STATUS",e)}},l={}},function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return o})),r.d(e,"mutations",(function(){return n})),r.d(e,"actions",(function(){return c})),r.d(e,"getters",(function(){return l}));r(53);var o=function(){return{routerLinks:[{id:0,title:"About",to:"/about"}],isFrontPage:!0}},n={SET_SHUFFLE_ROUTE_LINKS:function(t,e){t.routerLinks=e},SET_IS_FRONT_PAGE:function(t,e){t.isFrontPage=e}},c={routeUpdate:function(t,e){var r=t.commit,o=(t.state,t.getters);"/"===e?r("SET_IS_FRONT_PAGE",!0):(r("SET_IS_FRONT_PAGE",!1),["/about"].includes(e)&&r("SET_SHUFFLE_ROUTE_LINKS",o.shuffle(e)))}},l={shuffle:function(t){return function(t){var e=[{id:0,title:"About",to:"/about"}];return e.sort((function(e){return e.to===t?-1:1})),e}}}},function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return o})),r.d(e,"mutations",(function(){return n})),r.d(e,"actions",(function(){return c})),r.d(e,"getters",(function(){return l}));r(15),r(30);var o=function(){return{url:"",title:"",description:""}},n={SET_DATA:function(t,data){t.url=data.url,t.title=data.title,t.description=data.description}},c={updateData:function(t,data){(0,t.commit)("SET_DATA",data)}},l={}},function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return o})),r.d(e,"mutations",(function(){return n})),r.d(e,"actions",(function(){return c})),r.d(e,"getters",(function(){return l}));var o=function(){return{width:null,height:null}},n={SET_PARAMS:function(t,e){t.width=e.width,t.height=e.height}},c={updateParams:function(t,e){(0,t.commit)("SET_PARAMS",e)}},l={}},function(t,e,r){"use strict";r(186)},function(t,e,r){var o=r(19)(!1);o.push([t.i,"[data-v-c187041a]:root{--container-width:90vw;--container-padding:0 1.25rem;--container-padding--small:0 0.938rem;--white-color:#fff;--black-color:#000}.wrapper--gallery[data-v-c187041a]{padding:1.875rem 0}@media (max-width:61.9375em){.wrapper--gallery[data-v-c187041a]{padding:1.375rem 0;padding:1rem 0}}.wrapper--gallery .cards[data-v-c187041a]{display:flex;justify-content:space-between;flex-wrap:wrap;grid-row-gap:1.875rem;row-gap:1.875rem}@media (max-width:61.9375em){.wrapper--gallery .cards[data-v-c187041a]{grid-row-gap:1rem;row-gap:1rem}}",""]),t.exports=o},,,,function(t,e,r){"use strict";r(187)},function(t,e,r){var o=r(19)(!1);o.push([t.i,'[data-v-bfa7509e]:root{--container-width:90vw;--container-padding:0 1.25rem;--container-padding--small:0 0.938rem;--white-color:#fff;--black-color:#000}.card[data-v-bfa7509e]{position:relative;width:calc(25% - 1.875rem);height:40vh;display:flex;flex-direction:column;justify-content:center;align-content:center;text-align:center;color:#fff;color:var(--white-color);background-color:rgba(0,0,0,.2);border-radius:5px;overflow:hidden}@media (max-width:61.9375em){.card[data-v-bfa7509e]{width:calc(50% - .5rem)}}@media (max-width:47.9375em){.card[data-v-bfa7509e]{width:100%;height:50vh}}.card[data-v-bfa7509e]:first-of-type{width:100%;height:80vh}@media (max-width:47.9375em){.card[data-v-bfa7509e]:first-of-type{height:70vh}}.card:first-of-type .card__surtitle[data-v-bfa7509e]{font-size:calc(.75rem + .52083vw)}@media (max-width:61.9375em){.card:first-of-type .card__surtitle[data-v-bfa7509e]{font-size:calc(.75rem + .41667vw)}}@media (max-width:47.9375em){.card:first-of-type .card__surtitle[data-v-bfa7509e]{font-size:.975rem}}.card:first-of-type .card__title[data-v-bfa7509e]{font-size:calc(1.125rem + 2.8125vw);text-transform:none}@media (max-width:61.9375em){.card:first-of-type .card__title[data-v-bfa7509e]{font-size:calc(1.125rem + 2.5vw)}}@media (max-width:47.9375em){.card:first-of-type .card__title[data-v-bfa7509e]{font-size:calc(1.125rem + 2.5vw)}}.card[data-v-bfa7509e]:not(:first-of-type):nth-child(5n+2){width:calc(50% - 1.275rem)}@media (max-width:61.9375em){.card[data-v-bfa7509e]:not(:first-of-type):nth-child(5n+2){width:calc(50% - .5rem)}}@media (max-width:47.9375em){.card[data-v-bfa7509e]:not(:first-of-type):nth-child(5n+2){width:100%}}.card__surtitle[data-v-bfa7509e]{font-size:calc(.75rem + .41667vw);line-height:normal;font-weight:300;text-transform:uppercase;letter-spacing:.1em;pointer-events:none}@media (max-width:61.9375em){.card__surtitle[data-v-bfa7509e]{font-size:calc(.75rem + .3125vw)}}@media (max-width:47.9375em){.card__surtitle[data-v-bfa7509e]{font-size:.975rem}}.card__title[data-v-bfa7509e]{font-size:calc(1.125rem + 1.14583vw);line-height:normal;font-weight:700;text-transform:uppercase;margin-top:.35em;letter-spacing:.01em;pointer-events:none}@media (max-width:61.9375em){.card__title[data-v-bfa7509e]{font-size:calc(1.125rem + .83333vw)}}@media (max-width:47.9375em){.card__title[data-v-bfa7509e]{font-size:calc(1.125rem + .83333vw)}}.card__title span[data-v-bfa7509e]{background-color:transparent;color:#fff;color:var(--white-color);padding:.3rem;transition:all .2s ease-in-out}.card__subtitle[data-v-bfa7509e]{max-width:40%;line-height:1.6;margin:.9em auto 0;pointer-events:none}@media (max-width:61.9375em){.card__subtitle[data-v-bfa7509e]{max-width:70%}}@media (max-width:47.9375em){.card__subtitle[data-v-bfa7509e]{max-width:95%;line-height:normal}}.card__chapo[data-v-bfa7509e]{opacity:0;font-size:0;line-height:normal;pointer-events:none;transition:all .2s ease-in-out;max-width:90%;line-height:1.2;text-align:center;margin-left:auto;margin-right:auto}@media (max-width:47.9375em){.card__chapo[data-v-bfa7509e]{max-width:95%;margin-top:1.875rem}}.card__cta[data-v-bfa7509e]{font-size:1rem;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:1rem auto 0;padding:.725rem 1.4rem;font-weight:700;border:2px solid #fff;border:2px solid var(--white-color);border-radius:5px;opacity:0;transform:translate3d(0,8vh,0) scale(.5);transform-origin:center center;line-height:normal}.card__background[data-v-bfa7509e],.card__cta[data-v-bfa7509e]{transition:all .2s ease-in-out}.card__background[data-v-bfa7509e]{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;font-family:"object-fit:cover";-o-object-fit:cover;object-fit:cover;z-index:-1;border-radius:10px;transform:scale(1);filter:blur(0);pointer-events:none}.card[data-v-bfa7509e]:focus,.card[data-v-bfa7509e]:hover{cursor:pointer}.card:focus .card__title span[data-v-bfa7509e],.card:hover .card__title span[data-v-bfa7509e]{background-color:#fff;background-color:var(--white-color);color:#000;color:var(--black-color)}.card:focus .card__background[data-v-bfa7509e],.card:hover .card__background[data-v-bfa7509e]{filter:blur(2px);transform:scale(1.2)}.card.active .card__title span[data-v-bfa7509e]{background-color:#000;background-color:var(--black-color);color:#fff;color:var(--white-color)}.card.active .card__chapo[data-v-bfa7509e]{opacity:1;font-size:1rem}.card.active .card__cta[data-v-bfa7509e]{opacity:1;transform:translateZ(0) scale(1)}.card.active .card__cta[data-v-bfa7509e]:hover{transform:translateZ(0) scale(.9)}.card.active .card__background[data-v-bfa7509e]{transform:scale(1);filter:blur(0)}',""]),t.exports=o}]),[[208,4,1,5]]]);