import{r as h,G as se}from"./iframe-BMDGt33G.js";import{c as re}from"./get-C2VjdU0L.js";import{p as C,r as ae,i as A,c as G,b as ie,a as F}from"./resolveDefaultProps-DOWWXdZM.js";import{g as M}from"./DOMUtils-DBrlboks.js";import{a as U}from"./isWellBehavedNumber-D73nv25y.js";import{u as oe}from"./useId-D70LGxdi.js";import{u as le}from"./useBackwardsCompatibleTheme-DUdO4_jh.js";const B=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,X=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,ce=/^(px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q)$/,de=/(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,ue={cm:96/2.54,mm:96/25.4,pt:96/72,pc:96/6,in:96,Q:96/(2.54*40),px:1},he=["cm","mm","pt","pc","in","Q","px"];function pe(t){return he.includes(t)}const g="NaN";function me(t,e){return t*ue[e]}const c=class c{constructor(e,n){this.num=e,this.unit=n,this.num=e,this.unit=n,C(e)&&(this.unit=""),n!==""&&!ce.test(n)&&(this.num=NaN,this.unit=""),pe(n)&&(this.num=me(e,n),this.unit="px")}static parse(e){const[,n,a]=de.exec(e)??[];return n==null?c.NaN:new c(parseFloat(n),a??"")}add(e){return this.unit!==e.unit?new c(NaN,""):new c(this.num+e.num,this.unit)}subtract(e){return this.unit!==e.unit?new c(NaN,""):new c(this.num-e.num,this.unit)}multiply(e){return this.unit!==""&&e.unit!==""&&this.unit!==e.unit?new c(NaN,""):new c(this.num*e.num,this.unit||e.unit)}divide(e){return this.unit!==""&&e.unit!==""&&this.unit!==e.unit?new c(NaN,""):new c(this.num/e.num,this.unit||e.unit)}toString(){return`${this.num}${this.unit}`}isNaN(){return C(this.num)}};c.NaN=new c(NaN,"");let v=c;function Y(t){if(t==null||t.includes(g))return g;let e=t;for(;e.includes("*")||e.includes("/");){const[,n,a,i]=B.exec(e)??[],o=v.parse(n??""),s=v.parse(i??""),r=a==="*"?o.multiply(s):o.divide(s);if(r.isNaN())return g;e=e.replace(B,r.toString())}for(;e.includes("+")||/.-\d+(?:\.\d+)?/.test(e);){const[,n,a,i]=X.exec(e)??[],o=v.parse(n??""),s=v.parse(i??""),r=a==="+"?o.add(s):o.subtract(s);if(r.isNaN())return g;e=e.replace(X,r.toString())}return e}const z=/\(([^()]*)\)/;function fe(t){let e=t,n;for(;(n=z.exec(e))!=null;){const[,a]=n,i=Y(a);e=e.replace(z,()=>i)}return e}const xe=1e3;function we(t){if(t.length>xe)return g;let e=t.replace(/\s+/g,"");return e=fe(e),e=Y(e),e}function ge(t){try{return we(t)}catch{return g}}function O(t){const e=ge(t.slice(5,-1));return e===g?"":e}function Te(t){return t.fill!=null||t.color==null?t:{...t,fill:t.color}}const K=/[ \f\n\r\t\v\u2028\u2029]+/,J=({children:t,breakAll:e,style:n})=>{try{let a=[];F(t)||(e?a=t.toString().split(""):a=t.toString().split(K));const i=a.map(s=>({word:s,width:M(s,n).width})),o=e?0:M(" ",n).width;return{wordsWithComputedWidth:i,spaceWidth:o}}catch{return null}};function D(t){return t==="start"||t==="middle"||t==="end"||t==="inherit"}function Z(t){return F(t)||typeof t=="string"||typeof t=="number"||typeof t=="boolean"}const ee=(t,e,n,a)=>t.reduce((i,{word:o,width:s})=>{const r=i[i.length-1];if(r&&s!=null&&(e==null||a||r.width+s+n<Number(e)))r.words.push(o),r.width+=s+n;else{const p={words:[o],width:s};i.push(p)}return i},[]),te=t=>t.reduce((e,n)=>e.width>n.width?e:n),be="…",Q=(t,e,n,a,i,o,s,r)=>{const p=t.slice(0,e),l=J({breakAll:n,style:a,children:p+be});if(!l)return[!1,[]];const d=ee(l.wordsWithComputedWidth,o,s,r);return[d.length>i||te(d).width>Number(o),d]},ye=({maxLines:t,children:e,style:n,breakAll:a},i,o,s,r)=>{const p=A(t),l=String(e),d=ee(i,s,o,r);if(!p||r||!(d.length>t||te(d).width>Number(s)))return d;let T=0,m=l.length-1,u=0,x;for(;T<=m&&u<=l.length-1;){const w=Math.floor((T+m)/2),L=w-1,[P,W]=Q(l,L,a,n,t,s,o,r),[b]=Q(l,w,a,n,t,s,o,r);if(!P&&!b&&(T=w+1),P&&b&&(m=w-1),!P&&b){x=W;break}u++}return x||d},j=t=>[{words:F(t)?[]:t.toString().split(K),width:void 0}],q=({width:t,scaleToFit:e,children:n,style:a,breakAll:i,maxLines:o})=>{if((t||e)&&!se.isSsr){let s,r;const p=J({breakAll:i,children:n,style:a});if(p){const{wordsWithComputedWidth:l,spaceWidth:d}=p;s=l,r=d}else return j(n);return ye({breakAll:i,children:n,maxLines:o,style:a},s,r,t,!!e)}return j(n)},Ne="#808080",ve={fill:Ne},Pe={angle:0,breakAll:!1,capHeight:"0.71em",lineHeight:"1em",scaleToFit:!1,textAnchor:"start",verticalAnchor:"end",x:0,y:0},$=h.forwardRef((t,e)=>{const n=le(f=>f.typography,{fill:t.fill},ve),a=ae(t,Pe),i=oe(),{x:o,y:s,lineHeight:r,capHeight:p,scaleToFit:l,textAnchor:d,verticalAnchor:R,style:T,textPath:m,...u}=a,{angle:x,dx:w,dy:L,className:P,breakAll:W,...b}=u,{width:V}=b,_=Number(o)+(A(w)?w:0),S=Number(s)+(A(L)?L:0),I=h.useMemo(()=>Te({...n,...T}),[T,n]),y=h.useMemo(()=>q({breakAll:u.breakAll,children:u.children,maxLines:u.maxLines,scaleToFit:l,style:I,width:u.width}),[u.breakAll,u.children,u.maxLines,l,I,u.width]),H=h.useMemo(()=>{const f=[],N=y[0];if(l&&N!=null){const E=N.width;f.push(`scale(${A(V)&&A(E)?V/E:1})`)}return x&&m==null&&f.push(`rotate(${x}, ${_}, ${S})`),f},[l,y,V,x,_,S,m]),ne=h.useMemo(()=>{const f=x&&m!=null?`rotate(${x}deg)`:void 0;return{...f!=null?{transform:f,transformOrigin:"center",transformBox:"fill-box"}:{},...I}},[I,x,m]);if(!G(o)||!G(s)||y.length===0||!U(_)||!U(S))return null;let k;switch(R){case"start":k=O(`calc(${p})`);break;case"middle":k=O(`calc(${(y.length-1)/2} * -${r} + (${p} / 2))`);break;default:k=O(`calc(${y.length-1} * -${r})`);break}return h.createElement("text",{transform:H.length>0?H.join(" "):void 0,...ie(b),style:ne,ref:e,x:_,y:S,className:re("recharts-text",P),textAnchor:d},m==null?y.map((f,N)=>{const E=f.words.join(W?"":" ");return h.createElement("tspan",{x:_,dy:N===0?k:r,key:`${E}-${N}`},E)}):h.createElement(h.Fragment,null,h.createElement("defs",null,h.createElement("path",{id:i,d:m})),h.createElement("textPath",{xlinkHref:`#${i}`},u.children)))});$.displayName="Text";try{D.displayName="isValidTextAnchor",D.__docgenInfo={description:"",displayName:"isValidTextAnchor",filePath:"/__w/recharts/recharts/src/component/Text.tsx",methods:[],props:{},tags:{}}}catch{}try{Z.displayName="isRenderableText",Z.__docgenInfo={description:"",displayName:"isRenderableText",filePath:"/__w/recharts/recharts/src/component/Text.tsx",methods:[],props:{},tags:{}}}catch{}try{q.displayName="getWordsByLines",q.__docgenInfo={description:"",displayName:"getWordsByLines",filePath:"/__w/recharts/recharts/src/component/Text.tsx",methods:[],props:{scaleToFit:{defaultValue:null,declarations:[{fileName:"recharts/src/component/Text.tsx",name:"TextProps"}],description:`When true, scales the text to fit within the specified width.
The text will be scaled down proportionally to fit the available space.

**Important interactions:**
- Requires \`width\` to be defined to have any effect. If width is undefined, scaleToFit does nothing.
- When enabled, \`maxLines\` restrictions are bypassed and ellipsis truncation is disabled.
- Uses the first line's width to calculate the scale factor.
- The scaling transform is applied as \`scale(width / lineWidth)\`.`,name:"scaleToFit",parent:{fileName:"recharts/src/component/Text.tsx",name:"TextProps"},required:!1,tags:{defaultValue:"false"},type:{name:"boolean"}},breakAll:{defaultValue:null,declarations:[{fileName:"recharts/src/component/Text.tsx",name:"TextProps"}],description:`When true, enables character-level breaking instead of word-level breaking.
- false: Text breaks at word boundaries (spaces, tabs, etc.)
- true: Text can break between any characters, useful for languages without spaces

**Note:** Only effective when \`width\` is defined to enable line breaking.
Ignored when \`textPath\` is set because path text is not split into lines.`,name:"breakAll",parent:{fileName:"recharts/src/component/Text.tsx",name:"TextProps"},required:!1,tags:{defaultValue:"false"},type:{name:"boolean"}},maxLines:{defaultValue:null,declarations:[{fileName:"recharts/src/component/Text.tsx",name:"TextProps"}],description:`Maximum number of lines to display when text wrapping is enabled.
When text exceeds this limit, it will be truncated with an ellipsis (…).

**Important requirements for ellipsis truncation:**
- \`width\` must be defined (no effect when width is undefined)
- \`scaleToFit\` must be false (when scaleToFit is true, maxLines is bypassed)
- Text must actually overflow the specified maxLines or width constraints

**Truncation behavior:**
- Uses binary search to find the optimal truncation point
- Adds ellipsis (…) at the end of the truncated text
- Ensures the truncated text + ellipsis fits within the constraints

**Interaction with other props:**
- When \`scaleToFit\` is true, this property is ignored
- Requires \`width\` to be set for line breaking to occur
- Ignored when \`textPath\` is set because path text is rendered directly without truncation`,name:"maxLines",parent:{fileName:"recharts/src/component/Text.tsx",name:"TextProps"},required:!1,tags:{},type:{name:"number"}}},tags:{}}}catch{}try{$.displayName="Text",$.__docgenInfo={description:"",displayName:"Text",filePath:"/__w/recharts/recharts/src/component/Text.tsx",methods:[],props:{textAnchor:{defaultValue:null,declarations:[{fileName:"recharts/src/component/Text.tsx",name:"TextProps"}],description:`Horizontal text alignment within the text element.
- 'start': Text starts at the x coordinate (left-aligned for LTR text)
- 'middle': Text is centered on the x coordinate
- 'end': Text ends at the x coordinate (right-aligned for LTR text)
- 'inherit': Inherits the text-anchor from parent element

**Note:** This controls horizontal alignment only and does not affect RTL text behavior.
This prop is also used when \`textPath\` is set.`,name:"textAnchor",parent:{fileName:"recharts/src/component/Text.tsx",name:"TextProps"},required:!1,tags:{defaultValue:"'start'"},type:{name:"enum",raw:"TextAnchor",value:[{value:'"end"'},{value:'"middle"'},{value:'"inherit"'},{value:'"start"'}]}},textPath:{defaultValue:null,declarations:[{fileName:"recharts/src/component/Text.tsx",name:"TextProps"}],description:"When set, renders the text along the SVG path described by this `d` attribute.\nIn path mode, `breakAll`, `lineHeight`, `maxLines`, and `verticalAnchor` are ignored.",name:"textPath",parent:{fileName:"recharts/src/component/Text.tsx",name:"TextProps"},required:!1,tags:{since:"3.11"},type:{name:"string"}},angle:{defaultValue:null,declarations:[{fileName:"recharts/src/component/Text.tsx",name:"TextProps"}],description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,name:"angle",parent:{fileName:"recharts/src/component/Text.tsx",name:"TextProps"},required:!1,tags:{defaultValue:"0"},type:{name:"number"}},verticalAnchor:{defaultValue:null,declarations:[{fileName:"recharts/src/component/Text.tsx",name:"TextProps"}],description:`Vertical text alignment relative to the y coordinate.
- 'start': Text baseline starts at y coordinate (text appears below the y position)
- 'middle': Text is vertically centered on the y coordinate
- 'end': Text baseline ends at y coordinate (text appears above the y position)

**Note:** This controls vertical positioning only and does not affect RTL (right-to-left) text behavior.
The alignment calculation uses capHeight and lineHeight to determine the starting dy offset.
Ignored when \`textPath\` is set because the path controls the text's positioning.`,name:"verticalAnchor",parent:{fileName:"recharts/src/component/Text.tsx",name:"TextProps"},required:!1,tags:{defaultValue:"'end'"},type:{name:"enum",raw:"TextVerticalAnchor",value:[{value:'"end"'},{value:'"middle"'},{value:'"start"'}]}},scaleToFit:{defaultValue:null,declarations:[{fileName:"recharts/src/component/Text.tsx",name:"TextProps"}],description:`When true, scales the text to fit within the specified width.
The text will be scaled down proportionally to fit the available space.

**Important interactions:**
- Requires \`width\` to be defined to have any effect. If width is undefined, scaleToFit does nothing.
- When enabled, \`maxLines\` restrictions are bypassed and ellipsis truncation is disabled.
- Uses the first line's width to calculate the scale factor.
- The scaling transform is applied as \`scale(width / lineWidth)\`.`,name:"scaleToFit",parent:{fileName:"recharts/src/component/Text.tsx",name:"TextProps"},required:!1,tags:{defaultValue:"false"},type:{name:"boolean"}},breakAll:{defaultValue:null,declarations:[{fileName:"recharts/src/component/Text.tsx",name:"TextProps"}],description:`When true, enables character-level breaking instead of word-level breaking.
- false: Text breaks at word boundaries (spaces, tabs, etc.)
- true: Text can break between any characters, useful for languages without spaces

**Note:** Only effective when \`width\` is defined to enable line breaking.
Ignored when \`textPath\` is set because path text is not split into lines.`,name:"breakAll",parent:{fileName:"recharts/src/component/Text.tsx",name:"TextProps"},required:!1,tags:{defaultValue:"false"},type:{name:"boolean"}},maxLines:{defaultValue:null,declarations:[{fileName:"recharts/src/component/Text.tsx",name:"TextProps"}],description:`Maximum number of lines to display when text wrapping is enabled.
When text exceeds this limit, it will be truncated with an ellipsis (…).

**Important requirements for ellipsis truncation:**
- \`width\` must be defined (no effect when width is undefined)
- \`scaleToFit\` must be false (when scaleToFit is true, maxLines is bypassed)
- Text must actually overflow the specified maxLines or width constraints

**Truncation behavior:**
- Uses binary search to find the optimal truncation point
- Adds ellipsis (…) at the end of the truncated text
- Ensures the truncated text + ellipsis fits within the constraints

**Interaction with other props:**
- When \`scaleToFit\` is true, this property is ignored
- Requires \`width\` to be set for line breaking to occur
- Ignored when \`textPath\` is set because path text is rendered directly without truncation`,name:"maxLines",parent:{fileName:"recharts/src/component/Text.tsx",name:"TextProps"},required:!1,tags:{},type:{name:"number"}},lineHeight:{defaultValue:null,declarations:[{fileName:"recharts/src/component/Text.tsx",name:"TextProps"}],description:`Line height for multi-line text.
Can be a number (height in pixels) or a string with CSS units.
Used to calculate spacing between lines when text wraps to multiple lines.
Also used in verticalAnchor calculations for positioning the text block.
Ignored when \`textPath\` is set because the text is rendered along a single path.`,name:"lineHeight",parent:{fileName:"recharts/src/component/Text.tsx",name:"TextProps"},required:!1,tags:{defaultValue:"'1em'"},type:{name:"string | number"}}},tags:{}}}catch{}export{$ as T,Z as a,D as i};
