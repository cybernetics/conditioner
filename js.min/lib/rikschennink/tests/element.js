define([],function(){var t=function(t){var e=window.innerHeight,n=t.getBoundingClientRect();return n.top>0&&n.top<e||n.bottom>0&&n.bottom<e};return{setup:function(t){window.addEventListener("resize",t,!1),window.addEventListener("scroll",t,!1)},assert:function(e,n){if("seen"===e)return this._seen||(this._seen=t(n)),this._seen;var i,o,r=e.split(":");return r?(i=r[0],o=parseInt(r[1],10),"min-width"===i?n.offsetWidth>=o:"max-width"===i?n.offsetWidth<=o:!1):!1}}});