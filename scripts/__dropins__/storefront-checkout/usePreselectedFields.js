import{events as me}from"@dropins/tools/event-bus.js";import{r as x,e as ee}from"./transform-shipping-methods.js";import{o as G,V as R,u as pe,p as he,i as fe,q as ge}from"./countries.js";import{b as J,a as $,A as T,e as _e,D as j,g as ve,M as K,c as Fe}from"./estimateShippingMethods.js";import{useCallback as P,useRef as te,useState as B,useEffect as z,useMemo as ke}from"@dropins/tools/preact-hooks.js";import{c as C,T as ne,u as Ie}from"./preact-i18n.esm.js";import{S as ye,a as S}from"./BillToShippingAddress.js";import{jsxs as M,jsx as o,Fragment as V}from"@dropins/tools/preact-jsx-runtime.js";import{V as A}from"./vcomponent.js";import{createElement as $e}from"@dropins/tools/preact.js";import Ce from"./WarningWithCircle.js";import Ne from"./CheckWithCircle.js";import{I as Z}from"./Icon.js";import{useState as U,useEffect as W,forwardRef as Ee,useRef as be,useImperativeHandle as we}from"@dropins/tools/preact-compat.js";import Se from"./ChevronDown.js";const re=e=>{const t=new FormData(e),n=Object.fromEntries(t);return Object.entries(n).reduce((i,[s])=>{const a=e.elements[s];return a!=null&&a.validationMessage?{...i,[s]:a.validationMessage}:{...i}},{})},Ae=(e,t)=>{let n;return function(...r){clearTimeout(n),n=setTimeout(()=>e.apply(this,r),t)}},X={firstname:"given-name",lastname:"family-name",company:"organization",country:"country",region:"address-level1",city:"address-level2",postcode:"postal-code",telephone:"tel",street:"address-line1",email:"email",middlename:"additional-name",prefix:"honorific-prefix",suffix:"honorific-suffix"};function ae(e){return Object.keys(e).length===0&&e.constructor===Object}const Me=e=>(e==null?void 0:e.label)&&(e==null?void 0:e.value),xe=e=>e?e.filter(Me).map(t=>({text:t.label,value:t.value})):[],Re=e=>e.map(t=>{var r;const n=((r=t==null?void 0:t.id)==null?void 0:r.toString())||t.code;return{text:t.name,value:n}}),De=e=>e?e.map(t=>({text:t.label,value:t.value})):[];function Le({fields:e,address:t,setAddress:n,addressType:r,errors:i,config:s,availableCountries:a,availableRegions:c,onSelection:m,onChange:u,onBlur:d,onInvalid:v}){const f=()=>{n(l=>({...l,[$.Region]:"",[$.RegionId]:""}))},g=l=>{n(F=>({...F,[$.RegionId]:l}))};return e.map(l=>{var E;let F=l.is_required,I,h=l.frontend_input,p=[],w,_,y=!1;if(h==="MULTILINE"?(I=J(l.code,t),w=J(l.code,i)):(I=t[l.code],w=i[l.code]||""),l.code!==$.Region&&l.code!==$.Country&&(p=xe(l.options)),l.code===$.Country&&(p=De(a),r===T.SHIPPING?(x.value.country=I,_=k=>{const N=k.target,{value:b}=N;b&&q({country_code:b}),m(k),f()}):_=m),l.code===$.RegionId&&r===T.SHIPPING&&(x.value.selectedRegionId=I),l.code===$.Region){if(r===x.value.addressType&&(y=x.value.pending),F=s.countriesWithRequiredRegion.includes(t==null?void 0:t.country_id),p=Re(c),!F&&!s.displayStateIfOptional&&(h=G.Undefined),h=p.length>0?G.Select:G.Text,h==="SELECT")r===T.SHIPPING?(x.value.selectedRegion=I,_=k=>{const b=k.target.value;q({country_code:x.value.country,region_id:b}),m(k),g(b)}):_=k=>{m(k);const b=k.target.value;g(b)};else if(h==="TEXT"&&r===T.SHIPPING){x.value.selectedRegion=I;const k=u;u=N=>{const b=N.target,{value:D}=b;x.value.country&&q({country_code:x.value.country,region_name:D}),k(N)}}I=p.length>0?((E=p.find(k=>k.value===I))==null?void 0:E.value)||"":I}return l.code===$.PostCode&&(F=!s.countriesWithOptionalZipCode.includes(t==null?void 0:t.country_id)),{...l,is_required:F,frontend_input:h,addressType:r,className:`checkout-address-form__${l.code}`,value:I,options:p,error:w,onChange:u,onBlur:d,onInvalid:v,handleSelect:_,disabled:y}})}let Q;function q(e){var s;const t=ee.value.data,n=!!t,r=(s=t==null?void 0:t.shippingAddresses)==null?void 0:s[0],i=r==null?void 0:r.availableShippingMethods;n&&!i&&(clearTimeout(Q),Q=setTimeout(()=>{_e({cartId:t.id,criteria:e})},j))}const ie=({name:e,value:t,variant:n="primary",className:r,disabled:i,error:s,floatingLabel:a,onValue:c,onUpdateError:m,size:u="medium",icon:d,maxLength:v,success:f,...g})=>{const l=(g==null?void 0:g.id)||e||`dropin-input-${Math.random().toString(36)}`,F=P(Ae(async h=>{if(c)try{await c(h)}catch(p){m&&m(p)}},200),[c,m]),I=h=>{const p=h.target;F(p.value.trim())};return M("div",{className:C(["dropin-input-container",`dropin-input-container--${n}`,["dropin-input-container--floating",!!a],["dropin-input-container--disabled",i]]),children:[d&&o(A,{node:d,className:C(["dropin-input__field-icon--left",d.props.className])}),M("div",{className:"dropin-input-label-container",children:[o("input",{id:l,onChange:I,type:"text",maxLength:v,name:e,value:t,...g,className:C(["dropin-input",`dropin-input--${u}`,`dropin-input--${n}`,["dropin-input--error",!!s],["dropin-input--success",!!f],["dropin-input--disabled",i],["dropin-input--floating",!!a],["dropin-input--icon-left",!!d],r]),disabled:i}),a&&o("label",{htmlFor:l,className:C([["dropin-input__label--floating",!!a],["dropin-input__label--floating--icon-left",!!d],["dropin-input__label--floating--error",!!s]]),children:a})]}),s&&o("div",{className:C(["dropin-input__field-icon--right","dropin-input__field-icon--error"]),children:o(Z,{source:Ce,size:"16",stroke:"2",className:"dropin-input--warning-icon",viewBox:"-1 -1 26 26"})}),f&&o("div",{className:C(["dropin-input__field-icon--right","dropin-input__field-icon--success"]),children:o(Z,{source:Ne,size:"16",stroke:"2",className:"dropin-input--success-icon",viewBox:"-1 -1 26 26"})})]})},Te=({name:e,value:t=null,options:n,variant:r="primary",floatingLabel:i,size:s="medium",handleSelect:a=()=>{},disabled:c=!1,error:m=!1,placeholder:u,defaultOption:d,icon:v,className:f,...g})=>{var E;const l=(g==null?void 0:g.id)||e||`dropin-picker-${Math.random().toString(36)}`,F=n==null?void 0:n.find(k=>!k.disabled),[I,h]=U({value:t,text:(d==null?void 0:d.text)||u||(F==null?void 0:F.text),icon:v});W(()=>{const k=n==null?void 0:n.find(N=>N.value===t);h(k??{value:(d==null?void 0:d.value)||(u||i?null:F==null?void 0:F.value),text:(d==null?void 0:d.text)||u||(F==null?void 0:F.text),icon:v})},[t,n,u,v,d,i]);const p=k=>{const{options:N,value:b}=k.target;for(const D of N)D.selected&&(h({value:b,text:D.text,icon:v}),a(k))},w=n==null?void 0:n.map(k=>{const{value:N,text:b,disabled:D}=k,H=N===I.value;return o("option",{value:N,selected:H,disabled:D,className:C(["dropin-picker__option"]),children:b},N)}),_=te(null),y=!((E=_.current)!=null&&E.selected)||!!d;return M("div",{className:C([f,"dropin-picker",`dropin-picker__${s}`,["dropin-picker__floating",!!i],["dropin-picker__selected",y],["dropin-picker__error",m],["dropin-picker__disabled",c],["dropin-picker__icon",v]]),children:[v&&o(v.type,{...v.props,className:"dropin-picker__icon--placeholder"}),M("select",{id:l,className:C(["dropin-picker__select",`dropin-picker__select--${r}`,`dropin-picker__select--${s}`,["dropin-picker__select--floating",!!i]]),name:e,"aria-label":e,disabled:c,onChange:p,...g,children:[!d&&(i||u)&&o("option",{value:"",ref:_,className:C(["dropin-picker__option dropin-picker__placeholder"]),children:i??u},t),w]}),o(Z,{source:Se,size:"24",stroke:"2",className:"dropin-picker__chevronDown"}),i&&y&&o("label",{htmlFor:l,className:C(["dropin-picker__floatingLabel",!!i]),children:i})]})},O=({className:e,label:t,error:n,hint:r,success:i,size:s="medium",disabled:a=!1,children:c,...m})=>{var v;const u=((v=c==null?void 0:c.props)==null?void 0:v.id)??`dropin-field-${Math.random().toString(36)}`,d=c&&typeof c.type!="string"?c.type:null;return M("div",{...m,className:C(["dropin-field",e]),children:[t&&o("label",{className:C(["dropin-field__label",["dropin-field__label--disabled",a],`dropin-field__label--${s}`]),htmlFor:u,children:t}),o("div",{className:C(["dropin-field__content"]),children:d&&c&&$e(d,{...c.props,id:u,key:c.key,disabled:a,size:s,error:!!n,success:!!i&&!n})}),o("div",{className:C(["dropin-field__hint",[`dropin-field__hint--${s}`,s],["dropin-field__hint--error",!!n],["dropin-field__hint--success",!!i&&!n],["dropin-field__hint--disabled",!!a]]),children:n||i||r})]})},ze=()=>{const e=()=>window.innerWidth>=1920?"xxlarge":window.innerWidth>=1366?"xlarge":window.innerWidth>=1024?"large":window.innerWidth>=768?"medium":"small",[t,n]=B(e());return z(()=>{let r;const i=()=>{r&&clearTimeout(r),r=setTimeout(()=>n(e()),50)};return window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i),r&&clearTimeout(r)}},[]),t},oe=({children:e,className:t})=>ze()==="small"?o(V,{children:e}):o("div",{className:t,children:e}),Pe=({sections:e})=>o(oe,{className:"checkout__aside",children:M(V,{children:[o(A,{node:e.orderSummary}),o(A,{node:e.cartSummary})]})}),Ve=({billingAddress:e,billToShippingAddress:t,login:n,paymentMethods:r,placeOrder:i,shippingAddress:s,shippingMethods:a})=>M(V,{children:[o(A,{node:n}),s&&o(A,{node:s}),t&&o(A,{node:t}),a&&o(A,{node:a}),o(A,{node:r}),o(A,{node:e}),o(A,{node:i})]}),Be=({outOfStock:e,sections:t})=>o(oe,{className:"checkout__main",children:M(V,{children:[o(le,{level:1,className:"checkout-title",children:o(ne,{id:"Checkout.title"})}),e&&o(A,{className:"checkout-outOfStock",node:e}),t&&o(Ve,{...t})]})}),se=e=>{const{banner:t,className:n,children:r,...i}=e;return M("div",{className:C(["checkout",n]),...i,children:[t&&o(A,{className:"checkout__banner",node:t}),o("div",{className:"checkout__content",children:r})]})};se.Main=Be;se.Aside=Pe;const Ue=e=>{const{id:t,addressType:n,className:r,code:i,value:s,default_value:a}=e;return o("input",{className:r,id:`${n}-${t||i}`,name:i,type:"hidden",value:s??a},i)},We=e=>{const{addressType:t,className:n,code:r,error:i,id:s,onBlur:a,onChange:c,onInvalid:m,validate_rules:u,value:d}=e,v=ce(u),f=s||r;return o(O,{disabled:e.disabled,error:i,children:o(ie,{"aria-label":e.label,autocomplete:X[r]||"off",className:n,floatingLabel:`${e.label} ${e.is_required?"*":""}`,id:`${t}-${f}`,onBlur:a,onChange:c,onInvalid:m,placeholder:e.label,required:e.is_required||!1,type:"text",name:r,value:d??void 0,...v})})},He=e=>{const{addressType:t,className:n,code:r,disabled:i,error:s,id:a,is_required:c,label:m,multiline_count:u,onBlur:d,onChange:v,onInvalid:f,validate_rules:g,value:l}=e,F=u??0,I=a||r,h=ce(g);return o(V,{children:Array.from(Array(F).keys()).map(p=>o(O,{disabled:i,error:(s==null?void 0:s[p])||"",className:"dropin-field--multiline",children:o(ie,{id:`${t}-${I}-${p}`,className:n,floatingLabel:`${m} ${p!=0?p:""} ${c&&p===0?"*":""}`,autocomplete:p===0?X[r]:"off","aria-label":m,placeholder:`${m} ${p!=0?p:""}`,type:"text",required:c&&p===0,onChange:v,onBlur:d,onInvalid:f,name:`${r}-${p}`,value:(l==null?void 0:l[p])||void 0,...h})},`${r}-${p}`))})},Ge=e=>{const{addressType:t,className:n,code:r,disabled:i,error:s,handleSelect:a,id:c,is_required:m,label:u,onBlur:d,onInvalid:v,options:f,value:g}=e,l=c||r,F=a?{handleSelect:a}:{};return o(O,{disabled:i,error:s,children:o(Te,{id:`${t}-${l}`,className:n,name:r,floatingLabel:`${u} ${m?"*":""}`,required:m,placeholder:u,"aria-label":u,options:f,value:g,autocomplete:X[r]||"off",onBlur:d,onInvalid:v,...F},r)})},qe=e=>{switch(e.frontend_input){case"BOOLEAN":case"DATE":case"DATETIME":case"FILE":case"GALLERY":case"IMAGE":case"MEDIA_IMAGE":case"MULTISELECT":case"PRICE":case"TEXTAREA":case"UNDEFINED":case"WEIGHT":return null;case"HIDDEN":return Ue(e);case"TEXT":return We(e);case"MULTILINE":return He(e);case"SELECT":return Ge(e);default:throw new Error(`Unknown field type: ${e.frontend_input}`)}},ce=e=>e.reduce((t,n)=>{switch(n.name){case R.DateRangeMax:return{...t,max:n.value};case R.DateRangeMin:return{...t,min:n.value};case R.FileExtensions:return{...t,accept:n.value};case R.InputValidation:return{...t,pattern:Ze(n.value)};case R.MaxFileSize:case R.MaxImageHeight:case R.MaxImageWidth:return t;case R.MaxTextLength:return{...t,maxLength:n.value};case R.MinTextLength:return{...t,minLength:n.value};default:throw new Error(`Unknown rule: ${n.name}`)}},{}),L={alpha:/^[a-zA-Z]+$/,alphanumeric:/^[a-zA-Z0-9]+$/,"alphanumeric-w-space":/^[a-zA-Z0-9 ]+$/,"alphanum-with-spaces":/^[a-zA-Z0-9 ]+$/,email:/^([a-z0-9,!#$%&'*+/=?^_`{|}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9,!#$%&'*+/=?^_`{|}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*@([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*\.(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]){2,})$/i,numeric:/^[0-9]+$/,url:/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w\-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/},Ze=e=>{switch(e){case"alpha":return L.alpha.source;case"alphanumeric":return L.alphanumeric.source;case"alphanumeric-w-space":return L["alphanumeric-w-space"].source;case"alphanum-with-spaces":return L["alphanum-with-spaces"].source;case"url":return L.url.source;case"numeric":return L.numeric.source;case"email":return L.email.source;default:throw new Error(`Unknown validation type: ${e}`)}},je=({className:e,name:t,headingId:n,formRef:r,fields:i,...s})=>M("div",{...s,className:C(["checkout-fields-form",e]),children:[o(le,{level:2,children:o(ne,{id:n}),className:"checkout-fields-form__title"}),o("form",{name:t,ref:r,className:C(["checkout-fields-form__form",e]),noValidate:!0,children:i.sort((a,c)=>a.sort_order-c.sort_order).map(qe)})]}),Xe=e=>M(ye,{...e,children:[o(S,{variant:"heading",size:"medium"}),o(S,{variant:"empty",size:"medium"}),o(S,{size:"large"}),o(S,{size:"large"}),o(S,{size:"large",fullWidth:!0}),o(S,{size:"large",fullWidth:!0,lines:3}),o(S,{size:"large"}),o(S,{size:"large"}),o(S,{size:"large"}),o(S,{size:"large"}),o(S,{size:"large"}),o(S,{size:"large"}),o(S,{size:"large"})]}),le=({className:e,children:t,level:n=2})=>{const r=n>=1&&n<=6?`h${n}`:"h2";return o(r,{className:e,children:t})};function Oe(e){const[t,n]=U({});return W(()=>{e&&n(r=>({...r,country_id:e}))},[e]),{defaultValues:t}}function Ye({country:e,addressType:t}){const[n,r]=U([]);return W(()=>{if(!e){r([]);return}ve(e,t).then(i=>{r(i||[])}).catch(i=>{console.error(i)})},[r,e,t]),{availableRegions:n}}function Je({shouldAutoFillForm:e,addressType:t,setAddress:n,fields:r}){const[i,s]=U(!1),a=ee.value.data;W(()=>{var I;if(i||!(a&&r))return;s(!0);const m=t===T.SHIPPING?a==null?void 0:a.shippingAddresses:a==null?void 0:a.billingAddress;if(!(Array.isArray(m)?m.length>0:!!m)||e&&!e())return;const v=h=>{if(!r)return!1;const p=r.find(w=>w.code===h);return p?p.frontend_input==="MULTILINE":!1},f=Array.isArray(m)?m[0]:m;if(!f)return;const g={[$.City]:f.city,[$.Company]:f.company||"",[$.Country]:f.country.value,[$.FirstName]:f.firstName,[$.LastName]:f.lastName,[$.PostCode]:f.postCode||"",[$.Telephone]:f.telephone||"",[$.Vat]:f.vatId||""},l=f.region;if(l){const h=(I=l==null?void 0:l.id)==null?void 0:I.toString();h?(g[$.Region]=h,g[$.RegionId]=h):g[$.Region]=l.code}f!=null&&f.street&&f.street.length>0&&f.street.forEach((h,p)=>{g[`${$.Street}${K}${p}`]=h}),((f==null?void 0:f.customAttributes)||[]).forEach(h=>{v(h.code)?h.value.split(Fe).forEach((w,_)=>{g[`${h.code}${K}${_}`]=w}):g[h.code]=h.value}),n(g)},[n,e,t,a,r,i])}const It=Ee(({name:e,preselectedFields:t,addressType:n,headingId:r,saveAddressHandler:i,children:s,shouldAutoFillForm:a,...c},m)=>{const{fields:u}=pe(),{countries:d}=he(),v=d===void 0,f=u===void 0,{config:g}=fe(),l=g===void 0,{defaultValues:F}=Oe(g==null?void 0:g.defaultCountry),{preselection:I}=it({fields:u,preselectedFields:t}),h=be(null),{address:p,setAddress:w,onSelection:_,errors:y,onChange:E,onInvalid:k,onBlur:N}=rt({formRef:h,type:n,defaultValues:F,preselection:I,saveAddressHandler:i}),{availableRegions:b}=Ye({country:p.country_id,addressType:n});if(we(m,()=>({triggerSaveAddress:ue=>{if(!h.current)return;const de=re(h.current);if(ae(de))return i({signal:ue,address:p})}})),Je({shouldAutoFillForm:a,addressType:n,setAddress:w,fields:u}),f||v||l)return o(Xe,{"data-testid":`${n}-skeleton`});const H=Le({fields:u,address:p,setAddress:w,addressType:n,errors:y,config:g,availableCountries:d,availableRegions:b,onSelection:_,onChange:E,onBlur:N,onInvalid:k}),Y={[T.SHIPPING]:"shipping",[T.BILLING]:"billing"};return o(je,{...c,"data-testid":`${Y[n]}-form`,name:e,className:`checkout-${Y[n]}-form`,headingId:r,formRef:h,fields:H})});function Ke(e){const{backupService:t}=ge(),[n,r]=B(null);z(()=>{const a=t.restore(e);a&&r(a)},[e,t]),z(()=>{const a=me.on("checkout/order",()=>{t.remove(e)});return()=>{a==null||a.off()}},[e,t]);const i=P(a=>setTimeout(()=>{t.backup(e,a)},j),[e,t]),s=P(()=>{t.remove(e)},[e,t]);return{addressBackup:n,backup:i,removeBackup:s}}const Qe={badInput:"aria-label",patternMismatch:"aria-label",rangeOverflow:"max",rangeUnderflow:"min",tooLong:"maxlength",tooShort:"minlength",typeMismatch:"aria-label",valueMissing:"aria-label"},et=["badInput","patternMismatch","rangeOverflow","rangeUnderflow","tooLong","tooShort","typeMismatch","valueMissing"],tt=e=>{const[t,n]=B({}),r=P(i=>{const{name:s,validity:a,validationMessage:c}=i;let m=a.valid?"":c;et.forEach(u=>{if(!a[u])return;const d=e[u];if(!d)return;const v=Qe[u];m=d.replace("{field}",i.getAttribute(v)||"")}),n(u=>({...u,[s]:m}))},[e]);return{errors:t,validateFormElement:r}},nt=e=>{const t=e.current;if(!t)return!1;const n=re(t);return ae(n)},rt=({formRef:e,type:t,defaultValues:n={},preselection:r={},saveAddressHandler:i})=>{const s=Ie({badInput:"Checkout.AddressForm.Validity.badInput",patternMismatch:"Checkout.AddressForm.Validity.patternMismatch",rangeUnderflow:"Checkout.AddressForm.Validity.rangeUnderflow",tooLong:"Checkout.AddressForm.Validity.tooLong",tooShort:"Checkout.AddressForm.Validity.tooShort",typeMismatch:"Checkout.AddressForm.Validity.typeMismatch",valueMissing:"Checkout.AddressForm.Validity.valueMissing"}),a=te(!1),[c,m]=B({}),{addressBackup:u,backup:d,removeBackup:v}=Ke(t),{errors:f,validateFormElement:g}=tt(s),l=P(_=>{a.current=!1,i(_).then(()=>{v()}).catch(y=>{a.current=!0,console.error("Saving address form failed:",y)})},[v,i]),F=(_,y)=>{m(E=>({...E,[_]:y})),a.current=!0},I=_=>{const y=_.target,{name:E,value:k}=y;F(E,k),g(y)},h=_=>{const y=_.target;g(y)},p=_=>{const y=_.target,{name:E,value:k}=y;F(E,k),g(y)},w=_=>{_.target.checkValidity()};return z(()=>{m(_=>({...n,...r,...u,..._}))},[n,r,u]),z(()=>{if(!a.current)return;const _=d(c);return()=>{clearTimeout(_)}},[c,d]),z(()=>{if(!a.current||!nt(e))return;const _=new AbortController,y=_.signal,E=setTimeout(()=>{l({signal:y,address:c})},j);return()=>{clearTimeout(E),_.abort()}},[c,e,l]),{address:c,setAddress:m,errors:f,onChange:I,onSelection:p,onBlur:w,onInvalid:h}},at={countryCode:"country_id",region:"region",postCode:"postcode"};function it({fields:e,preselectedFields:t}){return{preselection:ke(()=>!(!!e&&e.length>0)||!!!t?null:Object.keys(t).reduce((s,a)=>{const c=at[a];return!c||!e.some(u=>u.code===c)?s:{...s,[c]:t[a]}},{}),[e,t])}}export{It as A,se as C,O as F,le as H,ie as I,Ae as d,ze as u};
//# sourceMappingURL=usePreselectedFields.js.map
