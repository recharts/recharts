import{r as _,G as ae}from"./iframe-BMarL12M.js";import{c as ie}from"./get-C2VjdU0L.js";import{p as C,r as oe,c as H,b as le,i as A,a as F}from"./resolveDefaultProps-C6wBzGKi.js";import{g as U}from"./DOMUtils-DSG72bMg.js";import{a as G}from"./isWellBehavedNumber-DBs0imhW.js";import{u as ce}from"./useBackwardsCompatibleTheme-DDTyJRfe.js";const B=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,M=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,de=/^(px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q)$/,ue=/(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,he={cm:96/2.54,mm:96/25.4,pt:96/72,pc:96/6,in:96,Q:96/(2.54*40),px:1},pe=["cm","mm","pt","pc","in","Q","px"];function me(t){return pe.includes(t)}const w="NaN";function fe(t,e){return t*he[e]}const c=class c{constructor(e,n){this.num=e,this.unit=n,this.num=e,this.unit=n,C(e)&&(this.unit=""),n!==""&&!de.test(n)&&(this.num=NaN,this.unit=""),me(n)&&(this.num=fe(e,n),this.unit="px")}static parse(e){const[,n,r]=ue.exec(e)??[];return n==null?c.NaN:new c(parseFloat(n),r??"")}add(e){return this.unit!==e.unit?new c(NaN,""):new c(this.num+e.num,this.unit)}subtract(e){return this.unit!==e.unit?new c(NaN,""):new c(this.num-e.num,this.unit)}multiply(e){return this.unit!==""&&e.unit!==""&&this.unit!==e.unit?new c(NaN,""):new c(this.num*e.num,this.unit||e.unit)}divide(e){return this.unit!==""&&e.unit!==""&&this.unit!==e.unit?new c(NaN,""):new c(this.num/e.num,this.unit||e.unit)}toString(){return`${this.num}${this.unit}`}isNaN(){return C(this.num)}};c.NaN=new c(NaN,"");let b=c;function K(t){if(t==null||t.includes(w))return w;let e=t;for(;e.includes("*")||e.includes("/");){const[,n,r,i]=B.exec(e)??[],a=b.parse(n??""),s=b.parse(i??""),o=r==="*"?a.multiply(s):a.divide(s);if(o.isNaN())return w;e=e.replace(B,o.toString())}for(;e.includes("+")||/.-\d+(?:\.\d+)?/.test(e);){const[,n,r,i]=M.exec(e)??[],a=b.parse(n??""),s=b.parse(i??""),o=r==="+"?a.add(s):a.subtract(s);if(o.isNaN())return w;e=e.replace(M,o.toString())}return e}const X=/\(([^()]*)\)/;function xe(t){let e=t,n;for(;(n=X.exec(e))!=null;){const[,r]=n,i=K(r);e=e.replace(X,()=>i)}return e}const we=1e3;function Te(t){if(t.length>we)return w;let e=t.replace(/\s+/g,"");return e=xe(e),e=K(e),e}function ge(t){try{return Te(t)}catch{return w}}function W(t){const e=ge(t.slice(5,-1));return e===w?"":e}const J=/[ \f\n\r\t\v\u2028\u2029]+/,ee=({children:t,breakAll:e,style:n})=>{try{let r=[];F(t)||(e?r=t.toString().split(""):r=t.toString().split(J));const i=r.map(s=>({word:s,width:U(s,n).width})),a=e?0:U(" ",n).width;return{wordsWithComputedWidth:i,spaceWidth:a}}catch{return null}};function z(t){return t==="start"||t==="middle"||t==="end"||t==="inherit"}function D(t){return F(t)||typeof t=="string"||typeof t=="number"||typeof t=="boolean"}const te=(t,e,n,r)=>t.reduce((i,{word:a,width:s})=>{const o=i[i.length-1];if(o&&s!=null&&(e==null||r||o.width+s+n<Number(e)))o.words.push(a),o.width+=s+n;else{const u={words:[a],width:s};i.push(u)}return i},[]),ne=t=>t.reduce((e,n)=>e.width>n.width?e:n),be="…",Z=(t,e,n,r,i,a,s,o)=>{const u=t.slice(0,e),h=ee({breakAll:n,style:r,children:u+be});if(!h)return[!1,[]];const d=te(h.wordsWithComputedWidth,a,s,o);return[d.length>i||ne(d).width>Number(a),d]},Ne=({maxLines:t,children:e,style:n,breakAll:r},i,a,s,o)=>{const u=A(t),h=String(e),d=te(i,s,a,o);if(!u||o||!(d.length>t||ne(d).width>Number(s)))return d;let l=0,N=h.length-1,T=0,y;for(;l<=N&&T<=h.length-1;){const p=Math.floor((l+N)/2),E=p-1,[g,L]=Z(h,E,r,n,t,s,a,o),[v]=Z(h,p,r,n,t,s,a,o);if(!g&&!v&&(l=p+1),g&&v&&(N=p-1),!g&&v){y=L;break}T++}return y||d},Q=t=>[{words:F(t)?[]:t.toString().split(J),width:void 0}],V=({width:t,scaleToFit:e,children:n,style:r,breakAll:i,maxLines:a})=>{if((t||e)&&!ae.isSsr){let s,o;const u=ee({breakAll:i,children:n,style:r});if(u){const{wordsWithComputedWidth:h,spaceWidth:d}=u;s=h,o=d}else return Q(n);return Ne({breakAll:i,children:n,maxLines:a,style:r},s,o,t,!!e)}return Q(n)},se="#808080",j={angle:0,breakAll:!1,capHeight:"0.71em",fill:se,lineHeight:"1em",scaleToFit:!1,textAnchor:"start",verticalAnchor:"end",x:0,y:0},Y={},I=_.forwardRef((t,e)=>{const n=ce(m=>m.typography,Y,Y),{x:r,y:i,lineHeight:a,capHeight:s,fill:o,scaleToFit:u,textAnchor:h,verticalAnchor:d,style:f,...l}=oe(t,j),N=n.fill,T=_.useMemo(()=>{const{fill:m,...x}=n;return{...x,...t.fill==null&&m!==void 0?{fill:m}:{},...f}},[t.fill,f,n]),y=t.fill??(f==null?void 0:f.color)??n.color??N??o??j.fill,p=_.useMemo(()=>V({breakAll:l.breakAll,children:l.children,maxLines:l.maxLines,scaleToFit:u,style:T,width:l.width}),[l.breakAll,l.children,l.maxLines,u,T,l.width]),{dx:E,dy:g,angle:L,className:v,breakAll:re,...O}={...l,style:T};if(!H(r)||!H(i)||p.length===0)return null;const P=Number(r)+(A(E)?E:0),S=Number(i)+(A(g)?g:0);if(!G(P)||!G(S))return null;let k;switch(d){case"start":k=W(`calc(${s})`);break;case"middle":k=W(`calc(${(p.length-1)/2} * -${a} + (${s} / 2))`);break;default:k=W(`calc(${p.length-1} * -${a})`);break}const R=[],q=p[0];if(u&&q!=null){const m=q.width,{width:x}=l;R.push(`scale(${A(x)&&A(m)?x/m:1})`)}return L&&R.push(`rotate(${L}, ${P}, ${S})`),R.length&&(O.transform=R.join(" ")),_.createElement("text",{...le(O),ref:e,x:P,y:S,className:ie("recharts-text",v),textAnchor:h,fill:y.includes("url")?se:y},p.map((m,x)=>{const $=m.words.join(re?"":" ");return _.createElement("tspan",{x:P,dy:x===0?k:a,key:`${$}-${x}`},$)}))});I.displayName="Text";try{z.displayName="isValidTextAnchor",z.__docgenInfo={description:"",displayName:"isValidTextAnchor",filePath:"/__w/recharts/recharts/src/component/Text.tsx",methods:[],props:{},tags:{}}}catch{}try{D.displayName="isRenderableText",D.__docgenInfo={description:"",displayName:"isRenderableText",filePath:"/__w/recharts/recharts/src/component/Text.tsx",methods:[],props:{},tags:{}}}catch{}try{V.displayName="getWordsByLines",V.__docgenInfo={description:"",displayName:"getWordsByLines",filePath:"/__w/recharts/recharts/src/component/Text.tsx",methods:[],props:{scaleToFit:{defaultValue:null,declarations:[{fileName:"recharts/src/component/Text.tsx",name:"TextProps"}],description:`When true, scales the text to fit within the specified width.
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

**Note:** This controls horizontal alignment only and does not affect RTL text behavior.`,name:"textAnchor",parent:{fileName:"recharts/src/component/Text.tsx",name:"TextProps"},required:!1,tags:{defaultValue:"'start'"},type:{name:"enum",raw:"TextAnchor",value:[{value:'"end"'},{value:'"middle"'},{value:'"inherit"'},{value:'"start"'}]}},verticalAnchor:{defaultValue:null,declarations:[{fileName:"recharts/src/component/Text.tsx",name:"TextProps"}],description:`Vertical text alignment relative to the y coordinate.
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
- Requires \`width\` to be set for line breaking to occur`,name:"maxLines",parent:{fileName:"recharts/src/component/Text.tsx",name:"TextProps"},required:!1,tags:{},type:{name:"number"}},angle:{defaultValue:null,declarations:[{fileName:"recharts/src/component/Text.tsx",name:"TextProps"}],description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,name:"angle",parent:{fileName:"recharts/src/component/Text.tsx",name:"TextProps"},required:!1,tags:{defaultValue:"0"},type:{name:"number"}},lineHeight:{defaultValue:null,declarations:[{fileName:"recharts/src/component/Text.tsx",name:"TextProps"}],description:`Line height for multi-line text.
Can be a number (height in pixels) or a string with CSS units.
Used to calculate spacing between lines when text wraps to multiple lines.
Also used in verticalAnchor calculations for positioning the text block.`,name:"lineHeight",parent:{fileName:"recharts/src/component/Text.tsx",name:"TextProps"},required:!1,tags:{defaultValue:"'1em'"},type:{name:"string | number"}}},tags:{}}}catch{}export{I as T,D as a,z as i};
