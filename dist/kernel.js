/*!
* reveal.js 4.6.0
* https://revealjs.com
* MIT licensed
*
* Copyright (C) 2011-2023 Hakim El Hattab, https://hakim.se
*/
const e=(e,t)=>{for(let i in t)e[i]=t[i];return e},t=(e,t)=>Array.from(e.querySelectorAll(t)),i=(e,t,i)=>{i?e.classList.add(t):e.classList.remove(t);},s=e=>{if("string"==typeof e){if("null"===e)return null;if("true"===e)return !0;if("false"===e)return !1;if(e.match(/^-?[\d\.]+$/))return parseFloat(e)}return e},n=(e,t)=>{e.style.transform=t;},a=(e,t)=>{let i=e.matches||e.matchesSelector||e.msMatchesSelector;return !(!i||!i.call(e,t))},o=(e,t)=>{if("function"==typeof e.closest)return e.closest(t);for(;e;){if(a(e,t))return e;e=e.parentNode;}return null},r=(e,t,i,s="")=>{let n=e.querySelectorAll("."+i);for(let t=0;t<n.length;t++){let i=n[t];if(i.parentNode===e)return i}let a=document.createElement(t);return a.className=i,a.innerHTML=s,e.appendChild(a),a},l=e=>{let t=document.createElement("style");return t.type="text/css",e&&e.length>0&&(t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))),document.head.appendChild(t),t},d=()=>{let e={};location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi,(t=>{e[t.split("=").shift()]=t.split("=").pop();}));for(let t in e){let i=e[t];e[t]=s(unescape(i));}return void 0!==e.dependencies&&delete e.dependencies,e},c=(e,t=0)=>{if(e){let i,s=e.style.height;return e.style.height="0px",e.parentNode.style.height="auto",i=t-e.parentNode.offsetHeight,e.style.height=s+"px",e.parentNode.style.removeProperty("height"),i}return t},h={mp4:"video/mp4",m4a:"video/mp4",ogv:"video/ogg",mpeg:"video/mpeg",webm:"video/webm"},u=navigator.userAgent,g=/(iphone|ipod|ipad|android)/gi.test(u)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1;const v=/android/gi.test(u);var p={};Object.defineProperty(p,"__esModule",{value:!0});var m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);}return e},f=p.default=function(e){if(e){var t=function(e){return [].slice.call(e)},i=0,s=1,n=2,a=3,o=[],r=null,l="requestAnimationFrame"in e?function(){e.cancelAnimationFrame(r),r=e.requestAnimationFrame((function(){return c(o.filter((function(e){return e.dirty&&e.active})))}));}:function(){},d=function(e){return function(){o.forEach((function(t){return t.dirty=e})),l();}},c=function(e){e.filter((function(e){return !e.styleComputed})).forEach((function(e){e.styleComputed=v(e);})),e.filter(p).forEach(f);var t=e.filter(g);t.forEach(u),t.forEach((function(e){f(e),h(e);})),t.forEach(b);},h=function(e){return e.dirty=i},u=function(e){e.availableWidth=e.element.parentNode.clientWidth,e.currentWidth=e.element.scrollWidth,e.previousFontSize=e.currentFontSize,e.currentFontSize=Math.min(Math.max(e.minSize,e.availableWidth/e.currentWidth*e.previousFontSize),e.maxSize),e.whiteSpace=e.multiLine&&e.currentFontSize===e.minSize?"normal":"nowrap";},g=function(e){return e.dirty!==n||e.dirty===n&&e.element.parentNode.clientWidth!==e.availableWidth},v=function(t){var i=e.getComputedStyle(t.element,null);t.currentFontSize=parseFloat(i.getPropertyValue("font-size")),t.display=i.getPropertyValue("display"),t.whiteSpace=i.getPropertyValue("white-space");},p=function(e){var t=!1;return !e.preStyleTestCompleted&&(/inline-/.test(e.display)||(t=!0,e.display="inline-block"),"nowrap"!==e.whiteSpace&&(t=!0,e.whiteSpace="nowrap"),e.preStyleTestCompleted=!0,t)},f=function(e){e.element.style.whiteSpace=e.whiteSpace,e.element.style.display=e.display,e.element.style.fontSize=e.currentFontSize+"px";},b=function(e){e.element.dispatchEvent(new CustomEvent("fit",{detail:{oldValue:e.previousFontSize,newValue:e.currentFontSize,scaleFactor:e.currentFontSize/e.previousFontSize}}));},y=function(e,t){return function(){e.dirty=t,e.active&&l();}},w=function(e){return function(){o=o.filter((function(t){return t.element!==e.element})),e.observeMutations&&e.observer.disconnect(),e.element.style.whiteSpace=e.originalStyle.whiteSpace,e.element.style.display=e.originalStyle.display,e.element.style.fontSize=e.originalStyle.fontSize;}},E=function(e){return function(){e.active||(e.active=!0,l());}},R=function(e){return function(){return e.active=!1}},S=function(e){e.observeMutations&&(e.observer=new MutationObserver(y(e,s)),e.observer.observe(e.element,e.observeMutations));},A={minSize:16,maxSize:512,multiLine:!0,observeMutations:"MutationObserver"in e&&{subtree:!0,childList:!0,characterData:!0}},k=null,L=function(){e.clearTimeout(k),k=e.setTimeout(d(n),P.observeWindowDelay);},C=["resize","orientationchange"];return Object.defineProperty(P,"observeWindow",{set:function(t){var i=(t?"add":"remove")+"EventListener";C.forEach((function(t){e[i](t,L);}));}}),P.observeWindow=!0,P.observeWindowDelay=100,P.fitAll=d(a),P}function x(e,t){var i=m({},A,t),s=e.map((function(e){var t=m({},i,{element:e,active:!0});return function(e){e.originalStyle={whiteSpace:e.element.style.whiteSpace,display:e.element.style.display,fontSize:e.element.style.fontSize},S(e),e.newbie=!0,e.dirty=!0,o.push(e);}(t),{element:e,fit:y(t,a),unfreeze:E(t),freeze:R(t),unsubscribe:w(t)}}));return l(),s}function P(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return "string"==typeof e?x(t(document.querySelectorAll(e)),i):x([e],i)[0]}}("undefined"==typeof window?null:window);class b{constructor(e){this.Reveal=e,this.startEmbeddedIframe=this.startEmbeddedIframe.bind(this);}shouldPreload(e){let t=this.Reveal.getConfig().preloadIframes;return "boolean"!=typeof t&&(t=e.hasAttribute("data-preload")),t}load(e,i={}){e.style.display=this.Reveal.getConfig().display,t(e,"img[data-src], video[data-src], audio[data-src], iframe[data-src]").forEach((e=>{("IFRAME"!==e.tagName||this.shouldPreload(e))&&(e.setAttribute("src",e.getAttribute("data-src")),e.setAttribute("data-lazy-loaded",""),e.removeAttribute("data-src"));})),t(e,"video, audio").forEach((e=>{let i=0;t(e,"source[data-src]").forEach((e=>{e.setAttribute("src",e.getAttribute("data-src")),e.removeAttribute("data-src"),e.setAttribute("data-lazy-loaded",""),i+=1;})),g&&"VIDEO"===e.tagName&&e.setAttribute("playsinline",""),i>0&&e.load();}));let s=e.slideBackgroundElement;if(s){s.style.display="block";let t=e.slideBackgroundContentElement,n=e.getAttribute("data-background-iframe");if(!1===s.hasAttribute("data-loaded")){s.setAttribute("data-loaded","true");let a=e.getAttribute("data-background-image"),o=e.getAttribute("data-background-video"),r=e.hasAttribute("data-background-video-loop"),l=e.hasAttribute("data-background-video-muted");if(a)/^data:/.test(a.trim())?t.style.backgroundImage=`url(${a.trim()})`:t.style.backgroundImage=a.split(",").map((e=>`url(${((e="")=>encodeURI(e).replace(/%5B/g,"[").replace(/%5D/g,"]").replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)))(decodeURI(e.trim()))})`)).join(",");else if(o&&!this.Reveal.isSpeakerNotes()){let e=document.createElement("video");r&&e.setAttribute("loop",""),l&&(e.muted=!0),g&&(e.muted=!0,e.setAttribute("playsinline","")),o.split(",").forEach((t=>{let i=((e="")=>h[e.split(".").pop()])(t);e.innerHTML+=i?`<source src="${t}" type="${i}">`:`<source src="${t}">`;})),t.appendChild(e);}else if(n&&!0!==i.excludeIframes){let e=document.createElement("iframe");e.setAttribute("allowfullscreen",""),e.setAttribute("mozallowfullscreen",""),e.setAttribute("webkitallowfullscreen",""),e.setAttribute("allow","autoplay"),e.setAttribute("data-src",n),e.style.width="100%",e.style.height="100%",e.style.maxHeight="100%",e.style.maxWidth="100%",t.appendChild(e);}}let a=t.querySelector("iframe[data-src]");a&&this.shouldPreload(s)&&!/autoplay=(1|true|yes)/gi.test(n)&&a.getAttribute("src")!==n&&a.setAttribute("src",n);}this.layout(e);}layout(e){Array.from(e.querySelectorAll(".r-fit-text")).forEach((e=>{f(e,{minSize:24,maxSize:.8*this.Reveal.getConfig().height,observeMutations:!1,observeWindow:!1});}));}unload(e){e.style.display="none";let i=this.Reveal.getSlideBackground(e);i&&(i.style.display="none",t(i,"iframe[src]").forEach((e=>{e.removeAttribute("src");}))),t(e,"video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]").forEach((e=>{e.setAttribute("data-src",e.getAttribute("src")),e.removeAttribute("src");})),t(e,"video[data-lazy-loaded] source[src], audio source[src]").forEach((e=>{e.setAttribute("data-src",e.getAttribute("src")),e.removeAttribute("src");}));}formatEmbeddedContent(){let e=(e,i,s)=>{t(this.Reveal.getSlidesElement(),"iframe["+e+'*="'+i+'"]').forEach((t=>{let i=t.getAttribute(e);i&&-1===i.indexOf(s)&&t.setAttribute(e,i+(/\?/.test(i)?"&":"?")+s);}));};e("src","youtube.com/embed/","enablejsapi=1"),e("data-src","youtube.com/embed/","enablejsapi=1"),e("src","player.vimeo.com/","api=1"),e("data-src","player.vimeo.com/","api=1");}startEmbeddedContent(e){e&&!this.Reveal.isSpeakerNotes()&&(t(e,'img[src$=".gif"]').forEach((e=>{e.setAttribute("src",e.getAttribute("src"));})),t(e,"video, audio").forEach((e=>{if(o(e,".fragment")&&!o(e,".fragment.visible"))return;let t=this.Reveal.getConfig().autoPlayMedia;if("boolean"!=typeof t&&(t=e.hasAttribute("data-autoplay")||!!o(e,".slide-background")),t&&"function"==typeof e.play)if(e.readyState>1)this.startEmbeddedMedia({target:e});else if(g){let t=e.play();t&&"function"==typeof t.catch&&!1===e.controls&&t.catch((()=>{e.controls=!0,e.addEventListener("play",(()=>{e.controls=!1;}));}));}else e.removeEventListener("loadeddata",this.startEmbeddedMedia),e.addEventListener("loadeddata",this.startEmbeddedMedia);})),t(e,"iframe[src]").forEach((e=>{o(e,".fragment")&&!o(e,".fragment.visible")||this.startEmbeddedIframe({target:e});})),t(e,"iframe[data-src]").forEach((e=>{o(e,".fragment")&&!o(e,".fragment.visible")||e.getAttribute("src")!==e.getAttribute("data-src")&&(e.removeEventListener("load",this.startEmbeddedIframe),e.addEventListener("load",this.startEmbeddedIframe),e.setAttribute("src",e.getAttribute("data-src")));})));}startEmbeddedMedia(e){let t=!!o(e.target,"html"),i=!!o(e.target,".present");t&&i&&(e.target.currentTime=0,e.target.play()),e.target.removeEventListener("loadeddata",this.startEmbeddedMedia);}startEmbeddedIframe(e){let t=e.target;if(t&&t.contentWindow){let i=!!o(e.target,"html"),s=!!o(e.target,".present");if(i&&s){let e=this.Reveal.getConfig().autoPlayMedia;"boolean"!=typeof e&&(e=t.hasAttribute("data-autoplay")||!!o(t,".slide-background")),/youtube\.com\/embed\//.test(t.getAttribute("src"))&&e?t.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"):/player\.vimeo\.com\//.test(t.getAttribute("src"))&&e?t.contentWindow.postMessage('{"method":"play"}',"*"):t.contentWindow.postMessage("slide:start","*");}}}stopEmbeddedContent(i,s={}){s=e({unloadIframes:!0},s),i&&i.parentNode&&(t(i,"video, audio").forEach((e=>{e.hasAttribute("data-ignore")||"function"!=typeof e.pause||(e.setAttribute("data-paused-by-reveal",""),e.pause());})),t(i,"iframe").forEach((e=>{e.contentWindow&&e.contentWindow.postMessage("slide:stop","*"),e.removeEventListener("load",this.startEmbeddedIframe);})),t(i,'iframe[src*="youtube.com/embed/"]').forEach((e=>{!e.hasAttribute("data-ignore")&&e.contentWindow&&"function"==typeof e.contentWindow.postMessage&&e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*");})),t(i,'iframe[src*="player.vimeo.com/"]').forEach((e=>{!e.hasAttribute("data-ignore")&&e.contentWindow&&"function"==typeof e.contentWindow.postMessage&&e.contentWindow.postMessage('{"method":"pause"}',"*");})),!0===s.unloadIframes&&t(i,"iframe[data-src]").forEach((e=>{e.setAttribute("src","about:blank"),e.removeAttribute("src");})));}}class y{constructor(e){this.Reveal=e;}render(){this.element=document.createElement("div"),this.element.className="slide-number",this.Reveal.getRevealElement().appendChild(this.element);}configure(e,t){let i="none";e.slideNumber&&!this.Reveal.isPrintingPDF()&&("all"===e.showSlideNumber||"speaker"===e.showSlideNumber&&this.Reveal.isSpeakerNotes())&&(i="block"),this.element.style.display=i;}update(){this.Reveal.getConfig().slideNumber&&this.element&&(this.element.innerHTML=this.getSlideNumber());}getSlideNumber(e=this.Reveal.getCurrentSlide()){let t,i=this.Reveal.getConfig(),s="h.v";if("function"==typeof i.slideNumber)t=i.slideNumber(e);else {"string"==typeof i.slideNumber&&(s=i.slideNumber),/c/.test(s)||1!==this.Reveal.getHorizontalSlides().length||(s="c");let n=e&&"uncounted"===e.dataset.visibility?0:1;switch(t=[],s){case"c":t.push(this.Reveal.getSlidePastCount(e)+n);break;case"c/t":t.push(this.Reveal.getSlidePastCount(e)+n,"/",this.Reveal.getTotalSlides());break;default:let i=this.Reveal.getIndices(e);t.push(i.h+n);let a="h/v"===s?"/":".";this.Reveal.isVerticalSlide(e)&&t.push(a,i.v+1);}}let n="#"+this.Reveal.location.getHash(e);return this.formatNumber(t[0],t[1],t[2],n)}formatNumber(e,t,i,s="#"+this.Reveal.location.getHash()){return "number"!=typeof i||isNaN(i)?`<a href="${s}">\n\t\t\t\t\t<span class="slide-number-a">${e}</span>\n\t\t\t\t\t</a>`:`<a href="${s}">\n\t\t\t\t\t<span class="slide-number-a">${e}</span>\n\t\t\t\t\t<span class="slide-number-delimiter">${t}</span>\n\t\t\t\t\t<span class="slide-number-b">${i}</span>\n\t\t\t\t\t</a>`}destroy(){this.element.remove();}}class w{constructor(e){this.Reveal=e,this.onInput=this.onInput.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this);}render(){this.element=document.createElement("div"),this.element.className="jump-to-slide",this.jumpInput=document.createElement("input"),this.jumpInput.type="text",this.jumpInput.className="jump-to-slide-input",this.jumpInput.placeholder="Jump to slide",this.jumpInput.addEventListener("input",this.onInput),this.jumpInput.addEventListener("keydown",this.onKeyDown),this.jumpInput.addEventListener("blur",this.onBlur),this.element.appendChild(this.jumpInput);}show(){this.indicesOnShow=this.Reveal.getIndices(),this.Reveal.getRevealElement().appendChild(this.element),this.jumpInput.focus();}hide(){this.isVisible()&&(this.element.remove(),this.jumpInput.value="",clearTimeout(this.jumpTimeout),delete this.jumpTimeout);}isVisible(){return !!this.element.parentNode}jump(){clearTimeout(this.jumpTimeout),delete this.jumpTimeout;const e=this.jumpInput.value.trim("");let t=this.Reveal.location.getIndicesFromHash(e,{oneBasedIndex:!0});return !t&&/\S+/i.test(e)&&e.length>1&&(t=this.search(e)),t&&""!==e?(this.Reveal.slide(t.h,t.v,t.f),!0):(this.Reveal.slide(this.indicesOnShow.h,this.indicesOnShow.v,this.indicesOnShow.f),!1)}jumpAfter(e){clearTimeout(this.jumpTimeout),this.jumpTimeout=setTimeout((()=>this.jump()),e);}search(e){const t=new RegExp("\\b"+e.trim()+"\\b","i"),i=this.Reveal.getSlides().find((e=>t.test(e.innerText)));return i?this.Reveal.getIndices(i):null}cancel(){this.Reveal.slide(this.indicesOnShow.h,this.indicesOnShow.v,this.indicesOnShow.f),this.hide();}confirm(){this.jump(),this.hide();}destroy(){this.jumpInput.removeEventListener("input",this.onInput),this.jumpInput.removeEventListener("keydown",this.onKeyDown),this.jumpInput.removeEventListener("blur",this.onBlur),this.element.remove();}onKeyDown(e){13===e.keyCode?this.confirm():27===e.keyCode&&(this.cancel(),e.stopImmediatePropagation());}onInput(e){this.jumpAfter(200);}onBlur(){setTimeout((()=>this.hide()),1);}}const E=e=>{let t=e.match(/^#([0-9a-f]{3})$/i);if(t&&t[1])return t=t[1],{r:17*parseInt(t.charAt(0),16),g:17*parseInt(t.charAt(1),16),b:17*parseInt(t.charAt(2),16)};let i=e.match(/^#([0-9a-f]{6})$/i);if(i&&i[1])return i=i[1],{r:parseInt(i.slice(0,2),16),g:parseInt(i.slice(2,4),16),b:parseInt(i.slice(4,6),16)};let s=e.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);if(s)return {r:parseInt(s[1],10),g:parseInt(s[2],10),b:parseInt(s[3],10)};let n=e.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i);return n?{r:parseInt(n[1],10),g:parseInt(n[2],10),b:parseInt(n[3],10),a:parseFloat(n[4])}:null};class R{constructor(e){this.Reveal=e;}render(){this.element=document.createElement("div"),this.element.className="backgrounds",this.Reveal.getRevealElement().appendChild(this.element);}create(){this.element.innerHTML="",this.element.classList.add("no-transition"),this.Reveal.getHorizontalSlides().forEach((e=>{let i=this.createBackground(e,this.element);t(e,"section").forEach((e=>{this.createBackground(e,i),i.classList.add("stack");}));})),this.Reveal.getConfig().parallaxBackgroundImage?(this.element.style.backgroundImage='url("'+this.Reveal.getConfig().parallaxBackgroundImage+'")',this.element.style.backgroundSize=this.Reveal.getConfig().parallaxBackgroundSize,this.element.style.backgroundRepeat=this.Reveal.getConfig().parallaxBackgroundRepeat,this.element.style.backgroundPosition=this.Reveal.getConfig().parallaxBackgroundPosition,setTimeout((()=>{this.Reveal.getRevealElement().classList.add("has-parallax-background");}),1)):(this.element.style.backgroundImage="",this.Reveal.getRevealElement().classList.remove("has-parallax-background"));}createBackground(e,t){let i=document.createElement("div");i.className="slide-background "+e.className.replace(/present|past|future/,"");let s=document.createElement("div");return s.className="slide-background-content",i.appendChild(s),t.appendChild(i),e.slideBackgroundElement=i,e.slideBackgroundContentElement=s,this.sync(e),i}sync(e){const t=e.slideBackgroundElement,i=e.slideBackgroundContentElement,s={background:e.getAttribute("data-background"),backgroundSize:e.getAttribute("data-background-size"),backgroundImage:e.getAttribute("data-background-image"),backgroundVideo:e.getAttribute("data-background-video"),backgroundIframe:e.getAttribute("data-background-iframe"),backgroundColor:e.getAttribute("data-background-color"),backgroundGradient:e.getAttribute("data-background-gradient"),backgroundRepeat:e.getAttribute("data-background-repeat"),backgroundPosition:e.getAttribute("data-background-position"),backgroundTransition:e.getAttribute("data-background-transition"),backgroundOpacity:e.getAttribute("data-background-opacity")},n=e.hasAttribute("data-preload");e.classList.remove("has-dark-background"),e.classList.remove("has-light-background"),t.removeAttribute("data-loaded"),t.removeAttribute("data-background-hash"),t.removeAttribute("data-background-size"),t.removeAttribute("data-background-transition"),t.style.backgroundColor="",i.style.backgroundSize="",i.style.backgroundRepeat="",i.style.backgroundPosition="",i.style.backgroundImage="",i.style.opacity="",i.innerHTML="",s.background&&(/^(http|file|\/\/)/gi.test(s.background)||/\.(svg|png|jpg|jpeg|gif|bmp|webp)([?#\s]|$)/gi.test(s.background)?e.setAttribute("data-background-image",s.background):t.style.background=s.background),(s.background||s.backgroundColor||s.backgroundGradient||s.backgroundImage||s.backgroundVideo||s.backgroundIframe)&&t.setAttribute("data-background-hash",s.background+s.backgroundSize+s.backgroundImage+s.backgroundVideo+s.backgroundIframe+s.backgroundColor+s.backgroundGradient+s.backgroundRepeat+s.backgroundPosition+s.backgroundTransition+s.backgroundOpacity),s.backgroundSize&&t.setAttribute("data-background-size",s.backgroundSize),s.backgroundColor&&(t.style.backgroundColor=s.backgroundColor),s.backgroundGradient&&(t.style.backgroundImage=s.backgroundGradient),s.backgroundTransition&&t.setAttribute("data-background-transition",s.backgroundTransition),n&&t.setAttribute("data-preload",""),s.backgroundSize&&(i.style.backgroundSize=s.backgroundSize),s.backgroundRepeat&&(i.style.backgroundRepeat=s.backgroundRepeat),s.backgroundPosition&&(i.style.backgroundPosition=s.backgroundPosition),s.backgroundOpacity&&(i.style.opacity=s.backgroundOpacity);let a=s.backgroundColor;if(!a||!E(a)){let e=window.getComputedStyle(t);e&&e.backgroundColor&&(a=e.backgroundColor);}if(a){const t=E(a);t&&0!==t.a&&("string"==typeof(o=a)&&(o=E(o)),(o?(299*o.r+587*o.g+114*o.b)/1e3:null)<128?e.classList.add("has-dark-background"):e.classList.add("has-light-background"));}var o;}update(e=!1){let i=this.Reveal.getCurrentSlide(),s=this.Reveal.getIndices(),n=null,a=this.Reveal.getConfig().rtl?"future":"past",o=this.Reveal.getConfig().rtl?"past":"future";if(Array.from(this.element.childNodes).forEach(((i,r)=>{i.classList.remove("past","present","future"),r<s.h?i.classList.add(a):r>s.h?i.classList.add(o):(i.classList.add("present"),n=i),(e||r===s.h)&&t(i,".slide-background").forEach(((e,t)=>{e.classList.remove("past","present","future"),t<s.v?e.classList.add("past"):t>s.v?e.classList.add("future"):(e.classList.add("present"),r===s.h&&(n=e));}));})),this.previousBackground&&this.Reveal.slideContent.stopEmbeddedContent(this.previousBackground,{unloadIframes:!this.Reveal.slideContent.shouldPreload(this.previousBackground)}),n){this.Reveal.slideContent.startEmbeddedContent(n);let e=n.querySelector(".slide-background-content");if(e){let t=e.style.backgroundImage||"";/\.gif/i.test(t)&&(e.style.backgroundImage="",window.getComputedStyle(e).opacity,e.style.backgroundImage=t);}let t=this.previousBackground?this.previousBackground.getAttribute("data-background-hash"):null,i=n.getAttribute("data-background-hash");i&&i===t&&n!==this.previousBackground&&this.element.classList.add("no-transition"),this.previousBackground=n;}i&&["has-light-background","has-dark-background"].forEach((e=>{i.classList.contains(e)?this.Reveal.getRevealElement().classList.add(e):this.Reveal.getRevealElement().classList.remove(e);}),this),setTimeout((()=>{this.element.classList.remove("no-transition");}),1);}updateParallax(){let e=this.Reveal.getIndices();if(this.Reveal.getConfig().parallaxBackgroundImage){let t,i,s=this.Reveal.getHorizontalSlides(),n=this.Reveal.getVerticalSlides(),a=this.element.style.backgroundSize.split(" ");1===a.length?t=i=parseInt(a[0],10):(t=parseInt(a[0],10),i=parseInt(a[1],10));let o,r,l=this.element.offsetWidth,d=s.length;o="number"==typeof this.Reveal.getConfig().parallaxBackgroundHorizontal?this.Reveal.getConfig().parallaxBackgroundHorizontal:d>1?(t-l)/(d-1):0,r=o*e.h*-1;let c,h,u=this.element.offsetHeight,g=n.length;c="number"==typeof this.Reveal.getConfig().parallaxBackgroundVertical?this.Reveal.getConfig().parallaxBackgroundVertical:(i-u)/(g-1),h=g>0?c*e.v:0,this.element.style.backgroundPosition=r+"px "+-h+"px";}}destroy(){this.element.remove();}}const S=".slides section",A=".slides>section",k=".slides>section.present>section",L=/registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener|showPreview/,C=/fade-(down|up|right|left|out|in-then-out|in-then-semi-out)|semi-fade-out|current-visible|shrink|grow/;let x=0;class P{constructor(e){this.Reveal=e;}run(e,t){this.reset();let i=this.Reveal.getSlides(),s=i.indexOf(t),n=i.indexOf(e);if(e.hasAttribute("data-auto-animate")&&t.hasAttribute("data-auto-animate")&&e.getAttribute("data-auto-animate-id")===t.getAttribute("data-auto-animate-id")&&!(s>n?t:e).hasAttribute("data-auto-animate-restart")){this.autoAnimateStyleSheet=this.autoAnimateStyleSheet||l();let i=this.getAutoAnimateOptions(t);e.dataset.autoAnimate="pending",t.dataset.autoAnimate="pending",i.slideDirection=s>n?"forward":"backward";let a="none"===e.style.display;a&&(e.style.display=this.Reveal.getConfig().display);let o=this.getAutoAnimatableElements(e,t).map((e=>this.autoAnimateElements(e.from,e.to,e.options||{},i,x++)));if(a&&(e.style.display="none"),"false"!==t.dataset.autoAnimateUnmatched&&!0===this.Reveal.getConfig().autoAnimateUnmatched){let e=.8*i.duration,s=.2*i.duration;this.getUnmatchedAutoAnimateElements(t).forEach((e=>{let t=this.getAutoAnimateOptions(e,i),s="unmatched";t.duration===i.duration&&t.delay===i.delay||(s="unmatched-"+x++,o.push(`[data-auto-animate="running"] [data-auto-animate-target="${s}"] { transition: opacity ${t.duration}s ease ${t.delay}s; }`)),e.dataset.autoAnimateTarget=s;}),this),o.push(`[data-auto-animate="running"] [data-auto-animate-target="unmatched"] { transition: opacity ${e}s ease ${s}s; }`);}this.autoAnimateStyleSheet.innerHTML=o.join(""),requestAnimationFrame((()=>{this.autoAnimateStyleSheet&&(getComputedStyle(this.autoAnimateStyleSheet).fontWeight,t.dataset.autoAnimate="running");})),this.Reveal.dispatchEvent({type:"autoanimate",data:{fromSlide:e,toSlide:t,sheet:this.autoAnimateStyleSheet}});}}reset(){t(this.Reveal.getRevealElement(),'[data-auto-animate]:not([data-auto-animate=""])').forEach((e=>{e.dataset.autoAnimate="";})),t(this.Reveal.getRevealElement(),"[data-auto-animate-target]").forEach((e=>{delete e.dataset.autoAnimateTarget;})),this.autoAnimateStyleSheet&&this.autoAnimateStyleSheet.parentNode&&(this.autoAnimateStyleSheet.parentNode.removeChild(this.autoAnimateStyleSheet),this.autoAnimateStyleSheet=null);}autoAnimateElements(e,t,i,s,n){e.dataset.autoAnimateTarget="",t.dataset.autoAnimateTarget=n;let a=this.getAutoAnimateOptions(t,s);void 0!==i.delay&&(a.delay=i.delay),void 0!==i.duration&&(a.duration=i.duration),void 0!==i.easing&&(a.easing=i.easing);let o=this.getAutoAnimatableProperties("from",e,i),r=this.getAutoAnimatableProperties("to",t,i);if(t.classList.contains("fragment")&&(delete r.styles.opacity,e.classList.contains("fragment"))){(e.className.match(C)||[""])[0]===(t.className.match(C)||[""])[0]&&"forward"===s.slideDirection&&t.classList.add("visible","disabled");}if(!1!==i.translate||!1!==i.scale){let e=this.Reveal.getScale(),t={x:(o.x-r.x)/e,y:(o.y-r.y)/e,scaleX:o.width/r.width,scaleY:o.height/r.height};t.x=Math.round(1e3*t.x)/1e3,t.y=Math.round(1e3*t.y)/1e3,t.scaleX=Math.round(1e3*t.scaleX)/1e3,t.scaleX=Math.round(1e3*t.scaleX)/1e3;let s=!1!==i.translate&&(0!==t.x||0!==t.y),n=!1!==i.scale&&(0!==t.scaleX||0!==t.scaleY);if(s||n){let e=[];s&&e.push(`translate(${t.x}px, ${t.y}px)`),n&&e.push(`scale(${t.scaleX}, ${t.scaleY})`),o.styles.transform=e.join(" "),o.styles["transform-origin"]="top left",r.styles.transform="none";}}for(let e in r.styles){const t=r.styles[e],i=o.styles[e];t===i?delete r.styles[e]:(!0===t.explicitValue&&(r.styles[e]=t.value),!0===i.explicitValue&&(o.styles[e]=i.value));}let l="",d=Object.keys(r.styles);if(d.length>0){o.styles.transition="none",r.styles.transition=`all ${a.duration}s ${a.easing} ${a.delay}s`,r.styles["transition-property"]=d.join(", "),r.styles["will-change"]=d.join(", "),l='[data-auto-animate-target="'+n+'"] {'+Object.keys(o.styles).map((e=>e+": "+o.styles[e]+" !important;")).join("")+'}[data-auto-animate="running"] [data-auto-animate-target="'+n+'"] {'+Object.keys(r.styles).map((e=>e+": "+r.styles[e]+" !important;")).join("")+"}";}return l}getAutoAnimateOptions(t,i){let s={easing:this.Reveal.getConfig().autoAnimateEasing,duration:this.Reveal.getConfig().autoAnimateDuration,delay:0};if(s=e(s,i),t.parentNode){let e=o(t.parentNode,"[data-auto-animate-target]");e&&(s=this.getAutoAnimateOptions(e,s));}return t.dataset.autoAnimateEasing&&(s.easing=t.dataset.autoAnimateEasing),t.dataset.autoAnimateDuration&&(s.duration=parseFloat(t.dataset.autoAnimateDuration)),t.dataset.autoAnimateDelay&&(s.delay=parseFloat(t.dataset.autoAnimateDelay)),s}getAutoAnimatableProperties(e,t,i){let s=this.Reveal.getConfig(),n={styles:[]};if(!1!==i.translate||!1!==i.scale){let e;if("function"==typeof i.measure)e=i.measure(t);else if(s.center)e=t.getBoundingClientRect();else {let i=this.Reveal.getScale();e={x:t.offsetLeft*i,y:t.offsetTop*i,width:t.offsetWidth*i,height:t.offsetHeight*i};}n.x=e.x,n.y=e.y,n.width=e.width,n.height=e.height;}const a=getComputedStyle(t);return (i.styles||s.autoAnimateStyles).forEach((t=>{let i;"string"==typeof t&&(t={property:t}),void 0!==t.from&&"from"===e?i={value:t.from,explicitValue:!0}:void 0!==t.to&&"to"===e?i={value:t.to,explicitValue:!0}:("line-height"===t.property&&(i=parseFloat(a["line-height"])/parseFloat(a["font-size"])),isNaN(i)&&(i=a[t.property])),""!==i&&(n.styles[t.property]=i);})),n}getAutoAnimatableElements(e,t){let i=("function"==typeof this.Reveal.getConfig().autoAnimateMatcher?this.Reveal.getConfig().autoAnimateMatcher:this.getAutoAnimatePairs).call(this,e,t),s=[];return i.filter(((e,t)=>{if(-1===s.indexOf(e.to))return s.push(e.to),!0}))}getAutoAnimatePairs(e,t){let i=[];const s="h1, h2, h3, h4, h5, h6, p, li";return this.findAutoAnimateMatches(i,e,t,"[data-id]",(e=>e.nodeName+":::"+e.getAttribute("data-id"))),this.findAutoAnimateMatches(i,e,t,s,(e=>e.nodeName+":::"+e.innerText)),this.findAutoAnimateMatches(i,e,t,"img, video, iframe",(e=>e.nodeName+":::"+(e.getAttribute("src")||e.getAttribute("data-src")))),this.findAutoAnimateMatches(i,e,t,"pre",(e=>e.nodeName+":::"+e.innerText)),i.forEach((e=>{a(e.from,s)?e.options={scale:!1}:a(e.from,"pre")&&(e.options={scale:!1,styles:["width","height"]},this.findAutoAnimateMatches(i,e.from,e.to,".hljs .hljs-ln-code",(e=>e.textContent),{scale:!1,styles:[],measure:this.getLocalBoundingBox.bind(this)}),this.findAutoAnimateMatches(i,e.from,e.to,".hljs .hljs-ln-numbers[data-line-number]",(e=>e.getAttribute("data-line-number")),{scale:!1,styles:["width"],measure:this.getLocalBoundingBox.bind(this)}));}),this),i}getLocalBoundingBox(e){const t=this.Reveal.getScale();return {x:Math.round(e.offsetLeft*t*100)/100,y:Math.round(e.offsetTop*t*100)/100,width:Math.round(e.offsetWidth*t*100)/100,height:Math.round(e.offsetHeight*t*100)/100}}findAutoAnimateMatches(e,t,i,s,n,a){let o={},r={};[].slice.call(t.querySelectorAll(s)).forEach(((e,t)=>{const i=n(e);"string"==typeof i&&i.length&&(o[i]=o[i]||[],o[i].push(e));})),[].slice.call(i.querySelectorAll(s)).forEach(((t,i)=>{const s=n(t);let l;if(r[s]=r[s]||[],r[s].push(t),o[s]){const e=r[s].length-1,t=o[s].length-1;o[s][e]?(l=o[s][e],o[s][e]=null):o[s][t]&&(l=o[s][t],o[s][t]=null);}l&&e.push({from:l,to:t,options:a});}));}getUnmatchedAutoAnimateElements(e){return [].slice.call(e.children).reduce(((e,t)=>{const i=t.querySelector("[data-auto-animate-target]");return t.hasAttribute("data-auto-animate-target")||i||e.push(t),t.querySelector("[data-auto-animate-target]")&&(e=e.concat(this.getUnmatchedAutoAnimateElements(t))),e}),[])}}class N{constructor(e){this.Reveal=e;}configure(e,t){!1===e.fragments?this.disable():!1===t.fragments&&this.enable();}disable(){t(this.Reveal.getSlidesElement(),".fragment").forEach((e=>{e.classList.add("visible"),e.classList.remove("current-fragment");}));}enable(){t(this.Reveal.getSlidesElement(),".fragment").forEach((e=>{e.classList.remove("visible"),e.classList.remove("current-fragment");}));}availableRoutes(){let e=this.Reveal.getCurrentSlide();if(e&&this.Reveal.getConfig().fragments){let t=e.querySelectorAll(".fragment:not(.disabled)"),i=e.querySelectorAll(".fragment:not(.disabled):not(.visible)");return {prev:t.length-i.length>0,next:!!i.length}}return {prev:!1,next:!1}}sort(e,t=!1){e=Array.from(e);let i=[],s=[],n=[];e.forEach((e=>{if(e.hasAttribute("data-fragment-index")){let t=parseInt(e.getAttribute("data-fragment-index"),10);i[t]||(i[t]=[]),i[t].push(e);}else s.push([e]);})),i=i.concat(s);let a=0;return i.forEach((e=>{e.forEach((e=>{n.push(e),e.setAttribute("data-fragment-index",a);})),a++;})),!0===t?i:n}sortAll(){this.Reveal.getHorizontalSlides().forEach((e=>{let i=t(e,"section");i.forEach(((e,t)=>{this.sort(e.querySelectorAll(".fragment"));}),this),0===i.length&&this.sort(e.querySelectorAll(".fragment"));}));}update(e,t){let i={shown:[],hidden:[]},s=this.Reveal.getCurrentSlide();if(s&&this.Reveal.getConfig().fragments&&(t=t||this.sort(s.querySelectorAll(".fragment"))).length){let n=0;if("number"!=typeof e){let t=this.sort(s.querySelectorAll(".fragment.visible")).pop();t&&(e=parseInt(t.getAttribute("data-fragment-index")||0,10));}Array.from(t).forEach(((t,s)=>{if(t.hasAttribute("data-fragment-index")&&(s=parseInt(t.getAttribute("data-fragment-index"),10)),n=Math.max(n,s),s<=e){let n=t.classList.contains("visible");t.classList.add("visible"),t.classList.remove("current-fragment"),s===e&&(this.Reveal.announceStatus(this.Reveal.getStatusText(t)),t.classList.add("current-fragment"),this.Reveal.slideContent.startEmbeddedContent(t)),n||(i.shown.push(t),this.Reveal.dispatchEvent({target:t,type:"visible",bubbles:!1}));}else {let e=t.classList.contains("visible");t.classList.remove("visible"),t.classList.remove("current-fragment"),e&&(this.Reveal.slideContent.stopEmbeddedContent(t),i.hidden.push(t),this.Reveal.dispatchEvent({target:t,type:"hidden",bubbles:!1}));}})),e="number"==typeof e?e:-1,e=Math.max(Math.min(e,n),-1),s.setAttribute("data-fragment",e);}return i}sync(e=this.Reveal.getCurrentSlide()){return this.sort(e.querySelectorAll(".fragment"))}goto(e,t=0){let i=this.Reveal.getCurrentSlide();if(i&&this.Reveal.getConfig().fragments){let s=this.sort(i.querySelectorAll(".fragment:not(.disabled)"));if(s.length){if("number"!=typeof e){let t=this.sort(i.querySelectorAll(".fragment:not(.disabled).visible")).pop();e=t?parseInt(t.getAttribute("data-fragment-index")||0,10):-1;}e+=t;let n=this.update(e,s);return n.hidden.length&&this.Reveal.dispatchEvent({type:"fragmenthidden",data:{fragment:n.hidden[0],fragments:n.hidden}}),n.shown.length&&this.Reveal.dispatchEvent({type:"fragmentshown",data:{fragment:n.shown[0],fragments:n.shown}}),this.Reveal.controls.update(),this.Reveal.progress.update(),this.Reveal.getConfig().fragmentInURL&&this.Reveal.location.writeURL(),!(!n.shown.length&&!n.hidden.length)}}return !1}next(){return this.goto(null,1)}prev(){return this.goto(null,-1)}}class M{constructor(e){this.Reveal=e,this.active=!1,this.onSlideClicked=this.onSlideClicked.bind(this);}activate(){if(this.Reveal.getConfig().overview&&!this.isActive()){this.active=!0,this.Reveal.getRevealElement().classList.add("overview"),this.Reveal.cancelAutoSlide(),this.Reveal.getSlidesElement().appendChild(this.Reveal.getBackgroundsElement()),t(this.Reveal.getRevealElement(),S).forEach((e=>{e.classList.contains("stack")||e.addEventListener("click",this.onSlideClicked,!0);}));const e=70,i=this.Reveal.getComputedSlideSize();this.overviewSlideWidth=i.width+e,this.overviewSlideHeight=i.height+e,this.Reveal.getConfig().rtl&&(this.overviewSlideWidth=-this.overviewSlideWidth),this.Reveal.updateSlidesVisibility(),this.layout(),this.update(),this.Reveal.layout();const s=this.Reveal.getIndices();this.Reveal.dispatchEvent({type:"overviewshown",data:{indexh:s.h,indexv:s.v,currentSlide:this.Reveal.getCurrentSlide()}});}}layout(){this.Reveal.getHorizontalSlides().forEach(((e,i)=>{e.setAttribute("data-index-h",i),n(e,"translate3d("+i*this.overviewSlideWidth+"px, 0, 0)"),e.classList.contains("stack")&&t(e,"section").forEach(((e,t)=>{e.setAttribute("data-index-h",i),e.setAttribute("data-index-v",t),n(e,"translate3d(0, "+t*this.overviewSlideHeight+"px, 0)");}));})),Array.from(this.Reveal.getBackgroundsElement().childNodes).forEach(((e,i)=>{n(e,"translate3d("+i*this.overviewSlideWidth+"px, 0, 0)"),t(e,".slide-background").forEach(((e,t)=>{n(e,"translate3d(0, "+t*this.overviewSlideHeight+"px, 0)");}));}));}update(){const e=Math.min(window.innerWidth,window.innerHeight),t=Math.max(e/5,150)/e,i=this.Reveal.getIndices();this.Reveal.transformSlides({overview:["scale("+t+")","translateX("+-i.h*this.overviewSlideWidth+"px)","translateY("+-i.v*this.overviewSlideHeight+"px)"].join(" ")});}deactivate(){if(this.Reveal.getConfig().overview){this.active=!1,this.Reveal.getRevealElement().classList.remove("overview"),this.Reveal.getRevealElement().classList.add("overview-deactivating"),setTimeout((()=>{this.Reveal.getRevealElement().classList.remove("overview-deactivating");}),1),this.Reveal.getRevealElement().appendChild(this.Reveal.getBackgroundsElement()),t(this.Reveal.getRevealElement(),S).forEach((e=>{n(e,""),e.removeEventListener("click",this.onSlideClicked,!0);})),t(this.Reveal.getBackgroundsElement(),".slide-background").forEach((e=>{n(e,"");})),this.Reveal.transformSlides({overview:""});const e=this.Reveal.getIndices();this.Reveal.slide(e.h,e.v),this.Reveal.layout(),this.Reveal.cueAutoSlide(),this.Reveal.dispatchEvent({type:"overviewhidden",data:{indexh:e.h,indexv:e.v,currentSlide:this.Reveal.getCurrentSlide()}});}}toggle(e){"boolean"==typeof e?e?this.activate():this.deactivate():this.isActive()?this.deactivate():this.activate();}isActive(){return this.active}onSlideClicked(e){if(this.isActive()){e.preventDefault();let t=e.target;for(;t&&!t.nodeName.match(/section/gi);)t=t.parentNode;if(t&&!t.classList.contains("disabled")&&(this.deactivate(),t.nodeName.match(/section/gi))){let e=parseInt(t.getAttribute("data-index-h"),10),i=parseInt(t.getAttribute("data-index-v"),10);this.Reveal.slide(e,i);}}}}class I{constructor(e){this.Reveal=e,this.shortcuts={},this.bindings={},this.onDocumentKeyDown=this.onDocumentKeyDown.bind(this),this.onDocumentKeyPress=this.onDocumentKeyPress.bind(this);}configure(e,t){"linear"===e.navigationMode?(this.shortcuts["&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J"]="Next slide",this.shortcuts["&#8592;  ,  &#8593;  ,  P  ,  H  ,  K"]="Previous slide"):(this.shortcuts["N  ,  SPACE"]="Next slide",this.shortcuts["P  ,  Shift SPACE"]="Previous slide",this.shortcuts["&#8592;  ,  H"]="Navigate left",this.shortcuts["&#8594;  ,  L"]="Navigate right",this.shortcuts["&#8593;  ,  K"]="Navigate up",this.shortcuts["&#8595;  ,  J"]="Navigate down"),this.shortcuts["Alt + &#8592;/&#8593/&#8594;/&#8595;"]="Navigate without fragments",this.shortcuts["Shift + &#8592;/&#8593/&#8594;/&#8595;"]="Jump to first/last slide",this.shortcuts["B  ,  ."]="Pause",this.shortcuts.F="Fullscreen",this.shortcuts.G="Jump to slide",this.shortcuts["ESC, O"]="Slide overview";}bind(){document.addEventListener("keydown",this.onDocumentKeyDown,!1),document.addEventListener("keypress",this.onDocumentKeyPress,!1);}unbind(){document.removeEventListener("keydown",this.onDocumentKeyDown,!1),document.removeEventListener("keypress",this.onDocumentKeyPress,!1);}addKeyBinding(e,t){"object"==typeof e&&e.keyCode?this.bindings[e.keyCode]={callback:t,key:e.key,description:e.description}:this.bindings[e]={callback:t,key:null,description:null};}removeKeyBinding(e){delete this.bindings[e];}triggerKey(e){this.onDocumentKeyDown({keyCode:e});}registerKeyboardShortcut(e,t){this.shortcuts[e]=t;}getShortcuts(){return this.shortcuts}getBindings(){return this.bindings}onDocumentKeyPress(e){e.shiftKey&&63===e.charCode&&this.Reveal.toggleHelp();}onDocumentKeyDown(e){let t=this.Reveal.getConfig();if("function"==typeof t.keyboardCondition&&!1===t.keyboardCondition(e))return !0;if("focused"===t.keyboardCondition&&!this.Reveal.isFocused())return !0;let i=e.keyCode,s=!this.Reveal.isAutoSliding();this.Reveal.onUserInput(e);let n=document.activeElement&&!0===document.activeElement.isContentEditable,a=document.activeElement&&document.activeElement.tagName&&/input|textarea/i.test(document.activeElement.tagName),o=document.activeElement&&document.activeElement.className&&/speaker-notes/i.test(document.activeElement.className),r=!(-1!==[32,37,38,39,40,78,80].indexOf(e.keyCode)&&e.shiftKey||e.altKey)&&(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey);if(n||a||o||r)return;let l,d=[66,86,190,191];if("object"==typeof t.keyboard)for(l in t.keyboard)"togglePause"===t.keyboard[l]&&d.push(parseInt(l,10));if(this.Reveal.isPaused()&&-1===d.indexOf(i))return !1;let c="linear"===t.navigationMode||!this.Reveal.hasHorizontalSlides()||!this.Reveal.hasVerticalSlides(),h=!1;if("object"==typeof t.keyboard)for(l in t.keyboard)if(parseInt(l,10)===i){let i=t.keyboard[l];"function"==typeof i?i.apply(null,[e]):"string"==typeof i&&"function"==typeof this.Reveal[i]&&this.Reveal[i].call(),h=!0;}if(!1===h)for(l in this.bindings)if(parseInt(l,10)===i){let t=this.bindings[l].callback;"function"==typeof t?t.apply(null,[e]):"string"==typeof t&&"function"==typeof this.Reveal[t]&&this.Reveal[t].call(),h=!0;}!1===h&&(h=!0,80===i||33===i?this.Reveal.prev({skipFragments:e.altKey}):78===i||34===i?this.Reveal.next({skipFragments:e.altKey}):72===i||37===i?e.shiftKey?this.Reveal.slide(0):!this.Reveal.overview.isActive()&&c?this.Reveal.prev({skipFragments:e.altKey}):this.Reveal.left({skipFragments:e.altKey}):76===i||39===i?e.shiftKey?this.Reveal.slide(this.Reveal.getHorizontalSlides().length-1):!this.Reveal.overview.isActive()&&c?this.Reveal.next({skipFragments:e.altKey}):this.Reveal.right({skipFragments:e.altKey}):75===i||38===i?e.shiftKey?this.Reveal.slide(void 0,0):!this.Reveal.overview.isActive()&&c?this.Reveal.prev({skipFragments:e.altKey}):this.Reveal.up({skipFragments:e.altKey}):74===i||40===i?e.shiftKey?this.Reveal.slide(void 0,Number.MAX_VALUE):!this.Reveal.overview.isActive()&&c?this.Reveal.next({skipFragments:e.altKey}):this.Reveal.down({skipFragments:e.altKey}):36===i?this.Reveal.slide(0):35===i?this.Reveal.slide(this.Reveal.getHorizontalSlides().length-1):32===i?(this.Reveal.overview.isActive()&&this.Reveal.overview.deactivate(),e.shiftKey?this.Reveal.prev({skipFragments:e.altKey}):this.Reveal.next({skipFragments:e.altKey})):58===i||59===i||66===i||86===i||190===i||191===i?this.Reveal.togglePause():70===i?(e=>{let t=(e=e||document.documentElement).requestFullscreen||e.webkitRequestFullscreen||e.webkitRequestFullScreen||e.mozRequestFullScreen||e.msRequestFullscreen;t&&t.apply(e);})(t.embedded?this.Reveal.getViewportElement():document.documentElement):65===i?t.autoSlideStoppable&&this.Reveal.toggleAutoSlide(s):71===i?t.jumpToSlide&&this.Reveal.toggleJumpToSlide():h=!1),h?e.preventDefault&&e.preventDefault():27!==i&&79!==i||(!1===this.Reveal.closeOverlay()&&this.Reveal.overview.toggle(),e.preventDefault&&e.preventDefault()),this.Reveal.cueAutoSlide();}}class D{constructor(e){var t,i,s;s=1e3,(i="MAX_REPLACE_STATE_FREQUENCY")in(t=this)?Object.defineProperty(t,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[i]=s,this.Reveal=e,this.writeURLTimeout=0,this.replaceStateTimestamp=0,this.onWindowHashChange=this.onWindowHashChange.bind(this);}bind(){window.addEventListener("hashchange",this.onWindowHashChange,!1);}unbind(){window.removeEventListener("hashchange",this.onWindowHashChange,!1);}getIndicesFromHash(e=window.location.hash,t={}){let i=e.replace(/^#\/?/,""),s=i.split("/");if(/^[0-9]*$/.test(s[0])||!i.length){const e=this.Reveal.getConfig();let i,n=e.hashOneBasedIndex||t.oneBasedIndex?1:0,a=parseInt(s[0],10)-n||0,o=parseInt(s[1],10)-n||0;return e.fragmentInURL&&(i=parseInt(s[2],10),isNaN(i)&&(i=void 0)),{h:a,v:o,f:i}}{let e,t;/\/[-\d]+$/g.test(i)&&(t=parseInt(i.split("/").pop(),10),t=isNaN(t)?void 0:t,i=i.split("/").shift());try{e=document.getElementById(decodeURIComponent(i)).closest(".slides>section, .slides>section>section");}catch(e){}if(e)return {...this.Reveal.getIndices(e),f:t}}return null}readURL(){const e=this.Reveal.getIndices(),t=this.getIndicesFromHash();t?t.h===e.h&&t.v===e.v&&void 0===t.f||this.Reveal.slide(t.h,t.v,t.f):this.Reveal.slide(e.h||0,e.v||0);}writeURL(e){let t=this.Reveal.getConfig(),i=this.Reveal.getCurrentSlide();if(clearTimeout(this.writeURLTimeout),"number"==typeof e)this.writeURLTimeout=setTimeout(this.writeURL,e);else if(i){let e=this.getHash();t.history?window.location.hash=e:t.hash&&("/"===e?this.debouncedReplaceState(window.location.pathname+window.location.search):this.debouncedReplaceState("#"+e));}}replaceState(e){window.history.replaceState(null,null,e),this.replaceStateTimestamp=Date.now();}debouncedReplaceState(e){clearTimeout(this.replaceStateTimeout),Date.now()-this.replaceStateTimestamp>this.MAX_REPLACE_STATE_FREQUENCY?this.replaceState(e):this.replaceStateTimeout=setTimeout((()=>this.replaceState(e)),this.MAX_REPLACE_STATE_FREQUENCY);}getHash(e){let t="/",i=e||this.Reveal.getCurrentSlide(),s=i?i.getAttribute("id"):null;s&&(s=encodeURIComponent(s));let n=this.Reveal.getIndices(e);if(this.Reveal.getConfig().fragmentInURL||(n.f=void 0),"string"==typeof s&&s.length)t="/"+s,n.f>=0&&(t+="/"+n.f);else {let e=this.Reveal.getConfig().hashOneBasedIndex?1:0;(n.h>0||n.v>0||n.f>=0)&&(t+=n.h+e),(n.v>0||n.f>=0)&&(t+="/"+(n.v+e)),n.f>=0&&(t+="/"+n.f);}return t}onWindowHashChange(e){this.readURL();}}class T{constructor(e){this.Reveal=e,this.onNavigateLeftClicked=this.onNavigateLeftClicked.bind(this),this.onNavigateRightClicked=this.onNavigateRightClicked.bind(this),this.onNavigateUpClicked=this.onNavigateUpClicked.bind(this),this.onNavigateDownClicked=this.onNavigateDownClicked.bind(this),this.onNavigatePrevClicked=this.onNavigatePrevClicked.bind(this),this.onNavigateNextClicked=this.onNavigateNextClicked.bind(this);}render(){const e=this.Reveal.getConfig().rtl,i=this.Reveal.getRevealElement();this.element=document.createElement("aside"),this.element.className="controls",this.element.innerHTML=`<button class="navigate-left" aria-label="${e?"next slide":"previous slide"}"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-right" aria-label="${e?"previous slide":"next slide"}"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>`,this.Reveal.getRevealElement().appendChild(this.element),this.controlsLeft=t(i,".navigate-left"),this.controlsRight=t(i,".navigate-right"),this.controlsUp=t(i,".navigate-up"),this.controlsDown=t(i,".navigate-down"),this.controlsPrev=t(i,".navigate-prev"),this.controlsNext=t(i,".navigate-next"),this.controlsRightArrow=this.element.querySelector(".navigate-right"),this.controlsLeftArrow=this.element.querySelector(".navigate-left"),this.controlsDownArrow=this.element.querySelector(".navigate-down");}configure(e,t){this.element.style.display=e.controls?"block":"none",this.element.setAttribute("data-controls-layout",e.controlsLayout),this.element.setAttribute("data-controls-back-arrows",e.controlsBackArrows);}bind(){let e=["touchstart","click"];v&&(e=["touchstart"]),e.forEach((e=>{this.controlsLeft.forEach((t=>t.addEventListener(e,this.onNavigateLeftClicked,!1))),this.controlsRight.forEach((t=>t.addEventListener(e,this.onNavigateRightClicked,!1))),this.controlsUp.forEach((t=>t.addEventListener(e,this.onNavigateUpClicked,!1))),this.controlsDown.forEach((t=>t.addEventListener(e,this.onNavigateDownClicked,!1))),this.controlsPrev.forEach((t=>t.addEventListener(e,this.onNavigatePrevClicked,!1))),this.controlsNext.forEach((t=>t.addEventListener(e,this.onNavigateNextClicked,!1)));}));}unbind(){["touchstart","click"].forEach((e=>{this.controlsLeft.forEach((t=>t.removeEventListener(e,this.onNavigateLeftClicked,!1))),this.controlsRight.forEach((t=>t.removeEventListener(e,this.onNavigateRightClicked,!1))),this.controlsUp.forEach((t=>t.removeEventListener(e,this.onNavigateUpClicked,!1))),this.controlsDown.forEach((t=>t.removeEventListener(e,this.onNavigateDownClicked,!1))),this.controlsPrev.forEach((t=>t.removeEventListener(e,this.onNavigatePrevClicked,!1))),this.controlsNext.forEach((t=>t.removeEventListener(e,this.onNavigateNextClicked,!1)));}));}update(){let e=this.Reveal.availableRoutes();[...this.controlsLeft,...this.controlsRight,...this.controlsUp,...this.controlsDown,...this.controlsPrev,...this.controlsNext].forEach((e=>{e.classList.remove("enabled","fragmented"),e.setAttribute("disabled","disabled");})),e.left&&this.controlsLeft.forEach((e=>{e.classList.add("enabled"),e.removeAttribute("disabled");})),e.right&&this.controlsRight.forEach((e=>{e.classList.add("enabled"),e.removeAttribute("disabled");})),e.up&&this.controlsUp.forEach((e=>{e.classList.add("enabled"),e.removeAttribute("disabled");})),e.down&&this.controlsDown.forEach((e=>{e.classList.add("enabled"),e.removeAttribute("disabled");})),(e.left||e.up)&&this.controlsPrev.forEach((e=>{e.classList.add("enabled"),e.removeAttribute("disabled");})),(e.right||e.down)&&this.controlsNext.forEach((e=>{e.classList.add("enabled"),e.removeAttribute("disabled");}));let t=this.Reveal.getCurrentSlide();if(t){let e=this.Reveal.fragments.availableRoutes();e.prev&&this.controlsPrev.forEach((e=>{e.classList.add("fragmented","enabled"),e.removeAttribute("disabled");})),e.next&&this.controlsNext.forEach((e=>{e.classList.add("fragmented","enabled"),e.removeAttribute("disabled");})),this.Reveal.isVerticalSlide(t)?(e.prev&&this.controlsUp.forEach((e=>{e.classList.add("fragmented","enabled"),e.removeAttribute("disabled");})),e.next&&this.controlsDown.forEach((e=>{e.classList.add("fragmented","enabled"),e.removeAttribute("disabled");}))):(e.prev&&this.controlsLeft.forEach((e=>{e.classList.add("fragmented","enabled"),e.removeAttribute("disabled");})),e.next&&this.controlsRight.forEach((e=>{e.classList.add("fragmented","enabled"),e.removeAttribute("disabled");})));}if(this.Reveal.getConfig().controlsTutorial){let t=this.Reveal.getIndices();!this.Reveal.hasNavigatedVertically()&&e.down?this.controlsDownArrow.classList.add("highlight"):(this.controlsDownArrow.classList.remove("highlight"),this.Reveal.getConfig().rtl?!this.Reveal.hasNavigatedHorizontally()&&e.left&&0===t.v?this.controlsLeftArrow.classList.add("highlight"):this.controlsLeftArrow.classList.remove("highlight"):!this.Reveal.hasNavigatedHorizontally()&&e.right&&0===t.v?this.controlsRightArrow.classList.add("highlight"):this.controlsRightArrow.classList.remove("highlight"));}}destroy(){this.unbind(),this.element.remove();}onNavigateLeftClicked(e){e.preventDefault(),this.Reveal.onUserInput(),"linear"===this.Reveal.getConfig().navigationMode?this.Reveal.prev():this.Reveal.left();}onNavigateRightClicked(e){e.preventDefault(),this.Reveal.onUserInput(),"linear"===this.Reveal.getConfig().navigationMode?this.Reveal.next():this.Reveal.right();}onNavigateUpClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.up();}onNavigateDownClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.down();}onNavigatePrevClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.prev();}onNavigateNextClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.next();}}class F{constructor(e){this.Reveal=e,this.onProgressClicked=this.onProgressClicked.bind(this);}render(){this.element=document.createElement("div"),this.element.className="progress",this.Reveal.getRevealElement().appendChild(this.element),this.bar=document.createElement("span"),this.element.appendChild(this.bar);}configure(e,t){this.element.style.display=e.progress?"block":"none";}bind(){this.Reveal.getConfig().progress&&this.element&&this.element.addEventListener("click",this.onProgressClicked,!1);}unbind(){this.Reveal.getConfig().progress&&this.element&&this.element.removeEventListener("click",this.onProgressClicked,!1);}update(){if(this.Reveal.getConfig().progress&&this.bar){let e=this.Reveal.getProgress();this.Reveal.getTotalSlides()<2&&(e=0),this.bar.style.transform="scaleX("+e+")";}}getMaxWidth(){return this.Reveal.getRevealElement().offsetWidth}onProgressClicked(e){this.Reveal.onUserInput(e),e.preventDefault();let t=this.Reveal.getSlides(),i=t.length,s=Math.floor(e.clientX/this.getMaxWidth()*i);this.Reveal.getConfig().rtl&&(s=i-s);let n=this.Reveal.getIndices(t[s]);this.Reveal.slide(n.h,n.v);}destroy(){this.element.remove();}}class z{constructor(e){this.Reveal=e,this.lastMouseWheelStep=0,this.cursorHidden=!1,this.cursorInactiveTimeout=0,this.onDocumentCursorActive=this.onDocumentCursorActive.bind(this),this.onDocumentMouseScroll=this.onDocumentMouseScroll.bind(this);}configure(e,t){e.mouseWheel?(document.addEventListener("DOMMouseScroll",this.onDocumentMouseScroll,!1),document.addEventListener("mousewheel",this.onDocumentMouseScroll,!1)):(document.removeEventListener("DOMMouseScroll",this.onDocumentMouseScroll,!1),document.removeEventListener("mousewheel",this.onDocumentMouseScroll,!1)),e.hideInactiveCursor?(document.addEventListener("mousemove",this.onDocumentCursorActive,!1),document.addEventListener("mousedown",this.onDocumentCursorActive,!1)):(this.showCursor(),document.removeEventListener("mousemove",this.onDocumentCursorActive,!1),document.removeEventListener("mousedown",this.onDocumentCursorActive,!1));}showCursor(){this.cursorHidden&&(this.cursorHidden=!1,this.Reveal.getRevealElement().style.cursor="");}hideCursor(){!1===this.cursorHidden&&(this.cursorHidden=!0,this.Reveal.getRevealElement().style.cursor="none");}destroy(){this.showCursor(),document.removeEventListener("DOMMouseScroll",this.onDocumentMouseScroll,!1),document.removeEventListener("mousewheel",this.onDocumentMouseScroll,!1),document.removeEventListener("mousemove",this.onDocumentCursorActive,!1),document.removeEventListener("mousedown",this.onDocumentCursorActive,!1);}onDocumentCursorActive(e){this.showCursor(),clearTimeout(this.cursorInactiveTimeout),this.cursorInactiveTimeout=setTimeout(this.hideCursor.bind(this),this.Reveal.getConfig().hideCursorTime);}onDocumentMouseScroll(e){if(Date.now()-this.lastMouseWheelStep>1e3){this.lastMouseWheelStep=Date.now();let t=e.detail||-e.wheelDelta;t>0?this.Reveal.next():t<0&&this.Reveal.prev();}}}const H=(e,t)=>{const i=document.createElement("script");i.type="text/javascript",i.async=!1,i.defer=!1,i.src=e,"function"==typeof t&&(i.onload=i.onreadystatechange=e=>{("load"===e.type||/loaded|complete/.test(i.readyState))&&(i.onload=i.onreadystatechange=i.onerror=null,t());},i.onerror=e=>{i.onload=i.onreadystatechange=i.onerror=null,t(new Error("Failed loading script: "+i.src+"\n"+e));});const s=document.querySelector("head");s.insertBefore(i,s.lastChild);};class B{constructor(e){this.Reveal=e,this.state="idle",this.registeredPlugins={},this.asyncDependencies=[];}load(e,t){return this.state="loading",e.forEach(this.registerPlugin.bind(this)),new Promise((e=>{let i=[],s=0;if(t.forEach((e=>{e.condition&&!e.condition()||(e.async?this.asyncDependencies.push(e):i.push(e));})),i.length){s=i.length;const t=t=>{t&&"function"==typeof t.callback&&t.callback(),0==--s&&this.initPlugins().then(e);};i.forEach((e=>{"string"==typeof e.id?(this.registerPlugin(e),t(e)):"string"==typeof e.src?H(e.src,(()=>t(e))):(console.warn("Unrecognized plugin format",e),t());}));}else this.initPlugins().then(e);}))}initPlugins(){return new Promise((e=>{let t=Object.values(this.registeredPlugins),i=t.length;if(0===i)this.loadAsync().then(e);else {let s,n=()=>{0==--i?this.loadAsync().then(e):s();},a=0;s=()=>{let e=t[a++];if("function"==typeof e.init){let t=e.init(this.Reveal);t&&"function"==typeof t.then?t.then(n):n();}else n();},s();}}))}loadAsync(){return this.state="loaded",this.asyncDependencies.length&&this.asyncDependencies.forEach((e=>{H(e.src,e.callback);})),Promise.resolve()}registerPlugin(e){2===arguments.length&&"string"==typeof arguments[0]?(e=arguments[1]).id=arguments[0]:"function"==typeof e&&(e=e());let t=e.id;"string"!=typeof t?console.warn("Unrecognized plugin format; can't find plugin.id",e):void 0===this.registeredPlugins[t]?(this.registeredPlugins[t]=e,"loaded"===this.state&&"function"==typeof e.init&&e.init(this.Reveal)):console.warn('reveal.js: "'+t+'" plugin has already been registered');}hasPlugin(e){return !!this.registeredPlugins[e]}getPlugin(e){return this.registeredPlugins[e]}getRegisteredPlugins(){return this.registeredPlugins}destroy(){Object.values(this.registeredPlugins).forEach((e=>{"function"==typeof e.destroy&&e.destroy();})),this.registeredPlugins={},this.asyncDependencies=[];}}class O{constructor(e){this.Reveal=e;}async setupPDF(){const e=this.Reveal.getConfig(),i=t(this.Reveal.getRevealElement(),S),s=e.slideNumber&&/all|print/i.test(e.showSlideNumber),n=this.Reveal.getComputedSlideSize(window.innerWidth,window.innerHeight),a=Math.floor(n.width*(1+e.margin)),o=Math.floor(n.height*(1+e.margin)),r=n.width,d=n.height;await new Promise(requestAnimationFrame),l("@page{size:"+a+"px "+o+"px; margin: 0px;}"),l(".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: "+r+"px; max-height:"+d+"px}"),document.documentElement.classList.add("print-pdf"),document.body.style.width=a+"px",document.body.style.height=o+"px";const c=document.querySelector(".reveal-viewport");let h;if(c){const e=window.getComputedStyle(c);e&&e.background&&(h=e.background);}await new Promise(requestAnimationFrame),this.Reveal.layoutSlideContents(r,d),await new Promise(requestAnimationFrame);const u=i.map((e=>e.scrollHeight)),g=[],v=i[0].parentNode;let p=1;i.forEach((function(i,n){if(!1===i.classList.contains("stack")){let l=(a-r)/2,c=(o-d)/2;const v=u[n];let m=Math.max(Math.ceil(v/o),1);m=Math.min(m,e.pdfMaxPagesPerSlide),(1===m&&e.center||i.classList.contains("center"))&&(c=Math.max((o-v)/2,0));const f=document.createElement("div");if(g.push(f),f.className="pdf-page",f.style.height=(o+e.pdfPageHeightOffset)*m+"px",h&&(f.style.background=h),f.appendChild(i),i.style.left=l+"px",i.style.top=c+"px",i.style.width=r+"px",this.Reveal.slideContent.layout(i),i.slideBackgroundElement&&f.insertBefore(i.slideBackgroundElement,i),e.showNotes){const t=this.Reveal.getSlideNotes(i);if(t){const i=8,s="string"==typeof e.showNotes?e.showNotes:"inline",n=document.createElement("div");n.classList.add("speaker-notes"),n.classList.add("speaker-notes-pdf"),n.setAttribute("data-layout",s),n.innerHTML=t,"separate-page"===s?g.push(n):(n.style.left=i+"px",n.style.bottom=i+"px",n.style.width=a-2*i+"px",f.appendChild(n));}}if(s){const e=document.createElement("div");e.classList.add("slide-number"),e.classList.add("slide-number-pdf"),e.innerHTML=p++,f.appendChild(e);}if(e.pdfSeparateFragments){const e=this.Reveal.fragments.sort(f.querySelectorAll(".fragment"),!0);let t;e.forEach((function(e,i){t&&t.forEach((function(e){e.classList.remove("current-fragment");})),e.forEach((function(e){e.classList.add("visible","current-fragment");}),this);const n=f.cloneNode(!0);if(s){const e=i+1;n.querySelector(".slide-number-pdf").innerHTML+="."+e;}g.push(n),t=e;}),this),e.forEach((function(e){e.forEach((function(e){e.classList.remove("visible","current-fragment");}));}));}else t(f,".fragment:not(.fade-out)").forEach((function(e){e.classList.add("visible");}));}}),this),await new Promise(requestAnimationFrame),g.forEach((e=>v.appendChild(e))),this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()),this.Reveal.dispatchEvent({type:"pdf-ready"});}isPrintingPDF(){return /print-pdf/gi.test(window.location.search)}}class q{constructor(e){this.Reveal=e,this.touchStartX=0,this.touchStartY=0,this.touchStartCount=0,this.touchCaptured=!1,this.onPointerDown=this.onPointerDown.bind(this),this.onPointerMove=this.onPointerMove.bind(this),this.onPointerUp=this.onPointerUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this);}bind(){let e=this.Reveal.getRevealElement();"onpointerdown"in window?(e.addEventListener("pointerdown",this.onPointerDown,!1),e.addEventListener("pointermove",this.onPointerMove,!1),e.addEventListener("pointerup",this.onPointerUp,!1)):window.navigator.msPointerEnabled?(e.addEventListener("MSPointerDown",this.onPointerDown,!1),e.addEventListener("MSPointerMove",this.onPointerMove,!1),e.addEventListener("MSPointerUp",this.onPointerUp,!1)):(e.addEventListener("touchstart",this.onTouchStart,!1),e.addEventListener("touchmove",this.onTouchMove,!1),e.addEventListener("touchend",this.onTouchEnd,!1));}unbind(){let e=this.Reveal.getRevealElement();e.removeEventListener("pointerdown",this.onPointerDown,!1),e.removeEventListener("pointermove",this.onPointerMove,!1),e.removeEventListener("pointerup",this.onPointerUp,!1),e.removeEventListener("MSPointerDown",this.onPointerDown,!1),e.removeEventListener("MSPointerMove",this.onPointerMove,!1),e.removeEventListener("MSPointerUp",this.onPointerUp,!1),e.removeEventListener("touchstart",this.onTouchStart,!1),e.removeEventListener("touchmove",this.onTouchMove,!1),e.removeEventListener("touchend",this.onTouchEnd,!1);}isSwipePrevented(e){if(a(e,"video, audio"))return !0;for(;e&&"function"==typeof e.hasAttribute;){if(e.hasAttribute("data-prevent-swipe"))return !0;e=e.parentNode;}return !1}onTouchStart(e){if(this.isSwipePrevented(e.target))return !0;this.touchStartX=e.touches[0].clientX,this.touchStartY=e.touches[0].clientY,this.touchStartCount=e.touches.length;}onTouchMove(e){if(this.isSwipePrevented(e.target))return !0;let t=this.Reveal.getConfig();if(this.touchCaptured)v&&e.preventDefault();else {this.Reveal.onUserInput(e);let i=e.touches[0].clientX,s=e.touches[0].clientY;if(1===e.touches.length&&2!==this.touchStartCount){let n=this.Reveal.availableRoutes({includeFragments:!0}),a=i-this.touchStartX,o=s-this.touchStartY;a>40&&Math.abs(a)>Math.abs(o)?(this.touchCaptured=!0,"linear"===t.navigationMode?t.rtl?this.Reveal.next():this.Reveal.prev():this.Reveal.left()):a<-40&&Math.abs(a)>Math.abs(o)?(this.touchCaptured=!0,"linear"===t.navigationMode?t.rtl?this.Reveal.prev():this.Reveal.next():this.Reveal.right()):o>40&&n.up?(this.touchCaptured=!0,"linear"===t.navigationMode?this.Reveal.prev():this.Reveal.up()):o<-40&&n.down&&(this.touchCaptured=!0,"linear"===t.navigationMode?this.Reveal.next():this.Reveal.down()),t.embedded?(this.touchCaptured||this.Reveal.isVerticalSlide())&&e.preventDefault():e.preventDefault();}}}onTouchEnd(e){this.touchCaptured=!1;}onPointerDown(e){e.pointerType!==e.MSPOINTER_TYPE_TOUCH&&"touch"!==e.pointerType||(e.touches=[{clientX:e.clientX,clientY:e.clientY}],this.onTouchStart(e));}onPointerMove(e){e.pointerType!==e.MSPOINTER_TYPE_TOUCH&&"touch"!==e.pointerType||(e.touches=[{clientX:e.clientX,clientY:e.clientY}],this.onTouchMove(e));}onPointerUp(e){e.pointerType!==e.MSPOINTER_TYPE_TOUCH&&"touch"!==e.pointerType||(e.touches=[{clientX:e.clientX,clientY:e.clientY}],this.onTouchEnd(e));}}const U="focus",j="blur";class W{constructor(e){this.Reveal=e,this.onRevealPointerDown=this.onRevealPointerDown.bind(this),this.onDocumentPointerDown=this.onDocumentPointerDown.bind(this);}configure(e,t){e.embedded?this.blur():(this.focus(),this.unbind());}bind(){this.Reveal.getConfig().embedded&&this.Reveal.getRevealElement().addEventListener("pointerdown",this.onRevealPointerDown,!1);}unbind(){this.Reveal.getRevealElement().removeEventListener("pointerdown",this.onRevealPointerDown,!1),document.removeEventListener("pointerdown",this.onDocumentPointerDown,!1);}focus(){this.state!==U&&(this.Reveal.getRevealElement().classList.add("focused"),document.addEventListener("pointerdown",this.onDocumentPointerDown,!1)),this.state=U;}blur(){this.state!==j&&(this.Reveal.getRevealElement().classList.remove("focused"),document.removeEventListener("pointerdown",this.onDocumentPointerDown,!1)),this.state=j;}isFocused(){return this.state===U}destroy(){this.Reveal.getRevealElement().classList.remove("focused");}onRevealPointerDown(e){this.focus();}onDocumentPointerDown(e){let t=o(e.target,".reveal");t&&t===this.Reveal.getRevealElement()||this.blur();}}class K{constructor(e){this.Reveal=e;}render(){this.element=document.createElement("div"),this.element.className="speaker-notes",this.element.setAttribute("data-prevent-swipe",""),this.element.setAttribute("tabindex","0"),this.Reveal.getRevealElement().appendChild(this.element);}configure(e,t){e.showNotes&&this.element.setAttribute("data-layout","string"==typeof e.showNotes?e.showNotes:"inline");}update(){this.Reveal.getConfig().showNotes&&this.element&&this.Reveal.getCurrentSlide()&&!this.Reveal.print.isPrintingPDF()&&(this.element.innerHTML=this.getSlideNotes()||'<span class="notes-placeholder">No notes on this slide.</span>');}updateVisibility(){this.Reveal.getConfig().showNotes&&this.hasNotes()&&!this.Reveal.print.isPrintingPDF()?this.Reveal.getRevealElement().classList.add("show-notes"):this.Reveal.getRevealElement().classList.remove("show-notes");}hasNotes(){return this.Reveal.getSlidesElement().querySelectorAll("[data-notes], aside.notes").length>0}isSpeakerNotesWindow(){return !!window.location.search.match(/receiver/gi)}getSlideNotes(e=this.Reveal.getCurrentSlide()){if(e.hasAttribute("data-notes"))return e.getAttribute("data-notes");let t=e.querySelectorAll("aside.notes");return t?Array.from(t).map((e=>e.innerHTML)).join("\n"):null}destroy(){this.element.remove();}}class V{constructor(e,t){this.diameter=100,this.diameter2=this.diameter/2,this.thickness=6,this.playing=!1,this.progress=0,this.progressOffset=1,this.container=e,this.progressCheck=t,this.canvas=document.createElement("canvas"),this.canvas.className="playback",this.canvas.width=this.diameter,this.canvas.height=this.diameter,this.canvas.style.width=this.diameter2+"px",this.canvas.style.height=this.diameter2+"px",this.context=this.canvas.getContext("2d"),this.container.appendChild(this.canvas),this.render();}setPlaying(e){const t=this.playing;this.playing=e,!t&&this.playing?this.animate():this.render();}animate(){const e=this.progress;this.progress=this.progressCheck(),e>.8&&this.progress<.2&&(this.progressOffset=this.progress),this.render(),this.playing&&requestAnimationFrame(this.animate.bind(this));}render(){let e=this.playing?this.progress:0,t=this.diameter2-this.thickness,i=this.diameter2,s=this.diameter2,n=28;this.progressOffset+=.1*(1-this.progressOffset);const a=-Math.PI/2+e*(2*Math.PI),o=-Math.PI/2+this.progressOffset*(2*Math.PI);this.context.save(),this.context.clearRect(0,0,this.diameter,this.diameter),this.context.beginPath(),this.context.arc(i,s,t+4,0,2*Math.PI,!1),this.context.fillStyle="rgba( 0, 0, 0, 0.4 )",this.context.fill(),this.context.beginPath(),this.context.arc(i,s,t,0,2*Math.PI,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="rgba( 255, 255, 255, 0.2 )",this.context.stroke(),this.playing&&(this.context.beginPath(),this.context.arc(i,s,t,o,a,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="#fff",this.context.stroke()),this.context.translate(i-14,s-14),this.playing?(this.context.fillStyle="#fff",this.context.fillRect(0,0,10,n),this.context.fillRect(18,0,10,n)):(this.context.beginPath(),this.context.translate(4,0),this.context.moveTo(0,0),this.context.lineTo(24,14),this.context.lineTo(0,n),this.context.fillStyle="#fff",this.context.fill()),this.context.restore();}on(e,t){this.canvas.addEventListener(e,t,!1);}off(e,t){this.canvas.removeEventListener(e,t,!1);}destroy(){this.playing=!1,this.canvas.parentNode&&this.container.removeChild(this.canvas);}}var $={width:960,height:700,margin:.04,minScale:.2,maxScale:2,controls:!0,controlsTutorial:!0,controlsLayout:"bottom-right",controlsBackArrows:"faded",progress:!0,slideNumber:!1,showSlideNumber:"all",hashOneBasedIndex:!1,hash:!1,respondToHashChanges:!0,jumpToSlide:!0,history:!1,keyboard:!0,keyboardCondition:null,disableLayout:!1,overview:!0,center:!0,touch:!0,loop:!1,rtl:!1,navigationMode:"default",shuffle:!1,fragments:!0,fragmentInURL:!0,embedded:!1,help:!0,pause:!0,showNotes:!1,showHiddenSlides:!1,autoPlayMedia:null,preloadIframes:null,autoAnimate:!0,autoAnimateMatcher:null,autoAnimateEasing:"ease",autoAnimateDuration:1,autoAnimateUnmatched:!0,autoAnimateStyles:["opacity","color","background-color","padding","font-size","line-height","letter-spacing","border-width","border-color","border-radius","outline","outline-offset"],autoSlide:0,autoSlideStoppable:!0,autoSlideMethod:null,defaultTiming:null,mouseWheel:!1,previewLinks:!1,postMessage:!0,postMessageEvents:!1,focusBodyOnPageVisibilityChange:!0,transition:"slide",transitionSpeed:"default",backgroundTransition:"fade",parallaxBackgroundImage:"",parallaxBackgroundSize:"",parallaxBackgroundRepeat:"",parallaxBackgroundPosition:"",parallaxBackgroundHorizontal:null,parallaxBackgroundVertical:null,pdfMaxPagesPerSlide:Number.POSITIVE_INFINITY,pdfSeparateFragments:!0,pdfPageHeightOffset:-1,viewDistance:3,mobileViewDistance:2,display:"block",hideInactiveCursor:!0,hideCursorTime:5e3,sortFragmentsOnSync:!0,dependencies:[],plugins:[]};const X="4.6.0";function Y(a,l){arguments.length<2&&(l=arguments[0],a=document.querySelector(".reveal"));const h={};let u,v,p,m,f,E={},C=!1,x={hasNavigatedHorizontally:!1,hasNavigatedVertically:!1},H=[],U=1,j={layout:"",overview:""},Y={},_="idle",J=0,G=0,Q=-1,Z=!1,ee=new b(h),te=new y(h),ie=new w(h),se=new P(h),ne=new R(h),ae=new N(h),oe=new M(h),re=new I(h),le=new D(h),de=new T(h),ce=new F(h),he=new z(h),ue=new B(h),ge=new O(h),ve=new W(h),pe=new q(h),me=new K(h);function fe(e){if(!a)throw 'Unable to find presentation root (<div class="reveal">).';if(Y.wrapper=a,Y.slides=a.querySelector(".slides"),!Y.slides)throw 'Unable to find slides container (<div class="slides">).';return E={...$,...E,...l,...e,...d()},be(),window.addEventListener("load",We,!1),ue.load(E.plugins,E.dependencies).then(ye),new Promise((e=>h.on("ready",e)))}function be(){!0===E.embedded?Y.viewport=o(a,".reveal-viewport")||a:(Y.viewport=document.body,document.documentElement.classList.add("reveal-full-page")),Y.viewport.classList.add("reveal-viewport");}function ye(){C=!0,we(),Ee(),Ce(),ke(),Le(),lt(),xe(),le.readURL(),ne.update(!0),setTimeout((()=>{Y.slides.classList.remove("no-transition"),Y.wrapper.classList.add("ready"),Fe({type:"ready",data:{indexh:u,indexv:v,currentSlide:m}});}),1),ge.isPrintingPDF()&&(Ne(),"complete"===document.readyState?ge.setupPDF():window.addEventListener("load",(()=>{ge.setupPDF();})));}function we(){E.showHiddenSlides||t(Y.wrapper,'section[data-visibility="hidden"]').forEach((e=>{e.parentNode.removeChild(e);}));}function Ee(){Y.slides.classList.add("no-transition"),g?Y.wrapper.classList.add("no-hover"):Y.wrapper.classList.remove("no-hover"),ne.render(),te.render(),ie.render(),de.render(),ce.render(),me.render(),Y.pauseOverlay=r(Y.wrapper,"div","pause-overlay",E.controls?'<button class="resume-button">Resume presentation</button>':null),Y.statusElement=Re(),Y.wrapper.setAttribute("role","application");}function Re(){let e=Y.wrapper.querySelector(".aria-status");return e||(e=document.createElement("div"),e.style.position="absolute",e.style.height="1px",e.style.width="1px",e.style.overflow="hidden",e.style.clip="rect( 1px, 1px, 1px, 1px )",e.classList.add("aria-status"),e.setAttribute("aria-live","polite"),e.setAttribute("aria-atomic","true"),Y.wrapper.appendChild(e)),e}function Se(e){Y.statusElement.textContent=e;}function Ae(e){let t="";if(3===e.nodeType)t+=e.textContent;else if(1===e.nodeType){let i=e.getAttribute("aria-hidden"),s="none"===window.getComputedStyle(e).display;"true"===i||s||Array.from(e.childNodes).forEach((e=>{t+=Ae(e);}));}return t=t.trim(),""===t?"":t+" "}function ke(){setInterval((()=>{0===Y.wrapper.scrollTop&&0===Y.wrapper.scrollLeft||(Y.wrapper.scrollTop=0,Y.wrapper.scrollLeft=0);}),1e3);}function Le(){document.addEventListener("fullscreenchange",$t),document.addEventListener("webkitfullscreenchange",$t);}function Ce(){E.postMessage&&window.addEventListener("message",Ut,!1);}function xe(t){const s={...E};if("object"==typeof t&&e(E,t),!1===h.isReady())return;const n=Y.wrapper.querySelectorAll(S).length;Y.wrapper.classList.remove(s.transition),Y.wrapper.classList.add(E.transition),Y.wrapper.setAttribute("data-transition-speed",E.transitionSpeed),Y.wrapper.setAttribute("data-background-transition",E.backgroundTransition),Y.viewport.style.setProperty("--slide-width",E.width+"px"),Y.viewport.style.setProperty("--slide-height",E.height+"px"),E.shuffle&&dt(),i(Y.wrapper,"embedded",E.embedded),i(Y.wrapper,"rtl",E.rtl),i(Y.wrapper,"center",E.center),!1===E.pause&&Ze(),E.previewLinks?(He(),Be("[data-preview-link=false]")):(Be(),He("[data-preview-link]:not([data-preview-link=false])")),se.reset(),f&&(f.destroy(),f=null),n>1&&E.autoSlide&&E.autoSlideStoppable&&(f=new V(Y.wrapper,(()=>Math.min(Math.max((Date.now()-Q)/J,0),1))),f.on("click",Yt),Z=!1),"default"!==E.navigationMode?Y.wrapper.setAttribute("data-navigation-mode",E.navigationMode):Y.wrapper.removeAttribute("data-navigation-mode"),me.configure(E,s),ve.configure(E,s),he.configure(E,s),de.configure(E,s),ce.configure(E,s),re.configure(E,s),ae.configure(E,s),te.configure(E,s),ot();}function Pe(){window.addEventListener("resize",Kt,!1),E.touch&&pe.bind(),E.keyboard&&re.bind(),E.progress&&ce.bind(),E.respondToHashChanges&&le.bind(),de.bind(),ve.bind(),Y.slides.addEventListener("click",Wt,!1),Y.slides.addEventListener("transitionend",jt,!1),Y.pauseOverlay.addEventListener("click",Ze,!1),E.focusBodyOnPageVisibilityChange&&document.addEventListener("visibilitychange",Vt,!1);}function Ne(){pe.unbind(),ve.unbind(),re.unbind(),de.unbind(),ce.unbind(),le.unbind(),window.removeEventListener("resize",Kt,!1),Y.slides.removeEventListener("click",Wt,!1),Y.slides.removeEventListener("transitionend",jt,!1),Y.pauseOverlay.removeEventListener("click",Ze,!1);}function Me(){Ne(),Mt(),Be(),me.destroy(),ve.destroy(),ue.destroy(),he.destroy(),de.destroy(),ce.destroy(),ne.destroy(),te.destroy(),ie.destroy(),document.removeEventListener("fullscreenchange",$t),document.removeEventListener("webkitfullscreenchange",$t),document.removeEventListener("visibilitychange",Vt,!1),window.removeEventListener("message",Ut,!1),window.removeEventListener("load",We,!1),Y.pauseOverlay&&Y.pauseOverlay.remove(),Y.statusElement&&Y.statusElement.remove(),document.documentElement.classList.remove("reveal-full-page"),Y.wrapper.classList.remove("ready","center","has-horizontal-slides","has-vertical-slides"),Y.wrapper.removeAttribute("data-transition-speed"),Y.wrapper.removeAttribute("data-background-transition"),Y.viewport.classList.remove("reveal-viewport"),Y.viewport.style.removeProperty("--slide-width"),Y.viewport.style.removeProperty("--slide-height"),Y.slides.style.removeProperty("width"),Y.slides.style.removeProperty("height"),Y.slides.style.removeProperty("zoom"),Y.slides.style.removeProperty("left"),Y.slides.style.removeProperty("top"),Y.slides.style.removeProperty("bottom"),Y.slides.style.removeProperty("right"),Y.slides.style.removeProperty("transform"),Array.from(Y.wrapper.querySelectorAll(S)).forEach((e=>{e.style.removeProperty("display"),e.style.removeProperty("top"),e.removeAttribute("hidden"),e.removeAttribute("aria-hidden");}));}function Ie(e,t,i){a.addEventListener(e,t,i);}function De(e,t,i){a.removeEventListener(e,t,i);}function Te(e){"string"==typeof e.layout&&(j.layout=e.layout),"string"==typeof e.overview&&(j.overview=e.overview),j.layout?n(Y.slides,j.layout+" "+j.overview):n(Y.slides,j.overview);}function Fe({target:t=Y.wrapper,type:i,data:s,bubbles:n=!0}){let a=document.createEvent("HTMLEvents",1,2);return a.initEvent(i,n,!0),e(a,s),t.dispatchEvent(a),t===Y.wrapper&&ze(i),a}function ze(t,i){if(E.postMessageEvents&&window.parent!==window.self){let s={namespace:"reveal",eventName:t,state:xt()};e(s,i),window.parent.postMessage(JSON.stringify(s),"*");}}function He(e="a"){Array.from(Y.wrapper.querySelectorAll(e)).forEach((e=>{/^(http|www)/gi.test(e.getAttribute("href"))&&e.addEventListener("click",Xt,!1);}));}function Be(e="a"){Array.from(Y.wrapper.querySelectorAll(e)).forEach((e=>{/^(http|www)/gi.test(e.getAttribute("href"))&&e.removeEventListener("click",Xt,!1);}));}function Oe(e){je(),Y.overlay=document.createElement("div"),Y.overlay.classList.add("overlay"),Y.overlay.classList.add("overlay-preview"),Y.wrapper.appendChild(Y.overlay),Y.overlay.innerHTML=`<header>\n\t\t\t\t<a class="close" href="#"><span class="icon"></span></a>\n\t\t\t\t<a class="external" href="${e}" target="_blank"><span class="icon"></span></a>\n\t\t\t</header>\n\t\t\t<div class="spinner"></div>\n\t\t\t<div class="viewport">\n\t\t\t\t<iframe src="${e}"></iframe>\n\t\t\t\t<small class="viewport-inner">\n\t\t\t\t\t<span class="x-frame-error">Unable to load iframe. This is likely due to the site's policy (x-frame-options).</span>\n\t\t\t\t</small>\n\t\t\t</div>`,Y.overlay.querySelector("iframe").addEventListener("load",(e=>{Y.overlay.classList.add("loaded");}),!1),Y.overlay.querySelector(".close").addEventListener("click",(e=>{je(),e.preventDefault();}),!1),Y.overlay.querySelector(".external").addEventListener("click",(e=>{je();}),!1);}function qe(e){"boolean"==typeof e?e?Ue():je():Y.overlay?je():Ue();}function Ue(){if(E.help){je(),Y.overlay=document.createElement("div"),Y.overlay.classList.add("overlay"),Y.overlay.classList.add("overlay-help"),Y.wrapper.appendChild(Y.overlay);let e='<p class="title">Keyboard Shortcuts</p><br/>',t=re.getShortcuts(),i=re.getBindings();e+="<table><th>KEY</th><th>ACTION</th>";for(let i in t)e+=`<tr><td>${i}</td><td>${t[i]}</td></tr>`;for(let t in i)i[t].key&&i[t].description&&(e+=`<tr><td>${i[t].key}</td><td>${i[t].description}</td></tr>`);e+="</table>",Y.overlay.innerHTML=`\n\t\t\t\t<header>\n\t\t\t\t\t<a class="close" href="#"><span class="icon"></span></a>\n\t\t\t\t</header>\n\t\t\t\t<div class="viewport">\n\t\t\t\t\t<div class="viewport-inner">${e}</div>\n\t\t\t\t</div>\n\t\t\t`,Y.overlay.querySelector(".close").addEventListener("click",(e=>{je(),e.preventDefault();}),!1);}}function je(){return !!Y.overlay&&(Y.overlay.parentNode.removeChild(Y.overlay),Y.overlay=null,!0)}function We(){if(Y.wrapper&&!ge.isPrintingPDF()){if(!E.disableLayout){g&&!E.embedded&&document.documentElement.style.setProperty("--vh",.01*window.innerHeight+"px");const e=Ve(),t=U;Ke(E.width,E.height),Y.slides.style.width=e.width+"px",Y.slides.style.height=e.height+"px",U=Math.min(e.presentationWidth/e.width,e.presentationHeight/e.height),U=Math.max(U,E.minScale),U=Math.min(U,E.maxScale),1===U?(Y.slides.style.zoom="",Y.slides.style.left="",Y.slides.style.top="",Y.slides.style.bottom="",Y.slides.style.right="",Te({layout:""})):(Y.slides.style.zoom="",Y.slides.style.left="50%",Y.slides.style.top="50%",Y.slides.style.bottom="auto",Y.slides.style.right="auto",Te({layout:"translate(-50%, -50%) scale("+U+")"}));const i=Array.from(Y.wrapper.querySelectorAll(S));for(let t=0,s=i.length;t<s;t++){const s=i[t];"none"!==s.style.display&&(E.center||s.classList.contains("center")?s.classList.contains("stack")?s.style.top=0:s.style.top=Math.max((e.height-s.scrollHeight)/2,0)+"px":s.style.top="");}t!==U&&Fe({type:"resize",data:{oldScale:t,scale:U,size:e}});}Y.viewport.style.setProperty("--slide-scale",U),ce.update(),ne.updateParallax(),oe.isActive()&&oe.update();}}function Ke(e,i){t(Y.slides,"section > .stretch, section > .r-stretch").forEach((t=>{let s=c(t,i);if(/(img|video)/gi.test(t.nodeName)){const i=t.naturalWidth||t.videoWidth,n=t.naturalHeight||t.videoHeight,a=Math.min(e/i,s/n);t.style.width=i*a+"px",t.style.height=n*a+"px";}else t.style.width=e+"px",t.style.height=s+"px";}));}function Ve(e,t){let i=E.width,s=E.height;E.disableLayout&&(i=Y.slides.offsetWidth,s=Y.slides.offsetHeight);const n={width:i,height:s,presentationWidth:e||Y.wrapper.offsetWidth,presentationHeight:t||Y.wrapper.offsetHeight};return n.presentationWidth-=n.presentationWidth*E.margin,n.presentationHeight-=n.presentationHeight*E.margin,"string"==typeof n.width&&/%$/.test(n.width)&&(n.width=parseInt(n.width,10)/100*n.presentationWidth),"string"==typeof n.height&&/%$/.test(n.height)&&(n.height=parseInt(n.height,10)/100*n.presentationHeight),n}function $e(e,t){"object"==typeof e&&"function"==typeof e.setAttribute&&e.setAttribute("data-previous-indexv",t||0);}function Xe(e){if("object"==typeof e&&"function"==typeof e.setAttribute&&e.classList.contains("stack")){const t=e.hasAttribute("data-start-indexv")?"data-start-indexv":"data-previous-indexv";return parseInt(e.getAttribute(t)||0,10)}return 0}function Ye(e=m){return e&&e.parentNode&&!!e.parentNode.nodeName.match(/section/i)}function _e(){return !(!m||!Ye(m))&&!m.nextElementSibling}function Je(){return 0===u&&0===v}function Ge(){return !!m&&(!m.nextElementSibling&&(!Ye(m)||!m.parentNode.nextElementSibling))}function Qe(){if(E.pause){const e=Y.wrapper.classList.contains("paused");Mt(),Y.wrapper.classList.add("paused"),!1===e&&Fe({type:"paused"});}}function Ze(){const e=Y.wrapper.classList.contains("paused");Y.wrapper.classList.remove("paused"),Nt(),e&&Fe({type:"resumed"});}function et(e){"boolean"==typeof e?e?Qe():Ze():tt()?Ze():Qe();}function tt(){return Y.wrapper.classList.contains("paused")}function it(e){"boolean"==typeof e?e?ie.show():ie.hide():ie.isVisible()?ie.hide():ie.show();}function st(e){"boolean"==typeof e?e?Dt():It():Z?Dt():It();}function nt(){return !(!J||Z)}function at(e,t,i,s){if(Fe({type:"beforeslidechange",data:{indexh:void 0===e?u:e,indexv:void 0===t?v:t,origin:s}}).defaultPrevented)return;p=m;const n=Y.wrapper.querySelectorAll(A);if(0===n.length)return;void 0!==t||oe.isActive()||(t=Xe(n[e])),p&&p.parentNode&&p.parentNode.classList.contains("stack")&&$e(p.parentNode,v);const a=H.concat();H.length=0;let o=u||0,r=v||0;u=ct(A,void 0===e?u:e),v=ct(k,void 0===t?v:t);let l=u!==o||v!==r;l||(p=null);let d=n[u],c=d.querySelectorAll("section");m=c[v]||d;let h=!1;l&&p&&m&&!oe.isActive()&&(p.hasAttribute("data-auto-animate")&&m.hasAttribute("data-auto-animate")&&p.getAttribute("data-auto-animate-id")===m.getAttribute("data-auto-animate-id")&&!(u>o||v>r?m:p).hasAttribute("data-auto-animate-restart")&&(h=!0,Y.slides.classList.add("disable-slide-transitions")),_="running"),gt(),We(),oe.isActive()&&oe.update(),void 0!==i&&ae.goto(i),p&&p!==m&&(p.classList.remove("present"),p.setAttribute("aria-hidden","true"),Je()&&setTimeout((()=>{Et().forEach((e=>{$e(e,0);}));}),0));e:for(let e=0,t=H.length;e<t;e++){for(let t=0;t<a.length;t++)if(a[t]===H[e]){a.splice(t,1);continue e}Y.viewport.classList.add(H[e]),Fe({type:H[e]});}for(;a.length;)Y.viewport.classList.remove(a.pop());l&&Fe({type:"slidechanged",data:{indexh:u,indexv:v,previousSlide:p,currentSlide:m,origin:s}}),!l&&p||(ee.stopEmbeddedContent(p),ee.startEmbeddedContent(m)),requestAnimationFrame((()=>{Se(Ae(m));})),ce.update(),de.update(),me.update(),ne.update(),ne.updateParallax(),te.update(),ae.update(),le.writeURL(),Nt(),h&&(setTimeout((()=>{Y.slides.classList.remove("disable-slide-transitions");}),0),E.autoAnimate&&se.run(p,m));}function ot(){Ne(),Pe(),We(),J=E.autoSlide,Nt(),ne.create(),le.writeURL(),!0===E.sortFragmentsOnSync&&ae.sortAll(),de.update(),ce.update(),gt(),me.update(),me.updateVisibility(),ne.update(!0),te.update(),ee.formatEmbeddedContent(),!1===E.autoPlayMedia?ee.stopEmbeddedContent(m,{unloadIframes:!1}):ee.startEmbeddedContent(m),oe.isActive()&&oe.layout();}function rt(e=m){ne.sync(e),ae.sync(e),ee.load(e),ne.update(),me.update();}function lt(){yt().forEach((e=>{t(e,"section").forEach(((e,t)=>{t>0&&(e.classList.remove("present"),e.classList.remove("past"),e.classList.add("future"),e.setAttribute("aria-hidden","true"));}));}));}function dt(e=yt()){e.forEach(((t,i)=>{let s=e[Math.floor(Math.random()*e.length)];s.parentNode===t.parentNode&&t.parentNode.insertBefore(t,s);let n=t.querySelectorAll("section");n.length&&dt(n);}));}function ct(e,i){let s=t(Y.wrapper,e),n=s.length,a=ge.isPrintingPDF(),o=!1,r=!1;if(n){E.loop&&(i>=n&&(o=!0),(i%=n)<0&&(i=n+i,r=!0)),i=Math.max(Math.min(i,n-1),0);for(let e=0;e<n;e++){let t=s[e],n=E.rtl&&!Ye(t);t.classList.remove("past"),t.classList.remove("present"),t.classList.remove("future"),t.setAttribute("hidden",""),t.setAttribute("aria-hidden","true"),t.querySelector("section")&&t.classList.add("stack"),a?t.classList.add("present"):e<i?(t.classList.add(n?"future":"past"),E.fragments&&ht(t)):e>i?(t.classList.add(n?"past":"future"),E.fragments&&ut(t)):e===i&&E.fragments&&(o?ut(t):r&&ht(t));}let e=s[i],t=e.classList.contains("present");e.classList.add("present"),e.removeAttribute("hidden"),e.removeAttribute("aria-hidden"),t||Fe({target:e,type:"visible",bubbles:!1});let l=e.getAttribute("data-state");l&&(H=H.concat(l.split(" ")));}else i=0;return i}function ht(e){t(e,".fragment").forEach((e=>{e.classList.add("visible"),e.classList.remove("current-fragment");}));}function ut(e){t(e,".fragment.visible").forEach((e=>{e.classList.remove("visible","current-fragment");}));}function gt(){let e,i,s=yt(),n=s.length;if(n&&void 0!==u){let a=oe.isActive()?10:E.viewDistance;g&&(a=oe.isActive()?6:E.mobileViewDistance),ge.isPrintingPDF()&&(a=Number.MAX_VALUE);for(let o=0;o<n;o++){let r=s[o],l=t(r,"section"),d=l.length;if(e=Math.abs((u||0)-o)||0,E.loop&&(e=Math.abs(((u||0)-o)%(n-a))||0),e<a?ee.load(r):ee.unload(r),d){let t=Xe(r);for(let s=0;s<d;s++){let n=l[s];i=o===(u||0)?Math.abs((v||0)-s):Math.abs(s-t),e+i<a?ee.load(n):ee.unload(n);}}}St()?Y.wrapper.classList.add("has-vertical-slides"):Y.wrapper.classList.remove("has-vertical-slides"),Rt()?Y.wrapper.classList.add("has-horizontal-slides"):Y.wrapper.classList.remove("has-horizontal-slides");}}function vt({includeFragments:e=!1}={}){let t=Y.wrapper.querySelectorAll(A),i=Y.wrapper.querySelectorAll(k),s={left:u>0,right:u<t.length-1,up:v>0,down:v<i.length-1};if(E.loop&&(t.length>1&&(s.left=!0,s.right=!0),i.length>1&&(s.up=!0,s.down=!0)),t.length>1&&"linear"===E.navigationMode&&(s.right=s.right||s.down,s.left=s.left||s.up),!0===e){let e=ae.availableRoutes();s.left=s.left||e.prev,s.up=s.up||e.prev,s.down=s.down||e.next,s.right=s.right||e.next;}if(E.rtl){let e=s.left;s.left=s.right,s.right=e;}return s}function pt(e=m){let t=yt(),i=0;e:for(let s=0;s<t.length;s++){let n=t[s],a=n.querySelectorAll("section");for(let t=0;t<a.length;t++){if(a[t]===e)break e;"uncounted"!==a[t].dataset.visibility&&i++;}if(n===e)break;!1===n.classList.contains("stack")&&"uncounted"!==n.dataset.visibility&&i++;}return i}function mt(){let e=kt(),t=pt();if(m){let e=m.querySelectorAll(".fragment");if(e.length>0){let i=.9;t+=m.querySelectorAll(".fragment.visible").length/e.length*i;}}return Math.min(t/(e-1),1)}function ft(e){let i,s=u,n=v;if(e){let i=Ye(e),a=i?e.parentNode:e,o=yt();s=Math.max(o.indexOf(a),0),n=void 0,i&&(n=Math.max(t(e.parentNode,"section").indexOf(e),0));}if(!e&&m){if(m.querySelectorAll(".fragment").length>0){let e=m.querySelector(".current-fragment");i=e&&e.hasAttribute("data-fragment-index")?parseInt(e.getAttribute("data-fragment-index"),10):m.querySelectorAll(".fragment.visible").length-1;}}return {h:s,v:n,f:i}}function bt(){return t(Y.wrapper,S+':not(.stack):not([data-visibility="uncounted"])')}function yt(){return t(Y.wrapper,A)}function wt(){return t(Y.wrapper,".slides>section>section")}function Et(){return t(Y.wrapper,A+".stack")}function Rt(){return yt().length>1}function St(){return wt().length>1}function At(){return bt().map((e=>{let t={};for(let i=0;i<e.attributes.length;i++){let s=e.attributes[i];t[s.name]=s.value;}return t}))}function kt(){return bt().length}function Lt(e,t){let i=yt()[e],s=i&&i.querySelectorAll("section");return s&&s.length&&"number"==typeof t?s?s[t]:void 0:i}function Ct(e,t){let i="number"==typeof e?Lt(e,t):e;if(i)return i.slideBackgroundElement}function xt(){let e=ft();return {indexh:e.h,indexv:e.v,indexf:e.f,paused:tt(),overview:oe.isActive()}}function Pt(e){if("object"==typeof e){at(s(e.indexh),s(e.indexv),s(e.indexf));let t=s(e.paused),i=s(e.overview);"boolean"==typeof t&&t!==tt()&&et(t),"boolean"==typeof i&&i!==oe.isActive()&&oe.toggle(i);}}function Nt(){if(Mt(),m&&!1!==E.autoSlide){let e=m.querySelector(".current-fragment[data-autoslide]"),i=e?e.getAttribute("data-autoslide"):null,s=m.parentNode?m.parentNode.getAttribute("data-autoslide"):null,n=m.getAttribute("data-autoslide");i?J=parseInt(i,10):n?J=parseInt(n,10):s?J=parseInt(s,10):(J=E.autoSlide,0===m.querySelectorAll(".fragment").length&&t(m,"video, audio").forEach((e=>{e.hasAttribute("data-autoplay")&&J&&1e3*e.duration/e.playbackRate>J&&(J=1e3*e.duration/e.playbackRate+1e3);}))),!J||Z||tt()||oe.isActive()||Ge()&&!ae.availableRoutes().next&&!0!==E.loop||(G=setTimeout((()=>{"function"==typeof E.autoSlideMethod?E.autoSlideMethod():Ot(),Nt();}),J),Q=Date.now()),f&&f.setPlaying(-1!==G);}}function Mt(){clearTimeout(G),G=-1;}function It(){J&&!Z&&(Z=!0,Fe({type:"autoslidepaused"}),clearTimeout(G),f&&f.setPlaying(!1));}function Dt(){J&&Z&&(Z=!1,Fe({type:"autoslideresumed"}),Nt());}function Tt({skipFragments:e=!1}={}){x.hasNavigatedHorizontally=!0,E.rtl?(oe.isActive()||e||!1===ae.next())&&vt().left&&at(u+1,"grid"===E.navigationMode?v:void 0):(oe.isActive()||e||!1===ae.prev())&&vt().left&&at(u-1,"grid"===E.navigationMode?v:void 0);}function Ft({skipFragments:e=!1}={}){x.hasNavigatedHorizontally=!0,E.rtl?(oe.isActive()||e||!1===ae.prev())&&vt().right&&at(u-1,"grid"===E.navigationMode?v:void 0):(oe.isActive()||e||!1===ae.next())&&vt().right&&at(u+1,"grid"===E.navigationMode?v:void 0);}function zt({skipFragments:e=!1}={}){(oe.isActive()||e||!1===ae.prev())&&vt().up&&at(u,v-1);}function Ht({skipFragments:e=!1}={}){x.hasNavigatedVertically=!0,(oe.isActive()||e||!1===ae.next())&&vt().down&&at(u,v+1);}function Bt({skipFragments:e=!1}={}){if(e||!1===ae.prev())if(vt().up)zt({skipFragments:e});else {let i;if(i=E.rtl?t(Y.wrapper,A+".future").pop():t(Y.wrapper,A+".past").pop(),i&&i.classList.contains("stack")){let e=i.querySelectorAll("section").length-1||void 0;at(u-1,e);}else Tt({skipFragments:e});}}function Ot({skipFragments:e=!1}={}){if(x.hasNavigatedHorizontally=!0,x.hasNavigatedVertically=!0,e||!1===ae.next()){let t=vt();t.down&&t.right&&E.loop&&_e()&&(t.down=!1),t.down?Ht({skipFragments:e}):E.rtl?Tt({skipFragments:e}):Ft({skipFragments:e});}}function qt(e){E.autoSlideStoppable&&It();}function Ut(e){let t=e.data;if("string"==typeof t&&"{"===t.charAt(0)&&"}"===t.charAt(t.length-1)&&(t=JSON.parse(t),t.method&&"function"==typeof h[t.method]))if(!1===L.test(t.method)){const e=h[t.method].apply(h,t.args);ze("callback",{method:t.method,result:e});}else console.warn('reveal.js: "'+t.method+'" is is blacklisted from the postMessage API');}function jt(e){"running"===_&&/section/gi.test(e.target.nodeName)&&(_="idle",Fe({type:"slidetransitionend",data:{indexh:u,indexv:v,previousSlide:p,currentSlide:m}}));}function Wt(e){const t=o(e.target,'a[href^="#"]');if(t){const i=t.getAttribute("href"),s=le.getIndicesFromHash(i);s&&(h.slide(s.h,s.v,s.f),e.preventDefault());}}function Kt(e){We();}function Vt(e){!1===document.hidden&&document.activeElement!==document.body&&("function"==typeof document.activeElement.blur&&document.activeElement.blur(),document.body.focus());}function $t(e){(document.fullscreenElement||document.webkitFullscreenElement)===Y.wrapper&&(e.stopImmediatePropagation(),setTimeout((()=>{h.layout(),h.focus.focus();}),1));}function Xt(e){if(e.currentTarget&&e.currentTarget.hasAttribute("href")){let t=e.currentTarget.getAttribute("href");t&&(Oe(t),e.preventDefault());}}function Yt(e){Ge()&&!1===E.loop?(at(0,0),Dt()):Z?Dt():It();}const _t={VERSION:X,initialize:fe,configure:xe,destroy:Me,sync:ot,syncSlide:rt,syncFragments:ae.sync.bind(ae),slide:at,left:Tt,right:Ft,up:zt,down:Ht,prev:Bt,next:Ot,navigateLeft:Tt,navigateRight:Ft,navigateUp:zt,navigateDown:Ht,navigatePrev:Bt,navigateNext:Ot,navigateFragment:ae.goto.bind(ae),prevFragment:ae.prev.bind(ae),nextFragment:ae.next.bind(ae),on:Ie,off:De,addEventListener:Ie,removeEventListener:De,layout:We,shuffle:dt,availableRoutes:vt,availableFragments:ae.availableRoutes.bind(ae),toggleHelp:qe,toggleOverview:oe.toggle.bind(oe),togglePause:et,toggleAutoSlide:st,toggleJumpToSlide:it,isFirstSlide:Je,isLastSlide:Ge,isLastVerticalSlide:_e,isVerticalSlide:Ye,isPaused:tt,isAutoSliding:nt,isSpeakerNotes:me.isSpeakerNotesWindow.bind(me),isOverview:oe.isActive.bind(oe),isFocused:ve.isFocused.bind(ve),isPrintingPDF:ge.isPrintingPDF.bind(ge),isReady:()=>C,loadSlide:ee.load.bind(ee),unloadSlide:ee.unload.bind(ee),startEmbeddedContent:()=>ee.startEmbeddedContent(m),stopEmbeddedContent:()=>ee.stopEmbeddedContent(m,{unloadIframes:!1}),showPreview:Oe,hidePreview:je,addEventListeners:Pe,removeEventListeners:Ne,dispatchEvent:Fe,getState:xt,setState:Pt,getProgress:mt,getIndices:ft,getSlidesAttributes:At,getSlidePastCount:pt,getTotalSlides:kt,getSlide:Lt,getPreviousSlide:()=>p,getCurrentSlide:()=>m,getSlideBackground:Ct,getSlideNotes:me.getSlideNotes.bind(me),getSlides:bt,getHorizontalSlides:yt,getVerticalSlides:wt,hasHorizontalSlides:Rt,hasVerticalSlides:St,hasNavigatedHorizontally:()=>x.hasNavigatedHorizontally,hasNavigatedVertically:()=>x.hasNavigatedVertically,addKeyBinding:re.addKeyBinding.bind(re),removeKeyBinding:re.removeKeyBinding.bind(re),triggerKey:re.triggerKey.bind(re),registerKeyboardShortcut:re.registerKeyboardShortcut.bind(re),getComputedSlideSize:Ve,getScale:()=>U,getConfig:()=>E,getQueryHash:d,getSlidePath:le.getHash.bind(le),getRevealElement:()=>a,getSlidesElement:()=>Y.slides,getViewportElement:()=>Y.viewport,getBackgroundsElement:()=>ne.element,registerPlugin:ue.registerPlugin.bind(ue),hasPlugin:ue.hasPlugin.bind(ue),getPlugin:ue.getPlugin.bind(ue),getPlugins:ue.getRegisteredPlugins.bind(ue)};return e(h,{..._t,announceStatus:Se,getStatusText:Ae,print:ge,focus:ve,progress:ce,controls:de,location:le,overview:oe,fragments:ae,slideContent:ee,slideNumber:te,onUserInput:qt,closeOverlay:je,updateSlidesVisibility:gt,layoutSlideContents:Ke,transformSlides:Te,cueAutoSlide:Nt,cancelAutoSlide:Mt}),_t}let _=Y,J=[];_.initialize=e=>(Object.assign(_,new Y(document.querySelector(".reveal"),e)),J.map((e=>e(_))),_.initialize()),["configure","on","off","addEventListener","removeEventListener","registerPlugin"].forEach((e=>{_[e]=(...t)=>{J.push((i=>i[e].call(null,...t)));};})),_.isReady=()=>!1,_.VERSION=X;

/*!
 * The reveal.js markdown plugin. Handles parsing of
 * markdown inside of presentations as well as loading
 * of external markdown documents.
 */


let marked;


await window.interpretate.shared.Marked.load();
marked = new window.interpretate.shared.Marked.default();



const DEFAULT_SLIDE_SEPARATOR = '\r?\n---\r?\n',
	  DEFAULT_VERTICAL_SEPARATOR = null,
	  DEFAULT_NOTES_SEPARATOR = '^\s*notes?:',
	  DEFAULT_ELEMENT_ATTRIBUTES_SEPARATOR = '\\\.element\\\s*?(.+?)$',
	  DEFAULT_SLIDE_ATTRIBUTES_SEPARATOR = '\\\.slide:\\\s*?(\\\S.+?)$';

const SCRIPT_END_PLACEHOLDER = '__SCRIPT_END__';

// match an optional line number offset and highlight line numbers
// [<line numbers>] or [<offset>: <line numbers>]
const CODE_LINE_NUMBER_REGEX = /\[\s*((\d*):)?\s*([\s\d,|-]*)\]/;

const HTML_ESCAPE_MAP = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};

const Plugin = () => {

	// The reveal.js instance this plugin is attached to
	let deck;

	/**
	 * Retrieves the markdown contents of a slide section
	 * element. Normalizes leading tabs/whitespace.
	 */
	function getMarkdownFromSlide( section ) {

		// look for a <script> or <textarea data-template> wrapper
		const template = section.querySelector( '[data-template]' ) || section.querySelector( 'script' );

		// strip leading whitespace so it isn't evaluated as code
		let text = ( template || section ).textContent;

		// restore script end tags
		text = text.replace( new RegExp( SCRIPT_END_PLACEHOLDER, 'g' ), '</script>' );

		const leadingWs = text.match( /^\n?(\s*)/ )[1].length,
			leadingTabs = text.match( /^\n?(\t*)/ )[1].length;

		if( leadingTabs > 0 ) {
			text = text.replace( new RegExp('\\n?\\t{' + leadingTabs + '}(.*)','g'), function(m, p1) { return '\n' + p1 ; } );
		}
		else if( leadingWs > 1 ) {
			text = text.replace( new RegExp('\\n? {' + leadingWs + '}(.*)', 'g'), function(m, p1) { return '\n' + p1 ; } );
		}

		return text;

	}

	/**
	 * Given a markdown slide section element, this will
	 * return all arguments that aren't related to markdown
	 * parsing. Used to forward any other user-defined arguments
	 * to the output markdown slide.
	 */
	function getForwardedAttributes( section ) {

		const attributes = section.attributes;
		const result = [];

		for( let i = 0, len = attributes.length; i < len; i++ ) {
			const name = attributes[i].name,
				value = attributes[i].value;

			// disregard attributes that are used for markdown loading/parsing
			if( /data\-(markdown|separator|vertical|notes)/gi.test( name ) ) continue;

			if( value ) {
				result.push( name + '="' + value + '"' );
			}
			else {
				result.push( name );
			}
		}

		return result.join( ' ' );

	}

	/**
	 * Inspects the given options and fills out default
	 * values for what's not defined.
	 */
	function getSlidifyOptions( options ) {
		const markdownConfig = deck.getConfig().markdown;

		options = options || {};
		options.separator = options.separator || markdownConfig?.separator || DEFAULT_SLIDE_SEPARATOR;
		options.verticalSeparator = options.verticalSeparator || markdownConfig?.verticalSeparator || DEFAULT_VERTICAL_SEPARATOR;
		options.notesSeparator = options.notesSeparator || markdownConfig?.notesSeparator || DEFAULT_NOTES_SEPARATOR;
		options.attributes = options.attributes || '';

		return options;

	}

	/**
	 * Helper function for constructing a markdown slide.
	 */
	function createMarkdownSlide( content, options ) {

		options = getSlidifyOptions( options );

		const notesMatch = content.split( new RegExp( options.notesSeparator, 'mgi' ) );

		if( notesMatch.length === 2 ) {
			content = notesMatch[0] + '<aside class="notes">' + marked.parse(notesMatch[1].trim()) + '</aside>';
		}

		// prevent script end tags in the content from interfering
		// with parsing
		content = content.replace( /<\/script>/g, SCRIPT_END_PLACEHOLDER );

		return '<script type="text/template">' + content + '</script>';

	}

	/**
	 * Parses a data string into multiple slides based
	 * on the passed in separator arguments.
	 */
	function slidify( markdown, options ) {

		options = getSlidifyOptions( options );

		const separatorRegex = new RegExp( options.separator + ( options.verticalSeparator ? '|' + options.verticalSeparator : '' ), 'mg' ),
			horizontalSeparatorRegex = new RegExp( options.separator );

		let matches,
			lastIndex = 0,
			isHorizontal,
			wasHorizontal = true,
			content,
			sectionStack = [];

		// iterate until all blocks between separators are stacked up
		while( matches = separatorRegex.exec( markdown ) ) {

			// determine direction (horizontal by default)
			isHorizontal = horizontalSeparatorRegex.test( matches[0] );

			if( !isHorizontal && wasHorizontal ) {
				// create vertical stack
				sectionStack.push( [] );
			}

			// pluck slide content from markdown input
			content = markdown.substring( lastIndex, matches.index );

			if( isHorizontal && wasHorizontal ) {
				// add to horizontal stack
				sectionStack.push( content );
			}
			else {
				// add to vertical stack
				sectionStack[sectionStack.length-1].push( content );
			}

			lastIndex = separatorRegex.lastIndex;
			wasHorizontal = isHorizontal;
		}

		// add the remaining slide
		( wasHorizontal ? sectionStack : sectionStack[sectionStack.length-1] ).push( markdown.substring( lastIndex ) );

		let markdownSections = '';

		// flatten the hierarchical stack, and insert <section data-markdown> tags
		for( let i = 0, len = sectionStack.length; i < len; i++ ) {
			// vertical
			if( sectionStack[i] instanceof Array ) {
				markdownSections += '<section '+ options.attributes +'>';

				sectionStack[i].forEach( function( child ) {
					markdownSections += '<section data-markdown>' + createMarkdownSlide( child, options ) + '</section>';
				} );

				markdownSections += '</section>';
			}
			else {
				markdownSections += '<section '+ options.attributes +' data-markdown>' + createMarkdownSlide( sectionStack[i], options ) + '</section>';
			}
		}

		return markdownSections;

	}

	/**
	 * Parses any current data-markdown slides, splits
	 * multi-slide markdown into separate sections and
	 * handles loading of external markdown.
	 */
	function processSlides( scope ) {

		return new Promise( function( resolve ) {

			const externalPromises = [];

			[].slice.call( scope.querySelectorAll( 'section[data-markdown]:not([data-markdown-parsed])') ).forEach( function( section, i ) {

				if( section.getAttribute( 'data-markdown' ).length ) {

					externalPromises.push( loadExternalMarkdown( section ).then(

						// Finished loading external file
						function( xhr, url ) {
							section.outerHTML = slidify( xhr.responseText, {
								separator: section.getAttribute( 'data-separator' ),
								verticalSeparator: section.getAttribute( 'data-separator-vertical' ),
								notesSeparator: section.getAttribute( 'data-separator-notes' ),
								attributes: getForwardedAttributes( section )
							});
						},

						// Failed to load markdown
						function( xhr, url ) {
							section.outerHTML = '<section data-state="alert">' +
								'ERROR: The attempt to fetch ' + url + ' failed with HTTP status ' + xhr.status + '.' +
								'Check your browser\'s JavaScript console for more details.' +
								'<p>Remember that you need to serve the presentation HTML from a HTTP server.</p>' +
								'</section>';
						}

					) );

				}
				else {

					section.outerHTML = slidify( getMarkdownFromSlide( section ), {
						separator: section.getAttribute( 'data-separator' ),
						verticalSeparator: section.getAttribute( 'data-separator-vertical' ),
						notesSeparator: section.getAttribute( 'data-separator-notes' ),
						attributes: getForwardedAttributes( section )
					});

				}

			});

			Promise.all( externalPromises ).then( resolve );

		} );

	}

	function loadExternalMarkdown( section ) {

		return new Promise( function( resolve, reject ) {

			const xhr = new XMLHttpRequest(),
				url = section.getAttribute( 'data-markdown' );

			const datacharset = section.getAttribute( 'data-charset' );

			// see https://developer.mozilla.org/en-US/docs/Web/API/element.getAttribute#Notes
			if( datacharset !== null && datacharset !== '' ) {
				xhr.overrideMimeType( 'text/html; charset=' + datacharset );
			}

			xhr.onreadystatechange = function( section, xhr ) {
				if( xhr.readyState === 4 ) {
					// file protocol yields status code 0 (useful for local debug, mobile applications etc.)
					if ( ( xhr.status >= 200 && xhr.status < 300 ) || xhr.status === 0 ) {

						resolve( xhr, url );

					}
					else {

						reject( xhr, url );

					}
				}
			}.bind( this, section, xhr );

			xhr.open( 'GET', url, true );

			try {
				xhr.send();
			}
			catch ( e ) {
				console.warn( 'Failed to get the Markdown file ' + url + '. Make sure that the presentation and the file are served by a HTTP server and the file can be found there. ' + e );
				resolve( xhr, url );
			}

		} );

	}

	/**
	 * Check if a node value has the attributes pattern.
	 * If yes, extract it and add that value as one or several attributes
	 * to the target element.
	 *
	 * You need Cache Killer on Chrome to see the effect on any FOM transformation
	 * directly on refresh (F5)
	 * http://stackoverflow.com/questions/5690269/disabling-chrome-cache-for-website-development/7000899#answer-11786277
	 */
	function addAttributeInElement( node, elementTarget, separator ) {

		const markdownClassesInElementsRegex = new RegExp( separator, 'mg' );
		const markdownClassRegex = new RegExp( "([^\"= ]+?)=\"([^\"]+?)\"|(data-[^\"= ]+?)(?=[\" ])", 'mg' );
		let nodeValue = node.nodeValue;
		let matches,
			matchesClass;
		if( matches = markdownClassesInElementsRegex.exec( nodeValue ) ) {

			const classes = matches[1];
			nodeValue = nodeValue.substring( 0, matches.index ) + nodeValue.substring( markdownClassesInElementsRegex.lastIndex );
			node.nodeValue = nodeValue;
			while( matchesClass = markdownClassRegex.exec( classes ) ) {
				if( matchesClass[2] ) {
					elementTarget.setAttribute( matchesClass[1], matchesClass[2] );
				} else {
					elementTarget.setAttribute( matchesClass[3], "" );
				}
			}
			return true;
		}
		return false;
	}

	/**
	 * Add attributes to the parent element of a text node,
	 * or the element of an attribute node.
	 */
	function addAttributes( section, element, previousElement, separatorElementAttributes, separatorSectionAttributes ) {

		if ( element !== null && element.childNodes !== undefined && element.childNodes.length > 0 ) {
			let previousParentElement = element;
			for( let i = 0; i < element.childNodes.length; i++ ) {
				const childElement = element.childNodes[i];
				if ( i > 0 ) {
					let j = i - 1;
					while ( j >= 0 ) {
						const aPreviousChildElement = element.childNodes[j];
						if ( typeof aPreviousChildElement.setAttribute === 'function' && aPreviousChildElement.tagName !== "BR" ) {
							previousParentElement = aPreviousChildElement;
							break;
						}
						j = j - 1;
					}
				}
				let parentSection = section;
				if( childElement.nodeName ===  "section" ) {
					parentSection = childElement ;
					previousParentElement = childElement ;
				}
				if ( typeof childElement.setAttribute === 'function' || childElement.nodeType === Node.COMMENT_NODE ) {
					addAttributes( parentSection, childElement, previousParentElement, separatorElementAttributes, separatorSectionAttributes );
				}
			}
		}

		if ( element.nodeType === Node.COMMENT_NODE ) {
			if ( addAttributeInElement( element, previousElement, separatorElementAttributes ) === false ) {
				addAttributeInElement( element, section, separatorSectionAttributes );
			}
		}
	}

	/**
	 * Converts any current data-markdown slides in the
	 * DOM to HTML.
	 */
	function convertSlides() {

		const sections = deck.getRevealElement().querySelectorAll( '[data-markdown]:not([data-markdown-parsed])');

		[].slice.call( sections ).forEach( function( section ) {

			section.setAttribute( 'data-markdown-parsed', true );

			const notes = section.querySelector( 'aside.notes' );
			const markdown = getMarkdownFromSlide( section );

			section.innerHTML = marked.parse( markdown );
			addAttributes( 	section, section, null, section.getAttribute( 'data-element-attributes' ) ||
							section.parentNode.getAttribute( 'data-element-attributes' ) ||
							DEFAULT_ELEMENT_ATTRIBUTES_SEPARATOR,
							section.getAttribute( 'data-attributes' ) ||
							section.parentNode.getAttribute( 'data-attributes' ) ||
							DEFAULT_SLIDE_ATTRIBUTES_SEPARATOR);

			// If there were notes, we need to re-add them after
			// having overwritten the section's HTML
			if( notes ) {
				section.appendChild( notes );
			}

		} );

		return Promise.resolve();

	}

	function escapeForHTML( input ) {

	  return input.replace( /([&<>'"])/g, char => HTML_ESCAPE_MAP[char] );

	}

	return {
		id: 'markdown',

		/**
		 * Starts processing and converting Markdown within the
		 * current reveal.js deck.
		 */
		init: function( reveal ) {

			deck = reveal;

			let { renderer, animateLists, ...markedOptions } = deck.getConfig().markdown || {};

			if( !renderer ) {
				renderer = new marked.Renderer();

				renderer.code = ( code, language ) => {

					// Off by default
					let lineNumberOffset = '';
					let lineNumbers = '';

					// Users can opt in to show line numbers and highlight
					// specific lines.
					// ```javascript []        show line numbers
					// ```javascript [1,4-8]   highlights lines 1 and 4-8
					// optional line number offset:
					// ```javascript [25: 1,4-8]   start line numbering at 25,
					//                             highlights lines 1 (numbered as 25) and 4-8 (numbered as 28-32)
					if( CODE_LINE_NUMBER_REGEX.test( language ) ) {
						let lineNumberOffsetMatch =  language.match( CODE_LINE_NUMBER_REGEX )[2];
						if (lineNumberOffsetMatch){
							lineNumberOffset =  `data-ln-start-from="${lineNumberOffsetMatch.trim()}"`;
						}

						lineNumbers = language.match( CODE_LINE_NUMBER_REGEX )[3].trim();
						lineNumbers = `data-line-numbers="${lineNumbers}"`;
						language = language.replace( CODE_LINE_NUMBER_REGEX, '' ).trim();
					}

					// Escape before this gets injected into the DOM to
					// avoid having the HTML parser alter our code before
					// highlight.js is able to read it
					code = escapeForHTML( code );

					// return `<pre><code ${lineNumbers} class="${language}">${code}</code></pre>`;

					return `<pre><code ${lineNumbers} ${lineNumberOffset} class="${language}">${code}</code></pre>`;
				};
			}

			if( animateLists === true ) {
				renderer.listitem = text => `<li class="fragment">${text}</li>`;
			}

			marked.setOptions( {
				renderer,
				...markedOptions
			} );

			return processSlides( deck.getRevealElement() ).then( convertSlides );

		},

		// TODO: Do these belong in the API?
		processSlides: processSlides,
		convertSlides: convertSlides,
		slidify: slidify,
		marked: marked
	}

};

const RevealPointer=function(){var e={backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,pausebreak:19,capslock:20,esc:27,space:32,pageup:33,pagedown:34,end:35,home:36,leftarrow:37,uparrow:38,rightarrow:39,downarrow:40,insert:45,delete:46,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,a:65,b:66,c:67,d:68,e:69,f:70,g:71,h:72,i:73,j:74,k:75,l:76,m:77,n:78,o:79,p:80,q:81,r:82,s:83,t:84,u:85,v:86,w:87,x:88,y:89,z:90,leftwindowkey:91,rightwindowkey:92,selectkey:93,numpad0:96,numpad1:97,numpad2:98,numpad3:99,numpad4:100,numpad5:101,numpad6:102,numpad7:103,numpad8:104,numpad9:105,multiply:106,add:107,subtract:109,decimalpoint:110,divide:111,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123,numlock:144,scrolllock:145,semicolon:186,equalsign:187,comma:188,dash:189,period:190,forwardslash:191,graveaccent:192,openbracket:219,backslash:220,closebracket:221,singlequote:222};return function(){var t={},o=!1,n=null,a={x:0,y:0,isVisible:!1},i={x:0,y:0,scale:1};function l(o){var n;null==(t=o.pointer||{}).key?t.key="q":t.key=t.key.toLowerCase(),null!=t.pointerSize&&"number"==typeof t.pointerSize||(t.pointerSize=12),null!=t.tailLength&&"number"==typeof t.tailLength||(t.tailLength=10),null!=t.color&&"string"==typeof t.color||(t.color="red"),null!=t.alwaysVisible&&"boolean"==typeof t.alwaysVisible||(t.alwaysVisible=!1),null!=t.opacity&&"number"==typeof t.opacity||(t.opacity=.8),t.keyCode=(n=t.key,e[n]);}function r(){n.style.top="".concat((a.y-i.y)/i.scale,"px"),n.style.left="".concat((a.x-i.x)/i.scale,"px"),a.isVisible?n.style.opacity=t.opacity.toString():n.style.opacity="0",1!==i.scale?(n.style.width="".concat(t.pointerSize/i.scale,"px"),n.style.height="".concat(t.pointerSize/i.scale,"px")):(n.style.width="".concat(t.pointerSize,"px"),n.style.height="".concat(t.pointerSize,"px"));}function c(e){a.x=e.pageX,a.y=e.pageY;var t=document.body.style.transform;""!==t?(i.x=Number.parseInt(/translate\((.*)px,/gm.exec(t)[1]),i.y=Number.parseInt(/px,\s(.*)px\)/gm.exec(t)[1]),i.scale=Number.parseFloat(/scale\((.)\)/gm.exec(t)[1])):(i.x=0,i.y=0,i.scale=1),requestAnimationFrame(r);}function s(){(o=!o)?(document.addEventListener("mousemove",c),document.body.classList.add("no-cursor"),a.isVisible=!0):(document.removeEventListener("mousemove",c),document.body.classList.remove("no-cursor"),a.isVisible=!1,requestAnimationFrame(r));}return {id:"pointer",init:function(e){var o;l(e.getConfig()),t.alwaysVisible?s():e.addKeyBinding({keyCode:t.keyCode,key:t.key},(function(){s();})),e.on("pointerColorChange",(function(e){var o;o=e.color,null!=n&&(n.style.backgroundColor=null!=o?o:t.color);})),(o=document.createElement("div")).className="cursor-dot",o.style.width="".concat(t.pointerSize,"px"),o.style.height="".concat(t.pointerSize,"px"),o.style.backgroundColor=t.color,t.alwaysVisible&&(o.style.opacity="0.8"),document.body.appendChild(o),n=o;}}}}();

/**
 * A plugin which enables rendering of math equations inside
 * of reveal.js slides. Essentially a thin wrapper for KaTeX.
 *
 * @author Hakim El Hattab
 * @author Gerhard Burger
 */

let renderMathInElement;

const KaTeX = () => {
	let deck;

	let defaultOptions = {
		version: 'latest',
		delimiters: [
			{left: '$$', right: '$$', display: true}, // Note: $$ has to come before $
			{left: '$', right: '$', display: false},
			{left: '\\(', right: '\\)', display: false},
			{left: '\\[', right: '\\]', display: true}
		],
		ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre']
	};

	/**
	 * Loads a JavaScript file and returns a Promise for when it is loaded
	 * Credits: https://aaronsmith.online/easily-load-an-external-script-using-javascript/
	 */

	return {
		id: 'katex',

		init: function (reveal) {

			deck = reveal;

			let revealOptions = deck.getConfig().katex || {};

			({...defaultOptions, ...revealOptions});


			const renderMath = () => {
				renderMathInElement(reveal.getSlidesElement(), defaultOptions);
				deck.layout();
			};

			//loadCss(cssUrl);

			// For some reason dynamically loading with defer attribute doesn't result in the expected behavior, the below code does
			if (!renderMathInElement) {
				window.interpretate.shared.katex.load().then(() => {
					renderMathInElement = window.interpretate.shared.katex.autorender;
					console.log(renderMathInElement);

					if( deck.isReady() ) {
						renderMath();
					}
					else {
						deck.on( 'ready', renderMath.bind( this ) );
					}
				});
			} else {
				renderMathInElement = window.interpretate.shared.katex.autorender;
				console.log(renderMathInElement);

				if( deck.isReady() ) {
					renderMath();
				}
				else {
					deck.on( 'ready', renderMath.bind( this ) );
				}
			}
			//if (!d3) d3 = interpretate.shared.d3.d3;

		}
	}

};

const pasteFile = {
  transaction: (ev, view, id, length) => {
    console.log(view.dom.ocellref);
    if (view.dom.ocellref) {
      const channel = view.dom.ocellref.origin.channel;
      server._emitt(channel, `<|"Channel"->"${id}", "Length"->${length}, "CellType"->"md"|>`, 'Forwarded["CM:PasteEvent"]');
    }
  },

  file: (ev, view, id, name, result) => {
    console.log(view.dom.ocellref);
    if (view.dom.ocellref) {
      server.emitt(id, `<|"Data"->"${result}", "Name"->"${name}"|>`, 'File');
    }
  }
};

const pasteDrop = {
  transaction: (ev, view, id, length) => {
    console.log(view.dom.ocellref);
    if (view.dom.ocellref) {
      const channel = view.dom.ocellref.origin.channel;
      server._emitt(channel, `<|"Channel"->"${id}", "Length"->${length}, "CellType"->"md"|>`, 'Forwarded["CM:DropEvent"]');
    }
  },

  file: (ev, view, id, name, result) => {
    console.log(view.dom.ocellref);
    if (view.dom.ocellref) {
      server.emitt(id, `<|"Data"->"${result}", "Name"->"${name}"|>`, 'File');
    }
  }
};


function unicodeToChar(text) {
  return text.replace(/\\:[\da-f]{4}/gi, 
         function (match) {
              return String.fromCharCode(parseInt(match.replace(/\\:/g, ''), 16));
         });
}
const decks = {};

core.SlidesInternalEvent = async (args, env) => {
  console.log('Slide event!');

  const type = await interpretate(args[0], env);
  const data = await interpretate(args[1], env);

  Object.values(decks).forEach((deck) => {
    deck[type](data);
  });
};

let cnt = 0;

class RevealJSCell {
    envs = []
    events
    cnt

    dispose() {


      console.warn('slide got disposed!');

      for (const key of Object.keys(this.events)) {
        server.kernel.emitt(this.events[key][0], 'True', 'Destroy');
      }

      console.warn('WLX cell dispose...');
      for (const env of this.envs) {
        for (const obj of Object.values(env.global.stack))  {
          console.log('dispose');
          obj.dispose();
        }
      }

      delete decks[this.cnt];

      this.deck.destroy();
    }
    
    constructor(parent, data) {
      const self = this;
      let deck = new _(parent.element, {
        embedded: true,
        keyboard: true,

        // Optional function that blocks keyboard events when retuning false
        //
        // If you set this to 'focused', we will only capture keyboard events
        // for embedded decks when they are in focus
        keyboardCondition: null,
        slideNumber: true,
        plugins: [ Plugin, KaTeX, RevealPointer /*, RevealDrawer(self)*/ ],
        pointer: {
          key: "q", // key to enable pointer, default "q", not case-sensitive
          color: "red", // color of a cursor, default "red" any valid CSS color
          opacity: 0.8, // opacity of cursor, default 0.8
          pointerSize: 12, // pointer size in px, default 12
          alwaysVisible: false, // should pointer mode be always visible? default "false"
          tailLength: 10, // NOT IMPLEMENTED YET!!! how long the "tail" should be? default 10
        }/*,

        drawer: {
          toggleDrawKey: "d", // (optional) key to enable drawing, default "d"
          toggleBoardKey: "t", // (optional) key to show drawing board, default "t"
          colors: ["#fa1e0e", "#8ac926", "#1982c4", "#ffca3a"], // (optional) list of colors avaiable (hex color codes)
          color: "#FF0000", // (optional) color of a cursor, first color from `codes` is a default
          pathSize: 4, // (optional) path size in px, default 4
        }*/
      } );

      const container = document.createElement('div');
      container.classList.add('reveal');

      const slides = document.createElement('div');
      slides.classList.add('slides');

      container.appendChild(slides);

      parent.element.appendChild(container);

      
      if (!core._isWindow) parent.element.classList.add('reveal-fixed-height');
      parent.element.classList.add('padding-fix');

      //parent.element.style.height = "500px";

      let string = `
      <section data-markdown>
      <textarea data-template>
          ${data}
      </textarea>
      </section>      
      `;

      const r = {
        scripts: new RegExp(/\<(?:[^:]+:)?script\>.*?\<\/(?:[^:]+:)?script\>/gm),
        events: new RegExp(/RVJSEvent\["([^"]+)","([^"]+)"\]/g),
        fe: new RegExp(/FrontEndExecutable\[([^\[|\]]+)\]/g),
        feh: new RegExp(/FrontEndExecutableHold\[([^\[|\]]+)\]/g)
      };
      
      const scripts = [];
      
      const replacer = (arr) => {
        return function (match, p1, p2, /* …, */ pN, offset, string, groups) {
        arr.push(match);
        return '';
        }
      };

      const events = {};
      const fe = [];
      //string.match(new RegExp(/---\n/gm)).length
      
      const eventReplacer = (arr) => {
        return function (match, a,b,c) {
  
        let narray = string.slice(0, c).match(new RegExp(/---\n/gm));
          
        if (!Array.isArray(narray)) narray = [];
        
        arr[narray.length] = [a,b];
        return '';
        }
      };

      const feReplacer = (fe, offset=0) => {
        return function (match, index) {
          const uid = match.slice(19 + offset,-1);
          fe.push(uid);
          return `<div id="slide-${uid}" class="slide-frontend-object"></div>`;
        }
      };
      
    
      string = string.replace('<dummy >', '').replace('</dummy>', '');

      //extract scripts
      string = string.replace(r.scripts, replacer(scripts));

      //extract events
      console.log(string);
      string = string.replace(r.events, eventReplacer(events));
      console.log(events);

      //extract FE objects
      string = string.replace(r.fe, feReplacer(fe));
      string = string.replace(r.feh, feReplacer(fe, 4));

      let previousSlide = false;

      deck.on( 'slidechanged', event => {
        // event.previousSlide, event.currentSlide, event.indexh, event.indexv
        const slide = event.indexh;
        console.log(slide);
        if (event.previousSlide == event.currentSlide) return;

        if (previousSlide !== false) {
          server.kernel.emitt(events[previousSlide][0], slide - previousSlide, 'Left');
          previousSlide = false;
        }

        console.log(Object.keys(events).includes(String(slide)));
          if (Object.keys(events).includes(String(slide))) {
            console.log(events[slide]);
            server.kernel.emitt(events[slide][0], slide, events[slide][1]);
            previousSlide = slide;
          }

      } );

      let blocked = false;

      const fragmentFire = (x,y) => {
        if (blocked) return;
        blocked = true;
        setTimeout(()=>{
          blocked = false;
        }, 100);
        server.kernel.emitt(events[x][0], y, 'fragment-'+String(y+1));
        console.log('fragment fire!');
       
      };



      deck.on( 'fragmentshown', event => {
        const state = deck.getState();
   
        if (Object.keys(events).includes(String(state.indexh))) {
          fragmentFire(state.indexh, state.indexf);
        }
      } );

      
      
      slides.innerHTML = unicodeToChar(string);
  

      const scriptHolder = document.createElement('div');
      parent.element.appendChild(scriptHolder);

      setInnerHTML(scriptHolder, scripts.join(''));
      
      this.deck = deck;

      

      this.cnt = (cnt++);
      decks[this.cnt] = deck;

      const runOverFe = async function () {
        for (const uid of fe) {

          const cuid = Date.now() + Math.floor(Math.random() * 10009);
          var global = {call: cuid};

          console.warn('loading executable on a slide...');
          console.log(uid);
          console.log(document.getElementById(`slide-${uid}`));
          
      
          let env = {global: global, element: document.getElementById(`slide-${uid}`)}; 
          console.log("Slides: creating an object");


          console.log('forntend executable');

          let obj;
          console.log('check cache');
          if (ObjectHashMap[uid]) {
              obj = ObjectHashMap[uid];
          } else {
              obj = new ObjectStorage(uid);
          }
          console.log(obj);
      
          const copy = env;
          const store = await obj.get();
          const instance = new ExecutableObject('slides-static-'+uuidv4(), copy, store, true);
          instance.assignScope(copy);
          obj.assign(instance);
      
          instance.execute();          
      
          self.envs.push(env);          
      }    };

    //sideeffect
      deck.initialize().then(() => {
        runOverFe();
        //when everyhting is mounted. fire an event for the first slide
        //Mouted event
        for (const key of Object.keys(events)) {
          server.kernel.emitt(events[key][0], 'True', 'Mounted');
        }

        self.events = events;

        //for the first slide

        if (Object.keys(events).includes(String(0))) {
          server.kernel.emitt(events[0][0], 0, events[0][1]);
          previousSlide = 0;
        }
        
      });

      return this;
    }
  }

  const codemirror = window.SupportedCells['codemirror'].context; 
  
  window.SupportedLanguages.push({
    check: (r) => {return(r[0] === '.slide' || r[0] === '.slides')},
    plugins: [codemirror.markdown(), codemirror.DropPasteHandlers(pasteDrop, pasteFile)],
    name: codemirror.markdownLanguage.name
  });

  

  window.SupportedCells['slide'] = {
    view: RevealJSCell
  };


  class RevealJSCellPrinted {
    envs = []
    events
    cnt
    
    constructor(parent, data) {
      const self = this;
      let deck = new _(parent.element, {
        embedded: true,
        keyboard: true,
        pdfMaxPagesPerSlide: 1,
        pdfSeparateFragments: true,
        // Optional function that blocks keyboard events when retuning false
        //
        // If you set this to 'focused', we will only capture keyboard events
        // for embedded decks when they are in focus
        keyboardCondition: null,
        slideNumber: true,
        plugins: [ Plugin, KaTeX /*, RevealDrawer(self)*/ ]
      } );

      const container = document.createElement('div');
      container.classList.add('reveal');

      const slides = document.createElement('div');
      slides.classList.add('slides');

      container.appendChild(slides);

      parent.element.appendChild(container);

      
      //if (!core._isWindow) parent.element.classList.add('reveal-fixed-height');
      //parent.element.classList.add('padding-fix');

      //parent.element.style.height = "500px";

      let string = `
      <section data-markdown>
      <textarea data-template>
          ${data}
      </textarea>
      </section>      
      `;

      const r = {
        scripts: new RegExp(/\<(?:[^:]+:)?script\>.*?\<\/(?:[^:]+:)?script\>/gm),
        events: new RegExp(/RVJSEvent\["([^"]+)","([^"]+)"\]/g),
        fe: new RegExp(/FrontEndExecutable\[([^\[|\]]+)\]/g),
        feh: new RegExp(/FrontEndExecutableHold\[([^\[|\]]+)\]/g)
      };
      
      const scripts = [];
      
      const replacer = (arr) => {
        return function (match, p1, p2, /* …, */ pN, offset, string, groups) {
        arr.push(match);
        return '';
        }
      };

      const events = {};
      const fe = [];
      //string.match(new RegExp(/---\n/gm)).length
      
      const eventReplacer = (arr) => {
        return function (match, a,b,c) {
  
        let narray = string.slice(0, c).match(new RegExp(/---\n/gm));
          
        if (!Array.isArray(narray)) narray = [];
        
        arr[narray.length] = [a,b];
        return '';
        }
      };

      const feReplacer = (fe, offset=0) => {
        return function (match, index) {
          const uid = match.slice(19 + offset,-1);
          fe.push(uid);
          return `<div id="slide-${uid}" class="slide-frontend-object"></div>`;
        }
      };
      
    
      string = string.replace('<dummy >', '').replace('</dummy>', '');

      //extract scripts
      string = string.replace(r.scripts, replacer(scripts));

      //extract events
      console.log(string);
      string = string.replace(r.events, eventReplacer(events));
      console.log(events);

      //extract FE objects
      string = string.replace(r.fe, feReplacer(fe));
      string = string.replace(r.feh, feReplacer(fe, 4));
      
      slides.innerHTML = unicodeToChar(string);
  

      const scriptHolder = document.createElement('div');
      parent.element.appendChild(scriptHolder);

      setInnerHTML(scriptHolder, scripts.join(''));
      
      this.deck = deck;

      

      this.cnt = (cnt++);
      decks[this.cnt] = deck;

      const runOverFe = async function () {
        for (const uid of fe) {

          const cuid = Date.now() + Math.floor(Math.random() * 10009);
          var global = {call: cuid};

          console.warn('loading executable on a slide...');
          console.log(uid);
          console.log(document.getElementById(`slide-${uid}`));
          
      
          let env = {global: global, element: document.getElementById(`slide-${uid}`)}; 
          console.log("Slides: creating an object");


          console.log('forntend executable');

          let obj;
          console.log('check cache');
          if (ObjectHashMap[uid]) {
              obj = ObjectHashMap[uid];
          } else {
              obj = new ObjectStorage(uid);
          }
          console.log(obj);
      
          const copy = env;
          const store = await obj.get();
          const instance = new ExecutableObject('slides-stored-'+uuidv4(), copy, store, true);
          instance.assignScope(copy);
          obj.assign(instance);
      
          instance.execute();          
      
          self.envs.push(env);          
      }    };

    //sideeffect
      deck.initialize().then(() => {
        runOverFe();
        self.events = events;
      });

      return this;
    }
  }  

  window.SupportedCells['printslide'] = {
    view: RevealJSCellPrinted
  };
