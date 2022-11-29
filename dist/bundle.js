(()=>{"use strict";var e={735:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]);const c=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(a[l]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var l=e[c],s=r.base?l[0]+r.base:l[0],d=i[s]||0,u="".concat(s," ").concat(d);i[s]=d+1;var f=n(u),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var m=o(p,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var l=r(e,o),s=0;s<i.length;s++){var d=n(i[s]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=l}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),i=n(569),a=n.n(i),c=n(565),l=n.n(c),s=n(216),d=n.n(s),u=n(589),f=n.n(u),p=n(735),m={};function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function y(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,g(e,t,"get"))}function b(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,g(e,t,"set"),n),n}function g(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}m.styleTagTransform=f(),m.setAttributes=l(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),t()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals;var w=new WeakMap,x=new WeakMap,k=new WeakMap,S=new WeakMap,j=function(){function e(t){var n=t.name,r=t.color,o=t.index;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),h(this,w,{writable:!0,value:void 0}),h(this,x,{writable:!0,value:void 0}),h(this,k,{writable:!0,value:void 0}),h(this,S,{writable:!0,value:new Map}),b(this,w,n),b(this,x,r),b(this,k,o)}var t,n;return t=e,(n=[{key:"getName",value:function(){return y(this,w)}},{key:"setName",value:function(e){b(this,w,e)}},{key:"getColor",value:function(){return y(this,x)}},{key:"setColor",value:function(e){b(this,x,e)}},{key:"getIndex",value:function(){return y(this,k)}},{key:"setIndex",value:function(e){b(this,k,e)}},{key:"getTodoStorage",value:function(){return y(this,S)}},{key:"getTodo",value:function(e){return y(this,S).get(e)}},{key:"addTodo",value:function(e){y(this,S).set(e.getIndex(),e)}},{key:"deleteTodo",value:function(e){y(this,S).delete(e)}},{key:"destructurizePrivateFields",value:function(){return{name:this.getName(),color:this.getColor(),index:this.getIndex()}}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function E(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,I(e,t,"get"))}function T(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,I(e,t,"set"),n),n}function I(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}var P=new WeakMap,L=new WeakMap,z=new WeakMap,q=new WeakMap,D=new WeakMap,O=new WeakMap,M=new WeakMap,N=function(){function e(t){var n=t.name,r=t.description,o=t.dueDate,i=t.project,a=t.index,c=t.checked,l=void 0!==c&&c,s=t.priority;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),A(this,P,{writable:!0,value:void 0}),A(this,L,{writable:!0,value:void 0}),A(this,z,{writable:!0,value:void 0}),A(this,q,{writable:!0,value:void 0}),A(this,D,{writable:!0,value:void 0}),A(this,O,{writable:!0,value:void 0}),A(this,M,{writable:!0,value:void 0}),T(this,P,l),T(this,L,n),T(this,z,r),T(this,q,o),T(this,D,i),T(this,O,s),T(this,M,a)}var t,n;return t=e,(n=[{key:"getChecked",value:function(){return E(this,P)}},{key:"setChecked",value:function(e){T(this,P,Boolean(e))}},{key:"getName",value:function(){return E(this,L)}},{key:"setName",value:function(e){T(this,L,e)}},{key:"getDescription",value:function(){return E(this,z)}},{key:"setDescription",value:function(e){T(this,z,e)}},{key:"getDueDate",value:function(){return E(this,q)}},{key:"setDueDate",value:function(e){T(this,q,e)}},{key:"getProject",value:function(){return E(this,D)}},{key:"setProject",value:function(e){T(this,D,e)}},{key:"getPriority",value:function(){return E(this,O)}},{key:"setPriority",value:function(e){T(this,O,e)}},{key:"getIndex",value:function(){return E(this,M)}},{key:"setIndex",value:function(e){T(this,M,e)}},{key:"destructurizePrivateFields",value:function(){return{checked:this.getChecked(),name:this.getName(),description:this.getDescription(),dueDate:this.getDueDate(),project:this.getProject(),priority:this.getPriority(),index:this.getIndex()}}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function R(e){var t,n=0;if(e.size>0){var r=(t=e.keys(),function(e){if(Array.isArray(e))return F(e)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).at(-1);if(isNaN(r))return n;n=r+1}return n}function H(e){return function(e){if(Array.isArray(e))return U(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||W(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(e,t){if(e){if("string"==typeof e)return U(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?U(e,t):void 0}}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Z=new Map;function $(e,t){return e.get(Number(t.dataset.index))}function _(e){return H(e.values())}function B(e){return function(e){if(Array.isArray(e))return K(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||J(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function G(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=J(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function J(e,t){if(e){if("string"==typeof e)return K(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?K(e,t):void 0}}function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}!function(e){var t,n=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=W(e))){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}(document.querySelectorAll(".initial-project"));try{for(n.s();!(t=n.n()).done;){var r,o=t.value,i=null===(r=o.dataset.name)||void 0===r?void 0:r.trim();if(!i)throw new Error("Initial project name is not set!");var a=R(e),c=o.dataset.color;o.dataset.index=a;var l=new j({name:i,color:c,index:a});e.set(a,l)}}catch(e){n.e(e)}finally{n.f()}}(Z);var Q=document.querySelector(".overlay"),V=Q.querySelector(".modal"),X=document.querySelector(".sidebar .projects"),Y=document.querySelector(".todo-container"),ee=document.querySelector(".header-panel"),te=document.querySelector(".header-panel .text"),ne=document.querySelector(".default-project"),re=[ee.querySelector(".edit")];function oe(){Q.classList.remove("hidden")}function ie(){Q.classList.add("hidden")}function ae(){V.className="modal",V.innerHTML=""}function ce(){var e=document.querySelector(".editStatus");e&&ke(e)}function le(){Y.innerHTML=""}function se(e){V.insertAdjacentHTML("afterbegin",'<div class="modal-header">\n    <h2>'.concat(e,"</h2>\n  </div>"))}function de(){V.insertAdjacentHTML("beforeend",'<div class="modal-footer">\n    <i class="material-symbols-outlined icon cancel clickable-elem" tabindex="0">cancel</i>\n    <button type="submit" class="accept" form="modalForm">\n      <i class="material-symbols-outlined icon clickable-elem" tabindex="-1">check_circle</i>\n    </button>\n  </div>')}function ue(){for(var e=new DocumentFragment,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var o,i=G(n.flat(2));try{for(i.s();!(o=i.n()).done;){var a=o.value,c=document.createElement("div"),l=a.destructurizePrivateFields(),s=l.name,d=l.color,u=l.index;c.insertAdjacentHTML("beforeend",'<li class="media-container clickable-elem project-elem" data-name="'.concat(s,'" data-index="').concat(u,'">\n      <div class="media">\n        <div class="color" style="background-color: ').concat(d,';"></div>\n        <div class="text">').concat(s,'</div>\n      </div>\n      <div class="counter hidden" data-counter="0">0</div>\n    </li>')),e.append(c.firstElementChild)}}catch(e){i.e(e)}finally{i.f()}X.append(e)}function fe(){for(var e=new DocumentFragment,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];for(var o=0,i=n;o<i.length;o++){var a=i[o],c=document.createElement("div"),l=a.destructurizePrivateFields(),s=l.checked,d=l.name,u=l.dueDate,f=l.priority,p=l.project,m=l.index;c.insertAdjacentHTML("beforeend",'<div class="todo clickable-elem '.concat(f," ").concat(s?"checked":"",'" data-index="').concat(m,'" data-project-index="').concat(p.getIndex(),'" data-priority="').concat(f,'">\n      <input type="checkbox" class="clickable-elem" ').concat(s?"checked":"",'>\n      <div class="name">').concat(d,'</div>\n      <div class="date">').concat(u,'</div>\n      <div class="media icons">\n        <i class="material-symbols-outlined icon edit clickable-elem">edit</i>\n        <i class="material-symbols-outlined icon delete clickable-elem">delete</i>\n      </div>\n    </div>')),e.append(c.firstElementChild)}Y.append(e)}function pe(e){e.remove()}function me(e,t){var n=H(Z.values()).reduce((function(e,t){var n=_(t.getTodoStorage());return e.concat(n)}),[]);if(!(n.length<=0))switch(t){case"All":fe.apply(void 0,B(n));break;case"Today":case"Next 7 days":case"Archive":break;default:fe.apply(void 0,B(e))}}function ve(){return document.querySelector(".modal form")}function he(){document.querySelector('.modal form input[name="name"').focus()}function ye(){return document.querySelector(".project-elem.selected")}function be(e){te.textContent=e}function ge(e){ee.style.borderLeftColor=e}function we(e){return Number(e.dataset.index)}function xe(){var e,t=G(V.querySelectorAll('input[type="text"], textarea'));try{for(t.s();!(e=t.n()).done;)e.value.setSelectionRange(-1,-1)}catch(e){t.e(e)}finally{t.f()}}function ke(e){e.classList.toggle("editStatus")}function Se(){var e,t,n,r,o,i,a,c,l,s,d=ve(),u=d.name.value.trim(),f=null!==(e=null===(t=d.description)||void 0===t?void 0:t.value.trim())&&void 0!==e?e:"",p=null!==(n=null===(r=d.color)||void 0===r?void 0:r.value)&&void 0!==n?n:"",m=null!==(o=null===(i=d.date)||void 0===i?void 0:i.value)&&void 0!==o?o:"",v=null!==(a=null===(c=d.querySelector(".priority .selected"))||void 0===c?void 0:c.dataset.priority)&&void 0!==a?a:"",h=Number(null===(l=d.querySelector('select[name="selectProject"]'))||void 0===l?void 0:l.value);return null!=h&&(s=Z.get(h)),{name:u,description:f,color:p,dueDate:m,priority:v,project:s}}function je(e){var t=e.scrollHeight-e.offsetHeight-e.scrollTop;t>0&&(e.scrollTop+=t)}function Ce(){return document.querySelector(".editStatus")}function Ae(e){return Number(e.dataset.projectIndex)}function Ee(){var e,t=[],n=G(document.querySelectorAll(".default-project, .projects .project-elem"));try{for(n.s();!(e=n.n()).done;){var r=e.value,o=r.dataset.name,i=we(r);t.push('<option value="'.concat(i,'"}>').concat(o,"</option>"))}}catch(e){n.e(e)}finally{n.f()}return t.join("")}function Te(e){V.querySelector('select[name="selectProject"] option[value="'.concat(e,'"]')).setAttribute("selected","")}function Ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Pe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ie(Object(n),!0).forEach((function(t){Le(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ie(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ze(e){var t,n,r=ve(),o=r.name.value.trim(),i=e.submitter.classList.contains("delete");e.preventDefault(),""!==o||i?(r.classList.contains("add-project")?function(e){var t=document.querySelector(".sidebar .projects"),n=Se(),r=R(Z),o=new j(Pe(Pe({},n),{},{index:r}));Z.set(r,o),ue(o),je(t)}():r.classList.contains("add-todo")?function(e){var t=document.querySelector(".todo-container"),n=Se(),r=n.project,o=R(r.getTodoStorage()),i=new N(Pe(Pe({},n),{},{index:o}));r.addTodo(i),Z.set(r.getIndex(),r),me([i]),je(t)}():r.classList.contains("edit-project")?i?(n=we(t=Ce()),Z.delete(n),ne.click(),pe(t)):function(e){var t=Ce(),n=we(t),r=Z.get(n),o=Se(),i=o.name,a=o.color;r.setName(i),r.setColor(a),function(e,t){var n=t.getName(),r=t.getColor();!function(e,t){e.dataset.name=t}(e,n),function(e,t){e.querySelector(".text").textContent=t}(e,n),function(e,t){e.querySelector(".color").style.backgroundColor="".concat(t)}(e,r)}(t,r),ge(a),be(i)}():r.classList.contains("edit-todo")&&(i?qe(e):function(e){var t,n,r=Se(),o=Ce(),i=Ae(o),a=Z.get(i),c=r.project,l=we(o),s=a.getTodo(l);if(s.setName(r.name),s.setDescription(r.description),s.setDueDate(r.dueDate),s.setProject(r.project),s.setPriority(r.priority),function(e,t){var n=t.getName(),r=t.getDueDate(),o=t.getPriority();!function(e,t){e.querySelector(".name").textContent=t}(e,n),function(e,t){e.querySelector(".date").textContent=t}(e,r),function(e,t){e.classList.remove("low","medium","high"),e.classList.add("".concat(t)),e.dataset.priority=t}(e,o)}(o,s),c!==a){var d=ye(),u=d.dataset.name,f=$(Z,d).getTodoStorage(),p=R(c.getTodoStorage());a.deleteTodo(l),s.setIndex(p),c.addTodo(s),t=_(f),n=u,le(),me(t,n)}}()),ie(),ae(),ce()):he()}function qe(e){var t,n=null!==(t=e.target.closest(".todo"))&&void 0!==t?t:Ce(),r=we(n),o=Ae(n);Z.get(o).deleteTodo(r),pe(n)}var De=document.querySelector(".modal"),Oe=document.querySelector("header"),Me=document.querySelector(".sidebar"),Ne=document.querySelector(".header-panel"),Fe=document.querySelector(".todo-container");De.addEventListener("click",(function(e){e.target.closest(".modal")&&(e.target.closest(".priority")?function(e){var t=e.target.closest(".priority");if(t&&!t.closest(".details")){var n=t.querySelector(".selected"),r=e.target.closest(".low, .medium, .high");r&&(n===r?r.classList.toggle("selected"):(null==n||n.classList.remove("selected"),r.classList.add("selected")))}}(e):e.target.closest(".cancel, .close")?(ie(),ae(),ce()):e.target.closest(".delete")&&ve().setAttribute("novalidate",""))})),Oe.addEventListener("click",(function(e){var t,n;e.target.closest(".menu-icon")&&(n=(t=document.querySelector("header .menu-icon")).textContent,t.textContent="menu"==n?"close":"menu",document.querySelector(".sidebar").classList.toggle("showSidebar"))})),Me.addEventListener("click",(function(e){e.target.closest(".sidebar")&&(e.target.closest(".project-elem")?function(e){var t=e.target.closest(".project-elem");if(t){var n=ye(),r=t;n!==r&&(n.classList.remove("selected"),r.classList.add("selected"));var o=$(Z,r),i=o.getName(),a=o.getColor(),c=_(o.getTodoStorage());be(i),ge(a),le(),me(c,i),r.classList.contains("initial-project")?function(){var e,t=G(re);try{for(t.s();!(e=t.n()).done;)e.value.classList.add("removed")}catch(e){t.e(e)}finally{t.f()}}():function(){var e,t=G(re);try{for(t.s();!(e=t.n()).done;)e.value.classList.remove("removed")}catch(e){t.e(e)}finally{t.f()}}()}}(e):e.target.closest(".add")&&(se("Add project"),V.insertAdjacentHTML("beforeend",'<form action="" class="add-project custom-scrollbar" id="modalForm">\n    <div class="input-wrapper">\n      <label for="name">Name</label>\n      <input type="text" name="name" id="name" maxlength="120" spellcheck="false" required>\n    </div>\n\n    <div class="input-wrapper">\n      <label for="color">Color</label>\n      <input type="color" name="color" value="#9e9e9e" id="color" class="clickable-elem">\n    </div>\n  </form>'),de(),ve().onsubmit=ze,oe(),he()))})),Ne.addEventListener("click",(function(e){var t,n,r,o,i;e.target.closest(".header-panel")&&(e.target.closest(".add")?(se("Add todo"),V.insertAdjacentHTML("beforeend",'<form action="" class="add-todo custom-scrollbar" id="modalForm">\n    <div class="input-wrapper">\n      <input type="text" name="name" maxlength="120" placeholder="Name" spellcheck="false" required>\n      <textarea class="custom-scrollbar" name="description" cols="30" rows="4" placeholder="Description" spellcheck="false"></textarea>\n    </div>\n\n    <div class="input-wrapper" tabindex="-1">\n      <label for="date">Due date</label>\n      <input type="date" class="clickable-elem" name="date" id="date">\n    </div>\n\n    <div class="input-wrapper">\n      <label for="selectProject">Project</label>\n      <select name="selectProject" id="selectProject" class="clickable-elem">\n        '.concat(Ee(),'\n      </select>\n    </div>\n    \n    <div class="input-wrapper priority">\n      <label>Priority</label>\n      <button type="button" class="low" data-priority="low">low</button>\n      <button type="button" class="medium" data-priority="medium">medium</button>\n      <button type="button" class="high" data-priority="high">high</button>\n    </div>\n  </form>')),Te(we(ye())),de(),ve().onsubmit=ze,oe(),he()):e.target.closest(".edit")?(t=ye(),n=$(Z,t),se("Edit project"),o=(r=n.destructurizePrivateFields()).name,i=r.color,V.insertAdjacentHTML("beforeend",'<form action="" class="edit-project custom-scrollbar" id="modalForm">\n    <div class="input-wrapper">\n      <label for="name">Name</label>\n      <input type="text" name="name" value="'.concat(o,'" id="name" maxlength="120" spellcheck="false" required>\n    </div>\n\n    <div class="input-wrapper">\n      <label for="color">Color</label>\n      <input type="color" name="color" value="').concat(i,'" id="color">\n    </div>\n\n    <button class="delete">Delete project</button>\n  </form>')),de(),ke(t),ve().onsubmit=ze,oe(),he(),xe()):e.target.closest(".sort"))})),Fe.addEventListener("click",(function(e){e.target.closest(".todo-container")&&(e.target.closest(".edit")?function(e){var t,n,r,o,i,a,c=e.target.closest(".todo"),l=Ae(c),s=Z.get(l),d=we(c),u=s.getTodo(d);se("Edit todo"),t=u.destructurizePrivateFields(),n=t.name,r=t.description,o=t.dueDate,i=t.project,a=t.priority,V.insertAdjacentHTML("beforeend",'<form action="" class="edit-todo custom-scrollbar" id="modalForm">\n    <div class="input-wrapper">\n      <input type="text" name="name" value="'.concat(n,'" maxlength="120" placeholder="Name" spellcheck="false" required>\n      <textarea name="description" cols="30" rows="4" placeholder="Description" spellcheck="false">').concat(r,'</textarea>\n    </div>\n\n    <div class="input-wrapper" tabindex="-1">\n      <label for="date">Due date</label>\n      <input type="date" class="clickable-elem" name="date" value="').concat(o,'" id="date">\n    </div>\n\n    <div class="input-wrapper">\n      <label for="selectProject">Project</label>\n      <select name="selectProject" id="selectProject" class="clickable-elem">\n        ').concat(Ee(),'\n      </select>\n    </div>\n    \n    <div class="input-wrapper priority">\n      <label>Priority</label>\n      <button type="button" class="low" data-priority="low">low</button>\n      <button type="button" class="medium" data-priority="medium">medium</button>\n      <button type="button" class="high" data-priority="high">high</button>\n    </div>\n\n    <button class="delete">Delete todo</button>\n  </form>')),Te(i.getIndex()),a&&function(e){V.querySelector(".priority .".concat(e)).classList.add("selected")}(a),ke(c),de(),ve().onsubmit=ze,oe(),he(),xe()}(e):e.target.closest(".delete")?qe(e):e.target.closest('input[type="checkbox"]')?function(e){var t=e.target.closest(".todo"),n=we(t),r=Ae(t),o=Z.get(r).getTodo(n),i=o.getChecked();o.setChecked(!i),t.classList.toggle("checked")}(e):e.target.closest(".todo")&&function(e){var t=e.target.closest(".todo");if(t){var n,r,o,i,a,c,l=Ae(t),s=Z.get(l),d=we(t),u=s.getTodo(d);(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];V.className="modal ".concat(t.join(" "))})("details"),r=(n=u.destructurizePrivateFields()).name,o=n.description,i=n.dueDate,a=n.project,c=n.priority,V.insertAdjacentHTML("beforeend",'<div class="details-container">\n    <i class="material-symbols-outlined icon close clickable-elem">close</i>\n\n    <div class="text-container">\n      <h2 class="name">'.concat(r,'</h2>\n\n      <div class="description custom-scrollbar" data-placeholder="Description">').concat(o,'</div>\n    </div>\n\n    <div class="side-container">\n      <div class="input-wrapper">\n        <div class="bold">Due date</div>\n        <div class="date">').concat(i,'</div>\n      </div>\n\n      <div class="input-wrapper">\n        <div class="bold">Project</div>\n        <div class="media">\n          <div class="color" style="background-color: ').concat(a.getColor(),';"></div>\n          <div class="text">').concat(a.getName(),'</div>\n        </div>\n      </div>\n\n      <div class="input-wrapper">\n        <div class="bold">Priority</div>\n        <div class="priority ').concat(c,'">').concat(""===c?"not set":c,"</div>\n      </div>\n    </div>\n  </div>")),oe()}}(e))}))})()})();