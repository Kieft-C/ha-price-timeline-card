/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=globalThis,e$2=t$1.ShadowRoot&&(void 0===t$1.ShadyCSS||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$3=new WeakMap;let n$2 = class n{constructor(t,e,o){if(this._$cssResult$=true,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$2&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$3.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$3.set(s,t));}return t}toString(){return this.cssText}};const r$2=t=>new n$2("string"==typeof t?t:t+"",void 0,s$2),i$3=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,s,o)=>e+(t=>{if(true===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1],t[0]);return new n$2(o,t,s$2)},S$1=(s,o)=>{if(e$2)s.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of o){const o=document.createElement("style"),n=t$1.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$2,defineProperty:e$1,getOwnPropertyDescriptor:h$1,getOwnPropertyNames:r$1,getOwnPropertySymbols:o$2,getPrototypeOf:n$1}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$2(t,s),b$1={attribute:true,type:String,converter:u$1,reflect:false,useDefault:false,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;let y$1 = class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=b$1){if(s.state&&(s.attribute=false),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=true),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),h=this.getPropertyDescriptor(t,i,s);void 0!==h&&e$1(this.prototype,t,h);}}static getPropertyDescriptor(t,s,i){const{get:e,set:r}=h$1(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get:e,set(s){const h=e?.call(this);r?.call(this,s),this.requestUpdate(t,h,i);},configurable:true,enumerable:true}}static getPropertyOptions(t){return this.elementProperties.get(t)??b$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$1(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=true,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...r$1(t),...o$2(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return  false===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=false,this.hasUpdated=false,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(true),this._$EO?.forEach(t=>t.hostConnected?.());}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.());}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&true===i.reflect){const h=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==h?this.removeAttribute(e):this.setAttribute(e,h),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e;const r=h.fromAttribute(s,t.type);this[e]=r??this._$Ej?.get(e)??r,this._$Em=null;}}requestUpdate(t,s,i,e=false,h){if(void 0!==t){const r=this.constructor;if(false===e&&(h=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??f$1)(h,s)||i.useDefault&&i.reflect&&h===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,s,i);} false===this.isUpdatePending&&(this._$ES=this._$EP());}C(t,s,{useDefault:i,reflect:e,wrapped:h},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??s??this[t]),true!==h||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),true===e&&this._$Em!==t&&(this._$Eq??=new Set).add(t));}async _$EP(){this.isUpdatePending=true;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];true!==t||this._$AL.has(s)||void 0===e||this.C(s,void 0,i,e);}}let t=false;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(s)):this._$EM();}catch(s){throw t=false,this._$EM(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=true,this.firstUpdated(t)),this.updated(t);}_$EM(){this._$AL=new Map,this.isUpdatePending=false;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return  true}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM();}updated(t){}firstUpdated(t){}};y$1.elementStyles=[],y$1.shadowRootOptions={mode:"open"},y$1[d$1("elementProperties")]=new Map,y$1[d$1("finalized")]=new Map,p$1?.({ReactiveElement:y$1}),(a$1.reactiveElementVersions??=[]).push("2.1.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,i$1=t=>t,s$1=t.trustedTypes,e=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,h="$lit$",o$1=`lit$${Math.random().toFixed(9).slice(2)}$`,n="?"+o$1,r=`<${n}>`,l=document,c=()=>l.createComment(""),a=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,d=t=>u(t)||"function"==typeof t?.[Symbol.iterator],f="[ \t\n\f\r]",v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,x=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),b=x(1),E=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),C=new WeakMap,P=l.createTreeWalker(l,129);function V(t,i){if(!u(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e?e.createHTML(i):i}const N=(t,i)=>{const s=t.length-1,e=[];let n,l=2===i?"<svg>":3===i?"<math>":"",c=v;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,f=0;for(;f<s.length&&(c.lastIndex=f,u=c.exec(s),null!==u);)f=c.lastIndex,c===v?"!--"===u[1]?c=_:void 0!==u[1]?c=m:void 0!==u[2]?(y.test(u[2])&&(n=RegExp("</"+u[2],"g")),c=p):void 0!==u[3]&&(c=p):c===p?">"===u[0]?(c=n??v,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?p:'"'===u[3]?$:g):c===$||c===g?c=p:c===_||c===m?c=v:(c=p,n=void 0);const x=c===p&&t[i+1].startsWith("/>")?" ":"";l+=c===v?s+r:d>=0?(e.push(a),s.slice(0,d)+h+s.slice(d)+o$1+x):s+o$1+(-2===d?i:x);}return [V(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),e]};class S{constructor({strings:t,_$litType$:i},e){let r;this.parts=[];let l=0,a=0;const u=t.length-1,d=this.parts,[f,v]=N(t,i);if(this.el=S.createElement(f,e),P.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=P.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(h)){const i=v[a++],s=r.getAttribute(t).split(o$1),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:l,name:e[2],strings:s,ctor:"."===e[1]?I:"?"===e[1]?L:"@"===e[1]?z:H}),r.removeAttribute(t);}else t.startsWith(o$1)&&(d.push({type:6,index:l}),r.removeAttribute(t));if(y.test(r.tagName)){const t=r.textContent.split(o$1),i=t.length-1;if(i>0){r.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)r.append(t[s],c()),P.nextNode(),d.push({type:2,index:++l});r.append(t[i],c());}}}else if(8===r.nodeType)if(r.data===n)d.push({type:2,index:l});else {let t=-1;for(;-1!==(t=r.data.indexOf(o$1,t+1));)d.push({type:7,index:l}),t+=o$1.length-1;}l++;}}static createElement(t,i){const s=l.createElement("template");return s.innerHTML=t,s}}function M(t,i,s=t,e){if(i===E)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=a(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(false),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=M(t,h._$AS(t,i.values),h,e)),i}class R{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??l).importNode(i,true);P.currentNode=e;let h=P.nextNode(),o=0,n=0,r=s[0];for(;void 0!==r;){if(o===r.index){let i;2===r.type?i=new k(h,h.nextSibling,this,t):1===r.type?i=new r.ctor(h,r.name,r.strings,this,t):6===r.type&&(i=new Z(h,this,t)),this._$AV.push(i),r=s[++n];}o!==r?.index&&(h=P.nextNode(),o++);}return P.currentNode=l,e}p(t){let i=0;for(const s of this._$AV) void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??true;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=M(this,t,i),a(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==E&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):d(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==A&&a(this._$AH)?this._$AA.nextSibling.data=t:this.T(l.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=S.createElement(V(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new R(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=C.get(t.strings);return void 0===i&&C.set(t.strings,i=new S(t)),i}k(t){u(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new k(this.O(c()),this.O(c()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(false,true,s);t!==this._$AB;){const s=i$1(t).nextSibling;i$1(t).remove(),t=s;}}setConnected(t){ void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}_$AI(t,i=this,s,e){const h=this.strings;let o=false;if(void 0===h)t=M(this,t,i,0),o=!a(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=M(this,e[s+n],i,n),r===E&&(r=this._$AH[n]),o||=!a(r)||r!==this._$AH[n],r===A?t=A:t!==A&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class I extends H{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}class L extends H{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==A);}}class z extends H{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=M(this,t,i,0)??A)===E)return;const s=this._$AH,e=t===A&&s!==A||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==A&&(s===A||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t);}}const B=t.litHtmlPolyfillSupport;B?.(S,k),(t.litHtmlVersions??=[]).push("3.3.2");const D=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new k(i.insertBefore(c(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=globalThis;class i extends y$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(r,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(true);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(false);}render(){return E}}i._$litElement$=true,i["finalized"]=true,s.litElementHydrateSupport?.({LitElement:i});const o=s.litElementPolyfillSupport;o?.({LitElement:i});(s.litElementVersions??=[]).push("4.2.2");

var en = {
  no_data: "No data available for the day – are we still waiting for the prices?",
  no_data_attributes: "Your entity has no data attributes - see the readme",
  no_data_prices: "Your entity has no prices in the correct format - see the readme",
  missing_price: "Please specify 'price' sensor in the config",
  label_today_price: "Today's price",
  label_time_nextDay: "Price range",
  label_average_price: "Average Price",
  label_price: "Price",
  label_day: "Day",
  label_start: "Start",
  label_end: "End",
  label_duration: "Duration",
  label_name: "Name",
  unit_cent: "Cent",
  label_tomorrow_price: "Tomorrow's price",
  editor_theme_light: "Light",
  editor_theme_dark: "Dark",
  editor_theme_system: "System",
  editor_price_label: "Price sensor",
  editor_price_desc: "Sensor that contains the current price (in attribute data)",
  editor_average_label: "Optional: Average value",
  editor_average_desc: "Number (e.g. 0.225) indicating the average price (optional)",
  editor_theme_label: "Theme",
  editor_theme_desc: "Display mode of the card.",
  editor_start_today: "Today",
  editor_start_tomorrow: "Tomorrow",
  editor_start_yesterday: "Yesterday",
  editor_start_view_label: "Start View",
  editor_start_view_desc: "The view that should be displayed by default",
  editor_view_mode_label: "View Mode",
  editor_currency_label: "Currency",
  editor_currency_desc: "Specify a custom currency",
  editor_day_switch_label: "Day Switch",
  editor_day_switch_desc: "Shows or hides the day switch",
  editor_cheap_times_label: "Cheap Times",
  editor_cheap_times_desc: "Display of cheap time intervals",
};

var de = {
  no_data: "Keine Daten für den Tag vorhanden – warten wir noch auf die Preise?",
  no_data_attributes: "Deine Entität hat kein data-Attributes - siehe readme",
  no_data_prices: "Deine Entität hat keine Preise im richtigen Format - siehe readme",
  missing_price: "Bitte 'price' Sensor in der config angeben",
  label_today_price: "Heutiger Preis",
  label_time_nextDay: "Preisspanne",
  unit_cent: "Cent",
  label_tomorrow_price: "Morgiger Preis",
  label_average_price: "Durchschnittspreis",
  label_price: "Preis",
  label_day: "Tag",
  label_start: "Start",
  label_end: "Ende",
  label_duration: "Dauer",
  label_name: "Name",
  editor_theme_light: "Hell",
  editor_theme_dark: "Dunkel",
  editor_theme_system: "System",
  editor_price_label: "Preis-Sensor",
  editor_price_desc: "Sensor, der den aktuellen Preis enthält (in Attributen data)",
  editor_average_label: "Optional: Durchschnittswert",
  editor_average_desc: "Zahl (z.B. 0.225), die den Durchschnitts-Preis angibt (optional)",
  editor_theme_label: "Thema",
  editor_theme_desc: "Darstellungsmodus der Karte.",
  editor_start_today: "Heute",
  editor_start_tomorrow: "Morgen",
  editor_start_yesterday: "Gestern",
  editor_start_view_label: "Start-Ansicht",
  editor_start_view_desc: "Ansicht welche standardmäßig angezeigt werden soll",
  editor_view_mode_label: "Ansicht-Modus",
  editor_currency_label: "Währung",
  editor_currency_desc: "Eigene Währung angeben",
  editor_day_switch_label: "Tag Umschalter",
  editor_day_switch_desc: "Blendet den Tag Umschalter ein oder aus",
  editor_cheap_times_label: "Günstige Zeiten",
  editor_cheap_times_desc: "Anzeige von günstigen Zeitintervallen",
};

var es = {
  no_data: "No hay datos disponibles para el día – ¿esperamos los precios?",
  no_data_attributes: "Tu entidad no tiene atributos de datos - consulta el readme",
  no_data_prices: "Tu entidad no tiene precios en el formato correcto - consulta el readme",
  missing_price: "Por favor especifique el sensor 'price' en la configuración",
  label_today_price: "Precio de hoy",
  label_time_nextDay: "Rango de precios",
  label_average_price: "Precio medio",
  label_price: "Precio",
  label_day: "Día",
  label_start: "Inicio",
  label_end: "Fin",
  label_duration: "Duración",
  label_name: "Nombre",
  unit_cent: "Céntimos",
  label_tomorrow_price: "Precio de mañana",
  editor_theme_light: "Claro",
  editor_theme_dark: "Oscuro",
  editor_theme_system: "Sistema",
  editor_price_label: "Sensor de precio",
  editor_price_desc: "Sensor que contiene el precio actual (en el atributo data)",
  editor_average_label: "Opcional: Valor promedio",
  editor_average_desc: "Número (p. ej. 0.225) que indica el precio medio (opcional)",
  editor_theme_label: "Tema",
  editor_theme_desc: "Modo de visualización de la tarjeta.",
  editor_start_today: "Hoy",
  editor_start_tomorrow: "Mañana",
  editor_start_yesterday: "Ayer",
  editor_start_view_label: "Vista inicial",
  editor_start_view_desc: "Vista que se mostrará por defecto",
  editor_view_mode_label: "Modo de vista",
  editor_currency_label: "Moneda",
  editor_currency_desc: "Especifique una moneda personalizada",
  editor_day_switch_label: "Conmutador de día",
  editor_day_switch_desc: "Muestra u oculta el conmutador de día",
  editor_cheap_times_label: "Tiempos económicos",
  editor_cheap_times_desc: "Visualización de intervalos de tiempo económicos",
};

var fr = {
  no_data: "Aucune donnée disponible pour la journée – attendons les prix ?",
  no_data_attributes: "Votre entité n'a pas d'attributs de données - voir le readme",
  no_data_prices: "Votre entité n'a pas de prix au format correct - voir le readme",
  missing_price: "Veuillez indiquer le capteur 'price' dans la configuration",
  label_today_price: "Prix du jour",
  label_time_nextDay: "Plage de prix",
  label_average_price: "Prix moyen",
  label_price: "Prix",
  label_day: "Jour",
  label_start: "Début",
  label_end: "Fin",
  label_duration: "Durée",
  label_name: "Nom",
  unit_cent: "Centimes",
  label_tomorrow_price: "Prix de demain",
  editor_theme_light: "Clair",
  editor_theme_dark: "Sombre",
  editor_theme_system: "Système",
  editor_price_label: "Capteur de prix",
  editor_price_desc: "Capteur qui contient le prix actuel (dans l’attribut data)",
  editor_average_label: "Optionnel : Valeur moyenne",
  editor_average_desc: "Nombre (p. ex. 0.225) indiquant le prix moyen (optionnel)",
  editor_theme_label: "Thème",
  editor_theme_desc: "Mode d’affichage de la carte.",
  editor_start_today: "Aujourd’hui",
  editor_start_tomorrow: "Demain",
  editor_start_yesterday: "Hier",
  editor_start_view_label: "Vue de démarrage",
  editor_start_view_desc: "Vue à afficher par défaut",
  editor_view_mode_label: "Mode d’affichage",
  editor_currency_label: "Monnaie",
  editor_currency_desc: "Indiquez une devise personnalisée",
  editor_day_switch_label: "Commutateur de jour",
  editor_day_switch_desc: "Affiche ou masque le commutateur de jour",
  editor_cheap_times_label: "Heures avantageuses",
  editor_cheap_times_desc: "Affichage des intervalles horaires avantageux",
};

var da = {
  no_data: "Ingen data for dagen – venter vi stadig på priserne?",
  no_data_attributes: "Din enhed har ingen data-attributter – se readme",
  no_data_prices: "Din enhed har ingen priser i det rigtige format – se readme",
  missing_price: "Angiv venligst 'price'-sensoren i konfigurationen",
  label_today_price: "Dagens pris",
  label_time_nextDay: "Tidsinterval",
  unit_cent: "Cent",
  label_tomorrow_price: "Morgendagens pris",
  label_average_price: "Gennemsnitspris",
  label_price: "Pris",
  label_day: "Dag",
  label_start: "Start",
  label_end: "Slut",
  label_duration: "Varighed",
  label_name: "Navn",
  editor_theme_light: "Lyst",
  editor_theme_dark: "Mørkt",
  editor_theme_system: "System",
  editor_price_label: "Pris-sensor",
  editor_price_desc: "Sensor, der indeholder den aktuelle pris (i data-attributter)",
  editor_average_label: "Valgfrit: Gennemsnitsværdi",
  editor_average_desc: "Tal (f.eks. 0.225), der angiver gennemsnitsprisen (valgfrit)",
  editor_theme_label: "Tema",
  editor_theme_desc: "Visningstilstand for kortet.",
  editor_start_today: "I dag",
  editor_start_tomorrow: "I morgen",
  editor_start_yesterday: "I går",
  editor_start_view_label: "Startvisning",
  editor_start_view_desc: "Visning, der vises som standard",
  editor_view_mode_label: "Visningstilstand",
  editor_currency_label: "Valuta",
  editor_currency_desc: "Angiv egen valuta",
  editor_day_switch_label: "Dagskifter",
  editor_day_switch_desc: "Viser eller skjuler dagskifteren",
  editor_cheap_times_label: "Billige tider",
  editor_cheap_times_desc: "Visning af billige tidsintervaller",
};

var nl = {
  no_data: "Geen gegevens voor vandaag – wachten we nog op de prijzen?",
  no_data_attributes: "Je entiteit heeft geen data-attributen – zie readme",
  no_data_prices: "Je entiteit heeft geen prijzen in het juiste formaat – zie readme",
  missing_price: "Geef alstublieft de 'price'-sensor op in de configuratie",
  label_today_price: "Prijs van vandaag",
  label_time_nextDay: "Tijdsperiode",
  unit_cent: "Cent",
  label_tomorrow_price: "Prijs van morgen",
  label_average_price: "Gemiddelde prijs",
  label_price: "Prijs",
  label_day: "Dag",
  label_start: "Start",
  label_end: "Einde",
  label_duration: "Duur",
  label_name: "Naam",
  editor_theme_light: "Licht",
  editor_theme_dark: "Donker",
  editor_theme_system: "Systeem",
  editor_price_label: "Prijs-sensor",
  editor_price_desc: "Sensor die de actuele prijs bevat (in data-attributen)",
  editor_average_label: "Optioneel: Gemiddelde waarde",
  editor_average_desc: "Getal (bijv. 0.225) dat de gemiddelde prijs aangeeft (optioneel)",
  editor_theme_label: "Thema",
  editor_theme_desc: "Weergavemodus van de kaart.",
  editor_start_today: "Vandaag",
  editor_start_tomorrow: "Morgen",
  editor_start_yesterday: "Gisteren",
  editor_start_view_label: "Startweergave",
  editor_start_view_desc: "Weergave die standaard wordt getoond",
  editor_view_mode_label: "Weergavemodus",
  editor_currency_label: "Valuta",
  editor_currency_desc: "Eigen valuta opgeven",
  editor_day_switch_label: "Dagwisselaar",
  editor_day_switch_desc: "Toont of verbergt de dagwisselaar",
  editor_cheap_times_label: "Goedkope tijden",
  editor_cheap_times_desc: "Weergave van goedkope tijdsintervallen",
};

var no = {
  no_data: "Ingen data for dagen – venter vi fortsatt på prisene?",
  no_data_attributes: "Enheten din har ingen data-attributter – se readme",
  no_data_prices: "Enheten din har ingen priser i riktig format – se readme",
  missing_price: "Vennligst oppgi 'price'-sensoren i konfigurasjonen",
  label_today_price: "Dagens pris",
  label_time_nextDay: "Tidsintervall",
  unit_cent: "Cent",
  label_tomorrow_price: "Morgendagens pris",
  label_average_price: "Gjennomsnittspris",
  label_price: "Pris",
  label_day: "Dag",
  label_start: "Start",
  label_end: "Slutt",
  label_duration: "Varighet",
  label_name: "Navn",
  editor_theme_light: "Lyst",
  editor_theme_dark: "Mørkt",
  editor_theme_system: "System",
  editor_price_label: "Pris-sensor",
  editor_price_desc: "Sensor som inneholder gjeldende pris (i data-attributter)",
  editor_average_label: "Valgfritt: Gjennomsnittsverdi",
  editor_average_desc: "Tall (f.eks. 0.225) som viser gjennomsnittsprisen (valgfritt)",
  editor_theme_label: "Tema",
  editor_theme_desc: "Visningsmodus for kortet.",
  editor_start_today: "I dag",
  editor_start_tomorrow: "I morgen",
  editor_start_yesterday: "I går",
  editor_start_view_label: "Startvisning",
  editor_start_view_desc: "Visningen som vises som standard",
  editor_view_mode_label: "Visningsmodus",
  editor_currency_label: "Valuta",
  editor_currency_desc: "Angi egen valuta",
  editor_day_switch_label: "Dagveksler",
  editor_day_switch_desc: "Viser eller skjuler dagveksleren",
  editor_cheap_times_label: "Billige tider",
  editor_cheap_times_desc: "Visning av billige tidsintervaller",
};

var sv = {
  no_data: "Inga data för dagen – vi väntar fortfarande på priserna?",
  no_data_attributes: "Din entitet har inga data-attribut – se readme",
  no_data_prices: "Din entitet har inga priser i rätt format – se readme",
  missing_price: "Vänligen ange 'price'-sensorn i konfigurationen",
  label_today_price: "Dagens pris",
  label_time_nextDay: "Tidsintervall",
  unit_cent: "Cent",
  label_tomorrow_price: "Morgondagens pris",
  label_average_price: "Genomsnittspris",
  label_price: "Pris",
  label_day: "Dag",
  label_start: "Start",
  label_end: "Slut",
  label_duration: "Varaktighet",
  label_name: "Namn",
  editor_theme_light: "Ljus",
  editor_theme_dark: "Mörk",
  editor_theme_system: "System",
  editor_price_label: "Pris-sensor",
  editor_price_desc: "Sensor som innehåller det aktuella priset (i attributet data)",
  editor_average_label: "Valfritt: Genomsnittsvärde",
  editor_average_desc: "Tal (t.ex. 0.225) som anger genomsnittspriset (valfritt)",
  editor_theme_label: "Tema",
  editor_theme_desc: "Visningsläge för kortet.",
  editor_start_today: "Idag",
  editor_start_tomorrow: "Imorgon",
  editor_start_yesterday: "Igår",
  editor_start_view_label: "Startvy",
  editor_start_view_desc: "Vy som visas som standard",
  editor_view_mode_label: "Visningsläge",
  editor_currency_label: "Valuta",
  editor_currency_desc: "Ange egen valuta",
  editor_day_switch_label: "Dagsväxlare",
  editor_day_switch_desc: "Visar eller döljer dagsväxlaren",
  editor_cheap_times_label: "Billiga tider",
  editor_cheap_times_desc: "Visning av billiga tidsintervall",
};

const languages = { en, de, es, fr, da, nl, no, sv };
function localize(key, lang) {
  return languages[lang]?.[key] || languages["en"][key] || key;
}

const _localYYYYMMDD = (d) => {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
};

const _localISODateTime = (d) => {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  const ss = String(d.getSeconds()).padStart(2, "0");
  return `${y}-${m}-${day}T${hh}:${mm}:${ss}`;
};

class PriceTimelineCard extends i {

  constructor() {
    super();
    this._dayOffset = 0; // 0 = today, 1 = tomorrow, 2 = both
    this._animating = false;
  }

  static get properties() {
    return {
      config: {},
      theme: { type: String },
      selectedIndex: { type: Number },
    };
  }


  set hass(hass) {
    if (hass === this._hass) return;
    this._hass = hass;
    this._lang = hass?.locale?.language || hass?.language || "en";

    const oldHass = this._hass;
    this._hass = hass;

    const entityId = this.config.entity;
    const oldState = oldHass?.states?.[entityId]?.state;
    const newState = hass?.states?.[entityId]?.state;

    if (oldState !== newState) {
      this.requestUpdate();
    }
  }

  connectedCallback() {
    super.connectedCallback();

    const now = new Date();
    const msToNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

    setTimeout(() => {
      this.requestUpdate();

      this._autoUpdateInterval = setInterval(() => {
        this.requestUpdate();
      }, 60_000);
    }, msToNextMinute);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._autoUpdateInterval) {
      clearInterval(this._autoUpdateInterval);
      this._autoUpdateInterval = null;
    }
  }

  updated(changedProps) {
       if (changedProps.has('theme')) {
        this._applyTheme();
      }
  }

  static get styles() {
    return i$3`
            :host {
              --color-bg-light:#fff;
              --color-text-light:#000;
              --color-subtle-light:#666;
              --color-dot-light:#656c72;
              --color-orange-light:#ff832d;
              --color-turquoise-light:#1dbfac;
              --color-bg-dark:#1e1e1e;
              --color-text-dark:#f5f5f5;
              --color-subtle-dark:#aaa;
              --color-dot-dark:#999;
              --color-orange-dark:#ff832d;
              --color-turquoise-dark:#1dbfac;
              --card-bg:var(--color-bg-light);
              --card-text:var(--color-text-light);
              --card-subtle:var(--color-subtle-light);
              --card-dot:var(--color-dot-light);
              --orange:var(--color-orange-light);
              --turquoise:var(--color-turquoise-light);
            }
            ha-card {
              background:var(--card-bg);
              padding:16px;
              color:var(--card-text);
              text-align:center;
            }
            .header {
              display:flex;
              justify-content:space-between;
              align-items:flex-start;
            }
            .header-left {
              display:flex;
              flex-direction:column;
              align-items:flex-start;
              gap:0
            }
            .time {
              font-size:14px;
              color:var(--card-subtle);
              line-height:1.1;
              margin:0
            }
            .price {
              font-size:24px;
              font-weight:bold;
              color:var(--card-text);
              line-height:1.1;
              margin-top:3px;
              display:flex;
              align-items:baseline;
              justify-content:center;
            }
            .price .value {
              font-size:28px;
              font-weight:800;
            }
            .price .unit {
              font-size:14px;
              font-weight:normal;
              margin-left:6px;
              color:var(--card-text);
            }
            .label {
              font-size:14px;
              color:var(--card-subtle);
              text-align: right;
            }
            .timeline {
              display:flex;
              margin:8px 0;
              height:6px;
              border-radius:5px;
              overflow:visible;
              position:relative;
              z-index: 0;
            }
            .slot {
              flex:1;
              opacity:1;
              position:relative;
            }
            .slot.marker::after {
              content:"";
              position:absolute;
              top:50%;
              left:calc(var(--progress,0)*100%);
              transform:translate(-50%,-50%);
              width:3px;
              height:14px;
              background:inherit;
              border:2px solid var(--card-bg);
              border-radius:10px;
              box-shadow:0 0 4px rgba(0,0,0,0.3);
              z-index:1;
            }
            .faded {
              opacity:0.3;
            }
            .scale {
              display:grid;
              grid-template-columns:repeat(25,1fr);
              font-size:12px;
              color:var(--card-subtle);
              margin-top:6px;
              width:calc(100% + (100% / 24));
              margin-left:calc(-0.5 * (100% / 24));
              margin-right:calc(-0.5 * (100% / 24));
            }
            .scale .tick {
              display:flex;
              flex-direction:column;
              align-items:center;
            }
            .scale .dot {
              width:4px;
              height:4px;
              border-radius:50%;
              background:var(--card-dot);
              margin-bottom:4px;
            }
            .scale .dot.faded {
              opacity:0.4;
            }
            .scale .hour {
              font-variant-numeric:tabular-nums;
              text-align:center;
            }
        
             .circle-container {
              position:relative;
              width:150px;
              height:150px;
              margin:0 auto;
            }
            .circle-container svg {
              transform:rotate(-90deg);
            }
            .circle-text {
              position:absolute;
              top:50%;
              left:50%;
              transform:translate(-50%,-50%);
              text-align:center;
            }
            .circle-text .value {
              font-size:28px;
              font-weight:bold;
              color:var(--card-text);
            }
            .circle-text .unit {
              font-size:16px;
              margin-left:4px;
              color:var(--card-text);
            }
            .circle-text .time {
              font-size:14px;
              color:var(--card-subtle);
              margin-top:4px;
            }
            .slider-container {
              margin-top:4px;
            }
            input[type="range"] {
              width:100%;
              height:6px;
              border-radius:5px;
              background:var(--primary-color);
              outline:none;
              opacity:0.9;
              transition:background 0.3s;
            }
            input[type="range"]::-webkit-slider-thumb {
              width:18px;
              height:18px;
              border-radius:50%;
              background:var(--slider-color,var(--accent-color));
              cursor:pointer;
            }
            input[type="range"]::-moz-range-thumb {
              width:18px;
              height:18px;
              border-radius:50%;
              background:var(--slider-color,var(--accent-color));
              cursor:pointer;
            }
            /* --- No Data Ticker  --- */
            .ticker-container {
              width: 240px;
              height: 60px;
              overflow: hidden;
              text-align: center;
              margin: 0 auto;
            }
            
            .ticker-svg {
              width: 480px;
              height: 60px;
              animation: scroll 4s linear infinite;
            }
            
            .ticker-svg polyline {
              fill: none;
              stroke: var(--no-data-line, var(--primary-color)); 
              stroke-width: 2;
              stroke-linejoin: round;
            }
            
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-240px); }
            }
            
            .no-data-text {
              font-size: 14px;
              color: var(--no-data-text, var(--secondary-text-color));
              text-align: center;
            }
            
            .day-toggle {
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top: 12px;
            }
            

            .toggle-button {
              position: relative;
              display: flex;
              align-items: center;
              justify-content: space-between;
              background-color: rgba(189, 189, 189, 0.5); /* grau */
              border-radius: 9999px;
              width: 100%;
              height: 35px;
              cursor: pointer;
              overflow: hidden;
              transition: background-color 0.3s;
            }
            

            .toggle-button span {
              flex: 1;
              text-align: center;
              color: white;
              font-size: 14px;
              font-weight: 600;
              z-index: 2;
              pointer-events: none;
            }
            

            .toggle-indicator {
              position: absolute;
              top: 4px;
              left: 4px;
              width: calc(50% - 4px);
              height: calc(100% - 8px);
              background-color: white;
              border-radius: 9999px;
              transition: left 0.25s ease;
              z-index: 1;
            }
            
            .active-today .toggle-indicator {
              left: 4px;
            }
            .active-tomorrow .toggle-indicator {
              left: calc(50% + 0px);
            }
            
            .active-today span.today,
            .active-tomorrow span.tomorrow {
              color: #333;
            }
            
             .cheap-phases {
              font-size: 0.75em; 
              opacity: 0.85;    
            }
            
            .cheap-phases table {
              width: 100%;
              border-collapse: collapse;
            }
            
            .cheap-phases th,
            .cheap-phases td {
              padding: 2px 4px;
              text-align: center;
              white-space: nowrap;
            }
            
            .cheap-phases th {
              font-weight: 500;
              opacity: 0.6;
              border-bottom: 1px solid rgba(120,120,120, 0.2);
            }
            
            .cheap-phases td {
              opacity: 0.9;
            }
            
            .cheap-phases tr + tr td {
              border-top: 1px solid rgba(120,120,120, 0.08);
            }
            
                        
        `;
  }

  setConfig(config) {
    if (!config.price) throw new Error(localize("missing_price", "en"));
    this.config = config;
    this.theme = config.theme || "light";
    this.selectedIndex = undefined;
    switch (config.start_view) {
      case "tomorrow":
        this._dayOffset = 1;
        break;
      default:
        this._dayOffset = 0;
    }
  }

  _onSliderChange(ev) {
    this.selectedIndex = parseInt(ev.target.value, 10);
  }


  _applyTheme() {
    switch (this.theme) {
      case "dark":
        this.style.setProperty("--card-bg", "var(--color-bg-dark)");
        this.style.setProperty("--card-text", "var(--color-text-dark)");
        this.style.setProperty("--card-subtle", "var(--color-subtle-dark)");
        this.style.setProperty("--card-dot", "var(--color-dot-dark)");
        this.style.setProperty("--orange", "var(--color-orange-dark)");
        this.style.setProperty("--turquoise", "var(--color-turquoise-dark)");
        this.style.setProperty("--no-data-line", "var(--orange)");
        this.style.setProperty("--no-data-text", "var(--color-subtle-dark)");
        break;
      case "theme":
        this.style.setProperty("--card-bg", "var(--ha-card-background, var(--card-background-color))");
        this.style.setProperty("--card-text", "var(--primary-text-color)");
        this.style.setProperty("--card-subtle", "var(--secondary-text-color)");
        this.style.setProperty("--card-dot", "var(--divider-color)");
        this.style.setProperty("--orange", "var(--accent-color)");
        this.style.setProperty("--turquoise", "var(--state-icon-color)");
        this.style.setProperty("--no-data-line", "var(--accent-color)");
        this.style.setProperty("--no-data-text", "var(--secondary-text-color)");
        break;
      default:
        this.style.setProperty("--card-bg", "var(--color-bg-light)");
        this.style.setProperty("--card-text", "var(--color-text-light)");
        this.style.setProperty("--card-subtle", "var(--color-subtle-light)");
        this.style.setProperty("--card-dot", "var(--color-dot-light)");
        this.style.setProperty("--orange", "var(--color-orange-light)");
        this.style.setProperty("--turquoise", "var(--color-turquoise-light)");
        this.style.setProperty("--no-data-line", "var(--orange)");
        this.style.setProperty("--no-data-text", "var(--color-subtle-light)");
    }
  }

  _getDataTimeLabel(data, index) {
    const startTime = new Date(data[index]?.start_time);
    const endTime =
      index + 1 < data.length
        ? new Date(data[index + 1].start_time)
        : new Date(startTime.getTime() + 15 * 60000);

    const format = (date) =>
      date.toTimeString().slice(0, 5); // "HH:MM"

    return `${format(startTime)}-${format(endTime)}`;
  }

  _getCurrentDataIndex(data, now) {
    let bestIndex = 0;
    let bestDiff = Number.POSITIVE_INFINITY;
    for (let i = 0; i < data.length; i++) {
      const start = new Date(data[i].start_time);
      const diff = now - start;
      if (diff >= 0 && diff < bestDiff) {
        bestDiff = diff;
        bestIndex = i;
      }
    }
    return bestIndex;
  }

  _getDataForOffset(entity, offset = 0) {
    const allData = entity?.attributes?.data || [];
    if (offset === 2) {
      const now = new Date();
      const yesterday = new Date(now);
      yesterday.setDate(now.getDate() - 1);
      const tomorrow = new Date(now);
      tomorrow.setDate(now.getDate() + 1);
      const filtered = allData.filter(item => {
        const date = new Date(item.start_time);
        return (
          this._isSameDay(date, yesterday) ||
          this._isSameDay(date, now) ||
          this._isSameDay(date, tomorrow)
        );
      });
      return filtered;
    } else if (offset === 1 || offset === 0) {
      const date = new Date();
      date.setDate(date.getDate() + offset);
      return allData.filter(item => {
        const start = new Date(item.start_time);
        return start.getFullYear() === date.getFullYear() &&
          start.getMonth() === date.getMonth() &&
          start.getDate() === date.getDate();
      });
    }
  }

  _isSameDay(d1, d2) {
    return d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate();
  }

  _hasPriceData(data) {
    return data.every(obj => obj.hasOwnProperty('price_per_kwh'));
  }

  _calculateAveragePrice(data) {
    if (!data || data.length === 0) return 0;

    const centsRounded = data.map(item => {
      const centValue = item.price_per_kwh * 100;
      return Math.round(centValue * 10) / 10;
    });

    const sum = centsRounded.reduce((acc, val) => acc + val, 0);
    const average = sum / centsRounded.length;

    const rounded = Math.round(average);

    return rounded / 100;
  }

  _roundCent(price_per_kwh) {
    return (Math.round(Math.round(price_per_kwh * 100 * 10) / 10) / 100);
  }

  _getPriceRange(data) {
    if (!data || data.length === 0) {
      return { min: undefined, max: undefined };
    }

    let min = Number.POSITIVE_INFINITY;
    let max = Number.NEGATIVE_INFINITY;

    for (const item of data) {
      const price = parseFloat(item.price_per_kwh);
      if (isNaN(price)) continue;
      if (price < min) min = price;
      if (price > max) max = price;
    }

    return { min, max };
  }

  _getCurrency(lang = this.hass?.language || "en") {
    //default =cent
    const defaultCurrency = {
      name: localize("unit_cent", lang),
      symbol: "¢",
    };

    const cur = this.config.currency;
    if (cur && (cur.name?.trim() || cur.symbol?.trim())) {
      return {
        name: cur.name?.trim() || defaultCurrency.name,
        symbol: cur.symbol?.trim() || defaultCurrency.symbol,
      };
    }
    return defaultCurrency;
  }

  _getCheapIntervalsPerDay(data) {
    const byDay = {};

    for (const item of data) {
      const d = new Date(item.start_time);
      const date = _localYYYYMMDD(d);

      if (!byDay[date]) byDay[date] = [];
      const price = Math.round(item.price_per_kwh * 1000) / 1000;
      byDay[date].push(price);
    }

    const result = {};

    for (const [day, prices] of Object.entries(byDay)) {
      const min = Math.min(...prices);
      const max = Math.max(...prices);
      const rel = prices.map((p) => (p - min) / (max - min || 1));

      const sorted = [...rel].sort((a, b) => a - b);
      const threshold = sorted[Math.floor(0.25 * (sorted.length - 1))];

      result[day] = rel.map((r) => r <= threshold);
    }

    return result;
  };


  _getCheapPhasesPerDay(data) {
    const dayFlags = this._getCheapIntervalsPerDay(data);

    const timesByDay = {};
    for (const item of data) {
      const d = new Date(item.start_time);
      const date = _localYYYYMMDD(d);
      if (!timesByDay[date]) timesByDay[date] = [];
      timesByDay[date].push(new Date(item.start_time));
    }

    const result = {};

    for (const [day, flags] of Object.entries(dayFlags)) {
      const times = timesByDay[day];
      const phases = [];
      let start = null;


      let intervalMs = 60 * 60 * 1000;
      if (times.length > 1) {
        intervalMs = times[1] - times[0];
      }

      for (let i = 0; i < flags.length; i++) {
        if (flags[i] && start === null) {
          start = new Date(times[i]);
        }
        if ((!flags[i] || i === flags.length - 1) && start !== null) {
          const endIndex = flags[i] ? i : i - 1;
          const end = new Date(times[endIndex].getTime() + intervalMs);

          phases.push({
            start: _localISODateTime(start),
            end: _localISODateTime(end),
          });

          start = null;
        }
      }

      result[day] = phases;
    }

    return this._getFutureCheapPhases(result);
  };

  _getFutureCheapPhases(phasesObj) {
    const now = new Date();
    const ONE_HOUR = 60 * 60 * 1000;
    const result = {};

    for (const [day, phases] of Object.entries(phasesObj)) {
      const filtered = [];

      for (const phase of phases) {
        const start = new Date(phase.start);
        const end = new Date(phase.end);
        const duration = end - start;

        if (end > now && duration >= ONE_HOUR) {

          filtered.push({
            start: _localISODateTime(start),
            end: _localISODateTime(end),
            name: phase.name?phase.name: "-",
          });
        }
      }

      if (filtered.length > 0) {
        result[day] = filtered;
      }
    }

    return result;
  }
  
  
     _buildGroupedTimeSlots(offset) {
      const result = {};
      this.config.cheap_time_sources.forEach((entityId) => {
        const entity = this._hass.states[entityId];
        if (!entity || !entity.attributes || !Array.isArray(entity.attributes.data)) return;
    
        const name = entity.attributes.friendly_name || entityId;
    
        entity.attributes.data.forEach((item) => {
          const start = item.start_time;
          const end = item.end_time;
    
          const dateKey = start.substring(0, 10); // "YYYY-MM-DD"
    
          if (!result[dateKey]) {
            result[dateKey] = [];
          }
    
          result[dateKey].push({
            start,
            end,
            name,
          });
        });
      });

      Object.keys(result).forEach((date) => {
        result[date].sort((a, b) => new Date(a.start) - new Date(b.start));
      });
      
      let futurePhases = this._getFutureCheapPhases(result);
      if(offset === 0 || offset === 1){
      const date = new Date();
        date.setDate(date.getDate() + offset);
        const key = date.toISOString().split('T')[0];
        const filteredPhases = Object.keys(futurePhases)
          .filter(k => k === key)
          .reduce((obj, k) => {
            obj[k] = futurePhases[k];
            return obj;
          }, {});
        return filteredPhases;
      }
      return futurePhases;
    }
    
  _generateChart(data,dataIntervalls, currentIndex, average, lang) {
    const rawData = data;
    const parsed = rawData.map(d => ({
      time: new Date(d.start_time),
      cent: d.price_per_kwh * 100
    }));
    parsed.sort((a, b) => a.time - b.time);

    const start = parsed[0].time;
    const end = parsed[parsed.length - 1].time;
    const now = new Date();
    const hasTomorrow = rawData.some(d => new Date(d.start_time).getDate() !== start.getDate());
    const width = 500;
    const height = 300;
    const margin = { left: 42, right: 20, top: 30, bottom: 35 };
    const innerW = width - margin.left - margin.right;
    const innerH = height - margin.top - margin.bottom;

    // user-defined horizontal threshold lines (max. 4)
    // value = number in cent/kWh, or an entity id whose state is in €/kWh (like "average")
    const thresholds = (Array.isArray(this.config.thresholds) ? this.config.thresholds : [])
      .slice(0, 4)
      .map(t => {
        const raw = t?.value;
        let value;
        if (typeof raw === "string" && this._hass?.states?.[raw]) {
          const st = parseFloat(this._hass.states[raw].state);
          value = isNaN(st) ? NaN : st * 100; // €/kWh -> cent
        } else {
          value = parseFloat(raw); // plain number, cent/kWh
        }
        return { value, color: t?.color || "red", label: t?.label };
      })
      .filter(t => !isNaN(t.value));

    const min = Math.min(...parsed.map(p => p.cent), ...thresholds.map(t => t.value)) * 0.9;
    const max = Math.max(...parsed.map(p => p.cent), ...thresholds.map(t => t.value)) * 1.05;

    const xFor = t => margin.left + ((t - start) / (end - start)) * innerW;
    const yFor = v => margin.top + innerH - ((v - min) / (max - min)) * innerH;

    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);

    // --- Y- ---
    const style = getComputedStyle(this);

    function toRgbString(color) {
      if (!color) return "255,255,255"; // fallback

      color = color.trim();

      // rgb(...) ,  rgba(...) 
      if (/^rgba?\(/i.test(color)) {
        const match = color.match(/\d+,\s*\d+,\s*\d+/);
        return match ? match[0] : "255,255,255";
      }

      // Hex
      if (/^#([a-f\d]{3}|[a-f\d]{6})$/i.test(color)) {
        let hex = color.replace(
          /^#([a-f\d])([a-f\d])([a-f\d])$/i,
          "#$1$1$2$2$3$3"
        );
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result
          ? `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`
          : "255,255,255";
      }

      //color names ( "lightgray", ... ) parsing by browser
      const temp = document.createElement("div");
      temp.style.color = color;
      document.body.appendChild(temp);

      const cs = getComputedStyle(temp).color;
      document.body.removeChild(temp);

      const match = cs.match(/\d+,\s*\d+,\s*\d+/);
      return match ? match[0] : "255,255,255";
    }

    const color = toRgbString(style.getPropertyValue("--card-subtle").trim() || "255,255,255");
    const step = Math.round((max - min) / 5);
    for (let v = Math.round(min); v <= Math.round(max); v += step) {
      const y = yFor(v);
      const line = document.createElementNS(svgNS, "line");
      line.setAttribute("x1", margin.left);
      line.setAttribute("x2", width - margin.right);
      line.setAttribute("y1", y);
      line.setAttribute("y2", y);
      line.setAttribute("stroke", `rgba(${color}, 0.2)`);
      svg.appendChild(line);

      const txt = document.createElementNS(svgNS, "text");
      txt.setAttribute("x", 8);
      txt.setAttribute("fill", "var(--card-text)");
      txt.setAttribute("y", y + 4);
      txt.setAttribute("class", "axis-label");
      txt.textContent = Math.round(v);
      svg.appendChild(txt);
    }

    // --- X- ---
    const totalHours = Math.ceil((end - start) / 3600000);
    for (let h = 0; h <= totalHours; h += (hasTomorrow ? 4 : 2)) {
      const t = new Date(start.getTime() + h * 3600000);
      const x = xFor(t);
      const txt = document.createElementNS(svgNS, "text");
      txt.setAttribute("x", x);
      txt.setAttribute("y", height - 6);
      txt.setAttribute("text-anchor", "middle");
      txt.setAttribute("class", "time-label");
      txt.setAttribute("fill", "var(--card-text)");
      txt.textContent = String(t.getHours()).padStart(2, "0");
      svg.appendChild(txt);
    }

    // --- Plot  ---
    const pts = parsed.map(p => ({ x: xFor(p.time), y: yFor(p.cent), v: p.cent, time: p.time }));
    let d = `M${pts[0].x},${pts[0].y}`;
    for (let i = 1; i < pts.length; i++) {
      const curr = pts[i];
      d += ` H${curr.x} V${curr.y}`;
    }

    // Past faded
    const grad = document.createElementNS(svgNS, "linearGradient");
    grad.setAttribute("id", "lineGradient");
    grad.setAttribute("gradientUnits", "userSpaceOnUse");
    grad.setAttribute("x1", margin.left);
    grad.setAttribute("x2", width - margin.right);

    grad.innerHTML = pts.map(p => {
      const offset = ((p.x - margin.left) / innerW) * 100;
      const color = p.v > average ? "var(--orange)" : "var(--turquoise)";
      const past = p.time < now ? 0.25 : 1;
      return `<stop offset="${offset}%" stop-color="${color}" stop-opacity="${past}" />`;
    }).join("");
    svg.prepend(grad);

    const path = document.createElementNS(svgNS, "path");
    path.setAttribute("d", d);
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", "url(#lineGradient)");
    path.setAttribute("stroke-width", "2.6");
    svg.appendChild(path);

    // average line
    const yAvg = yFor(average);
    const avgLine = document.createElementNS(svgNS, "line");
    avgLine.setAttribute("x1", margin.left);
    avgLine.setAttribute("x2", width - margin.right);
    avgLine.setAttribute("y1", yAvg);
    avgLine.setAttribute("y2", yAvg);
    avgLine.setAttribute("stroke", `rgba(${color}, 0.35)`);
    avgLine.setAttribute("stroke-dasharray", "4 3");
    avgLine.setAttribute("stroke-width", 2);
    svg.appendChild(avgLine);

    // user-defined threshold lines
    thresholds.forEach((t) => {
      const yT = yFor(t.value);
      const tLine = document.createElementNS(svgNS, "line");
      tLine.setAttribute("x1", margin.left);
      tLine.setAttribute("x2", width - margin.right);
      tLine.setAttribute("y1", yT);
      tLine.setAttribute("y2", yT);
      tLine.setAttribute("stroke", t.color);
      tLine.setAttribute("stroke-width", 1.5);
      svg.appendChild(tLine);

      const tText = document.createElementNS(svgNS, "text");
      tText.setAttribute("x", width - margin.right - 2);
      tText.setAttribute("y", yT - 3);
      tText.setAttribute("text-anchor", "end");
      tText.setAttribute("font-size", "10px");
      tText.setAttribute("font-weight", "600");
      tText.setAttribute("fill", t.color);
      tText.textContent = t.label
        ? `${t.label} ${t.value}`
        : `${t.value}`;
      svg.appendChild(tText);
    });


    // Midnight
    let midnight = new Date(start.getFullYear(), start.getMonth(), start.getDate() + 1);
    const xMid = xFor(midnight);
    const vLine = document.createElementNS(svgNS, "line");
    vLine.setAttribute("x1", xMid);
    vLine.setAttribute("x2", xMid);
    vLine.setAttribute("y1", margin.top);
    vLine.setAttribute("y2", height - margin.bottom);
    vLine.setAttribute("stroke", `rgba(${color}, 0.3)`);
    vLine.setAttribute("stroke-width", "1.2");
    vLine.setAttribute("stroke-width", 2);
    svg.appendChild(vLine);

    // now line
    const xNowTime = xFor(new Date(data[currentIndex].start_time));
    const vLine2 = document.createElementNS(svgNS, "line");
    vLine2.setAttribute("x1", xNowTime);
    vLine2.setAttribute("x2", xNowTime);
    vLine2.setAttribute("y1", margin.top);
    vLine2.setAttribute("y2", height - margin.bottom);
    vLine2.setAttribute("stroke", `rgba(${color}, 0.5)`);
    vLine2.setAttribute("stroke-width", "1.2");
    vLine2.setAttribute("stroke-dasharray", "3 3");
    vLine2.setAttribute("stroke-width", 2);
    svg.appendChild(vLine2);

    // labels today, tomorrow , yesterday
    const yLabel = margin.top - 15;
    if (hasTomorrow) {
      const leftLabel = document.createElementNS(svgNS, "text");
      leftLabel.setAttribute("x", xMid - innerW / 4);
      leftLabel.setAttribute("y", yLabel);
      leftLabel.setAttribute("fill", "var(--card-text)");
      leftLabel.setAttribute("font-size", "12px");
      leftLabel.setAttribute("font-weight", "600");
      leftLabel.setAttribute("text-anchor", "middle");
      leftLabel.textContent = (now >= new Date(data[Math.round(data.length/2)].start_time)) ? localize("editor_start_yesterday", lang) : localize("editor_start_today", lang);
      svg.appendChild(leftLabel);
      const rightLabel = document.createElementNS(svgNS, "text");
      rightLabel.setAttribute("x", xMid + innerW / 4);
      rightLabel.setAttribute("y", yLabel);
      rightLabel.setAttribute("fill", "var(--card-text)");
      rightLabel.setAttribute("font-size", "12px");
      rightLabel.setAttribute("font-weight", "600");
      rightLabel.setAttribute("text-anchor", "middle");
      rightLabel.textContent = (now >= new Date(data[Math.round(data.length/2)].start_time)) ? localize("editor_start_today", lang) : localize("editor_start_tomorrow", lang);
      svg.appendChild(rightLabel);
    } else {
      const todayLabel = document.createElementNS(svgNS, "text");
      todayLabel.setAttribute("x", margin.left + innerW / 2);
      todayLabel.setAttribute("y", yLabel);
      todayLabel.setAttribute("fill", "var(--card-text)");
      todayLabel.setAttribute("font-size", "12px");
      todayLabel.setAttribute("font-weight", "600");
      todayLabel.setAttribute("text-anchor", "middle");
      todayLabel.textContent = (start.getDate() === now.getDate() - 1) ? localize("editor_start_yesterday", lang) : localize("editor_start_today", lang);
      svg.appendChild(todayLabel);
    }
    if (now >= start && now <= end) {

      const cx = xFor(new Date(data[currentIndex].start_time));
      const cy = yFor(data[currentIndex].price_per_kwh * 100);

      const color = (data[currentIndex].price_per_kwh * 100) > average ? "--orange" : "--turquoise";
      const circle = document.createElementNS(svgNS, "circle");
      circle.setAttribute("cx", cx);
      circle.setAttribute("cy", cy);
      circle.setAttribute("r", 8);
      circle.setAttribute("fill", `rgba(${toRgbString(style.getPropertyValue(color).trim() || "255,255,255")}, 0.4`);
      svg.appendChild(circle);

      const circle2 = document.createElementNS(svgNS, "circle");
      circle2.setAttribute("cx", cx);
      circle2.setAttribute("cy", cy);
      circle2.setAttribute("r", 4);
      circle2.setAttribute("fill", "#ffffff");
      svg.appendChild(circle2);

      const circle3 = document.createElementNS(svgNS, "circle");
      circle3.setAttribute("cx", cx);
      circle3.setAttribute("cy", cy);
      circle3.setAttribute("r", 2);
      circle3.setAttribute("fill", `var(${color})`);
      svg.appendChild(circle3);

    }

    function markMinMax(svg, points, dayStart, dayEnd) {
      const dayPoints = points.filter(p => p.time >= dayStart && p.time < dayEnd);
      if (dayPoints.length === 0) return;

      const minP = dayPoints.reduce((a, b) => a.v < b.v ? a : b);
      const maxP = dayPoints.reduce((a, b) => a.v > b.v ? a : b);


      [minP, maxP].forEach(p => {
        const yOffset = p.v > average ? p.y - 8 : p.y + 14;
        const color = p.v > average ? "var(--orange)" : "var(--turquoise)";
        const color2 = p.v < average ? "var(--orange)" : "var(--turquoise)";

        const circle = document.createElementNS(svgNS, "circle");
        circle.setAttribute("cx", p.x);
        circle.setAttribute("cy", p.y);
        circle.setAttribute("r", 5);
        circle.setAttribute("fill", color);
        circle.setAttribute("opacity", "0.85");
        svg.appendChild(circle);


        const circle2 = document.createElementNS(svgNS, "circle");
        circle2.setAttribute("cx", p.x);
        circle2.setAttribute("cy", p.y);
        circle2.setAttribute("r", 2);
        circle2.setAttribute("fill", color2);
        circle2.setAttribute("opacity", "0.85");
        svg.appendChild(circle2);

        const text = document.createElementNS(svgNS, "text");
        text.setAttribute("x", p.x);
        text.setAttribute("y", yOffset);
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("fill", "var(--card-text)");
        text.setAttribute("font-size", "13px");
        text.setAttribute("font-weight", "600");
        text.textContent = p.v.toFixed(1);
        svg.appendChild(text);
      });
    }
    
   // phases
    let index = 0;
    if (this.config.cheap_times === true) {
      const labelsByStart = {}; 
    
      for (const [day, intervals] of Object.entries(dataIntervalls)) {
        for (const { start, end } of intervals) {
          const startDate = new Date(start);
          const endDate = new Date(end);
          const xStart = xFor(startDate);
          const xEnd = xFor(endDate);
    
          const rect = document.createElementNS(svgNS, "rect");
          rect.setAttribute("x", xStart);
          rect.setAttribute("y", margin.top);
          rect.setAttribute("width", xEnd - xStart);
          rect.setAttribute("height", height - margin.bottom - margin.top);
          rect.setAttribute("fill", "var(--turquoise)");
          rect.setAttribute("fill-opacity", "0.2");
          svg.insertBefore(rect, svg.firstChild);
    

          const key = startDate.getTime(); 
          if (!labelsByStart[key]) {
            labelsByStart[key] = [];
          }
          labelsByStart[key].push(++index);
        }
      }
    

      for (const [key, indices] of Object.entries(labelsByStart)) {
        const startDate = new Date(Number(key));
        const label = document.createElementNS(svgNS, "text");
        label.setAttribute("x", xFor(startDate) + 5);
        label.setAttribute("y", yFor(max) - 2);
        label.setAttribute("fill", "var(--card-text)");
        label.setAttribute("font-size", "10px");
        label.setAttribute("font-weight", "600");
        label.setAttribute("text-anchor", "middle");
        label.textContent = "(" + indices.join(", ") + ")";
        svg.appendChild(label);
      }
    }
    

    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const todayEnd = new Date(todayStart);
    todayEnd.setDate(todayEnd.getDate() + 1);

    const tomorrowStart = new Date(todayEnd);
    const tomorrowEnd = new Date(tomorrowStart);
    tomorrowEnd.setDate(tomorrowEnd.getDate() + 1);

    markMinMax(svg, pts, todayStart, todayEnd);
    markMinMax(svg, pts, tomorrowStart, tomorrowEnd);

    return svg;

  }


  _toggleDayView() {
    this._dayOffset = this._dayOffset === 0 ? 1 : 0;
    this.requestUpdate();
  }
  

  // --------------------
  //NO DATA
  //---------------------   
  _renderNoData(lang) {
    return b`
            <div class="ticker-container">
                <svg class="ticker-svg" viewBox="0 0 480 60">
                    <polyline points="0,30 40,30 60,10 80,50 100,30 140,30 160,20 180,40 200,30 240,30 260,10 280,50 300,30 340,30 360,20 380,40 400,30 440,30 460,15 480,45"/>
                </svg>
            </div>
            <div class="no-data-text">${localize("no_data", lang)}</div>
            ${this.config.day_switch ? this._renderToggler(lang) : ""}
        `;
  }

  // --------------------
  //NO PRICES
  //---------------------   
  _renderNoPrices(lang) {
    return b`<div>${localize("no_data_prices", lang)}</div>`;
  }


  // --------------------
  //NO ATTRIBUTE
  //---------------------   
  _renderNoAttributes(lang) {
    return b`<div>${localize("no_data_attributes", lang)}</div>`;
  }

  // --------------------
  //TOGGLER
  //---------------------   
  _renderToggler(lang) {
    const activeClass = this._dayOffset === 0 ? "active-today" : "active-tomorrow";

    return b`
      <div class="day-toggle no-tap">
        <div class="toggle-button ${activeClass}" @click=${this._toggleDayView}>
          <div class="toggle-indicator"></div>
          <span class="today">${localize("editor_start_today", lang)}</span>
          <span class="tomorrow">${localize("editor_start_tomorrow", lang)}</span>
        </div>
      </div>
        `
  }

  // --------------------
  //SLIDER
  //---------------------
  _renderSlider(data, currentIndex) {
    return b` 
        <div class="slider-container no-tap">
           <input type="range" min="0" max="${data.length - 1}" .value="${currentIndex}" @input="${this._onSliderChange}" />
        </div>
       `
  }
  

  // --------------------
  //CHEAPTIMES
  //---------------------
  _renderCheapTimes(futurePhases) {
    let index = 0;
    if (Object.keys(futurePhases).length > 0) {
      return b`
            <div class="cheap-phases">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>${localize("label_day", this._lang)}</th>
                    <th>${localize("label_start", this._lang)}</th>
                    <th>${localize("label_end", this._lang)}</th>
                    <th>${localize("label_duration", this._lang)}</th>
                    <th>${localize("label_name", this._lang)}</th>
                  </tr>
                </thead>
                <tbody>
                  ${Object.entries(futurePhases).map(([day, phases]) =>
        phases.map((p) => {
          const start = new Date(p.start);
          const end = new Date(p.end);
          const durationMs = end - start;
          const mins = Math.round(durationMs / 60000);
          const hours = Math.floor(mins / 60);
          const rmins = mins % 60;
          const durationStr = `${hours}h ${rmins}m`;
          return b`
                        <tr>
                          <td>(${++index})</td>
                          <td>${day}</td>
                          <td>${start.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</td>
                          <td>${end.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</td>
                          <td>${durationStr}</td>
                          <td>${p.name}</td>
                        </tr>
                      `;
        })
      )}
                </tbody>
              </table>
            </div>
          `;
    }
  }


  // --------------------
  //TIMELINE
  //---------------------
  _renderTimeline(data, currentIndex, avg, lang) {
    const now = new Date();
    const slotMinutes = data.length > 1 ? Math.round((new Date(data[1].start_time) - new Date(data[0].start_time)) / 60000) : 60;
    const minutes = now.getMinutes();
    const progress = slotMinutes === 60 ? (minutes / slotMinutes) : ((minutes % slotMinutes) / 15);

    const currentPrice = data[currentIndex].price_per_kwh;
    const formattedPriceTL = ((currentPrice * 100).toFixed(1))
      .replace('.', ',')
      .replace(/,0$/, '');

    const { min, max } = this._getPriceRange(data);
    const format = (value) =>
      ((value * 100).toFixed(1))
        .replace('.', ',')
        .replace(/,0$/, '');

    let timeLabel = this._getDataTimeLabel(data, currentIndex);


    return b`
            <div class="header">
                <div class="header-left">
                    <div class="time">${timeLabel}</div>
                    <div class="price">
                        <span class="value">${formattedPriceTL}</span>
                        <span class="unit">${this._getCurrency(lang).name}</span>
                    </div>
                </div style="display: grid">
                <div>
                <div class="label">${this._dayOffset === 0 ? localize("label_today_price", lang) : localize("label_tomorrow_price", lang)}</div>
                <div style="text-align: right; font-weight: bold;">${format(min)} - ${format(max)}</div>
                </div>
            </div>
            <div class="timeline">
                ${data.map((d, i) => {
      const color = this._roundCent(d.price_per_kwh) > avg ? "var(--orange)" : "var(--turquoise)";
      const faded = i < currentIndex ? "faded" : "";
      const marker = (i === currentIndex && (currentIndex != 0 || this._dayOffset === 0)) ? "marker" : "";
      const prevColor = i > 0 ? (this._roundCent(data[i - 1].price_per_kwh) > avg ? "var(--orange)" : "var(--turquoise)") : null;
      const nextColor = i < data.length - 1 ? (this._roundCent(data[i + 1].price_per_kwh) > avg ? "var(--orange)" : "var(--turquoise)") : null;
      let borderRadius = "";
      if (prevColor !== color) borderRadius += "border-top-left-radius:10px; border-bottom-left-radius:10px;";
      if (nextColor !== color) borderRadius += "border-top-right-radius:10px; border-bottom-right-radius:10px;";
      return b`<div class="slot ${faded} ${marker}" style="background:${color};${borderRadius};--progress:${i === currentIndex ? progress : 0}"></div>`;
    })}
            </div>
            <div class="scale">
                ${Array.from({ length: 25 }).map((_, i) => {
      const showHour = i % 6 === 0 || i === 24;
      return b`
                        <div class="tick">
                            <div class="dot ${showHour ? "" : "faded"}"></div>
                            ${showHour ? b`<div class="hour">${String(i % 24).padStart(2, "0")}</div>` : ""}
                        </div>`;
    })}
            </div>
        `;
  }

  // --------------------
  //CIRCLE
  //---------------------
  _renderCircle(data, currentIndex, avg, lang) {
    const currentData = data[currentIndex];
    let currentPrice = currentData.price_per_kwh;
    const formattedPrice = (currentPrice * 100).toFixed(0);
    currentPrice = this._roundCent(currentPrice);
    const radius = 65;
    const minPrice = Math.min(...data.map(d => d.price_per_kwh));
    const maxPrice = Math.max(...data.map(d => d.price_per_kwh));
    const rawRatio = (currentPrice - minPrice) / (maxPrice - minPrice || 1);
    const ratio = 0.05 + rawRatio * 0.9;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference * (1 - ratio);
    const circleColor = currentPrice > avg ? "var(--orange)" : "var(--turquoise)";
    const timeLabel = this._getDataTimeLabel(data, currentIndex);

    return b`
            <div class="circle-container">
                <svg width="150" height="150">
                    <circle cx="75" cy="75" r="${radius}" stroke="var(--card-dot)" stroke-width="10" fill="none" opacity="0.2"></circle>
                    <circle cx="75" cy="75" r="${radius}" stroke="${circleColor}" stroke-width="10" fill="none"
                        stroke-dasharray="${circumference}" stroke-dashoffset="${offset}" stroke-linecap="round"></circle>
                </svg>
                <div class="circle-text">
                    <div class="price">
                        <span class="value">${formattedPrice}</span>
                        <span class="unit">${this._getCurrency(lang).name}</span>
                    </div>
                    <div class="time">${timeLabel}</div>
                </div>
            </div>
        `;
  }

  // --------------------
  //CHART
  //---------------------
  _renderChart(data, dataIntervalls, currentIndex, avg, lang) {
    const circleColor = data[currentIndex].price_per_kwh > avg ? "var(--orange)" : "var(--turquoise)";
    return b`
                <div>
                    <h3 style="margin: 0px">${localize("label_average_price", lang)}: <span id="avgText">${(avg * 100).toFixed(1)} ${this._getCurrency(lang).name}</span></h3>
                    <h5 style="margin: 0px; color:${circleColor}">${localize("label_price", lang)}: <span>${(data[currentIndex].price_per_kwh * 100).toFixed(1)} ${this._getCurrency(lang).name} (${this._getDataTimeLabel(data, currentIndex)})</span></h5>
                </div>
                ${this._generateChart(data, dataIntervalls, currentIndex, avg * 100, lang)}
          `
      ;
  }

  // ---------------------
  // RENDER
  // ---------------------
  render() {
    if (!this._hass) return b``;
    const lang = this._lang;

    const entity = this._hass.states[this.config.price];

    //read average parameter
    let avg = undefined;
    const avgTemp = this.config.average;
    if (avgTemp && this._hass.states[avgTemp]) {
      avg = parseFloat(this._hass.states[avgTemp].state);
    } else if (!isNaN(parseFloat(avgTemp))) {
      avg = parseFloat(avgTemp);
    }

    // no data attribute
    if (!entity || !entity.attributes?.data) {
      return b`<ha-card>${this._renderNoAttributes(lang)}</ha-card>`;
    }

    let offset = (this.config.view === "graph") ? 2 : this._dayOffset;
    const data = this._getDataForOffset(entity, offset);
    //calculate average
    if (avg === undefined) {
      avg = this._calculateAveragePrice(data);
    }

    // no data
    if (!data.length) {
      return b`<ha-card>${this._renderNoData(lang)}</ha-card>`;
    }
    // no price per kwh attribute or wrong format
    if (!this._hasPriceData(data)) {
      return b`<ha-card>${this._renderNoPrices(lang)}</ha-card>`;
    }

    const currentIndex = this.config.slider
      ? (typeof this.selectedIndex === "number" ? this.selectedIndex : this._getCurrentDataIndex(data, new Date()))
      : this._getCurrentDataIndex(data, new Date());

    let dataIntervalls;
    if(this.config.cheap_time_sources){
        dataIntervalls = this._buildGroupedTimeSlots(offset);
    }else {
        dataIntervalls = this._getCheapPhasesPerDay(data);
    }

    
    let cardContent;
    switch (this.config.view) {
      case "timeline":
        cardContent = this._renderTimeline(data, currentIndex, avg, lang);
        break;
      case "circle":
        cardContent = this._renderCircle(data, currentIndex, avg, lang);
        break;
      case "graph":
        cardContent = this._renderChart(data, dataIntervalls, currentIndex, avg, lang);
        break;
      default:
        cardContent = this._renderTimeline(data, currentIndex, avg, lang);
    }

    return b`
        <ha-card>
                <div>
                  <div @pointerup=${(ev) => this._onTap(ev)}>${cardContent}</div>
                  ${this.config.cheap_times === true ? this._renderCheapTimes(dataIntervalls) : ""}
                  ${this.config.day_switch && this.config.view !== "graph" ? this._renderToggler(lang) : ""}
                  ${this.config.slider ? this._renderSlider(data, currentIndex) : ""}
                </div>
           </ha-card>
         `;
  }
  
  _onTap(ev) {
      const ignoreTags = ["BUTTON", "A", "INPUT", "SELECT", "TEXTAREA", "HA-SLIDER"];
      if (ignoreTags.includes(ev.target.tagName)) return;
      if (ev.target.closest(".no-tap")) return; 
      this._handleAction("tap");
  }
  
 _handleAction(actionType) {
      if (!this.config.tap_action || !this.config.tap_target) return;
      const event = new CustomEvent("hass-action", {
        bubbles: true,
        composed: true,
        detail: {
          config: {
            entity: this.config.tap_target,
            tap_action: this.config.tap_action,
          },
          action: actionType,
        },
      });
      this.dispatchEvent(event);
    }

  static getConfigElement() {
    return document.createElement("price-timeline-card-editor");
  }
}

customElements.define("price-timeline-card", PriceTimelineCard);

// ---------------------
// EDITOR
// ---------------------
class PriceTimelineEditor extends i {
  static get properties() {
    return {
      _config: { type: Object },
      hass: { type: Object },
    };
  }

  setConfig(config) {
    this._config = {
      price: "",
      view: "timeline",
      theme: "light",
      slider: false,
      day_switch: true,
      ...config,
    };
  }
  set hass(hass) {
    this._hass = hass;
  }


  _valueChanged(ev) {
    if (!this._config || !this._hass) return;
    const newData = ev.detail.value;
    const newConfig = { ...this._config, ...newData };
    newConfig.view = newData.view_mode;
    delete newConfig.view_mode;

    this._config = newConfig;

    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: this._config },
        bubbles: true,
        composed: true,
      })
    );
  }


  render() {
    if (!this._config) return b``;
    const lang = this._hass?.language || "en";

    let mode = this._config.view;

    const schema = [
      { name: "price", selector: { entity: { domain: "sensor" } } },
      { name: "average", selector: { number: { min: 0, max: 2, step: 0.001, mode: "box" } } },
      {
        name: "view_mode",
        selector: {
          select: {
            mode: "dropdown",
            options: [
              { value: "timeline", label: "Timeline" },
              { value: "circle", label: "Circle" },
              { value: "graph", label: "Graph" },
            ],
          },
        },
      },
      { name: "slider", selector: { boolean: {} } },
      { name: "cheap_times", selector: { boolean: {} } },
    ];

    if (mode === "circle" || mode === "timeline") {
      schema.push(
        { name: "day_switch", selector: { boolean: {} } },
        {
          name: "start_view",
          selector: {
            select: {
              options: [
                { value: "today", label: localize("editor_start_today", lang) },
                { value: "tomorrow", label: localize("editor_start_tomorrow", lang) },
              ],
            },
          },
        },

      );
    }

    schema.push(
      {
        name: "theme",
        selector: {
          select: {
            options: [
              { value: "light", label: localize("editor_theme_light", lang) },
              { value: "dark", label: localize("editor_theme_dark", lang) },
              { value: "theme", label: localize("editor_theme_system", lang) },
            ],
          },
        },
      },
      {
        name: "currency",
        selector: {
          object: {
            properties: {
              name: { selector: { text: {} } },
              symbol: { selector: { text: {} } },
            },
          },
        },
      }
    );

    const data = {
      ...this._config,
      view_mode: mode,
      currency: {
        name: this._config?.currency?.name || "",
        symbol: this._config?.currency?.symbol || "",
      },
    };

    return b`
        <ha-form
          .hass=${this._hass}
          .data=${data}
          .schema=${schema}
          .computeLabel=${this._computeLabel.bind(this)}
          .computeHelper=${this._computeHelper.bind(this)}
          @value-changed=${this._valueChanged}
        ></ha-form>
      `;
  }


  _computeLabel(schemaEntry) {
    const lang = this._hass?.language || "en";
    const key = schemaEntry.name;
    const text = localize(`editor_${key}_label`, lang);

    if (!text || text.startsWith("editor_")) {
      return key.charAt(0).toUpperCase() + key.slice(1);
    }
    return text;
  }

  _computeHelper(schemaEntry) {
    const lang = this._hass?.language || "en";
    const key = schemaEntry.name;
    const text = localize(`editor_${key}_desc`, lang);

    if (!text || text.startsWith("editor_")) return "";
    return text;
  }

}

customElements.define("price-timeline-card-editor", PriceTimelineEditor);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "price-timeline-card",
  name: "HA Price Timeline Card",
  preview: false,
  description: "Card that visualizes hourly or quarter-hourly energy prices on a timeline, circle or graph",
});
