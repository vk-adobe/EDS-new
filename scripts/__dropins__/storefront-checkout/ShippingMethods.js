import"@dropins/tools/event-bus.js";import{e as z,g as b,r as j}from"./transform-shipping-methods.js";import{i as H}from"./countries.js";import{s as N}from"./SelectedShippingMethodSignal.js";import{s as L}from"./setShippingMethods.js";import{e as W}from"./estimateShippingMethods.js";import{H as q}from"./usePreselectedFields.js";import"@dropins/tools/preact-hooks.js";import{S as w,a as k}from"./BillToShippingAddress.js";import{jsx as i,jsxs as _,Fragment as B}from"@dropins/tools/preact-jsx-runtime.js";import D from"./Delivery.js";import{I as F,R as $}from"./IllustratedMessage.js";import{u as A,c as I}from"./preact-i18n.esm.js";import{I as G}from"./Icon.js";import{P as J}from"./ProgressSpinner.js";import{P as K}from"./Price.js";import{useCallback as Q,useMemo as U,useEffect as P}from"@dropins/tools/preact-compat.js";const V=({className:e,isLoading:o=!1,onSelectionChange:s=()=>{},options:c,selection:t,...m})=>{const f=A({Title:"Checkout.ShippingMethods.title",EmptyState:"Checkout.ShippingMethods.emptyState"});return c===void 0?i(X,{}):_("div",{...m,className:I(["checkout-shipping-methods",e]),children:[i(q,{level:3,className:"checkout-shipping-methods__title",children:f.Title}),!o&&c.length===0&&i(F,{icon:i(G,{source:D}),message:i("p",{children:f.EmptyState})}),_("div",{className:I(["checkout-shipping-methods__content"]),children:[o&&i(J,{className:"checkout-shipping-methods__spinner"}),i("div",{className:I(["checkout-shipping-methods__options",["checkout-shipping-methods__options--loading",o]]),children:c.map(n=>i($,{"data-testid":"shipping-method-radiobutton","aria-busy":o,id:n.value,name:"shipping-method",className:"checkout-shipping-methods__method",label:_(B,{children:[i(K,{amount:n.amount.value,currency:n.amount.currency})," ",i("span",{children:n.carrier.title})]}),description:n.title,value:n.value,checked:(t==null?void 0:t.value)===n.value,onChange:()=>s(n)},n.value))})]})]})},X=()=>_(w,{"data-testid":"shipping-methods-skeleton",children:[i(k,{variant:"heading",size:"small"}),i(k,{variant:"empty",size:"small"}),i(k,{size:"medium",fullWidth:!0}),i(k,{size:"medium",fullWidth:!0})]}),E=(e,o)=>e.code===o.code&&e.carrier.code===o.carrier.code;function Y(e){const s=H().config,c=!s,t=z.value.data,m=z.value.pending,f=b.value.data,n=b.value.pending,g=N.value,u=t==null?void 0:t.id,C=t==null?void 0:t.shippingAddresses,p=C==null?void 0:C[0],R=!!p,y=p==null?void 0:p.availableShippingMethods,d=p==null?void 0:p.selectedShippingMethod,r=y||f,x=Q(a=>{if(!u||!R)return;const h={method_code:a.code,carrier_code:a.carrier.code};L({cartId:u,shippingMethods:[h]}).catch(v=>{console.error("setting shipping methods on cart failed:",v)})},[u,R]),T=a=>{N.value=a},l=U(()=>{if(!(r!=null&&r.length))return;const a=r[0],h=g||d;return h?r.some(S=>E(S,h))?h:a:r.find(M=>M.carrier.code===(e==null?void 0:e.carrierCode)&&M.code===(e==null?void 0:e.methodCode))||a},[g,d,r,e]);return P(()=>{l&&((!g||!E(l,g))&&(N.value=l),(!d||!E(l,d))&&x(l))},[l,g,d,x]),P(()=>{if(!u||y)return;const{country:a,selectedRegion:h,selectedRegionId:v}=j.value,S=a||(s==null?void 0:s.defaultCountry);S&&W({cartId:u,criteria:{country_code:S,region_name:h,region_id:v}}).catch(O=>{b.value={pending:!1,data:[]},console.error("shipping methods estimation failed:",O)})},[u,y,s]),{isLoading:m||c||n,options:r,selection:l,onSelectionChange:T}}const Si=({preSelectedMethod:e,...o})=>{const{isLoading:s,options:c,selection:t,onSelectionChange:m}=Y(e);return i(V,{...o,className:"checkout-shipping-methods",isLoading:s,onSelectionChange:m,options:c,selection:t})};export{Si as S};
//# sourceMappingURL=ShippingMethods.js.map