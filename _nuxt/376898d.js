(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{287:function(l,r,_){l.exports={}},316:function(l,r,_){"use strict";var d=_(287),c=_.n(d)},449:function(l,r,_){"use strict";_.r(r);var d=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("h2",{ref:"title",staticClass:"title-h2 serif"},[t("span",{staticClass:"sr-only"},[e._v(e._s(e.defaultSlotText))]),e._v(" "),t("div",{ref:"titleContent",staticClass:"title-h2__content",attrs:{"aria-hidden":"true"}},[e._t("default")],2)])},c=[],g=_(21),y=_(19),h=_(20),b=_(10),P=_(29),x=_(18),T=_(30),u=_(11),E=_(207);function i(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);o&&(s=s.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,s)}return t}function p(e){for(var o=1;o<arguments.length;o++){var t=arguments[o]!=null?arguments[o]:{};o%2?i(Object(t),!0).forEach(function(s){Object(u.a)(e,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))})}return e}var v={props:{rangeOfMovement:{type:Number,required:!1,default:20}},computed:{defaultedYOffset:function(){return p({start:0,end:0},this.yOffset)},defaultSlotText:function(){return this.$slots.default[0].text}},mounted:function(){var o=this.$prefersReducedMotion(),t=this.$refs,s=t.title,n=t.titleContent,a=this.$gsap;o||a.fromTo(s,{yPercent:this.rangeOfMovement*-1},{yPercent:this.rangeOfMovement,scrollTrigger:{scrub:!0,trigger:s}});var f={trigger:s,start:"top bottom-=20%",once:!0};o?a.fromTo(n,{filter:"blur(10px)",opacity:0},{filter:"blur(0px)",opacity:1,scrollTrigger:f}):a.fromTo(n,{yPercent:-110},{yPercent:0,duration:.75,ease:"power2.out(1.5)",scrollTrigger:f})}},m=v,M=_(316),j=_(36),O=Object(j.a)(m,d,c,!1,null,null,null),w=r.default=O.exports}}]);
