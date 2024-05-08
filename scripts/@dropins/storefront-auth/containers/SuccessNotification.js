import*as n from"@dropins/tools/preact-compat.js";import*as t from"@dropins/tools/preact-jsx-runtime.js";export const id=506;export const ids=[506];export const modules={3459:(n,t,r)=>{r.d(t,{$:()=>O});var e=r(6613),o=r(5704),i=r(5292),a=r.n(i),c=r(9893),s=r.n(c),d=r(9383),l=r.n(d),u=r(8296),p=r.n(u),b=r(9088),f=r.n(b),v=r(8429),m={attributes:{"data-dropin":"core","data-sdk":"0.20.0"},styleTagTransform:function(n,t){window._loadedStyles=window._loadedStyles??{};const r=n?.match(/^\.dropin-(\w+)/)?.[1],e=t.getAttribute("data-sdk"),o=r?`sdk/${r}`:t.getAttribute("data-dropin");t.setAttribute("data-dropin",o),t.removeAttribute("data-sdk");const i=window._loadedStyles[o];if(i){const o=function(n,t){const[r,e]=n.split("-"),[o,i]=t.split("-"),a=[...r.split("."),e],c=[...o.split("."),i],s=parseInt(a[0],10),d=parseInt(c[0],10);if(s!==d)return s>d?n:t;const l=parseInt(a[1],10),u=parseInt(c[1],10);if(l!==u)return l>u?n:t;const p=parseInt(a[2],10),b=parseInt(c[2],10);if(p!==b)return p>b?n:t;if(a[3]&&c[3]){const r=/(alpha|beta)(.*)/,e=a[3].match(r),o=c[3].match(r),i=e[1],s=o[1],d=parseInt(e[2],10),l=parseInt(o[2],10);if(i===s)return d>l?n:t;if("alpha"===i&&"beta"===s)return t;if("beta"===i&&"alpha"===s)return n}return a[3]?t:n}(e,i.sdk);if(!r||r&&o===i.sdk){const t=i.style.textContent;i.style.textContent=`${t}\n/* --- MERGED --- */\n${n}`}else r&&o!==i.sdk&&(i.style.textContent=`/* --- UPGRADED --- */\n${n}`);return void t.remove()}t.textContent=n,window._loadedStyles[o]={sdk:e,core:r,style:t};const a=document.querySelector("head"),{lastDropinStyleInjected:c,lastSDKStyleInjected:s}=window._loadedStyles;r?(s?a.insertBefore(t,s.nextSibling):a.insertBefore(t,a.firstChild),window._loadedStyles.lastSDKStyleInjected=t):(c?a.insertBefore(t,c.nextSibling):s?a.insertBefore(t,s.nextSibling):a.insertBefore(t,a.firstChild),window._loadedStyles.lastDropinStyleInjected=t)}};m.setAttributes=p(),m.insert=l().bind(null,"head"),m.domAPI=s(),m.insertStyleElement=f();a()(v.A,m);v.A&&v.A.locals&&v.A.locals;var y=r(5127);function g(n){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},g(n)}var h=["value","variant","size","icon","className","children","disabled","active","activeChildren","activeIcon","href"];function x(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.push.apply(r,e)}return r}function w(n){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){j(n,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))}))}return n}function j(n,t,r){var e;return e=function(n,t){if("object"!=g(n)||!n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var e=r.call(n,t||"default");if("object"!=g(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(n)}(t,"string"),(t="symbol"==g(e)?e:e+"")in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}function S(n,t){if(null==n)return{};var r,e,o=function(n,t){if(null==n)return{};var r,e,o={},i=Object.keys(n);for(e=0;e<i.length;e++)r=i[e],t.indexOf(r)>=0||(o[r]=n[r]);return o}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(e=0;e<i.length;e++)r=i[e],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}var O=function(n){var t=n.value,r=n.variant,i=void 0===r?"primary":r,a=n.size,c=void 0===a?"medium":a,s=n.icon,d=n.className,l=n.children,u=n.disabled,p=void 0!==u&&u,b=n.active,f=void 0!==b&&b,v=n.activeChildren,m=n.activeIcon,g=n.href,x=S(n,h),j="dropin-button";(s&&!l||s&&f&&!v||!s&&f&&m)&&(j="dropin-iconButton"),f&&v&&(j="dropin-button"),d=(0,e.L)([j,"".concat(j,"--").concat(c),"".concat(j,"--").concat(i),["".concat(j,"--").concat(i,"--disabled"),p],l&&s&&"".concat(j,"--with-icon"),!l&&v&&s&&"".concat(j,"--with-icon"),f&&m&&"".concat(j,"--with-icon"),d]);var O=(0,e.L)(["dropin-button-icon","dropin-button-icon--".concat(i),["dropin-button-icon--".concat(i,"--disabled"),p],null==s?void 0:s.props.className]),B=g?w(w({node:(0,y.jsx)("a",{}),role:"link",href:g},x),{},{disabled:p,active:f}):w(w({node:(0,y.jsx)("button",{}),role:"button"},x),{},{value:t,disabled:p,active:f});return(0,y.jsxs)(o.a,w(w({},B),{},{className:d,children:[s&&!f&&(0,y.jsx)(o.a,{node:s,className:O}),m&&f&&(0,y.jsx)(o.a,{node:m,className:O}),l&&!f&&("string"==typeof l?(0,y.jsx)("span",{children:l}):l),f&&v&&("string"==typeof v?(0,y.jsx)("span",{children:v}):v)]}))}},6613:(n,t,r)=>{function e(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var e,o,i,a,c=[],s=!0,d=!1;try{if(i=(r=r.call(n)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(e=i.call(r)).done)&&(c.push(e.value),c.length!==t);s=!0);}catch(n){d=!0,o=n}finally{try{if(!s&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(d)throw o}}return c}}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return o(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}r.d(t,{L:()=>i});var i=function(n){return n.reduce((function(n,t){if(!t)return n;if("string"==typeof t&&(n+=" ".concat(t)),Array.isArray(t)){var r=e(t,2),o=r[0],i=r[1];o&&i&&(n+=" ".concat(o))}return n}),"").trim()}},5704:(n,t,r)=>{r.d(t,{a:()=>u});var e=r(6613),o=r(5127);function i(n){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},i(n)}var a=["node"];function c(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.push.apply(r,e)}return r}function s(n){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){d(n,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))}))}return n}function d(n,t,r){var e;return e=function(n,t){if("object"!=i(n)||!n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var e=r.call(n,t||"default");if("object"!=i(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(n)}(t,"string"),(t="symbol"==i(e)?e:e+"")in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}function l(n,t){if(null==n)return{};var r,e,o=function(n,t){if(null==n)return{};var r,e,o={},i=Object.keys(n);for(e=0;e<i.length;e++)r=i[e],t.indexOf(r)>=0||(o[r]=n[r]);return o}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(e=0;e<i.length;e++)r=i[e],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}function u(n){var t=n.node,r=l(n,a);return t?Array.isArray(t)?(0,o.jsx)(o.Fragment,{children:t.map((function(n,t){return(0,o.jsx)(u,s({node:n,className:r.className},r),t)}))}):(r.className=(0,e.L)([t.props.className,r.className]),(0,o.jsx)(t.type,s(s({ref:t.ref},t.props),r),t.key)):null}},9155:(n,t,r)=>{r.d(t,{d:()=>h,A:()=>h});var e=r(6613),o=r(5292),i=r.n(o),a=r(9893),c=r.n(a),s=r(9383),d=r.n(s),l=r(8296),u=r.n(l),p=r(9088),b=r.n(p),f=r(2444),v={attributes:{"data-dropin":"core","data-sdk":"0.20.0"},styleTagTransform:function(n,t){window._loadedStyles=window._loadedStyles??{};const r=n?.match(/^\.dropin-(\w+)/)?.[1],e=t.getAttribute("data-sdk"),o=r?`sdk/${r}`:t.getAttribute("data-dropin");t.setAttribute("data-dropin",o),t.removeAttribute("data-sdk");const i=window._loadedStyles[o];if(i){const o=function(n,t){const[r,e]=n.split("-"),[o,i]=t.split("-"),a=[...r.split("."),e],c=[...o.split("."),i],s=parseInt(a[0],10),d=parseInt(c[0],10);if(s!==d)return s>d?n:t;const l=parseInt(a[1],10),u=parseInt(c[1],10);if(l!==u)return l>u?n:t;const p=parseInt(a[2],10),b=parseInt(c[2],10);if(p!==b)return p>b?n:t;if(a[3]&&c[3]){const r=/(alpha|beta)(.*)/,e=a[3].match(r),o=c[3].match(r),i=e[1],s=o[1],d=parseInt(e[2],10),l=parseInt(o[2],10);if(i===s)return d>l?n:t;if("alpha"===i&&"beta"===s)return t;if("beta"===i&&"alpha"===s)return n}return a[3]?t:n}(e,i.sdk);if(!r||r&&o===i.sdk){const t=i.style.textContent;i.style.textContent=`${t}\n/* --- MERGED --- */\n${n}`}else r&&o!==i.sdk&&(i.style.textContent=`/* --- UPGRADED --- */\n${n}`);return void t.remove()}t.textContent=n,window._loadedStyles[o]={sdk:e,core:r,style:t};const a=document.querySelector("head"),{lastDropinStyleInjected:c,lastSDKStyleInjected:s}=window._loadedStyles;r?(s?a.insertBefore(t,s.nextSibling):a.insertBefore(t,a.firstChild),window._loadedStyles.lastSDKStyleInjected=t):(c?a.insertBefore(t,c.nextSibling):s?a.insertBefore(t,s.nextSibling):a.insertBefore(t,a.firstChild),window._loadedStyles.lastDropinStyleInjected=t)}};v.setAttributes=u(),v.insert=d().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=b();i()(f.A,v);f.A&&f.A.locals&&f.A.locals;var m=r(3459),y=r(5127),g=function(n){var t=n.formSize,r=void 0===t?"default":t,o=n.className,i=void 0===o?"":o,a=n.headingText,c=void 0===a?"":a,s=n.messageText,d=void 0===s?"":s,l=n.primaryButtonText,u=void 0===l?"":l,p=n.secondaryButtonText,b=void 0===p?"":p,f=n.onPrimaryButtonClick,v=n.onSecondaryButtonClick;return u||b?(0,y.jsxs)("div",{className:(0,e.L)(["auth-successNotificationForm",r,i]),children:[(0,y.jsx)("p",{className:"auth-successNotificationForm__title","data-testid":"notification-title",children:c}),(0,y.jsx)("p",{className:"auth-successNotificationForm__content-text","data-testid":"notification-content",children:d}),(0,y.jsx)(m.$,{type:"button",className:"auth-successNotificationForm__button auth-successNotificationForm__button--top",onClick:f,children:u}),(0,y.jsx)(m.$,{type:"button",variant:"tertiary",onClick:v,children:b})]}):null},h=function(n){var t=n.formSize,r=void 0===t?"default":t,e=n.className,o=n.headingText,i=n.messageText,a=n.primaryButtonText,c=n.secondaryButtonText,s=n.onPrimaryButtonClick,d=n.onSecondaryButtonClick;return(0,y.jsx)("div",{className:"auth-success-notification",children:(0,y.jsx)(g,{className:e,headingText:o,messageText:i,primaryButtonText:a,secondaryButtonText:c,formSize:r,onPrimaryButtonClick:s,onSecondaryButtonClick:d})})}},8429:(n,t,r)=>{r.d(t,{A:()=>c});var e=r(8645),o=r.n(e),i=r(278),a=r.n(i)()(o());a.push([n.id,".dropin-button,\n.dropin-iconButton{\n  border:0 none;\n  cursor:pointer;\n  white-space:normal;\n}\n\n.dropin-button{\n  border-radius:var(--shape-border-radius-3);\n  font-size:var(--type-button-1-font);\n  font-weight:var(--type-button-1-font);\n  padding:var(--spacing-xsmall) var(--spacing-medium);\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  text-align:left;\n  word-wrap:break-word;\n}\n\n.dropin-iconButton{\n  height:var(--spacing-xbig);\n  width:var(--spacing-xbig);\n  padding:var(--spacing-xsmall);\n}\n\n.dropin-button:disabled,\n.dropin-iconButton:disabled{\n  pointer-events:none;\n  user-select:none;\n}\n\n.dropin-button:not(:disabled),\n.dropin-iconButton:not(:disabled){\n  cursor:pointer;\n}\n\n.dropin-button:focus,\n.dropin-iconButton:focus{\n  outline:none;\n}\n\n.dropin-button:focus-visible,\n.dropin-iconButton:focus-visible{\n  outline:var(--spacing-xxsmall) solid var(--color-button-focus);\n}\n.dropin-button--primary,\na.dropin-button--primary,\n.dropin-iconButton--primary{\n  border:none;\n  background:var(--color-brand-500) 0 0% no-repeat padding-box;\n  color:var(--color-neutral-50);\n  text-align:left;\n  margin-right:0;\n}\n\n.dropin-iconButton--primary{\n  border-radius:var(--spacing-xbig);\n  min-height:var(--spacing-xbig);\n  min-width:var(--spacing-xbig);\n  padding:var(--spacing-xsmall);\n}\n\n.dropin-button--primary--disabled,\na.dropin-button--primary--disabled,\n.dropin-iconButton--primary--disabled{\n  background:var(--color-neutral-300) 0 0% no-repeat padding-box;\n  color:var(--color-neutral-500);\n  fill:var(--color-neutral-300);\n  pointer-events:none;\n  user-select:none;\n}\n\n.dropin-button--primary:hover,\na.dropin-button--primary:hover,\n.dropin-iconButton--primary:hover,\n.dropin-button--primary:focus:hover,\n.dropin-iconButton--primary:focus:hover{\n  background-color:var(--color-button-hover);\n  text-decoration:none;\n}\n\n.dropin-button--primary:focus,\n.dropin-iconButton--primary:focus{\n  background-color:var(--color-brand-500);\n}\n\n.dropin-button--primary:hover:active,\n.dropin-iconButton--primary:hover:active{\n  background-color:var(--color-button-active);\n}\n.dropin-button--secondary,\na.dropin-button--secondary,\n.dropin-iconButton--secondary{\n  border:var(--shape-border-width-2) solid var(--color-brand-500);\n  background:none 0 0% no-repeat padding-box;\n  color:var(--color-brand-500);\n  padding-top:calc(var(--spacing-xsmall) - var(--shape-border-width-2));\n  padding-left:calc(var(--spacing-medium) - var(--shape-border-width-2));\n}\n\n.dropin-iconButton--secondary{\n  border-radius:var(--spacing-xbig);\n  min-height:var(--spacing-xbig);\n  min-width:var(--spacing-xbig);\n  padding:var(--spacing-xsmall);\n  padding-top:calc(var(--spacing-xsmall) - var(--shape-border-width-2));\n  padding-left:calc(var(--spacing-xsmall) - var(--shape-border-width-2));\n}\n\n.dropin-button--secondary--disabled,\na.dropin-button--secondary--disabled,\n.dropin-iconButton--secondary--disabled{\n  border:var(--shape-border-width-2) solid var(--color-neutral-300);\n  background:none 0 0% no-repeat padding-box;\n  color:var(--color-neutral-500);\n  fill:var(--color-neutral-300);\n  pointer-events:none;\n  user-select:none;\n}\n\n.dropin-button--secondary:hover,\na.dropin-button--secondary:hover,\n.dropin-iconButton--secondary:hover{\n  border:var(--shape-border-width-2) solid var(--color-button-hover);\n  color:var(--color-button-hover);\n  text-decoration:none;\n}\n\n.dropin-button--secondary:active,\n.dropin-iconButton--secondary:active{\n  border:var(--shape-border-width-2) solid var(--color-button-active);\n  color:var(--color-button-active);\n}\n.dropin-button--tertiary,\na.dropin-button--tertiary,\n.dropin-iconButton--tertiary{\n  border:none;\n  background:none 0 0% no-repeat padding-box;\n  color:var(--color-brand-500);\n}\n\n.dropin-iconButton--tertiary{\n  border:none;\n  border-radius:var(--spacing-xbig);\n  min-height:var(--spacing-xbig);\n  min-width:var(--spacing-xbig);\n  padding:var(--spacing-xsmall);\n}\n\n.dropin-button--tertiary--disabled,\na.dropin-button--tertiary--disabled,\n.dropin-iconButton--tertiary--disabled{\n  border:none;\n  color:var(--color-neutral-500);\n  pointer-events:none;\n  user-select:none;\n}\n\n.dropin-button--tertiary:hover,\na.dropin-button--tertiary:hover,\n.dropin-iconButton--tertiary:hover{\n  color:var(--color-button-hover);\n  text-decoration:none;\n}\n\n.dropin-button--tertiary:active,\n.dropin-iconButton--tertiary:active{\n  color:var(--color-button-active);\n}\n\n.dropin-button--tertiary:focus-visible,\n.dropin-iconButton--tertiary:focus-visible{\n  -webkit-box-shadow:inset 0 0 0 2px var(--color-neutral-800);\n  -moz-box-shadow:inset 0 0 0 2px var(--color-neutral-800);\n  box-shadow:inset 0 0 0 2px var(--color-neutral-800);\n}\n.dropin-button--large{\n  font:var(--type-button-1-font);\n  letter-spacing:var(--type-button-1-letter-spacing);\n}\n\n.dropin-button--medium{\n  font:var(--type-button-2-font);\n  letter-spacing:var(--type-button-2-letter-spacing);\n}\n\n.dropin-button-icon{\n  height:24px;\n}\n.dropin-button--with-icon{\n  column-gap:var(--spacing-xsmall);\n  row-gap:var(--spacing-xsmall);\n}\n",""]);const c=a},2444:(n,t,r)=>{r.d(t,{A:()=>c});var e=r(8645),o=r.n(e),i=r(278),a=r.n(i)()(o());a.push([n.id,".auth-successNotificationForm{\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  flex-direction:column;\n  border-radius:var(--shape-border-radius-2);\n  background:var(--color-neutral-50, #fff);\n  padding:var(--spacing-xbig) var(--spacing-small) var(--spacing-medium) var(--spacing-small);\n}\n\n@media (min-width: 768px){\n  .auth-successNotificationForm{\n    padding:var(--spacing-big) var(--spacing-xbig) var(--spacing-xxbig) var(--spacing-xbig);\n  }\n}\n\n.auth-successNotificationForm.small{\n  padding:var(--spacing-small) var(--spacing-small) var(--spacing-medium) var(--spacing-small);\n}\n\n.auth-successNotificationForm__title{\n  color:var(--color-neutral-800, #2b2b2b);\n  font:var(--type-headline-2-strong-font);\n  letter-spacing:var(--type-details-caption-1-letter-spacing);\n  margin-bottom:var(--spacing-medium);\n}\n\n.auth-successNotificationForm__content-text{\n  color:var(--color-neutral-800, #2b2b2b);\n  font:var(--type-body-1-default-font);\n  letter-spacing:var(--type-body-1-default-letter-spacing);\n  text-align:center;\n  margin-bottom:var(--spacing-xxbig);\n}\n\n.auth-successNotificationForm__button--top{\n  margin-bottom:var(--spacing-xsmall);\n}\n",""]);const c=a},278:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var r="",e=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),e&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=n(t),e&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(n,r,e,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(e)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);e&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},8645:n=>{n.exports=function(n){return n[1]}},5292:n=>{var t=[];function r(n){for(var r=-1,e=0;e<t.length;e++)if(t[e].identifier===n){r=e;break}return r}function e(n,e){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],d=e.base?s[0]+e.base:s[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=r(u),b={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(b);else{var f=o(b,e);e.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function o(n,t){var r=t.domAPI(t);r.update(n);return function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;r.update(n=t)}else r.remove()}}n.exports=function(n,o){var i=e(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=r(i[a]);t[c].references--}for(var s=e(n,o),d=0;d<i.length;d++){var l=r(i[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=s}}},9383:n=>{var t={};n.exports=function(n,r){var e=function(n){if(void 0===t[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}t[n]=r}return t[n]}(n);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(r)}},9088:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},8296:n=>{n.exports=function(n,t){Object.keys(t).forEach((function(r){n.setAttribute(r,t[r])}))}},9893:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(r){!function(n,t,r){var e="";r.supports&&(e+="@supports (".concat(r.supports,") {")),r.media&&(e+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(e+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),e+=r.css,o&&(e+="}"),r.media&&(e+="}"),r.supports&&(e+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(e,n,t.options)}(t,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},1771:(t,r,e)=>{t.exports=(n=>{var t={};return e.d(t,n),t})({Suspense:()=>n.Suspense,createContext:()=>n.createContext,lazy:()=>n.lazy,memo:()=>n.memo,useRef:()=>n.useRef,useState:()=>n.useState})},997:(n,r,e)=>{n.exports=(n=>{var t={};return e.d(t,n),t})({Fragment:()=>t.Fragment,jsx:()=>t.jsx,jsxs:()=>t.jsxs})},5127:(n,t,r)=>{r(1771);var e=r(997);r.o(e,"Fragment")&&r.d(t,{Fragment:function(){return e.Fragment}}),r.o(e,"jsx")&&r.d(t,{jsx:function(){return e.jsx}}),r.o(e,"jsxs")&&r.d(t,{jsxs:function(){return e.jsxs}})}};import r from"../runtime.js";import*as e from"./SuccessNotification.js";r.C(e);var o,i=(o=9155,r(r.s=o)),a=i.d,c=i.A;export{a as SuccessNotification,c as default};