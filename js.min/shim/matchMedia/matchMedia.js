window.addEventListener&&(window.matchMedia=window.matchMedia||function(t){var e,n=t.documentElement,i=n.firstElementChild||n.firstChild,o=t.createElement("body"),r=t.createElement("div");return r.id="mq-test-1",r.style.cssText="position:absolute;top:-100em",o.style.background="none",o.appendChild(r),function(t){return r.innerHTML='&shy;<style media="'+t+'"> #mq-test-1 { width: 42px; }</style>',n.insertBefore(o,i),e=42===r.offsetWidth,n.removeChild(o),{matches:e,media:t}}}(document));