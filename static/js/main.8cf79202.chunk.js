(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{151:function(e){e.exports=JSON.parse('{"title":"welcome"}')},253:function(e,n,t){e.exports=t(491)},491:function(e,n,t){"use strict";t.r(n);t(254),t(263);var o=t(0),a=t.n(o),r=t(93),c=t(62),i=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function l(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(456);var s=t(109),u=t(242),f=t(58),h=t(239),m=t(156);function p(){var e=Object(h.a)(["\n  html,\n  body {\n    height: 100%;\n    width: 100%;\n  }\n\n  body {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  }\n\n  #root {\n    min-height: 100%;\n    min-width: 100%;\n  }\n\n  p,\n  label {\n    font-family: Georgia, Times, 'Times New Roman', serif;\n    line-height: 1.5em;\n  }\n\n  input, select {\n    font-family: inherit;\n    font-size: inherit;\n  }\n"]);return p=function(){return e},e}var d=Object(m.a)(p()),b=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{fallback:null},r=e;n&&(r=function(){return e().then((function(e){return{default:n(e)}}))});var c=Object(o.lazy)(r);return function(e){return a.a.createElement(o.Suspense,{fallback:t.fallback},a.a.createElement(c,e))}},v=b((function(){return Promise.all([t.e(3),t.e(4)]).then(t.bind(null,877))}),(function(e){return e.HomePage})),g=b((function(){return t.e(5).then(t.bind(null,878))}),(function(e){return e.NotFoundPage}));var w=t(236),y=t(113),k=t(244),E=t(248),j=t(231),O=t(27);function R(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return 0===Object.keys(e).length?function(e){return e}:Object(O.c)(Object(j.a)({},e))}var S,W=t(249),A=t(247),T=t(246),x=t(151),N={en:{translation:x}},B={},C=(W.a.use(A.a).use(T.a).init({resources:N,fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1}},(function(){!function e(n,t,o){Object.keys(n).forEach((function(a){var r=o?"".concat(o,".").concat(a):a;"object"===typeof n[a]?(t[a]={},e(n[a],t[a],r)):t[a]=r}))}(x,B)})),function(){var e=Object(E.a)({}),n=e.run,t=[e],o=[Object(k.a)({createReducer:R,runSaga:n})];return Object(y.a)({reducer:R(),middleware:[].concat(Object(w.a)(Object(y.b)()),t),devTools:!1,enhancers:o})}()),P=document.getElementById("root"),H=function(e){var n=e.Component;return o.createElement(c.a,{store:C},o.createElement(s.b,null,o.createElement(o.StrictMode,null,o.createElement(n,null))))};S=function(){return o.createElement(u.a,null,o.createElement(s.a,{titleTemplate:"%s - React Boilerplate",defaultTitle:"React Boilerplate"},o.createElement("meta",{name:"description",content:"A React Boilerplate application"}),o.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"}),o.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"})),o.createElement(f.c,null,o.createElement(f.a,{exact:!0,path:"/docskeeperweb/",component:v}),o.createElement(f.a,{exact:!0,path:"/",component:v}),o.createElement(f.a,{exact:!0,path:"/home",component:v}),o.createElement(f.a,{component:g})),o.createElement(d,null))},r.render(o.createElement(H,{Component:S}),P),function(e){if("serviceWorker"in navigator){if(new URL("/docskeeperweb",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/docskeeperweb","/service-worker.js");i?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):l(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):l(n,e)}))}}()}},[[253,1,2]]]);