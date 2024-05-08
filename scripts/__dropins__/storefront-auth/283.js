/*! For license information please see 283.js.LICENSE.txt */
export const id=283;export const ids=[283];export const modules={1283:(t,n,e)=>{e.d(n,{b:()=>q});var r=e(6613),o=e(5292),i=e.n(o),a=e(9893),s=e.n(a),u=e(9383),l=e.n(u),c=e(8296),f=e.n(c),d=e(9088),m=e.n(d),p=e(6178),h={attributes:{"data-dropin":"core","data-sdk":"0.20.0"},styleTagTransform:function(t,n){window._loadedStyles=window._loadedStyles??{};const e=t?.match(/^\.dropin-(\w+)/)?.[1],r=n.getAttribute("data-sdk"),o=e?`sdk/${e}`:n.getAttribute("data-dropin");n.setAttribute("data-dropin",o),n.removeAttribute("data-sdk");const i=window._loadedStyles[o];if(i){const o=function(t,n){const[e,r]=t.split("-"),[o,i]=n.split("-"),a=[...e.split("."),r],s=[...o.split("."),i],u=parseInt(a[0],10),l=parseInt(s[0],10);if(u!==l)return u>l?t:n;const c=parseInt(a[1],10),f=parseInt(s[1],10);if(c!==f)return c>f?t:n;const d=parseInt(a[2],10),m=parseInt(s[2],10);if(d!==m)return d>m?t:n;if(a[3]&&s[3]){const e=/(alpha|beta)(.*)/,r=a[3].match(e),o=s[3].match(e),i=r[1],u=o[1],l=parseInt(r[2],10),c=parseInt(o[2],10);if(i===u)return l>c?t:n;if("alpha"===i&&"beta"===u)return n;if("beta"===i&&"alpha"===u)return t}return a[3]?n:t}(r,i.sdk);if(!e||e&&o===i.sdk){const n=i.style.textContent;i.style.textContent=`${n}\n/* --- MERGED --- */\n${t}`}else e&&o!==i.sdk&&(i.style.textContent=`/* --- UPGRADED --- */\n${t}`);return void n.remove()}n.textContent=t,window._loadedStyles[o]={sdk:r,core:e,style:n};const a=document.querySelector("head"),{lastDropinStyleInjected:s,lastSDKStyleInjected:u}=window._loadedStyles;e?(u?a.insertBefore(n,u.nextSibling):a.insertBefore(n,a.firstChild),window._loadedStyles.lastSDKStyleInjected=n):(s?a.insertBefore(n,s.nextSibling):u?a.insertBefore(n,u.nextSibling):a.insertBefore(n,a.firstChild),window._loadedStyles.lastDropinStyleInjected=n)}};h.setAttributes=f(),h.insert=l().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=m();i()(p.A,h);p.A&&p.A.locals&&p.A.locals;var g=e(446),y=e(2885),b=e(2739),v=e(6953),_=e(8680);function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function S(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function x(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?S(Object(e),!0).forEach((function(n){I(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):S(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function I(t,n,e){var r;return r=function(t,n){if("object"!=w(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,n||"default");if("object"!=w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(n,"string"),(n="symbol"==w(r)?r:r+"")in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function j(){j=function(){return n};var t,n={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,n,e){t[n]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{l({},"")}catch(t){l=function(t,n,e){return t[n]=e}}function c(t,n,e,r){var i=n&&n.prototype instanceof y?n:y,a=Object.create(i.prototype),s=new C(r||[]);return o(a,"_invoke",{value:E(t,e,s)}),a}function f(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=c;var d="suspendedStart",m="suspendedYield",p="executing",h="completed",g={};function y(){}function b(){}function v(){}var _={};l(_,a,(function(){return this}));var S=Object.getPrototypeOf,x=S&&S(S(A([])));x&&x!==e&&r.call(x,a)&&(_=x);var I=v.prototype=y.prototype=Object.create(_);function O(t){["next","throw","return"].forEach((function(n){l(t,n,(function(t){return this._invoke(n,t)}))}))}function F(t,n){function e(o,i,a,s){var u=f(t[o],t,i);if("throw"!==u.type){var l=u.arg,c=l.value;return c&&"object"==w(c)&&r.call(c,"__await")?n.resolve(c.__await).then((function(t){e("next",t,a,s)}),(function(t){e("throw",t,a,s)})):n.resolve(c).then((function(t){l.value=t,a(l)}),(function(t){return e("throw",t,a,s)}))}s(u.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new n((function(n,o){e(t,r,n,o)}))}return i=i?i.then(o,o):o()}})}function E(n,e,r){var o=d;return function(i,a){if(o===p)throw Error("Generator is already running");if(o===h){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var s=r.delegate;if(s){var u=k(s,r);if(u){if(u===g)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===d)throw o=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=p;var l=f(n,e,r);if("normal"===l.type){if(o=r.done?h:m,l.arg===g)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=h,r.method="throw",r.arg=l.arg)}}}function k(n,e){var r=e.method,o=n.iterator[r];if(o===t)return e.delegate=null,"throw"===r&&n.iterator.return&&(e.method="return",e.arg=t,k(n,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var i=f(o,n.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var a=i.arg;return a?a.done?(e[n.resultName]=a.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function P(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function L(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function A(n){if(n||""===n){var e=n[a];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,i=function e(){for(;++o<n.length;)if(r.call(n,o))return e.value=n[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(w(n)+" is not iterable")}return b.prototype=v,o(I,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:b,configurable:!0}),b.displayName=l(v,u,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===b||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,u,"GeneratorFunction")),t.prototype=Object.create(I),t},n.awrap=function(t){return{__await:t}},O(F.prototype),l(F.prototype,s,(function(){return this})),n.AsyncIterator=F,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new F(c(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(I),l(I,u,"Generator"),l(I,a,(function(){return this})),l(I,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=A,C.prototype={constructor:C,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!n)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function o(r,o){return s.type="throw",s.arg=n,e.next=r,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),g},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),L(e),g}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;L(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(n,e,r){return this.delegate={iterator:A(n),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=t),g}},n}function O(t,n,e,r,o,i,a){try{var s=t[i](a),u=s.value}catch(t){return void e(t)}s.done?n(u):Promise.resolve(u).then(r,o)}function F(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,o,i,a,s=[],u=!0,l=!1;try{if(i=(e=e.call(t)).next,0===n){if(Object(e)!==e)return;u=!1}else for(;!(u=(r=i.call(e)).done)&&(s.push(r.value),s.length!==n);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(l)throw o}}return s}}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return E(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return E(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var k=function(t){var n=t.initialEmailValue,e=t.routeSignUp,r=t.routeForgotPassword,o=t.routeRedirectOnSignIn,i=t.onErrorCallback,a=t.setActiveComponent,s=t.onSuccessCallback,u=t.onSignUpLinkClick,l=t.handleSetUpdateNotification,c=F((0,y.useState)(""),2),f=c[0],d=c[1],m=F((0,y.useState)(!1),2),p=m[0],h=m[1],w=F((0,y.useState)({userName:"",status:!1}),2),S=w[0],I=w[1],E=F((0,y.useState)(!1),2),k=E[0],P=E[1],L=(0,y.useCallback)(function(){var t,n=(t=j().mark((function t(n){var e,r,a,u;return j().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(P(!0),(e=(0,g.r)(n.target)).password||(h(!0),P(!1)),null==e||!e.email||null==e||!e.password||"function"!=typeof l){t.next=11;break}return r=e.email,a=e.password,t.next=7,(0,b.o)({email:r,password:a,handleSetUpdateNotification:l,onErrorCallback:i});case 7:null!=(u=t.sent)&&u.userName&&("function"==typeof o?window.location.href=o():(null==s||s({userName:null==u?void 0:u.userName,status:!0}),I({userName:null==u?void 0:u.userName,status:!0}))),n.target.reset(),h(!1);case 11:P(!1),d("");case 13:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(r,o){var i=t.apply(n,e);function a(t){O(i,r,o,a,s,"next",t)}function s(t){O(i,r,o,a,s,"throw",t)}a(void 0)}))});return function(t){return n.apply(this,arguments)}}(),[l,o,i,s]),C=(0,y.useCallback)((function(){"function"!=typeof a?"function"==typeof r&&(window.location.href=r()):a("resetPasswordForm")}),[r,a]),A=(0,y.useCallback)((function(){"function"==typeof u&&u(),"function"!=typeof a?"function"==typeof e&&(window.location.href=e()):a("signUpForm")}),[u,e,a]);return{defaultEnhancedEmailFields:(0,y.useMemo)((function(){var t=(0,_.d)(v.F);return null!=n&&n.length?t.map((function(t){return x(x({},t),{},{defaultValue:n})})):t}),[n]),passwordError:p,isSuccessful:S,isLoading:k,signInPasswordValue:f,setSignInPasswordValue:d,submitLogInUser:L,forgotPasswordCallback:C,onSignUpLinkClickCallback:A}},P=e(1581),L=e(3689),C=e(4992),A=e(4760),N=e(574),T=e(7660),U=e(5808),D=e(5127),q=function(t){var n=t.initialEmailValue,e=void 0===n?"":n,o=t.renderSignUpLink,i=void 0!==o&&o,a=t.formSize,s=void 0===a?"default":a,u=t.routeRedirectOnSignIn,l=t.routeForgotPassword,c=t.routeSignUp,f=t.onSuccessCallback,d=t.setActiveComponent,m=t.onErrorCallback,p=t.onSignUpLinkClick,h=t.successNotificationForm,g=(0,U.FV)({title:"Auth.SignInForm.title",buttonPrimary:"Auth.SignInForm.buttonPrimary",buttonSecondary:"Auth.SignInForm.buttonSecondary",buttonTertiary:"Auth.SignInForm.buttonTertiary"}),y=(0,T.S)(),b=y.updateNotification,v=y.handleSetUpdateNotification,_=k({initialEmailValue:e,routeSignUp:c,routeForgotPassword:l,routeRedirectOnSignIn:u,setActiveComponent:d,onErrorCallback:m,onSuccessCallback:f,onSignUpLinkClick:p,handleSetUpdateNotification:v}),w=_.defaultEnhancedEmailFields,S=_.passwordError,x=_.isSuccessful,I=_.isLoading,j=_.signInPasswordValue,O=_.setSignInPasswordValue,F=_.submitLogInUser,E=_.forgotPasswordCallback,q=_.onSignUpLinkClickCallback;return h&&x.status?h(x.userName):(0,D.jsxs)("div",{className:(0,r.L)(["auth-signInForm",s]),"data-testid":"signInForm",children:[(0,D.jsx)(L.h,{text:g.title,bottomLine:!1,className:"auth-signInForm__title"}),(0,D.jsx)(P.G,{className:"auth-signInForm__notification",notificationStatus:b.status,notificationText:b.text}),(0,D.jsxs)(C.l,{name:"signIn_form",className:"auth-signInForm__form",submitCallback:F,isLoading:I,fieldsConfig:w,children:[(0,D.jsx)(A.s,{className:"auth-signInForm__form__password",isError:S,initialPassword:j,setPasswordValueCallback:O}),(0,D.jsxs)("div",{className:"auth-signInForm__form__buttons",children:[(0,D.jsxs)("div",{className:"auth-signInForm__form__buttons--combine",children:[(0,D.jsx)(N.$,{type:"button",variant:"tertiary",style:{padding:0},buttonText:g.buttonTertiary,className:"auth-signInForm__button auth-signInForm__button--forgot",enableLoader:!1,onClick:E,"data-testid":"switchToSignUp"}),i?(0,D.jsx)("span",{}):null,i?(0,D.jsx)(N.$,{type:"button",variant:"tertiary",style:{padding:0},buttonText:g.buttonSecondary,className:"auth-signInForm__button auth-signInForm__button--signup",enableLoader:!1,onClick:q}):null]}),(0,D.jsx)(N.$,{type:"submit",buttonText:g.buttonPrimary,variant:"primary",className:"auth-signInForm__button auth-signInForm__button--submit",enableLoader:I})]})]})]})}},4760:(t,n,e)=>{e.d(n,{s:()=>N});var r,o=e(2885),i=e(6613),a=e(9094);function s(){return s=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},s.apply(this,arguments)}const u=function(t){return a.createElement("svg",s({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),r||(r=a.createElement("path",{d:"M17.11 18.12c2.02-.96 3.74-2.5 4.91-4.45-2.01-3.35-5.74-5.6-10.03-5.6m0 0c-.9 0-1.78.1-2.64.29m2.64-.29V4.75m8.51 6.28 2.72-2m-6.41-.14 1.64-2.81M3.47 11.03l-2.72-2m10.56 1.96c.22-.05.45-.08.69-.08 1.56 0 2.83 1.24 2.83 2.76 0 .38-.08.74-.22 1.07M12 16.43c-1.56 0-2.83-1.24-2.83-2.76 0-.3.05-.58.14-.84M6.14 9.6c-1.7.97-3.15 2.36-4.18 4.07 2.08 3.48 5.9 5.6 10.03 5.6.58 0 1.16-.04 1.72-.13m6.73 3.36-16-20",stroke:"#2B2B2B",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))};var l;function c(){return c=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},c.apply(this,arguments)}const f=function(t){return a.createElement("svg",c({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),l||(l=a.createElement("path",{d:"M11.995 8.059c-4.136-.01-7.95 2.133-10.028 5.602 2.079 3.479 5.902 5.602 10.028 5.602 4.136.01 7.95-2.133 10.028-5.602-2.008-3.351-5.74-5.602-10.028-5.602Zm0 0V4.737m8.515 6.29 2.723-2.005m-6.416-.137 1.645-2.811M3.48 11.027.757 9.032m6.416-.138-1.644-2.81m9.311 7.577c0 1.523-1.271 2.762-2.835 2.762-1.563 0-2.835-1.239-2.835-2.762s1.272-2.762 2.835-2.762c1.564 0 2.835 1.239 2.835 2.762Z",stroke:"#2B2B2B",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))};var d,m;function p(){return p=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},p.apply(this,arguments)}const h=function(t){return a.createElement("svg",p({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),d||(d=a.createElement("g",{clipPath:"url(#Locker_svg__a)",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"},a.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M7.33 11h9.33c.74 0 1.33.81 1.33 1.82v6.36c0 1-.6 1.82-1.33 1.82H7.33C6.59 21 6 20.19 6 19.18v-6.36c0-1 .6-1.82 1.33-1.82ZM8.5 10.86V6.5C8.5 4.57 10.07 3 12 3s3.5 1.57 3.5 3.5v4.36"}))),m||(m=a.createElement("defs",null,a.createElement("clipPath",{id:"Locker_svg__a"},a.createElement("path",{fill:"#fff",transform:"translate(5.25 2.25)",d:"M0 0h13.5v19.5H0z"})))))};var g=e(4272),y=e(4461),b=e(5808),v=e(5292),_=e.n(v),w=e(9893),S=e.n(w),x=e(9383),I=e.n(x),j=e(8296),O=e.n(j),F=e(9088),E=e.n(F),k=e(3079),P={attributes:{"data-dropin":"core","data-sdk":"0.20.0"},styleTagTransform:function(t,n){window._loadedStyles=window._loadedStyles??{};const e=t?.match(/^\.dropin-(\w+)/)?.[1],r=n.getAttribute("data-sdk"),o=e?`sdk/${e}`:n.getAttribute("data-dropin");n.setAttribute("data-dropin",o),n.removeAttribute("data-sdk");const i=window._loadedStyles[o];if(i){const o=function(t,n){const[e,r]=t.split("-"),[o,i]=n.split("-"),a=[...e.split("."),r],s=[...o.split("."),i],u=parseInt(a[0],10),l=parseInt(s[0],10);if(u!==l)return u>l?t:n;const c=parseInt(a[1],10),f=parseInt(s[1],10);if(c!==f)return c>f?t:n;const d=parseInt(a[2],10),m=parseInt(s[2],10);if(d!==m)return d>m?t:n;if(a[3]&&s[3]){const e=/(alpha|beta)(.*)/,r=a[3].match(e),o=s[3].match(e),i=r[1],u=o[1],l=parseInt(r[2],10),c=parseInt(o[2],10);if(i===u)return l>c?t:n;if("alpha"===i&&"beta"===u)return n;if("beta"===i&&"alpha"===u)return t}return a[3]?n:t}(r,i.sdk);if(!e||e&&o===i.sdk){const n=i.style.textContent;i.style.textContent=`${n}\n/* --- MERGED --- */\n${t}`}else e&&o!==i.sdk&&(i.style.textContent=`/* --- UPGRADED --- */\n${t}`);return void n.remove()}n.textContent=t,window._loadedStyles[o]={sdk:r,core:e,style:n};const a=document.querySelector("head"),{lastDropinStyleInjected:s,lastSDKStyleInjected:u}=window._loadedStyles;e?(u?a.insertBefore(n,u.nextSibling):a.insertBefore(n,a.firstChild),window._loadedStyles.lastSDKStyleInjected=n):(s?a.insertBefore(n,s.nextSibling):u?a.insertBefore(n,u.nextSibling):a.insertBefore(n,a.firstChild),window._loadedStyles.lastDropinStyleInjected=n)}};P.setAttributes=O(),P.insert=I().bind(null,"head"),P.domAPI=S(),P.insertStyleElement=E();_()(k.A,P);k.A&&k.A.locals&&k.A.locals;var L=e(5127);function C(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,o,i,a,s=[],u=!0,l=!1;try{if(i=(e=e.call(t)).next,0===n){if(Object(e)!==e)return;u=!1}else for(;!(u=(r=i.call(e)).done)&&(s.push(r.value),s.length!==n);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(l)throw o}}return s}}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return A(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return A(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var N=function(t){var n=t.initialPassword,e=void 0===n?"":n,r=t.required,a=t.isError,s=t.children,l=t.name,c=t.className,d=t.setPasswordValueCallback,m=t.onBlur,p=(0,b.FV)({requiredFieldError:"Auth.FormText.requiredFieldError"}),v=C((0,o.useState)(!1),2),_=v[0],w=v[1],S=(0,o.useCallback)((function(){w((function(t){return!t}))}),[]),x=a?p.requiredFieldError:"",I=a?"auth-password-field--error":"";return(0,L.jsxs)("div",{className:(0,i.L)(["auth-password-field",c,I]),children:[(0,L.jsx)(g.D,{error:x,children:(0,L.jsx)(y.p,{name:l||"password",type:_?"text":"password",placeholder:"Password",floatingLabel:"Password","aria-label":"Password","aria-required":!0,required:r||!1,value:e,onValue:d,icon:(0,L.jsx)(h,{}),onBlur:m,"data-testid":"passwordInput"})}),(0,L.jsx)("div",{className:"auth-password-field__eye-icon",onClick:S,children:_?(0,L.jsx)(f,{}):(0,L.jsx)(u,{})}),s]})}},6953:(t,n,e)=>{e.d(n,{DH:()=>o,F:()=>r,mp:()=>i});var r=[{code:"email",default_value:"",entity_type:"CUSTOMER",frontend_class:"auth-signInForm__form__email",frontend_input:"TEXT",is_required:!0,is_unique:!1,label:"Email",options:[]}],o=[{code:"email",default_value:"",entity_type:"CUSTOMER",frontend_class:"auth-resetPasswordForm__form__item",frontend_input:"TEXT",is_required:!0,is_unique:!1,label:"Email",options:[]}],i=[{code:"email",default_value:"",entity_type:"CUSTOMER",frontend_class:"",frontend_input:"TEXT",is_required:!0,is_unique:!1,label:"Email",options:[]},{code:"firstname",default_value:"",entity_type:"CUSTOMER",frontend_class:"",frontend_input:"TEXT",is_required:!0,is_unique:!1,label:"First name",options:[]},{code:"lastname",default_value:"",entity_type:"CUSTOMER",frontend_class:"",frontend_input:"TEXT",is_required:!1,is_unique:!1,label:"Last name",options:[]}]},1874:(t,n,e)=>{function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}e.d(n,{K:()=>l});var o=["default_value","frontend_input","frontend_class","is_required","code"];function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function a(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){s(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function s(t,n,e){var o;return o=function(t,n){if("object"!=r(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var o=e.call(t,n||"default");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(n,"string"),(n="symbol"==r(o)?o:o+"")in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function u(t,n){if(null==t)return{};var e,r,o=function(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var l=function(t){var n,e,r=null==t||null===(n=t.data)||void 0===n?void 0:n.attributesForm;if(null!=r&&null!==(e=r.errors)&&void 0!==e&&e.length)return{errors:r.errors};var i=(null==r?void 0:r.items)||[];return{fields:null==i?void 0:i.map((function(t){var n=t.default_value,e=t.frontend_input,r=t.frontend_class,i=t.is_required,s=t.code,l=u(t,o),c=["email","firstname","lastname"].findIndex((function(t){return t===s}))+1||5;return a(a({},l),{},{defaultValue:n||"",fieldType:e||"",className:r||"",required:i||!1,orderNumber:c,name:s,id:s,code:s})})).sort((function(t,n){return t.orderNumber-n.orderNumber}))}}},8680:(t,n,e)=>{e.d(n,{d:()=>o});var r=e(1874),o=function(t){if(null==t||!t.length)return[];var n={data:{attributesForm:{items:t}}};return(0,r.K)(n).fields||[]}},6178:(t,n,e)=>{e.d(n,{A:()=>s});var r=e(8645),o=e.n(r),i=e(278),a=e.n(i)()(o());a.push([t.id,".auth-signInForm{\n  border-radius:var(--shape-border-radius-2);\n  background-color:var(--color-neutral-50, #fff);\n  padding:var(--spacing-small) var(--spacing-small) var(--spacing-medium) var(--spacing-small);\n}\n\n@media (min-width: 768px){\n  .auth-signInForm{\n    padding:var(--spacing-big) var(--spacing-xxbig) var(--spacing-xxbig) var(--spacing-xxbig);\n  }\n}\n\n.auth-signInForm__notification{\n  margin-bottom:var(--spacing-medium);\n}\n\n.auth-signInForm.small{\n  padding:var(--spacing-small) var(--spacing-small) var(--spacing-medium) var(--spacing-small);\n}\n\n.auth-signInForm.small .auth-signInForm__form__email,\n.auth-signInForm.small .auth-signInForm__form__password,\n.auth-signInForm.small .auth-signInForm__title{\n  margin-bottom:var(--spacing-medium);\n}\n\n.auth-signInForm.small .auth-signInForm__form__buttons{\n  grid-template-columns:1fr;\n  gap:20px 0;\n}\n\n.auth-signInForm__title{\n  margin-bottom:var(--spacing-big);\n}\n\n@media (min-width: 768px){\n  .auth-signInForm__title{\n    margin-bottom:var(--spacing-xxbig);\n  }\n}\n\n.auth-signInForm__form{\n  display:grid;\n  grid-template-columns:1fr;\n}\n\n.auth-signInForm__form__email{\n  margin-bottom:var(--spacing-medium);\n}\n\n.auth-signInForm__form__password{\n  margin-bottom:var(--spacing-big);\n}\n\n.auth-signInForm__form__buttons{\n  display:grid;\n  grid-template-columns:auto auto;\n  justify-content:space-between;\n}\n\n@media (max-width: 768px){\n  .auth-signInForm__form__buttons{\n    gap:20px 0;\n    grid-template-columns:1fr;\n  }\n}\n\n.auth-signInForm.small\n  .auth-signInForm__form__buttons\n  .auth-signInForm__form__buttons--combine{\n  justify-content:center;\n  flex-wrap:wrap;\n}\n\n.auth-signInForm.small\n  .auth-signInForm__form__buttons\n  .auth-signInForm__form__buttons--combine\n  .auth-signInForm__button--signup{\n  flex-basis:100%;\n  margin-top:20px;\n}\n\n.auth-signInForm.small\n  .auth-signInForm__form__buttons\n  .auth-signInForm__form__buttons--combine\n  > span{\n  display:none;\n}\n\n.auth-signInForm__form__buttons .auth-signInForm__form__buttons--combine{\n  display:flex;\n}\n\n.auth-signInForm__form__buttons\n  .auth-signInForm__form__buttons--combine\n  > span{\n  border:var(--shape-border-width-1) solid var(--color-brand-500);\n  margin:13px 10px;\n  font:var(--type-button-2-font);\n}\n\n@media (max-width: 768px){\n  .auth-signInForm__form__buttons .auth-signInForm__form__buttons--combine{\n    justify-content:center;\n    flex-wrap:wrap;\n  }\n\n  .auth-signInForm__form__buttons\n    .auth-signInForm__form__buttons--combine\n    .auth-signInForm__button--signup{\n    flex-basis:100%;\n    margin-top:20px;\n  }\n\n  .auth-signInForm__form__buttons\n    .auth-signInForm__form__buttons--combine\n    > span{\n    display:none;\n  }\n}\n",""]);const s=a},3079:(t,n,e)=>{e.d(n,{A:()=>s});var r=e(8645),o=e.n(r),i=e(278),a=e.n(i)()(o());a.push([t.id,".auth-password-field{\n  position:relative;\n}\n\n.auth-password-field > div:first-child{\n  margin-bottom:var(--spacing-small);\n}\n\n.auth-password-field--error .auth-password-field__eye-icon{\n  right:var(--spacing-xbig);\n  transition:all 0.3s ease-in-out;\n}\n\n.auth-password-field__eye-icon{\n  position:absolute;\n  height:24px;\n  top:17px;\n  right:17px;\n  cursor:pointer;\n  z-index:2;\n}\n",""]);const s=a}};