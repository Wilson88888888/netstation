import{j}from"./jsx-runtime.CRkqtJS5.js";import{r as p,R}from"./index.B52nOzfP.js";var l,f,x;!function(e){e.INITIAL="initial",e.PENDING="pending",e.REJECTED="rejected",e.RESOLVED="resolved"}(l||(l={})),function(e){e.LOADING_STATUS="setLoadingStatus",e.RESET_OPTIONS="resetOptions",e.SET_BRAINTREE_INSTANCE="braintreeInstance"}(f||(f={})),function(e){e.NUMBER="number",e.CVV="cvv",e.EXPIRATION_DATE="expirationDate",e.EXPIRATION_MONTH="expirationMonth",e.EXPIRATION_YEAR="expirationYear",e.POSTAL_CODE="postalCode"}(x||(x={}));var i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};function k(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function B(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)(r||!(o in t))&&(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}var A="data-react-paypal-script-id",S={DATA_CLIENT_TOKEN:"dataClientToken",DATA_JS_SDK_LIBRARY:"dataJsSdkLibrary",DATA_LIBRARY_VALUE:"react-paypal-js",DATA_NAMESPACE:"dataNamespace",DATA_SDK_INTEGRATION_SOURCE:"dataSdkIntegrationSource",DATA_USER_ID_TOKEN:"dataUserIdToken"},z="Failed to load the PayPal JS SDK script.",K="paypal",Q="usePayPalScriptReducer must be used within a PayPalScriptProvider";function Y(e){return void 0===e&&(e=K),window[e]}function $(e){for(var t="",n=0;n<e.length;n++){var r=e[n].charCodeAt(0)*n;e[n+1]&&(r+=e[n+1].charCodeAt(0)*(n-1)),t+=String.fromCharCode(97+Math.abs(r)%26)}return t}function H(e){var t=e.reactComponentName,n=e.sdkComponentKey,r=e.sdkRequestedComponents,o=void 0===r?"":r,a=e.sdkDataNamespace,i=void 0===a?K:a,c=n.charAt(0).toUpperCase().concat(n.substring(1)),s="Unable to render <".concat(t," /> because window.").concat(i,".").concat(c," is undefined."),u="string"==typeof o?o:o.join(",");if(!u.includes(n)){var l=[u,n].filter(Boolean).join();s+="\nTo fix the issue, add '".concat(n,"' to the list of components passed to the parent PayPalScriptProvider:")+"\n`<PayPalScriptProvider options={{ components: '".concat(l,"'}}>`.")}return s}function G(e){var t=e,n=A;t[n];var r=k(t,[n+""]);return"react-paypal-js-".concat($(JSON.stringify(r)))}function ee(e){var t=self.document.querySelector("script[".concat(A,'="').concat(e,'"]'));t?.parentNode&&t.parentNode.removeChild(t)}function te(e,t){var n,r;switch(t.type){case f.LOADING_STATUS:return"object"==typeof t.value?i(i({},e),{loadingStatus:t.value.state,loadingStatusErrorMessage:t.value.message}):i(i({},e),{loadingStatus:t.value});case f.RESET_OPTIONS:return ee(e.options[A]),i(i({},e),{loadingStatus:l.PENDING,options:i(i((n={},n[S.DATA_SDK_INTEGRATION_SOURCE]=S.DATA_LIBRARY_VALUE,n),t.value),(r={},r[A]="".concat(G(t.value)),r))});case f.SET_BRAINTREE_INSTANCE:return i(i({},e),{braintreePayPalCheckoutInstance:t.value});default:return e}}var q=p.createContext(null);function re(e){if("function"==typeof e?.dispatch&&0!==e.dispatch.length)return e;throw new Error(Q)}function ne(){var e=re(p.useContext(q));return[i(i({},e),{isInitial:e.loadingStatus===l.INITIAL,isPending:e.loadingStatus===l.PENDING,isResolved:e.loadingStatus===l.RESOLVED,isRejected:e.loadingStatus===l.REJECTED}),e.dispatch]}p.createContext({});var _=function(e){var t,n=e.className,r=void 0===n?"":n,o=e.disabled,a=void 0!==o&&o,c=e.children,s=e.forceReRender,u=void 0===s?[]:s,l=k(e,["className","disabled","children","forceReRender"]),d=a?{opacity:.38}:{},f="".concat(r," ").concat(a?"paypal-buttons-disabled":"").trim(),v=p.useRef(null),E=p.useRef(null),A=ne()[0],y=A.isResolved,h=A.options,b=p.useState(null),m=b[0],T=b[1],I=p.useState(!0),N=I[0],P=I[1],g=p.useState(null)[1];function O(){null!==E.current&&E.current.close().catch((function(){}))}return!(null===(t=E.current)||void 0===t)&&t.updateProps&&E.current.updateProps({message:l.message}),p.useEffect((function(){if(!1===y)return O;var e=Y(h.dataNamespace);if(void 0===e||void 0===e.Buttons)return g((function(){throw new Error(H({reactComponentName:_.displayName,sdkComponentKey:"buttons",sdkRequestedComponents:h.components,sdkDataNamespace:h[S.DATA_NAMESPACE]}))})),O;try{E.current=e.Buttons(i(i({},l),{onInit:function(e,t){T(t),"function"==typeof l.onInit&&l.onInit(e,t)}}))}catch(e){return g((function(){throw new Error("Failed to render <PayPalButtons /> component. Failed to initialize:  ".concat(e))}))}return!1===E.current.isEligible()?(P(!1),O):(v.current&&E.current.render(v.current).catch((function(e){null===v.current||0===v.current.children.length||g((function(){throw new Error("Failed to render <PayPalButtons /> component. ".concat(e))}))})),O)}),B(B([y],u,!0),[l.fundingSource],!1)),p.useEffect((function(){null!==m&&(!0===a?m.disable().catch((function(){})):m.enable().catch((function(){})))}),[a,m]),R.createElement(R.Fragment,null,N?R.createElement("div",{ref:v,style:d,className:f}):c)};function ae(e,t){var n=document.querySelector('script[src="'.concat(e,'"]'));if(null===n)return null;var r=M(e,t),o=n.cloneNode();if(delete o.dataset.uidAuto,Object.keys(o.dataset).length!==Object.keys(r.dataset).length)return null;var a=!0;return Object.keys(o.dataset).forEach((function(e){o.dataset[e]!==r.dataset[e]&&(a=!1)})),a?n:null}function oe(e){var t=e.url,n=e.attributes,r=e.onSuccess,o=e.onError,a=M(t,n);a.onerror=o,a.onload=r,document.head.insertBefore(a,document.head.firstElementChild)}function ie(e){var t="sandbox"===e.environment?"https://www.sandbox.paypal.com/sdk/js":"https://www.paypal.com/sdk/js";delete e.environment,e.sdkBaseUrl&&(t=e.sdkBaseUrl,delete e.sdkBaseUrl);var n=e,r=Object.keys(n).filter((function(e){return typeof n[e]<"u"&&null!==n[e]&&""!==n[e]})).reduce((function(e,t){var r=n[t].toString();return"data"===(t=ce(t)).substring(0,4)||"crossorigin"===t?e.attributes[t]=r:e.queryParams[t]=r,e}),{queryParams:{},attributes:{}}),o=r.queryParams,a=r.attributes;return o["merchant-id"]&&-1!==o["merchant-id"].indexOf(",")&&(a["data-merchant-id"]=o["merchant-id"],o["merchant-id"]="*"),{url:"".concat(t,"?").concat(se(o)),attributes:a}}function ce(e){return e.replace(/[A-Z]+(?![a-z])|[A-Z]/g,(function(e,t){return(t?"-":"")+e.toLowerCase()}))}function se(e){var t="";return Object.keys(e).forEach((function(n){0!==t.length&&(t+="&"),t+=n+"="+e[n]})),t}function M(e,t){void 0===t&&(t={});var n=document.createElement("script");return n.src=e,Object.keys(t).forEach((function(e){n.setAttribute(e,t[e]),"data-csp-nonce"===e&&n.setAttribute("nonce",t["data-csp-nonce"])})),n}function ue(e,t){if(void 0===t&&(t=Promise),V(e,t),typeof document>"u")return t.resolve(null);var n=ie(e),r=n.url,o=n.attributes,a=o["data-namespace"]||"paypal",i=U(a);return o["data-js-sdk-library"]||(o["data-js-sdk-library"]="paypal-js"),ae(r,o)&&i?t.resolve(i):de({url:r,attributes:o},t).then((function(){var e=U(a);if(e)return e;throw new Error("The window.".concat(a," global variable is not available."))}))}function de(e,t){void 0===t&&(t=Promise),V(e,t);var n=e.url,r=e.attributes;if("string"!=typeof n||0===n.length)throw new Error("Invalid url.");if(typeof r<"u"&&"object"!=typeof r)throw new Error("Expected attributes to be an object.");return new t((function(e,t){if(typeof document>"u")return e();oe({url:n,attributes:r,onSuccess:function(){return e()},onError:function(){var e=new Error('The script "'.concat(n,'" failed to load. Check the HTTP status code and response body in DevTools to learn more.'));return t(e)}})}))}function U(e){return window[e]}function V(e,t){if("object"!=typeof e||null===e)throw new Error("Expected an options object.");var n=e.environment;if(n&&"production"!==n&&"sandbox"!==n)throw new Error('The `environment` option must be either "production" or "sandbox".');if(typeof t<"u"&&"function"!=typeof t)throw new Error("Expected PromisePonyfill to be a function.")}_.displayName="PayPalButtons";var le=function(e){var t,n=e.options,r=void 0===n?{clientId:"test"}:n,o=e.children,a=e.deferLoading,c=void 0!==a&&a,s=p.useReducer(te,{options:i(i({},r),(t={},t[S.DATA_JS_SDK_LIBRARY]=S.DATA_LIBRARY_VALUE,t[S.DATA_SDK_INTEGRATION_SOURCE]=S.DATA_LIBRARY_VALUE,t[A]="".concat(G(r)),t)),loadingStatus:c?l.INITIAL:l.PENDING}),u=s[0],d=s[1];return p.useEffect((function(){if(!1===c&&u.loadingStatus===l.INITIAL)return d({type:f.LOADING_STATUS,value:l.PENDING});if(u.loadingStatus===l.PENDING){var e=!0;return ue(u.options).then((function(){e&&d({type:f.LOADING_STATUS,value:l.RESOLVED})})).catch((function(t){console.error("".concat(z," ").concat(t)),e&&d({type:f.LOADING_STATUS,value:{state:l.REJECTED,message:String(t)}})})),function(){e=!1}}}),[u.options,c,u.loadingStatus]),R.createElement(q.Provider,{value:i(i({},u),{dispatch:d})},o)};function L(){}p.createContext({cardFieldsForm:null,fields:{},registerField:L,unregisterField:L});const ve=()=>j.jsx(le,{options:{"client-id":"AbJs6uz_oSSW55ZOVT9lnuBW-Fh66kEOljGXccIiE2wUuKekZAjBd4RgyZM6mCxsHuctKOvQwxP9yVVq",vault:!0,intent:"subscription"},children:j.jsx(_,{createSubscription:(e,t)=>t.subscription.create({plan_id:"P-5HX00477RR628964XM3QTP6I"}),onApprove:(e,t)=>{alert("Subscription created successfully! Subscription ID: "+e.subscriptionID)},style:{layout:"vertical",color:"blue",shape:"pill",label:"subscribe"}})});export{ve as default};