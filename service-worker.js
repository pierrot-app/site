"use strict";var precacheConfig=[["/site/index.html","42f0fe5c759630d457964aa5c4b6a175"],["/site/static/css/main.2ccd4e2a.css","c3506c4fea642aeb815989c3898130f6"],["/site/static/js/main.e93bccf7.js","613baeee1b020ee8423cdf4551796991"],["/site/static/media/Hero-Background.f0325845.svg","f03258456bf24b9ab69da036232c04ef"],["/site/static/media/Hero-Image.c0dd44a5.png","c0dd44a5a7f0b105ee5aefd1bdbc309b"],["/site/static/media/Highlight.eb609755.png","eb60975539cb73863193fa31eaabe098"],["/site/static/media/HowTo-1.48b1ec66.png","48b1ec66554a6575a68bb3aefd73ebe3"],["/site/static/media/HowTo-2.94ff43d6.png","94ff43d6d8bd8187e785a4241b33e12f"],["/site/static/media/HowTo-3.733a10e3.png","733a10e3b4e91da62d2a3499cd5fc12a"],["/site/static/media/HowTo-Background-1.cf50a1dd.svg","cf50a1dd07b24d4d0b9a92b82605f63f"],["/site/static/media/HowTo-Background-2.556879d3.svg","556879d37d09e2fba74ca7e0e84c487f"],["/site/static/media/HowTo-Background-3.839886c1.svg","839886c107f214d38123b1e08880b1aa"],["/site/static/media/Logo-Texte-White.01aef586.svg","01aef586eb81e1997026f12319b72c3a"],["/site/static/media/Logo-Texte.c16df958.svg","c16df958691a333646a51bc5d9984405"],["/site/static/media/allo.fda17c31.png","fda17c31f68c80cd69a05fccb8a920f9"],["/site/static/media/jack.a4f2a3ed.png","a4f2a3eded144b968eacff7357abfcb0"],["/site/static/media/logo-white.e331f53a.svg","e331f53a953f0b7b07a7c94611f2da7d"],["/site/static/media/logo.4be15c7a.svg","4be15c7a6cfa69b04223065ce6420e14"],["/site/static/media/marin.2dc97ccb.png","2dc97ccb94c2136617aacbf35e8a70c0"],["/site/static/media/paprika.b0d6af70.png","b0d6af70ecba2df01e0beed829cec0e1"],["/site/static/media/pepin.d93ebf59.png","d93ebf5906d249346ac97b38fe6238e7"],["/site/static/media/polochon.6ed65ad5.png","6ed65ad5fe19a104f907fc320e341870"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/site/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});