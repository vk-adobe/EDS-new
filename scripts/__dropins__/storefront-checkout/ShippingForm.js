import"@dropins/tools/event-bus.js";import{e as a}from"./transform-shipping-methods.js";import"./countries.js";import{i as d}from"./IsBillToShippingSignal.js";import{A as m}from"./estimateShippingMethods.js";import{s as n}from"./setBillingAddress.js";import{s as l,p as g}from"./setShippingAddress.js";import{A as S}from"./usePreselectedFields.js";import"@dropins/tools/preact-hooks.js";import{useCallback as c}from"@dropins/tools/preact-compat.js";import{jsx as f}from"@dropins/tools/preact-jsx-runtime.js";import{S as h}from"./constants3.js";const x=({preselectedFields:o,...p})=>{const{data:s}=a.value,r=(s==null?void 0:s.id)||"",i=d.value.checked,t=c(e=>l({signal:e.signal,cartId:r,address:g(e.address)}).then(()=>{if(i)return n({cartId:r,input:{same_as_shipping:!0}})}),[r,i]);return f(S,{...p,addressType:m.SHIPPING,headingId:"Checkout.ShippingAddress.title",name:h,preselectedFields:o,saveAddressHandler:t})};export{x as S};
//# sourceMappingURL=ShippingForm.js.map
