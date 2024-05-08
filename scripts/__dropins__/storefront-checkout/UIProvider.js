import{createContext as g,useMemo as y}from"@dropins/tools/preact-compat.js";import{a as h,c as x}from"./preact-i18n.esm.js";import{jsx as o}from"@dropins/tools/preact-jsx-runtime.js";function O(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var w=function(t){return j(t)&&!A(t)};function j(e){return!!e&&typeof e=="object"}function A(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||E(e)}var S=typeof Symbol=="function"&&Symbol.for,T=S?Symbol.for("react.element"):60103;function E(e){return e.$$typeof===T}function M(e){return Array.isArray(e)?[]:{}}function i(e,t){return t.clone!==!1&&t.isMergeableObject(e)?l(M(e),e,t):e}function I(e,t,r){return e.concat(t).map(function(n){return i(n,r)})}function v(e,t){if(!t.customMerge)return l;var r=t.customMerge(e);return typeof r=="function"?r:l}function P(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function u(e){return Object.keys(e).concat(P(e))}function f(e,t){try{return t in e}catch{return!1}}function C(e,t){return f(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function U(e,t,r){var n={};return r.isMergeableObject(e)&&u(e).forEach(function(a){n[a]=i(e[a],r)}),u(t).forEach(function(a){C(e,a)||(f(e,a)&&r.isMergeableObject(t[a])?n[a]=v(a,r)(e[a],t[a],r):n[a]=i(t[a],r))}),n}function l(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||I,r.isMergeableObject=r.isMergeableObject||w,r.cloneUnlessOtherwiseSpecified=i;var n=Array.isArray(t),a=Array.isArray(e),c=n===a;return c?n?r.arrayMerge(e,t,r):U(e,t,r):i(t,r)}l.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(n,a){return l(n,a,r)},{})};var _=l,D=_;const s=O(D),L={ExampleComponentName:{item:{label:"string"}},Incrementer:{decreaseLabel:"Decrease Quantity",increaseLabel:"Increase Quantity",label:"Quantity"},Modal:{Close:{label:"Close"}},InlineAlert:{dismissLabel:"Dismiss Alert"},PriceSummary:{subTotal:{label:"Subtotal",withTaxes:"Including taxes",withoutTaxes:"excluding taxes"},shipping:{label:"Shipping",editZipAction:"Apply",estimated:"Estimated Shipping",estimatedDestination:"Estimated Shipping to ",destinationLinkAriaLabel:"Change destination",zipPlaceholder:"Zip Code",withTaxes:"Including taxes",withoutTaxes:"excluding taxes",alternateField:{zip:"Estimate using country/zip",state:"Estimate using country/state"}},taxes:{total:"Tax Total",totalOnly:"Tax",breakdown:"Taxes",showBreakdown:"Show Tax Breakdown",hideBreakdown:"Hide Tax Breakdown",estimated:"Estimated Tax"},total:{estimated:"Estimated Total",label:"Total",withoutTax:"Total excluding taxes"}},ProgressSpinner:{updating:{label:"Item is updating"},updatingChildren:{label:"Items are updating"}},PriceRange:{from:{label:"From"},to:{label:"to"},asLowAs:{label:"As low as"}},Swatches:{outOfStock:{label:"out of stock swatch"},selected:{label:"swatch selected"},swatch:{label:"swatch"}},Accordion:{open:{label:"Open"},close:{label:"Close"}},CartItem:{each:{label:"each"},quantity:{label:"Quantity"},remove:{label:"Remove {product} from the cart"},removeDefault:{label:"Remove item from the cart"},taxIncluded:{label:"incl. VAT"},taxExcluded:{label:"excl. tax"},updating:{label:"{product} is updating"}}},d={Dropin:L},b={default:d,en_US:d},R=e=>s(b.default,b[e]||{}),B=g({locale:"en-US"}),z=({lang:e="en_US",langDefinitions:t={},className:r,children:n,...a})=>{const c=y(()=>{const p=s(t.default,t[e]??{});return s(R(e),p)},[e,t]),m=e.replace("_","-");return o(B.Provider,{value:{locale:m},children:o(h,{definition:c,children:o("div",{...a,className:x(["dropin-design",r]),children:n})})})};export{z as U,B as a,s as d};
//# sourceMappingURL=UIProvider.js.map