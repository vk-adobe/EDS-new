export const id=673;export const ids=[673,174];export const modules={754:(_,n,e)=>{e.d(n,{FK:()=>k,Ob:()=>J,Qv:()=>$,XX:()=>I,_3:()=>b,fF:()=>o,h:()=>y,n:()=>y,q6:()=>j,uA:()=>C,v2:()=>T,zO:()=>u});var t,o,r,u,l,i,c,f,s,a={},p=[],h=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,d=Array.isArray;function v(_,n){for(var e in n)_[e]=n[e];return _}function m(_){var n=_.parentNode;n&&n.removeChild(_)}function y(_,n,e){var o,r,u,l={};for(u in n)"key"==u?o=n[u]:"ref"==u?r=n[u]:l[u]=n[u];if(arguments.length>2&&(l.children=arguments.length>3?t.call(arguments,2):e),"function"==typeof _&&null!=_.defaultProps)for(u in _.defaultProps)void 0===l[u]&&(l[u]=_.defaultProps[u]);return g(_,l,o,r,null)}function g(_,n,e,t,u){var l={type:_,props:n,key:e,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==u?++r:u,__i:-1,__u:0};return null==u&&null!=o.vnode&&o.vnode(l),l}function b(){return{current:null}}function k(_){return _.children}function C(_,n){this.props=_,this.context=n}function x(_,n){if(null==n)return _.__?x(_.__,_.__i+1):null;for(var e;n<_.__k.length;n++)if(null!=(e=_.__k[n])&&null!=e.__e)return e.__e;return"function"==typeof _.type?x(_):null}function H(_,n,e){var t,r=_.__v,u=r.__e,l=_.__P;if(l)return(t=v({},r)).__v=r.__v+1,o.vnode&&o.vnode(t),A(l,t,r,_.__n,void 0!==l.ownerSVGElement,32&r.__u?[u]:null,n,null==u?x(r):u,!!(32&r.__u),e),t.__v=r.__v,t.__.__k[t.__i]=t,t.__d=void 0,t.__e!=u&&E(t),t}function E(_){var n,e;if(null!=(_=_.__)&&null!=_.__c){for(_.__e=_.__c.base=null,n=0;n<_.__k.length;n++)if(null!=(e=_.__k[n])&&null!=e.__e){_.__e=_.__c.base=e.__e;break}return E(_)}}function N(_){(!_.__d&&(_.__d=!0)&&l.push(_)&&!P.__r++||i!==o.debounceRendering)&&((i=o.debounceRendering)||c)(P)}function P(){var _,n,e,t=[],r=[];for(l.sort(f);_=l.shift();)_.__d&&(e=l.length,n=H(_,t,r)||n,0===e||l.length>e?(L(t,n,r),r.length=t.length=0,n=void 0,l.sort(f)):n&&o.__c&&o.__c(n,p));n&&L(t,n,r),P.__r=0}function S(_,n,e,t,o,r,u,l,i,c,f){var s,h,d,v,m,y=t&&t.__k||p,g=n.length;for(e.__d=i,w(e,n,y),i=e.__d,s=0;s<g;s++)null!=(d=e.__k[s])&&"boolean"!=typeof d&&"function"!=typeof d&&(h=-1===d.__i?a:y[d.__i]||a,d.__i=s,A(_,d,h,o,r,u,l,i,c,f),v=d.__e,d.ref&&h.ref!=d.ref&&(h.ref&&B(h.ref,null,d),f.push(d.ref,d.__c||v,d)),null==m&&null!=v&&(m=v),65536&d.__u||h.__k===d.__k?i=D(d,i,_):"function"==typeof d.type&&void 0!==d.__d?i=d.__d:v&&(i=v.nextSibling),d.__d=void 0,d.__u&=-196609);e.__d=i,e.__e=m}function w(_,n,e){var t,o,r,u,l,i=n.length,c=e.length,f=c,s=0;for(_.__k=[],t=0;t<i;t++)u=t+s,null!=(o=_.__k[t]=null==(o=n[t])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?g(null,o,null,null,null):d(o)?g(k,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?g(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)?(o.__=_,o.__b=_.__b+1,l=U(o,e,u,f),o.__i=l,r=null,-1!==l&&(f--,(r=e[l])&&(r.__u|=131072)),null==r||null===r.__v?(-1==l&&s--,"function"!=typeof o.type&&(o.__u|=65536)):l!==u&&(l===u+1?s++:l>u?f>i-u?s+=l-u:s--:l<u?l==u-1&&(s=l-u):s=0,l!==t+s&&(o.__u|=65536))):(r=e[u])&&null==r.key&&r.__e&&!(131072&r.__u)&&(r.__e==_.__d&&(_.__d=x(r)),R(r,r,!1),e[u]=null,f--);if(f)for(t=0;t<c;t++)null!=(r=e[t])&&!(131072&r.__u)&&(r.__e==_.__d&&(_.__d=x(r)),R(r,r))}function D(_,n,e){var t,o;if("function"==typeof _.type){for(t=_.__k,o=0;t&&o<t.length;o++)t[o]&&(t[o].__=_,n=D(t[o],n,e));return n}_.__e!=n&&(e.insertBefore(_.__e,n||null),n=_.__e);do{n=n&&n.nextSibling}while(null!=n&&8===n.nodeType);return n}function T(_,n){return n=n||[],null==_||"boolean"==typeof _||(d(_)?_.some((function(_){T(_,n)})):n.push(_)),n}function U(_,n,e,t){var o=_.key,r=_.type,u=e-1,l=e+1,i=n[e];if(null===i||i&&o==i.key&&r===i.type&&!(131072&i.__u))return e;if(t>(null==i||131072&i.__u?0:1))for(;u>=0||l<n.length;){if(u>=0){if((i=n[u])&&!(131072&i.__u)&&o==i.key&&r===i.type)return u;u--}if(l<n.length){if((i=n[l])&&!(131072&i.__u)&&o==i.key&&r===i.type)return l;l++}}return-1}function F(_,n,e){"-"===n[0]?_.setProperty(n,null==e?"":e):_[n]=null==e?"":"number"!=typeof e||h.test(n)?e:e+"px"}function M(_,n,e,t,o){var r;_:if("style"===n)if("string"==typeof e)_.style.cssText=e;else{if("string"==typeof t&&(_.style.cssText=t=""),t)for(n in t)e&&n in e||F(_.style,n,"");if(e)for(n in e)t&&e[n]===t[n]||F(_.style,n,e[n])}else if("o"===n[0]&&"n"===n[1])r=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in _?n.toLowerCase().slice(2):n.slice(2),_.l||(_.l={}),_.l[n+r]=e,e?t?e.u=t.u:(e.u=Date.now(),_.addEventListener(n,r?V:W,r)):_.removeEventListener(n,r?V:W,r);else{if(o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==n&&"height"!==n&&"href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&"rowSpan"!==n&&"colSpan"!==n&&"role"!==n&&n in _)try{_[n]=null==e?"":e;break _}catch(_){}"function"==typeof e||(null==e||!1===e&&"-"!==n[4]?_.removeAttribute(n):_.setAttribute(n,e))}}function W(_){if(this.l){var n=this.l[_.type+!1];if(_.t){if(_.t<=n.u)return}else _.t=Date.now();return n(o.event?o.event(_):_)}}function V(_){if(this.l)return this.l[_.type+!0](o.event?o.event(_):_)}function A(_,n,e,t,r,u,l,i,c,f){var s,a,p,h,m,y,g,b,x,H,E,N,P,w,D,T=n.type;if(void 0!==n.constructor)return null;128&e.__u&&(c=!!(32&e.__u),u=[i=n.__e=e.__e]),(s=o.__b)&&s(n);_:if("function"==typeof T)try{if(b=n.props,x=(s=T.contextType)&&t[s.__c],H=s?x?x.props.value:s.__:t,e.__c?g=(a=n.__c=e.__c).__=a.__E:("prototype"in T&&T.prototype.render?n.__c=a=new T(b,H):(n.__c=a=new C(b,H),a.constructor=T,a.render=q),x&&x.sub(a),a.props=b,a.state||(a.state={}),a.context=H,a.__n=t,p=a.__d=!0,a.__h=[],a._sb=[]),null==a.__s&&(a.__s=a.state),null!=T.getDerivedStateFromProps&&(a.__s==a.state&&(a.__s=v({},a.__s)),v(a.__s,T.getDerivedStateFromProps(b,a.__s))),h=a.props,m=a.state,a.__v=n,p)null==T.getDerivedStateFromProps&&null!=a.componentWillMount&&a.componentWillMount(),null!=a.componentDidMount&&a.__h.push(a.componentDidMount);else{if(null==T.getDerivedStateFromProps&&b!==h&&null!=a.componentWillReceiveProps&&a.componentWillReceiveProps(b,H),!a.__e&&(null!=a.shouldComponentUpdate&&!1===a.shouldComponentUpdate(b,a.__s,H)||n.__v===e.__v)){for(n.__v!==e.__v&&(a.props=b,a.state=a.__s,a.__d=!1),n.__e=e.__e,n.__k=e.__k,n.__k.forEach((function(_){_&&(_.__=n)})),E=0;E<a._sb.length;E++)a.__h.push(a._sb[E]);a._sb=[],a.__h.length&&l.push(a);break _}null!=a.componentWillUpdate&&a.componentWillUpdate(b,a.__s,H),null!=a.componentDidUpdate&&a.__h.push((function(){a.componentDidUpdate(h,m,y)}))}if(a.context=H,a.props=b,a.__P=_,a.__e=!1,N=o.__r,P=0,"prototype"in T&&T.prototype.render){for(a.state=a.__s,a.__d=!1,N&&N(n),s=a.render(a.props,a.state,a.context),w=0;w<a._sb.length;w++)a.__h.push(a._sb[w]);a._sb=[]}else do{a.__d=!1,N&&N(n),s=a.render(a.props,a.state,a.context),a.state=a.__s}while(a.__d&&++P<25);a.state=a.__s,null!=a.getChildContext&&(t=v(v({},t),a.getChildContext())),p||null==a.getSnapshotBeforeUpdate||(y=a.getSnapshotBeforeUpdate(h,m)),S(_,d(D=null!=s&&s.type===k&&null==s.key?s.props.children:s)?D:[D],n,e,t,r,u,l,i,c,f),a.base=n.__e,n.__u&=-161,a.__h.length&&l.push(a),g&&(a.__E=a.__=null)}catch(_){n.__v=null,c||null!=u?(n.__e=i,n.__u|=c?160:32,u[u.indexOf(i)]=null):(n.__e=e.__e,n.__k=e.__k),o.__e(_,n,e)}else null==u&&n.__v===e.__v?(n.__k=e.__k,n.__e=e.__e):n.__e=O(e.__e,n,e,t,r,u,l,c,f);(s=o.diffed)&&s(n)}function L(_,n,e){for(var t=0;t<e.length;t++)B(e[t],e[++t],e[++t]);o.__c&&o.__c(n,_),_.some((function(n){try{_=n.__h,n.__h=[],_.some((function(_){_.call(n)}))}catch(_){o.__e(_,n.__v)}}))}function O(_,n,e,o,r,u,l,i,c){var f,s,p,h,v,y,g,b=e.props,k=n.props,C=n.type;if("svg"===C&&(r=!0),null!=u)for(f=0;f<u.length;f++)if((v=u[f])&&"setAttribute"in v==!!C&&(C?v.localName===C:3===v.nodeType)){_=v,u[f]=null;break}if(null==_){if(null===C)return document.createTextNode(k);_=r?document.createElementNS("http://www.w3.org/2000/svg",C):document.createElement(C,k.is&&k),u=null,i=!1}if(null===C)b===k||i&&_.data===k||(_.data=k);else{if(u=u&&t.call(_.childNodes),b=e.props||a,!i&&null!=u)for(b={},f=0;f<_.attributes.length;f++)b[(v=_.attributes[f]).name]=v.value;for(f in b)v=b[f],"children"==f||("dangerouslySetInnerHTML"==f?p=v:"key"===f||f in k||M(_,f,null,v,r));for(f in k)v=k[f],"children"==f?h=v:"dangerouslySetInnerHTML"==f?s=v:"value"==f?y=v:"checked"==f?g=v:"key"===f||i&&"function"!=typeof v||b[f]===v||M(_,f,v,b[f],r);if(s)i||p&&(s.__html===p.__html||s.__html===_.innerHTML)||(_.innerHTML=s.__html),n.__k=[];else if(p&&(_.innerHTML=""),S(_,d(h)?h:[h],n,e,o,r&&"foreignObject"!==C,u,l,u?u[0]:e.__k&&x(e,0),i,c),null!=u)for(f=u.length;f--;)null!=u[f]&&m(u[f]);i||(f="value",void 0!==y&&(y!==_[f]||"progress"===C&&!y||"option"===C&&y!==b[f])&&M(_,f,y,b[f],!1),f="checked",void 0!==g&&g!==_[f]&&M(_,f,g,b[f],!1))}return _}function B(_,n,e){try{"function"==typeof _?_(n):_.current=n}catch(_){o.__e(_,e)}}function R(_,n,e){var t,r;if(o.unmount&&o.unmount(_),(t=_.ref)&&(t.current&&t.current!==_.__e||B(t,null,n)),null!=(t=_.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(_){o.__e(_,n)}t.base=t.__P=null,_.__c=void 0}if(t=_.__k)for(r=0;r<t.length;r++)t[r]&&R(t[r],n,e||"function"!=typeof _.type);e||null==_.__e||m(_.__e),_.__=_.__e=_.__d=void 0}function q(_,n,e){return this.constructor(_,e)}function I(_,n,e){var r,u,l,i;o.__&&o.__(_,n),u=(r="function"==typeof e)?null:e&&e.__k||n.__k,l=[],i=[],A(n,_=(!r&&e||n).__k=y(k,null,[_]),u||a,a,void 0!==n.ownerSVGElement,!r&&e?[e]:u?null:n.firstChild?t.call(n.childNodes):null,l,!r&&e?e:u?u.__e:n.firstChild,r,i),_.__d=void 0,L(l,_,i)}function $(_,n){I(_,n,$)}function J(_,n,e){var o,r,u,l,i=v({},_.props);for(u in _.type&&_.type.defaultProps&&(l=_.type.defaultProps),n)"key"==u?o=n[u]:"ref"==u?r=n[u]:i[u]=void 0===n[u]&&void 0!==l?l[u]:n[u];return arguments.length>2&&(i.children=arguments.length>3?t.call(arguments,2):e),g(_.type,i,o||_.key,r||_.ref,null)}function j(_,n){var e={__c:n="__cC"+s++,__:_,Consumer:function(_,n){return _.children(n)},Provider:function(_){var e,t;return this.getChildContext||(e=[],(t={})[n]=this,this.getChildContext=function(){return t},this.shouldComponentUpdate=function(_){this.props.value!==_.value&&e.some((function(_){_.__e=!0,N(_)}))},this.sub=function(_){e.push(_);var n=_.componentWillUnmount;_.componentWillUnmount=function(){e.splice(e.indexOf(_),1),n&&n.call(_)}}),_.children}};return e.Provider.__=e.Consumer.contextType=e}t=p.slice,o={__e:function(_,n,e,t){for(var o,r,u;n=n.__;)if((o=n.__c)&&!o.__)try{if((r=o.constructor)&&null!=r.getDerivedStateFromError&&(o.setState(r.getDerivedStateFromError(_)),u=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(_,t||{}),u=o.__d),u)return o.__E=o}catch(n){_=n}throw _}},r=0,u=function(_){return null!=_&&null==_.constructor},C.prototype.setState=function(_,n){var e;e=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=v({},this.state),"function"==typeof _&&(_=_(v({},e),this.props)),_&&v(e,_),null!=_&&this.__v&&(n&&this._sb.push(n),N(this))},C.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),N(this))},C.prototype.render=k,l=[],c="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f=function(_,n){return _.__v.__b-n.__v.__b},P.__r=0,s=0},416:(_,n,e)=>{e.d(n,{Bi:()=>D,J0:()=>g,Kr:()=>E,MN:()=>S,Md:()=>w,NT:()=>P,Nf:()=>C,WO:()=>b,Yn:()=>H,hb:()=>N,li:()=>x,vJ:()=>k});var t,o,r,u,l=e(754),i=0,c=[],f=[],s=l.fF,a=s.__b,p=s.__r,h=s.diffed,d=s.__c,v=s.unmount,m=s.__;function y(_,n){s.__h&&s.__h(o,_,i||n),i=0;var e=o.__H||(o.__H={__:[],__h:[]});return _>=e.__.length&&e.__.push({__V:f}),e.__[_]}function g(_){return i=1,b(A,_)}function b(_,n,e){var r=y(t++,2);if(r.t=_,!r.__c&&(r.__=[e?e(n):A(void 0,n),function(_){var n=r.__N?r.__N[0]:r.__[0],e=r.t(n,_);n!==e&&(r.__N=[e,r.__[1]],r.__c.setState({}))}],r.__c=o,!o.u)){var u=function(_,n,e){if(!r.__c.__H)return!0;var t=r.__c.__H.__.filter((function(_){return!!_.__c}));if(t.every((function(_){return!_.__N})))return!l||l.call(this,_,n,e);var o=!1;return t.forEach((function(_){if(_.__N){var n=_.__[0];_.__=_.__N,_.__N=void 0,n!==_.__[0]&&(o=!0)}})),!(!o&&r.__c.props===_)&&(!l||l.call(this,_,n,e))};o.u=!0;var l=o.shouldComponentUpdate,i=o.componentWillUpdate;o.componentWillUpdate=function(_,n,e){if(this.__e){var t=l;l=void 0,u(_,n,e),l=t}i&&i.call(this,_,n,e)},o.shouldComponentUpdate=u}return r.__N||r.__}function k(_,n){var e=y(t++,3);!s.__s&&V(e.__H,n)&&(e.__=_,e.i=n,o.__H.__h.push(e))}function C(_,n){var e=y(t++,4);!s.__s&&V(e.__H,n)&&(e.__=_,e.i=n,o.__h.push(e))}function x(_){return i=5,E((function(){return{current:_}}),[])}function H(_,n,e){i=6,C((function(){return"function"==typeof _?(_(n()),function(){return _(null)}):_?(_.current=n(),function(){return _.current=null}):void 0}),null==e?e:e.concat(_))}function E(_,n){var e=y(t++,7);return V(e.__H,n)?(e.__V=_(),e.i=n,e.__h=_,e.__V):e.__}function N(_,n){return i=8,E((function(){return _}),n)}function P(_){var n=o.context[_.__c],e=y(t++,9);return e.c=_,n?(null==e.__&&(e.__=!0,n.sub(o)),n.props.value):_.__}function S(_,n){s.useDebugValue&&s.useDebugValue(n?n(_):_)}function w(_){var n=y(t++,10),e=g();return n.__=_,o.componentDidCatch||(o.componentDidCatch=function(_,t){n.__&&n.__(_,t),e[1](_)}),[e[0],function(){e[1](void 0)}]}function D(){var _=y(t++,11);if(!_.__){for(var n=o.__v;null!==n&&!n.__m&&null!==n.__;)n=n.__;var e=n.__m||(n.__m=[0,0]);_.__="P"+e[0]+"-"+e[1]++}return _.__}function T(){for(var _;_=c.shift();)if(_.__P&&_.__H)try{_.__H.__h.forEach(M),_.__H.__h.forEach(W),_.__H.__h=[]}catch(n){_.__H.__h=[],s.__e(n,_.__v)}}s.__b=function(_){o=null,a&&a(_)},s.__=function(_,n){_&&n.__k&&n.__k.__m&&(_.__m=n.__k.__m),m&&m(_,n)},s.__r=function(_){p&&p(_),t=0;var n=(o=_.__c).__H;n&&(r===o?(n.__h=[],o.__h=[],n.__.forEach((function(_){_.__N&&(_.__=_.__N),_.__V=f,_.__N=_.i=void 0}))):(n.__h.forEach(M),n.__h.forEach(W),n.__h=[],t=0)),r=o},s.diffed=function(_){h&&h(_);var n=_.__c;n&&n.__H&&(n.__H.__h.length&&(1!==c.push(n)&&u===s.requestAnimationFrame||((u=s.requestAnimationFrame)||F)(T)),n.__H.__.forEach((function(_){_.i&&(_.__H=_.i),_.__V!==f&&(_.__=_.__V),_.i=void 0,_.__V=f}))),r=o=null},s.__c=function(_,n){n.some((function(_){try{_.__h.forEach(M),_.__h=_.__h.filter((function(_){return!_.__||W(_)}))}catch(e){n.some((function(_){_.__h&&(_.__h=[])})),n=[],s.__e(e,_.__v)}})),d&&d(_,n)},s.unmount=function(_){v&&v(_);var n,e=_.__c;e&&e.__H&&(e.__H.__.forEach((function(_){try{M(_)}catch(_){n=_}})),e.__H=void 0,n&&s.__e(n,e.__v))};var U="function"==typeof requestAnimationFrame;function F(_){var n,e=function(){clearTimeout(t),U&&cancelAnimationFrame(n),setTimeout(_)},t=setTimeout(e,100);U&&(n=requestAnimationFrame(e))}function M(_){var n=o,e=_.__c;"function"==typeof e&&(_.__c=void 0,e()),o=n}function W(_){var n=o;_.__c=_.__(),o=n}function V(_,n){return!_||_.length!==n.length||n.some((function(n,e){return n!==_[e]}))}function A(_,n){return"function"==typeof n?n(_):n}}};import _ from"./runtime.js";import*as n from"./preact-hooks.js";_.C(n);var e,t=(e=416,_(_.s=e)),o=t.hb,r=t.NT,u=t.MN,l=t.vJ,i=t.Md,c=t.Bi,f=t.Yn,s=t.Nf,a=t.Kr,p=t.WO,h=t.li,d=t.J0;export{o as useCallback,r as useContext,u as useDebugValue,l as useEffect,i as useErrorBoundary,c as useId,f as useImperativeHandle,s as useLayoutEffect,a as useMemo,p as useReducer,h as useRef,d as useState};