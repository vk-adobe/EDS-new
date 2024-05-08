import{d as Q,u as R,H as ee}from"./usePreselectedFields.js";import{useState as te,useEffect as re,useCallback as ae}from"@dropins/tools/preact-hooks.js";import{i as ne,T as ie,n as ce}from"./countries.js";import"@dropins/tools/event-bus.js";import{S as q,a as I}from"./BillToShippingAddress.js";import{jsx as e,jsxs as l,Fragment as O}from"@dropins/tools/preact-jsx-runtime.js";import{P as se,C as X}from"./ProgressSpinner.js";import{S as oe}from"./cart-item.js";import H from"./WarningWithCircle.js";import{useState as V,useMemo as U,useContext as le,useCallback as K}from"@dropins/tools/preact-compat.js";import{a as de}from"./UIProvider.js";import{c as s,L as W,T as D,u as M}from"./preact-i18n.esm.js";import{I as x}from"./Icon.js";import z from"./Minus.js";import A from"./Add.js";import me from"./Trash.js";import{V as v}from"./vcomponent.js";import{B as ue}from"./Button.js";import{g as pe}from"./image-params-keymap.js";import{P}from"./Price.js";import{D as L}from"./Divider.js";import{e as _e}from"./transform-shipping-methods.js";const F={medium:768,large:1024,xlarge:1366,xxlarge:1920},he=(a,t)=>{const[n,r]=a.split("?"),i=new URLSearchParams(r),o=pe();let d={};return o&&Object.keys(o).length>0&&t?d=Object.entries(t).reduce((c,[u,_])=>{const p=o[u];return p&&(c[p]=_),c},{}):d={auto:"webp",quality:80,crop:!1,fit:"cover",...t},Object.entries(d).forEach(([c,u])=>{u!=null&&i.set(c,String(u))}),`${n}?${i.toString()}`},fe=(a,t)=>{if(!a||!(t!=null&&t.width))return;const n=r=>he(a,{...r});return Object.entries(F).map(([,r])=>{const i=t.width*r/F.xxlarge;return`${n({...t,width:i})} ${r}w`}).join(`,
`)};function ye(a){window.location.href=a}const Ne=({name:a,value:t="1",className:n,disabled:r,error:i,success:o,min:d,max:c,onValue:u,onUpdateError:_,size:p="medium",...g})=>{const[m,h]=te(Number(t)),f=Number(d),S=Number(c);re(()=>{h(Number(t))},[t]);const C=ae(Q(async N=>{if(u)try{await u(N)}catch(y){_&&_(y)}},200),[u,_]),k=N=>{let y=N;N<f&&(y=f),N>S&&(y=S),C(y),h(y)};return e("div",{className:s(["dropin-incrementer",`dropin-incrementer--${p}`,n]),children:l("div",{className:s(["dropin-incrementer__content",`dropin-incrementer__content--${p}`,["dropin-incrementer__content--error",i],["dropin-incrementer__content--success",o],["dropin-incrementer__content--disabled",r]]),children:[e("div",{className:s(["dropin-incrementer__button-container",["dropin-incrementer__button-container--disabled",r]]),children:e(W,{children:e("button",{type:"button",className:s(["dropin-incrementer__decrease-button",["dropin-incrementer__decrease-button--disabled",r]]),onClick:()=>k(m-1),disabled:r||m<f+1,"aria-label":e(D,{id:"Dropin.Incrementer.decreaseLabel"}),children:e(x,{source:z,size:"16",stroke:"1",viewBox:"4 2 20 20",className:"dropin-incrementer__down"})})})}),e("input",{className:"dropin-incrementer__input",max:c,min:d,step:1,type:"number",name:a,value:m,disabled:r,onChange:N=>{const y=N.currentTarget.value;y!==""&&k(Number(y))},...g}),e("div",{className:s(["dropin-incrementer__button-container",["dropin-incrementer__button-container--disabled",r]]),children:e(W,{children:e("button",{type:"button",className:s(["dropin-incrementer__increase-button",["dropin-incrementer__increase-button--disabled",r]]),onClick:()=>k(m+1),disabled:r||m>S-1,"aria-label":e(D,{id:"Dropin.Incrementer.increaseLabel"}),children:e(x,{source:A,size:"16",stroke:"1",viewBox:"4 2 20 20",className:"dropin-incrementer__add"})})})})]})})},ge=({className:a,src:t,params:n,loading:r="lazy",srcSet:i,onLoad:o,...d})=>{const[c,u]=V(!1),_=U(()=>{if(i)return i;if(!(!t||!n))return fe(t,{...n})},[n,t,i]),p=g=>{u(!0),o==null||o(g)};return e("img",{...d,className:s(["dropin-image",["dropin-image--loaded",c],a]),loading:r,onLoad:p,src:t,srcSet:_})},J=({className:a,children:t,title:n,secondaryText:r,actionIconPosition:i="left",iconOpen:o=A,iconClose:d=z,iconLeft:c=A,showIconLeft:u=!1,renderContentWhenClosed:_=!0,onStateChange:p,...g})=>{const[m,h]=V(!1),f=y=>{y.stopImmediatePropagation();const $=!m;h($),p==null||p($)},S=M(`Dropin.Accordion.${m?"close":"open"}.label`).label,C=e(x,{source:o,size:"24",onClick:f,onKeyPress:f,className:"dropin-accordion-section__open-icon"}),k=e(x,{source:d,size:"24",onClick:f,onKeyPress:f,className:"dropin-accordion-section__close-icon"}),N=e(x,{source:c,size:"24"});return l("div",{...g,className:s(["dropin-accordion-section",a]),children:[l("div",{className:"dropin-accordion-section__heading",children:[e("div",{className:"dropin-accordion-section__flex",onClick:f,onKeyPress:f,role:"button","aria-label":`${S} ${n}`,tabIndex:0,children:l("div",{className:"dropin-accordion-section__title-container",children:[i==="left"&&(m?k:C),u&&N,e("h3",{className:"dropin-accordion-section__title",children:n})]})}),l("div",{className:"dropin-accordion-section__secondary-text-container",children:[r&&e("h4",{className:"dropin-accordion-section__secondary-text",children:r}),i==="right"&&(m?k:C)]})]}),e("div",{className:"dropin-accordion-section__content-container",style:{display:m?"grid":"none"},children:(m||_&&!m)&&t})]})},ke=({className:a,children:t,actionIconPosition:n="left",iconOpen:r=A,iconClose:i=z,...o})=>{const d=e(L,{variant:"secondary"}),c=u=>l(O,{children:[e(J,{...u.props,actionIconPosition:n,iconOpen:r,iconClose:i}),d]});return e("div",{...o,className:s(["dropin-accordion",a]),children:[d,...(Array.isArray(t)?t:[t]).map(c)]})},be=({className:a,children:t,ariaLabel:n,image:r,title:i,price:o,taxIncluded:d=!1,taxExcluded:c=!1,total:u,totalExcludingTax:_,sku:p,configurations:g,warning:m,alert:h,quantity:f=1,description:S,loading:C=!1,updating:k=!1,onQuantity:N,onRemove:y,...$})=>{var j,B;const{locale:E}=le(de),b=M({each:"Dropin.CartItem.each.label",quantity:"Dropin.CartItem.quantity.label",remove:"Dropin.CartItem.remove.label",removeDefault:"Dropin.CartItem.removeDefault.label",taxIncluded:"Dropin.CartItem.taxIncluded.label",taxExcluded:"Dropin.CartItem.taxExcluded.label",updating:"Dropin.CartItem.updating.label",updatingDefault:"Dropin.ProgressSpinner.updating.label"});return C?e(w,{}):l("div",{...$,className:s(["dropin-cart-item",["dropin-cart-item--updating",k],a]),children:[k&&e(se,{className:s(["dropin-cart-item__spinner"]),ariaLabel:n?(j=b.updating)==null?void 0:j.replace("{product}",n):b.updatingDefault}),l("div",{className:"dropin-cart-item__wrapper",children:[e(v,{node:r,className:s(["dropin-cart-item__image"])}),e(v,{node:i,className:s(["dropin-cart-item__title",["dropin-cart-item__title--edit",!!N||!!y]])}),S&&e(v,{node:S,className:s(["dropin-cart-item__description"])}),e(v,{node:p,className:s(["dropin-cart-item__sku"])}),g&&e("ul",{className:s(["dropin-cart-item__configurations"]),children:Object.entries(g).map(([T,Z])=>l("li",{className:s(["dropin-cart-item__configurations__item"]),children:[T,":"," ",e("strong",{className:s(["dropin-cart-item__configurations__item__value"]),children:Z})]},T))}),l("span",{className:s(["dropin-cart-item__price"]),children:[!N&&l("span",{className:"dropin-cart-item__price__quantity",children:[f.toLocaleString(E)," x"," "]}),e(v,{node:o,role:"text"}),f>1&&l(O,{children:[" ",b.each]}),d&&l("span",{"data-testid":"tax-message",className:"dropin-cart-item__price-tax-message",children:[" ",b.taxIncluded]}),c&&l("span",{"data-testid":"tax-message",className:"dropin-cart-item__price-tax-message",children:[" ",b.taxExcluded]})]}),l("div",{className:s(["dropin-cart-item__quantity",["dropin-cart-item__quantity--edit",!!N]]),children:[N?e(Ne,{className:s(["dropin-cart-item__quantity__incrementer"]),value:f,min:1,onValue:T=>N==null?void 0:N(Number(T)),name:"quantity","aria-label":b.quantity,disabled:k}):l("span",{className:s(["dropin-cart-item__quantity__value"]),children:[b.quantity,":"," ",e("strong",{className:"dropin-cart-item__quantity__number",children:Number(f).toLocaleString(E)})]}),m&&e(v,{node:m,className:s(["dropin-cart-item__warning","dropin-cart-item__warning--quantity"])}),h&&e(v,{node:h,className:s(["dropin-cart-item__alert","dropin-cart-item__alert--quantity"])})]}),m&&e(v,{node:m,className:s(["dropin-cart-item__warning"])}),h&&e(v,{node:h,className:s(["dropin-cart-item__alert"])}),l("div",{className:s(["dropin-cart-item__total",["dropin-cart-item__total--edit",!!y]]),children:[e("div",{className:"dropin-cart-item__row-total",children:e(v,{node:u,role:"text"})}),d&&l("span",{"data-testid":"tax-message",className:s(["dropin-cart-item__total-tax-message"]),children:[" ",b.taxIncluded]}),c&&e("div",{className:"dropin-cart-item__total-tax-excluded",children:l("span",{"data-testid":"tax-message",className:s(["dropin-cart-item__total-tax-excluded-message"]),children:[_&&e(v,{node:_,role:"text"})," ",b.taxExcluded]})})]})]}),y&&e(ue,{className:s(["dropin-cart-item__remove"]),variant:"tertiary",onClick:()=>y==null?void 0:y(),icon:e(x,{source:me,size:"24",stroke:"2",viewBox:"0 0 24 24","aria-label":n?(B=b.remove)==null?void 0:B.replace("{product}",n):b.removeDefault}),disabled:k})]})},w=()=>e("div",{className:"dropin-cart-item dropin-cart-item-skeleton",children:l(q,{className:"dropin-cart-item__skeleton dropin-cart-item__wrapper",children:[e("div",{className:"dropin-cart-item__image",children:e(I,{className:"dropin-cart-item__skeleton__item"})}),e("div",{className:"dropin-cart-item__title",children:e(I,{className:"dropin-cart-item__skeleton__item"})}),e("div",{className:"dropin-cart-item__sku",children:e(I,{className:"dropin-cart-item__skeleton__item"})}),e("div",{className:"dropin-cart-item__price",children:e(I,{className:"dropin-cart-item__skeleton__item"})}),e("div",{className:"dropin-cart-item__quantity",children:e(I,{className:"dropin-cart-item__skeleton__item"})}),e("div",{className:"dropin-cart-item__total",children:e(I,{className:"dropin-cart-item__skeleton__item"})})]})}),ve=()=>e(X,{children:l(q,{"data-testid":"cart-summary-skeleton",className:"checkout-cart-summary-skeleton",style:{gridTemplateColumns:"1fr"},children:[e(I,{variant:"heading",fullWidth:!0,size:"medium"}),e(w,{}),e(w,{}),e(w,{}),e(w,{}),e(w,{}),e(I,{size:"medium",fullWidth:!0})]})}),Se=()=>e(q,{"data-testid":"cart-summary-skeleton",className:"checkout-mobile-cart-summary-skeleton",style:{gridTemplateColumns:"1fr"},children:e(I,{fullWidth:!0,size:"xlarge"})}),G=({type:a,onClick:t,children:n})=>l(O,{children:[e(L,{className:"checkout-cart-summary__divider-bottom",variant:"primary"}),e("button",{"data-testid":`action-${a}`,className:"checkout-cart-summary__action",onClick:t,children:n})]}),Ie=({title:a,isLoading:t,totalQuantity:n,routeCart:r,items:i,taxIncluded:o,action:d})=>e(O,{children:t?e(Se,{}):e(ke,{actionIconPosition:"left",children:l(J,{title:`${a} (${n})`,secondaryText:(r==null?void 0:r())&&e("a",{href:r==null?void 0:r(),rel:"noreferrer",children:e(D,{id:"Checkout.CartSummary.editCart"})}),children:[i==null?void 0:i.map(c=>e(Y,{item:c,taxIncluded:o},c==null?void 0:c.uid)),d]})})}),xe=({title:a,isLoading:t,totalQuantity:n,routeCart:r,items:i,action:o,taxIncluded:d})=>e(O,{children:t?e(ve,{}):l(X,{children:[l("div",{className:"checkout-cart-summary__heading",children:[l(ee,{level:2,className:"checkout-cart-summary__title",children:[a," (",n,")"]}),(r==null?void 0:r())&&e("a",{className:"checkout-cart-summary__edit",href:r==null?void 0:r(),rel:"noreferrer",children:e(D,{id:"Checkout.CartSummary.editCart"})})]}),e(L,{className:"checkout-cart-summary__divider-top",variant:"primary"}),e("div",{className:"checkout-cart-summary__items",children:i==null?void 0:i.map(c=>e(Y,{item:c,taxIncluded:d},c==null?void 0:c.uid))}),o]})}),Ce=({className:a,...t})=>{const n=M("Checkout.CartSummary.title").title,r=R();return e("div",{className:s(["checkout-cart-summary",a]),children:r==="small"?e(Ie,{title:n,...t}):e(xe,{title:n,...t})})},Y=({className:a,item:t,taxIncluded:n=!1})=>{var p,g;const r=M({Sender:"Checkout.CartSummary.GiftCard.sender",Recipient:"Checkout.CartSummary.GiftCard.recipient",Message:"Checkout.CartSummary.GiftCard.message",Download:"Checkout.CartSummary.Downloadable.download",OutOfStockAlert:"Checkout.OutOfStock.alert",..."links"in t&&t.links?{Files:e(D,{id:"Checkout.CartSummary.Downloadable.files",plural:t.links.length,fields:{count:t.links.length}})}:{}});let i=t.regularPrice,o=t.total;n&&(i=t.priceInclTax,o=t.totalInclTax);const d={..."customizableOptions"in t?t.customizableOptions:{},..."configurableOptions"in t?t.configurableOptions:{},..."links"in t&&t.links?{[r.Files]:t.links.join(", ")}:{},..."senderName"in t&&t.senderName?{[r.Sender]:t.senderName}:{},..."recipientName"in t&&t.recipientName?{[r.Recipient]:t.recipientName}:{},..."senderEmail"in t&&"senderName"in t&&t.senderName&&t.senderEmail?{[r.Sender]:`${t.senderName} (${t.senderEmail})`}:{},..."recipientEmail"in t&&"recipientName"in t&&t.recipientName&&t.recipientEmail?{[r.Recipient]:`${t.recipientName} (${t.recipientEmail})`}:{},..."message"in t&&t.message&&t.message!=""?{[r.Message]:c(t.message,60)}:{}};function c(m,h){return m.length>h?`${m.slice(0,h)}...`:m}const u=t.stockStatus===oe.OutOfStock?l("span",{"data-testid":"checkout-cart-item-alert",children:[e(x,{source:H,size:"16"}),r.OutOfStockAlert]}):void 0,_=!u&&t.onlyXLeftInStock?l("span",{"data-testid":"checkout-cart-item-low-inventory",children:[e(x,{source:H,size:"16"}),e(D,{id:"Checkout.OutOfStock.lowInventory",plural:t.onlyXLeftInStock,fields:{count:t.onlyXLeftInStock}})]}):void 0;return e("div",{className:s(["checkout-cart-summary-item",a]),children:e(be,{"data-testid":"cart-summary-item",taxIncluded:n,title:e("div",{"data-testid":"product-name",children:t.name}),sku:e("div",{children:t.sku}),quantity:t.quantity,image:e(ge,{src:((p=t.image)==null?void 0:p.src)??"",alt:(g=t.image)==null?void 0:g.alt,loading:"lazy",width:"80",height:"80",params:{width:80}}),warning:_,alert:u,configurations:d,price:e(P,{amount:t.regularPrice.value,currency:i.currency,weight:"normal"}),total:l(O,{children:[e(P,{amount:t.regularPrice.value*t.quantity,currency:i.currency,variant:t.discounted?"strikethrough":"default"}),t.discounted&&e(P,{amount:o.value,currency:o.currency,sale:!0})]})},t.uid)})},we=5,De={canDisplayMoreItems:!1,hasHiddenItems:!1,isLoading:!0,isTaxIncluded:!1,totalQuantity:0,visibleItems:[]};function Oe(a){const{config:t}=ne(),n=t===void 0,r=_e.value.data;if(n||r===void 0)return De;const{cartSummaryMaxItems:o,cartSummaryTotalDisplay:d,taxCartDisplay:c}=t,u=d===ie.Quantity,_=c.shoppingCartDisplayPrice===ce.IncludingTax,{items:p,totalQty:g}=r,m=u?g:p.length,h=a?o:Math.min(o,we),f=p.length>h,S=p.slice(0,h);return{canDisplayMoreItems:f&&!a&&h!=o,hasHiddenItems:f,isLoading:!1,isTaxIncluded:_,totalQuantity:m,visibleItems:S}}const Qe=({routeCart:a,...t})=>{const[n,r]=V(!1),i=M({ViewAll:"Checkout.CartSummary.viewAll",ViewMore:"Checkout.CartSummary.viewMore"}),{canDisplayMoreItems:o,hasHiddenItems:d,isLoading:c,isTaxIncluded:u,visibleItems:_,totalQuantity:p}=Oe(n),g=K(()=>{r(!0)},[]),m=K(()=>{a&&ye(a())},[a]),h=U(()=>{if(d){if(o)return e(G,{type:"view-more",onClick:g,children:i.ViewMore});if(a)return e(G,{type:"view-all",onClick:m,children:i.ViewAll})}},[d,o,g,i.ViewMore,i.ViewAll,m,a]);return e(Ce,{...t,action:h,taxIncluded:u,isLoading:c,items:_,routeCart:a,totalQuantity:p})};export{Qe as C,Oe as u};
//# sourceMappingURL=CartSummary.js.map
