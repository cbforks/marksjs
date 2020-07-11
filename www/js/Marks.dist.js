var Marks=function(e){var t={};function s(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,s),i.l=!0,i.exports}return s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=22)}([function(e,t,s){"use strict";var n=this&&this.__awaiter||function(e,t,s,n){return new(s||(s=Promise))((function(i,r){function o(e){try{d(n.next(e))}catch(e){r(e)}}function c(e){try{d(n.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?i(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,c)}d((n=n.apply(e,t||[])).next())}))};function i(e){return new Promise((function(t){const s=document.createElement("script");s.src=e,s.addEventListener("load",(function(){t(!0)})),document.head.appendChild(s)}))}function r(e){var t,s,n;const i=/@@([\w\.]+)@@/g;let r=null;console.log("context",e.context);let o=e.content;for(;null!==(r=i.exec(e.content));){const i=r[0].substr(2).replace("@@","");console.log(i),null!==(t=null==e?void 0:e.context)&&void 0!==t&&t[i]?o=o.replace(`@@${i}@@`,e.context[i]):o=o.replace(`@@${i}@@`,`<${null!==(s=e.options.refElt)&&void 0!==s?s:"div"} data-mk-ref="true" id='${i}'></${null!==(n=e.options.refElt)&&void 0!==n?n:"div"}>`)}e.content=o}function o(e){e.domContent.querySelectorAll('[data-mk-ref="true"]').forEach(t=>{if(t.id in e.globalRefs)return t.appendChild(e.globalRefs[t.id]),void delete e.globalRefs[t.id]})}function c(e){e.options.ref&&(e.globalRefs[e.options.ref]=e.domContent,e.domContent=null)}function d(e,t){var s,n;if(e.options.theme&&(e.themeStyles[t].theme[e.options.theme]?e.domContent.classList.add(e.themeStyles[t].theme[e.options.theme]):e.themeStyles.all.theme[e.options.theme]&&e.domContent.classList.add(e.themeStyles.all.theme[e.options.theme])),e.options.variant){e.options.variant.split(",").forEach(s=>{var n,i;null!==(n=e.themeStyles[t])&&void 0!==n&&n.variant[s]?e.domContent.classList.add(e.themeStyles[t].variant[s]):null!==(i=e.themeStyles.all)&&void 0!==i&&i.variant[s]&&e.domContent.classList.add(e.themeStyles.all.variant[s])})}if(null===(n=null===(s=e.themeStyles)||void 0===s?void 0:s[t])||void 0===n?void 0:n.classes){e.themeStyles[t].classes.split(",").forEach(t=>e.domContent.classList.add(t))}if(e.options.classes){e.options.classes.split(",").forEach(t=>e.domContent.classList.add(t))}}Object.defineProperty(t,"__esModule",{value:!0}),t.applyStyle=t.processInternals=t.processRef=t.prepareInternals=t.processNestedRef=t.prepareNestedRef=t.formatMinSpace=t.loadAssets=t.loadScript=t.waitAsync=void 0,t.waitAsync=(e=0)=>new Promise(t=>setTimeout(()=>{t()},e)),t.loadScript=i,t.loadAssets=function(e){return n(this,void 0,void 0,(function*(){for(let t=0;t<e.length;t++)if(e[t].endsWith(".js")&&(yield i(e[t])),e[t].endsWith(".css")){const s=document.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("href",e[t]),document.head.appendChild(s)}}))},t.formatMinSpace=function(e){let t=e.length;const s=e.split("\n");return s.forEach(e=>{const s=e.search(/\S/);s<t&&(t=s)}),t<0&&(t=0),s.map(e=>e.substring(t)).join("\n")},t.prepareNestedRef=r,t.processNestedRef=o,t.prepareInternals=function(e){r(e)},t.processRef=c,t.processInternals=function(e,t){o(e),d(e,t),c(e)},t.applyStyle=d},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BaseModel=void 0;t.BaseModel=class{constructor(e){this._RendererRepository=e,this.source="",this.cleanSource="",this.output="",this.domElement=null,this.options={},this.processed=0,this.dirty=!1}reset(){this.cleanSource="",this.output="",this.options={},this.processed=0,this.parse()}process(e){var t,s,n;if(this.domElement=document.createElement(null!==(t=this.options.pElt)&&void 0!==t?t:"p"),this._RendererRepository.getByType(this.type,this.get()).sort((e,t)=>t.weight-e.weight).forEach((t,s)=>{var n,i,r;t.context=e,0===s?(this.output=t.render(),t.domContent&&(null===(n=this.domElement)||void 0===n||n.appendChild(t.domContent),t.domContent=null),this.processed++):(t.set(this.type,this.output,this.options),t.canProcess()&&(this.output=t.render(),t.domContent&&(null===(i=this.domElement)||void 0===i||i.appendChild(t.domContent),t.domContent=null),this.processed++));do{t.set(this.type,this.output,this.options),t.succeeded()&&(this.output=t.render(),t.domContent&&(null===(r=this.domElement)||void 0===r||r.appendChild(t.domContent),t.domContent=null),this.processed++)}while(t.succeeded())}),0===this.domElement.childElementCount&&(this.domElement=null),1===(null===(s=this.domElement)||void 0===s?void 0:s.childElementCount))if(this.options.noPElt)this.domElement=this.domElement.children.item(0);else switch(null===(n=this.domElement.children.item(0))||void 0===n?void 0:n.tagName.toLowerCase()){case"br":case"p":case"hr":case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":this.domElement=this.domElement.children.item(0)}this.options["mk-show"]&&(e[this.options["mk-show"]]||(this.domElement=null))}append(e){}parse(){this.cleanSource=this.source}parseOptions(e){const t=e.split(" ").filter((e,t)=>0===t||e.length>0);t[0].includes(":")||(this.options.name=t.shift()),t.forEach(e=>{const t=e.split(":");this.options[t[0]]=2===t.length?t[1]:"true"})}get(){return{type:this.type,content:this.cleanSource,options:this.options}}clone(){const e=new this.constructor;return e._RendererRepository=this._RendererRepository,e.options=this.options,e.source=this.source,e.cleanSource=this.cleanSource,e.output=this.output,e}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(1);class i extends n.BaseModel{constructor(e,t){if(super(t),this.type="TEXT",e){if(this.reset(),this.source=e.text,this.source.includes("::- ")){const e=this.source.split("::-");this.source=e[0],this.parseOptions(e[1])}this.source.endsWith("  ")&&(this.source+="\n"),this.parse()}}append(e){this.source+=e.text,e.text.endsWith("  ")&&(this.source+="\n"),this.parse()}parse(){this.cleanSource=this.source}}t.default=i},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BoldRenderer=void 0;t.BoldRenderer=class{constructor(){this._succeeded=!1,this.applyTo=["HEAD","TEXT","TABLE","LIST-O","LIST-U","CHECK","BLOCK"],this.options={},this.content="",this.domContent=null,this.type="",this.weight=101}render(){let e=/\_{2}(.*?)\_{2}/;return this._succeeded=e.test(this.content),this._succeeded?this.content.replace(e,"<b>$1</b>"):(e=/\*{2}(.*?)\*{2}/,this._succeeded=e.test(this.content),this._succeeded?this.content.replace(e,"<b>$1</b>"):this.content)}succeeded(){return this._succeeded}canProcess(){var e;return"BLOCK"!==this.type||null!==(e=void 0!==this.options.emp)&&void 0!==e&&e}set(e,t,s){this.type=e,this.content=t,this.options=s}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ItalicRenderer=void 0;t.ItalicRenderer=class{constructor(){this._succeeded=!1,this.applyTo=["HEAD","TEXT","TABLE","LIST-O","LIST-U","CHECK","BLOCK"],this.options={},this.content="",this.domContent=null,this.type="",this.weight=100}render(){let e=/\_{1}(.*?)\_{1}/;return this._succeeded=e.test(this.content),this._succeeded?this.content.replace(e,"<em>$1</em>"):(e=/\*{1}(.*?)\*{1}/,this._succeeded=e.test(this.content),this._succeeded?this.content.replace(e,"<em>$1</em>"):this.content)}succeeded(){return this._succeeded}canProcess(){var e;return"BLOCK"!==this.type||null!==(e=void 0!==this.options.emp)&&void 0!==e&&e}set(e,t,s){this.type=e,this.content=t,this.options=s}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LineRenderer=void 0;t.LineRenderer=class{constructor(){this._succeeded=!1,this.applyTo=["HEAD","TEXT","TABLE","LIST-O","LIST-U","CHECK","BLOCK"],this.options={},this.content="",this.domContent=null,this.type="",this.weight=101}render(){let e=/\~{2}(.*?)\~{2}/;return this._succeeded=e.test(this.content),this._succeeded?this.content.replace(e,"<span style='text-decoration: line-through'>$1</span>"):(e=/\~{1}(.*?)\~{1}/,this._succeeded=e.test(this.content),this._succeeded?this.content.replace(e,"<span style='text-decoration: underline'>$1</span>"):this.content)}succeeded(){return this._succeeded}canProcess(){var e;return"BLOCK"!==this.type||null!==(e=void 0!==this.options.emp)&&void 0!==e&&e}set(e,t,s){this.type=e,this.content=t,this.options=s}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.InlineQuoteRenderer=void 0;t.InlineQuoteRenderer=class{constructor(){this._succeeded=!1,this.applyTo=["HEAD","TEXT","TABLE","LIST-O","LIST-U","BLOCK"],this.options={},this.content="",this.domContent=null,this.type="",this.weight=100}render(){let e=/\`{1}(.*?)\`{1}/;return this._succeeded=e.test(this.content),this._succeeded?this.content.replace(e,"<code>$1</code>"):this.content}succeeded(){return this._succeeded}canProcess(){var e;return"BLOCK"!==this.type||null!==(e=void 0!==this.options.emp)&&void 0!==e&&e}set(e,t,s){this.type=e,this.content=t,this.options=s}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LinkRenderer=void 0;t.LinkRenderer=class{constructor(){this._succeeded=!1,this.applyTo=["BLOCK-Q","HEAD","TEXT","TABLE","LIST-O","LIST-U","BLOCK"],this.options={},this.content="",this.domContent=null,this.type="",this.weight=90}render(){let e=/\[(?<alt>.*?)\]\((?<link>.*?)\s*(?<to>\".+\")?\)/;if(this._succeeded=e.test(this.content),this._succeeded){let t=this.content.replace(e,'<a href="$2" target=$3>$1</a>');return t.includes("target=>")&&(t=t.replace("target=>",">")),t}return this.content}succeeded(){return this._succeeded}canProcess(){var e;return"BLOCK"!==this.type||null!==(e=void 0!==this.options.emp)&&void 0!==e&&e}set(e,t,s){this.type=e,this.content=t,this.options=s}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ImgRenderer=void 0;t.ImgRenderer=class{constructor(){this._succeeded=!1,this.applyTo=["BLOCK-Q","HEAD","TEXT","TABLE","LIST-O","LIST-U","BLOCK"],this.options={},this.content="",this.domContent=null,this.type="",this.weight=100}render(){let e=/!\[(?<alt>.*?)\]\((?<link>.*?)\s*(?<title>\".+\")?\)/;return this._succeeded=e.test(this.content),this._succeeded?this.content.replace(e,'<img src="$2" alt="$1" title=$3/>'):this.content}succeeded(){return this._succeeded}canProcess(){var e;return"BLOCK"!==this.type||null!==(e=void 0!==this.options.emp)&&void 0!==e&&e}set(e,t,s){this.type=e,this.content=t,this.options=s}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CheckRenderer=void 0;const n=s(0);t.CheckRenderer=class{constructor(){this._succeeded=!1,this.applyTo=["CHECK"],this.options={},this.domContent=null,this.content="",this.type="",this.weight=0}render(){var e;n.prepareInternals(this),this.domContent=document.createElement((null===(e=this.options)||void 0===e?void 0:e.ordered)?"ol":"ul");const t=/\s*(?<type>[\-0-9]\.?)\s*(?<check>\[[ x]\])\s*(?<text>.*)\s*/;this.content.split("\n").map(e=>e.trim()).map(e=>{var s,n,i;const r=t.exec(e);return{type:null===(s=null==r?void 0:r.groups)||void 0===s?void 0:s.type,check:null===(n=null==r?void 0:r.groups)||void 0===n?void 0:n.check,text:null===(i=null==r?void 0:r.groups)||void 0===i?void 0:i.text}}).forEach(e=>{var t,s,n;const i=document.createElement("li"),r=document.createElement("input");r.setAttribute("type","checkbox"),"[x]"===(null===(t=e.check)||void 0===t?void 0:t.toLowerCase())&&r.setAttribute("checked","checked"),r.onclick=()=>!1,r.style.marginRight="5px",i.appendChild(r);const o=document.createElement("span");o.innerHTML=e.text,i.appendChild(o),!(null===(s=this.options)||void 0===s?void 0:s.bullet)&&(i.style.listStyleType="none"),null===(n=this.domContent)||void 0===n||n.appendChild(i)});return n.processInternals(this,"task"),this.content}succeeded(){return this._succeeded}canProcess(){return this.applyTo.includes(this.type)}set(e,t,s){this.type=e,this.content=t,this.options=s}}},function(e,t,s){"use strict";var n=this&&this.__awaiter||function(e,t,s,n){return new(s||(s=Promise))((function(i,r){function o(e){try{d(n.next(e))}catch(e){r(e)}}function c(e){try{d(n.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?i(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,c)}d((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.CodeRenderer=void 0;const i=s(0);let r=!1;t.CodeRenderer=class{constructor({skipInit:e,version:t,serverPath:s}={skipInit:!1}){this._succeeded=!1,this.applyTo=["CODE"],this.options={},this.domContent=null,this.content="",this.type="",this.weight=0,this._version="1.20.0",this._serverPath="https://cdnjs.cloudflare.com/ajax/libs/prism",this._depName="marks_prism_dep",r=!!e,this._version=null!=t?t:this._version,this._serverPath=null!=s?s:this._serverPath}render(){this._succeeded=!1;const e=document.createElement("code");return this.domContent=document.createElement("pre"),e.appendChild(document.createTextNode(this.content)),this.domContent.appendChild(e),i.applyStyle(this,"code"),this.options.language&&e.classList.add(`language-${this.options.language}`),i.processRef(this),this.content}succeeded(){return this._succeeded}canProcess(){return"CODE"===this.type}set(e,t,s){this.type=e,this.content=t,this.options=s}renderFinished(e){return n(this,void 0,void 0,(function*(){for(r||(r=!0,yield i.loadAssets([`${this._serverPath}/${this._version}/components/prism-core.min.js`,`${this._serverPath}/${this._version}/plugins/autoloader/prism-autoloader.min.js`,`${this._serverPath}/${this._version}/themes/prism-tomorrow.min.css`,`${this._serverPath}/${this._version}/components/prism-bash.min.js`,`${this._serverPath}/${this._version}/components/prism-clike.min.js`,`${this._serverPath}/${this._version}/components/prism-javascript.min.js`,`${this._serverPath}/${this._version}/components/prism-typescript.min.js`]));!window.Prism;)yield i.waitAsync();Prism.highlightAll()}))}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EscapeRenderer=void 0;t.EscapeRenderer=class{constructor(){this._succeeded=!1,this.applyTo=["HEAD","TEXT","TABLE","LIST-O","LIST-U","CHECK","BLOCK"],this.options={},this.content="",this.domContent=null,this.type="",this.weight=150}render(){let e=/\\\\/g;return this._succeeded=e.test(this.content),this._succeeded?this.content.replace(e,"&#92;"):(e=/\\&/g,this._succeeded=e.test(this.content),this._succeeded?this.content.replace(e,"&#38;"):(e=/\\\-/g,this._succeeded=e.test(this.content),this._succeeded?this.content.replace(e,"&#45;"):(e=/\\`/g,this._succeeded=e.test(this.content),this._succeeded?this.content.replace(e,"&#96;"):(e=/\\\*/g,this._succeeded=e.test(this.content),this._succeeded?this.content.replace(e,"&#42;"):(e=/\\_/g,this._succeeded=e.test(this.content),this._succeeded?this.content.replace(e,"&#95;"):(e=/\\~/g,this._succeeded=e.test(this.content),this._succeeded?this.content.replace(e,"&#126;"):this.content))))))}succeeded(){return this._succeeded}canProcess(){var e;return"BLOCK"!==this.type||null!==(e=void 0!==this.options.emp)&&void 0!==e&&e}set(e,t,s){this.type=e,this.content=t,this.options=s}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.HeadRenderer=void 0;const n=s(0);t.HeadRenderer=class{constructor(){this._succeeded=!1,this.applyTo=["HEAD"],this.options={},this.content="",this.domContent=null,this.type="",this.weight=0}render(){var e,t,s,i;let r=/^\s*(?<header>#{1,6})(?<content>.*)/;if(this._succeeded=r.test(this.content),this._succeeded){n.prepareInternals(this);const o=r.exec(this.content),c=null!==(t=null===(e=null==o?void 0:o.groups)||void 0===e?void 0:e.header)&&void 0!==t?t:"",d=null!==(i=null===(s=null==o?void 0:o.groups)||void 0===s?void 0:s.content)&&void 0!==i?i:"";this.content=`<h${c.length}>${d}</h${c.length}>`,this.domContent=document.createElement("div"),this.domContent.innerHTML=this.content,this.domContent=this.domContent.children.item(0),n.processInternals(this,"head")}return this.content}succeeded(){return this._succeeded}canProcess(){return"HEAD"===this.type}set(e,t,s){this.type=e,this.content=t,this.options=s}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ListRenderer=void 0;const n=s(0);t.ListRenderer=class{constructor(){this._succeeded=!1,this.applyTo=["LIST-U","LIST-O"],this.options={},this.domContent=null,this.content="",this.type="",this.weight=0}render(){this._succeeded=!1,n.prepareInternals(this);const e=this.content.split("\n");let t=-1,s=0;let i=[];e.forEach((e,n,r)=>{const o=(e=>{let t=0;for(let s=0;s<e.length&&" "===e.charAt(s);s++)t++;return t})(e),c={s:o,text:e.trimLeft().substr(2).trimLeft(),parent:t,i:n,c:[]};if(o>s&&(t=n-1,c.parent=t,s=o),o<s){let e=-1,n=null;i.forEach(t=>{t.i<c.i&&t.s<c.s&&(e=t.i,n=t)}),t=e,c.parent=e,s=o}i.push(c)}),i=i.map(e=>(-1!==e.parent&&i.filter(t=>t.i===e.parent)[0].c.push(e),e)).filter(e=>-1==e.parent);const r=(e,t)=>(t.forEach(t=>{const s=document.createElement("li");if(s.innerHTML=t.text,e.appendChild(s),t.c.length){const e=document.createElement("LIST-U"===this.type?"ul":"ol");s.appendChild(e),r(e,t.c)}}),e),o=document.createElement("LIST-U"===this.type?"ul":"ol");return r(o,i),this.domContent=o,n.processInternals(this,"list"),this.content}succeeded(){return this._succeeded}canProcess(){return this.applyTo.includes(this.type)}set(e,t,s){this.type=e,this.content=t,this.options=s}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RulerRenderer=void 0;const n=s(0);t.RulerRenderer=class{constructor(){this._succeeded=!1,this.applyTo=["RULER"],this.options={},this.domContent=null,this.content="",this.type="",this.weight=110}render(){return this._succeeded=!1,this.domContent=document.createElement("hr"),"dashed"===this.options.variant&&(this.domContent.style.borderStyle="dashed"),n.applyStyle(this,"hr"),this.options.ref&&(this.globalRefs[this.options.ref]=this.domContent,this.domContent=null),this.content}succeeded(){return this._succeeded}canProcess(){return this.applyTo.includes(this.type)}set(e,t,s){this.type=e,this.content=t,this.options=s}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TableRenderer=void 0;const n=s(0);t.TableRenderer=class{constructor(){this._succeeded=!1,this.applyTo=["TABLE"],this.options={},this.domContent=null,this.content="",this.type="",this.weight=0}render(){var e,t;this._succeeded=!1,n.prepareInternals(this);const s=this.content.split("\n").map(e=>((e=e.trim()).endsWith("|")&&(e=e.substring(0,e.length-1)),e=e.substr(1)));if(s.length<2)return this.content;const i=s.shift().split("|"),r=s.shift().split("|").map(e=>{let t="left";return e.startsWith(":")&&e.endsWith(":")&&(t="center"),!e.startsWith(":")&&e.endsWith(":")&&(t="right"),t});let o=`\n  <table>\n    <thead>\n      <tr>\n      ${i.map((e,t)=>`        <th align="${r[t]}">${e}</th>`).join("\n")}\n      </tr>\n    <tbody>\n    ${s.map(e=>`\n      <tr>\n      ${e.split("|").map((e,t)=>`        <td align="${r[t]}">${e}</td>`).join("\n")}\n      </tr>`).join("\n")}\n    </tbody>\n  </table>\n    `;return this.domContent=document.createElement("div"),this.domContent.innerHTML=o,(null===(e=this.domContent)||void 0===e?void 0:e.querySelector("table"))&&(this.domContent=null===(t=this.domContent)||void 0===t?void 0:t.querySelector("table"),n.applyStyle(this,"table"),this.options.width&&(this.domContent.style.width=this.options.width)),n.processNestedRef(this),n.processRef(this),this.content}succeeded(){return this._succeeded}canProcess(){return this.applyTo.includes(this.type)}set(e,t,s){this.type=e,this.content=t,this.options=s}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TextRenderer=void 0;const n=s(0);t.TextRenderer=class{constructor(){this._succeeded=!1,this.applyTo=["TEXT","BLANK"],this.options={},this.domContent=null,this.content="",this.type="",this.weight=0}render(){var e;if(this._succeeded=!1,"BLANK"===this.type){this.domContent=document.createElement("p");for(let e=1;e<this.content.length;e+=2)this.domContent.appendChild(document.createElement("br"))}else this.content.length>0&&(n.prepareInternals(this),this.domContent=document.createElement(null!==(e=this.options.elt)&&void 0!==e?e:"span"),this.domContent.innerHTML=this.content.replace(/\n/g,"<br />"),n.processInternals(this,"text"));return this.content}succeeded(){return this._succeeded}canProcess(){return this.applyTo.includes(this.type)}set(e,t,s){this.type=e,this.content=t,this.options=s}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BlockQRenderer=void 0;const n=s(0);t.BlockQRenderer=class{constructor(){this._succeeded=!1,this.applyTo=["BLOCK-Q"],this.options={},this.domContent=null,this.content="",this.type="",this.weight=0}render(){var e;this._succeeded=!1,n.prepareInternals(this),this.domContent=document.createElement("blockquote");const t=null===(e=this.cloneRenderer)||void 0===e?void 0:e.call(this);if(t){const e=this.content.split("\n");this.content=e.map(e=>e.trimLeft()).join("\n");const s=t.internalRender(this.content);s&&this.domContent.appendChild(s)}else console.log("No renderer");return n.processInternals(this,"blockquote"),this.content}succeeded(){return this._succeeded}canProcess(){return this.applyTo.includes(this.type)}set(e,t,s){this.type=e,this.content=t,this.options=s}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BlockHtmlRenderer=void 0;const n=s(0);t.BlockHtmlRenderer=class{constructor(){this._succeeded=!1,this.applyTo=["BLOCK"],this.options={},this.content="",this.domContent=null,this.type="",this.weight=0}render(){var e;return this._succeeded=!1,n.prepareInternals(this),this.domContent=document.createElement(null!==(e=this.options.elt)&&void 0!==e?e:"div"),this.domContent.innerHTML=this.content,n.processInternals(this,"html"),this.content}succeeded(){return this._succeeded}canProcess(){var e;return"html"===(null===(e=this.options.name)||void 0===e?void 0:e.toLowerCase())}set(e,t,s){this.type=e,this.content=t,this.options=s}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BlockImgRenderer=void 0;const n=s(0);t.BlockImgRenderer=class{constructor(){this._succeeded=!1,this.applyTo=["BLOCK"],this.options={},this.content="",this.domContent=null,this.type="",this.weight=0}render(){this._succeeded=!1;const e=JSON.parse(`{ ${this.content} }`);return this.domContent=document.createElement("img"),this.domContent.setAttribute("alt",e.alt),this.domContent.setAttribute("title",e.title),this.domContent.setAttribute("src",e.src),n.applyStyle(this,"img"),n.processRef(this),this.content}succeeded(){return this._succeeded}canProcess(){var e;return"img"===(null===(e=this.options.name)||void 0===e?void 0:e.toLowerCase())}set(e,t,s){this.type=e,this.content=t,this.options=s}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BlockMarksRenderer=void 0;const n=s(0);t.BlockMarksRenderer=class{constructor(){this._succeeded=!1,this.applyTo=["BLOCK"],this.options={},this.content="",this.domContent=null,this.type="",this.weight=0}render(){var e,t;this._succeeded=!1;const s=null===(e=this.cloneRenderer)||void 0===e?void 0:e.call(this);if(this.options.noPelt="true",s){this.content=n.formatMinSpace(this.content),this.domContent=s.internalRender(this.content);const e=this.domContent;this.options.fetch&&fetch(this.options.fetch).then(e=>e.text()).then(t=>{const n=s.internalRender(t);this.options.before?e.prepend(n):e.appendChild(n)})}else this.domContent=document.createElement(null!==(t=this.options.elt)&&void 0!==t?t:"div"),this.domContent.appendChild(document.createTextNode(this.content));return n.applyStyle(this,"marks"),n.processRef(this),this.content}succeeded(){return this._succeeded}canProcess(){var e;return"marks"===(null===(e=this.options.name)||void 0===e?void 0:e.toLowerCase())}set(e,t,s){this.type=e,this.content=t,this.options=s}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BlockTableRenderer=void 0;const n=s(0);t.BlockTableRenderer=class{constructor(){this._succeeded=!1,this.applyTo=["BLOCK"],this.options={},this.domContent=null,this.content="",this.type="",this.weight=100}render(){var e,t,s;if(this._succeeded=!1,n.prepareInternals(this),"markdown"===this.options.format){const e=this.content.split("\n").map(e=>((e=e.trim()).endsWith("|")&&(e=e.substring(0,e.length-1)),e=e.substr(1)));if(e.length<2)return this.content;const t=e.shift().split("|"),s=e.shift().split("|").map(e=>{let t="left";return e.startsWith(":")&&e.endsWith(":")&&(t="center"),!e.startsWith(":")&&e.endsWith(":")&&(t="right"),t});let n=`\n    <table>\n      <thead>\n        <tr>\n        ${t.map((e,t)=>`        <th align="${s[t]}">${e}</th>`).join("\n")}\n        </tr>\n      <tbody>\n      ${e.map(e=>`\n        <tr>\n        ${e.split("|").map((e,t)=>`        <td align="${s[t]}">${e}</td>`).join("\n")}\n        </tr>`).join("\n")}\n      </tbody>\n    </table>\n      `;this.domContent=document.createElement("div"),this.domContent.innerHTML=n}if("csv"===this.options.format){const t=null!==(e=this.options.separator)&&void 0!==e?e:",",s=this.content.split("\n").map(e=>e=e.trim());if(s.length<2)return this.content;const n=s.shift().split(t),i=n.map((e,t)=>{var s;return null!==(s=this.options[`align_col${t+1}`])&&void 0!==s?s:"left"});let r=`\n    <table>\n      <thead>\n        <tr>\n        ${n.map((e,t)=>`        <th align="${i[t]}">${e}</th>`).join("\n")}\n        </tr>\n      <tbody>\n      ${s.map(e=>`\n        <tr>\n        ${e.split(t).map((e,t)=>`        <td align="${i[t]}">${e}</td>`).join("\n")}\n        </tr>`).join("\n")}\n      </tbody>\n    </table>\n      `;this.domContent=document.createElement("div"),this.domContent.innerHTML=r}return(null===(t=this.domContent)||void 0===t?void 0:t.querySelector("table"))&&(this.domContent=null===(s=this.domContent)||void 0===s?void 0:s.querySelector("table"),n.applyStyle(this,"table"),this.options.width&&(this.domContent.style.width=this.options.width)),n.processInternals(this,"table"),this.content}succeeded(){return this._succeeded}canProcess(){var e;if("table"===(null===(e=this.options.name)||void 0===e?void 0:e.toLowerCase())&&this.options.format)switch(this.options.format){case"markdown":case"csv":return!0;default:return!1}return!1}set(e,t,s){this.type=e,this.content=t,this.options=s}}},function(e,t,s){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,s,n){void 0===n&&(n=s),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[s]}})}:function(e,t,s,n){void 0===n&&(n=s),e[n]=t[s]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var s in e)"default"!==s&&Object.hasOwnProperty.call(e,s)&&n(t,e,s);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.Plugins=void 0;var o=s(23);Object.defineProperty(t,"MarksRenderer",{enumerable:!0,get:function(){return o.MarksRenderer}});const c=s(3),d=s(4),l=s(5),h=s(6),u=s(7),a=s(8),p=s(9),m=s(10),f=s(11),y=s(12),v=s(13),_=s(14),C=s(15),g=s(16),b=s(17),R=s(18),E=s(19),T=s(20),O=s(21);t.Helper=r(s(0)),t.Plugins=[f.EscapeRenderer,c.BoldRenderer,d.ItalicRenderer,l.LineRenderer,h.InlineQuoteRenderer,u.LinkRenderer,a.ImgRenderer,p.CheckRenderer,m.CodeRenderer,y.HeadRenderer,v.ListRenderer,_.RulerRenderer,C.TableRenderer,g.TextRenderer,b.BlockQRenderer,R.BlockHtmlRenderer,E.BlockImgRenderer,T.BlockMarksRenderer,O.BlockTableRenderer];var L=s(3);Object.defineProperty(t,"BoldRenderer",{enumerable:!0,get:function(){return L.BoldRenderer}});var B=s(4);Object.defineProperty(t,"ItalicRenderer",{enumerable:!0,get:function(){return B.ItalicRenderer}});var P=s(5);Object.defineProperty(t,"LineRenderer",{enumerable:!0,get:function(){return P.LineRenderer}});var x=s(6);Object.defineProperty(t,"InlineQuoteRenderer",{enumerable:!0,get:function(){return x.InlineQuoteRenderer}});var j=s(7);Object.defineProperty(t,"LinkRenderer",{enumerable:!0,get:function(){return j.LinkRenderer}});var S=s(8);Object.defineProperty(t,"ImgRenderer",{enumerable:!0,get:function(){return S.ImgRenderer}});var k=s(9);Object.defineProperty(t,"CheckRenderer",{enumerable:!0,get:function(){return k.CheckRenderer}});var M=s(10);Object.defineProperty(t,"CodeRenderer",{enumerable:!0,get:function(){return M.CodeRenderer}});var w=s(11);Object.defineProperty(t,"EscapeRenderer",{enumerable:!0,get:function(){return w.EscapeRenderer}});var I=s(12);Object.defineProperty(t,"HeadRenderer",{enumerable:!0,get:function(){return I.HeadRenderer}});var $=s(13);Object.defineProperty(t,"ListRenderer",{enumerable:!0,get:function(){return $.ListRenderer}});var A=s(14);Object.defineProperty(t,"RulerRenderer",{enumerable:!0,get:function(){return A.RulerRenderer}});var K=s(15);Object.defineProperty(t,"TableRenderer",{enumerable:!0,get:function(){return K.TableRenderer}});var H=s(16);Object.defineProperty(t,"TextRenderer",{enumerable:!0,get:function(){return H.TextRenderer}});var D=s(17);Object.defineProperty(t,"BlockQRenderer",{enumerable:!0,get:function(){return D.BlockQRenderer}});var X=s(18);Object.defineProperty(t,"BlockHtmlRenderer",{enumerable:!0,get:function(){return X.BlockHtmlRenderer}});var N=s(19);Object.defineProperty(t,"BlockImgRenderer",{enumerable:!0,get:function(){return N.BlockImgRenderer}});var Q=s(20);Object.defineProperty(t,"BlockMarksRenderer",{enumerable:!0,get:function(){return Q.BlockMarksRenderer}});var U=s(21);Object.defineProperty(t,"BlockTableRenderer",{enumerable:!0,get:function(){return U.BlockTableRenderer}})},function(e,t,s){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MarksRenderer=void 0;const i=s(24),r=n(s(2)),o=n(s(25)),c=n(s(26)),d=n(s(27)),l=n(s(28)),h=n(s(29)),u=n(s(30)),a=n(s(31)),p=n(s(32)),m=n(s(33)),f=s(0);class y{constructor(e){this.manualTrigger=!1,this.context={},this._rendererRepo=null!=e?e:new i.RendererRepository,this._globalRefs={}}clone(){const e=new y(this._rendererRepo.clone());return e._themeStyles=this._themeStyles,e._globalRefs=this._globalRefs,e.context=this.context,e._rendererRepo.refs.forEach(e=>e.cloneRenderer=this.clone.bind(this)),e}setThemeStyle(e){this._themeStyles=e}internalRender(e,t=!0,s){var n;const i=f.formatMinSpace(e).replace(/\r\n/g,"\n");this._rendererRepo.refs.forEach(e=>{e.globalRefs=this._globalRefs,e.themeStyles=this._themeStyles});let y=null!==(n=i.replace(/\\r\\n/g,"\n").split("\n"))&&void 0!==n?n:[];const v=[{type:"HEAD",rgx:/^\s*#{1,6}(.*)/,apply:["-"]},{type:"HEAD-B",rgx:/^\s*=+\s*/,apply:["-"]},{type:"CHECK",rgx:/^\s*\-\s*\[[ x]\](.*)/,apply:["-"]},{type:"LIST-O",rgx:/^\s*[0-9]+\.\s(.*)/,apply:["-"]},{type:"LIST-U",rgx:/^\s*[\*-]\s+(.*)/,apply:["-"]},{type:"TABLE",rgx:/^\s*\|(.*)\|\s*/,apply:["-"]},{type:"BLOCK-Q",rgx:/^\s*\>(.*)/,apply:["-"]},{type:"BLOCK-B",rgx:/^\s*\[.*?\]\s*\{\{\s*/,apply:["-"],state:"BLOCK"},{type:"BLOCK-E",rgx:/^\s*\}\}\s*$/,apply:["BLOCK"],state:"-"},{type:"CODE-B",rgx:/^[`]{3}\w*\s*/,apply:["-"],state:"CODE"},{type:"CODE-E",rgx:/^[`]{3}\s*$/,apply:["CODE"],state:"-"}],_=[];let C="-";const g=v.filter(e=>"BLOCK-B"===e.type)[0];let b=0;performance.now();y.forEach(e=>{let t=!1;if(v.filter(e=>e.apply.includes(C)).forEach(s=>{if(!t&&s.rgx.test(e)){if("BLOCK-E"===s.type&&(b--,b>0))return;"BLOCK-B"===s.type&&b++,_.push({type:s.type,text:e}),t=!0,"state"in s&&(C=s.state)}}),!t)switch(C){case"BLOCK":g.rgx.test(e)&&b++,_.push({type:"T-TEXT",text:e});break;case"CODE":_.push({type:"C-TEXT",text:e});break;default:0===e.length?_.push({type:"BLANK",text:""}):_.push({type:"TEXT",text:e})}}),_.filter(e=>"LIST-U"===e.type).forEach(e=>{e.text.trim().startsWith("*")&&e.text.trim().endsWith("*")&&(e.type="TEXT")});let R=null,E=[];const T={TEXT:r.default,HEAD:o.default},O={"LIST-O":d.default,"LIST-U":c.default,"BLOCK-Q":m.default,TABLE:l.default,CHECK:a.default,BLANK:p.default},L={"CODE-B":u.default,"BLOCK-B":h.default};_.forEach(e=>{switch(e.type){case"TEXT":case"HEAD":R&&(E.push(R),R=null),E.push(new T[e.type](e,this._rendererRepo));break;case"LIST-O":case"LIST-U":case"CHECK":case"BLOCK-Q":case"TABLE":case"BLANK":if(R&&(null==R?void 0:R.type)!==e.type&&(E.push(R),R=null),R){R.append(e);break}R=new O[e.type](e,this._rendererRepo);break;case"CODE-B":case"BLOCK-B":R&&(E.push(R),R=null),R=new L[e.type](e,this._rendererRepo);break;case"C-TEXT":case"T-TEXT":null==R||R.append(e);break;case"CODE-E":case"BLOCK-E":R&&E.push(R),R=null;break;case"HEAD-B":if(R&&(E.push(R),R=null),"TEXT"===E[E.length-1].type){const t=E.pop(),s=e.text.replace(/=/g,"#");E.push(new o.default({type:"HEAD",text:`${s} ${null==t?void 0:t.source}`},this._rendererRepo))}else E.push(new r.default(e,this._rendererRepo))}}),null!==R&&E.push(R),R=null,E.forEach(e=>{if("TEXT"===e.type){const t=e.source.trim();switch(t[0]){case"_":if(t.length>2){let s=!0;for(let e=0;e<t.length;e++)t[e]!==t[0]&&(s=!1);s&&(e.type="RULER")}}}if("TEXT"!==e.type||null!==R)return"TEXT"===e.type&&R?(R.append({text:e.source}),void(e.dirty=!0)):void("TEXT"!==e.type&&(R=null));R=e}),E=E.filter(e=>!1===e.dirty);const B=[];E.forEach(e=>{if(e.options["mk-repeat"]){console.log("Trying to repeat");const t=this.context[e.options["mk-repeat"]];Array.isArray(t)&&t.length>0&&t.forEach(t=>{const s=e.clone();s.process(t),B.push(s)})}else e.process(this.context),B.push(e)});performance.now();const P=s||document.createElement("div");return B.forEach(e=>e.domElement&&P.appendChild(e.domElement)),t||this.manualTrigger||this.triggerRenderFinished(P),P}triggerRenderFinished(e){var t;this._rendererRepo.refs.forEach(t=>{var s;return null===(s=t.renderFinished)||void 0===s?void 0:s.call(t,e)}),null===(t=this.renderFinished)||void 0===t||t.call(this)}renderFromHtmlNode(e,t){var s,n,i,r;let o=null!==(n=null===(s=document.querySelector(e))||void 0===s?void 0:s.innerHTML)&&void 0!==n?n:"";var c=document.createElement("textarea");c.innerHTML=o,o=null!==(i=c.value)&&void 0!==i?i:"";const d=this.internalRender(o,!1);(null!==(r=document.querySelector(null!=t?t:"body"))&&void 0!==r?r:document.body).appendChild(d)}render(e,t){return this.internalRender(e,!1,t)}registerRenderers(...e){e.forEach(e=>{var t;e.cloneRenderer=this.clone.bind(this),null===(t=e.willInit)||void 0===t||t.call(e),this._rendererRepo.register(e)})}}t.MarksRenderer=y},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RendererRepository=void 0;class n{constructor(){this.refs=[],this.hash={}}clear(){this.hash={}}register(e){this.refs.push(e),e.applyTo.forEach(t=>{t in this.hash||(this.hash[t]=[]),this.hash[t].push(e)})}getByType(e,t){var s,n;return null!==(n=null===(s=this.hash[e])||void 0===s?void 0:s.filter(s=>(s.set(e,t.content,t.options),s.canProcess())))&&void 0!==n?n:[]}clone(){const e=new n;return this.refs.forEach(t=>e.register(new t.constructor)),e}}t.RendererRepository=n},function(e,t,s){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=n(s(2));class r extends i.default{constructor(e,t){if(super(e,t),this.type="HEAD",e){if(this.reset(),this.source=e.text,this.source.includes("::- ")){const e=this.source.split("::-");this.source=e[0],this.parseOptions(e[1])}this.parse()}}}t.default=r},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(1);class i extends n.BaseModel{constructor(e,t){if(super(t),this.type="LIST-U",e){if(this.reset(),this.source=e.text,this.source.includes("::- ")){const e=this.source.split("::-");this.source=e[0],this.parseOptions(e[1])}this.parse()}}append(e){this.source+="\n",this.source+=e.text,this.parse()}}t.default=i},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(1);class i extends n.BaseModel{constructor(e,t){if(super(t),this.type="LIST-O",e){if(this.reset(),this.source=e.text,this.source.includes("::- ")){const e=this.source.split("::-");this.source=e[0],this.parseOptions(e[1])}this.parse()}}append(e){this.source+="\n",this.source+=e.text,this.parse()}}t.default=i},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(1);class i extends n.BaseModel{constructor(e,t){if(super(t),this.type="TABLE",!e)return;let s=e.text,n="";e.text.includes("::- ")&&([s,n]=e.text.split("::-")),this.source=s,n.length&&this.parseOptions(n)}append(e){this.source+="\n",this.source+=e.text,this.parse()}}t.default=i},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(1);class i extends n.BaseModel{constructor(e,t){var s,n,i;super(t),this.type="BLOCK",e&&(this.reset(),this.parseOptions(null!==(i=null===(n=null===(s=/^\s*\[(?<options>.*?)\]\s*\{\{/.exec(e.text))||void 0===s?void 0:s.groups)||void 0===n?void 0:n.options)&&void 0!==i?i:""))}append(e){this.source.length>0&&(this.source+="\n"),this.source+=e.text,this.parse()}}t.default=i},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(1);class i extends n.BaseModel{constructor(e,t){super(t),this.type="CODE",e&&(this.parseOptions(`language:${e.text.trim().substr(3)}`),super.source="")}append(e){this.source.length>0&&(this.source+="\n"),this.source+=e.text,this.parse()}}t.default=i},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(1);class i extends n.BaseModel{constructor(e,t){if(super(t),this.type="CHECK",e){if(this.reset(),this.source=e.text,this.source.includes("::- ")){const e=this.source.split("::-");this.source=e[0],this.parseOptions(e[1])}this.parse()}}append(e){this.source+="\n",this.source+=e.text,this.parse()}parse(){this.cleanSource=this.source}}t.default=i},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(1);class i extends n.BaseModel{constructor(e,t){super(t),this.type="BLANK",e&&(this.reset(),this.source="@",this.parse())}append(e){this.source+="@",this.parse()}parse(){this.cleanSource=this.source}}t.default=i},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(1);class i extends n.BaseModel{constructor(e,t){if(super(t),this.type="BLOCK-Q",e){if(this.source=e.text.replace(">",""),this.source.includes("::- ")){const e=this.source.split("::-");this.source=e[0],this.parseOptions(e[1])}this.parse()}}append(e){this.source+="\n",this.source+=e.text.replace(">",""),this.parse()}}t.default=i}]);