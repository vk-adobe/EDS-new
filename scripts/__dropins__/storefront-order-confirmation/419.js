export const id=419;export const ids=[419];export const modules={9276:(e,t,r)=>{r.d(t,{Q:()=>N,J:()=>D});var n=r(419),o=r(1857),a=r.n(o),i=r(5587);const l=JSON.parse('{"Dropin":{"ExampleComponentName":{"item":{"label":"string"}},"Incrementer":{"decreaseLabel":"Decrease Quantity","increaseLabel":"Increase Quantity","label":"Quantity"},"Modal":{"Close":{"label":"Close"}},"InlineAlert":{"dismissLabel":"Dismiss Alert"},"PriceSummary":{"subTotal":{"label":"Subtotal","withTaxes":"Including taxes"},"shipping":{"label":"Shipping","estimated":"Estimated Shipping","estimatedZip":"Estimated Shipping to ","zipLinkAriaLabel":"Change zip code","withTaxes":"Including taxes"},"taxes":{"total":"Tax Total","totalOnly":"Tax","breakdown":"Taxes","showBreakdown":"Show Tax Breakdown","hideBreakdown":"Hide Tax Breakdown"},"total":{"estimated":"Estimated Total","label":"Total","withoutTax":"Total excluding taxes"}},"ProgressSpinner":{"updating":{"label":"Item is updating"},"updatingChildren":{"label":"Items are updating"}},"PriceRange":{"from":{"label":"From"},"to":{"label":"to"},"asLowAs":{"label":"As low as"}},"Swatches":{"outOfStock":{"label":"out of stock swatch"},"selected":{"label":"swatch selected"},"swatch":{"label":"swatch"}},"Accordion":{"open":{"label":"Open"},"close":{"label":"Close"}},"CartItem":{"each":{"label":"each"},"quantity":{"label":"Quantity"},"remove":{"label":"Remove {product} from the cart"},"removeDefault":{"label":"Remove item from the cart"},"taxIncluded":{"label":"incl. VAT"},"updating":{"label":"{product} is updating"}}}}');var c=r(9724),p={default:l,en_US:l},s=r(1892),u=r.n(s),f=r(5760),d=r.n(f),m=r(8311),y=r.n(m),b=r(8192),v=r.n(b),g=r(8060),h=r.n(g),x=r(4865),w=r.n(x),O=r(9147),j={};j.styleTagTransform=w(),j.setAttributes=v(),j.insert=y().bind(null,"head"),j.domAPI=d(),j.insertStyleElement=h();u()(O.Z,j);O.Z&&O.Z.locals&&O.Z.locals;var S=r(869),C={};C.styleTagTransform=w(),C.setAttributes=v(),C.insert=y().bind(null,"head"),C.domAPI=d(),C.insertStyleElement=h();u()(S.Z,C);S.Z&&S.Z.locals&&S.Z.locals;var P=r(7188);function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}var T=["lang","langDefinitions","className","children"];function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){M(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function M(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==k(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==k(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===k(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function I(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var N=(0,n.createContext)({locale:"en-US"}),D=function(e){var t,r=e.lang,n=void 0===r?"en_US":r,o=e.langDefinitions,l=void 0===o?{}:o,s=e.className,u=e.children,f=I(e,T),d=a()(l.default,null!==(t=l[n])&&void 0!==t?t:{}),m=a()(function(e){return a()(p.default,p[e]||{})}(n),d);return(0,P.jsx)(N.Provider,{value:{locale:n.replace("_","-")},children:(0,P.jsx)(c.Pj,{definition:m,children:(0,P.jsx)("div",A(A({},f),{},{className:(0,i.S)(["dropin-design",s]),children:u}))})})}},5587:(e,t,r)=>{function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,l=[],c=!0,p=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(e){p=!0,o=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(p)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,{S:()=>a});var a=function(e){return e.reduce((function(e,t){if(!t)return e;if("string"==typeof t&&(e+=" ".concat(t)),Array.isArray(t)){var r=n(t,2),o=r[0],a=r[1];o&&a&&(e+=" ".concat(o))}return e}),"").trim()}},2743:(e,t,r)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(a=o.key,i=void 0,i=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(a,"string"),"symbol"===n(i)?i:String(i)),o)}var a,i}r.d(t,{J:()=>i,b:()=>l});var a=(new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,n;return t=e,(r=[{key:"map",get:function(){return this._map},set:function(e){this._map=e}},{key:"getMethods",value:function(){var e=this;return{setMap:function(t){e.map=t},getMap:function(){return e.map}}}}])&&o(t.prototype,r),n&&o(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())).getMethods(),i=a.setMap,l=a.getMap},1177:(e,t,r)=>{r.d(t,{F:()=>u});var n=r(5587),o=r(7188);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}var i=["node"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===a(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function u(e){var t=e.node,r=s(e,i);return t?Array.isArray(t)?(0,o.jsx)(o.Fragment,{children:t.map((function(e,t){return(0,o.jsx)(u,c({node:e,className:r.className},r),t)}))}):(r.className=(0,n.S)([t.props.className,r.className]),(0,o.jsx)(t.type,c(c({ref:t.ref},t.props),r),t.key)):null}},9147:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(4933),o=r.n(n),a=r(3476),i=r.n(a)()(o());i.push([e.id,".dropin-design{\n  --color-brand-500:#454545;\n  --color-brand-600:#383838;\n  --color-brand-700:#2b2b2b;\n  --color-neutral-50:#ffffff;\n  --color-neutral-100:#fafafa;\n  --color-neutral-200:#f5f5f5;\n  --color-neutral-300:#e8e8e8;\n  --color-neutral-400:#d6d6d6;\n  --color-neutral-500:#b8b8b8;\n  --color-neutral-600:#8f8f8f;\n  --color-neutral-700:#666666;\n  --color-neutral-800:#3d3d3d;\n  --color-neutral-900:#292929;\n  --color-positive-200:#eff5ef;\n  --color-positive-500:#7fb078;\n  --color-positive-800:#53824c;\n  --color-informational-200:#eeeffb;\n  --color-informational-500:#6978d9;\n  --color-informational-800:#5d6dd6;\n  --color-warning-200:#fdf3e9;\n  --color-warning-500:#e79f5c;\n  --color-warning-800:#cc7a2e;\n  --color-alert-200:#ffebeb;\n  --color-alert-500:#db7070;\n  --color-alert-800:#c35050;\n  --color-button-active:var(--color-brand-700);\n  --color-button-focus:var(--color-neutral-400);\n  --color-button-hover:var(--color-brand-600);\n  --color-action-button-active:var(--color-neutral-50);\n  --color-action-button-hover:var(--color-neutral-300);\n  --color-opacity-16:rgba(255, 255, 255, 0.16);\n  --color-opacity-24:rgba(255, 255, 255, 0.24);\n  --grid-1-columns:4;\n  --grid-1-margins:0;\n  --grid-1-gutters:16px;\n  --grid-2-columns:12;\n  --grid-2-margins:0;\n  --grid-2-gutters:16px;\n  --grid-3-columns:12;\n  --grid-3-margins:0;\n  --grid-3-gutters:24px;\n  --grid-4-columns:12;\n  --grid-4-margins:0;\n  --grid-4-gutters:24px;\n  --grid-5-columns:12;\n  --grid-5-margins:0;\n  --grid-5-gutters:24px;\n  --shape-border-radius-1:3px;\n  --shape-border-radius-2:8px;\n  --shape-border-radius-3:24px;\n  --shape-border-width-1:1px;\n  --shape-border-width-2:1.5px;\n  --shape-border-width-3:2px;\n  --shape-border-width-4:4px;\n  --shape-shadow-1:0 0 16px 0 rgba(0, 0, 0, 0.16);\n  --shape-shadow-2:0 2px 16px 0 rgba(0, 0, 0, 0.16);\n  --shape-shadow-3:0 2px 3px 0 rgba(0, 0, 0, 0.16);\n  --shape-icon-stroke-1:1px;\n  --shape-icon-stroke-2:1.5px;\n  --shape-icon-stroke-3:2px;\n  --shape-icon-stroke-4:4px;\n  --spacing-xxsmall:4px;\n  --spacing-xsmall:8px;\n  --spacing-small:16px;\n  --spacing-medium:24px;\n  --spacing-big:32px;\n  --spacing-xbig:40px;\n  --spacing-xxbig:48px;\n  --spacing-large:64px;\n  --spacing-xlarge:72px;\n  --spacing-xxlarge:96px;\n  --spacing-huge:120px;\n  --spacing-xhuge:144px;\n  --spacing-xxhuge:192px;\n  --type-base-font-family:system-ui, sans-serif;\n  --type-display-1-font:normal normal 300 60px/72px var(--type-base-font-family);\n  --type-display-1-letter-spacing:0.04em;\n  --type-display-2-font:normal normal 300 48px/56px var(--type-base-font-family);\n  --type-display-2-letter-spacing:0.04em;\n  --type-display-3-font:normal normal 300 34px/40px var(--type-base-font-family);\n  --type-display-3-letter-spacing:0.04em;\n  --type-headline-1-font:normal normal 400 24px/32px var(--type-base-font-family);\n  --type-headline-1-letter-spacing:0.04em;\n  --type-headline-2-default-font:normal normal 300 20px/24px var(--type-base-font-family);\n  --type-headline-2-default-letter-spacing:0.04em;\n  --type-headline-2-strong-font:normal normal 400 20px/24px var(--type-base-font-family);\n  --type-headline-2-strong-letter-spacing:0.04em;\n  --type-body-1-default-font:normal normal 300 16px/24px var(--type-base-font-family);\n  --type-body-1-default-letter-spacing:0.04em;\n  --type-body-1-strong-font:normal normal 400 16px/24px var(--type-base-font-family);\n  --type-body-1-strong-letter-spacing:0.04em;\n  --type-body-1-emphasized-font:normal normal 700 16px/24px var(--type-base-font-family);\n  --type-body-1-emphasized-letter-spacing:0.04em;\n  --type-body-2-default-font:normal normal 300 14px/20px var(--type-base-font-family);\n  --type-body-2-default-letter-spacing:0.04em;\n  --type-body-2-strong-font:normal normal 400 14px/20px var(--type-base-font-family);\n  --type-body-2-strong-letter-spacing:0.04em;\n  --type-body-2-emphasized-font:normal normal 700 14px/20px var(--type-base-font-family);\n  --type-body-2-emphasized-letter-spacing:0.04em;\n  --type-button-1-font:normal normal 400 20px/26px var(--type-base-font-family);\n  --type-button-1-letter-spacing:0.08em;\n  --type-button-2-font:normal normal 400 16px/24px var(--type-base-font-family);\n  --type-button-2-letter-spacing:0.08em;\n  --type-details-caption-1-font:normal normal 400 12px/16px var(--type-base-font-family);\n  --type-details-caption-1-letter-spacing:0.08em;\n  --type-details-caption-2-font:normal normal 300 12px/16px var(--type-base-font-family);\n  --type-details-caption-2-letter-spacing:0.08em;\n  --type-details-overline-font:normal normal 400 12px/20px var(--type-base-font-family);\n  --type-details-overline-letter-spacing:0.16em;\n}\n",""]);const l=i},869:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(4933),o=r.n(n),a=r(3476),i=r.n(a)()(o());i.push([e.id,".dropin-design a{\n  --textColor:var(--color-brand-500);\n  color:var(--textColor);\n  text-decoration:none;\n}\n\n.dropin-design a:hover{\n  --textColor:var(--color-brand-700);\n  text-decoration:solid underline var(--textColor);\n  text-underline-offset:6px;\n}\n\n.dropin-design a:focus-visible{\n  outline:solid var(--shape-border-width-4) var(--color-neutral-400);\n  border:var(--shape-border-width-1) solid var(--color-neutral-800);\n  border-radius:var(--shape-border-radius-1);\n}\n",""]);const l=i},3476:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(i[c]=!0)}for(var p=0;p<e.length;p++){var s=[].concat(e[p]);n&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),r&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=r):s[2]=r),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},4933:e=>{e.exports=function(e){return e[1]}},1857:e=>{var t=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===r}(e)}(e)};var r="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function n(e,t){return!1!==t.clone&&t.isMergeableObject(e)?c((r=e,Array.isArray(r)?[]:{}),e,t):e;var r}function o(e,t,r){return e.concat(t).map((function(e){return n(e,r)}))}function a(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return Object.propertyIsEnumerable.call(e,t)})):[]}(e))}function i(e,t){try{return t in e}catch(e){return!1}}function l(e,t,r){var o={};return r.isMergeableObject(e)&&a(e).forEach((function(t){o[t]=n(e[t],r)})),a(t).forEach((function(a){(function(e,t){return i(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,a)||(i(e,a)&&r.isMergeableObject(t[a])?o[a]=function(e,t){if(!t.customMerge)return c;var r=t.customMerge(e);return"function"==typeof r?r:c}(a,r)(e[a],t[a],r):o[a]=n(t[a],r))})),o}function c(e,r,a){(a=a||{}).arrayMerge=a.arrayMerge||o,a.isMergeableObject=a.isMergeableObject||t,a.cloneUnlessOtherwiseSpecified=n;var i=Array.isArray(r);return i===Array.isArray(e)?i?a.arrayMerge(e,r,a):l(e,r,a):n(r,a)}c.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,r){return c(e,r,t)}),{})};var p=c;e.exports=p},3152:function(e){e.exports=function(e,t,r,n,o){for(t=t.split?t.split("."):t,n=0;n<t.length;n++)e=e?e[t[n]]:o;return e===o?r:e}},9724:(e,t,r)=>{r.d(t,{Pj:()=>x,Cf:()=>E,xv:()=>k,XK:()=>I});var n,o=r(6770),a=r(4454),i=r(3152),l=r.n(i),c={};function p(e,t,r){if(3===e.nodeType){var n="textContent"in e?e.textContent:e.nodeValue||"";if(!1!==p.options.trim){var o=0===t||t===r.length-1;if((!(n=n.match(/^[\s\n]+$/g)&&"all"!==p.options.trim?" ":n.replace(/(^[\s\n]+|[\s\n]+$)/g,"all"===p.options.trim||o?"":" "))||" "===n)&&r.length>1&&o)return null}return n}if(1!==e.nodeType)return null;var a=String(e.nodeName).toLowerCase();if("script"===a&&!p.options.allowScripts)return null;var i,l,c=p.h(a,function(e){var t=e&&e.length;if(!t)return null;for(var r={},n=0;n<t;n++){var o=e[n],a=o.name,i=o.value;"on"===a.substring(0,2)&&p.options.allowEvents&&(i=new Function(i)),r[a]=i}return r}(e.attributes),(l=(i=e.childNodes)&&Array.prototype.map.call(i,p).filter(u))&&l.length?l:null);return p.visitor&&p.visitor(c),c}var s,u=function(e){return e},f={};function d(e){var t=(e.type||"").toLowerCase(),r=d.map;r&&r.hasOwnProperty(t)?(e.type=r[t],e.props=Object.keys(e.props||{}).reduce((function(t,r){var n;return t[(n=r,n.replace(/-(.)/g,(function(e,t){return t.toUpperCase()})))]=e.props[r],t}),{})):e.type=t.replace(/[^a-z0-9-]/i,"")}const m=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.setReviver=function(e){s=e},t.prototype.shouldComponentUpdate=function(e){var t=this.props;return e.wrap!==t.wrap||e.type!==t.type||e.markup!==t.markup},t.prototype.setComponents=function(e){if(this.map={},e)for(var t in e)if(e.hasOwnProperty(t)){var r=t.replace(/([A-Z]+)([A-Z][a-z0-9])|([a-z0-9]+)([A-Z])/g,"$1$3-$2$4").toLowerCase();this.map[r]=e[t]}},t.prototype.render=function(e){var t=e.wrap;void 0===t&&(t=!0);var r,a=e.type,i=e.markup,l=e.components,u=e.reviver,m=e.onError,y=e["allow-scripts"],b=e["allow-events"],v=e.trim,g=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(e,["wrap","type","markup","components","reviver","onError","allow-scripts","allow-events","trim"]),h=u||this.reviver||this.constructor.prototype.reviver||s||o.h;this.setComponents(l);var x={allowScripts:y,allowEvents:b,trim:v};try{r=function(e,t,r,o,a){var i=function(e,t){var r,o,a,i,l="html"===t?"text/html":"application/xml";"html"===t?(i="body",a="<!DOCTYPE html>\n<html><body>"+e+"</body></html>"):(i="xml",a='<?xml version="1.0" encoding="UTF-8"?>\n<xml>'+e+"</xml>");try{r=(new DOMParser).parseFromString(a,l)}catch(e){o=e}if(r||"html"!==t||((r=n||(n=function(){if(document.implementation&&document.implementation.createHTMLDocument)return document.implementation.createHTMLDocument("");var e=document.createElement("iframe");return e.style.cssText="position:absolute; left:0; top:-999em; width:1px; height:1px; overflow:hidden;",e.setAttribute("sandbox","allow-forms"),document.body.appendChild(e),e.contentWindow.document}())).open(),r.write(a),r.close()),r){var c=r.getElementsByTagName(i)[0],p=c.firstChild;return e&&!p&&(c.error="Document parse failed."),p&&"parsererror"===String(p.nodeName).toLowerCase()&&(p.removeChild(p.firstChild),p.removeChild(p.lastChild),c.error=p.textContent||p.nodeValue||o||"Unknown error",c.removeChild(p)),c}}(e,t);if(i&&i.error)throw new Error(i.error);var l=i&&i.body||i;d.map=o||f;var s=l&&function(e,t,r,n){return p.visitor=t,p.h=r,p.options=n||c,p(e)}(l,d,r,a);return d.map=null,s&&s.props&&s.props.children||null}(i,a,h,this.map,x)}catch(e){m?m({error:e}):"undefined"!=typeof console&&console.error&&console.error("preact-markup: "+e)}if(!1===t)return r||null;var w=g.hasOwnProperty("className")?"className":"class",O=g[w];return O?O.splice?O.splice(0,0,"markup"):"string"==typeof O?g[w]+=" markup":"object"==typeof O&&(O.markup=!0):g[w]="markup",h("div",g,r||null)},t}(o.Component);var y=(0,o.createContext)({intl:{}});function b(e){return null!=e}function v(e,t){for(var r in t)e[r]=t[r];return e}function g(e,t){var r=v({},e);for(var n in t)t.hasOwnProperty(n)&&(e[n]&&t[n]&&"object"==typeof e[n]&&"object"==typeof t[n]?r[n]=g(e[n],t[n]):r[n]=e[n]||t[n]);return r}var h=/[?&#]intl=show/;function x(e){var t=e.scope,r=e.mark,n=e.definition,i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(e,["scope","mark","definition"]),l=v({},(0,a.useContext)(y).intl||{});return t&&(l.scope=t),n&&(l.dictionary=g(l.dictionary||{},n)),(r||"undefined"!=typeof location&&String(location).match(h))&&(l.mark=!0),(0,o.h)(y.Provider,{value:{intl:l}},i.children)}function w(e,t){if(arguments.length<2)return t=e,function(e){return w(e,t)};function r(r){return(0,o.h)(x,t||{},(0,o.h)(e,r))}return r.getWrappedComponent=e&&e.getWrappedComponent||function(){return e},r}var O={};function j(e,t,r,n){return e&&e.replace(/\{\{([\w.-]+)\}\}/g,S.bind(null,t||O,r,n))}function S(e,t,r,n,o){for(var a=o.split("."),i=e,l=0;l<a.length;l++){if(null==(i=i[a[l]]))return"";if(i&&i.type===k)return C(i.props.id,t,r,i.props.fields,i.props.plural,i.props.fallback)}return"string"==typeof i&&i.match(/\{\{/)&&(i=j(i,e)),i}function C(e,t,r,n,o,a){t&&(e=t+"."+e);var i=r&&l()(r,e);return(o||0===o)&&i&&"object"==typeof i&&(i=i.splice?i[o]||i[0]:0===o&&b(i.none||i.zero)?i.none||i.zero:1===o&&b(i.one||i.singular)?i.one||i.singular:i.some||i.many||i.plural||i.other||i),i&&j(i,n,t,r)||a||null}function P(e){var t=e.value,r=e.id,n=(0,a.useContext)(y).intl;if(n&&n.mark){var i="dictionary"+(n&&n.scope?"."+n.scope:"")+"."+r;return(0,o.h)("mark",{style:{background:t?l()(n,i)?"rgba(119,231,117,.5)":"rgba(229,226,41,.5)":"rgba(228,147,51,.5)"},title:r},t)}return t}function k(e){var t=e.id,r=e.children,n=e.plural,i=e.fields,l=(0,a.useContext)(y).intl,c=C(t,l&&l.scope,l&&l.dictionary,i,n,r);return(0,o.h)(P,{id:t,value:c})}function T(e,t,r){var n={};for(var o in t=t||{},e=function(e){if("string"==typeof(e=e||{})&&(e=e.split(",")),"join"in e){for(var t={},r=0;r<e.length;r++){var n=e[r].trim();n&&(t[n.split(".").pop()]=n)}return t}return e}(e),e)if(e.hasOwnProperty(o)&&e[o]){var a=e[o];r||"string"!=typeof a?a.type===k&&(a=v({fallback:a.props.children},a.props),n[o]=C(a.id,t.scope,t.dictionary,a.fields,a.plural,a.fallback)):n[o]=C(a,t.scope,t.dictionary)}return n}function E(e){var t=e.children,r=(0,a.useContext)(y).intl;return t&&t.length?t.map((function(e){return(0,o.cloneElement)(e,T(e.props,r,!0))})):t&&(0,o.cloneElement)(t,T(t.props,r,!0))}function A(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}function M(e){var t=e.html,r=e.id,n=A(e,["html","id"]);return(0,o.h)(P,{id:r,value:t?"string"==typeof t?(0,o.h)(m,Object.assign({},{type:"html",trim:!1},n,{markup:t})):(0,o.h)("span",null,t):t})}function I(e){var t=(0,a.useContext)(y).intl;return T("function"==typeof e?e({intl:t}):e,t)}w.intl=w,w.IntlContext=y,w.IntlProvider=x,w.Text=k,w.MarkupText=function(e){var t=e.id,r=e.fields,n=e.plural,a=e.children,i=A(e,["id","fields","plural","children"]);return(0,o.h)(E,null,(0,o.h)(M,Object.assign({},{html:(0,o.h)(k,{id:t,fields:r,plural:n,children:a}),id:t},i)))},w.Localizer=E,w.withText=function(e){return function(t){function r(r,n){var i=(0,a.useContext)(y).intl,l=T("function"==typeof e?e(r,{intl:i}):e,i);return(0,o.h)(t,v(v({},r),l))}return r.getWrappedComponent=t&&t.getWrappedComponent||function(){return t},r}},w.useText=I,w.translate=C},1892:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},i=[],l=0;l<e.length;l++){var c=e[l],p=n.base?c[0]+n.base:c[0],s=a[p]||0,u="".concat(p," ").concat(s);a[p]=s+1;var f=r(u),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)t[f].references++,t[f].updater(d);else{var m=o(d,n);n.byIndex=l,t.splice(l,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(e,t){var r=t.domAPI(t);r.update(e);return function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var l=r(a[i]);t[l].references--}for(var c=n(e,o),p=0;p<a.length;p++){var s=r(a[p]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}a=c}}},8311:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},8060:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},8192:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},5760:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},4865:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},7188:(e,t,r)=>{r(419);var n=r(8174);r.o(n,"Fragment")&&r.d(t,{Fragment:function(){return n.Fragment}}),r.o(n,"jsx")&&r.d(t,{jsx:function(){return n.jsx}}),r.o(n,"jsxs")&&r.d(t,{jsxs:function(){return n.jsxs}})}};