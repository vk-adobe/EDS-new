import*as e from"@dropins/tools/event-bus.js";import*as n from"@dropins/tools/fetch-graphql.js";export const id=3004;export const ids=[3004];export const modules={5608:(e,n,r)=>{r.d(n,{W:()=>O,K:()=>_});var t=r(8884),o=r(5536),i=r.n(o),a=r(7008),l=r.n(a),s=r(1496),d=r.n(s),p=r(9356),c=r.n(p),u=r(9904),m=r.n(u),f=r(3248),y={attributes:{"data-dropin":"storefront-checkout","data-sdk":"0.21.2"}};y.styleTagTransform=function(e,n){setTimeout((()=>{window.window._loadedStyles=window.window._loadedStyles??{};const{core:r,sdk:t}=function(e,n){const r=e?.match(/^\.dropin-(\w+)/)?.[1],t=n.getAttribute("data-sdk");return{core:r,sdk:t}}(e,n),o=r?`sdk/${r}`:n.getAttribute("data-dropin");!function(e,n){e.setAttribute("data-dropin",n),e.removeAttribute("data-sdk")}(n,o);const i=window._loadedStyles[o];i?function(e,n,r,t){const o=function(e,n){const r=e=>{const[n,r]=e.split("-"),[t,o,i]=n.split(".").map(Number),a=r?r.match(/(alpha|beta)(\d*)/):null;return{major:t,minor:o,patch:i,preType:a?a[1]:"",preNumber:a?parseInt(a[2],10):0}},t=r(e),o=r(n);if(t.major!==o.major)return t.major>o.major?e:n;if(t.minor!==o.minor)return t.minor>o.minor?e:n;if(t.patch!==o.patch)return t.patch>o.patch?e:n;if(t.preType&&o.preType)return t.preType===o.preType?t.preNumber>o.preNumber?e:n:"beta"===t.preType?n:e;return t.preType?n:e}(r,t.sdk);if(!t.core||t.core&&o===t.sdk){const n=t.style.textContent;t.style.textContent=`${n}\n/* --- MERGED --- */\n${e}`}else t.core&&o!==t.sdk&&(t.style.textContent=`/* --- UPGRADED --- */\n${e}`);n.remove()}(e,n,t,i):(function(e,n,r,t,o){n.textContent=e,window._loadedStyles[o]={sdk:t,core:r,style:n}}(e,n,r,t,o),function(e,n){const r=document.querySelector("head"),{lastDropinStyleInjected:t,lastSDKStyleInjected:o}=window._loadedStyles;n?(o?r.insertBefore(e,o.nextSibling):r.insertBefore(e,r.firstChild),window._loadedStyles.lastSDKStyleInjected=e):(t?r.insertBefore(e,t.nextSibling):o?r.insertBefore(e,o.nextSibling):r.insertBefore(e,r.firstChild),window._loadedStyles.lastDropinStyleInjected=e)}(n,r))}),0)},y.setAttributes=c(),y.insert=d().bind(null,"head"),y.domAPI=l(),y.insertStyleElement=m();i()(f.c,y);f.c&&f.c.locals&&f.c.locals;var g=r(9888),h=["className","fullWidth","lines","size","variant","children","multilineGap"],b=["className","children","rowGap"];function w(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function v(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?w(Object(r),!0).forEach((function(n){k(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function k(e,n,r){var t;return(n="symbol"==typeof(t=function(e,n){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var t=r.call(e,n||"default");if("object"!=typeof t)return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(n,"string"))?t:String(t))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function S(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var j=1,_=e=>{var{className:n,fullWidth:r=!1,lines:o=j,size:i="small",variant:a="row",children:l=null,multilineGap:s="medium"}=e,d=S(e,h),p=[["dropin-skeleton-row__".concat(a),a],["dropin-skeleton-row__".concat(a,"-").concat(i),a&&i]];if(!l&&"empty"===a)return(0,g.im)("div",{className:(0,t.i)(["dropin-skeleton-row dropin-skeleton-row__empty",n])});if(l){var c=l.trim();return(0,g.im)("div",v(v({},d),{},{class:(0,t.i)(["dropin-skeleton-row",["dropin-skeleton-row--full",r],n]),dangerouslySetInnerHTML:{__html:c}}))}return!1===o>j?(0,g.im)("div",v(v({},d),{},{class:(0,t.i)(["dropin-skeleton-row",["dropin-skeleton-row--full",r],"dropin-skeleton--row__content",...p,n])})):(0,g.im)("div",v(v({},d),{},{style:{"--multiline-gap-spacing":"var(--spacing-".concat(s,")")},class:(0,t.i)(["dropin-skeleton-row--multiline",["dropin-skeleton-row--full",r],n]),children:Array.from({length:o}).map(((e,n)=>(0,g.im)("div",{class:(0,t.i)(["dropin-skeleton-row",["dropin-skeleton-row--full",r],"dropin-skeleton--row__content",...p])},n)))}))},O=e=>{var{className:n,children:r,rowGap:o="medium"}=e,i=S(e,b);return(0,g.im)("div",v(v({style:{"--row-gap-spacing":"var(--spacing-".concat(o,")")}},i),{},{className:(0,t.i)(["dropin-skeleton",n]),role:"status","aria-label":"Loading...",children:r}))}},8884:(e,n,r)=>{r.d(n,{i:()=>t});var t=e=>e.reduce(((e,n)=>{if(!n)return e;if("string"==typeof n&&(e+=" ".concat(n)),Array.isArray(n)){var[r,t]=n;r&&t&&(e+=" ".concat(r))}return e}),"").trim()},2216:(e,n,r)=>{r.d(n,{_:()=>g});var t=r(5536),o=r.n(t),i=r(7008),a=r.n(i),l=r(1496),s=r.n(l),d=r(9356),p=r.n(d),c=r(9904),u=r.n(c),m=r(7696),f={attributes:{"data-dropin":"storefront-checkout","data-sdk":"0.21.2"}};f.styleTagTransform=function(e,n){setTimeout((()=>{window.window._loadedStyles=window.window._loadedStyles??{};const{core:r,sdk:t}=function(e,n){const r=e?.match(/^\.dropin-(\w+)/)?.[1],t=n.getAttribute("data-sdk");return{core:r,sdk:t}}(e,n),o=r?`sdk/${r}`:n.getAttribute("data-dropin");!function(e,n){e.setAttribute("data-dropin",n),e.removeAttribute("data-sdk")}(n,o);const i=window._loadedStyles[o];i?function(e,n,r,t){const o=function(e,n){const r=e=>{const[n,r]=e.split("-"),[t,o,i]=n.split(".").map(Number),a=r?r.match(/(alpha|beta)(\d*)/):null;return{major:t,minor:o,patch:i,preType:a?a[1]:"",preNumber:a?parseInt(a[2],10):0}},t=r(e),o=r(n);if(t.major!==o.major)return t.major>o.major?e:n;if(t.minor!==o.minor)return t.minor>o.minor?e:n;if(t.patch!==o.patch)return t.patch>o.patch?e:n;if(t.preType&&o.preType)return t.preType===o.preType?t.preNumber>o.preNumber?e:n:"beta"===t.preType?n:e;return t.preType?n:e}(r,t.sdk);if(!t.core||t.core&&o===t.sdk){const n=t.style.textContent;t.style.textContent=`${n}\n/* --- MERGED --- */\n${e}`}else t.core&&o!==t.sdk&&(t.style.textContent=`/* --- UPGRADED --- */\n${e}`);n.remove()}(e,n,t,i):(function(e,n,r,t,o){n.textContent=e,window._loadedStyles[o]={sdk:t,core:r,style:n}}(e,n,r,t,o),function(e,n){const r=document.querySelector("head"),{lastDropinStyleInjected:t,lastSDKStyleInjected:o}=window._loadedStyles;n?(o?r.insertBefore(e,o.nextSibling):r.insertBefore(e,r.firstChild),window._loadedStyles.lastSDKStyleInjected=e):(t?r.insertBefore(e,t.nextSibling):o?r.insertBefore(e,o.nextSibling):r.insertBefore(e,r.firstChild),window._loadedStyles.lastDropinStyleInjected=e)}(n,r))}),0)},f.setAttributes=p(),f.insert=s().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=u();o()(m.c,f);m.c&&m.c.locals&&m.c.locals;var y=r(9888),g=e=>{var{className:n,children:r,level:t=2}=e,o=t>=1&&t<=6?"h".concat(t):"h2";return(0,y.im)(o,{className:n,children:r})}},4468:(e,n,r)=>{r.d(n,{S:()=>g});var t=r(5124),o=r(2532),i=r(3672),a=r(8996),l=r(9064),s=r(5668),d=r(9488),p=r(9888),c=["preselectedFields"];function u(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function m(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?u(Object(r),!0).forEach((function(n){f(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function f(e,n,r){var t;return(n="symbol"==typeof(t=function(e,n){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var t=r.call(e,n||"default");if("object"!=typeof t)return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(n,"string"))?t:String(t))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function y(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var g=e=>{var{preselectedFields:n}=e,r=y(e,c),{data:u}=s.cartSignal.value,f=(null==u?void 0:u.id)||"",g=d.isBillToShippingSignal.value.checked,h=(0,l.kZ)((e=>(0,t.Eh)({signal:e.signal,cartId:f,address:(0,t.ek)(e.address)}).then((()=>{if(g)return(0,o.W)({cartId:f,input:{same_as_shipping:!0}})}))),[f,g]);return(0,p.im)(i.i,m(m({},r),{},{addressType:"shipping_addresses",headingId:"Checkout.ShippingAddress.title",name:a.I,preselectedFields:n,saveAddressHandler:h}))}},8996:(e,n,r)=>{r.d(n,{I:()=>t});var t="shipping_address"},2464:(e,n,r)=>{r.d(n,{Ib:()=>o.I,SW:()=>t.S,cp:()=>t.S});var t=r(4468),o=r(8996)},3248:(e,n,r)=>{r.d(n,{c:()=>l});var t=r(6008),o=r.n(t),i=r(2076),a=r.n(i)()(o());a.push([e.id,".dropin-skeleton{\n  --row-gap-spacing:var(--spacing-medium);\n  display:grid;\n  grid-template-columns:1fr 1fr;\n  gap:var(--row-gap-spacing);\n}\n\n.dropin-skeleton .dropin-skeleton--row__content{\n  background:var(--color-neutral-300) linear-gradient(\n      to right,\n      var(--color-neutral-300) 0%,\n      var(--color-neutral-100) 20%,\n      var(--color-neutral-300) 40%,\n      var(--color-neutral-300) 100%\n    ) no-repeat;\n  animation:skeletonShimmer infinite 1.2s linear;\n  border-radius:var(--shape-border-radius-2);\n}\n.dropin-skeleton__empty{\n  background:none;\n}\n\n.dropin-skeleton-row--multiline{\n  --multiline-gap-spacing:var(--spacing-medium);\n  display:grid;\n  grid-auto-rows:max-content;\n  gap:var(--multiline-gap-spacing);\n}\n\n.dropin-skeleton-row--full{\n  grid-column:1 / -1;\n}\n.dropin-skeleton-row svg{\n  fill:var(--color-neutral-400);\n  fill-opacity:0.5;\n  animation-duration:1s;\n  animation-fill-mode:forwards;\n  animation-iteration-count:infinite;\n  animation-name:placeholderShimmer;\n  animation-timing-function:linear;\n}\n\n.dropin-skeleton-row__row-xsmall{\n  height:32px;\n}\n\n.dropin-skeleton-row__row-small{\n  height:40px;\n}\n\n.dropin-skeleton-row__row-medium{\n  height:48px;\n}\n\n.dropin-skeleton-row__row-large{\n  height:56px;\n}\n\n.dropin-skeleton-row__row-xlarge{\n  height:72px;\n}\n\n.dropin-skeleton-row__heading-xsmall{\n  height:20px;\n}\n\n.dropin-skeleton-row__heading-small{\n  height:24px;\n}\n\n.dropin-skeleton-row__heading-medium{\n  height:32px;\n}\n\n.dropin-skeleton-row__heading-large{\n  height:40px;\n}\n\n.dropin-skeleton-row__heading-xlarge{\n  height:48px;\n}\n\n@keyframes skeletonShimmer{\n  0%{\n    background-position:-600px 0;\n  }\n\n  100%{\n    background-position:600px 0;\n  }\n}\n\n@keyframes placeholderShimmer{\n  0%{\n    fill-opacity:0.5;\n  }\n\n  50%{\n    fill-opacity:1;\n  }\n\n  100%{\n    fill-opacity:0.5;\n  }\n}\n@media only screen and (max-width: 600px){\n  .dropin-skeleton{\n    grid-template-columns:1fr;\n  }\n}\n",""]);const l=a},7696:(e,n,r)=>{r.d(n,{c:()=>l});var t=r(6008),o=r.n(t),i=r(2076),a=r.n(i)()(o());a.push([e.id,"\n",""]);const l=a},8122:(n,r,t)=>{n.exports=(e=>{var n={};return t.d(n,e),n})({events:()=>e.events})},8616:(e,r,t)=>{e.exports=(e=>{var n={};return t.d(n,e),n})({FetchGraphQL:()=>n.FetchGraphQL})}};import r from"../runtime.js";import*as t from"../9888.js";r.C(t);import*as o from"../2172.js";r.C(o);import*as i from"../8668.js";r.C(i);import*as a from"../5068.js";r.C(a);import*as l from"../7940.js";r.C(l);import*as s from"../9700.js";r.C(s);import*as d from"../428.js";r.C(d);import*as p from"./ShippingForm.js";r.C(p);var c,u=(c=2464,r(r.s=c)),m=u.Ib,f=u.SW,y=u.cp;export{m as SHIPPING_FORM_NAME,f as ShippingForm,y as default};