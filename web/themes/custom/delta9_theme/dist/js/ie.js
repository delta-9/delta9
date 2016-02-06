function isIE(e,t){var n,r="IE",a=document.createElement("B"),u=document.documentElement;return e&&(r+=" "+e,t&&(r=t+" "+r)),a.innerHTML="<!--[if "+r+']><b id="iecctest"></b><![endif]-->',u.appendChild(a),n=!!document.getElementById("iecctest"),u.removeChild(a),n}if(!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=E.elements;return"string"==typeof e?e.split(" "):e}function a(e,t){var n=E.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),E.elements=n+" "+e,l(t)}function u(e){var t=b[e[p]];return t||(t={},v++,e[p]=v,b[v]=t),t}function i(e,n,r){if(n||(n=t),d)return n.createElement(e);r||(r=u(n));var a;return a=r.cache[e]?r.cache[e].cloneNode():g.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!a.canHaveChildren||h.test(e)||a.tagUrn?a:r.frag.appendChild(a)}function o(e,n){if(e||(e=t),d)return e.createDocumentFragment();n=n||u(e);for(var a=n.frag.cloneNode(),i=0,o=r(),c=o.length;c>i;i++)a.createElement(o[i]);return a}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return E.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(E,t.frag)}function l(e){e||(e=t);var r=u(e);return!E.shivCSS||s||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),d||c(e,r),e}var s,d,m="3.7.3",f=e.html5||{},h=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,g=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",v=0,b={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",s="hidden"in e,d=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){s=!0,d=!0}}();var E={elements:f.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:m,shivCSS:f.shivCSS!==!1,supportsUnknownElements:d,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:l,createElement:i,createDocumentFragment:o,addElements:a};e.html5=E,l(t),"object"==typeof module&&module.exports&&(module.exports=E)}("undefined"!=typeof window?window:this,document),isIE()){var html=document.getElementsByTagName("html")[0];isIE(9)?html.className+=" IE IE9":isIE(8)?html.className+=" IE IE8":isIE(7)?html.className+=" IE IE7":isIE(6)&&(html.className+=" IE IE6")}!function(e){"use strict";function t(){}function n(){try{return document.activeElement}catch(e){}}function r(e,t){for(var n=0,r=e.length;r>n;n++)if(e[n]===t)return!0;return!1}function a(e,t,n){return e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent?e.attachEvent("on"+t,n):void 0}function u(e,t){var n;e.createTextRange?(n=e.createTextRange(),n.move("character",t),n.select()):e.selectionStart&&(e.focus(),e.setSelectionRange(t,t))}function i(e,t){try{return e.type=t,!0}catch(n){return!1}}function o(e,t){if(e&&e.getAttribute(C))t(e);else for(var n,r=e?e.getElementsByTagName("input"):z,a=e?e.getElementsByTagName("textarea"):P,u=r?r.length:0,i=a?a.length:0,o=u+i,c=0;o>c;c++)n=u>c?r[c]:a[c-u],t(n)}function c(e){o(e,s)}function l(e){o(e,d)}function s(e,t){var n=!!t&&e.value!==t,r=e.value===e.getAttribute(C);if((n||r)&&"true"===e.getAttribute(T)){e.removeAttribute(T),e.value=e.value.replace(e.getAttribute(C),""),e.className=e.className.replace(w,"");var a=e.getAttribute(M);parseInt(a,10)>=0&&(e.setAttribute("maxLength",a),e.removeAttribute(M));var u=e.getAttribute(B);return u&&(e.type=u),!0}return!1}function d(e){var t=e.getAttribute(C);if(""===e.value&&t){e.setAttribute(T,"true"),e.value=t,e.className+=" "+S;var n=e.getAttribute(M);n||(e.setAttribute(M,e.maxLength),e.removeAttribute("maxLength"));var r=e.getAttribute(B);return r?e.type="text":"password"===e.type&&i(e,"text")&&e.setAttribute(B,"password"),!0}return!1}function m(e){return function(){U&&e.value===e.getAttribute(C)&&"true"===e.getAttribute(T)?u(e,0):s(e)}}function f(e){return function(){d(e)}}function h(e){return function(){c(e)}}function g(e){return function(t){return A=e.value,"true"===e.getAttribute(T)&&A===e.getAttribute(C)&&r(N,t.keyCode)?(t.preventDefault&&t.preventDefault(),!1):void 0}}function p(e){return function(){s(e,A),""===e.value&&(e.blur(),u(e,0))}}function v(e){return function(){e===n()&&e.value===e.getAttribute(C)&&"true"===e.getAttribute(T)&&u(e,0)}}function b(e){var t=e.form;t&&"string"==typeof t&&(t=document.getElementById(t),t.getAttribute(F)||(a(t,"submit",h(t)),t.setAttribute(F,"true"))),a(e,"focus",m(e)),a(e,"blur",f(e)),U&&(a(e,"keydown",g(e)),a(e,"keyup",p(e)),a(e,"click",v(e))),e.setAttribute(k,"true"),e.setAttribute(C,G),(U||e!==n())&&d(e)}var E=document.createElement("input"),y=void 0!==E.placeholder;if(e.Placeholders={nativeSupport:y,disable:y?t:c,enable:y?t:l},!y){var A,x=["text","search","url","tel","email","password","number","textarea"],N=[27,33,34,35,36,37,38,39,40,8,46],I="#ccc",S="placeholdersjs",w=new RegExp("(?:^|\\s)"+S+"(?!\\S)"),C="data-placeholder-value",T="data-placeholder-active",B="data-placeholder-type",F="data-placeholder-submit",k="data-placeholder-bound",D="data-placeholder-focus",L="data-placeholder-live",M="data-placeholder-maxlength",j=100,H=document.getElementsByTagName("head")[0],R=document.documentElement,V=e.Placeholders,z=document.getElementsByTagName("input"),P=document.getElementsByTagName("textarea"),U="false"===R.getAttribute(D),$="false"!==R.getAttribute(L),q=document.createElement("style");q.type="text/css";var _=document.createTextNode("."+S+" {color:"+I+";}");q.styleSheet?q.styleSheet.cssText=_.nodeValue:q.appendChild(_),H.insertBefore(q,H.firstChild);for(var G,J,K=0,O=z.length+P.length;O>K;K++)J=K<z.length?z[K]:P[K-z.length],G=J.attributes.placeholder,G&&(G=G.nodeValue,G&&r(x,J.type)&&b(J));var Q=setInterval(function(){for(var e=0,t=z.length+P.length;t>e;e++)J=e<z.length?z[e]:P[e-z.length],G=J.attributes.placeholder,G?(G=G.nodeValue,G&&r(x,J.type)&&(J.getAttribute(k)||b(J),(G!==J.getAttribute(C)||"password"===J.type&&!J.getAttribute(B))&&("password"===J.type&&!J.getAttribute(B)&&i(J,"text")&&J.setAttribute(B,"password"),J.value===J.getAttribute(C)&&(J.value=G),J.setAttribute(C,G)))):J.getAttribute(T)&&(s(J),J.removeAttribute(C));$||clearInterval(Q)},j);a(e,"beforeunload",function(){V.disable()})}}(this);