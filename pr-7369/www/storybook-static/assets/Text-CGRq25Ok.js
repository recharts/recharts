import{l as q,u as S,o as O,G as K,p as v,n as V}from"./iframe-D8sYifa2.js";import{c as J}from"./index-DUx68t71.js";import{g as $}from"./DOMUtils-DEL1f2E9.js";import{u as ee,s as te}from"./svgPropertiesAndEvents-DLjmXQI2.js";import{F as H}from"./arrayEqualityCheck-y2Q9GogF.js";const C=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,P=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,ne=/^(px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q)$/,ie=/(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,se={cm:96/2.54,mm:96/25.4,pt:96/72,pc:96/6,in:96,Q:96/(2.54*40),px:1},re=["cm","mm","pt","pc","in","Q","px"];function ae(t){return re.includes(t)}const x="NaN";function oe(t,e){return t*se[e]}const c=class c{constructor(e,n){this.num=e,this.unit=n,this.num=e,this.unit=n,q(e)&&(this.unit=""),n!==""&&!ne.test(n)&&(this.num=NaN,this.unit=""),ae(n)&&(this.num=oe(e,n),this.unit="px")}static parse(e){const[,n,s]=ie.exec(e)??[];return n==null?c.NaN:new c(parseFloat(n),s??"")}add(e){return this.unit!==e.unit?new c(NaN,""):new c(this.num+e.num,this.unit)}subtract(e){return this.unit!==e.unit?new c(NaN,""):new c(this.num-e.num,this.unit)}multiply(e){return this.unit!==""&&e.unit!==""&&this.unit!==e.unit?new c(NaN,""):new c(this.num*e.num,this.unit||e.unit)}divide(e){return this.unit!==""&&e.unit!==""&&this.unit!==e.unit?new c(NaN,""):new c(this.num/e.num,this.unit||e.unit)}toString(){return`${this.num}${this.unit}`}isNaN(){return q(this.num)}};c.NaN=new c(NaN,"");let b=c;function X(t){if(t==null||t.includes(x))return x;let e=t;for(;e.includes("*")||e.includes("/");){const[,n,s,a]=C.exec(e)??[],r=b.parse(n??""),i=b.parse(a??""),o=s==="*"?r.multiply(i):r.divide(i);if(o.isNaN())return x;e=e.replace(C,o.toString())}for(;e.includes("+")||/.-\d+(?:\.\d+)?/.test(e);){const[,n,s,a]=P.exec(e)??[],r=b.parse(n??""),i=b.parse(a??""),o=s==="+"?r.add(i):r.subtract(i);if(o.isNaN())return x;e=e.replace(P,o.toString())}return e}const U=/\(([^()]*)\)/;function le(t){let e=t,n;for(;(n=U.exec(e))!=null;){const[,s]=n;e=e.replace(U,X(s))}return e}function ce(t){let e=t.replace(/\s+/g,"");return e=le(e),e=X(e),e}function ue(t){try{return ce(t)}catch{return x}}function R(t){const e=ue(t.slice(5,-1));return e===x?"":e}const D=/[ \f\n\r\t\v\u2028\u2029]+/,Z=({children:t,breakAll:e,style:n})=>{try{let s=[];V(t)||(e?s=t.toString().split(""):s=t.toString().split(D));const a=s.map(i=>({word:i,width:$(i,n).width})),r=e?0:$(" ",n).width;return{wordsWithComputedWidth:a,spaceWidth:r}}catch{return null}};function z(t){return t==="start"||t==="middle"||t==="end"||t==="inherit"}function G(t){return V(t)||typeof t=="string"||typeof t=="number"||typeof t=="boolean"}const Q=(t,e,n,s)=>t.reduce((a,{word:r,width:i})=>{const o=a[a.length-1];if(o&&i!=null&&(e==null||s||o.width+i+n<Number(e)))o.words.push(r),o.width+=i+n;else{const d={words:[r],width:i};a.push(d)}return a},[]),j=t=>t.reduce((e,n)=>e.width>n.width?e:n),de="…",B=(t,e,n,s,a,r,i,o)=>{const d=t.slice(0,e),u=Z({breakAll:n,style:s,children:d+de});if(!u)return[!1,[]];const l=Q(u.wordsWithComputedWidth,r,i,o);return[l.length>a||j(l).width>Number(r),l]},he=({maxLines:t,children:e,style:n,breakAll:s},a,r,i,o)=>{const d=v(t),u=String(e),l=Q(a,i,r,o);if(!d||o||!(l.length>t||j(l).width>Number(i)))return l;let m=0,w=u.length-1,y=0,_;for(;m<=w&&y<=u.length-1;){const g=Math.floor((m+w)/2),A=g-1,[h,T]=B(u,A,s,n,t,i,r,o),[p]=B(u,g,s,n,t,i,r,o);if(!h&&!p&&(m=g+1),h&&p&&(w=g-1),!h&&p){_=T;break}y++}return _||l},M=t=>[{words:V(t)?[]:t.toString().split(D),width:void 0}],k=({width:t,scaleToFit:e,children:n,style:s,breakAll:a,maxLines:r})=>{if((t||e)&&!K.isSsr){let i,o;const d=Z({breakAll:a,children:n,style:s});if(d){const{wordsWithComputedWidth:u,spaceWidth:l}=d;i=u,o=l}else return M(n);return he({breakAll:a,children:n,maxLines:r,style:s},i,o,t,!!e)}return M(n)},Y="#808080",pe={angle:0,breakAll:!1,capHeight:"0.71em",fill:Y,lineHeight:"1em",scaleToFit:!1,textAnchor:"start",verticalAnchor:"end",x:0,y:0};function fe(t){var e;return(e=t.components)==null?void 0:e.Text}function me(t){var e,n,s,a,r,i;return{fill:(e=t.colors)==null?void 0:e.text,fontFamily:(n=t.typography)==null?void 0:n.fontFamily,fontSize:(s=t.typography)==null?void 0:s.fontSize,fontWeight:(a=t.typography)==null?void 0:a.fontWeight,letterSpacing:(r=t.typography)==null?void 0:r.letterSpacing,lineHeight:(i=t.typography)==null?void 0:i.lineHeight}}const W=S.forwardRef((t,e)=>{const{x:n,y:s,lineHeight:a,capHeight:r,fill:i,scaleToFit:o,textAnchor:d,verticalAnchor:u,...l}=ee(t,pe,fe,me),f=S.useMemo(()=>k({breakAll:l.breakAll,children:l.children,maxLines:l.maxLines,scaleToFit:o,style:l.style,width:l.width}),[l.breakAll,l.children,l.maxLines,o,l.style,l.width]),{dx:m,dy:w,angle:y,className:_,breakAll:g,...A}=l;if(!O(n)||!O(s)||f.length===0)return null;const h=Number(n)+(v(m)?m:0),T=Number(s)+(v(w)?w:0);if(!H(h)||!H(T))return null;let p;switch(u){case"start":p=R(`calc(${r})`);break;case"middle":p=R(`calc(${(f.length-1)/2} * -${a} + (${r} / 2))`);break;default:p=R(`calc(${f.length-1} * -${a})`);break}const E=[],I=f[0];if(o&&I!=null){const L=I.width,{width:N}=l;E.push(`scale(${v(N)&&v(L)?N/L:1})`)}return y&&E.push(`rotate(${y}, ${h}, ${T})`),E.length&&(A.transform=E.join(" ")),S.createElement("text",{...te(A),ref:e,x:h,y:T,className:J("recharts-text",_),textAnchor:d,fill:i.includes("url")?Y:i},f.map((L,N)=>{const F=L.words.join(g?"":" ");return S.createElement("tspan",{x:h,dy:N===0?p:a,key:`${F}-${N}`},F)}))});W.displayName="Text";try{z.displayName="isValidTextAnchor",z.__docgenInfo={description:"",displayName:"isValidTextAnchor",props:{}}}catch{}try{G.displayName="isRenderableText",G.__docgenInfo={description:"",displayName:"isRenderableText",props:{}}}catch{}try{k.displayName="getWordsByLines",k.__docgenInfo={description:"",displayName:"getWordsByLines",props:{maxLines:{defaultValue:null,description:`Maximum number of lines to display when text wrapping is enabled.
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
@defaultValue 'start'`,name:"textAnchor",required:!1,type:{name:"enum",value:[{value:'"end"'},{value:'"middle"'},{value:'"inherit"'},{value:'"start"'}]}},angle:{defaultValue:null,description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.
@defaultValue 0`,name:"angle",required:!1,type:{name:"number"}},verticalAnchor:{defaultValue:null,description:`Vertical text alignment relative to the y coordinate.
- 'start': Text baseline starts at y coordinate (text appears below the y position)
- 'middle': Text is vertically centered on the y coordinate
- 'end': Text baseline ends at y coordinate (text appears above the y position)

**Note:** This controls vertical positioning only and does not affect RTL (right-to-left) text behavior.
The alignment calculation uses capHeight and lineHeight to determine the starting dy offset.
@defaultValue 'end'`,name:"verticalAnchor",required:!1,type:{name:"enum",value:[{value:'"end"'},{value:'"middle"'},{value:'"start"'}]}},lineHeight:{defaultValue:null,description:`Line height for multi-line text.
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
@defaultValue false`,name:"breakAll",required:!1,type:{name:"boolean"}}}}}catch{}export{W as T,z as a,G as i};
