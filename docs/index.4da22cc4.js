let e,t,r;var n,i,s,o,a,l,h,u,c,f,d,p,g,m,y,v,w,_,E,b,I,T,S,C,A=globalThis,k={},R={},N=A.parcelRequire94c2;null==N&&((N=function(e){if(e in k)return k[e].exports;if(e in R){var t=R[e];delete R[e];var r={id:e,exports:{}};return k[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){R[e]=t},A.parcelRequire94c2=N),(0,N.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>r,set:e=>r=e,enumerable:!0,configurable:!0});var r,n=new Map;r=function(e,t){for(var r=0;r<t.length-1;r+=2)n.set(t[r],{baseUrl:e,path:t[r+1]})}}),N("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["7Gx3W","index.4da22cc4.js","712cX","up_/js/service-worker.js"]'));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var x={},D=x={};function O(){throw Error("setTimeout has not been defined")}function P(){throw Error("clearTimeout has not been defined")}function L(e){if(s===setTimeout)return setTimeout(e,0);if((s===O||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(t){try{return s.call(null,e,0)}catch(t){return s.call(this,e,0)}}}!function(){try{s="function"==typeof setTimeout?setTimeout:O}catch(e){s=O}try{o="function"==typeof clearTimeout?clearTimeout:P}catch(e){o=P}}();var M=[],U=!1,V=-1;function F(){U&&a&&(U=!1,a.length?M=a.concat(M):V=-1,M.length&&B())}function B(){if(!U){var e=L(F);U=!0;for(var t=M.length;t;){for(a=M,M=[];++V<t;)a&&a[V].run();V=-1,t=M.length}a=null,U=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===P||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(e)}}function j(e,t){this.fun=e,this.array=t}function $(){}D.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];M.push(new j(e,t)),1!==M.length||U||L(B)},j.prototype.run=function(){this.fun.apply(null,this.array)},D.title="browser",D.browser=!0,D.env={},D.argv=[],D.version="",D.versions={},D.on=$,D.addListener=$,D.once=$,D.off=$,D.removeListener=$,D.removeAllListeners=$,D.emit=$,D.prependListener=$,D.prependOnceListener=$,D.listeners=function(e){return[]},D.binding=function(e){throw Error("process.binding is not supported")},D.cwd=function(){return"/"},D.chdir=function(e){throw Error("process.chdir is not supported")},D.umask=function(){return 0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q=function(e){let t=[],r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:(i<2048?t[r++]=i>>6|192:((64512&i)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128):t[r++]=i>>12|224,t[r++]=i>>6&63|128),t[r++]=63&i|128)}return t},z=function(e){let t=[],r=0,n=0;for(;r<e.length;){let i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){let s=e[r++],o=((7&i)<<18|(63&s)<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(o>>10)),t[n++]=String.fromCharCode(56320+(1023&o))}else{let s=e[r++],o=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},H={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,h=i>>2,u=(3&i)<<4|o>>4,c=(15&o)<<2|l>>6,f=63&l;a||(f=64,s||(c=64)),n.push(r[h],r[u],r[c],r[f])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(q(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):z(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let i=r[e.charAt(t++)],s=t<e.length?r[e.charAt(t)]:0,o=++t<e.length?r[e.charAt(t)]:64,a=++t<e.length?r[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw new K;let l=i<<2|s>>4;if(n.push(l),64!==o){let e=s<<4&240|o>>2;if(n.push(e),64!==a){let e=o<<6&192|a;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class K extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const G=function(e){let t=q(e);return H.encodeByteArray(t,!0)},W=function(e){return G(e).replace(/\./g,"")},Q=function(e){try{return H.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},J=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==A)return A;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,X=()=>{if(void 0===x||void 0===x.env)return;let e=void 0;if(e)return JSON.parse(e)},Y=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&Q(e[1]);return t&&JSON.parse(t)},Z=()=>{try{return J()||X()||Y()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ee=e=>{var t,r;return null===(r=null===(t=Z())||void 0===t?void 0:t.emulatorHosts)||void 0===r?void 0:r[e]},et=e=>{let t=ee(e);if(!t)return;let r=t.lastIndexOf(":");if(r<=0||r+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let n=parseInt(t.substring(r+1),10);return"["===t[0]?[t.substring(1,r-1),n]:[t.substring(0,r),n]},er=()=>{var e;return null===(e=Z())||void 0===e?void 0:e.config},en=e=>{var t;return null===(t=Z())||void 0===t?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}class eo extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,eo.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ea.prototype.create)}}class ea{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){var r,n;let i=t[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?(r=o,n=i,r.replace(el,(e,t)=>{let r=n[t];return null!=r?String(r):`<${t}?>`})):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new eo(s,l,i)}}const el=/\{\$([^}]+)}/g;function eh(e,t){if(e===t)return!0;let r=Object.keys(e),n=Object.keys(t);for(let i of r){if(!n.includes(i))return!1;let r=e[i],s=t[i];if(eu(r)&&eu(s)){if(!eh(r,s))return!1}else if(r!==s)return!1}for(let e of n)if(!r.includes(e))return!1;return!0}function eu(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(e){let t=[];for(let[r,n]of Object.entries(e))Array.isArray(n)?n.forEach(e=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function ef(e){let t={};return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){let[r,n]=e.split("=");t[decodeURIComponent(r)]=decodeURIComponent(n)}}),t}function ed(e){let t=e.indexOf("?");if(!t)return"";let r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}class ep{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let n;if(void 0===e&&void 0===t&&void 0===r)throw Error("Missing Observer.");void 0===(n=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:r}:e).next&&(n.next=eg),void 0===n.error&&(n.error=eg),void 0===n.complete&&(n.complete=eg);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}}),this.observers.push(n),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eg(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(e){return e&&e._delegate?e._delegate:e}class ey{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new ei;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:ev})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){}}}}clearInstance(e=ev){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=ev){return this.instances.has(e)}getOptions(e=ev){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[e,t]of this.instancesDeferred.entries())r===this.normalizeInstanceIdentifier(e)&&t.resolve(n);return n}onInit(e,t){var r;let n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);let s=this.instances.get(n);return s&&e(s,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let n of r)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){var r;let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e)===ev?void 0:r,options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}return n||null}normalizeInstanceIdentifier(e=ev){return this.component?this.component.multipleInstances?e:ev:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new ew(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE=[];(n=l||(l={}))[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT";const eb={debug:l.DEBUG,verbose:l.VERBOSE,info:l.INFO,warn:l.WARN,error:l.ERROR,silent:l.SILENT},eI=l.INFO,eT={[l.DEBUG]:"log",[l.VERBOSE]:"log",[l.INFO]:"info",[l.WARN]:"warn",[l.ERROR]:"error"},eS=(e,t,...r)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),i=eT[t];if(i)console[i](`[${n}]  ${e.name}:`,...r);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class eC{constructor(e){this.name=e,this._logLevel=eI,this._logHandler=eS,this._userLogHandler=null,eE.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in l))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?eb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,l.DEBUG,...e),this._logHandler(this,l.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,l.VERBOSE,...e),this._logHandler(this,l.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,l.INFO,...e),this._logHandler(this,l.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,l.WARN,...e),this._logHandler(this,l.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,l.ERROR,...e),this._logHandler(this,l.ERROR,...e)}}const eA=(e,t)=>t.some(t=>e instanceof t),ek=new WeakMap,eR=new WeakMap,eN=new WeakMap,ex=new WeakMap,eD=new WeakMap;let eO={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return eR.get(e);if("objectStoreNames"===t)return e.objectStoreNames||eN.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return eP(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function eP(r){if(r instanceof IDBRequest)return function(e){let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(eP(e.result)),n()},s=()=>{r(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&ek.set(t,e)}).catch(()=>{}),eD.set(t,e),t}(r);if(ex.has(r))return ex.get(r);let n=function(r){if("function"==typeof r)return r!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(t||(t=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(r)?function(...e){return r.apply(eL(this),e),eP(ek.get(this))}:function(...e){return eP(r.apply(eL(this),e))}:function(e,...t){let n=r.call(eL(this),e,...t);return eN.set(n,e.sort?e.sort():[e]),eP(n)};return(r instanceof IDBTransaction&&function(e){if(eR.has(e))return;let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),n()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});eR.set(e,t)}(r),eA(r,e||(e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(r,eO):r}(r);return n!==r&&(ex.set(r,n),eD.set(n,r)),n}const eL=e=>eD.get(e),eM=["get","getKey","getAll","getAllKeys","count"],eU=["put","add","delete","clear"],eV=new Map;function eF(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(eV.get(t))return eV.get(t);let r=t.replace(/FromIndex$/,""),n=t!==r,i=eU.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||eM.includes(r)))return;let s=async function(e,...t){let s=this.transaction(e,i?"readwrite":"readonly"),o=s.store;return n&&(o=o.index(t.shift())),(await Promise.all([o[r](...t),i&&s.done]))[0]};return eV.set(t,s),s}eO={...r=eO,get:(e,t,n)=>eF(e,t)||r.get(e,t,n),has:(e,t)=>!!eF(e,t)||r.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eB{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}const ej="@firebase/app",e$="0.11.1",eq=new eC("@firebase/app"),ez="[DEFAULT]",eH={[ej]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/data-connect":"fire-data-connect","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/vertexai":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},eK=new Map,eG=new Map,eW=new Map;function eQ(e,t){try{e.container.addComponent(t)}catch(r){eq.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function eJ(e){let t=e.name;if(eW.has(t))return eq.debug(`There were multiple attempts to register component ${t}.`),!1;for(let r of(eW.set(t,e),eK.values()))eQ(r,e);for(let t of eG.values())eQ(t,e);return!0}function eX(e,t){let r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}function eY(e){return null!=e&&void 0!==e.settings}const eZ=new ea("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ey("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw eZ.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1="11.3.1";function e2(e,t={}){let r=e;"object"!=typeof t&&(t={name:t});let n=Object.assign({name:ez,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw eZ.create("bad-app-name",{appName:String(i)});if(r||(r=er()),!r)throw eZ.create("no-options");let s=eK.get(i);if(s){if(eh(r,s.options)&&eh(n,s.config))return s;throw eZ.create("duplicate-app",{appName:i})}let o=new e_(i);for(let e of eW.values())o.addComponent(e);let a=new e0(r,n,o);return eK.set(i,a),a}function e6(e=ez){let t=eK.get(e);if(!t&&e===ez&&er())return e2();if(!t)throw eZ.create("no-app",{appName:e});return t}function e3(e,t,r){var n;let i=null!==(n=eH[e])&&void 0!==n?n:e;r&&(i+=`-${r}`);let s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){let e=[`Unable to register library "${i}" with version "${t}":`];s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),eq.warn(e.join(" "));return}eJ(new ey(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}const e5="firebase-heartbeat-store";let e8=null;function e4(){return e8||(e8=(function(e,t,{blocked:r,upgrade:n,blocking:i,terminated:s}={}){let o=indexedDB.open(e,1),a=eP(o);return n&&o.addEventListener("upgradeneeded",e=>{n(eP(o.result),e.oldVersion,e.newVersion,eP(o.transaction),e)}),r&&o.addEventListener("blocked",e=>r(e.oldVersion,e.newVersion,e)),a.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(e5)}catch(e){console.warn(e)}}}).catch(e=>{throw eZ.create("idb-open",{originalErrorMessage:e.message})})),e8}async function e7(e){try{let t=(await e4()).transaction(e5),r=await t.objectStore(e5).get(te(e));return await t.done,r}catch(e){if(e instanceof eo)eq.warn(e.message);else{let t=eZ.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});eq.warn(t.message)}}}async function e9(e,t){try{let r=(await e4()).transaction(e5,"readwrite"),n=r.objectStore(e5);await n.put(t,te(e)),await r.done}catch(e){if(e instanceof eo)eq.warn(e.message);else{let t=eZ.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});eq.warn(t.message)}}}function te(e){return`${e.name}!${e.options.appId}`}class tt{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new tn(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;try{let r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=tr();if((null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n))return;if(this._heartbeatsCache.heartbeats.push({date:n,agent:r}),this._heartbeatsCache.heartbeats.length>30){let e=function(e){if(0===e.length)return -1;let t=0,r=e[0].date;for(let n=1;n<e.length;n++)e[n].date<r&&(r=e[n].date,t=n);return t}(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){eq.warn(e)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=tr(),{heartbeatsToSend:r,unsentEntries:n}=function(e,t=1024){let r=[],n=e.slice();for(let i of e){let e=r.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),ti(r)>t){e.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),ti(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),i=W(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return eq.warn(e),""}}}function tr(){return new Date().toISOString().substring(0,10)}class tn{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise((e,t)=>{try{let r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}).then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await e7(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let r=await this.read();return e9(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let r=await this.read();return e9(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function ti(e){return W(JSON.stringify({version:2,heartbeats:e})).length}eJ(new ey("platform-logger",e=>new eB(e),"PRIVATE")),eJ(new ey("heartbeat",e=>new tt(e),"PRIVATE")),e3(ej,e$,""),e3(ej,e$,"esm2017"),e3("fire-js",""),/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */e3("firebase","11.3.1","app");var ts="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==A?A:"undefined"!=typeof self?self:{},to={};(function(){function e(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function t(e,t,r){r||(r=0);var n=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)n[i]=t.charCodeAt(r++)|t.charCodeAt(r++)<<8|t.charCodeAt(r++)<<16|t.charCodeAt(r++)<<24;else for(i=0;16>i;++i)n[i]=t[r++]|t[r++]<<8|t[r++]<<16|t[r++]<<24;t=e.g[0],r=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^r&(i^s))+n[0]+0xd76aa478&0xffffffff;o=s+(i^(t=r+(o<<7&0xffffffff|o>>>25))&(r^i))+n[1]+0xe8c7b756&0xffffffff,o=i+(r^(s=t+(o<<12&0xffffffff|o>>>20))&(t^r))+n[2]+0x242070db&0xffffffff,o=r+(t^(i=s+(o<<17&0xffffffff|o>>>15))&(s^t))+n[3]+0xc1bdceee&0xffffffff,o=t+(s^(r=i+(o<<22&0xffffffff|o>>>10))&(i^s))+n[4]+0xf57c0faf&0xffffffff,o=s+(i^(t=r+(o<<7&0xffffffff|o>>>25))&(r^i))+n[5]+0x4787c62a&0xffffffff,o=i+(r^(s=t+(o<<12&0xffffffff|o>>>20))&(t^r))+n[6]+0xa8304613&0xffffffff,o=r+(t^(i=s+(o<<17&0xffffffff|o>>>15))&(s^t))+n[7]+0xfd469501&0xffffffff,o=t+(s^(r=i+(o<<22&0xffffffff|o>>>10))&(i^s))+n[8]+0x698098d8&0xffffffff,o=s+(i^(t=r+(o<<7&0xffffffff|o>>>25))&(r^i))+n[9]+0x8b44f7af&0xffffffff,o=i+(r^(s=t+(o<<12&0xffffffff|o>>>20))&(t^r))+n[10]+0xffff5bb1&0xffffffff,o=r+(t^(i=s+(o<<17&0xffffffff|o>>>15))&(s^t))+n[11]+0x895cd7be&0xffffffff,o=t+(s^(r=i+(o<<22&0xffffffff|o>>>10))&(i^s))+n[12]+0x6b901122&0xffffffff,o=s+(i^(t=r+(o<<7&0xffffffff|o>>>25))&(r^i))+n[13]+0xfd987193&0xffffffff,o=i+(r^(s=t+(o<<12&0xffffffff|o>>>20))&(t^r))+n[14]+0xa679438e&0xffffffff,o=r+(t^(i=s+(o<<17&0xffffffff|o>>>15))&(s^t))+n[15]+0x49b40821&0xffffffff,r=i+(o<<22&0xffffffff|o>>>10),o=t+(i^s&(r^i))+n[1]+0xf61e2562&0xffffffff,t=r+(o<<5&0xffffffff|o>>>27),o=s+(r^i&(t^r))+n[6]+0xc040b340&0xffffffff,s=t+(o<<9&0xffffffff|o>>>23),o=i+(t^r&(s^t))+n[11]+0x265e5a51&0xffffffff,i=s+(o<<14&0xffffffff|o>>>18),o=r+(s^t&(i^s))+n[0]+0xe9b6c7aa&0xffffffff,r=i+(o<<20&0xffffffff|o>>>12),o=t+(i^s&(r^i))+n[5]+0xd62f105d&0xffffffff,t=r+(o<<5&0xffffffff|o>>>27),o=s+(r^i&(t^r))+n[10]+0x2441453&0xffffffff,s=t+(o<<9&0xffffffff|o>>>23),o=i+(t^r&(s^t))+n[15]+0xd8a1e681&0xffffffff,i=s+(o<<14&0xffffffff|o>>>18),o=r+(s^t&(i^s))+n[4]+0xe7d3fbc8&0xffffffff,r=i+(o<<20&0xffffffff|o>>>12),o=t+(i^s&(r^i))+n[9]+0x21e1cde6&0xffffffff,t=r+(o<<5&0xffffffff|o>>>27),o=s+(r^i&(t^r))+n[14]+0xc33707d6&0xffffffff,s=t+(o<<9&0xffffffff|o>>>23),o=i+(t^r&(s^t))+n[3]+0xf4d50d87&0xffffffff,i=s+(o<<14&0xffffffff|o>>>18),o=r+(s^t&(i^s))+n[8]+0x455a14ed&0xffffffff,r=i+(o<<20&0xffffffff|o>>>12),o=t+(i^s&(r^i))+n[13]+0xa9e3e905&0xffffffff,t=r+(o<<5&0xffffffff|o>>>27),o=s+(r^i&(t^r))+n[2]+0xfcefa3f8&0xffffffff,s=t+(o<<9&0xffffffff|o>>>23),o=i+(t^r&(s^t))+n[7]+0x676f02d9&0xffffffff,i=s+(o<<14&0xffffffff|o>>>18),o=r+(s^t&(i^s))+n[12]+0x8d2a4c8a&0xffffffff,o=t+((r=i+(o<<20&0xffffffff|o>>>12))^i^s)+n[5]+0xfffa3942&0xffffffff,o=s+((t=r+(o<<4&0xffffffff|o>>>28))^r^i)+n[8]+0x8771f681&0xffffffff,o=i+((s=t+(o<<11&0xffffffff|o>>>21))^t^r)+n[11]+0x6d9d6122&0xffffffff,o=r+((i=s+(o<<16&0xffffffff|o>>>16))^s^t)+n[14]+0xfde5380c&0xffffffff,o=t+((r=i+(o<<23&0xffffffff|o>>>9))^i^s)+n[1]+0xa4beea44&0xffffffff,o=s+((t=r+(o<<4&0xffffffff|o>>>28))^r^i)+n[4]+0x4bdecfa9&0xffffffff,o=i+((s=t+(o<<11&0xffffffff|o>>>21))^t^r)+n[7]+0xf6bb4b60&0xffffffff,o=r+((i=s+(o<<16&0xffffffff|o>>>16))^s^t)+n[10]+0xbebfbc70&0xffffffff,o=t+((r=i+(o<<23&0xffffffff|o>>>9))^i^s)+n[13]+0x289b7ec6&0xffffffff,o=s+((t=r+(o<<4&0xffffffff|o>>>28))^r^i)+n[0]+0xeaa127fa&0xffffffff,o=i+((s=t+(o<<11&0xffffffff|o>>>21))^t^r)+n[3]+0xd4ef3085&0xffffffff,o=r+((i=s+(o<<16&0xffffffff|o>>>16))^s^t)+n[6]+0x4881d05&0xffffffff,o=t+((r=i+(o<<23&0xffffffff|o>>>9))^i^s)+n[9]+0xd9d4d039&0xffffffff,o=s+((t=r+(o<<4&0xffffffff|o>>>28))^r^i)+n[12]+0xe6db99e5&0xffffffff,o=i+((s=t+(o<<11&0xffffffff|o>>>21))^t^r)+n[15]+0x1fa27cf8&0xffffffff,o=r+((i=s+(o<<16&0xffffffff|o>>>16))^s^t)+n[2]+0xc4ac5665&0xffffffff,r=i+(o<<23&0xffffffff|o>>>9),o=t+(i^(r|~s))+n[0]+0xf4292244&0xffffffff,t=r+(o<<6&0xffffffff|o>>>26),o=s+(r^(t|~i))+n[7]+0x432aff97&0xffffffff,s=t+(o<<10&0xffffffff|o>>>22),o=i+(t^(s|~r))+n[14]+0xab9423a7&0xffffffff,i=s+(o<<15&0xffffffff|o>>>17),o=r+(s^(i|~t))+n[5]+0xfc93a039&0xffffffff,r=i+(o<<21&0xffffffff|o>>>11),o=t+(i^(r|~s))+n[12]+0x655b59c3&0xffffffff,t=r+(o<<6&0xffffffff|o>>>26),o=s+(r^(t|~i))+n[3]+0x8f0ccc92&0xffffffff,s=t+(o<<10&0xffffffff|o>>>22),o=i+(t^(s|~r))+n[10]+0xffeff47d&0xffffffff,i=s+(o<<15&0xffffffff|o>>>17),o=r+(s^(i|~t))+n[1]+0x85845dd1&0xffffffff,r=i+(o<<21&0xffffffff|o>>>11),o=t+(i^(r|~s))+n[8]+0x6fa87e4f&0xffffffff,t=r+(o<<6&0xffffffff|o>>>26),o=s+(r^(t|~i))+n[15]+0xfe2ce6e0&0xffffffff,s=t+(o<<10&0xffffffff|o>>>22),o=i+(t^(s|~r))+n[6]+0xa3014314&0xffffffff,i=s+(o<<15&0xffffffff|o>>>17),o=r+(s^(i|~t))+n[13]+0x4e0811a1&0xffffffff,r=i+(o<<21&0xffffffff|o>>>11),o=t+(i^(r|~s))+n[4]+0xf7537e82&0xffffffff,t=r+(o<<6&0xffffffff|o>>>26),o=s+(r^(t|~i))+n[11]+0xbd3af235&0xffffffff,s=t+(o<<10&0xffffffff|o>>>22),o=i+(t^(s|~r))+n[2]+0x2ad7d2bb&0xffffffff,i=s+(o<<15&0xffffffff|o>>>17),o=r+(s^(i|~t))+n[9]+0xeb86d391&0xffffffff,e.g[0]=e.g[0]+t&0xffffffff,e.g[1]=e.g[1]+(i+(o<<21&0xffffffff|o>>>11))&0xffffffff,e.g[2]=e.g[2]+i&0xffffffff,e.g[3]=e.g[3]+s&0xffffffff}function r(e,t){this.h=t;for(var r=[],n=!0,i=e.length-1;0<=i;i--){var s=0|e[i];n&&s==t||(r[i]=s,n=!1)}this.g=r}!function(e,t){function r(){}r.prototype=t.prototype,e.D=t.prototype,e.prototype=new r,e.prototype.constructor=e,e.C=function(e,r,n){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[r].apply(e,i)}}(e,function(){this.blockSize=-1}),e.prototype.s=function(){this.g[0]=0x67452301,this.g[1]=0xefcdab89,this.g[2]=0x98badcfe,this.g[3]=0x10325476,this.o=this.h=0},e.prototype.u=function(e,r){void 0===r&&(r=e.length);for(var n=r-this.blockSize,i=this.B,s=this.h,o=0;o<r;){if(0==s)for(;o<=n;)t(this,e,o),o+=this.blockSize;if("string"==typeof e){for(;o<r;)if(i[s++]=e.charCodeAt(o++),s==this.blockSize){t(this,i),s=0;break}}else for(;o<r;)if(i[s++]=e[o++],s==this.blockSize){t(this,i),s=0;break}}this.h=s,this.o+=r},e.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var r=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&r,r/=256;for(this.u(e),e=Array(16),t=r=0;4>t;++t)for(var n=0;32>n;n+=8)e[r++]=this.g[t]>>>n&255;return e};var n,i={};function s(e){var t;return -128<=e&&128>e?(t=function(e){return new r([0|e],0>e?-1:0)},Object.prototype.hasOwnProperty.call(i,e)?i[e]:i[e]=t(e)):new r([0|e],0>e?-1:0)}function o(e){if(isNaN(e)||!isFinite(e))return a;if(0>e)return p(o(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=0x100000000;return new r(t,0)}var a=s(0),l=s(1),c=s(0x1000000);function f(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function d(e){return -1==e.h}function p(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new r(n,~e.h).add(l)}function g(e,t){return e.add(p(t))}function m(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function y(e,t){this.g=e,this.h=t}function v(e,t){if(f(t))throw Error("division by zero");if(f(e))return new y(a,a);if(d(e))return t=v(p(e),t),new y(p(t.g),p(t.h));if(d(t))return t=v(e,p(t)),new y(p(t.g),t.h);if(30<e.g.length){if(d(e)||d(t))throw Error("slowDivide_ only works with positive integers.");for(var r=l,n=t;0>=n.l(e);)r=w(r),n=w(n);var i=_(r,1),s=_(n,1);for(n=_(n,2),r=_(r,2);!f(n);){var h=s.add(n);0>=h.l(e)&&(i=i.add(r),s=h),n=_(n,1),r=_(r,1)}return t=g(e,i.j(t)),new y(i,t)}for(i=a;0<=e.l(t);){for(n=48>=(n=Math.ceil(Math.log(r=Math.max(1,Math.floor(e.m()/t.m())))/Math.LN2))?1:Math.pow(2,n-48),h=(s=o(r)).j(t);d(h)||0<h.l(e);)r-=n,h=(s=o(r)).j(t);f(s)&&(s=l),i=i.add(s),e=g(e,h)}return new y(i,e)}function w(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.i(i)<<1|e.i(i-1)>>>31;return new r(n,e.h)}function _(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,s=[],o=0;o<i;o++)s[o]=0<t?e.i(o+n)>>>t|e.i(o+n+1)<<32-t:e.i(o+n);return new r(s,e.h)}(n=r.prototype).m=function(){if(d(this))return-p(this).m();for(var e=0,t=1,r=0;r<this.g.length;r++){var n=this.i(r);e+=(0<=n?n:0x100000000+n)*t,t*=0x100000000}return e},n.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(f(this))return"0";if(d(this))return"-"+p(this).toString(e);for(var t=o(Math.pow(e,6)),r=this,n="";;){var i=v(r,t).g,s=((0<(r=g(r,i.j(t))).g.length?r.g[0]:r.h)>>>0).toString(e);if(f(r=i))return s+n;for(;6>s.length;)s="0"+s;n=s+n}},n.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},n.l=function(e){return d(e=g(this,e))?-1:+!f(e)},n.abs=function(){return d(this)?p(this):this},n.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,s=0;s<=t;s++){var o=i+(65535&this.i(s))+(65535&e.i(s)),a=(o>>>16)+(this.i(s)>>>16)+(e.i(s)>>>16);i=a>>>16,o&=65535,a&=65535,n[s]=a<<16|o}return new r(n,-0x80000000&n[n.length-1]?-1:0)},n.j=function(e){if(f(this)||f(e))return a;if(d(this))return d(e)?p(this).j(p(e)):p(p(this).j(e));if(d(e))return p(this.j(p(e)));if(0>this.l(c)&&0>e.l(c))return o(this.m()*e.m());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<e.g.length;s++){var l=this.i(i)>>>16,h=65535&this.i(i),u=e.i(s)>>>16,g=65535&e.i(s);n[2*i+2*s]+=h*g,m(n,2*i+2*s),n[2*i+2*s+1]+=l*g,m(n,2*i+2*s+1),n[2*i+2*s+1]+=h*u,m(n,2*i+2*s+1),n[2*i+2*s+2]+=l*u,m(n,2*i+2*s+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new r(n,0)},n.A=function(e){return v(this,e).h},n.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)&e.i(i);return new r(n,this.h&e.h)},n.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)|e.i(i);return new r(n,this.h|e.h)},n.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)^e.i(i);return new r(n,this.h^e.h)},e.prototype.digest=e.prototype.v,e.prototype.reset=e.prototype.s,e.prototype.update=e.prototype.u,u=to.Md5=e,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.A,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=o,r.fromString=function e(t,r){if(0==t.length)throw Error("number format error: empty string");if(2>(r=r||10)||36<r)throw Error("radix out of range: "+r);if("-"==t.charAt(0))return p(e(t.substring(1),r));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=o(Math.pow(r,8)),i=a,s=0;s<t.length;s+=8){var l=Math.min(8,t.length-s),h=parseInt(t.substring(s,s+l),r);8>l?(l=o(Math.pow(r,l)),i=i.j(l).add(o(h))):i=(i=i.j(n)).add(o(h))}return i},h=to.Integer=r}).apply(void 0!==ts?ts:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var ta="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==A?A:"undefined"!=typeof self?self:{},tl={};(function(){var e,t,r,n="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,r){return e==Array.prototype||e==Object.prototype||(e[t]=r.value),e},i=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof ta&&ta];for(var t=0;t<e.length;++t){var r=e[t];if(r&&r.Math==Math)return r}throw Error("Cannot find global object")}(this);!function(e,t){if(t)e:{var r=i;e=e.split(".");for(var s=0;s<e.length-1;s++){var o=e[s];if(!(o in r))break e;r=r[o]}(t=t(s=r[e=e[e.length-1]]))!=s&&null!=t&&n(r,e,{configurable:!0,writable:!0,value:t})}}("Array.prototype.values",function(e){return e||function(){var e,t,r,n,i;return e=this,t=function(e,t){return t},e instanceof String&&(e+=""),r=0,n=!1,(i={next:function(){if(!n&&r<e.length){var i=r++;return{value:t(i,e[i]),done:!1}}return n=!0,{done:!0,value:void 0}}})[Symbol.iterator]=function(){return i},i}});var s=s||{},o=this||self;function a(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function l(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function h(e,t,r){return e.call.apply(e.bind,arguments)}function u(e,t,r){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,n),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function w(e,t,r){return(w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?h:u).apply(null,arguments)}function _(e,t){var r=Array.prototype.slice.call(arguments,1);return function(){var t=r.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function E(e,t){function r(){}r.prototype=t.prototype,e.aa=t.prototype,e.prototype=new r,e.prototype.constructor=e,e.Qb=function(e,r,n){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[r].apply(e,i)}}function b(e){let t=e.length;if(0<t){let r=Array(t);for(let n=0;n<t;n++)r[n]=e[n];return r}return[]}function I(e,t){for(let t=1;t<arguments.length;t++){let r=arguments[t];if(a(r)){let t=e.length||0,n=r.length||0;e.length=t+n;for(let i=0;i<n;i++)e[t+i]=r[i]}else e.push(r)}}function T(e){return/^[\s\xa0]*$/.test(e)}function S(){var e=o.navigator;return e&&(e=e.userAgent)?e:""}function C(e){return C[" "](e),e}C[" "]=function(){};var A=-1!=S().indexOf("Gecko")&&(-1==S().toLowerCase().indexOf("webkit")||-1!=S().indexOf("Edge"))&&-1==S().indexOf("Trident")&&-1==S().indexOf("MSIE")&&-1==S().indexOf("Edge");function k(e,t,r){for(let n in e)t.call(r,e[n],n,e)}function R(e){let t={};for(let r in e)t[r]=e[r];return t}let N="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(e,t){let r,n;for(let t=1;t<arguments.length;t++){for(r in n=arguments[t])e[r]=n[r];for(let t=0;t<N.length;t++)r=N[t],Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}}var D=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new O,e=>e.reset());class O{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let P,L=!1,M=new class{constructor(){this.h=this.g=null}add(e,t){let r=D.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}},U=()=>{let e=o.Promise.resolve(void 0);P=()=>{e.then(V)}};var V=()=>{let e;for(var t;e=null,M.g&&(e=M.g,M.g=M.g.next,M.g||(M.h=null),e.next=null),t=e;){try{t.h.call(t.g)}catch(e){!function(e){o.setTimeout(()=>{throw e},0)}(e)}D.j(t),100>D.h&&(D.h++,t.next=D.g,D.g=t)}L=!1};function F(){this.s=this.s,this.C=this.C}function B(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}F.prototype.s=!1,F.prototype.ma=function(){this.s||(this.s=!0,this.N())},F.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},B.prototype.h=function(){this.defaultPrevented=!0};var j=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{let e=()=>{};o.addEventListener("test",e,t),o.removeEventListener("test",e,t)}catch(e){}return e}();function $(e,t){if(B.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var r=this.type=e.type,n=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(A){e:{try{C(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==r?t=e.fromElement:"mouseout"==r&&(t=e.toElement);this.relatedTarget=t,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:q[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&$.aa.h.call(this)}}E($,B);var q={2:"touch",3:"pen",4:"mouse"};$.prototype.h=function(){$.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var z="closure_listenable_"+(1e6*Math.random()|0),H=0;function K(e,t,r,n,i){this.listener=e,this.proxy=null,this.src=t,this.type=r,this.capture=!!n,this.ha=i,this.key=++H,this.da=this.fa=!1}function G(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function W(e){this.src=e,this.g={},this.h=0}function Q(e,t){var r=t.type;if(r in e.g){var n,i=e.g[r],s=Array.prototype.indexOf.call(i,t,void 0);(n=0<=s)&&Array.prototype.splice.call(i,s,1),n&&(G(t),0==e.g[r].length&&(delete e.g[r],e.h--))}}function J(e,t,r,n){for(var i=0;i<e.length;++i){var s=e[i];if(!s.da&&s.listener==t&&!!r==s.capture&&s.ha==n)return i}return -1}W.prototype.add=function(e,t,r,n,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=J(e,t,n,i);return -1<o?(t=e[o],r||(t.fa=!1)):((t=new K(t,this.src,s,!!n,i)).fa=r,e.push(t)),t};var X="closure_lm_"+(1e6*Math.random()|0),Y={};function Z(e,t,r,n,i,s){if(!t)throw Error("Invalid event type");var o=l(i)?!!i.capture:!!i,a=en(e);if(a||(e[X]=a=new W(e)),(r=a.add(t,r,n,o,s)).proxy)return r;if(n=function e(t){return er.call(e.src,e.listener,t)},r.proxy=n,n.src=e,n.listener=r,e.addEventListener)j||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),n,i);else if(e.attachEvent)e.attachEvent(et(t.toString()),n);else if(e.addListener&&e.removeListener)e.addListener(n);else throw Error("addEventListener and attachEvent are unavailable.");return r}function ee(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[z])Q(t.i,e);else{var r=e.type,n=e.proxy;t.removeEventListener?t.removeEventListener(r,n,e.capture):t.detachEvent?t.detachEvent(et(r),n):t.addListener&&t.removeListener&&t.removeListener(n),(r=en(t))?(Q(r,e),0==r.h&&(r.src=null,t[X]=null)):G(e)}}}function et(e){return e in Y?Y[e]:Y[e]="on"+e}function er(e,t){if(e.da)e=!0;else{t=new $(t,this);var r=e.listener,n=e.ha||e.src;e.fa&&ee(e),e=r.call(n,t)}return e}function en(e){return(e=e[X])instanceof W?e:null}var ei="__closure_events_fn_"+(1e9*Math.random()>>>0);function es(e){return"function"==typeof e?e:(e[ei]||(e[ei]=function(t){return e.handleEvent(t)}),e[ei])}function eo(){F.call(this),this.i=new W(this),this.M=this,this.F=null}function ea(e,t){var r,n=e.F;if(n)for(r=[];n;n=n.F)r.push(n);if(e=e.M,n=t.type||t,"string"==typeof t)t=new B(t,e);else if(t instanceof B)t.target=t.target||e;else{var i=t;x(t=new B(n,e),i)}if(i=!0,r)for(var s=r.length-1;0<=s;s--){var o=t.g=r[s];i=el(o,n,!0,t)&&i}if(i=el(o=t.g=e,n,!0,t)&&i,i=el(o,n,!1,t)&&i,r)for(s=0;s<r.length;s++)i=el(o=t.g=r[s],n,!1,t)&&i}function el(e,t,r,n){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.da&&o.capture==r){var a=o.listener,l=o.ha||o.src;o.fa&&Q(e.i,o),i=!1!==a.call(l,n)&&i}}return i&&!n.defaultPrevented}function eh(e,t,r){if("function"==typeof e)r&&(e=w(e,r));else if(e&&"function"==typeof e.handleEvent)e=w(e.handleEvent,e);else throw Error("Invalid listener argument");return 0x7fffffff<Number(t)?-1:o.setTimeout(e,t||0)}E(eo,F),eo.prototype[z]=!0,eo.prototype.removeEventListener=function(e,t,r,n){!function e(t,r,n,i,s){if(Array.isArray(r))for(var o=0;o<r.length;o++)e(t,r[o],n,i,s);else(i=l(i)?!!i.capture:!!i,n=es(n),t&&t[z])?(t=t.i,(r=String(r).toString())in t.g&&-1<(n=J(o=t.g[r],n,i,s))&&(G(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.g[r],t.h--))):t&&(t=en(t))&&(r=t.g[r.toString()],t=-1,r&&(t=J(r,n,i,s)),(n=-1<t?r[t]:null)&&ee(n))}(this,e,t,r,n)},eo.prototype.N=function(){if(eo.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var r=t.g[e],n=0;n<r.length;n++)G(r[n]);delete t.g[e],t.h--}}this.F=null},eo.prototype.K=function(e,t,r,n){return this.i.add(String(e),t,!1,r,n)},eo.prototype.L=function(e,t,r,n){return this.i.add(String(e),t,!0,r,n)};class eu extends F{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=eh(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.l);let r=t.h;t.h=null,t.m.apply(null,r)}(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ec(e){F.call(this),this.h=e,this.g={}}E(ec,F);var ef=[];function ed(e){k(e.g,function(e,t){this.g.hasOwnProperty(t)&&ee(e)},e),e.g={}}ec.prototype.N=function(){ec.aa.N.call(this),ed(this)},ec.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ep=o.JSON.stringify,eg=o.JSON.parse,em=class{stringify(e){return o.JSON.stringify(e,void 0)}parse(e){return o.JSON.parse(e,void 0)}};function ey(){}function ev(e){return e.h||(e.h=e.i())}function ew(){}ey.prototype.h=null;var e_={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function eE(){B.call(this,"d")}function eb(){B.call(this,"c")}E(eE,B),E(eb,B);var eI={},eT=null;function eS(){return eT=eT||new eo}function eC(e){B.call(this,eI.La,e)}function eA(e){let t=eS();ea(t,new eC(t))}function ek(e,t){B.call(this,eI.STAT_EVENT,e),this.stat=t}function eR(e){let t=eS();ea(t,new ek(t,e))}function eN(e,t){B.call(this,eI.Ma,e),this.size=t}function ex(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){e()},t)}function eD(){this.g=!0}function eO(e,t,r,n){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var r=JSON.parse(t);if(r){for(e=0;e<r.length;e++)if(Array.isArray(r[e])){var n=r[e];if(!(2>n.length)){var i=n[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}}return ep(r)}catch(e){return t}}(e,r)+(n?" "+n:"")})}eI.La="serverreachability",E(eC,B),eI.STAT_EVENT="statevent",E(ek,B),eI.Ma="timingevent",E(eN,B),eD.prototype.xa=function(){this.g=!1},eD.prototype.info=function(){};var eP={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},eL={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function eM(){}function eU(e,t,r,n){this.j=e,this.i=t,this.l=r,this.R=n||1,this.U=new ec(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new eV}function eV(){this.i=null,this.g="",this.h=!1}E(eM,ey),eM.prototype.g=function(){return new XMLHttpRequest},eM.prototype.i=function(){return{}},t=new eM;var eF={},eB={};function ej(e,t,r){e.L=1,e.v=tr(e4(t)),e.m=r,e.P=!0,e$(e,null)}function e$(e,t){e.F=Date.now(),ez(e),e.A=e4(e.v);var r=e.A,n=e.R;Array.isArray(n)||(n=[String(n)]),ty(r.i,"t",n),e.C=0,r=e.j.J,e.h=new eV,e.g=t6(e.j,r?t:null,!e.m),0<e.O&&(e.M=new eu(w(e.Y,e,e.g),e.O)),t=e.U,r=e.g,n=e.ca;var i="readystatechange";Array.isArray(i)||(i&&(ef[0]=i.toString()),i=ef);for(var s=0;s<i.length;s++){var o=function e(t,r,n,i,s){if(i&&i.once)return function e(t,r,n,i,s){if(Array.isArray(r)){for(var o=0;o<r.length;o++)e(t,r[o],n,i,s);return null}return n=es(n),t&&t[z]?t.L(r,n,l(i)?!!i.capture:!!i,s):Z(t,r,n,!0,i,s)}(t,r,n,i,s);if(Array.isArray(r)){for(var o=0;o<r.length;o++)e(t,r[o],n,i,s);return null}return n=es(n),t&&t[z]?t.K(r,n,l(i)?!!i.capture:!!i,s):Z(t,r,n,!1,i,s)}(r,i[s],n||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}t=e.H?R(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),eA(),function(e,t,r,n,i,s){e.info(function(){if(e.g){if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var h=a[l].split("=");if(1<h.length){var u=h[0];h=h[1];var c=u.split("_");o=2<=c.length&&"type"==c[1]?o+(u+"=")+h+"&":o+(u+"=redacted&")}}else o=null}else o=s;return"XMLHTTP REQ ("+n+") [attempt "+i+"]: "+t+"\n"+r+"\n"+o})}(e.i,e.u,e.A,e.l,e.R,e.m)}function eq(e){return!!e.g&&"GET"==e.u&&2!=e.L&&e.j.Ca}function ez(e){e.S=Date.now()+e.I,eH(e,e.I)}function eH(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=ex(w(e.ba,e),t)}function eK(e){e.B&&(o.clearTimeout(e.B),e.B=null)}function eG(e){0==e.j.G||e.J||tY(e.j,e)}function eW(e){eK(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,ed(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function eQ(e,t){try{var r=e.j;if(0!=r.G&&(r.g==e||e0(r.h,e))){if(!e.K&&e0(r.h,e)&&3==r.G){try{var n=r.Da.g.parse(t)}catch(e){n=null}if(Array.isArray(n)&&3==n.length){var i=n;if(0==i[0]){e:if(!r.u){if(r.g){if(r.g.F+3e3<e.F)tX(r),tj(r);else break e}tW(r),eR(18)}}else r.za=i[1],0<r.za-r.T&&37500>i[2]&&r.F&&0==r.v&&!r.C&&(r.C=ex(w(r.Za,r),6e3));if(1>=eZ(r.h)&&r.ca){try{r.ca()}catch(e){}r.ca=void 0}}else t0(r,11)}else if((e.K||r.g==e)&&tX(r),!T(t))for(i=r.Da.g.parse(t),t=0;t<i.length;t++){let a=i[t];if(r.T=a[0],a=a[1],2==r.G){if("c"==a[0]){r.K=a[1],r.ia=a[2];let t=a[3];null!=t&&(r.la=t,r.j.info("VER="+r.la));let i=a[4];null!=i&&(r.Aa=i,r.j.info("SVER="+r.Aa));let l=a[5];null!=l&&"number"==typeof l&&0<l&&(n=1.5*l,r.L=n,r.j.info("backChannelRequestTimeoutMs_="+n)),n=r;let h=e.g;if(h){let e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=n.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(e1(s,s.h),s.h=null))}if(n.D){let e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(n.ya=e,tt(n.I,n.D,e))}}if(r.G=3,r.l&&r.l.ua(),r.ba&&(r.R=Date.now()-e.F,r.j.info("Handshake RTT: "+r.R+"ms")),(n=r).qa=t2(n,n.J?n.ia:null,n.W),e.K){e2(n.h,e);var o=n.L;o&&(e.I=o),e.B&&(eK(e),ez(e)),n.g=e}else tG(n);0<r.i.length&&tq(r)}else"stop"!=a[0]&&"close"!=a[0]||t0(r,7)}else 3==r.G&&("stop"==a[0]||"close"==a[0]?"stop"==a[0]?t0(r,7):tB(r):"noop"!=a[0]&&r.l&&r.l.ta(a),r.v=0)}}eA(4)}catch(e){}}eU.prototype.ca=function(e){e=e.target;let t=this.M;t&&3==tM(e)?t.j():this.Y(e)},eU.prototype.Y=function(e){try{if(e==this.g)e:{let f=tM(this.g);var t=this.g.Ba();let d=this.g.Z();if(!(3>f)&&(3!=f||this.g&&(this.h.h||this.g.oa()||tU(this.g)))){this.J||4!=f||7==t||(8==t||0>=d?eA(3):eA(2)),eK(this);var r=this.g.Z();this.X=r;t:if(eq(this)){var n=tU(this.g);e="";var i=n.length,s=4==tM(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){eW(this),eG(this);var a="";break t}this.h.i=new o.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(n[t],{stream:!(s&&t==i-1)});n.length=0,this.h.g+=e,this.C=0,a=this.h.g}else a=this.g.oa();if(this.o=200==r,function(e,t,r,n,i,s,o){e.info(function(){return"XMLHTTP RESP ("+n+") [ attempt "+i+"]: "+t+"\n"+r+"\n"+s+" "+o})}(this.i,this.u,this.A,this.l,this.R,f,r),this.o){if(this.T&&!this.K){t:{if(this.g){var l,h=this.g;if((l=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(l)){var u=l;break t}}u=null}if(r=u)eO(this.i,this.l,r,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,eQ(this,r);else{this.o=!1,this.s=3,eR(12),eW(this),eG(this);break e}}if(this.P){let e;for(r=!0;!this.J&&this.C<a.length;)if((e=function(e,t){var r=e.C,n=t.indexOf("\n",r);return -1==n?eB:isNaN(r=Number(t.substring(r,n)))?eF:(n+=1)+r>t.length?eB:(t=t.slice(n,n+r),e.C=n+r,t)}(this,a))==eB){4==f&&(this.s=4,eR(14),r=!1),eO(this.i,this.l,null,"[Incomplete Response]");break}else if(e==eF){this.s=4,eR(15),eO(this.i,this.l,a,"[Invalid Chunk]"),r=!1;break}else eO(this.i,this.l,e,null),eQ(this,e);if(eq(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=f||0!=a.length||this.h.h||(this.s=1,eR(16),r=!1),this.o=this.o&&r,r){if(0<a.length&&!this.W){this.W=!0;var c=this.j;c.g==this&&c.ba&&!c.M&&(c.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),tQ(c),c.M=!0,eR(11))}}else eO(this.i,this.l,a,"[Invalid Chunked Response]"),eW(this),eG(this)}else eO(this.i,this.l,a,null),eQ(this,a);4==f&&eW(this),this.o&&!this.J&&(4==f?tY(this.j,this):(this.o=!1,ez(this)))}else(function(e){let t={};e=(e.g&&2<=tM(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let n=0;n<e.length;n++){if(T(e[n]))continue;var r=function(e){var t=1;e=e.split(":");let r=[];for(;0<t&&e.length;)r.push(e.shift()),t--;return e.length&&r.push(e.join(":")),r}(e[n]);let i=r[0];if("string"!=typeof(r=r[1]))continue;r=r.trim();let s=t[i]||[];t[i]=s,s.push(r)}!function(e,t){for(let r in e)t.call(void 0,e[r],r,e)}(t,function(e){return e.join(", ")})})(this.g),400==r&&0<a.indexOf("Unknown SID")?(this.s=3,eR(12)):(this.s=0,eR(13)),eW(this),eG(this)}}}catch(e){}finally{}},eU.prototype.cancel=function(){this.J=!0,eW(this)},eU.prototype.ba=function(){this.B=null;let e=Date.now();0<=e-this.S?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.i,this.A),2!=this.L&&(eA(),eR(17)),eW(this),this.s=2,eG(this)):eH(this,this.S-e)};var eJ=class{constructor(e,t){this.g=e,this.map=t}};function eX(e){this.l=e||10,e=o.PerformanceNavigationTiming?0<(e=o.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function eY(e){return!!e.h||!!e.g&&e.g.size>=e.j}function eZ(e){return e.h?1:e.g?e.g.size:0}function e0(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function e1(e,t){e.g?e.g.add(t):e.h=t}function e2(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function e6(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let r of e.g.values())t=t.concat(r.D);return t}return b(e.i)}function e3(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(a(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var r=function(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(a(e)||"string"==typeof e){var t=[];e=e.length;for(var r=0;r<e;r++)t.push(r);return t}for(let n in t=[],r=0,e)t[r++]=n;return t}}}(e),n=function(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(a(e)){for(var t=[],r=e.length,n=0;n<r;n++)t.push(e[n]);return t}for(n in t=[],r=0,e)t[r++]=e[n];return t}(e),i=n.length,s=0;s<i;s++)t.call(void 0,n[s],r&&r[s],e)}eX.prototype.cancel=function(){if(this.i=e6(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}};var e5=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function e8(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof e8){this.h=e.h,e7(this,e.j),this.o=e.o,this.g=e.g,e9(this,e.s),this.l=e.l;var t=e.i,r=new td;r.i=t.i,t.g&&(r.g=new Map(t.g),r.h=t.h),te(this,r),this.m=e.m}else e&&(t=String(e).match(e5))?(this.h=!1,e7(this,t[1]||"",!0),this.o=tn(t[2]||""),this.g=tn(t[3]||"",!0),e9(this,t[4]),this.l=tn(t[5]||"",!0),te(this,t[6]||"",!0),this.m=tn(t[7]||"")):(this.h=!1,this.i=new td(null,this.h))}function e4(e){return new e8(e)}function e7(e,t,r){e.j=r?tn(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function e9(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function te(e,t,r){var n,i;t instanceof td?(e.i=t,n=e.i,(i=e.h)&&!n.j&&(tp(n),n.i=null,n.g.forEach(function(e,t){var r=t.toLowerCase();t!=r&&(tg(this,t),ty(this,r,e))},n)),n.j=i):(r||(t=ti(t,tc)),e.i=new td(t,e.h))}function tt(e,t,r){e.i.set(t,r)}function tr(e){return tt(e,"zx",Math.floor(0x80000000*Math.random()).toString(36)+Math.abs(Math.floor(0x80000000*Math.random())^Date.now()).toString(36)),e}function tn(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ti(e,t,r){return"string"==typeof e?(e=encodeURI(e).replace(t,ts),r&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ts(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}e8.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ti(t,to,!0),":");var r=this.g;return(r||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(ti(t,to,!0),"@"),e.push(encodeURIComponent(String(r)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(r=this.s)&&e.push(":",String(r))),(r=this.l)&&(this.g&&"/"!=r.charAt(0)&&e.push("/"),e.push(ti(r,"/"==r.charAt(0)?tu:th,!0))),(r=this.i.toString())&&e.push("?",r),(r=this.m)&&e.push("#",ti(r,tf)),e.join("")};var to=/[#\/\?@]/g,th=/[#\?:]/g,tu=/[#\?]/g,tc=/[#\?@]/g,tf=/#/g;function td(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function tp(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var r=0;r<e.length;r++){var n=e[r].indexOf("="),i=null;if(0<=n){var s=e[r].substring(0,n);i=e[r].substring(n+1)}else s=e[r];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,r){e.add(decodeURIComponent(t.replace(/\+/g," ")),r)}))}function tg(e,t){tp(e),t=tv(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function tm(e,t){return tp(e),t=tv(e,t),e.g.has(t)}function ty(e,t,r){tg(e,t),0<r.length&&(e.i=null,e.g.set(tv(e,t),b(r)),e.h+=r.length)}function tv(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function tw(e,t,r,n,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),n(r)}catch(e){}}function t_(){this.g=new em}function tE(e){this.l=e.Ub||null,this.j=e.eb||!1}function tb(e,t){eo.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function tI(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function tT(e){e.readyState=4,e.l=null,e.j=null,e.v=null,tS(e)}function tS(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function tC(e){let t="";return k(e,function(e,r){t+=r,t+=":",t+=e,t+="\r\n"}),t}function tA(e,t,r){e:{for(n in r){var n=!1;break e}n=!0}n||(r=tC(r),"string"==typeof e?null!=r&&encodeURIComponent(String(r)):tt(e,t,r))}function tk(e){eo.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(r=td.prototype).add=function(e,t){tp(this),this.i=null,e=tv(this,e);var r=this.g.get(e);return r||this.g.set(e,r=[]),r.push(t),this.h+=1,this},r.forEach=function(e,t){tp(this),this.g.forEach(function(r,n){r.forEach(function(r){e.call(t,r,n,this)},this)},this)},r.na=function(){tp(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),r=[];for(let n=0;n<t.length;n++){let i=e[n];for(let e=0;e<i.length;e++)r.push(t[n])}return r},r.V=function(e){tp(this);let t=[];if("string"==typeof e)tm(this,e)&&(t=t.concat(this.g.get(tv(this,e))));else{e=Array.from(this.g.values());for(let r=0;r<e.length;r++)t=t.concat(e[r])}return t},r.set=function(e,t){return tp(this),this.i=null,tm(this,e=tv(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e&&0<(e=this.V(e)).length?String(e[0]):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var r=0;r<t.length;r++){var n=t[r];let s=encodeURIComponent(String(n)),o=this.V(n);for(n=0;n<o.length;n++){var i=s;""!==o[n]&&(i+="="+encodeURIComponent(String(o[n]))),e.push(i)}}return this.i=e.join("&")},E(tE,ey),tE.prototype.g=function(){return new tb(this.l,this.j)},tE.prototype.i=(e={},function(){return e}),E(tb,eo),(r=tb.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,tS(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||o).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,tT(this)),this.readyState=0},r.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,tS(this)),this.g&&(this.readyState=3,tS(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==o.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;tI(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))}},r.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?tT(this):tS(this),3==this.readyState&&tI(this)}},r.Ra=function(e){this.g&&(this.response=this.responseText=e,tT(this))},r.Qa=function(e){this.g&&(this.response=e,tT(this))},r.ga=function(){this.g&&tT(this)},r.setRequestHeader=function(e,t){this.u.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var r=t.next();!r.done;)e.push((r=r.value)[0]+": "+r[1]),r=t.next();return e.join("\r\n")},Object.defineProperty(tb.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),E(tk,eo);var tR=/^https?$/i,tN=["POST","PUT"];function tx(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,tD(e),tP(e)}function tD(e){e.A||(e.A=!0,ea(e,"complete"),ea(e,"error"))}function tO(e){if(e.h&&void 0!==s&&(!e.v[1]||4!=tM(e)||2!=e.Z())){if(e.u&&4==tM(e))eh(e.Ea,0,e);else if(ea(e,"readystatechange"),4==tM(e)){e.h=!1;try{let s=e.Z();switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,r,n=!0;break;default:n=!1}if(!(t=n)){if(r=0===s){var i=String(e.D).match(e5)[1]||null;!i&&o.self&&o.self.location&&(i=o.self.location.protocol.slice(0,-1)),r=!tR.test(i?i.toLowerCase():"")}t=r}if(t)ea(e,"complete"),ea(e,"success");else{e.m=6;try{var a=2<tM(e)?e.g.statusText:""}catch(e){a=""}e.l=a+" ["+e.Z()+"]",tD(e)}}finally{tP(e)}}}}function tP(e,t){if(e.g){tL(e);let r=e.g,n=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||ea(e,"ready");try{r.onreadystatechange=n}catch(e){}}}function tL(e){e.I&&(o.clearTimeout(e.I),e.I=null)}function tM(e){return e.g?e.g.readyState:0}function tU(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function tV(e,t,r){return r&&r.internalChannelParams&&r.internalChannelParams[e]||t}function tF(e){this.Aa=0,this.i=[],this.j=new eD,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=tV("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=tV("baseRetryDelayMs",5e3,e),this.cb=tV("retryDelaySeedMs",1e4,e),this.Wa=tV("forwardChannelMaxRetries",2,e),this.wa=tV("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new eX(e&&e.concurrentRequestLimit),this.Da=new t_,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function tB(e){if(t$(e),3==e.G){var t=e.U++,r=e4(e.I);if(tt(r,"SID",e.K),tt(r,"RID",t),tt(r,"TYPE","terminate"),tH(e,r),(t=new eU(e,e.j,t)).L=2,t.v=tr(e4(r)),r=!1,o.navigator&&o.navigator.sendBeacon)try{r=o.navigator.sendBeacon(t.v.toString(),"")}catch(e){}!r&&o.Image&&((new Image).src=t.v,r=!0),r||(t.g=t6(t.j,null),t.g.ea(t.v)),t.F=Date.now(),ez(t)}t1(e)}function tj(e){e.g&&(tQ(e),e.g.cancel(),e.g=null)}function t$(e){tj(e),e.u&&(o.clearTimeout(e.u),e.u=null),tX(e),e.h.cancel(),e.s&&("number"==typeof e.s&&o.clearTimeout(e.s),e.s=null)}function tq(e){if(!eY(e.h)&&!e.s){e.s=!0;var t=e.Ga;P||U(),L||(P(),L=!0),M.add(t,e),e.B=0}}function tz(e,t){var r;r=t?t.l:e.U++;let n=e4(e.I);tt(n,"SID",e.K),tt(n,"RID",r),tt(n,"AID",e.T),tH(e,n),e.m&&e.o&&tA(n,e.m,e.o),r=new eU(e,e.j,r,e.B+1),null===e.m&&(r.H=e.o),t&&(e.i=t.D.concat(e.i)),t=tK(e,r,1e3),r.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),e1(e.h,r),ej(r,n,t)}function tH(e,t){e.H&&k(e.H,function(e,r){tt(t,r,e)}),e.l&&e3({},function(e,r){tt(t,r,e)})}function tK(e,t,r){r=Math.min(e.i.length,r);var n=e.l?w(e.l.Na,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){let e=["count="+r];-1==t?0<r?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<r;o++){let r=i[o].g,a=i[o].map;if(0>(r-=t))t=Math.max(0,i[o].g-100),s=!1;else try{!function(e,t,r){let n=r||"";try{e3(e,function(e,r){let i=e;l(e)&&(i=ep(e)),t.push(n+r+"="+encodeURIComponent(i))})}catch(e){throw t.push(n+"type="+encodeURIComponent("_badmap")),e}}(a,e,"req"+r+"_")}catch(e){n&&n(a)}}if(s){n=e.join("&");break e}}}return e=e.i.splice(0,r),t.D=e,n}function tG(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;P||U(),L||(P(),L=!0),M.add(t,e),e.v=0}}function tW(e){return!e.g&&!e.u&&!(3<=e.v)&&(e.Y++,e.u=ex(w(e.Fa,e),tZ(e,e.v)),e.v++,!0)}function tQ(e){null!=e.A&&(o.clearTimeout(e.A),e.A=null)}function tJ(e){e.g=new eU(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=e4(e.qa);tt(t,"RID","rpc"),tt(t,"SID",e.K),tt(t,"AID",e.T),tt(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&tt(t,"TO",e.ja),tt(t,"TYPE","xmlhttp"),tH(e,t),e.m&&e.o&&tA(t,e.m,e.o),e.L&&(e.g.I=e.L);var r=e.g;e=e.ia,r.L=1,r.v=tr(e4(t)),r.m=null,r.P=!0,e$(r,e)}function tX(e){null!=e.C&&(o.clearTimeout(e.C),e.C=null)}function tY(e,t){var r=null;if(e.g==t){tX(e),tQ(e),e.g=null;var n=2}else{if(!e0(e.h,t))return;r=t.D,e2(e.h,t),n=1}if(0!=e.G){if(t.o){if(1==n){r=t.m?t.m.length:0,t=Date.now()-t.F;var i,s=e.B;ea(n=eS(),new eN(n,r)),tq(e)}else tG(e)}else if(3==(s=t.s)||0==s&&0<t.X||!(1==n&&(i=t,!(eZ(e.h)>=e.h.j-+!!e.s)&&(e.s?(e.i=i.D.concat(e.i),!0):1!=e.G&&2!=e.G&&!(e.B>=(e.Va?0:e.Wa))&&(e.s=ex(w(e.Ga,e,i),tZ(e,e.B)),e.B++,!0)))||2==n&&tW(e)))switch(r&&0<r.length&&((t=e.h).i=t.i.concat(r)),s){case 1:t0(e,5);break;case 4:t0(e,10);break;case 3:t0(e,6);break;default:t0(e,2)}}}function tZ(e,t){let r=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(r*=2),r*t}function t0(e,t){if(e.j.info("Error code "+t),2==t){var r=w(e.fb,e),n=e.Xa;let t=!n;n=new e8(n||"//www.google.com/images/cleardot.gif"),o.location&&"http"==o.location.protocol||e7(n,"https"),tr(n),t?function(e,t){let r=new eD;if(o.Image){let n=new Image;n.onload=_(tw,r,"TestLoadImage: loaded",!0,t,n),n.onerror=_(tw,r,"TestLoadImage: error",!1,t,n),n.onabort=_(tw,r,"TestLoadImage: abort",!1,t,n),n.ontimeout=_(tw,r,"TestLoadImage: timeout",!1,t,n),o.setTimeout(function(){n.ontimeout&&n.ontimeout()},1e4),n.src=e}else t(!1)}(n.toString(),r):function(e,t){let r=new eD,n=new AbortController,i=setTimeout(()=>{n.abort(),tw(r,"TestPingServer: timeout",!1,t)},1e4);fetch(e,{signal:n.signal}).then(e=>{clearTimeout(i),e.ok?tw(r,"TestPingServer: ok",!0,t):tw(r,"TestPingServer: server error",!1,t)}).catch(()=>{clearTimeout(i),tw(r,"TestPingServer: error",!1,t)})}(n.toString(),r)}else eR(2);e.G=0,e.l&&e.l.sa(t),t1(e),t$(e)}function t1(e){if(e.G=0,e.ka=[],e.l){let t=e6(e.h);(0!=t.length||0!=e.i.length)&&(I(e.ka,t),I(e.ka,e.i),e.h.i.length=0,b(e.i),e.i.length=0),e.l.ra()}}function t2(e,t,r){var n=r instanceof e8?e4(r):new e8(r);if(""!=n.g)t&&(n.g=t+"."+n.g),e9(n,n.s);else{var i=o.location;n=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new e8(null);n&&e7(s,n),t&&(s.g=t),i&&e9(s,i),r&&(s.l=r),n=s}return r=e.D,t=e.ya,r&&t&&tt(n,r,t),tt(n,"VER",e.la),tH(e,n),n}function t6(e,t,r){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new tk(e.Ca&&!e.pa?new tE({eb:r}):e.pa)).Ha(e.J),t}function t3(){}function t5(){}function t8(e,t){eo.call(this),this.g=new tF(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!T(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!T(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new t9(this)}function t4(e){eE.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(let r in t){e=r;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function t7(){eb.call(this),this.status=1}function t9(e){this.g=e}(r=tk.prototype).Ha=function(e){this.J=e},r.ea=function(e,r,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);r=r?r.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():t.g(),this.v=this.o?ev(this.o):ev(t),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(r,String(e),!0),this.B=!1}catch(e){tx(this,e);return}if(e=n||"",n=new Map(this.headers),i){if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if("function"==typeof i.keys&&"function"==typeof i.get)for(let e of i.keys())n.set(e,i.get(e));else throw Error("Unknown input type for opt_headers: "+String(i))}for(let[t,a]of(i=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),s=o.FormData&&e instanceof o.FormData,!(0<=Array.prototype.indexOf.call(tN,r,void 0))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),n))this.g.setRequestHeader(t,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{tL(this),this.u=!0,this.g.send(e),this.u=!1}catch(e){tx(this,e)}},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,ea(this,"complete"),ea(this,"abort"),tP(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tP(this,!0)),tk.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?tO(this):this.bb())},r.bb=function(){tO(this)},r.isActive=function(){return!!this.g},r.Z=function(){try{return 2<tM(this)?this.g.status:-1}catch(e){return -1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),eg(t)}},r.Ba=function(){return this.m},r.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(r=tF.prototype).la=8,r.G=1,r.connect=function(e,t,r,n){eR(0),this.W=e,this.H=t||{},r&&void 0!==n&&(this.H.OSID=r,this.H.OAID=n),this.F=this.X,this.I=t2(this,null,this.W),tq(this)},r.Ga=function(e){if(this.s){if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;let i=new eU(this,this.j,e),s=this.o;if(this.S&&(s?x(s=R(s),this.S):s=this.S),null!==this.m||this.O||(i.H=s,s=null),this.P)e:{for(var t=0,r=0;r<this.i.length;r++){t:{var n=this.i[r];if("__data__"in n.map&&"string"==typeof(n=n.map.__data__)){n=n.length;break t}n=void 0}if(void 0===n)break;if(4096<(t+=n)){t=r;break e}if(4096===t||r===this.i.length-1){t=r+1;break e}}t=1e3}else t=1e3;t=tK(this,i,t),tt(r=e4(this.I),"RID",e),tt(r,"CVER",22),this.D&&tt(r,"X-HTTP-Session-Id",this.D),tH(this,r),s&&(this.O?t="headers="+encodeURIComponent(String(tC(s)))+"&"+t:this.m&&tA(r,this.m,s)),e1(this.h,i),this.Ua&&tt(r,"TYPE","init"),this.P?(tt(r,"$req",t),tt(r,"SID","null"),i.T=!0,ej(i,r,null)):ej(i,r,t),this.G=2}}else 3==this.G&&(e?tz(this,e):0==this.i.length||eY(this.h)||tz(this))}},r.Fa=function(){if(this.u=null,tJ(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=ex(w(this.ab,this),e)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,eR(10),tj(this),tJ(this))},r.Za=function(){null!=this.C&&(this.C=null,tj(this),tW(this),eR(19))},r.fb=function(e){e?(this.j.info("Successfully pinged google.com"),eR(2)):(this.j.info("Failed to ping google.com"),eR(1))},r.isActive=function(){return!!this.l&&this.l.isActive(this)},(r=t3.prototype).ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){},t5.prototype.g=function(e,t){return new t8(e,t)},E(t8,eo),t8.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},t8.prototype.close=function(){tB(this.g)},t8.prototype.o=function(e){var t=this.g;if("string"==typeof e){var r={};r.__data__=e,e=r}else this.u&&((r={}).__data__=ep(e),e=r);t.i.push(new eJ(t.Ya++,e)),3==t.G&&tq(t)},t8.prototype.N=function(){this.g.l=null,delete this.j,tB(this.g),delete this.g,t8.aa.N.call(this)},E(t4,eE),E(t7,eb),E(t9,t3),t9.prototype.ua=function(){ea(this.g,"a")},t9.prototype.ta=function(e){ea(this.g,new t4(e))},t9.prototype.sa=function(e){ea(this.g,new t7)},t9.prototype.ra=function(){ea(this.g,"b")},t5.prototype.createWebChannel=t5.prototype.g,t8.prototype.send=t8.prototype.o,t8.prototype.open=t8.prototype.m,t8.prototype.close=t8.prototype.close,v=tl.createWebChannelTransport=function(){return new t5},y=tl.getStatEventTarget=function(){return eS()},m=tl.Event=eI,g=tl.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},eP.NO_ERROR=0,eP.TIMEOUT=8,eP.HTTP_ERROR=6,p=tl.ErrorCode=eP,eL.COMPLETE="complete",d=tl.EventType=eL,ew.EventType=e_,e_.OPEN="a",e_.CLOSE="b",e_.ERROR="c",e_.MESSAGE="d",eo.prototype.listen=eo.prototype.K,f=tl.WebChannel=ew,tl.FetchXmlHttpFactory=tE,tk.prototype.listenOnce=tk.prototype.L,tk.prototype.getLastError=tk.prototype.Ka,tk.prototype.getLastErrorCode=tk.prototype.Ba,tk.prototype.getStatus=tk.prototype.Z,tk.prototype.getResponseJson=tk.prototype.Oa,tk.prototype.getResponseText=tk.prototype.oa,tk.prototype.send=tk.prototype.ea,tk.prototype.setWithCredentials=tk.prototype.Ha,c=tl.XhrIo=tk}).apply(void 0!==ta?ta:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{}),w=function(e){var t,r,n=function(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");-1===r&&(r=t);var n=r===t?0:4-r%4;return[r,n]}(e),i=n[0],s=n[1],o=new tc((i+s)*3/4-s),a=0,l=s>0?i-4:i;for(r=0;r<l;r+=4)t=tu[e.charCodeAt(r)]<<18|tu[e.charCodeAt(r+1)]<<12|tu[e.charCodeAt(r+2)]<<6|tu[e.charCodeAt(r+3)],o[a++]=t>>16&255,o[a++]=t>>8&255,o[a++]=255&t;return 2===s&&(t=tu[e.charCodeAt(r)]<<2|tu[e.charCodeAt(r+1)]>>4,o[a++]=255&t),1===s&&(t=tu[e.charCodeAt(r)]<<10|tu[e.charCodeAt(r+1)]<<4|tu[e.charCodeAt(r+2)]>>2,o[a++]=t>>8&255,o[a++]=255&t),o},_=function(e){for(var t,r=e.length,n=r%3,i=[],s=0,o=r-n;s<o;s+=16383)i.push(function(e,t,r){for(var n,i=[],s=t;s<r;s+=3)n=(e[s]<<16&0xff0000)+(e[s+1]<<8&65280)+(255&e[s+2]),i.push(th[n>>18&63]+th[n>>12&63]+th[n>>6&63]+th[63&n]);return i.join("")}(e,s,s+16383>o?o:s+16383));return 1===n?i.push(th[(t=e[r-1])>>2]+th[t<<4&63]+"=="):2===n&&i.push(th[(t=(e[r-2]<<8)+e[r-1])>>10]+th[t>>4&63]+th[t<<2&63]+"="),i.join("")};for(var th=[],tu=[],tc="undefined"!=typeof Uint8Array?Uint8Array:Array,tf="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",td=0,tp=tf.length;td<tp;++td)th[td]=tf[td],tu[tf.charCodeAt(td)]=td;tu["-".charCodeAt(0)]=62,tu["_".charCodeAt(0)]=63,E=function(e,t,r,n,i){var s,o,a=8*i-n-1,l=(1<<a)-1,h=l>>1,u=-7,c=r?i-1:0,f=r?-1:1,d=e[t+c];for(c+=f,s=d&(1<<-u)-1,d>>=-u,u+=a;u>0;s=256*s+e[t+c],c+=f,u-=8);for(o=s&(1<<-u)-1,s>>=-u,u+=n;u>0;o=256*o+e[t+c],c+=f,u-=8);if(0===s)s=1-h;else{if(s===l)return o?NaN:1/0*(d?-1:1);o+=Math.pow(2,n),s-=h}return(d?-1:1)*o*Math.pow(2,s-n)},b=function(e,t,r,n,i,s){var o,a,l,h=8*s-i-1,u=(1<<h)-1,c=u>>1,f=5960464477539062e-23*(23===i),d=n?0:s-1,p=n?1:-1,g=+(t<0||0===t&&1/t<0);for(isNaN(t=Math.abs(t))||t===1/0?(a=+!!isNaN(t),o=u):(o=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-o))<1&&(o--,l*=2),o+c>=1?t+=f/l:t+=f*Math.pow(2,1-c),t*l>=2&&(o++,l/=2),o+c>=u?(a=0,o=u):o+c>=1?(a=(t*l-1)*Math.pow(2,i),o+=c):(a=t*Math.pow(2,c-1)*Math.pow(2,i),o=0));i>=8;e[r+d]=255&a,d+=p,a/=256,i-=8);for(o=o<<i|a,h+=i;h>0;e[r+d]=255&o,d+=p,o/=256,h-=8);e[r+d-p]|=128*g};const tg="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function tm(e){if(e>0x7fffffff)throw RangeError('The value "'+e+'" is invalid for option "size"');let t=new Uint8Array(e);return Object.setPrototypeOf(t,ty.prototype),t}function ty(e,t,r){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return t_(e)}return tv(e,t,r)}function tv(e,t,r){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!ty.isEncoding(t))throw TypeError("Unknown encoding: "+t);let r=0|tT(e,t),n=tm(r),i=n.write(e,t);return i!==r&&(n=n.slice(0,i)),n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(tG(e,Uint8Array)){let t=new Uint8Array(e);return tb(t.buffer,t.byteOffset,t.byteLength)}return tE(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(tG(e,ArrayBuffer)||e&&tG(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(tG(e,SharedArrayBuffer)||e&&tG(e.buffer,SharedArrayBuffer)))return tb(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');let n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return ty.from(n,t,r);let i=function(e){if(ty.isBuffer(e)){let t=0|tI(e.length),r=tm(t);return 0===r.length||e.copy(r,0,0,t),r}return void 0!==e.length?"number"!=typeof e.length||function(e){return e!=e}(e.length)?tm(0):tE(e):"Buffer"===e.type&&Array.isArray(e.data)?tE(e.data):void 0}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return ty.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function tw(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function t_(e){return tw(e),tm(e<0?0:0|tI(e))}function tE(e){let t=e.length<0?0:0|tI(e.length),r=tm(t);for(let n=0;n<t;n+=1)r[n]=255&e[n];return r}function tb(e,t,r){let n;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),ty.prototype),n}function tI(e){if(e>=0x7fffffff)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function tT(e,t){if(ty.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||tG(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);let r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;let i=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return tz(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return tH(e).length;default:if(i)return n?-1:tz(e).length;t=(""+t).toLowerCase(),i=!0}}function tS(e,t,r){let n=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){let n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);let i="";for(let n=t;n<r;++n)i+=tW[e[n]];return i}(this,t,r);case"utf8":case"utf-8":return tR(this,t,r);case"ascii":return function(e,t,r){let n="";r=Math.min(e.length,r);for(let i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}(this,t,r);case"latin1":case"binary":return function(e,t,r){let n="";r=Math.min(e.length,r);for(let i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}(this,t,r);case"base64":var i,s,o;return i=this,s=t,o=r,0===s&&o===i.length?_(i):_(i.slice(s,o));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){let n=e.slice(t,r),i="";for(let e=0;e<n.length-1;e+=2)i+=String.fromCharCode(n[e]+256*n[e+1]);return i}(this,t,r);default:if(n)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function tC(e,t,r){let n=e[t];e[t]=e[r],e[r]=n}function tA(e,t,r,n,i){var s;if(0===e.length)return -1;if("string"==typeof r?(n=r,r=0):r>0x7fffffff?r=0x7fffffff:r<-0x80000000&&(r=-0x80000000),(s=r*=1)!=s&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return -1;r=e.length-1}else if(r<0){if(!i)return -1;r=0}if("string"==typeof t&&(t=ty.from(t,n)),ty.isBuffer(t))return 0===t.length?-1:tk(e,t,r,n,i);if("number"==typeof t)return(t&=255,"function"==typeof Uint8Array.prototype.indexOf)?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):tk(e,[t],r,n,i);throw TypeError("val must be string, number or Buffer")}function tk(e,t,r,n,i){let s,o=1,a=e.length,l=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return -1;o=2,a/=2,l/=2,r/=2}function h(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(i){let n=-1;for(s=r;s<a;s++)if(h(e,s)===h(t,-1===n?0:s-n)){if(-1===n&&(n=s),s-n+1===l)return n*o}else -1!==n&&(s-=s-n),n=-1}else for(r+l>a&&(r=a-l),s=r;s>=0;s--){let r=!0;for(let n=0;n<l;n++)if(h(e,s+n)!==h(t,n)){r=!1;break}if(r)return s}return -1}function tR(e,t,r){r=Math.min(e.length,r);let n=[],i=t;for(;i<r;){let t=e[i],s=null,o=t>239?4:t>223?3:t>191?2:1;if(i+o<=r){let r,n,a,l;switch(o){case 1:t<128&&(s=t);break;case 2:(192&(r=e[i+1]))==128&&(l=(31&t)<<6|63&r)>127&&(s=l);break;case 3:r=e[i+1],n=e[i+2],(192&r)==128&&(192&n)==128&&(l=(15&t)<<12|(63&r)<<6|63&n)>2047&&(l<55296||l>57343)&&(s=l);break;case 4:r=e[i+1],n=e[i+2],a=e[i+3],(192&r)==128&&(192&n)==128&&(192&a)==128&&(l=(15&t)<<18|(63&r)<<12|(63&n)<<6|63&a)>65535&&l<1114112&&(s=l)}}null===s?(s=65533,o=1):s>65535&&(s-=65536,n.push(s>>>10&1023|55296),s=56320|1023&s),n.push(s),i+=o}return function(e){let t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=4096));return r}(n)}function tN(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function tx(e,t,r,n,i,s){if(!ty.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<s)throw RangeError('"value" argument is out of bounds');if(r+n>e.length)throw RangeError("Index out of range")}function tD(e,t,r,n,i){tB(t,n,i,e,r,7);let s=Number(t&BigInt(0xffffffff));e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s;let o=Number(t>>BigInt(32)&BigInt(0xffffffff));return e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,r}function tO(e,t,r,n,i){tB(t,n,i,e,r,7);let s=Number(t&BigInt(0xffffffff));e[r+7]=s,s>>=8,e[r+6]=s,s>>=8,e[r+5]=s,s>>=8,e[r+4]=s;let o=Number(t>>BigInt(32)&BigInt(0xffffffff));return e[r+3]=o,o>>=8,e[r+2]=o,o>>=8,e[r+1]=o,o>>=8,e[r]=o,r+8}function tP(e,t,r,n,i,s){if(r+n>e.length||r<0)throw RangeError("Index out of range")}function tL(e,t,r,n,i){return t*=1,r>>>=0,i||tP(e,t,r,4,34028234663852886e22,-34028234663852886e22),b(e,t,r,n,23,4),r+4}function tM(e,t,r,n,i){return t*=1,r>>>=0,i||tP(e,t,r,8,17976931348623157e292,-17976931348623157e292),b(e,t,r,n,52,8),r+8}ty.TYPED_ARRAY_SUPPORT=function(){try{let e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),ty.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(ty.prototype,"parent",{enumerable:!0,get:function(){if(ty.isBuffer(this))return this.buffer}}),Object.defineProperty(ty.prototype,"offset",{enumerable:!0,get:function(){if(ty.isBuffer(this))return this.byteOffset}}),ty.poolSize=8192,ty.from=function(e,t,r){return tv(e,t,r)},Object.setPrototypeOf(ty.prototype,Uint8Array.prototype),Object.setPrototypeOf(ty,Uint8Array),ty.alloc=function(e,t,r){return(tw(e),e<=0)?tm(e):void 0!==t?"string"==typeof r?tm(e).fill(t,r):tm(e).fill(t):tm(e)},ty.allocUnsafe=function(e){return t_(e)},ty.allocUnsafeSlow=function(e){return t_(e)},ty.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==ty.prototype},ty.compare=function(e,t){if(tG(e,Uint8Array)&&(e=ty.from(e,e.offset,e.byteLength)),tG(t,Uint8Array)&&(t=ty.from(t,t.offset,t.byteLength)),!ty.isBuffer(e)||!ty.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let r=e.length,n=t.length;for(let i=0,s=Math.min(r,n);i<s;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:+(n<r)},ty.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},ty.concat=function(e,t){let r;if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return ty.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;let n=ty.allocUnsafe(t),i=0;for(r=0;r<e.length;++r){let t=e[r];if(tG(t,Uint8Array))i+t.length>n.length?(ty.isBuffer(t)||(t=ty.from(t)),t.copy(n,i)):Uint8Array.prototype.set.call(n,t,i);else if(ty.isBuffer(t))t.copy(n,i);else throw TypeError('"list" argument must be an Array of Buffers');i+=t.length}return n},ty.byteLength=tT,ty.prototype._isBuffer=!0,ty.prototype.swap16=function(){let e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)tC(this,t,t+1);return this},ty.prototype.swap32=function(){let e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)tC(this,t,t+3),tC(this,t+1,t+2);return this},ty.prototype.swap64=function(){let e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)tC(this,t,t+7),tC(this,t+1,t+6),tC(this,t+2,t+5),tC(this,t+3,t+4);return this},ty.prototype.toString=function(){let e=this.length;return 0===e?"":0==arguments.length?tR(this,0,e):tS.apply(this,arguments)},ty.prototype.toLocaleString=ty.prototype.toString,ty.prototype.equals=function(e){if(!ty.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===ty.compare(this,e)},ty.prototype.inspect=function(){let e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},tg&&(ty.prototype[tg]=ty.prototype.inspect),ty.prototype.compare=function(e,t,r,n,i){if(tG(e,Uint8Array)&&(e=ty.from(e,e.offset,e.byteLength)),!ty.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),t<0||r>e.length||n<0||i>this.length)throw RangeError("out of range index");if(n>=i&&t>=r)return 0;if(n>=i)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,n>>>=0,i>>>=0,this===e)return 0;let s=i-n,o=r-t,a=Math.min(s,o),l=this.slice(n,i),h=e.slice(t,r);for(let e=0;e<a;++e)if(l[e]!==h[e]){s=l[e],o=h[e];break}return s<o?-1:+(o<s)},ty.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},ty.prototype.indexOf=function(e,t,r){return tA(this,e,t,r,!0)},ty.prototype.lastIndexOf=function(e,t,r){return tA(this,e,t,r,!1)},ty.prototype.write=function(e,t,r,n){var i,s,o,a,l,h,u,c;if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let f=this.length-t;if((void 0===r||r>f)&&(r=f),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let d=!1;for(;;)switch(n){case"hex":return function(e,t,r,n){let i;r=Number(r)||0;let s=e.length-r;n?(n=Number(n))>s&&(n=s):n=s;let o=t.length;for(n>o/2&&(n=o/2),i=0;i<n;++i){var a;let n=parseInt(t.substr(2*i,2),16);if((a=n)!=a)break;e[r+i]=n}return i}(this,e,t,r);case"utf8":case"utf-8":return i=t,s=r,tK(tz(e,this.length-i),this,i,s);case"ascii":case"latin1":case"binary":return o=t,a=r,tK(function(e){let t=[];for(let r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(e),this,o,a);case"base64":return l=t,h=r,tK(tH(e),this,l,h);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return u=t,c=r,tK(function(e,t){let r,n;let i=[];for(let s=0;s<e.length&&!((t-=2)<0);++s)n=(r=e.charCodeAt(s))>>8,i.push(r%256),i.push(n);return i}(e,this.length-u),this,u,c);default:if(d)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),d=!0}},ty.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},ty.prototype.slice=function(e,t){let r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);let n=this.subarray(e,t);return Object.setPrototypeOf(n,ty.prototype),n},ty.prototype.readUintLE=ty.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||tN(e,t,this.length);let n=this[e],i=1,s=0;for(;++s<t&&(i*=256);)n+=this[e+s]*i;return n},ty.prototype.readUintBE=ty.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||tN(e,t,this.length);let n=this[e+--t],i=1;for(;t>0&&(i*=256);)n+=this[e+--t]*i;return n},ty.prototype.readUint8=ty.prototype.readUInt8=function(e,t){return e>>>=0,t||tN(e,1,this.length),this[e]},ty.prototype.readUint16LE=ty.prototype.readUInt16LE=function(e,t){return e>>>=0,t||tN(e,2,this.length),this[e]|this[e+1]<<8},ty.prototype.readUint16BE=ty.prototype.readUInt16BE=function(e,t){return e>>>=0,t||tN(e,2,this.length),this[e]<<8|this[e+1]},ty.prototype.readUint32LE=ty.prototype.readUInt32LE=function(e,t){return e>>>=0,t||tN(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+0x1000000*this[e+3]},ty.prototype.readUint32BE=ty.prototype.readUInt32BE=function(e,t){return e>>>=0,t||tN(e,4,this.length),0x1000000*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},ty.prototype.readBigUInt64LE=tQ(function(e){tj(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&t$(e,this.length-8);let n=t+256*this[++e]+65536*this[++e]+0x1000000*this[++e],i=this[++e]+256*this[++e]+65536*this[++e]+0x1000000*r;return BigInt(n)+(BigInt(i)<<BigInt(32))}),ty.prototype.readBigUInt64BE=tQ(function(e){tj(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&t$(e,this.length-8);let n=0x1000000*t+65536*this[++e]+256*this[++e]+this[++e],i=0x1000000*this[++e]+65536*this[++e]+256*this[++e]+r;return(BigInt(n)<<BigInt(32))+BigInt(i)}),ty.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||tN(e,t,this.length);let n=this[e],i=1,s=0;for(;++s<t&&(i*=256);)n+=this[e+s]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*t)),n},ty.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||tN(e,t,this.length);let n=t,i=1,s=this[e+--n];for(;n>0&&(i*=256);)s+=this[e+--n]*i;return s>=(i*=128)&&(s-=Math.pow(2,8*t)),s},ty.prototype.readInt8=function(e,t){return(e>>>=0,t||tN(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},ty.prototype.readInt16LE=function(e,t){e>>>=0,t||tN(e,2,this.length);let r=this[e]|this[e+1]<<8;return 32768&r?0xffff0000|r:r},ty.prototype.readInt16BE=function(e,t){e>>>=0,t||tN(e,2,this.length);let r=this[e+1]|this[e]<<8;return 32768&r?0xffff0000|r:r},ty.prototype.readInt32LE=function(e,t){return e>>>=0,t||tN(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},ty.prototype.readInt32BE=function(e,t){return e>>>=0,t||tN(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},ty.prototype.readBigInt64LE=tQ(function(e){tj(e>>>=0,"offset");let t=this[e],r=this[e+7];return(void 0===t||void 0===r)&&t$(e,this.length-8),(BigInt(this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24))<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+0x1000000*this[++e])}),ty.prototype.readBigInt64BE=tQ(function(e){tj(e>>>=0,"offset");let t=this[e],r=this[e+7];return(void 0===t||void 0===r)&&t$(e,this.length-8),(BigInt((t<<24)+65536*this[++e]+256*this[++e]+this[++e])<<BigInt(32))+BigInt(0x1000000*this[++e]+65536*this[++e]+256*this[++e]+r)}),ty.prototype.readFloatLE=function(e,t){return e>>>=0,t||tN(e,4,this.length),E(this,e,!0,23,4)},ty.prototype.readFloatBE=function(e,t){return e>>>=0,t||tN(e,4,this.length),E(this,e,!1,23,4)},ty.prototype.readDoubleLE=function(e,t){return e>>>=0,t||tN(e,8,this.length),E(this,e,!0,52,8)},ty.prototype.readDoubleBE=function(e,t){return e>>>=0,t||tN(e,8,this.length),E(this,e,!1,52,8)},ty.prototype.writeUintLE=ty.prototype.writeUIntLE=function(e,t,r,n){if(e*=1,t>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;tx(this,e,t,r,n,0)}let i=1,s=0;for(this[t]=255&e;++s<r&&(i*=256);)this[t+s]=e/i&255;return t+r},ty.prototype.writeUintBE=ty.prototype.writeUIntBE=function(e,t,r,n){if(e*=1,t>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;tx(this,e,t,r,n,0)}let i=r-1,s=1;for(this[t+i]=255&e;--i>=0&&(s*=256);)this[t+i]=e/s&255;return t+r},ty.prototype.writeUint8=ty.prototype.writeUInt8=function(e,t,r){return e*=1,t>>>=0,r||tx(this,e,t,1,255,0),this[t]=255&e,t+1},ty.prototype.writeUint16LE=ty.prototype.writeUInt16LE=function(e,t,r){return e*=1,t>>>=0,r||tx(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},ty.prototype.writeUint16BE=ty.prototype.writeUInt16BE=function(e,t,r){return e*=1,t>>>=0,r||tx(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},ty.prototype.writeUint32LE=ty.prototype.writeUInt32LE=function(e,t,r){return e*=1,t>>>=0,r||tx(this,e,t,4,0xffffffff,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},ty.prototype.writeUint32BE=ty.prototype.writeUInt32BE=function(e,t,r){return e*=1,t>>>=0,r||tx(this,e,t,4,0xffffffff,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},ty.prototype.writeBigUInt64LE=tQ(function(e,t=0){return tD(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),ty.prototype.writeBigUInt64BE=tQ(function(e,t=0){return tO(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),ty.prototype.writeIntLE=function(e,t,r,n){if(e*=1,t>>>=0,!n){let n=Math.pow(2,8*r-1);tx(this,e,t,r,n-1,-n)}let i=0,s=1,o=0;for(this[t]=255&e;++i<r&&(s*=256);)e<0&&0===o&&0!==this[t+i-1]&&(o=1),this[t+i]=(e/s>>0)-o&255;return t+r},ty.prototype.writeIntBE=function(e,t,r,n){if(e*=1,t>>>=0,!n){let n=Math.pow(2,8*r-1);tx(this,e,t,r,n-1,-n)}let i=r-1,s=1,o=0;for(this[t+i]=255&e;--i>=0&&(s*=256);)e<0&&0===o&&0!==this[t+i+1]&&(o=1),this[t+i]=(e/s>>0)-o&255;return t+r},ty.prototype.writeInt8=function(e,t,r){return e*=1,t>>>=0,r||tx(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},ty.prototype.writeInt16LE=function(e,t,r){return e*=1,t>>>=0,r||tx(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},ty.prototype.writeInt16BE=function(e,t,r){return e*=1,t>>>=0,r||tx(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},ty.prototype.writeInt32LE=function(e,t,r){return e*=1,t>>>=0,r||tx(this,e,t,4,0x7fffffff,-0x80000000),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},ty.prototype.writeInt32BE=function(e,t,r){return e*=1,t>>>=0,r||tx(this,e,t,4,0x7fffffff,-0x80000000),e<0&&(e=0xffffffff+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},ty.prototype.writeBigInt64LE=tQ(function(e,t=0){return tD(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),ty.prototype.writeBigInt64BE=tQ(function(e,t=0){return tO(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),ty.prototype.writeFloatLE=function(e,t,r){return tL(this,e,t,!0,r)},ty.prototype.writeFloatBE=function(e,t,r){return tL(this,e,t,!1,r)},ty.prototype.writeDoubleLE=function(e,t,r){return tM(this,e,t,!0,r)},ty.prototype.writeDoubleBE=function(e,t,r){return tM(this,e,t,!1,r)},ty.prototype.copy=function(e,t,r,n){if(!ty.isBuffer(e))throw TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);let i=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),i},ty.prototype.fill=function(e,t,r,n){let i;if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!ty.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===e.length){let t=e.charCodeAt(0);("utf8"===n&&t<128||"latin1"===n)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(i=t;i<r;++i)this[i]=e;else{let s=ty.isBuffer(e)?e:ty.from(e,n),o=s.length;if(0===o)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<r-t;++i)this[i+t]=s[i%o]}return this};const tU={};function tV(e,t,r){tU[e]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function tF(e){let t="",r=e.length,n=+("-"===e[0]);for(;r>=n+4;r-=3)t=`_${e.slice(r-3,r)}${t}`;return`${e.slice(0,r)}${t}`}function tB(e,t,r,n,i,s){if(e>r||e<t){let n;let i="bigint"==typeof t?"n":"";throw n=s>3?0===t||t===BigInt(0)?`>= 0${i} and < 2${i} ** ${(s+1)*8}${i}`:`>= -(2${i} ** ${(s+1)*8-1}${i}) and < 2 ** ${(s+1)*8-1}${i}`:`>= ${t}${i} and <= ${r}${i}`,new tU.ERR_OUT_OF_RANGE("value",n,e)}tj(i,"offset"),(void 0===n[i]||void 0===n[i+s])&&t$(i,n.length-(s+1))}function tj(e,t){if("number"!=typeof e)throw new tU.ERR_INVALID_ARG_TYPE(t,"number",e)}function t$(e,t,r){if(Math.floor(e)!==e)throw tj(e,r),new tU.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new tU.ERR_BUFFER_OUT_OF_BOUNDS;throw new tU.ERR_OUT_OF_RANGE(r||"offset",`>= ${+!!r} and <= ${t}`,e)}tV("ERR_BUFFER_OUT_OF_BOUNDS",function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),tV("ERR_INVALID_ARG_TYPE",function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`},TypeError),tV("ERR_OUT_OF_RANGE",function(e,t,r){let n=`The value of "${e}" is out of range.`,i=r;return Number.isInteger(r)&&Math.abs(r)>0x100000000?i=tF(String(r)):"bigint"==typeof r&&(i=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(i=tF(i)),i+="n"),n+=` It must be ${t}. Received ${i}`},RangeError);const tq=/[^+/0-9A-Za-z-_]/g;function tz(e,t){let r;t=t||1/0;let n=e.length,i=null,s=[];for(let o=0;o<n;++o){if((r=e.charCodeAt(o))>55295&&r<57344){if(!i){if(r>56319||o+1===n){(t-=3)>-1&&s.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&s.push(239,191,189),i=r;continue}r=(i-55296<<10|r-56320)+65536}else i&&(t-=3)>-1&&s.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;s.push(r)}else if(r<2048){if((t-=2)<0)break;s.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;s.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;s.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return s}function tH(e){return w(function(e){if((e=(e=e.split("=")[0]).trim().replace(tq,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function tK(e,t,r,n){let i;for(i=0;i<n&&!(i+r>=t.length)&&!(i>=e.length);++i)t[i+r]=e[i];return i}function tG(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}const tW=function(){let e="0123456789abcdef",t=Array(256);for(let r=0;r<16;++r){let n=16*r;for(let i=0;i<16;++i)t[n+i]=e[r]+e[i]}return t}();function tQ(e){return"undefined"==typeof BigInt?tJ:e}function tJ(){throw Error("BigInt not supported")}const tX="@firebase/firestore",tY="4.7.8";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tZ{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tZ.UNAUTHENTICATED=new tZ(null),tZ.GOOGLE_CREDENTIALS=new tZ("google-credentials-uid"),tZ.FIRST_PARTY=new tZ("first-party-uid"),tZ.MOCK_USER=new tZ("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let t0="11.3.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t1=new eC("@firebase/firestore");function t2(){return t1.logLevel}function t6(e,...t){if(t1.logLevel<=l.DEBUG){let r=t.map(t8);t1.debug(`Firestore (${t0}): ${e}`,...r)}}function t3(e,...t){if(t1.logLevel<=l.ERROR){let r=t.map(t8);t1.error(`Firestore (${t0}): ${e}`,...r)}}function t5(e,...t){if(t1.logLevel<=l.WARN){let r=t.map(t8);t1.warn(`Firestore (${t0}): ${e}`,...r)}}function t8(e){if("string"==typeof e)return e;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t4(e="Unexpected state"){let t=`FIRESTORE (${t0}) INTERNAL ASSERTION FAILED: `+e;throw t3(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t7={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class t9 extends eo{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(tZ.UNAUTHENTICATED))}shutdown(){}}class rn{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class ri{constructor(e){this.t=e,this.currentUser=tZ.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){void 0===this.o||t4();let r=this.i,n=e=>this.i!==r?(r=this.i,t(e)):Promise.resolve(),i=new re;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new re,e.enqueueRetryable(()=>n(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await n(this.currentUser)})},o=e=>{t6("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?o(e):(t6("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new re)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(t6("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||t4(),new rt(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||t4(),new tZ(e)}}class rs{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=tZ.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);let e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class ro{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new rs(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(tZ.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ra{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rl{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,eY(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){void 0===this.o||t4();let r=e=>{null!=e.error&&t6("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let r=e.token!==this.R;return this.R=e.token,t6("FirebaseAppCheckTokenProvider",`Received ${r?"new":"existing"} token.`),r?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>r(t))};let n=e=>{t6("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>n(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?n(e):t6("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new ra(this.V));let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||t4(),this.R=e.token,new ra(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{static newId(){let e=62*Math.floor(256/62),t="";for(;t.length<20;){let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),r=new Uint8Array(40);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(r);else for(let e=0;e<40;e++)r[e]=Math.floor(256*Math.random());return r}(40);for(let n=0;n<r.length;++n)t.length<20&&r[n]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(r[n]%62))}return t}}function ru(e,t){return e<t?-1:+(e>t)}function rc(e,t,r){return e.length===t.length&&e.every((e,n)=>r(e,t[n]))}class rf{static now(){return rf.fromMillis(Date.now())}static fromDate(e){return rf.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*1e6);return new rf(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new t9(t7.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-0xe7791f700||e>=0x3afff44180)throw new t9(t7.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ru(this.nanoseconds,e.nanoseconds):ru(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){return String(this.seconds- -0xe7791f700).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{static fromTimestamp(e){return new rd(e)}static min(){return new rd(new rf(0,0))}static max(){return new rd(new rf(0x3afff4417f,0x3b9ac9ff))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp="__name__";class rg{constructor(e,t,r){void 0===t?t=0:t>e.length&&t4(),void 0===r?r=e.length-t:r>e.length-t&&t4(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return 0===rg.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof rg?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let n=0;n<r;n++){let r=rg.compareSegments(e.get(n),t.get(n));if(0!==r)return r}return Math.sign(e.length-t.length)}static compareSegments(e,t){let r=rg.isNumericId(e),n=rg.isNumericId(t);return r&&!n?-1:!r&&n?1:r&&n?rg.extractNumericId(e).compare(rg.extractNumericId(t)):e<t?-1:+(e>t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return h.fromString(e.substring(4,e.length-2))}}class rm extends rg{construct(e,t,r){return new rm(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new t9(t7.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(e=>e.length>0))}return new rm(t)}static emptyPath(){return new rm([])}}const ry=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rv extends rg{construct(e,t,r){return new rv(e,t,r)}static isValidIdentifier(e){return ry.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rv.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===rp}static keyField(){return new rv([rp])}static fromServerFormat(e){let t=[],r="",n=0,i=()=>{if(0===r.length)throw new t9(t7.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},s=!1;for(;n<e.length;){let t=e[n];if("\\"===t){if(n+1===e.length)throw new t9(t7.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[n+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new t9(t7.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=t,n+=2}else"`"===t?s=!s:"."!==t||s?r+=t:i(),n++}if(i(),s)throw new t9(t7.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rv(t)}static emptyPath(){return new rv([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e){this.path=e}static fromPath(e){return new rw(rm.fromString(e))}static fromName(e){return new rw(rm.fromString(e).popFirst(5))}static empty(){return new rw(rm.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===rm.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return rm.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new rw(new rm(e.slice()))}}class r_{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new r_(rd.min(),rw.empty(),-1)}static max(){return new r_(rd.max(),rw.empty(),-1)}}class rE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rb(e){if(e.code!==t7.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;t6("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&t4(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new rI((r,n)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(r,n)},this.catchCallback=e=>{this.wrapFailure(t,e).next(r,n)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof rI?t:rI.resolve(t)}catch(e){return rI.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):rI.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):rI.reject(t)}static resolve(e){return new rI((t,r)=>{t(e)})}static reject(e){return new rI((t,r)=>{r(e)})}static waitFor(e){return new rI((t,r)=>{let n=0,i=0,s=!1;e.forEach(e=>{++n,e.next(()=>{++i,s&&i===n&&t()},e=>r(e))}),s=!0,i===n&&t()})}static or(e){let t=rI.resolve(!1);for(let r of e)t=t.next(e=>e?rI.resolve(e):r());return t}static forEach(e,t){let r=[];return e.forEach((e,n)=>{r.push(t.call(this,e,n))}),this.waitFor(r)}static mapArray(e,t){return new rI((r,n)=>{let i=e.length,s=Array(i),o=0;for(let a=0;a<i;a++){let l=a;t(e[l]).next(e=>{s[l]=e,++o===i&&r(s)},e=>n(e))}})}static doWhile(e,t){return new rI((r,n)=>{let i=()=>{!0===e()?t().next(()=>{i()},n):r()};i()})}}function rT(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.oe(e),this._e=e=>t.writeSequenceNumber(e))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this._e&&this._e(e),e}}rS.ae=-1;function rC(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rA(e){let t=0;for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t++;return t}function rk(e,t){for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t(r,e[r])}function rR(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(e,t){this.comparator=e,this.root=t||rD.EMPTY}insert(e,t){return new rN(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,rD.BLACK,null,null))}remove(e){return new rN(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rD.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(0===r)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let n=this.comparator(e,r.key);if(0===n)return t+r.left.size;n<0?r=r.left:(t+=r.left.size+1,r=r.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new rx(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new rx(this.root,e,this.comparator,!1)}getReverseIterator(){return new rx(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new rx(this.root,e,this.comparator,!0)}}class rx{constructor(e,t,r,n){this.isReverse=n,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&n&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rD{constructor(e,t,r,n,i){this.key=e,this.value=t,this.color=null!=r?r:rD.RED,this.left=null!=n?n:rD.EMPTY,this.right=null!=i?i:rD.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,n,i){return new rD(null!=e?e:this.key,null!=t?t:this.value,null!=r?r:this.color,null!=n?n:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let n=this,i=r(e,n.key);return(n=i<0?n.copy(null,null,null,n.left.insert(e,t,r),null):0===i?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,r))).fixUp()}removeMin(){if(this.left.isEmpty())return rD.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let r,n=this;if(0>t(e,n.key))n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===t(e,n.key)){if(n.right.isEmpty())return rD.EMPTY;r=n.right.min(),n=n.copy(r.key,r.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,rD.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,rD.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw t4();let e=this.left.check();if(e!==this.right.check())throw t4();return e+ +!this.isRed()}}rD.EMPTY=null,rD.RED=!0,rD.BLACK=!1,rD.EMPTY=new class{constructor(){this.size=0}get key(){throw t4()}get value(){throw t4()}get color(){throw t4()}get left(){throw t4()}get right(){throw t4()}copy(e,t,r,n,i){return this}insert(e,t,r){return new rD(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rO{constructor(e){this.comparator=e,this.data=new rN(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let n=r.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let r;for(r=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new rP(this.data.getIterator())}getIteratorFrom(e){return new rP(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof rO)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(0!==this.comparator(e,n))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new rO(this.comparator);return t.data=e,t}}class rP{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rL{constructor(e){this.fields=e,e.sort(rv.comparator)}static empty(){return new rL([])}unionWith(e){let t=new rO(rv.comparator);for(let e of this.fields)t=t.add(e);for(let r of e)t=t.add(r);return new rL(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return rc(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rM extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rU{constructor(e){this.binaryString=e}static fromBase64String(e){return new rU(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new rM("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new rU(function(e){let t="";for(let r=0;r<e.length;++r)t+=String.fromCharCode(e[r]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ru(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rU.EMPTY_BYTE_STRING=new rU("");const rV=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rF(e){if(e||t4(),"string"==typeof e){let t=0,r=rV.exec(e);if(r||t4(),r[1]){let e=r[1];t=Number(e=(e+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(e).getTime()/1e3),nanos:t}}return{seconds:rB(e.seconds),nanos:rB(e.nanos)}}function rB(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function rj(e){return"string"==typeof e?rU.fromBase64String(e):rU.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r$="server_timestamp",rq="__type__",rz="__previous_value__",rH="__local_write_time__";function rK(e){var t,r;return(null===(r=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[rq])||void 0===r?void 0:r.stringValue)===r$}function rG(e){let t=e.mapValue.fields[rz];return rK(t)?rG(t):t}function rW(e){let t=rF(e.mapValue.fields[rH].timestampValue);return new rf(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rQ{constructor(e,t,r,n,i,s,o,a,l){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=n,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=l}}const rJ="(default)";class rX{constructor(e,t){this.projectId=e,this.database=t||rJ}static empty(){return new rX("","")}get isDefaultDatabase(){return this.database===rJ}isEqual(e){return e instanceof rX&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rY="__type__",rZ="__max__",r0={mapValue:{fields:{__type__:{stringValue:rZ}}}},r1="__vector__",r2="value";function r6(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?rK(e)?4:nl(e)?0x1fffffffffffff:no(e)?10:11:t4()}function r3(e,t){if(e===t)return!0;let r=r6(e);if(r!==r6(t))return!1;switch(r){case 0:case 0x1fffffffffffff:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return rW(e).isEqual(rW(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let r=rF(e.timestampValue),n=rF(t.timestampValue);return r.seconds===n.seconds&&r.nanos===n.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return rj(e.bytesValue).isEqual(rj(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return rB(e.geoPointValue.latitude)===rB(t.geoPointValue.latitude)&&rB(e.geoPointValue.longitude)===rB(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return rB(e.integerValue)===rB(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let r=rB(e.doubleValue),n=rB(t.doubleValue);return r===n?rC(r)===rC(n):isNaN(r)&&isNaN(n)}return!1}(e,t);case 9:return rc(e.arrayValue.values||[],t.arrayValue.values||[],r3);case 10:case 11:return function(e,t){let r=e.mapValue.fields||{},n=t.mapValue.fields||{};if(rA(r)!==rA(n))return!1;for(let e in r)if(r.hasOwnProperty(e)&&(void 0===n[e]||!r3(r[e],n[e])))return!1;return!0}(e,t);default:return t4()}}function r5(e,t){return void 0!==(e.values||[]).find(e=>r3(e,t))}function r8(e,t){if(e===t)return 0;let r=r6(e),n=r6(t);if(r!==n)return ru(r,n);switch(r){case 0:case 0x1fffffffffffff:return 0;case 1:return ru(e.booleanValue,t.booleanValue);case 2:return function(e,t){let r=rB(e.integerValue||e.doubleValue),n=rB(t.integerValue||t.doubleValue);return r<n?-1:r>n?1:r===n?0:isNaN(r)?isNaN(n)?0:-1:1}(e,t);case 3:return r4(e.timestampValue,t.timestampValue);case 4:return r4(rW(e),rW(t));case 5:return ru(e.stringValue,t.stringValue);case 6:return function(e,t){let r=rj(e),n=rj(t);return r.compareTo(n)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let r=e.split("/"),n=t.split("/");for(let e=0;e<r.length&&e<n.length;e++){let t=ru(r[e],n[e]);if(0!==t)return t}return ru(r.length,n.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let r=ru(rB(e.latitude),rB(t.latitude));return 0!==r?r:ru(rB(e.longitude),rB(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return r7(e.arrayValue,t.arrayValue);case 10:return function(e,t){var r,n,i,s;let o=e.fields||{},a=t.fields||{},l=null===(r=o[r2])||void 0===r?void 0:r.arrayValue,h=null===(n=a[r2])||void 0===n?void 0:n.arrayValue,u=ru((null===(i=null==l?void 0:l.values)||void 0===i?void 0:i.length)||0,(null===(s=null==h?void 0:h.values)||void 0===s?void 0:s.length)||0);return 0!==u?u:r7(l,h)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===r0.mapValue&&t===r0.mapValue)return 0;if(e===r0.mapValue)return 1;if(t===r0.mapValue)return -1;let r=e.fields||{},n=Object.keys(r),i=t.fields||{},s=Object.keys(i);n.sort(),s.sort();for(let e=0;e<n.length&&e<s.length;++e){let t=ru(n[e],s[e]);if(0!==t)return t;let o=r8(r[n[e]],i[s[e]]);if(0!==o)return o}return ru(n.length,s.length)}(e.mapValue,t.mapValue);default:throw t4()}}function r4(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return ru(e,t);let r=rF(e),n=rF(t),i=ru(r.seconds,n.seconds);return 0!==i?i:ru(r.nanos,n.nanos)}function r7(e,t){let r=e.values||[],n=t.values||[];for(let e=0;e<r.length&&e<n.length;++e){let t=r8(r[e],n[e]);if(t)return t}return ru(r.length,n.length)}function r9(e){var t,r;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=rF(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?rj(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,rw.fromName(t).toString()):"geoPointValue"in e?(r=e.geoPointValue,`geo(${r.latitude},${r.longitude})`):"arrayValue"in e?function(e){let t="[",r=!0;for(let n of e.values||[])r?r=!1:t+=",",t+=r9(n);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),r="{",n=!0;for(let i of t)n?n=!1:r+=",",r+=`${i}:${r9(e.fields[i])}`;return r+"}"}(e.mapValue):t4()}function ne(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function nt(e){return!!e&&"integerValue"in e}function nr(e){return!!e&&"arrayValue"in e}function nn(e){return!!e&&"nullValue"in e}function ni(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ns(e){return!!e&&"mapValue"in e}function no(e){var t,r;return(null===(r=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[rY])||void 0===r?void 0:r.stringValue)===r1}function na(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return rk(e.mapValue.fields,(e,r)=>t.mapValue.fields[e]=na(r)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let r=0;r<(e.arrayValue.values||[]).length;++r)t.arrayValue.values[r]=na(e.arrayValue.values[r]);return t}return Object.assign({},e)}function nl(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===rZ}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e){this.value=e}static empty(){return new nh({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(!ns(t=(t.mapValue.fields||{})[e.get(r)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=na(t)}setAll(e){let t=rv.emptyPath(),r={},n=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,r,n),r={},n=[],t=i.popLast()}e?r[i.lastSegment()]=na(e):n.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,r,n)}delete(e){let t=this.field(e.popLast());ns(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return r3(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let n=t.mapValue.fields[e.get(r)];ns(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=n),t=n}return t.mapValue.fields}applyChanges(e,t,r){for(let n of(rk(t,(t,r)=>e[t]=r),r))delete e[n]}clone(){return new nh(na(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,t,r,n,i,s,o){this.key=e,this.documentType=t,this.version=r,this.readTime=n,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new nu(e,0,rd.min(),rd.min(),rd.min(),nh.empty(),0)}static newFoundDocument(e,t,r,n){return new nu(e,1,t,rd.min(),r,n,0)}static newNoDocument(e,t){return new nu(e,2,t,rd.min(),rd.min(),nh.empty(),0)}static newUnknownDocument(e,t){return new nu(e,3,t,rd.min(),rd.min(),nh.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(rd.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=nh.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=nh.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=rd.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof nu&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nu(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,t){this.position=e,this.inclusive=t}}function nf(e,t,r){let n=0;for(let i=0;i<e.position.length;i++){let s=t[i],o=e.position[i];if(n=s.field.isKeyField()?rw.comparator(rw.fromName(o.referenceValue),r.key):r8(o,r.data.field(s.field)),"desc"===s.dir&&(n*=-1),0!==n)break}return n}function nd(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let r=0;r<e.position.length;r++)if(!r3(e.position[r],t.position[r]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{}class nm extends ng{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,r):new n_(e,t,r):"array-contains"===t?new nT(e,r):"in"===t?new nS(e,r):"not-in"===t?new nC(e,r):"array-contains-any"===t?new nA(e,r):new nm(e,t,r)}static createKeyFieldInFilter(e,t,r){return"in"===t?new nE(e,r):new nb(e,r)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(r8(t,this.value)):null!==t&&r6(this.value)===r6(t)&&this.matchesComparison(r8(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return t4()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ny extends ng{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new ny(e,t)}matches(e){return nv(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function nv(e){return"and"===e.op}function nw(e){for(let t of e.filters)if(t instanceof ny)return!1;return!0}class n_ extends nm{constructor(e,t,r){super(e,t,r),this.key=rw.fromName(r.referenceValue)}matches(e){let t=rw.comparator(e.key,this.key);return this.matchesComparison(t)}}class nE extends nm{constructor(e,t){super(e,"in",t),this.keys=nI("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class nb extends nm{constructor(e,t){super(e,"not-in",t),this.keys=nI("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function nI(e,t){var r;return((null===(r=t.arrayValue)||void 0===r?void 0:r.values)||[]).map(e=>rw.fromName(e.referenceValue))}class nT extends nm{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return nr(t)&&r5(t.arrayValue,this.value)}}class nS extends nm{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&r5(this.value.arrayValue,t)}}class nC extends nm{constructor(e,t){super(e,"not-in",t)}matches(e){if(r5(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!r5(this.value.arrayValue,t)}}class nA extends nm{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!nr(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>r5(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e,t=null,r=[],n=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=n,this.limit=i,this.startAt=s,this.endAt=o,this.le=null}}function nR(e,t=null,r=[],n=[],i=null,s=null,o=null){return new nk(e,t,r,n,i,s,o)}function nN(e){if(null===e.le){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(e=>(function e(t){if(t instanceof nm)return t.field.canonicalString()+t.op.toString()+r9(t.value);if(nw(t)&&nv(t))return t.filters.map(t=>e(t)).join(",");{let r=t.filters.map(t=>e(t)).join(",");return`${t.op}(${r})`}})(e)).join(","),t+="|ob:",t+=e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>r9(e)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>r9(e)).join(",")),e.le=t}return e.le}function nx(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var r,n;if(r=e.orderBy[i],n=t.orderBy[i],!(r.dir===n.dir&&r.field.isEqual(n.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(!function e(t,r){return t instanceof nm?r instanceof nm&&t.op===r.op&&t.field.isEqual(r.field)&&r3(t.value,r.value):t instanceof ny?r instanceof ny&&t.op===r.op&&t.filters.length===r.filters.length&&t.filters.reduce((t,n,i)=>t&&e(n,r.filters[i]),!0):void t4()}(e.filters[r],t.filters[r]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!nd(e.startAt,t.startAt)&&nd(e.endAt,t.endAt)}function nD(e){return rw.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(e,t=null,r=[],n=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=n,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function nP(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function nL(e){return null!==e.collectionGroup}function nM(e){if(null===e.he){let t;e.he=[];let r=new Set;for(let t of e.explicitOrderBy)e.he.push(t),r.add(t.field.canonicalString());let n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(t=new rO(rv.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t).forEach(t=>{r.has(t.canonicalString())||t.isKeyField()||e.he.push(new np(t,n))}),r.has(rv.keyField().canonicalString())||e.he.push(new np(rv.keyField(),n))}return e.he}function nU(e){return e.Pe||(e.Pe=function(e,t){if("F"===e.limitType)return nR(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new np(e.field,t)});let r=e.endAt?new nc(e.endAt.position,e.endAt.inclusive):null,n=e.startAt?new nc(e.startAt.position,e.startAt.inclusive):null;return nR(e.path,e.collectionGroup,t,e.filters,e.limit,r,n)}}(e,nM(e))),e.Pe}function nV(e,t){let r=e.filters.concat([t]);return new nO(e.path,e.collectionGroup,e.explicitOrderBy.slice(),r,e.limit,e.limitType,e.startAt,e.endAt)}function nF(e,t,r){return new nO(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,r,e.startAt,e.endAt)}function nB(e,t){return nx(nU(e),nU(t))&&e.limitType===t.limitType}function nj(e){return`${nN(nU(e))}|lt:${e.limitType}`}function n$(e){var t;let r;return`Query(target=${r=(t=nU(e)).path.canonicalString(),null!==t.collectionGroup&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof nm?`${t.field.canonicalString()} ${t.op} ${r9(t.value)}`:t instanceof ny?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(e=>r9(e)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(e=>r9(e)).join(",")),`Target(${r})`}; limitType=${e.limitType})`}function nq(e,t){return t.isFoundDocument()&&function(e,t){let r=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(r):rw.isDocumentKey(e.path)?e.path.isEqual(r):e.path.isImmediateParentOf(r)}(e,t)&&function(e,t){for(let r of nM(e))if(!r.field.isKeyField()&&null===t.data.field(r.field))return!1;return!0}(e,t)&&function(e,t){for(let r of e.filters)if(!r.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,r){let n=nf(e,t,r);return e.inclusive?n<=0:n<0}(e.startAt,nM(e),t))&&(!e.endAt||!!function(e,t,r){let n=nf(e,t,r);return e.inclusive?n>=0:n>0}(e.endAt,nM(e),t))}function nz(e){return(t,r)=>{let n=!1;for(let i of nM(e)){let e=function(e,t,r){let n=e.field.isKeyField()?rw.comparator(t.key,r.key):function(e,t,r){let n=t.data.field(e),i=r.data.field(e);return null!==n&&null!==i?r8(n,i):t4()}(e.field,t,r);switch(e.dir){case"asc":return n;case"desc":return -1*n;default:return t4()}}(i,t,r);if(0!==e)return e;n=n||i.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nH{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0!==r){for(let[t,n]of r)if(this.equalsFn(t,e))return n}}has(e){return void 0!==this.get(e)}set(e,t){let r=this.mapKeyFn(e),n=this.inner[r];if(void 0===n)return this.inner[r]=[[e,t]],void this.innerSize++;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return void(n[r]=[e,t]);n.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0===r)return!1;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return 1===r.length?delete this.inner[t]:r.splice(n,1),this.innerSize--,!0;return!1}forEach(e){rk(this.inner,(t,r)=>{for(let[t,n]of r)e(t,n)})}isEmpty(){return rR(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nK=new rN(rw.comparator),nG=new rN(rw.comparator);function nW(...e){let t=nG;for(let r of e)t=t.insert(r.key,r);return t}function nQ(e){let t=nG;return e.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function nJ(){return new nH(e=>e.toString(),(e,t)=>e.isEqual(t))}const nX=new rN(rw.comparator),nY=new rO(rw.comparator);function nZ(...e){let t=nY;for(let r of e)t=t.add(r);return t}const n0=new rO(ru);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rC(t)?"-0":t}}function n2(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n6{constructor(){this._=void 0}}function n3(e,t){return e instanceof ie?nt(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class n5 extends n6{}class n8 extends n6{constructor(e){super(),this.elements=e}}function n4(e,t){let r=ir(t);for(let t of e.elements)r.some(e=>r3(e,t))||r.push(t);return{arrayValue:{values:r}}}class n7 extends n6{constructor(e){super(),this.elements=e}}function n9(e,t){let r=ir(t);for(let t of e.elements)r=r.filter(e=>!r3(e,t));return{arrayValue:{values:r}}}class ie extends n6{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function it(e){return rB(e.integerValue||e.doubleValue)}function ir(e){return nr(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class ii{constructor(e,t){this.version=e,this.transformResults=t}}class is{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new is}static exists(e){return new is(void 0,e)}static updateTime(e){return new is(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function io(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class ia{}function il(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new iy(e.key,is.none()):new ic(e.key,e.data,is.none());{let r=e.data,n=nh.empty(),i=new rO(rv.comparator);for(let e of t.fields)if(!i.has(e)){let t=r.field(e);null===t&&e.length>1&&(e=e.popLast(),t=r.field(e)),null===t?n.delete(e):n.set(e,t),i=i.add(e)}return new id(e.key,n,new rL(i.toArray()),is.none())}}function ih(e,t,r,n){return e instanceof ic?function(e,t,r,n){if(!io(e.precondition,t))return r;let i=e.value.clone(),s=im(e.fieldTransforms,n,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,r,n):e instanceof id?function(e,t,r,n){if(!io(e.precondition,t))return r;let i=im(e.fieldTransforms,n,t),s=t.data;return(s.setAll(ip(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===r)?null:r.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,r,n):io(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):r}function iu(e,t){var r,n;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(r=e.fieldTransforms,n=t.fieldTransforms,!!(void 0===r&&void 0===n||!(!r||!n)&&rc(r,n,(e,t)=>{var r,n;return e.field.isEqual(t.field)&&(r=e.transform,n=t.transform,r instanceof n8&&n instanceof n8||r instanceof n7&&n instanceof n7?rc(r.elements,n.elements,r3):r instanceof ie&&n instanceof ie?r3(r.Ie,n.Ie):r instanceof n5&&n instanceof n5)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class ic extends ia{constructor(e,t,r,n=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=n,this.type=0}getFieldMask(){return null}}class id extends ia{constructor(e,t,r,n,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=n,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ip(e){let t=new Map;return e.fieldMask.fields.forEach(r=>{if(!r.isEmpty()){let n=e.data.field(r);t.set(r,n)}}),t}function ig(e,t,r){var n;let i=new Map;e.length===r.length||t4();for(let s=0;s<r.length;s++){let o=e[s],a=o.transform,l=t.data.field(o.field);i.set(o.field,(n=r[s],a instanceof n8?n4(a,l):a instanceof n7?n9(a,l):n))}return i}function im(e,t,r){let n=new Map;for(let i of e){let e=i.transform,s=r.data.field(i.field);n.set(i.field,e instanceof n5?function(e,t){let r={fields:{[rq]:{stringValue:r$},[rH]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&rK(t)&&(t=rG(t)),t&&(r.fields[rz]=t),{mapValue:r}}(t,s):e instanceof n8?n4(e,s):e instanceof n7?n9(e,s):function(e,t){let r=n3(e,t),n=it(r)+it(e.Ie);return nt(r)&&nt(e.Ie)?n2(n):n1(e.serializer,n)}(e,s))}return n}class iy extends ia{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class iv extends ia{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e,t,r,n){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=n}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var n;n=r[t],i instanceof ic?function(e,t,r){let n=e.value.clone(),i=ig(e.fieldTransforms,t,r.transformResults);n.setAll(i),t.convertToFoundDocument(r.version,n).setHasCommittedMutations()}(i,e,n):i instanceof id?function(e,t,r){if(!io(e.precondition,t))return void t.convertToUnknownDocument(r.version);let n=ig(e.fieldTransforms,t,r.transformResults),i=t.data;i.setAll(ip(e)),i.setAll(n),t.convertToFoundDocument(r.version,i).setHasCommittedMutations()}(i,e,n):function(e,t,r){t.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=ih(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=ih(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=nJ();return this.mutations.forEach(n=>{let i=e.get(n.key),s=i.overlayedDocument,o=this.applyToLocalView(s,i.mutatedFields),a=il(s,o=t.has(n.key)?null:o);null!==a&&r.set(n.key,a),s.isValidDocument()||s.convertToNoDocument(rd.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),nZ())}isEqual(e){return this.batchId===e.batchId&&rc(this.mutations,e.mutations,(e,t)=>iu(e,t))&&rc(this.baseMutations,e.baseMutations,(e,t)=>iu(e,t))}}class i_{constructor(e,t,r,n){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=n}static from(e,t,r){e.mutations.length===r.length||t4();let n=nX,i=e.mutations;for(let e=0;e<i.length;e++)n=n.insert(i[e].key,r[e].version);return new i_(e,t,r,n)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e,t){this.count=e,this.unchangedNames=t}}function iI(e){if(void 0===e)return t3("GRPC error has no .code"),t7.UNKNOWN;switch(e){case I.OK:return t7.OK;case I.CANCELLED:return t7.CANCELLED;case I.UNKNOWN:return t7.UNKNOWN;case I.DEADLINE_EXCEEDED:return t7.DEADLINE_EXCEEDED;case I.RESOURCE_EXHAUSTED:return t7.RESOURCE_EXHAUSTED;case I.INTERNAL:return t7.INTERNAL;case I.UNAVAILABLE:return t7.UNAVAILABLE;case I.UNAUTHENTICATED:return t7.UNAUTHENTICATED;case I.INVALID_ARGUMENT:return t7.INVALID_ARGUMENT;case I.NOT_FOUND:return t7.NOT_FOUND;case I.ALREADY_EXISTS:return t7.ALREADY_EXISTS;case I.PERMISSION_DENIED:return t7.PERMISSION_DENIED;case I.FAILED_PRECONDITION:return t7.FAILED_PRECONDITION;case I.ABORTED:return t7.ABORTED;case I.OUT_OF_RANGE:return t7.OUT_OF_RANGE;case I.UNIMPLEMENTED:return t7.UNIMPLEMENTED;case I.DATA_LOSS:return t7.DATA_LOSS;default:return t4()}}(T=I||(I={}))[T.OK=0]="OK",T[T.CANCELLED=1]="CANCELLED",T[T.UNKNOWN=2]="UNKNOWN",T[T.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",T[T.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",T[T.NOT_FOUND=5]="NOT_FOUND",T[T.ALREADY_EXISTS=6]="ALREADY_EXISTS",T[T.PERMISSION_DENIED=7]="PERMISSION_DENIED",T[T.UNAUTHENTICATED=16]="UNAUTHENTICATED",T[T.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",T[T.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",T[T.ABORTED=10]="ABORTED",T[T.OUT_OF_RANGE=11]="OUT_OF_RANGE",T[T.UNIMPLEMENTED=12]="UNIMPLEMENTED",T[T.INTERNAL=13]="INTERNAL",T[T.UNAVAILABLE=14]="UNAVAILABLE",T[T.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT=new h([0xffffffff,0xffffffff],0);function iS(e){let t=(new TextEncoder).encode(e),r=new u;return r.update(t),new Uint8Array(r.digest())}function iC(e){let t=new DataView(e.buffer),r=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new h([r,n],0),new h([i,s],0)]}class iA{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ik(`Invalid padding: ${t}`);if(r<0||e.length>0&&0===this.hashCount)throw new ik(`Invalid hash count: ${r}`);if(0===e.length&&0!==t)throw new ik(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=h.fromNumber(this.Ee)}Ae(e,t,r){let n=e.add(t.multiply(h.fromNumber(r)));return 1===n.compare(iT)&&(n=new h([n.getBits(0),n.getBits(1)],0)),n.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ee)return!1;let[t,r]=iC(iS(e));for(let e=0;e<this.hashCount;e++){let n=this.Ae(t,r,e);if(!this.Re(n))return!1}return!0}static create(e,t,r){let n=new iA(new Uint8Array(Math.ceil(e/8)),e%8==0?0:8-e%8,t);return r.forEach(e=>n.insert(e)),n}insert(e){if(0===this.Ee)return;let[t,r]=iC(iS(e));for(let e=0;e<this.hashCount;e++){let n=this.Ae(t,r,e);this.Ve(n)}}Ve(e){let t=Math.floor(e/8);this.bitmap[t]|=1<<e%8}}class ik extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e,t,r,n,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=n,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let n=new Map;return n.set(e,iN.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new iR(rd.min(),n,new rN(ru),nK,nZ())}}class iN{constructor(e,t,r,n,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=n,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new iN(r,t,nZ(),nZ(),nZ())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(e,t,r,n){this.me=e,this.removedTargetIds=t,this.key=r,this.fe=n}}class iD{constructor(e,t){this.targetId=e,this.ge=t}}class iO{constructor(e,t,r=rU.EMPTY_BYTE_STRING,n=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=n}}class iP{constructor(){this.pe=0,this.ye=iU(),this.we=rU.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return 0!==this.pe}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=nZ(),t=nZ(),r=nZ();return this.ye.forEach((n,i)=>{switch(i){case 0:e=e.add(n);break;case 2:t=t.add(n);break;case 1:r=r.add(n);break;default:t4()}}),new iN(this.we,this.Se,e,t,r)}Me(){this.be=!1,this.ye=iU()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,this.pe>=0||t4()}Le(){this.be=!0,this.Se=!0}}class iL{constructor(e){this.ke=e,this.qe=new Map,this.Qe=nK,this.$e=iM(),this.Ke=iM(),this.Ue=new rN(ru)}We(e){for(let t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(let t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{let r=this.He(t);switch(e.state){case 0:this.Je(t)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(t);break;case 3:this.Je(t)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),r.Ce(e.resumeToken));break;default:t4()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((e,r)=>{this.Je(r)&&t(r)})}Ze(e){let t=e.targetId,r=e.ge.count,n=this.Xe(t);if(n){let i=n.target;if(nD(i)){if(0===r){let e=new rw(i.path);this.ze(t,e,nu.newNoDocument(e,rd.min()))}else 1===r||t4()}else{let n=this.et(t);if(n!==r){let r=this.tt(e),i=r?this.nt(r,e,n):1;0!==i&&(this.Ye(t),this.Ue=this.Ue.insert(t,2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}tt(e){let t,r;let n=e.ge.unchangedNames;if(!n||!n.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=n;try{t=rj(i).toUint8Array()}catch(e){if(e instanceof rM)return t5("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{r=new iA(t,s,o)}catch(e){return t5(e instanceof ik?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===r.Ee?null:r}nt(e,t,r){return 2*(t.ge.count!==r-this.st(e,t.targetId))}st(e,t){let r=this.ke.getRemoteKeysForTarget(t),n=0;return r.forEach(r=>{let i=this.ke.it(),s=`projects/${i.projectId}/databases/${i.database}/documents/${r.path.canonicalString()}`;e.mightContain(s)||(this.ze(t,r,null),n++)}),n}ot(e){let t=new Map;this.qe.forEach((r,n)=>{let i=this.Xe(n);if(i){if(r.current&&nD(i.target)){let t=new rw(i.target.path);this._t(t).has(n)||this.ut(n,t)||this.ze(n,t,nu.newNoDocument(t,e))}r.ve&&(t.set(n,r.Fe()),r.Me())}});let r=nZ();this.Ke.forEach((e,t)=>{let n=!0;t.forEachWhile(e=>{let t=this.Xe(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(n=!1,!1)}),n&&(r=r.add(e))}),this.Qe.forEach((t,r)=>r.setReadTime(e));let n=new iR(e,t,this.Ue,this.Qe,r);return this.Qe=nK,this.$e=iM(),this.Ke=iM(),this.Ue=new rN(ru),n}Ge(e,t){if(!this.Je(e))return;let r=2*!!this.ut(e,t.key);this.He(e).xe(t.key,r),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ke=this.Ke.insert(t.key,this.ct(t.key).add(e))}ze(e,t,r){if(!this.Je(e))return;let n=this.He(e);this.ut(e,t)?n.xe(t,1):n.Oe(t),this.Ke=this.Ke.insert(t,this.ct(t).delete(e)),this.Ke=this.Ke.insert(t,this.ct(t).add(e)),r&&(this.Qe=this.Qe.insert(t,r))}removeTarget(e){this.qe.delete(e)}et(e){let t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new iP,this.qe.set(e,t)),t}ct(e){let t=this.Ke.get(e);return t||(t=new rO(ru),this.Ke=this.Ke.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new rO(ru),this.$e=this.$e.insert(e,t)),t}Je(e){let t=null!==this.Xe(e);return t||t6("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){let t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new iP),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function iM(){return new rN(rw.comparator)}function iU(){return new rN(rw.comparator)}const iV={asc:"ASCENDING",desc:"DESCENDING"},iF={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},iB={and:"AND",or:"OR"};class ij{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function i$(e,t){return e.useProto3Json||null==t?t:{value:t}}function iq(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function iz(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function iH(e){return e||t4(),rd.fromTimestamp(function(e){let t=rF(e);return new rf(t.seconds,t.nanos)}(e))}function iK(e,t){return iG(e,t).canonicalString()}function iG(e,t){let r=new rm(["projects",e.projectId,"databases",e.database]).child("documents");return void 0===t?r:r.child(t)}function iW(e){let t=rm.fromString(e);return i6(t)||t4(),t}function iQ(e,t){return iK(e.databaseId,t.path)}function iJ(e,t){let r=iW(t);if(r.get(1)!==e.databaseId.projectId)throw new t9(t7.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+e.databaseId.projectId);if(r.get(3)!==e.databaseId.database)throw new t9(t7.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+e.databaseId.database);return new rw(iZ(r))}function iX(e,t){return iK(e.databaseId,t)}function iY(e){return new rm(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function iZ(e){return e.length>4&&"documents"===e.get(4)||t4(),e.popFirst(5)}function i0(e,t,r){return{name:iQ(e,t),fields:r.value.mapValue.fields}}function i1(e){return{fieldPath:e.canonicalString()}}function i2(e){return rv.fromServerFormat(e.fieldPath)}function i6(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i3{constructor(e,t,r,n,i=rd.min(),s=rd.min(),o=rU.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=n,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new i3(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new i3(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new i3(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new i3(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i5{constructor(e){this.Tt=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i8{constructor(){}At(e,t){this.Rt(e,t),t.Vt()}Rt(e,t){if("nullValue"in e)this.ft(t,5);else if("booleanValue"in e)this.ft(t,10),t.gt(+!!e.booleanValue);else if("integerValue"in e)this.ft(t,15),t.gt(rB(e.integerValue));else if("doubleValue"in e){let r=rB(e.doubleValue);isNaN(r)?this.ft(t,13):(this.ft(t,15),rC(r)?t.gt(0):t.gt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.ft(t,20),"string"==typeof r&&(r=rF(r)),t.yt(`${r.seconds||""}`),t.gt(r.nanos||0)}else if("stringValue"in e)this.wt(e.stringValue,t),this.St(t);else if("bytesValue"in e)this.ft(t,30),t.bt(rj(e.bytesValue)),this.St(t);else if("referenceValue"in e)this.Dt(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.ft(t,45),t.gt(r.latitude||0),t.gt(r.longitude||0)}else"mapValue"in e?nl(e)?this.ft(t,Number.MAX_SAFE_INTEGER):no(e)?this.vt(e.mapValue,t):(this.Ct(e.mapValue,t),this.St(t)):"arrayValue"in e?(this.Ft(e.arrayValue,t),this.St(t)):t4()}wt(e,t){this.ft(t,25),this.Mt(e,t)}Mt(e,t){t.yt(e)}Ct(e,t){let r=e.fields||{};for(let e of(this.ft(t,55),Object.keys(r)))this.wt(e,t),this.Rt(r[e],t)}vt(e,t){var r,n;let i=e.fields||{};this.ft(t,53);let s=(null===(n=null===(r=i[r2].arrayValue)||void 0===r?void 0:r.values)||void 0===n?void 0:n.length)||0;this.ft(t,15),t.gt(rB(s)),this.wt(r2,t),this.Rt(i[r2],t)}Ft(e,t){let r=e.values||[];for(let e of(this.ft(t,50),r))this.Rt(e,t)}Dt(e,t){this.ft(t,37),rw.fromName(e).path.forEach(e=>{this.ft(t,60),this.Mt(e,t)})}ft(e,t){e.gt(t)}St(e){e.gt(2)}}i8.xt=new i8;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i4{constructor(){this.Tn=new i7}addToCollectionParentIndex(e,t){return this.Tn.add(t),rI.resolve()}getCollectionParents(e,t){return rI.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return rI.resolve()}deleteFieldIndex(e,t){return rI.resolve()}deleteAllFieldIndexes(e){return rI.resolve()}createTargetIndexes(e,t){return rI.resolve()}getDocumentsMatchingTarget(e,t){return rI.resolve(null)}getIndexType(e,t){return rI.resolve(0)}getFieldIndexes(e,t){return rI.resolve([])}getNextCollectionGroupToUpdate(e){return rI.resolve(null)}getMinOffset(e,t){return rI.resolve(r_.min())}getMinOffsetFromCollectionGroup(e,t){return rI.resolve(r_.min())}updateCollectionGroup(e,t,r){return rI.resolve()}updateIndexEntries(e,t){return rI.resolve()}}class i7{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t]||new rO(rm.comparator),i=!n.has(r);return this.index[t]=n.add(r),i}has(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t];return n&&n.has(r)}getEntries(e){return(this.index[e]||new rO(rm.comparator)).toArray()}}new Uint8Array(0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i9={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class se{static withCacheSize(e){return new se(e,se.DEFAULT_COLLECTION_PERCENTILE,se.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */se.DEFAULT_COLLECTION_PERCENTILE=10,se.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,se.DEFAULT=new se(0x2800000,se.DEFAULT_COLLECTION_PERCENTILE,se.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),se.DISABLED=new se(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new st(0)}static Un(){return new st(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr="LruGarbageCollector";function sn([e,t],[r,n]){let i=ru(e,r);return 0===i?ru(t,n):i}class si{constructor(e){this.Hn=e,this.buffer=new rO(sn),this.Jn=0}Yn(){return++this.Jn}Zn(e){let t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{let e=this.buffer.last();0>sn(t,e)&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ss{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Xn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return null!==this.Xn}er(e){t6(sr,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){rT(e)?t6(sr,"Ignoring IndexedDB error during garbage collection: ",e):await rb(e)}await this.er(3e5)})}}class so{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return rI.resolve(rS.ae);let r=new si(t);return this.tr.forEachTarget(e,e=>r.Zn(e.sequenceNumber)).next(()=>this.tr.rr(e,e=>r.Zn(e))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.tr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return -1===this.params.cacheSizeCollectionThreshold?(t6("LruGarbageCollector","Garbage collection skipped; disabled"),rI.resolve(i9)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(t6("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),i9):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let r,n,i,s,o,a,h;let u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(t6("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),n=this.params.maximumSequenceNumbersToCollect):n=t,s=Date.now(),this.nthSequenceNumber(e,n))).next(n=>(r=n,o=Date.now(),this.removeTargets(e,r,t))).next(t=>(i=t,a=Date.now(),this.removeOrphanedDocuments(e,r))).next(e=>(h=Date.now(),t2()<=l.DEBUG&&t6("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${s-u}ms
	Determined least recently used ${n} in `+(o-s)+"ms\n"+`	Removed ${i} targets in `+(a-o)+"ms\n"+`	Removed ${e} documents in `+(h-a)+"ms\n"+`Total Duration: ${h-u}ms`),rI.resolve({didRun:!0,sequenceNumbersCollected:n,targetsRemoved:i,documentsRemoved:e})))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(){this.changes=new nH(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,nu.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return void 0!==r?rI.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,t,r,n){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=n}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(n=>(r=n,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==r&&ih(r.mutation,e,rL.empty(),rf.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,nZ()).next(()=>t))}getLocalViewOfDocuments(e,t,r=nZ()){let n=nJ();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,r).next(e=>{let t=nW();return e.forEach((e,r)=>{t=t.insert(e,r.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let r=nJ();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,nZ()))}populateOverlays(e,t,r){let n=[];return r.forEach(e=>{t.has(e)||n.push(e)}),this.documentOverlayCache.getOverlays(e,n).next(e=>{e.forEach((e,r)=>{t.set(e,r)})})}computeViews(e,t,r,n){let i=nK,s=nJ(),o=nJ();return t.forEach((e,t)=>{let o=r.get(t.key);n.has(t.key)&&(void 0===o||o.mutation instanceof id)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),ih(o.mutation,t,o.mutation.getFieldMask(),rf.now())):s.set(t.key,rL.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var r;return o.set(e,new sl(t,null!==(r=s.get(e))&&void 0!==r?r:null))}),o))}recalculateAndSaveOverlays(e,t){let r=nJ(),n=new rN((e,t)=>e-t),i=nZ();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let o=r.get(e)||rL.empty();o=i.applyToLocalView(s,o),r.set(e,o);let a=(n.get(i.batchId)||nZ()).add(e);n=n.insert(i.batchId,a)})}).next(()=>{let s=[],o=n.getReverseIterator();for(;o.hasNext();){let n=o.getNext(),a=n.key,l=n.value,h=nJ();l.forEach(e=>{if(!i.has(e)){let n=il(t.get(e),r.get(e));null!==n&&h.set(e,n),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,a,h))}return rI.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,r,n){return rw.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):nL(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,n):this.getDocumentsMatchingCollectionQuery(e,t,r,n)}getNextDocuments(e,t,r,n){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,n).next(i=>{let s=n-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,n-i.size):rI.resolve(nJ()),o=-1,a=i;return s.next(t=>rI.forEach(t,(t,r)=>(o<r.largestBatchId&&(o=r.largestBatchId),i.get(t)?rI.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{a=a.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,a,t,nZ())).next(e=>({batchId:o,changes:nQ(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new rw(t)).next(e=>{let t=nW();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,r,n){let i=t.collectionGroup,s=nW();return this.indexManager.getCollectionParents(e,i).next(o=>rI.forEach(o,o=>{let a=new nO(o.child(i),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,a,r,n).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r,n){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,n))).next(e=>{i.forEach((t,r)=>{let n=r.getKey();null===e.get(n)&&(e=e.insert(n,nu.newInvalidDocument(n)))});let r=nW();return e.forEach((e,n)=>{let s=i.get(e);void 0!==s&&ih(s.mutation,n,rL.empty(),rf.now()),nq(t,n)&&(r=r.insert(e,n))}),r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return rI.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,{id:t.id,version:t.version,createTime:iH(t.createTime)}),rI.resolve()}getNamedQuery(e,t){return rI.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,{name:t.name,query:function(e){let t=function(e){var t;let r,n=function(e){let t=iW(e);return 4===t.length?rm.emptyPath():iZ(t)}(e.parent),i=e.structuredQuery,s=i.from?i.from.length:0,o=null;if(s>0){1===s||t4();let e=i.from[0];e.allDescendants?o=e.collectionId:n=n.child(e.collectionId)}let a=[];i.where&&(a=function(e){var t;let r=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=i2(e.unaryFilter.field);return nm.create(t,"==",{doubleValue:NaN});case"IS_NULL":let r=i2(e.unaryFilter.field);return nm.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let n=i2(e.unaryFilter.field);return nm.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=i2(e.unaryFilter.field);return nm.create(i,"!=",{nullValue:"NULL_VALUE"});default:return t4()}}(t):void 0!==t.fieldFilter?nm.create(i2(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return t4()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?ny.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return t4()}}(t.compositeFilter.op)):t4()}(e);return r instanceof ny&&nw(t=r)&&nv(t)?r.getFilters():[r]}(i.where));let l=[];i.orderBy&&(l=i.orderBy.map(e=>new np(i2(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let h=null;i.limit&&(h=null==(r="object"==typeof(t=i.limit)?t.value:t)?null:r);let u=null;i.startAt&&(u=function(e){let t=!!e.before;return new nc(e.values||[],t)}(i.startAt));let c=null;return i.endAt&&(c=function(e){let t=!e.before;return new nc(e.values||[],t)}(i.endAt)),new nO(n,o,l,a,h,"F",u,c)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?nF(t,t.limit,"L"):t}(t.bundledQuery),readTime:iH(t.readTime)}),rI.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(){this.overlays=new rN(rw.comparator),this.Rr=new Map}getOverlay(e,t){return rI.resolve(this.overlays.get(t))}getOverlays(e,t){let r=nJ();return rI.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&r.set(t,e)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((r,n)=>{this.Et(e,t,n)}),rI.resolve()}removeOverlaysForBatchId(e,t,r){let n=this.Rr.get(r);return void 0!==n&&(n.forEach(e=>this.overlays=this.overlays.remove(e)),this.Rr.delete(r)),rI.resolve()}getOverlaysForCollection(e,t,r){let n=nJ(),i=t.length+1,s=new rw(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){let e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>r&&n.set(e.getKey(),e)}return rI.resolve(n)}getOverlaysForCollectionGroup(e,t,r,n){let i=new rN((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>r){let t=i.get(e.largestBatchId);null===t&&(t=nJ(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let o=nJ(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((e,t)=>o.set(e,t)),!(o.size()>=n)););return rI.resolve(o)}Et(e,t,r){let n=this.overlays.get(r.key);if(null!==n){let e=this.Rr.get(n.largestBatchId).delete(r.key);this.Rr.set(n.largestBatchId,e)}this.overlays=this.overlays.insert(r.key,new iE(t,r));let i=this.Rr.get(t);void 0===i&&(i=nZ(),this.Rr.set(t,i)),this.Rr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(){this.sessionToken=rU.EMPTY_BYTE_STRING}getSessionToken(e){return rI.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,rI.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(){this.Vr=new rO(sp.mr),this.gr=new rO(sp.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){let r=new sp(e,t);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.wr(new sp(e,t))}Sr(e,t){e.forEach(e=>this.removeReference(e,t))}br(e){let t=new rw(new rm([])),r=new sp(t,e),n=new sp(t,e+1),i=[];return this.gr.forEachInRange([r,n],e=>{this.wr(e),i.push(e.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){let t=new rw(new rm([])),r=new sp(t,e),n=new sp(t,e+1),i=nZ();return this.gr.forEachInRange([r,n],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new sp(e,0),r=this.Vr.firstAfterOrEqual(t);return null!==r&&e.isEqual(r.key)}}class sp{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return rw.comparator(e.key,t.key)||ru(e.Cr,t.Cr)}static pr(e,t){return ru(e.Cr,t.Cr)||rw.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new rO(sp.mr)}checkEmpty(e){return rI.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,r,n){let i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new iw(i,t,r,n);for(let t of(this.mutationQueue.push(s),n))this.Mr=this.Mr.add(new sp(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return rI.resolve(s)}lookupMutationBatch(e,t){return rI.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){let r=this.Nr(t+1),n=r<0?0:r;return rI.resolve(this.mutationQueue.length>n?this.mutationQueue[n]:null)}getHighestUnacknowledgedBatchId(){return rI.resolve(0===this.mutationQueue.length?-1:this.Fr-1)}getAllMutationBatches(e){return rI.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new sp(t,0),n=new sp(t,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,n],e=>{let t=this.Or(e.Cr);i.push(t)}),rI.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new rO(ru);return t.forEach(e=>{let t=new sp(e,0),n=new sp(e,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([t,n],e=>{r=r.add(e.Cr)})}),rI.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,n=r.length+1,i=r;rw.isDocumentKey(i)||(i=i.child(""));let s=new sp(new rw(i),0),o=new rO(ru);return this.Mr.forEachWhile(e=>{let t=e.key.path;return!!r.isPrefixOf(t)&&(t.length===n&&(o=o.add(e.Cr)),!0)},s),rI.resolve(this.Br(o))}Br(e){let t=[];return e.forEach(e=>{let r=this.Or(e);null!==r&&t.push(r)}),t}removeMutationBatch(e,t){0===this.Lr(t.batchId,"removed")||t4(),this.mutationQueue.shift();let r=this.Mr;return rI.forEach(t.mutations,n=>{let i=new sp(n.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,t){let r=new sp(t,0),n=this.Mr.firstAfterOrEqual(r);return rI.resolve(t.isEqual(n&&n.key))}performConsistencyCheck(e){return this.mutationQueue.length,rI.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Or(e){let t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e){this.kr=e,this.docs=new rN(rw.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,n=this.docs.get(r),i=n?n.size:0,s=this.kr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return rI.resolve(r?r.document.mutableCopy():nu.newInvalidDocument(t))}getEntries(e,t){let r=nK;return t.forEach(e=>{let t=this.docs.get(e);r=r.insert(e,t?t.document.mutableCopy():nu.newInvalidDocument(e))}),rI.resolve(r)}getDocumentsMatchingQuery(e,t,r,n){let i=nK,s=t.path,o=new rw(s.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){let{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let r=e.readTime.compareTo(t.readTime);return 0!==r?r:0!==(r=rw.comparator(e.documentKey,t.documentKey))?r:ru(e.largestBatchId,t.largestBatchId)}(new r_(o.readTime,o.key,-1),r)||(n.has(o.key)||nq(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return rI.resolve(i)}getAllFromCollectionGroup(e,t,r,n){t4()}qr(e,t){return rI.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new sy(this)}getSize(e){return rI.resolve(this.size)}}class sy extends sa{constructor(e){super(),this.Ir=e}applyChanges(e){let t=[];return this.changes.forEach((r,n)=>{n.isValidDocument()?t.push(this.Ir.addEntry(e,n)):this.Ir.removeEntry(r)}),rI.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e){this.persistence=e,this.Qr=new nH(e=>nN(e),nx),this.lastRemoteSnapshotVersion=rd.min(),this.highestTargetId=0,this.$r=0,this.Kr=new sd,this.targetCount=0,this.Ur=st.Kn()}forEachTarget(e,t){return this.Qr.forEach((e,r)=>t(r)),rI.resolve()}getLastRemoteSnapshotVersion(e){return rI.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return rI.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),rI.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.$r&&(this.$r=t),rI.resolve()}zn(e){this.Qr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Ur=new st(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,rI.resolve()}updateTargetData(e,t){return this.zn(t),rI.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Kr.br(t.targetId),this.targetCount-=1,rI.resolve()}removeTargets(e,t,r){let n=0,i=[];return this.Qr.forEach((s,o)=>{o.sequenceNumber<=t&&null===r.get(o.targetId)&&(this.Qr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),n++)}),rI.waitFor(i).next(()=>n)}getTargetCount(e){return rI.resolve(this.targetCount)}getTargetData(e,t){let r=this.Qr.get(t)||null;return rI.resolve(r)}addMatchingKeys(e,t,r){return this.Kr.yr(t,r),rI.resolve()}removeMatchingKeys(e,t,r){this.Kr.Sr(t,r);let n=this.persistence.referenceDelegate,i=[];return n&&t.forEach(t=>{i.push(n.markPotentiallyOrphaned(e,t))}),rI.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Kr.br(t),rI.resolve()}getMatchingKeysForTargetId(e,t){let r=this.Kr.vr(t);return rI.resolve(r)}containsKey(e,t){return rI.resolve(this.Kr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new rS(0),this.zr=!1,this.zr=!0,this.jr=new sf,this.referenceDelegate=e(this),this.Hr=new sv(this),this.indexManager=new i4,this.remoteDocumentCache=new sm(e=>this.referenceDelegate.Jr(e)),this.serializer=new i5(t),this.Yr=new su(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new sc,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Wr[e.toKey()];return r||(r=new sg(t,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,r){t6("MemoryPersistence","Starting transaction:",e);let n=new s_(this.Gr.next());return this.referenceDelegate.Zr(),r(n).next(e=>this.referenceDelegate.Xr(n).next(()=>e)).toPromise().then(e=>(n.raiseOnCommittedEvent(),e))}ei(e,t){return rI.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,t)))}}class s_ extends rE{constructor(e){super(),this.currentSequenceNumber=e}}class sE{constructor(e){this.persistence=e,this.ti=new sd,this.ni=null}static ri(e){return new sE(e)}get ii(){if(this.ni)return this.ni;throw t4()}addReference(e,t,r){return this.ti.addReference(r,t),this.ii.delete(r.toString()),rI.resolve()}removeReference(e,t,r){return this.ti.removeReference(r,t),this.ii.add(r.toString()),rI.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),rI.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(e=>this.ii.add(e.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.ii.add(e.toString()))}).next(()=>r.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return rI.forEach(this.ii,r=>{let n=rw.fromPath(r);return this.si(e,n).next(e=>{e||t.removeEntry(n,rd.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(e=>{e?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return rI.or([()=>rI.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class sb{constructor(e,t){this.persistence=e,this.oi=new nH(e=>(function(e){let t="";for(let r=0;r<e.length;r++)t.length>0&&(t+="\x01\x01"),t=function(e,t){let r=t,n=e.length;for(let t=0;t<n;t++){let n=e.charAt(t);switch(n){case"\0":r+="\x01\x10";break;case"\x01":r+="\x01\x11";break;default:r+=n}}return r}(e.get(r),t);return t+"\x01\x01"})(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=new so(this,t)}static ri(e,t){return new sb(e,t)}Zr(){}Xr(e){return rI.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){let t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}sr(e){let t=0;return this.rr(e,e=>{t++}).next(()=>t)}rr(e,t){return rI.forEach(this.oi,(r,n)=>this.ar(e,r,n).next(e=>e?rI.resolve():t(n)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0,n=this.persistence.getRemoteDocumentCache(),i=n.newChangeBuffer();return n.qr(e,n=>this.ar(e,n,t).next(e=>{e||(r++,i.removeEntry(n,rd.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),rI.resolve()}removeTarget(e,t){let r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),rI.resolve()}removeReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),rI.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),rI.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=function e(t){switch(r6(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let r=rG(t);return r?16+e(r):16;case 5:return 2*t.stringValue.length;case 6:return rj(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(t.arrayValue.values||[]).reduce((t,r)=>t+e(r),0);case 10:case 11:var n;let i;return n=t.mapValue,i=0,rk(n.fields,(t,r)=>{i+=t.length+e(r)}),i;default:throw t4()}}(e.data.value)),t}ar(e,t,r){return rI.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let e=this.oi.get(t);return rI.resolve(void 0!==e&&e>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e,t,r,n){this.targetId=e,this.fromCache=t,this.Hi=r,this.Ji=n}static Yi(e,t){let r=nZ(),n=nZ();for(let e of t.docChanges)switch(e.type){case 0:r=r.add(e.doc.key);break;case 1:n=n.add(e.doc.key)}return new sI(e,t.fromCache,r,n)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=!function(){var e;let t=null===(e=Z())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(A.process)}catch(e){return!1}}()&&navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")?8:function(e){let t=e.match(/Android ([\d.]+)/i);return Number(t?t[1].split(".").slice(0,2).join("."):"-1")}(es())>0?6:4}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,r,n){let i={result:null};return this.rs(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.ss(e,t,n,r).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let r=new sT;return this._s(e,t,r).next(n=>{if(i.result=n,this.Xi)return this.us(e,t,r,n.size)})}).next(()=>i.result)}us(e,t,r,n){return r.documentReadCount<this.es?(t2()<=l.DEBUG&&t6("QueryEngine","SDK will not create cache indexes for query:",n$(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),rI.resolve()):(t2()<=l.DEBUG&&t6("QueryEngine","Query:",n$(t),"scans",r.documentReadCount,"local documents and returns",n,"documents as results."),r.documentReadCount>this.ts*n?(t2()<=l.DEBUG&&t6("QueryEngine","The SDK decides to create cache indexes for query:",n$(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nU(t))):rI.resolve())}rs(e,t){if(nP(t))return rI.resolve(null);let r=nU(t);return this.indexManager.getIndexType(e,r).next(n=>0===n?null:(null!==t.limit&&1===n&&(r=nU(t=nF(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,r).next(n=>{let i=nZ(...n);return this.ns.getDocuments(e,i).next(n=>this.indexManager.getMinOffset(e,r).next(r=>{let s=this.cs(t,n);return this.ls(t,s,i,r.readTime)?this.rs(e,nF(t,null,"F")):this.hs(e,s,t,r)}))})))}ss(e,t,r,n){return nP(t)||n.isEqual(rd.min())?rI.resolve(null):this.ns.getDocuments(e,r).next(i=>{let s=this.cs(t,i);return this.ls(t,s,r,n)?rI.resolve(null):(t2()<=l.DEBUG&&t6("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),n$(t)),this.hs(e,s,t,function(e,t){let r=e.toTimestamp().seconds,n=e.toTimestamp().nanoseconds+1;return new r_(rd.fromTimestamp(1e9===n?new rf(r+1,0):new rf(r,n)),rw.empty(),-1)}(n,0)).next(e=>e))})}cs(e,t){let r=new rO(nz(e));return t.forEach((t,n)=>{nq(e,n)&&(r=r.add(n))}),r}ls(e,t,r,n){if(null===e.limit)return!1;if(r.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(n)>0)}_s(e,t,r){return t2()<=l.DEBUG&&t6("QueryEngine","Using full collection scan to execute query:",n$(t)),this.ns.getDocumentsMatchingQuery(e,t,r_.min(),r)}hs(e,t,r,n){return this.ns.getDocumentsMatchingQuery(e,r,n).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC="LocalStore";class sA{constructor(e,t,r,n){this.persistence=e,this.Ps=t,this.serializer=n,this.Ts=new rN(ru),this.Is=new nH(e=>nN(e),nx),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sh(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}async function sk(e,t){return await e.persistence.runTransaction("Handle user change","readonly",r=>{let n;return e.mutationQueue.getAllMutationBatches(r).next(i=>(n=i,e.As(t),e.mutationQueue.getAllMutationBatches(r))).next(t=>{let i=[],s=[],o=nZ();for(let e of n)for(let t of(i.push(e.batchId),e.mutations))o=o.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))o=o.add(t.key);return e.localDocuments.getDocuments(r,o).next(e=>({Rs:e,removedBatchIds:i,addedBatchIds:s}))})})}function sR(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}async function sN(e,t,r){let n=e.Ts.get(t);try{r||await e.persistence.runTransaction("Release target",r?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,n))}catch(e){if(!rT(e))throw e;t6(sC,`Failed to update sequence numbers for target ${t}: ${e}`)}e.Ts=e.Ts.remove(t),e.Is.delete(n.target)}function sx(e,t,r){let n=rd.min(),i=nZ();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,r){let n=e.Is.get(r);return void 0!==n?rI.resolve(e.Ts.get(n)):e.Hr.getTargetData(t,r)})(e,s,nU(t)).next(t=>{if(t)return n=t.lastLimboFreeSnapshotVersion,e.Hr.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.Ps.getDocumentsMatchingQuery(s,t,r?n:rd.min(),r?i:nZ())).next(r=>{var n,s,o;let a;return n=e,s=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),o=r,a=n.Es.get(s)||rd.min(),o.forEach((e,t)=>{t.readTime.compareTo(a)>0&&(a=t.readTime)}),n.Es.set(s,a),{documents:r,gs:i}}))}class sD{constructor(){this.activeTargetIds=n0}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}}class sO{constructor(){this.ho=new sD,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,r){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new sD,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sL="ConnectivityMonitor";class sM{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){for(let e of(t6(sL,"Network connectivity changed: AVAILABLE"),this.Vo))e(0)}Ro(){for(let e of(t6(sL,"Network connectivity changed: UNAVAILABLE"),this.Vo))e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sU=null;function sV(){return null===sU?sU=0x10000000+Math.round(0x80000000*Math.random()):sU++,"0x"+sU.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sF="RestConnection",sB={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class sj{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),n=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${r}/databases/${n}`,this.wo=this.databaseId.database===rJ?`project_id=${r}`:`project_id=${r}&database_id=${n}`}So(e,t,r,n,i){let s=sV(),o=this.bo(e,t.toUriEncodedString());t6(sF,`Sending RPC '${e}' ${s}:`,o,r);let a={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(a,n,i),this.vo(e,o,a,r).then(t=>(t6(sF,`Received RPC '${e}' ${s}: `,t),t),t=>{throw t5(sF,`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",r),t})}Co(e,t,r,n,i,s){return this.So(e,t,r,n,i)}Do(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+t0,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,r)=>e[r]=t),r&&r.headers.forEach((t,r)=>e[r]=t)}bo(e,t){let r=sB[e];return`${this.po}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s${constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sq="WebChannelConnection";class sz extends sj{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,n){let i=sV();return new Promise((s,o)=>{let a=new c;a.setWithCredentials(!0),a.listenOnce(d.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case p.NO_ERROR:let t=a.getResponseJson();t6(sq,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case p.TIMEOUT:t6(sq,`RPC '${e}' ${i} timed out`),o(new t9(t7.DEADLINE_EXCEEDED,"Request time out"));break;case p.HTTP_ERROR:let r=a.getStatus();if(t6(sq,`RPC '${e}' ${i} failed with status:`,r,"response text:",a.getResponseText()),r>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(t7).indexOf(t)>=0?t:t7.UNKNOWN}(t.status);o(new t9(e,t.message))}else o(new t9(t7.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new t9(t7.UNAVAILABLE,"Connection failed."));break;default:t4()}}finally{t6(sq,`RPC '${e}' ${i} completed.`)}});let l=JSON.stringify(n);t6(sq,`RPC '${e}' ${i} sending request:`,n),a.send(t,"POST",l,r,15)})}Wo(e,t,r){let n=sV(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=v(),o=y(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Do(a.initMessageHeaders,t,r),a.encodeInitMessageHeaders=!0;let h=i.join("");t6(sq,`Creating RPC '${e}' stream ${n}: ${h}`,a);let u=s.createWebChannel(h,a),c=!1,d=!1,p=new s$({Fo:t=>{d?t6(sq,`Not sending because RPC '${e}' stream ${n} is closed:`,t):(c||(t6(sq,`Opening RPC '${e}' stream ${n} transport.`),u.open(),c=!0),t6(sq,`RPC '${e}' stream ${n} sending:`,t),u.send(t))},Mo:()=>u.close()}),w=(e,t,r)=>{e.listen(t,e=>{try{r(e)}catch(e){setTimeout(()=>{throw e},0)}})};return w(u,f.EventType.OPEN,()=>{d||(t6(sq,`RPC '${e}' stream ${n} transport opened.`),p.Qo())}),w(u,f.EventType.CLOSE,()=>{d||(d=!0,t6(sq,`RPC '${e}' stream ${n} transport closed`),p.Ko())}),w(u,f.EventType.ERROR,t=>{d||(d=!0,t5(sq,`RPC '${e}' stream ${n} transport errored:`,t),p.Ko(new t9(t7.UNAVAILABLE,"The operation could not be completed")))}),w(u,f.EventType.MESSAGE,t=>{var r;if(!d){let i=t.data[0];i||t4();let s=(null==i?void 0:i.error)||(null===(r=i[0])||void 0===r?void 0:r.error);if(s){t6(sq,`RPC '${e}' stream ${n} received error:`,s);let t=s.status,r=function(e){let t=I[e];if(void 0!==t)return iI(t)}(t),i=s.message;void 0===r&&(r=t7.INTERNAL,i="Unknown error status: "+t+" with message "+s.message),d=!0,p.Ko(new t9(r,i)),u.close()}else t6(sq,`RPC '${e}' stream ${n} received:`,i),p.Uo(i)}}),w(o,m.STAT_EVENT,t=>{t.stat===g.PROXY?t6(sq,`RPC '${e}' stream ${n} detected buffering proxy`):t.stat===g.NOPROXY&&t6(sq,`RPC '${e}' stream ${n} detected no buffering proxy`)}),setTimeout(()=>{p.$o()},0),p}}function sH(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sK(e){return new ij(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sG{constructor(e,t,r=1e3,n=1.5,i=6e4){this.Ti=e,this.timerId=t,this.Go=r,this.zo=n,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();let t=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),n=Math.max(0,t-r);n>0&&t6("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,n,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){null!==this.Jo&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){null!==this.Jo&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sW="PersistentStream";class sQ{constructor(e,t,r,n,i,s,o,a){this.Ti=e,this.n_=r,this.r_=n,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new sG(e,t)}u_(){return 1===this.state||5===this.state||this.c_()}c_(){return 2===this.state||3===this.state}start(){this.__=0,4!==this.state?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&null===this.s_&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,4!==e?this.a_.reset():t&&t.code===t7.RESOURCE_EXHAUSTED?(t3(t.toString()),t3("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===t7.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;let e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,r])=>{this.i_===t&&this.V_(e,r)},t=>{e(()=>{let e=new t9(t7.UNKNOWN,"Fetching auth token failed: "+t.message);return this.m_(e)})})}V_(e,t){let r=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(e=>{r(()=>this.m_(e))}),this.stream.onMessage(e=>{r(()=>1==++this.__?this.g_(e):this.onNext(e))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return t6(sW,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(t6(sW,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sJ extends sQ{constructor(e,t,r,n,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,n,s),this.serializer=i}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();let t=function(e,t){let r;if("targetChange"in t){var n,i;t.targetChange;let s="NO_CHANGE"===(n=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===n?1:"REMOVE"===n?2:"CURRENT"===n?3:"RESET"===n?4:t4(),o=t.targetChange.targetIds||[],a=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||t4(),rU.fromBase64String(i||"")):(void 0===i||i instanceof ty||i instanceof Uint8Array||t4(),rU.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause;r=new iO(s,o,a,l&&new t9(void 0===l.code?t7.UNKNOWN:iI(l.code),l.message||"")||null)}else if("documentChange"in t){t.documentChange;let n=t.documentChange;n.document,n.document.name,n.document.updateTime;let i=iJ(e,n.document.name),s=iH(n.document.updateTime),o=n.document.createTime?iH(n.document.createTime):rd.min(),a=new nh({mapValue:{fields:n.document.fields}}),l=nu.newFoundDocument(i,s,o,a);r=new ix(n.targetIds||[],n.removedTargetIds||[],l.key,l)}else if("documentDelete"in t){t.documentDelete;let n=t.documentDelete;n.document;let i=iJ(e,n.document),s=n.readTime?iH(n.readTime):rd.min(),o=nu.newNoDocument(i,s);r=new ix([],n.removedTargetIds||[],o.key,o)}else if("documentRemove"in t){t.documentRemove;let n=t.documentRemove;n.document;let i=iJ(e,n.document);r=new ix([],n.removedTargetIds||[],i,null)}else{if(!("filter"in t))return t4();{t.filter;let e=t.filter;e.targetId;let{count:n=0,unchangedNames:i}=e,s=new ib(n,i);r=new iD(e.targetId,s)}}return r}(this.serializer,e),r=function(e){if(!("targetChange"in e))return rd.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?rd.min():t.readTime?iH(t.readTime):rd.min()}(e);return this.listener.p_(t,r)}y_(e){let t={};t.database=iY(this.serializer),t.addTarget=function(e,t){let r;let n=t.target;if((r=nD(n)?{documents:{documents:[iX(e,n.path)]}}:{query:function(e,t){var r,n;let i;let s={structuredQuery:{}},o=t.path;null!==t.collectionGroup?(i=o,s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=o.popLast(),s.structuredQuery.from=[{collectionId:o.lastSegment()}]),s.parent=iX(e,i);let a=function(e){if(0!==e.length)return function e(t){return t instanceof nm?function(e){if("=="===e.op){if(ni(e.value))return{unaryFilter:{field:i1(e.field),op:"IS_NAN"}};if(nn(e.value))return{unaryFilter:{field:i1(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(ni(e.value))return{unaryFilter:{field:i1(e.field),op:"IS_NOT_NAN"}};if(nn(e.value))return{unaryFilter:{field:i1(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:i1(e.field),op:iF[e.op],value:e.value}}}(t):t instanceof ny?function(t){let r=t.getFilters().map(t=>e(t));return 1===r.length?r[0]:{compositeFilter:{op:iB[t.op],filters:r}}}(t):t4()}(ny.create(e,"and"))}(t.filters);a&&(s.structuredQuery.where=a);let l=function(e){if(0!==e.length)return e.map(e=>({field:i1(e.field),direction:iV[e.dir]}))}(t.orderBy);l&&(s.structuredQuery.orderBy=l);let h=i$(e,t.limit);return null!==h&&(s.structuredQuery.limit=h),t.startAt&&(s.structuredQuery.startAt={before:(r=t.startAt).inclusive,values:r.position}),t.endAt&&(s.structuredQuery.endAt={before:!(n=t.endAt).inclusive,values:n.position}),{ht:s,parent:i}}(e,n).ht}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){r.resumeToken=iz(e,t.resumeToken);let n=i$(e,t.expectedCount);null!==n&&(r.expectedCount=n)}else if(t.snapshotVersion.compareTo(rd.min())>0){r.readTime=iq(e,t.snapshotVersion.toTimestamp());let n=i$(e,t.expectedCount);null!==n&&(r.expectedCount=n)}return r}(this.serializer,e);let r=function(e,t){let r=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return t4()}}(t.purpose);return null==r?null:{"goog-listen-tags":r}}(this.serializer,e);r&&(t.labels=r),this.I_(t)}w_(e){let t={};t.database=iY(this.serializer),t.removeTarget=e,this.I_(t)}}class sX extends sQ{constructor(e,t,r,n,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,n,s),this.serializer=i}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return e.streamToken||t4(),this.lastStreamToken=e.streamToken,e.writeResults&&0!==e.writeResults.length&&t4(),this.listener.D_()}onNext(e){var t,r;e.streamToken||t4(),this.lastStreamToken=e.streamToken,this.a_.reset();let n=(t=e.writeResults,r=e.commitTime,t&&t.length>0?(void 0!==r||t4(),t.map(e=>{let t;return(t=e.updateTime?iH(e.updateTime):iH(r)).isEqual(rd.min())&&(t=iH(r)),new ii(t,e.transformResults||[])})):[]),i=iH(e.commitTime);return this.listener.v_(i,n)}C_(){let e={};e.database=iY(this.serializer),this.I_(e)}b_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var r;let n;if(t instanceof ic)n={update:i0(e,t.key,t.value)};else if(t instanceof iy)n={delete:iQ(e,t.key)};else if(t instanceof id)n={update:i0(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof iv))return t4();n={verify:iQ(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let r=t.transform;if(r instanceof n5)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(r instanceof n8)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:r.elements}};if(r instanceof n7)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:r.elements}};if(r instanceof ie)return{fieldPath:t.field.canonicalString(),increment:r.Ie};throw t4()})(0,e))),t.precondition.isNone||(n.currentDocument=void 0!==(r=t.precondition).updateTime?{updateTime:iq(e,r.updateTime.toTimestamp())}:void 0!==r.exists?{exists:r.exists}:t4()),n})(this.serializer,e))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sY{}class sZ extends sY{constructor(e,t,r,n){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=n,this.F_=!1}M_(){if(this.F_)throw new t9(t7.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,r,n){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.So(e,iG(t,r),n,i,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===t7.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new t9(t7.UNKNOWN,e.toString())})}Co(e,t,r,n,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,iG(t,r),n,s,o,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===t7.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new t9(t7.UNKNOWN,e.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class s0{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){0===this.x_&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){"Online"===this.state?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,"Online"===e&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(t3(t),this.N_=!1):t6("OnlineStateTracker",t)}Q_(){null!==this.O_&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1="RemoteStore";class s2{constructor(e,t,r,n,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(e=>{r.enqueueAndForget(async()=>{ot(this)&&(t6(s1,"Restarting streams for network reachability change."),await async function(e){e.W_.add(4),await s3(e),e.j_.set("Unknown"),e.W_.delete(4),await s6(e)}(this))})}),this.j_=new s0(r,n)}}async function s6(e){if(ot(e))for(let t of e.G_)await t(!0)}async function s3(e){for(let t of e.G_)await t(!1)}function s5(e,t){e.U_.has(t.targetId)||(e.U_.set(t.targetId,t),oe(e)?s9(e):oy(e).c_()&&s4(e,t))}function s8(e,t){let r=oy(e);e.U_.delete(t),r.c_()&&s7(e,t),0===e.U_.size&&(r.c_()?r.P_():ot(e)&&e.j_.set("Unknown"))}function s4(e,t){if(e.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(rd.min())>0){let r=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(r)}oy(e).y_(t)}function s7(e,t){e.H_.Ne(t),oy(e).w_(t)}function s9(e){e.H_=new iL({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>e.U_.get(t)||null,it:()=>e.datastore.serializer.databaseId}),oy(e).start(),e.j_.B_()}function oe(e){return ot(e)&&!oy(e).u_()&&e.U_.size>0}function ot(e){return 0===e.W_.size}async function or(e){e.j_.set("Online")}async function on(e){e.U_.forEach((t,r)=>{s4(e,t)})}async function oi(e,t){e.H_=void 0,oe(e)?(e.j_.q_(t),s9(e)):e.j_.set("Unknown")}async function os(e,t,r){if(e.j_.set("Online"),t instanceof iO&&2===t.state&&t.cause)try{await async function(e,t){let r=t.cause;for(let n of t.targetIds)e.U_.has(n)&&(await e.remoteSyncer.rejectListen(n,r),e.U_.delete(n),e.H_.removeTarget(n))}(e,t)}catch(r){t6(s1,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await oo(e,r)}else if(t instanceof ix?e.H_.We(t):t instanceof iD?e.H_.Ze(t):e.H_.je(t),!r.isEqual(rd.min()))try{let t=await sR(e.localStore);r.compareTo(t)>=0&&await function(e,t){let r=e.H_.ot(t);return r.targetChanges.forEach((r,n)=>{if(r.resumeToken.approximateByteSize()>0){let i=e.U_.get(n);i&&e.U_.set(n,i.withResumeToken(r.resumeToken,t))}}),r.targetMismatches.forEach((t,r)=>{let n=e.U_.get(t);if(!n)return;e.U_.set(t,n.withResumeToken(rU.EMPTY_BYTE_STRING,n.snapshotVersion)),s7(e,t);let i=new i3(n.target,t,r,n.sequenceNumber);s4(e,i)}),e.remoteSyncer.applyRemoteEvent(r)}(e,r)}catch(t){t6(s1,"Failed to raise snapshot:",t),await oo(e,t)}}async function oo(e,t,r){if(!rT(t))throw t;e.W_.add(1),await s3(e),e.j_.set("Offline"),r||(r=()=>sR(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{t6(s1,"Retrying IndexedDB access"),await r(),e.W_.delete(1),await s6(e)})}function oa(e,t){return t().catch(r=>oo(e,r,t))}async function ol(e){var t;let r=ov(e),n=e.K_.length>0?e.K_[e.K_.length-1].batchId:-1;for(;ot(t=e)&&t.K_.length<10;)try{let t=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}(e.localStore,n);if(null===t){0===e.K_.length&&r.P_();break}n=t.batchId,function(e,t){e.K_.push(t);let r=ov(e);r.c_()&&r.S_&&r.b_(t.mutations)}(e,t)}catch(t){await oo(e,t)}oh(e)&&ou(e)}function oh(e){return ot(e)&&!ov(e).u_()&&e.K_.length>0}function ou(e){ov(e).start()}async function oc(e){ov(e).C_()}async function of(e){let t=ov(e);for(let r of e.K_)t.b_(r.mutations)}async function od(e,t,r){let n=e.K_.shift(),i=i_.from(n,t,r);await oa(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await ol(e)}async function op(e,t){t&&ov(e).S_&&await async function(e,t){var r;if(function(e){switch(e){case t7.OK:return t4();case t7.CANCELLED:case t7.UNKNOWN:case t7.DEADLINE_EXCEEDED:case t7.RESOURCE_EXHAUSTED:case t7.INTERNAL:case t7.UNAVAILABLE:case t7.UNAUTHENTICATED:return!1;case t7.INVALID_ARGUMENT:case t7.NOT_FOUND:case t7.ALREADY_EXISTS:case t7.PERMISSION_DENIED:case t7.FAILED_PRECONDITION:case t7.ABORTED:case t7.OUT_OF_RANGE:case t7.UNIMPLEMENTED:case t7.DATA_LOSS:return!0;default:return t4()}}(r=t.code)&&r!==t7.ABORTED){let r=e.K_.shift();ov(e).h_(),await oa(e,()=>e.remoteSyncer.rejectFailedWrite(r.batchId,t)),await ol(e)}}(e,t),oh(e)&&ou(e)}async function og(e,t){e.asyncQueue.verifyOperationInProgress(),t6(s1,"RemoteStore received new credentials");let r=ot(e);e.W_.add(3),await s3(e),r&&e.j_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.W_.delete(3),await s6(e)}async function om(e,t){t?(e.W_.delete(2),await s6(e)):t||(e.W_.add(2),await s3(e),e.j_.set("Unknown"))}function oy(e){var t,r,n;return e.J_||(e.J_=(t=e.datastore,r=e.asyncQueue,n={xo:or.bind(null,e),No:on.bind(null,e),Lo:oi.bind(null,e),p_:os.bind(null,e)},t.M_(),new sJ(r,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n)),e.G_.push(async t=>{t?(e.J_.h_(),oe(e)?s9(e):e.j_.set("Unknown")):(await e.J_.stop(),e.H_=void 0)})),e.J_}function ov(e){var t,r,n;return e.Y_||(e.Y_=(t=e.datastore,r=e.asyncQueue,n={xo:()=>Promise.resolve(),No:oc.bind(null,e),Lo:op.bind(null,e),D_:of.bind(null,e),v_:od.bind(null,e)},t.M_(),new sX(r,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n)),e.G_.push(async t=>{t?(e.Y_.h_(),await ol(e)):(await e.Y_.stop(),e.K_.length>0&&(t6(s1,`Stopping write stream with ${e.K_.length} pending writes`),e.K_=[]))})),e.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(e,t,r,n,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=n,this.removalCallback=i,this.deferred=new re,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,n,i){let s=new ow(e,t,Date.now()+r,n,i);return s.start(r),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new t9(t7.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function o_(e,t){if(t3("AsyncQueue",`${t}: ${e}`),rT(e))return new t9(t7.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{static emptySet(e){return new oE(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||rw.comparator(t.key,r.key):(e,t)=>rw.comparator(e.key,t.key),this.keyedMap=nW(),this.sortedSet=new rN(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof oE)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(!e.isEqual(n))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let r=new oE;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(){this.Z_=new rN(rw.comparator)}track(e){let t=e.doc.key,r=this.Z_.get(t);r?0!==e.type&&3===r.type?this.Z_=this.Z_.insert(t,e):3===e.type&&1!==r.type?this.Z_=this.Z_.insert(t,{type:r.type,doc:e.doc}):2===e.type&&2===r.type?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===r.type?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===r.type?this.Z_=this.Z_.remove(t):1===e.type&&2===r.type?this.Z_=this.Z_.insert(t,{type:1,doc:r.doc}):0===e.type&&1===r.type?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):t4():this.Z_=this.Z_.insert(t,e)}X_(){let e=[];return this.Z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class oI{constructor(e,t,r,n,i,s,o,a,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=n,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,n,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new oI(e,t,oE.emptySet(t),s,r,n,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&nB(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==r[e].type||!t[e].doc.isEqual(r[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class oS{constructor(){this.queries=oC(),this.onlineState="Unknown",this.ia=new Set}terminate(){!function(e,t){let r=e.queries;e.queries=oC(),r.forEach((e,r)=>{for(let e of r.ta)e.onError(t)})}(this,new t9(t7.ABORTED,"Firestore shutting down"))}}function oC(){return new nH(e=>nj(e),nB)}async function oA(e,t){let r=3,n=t.query,i=e.queries.get(n);i?!i.na()&&t.ra()&&(r=2):(i=new oT,r=+!t.ra());try{switch(r){case 0:i.ea=await e.onListen(n,!0);break;case 1:i.ea=await e.onListen(n,!1);break;case 2:await e.onFirstRemoteStoreListen(n)}}catch(r){let e=o_(r,`Initialization of query '${n$(t.query)}' failed`);return void t.onError(e)}e.queries.set(n,i),i.ta.push(t),t.sa(e.onlineState),i.ea&&t.oa(i.ea)&&ox(e)}async function ok(e,t){let r=t.query,n=3,i=e.queries.get(r);if(i){let e=i.ta.indexOf(t);e>=0&&(i.ta.splice(e,1),0===i.ta.length?n=+!t.ra():!i.na()&&t.ra()&&(n=2))}switch(n){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function oR(e,t){let r=!1;for(let n of t){let t=n.query,i=e.queries.get(t);if(i){for(let e of i.ta)e.oa(n)&&(r=!0);i.ea=n}}r&&ox(e)}function oN(e,t,r){let n=e.queries.get(t);if(n)for(let e of n.ta)e.onError(r);e.queries.delete(t)}function ox(e){e.ia.forEach(e=>{e.next()})}(C=S||(S={}))._a="default",C.Cache="cache";class oD{constructor(e,t,r){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){let t=[];for(let r of e.docChanges)3!==r.type&&t.push(r);e=new oI(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){return!(e.fromCache&&this.ra())||(!this.options.Ta||"Offline"===t)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}la(e){if(e.docChanges.length>0)return!0;let t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Pa(e){e=oI.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==S.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(e){this.key=e}}class oP{constructor(e){this.key=e}}class oL{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=nZ(),this.mutatedKeys=nZ(),this.ya=nz(e),this.wa=new oE(this.ya)}get Sa(){return this.fa}ba(e,t){let r=t?t.Da:new ob,n=t?t.wa:this.wa,i=t?t.mutatedKeys:this.mutatedKeys,s=n,o=!1,a="F"===this.query.limitType&&n.size===this.query.limit?n.last():null,l="L"===this.query.limitType&&n.size===this.query.limit?n.first():null;if(e.inorderTraversal((e,t)=>{let h=n.get(e),u=nq(this.query,t)?t:null,c=!!h&&this.mutatedKeys.has(h.key),f=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations),d=!1;h&&u?h.data.isEqual(u.data)?c!==f&&(r.track({type:3,doc:u}),d=!0):this.va(h,u)||(r.track({type:2,doc:u}),d=!0,(a&&this.ya(u,a)>0||l&&0>this.ya(u,l))&&(o=!0)):!h&&u?(r.track({type:0,doc:u}),d=!0):h&&!u&&(r.track({type:1,doc:h}),d=!0,(a||l)&&(o=!0)),d&&(u?(s=s.add(u),i=f?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),r.track({type:1,doc:e})}return{wa:s,Da:r,ls:o,mutatedKeys:i}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,n){let i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;let s=e.Da.X_();s.sort((e,t)=>(function(e,t){let r=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return t4()}};return r(e)-r(t)})(e.type,t.type)||this.ya(e.doc,t.doc)),this.Ca(r),n=null!=n&&n;let o=t&&!n?this.Fa():[],a=0===this.pa.size&&this.current&&!n?1:0,l=a!==this.ga;return(this.ga=a,0!==s.length||l)?{snapshot:new oI(this.query,e.wa,i,s,e.mutatedKeys,0===a,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:o}:{Ma:o}}sa(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({wa:this.wa,Da:new ob,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(e=>this.fa=this.fa.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.fa=this.fa.delete(e)),this.current=e.current)}Fa(){if(!this.current)return[];let e=this.pa;this.pa=nZ(),this.wa.forEach(e=>{this.xa(e.key)&&(this.pa=this.pa.add(e.key))});let t=[];return e.forEach(e=>{this.pa.has(e)||t.push(new oP(e))}),this.pa.forEach(r=>{e.has(r)||t.push(new oO(r))}),t}Oa(e){this.fa=e.gs,this.pa=nZ();let t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return oI.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,0===this.ga,this.hasCachedResults)}}const oM="SyncEngine";class oU{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class oV{constructor(e){this.key=e,this.Ba=!1}}class oF{constructor(e,t,r,n,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=n,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.La={},this.ka=new nH(e=>nj(e),nB),this.qa=new Map,this.Qa=new Set,this.$a=new rN(rw.comparator),this.Ka=new Map,this.Ua=new sd,this.Wa={},this.Ga=new Map,this.za=st.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return!0===this.ja}}async function oB(e,t,r=!0){let n;let i=o4(e),s=i.ka.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),n=s.view.Na()):n=await o$(i,t,r,!0),n}async function oj(e,t){let r=o4(e);await o$(r,t,!0,!1)}async function o$(e,t,r,n){var i,s;let o;let a=await (i=e.localStore,s=nU(t),i.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return i.Hr.getTargetData(e,s).next(r=>r?(t=r,rI.resolve(t)):i.Hr.allocateTargetId(e).next(r=>(t=new i3(s,r,"TargetPurposeListen",e.currentSequenceNumber),i.Hr.addTargetData(e,t).next(()=>t))))}).then(e=>{let t=i.Ts.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(i.Ts=i.Ts.insert(e.targetId,e),i.Is.set(s,e.targetId)),e})),l=a.targetId,h=e.sharedClientState.addLocalQueryTarget(l,r);return n&&(o=await oq(e,t,l,"current"===h,a.resumeToken)),e.isPrimaryClient&&r&&s5(e.remoteStore,a),o}async function oq(e,t,r,n,i){e.Ha=(t,r,n)=>(async function(e,t,r,n){let i=t.view.ba(r);i.ls&&(i=await sx(e.localStore,t.query,!1).then(({documents:e})=>t.view.ba(e,i)));let s=n&&n.targetChanges.get(t.targetId),o=n&&null!=n.targetMismatches.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s,o);return o2(e,t.targetId,a.Ma),a.snapshot})(e,t,r,n);let s=await sx(e.localStore,t,!0),o=new oL(t,s.gs),a=o.ba(s.documents),l=iN.createSynthesizedTargetChangeForCurrentChange(r,n&&"Offline"!==e.onlineState,i),h=o.applyChanges(a,e.isPrimaryClient,l);o2(e,r,h.Ma);let u=new oU(t,r,o);return e.ka.set(t,u),e.qa.has(r)?e.qa.get(r).push(t):e.qa.set(r,[t]),h.snapshot}async function oz(e,t,r){let n=e.ka.get(t),i=e.qa.get(n.targetId);if(i.length>1)return e.qa.set(n.targetId,i.filter(e=>!nB(e,t))),void e.ka.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(n.targetId),e.sharedClientState.isActiveQueryTarget(n.targetId)||await sN(e.localStore,n.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(n.targetId),r&&s8(e.remoteStore,n.targetId),o0(e,n.targetId)}).catch(rb)):(o0(e,n.targetId),await sN(e.localStore,n.targetId,!0))}async function oH(e,t){let r=e.ka.get(t),n=e.qa.get(r.targetId);e.isPrimaryClient&&1===n.length&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),s8(e.remoteStore,r.targetId))}async function oK(e,t,r){var n,i;let s=((n=e).remoteStore.remoteSyncer.applySuccessfulWrite=oJ.bind(null,n),n.remoteStore.remoteSyncer.rejectFailedWrite=oX.bind(null,n),n);try{let e;let n=await function(e,t){let r,n;let i=rf.now(),s=t.reduce((e,t)=>e.add(t.key),nZ());return e.persistence.runTransaction("Locally write mutations","readwrite",o=>{let a=nK,l=nZ();return e.ds.getEntries(o,s).next(e=>{(a=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(o,a)).next(n=>{r=n;let s=[];for(let e of t){let t=function(e,t){let r=null;for(let n of e.fieldTransforms){let e=t.data.field(n.field),i=n3(n.transform,e||null);null!=i&&(null===r&&(r=nh.empty()),r.set(n.field,i))}return r||null}(e,r.get(e.key).overlayedDocument);null!=t&&s.push(new id(e.key,t,function e(t){let r=[];return rk(t.fields,(t,n)=>{let i=new rv([t]);if(ns(n)){let t=e(n.mapValue).fields;if(0===t.length)r.push(i);else for(let e of t)r.push(i.child(e))}else r.push(i)}),new rL(r)}(t.value.mapValue),is.exists(!0)))}return e.mutationQueue.addMutationBatch(o,i,s,t)}).next(t=>{n=t;let i=t.applyToLocalDocumentSet(r,l);return e.documentOverlayCache.saveOverlays(o,t.batchId,i)})}).then(()=>({batchId:n.batchId,changes:nQ(r)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(n.batchId),i=n.batchId,(e=s.Wa[s.currentUser.toKey()])||(e=new rN(ru)),e=e.insert(i,r),s.Wa[s.currentUser.toKey()]=e,await o3(s,n.changes),await ol(s.remoteStore)}catch(t){let e=o_(t,"Failed to persist write");r.reject(e)}}async function oG(e,t){try{let r=await function(e,t){let r=t.snapshotVersion,n=e.Ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{var s,o,a;let l,h,u=e.ds.newChangeBuffer({trackRemovals:!0});n=e.Ts;let c=[];t.targetChanges.forEach((s,o)=>{var a;let l=n.get(o);if(!l)return;c.push(e.Hr.removeMatchingKeys(i,s.removedDocuments,o).next(()=>e.Hr.addMatchingKeys(i,s.addedDocuments,o)));let h=l.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(o)?h=h.withResumeToken(rU.EMPTY_BYTE_STRING,rd.min()).withLastLimboFreeSnapshotVersion(rd.min()):s.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(s.resumeToken,r)),n=n.insert(o,h),a=h,(0===l.resumeToken.approximateByteSize()||a.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&c.push(e.Hr.updateTargetData(i,h))});let f=nK,d=nZ();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(i,r))}),c.push((s=i,o=u,a=t.documentUpdates,l=nZ(),h=nZ(),a.forEach(e=>l=l.add(e)),o.getEntries(s,l).next(e=>{let t=nK;return a.forEach((r,n)=>{let i=e.get(r);n.isFoundDocument()!==i.isFoundDocument()&&(h=h.add(r)),n.isNoDocument()&&n.version.isEqual(rd.min())?(o.removeEntry(r,n.readTime),t=t.insert(r,n)):!i.isValidDocument()||n.version.compareTo(i.version)>0||0===n.version.compareTo(i.version)&&i.hasPendingWrites?(o.addEntry(n),t=t.insert(r,n)):t6(sC,"Ignoring outdated watch update for ",r,". Current version:",i.version," Watch version:",n.version)}),{Vs:t,fs:h}})).next(e=>{f=e.Vs,d=e.fs})),!r.isEqual(rd.min())){let t=e.Hr.getLastRemoteSnapshotVersion(i).next(t=>e.Hr.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(t)}return rI.waitFor(c).next(()=>u.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,f,d)).next(()=>f)}).then(t=>(e.Ts=n,t))}(e.localStore,t);t.targetChanges.forEach((t,r)=>{let n=e.Ka.get(r);n&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||t4(),t.addedDocuments.size>0?n.Ba=!0:t.modifiedDocuments.size>0?n.Ba||t4():t.removedDocuments.size>0&&(n.Ba||t4(),n.Ba=!1))}),await o3(e,r,t)}catch(e){await rb(e)}}function oW(e,t,r){var n;if(e.isPrimaryClient&&0===r||!e.isPrimaryClient&&1===r){let r;let i=[];e.ka.forEach((e,r)=>{let n=r.view.sa(t);n.snapshot&&i.push(n.snapshot)}),(n=e.eventManager).onlineState=t,r=!1,n.queries.forEach((e,n)=>{for(let e of n.ta)e.sa(t)&&(r=!0)}),r&&ox(n),i.length&&e.La.p_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function oQ(e,t,r){e.sharedClientState.updateQueryState(t,"rejected",r);let n=e.Ka.get(t),i=n&&n.key;if(i){let r=new rN(rw.comparator);r=r.insert(i,nu.newNoDocument(i,rd.min()));let n=nZ().add(i),s=new iR(rd.min(),new Map,new rN(ru),r,n);await oG(e,s),e.$a=e.$a.remove(i),e.Ka.delete(t),o6(e)}else await sN(e.localStore,t,!1).then(()=>o0(e,t,r)).catch(rb)}async function oJ(e,t){var r;let n=t.batch.batchId;try{let i=await (r=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let n=t.batch.keys(),i=r.ds.newChangeBuffer({trackRemovals:!0});return(function(e,t,r,n){let i=r.batch,s=i.keys(),o=rI.resolve();return s.forEach(e=>{o=o.next(()=>n.getEntry(t,e)).next(t=>{let s=r.docVersions.get(e);null!==s||t4(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,r),t.isValidDocument()&&(t.setReadTime(r.commitVersion),n.addEntry(t)))})}),o.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(r,e,t,i).next(()=>i.apply(e)).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t.batch.batchId)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=nZ();for(let r=0;r<e.mutationResults.length;++r)e.mutationResults[r].transformResults.length>0&&(t=t.add(e.batch.mutations[r].key));return t}(t))).next(()=>r.localDocuments.getDocuments(e,n))});oZ(e,n,null),oY(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await o3(e,i)}catch(e){await rb(e)}}async function oX(e,t,r){var n;try{let i=await (n=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||t4(),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))});oZ(e,t,r),oY(e,t),e.sharedClientState.updateMutationState(t,"rejected",r),await o3(e,i)}catch(e){await rb(e)}}function oY(e,t){(e.Ga.get(t)||[]).forEach(e=>{e.resolve()}),e.Ga.delete(t)}function oZ(e,t,r){let n=e.Wa[e.currentUser.toKey()];if(n){let i=n.get(t);i&&(r?i.reject(r):i.resolve(),n=n.remove(t)),e.Wa[e.currentUser.toKey()]=n}}function o0(e,t,r=null){for(let n of(e.sharedClientState.removeLocalQueryTarget(t),e.qa.get(t)))e.ka.delete(n),r&&e.La.Ja(n,r);e.qa.delete(t),e.isPrimaryClient&&e.Ua.br(t).forEach(t=>{e.Ua.containsKey(t)||o1(e,t)})}function o1(e,t){e.Qa.delete(t.path.canonicalString());let r=e.$a.get(t);null!==r&&(s8(e.remoteStore,r),e.$a=e.$a.remove(t),e.Ka.delete(r),o6(e))}function o2(e,t,r){for(let n of r)n instanceof oO?(e.Ua.addReference(n.key,t),function(e,t){let r=t.key,n=r.path.canonicalString();e.$a.get(r)||e.Qa.has(n)||(t6(oM,"New document in limbo: "+r),e.Qa.add(n),o6(e))}(e,n)):n instanceof oP?(t6(oM,"Document no longer in limbo: "+n.key),e.Ua.removeReference(n.key,t),e.Ua.containsKey(n.key)||o1(e,n.key)):t4()}function o6(e){for(;e.Qa.size>0&&e.$a.size<e.maxConcurrentLimboResolutions;){let t=e.Qa.values().next().value;e.Qa.delete(t);let r=new rw(rm.fromString(t)),n=e.za.next();e.Ka.set(n,new oV(r)),e.$a=e.$a.insert(r,n),s5(e.remoteStore,new i3(nU(new nO(r.path)),n,"TargetPurposeLimboResolution",rS.ae))}}async function o3(e,t,r){let n=[],i=[],s=[];e.ka.isEmpty()||(e.ka.forEach((o,a)=>{s.push(e.Ha(a,t,r).then(t=>{var s;if((t||r)&&e.isPrimaryClient){let n=t?!t.fromCache:null===(s=null==r?void 0:r.targetChanges.get(a.targetId))||void 0===s?void 0:s.current;e.sharedClientState.updateQueryState(a.targetId,n?"current":"not-current")}if(t){n.push(t);let e=sI.Yi(a.targetId,t);i.push(e)}}))}),await Promise.all(s),e.La.p_(n),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",r=>rI.forEach(t,t=>rI.forEach(t.Hi,n=>e.persistence.referenceDelegate.addReference(r,t.targetId,n)).next(()=>rI.forEach(t.Ji,n=>e.persistence.referenceDelegate.removeReference(r,t.targetId,n)))))}catch(e){if(!rT(e))throw e;t6(sC,"Failed to update sequence numbers: "+e)}for(let r of t){let t=r.targetId;if(!r.fromCache){let r=e.Ts.get(t),n=r.snapshotVersion,i=r.withLastLimboFreeSnapshotVersion(n);e.Ts=e.Ts.insert(t,i)}}}(e.localStore,i))}async function o5(e,t){var r;if(!e.currentUser.isEqual(t)){t6(oM,"User change. New user:",t.toKey());let n=await sk(e.localStore,t);e.currentUser=t,r="'waitForPendingWrites' promise is rejected due to a user change.",e.Ga.forEach(e=>{e.forEach(e=>{e.reject(new t9(t7.CANCELLED,r))})}),e.Ga.clear(),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await o3(e,n.Rs)}}function o8(e,t){let r=e.Ka.get(t);if(r&&r.Ba)return nZ().add(r.key);{let r=nZ(),n=e.qa.get(t);if(!n)return r;for(let t of n){let n=e.ka.get(t);r=r.unionWith(n.view.Sa)}return r}}function o4(e){return e.remoteStore.remoteSyncer.applyRemoteEvent=oG.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=o8.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=oQ.bind(null,e),e.La.p_=oR.bind(null,e.eventManager),e.La.Ja=oN.bind(null,e.eventManager),e}class o7{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=sK(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){var t,r;return t=this.persistence,r=new sS,new sA(t,r,e.initialUser,this.serializer)}Xa(e){return new sw(sE.ri,this.serializer)}Za(e){return new sO}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}o7.provider={build:()=>new o7};class o9 extends o7{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){return this.persistence.referenceDelegate instanceof sb||t4(),new ss(this.persistence.referenceDelegate.garbageCollector,e.asyncQueue,t)}Xa(e){let t=void 0!==this.cacheSizeBytes?se.withCacheSize(this.cacheSizeBytes):se.DEFAULT;return new sw(e=>sb.ri(e,t),this.serializer)}}class ae{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>oW(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=o5.bind(null,this.syncEngine),await om(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new oS}createDatastore(e){var t;let r=sK(e.databaseInfo.databaseId),n=new sz(e.databaseInfo);return t=e.authCredentials,new sZ(t,e.appCheckCredentials,n,r)}createRemoteStore(e){var t,r;return t=this.localStore,r=this.datastore,new s2(t,r,e.asyncQueue,e=>oW(this.syncEngine,e,0),sM.D()?new sM:new sP)}createSyncEngine(e,t){return function(e,t,r,n,i,s,o){let a=new oF(e,t,r,n,i,s);return o&&(a.ja=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){t6(s1,"RemoteStore shutting down."),e.W_.add(5),await s3(e),e.z_.shutdown(),e.j_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}ae.provider={build:()=>new ae};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):t3("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar="FirestoreClient";class an{constructor(e,t,r,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=n,this.user=tZ.UNAUTHENTICATED,this.clientId=rh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async e=>{t6(ar,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(r,e=>(t6(ar,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new re;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(r){let t=o_(r,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function ai(e,t){e.asyncQueue.verifyOperationInProgress(),t6(ar,"Initializing OfflineComponentProvider");let r=e.configuration;await t.initialize(r);let n=r.initialUser;e.setCredentialChangeListener(async e=>{n.isEqual(e)||(await sk(t.localStore,e),n=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function as(e,t){e.asyncQueue.verifyOperationInProgress();let r=await ao(e);t6(ar,"Initializing OnlineComponentProvider"),await t.initialize(r,e.configuration),e.setCredentialChangeListener(e=>og(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,r)=>og(t.remoteStore,r)),e._onlineComponents=t}async function ao(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){t6(ar,"Using user provided OfflineComponentProvider");try{await ai(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===t7.FAILED_PRECONDITION||t.code===t7.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;t5("Error using user provided cache. Falling back to memory cache: "+t),await ai(e,new o7)}}else t6(ar,"Using default OfflineComponentProvider"),await ai(e,new o9(void 0))}return e._offlineComponents}async function aa(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(t6(ar,"Using user provided OnlineComponentProvider"),await as(e,e._uninitializedComponentsProvider._online)):(t6(ar,"Using default OnlineComponentProvider"),await as(e,new ae))),e._onlineComponents}async function al(e){let t=await aa(e),r=t.eventManager;return r.onListen=oB.bind(null,t.syncEngine),r.onUnlisten=oz.bind(null,t.syncEngine),r.onFirstRemoteStoreListen=oj.bind(null,t.syncEngine),r.onLastRemoteStoreUnlisten=oH.bind(null,t.syncEngine),r}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ah(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(e,t,r){if(!r)throw new t9(t7.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function af(e){if(!rw.isDocumentKey(e))throw new t9(t7.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ad(e){if(rw.isDocumentKey(e))throw new t9(t7.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ap(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let r=(t=e).constructor?t.constructor.name:null;return r?`a custom ${r} object`:"an object"}}return"function"==typeof e?"a function":t4()}function ag(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new t9(t7.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let r=ap(e);throw new t9(t7.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${r}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am="firestore.googleapis.com";class ay{constructor(e){var t,r;if(void 0===e.host){if(void 0!==e.ssl)throw new t9(t7.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=am,this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=0x2800000;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new t9(t7.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,r,n){if(!0===t&&!0===n)throw new t9(t7.INVALID_ARGUMENT,`${e} and ${r} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ah(null!==(r=e.experimentalLongPollingOptions)&&void 0!==r?r:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new t9(t7.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new t9(t7.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new t9(t7.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,r;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,t.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class av{constructor(e,t,r,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ay({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new t9(t7.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new t9(t7.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ay(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new rr;switch(e.type){case"firstParty":return new ro(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new t9(t7.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=au.get(e);t&&(t6("ComponentProvider","Removing Datastore"),au.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new aw(this.firestore,e,this._query)}}class a_{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new aE(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new a_(this.firestore,e,this._key)}}class aE extends aw{constructor(e,t,r){super(e,t,new nO(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new a_(this.firestore,null,new rw(e))}withConverter(e){return new aE(this.firestore,e,this._path)}}function ab(e,t,...r){if(e=em(e),ac("collection","path",t),e instanceof av){let n=rm.fromString(t,...r);return ad(n),new aE(e,null,n)}{if(!(e instanceof a_||e instanceof aE))throw new t9(t7.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(rm.fromString(t,...r));return ad(n),new aE(e.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI="AsyncQueue";class aT{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new sG(this,"async_queue_retry"),this.Su=()=>{let e=sH();e&&t6(aI,"Visibility state changed to "+e.visibilityState),this.a_.t_()},this.bu=e;let t=sH();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;let t=sH();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});let t=new re;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(0!==this.Vu.length){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!rT(e))throw e;t6(aI,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){let t=this.bu.then(()=>(this.pu=!0,e().catch(e=>{let t;throw this.gu=e,this.pu=!1,t3("INTERNAL UNHANDLED ERROR: ",(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t)),e}).then(e=>(this.pu=!1,e))));return this.bu=t,t}enqueueAfterDelay(e,t,r){this.Du(),this.wu.indexOf(e)>-1&&(t=0);let n=ow.createAndSchedule(this,e,t,r,e=>this.Fu(e));return this.fu.push(n),n}Du(){this.gu&&t4()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(let t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{for(let t of(this.fu.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.fu))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){let t=this.fu.indexOf(e);this.fu.splice(t,1)}}class aS extends av{constructor(e,t,r,n){super(e,t,r,n),this.type="firestore",this._queue=new aT,this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new aT(e),this._firestoreClient=void 0,await e}}}function aC(e){if(e._terminated)throw new t9(t7.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){var t,r,n,i,s;let o=e._freezeSettings(),a=(i=e._databaseId,s=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",new rQ(i,s,e._persistenceKey,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,ah(o.experimentalLongPollingOptions),o.useFetchStreams));e._componentsProvider||(null===(r=o.localCache)||void 0===r?void 0:r._offlineComponentProvider)&&(null===(n=o.localCache)||void 0===n?void 0:n._onlineComponentProvider)&&(e._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),e._firestoreClient=new an(e._authCredentials,e._appCheckCredentials,e._queue,a,e._componentsProvider&&function(e){let t=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(t),_online:t}}(e._componentsProvider))}(e),e._firestoreClient}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e){this._byteString=e}static fromBase64String(e){try{return new aA(rU.fromBase64String(e))}catch(e){throw new t9(t7.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new aA(rU.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new t9(t7.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rv(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new t9(t7.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new t9(t7.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ru(this._lat,e._lat)||ru(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;++r)if(e[r]!==t[r])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aD=/^__.*__$/;class aO{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return null!==this.fieldMask?new id(e,this.data,this.fieldMask,t,this.fieldTransforms):new ic(e,this.data,t,this.fieldTransforms)}}function aP(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw t4()}}class aL{constructor(e,t,r,n,i,s){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=n,void 0===i&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new aL(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;let r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.ku({path:r,Qu:!1});return n.$u(e),n}Ku(e){var t;let r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.ku({path:r,Qu:!1});return n.Bu(),n}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return az(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(0===e.length)throw this.Wu("Document fields must not be empty");if(aP(this.Lu)&&aD.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class aM{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||sK(e)}ju(e,t,r,n=!1){return new aL({Lu:e,methodName:t,zu:r,path:rv.emptyPath(),Qu:!1,Gu:n},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function aU(e){let t=e._freezeSettings(),r=sK(e._databaseId);return new aM(e._databaseId,!!t.ignoreUndefinedProperties,r)}function aV(e,t){if(aB(e=em(e)))return aj("Unsupported field value:",t,e),aF(e,t);if(e instanceof aR)return function(e,t){if(!aP(t.Lu))throw t.Wu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Wu(`${e._methodName}() is not currently supported inside arrays`);let r=e._toFieldTransform(t);r&&t.fieldTransforms.push(r)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Qu&&4!==t.Lu)throw t.Wu("Nested arrays are not supported");return function(e,t){let r=[],n=0;for(let i of e){let e=aV(i,t.Uu(n));null==e&&(e={nullValue:"NULL_VALUE"}),r.push(e),n++}return{arrayValue:{values:r}}}(e,t)}return function(e,t){var r,n,i;if(null===(e=em(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return r=t.serializer,"number"==typeof(i=n=e)&&Number.isInteger(i)&&!rC(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?n2(n):n1(r,n);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let r=rf.fromDate(e);return{timestampValue:iq(t.serializer,r)}}if(e instanceof rf){let r=new rf(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:iq(t.serializer,r)}}if(e instanceof aN)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof aA)return{bytesValue:iz(t.serializer,e._byteString)};if(e instanceof a_){let r=t.databaseId,n=e.firestore._databaseId;if(!n.isEqual(r))throw t.Wu(`Document reference is for database ${n.projectId}/${n.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:iK(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof ax)return{mapValue:{fields:{[rY]:{stringValue:r1},[r2]:{arrayValue:{values:e.toArray().map(e=>{if("number"!=typeof e)throw t.Wu("VectorValues must only contain numeric values.");return n1(t.serializer,e)})}}}}};throw t.Wu(`Unsupported field value: ${ap(e)}`)}(e,t)}function aF(e,t){let r={};return rR(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):rk(e,(e,n)=>{let i=aV(n,t.qu(e));null!=i&&(r[e]=i)}),{mapValue:{fields:r}}}function aB(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof rf||e instanceof aN||e instanceof aA||e instanceof a_||e instanceof aR||e instanceof ax)}function aj(e,t,r){if(!aB(r)||"object"!=typeof r||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r)){let n=ap(r);throw"an object"===n?t.Wu(e+" a custom object"):t.Wu(e+" "+n)}}const a$=RegExp("[~\\*/\\[\\]]");function aq(e,t,r){if(t.search(a$)>=0)throw az(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,r);try{return new ak(...t.split("."))._internalPath}catch(n){throw az(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,r)}}function az(e,t,r,n,i){let s=n&&!n.isEmpty(),o=void 0!==i,a=`Function ${t}() called with invalid data`;r&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${n}`),o&&(l+=` in document ${i}`),l+=")"),new t9(t7.INVALID_ARGUMENT,a+e+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aH{constructor(e,t,r,n,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=n,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new a_(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new aK(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(aG("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class aK extends aH{data(){return super.data()}}function aG(e,t){return"string"==typeof t?aq(e,t):t instanceof ak?t._internalPath:t._delegate._internalPath}class aW{}class aQ extends aW{}class aJ extends aQ{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new aJ(e,t,r)}_apply(e){let t=this._parse(e);return a0(e._query,t),new aw(e.firestore,e.converter,nV(e._query,t))}_parse(e){let t=aU(e.firestore);return function(e,t,r,n,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new t9(t7.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){aZ(o,s);let t=[];for(let r of o)t.push(aY(n,e,r));a={arrayValue:{values:t}}}else a=aY(n,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||aZ(o,s),a=function(e,t,r,n=!1){return aV(r,e.ju(n?4:3,t))}(r,t,o,"in"===s||"not-in"===s);return nm.create(i,s,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class aX extends aW{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new aX(e,t)}_parse(e){let t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:ny.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let r=e;for(let e of t.getFlattenedFilters())a0(r,e),r=nV(r,e)}(e._query,t),new aw(e.firestore,e.converter,nV(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function aY(e,t,r){if("string"==typeof(r=em(r))){if(""===r)throw new t9(t7.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!nL(t)&&-1!==r.indexOf("/"))throw new t9(t7.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${r}' contains a '/' character.`);let n=t.path.child(rm.fromString(r));if(!rw.isDocumentKey(n))throw new t9(t7.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return ne(e,new rw(n))}if(r instanceof a_)return ne(e,r._key);throw new t9(t7.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ap(r)}.`)}function aZ(e,t){if(!Array.isArray(e)||0===e.length)throw new t9(t7.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function a0(e,t){let r=function(e,t){for(let r of e)for(let e of r.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==r)throw r===t.op?new t9(t7.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new t9(t7.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${r.toString()}' filters.`)}class a1{convertValue(e,t="none"){switch(r6(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rB(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(rj(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw t4()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return rk(e,(e,n)=>{r[e]=this.convertValue(n,t)}),r}convertVectorValue(e){var t,r,n;return new ax(null===(n=null===(r=null===(t=e.fields)||void 0===t?void 0:t[r2].arrayValue)||void 0===r?void 0:r.values)||void 0===n?void 0:n.map(e=>rB(e.doubleValue)))}convertGeoPoint(e){return new aN(rB(e.latitude),rB(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=rG(e);return null==r?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(rW(e));default:return null}}convertTimestamp(e){let t=rF(e);return new rf(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=rm.fromString(e);i6(r)||t4();let n=new rX(r.get(1),r.get(3)),i=new rw(r.popFirst(5));return n.isEqual(t)||t3(`Document ${i} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class a6 extends aH{constructor(e,t,r,n,i,s){super(e,t,r,n,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new a3(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(aG("DocumentSnapshot.get",e));if(null!==r)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class a3 extends a6{data(e={}){return super.data(e)}}class a5{constructor(e,t,r,n){this._firestore=e,this._userDataWriter=t,this._snapshot=n,this.metadata=new a2(n.hasPendingWrites,n.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new a3(this._firestore,this._userDataWriter,r.key,r,new a2(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new t9(t7.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(r=>{let n=new a3(e._firestore,e._userDataWriter,r.doc.key,r.doc,new a2(e._snapshot.mutatedKeys.has(r.doc.key),e._snapshot.fromCache),e.query.converter);return r.doc,{type:"added",doc:n,oldIndex:-1,newIndex:t++}})}{let r=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let n=new a3(e._firestore,e._userDataWriter,t.doc.key,t.doc,new a2(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=r.indexOf(t.doc.key),r=r.delete(t.doc.key)),1!==t.type&&(s=(r=r.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return t4()}}(t.type),doc:n,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}class a8 extends a1{constructor(e){super(),this.firestore=e}convertBytes(e){return new aA(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new a_(this.firestore,null,t)}}function a4(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r}function a7(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}new WeakMap,function(e=!0){t0=e1,eJ(new ey("firestore",(t,{instanceIdentifier:r,options:n})=>{let i=t.getProvider("app").getImmediate(),s=new aS(new ri(t.getProvider("auth-internal")),new rl(i,t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new t9(t7.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new rX(e.options.projectId,t)}(i,r),i);return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),e3(tX,tY,void 0),e3(tX,tY,"esm2017")}(),"function"==typeof SuppressedError&&SuppressedError;const a9=new ea("auth","Firebase",a7()),le=new eC("@firebase/auth");function lt(e,...t){le.logLevel<=l.ERROR&&le.error(`Auth (${e1}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(e,...t){throw lo(e,...t)}function ln(e,...t){return lo(e,...t)}function li(e,t,r){return new ea("auth","Firebase",Object.assign(Object.assign({},a7()),{[t]:r})).create(t,{appName:e.name})}function ls(e){return li(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function lo(e,...t){if("string"!=typeof e){let r=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(r,...n)}return a9.create(e,...t)}function la(e,t,...r){if(!e)throw lo(t,...r)}function ll(e){let t="INTERNAL ASSERTION FAILED: "+e;throw lt(t),Error(t)}function lh(e,t){e||ll(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function lc(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e,t){var r;this.shortDelay=e,this.longDelay=t,r="Short delay should be less than long delay!",t>e||ll(r),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(es())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===lc()||"https:"===lc()||function(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(e,t){var r,n;r=e.emulator,n="Emulator should always be set here",r||ll(n);let{url:i}=e.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void ll("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void ll("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void ll("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},lm=new lf(3e4,6e4);function ly(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function lv(e,t,r,n,i={}){return lw(e,i,async()=>{let i={},s={};n&&("GET"===t?s=n:i={body:JSON.stringify(n)});let o=ec(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode);let l=Object.assign({method:t,headers:a},i);return("undefined"==typeof navigator||"Cloudflare-Workers"!==navigator.userAgent)&&(l.referrerPolicy="no-referrer"),lp.fetch()(lE(e,e.config.apiHost,r,o),l)})}async function lw(e,t,r){e._canInitEmulator=!1;let n=Object.assign(Object.assign({},lg),t);try{let t=new lb(e),i=await Promise.race([r(),t.promise]);t.clearNetworkTimeout();let s=await i.json();if("needConfirmation"in s)throw lI(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{let[t,r]=(i.ok?s.errorMessage:s.error.message).split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===t)throw lI(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===t)throw lI(e,"email-already-in-use",s);if("USER_DISABLED"===t)throw lI(e,"user-disabled",s);let o=n[t]||t.toLowerCase().replace(/[_\s]+/g,"-");if(r)throw li(e,o,r);lr(e,o)}}catch(t){if(t instanceof eo)throw t;lr(e,"network-request-failed",{message:String(t)})}}async function l_(e,t,r,n,i={}){let s=await lv(e,t,r,n,i);return"mfaPendingCredential"in s&&lr(e,"multi-factor-auth-required",{_serverResponse:s}),s}function lE(e,t,r,n){let i=`${t}${r}?${n}`;return e.config.emulator?ld(e.config,i):`${e.config.apiScheme}://${i}`}class lb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(ln(this.auth,"network-request-failed")),lm.get())})}}function lI(e,t,r){let n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);let i=ln(e,t,n);return i.customData._tokenResponse=r,i}function lT(e){return void 0!==e&&void 0!==e.enterprise}class lS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return function(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function lC(e,t){return lv(e,"GET","/v2/recaptchaConfig",ly(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lA(e,t){return lv(e,"POST","/v1/accounts:delete",t)}async function lk(e,t){return lv(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lR(e){if(e)try{let t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}async function lN(e,t=!1){let r=em(e),n=await r.getIdToken(t),i=lD(n);la(i&&i.exp&&i.auth_time&&i.iat,r.auth,"internal-error");let s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:n,authTime:lR(lx(i.auth_time)),issuedAtTime:lR(lx(i.iat)),expirationTime:lR(lx(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}function lx(e){return 1e3*Number(e)}function lD(e){let[t,r,n]=e.split(".");if(void 0===t||void 0===r||void 0===n)return lt("JWT malformed, contained fewer than 3 sections"),null;try{let e=Q(r);if(!e)return lt("Failed to decode base64 JWT payload"),null;return JSON.parse(e)}catch(e){return lt("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function lO(e){let t=lD(e);return la(t,"internal-error"),la(void 0!==t.exp,"internal-error"),la(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lP(e,t,r=!1){if(r)return t;try{return await t}catch(t){throw t instanceof eo&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lL{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(!e)return this.errorBackoff=3e4,Math.max(0,(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5);{let e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(null==e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lM{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=lR(this.lastLoginAt),this.creationTime=lR(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lU(e){var t,r,n;let i=e.auth,s=await e.getIdToken(),o=await lP(e,lk(i,{idToken:s}));la(null==o?void 0:o.users.length,i,"internal-error");let a=o.users[0];e._notifyReloadListener(a);let l=(null===(t=a.providerUserInfo)||void 0===t?void 0:t.length)?lF(a.providerUserInfo):[],h=(r=e.providerData,n=l,[...r.filter(e=>!n.some(t=>t.providerId===e.providerId)),...n]),u=e.isAnonymous,c=!(e.email&&a.passwordHash)&&!(null==h?void 0:h.length);Object.assign(e,{uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:h,metadata:new lM(a.createdAt,a.lastLoginAt),isAnonymous:!!u&&c})}async function lV(e){let t=em(e);await lU(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function lF(e){return e.map(e=>{var{providerId:t}=e,r=a4(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lB(e,t){let r=await lw(e,{},async()=>{let r=ec({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:i}=e.config,s=lE(e,n,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",lp.fetch()(s,{method:"POST",headers:o,body:r})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function lj(e,t){return lv(e,"POST","/v2/accounts:revokeToken",ly(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l${constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){la(e.idToken,"internal-error"),la(void 0!==e.idToken,"internal-error"),la(void 0!==e.refreshToken,"internal-error");let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):lO(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){la(0!==e.length,"internal-error");let t=lO(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(la(this.refreshToken,e,"user-token-expired"),this.refreshToken)?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:n,expiresIn:i}=await lB(e,t);this.updateTokensAndExpiration(r,n,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}static fromJSON(e,t){let{refreshToken:r,accessToken:n,expirationTime:i}=t,s=new l$;return r&&(la("string"==typeof r,"internal-error",{appName:e}),s.refreshToken=r),n&&(la("string"==typeof n,"internal-error",{appName:e}),s.accessToken=n),i&&(la("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new l$,this.toJSON())}_performRefresh(){return ll("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lq(e,t){la("string"==typeof e||void 0===e,"internal-error",{appName:t})}class lz{constructor(e){var{uid:t,auth:r,stsTokenManager:n}=e,i=a4(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lL(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new lM(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){let t=await lP(this,this.stsTokenManager.getToken(this.auth,e));return la(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return lN(this,e)}reload(){return lV(this)}_assign(e){this!==e&&(la(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new lz(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){la(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await lU(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(eY(this.auth.app))return Promise.reject(ls(this.auth));let e=await this.getIdToken();return await lP(this,lA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,n,i,s,o,a,l,h;let u=null!==(r=t.displayName)&&void 0!==r?r:void 0,c=null!==(n=t.email)&&void 0!==n?n:void 0,f=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,d=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(h=t.lastLoginAt)&&void 0!==h?h:void 0,{uid:v,emailVerified:w,isAnonymous:_,providerData:E,stsTokenManager:b}=t;la(v&&b,e,"internal-error");let I=l$.fromJSON(this.name,b);la("string"==typeof v,e,"internal-error"),lq(u,e.name),lq(c,e.name),la("boolean"==typeof w,e,"internal-error"),la("boolean"==typeof _,e,"internal-error"),lq(f,e.name),lq(d,e.name),lq(p,e.name),lq(g,e.name),lq(m,e.name),lq(y,e.name);let T=new lz({uid:v,auth:e,email:c,emailVerified:w,displayName:u,isAnonymous:_,photoURL:d,phoneNumber:f,tenantId:p,stsTokenManager:I,createdAt:m,lastLoginAt:y});return E&&Array.isArray(E)&&(T.providerData=E.map(e=>Object.assign({},e))),g&&(T._redirectEventId=g),T}static async _fromIdTokenResponse(e,t,r=!1){let n=new l$;n.updateFromServerResponse(t);let i=new lz({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:r});return await lU(i),i}static async _fromGetAccountInfoResponse(e,t,r){let n=t.users[0];la(void 0!==n.localId,"internal-error");let i=void 0!==n.providerUserInfo?lF(n.providerUserInfo):[],s=!(n.email&&n.passwordHash)&&!(null==i?void 0:i.length),o=new l$;o.updateFromIdToken(r);let a=new lz({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:s});return Object.assign(a,{uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:i,metadata:new lM(n.createdAt,n.lastLoginAt),isAnonymous:!(n.email&&n.passwordHash)&&!(null==i?void 0:i.length)}),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lH=new Map;function lK(e){var t,r;t="Expected a class definition",e instanceof Function||ll(t);let n=lH.get(e);return n?(r="Instance stored in cache mismatched with class",n instanceof e||ll(r)):(n=new e,lH.set(e,n)),n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lG{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lW(e,t,r){return`firebase:${e}:${t}:${r}`}lG.type="NONE";class lQ{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:n,name:i}=this.auth;this.fullUserKey=lW(this.userKey,n.apiKey,i),this.fullPersistenceKey=lW("persistence",n.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?lz._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new lQ(lK(lG),e,r);let n=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),i=n[0]||lK(lG),s=lW(r,e.config.apiKey,e.name),o=null;for(let r of t)try{let t=await r._get(s);if(t){let n=lz._fromJSON(e,t);r!==i&&(o=n),i=r;break}}catch(e){}let a=n.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length&&(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new lQ(i,e,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lJ(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";{if(l0(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(lX(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(l2(t))return"Blackberry";if(l6(t))return"Webos";if(lY(t))return"Safari";if((t.includes("chrome/")||lZ(t))&&!t.includes("edge/"))return"Chrome";if(l1(t))return"Android";let r=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==r?void 0:r.length)===2)return r[1]}return"Other"}function lX(e=es()){return/firefox\//i.test(e)}function lY(e=es()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function lZ(e=es()){return/crios\//i.test(e)}function l0(e=es()){return/iemobile/i.test(e)}function l1(e=es()){return/android/i.test(e)}function l2(e=es()){return/blackberry/i.test(e)}function l6(e=es()){return/webos/i.test(e)}function l3(e=es()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function l5(e=es()){return l3(e)||l1(e)||l6(e)||l2(e)||/windows phone/i.test(e)||l0(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l8(e,t=[]){let r;switch(e){case"Browser":r=lJ(es());break;case"Worker":r=`${lJ(es())}-${e}`;break;default:r=e}let n=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${e1}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l4{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let r=t=>new Promise((r,n)=>{try{let n=e(t);r(n)}catch(e){n(e)}});r.onAbort=t,this.queue.push(r);let n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(e){for(let e of(t.reverse(),t))try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l7(e,t={}){return lv(e,"GET","/v2/passwordPolicy",ly(e,t))}class l9{constructor(e){var t,r,n,i;let s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(n=null===(r=e.allowedNonAlphanumericCharacters)||void 0===r?void 0:r.join(""))&&void 0!==n?n:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,n,i,s,o;let a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(r=a.meetsMaxPasswordLength)||void 0===r||r),a.isValid&&(a.isValid=null===(n=a.containsLowercaseLetter)||void 0===n||n),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(e,t){let r=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),n&&(t.meetsMaxPasswordLength=e.length<=n)}validatePasswordCharacterOptions(e,t){let r;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let n=0;n<e.length;n++)r=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,n,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e,t,r,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ht(this),this.idTokenSubscription=new ht(this),this.beforeStateQueue=new l4(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=a9,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=lK(t)),this._initializationPromise=this.queue(async()=>{var r,n;if(!this._deleted){if(this.persistenceManager=await lQ.create(this,e),!this._deleted){if(null===(r=this._popupRedirectResolver)||void 0===r?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await lk(this,{idToken:e}),r=await lz._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(eY(this.app)){let e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}let r=await this.assertedPersistence.getCurrentUser(),n=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);(!r||r===s)&&(null==o?void 0:o.user)&&(n=o.user,i=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return(la(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId)?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await lU(e)}catch(e){if((null==e?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(eY(this.app))return Promise.reject(ls(this));let t=e?em(e):null;return t&&la(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&la(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return eY(this.app)?Promise.reject(ls(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return eY(this.app)?Promise.reject(ls(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(lK(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=new l9(await l7(this));null===this.tenantId?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ea("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await lj(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return null===e?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&lK(e)||this._popupRedirectResolver;la(t,this,"argument-error"),this.redirectPersistenceManager=await lQ.create(this,[lK(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(r=this.redirectUser)||void 0===r?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,n){if(this._deleted)return()=>{};let i="function"==typeof t?t:t.next.bind(t),s=!1,o=this._isInitialized?Promise.resolve():this._initializationPromise;if(la(o,this,"internal-error"),o.then(()=>{s||i(this.currentUser)}),"function"==typeof t){let i=e.addObserver(t,r,n);return()=>{s=!0,i()}}{let r=e.addObserver(t);return()=>{s=!0,r()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return la(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=l8(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let r=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);let n=await this._getAppCheckToken();return n&&(t["X-Firebase-AppCheck"]=n),t}async _getAppCheckToken(){var e;if(eY(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;let t=await (null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){le.logLevel<=l.WARN&&le.warn(`Auth (${e1}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}class ht{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){let r=new ep(e,void 0);return r.subscribe.bind(r)}(e=>this.observer=e)}get next(){return la(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hr={async loadJS(){throw Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function hn(e){return`__${e}${Math.floor(1e6*Math.random())}`}class hi{constructor(){this.enterprise=new hs}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class hs{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const ho="NO_RECAPTCHA";class ha{constructor(e){this.type="recaptcha-enterprise",this.auth=em(e)}async verify(e="verify",t=!1){async function r(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,r)=>{lC(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(n=>{if(void 0===n.recaptchaKey)r(Error("recaptcha Enterprise site key undefined"));else{let r=new lS(n);return null==e.tenantId?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,t(r.siteKey)}}).catch(e=>{r(e)})})}function n(t,r,n){let i=window.grecaptcha;lT(i)?i.enterprise.ready(()=>{i.enterprise.execute(t,{action:e}).then(e=>{r(e)}).catch(()=>{r(ho)})}):n(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new hi().execute("siteKey",{action:"verify"}):new Promise((e,i)=>{r(this.auth).then(r=>{if(!t&&lT(window.grecaptcha))n(r,e,i);else{var s;if("undefined"==typeof window){i(Error("RecaptchaVerifier is only supported in browser"));return}let t=hr.recaptchaEnterpriseScript;0!==t.length&&(t+=r),(s=t,hr.loadJS(s)).then(()=>{n(r,e,i)}).catch(e=>{i(e)})}}).catch(e=>{i(e)})})}}async function hl(e,t,r,n=!1,i=!1){let s;let o=new ha(e);if(i)s=ho;else try{s=await o.verify(r)}catch(e){s=await o.verify(r,!0)}let a=Object.assign({},t);if("mfaSmsEnrollment"===r||"mfaSmsSignIn"===r){if("phoneEnrollmentInfo"in a){let e=a.phoneEnrollmentInfo.phoneNumber,t=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:t,captchaResponse:s,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){let e=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:e,captchaResponse:s,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return n?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function hh(e,t,r,n,i){var s,o;if("EMAIL_PASSWORD_PROVIDER"===i){if(null===(s=e._getRecaptchaConfig())||void 0===s||!s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER"))return n(e,t).catch(async i=>{if("auth/missing-recaptcha-token"!==i.code)return Promise.reject(i);{console.log(`${r} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let i=await hl(e,t,r,"getOobCode"===r);return n(e,i)}});{let i=await hl(e,t,r,"getOobCode"===r);return n(e,i)}}if("PHONE_PROVIDER"!==i)return Promise.reject(i+" provider is not supported.");if(null===(o=e._getRecaptchaConfig())||void 0===o?void 0:o.isProviderEnabled("PHONE_PROVIDER")){let i=await hl(e,t,r);return n(e,i).catch(async i=>{var s;if((null===(s=e._getRecaptchaConfig())||void 0===s?void 0:s.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&("auth/missing-recaptcha-token"===i.code||"auth/invalid-app-credential"===i.code)){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${r} flow.`);let i=await hl(e,t,r,!1,!0);return n(e,i)}return Promise.reject(i)})}{let i=await hl(e,t,r,!1,!0);return n(e,i)}}async function hu(e){let t=em(e),r=new lS(await lC(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}));null==t.tenantId?t._agentRecaptchaConfig=r:t._tenantRecaptchaConfigs[t.tenantId]=r,r.isAnyProviderEnabled()&&new ha(t).verify()}function hc(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function hf(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ll("not implemented")}_getIdTokenResponse(e){return ll("not implemented")}_linkToIdToken(e,t){return ll("not implemented")}_getReauthenticationResolver(e){return ll("not implemented")}}async function hp(e,t){return lv(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hg(e,t){return l_(e,"POST","/v1/accounts:signInWithPassword",ly(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hm(e,t){return l_(e,"POST","/v1/accounts:signInWithEmailLink",ly(e,t))}async function hy(e,t){return l_(e,"POST","/v1/accounts:signInWithEmailLink",ly(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv extends hd{constructor(e,t,r,n=null){super("password",r),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new hv(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new hv(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return hh(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",hg,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return hm(e,{email:this._email,oobCode:this._password});default:lr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return hh(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",hp,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return hy(e,{idToken:t,email:this._email,oobCode:this._password});default:lr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hw(e,t){return l_(e,"POST","/v1/accounts:signInWithIdp",ly(e,t))}class h_ extends hd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new h_(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):lr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:r,signInMethod:n}=t,i=a4(t,["providerId","signInMethod"]);if(!r||!n)return null;let s=new h_(r,n);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return hw(e,this.buildRequest())}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,hw(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,hw(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ec(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hE(e,t){return lv(e,"POST","/v1/accounts:sendVerificationCode",ly(e,t))}async function hb(e,t){return l_(e,"POST","/v1/accounts:signInWithPhoneNumber",ly(e,t))}async function hI(e,t){let r=await l_(e,"POST","/v1/accounts:signInWithPhoneNumber",ly(e,t));if(r.temporaryProof)throw lI(e,"account-exists-with-different-credential",r);return r}const hT={USER_NOT_FOUND:"user-not-found"};async function hS(e,t){return l_(e,"POST","/v1/accounts:signInWithPhoneNumber",ly(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),hT)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC extends hd{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new hC({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new hC({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return hb(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return hI(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return hS(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:n}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:n}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:i}=e;return r||t||n||i?new hC({verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:i}):null}}class hA{constructor(e){var t,r,n,i,s,o;let a=ef(ed(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,h=null!==(r=a.oobCode)&&void 0!==r?r:null,u=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(n=a.mode)&&void 0!==n?n:null);la(l&&h&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=h,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){let t=function(e){let t=ef(ed(e)).link,r=t?ef(ed(t)).deep_link_id:null,n=ef(ed(e)).deep_link_id;return(n?ef(ed(n)).link:null)||n||r||t||e}(e);try{return new hA(t)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(){this.providerId=hk.PROVIDER_ID}static credential(e,t){return hv._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let r=hA.parseLink(t);return la(r,"argument-error"),hv._fromEmailAndCode(e,r.code,r.tenantId)}}hk.PROVIDER_ID="password",hk.EMAIL_PASSWORD_SIGN_IN_METHOD="password",hk.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN extends hR{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx extends hN{constructor(){super("facebook.com")}static credential(e){return h_._fromParams({providerId:hx.PROVIDER_ID,signInMethod:hx.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hx.credentialFromTaggedObject(e)}static credentialFromError(e){return hx.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hx.credential(e.oauthAccessToken)}catch(e){return null}}}hx.FACEBOOK_SIGN_IN_METHOD="facebook.com",hx.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hD extends hN{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return h_._fromParams({providerId:hD.PROVIDER_ID,signInMethod:hD.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return hD.credentialFromTaggedObject(e)}static credentialFromError(e){return hD.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return hD.credential(t,r)}catch(e){return null}}}hD.GOOGLE_SIGN_IN_METHOD="google.com",hD.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hO extends hN{constructor(){super("github.com")}static credential(e){return h_._fromParams({providerId:hO.PROVIDER_ID,signInMethod:hO.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hO.credentialFromTaggedObject(e)}static credentialFromError(e){return hO.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hO.credential(e.oauthAccessToken)}catch(e){return null}}}hO.GITHUB_SIGN_IN_METHOD="github.com",hO.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP extends hN{constructor(){super("twitter.com")}static credential(e,t){return h_._fromParams({providerId:hP.PROVIDER_ID,signInMethod:hP.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return hP.credentialFromTaggedObject(e)}static credentialFromError(e){return hP.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return hP.credential(t,r)}catch(e){return null}}}hP.TWITTER_SIGN_IN_METHOD="twitter.com",hP.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hL{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,n=!1){return new hL({user:await lz._fromIdTokenResponse(e,r,n),providerId:hM(r),_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){return await e._updateTokensIfNecessary(r,!0),new hL({user:e,providerId:hM(r),_tokenResponse:r,operationType:t})}}function hM(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hU extends eo{constructor(e,t,r,n){var i;super(t.code,t.message),this.operationType=r,this.user=n,Object.setPrototypeOf(this,hU.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,n){return new hU(e,t,r,n)}}function hV(e,t,r,n){return("reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch(r=>{if("auth/multi-factor-auth-required"===r.code)throw hU._fromErrorAndOperation(e,r,t,n);throw r})}async function hF(e,t,r=!1){let n=await lP(e,t._linkToIdToken(e.auth,await e.getIdToken()),r);return hL._forOperation(e,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hB(e,t,r=!1){let{auth:n}=e;if(eY(n.app))return Promise.reject(ls(n));let i="reauthenticate";try{let s=await lP(e,hV(n,i,t,e),r);la(s.idToken,n,"internal-error");let o=lD(s.idToken);la(o,n,"internal-error");let{sub:a}=o;return la(e.uid===a,n,"user-mismatch"),hL._forOperation(e,i,s)}catch(e){throw(null==e?void 0:e.code)==="auth/user-not-found"&&lr(n,"user-mismatch"),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hj(e,t,r=!1){if(eY(e.app))return Promise.reject(ls(e));let n="signIn",i=await hV(e,n,t),s=await hL._fromIdTokenResponse(e,n,i);return r||await e._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h$(e,t){return lv(e,"POST","/v2/accounts/mfaEnrollment:start",ly(e,t))}new WeakMap;const hq="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hz{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(hq,"1"),this.storage.removeItem(hq),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class hH extends hz{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=l5(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let r=this.storage.getItem(t),n=this.localCache[t];r!==n&&e(t,n,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((e,t,r)=>{this.notifyListeners(e,r)});return}let r=e.key;t?this.detachListener():this.stopPolling();let n=()=>{let e=this.storage.getItem(r);(t||this.localCache[r]!==e)&&this.notifyListeners(r,e)},i=this.storage.getItem(r);(function(){let e=es();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0})()&&10===document.documentMode&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,10):n()}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let e of Array.from(r))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}hH.type="LOCAL";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hK extends hz{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}hK.type="SESSION";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hG{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let r=new hG(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let{eventId:t,eventType:r,data:n}=e.data,i=this.handlersMap[r];if(!(null==i?void 0:i.size))return;e.ports[0].postMessage({status:"ack",eventId:t,eventType:r});let s=Array.from(i).map(async t=>t(e.origin,n)),o=await Promise.all(s.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(e){return{fulfilled:!1,reason:e}}}));e.ports[0].postMessage({status:"done",eventId:t,eventType:r,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hW(e="",t=10){let r="";for(let e=0;e<t;e++)r+=Math.floor(10*Math.random());return e+r}hG.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hQ{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){let n,i;let s="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!s)throw Error("connection_unavailable");return new Promise((o,a)=>{let l=hW("",20);s.port1.start();let h=setTimeout(()=>{a(Error("unsupported_event"))},r);i={messageChannel:s,onMessage(e){if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(h),n=setTimeout(()=>{a(Error("timeout"))},3e3);break;case"done":clearTimeout(n),o(e.data.response);break;default:clearTimeout(h),clearTimeout(n),a(Error("invalid_response"))}}},this.handlers.add(i),s.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hJ(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hX(){return void 0!==hJ().WorkerGlobalScope&&"function"==typeof hJ().importScripts}async function hY(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hZ="firebaseLocalStorageDb",h0="firebaseLocalStorage",h1="fbase_key";class h2{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function h6(e,t){return e.transaction([h0],t?"readwrite":"readonly").objectStore(h0)}function h3(){let e=indexedDB.open(hZ,1);return new Promise((t,r)=>{e.addEventListener("error",()=>{r(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(h0,{keyPath:h1})}catch(e){r(e)}}),e.addEventListener("success",async()=>{let r=e.result;r.objectStoreNames.contains(h0)?t(r):(r.close(),await new h2(indexedDB.deleteDatabase(hZ)).toPromise(),t(await h3()))})})}async function h5(e,t,r){return new h2(h6(e,!0).put({[h1]:t,value:r})).toPromise()}async function h8(e,t){let r=h6(e,!1).get(t),n=await new h2(r).toPromise();return void 0===n?null:n.value}function h4(e,t){return new h2(h6(e,!0).delete(t)).toPromise()}class h7{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await h3()),this.db}async _withRetries(e){let t=0;for(;;)try{let t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hX()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hG._getInstance(hX()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await hY(),!this.activeServiceWorker)return;this.sender=new hQ(this.activeServiceWorker);let r=await this.sender._send("ping",{},800);r&&(null===(e=r[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=r[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await h3();return await h5(e,hq,"1"),await h4(e,hq),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>h5(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>h8(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>h4(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(e=>new h2(h6(e,!1).getAll()).toPromise());if(!e||0!==this.pendingWrites)return[];let t=[],r=new Set;if(0!==e.length)for(let{fbase_key:n,value:i}of e)r.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(i)&&(this.notifyListeners(n,i),t.push(n));for(let e of Object.keys(this.localCache))this.localCache[e]&&!r.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let e of Array.from(r))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h9(e,t){return lv(e,"POST","/v2/accounts/mfaSignIn:start",ly(e,t))}h7.type="LOCAL",hn("rcb"),new lf(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue="recaptcha";async function ut(e,t,r){var n;if(!e._getRecaptchaConfig())try{await hu(e)}catch(e){console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(i="string"==typeof t?{phoneNumber:t}:t,"session"in i){let t=i.session;if("phoneNumber"in i){la("enroll"===t.type,e,"internal-error");let n={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}},s=async(e,t)=>{if(t.phoneEnrollmentInfo.captchaResponse===ho){la((null==r?void 0:r.type)===ue,e,"argument-error");let n=await ur(e,t,r);return h$(e,n)}return h$(e,t)},o=hh(e,n,"mfaSmsEnrollment",s,"PHONE_PROVIDER");return(await o.catch(e=>Promise.reject(e))).phoneSessionInfo.sessionInfo}{la("signin"===t.type,e,"internal-error");let s=(null===(n=i.multiFactorHint)||void 0===n?void 0:n.uid)||i.multiFactorUid;la(s,e,"missing-multi-factor-info");let o={mfaPendingCredential:t.credential,mfaEnrollmentId:s,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}},a=async(e,t)=>{if(t.phoneSignInInfo.captchaResponse===ho){la((null==r?void 0:r.type)===ue,e,"argument-error");let n=await ur(e,t,r);return h9(e,n)}return h9(e,t)},l=hh(e,o,"mfaSmsSignIn",a,"PHONE_PROVIDER");return(await l.catch(e=>Promise.reject(e))).phoneResponseInfo.sessionInfo}}{let t={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"},n=async(e,t)=>{if(t.captchaResponse===ho){la((null==r?void 0:r.type)===ue,e,"argument-error");let n=await ur(e,t,r);return hE(e,n)}return hE(e,t)},s=hh(e,t,"sendVerificationCode",n,"PHONE_PROVIDER");return(await s.catch(e=>Promise.reject(e))).sessionInfo}}finally{null==r||r._reset()}}async function ur(e,t,r){la(r.type===ue,e,"argument-error");let n=await r.verify();la("string"==typeof n,e,"argument-error");let i=Object.assign({},t);if("phoneEnrollmentInfo"in i){let e=i.phoneEnrollmentInfo.phoneNumber,t=i.phoneEnrollmentInfo.captchaResponse,r=i.phoneEnrollmentInfo.clientType,s=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:n,captchaResponse:t,clientType:r,recaptchaVersion:s}}),i}if(!("phoneSignInInfo"in i))return Object.assign(i,{recaptchaToken:n}),i;{let e=i.phoneSignInInfo.captchaResponse,t=i.phoneSignInInfo.clientType,r=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:n,captchaResponse:e,clientType:t,recaptchaVersion:r}}),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.providerId=un.PROVIDER_ID,this.auth=em(e)}verifyPhoneNumber(e,t){return ut(this.auth,e,em(t))}static credential(e,t){return hC._fromVerification(e,t)}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:r}=e;return t&&r?hC._fromTokenResponse(t,r):null}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(e,t){return t?lK(t):(la(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}un.PROVIDER_ID="phone",un.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us extends hd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hw(e,this._buildIdpRequest())}_linkToIdToken(e,t){return hw(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return hw(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function uo(e){return hj(e.auth,new us(e),e.bypassAuthState)}function ua(e){let{auth:t,user:r}=e;return la(r,t,"internal-error"),hB(r,new us(e),e.bypassAuthState)}async function ul(e){let{auth:t,user:r}=e;return la(r,t,"internal-error"),hF(r,new us(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e,t,r,n,i=!1){this.auth=e,this.resolver=r,this.user=n,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:r,postBody:n,tenantId:i,error:s,type:o}=e;if(s){this.reject(s);return}let a={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return uo;case"linkViaPopup":case"linkViaRedirect":return ul;case"reauthViaPopup":case"reauthViaRedirect":return ua;default:lr(this.auth,"internal-error")}}resolve(e){var t,r;t=this.pendingPromise,r="Pending promise was never set",t||ll(r),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){var t,r;t=this.pendingPromise,r="Pending promise was never set",t||ll(r),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu=new lf(2e3,1e4);async function uc(e,t,r){if(eY(e.app))return Promise.reject(ln(e,"operation-not-supported-in-this-environment"));let n=em(e);!function(e,t,r){if(!(t instanceof r))throw r.name!==t.constructor.name&&lr(e,"argument-error"),li(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}(e,t,hR);let i=ui(n,r);return new uf(n,"signInViaPopup",t,i).executeNotNull()}class uf extends uh{constructor(e,t,r,n,i){super(e,t,n,i),this.provider=r,this.authWindow=null,this.pollId=null,uf.currentPopupAction&&uf.currentPopupAction.cancel(),uf.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return la(e,this.auth,"internal-error"),e}async onExecution(){var e,t;e=1===this.filter.length,t="Popup operations only handle one event",e||ll(t);let r=hW();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],r),this.authWindow.associatedEvent=r,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,uf.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,r;if(null===(r=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===r?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ln(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uu.get())};e()}}uf.currentPopupAction=null;const ud=new Map;class up extends uh{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ud.get(this.auth._key());if(!e){try{let t=await ug(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}ud.set(this.auth._key(),e)}return this.bypassAuthState||ud.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"===e.type){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ug(e,t){var r;let n=lW("pendingRedirect",(r=t).config.apiKey,r.name),i=lK(e._redirectPersistence);if(!await i._isAvailable())return!1;let s=await i._get(n)==="true";return await i._remove(n),s}function um(e,t){ud.set(e._key(),t)}async function uy(e,t,r=!1){if(eY(e.app))return Promise.reject(ls(e));let n=em(e),i=ui(n,t),s=new up(n,i,r),o=await s.execute();return o&&!r&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,t)),o}class uv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return u_(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!u_(e)){let n=(null===(r=e.error.code)||void 0===r?void 0:r.split("auth/")[1])||"internal-error";t.onError(ln(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(uw(e))}saveEventToCache(e){this.cachedEventUids.add(uw(e)),this.lastProcessedEventTime=Date.now()}}function uw(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function u_({type:e,error:t}){return"unknown"===e&&(null==t?void 0:t.code)==="auth/no-auth-event"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uE(e,t={}){return lv(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,uI=/^https?/;async function uT(e){if(e.config.emulator)return;let{authorizedDomains:t}=await uE(e);for(let e of t)try{if(function(e){let t=lu(),{protocol:r,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){let i=new URL(e);return""===i.hostname&&""===n?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&i.hostname===n}if(!uI.test(r))return!1;if(ub.test(e))return n===e;let i=e.replace(/\./g,"\\.");return RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}(e))return}catch(e){}lr(e,"unauthorized-domain")}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS=new lf(3e4,6e4);function uC(){let e=hJ().___jsl;if(null==e?void 0:e.H){for(let t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}}let uA=null;/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk=new lf(5e3,15e3),uR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function ux(e){let t=await (uA=uA||new Promise((t,r)=>{var n,i,s,o;function a(){uC(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{uC(),r(ln(e,"network-request-failed"))},timeout:uS.get()})}if(null===(i=null===(n=hJ().gapi)||void 0===n?void 0:n.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else if(null===(s=hJ().gapi)||void 0===s?void 0:s.load)a();else{let t=hn("iframefcb");return hJ()[t]=()=>{gapi.load?a():r(ln(e,"network-request-failed"))},(o=`${hr.gapiScript}?onload=${t}`,hr.loadJS(o)).catch(e=>r(e))}}).catch(e=>{throw uA=null,e})),r=hJ().gapi;return la(r,e,"internal-error"),t.open({where:document.body,url:function(e){let t=e.config;la(t.authDomain,e,"auth-domain-config-required");let r=t.emulator?ld(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,n={apiKey:t.apiKey,appName:e.name,v:e1},i=uN.get(e.config.apiHost);i&&(n.eid=i);let s=e._getFrameworks();return s.length&&(n.fw=s.join(",")),`${r}?${ec(n).slice(1)}`}(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uR,dontclear:!0},t=>new Promise(async(r,n)=>{await t.restyle({setHideOnLeave:!1});let i=ln(e,"network-request-failed"),s=hJ().setTimeout(()=>{n(i)},uk.get());function o(){hJ().clearTimeout(s),r(t)}t.ping(o).then(o,()=>{n(i)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class uO{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}const uP=encodeURIComponent("fac");async function uL(e,t,r,n,i,s){la(e.config.authDomain,e,"auth-domain-config-required"),la(e.config.apiKey,e,"invalid-api-key");let o={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:n,v:e1,eventId:i};if(t instanceof hR)for(let[r,n]of(t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",!function(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())&&(o.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(s||{})))o[r]=n;if(t instanceof hN){let e=t.getScopes().filter(e=>""!==e);e.length>0&&(o.scopes=e.join(","))}for(let t of(e.tenantId&&(o.tid=e.tenantId),Object.keys(o)))void 0===o[t]&&delete o[t];let a=await e._getAppCheckToken(),l=a?`#${uP}=${encodeURIComponent(a)}`:"";return`${function({config:e}){return e.emulator?ld(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${ec(o).slice(1)}${l}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uM="webStorageSupport",uU=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hK,this._completeRedirectFn=uy,this._overrideRedirectResult=um}async _openPopup(e,t,r,n){var i,s,o;s=null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,o="_initialize() not called before _openPopup()",s||ll(o);let a=await uL(e,t,r,lu(),n);return function(e,t,r,n=500,i=600){let s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString(),a="",l=Object.assign(Object.assign({},uD),{width:n.toString(),height:i.toString(),top:s,left:o}),h=es().toLowerCase();r&&(a=lZ(h)?"_blank":r),lX(h)&&(t=t||"http://localhost",l.scrollbars="yes");let u=Object.entries(l).reduce((e,[t,r])=>`${e}${t}=${r},`,"");if(function(e=es()){var t;return l3(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(h)&&"_self"!==a)return function(e,t){let r=document.createElement("a");r.href=e,r.target=t;let n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}(t||"",a),new uO(null);let c=window.open(t||"",a,u);la(c,e,"popup-blocked");try{c.focus()}catch(e){}return new uO(c)}(e,a,hW())}async _openRedirect(e,t,r,n){var i;return await this._originValidation(e),i=await uL(e,t,r,lu(),n),hJ().location.href=i,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){var r;let{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(r="If manager is not set, promise should be",n||ll(r),n)}let n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){let t=await ux(e),r=new uv(e);return t.register("authEvent",t=>(la(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:r.onEvent(t.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(uM,{type:uM},r=>{var n;let i=null===(n=null==r?void 0:r[0])||void 0===n?void 0:n[uM];void 0!==i&&t(!!i),lr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=uT(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return l5()||lY()||l3()}};class uV{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return ll("unexpected MultiFactorSessionType")}}}class uF extends uV{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new uF(e)}_finalizeEnroll(e,t,r){return lv(e,"POST","/v2/accounts/mfaEnrollment:finalize",ly(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(e,t){return lv(e,"POST","/v2/accounts/mfaSignIn:finalize",ly(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}class uB extends uV{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new uB(t,void 0,e)}static _fromEnrollmentId(e,t){return new uB(t,e)}async _finalizeEnroll(e,t,r){return la(void 0!==this.secret,e,"argument-error"),lv(e,"POST","/v2/accounts/mfaEnrollment:finalize",ly(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)}))}async _finalizeSignIn(e,t){la(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");let r={verificationCode:this.otp};return lv(e,"POST","/v2/accounts/mfaSignIn:finalize",ly(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r}))}}class uj{constructor(e,t,r,n,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=n,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new uj(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let n=!1;return(u$(e)||u$(t))&&(n=!0),n&&(u$(e)&&(e=(null===(r=this.auth.currentUser)||void 0===r?void 0:r.email)||"unknownuser"),u$(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function u$(e){return void 0===e||(null==e?void 0:e.length)===0}var uq="@firebase/auth",uz="1.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uH{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){return(this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser)?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){la(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const uK=en("authIdTokenMaxAge")||300;let uG=null;const uW=e=>async t=>{let r=t&&await t.getIdTokenResult(),n=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>uK)return;let i=null==r?void 0:r.token;uG!==i&&(uG=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};hr={loadJS:e=>new Promise((t,r)=>{var n,i;let s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=e=>{let t=ln("internal-error");t.customData=e,r(t)},s.type="text/javascript",s.charset="UTF-8",(null!==(i=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==i?i:document).appendChild(s)}),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},i="Browser",eJ(new ey("auth",(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;la(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});let l=new he(r,n,s,{apiKey:o,authDomain:a,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:l8(i)});return function(e,t){let r=(null==t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(lK);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),eJ(new ey("auth-internal",e=>new uH(em(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),e3(uq,uz,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(i)),e3(uq,uz,"esm2017");const uQ=e2({apiKey:"AIzaSyBXHfs546W38_wpb5hKIVatze-StM5NQQE",authDomain:"recipe-organizer-f9bc7.firebaseapp.com",projectId:"recipe-organizer-f9bc7",storageBucket:"recipe-organizer-f9bc7.firebasestorage.app",messagingSenderId:"907283353267",appId:"1:907283353267:web:dd265f90d55b7fe3756ac6",measurementId:"G-5MVPH1ZKFQ"}),uJ=function(e,t){let r=eX("object"==typeof e?e:e6(),"firestore").getImmediate({identifier:"string"==typeof e?e:rJ});if(!r._initialized){let e=et("firestore");e&&function(e,t,r,n={}){var i;let s=(e=ag(e,av))._getSettings(),o=`${t}:${r}`;if(s.host!==am&&s.host!==o&&t5("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),n.mockUserToken){let t,r;if("string"==typeof n.mockUserToken)t=n.mockUserToken,r=tZ.MOCK_USER;else{t=function(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let r=t||"demo-project",n=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:n,exp:n+3600,auth_time:n,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[W(JSON.stringify({alg:"none",type:"JWT"})),W(JSON.stringify(s)),""].join(".")}(n.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=n.mockUserToken.sub||n.mockUserToken.user_id;if(!s)throw new t9(t7.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");r=new tZ(s)}e._authCredentials=new rn(new rt(t,r))}}(r,...e)}return r}(uQ),uX=function(e=e6()){let t=eX(e,"auth");if(t.isInitialized())return t.getImmediate();let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){let r=eX(e,"auth");if(r.isInitialized()){let e=r.getImmediate();if(eh(r.getOptions(),null!=t?t:{}))return e;lr(e,"already-initialized")}return r.initialize({options:t})}(e,{popupRedirectResolver:uU,persistence:[h7,hH,hK]}),n=en("authTokenSyncURL");if(n&&"boolean"==typeof isSecureContext&&isSecureContext){let e=new URL(n,location.origin);if(location.origin===e.origin){var i,s;let t=uW(e.toString());i=()=>t(r.currentUser),em(r).beforeAuthStateChanged(t,i),s=e=>t(e),em(r).onIdTokenChanged(s,void 0,void 0)}}let o=ee("auth");return o&&function(e,t,r){let n=em(e);la(n._canInitEmulator,n,"emulator-config-failed"),la(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");let i=hc(t),{host:s,port:o}=function(e){let t=hc(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!r)return{host:"",port:null};let n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){let e=i[1];return{host:e,port:hf(n.substr(e.length+1))}}{let[e,t]=n.split(":");return{host:e,port:hf(t)}}}(t),a=null===o?"":`:${o}`;n.config.emulator={url:`${i}//${s}${a}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:s,port:o,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:!1})}),function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}(r,`http://${o}`),r}(uQ),uY=new hD;document.getElementById("signIn").addEventListener("click",function(){uc(uX,uY).then(e=>{let t=e.user;localStorage.setItem("email",JSON.stringify(t.email)),window.location.href="tasks.html"}).catch(e=>{console.error("Sign-in Error:",e.message),alert(`Sign-in failed: ${e.message}`)})});const uZ=JSON.parse(localStorage.getItem("email"));async function u0(e,t,r){await function(e,t){var r,n,i;let s=ag(e.firestore,aS),o=function(e,t,...r){if(e=em(e),1==arguments.length&&(t=rh.newId()),ac("doc","path",t),e instanceof av){let n=rm.fromString(t,...r);return af(n),new a_(e,null,new rw(n))}{if(!(e instanceof a_||e instanceof aE))throw new t9(t7.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(rm.fromString(t,...r));return af(n),new a_(e.firestore,e instanceof aE?e.converter:null,new rw(n))}}(e),a=(r=e.converter)?r.toFirestore(t):t;return(n=s,i=[(function(e,t,r,n,i,s={}){let o,a;let l=e.ju(s.merge||s.mergeFields?2:0,t,r,i);aj("Data must be an object, but it was:",l,n);let h=aF(n,l);if(s.merge)o=new rL(l.fieldMask),a=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let n of s.mergeFields){let i=function(e,t,r){if((t=em(t))instanceof ak)return t._internalPath;if("string"==typeof t)return aq(e,t);throw az("Field path arguments must be of type string or ",e,!1,void 0,r)}(t,n,r);if(!l.contains(i))throw new t9(t7.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);(function(e,t){return e.some(e=>e.isEqual(t))})(e,i)||e.push(i)}o=new rL(e),a=l.fieldTransforms.filter(e=>o.covers(e.field))}else o=null,a=l.fieldTransforms;return new aO(new nh(h),o,a)})(aU(e.firestore),"addDoc",o._key,a,null!==e.converter,{}).toMutation(o._key,is.exists(!1))],function(e,t){let r=new re;return e.asyncQueue.enqueueAndForget(async()=>oK(await aa(e).then(e=>e.syncEngine),t,r)),r.promise}(aC(n),i)).then(()=>o)}(ab(uJ,"recipes"),{name:e,category:t,ingredients:r,email:uZ,created_at:new Date}),alert(`\u{2705} Recipe "${e}" added!`),u1()}async function u1(){let e=function(e,t,...r){let n=[];for(let i of(t instanceof aW&&n.push(t),function(e){let t=e.filter(e=>e instanceof aX).length,r=e.filter(e=>e instanceof aJ).length;if(t>1||t>0&&r>0)throw new t9(t7.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n=n.concat(r)),n))e=i._apply(e);return e}(ab(uJ,"recipes"),function(e,t,r){let n=aG("where",e);return aJ._create(n,"==",r)}("email",0,uZ)),t=await function(e){e=ag(e,aw);let t=ag(e.firestore,aS),r=aC(t),n=new a8(t);return(/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new t9(t7.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),(function(e,t,r={}){let n=new re;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,r,n,i){let s=new at({next:r=>{s.su(),t.enqueueAndForget(()=>ok(e,o)),r.fromCache&&"server"===n.source?i.reject(new t9(t7.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(r)},error:e=>i.reject(e)}),o=new oD(r,s,{includeMetadataChanges:!0,Ta:!0});return oA(e,o)})(await al(e),e.asyncQueue,t,r,n)),n.promise})(r,e._query).then(r=>new a5(t,n,e,r)))}(e),r=document.getElementById("recipeList");r.innerHTML="",t.forEach(e=>{let t=e.data(),n=document.createElement("li");n.innerHTML=`<strong>${t.name}</strong> - ${t.category} <br> Ingredients: ${t.ingredients.join(", ")}`,r.appendChild(n)})}uZ||(window.location.href="index.html"),document.getElementById("signOutBttn").addEventListener("click",()=>{localStorage.removeItem("email"),window.location.href="index.html"}),document.getElementById("addRecipeBtn").addEventListener("click",()=>{let e=document.getElementById("recipeInput").value.trim(),t=document.getElementById("categoryInput").value.trim(),r=document.getElementById("ingredientsInput").value.trim().split(",");e&&t&&r.length>0?u0(e,t,r):alert("\uD83D\uDEA8 Please fill out all fields.")}),window.addEventListener("DOMContentLoaded",u1);const u2="recipe-organizer-cache-v4",u6=["./html/index.html","./html/tasks.html","./css/style.css","./app.js","./manifest.json"];self.addEventListener("install",e=>{e.waitUntil(caches.open(u2).then(e=>(console.log("[Service Worker] Pre-caching offline content"),e.addAll(u6)))),self.skipWaiting()}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(e=>Promise.all(e.map(e=>{if(e!==u2)return console.log("[Service Worker] Removing old cache:",e),caches.delete(e)})))),self.clients.claim()}),self.addEventListener("fetch",e=>{e.respondWith(caches.match(e.request).then(t=>t||fetch(e.request).catch(()=>caches.match("./html/index.html"))))});const u3=JSON.parse(localStorage.getItem("email"));window.location.pathname.includes("index.html")&&u3&&(window.location.href="tasks.html"),window.location.pathname.includes("tasks.html")&&!u3&&(window.location.href="index.html");var u5={};u5=new URL("up_/js/service-worker.js",import.meta.url).toString(),"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register(u5).then(e=>console.log("✅ Service Worker Registered:",e)).catch(e=>console.error("\uD83D\uDEA8 Service Worker Registration Failed:",e))});
//# sourceMappingURL=index.4da22cc4.js.map
