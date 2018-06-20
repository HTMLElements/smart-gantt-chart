
/* Smart HTML Elements v1.1.0 (2018-June) 
Copyright (c) 2011-2018 jQWidgets. 
License: https://htmlelements.com/license/ */

(function(){"use strict";var a=Math.min,b=Math.max,c=Number.isInteger,d=Math.floor,e=Math.sign,f=Math.log10,g=String.prototype;if("function"!=typeof HTMLElement){var h=function(){};h.prototype=HTMLElement.prototype,HTMLElement=h}if(Array.prototype.findIndex||Object.defineProperty(Array.prototype,"findIndex",{value:function(a){if(null==this)throw new TypeError("Array.prototype.findIndex called on null or undefined");if("function"!=typeof a)throw new TypeError("predicate must be a function");for(var b,c=Object(this),d=c.length>>>0,e=arguments[1],f=0;f<d;f++)if(b=c[f],a.call(e,b,f,c))return f;return-1},enumerable:!1,configurable:!1,writable:!1}),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(a){if(null==this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof a)throw new TypeError("predicate must be a function");for(var b,c=Object(this),d=c.length>>>0,e=arguments[1],f=0;f<d;f++)if(b=c[f],a.call(e,b,f,c))return b}}),"function"!=typeof Object.assign&&function(){Object.assign=function(a){if(void 0===a||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b,c=Object(a),d=1;d<arguments.length;d++)if(b=arguments[d],void 0!==b&&null!==b)for(var e in b)b.hasOwnProperty(e)&&(c[e]=b[e]);return c}}(),g.startsWith||(g.startsWith=function(a,b){return b=b||0,this.substr(b,a.length)===a}),f||(f=function(a){var b,c=+a;return 0<c&&/^(?:10*|0\.0*1)$/.test(b=""+c)?1>c?2-b.length:b.length-1:Math.log(c)/Math.LN10}),e||(e=function(a){return(0<a)-(0>a)||+a}),g.endsWith||(g.endsWith=function(a,b){var c=this.toString();("number"!=typeof b||!isFinite(b)||d(b)!==b||b>c.length)&&(b=c.length),b-=a.length;var e=c.lastIndexOf(a,b);return-1!==e&&e===b}),c=c||function(a){return"number"==typeof a&&isFinite(a)&&d(a)===a},"KeyboardEvent"in window||!("key"in KeyboardEvent.prototype)){var j,k={keys:{3:"Cancel",6:"Help",8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",28:"Convert",29:"NonConvert",30:"Accept",31:"ModeChange",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",41:"Select",42:"Print",43:"Execute",44:"PrintScreen",45:"Insert",46:"Delete",48:["0",")"],49:["1","!"],50:["2","@"],51:["3","#"],52:["4","$"],53:["5","%"],54:["6","^"],55:["7","&"],56:["8","*"],57:["9","("],91:"OS",93:"ContextMenu",144:"NumLock",145:"ScrollLock",181:"VolumeMute",182:"VolumeDown",183:"VolumeUp",186:[";",":"],187:["=","+"],188:[",","<"],189:["-","_"],190:[".",">"],191:["/","?"],192:["`","~"],219:["[","{"],220:["\\","|"],221:["]","}"],222:["'","\""],224:"Meta",225:"AltGraph",246:"Attn",247:"CrSel",248:"ExSel",249:"EraseEof",250:"Play",251:"ZoomOut"}};for(j=1;25>j;j++)k.keys[111+j]="F"+j;var l="";for(j=65;91>j;j++)l=String.fromCharCode(j),k.keys[j]=[l.toLowerCase(),l.toUpperCase()];var m={get:function(){var a=k.keys[this.which||this.keyCode];return Array.isArray(a)&&(a=a[+this.shiftKey]),a}};Object.defineProperty(KeyboardEvent.prototype,"key",m)}Array.from||(Array.from=function(){var c=Object.prototype.toString,e=function(a){return"function"==typeof a||"[object Function]"===c.call(a)},f=function(a){var b=+a;return isNaN(b)?0:0!=b&&isFinite(b)?(0<b?1:-1)*d(Math.abs(b)):b},g=function(c){var d=f(c);return a(b(d,0),9007199254740991)};return function(a){var b=this,c=Object(a);if(null==a)throw new TypeError("Array.from requires an array-like object - not null or undefined");var d,f=1<arguments.length?arguments[1]:void 0;if("undefined"!=typeof f){if(!e(f))throw new TypeError("Array.from: when provided, the second argument must be a function");2<arguments.length&&(d=arguments[2])}for(var h,i=g(c.length),j=e(b)?Object(new b(i)):Array(i),l=0;l<i;)h=c[l],j[l]=f?"undefined"==typeof d?f(h,l):f.call(d,h,l):h,l+=1;return j.length=i,j}}()),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(a){var b=this;if(!document.documentElement.contains(b))return null;do{if(b.matches(a))return b;b=b.parentElement||b.parentNode}while(null!==b&&1===b.nodeType);return null}),g.repeat||(g.repeat=function(a){if(null==this)throw new TypeError("can't convert "+this+" to object");var b=""+this;if(a=+a,a!=a&&(a=0),0>a)throw new RangeError("repeat count must be non-negative");if(a==1/0)throw new RangeError("repeat count must be less than infinity");if(a=d(a),0==b.length||0==a)return"";if(268435456<=b.length*a)throw new RangeError("repeat count must not overflow maximum string size");for(var c="",e=0;e<a;e++)c+=b;return c}),Array.prototype.fill||Object.defineProperty(Array.prototype,"fill",{value:function(c){if(null==this)throw new TypeError("this is null or not defined");for(var d=Object(this),e=d.length>>>0,f=arguments[1],g=f>>0,h=0>g?b(e+g,0):a(g,e),i=arguments[2],j=void 0===i?e:i>>0,l=0>j?b(e+j,0):a(j,e);h<l;)d[h]=c,h++;return d}}),function(a){a&&a.prototype&&null==a.prototype.children&&Object.defineProperty(a.prototype,"children",{get:function(){for(var a,b=0,c=this.childNodes,d=[];a=c[b++];)1===a.nodeType&&d.push(a);return d}})}(window.Node||window.Element),"document"in self&&((!("classList"in document.createElement("_"))||document.createElementNS&&!("classList"in document.createElementNS("http://www.w3.org/2000/svg","g")))&&function(a){if("Element"in a){var b=a.Element.prototype,c=Object,d=String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,"")},e=Array.prototype.indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(b in this&&this[b]===a)return b;return-1},f=function(a,b){this.name=a,this.code=DOMException[a],this.message=b},g=function(a,b){if(""===b)throw new f("SYNTAX_ERR","The token must not be empty.");if(/\s/.test(b))throw new f("INVALID_CHARACTER_ERR","The token must not contain space characters.");return e.call(a,b)},h=function(a){for(var b=d.call(a.getAttribute("class")||""),c=b?b.split(/\s+/):[],e=0,f=c.length;e<f;e++)this.push(c[e]);this._updateClassName=function(){a.setAttribute("class",this.toString())}},i=h.prototype=[],j=function(){return new h(this)};if(f.prototype=Error.prototype,i.item=function(a){return this[a]||null},i.contains=function(a){return~g(this,a+"")},i.add=function(){var a,b=arguments,c=0,d=b.length,e=!1;do a=b[c]+"",~g(this,a)||(this.push(a),e=!0);while(++c<d);e&&this._updateClassName()},i.remove=function(){var a,b,c=arguments,d=0,e=c.length,f=!1;do for(a=c[d]+"",b=g(this,a);~b;)this.splice(b,1),f=!0,b=g(this,a);while(++d<e);f&&this._updateClassName()},i.toggle=function(a,b){var c=this.contains(a),d=c?!0!==b&&"remove":!1!==b&&"add";return d&&this[d](a),!0===b||!1===b?b:!c},i.replace=function(a,b){var c=g(a+"");~c&&(this.splice(c,1,b),this._updateClassName())},i.toString=function(){return this.join(" ")},c.defineProperty){var k={get:j,enumerable:!0,configurable:!0};try{c.defineProperty(b,"classList",k)}catch(a){(void 0===a.number||-2146823252===a.number)&&(k.enumerable=!1,c.defineProperty(b,"classList",k))}}else c.prototype.__defineGetter__&&b.__defineGetter__("classList",j)}}(self),function(){var a=document.createElement("_");if(a.classList.add("c1","c2"),!a.classList.contains("c2")){var b=function(a){var b=DOMTokenList.prototype[a];DOMTokenList.prototype[a]=function(a){var c,d=arguments.length;for(c=0;c<d;c++)a=arguments[c],b.call(this,a)}};b("add"),b("remove")}if(a.classList.toggle("c3",!1),a.classList.contains("c3")){var c=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(a,b){return 1 in arguments&&!this.contains(a)==!b?b:c.call(this,a)}}"replace"in document.createElement("_").classList||(DOMTokenList.prototype.replace=function(a,b){var c=this.toString().split(" "),d=c.indexOf(a+"");~d&&(c=c.slice(d),this.remove.apply(this,c),this.add(b),this.add.apply(this,c.slice(1)))}),a=null}())})(),function(a){var b=a.babelHelpers={};b.typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},b.jsx=function(){var a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(b,c,d,e){var f=b&&b.defaultProps,g=arguments.length-3;if(c||0===g||(c={}),c&&f)for(var h in f)void 0===c[h]&&(c[h]=f[h]);else c||(c=f||{});if(1===g)c.children=e;else if(1<g){for(var j=Array(g),k=0;k<g;k++)j[k]=arguments[k+3];c.children=j}return{$$typeof:a,type:b,key:void 0===d?null:""+d,ref:null,props:c,_owner:null}}}(),b.asyncIterator=function(a){if("function"==typeof Symbol){if(Symbol.asyncIterator){var b=a[Symbol.asyncIterator];if(null!=b)return b.call(a)}if(Symbol.iterator)return a[Symbol.iterator]()}throw new TypeError("Object is not async iterable")},b.asyncGenerator=function(){function a(a){this.value=a}function b(b){function c(e,f){try{var g=b[e](f),h=g.value;h instanceof a?Promise.resolve(h.value).then(function(a){c("next",a)},function(a){c("throw",a)}):d(g.done?"return":"normal",g.value)}catch(a){d("throw",a)}}function d(a,b){"return"===a?e.resolve({value:b,done:!0}):"throw"===a?e.reject(b):e.resolve({value:b,done:!1});e=e.next,e?c(e.key,e.arg):f=null}var e,f;this._invoke=function(a,b){return new Promise(function(d,g){var h={key:a,arg:b,resolve:d,reject:g,next:null};f?f=f.next=h:(e=f=h,c(a,b))})},"function"!=typeof b.return&&(this.return=void 0)}return"function"==typeof Symbol&&Symbol.asyncIterator&&(b.prototype[Symbol.asyncIterator]=function(){return this}),b.prototype.next=function(a){return this._invoke("next",a)},b.prototype.throw=function(a){return this._invoke("throw",a)},b.prototype.return=function(a){return this._invoke("return",a)},{wrap:function(a){return function(){return new b(a.apply(this,arguments))}},await:function(b){return new a(b)}}}(),b.asyncGeneratorDelegate=function(a,b){function c(c,d){return e=!0,d=new Promise(function(b){b(a[c](d))}),{done:!1,value:b(d)}}var d={},e=!1;return"function"==typeof Symbol&&Symbol.iterator&&(d[Symbol.iterator]=function(){return this}),d.next=function(a){return e?(e=!1,a):c("next",a)},"function"==typeof a.throw&&(d.throw=function(a){if(e)throw e=!1,a;return c("throw",a)}),"function"==typeof a.return&&(d.return=function(a){return c("return",a)}),d},b.asyncToGenerator=function(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}return g.done?void a(h):Promise.resolve(h).then(function(a){d("next",a)},function(a){d("throw",a)})}return d("next")})}},b.classCallCheck=function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")},b.createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),b.defineEnumerableProperties=function(a,b){for(var c in b){var d=b[c];d.configurable=d.enumerable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,c,d)}return a},b.defaults=function(a,b){for(var c=Object.getOwnPropertyNames(b),d=0;d<c.length;d++){var e=c[d],f=Object.getOwnPropertyDescriptor(b,e);f&&f.configurable&&a[e]===void 0&&Object.defineProperty(a,e,f)}return a},b.defineProperty=function(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a},b.extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},b.get=function a(b,c,d){null===b&&(b=Function.prototype);var e=Object.getOwnPropertyDescriptor(b,c);if(e===void 0){var f=Object.getPrototypeOf(b);return null===f?void 0:a(f,c,d)}if("value"in e)return e.value;var g=e.get;return void 0===g?void 0:g.call(d)},b.inherits=function(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)},b.instanceof=function(a,b){return null!=b&&"undefined"!=typeof Symbol&&b[Symbol.hasInstance]?b[Symbol.hasInstance](a):a instanceof b},b.interopRequireDefault=function(a){return a&&a.__esModule?a:{default:a}},b.interopRequireWildcard=function(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b.default=a,b},b.newArrowCheck=function(a,b){if(a!==b)throw new TypeError("Cannot instantiate an arrow function")},b.objectDestructuringEmpty=function(a){if(null==a)throw new TypeError("Cannot destructure undefined")},b.objectWithoutProperties=function(a,b){var c={};for(var d in a)0<=b.indexOf(d)||Object.prototype.hasOwnProperty.call(a,d)&&(c[d]=a[d]);return c},b.possibleConstructorReturn=function(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"==typeof b||"function"==typeof b)?b:a},b.selfGlobal="undefined"==typeof a?self:a,b.set=function a(b,c,d,e){var f=Object.getOwnPropertyDescriptor(b,c);if(f===void 0){var g=Object.getPrototypeOf(b);null!==g&&a(g,c,d,e)}else if("value"in f&&f.writable)f.value=d;else{var h=f.set;h!==void 0&&h.call(e,d)}return d},b.slicedToArray=function(){function a(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{!d&&h["return"]&&h["return"]()}finally{if(e)throw f}}return c}return function(b,c){if(Array.isArray(b))return b;if(Symbol.iterator in Object(b))return a(b,c);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),b.slicedToArrayLoose=function(a,b){if(Array.isArray(a))return a;if(Symbol.iterator in Object(a)){for(var c,d=[],e=a[Symbol.iterator]();!(c=e.next()).done&&(d.push(c.value),!(b&&d.length===b)););return d}throw new TypeError("Invalid attempt to destructure non-iterable instance")},b.taggedTemplateLiteral=function(a,b){return Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))},b.taggedTemplateLiteralLoose=function(a,b){return a.raw=b,a},b.temporalRef=function(a,b,c){if(a===c)throw new ReferenceError(b+" is not defined - temporal dead zone");else return a},b.temporalUndefined={},b.toArray=function(a){return Array.isArray(a)?a:Array.from(a)},b.toConsumableArray=function(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}}("undefined"==typeof global?self:global),function(){var a="undefined"==typeof HTMLTemplateElement;/Trident/.test(navigator.userAgent)&&function(){var a=document.importNode;document.importNode=function(){var b=a.apply(document,arguments);if(b.nodeType===Node.DOCUMENT_FRAGMENT_NODE){var c=document.createDocumentFragment();return c.appendChild(b),c}return b}}();var b=function(){if(!a){var b=document.createElement("template"),c=document.createElement("template");c.content.appendChild(document.createElement("div")),b.content.appendChild(c);var d=b.cloneNode(!0);return 0===d.content.childNodes.length||0===d.content.firstChild.content.childNodes.length}}(),c="template",d=function(){};if(a){function a(a){return"&"===a?"&amp;":"<"===a?"&lt;":">"===a?"&gt;":" "===a?"&nbsp;":void 0}function b(b){return b.replace(k,a)}var e=document.implementation.createHTMLDocument("template"),f=!0,g=document.createElement("style");g.textContent=c+"{display:none;}";var h=document.head;h.insertBefore(g,h.firstElementChild),d.prototype=Object.create(HTMLElement.prototype),d.decorate=function(a){if(!a.content){a.content=e.createDocumentFragment();for(var c;c=a.firstChild;)a.content.appendChild(c);if(a.cloneNode=function(a){return d.cloneNode(this,a)},f)try{Object.defineProperty(a,"innerHTML",{get:function(){for(var a="",c=this.content.firstChild;c;c=c.nextSibling)a+=c.outerHTML||b(c.data);return a},set:function(a){for(e.body.innerHTML=a,d.bootstrap(e);this.content.firstChild;)this.content.removeChild(this.content.firstChild);for(;e.body.firstChild;)this.content.appendChild(e.body.firstChild)},configurable:!0})}catch(a){f=!1}d.bootstrap(a.content)}},d.bootstrap=function(a){for(var b,e=a.querySelectorAll(c),f=0,g=e.length;f<g&&(b=e[f]);f++)d.decorate(b)},document.addEventListener("DOMContentLoaded",function(){d.bootstrap(document)});var i=document.createElement;document.createElement=function(){"use strict";var a=i.apply(document,arguments);return"template"===a.localName&&d.decorate(a),a};var j=document.createElementNS;document.createElementNS=function(){"use strict";var a=j.apply(document,arguments);return"http://www.w3.org/1999/xhtml"===a.namespaceURI&&"template"===a.localName&&d.decorate(a),a};var k=/[&\u00A0<>]/g}if(a||b){var l=Node.prototype.cloneNode;d.cloneNode=function(a,b){var c=l.call(a,!1);return this.decorate&&this.decorate(c),b&&(c.content.appendChild(l.call(a.content,!0)),this.fixClonedDom(c.content,a.content)),c},d.fixClonedDom=function(a,b){if(b.querySelectorAll)for(var d,e,f=b.querySelectorAll(c),g=a.querySelectorAll(c),h=0,j=g.length;void 0>h;h++)e=f[h],d=g[h],this.decorate&&this.decorate(e),d.parentNode.replaceChild(e.cloneNode(!0),d)};var m=document.importNode;Node.prototype.cloneNode=function(a){var b=l.call(this,a);return a&&d.fixClonedDom(b,this),b},document.importNode=function(a,b){if(a.localName===c)return d.cloneNode(a,b);var e=m.call(document,a,b);return b&&d.fixClonedDom(e,a),e},b&&(HTMLTemplateElement.prototype.cloneNode=function(a){return d.cloneNode(this,a)})}a&&(window.HTMLTemplateElement=d)}();