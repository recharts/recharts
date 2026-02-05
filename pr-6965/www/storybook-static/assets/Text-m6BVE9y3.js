import{p as O,r as k,f as $,G as K,i as v,j as V}from"./iframe-D44FkRcR.js";import{r as J,c as ee,s as te}from"./resolveDefaultProps-C9MxTna8.js";import{g as F}from"./DOMUtils-DdnL5-6j.js";import{n as C}from"./arrayEqualityCheck-CpHRyEoZ.js";const H=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,P=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,ne=/^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,ie=/(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,se={cm:96/2.54,mm:96/25.4,pt:96/72,pc:96/6,in:96,Q:96/(2.54*40),px:1},re=["cm","mm","pt","pc","in","Q","px"];function ae(t){return re.includes(t)}const b="NaN";function le(t,e){return t*se[e]}const c=class c{constructor(e,n){this.num=e,this.unit=n,this.num=e,this.unit=n,O(e)&&(this.unit=""),n!==""&&!ne.test(n)&&(this.num=NaN,this.unit=""),ae(n)&&(this.num=le(e,n),this.unit="px")}static parse(e){const[,n,s]=ie.exec(e)??[];return n==null?c.NaN:new c(parseFloat(n),s??"")}add(e){return this.unit!==e.unit?new c(NaN,""):new c(this.num+e.num,this.unit)}subtract(e){return this.unit!==e.unit?new c(NaN,""):new c(this.num-e.num,this.unit)}multiply(e){return this.unit!==""&&e.unit!==""&&this.unit!==e.unit?new c(NaN,""):new c(this.num*e.num,this.unit||e.unit)}divide(e){return this.unit!==""&&e.unit!==""&&this.unit!==e.unit?new c(NaN,""):new c(this.num/e.num,this.unit||e.unit)}toString(){return`${this.num}${this.unit}`}isNaN(){return O(this.num)}};c.NaN=new c(NaN,"");let g=c;function M(t){if(t==null||t.includes(b))return b;let e=t;for(;e.includes("*")||e.includes("/");){const[,n,s,o]=H.exec(e)??[],l=g.parse(n??""),i=g.parse(o??""),r=s==="*"?l.multiply(i):l.divide(i);if(r.isNaN())return b;e=e.replace(H,r.toString())}for(;e.includes("+")||/.-\d+(?:\.\d+)?/.test(e);){const[,n,s,o]=P.exec(e)??[],l=g.parse(n??""),i=g.parse(o??""),r=s==="+"?l.add(i):l.subtract(i);if(r.isNaN())return b;e=e.replace(P,r.toString())}return e}const U=/\(([^()]*)\)/;function oe(t){let e=t,n;for(;(n=U.exec(e))!=null;){const[,s]=n;e=e.replace(U,M(s))}return e}function ce(t){let e=t.replace(/\s+/g,"");return e=oe(e),e=M(e),e}function ue(t){try{return ce(t)}catch{return b}}function R(t){const e=ue(t.slice(5,-1));return e===b?"":e}const X=/[ \f\n\r\t\v\u2028\u2029]+/,Z=({children:t,breakAll:e,style:n})=>{try{let s=[];V(t)||(e?s=t.toString().split(""):s=t.toString().split(X));const o=s.map(i=>({word:i,width:F(i,n).width})),l=e?0:F(" ",n).width;return{wordsWithComputedWidth:o,spaceWidth:l}}catch{return null}};function G(t){return t==="start"||t==="middle"||t==="end"||t==="inherit"}function B(t){return V(t)||typeof t=="string"||typeof t=="number"||typeof t=="boolean"}const j=(t,e,n,s)=>t.reduce((o,{word:l,width:i})=>{const r=o[o.length-1];if(r&&i!=null&&(e==null||s||r.width+i+n<Number(e)))r.words.push(l),r.width+=i+n;else{const d={words:[l],width:i};o.push(d)}return o},[]),Q=t=>t.reduce((e,n)=>e.width>n.width?e:n),de="…",z=(t,e,n,s,o,l,i,r)=>{const d=t.slice(0,e),u=Z({breakAll:n,style:s,children:d+de});if(!u)return[!1,[]];const a=j(u.wordsWithComputedWidth,l,i,r);return[a.length>o||Q(a).width>Number(l),a]},he=({maxLines:t,children:e,style:n,breakAll:s},o,l,i,r)=>{const d=v(t),u=String(e),a=j(o,i,l,r);if(!d||r||!(a.length>t||Q(a).width>Number(i)))return a;let m=0,w=u.length-1,y=0,_;for(;m<=w&&y<=u.length-1;){const x=Math.floor((m+w)/2),A=x-1,[h,T]=z(u,A,s,n,t,i,l,r),[p]=z(u,x,s,n,t,i,l,r);if(!h&&!p&&(m=x+1),h&&p&&(w=x-1),!h&&p){_=T;break}y++}return _||a},D=t=>[{words:V(t)?[]:t.toString().split(X),width:void 0}],S=({width:t,scaleToFit:e,children:n,style:s,breakAll:o,maxLines:l})=>{if((t||e)&&!K.isSsr){let i,r;const d=Z({breakAll:o,children:n,style:s});if(d){const{wordsWithComputedWidth:u,spaceWidth:a}=d;i=u,r=a}else return D(n);return he({breakAll:o,children:n,maxLines:l,style:s},i,r,t,!!e)}return D(n)},Y="#808080",pe={angle:0,breakAll:!1,capHeight:"0.71em",fill:Y,lineHeight:"1em",scaleToFit:!1,textAnchor:"start",verticalAnchor:"end",x:0,y:0},W=k.forwardRef((t,e)=>{const{x:n,y:s,lineHeight:o,capHeight:l,fill:i,scaleToFit:r,textAnchor:d,verticalAnchor:u,...a}=J(t,pe),f=k.useMemo(()=>S({breakAll:a.breakAll,children:a.children,maxLines:a.maxLines,scaleToFit:r,style:a.style,width:a.width}),[a.breakAll,a.children,a.maxLines,r,a.style,a.width]),{dx:m,dy:w,angle:y,className:_,breakAll:x,...A}=a;if(!$(n)||!$(s)||f.length===0)return null;const h=Number(n)+(v(m)?m:0),T=Number(s)+(v(w)?w:0);if(!C(h)||!C(T))return null;let p;switch(u){case"start":p=R(`calc(${l})`);break;case"middle":p=R(`calc(${(f.length-1)/2} * -${o} + (${l} / 2))`);break;default:p=R(`calc(${f.length-1} * -${o})`);break}const E=[],I=f[0];if(r&&I!=null){const L=I.width,{width:N}=a;E.push(`scale(${v(N)&&v(L)?N/L:1})`)}return y&&E.push(`rotate(${y}, ${h}, ${T})`),E.length&&(A.transform=E.join(" ")),k.createElement("text",{...te(A),ref:e,x:h,y:T,className:ee("recharts-text",_),textAnchor:d,fill:i.includes("url")?Y:i},f.map((L,N)=>{const q=L.words.join(x?"":" ");return k.createElement("tspan",{x:h,dy:N===0?p:o,key:`${q}-${N}`},q)}))});W.displayName="Text";try{G.displayName="isValidTextAnchor",G.__docgenInfo={description:"",displayName:"isValidTextAnchor",props:{}}}catch{}try{B.displayName="isRenderableText",B.__docgenInfo={description:"",displayName:"isRenderableText",props:{}}}catch{}try{S.displayName="getWordsByLines",S.__docgenInfo={description:"",displayName:"getWordsByLines",props:{maxLines:{defaultValue:null,description:`Maximum number of lines to display when text wrapping is enabled.
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
- Requires \`width\` to be set for line breaking to occur`,name:"maxLines",required:!1,type:{name:"number"}},scaleToFit:{defaultValue:null,description:`When true, scales the text to fit within the specified width.
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
@defaultValue false`,name:"breakAll",required:!1,type:{name:"boolean"}}}}}catch{}try{W.displayName="Text",W.__docgenInfo={description:"",displayName:"Text",props:{textAnchor:{defaultValue:null,description:`Horizontal text alignment within the text element.
- 'start': Text starts at the x coordinate (left-aligned for LTR text)
- 'middle': Text is centered on the x coordinate
- 'end': Text ends at the x coordinate (right-aligned for LTR text)
- 'inherit': Inherits the text-anchor from parent element

**Note:** This controls horizontal alignment only and does not affect RTL text behavior.
@defaultValue 'start'`,name:"textAnchor",required:!1,type:{name:"enum",value:[{value:'"end"'},{value:'"middle"'},{value:'"inherit"'},{value:'"start"'}]}},lineHeight:{defaultValue:null,description:`Line height for multi-line text.
Can be a number (height in pixels) or a string with CSS units.
Used to calculate spacing between lines when text wraps to multiple lines.
Also used in verticalAnchor calculations for positioning the text block.
@defaultValue '1em'`,name:"lineHeight",required:!1,type:{name:"string | number"}},maxLines:{defaultValue:null,description:`Maximum number of lines to display when text wrapping is enabled.
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
- Requires \`width\` to be set for line breaking to occur`,name:"maxLines",required:!1,type:{name:"number"}},verticalAnchor:{defaultValue:null,description:`Vertical text alignment relative to the y coordinate.
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
@defaultValue false`,name:"breakAll",required:!1,type:{name:"boolean"}},angle:{defaultValue:null,description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.
@defaultValue 0`,name:"angle",required:!1,type:{name:"number"}}}}}catch{}export{W as T,G as a,B as i};
