import{r as L,G as K}from"./iframe-D_UL8fjK.js";import{c as J}from"./get-C2VjdU0L.js";import{o as O,r as ee,c as q,b as te,i as v,a as W}from"./resolveDefaultProps-Byb1qXS0.js";import{g as $}from"./DOMUtils-y3mUx3tY.js";import{a as F}from"./isWellBehavedNumber-iC5WXlxZ.js";const H=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,C=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,ne=/^(px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q)$/,se=/(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,re={cm:96/2.54,mm:96/25.4,pt:96/72,pc:96/6,in:96,Q:96/(2.54*40),px:1},ae=["cm","mm","pt","pc","in","Q","px"];function ie(t){return ae.includes(t)}const f="NaN";function oe(t,e){return t*re[e]}const c=class c{constructor(e,n){this.num=e,this.unit=n,this.num=e,this.unit=n,O(e)&&(this.unit=""),n!==""&&!ne.test(n)&&(this.num=NaN,this.unit=""),ie(n)&&(this.num=oe(e,n),this.unit="px")}static parse(e){const[,n,r]=se.exec(e)??[];return n==null?c.NaN:new c(parseFloat(n),r??"")}add(e){return this.unit!==e.unit?new c(NaN,""):new c(this.num+e.num,this.unit)}subtract(e){return this.unit!==e.unit?new c(NaN,""):new c(this.num-e.num,this.unit)}multiply(e){return this.unit!==""&&e.unit!==""&&this.unit!==e.unit?new c(NaN,""):new c(this.num*e.num,this.unit||e.unit)}divide(e){return this.unit!==""&&e.unit!==""&&this.unit!==e.unit?new c(NaN,""):new c(this.num/e.num,this.unit||e.unit)}toString(){return`${this.num}${this.unit}`}isNaN(){return O(this.num)}};c.NaN=new c(NaN,"");let g=c;function M(t){if(t==null||t.includes(f))return f;let e=t;for(;e.includes("*")||e.includes("/");){const[,n,r,o]=H.exec(e)??[],l=g.parse(n??""),s=g.parse(o??""),a=r==="*"?l.multiply(s):l.divide(s);if(a.isNaN())return f;e=e.replace(H,a.toString())}for(;e.includes("+")||/.-\d+(?:\.\d+)?/.test(e);){const[,n,r,o]=C.exec(e)??[],l=g.parse(n??""),s=g.parse(o??""),a=r==="+"?l.add(s):l.subtract(s);if(a.isNaN())return f;e=e.replace(C,a.toString())}return e}const U=/\(([^()]*)\)/;function le(t){let e=t,n;for(;(n=U.exec(e))!=null;){const[,r]=n,o=M(r);e=e.replace(U,()=>o)}return e}const ce=1e3;function de(t){if(t.length>ce)return f;let e=t.replace(/\s+/g,"");return e=le(e),e=M(e),e}function ue(t){try{return de(t)}catch{return f}}function S(t){const e=ue(t.slice(5,-1));return e===f?"":e}const D=/[ \f\n\r\t\v\u2028\u2029]+/,Z=({children:t,breakAll:e,style:n})=>{try{let r=[];W(t)||(e?r=t.toString().split(""):r=t.toString().split(D));const o=r.map(s=>({word:s,width:$(s,n).width})),l=e?0:$(" ",n).width;return{wordsWithComputedWidth:o,spaceWidth:l}}catch{return null}};function G(t){return t==="start"||t==="middle"||t==="end"||t==="inherit"}function B(t){return W(t)||typeof t=="string"||typeof t=="number"||typeof t=="boolean"}const Q=(t,e,n,r)=>t.reduce((o,{word:l,width:s})=>{const a=o[o.length-1];if(a&&s!=null&&(e==null||r||a.width+s+n<Number(e)))a.words.push(l),a.width+=s+n;else{const u={words:[l],width:s};o.push(u)}return o},[]),j=t=>t.reduce((e,n)=>e.width>n.width?e:n),he="…",X=(t,e,n,r,o,l,s,a)=>{const u=t.slice(0,e),d=Z({breakAll:n,style:r,children:u+he});if(!d)return[!1,[]];const i=Q(d.wordsWithComputedWidth,l,s,a);return[i.length>o||j(i).width>Number(l),i]},pe=({maxLines:t,children:e,style:n,breakAll:r},o,l,s,a)=>{const u=v(t),d=String(e),i=Q(o,s,l,a);if(!u||a||!(i.length>t||j(i).width>Number(s)))return i;let x=0,w=d.length-1,b=0,_;for(;x<=w&&b<=d.length-1;){const T=Math.floor((x+w)/2),A=T-1,[h,N]=X(d,A,r,n,t,s,l,a),[p]=X(d,T,r,n,t,s,l,a);if(!h&&!p&&(x=T+1),h&&p&&(w=T-1),!h&&p){_=N;break}b++}return _||i},z=t=>[{words:W(t)?[]:t.toString().split(D),width:void 0}],R=({width:t,scaleToFit:e,children:n,style:r,breakAll:o,maxLines:l})=>{if((t||e)&&!K.isSsr){let s,a;const u=Z({breakAll:o,children:n,style:r});if(u){const{wordsWithComputedWidth:d,spaceWidth:i}=u;s=d,a=i}else return z(n);return pe({breakAll:o,children:n,maxLines:l,style:r},s,a,t,!!e)}return z(n)},Y="#808080",me={angle:0,breakAll:!1,capHeight:"0.71em",fill:Y,lineHeight:"1em",scaleToFit:!1,textAnchor:"start",verticalAnchor:"end",x:0,y:0},k=L.forwardRef((t,e)=>{const{x:n,y:r,lineHeight:o,capHeight:l,fill:s,scaleToFit:a,textAnchor:u,verticalAnchor:d,...i}=ee(t,me),m=L.useMemo(()=>R({breakAll:i.breakAll,children:i.children,maxLines:i.maxLines,scaleToFit:a,style:i.style,width:i.width}),[i.breakAll,i.children,i.maxLines,a,i.style,i.width]),{dx:x,dy:w,angle:b,className:_,breakAll:T,...A}=i;if(!q(n)||!q(r)||m.length===0)return null;const h=Number(n)+(v(x)?x:0),N=Number(r)+(v(w)?w:0);if(!F(h)||!F(N))return null;let p;switch(d){case"start":p=S(`calc(${l})`);break;case"middle":p=S(`calc(${(m.length-1)/2} * -${o} + (${l} / 2))`);break;default:p=S(`calc(${m.length-1} * -${o})`);break}const E=[],V=m[0];if(a&&V!=null){const P=V.width,{width:y}=i;E.push(`scale(${v(y)&&v(P)?y/P:1})`)}return b&&E.push(`rotate(${b}, ${h}, ${N})`),E.length&&(A.transform=E.join(" ")),L.createElement("text",{...te(A),ref:e,x:h,y:N,className:J("recharts-text",_),textAnchor:u,fill:s.includes("url")?Y:s},m.map((P,y)=>{const I=P.words.join(T?"":" ");return L.createElement("tspan",{x:h,dy:y===0?p:o,key:`${I}-${y}`},I)}))});k.displayName="Text";try{G.displayName="isValidTextAnchor",G.__docgenInfo={description:"",displayName:"isValidTextAnchor",filePath:"/__w/recharts/recharts/src/component/Text.tsx",methods:[],props:{},tags:{}}}catch{}try{B.displayName="isRenderableText",B.__docgenInfo={description:"",displayName:"isRenderableText",filePath:"/__w/recharts/recharts/src/component/Text.tsx",methods:[],props:{},tags:{}}}catch{}try{R.displayName="getWordsByLines",R.__docgenInfo={description:"",displayName:"getWordsByLines",filePath:"/__w/recharts/recharts/src/component/Text.tsx",methods:[],props:{scaleToFit:{defaultValue:null,declarations:[{fileName:"recharts/src/component/Text.tsx",name:"TextProps"}],description:`When true, scales the text to fit within the specified width.
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
- Requires \`width\` to be set for line breaking to occur`,name:"maxLines",parent:{fileName:"recharts/src/component/Text.tsx",name:"TextProps"},required:!1,tags:{},type:{name:"number"}}},tags:{}}}catch{}try{k.displayName="Text",k.__docgenInfo={description:"",displayName:"Text",filePath:"/__w/recharts/recharts/src/component/Text.tsx",methods:[],props:{textAnchor:{defaultValue:null,declarations:[{fileName:"recharts/src/component/Text.tsx",name:"TextProps"}],description:`Horizontal text alignment within the text element.
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
Also used in verticalAnchor calculations for positioning the text block.`,name:"lineHeight",parent:{fileName:"recharts/src/component/Text.tsx",name:"TextProps"},required:!1,tags:{defaultValue:"'1em'"},type:{name:"string | number"}}},tags:{}}}catch{}export{k as T,B as a,G as i};
