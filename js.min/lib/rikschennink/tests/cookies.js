define(["../utils/Observer","security/StorageConsentGuard"],function(t,e){var n="";return{setup:function(i){var o=e.getInstance();t.subscribe(o,"change",function(){i()}),n=o.getActiveLevel()},measure:function(){var t=e.getInstance(),i=t.getActiveLevel();return i!==n?(n=i,!0):!1},assert:function(t){return!!t.match(new RegExp(n,"g"))}}});