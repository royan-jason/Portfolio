(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{270:function(r,p){function t(_,c,a){return c in _?Object.defineProperty(_,c,{value:a,enumerable:!0,configurable:!0,writable:!0}):_[c]=a,_}r.exports=t,r.exports.__esModule=!0,r.exports.default=r.exports},271:function(r,p,t){var _=t(273);function c(a,d){if(a==null)return{};var f=_(a,d),o,l;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);for(l=0;l<n.length;l++)o=n[l],!(d.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,o)||(f[o]=a[o]))}return f}r.exports=c,r.exports.__esModule=!0,r.exports.default=r.exports},273:function(r,p){function t(_,c){if(_==null)return{};var a={},d=Object.keys(_),f,o;for(o=0;o<d.length;o++)f=d[o],!(c.indexOf(f)>=0)&&(a[f]=_[f]);return a}r.exports=t,r.exports.__esModule=!0,r.exports.default=r.exports},286:function(r,p,t){r.exports={}},314:function(r,p,t){t(21),t(19),t(20),t(10),t(29),t(18),t(30);var _=t(270),c=t(271),a=["class","staticClass","style","staticStyle","attrs"];t(42);function d(o,l){var n=Object.keys(o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(o);l&&(i=i.filter(function(m){return Object.getOwnPropertyDescriptor(o,m).enumerable})),n.push.apply(n,i)}return n}function f(o){for(var l=1;l<arguments.length;l++){var n=arguments[l]!=null?arguments[l]:{};l%2?d(Object(n),!0).forEach(function(i){_(o,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach(function(i){Object.defineProperty(o,i,Object.getOwnPropertyDescriptor(n,i))})}return o}r.exports={functional:!0,render:function(l,n){var i=n._c,m=n._v,e=n.data,u=n.children,s=u===void 0?[]:u,v=e.class,h=e.staticClass,g=e.style,b=e.staticStyle,j=e.attrs,O=j===void 0?{}:j,y=c(e,a);return i("svg",f({class:[v,h],style:[g,b],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",viewBox:"0 0 24 24",fill:"currentColor"},O)},y),s.concat([i("path",{attrs:{xmlns:"http://www.w3.org/2000/svg",d:"M5,9l1.41,1.41L11,5.83V22H13V5.83l4.59,4.59L19,9l-7-7L5,9z"}})]))}}},315:function(r,p,t){"use strict";var _=t(286),c=t.n(_)},448:function(r,p,t){"use strict";t.r(p);var _=function(){var e=this,u=e.$createElement,s=e._self._c||u;return s("footer",{ref:"footer",staticClass:"footer"},[s("div",{ref:"footerWrapper",staticClass:"footer__wrapper",attrs:{"data-scroll-sticky":""}},[s("div",{ref:"footerContent",staticClass:"footer__content"},[s("p",{ref:"footerContentTitle",staticClass:"footer__content__title"},[e._v(`
                Jason `),s("br"),e._v(" "),s("span",{staticClass:"serif"},[e._v("Royan")])]),e._v(" "),s("ul",{staticClass:"footer__content__social"},e._l(e.socialLinks,function(v,h){return s("li",{key:h,staticClass:"footer__content__social__link"},[s("V-Footer-Social-Link",{directives:[{name:"hoverable",rawName:"v-hoverable"}],ref:"footerContentSocialLinks",refInFor:!0,attrs:{target:"_blank",href:v.href,"aria-label":"link to "+v.label}},[e._v(`
                        `+e._s(v.label)+`
                    `)])],1)}),0),e._v(" "),s("p",{staticClass:"footer__content__copyright"},[e._v(`
                \xA9`+e._s(e.getCurrentYear())+` \u{1F3CE}
            `)]),e._v(" "),s("p",{staticClass:"footer__content__note"},[e._v("Carpe Diem")])]),e._v(" "),s("div",{staticClass:"footer__arrow__wrapper",attrs:{role:"button","aria-label":"scroll to top",tabindex:"0"},on:{click:function(v){return e.$scrollTo(0)}}},[s("ArrowUpSVG",{staticClass:"footer__arrow",attrs:{"aria-label":"up arrow"}})],1)])])},c=[],a=t(314),d=t.n(a),f={components:{ArrowUpSVG:d.a},data:function(){return{socialLinks:[{label:"linkedln",href:"https://www.linkedin.com/in/jason-royan-111180237"},{label:"resum\xC9",href:"~images/JasonRoyanResume.pdf download"},{label:"github",href:"https://github.com/royan-jason"},{label:"email",href:"mailto:jasonroyan@gmail.com"}]}},mounted:function(){var u=this.$prefersReducedMotion(),s=this.$refs,v=s.footer,h=s.footerWrapper,g=s.footerContentTitle,b=this.$gsap,j=new ResizeObserver(this.setFooterWrapperHeightVar);j.observe(h),this.setFooterWrapperHeightVar(),u||b.fromTo(g,{"--x-offset":"0%"},{"--x-offset":"100%",ease:"none",scrollTrigger:{trigger:v,start:"bottom-=".concat(g.offsetHeight," bottom"),end:"bottom bottom",scrub:!0}})},methods:{setFooterWrapperHeightVar:function(){var u=this;this.$gsap.set(this.$refs.footer,{"--wrapper-height":"".concat(this.$refs.footerWrapper.offsetHeight,"px"),onEnd:function(){return u.$locomotiveScroll.update()}})},getCurrentYear:function(){return new Date().getFullYear()}}},o=f,l=t(315),n=t(36),i=Object(n.a)(o,_,c,!1,null,null,null),m=p.default=i.exports}}]);
