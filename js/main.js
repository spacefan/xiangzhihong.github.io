!function(e,t){"function"==typeof define&&define.amd?define(function(){return t(e)}):"object"==typeof exports?module.exports=t:e.echo=t(e)}(this,function(e){"use strict";var t,n,o,c,r,a={},l=function(){},i=function(e){return null===e.offsetParent},u=function(e,t){if(i(e))return!1;var n=e.getBoundingClientRect();return n.right>=t.l&&n.bottom>=t.t&&n.left<=t.r&&n.top<=t.b},d=function(){(c||!n)&&(clearTimeout(n),n=setTimeout(function(){a.render(),n=null},o))};return a.init=function(n){n=n||{};var i=n.offset||0,u=n.offsetVertical||i,s=n.offsetHorizontal||i,f=function(e,t){return parseInt(e||t,10)};t={t:f(n.offsetTop,u),b:f(n.offsetBottom,u),l:f(n.offsetLeft,s),r:f(n.offsetRight,s)},o=f(n.throttle,250),c=n.debounce!==!1,r=!!n.unload,l=n.callback||l,a.render(),document.addEventListener?(e.addEventListener("scroll",d,!1),e.addEventListener("load",d,!1)):(e.attachEvent("onscroll",d),e.attachEvent("onload",d))},a.render=function(){for(var n,o,c=document.querySelectorAll("img[data-echo], [data-echo-background]"),i=c.length,d={l:0-t.l,t:0-t.t,b:(e.innerHeight||document.documentElement.clientHeight)+t.b,r:(e.innerWidth||document.documentElement.clientWidth)+t.r},s=0;i>s;s++)o=c[s],u(o,d)?(r&&o.setAttribute("data-echo-placeholder",o.src),null!==o.getAttribute("data-echo-background")?o.style.backgroundImage="url("+o.getAttribute("data-echo-background")+")":o.src=o.getAttribute("data-echo"),r||(o.removeAttribute("data-echo"),o.removeAttribute("data-echo-background")),l(o,"load")):r&&(n=o.getAttribute("data-echo-placeholder"))&&(null!==o.getAttribute("data-echo-background")?o.style.backgroundImage="url("+n+")":o.src=n,o.removeAttribute("data-echo-placeholder"),l(o,"unload"));i||a.detach()},a.detach=function(){document.removeEventListener?e.removeEventListener("scroll",d):e.detachEvent("onscroll",d),clearTimeout(n)},a});var JELON=function(){return{name:"JELON",version:"0.0.2",init:function(){this.toggleMenu(),this.backToTop(),echo.init({offset:50,throttle:250,unload:!1,callback:function(e,t){console.log(e,"has been",t+"ed")}})},$:function(e){return/^(\[object HTML)[a-zA-Z]*(Element\])$/.test(Object.prototype.toString.call(e))?e:document.getElementById(e)},toggleMenu:function(){var e=this,t=e.$(e.name+"__menu");e.$(e.name+"__btnDropNav").onclick=function(){-1===t.className.indexOf("hidden")?t.className+=" hidden":t.className=t.className.replace(/\s*hidden\s*/,"")}},backToTop:function(){var e=this;"undefined"!=typeof e.$(e.name+"__backToTop")&&(window.onscroll=window.onresize=function(){document.documentElement.scrollTop+document.body.scrollTop>0?e.$(e.name+"__backToTop").style.display="block":e.$(e.name+"__backToTop").style.display="none"},e.$(e.name+"__backToTop").onclick=function(){function e(){document.documentElement.scrollTop+document.body.scrollTop<1?clearInterval(t):(document.documentElement.scrollTop/=1.1,document.body.scrollTop/=1.1)}var t=setInterval(e,10)})}}}();JELON.init();