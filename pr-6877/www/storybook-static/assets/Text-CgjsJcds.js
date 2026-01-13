import{o as q,r as k,f as O,G as Y,i as N,j as z}from"./iframe-BIMs3Nj-.js";import{r as K,c as J,s as ee}from"./resolveDefaultProps-C_VwJ3u_.js";import{g as $}from"./DOMUtils-voeX-mFj.js";import{n as F}from"./arrayEqualityCheck-pDlZyWSR.js";const C=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,H=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,te=/^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,ne=/(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,ie={cm:96/2.54,mm:96/25.4,pt:96/72,pc:96/6,in:96,Q:96/(2.54*40),px:1},se=["cm","mm","pt","pc","in","Q","px"];function ae(t){return se.includes(t)}const b="NaN";function re(t,e){return t*ie[e]}const c=class c{constructor(e,n){this.num=e,this.unit=n,this.num=e,this.unit=n,q(e)&&(this.unit=""),n!==""&&!te.test(n)&&(this.num=NaN,this.unit=""),ae(n)&&(this.num=re(e,n),this.unit="px")}static parse(e){const[,n,s]=ne.exec(e)??[];return n==null?c.NaN:new c(parseFloat(n),s??"")}add(e){return this.unit!==e.unit?new c(NaN,""):new c(this.num+e.num,this.unit)}subtract(e){return this.unit!==e.unit?new c(NaN,""):new c(this.num-e.num,this.unit)}multiply(e){return this.unit!==""&&e.unit!==""&&this.unit!==e.unit?new c(NaN,""):new c(this.num*e.num,this.unit||e.unit)}divide(e){return this.unit!==""&&e.unit!==""&&this.unit!==e.unit?new c(NaN,""):new c(this.num/e.num,this.unit||e.unit)}toString(){return`${this.num}${this.unit}`}isNaN(){return q(this.num)}};c.NaN=new c(NaN,"");let g=c;function D(t){if(t==null||t.includes(b))return b;let e=t;for(;e.includes("*")||e.includes("/");){const[,n,s,o]=C.exec(e)??[],l=g.parse(n??""),i=g.parse(o??""),a=s==="*"?l.multiply(i):l.divide(i);if(a.isNaN())return b;e=e.replace(C,a.toString())}for(;e.includes("+")||/.-\d+(?:\.\d+)?/.test(e);){const[,n,s,o]=H.exec(e)??[],l=g.parse(n??""),i=g.parse(o??""),a=s==="+"?l.add(i):l.subtract(i);if(a.isNaN())return b;e=e.replace(H,a.toString())}return e}const P=/\(([^()]*)\)/;function le(t){let e=t,n;for(;(n=P.exec(e))!=null;){const[,s]=n;e=e.replace(P,D(s))}return e}function oe(t){let e=t.replace(/\s+/g,"");return e=le(e),e=D(e),e}function ce(t){try{return oe(t)}catch{return b}}function S(t){const e=ce(t.slice(5,-1));return e===b?"":e}const M=/[ \f\n\r\t\v\u2028\u2029]+/,X=({children:t,breakAll:e,style:n})=>{try{let s=[];z(t)||(e?s=t.toString().split(""):s=t.toString().split(M));const o=s.map(i=>({word:i,width:$(i,n).width})),l=e?0:$(" ",n).width;return{wordsWithComputedWidth:o,spaceWidth:l}}catch{return null}};function U(t){return t==="start"||t==="middle"||t==="end"||t==="inherit"}const Z=(t,e,n,s)=>t.reduce((o,{word:l,width:i})=>{const a=o[o.length-1];if(a&&i!=null&&(e==null||s||a.width+i+n<Number(e)))a.words.push(l),a.width+=i+n;else{const d={words:[l],width:i};o.push(d)}return o},[]),j=t=>t.reduce((e,n)=>e.width>n.width?e:n),ue="…",G=(t,e,n,s,o,l,i,a)=>{const d=t.slice(0,e),u=X({breakAll:n,style:s,children:d+ue});if(!u)return[!1,[]];const r=Z(u.wordsWithComputedWidth,l,i,a);return[r.length>o||j(r).width>Number(l),r]},de=({maxLines:t,children:e,style:n,breakAll:s},o,l,i,a)=>{const d=N(t),u=String(e),r=Z(o,i,l,a);if(!d||a||!(r.length>t||j(r).width>Number(i)))return r;let m=0,w=u.length-1,y=0,A;for(;m<=w&&y<=u.length-1;){const x=Math.floor((m+w)/2),E=x-1,[h,T]=G(u,E,s,n,t,i,l,a),[f]=G(u,x,s,n,t,i,l,a);if(!h&&!f&&(m=x+1),h&&f&&(w=x-1),!h&&f){A=T;break}y++}return A||r},B=t=>[{words:z(t)?[]:t.toString().split(M),width:void 0}],W=({width:t,scaleToFit:e,children:n,style:s,breakAll:o,maxLines:l})=>{if((t||e)&&!Y.isSsr){let i,a;const d=X({breakAll:o,children:n,style:s});if(d){const{wordsWithComputedWidth:u,spaceWidth:r}=d;i=u,a=r}else return B(n);return de({breakAll:o,children:n,maxLines:l,style:s},i,a,t,!!e)}return B(n)},Q="#808080",he={angle:0,breakAll:!1,capHeight:"0.71em",fill:Q,lineHeight:"1em",scaleToFit:!1,textAnchor:"start",verticalAnchor:"end",x:0,y:0},R=k.forwardRef((t,e)=>{const{x:n,y:s,lineHeight:o,capHeight:l,fill:i,scaleToFit:a,textAnchor:d,verticalAnchor:u,...r}=K(t,he),p=k.useMemo(()=>W({breakAll:r.breakAll,children:r.children,maxLines:r.maxLines,scaleToFit:a,style:r.style,width:r.width}),[r.breakAll,r.children,r.maxLines,a,r.style,r.width]),{dx:m,dy:w,angle:y,className:A,breakAll:x,...E}=r;if(!O(n)||!O(s)||p.length===0)return null;const h=Number(n)+(N(m)?m:0),T=Number(s)+(N(w)?w:0);if(!F(h)||!F(T))return null;let f;switch(u){case"start":f=S(`calc(${l})`);break;case"middle":f=S(`calc(${(p.length-1)/2} * -${o} + (${l} / 2))`);break;default:f=S(`calc(${p.length-1} * -${o})`);break}const L=[],V=p[0];if(a&&V!=null){const _=V.width,{width:v}=r;L.push(`scale(${N(v)&&N(_)?v/_:1})`)}return y&&L.push(`rotate(${y}, ${h}, ${T})`),L.length&&(E.transform=L.join(" ")),k.createElement("text",{...ee(E),ref:e,x:h,y:T,className:J("recharts-text",A),textAnchor:d,fill:i.includes("url")?Q:i},p.map((_,v)=>{const I=_.words.join(x?"":" ");return k.createElement("tspan",{x:h,dy:v===0?f:o,key:`${I}-${v}`},I)}))});R.displayName="Text";try{U.displayName="isValidTextAnchor",U.__docgenInfo={description:"",displayName:"isValidTextAnchor",props:{}}}catch{}try{W.displayName="getWordsByLines",W.__docgenInfo={description:"",displayName:"getWordsByLines",props:{scaleToFit:{defaultValue:null,description:`When true, scales the text to fit within the specified width.
The text will be scaled down proportionally to fit the available space.

**Important interactions:**
- Requires \`width\` to be defined to have any effect. If width is undefined, scaleToFit does nothing.
- When enabled, \`maxLines\` restrictions are bypassed and ellipsis truncation is disabled.
- Uses the first line's width to calculate the scale factor.
- The scaling transform is applied as \`scale(width / lineWidth)\`.
@defaultValue false`,name:"scaleToFit",required:!1,type:{name:"boolean"}},breakAll:{defaultValue:null,description:`When true, enables character-level breaking instead of word-level breaking.
- false: Text breaks at word boundaries (spaces, tabs, etc.)
- true: Text can break between any characters, useful for languages without spaces

**Note:** Only effective when \`width\` is defined to enable line breaking.
@defaultValue false`,name:"breakAll",required:!1,type:{name:"boolean"}},maxLines:{defaultValue:null,description:`Maximum number of lines to display when text wrapping is enabled.
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
- Requires \`width\` to be set for line breaking to occur`,name:"maxLines",required:!1,type:{name:"number"}}}}}catch{}try{R.displayName="Text",R.__docgenInfo={description:"",displayName:"Text",props:{textAnchor:{defaultValue:null,description:`Horizontal text alignment within the text element.
- 'start': Text starts at the x coordinate (left-aligned for LTR text)
- 'middle': Text is centered on the x coordinate
- 'end': Text ends at the x coordinate (right-aligned for LTR text)
- 'inherit': Inherits the text-anchor from parent element

**Note:** This controls horizontal alignment only and does not affect RTL text behavior.
@defaultValue 'start'`,name:"textAnchor",required:!1,type:{name:"enum",value:[{value:'"end"'},{value:'"middle"'},{value:'"inherit"'},{value:'"start"'}]}},angle:{defaultValue:null,description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.
@defaultValue 0`,name:"angle",required:!1,type:{name:"number"}},verticalAnchor:{defaultValue:null,description:`Vertical text alignment relative to the y coordinate.
- 'start': Text baseline starts at y coordinate (text appears below the y position)
- 'middle': Text is vertically centered on the y coordinate
- 'end': Text baseline ends at y coordinate (text appears above the y position)

**Note:** This controls vertical positioning only and does not affect RTL (right-to-left) text behavior.
The alignment calculation uses capHeight and lineHeight to determine the starting dy offset.
@defaultValue 'end'`,name:"verticalAnchor",required:!1,type:{name:"enum",value:[{value:'"end"'},{value:'"middle"'},{value:'"start"'}]}},scaleToFit:{defaultValue:null,description:`When true, scales the text to fit within the specified width.
The text will be scaled down proportionally to fit the available space.

**Important interactions:**
- Requires \`width\` to be defined to have any effect. If width is undefined, scaleToFit does nothing.
- When enabled, \`maxLines\` restrictions are bypassed and ellipsis truncation is disabled.
- Uses the first line's width to calculate the scale factor.
- The scaling transform is applied as \`scale(width / lineWidth)\`.
@defaultValue false`,name:"scaleToFit",required:!1,type:{name:"boolean"}},breakAll:{defaultValue:null,description:`When true, enables character-level breaking instead of word-level breaking.
- false: Text breaks at word boundaries (spaces, tabs, etc.)
- true: Text can break between any characters, useful for languages without spaces

**Note:** Only effective when \`width\` is defined to enable line breaking.
@defaultValue false`,name:"breakAll",required:!1,type:{name:"boolean"}},maxLines:{defaultValue:null,description:`Maximum number of lines to display when text wrapping is enabled.
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
- Requires \`width\` to be set for line breaking to occur`,name:"maxLines",required:!1,type:{name:"number"}},lineHeight:{defaultValue:null,description:`Line height for multi-line text.
Can be a number (height in pixels) or a string with CSS units.
Used to calculate spacing between lines when text wraps to multiple lines.
Also used in verticalAnchor calculations for positioning the text block.
@defaultValue '1em'`,name:"lineHeight",required:!1,type:{name:"string | number"}}}}}catch{}export{R as T,U as i};
