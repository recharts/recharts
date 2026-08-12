import{r as _,G as ie}from"./iframe-BIMbD8mx.js";import{c as oe}from"./get-C2VjdU0L.js";import{o as U,r as le,c as G,b as ce,i as A,a as F}from"./resolveDefaultProps-CZ6QiDkA.js";import{g as B}from"./DOMUtils-DjDyXH_P.js";import{a as M}from"./isWellBehavedNumber-CazuspJq.js";import{u as de}from"./RechartsThemeContext-BjZ7jnPh.js";const X=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,z=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,ue=/^(px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q)$/,he=/(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,pe={cm:96/2.54,mm:96/25.4,pt:96/72,pc:96/6,in:96,Q:96/(2.54*40),px:1},me=["cm","mm","pt","pc","in","Q","px"];function fe(t){return me.includes(t)}const w="NaN";function xe(t,e){return t*pe[e]}const c=class c{constructor(e,n){this.num=e,this.unit=n,this.num=e,this.unit=n,U(e)&&(this.unit=""),n!==""&&!ue.test(n)&&(this.num=NaN,this.unit=""),fe(n)&&(this.num=xe(e,n),this.unit="px")}static parse(e){const[,n,r]=he.exec(e)??[];return n==null?c.NaN:new c(parseFloat(n),r??"")}add(e){return this.unit!==e.unit?new c(NaN,""):new c(this.num+e.num,this.unit)}subtract(e){return this.unit!==e.unit?new c(NaN,""):new c(this.num-e.num,this.unit)}multiply(e){return this.unit!==""&&e.unit!==""&&this.unit!==e.unit?new c(NaN,""):new c(this.num*e.num,this.unit||e.unit)}divide(e){return this.unit!==""&&e.unit!==""&&this.unit!==e.unit?new c(NaN,""):new c(this.num/e.num,this.unit||e.unit)}toString(){return`${this.num}${this.unit}`}isNaN(){return U(this.num)}};c.NaN=new c(NaN,"");let b=c;function J(t){if(t==null||t.includes(w))return w;let e=t;for(;e.includes("*")||e.includes("/");){const[,n,r,i]=X.exec(e)??[],a=b.parse(n??""),s=b.parse(i??""),o=r==="*"?a.multiply(s):a.divide(s);if(o.isNaN())return w;e=e.replace(X,o.toString())}for(;e.includes("+")||/.-\d+(?:\.\d+)?/.test(e);){const[,n,r,i]=z.exec(e)??[],a=b.parse(n??""),s=b.parse(i??""),o=r==="+"?a.add(s):a.subtract(s);if(o.isNaN())return w;e=e.replace(z,o.toString())}return e}const D=/\(([^()]*)\)/;function we(t){let e=t,n;for(;(n=D.exec(e))!=null;){const[,r]=n,i=J(r);e=e.replace(D,()=>i)}return e}const Te=1e3;function ge(t){if(t.length>Te)return w;let e=t.replace(/\s+/g,"");return e=we(e),e=J(e),e}function be(t){try{return ge(t)}catch{return w}}function W(t){const e=be(t.slice(5,-1));return e===w?"":e}const ee=/[ \f\n\r\t\v\u2028\u2029]+/,te=({children:t,breakAll:e,style:n})=>{try{let r=[];F(t)||(e?r=t.toString().split(""):r=t.toString().split(ee));const i=r.map(s=>({word:s,width:B(s,n).width})),a=e?0:B(" ",n).width;return{wordsWithComputedWidth:i,spaceWidth:a}}catch{return null}};function Z(t){return t==="start"||t==="middle"||t==="end"||t==="inherit"}function Q(t){return F(t)||typeof t=="string"||typeof t=="number"||typeof t=="boolean"}const ne=(t,e,n,r)=>t.reduce((i,{word:a,width:s})=>{const o=i[i.length-1];if(o&&s!=null&&(e==null||r||o.width+s+n<Number(e)))o.words.push(a),o.width+=s+n;else{const u={words:[a],width:s};i.push(u)}return i},[]),se=t=>t.reduce((e,n)=>e.width>n.width?e:n),ye="…",j=(t,e,n,r,i,a,s,o)=>{const u=t.slice(0,e),h=te({breakAll:n,style:r,children:u+ye});if(!h)return[!1,[]];const d=ne(h.wordsWithComputedWidth,a,s,o);return[d.length>i||se(d).width>Number(a),d]},Ne=({maxLines:t,children:e,style:n,breakAll:r},i,a,s,o)=>{const u=A(t),h=String(e),d=ne(i,s,a,o);if(!u||o||!(d.length>t||se(d).width>Number(s)))return d;let l=0,y=h.length-1,T=0,N;for(;l<=y&&T<=h.length-1;){const p=Math.floor((l+y)/2),E=p-1,[g,L]=j(h,E,r,n,t,s,a,o),[v]=j(h,p,r,n,t,s,a,o);if(!g&&!v&&(l=p+1),g&&v&&(y=p-1),!g&&v){N=L;break}T++}return N||d},Y=t=>[{words:F(t)?[]:t.toString().split(ee),width:void 0}],V=({width:t,scaleToFit:e,children:n,style:r,breakAll:i,maxLines:a})=>{if((t||e)&&!ie.isSsr){let s,o;const u=te({breakAll:i,children:n,style:r});if(u){const{wordsWithComputedWidth:h,spaceWidth:d}=u;s=h,o=d}else return Y(n);return Ne({breakAll:i,children:n,maxLines:a,style:r},s,o,t,!!e)}return Y(n)},re="#808080",K={angle:0,breakAll:!1,capHeight:"0.71em",fill:re,lineHeight:"1em",scaleToFit:!1,textAnchor:"start",verticalAnchor:"end",x:0,y:0},I=_.forwardRef((t,e)=>{var $,H;const n=de(),{x:r,y:i,lineHeight:a,capHeight:s,fill:o,scaleToFit:u,textAnchor:h,verticalAnchor:d,style:m,...l}=le(t,K),y=($=n.typography)==null?void 0:$.fill,T=_.useMemo(()=>{const{fill:f,...x}=n.typography??{};return{...x,...t.fill==null&&f!==void 0?{fill:f}:{},...m}},[t.fill,m,n.typography]),N=t.fill??(m==null?void 0:m.color)??((H=n.typography)==null?void 0:H.color)??y??o??K.fill,p=_.useMemo(()=>V({breakAll:l.breakAll,children:l.children,maxLines:l.maxLines,scaleToFit:u,style:T,width:l.width}),[l.breakAll,l.children,l.maxLines,u,T,l.width]),{dx:E,dy:g,angle:L,className:v,breakAll:ae,...O}={...l,style:T};if(!G(r)||!G(i)||p.length===0)return null;const P=Number(r)+(A(E)?E:0),k=Number(i)+(A(g)?g:0);if(!M(P)||!M(k))return null;let R;switch(d){case"start":R=W(`calc(${s})`);break;case"middle":R=W(`calc(${(p.length-1)/2} * -${a} + (${s} / 2))`);break;default:R=W(`calc(${p.length-1} * -${a})`);break}const S=[],q=p[0];if(u&&q!=null){const f=q.width,{width:x}=l;S.push(`scale(${A(x)&&A(f)?x/f:1})`)}return L&&S.push(`rotate(${L}, ${P}, ${k})`),S.length&&(O.transform=S.join(" ")),_.createElement("text",{...ce(O),ref:e,x:P,y:k,className:oe("recharts-text",v),textAnchor:h,fill:N.includes("url")?re:N},p.map((f,x)=>{const C=f.words.join(ae?"":" ");return _.createElement("tspan",{x:P,dy:x===0?R:a,key:`${C}-${x}`},C)}))});I.displayName="Text";try{Z.displayName="isValidTextAnchor",Z.__docgenInfo={description:"",displayName:"isValidTextAnchor",filePath:"/__w/recharts/recharts/src/component/Text.tsx",methods:[],props:{},tags:{}}}catch{}try{Q.displayName="isRenderableText",Q.__docgenInfo={description:"",displayName:"isRenderableText",filePath:"/__w/recharts/recharts/src/component/Text.tsx",methods:[],props:{},tags:{}}}catch{}try{V.displayName="getWordsByLines",V.__docgenInfo={description:"",displayName:"getWordsByLines",filePath:"/__w/recharts/recharts/src/component/Text.tsx",methods:[],props:{scaleToFit:{defaultValue:null,declarations:[{fileName:"recharts/src/component/Text.tsx",name:"TextProps"}],description:`When true, scales the text to fit within the specified width.
The text will be scaled down proportionally to fit the available space.

**Important interactions:**
- Requires \`width\` to be defined to have any effect. If width is undefined, scaleToFit does nothing.
- When enabled, \`maxLines\` restrictions are bypassed and ellipsis truncation is disabled.
- Uses the first line's width to calculate the scale factor.
- The scaling transform is applied as \`scale(width / lineWidth)\`.`,name:"scaleToFit",parent:{fileName:"recharts/src/component/Text.tsx",name:"TextProps"},required:!1,tags:{defaultValue:"false"},type:{name:"boolean"}},breakAll:{defaultValue:null,declarations:[{fileName:"recharts/src/component/Text.tsx",name:"TextProps"}],description:`When true, enables character-level breaking instead of word-level breaking.
- false: Text breaks at word boundaries (spaces, tabs, etc.)
- true: Text can break between any characters, useful for languages without spaces

**Note:** Only effective when \`width\` is defined to enable line breaking.`,name:"breakAll",parent:{fileName:"recharts/src/component/Text.tsx",name:"TextProps"},required:!1,tags:{defaultValue:"false"},type:{name:"boolean"}},maxLines:{defaultValue:null,declarations:[{fileName:"recharts/src/component/Text.tsx",name:"TextProps"}],description:`Maximum number of lines to display when text wrapping is enabled.
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
- Requires \`width\` to be set for line breaking to occur`,name:"maxLines",parent:{fileName:"recharts/src/component/Text.tsx",name:"TextProps"},required:!1,tags:{},type:{name:"number"}}},tags:{}}}catch{}try{I.displayName="Text",I.__docgenInfo={description:"",displayName:"Text",filePath:"/__w/recharts/recharts/src/component/Text.tsx",methods:[],props:{textAnchor:{defaultValue:null,declarations:[{fileName:"recharts/src/component/Text.tsx",name:"TextProps"}],description:`Horizontal text alignment within the text element.
- 'start': Text starts at the x coordinate (left-aligned for LTR text)
- 'middle': Text is centered on the x coordinate
- 'end': Text ends at the x coordinate (right-aligned for LTR text)
- 'inherit': Inherits the text-anchor from parent element

**Note:** This controls horizontal alignment only and does not affect RTL text behavior.`,name:"textAnchor",parent:{fileName:"recharts/src/component/Text.tsx",name:"TextProps"},required:!1,tags:{defaultValue:"'start'"},type:{name:"enum",raw:"TextAnchor",value:[{value:'"end"'},{value:'"middle"'},{value:'"inherit"'},{value:'"start"'}]}},angle:{defaultValue:null,declarations:[{fileName:"recharts/src/component/Text.tsx",name:"TextProps"}],description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,name:"angle",parent:{fileName:"recharts/src/component/Text.tsx",name:"TextProps"},required:!1,tags:{defaultValue:"0"},type:{name:"number"}},verticalAnchor:{defaultValue:null,declarations:[{fileName:"recharts/src/component/Text.tsx",name:"TextProps"}],description:`Vertical text alignment relative to the y coordinate.
- 'start': Text baseline starts at y coordinate (text appears below the y position)
- 'middle': Text is vertically centered on the y coordinate
- 'end': Text baseline ends at y coordinate (text appears above the y position)

**Note:** This controls vertical positioning only and does not affect RTL (right-to-left) text behavior.
The alignment calculation uses capHeight and lineHeight to determine the starting dy offset.`,name:"verticalAnchor",parent:{fileName:"recharts/src/component/Text.tsx",name:"TextProps"},required:!1,tags:{defaultValue:"'end'"},type:{name:"enum",raw:"TextVerticalAnchor",value:[{value:'"end"'},{value:'"middle"'},{value:'"start"'}]}},scaleToFit:{defaultValue:null,declarations:[{fileName:"recharts/src/component/Text.tsx",name:"TextProps"}],description:`When true, scales the text to fit within the specified width.
The text will be scaled down proportionally to fit the available space.

**Important interactions:**
- Requires \`width\` to be defined to have any effect. If width is undefined, scaleToFit does nothing.
- When enabled, \`maxLines\` restrictions are bypassed and ellipsis truncation is disabled.
- Uses the first line's width to calculate the scale factor.
- The scaling transform is applied as \`scale(width / lineWidth)\`.`,name:"scaleToFit",parent:{fileName:"recharts/src/component/Text.tsx",name:"TextProps"},required:!1,tags:{defaultValue:"false"},type:{name:"boolean"}},breakAll:{defaultValue:null,declarations:[{fileName:"recharts/src/component/Text.tsx",name:"TextProps"}],description:`When true, enables character-level breaking instead of word-level breaking.
- false: Text breaks at word boundaries (spaces, tabs, etc.)
- true: Text can break between any characters, useful for languages without spaces

**Note:** Only effective when \`width\` is defined to enable line breaking.`,name:"breakAll",parent:{fileName:"recharts/src/component/Text.tsx",name:"TextProps"},required:!1,tags:{defaultValue:"false"},type:{name:"boolean"}},maxLines:{defaultValue:null,declarations:[{fileName:"recharts/src/component/Text.tsx",name:"TextProps"}],description:`Maximum number of lines to display when text wrapping is enabled.
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
- Requires \`width\` to be set for line breaking to occur`,name:"maxLines",parent:{fileName:"recharts/src/component/Text.tsx",name:"TextProps"},required:!1,tags:{},type:{name:"number"}},lineHeight:{defaultValue:null,declarations:[{fileName:"recharts/src/component/Text.tsx",name:"TextProps"}],description:`Line height for multi-line text.
Can be a number (height in pixels) or a string with CSS units.
Used to calculate spacing between lines when text wraps to multiple lines.
Also used in verticalAnchor calculations for positioning the text block.`,name:"lineHeight",parent:{fileName:"recharts/src/component/Text.tsx",name:"TextProps"},required:!1,tags:{defaultValue:"'1em'"},type:{name:"string | number"}}},tags:{}}}catch{}export{I as T,Q as a,Z as i};
