(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{142:function(e){e.exports=JSON.parse('{"title":"welcome"}')},235:function(e,n,t){e.exports=t(475)},475:function(e,n,t){"use strict";t.r(n);t(236),t(245);var o=t(0),r=t.n(o),a=t(103),c=t(60),i=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function l(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(438);var u=t(101),s=t(222),f=t(56),d=t(219),h=t(143);function p(){var e=Object(d.a)(["\n  html,\n  body {\n    height: 100%;\n    width: 100%;\n  }\n\n  body {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  }\n\n  #root {\n    min-height: 100%;\n    min-width: 100%;\n  }\n\n  p,\n  label {\n    font-family: Georgia, Times, 'Times New Roman', serif;\n    line-height: 1.5em;\n  }\n\n  input, select {\n    font-family: inherit;\n    font-size: inherit;\n  }\n"]);return p=function(){return e},e}var m=Object(h.a)(p()),v=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{fallback:null},a=e;n&&(a=function(){return e().then((function(e){return{default:n(e)}}))});var c=Object(o.lazy)(a);return function(e){return r.a.createElement(o.Suspense,{fallback:t.fallback},r.a.createElement(c,e))}},b=v((function(){return t.e(4).then(t.bind(null,476))}),(function(e){return e.HomePage})),g=v((function(){return t.e(3).then(t.bind(null,477))}),(function(e){return e.NotFoundPage}));var w=t(232),k=t(105),E=t(224),y=t(231),j=t(233),O=t(27);function W(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return 0===Object.keys(e).length?function(e){return e}:Object(O.c)(Object(j.a)({},e))}var R,S=t(229),A=t(230),T=t(228),x=t(142),N={en:{translation:x}},B={},C=(S.a.use(A.a).use(T.a).init({resources:N,fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1}},(function(){!function e(n,t,o){Object.keys(n).forEach((function(r){var a=o?"".concat(o,".").concat(r):r;"object"===typeof n[r]?(t[r]={},e(n[r],t[r],a)):t[r]=a}))}(x,B)})),function(){var e=Object(y.a)({}),n=e.run,t=[e],o=[Object(E.a)({createReducer:W,runSaga:n})];return Object(k.a)({reducer:W(),middleware:[].concat(Object(w.a)(Object(k.b)()),t),devTools:!1,enhancers:o})}()),P=document.getElementById("root"),D=function(e){var n=e.Component;return o.createElement(c.a,{store:C},o.createElement(u.b,null,o.createElement(o.StrictMode,null,o.createElement(n,null))))};R=function(){return o.createElement(s.a,null,o.createElement(u.a,{titleTemplate:"%s - React Boilerplate",defaultTitle:"React Boilerplate"},o.createElement("meta",{name:"description",content:"A React Boilerplate application"})),o.createElement(f.c,null,o.createElement(f.a,{exact:!0,path:"/DocskeeperWeb/",component:b}),o.createElement(f.a,{exact:!0,path:"/",component:b}),o.createElement(f.a,{exact:!0,path:"/home",component:b}),o.createElement(f.a,{component:g})),o.createElement(m,null))},a.render(o.createElement(D,{Component:R}),P),function(e){if("serviceWorker"in navigator){if(new URL("/DocskeeperWeb",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/DocskeeperWeb","/service-worker.js");i?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):l(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):l(n,e)}))}}()}},[[235,1,2]]]);