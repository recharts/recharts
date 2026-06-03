import{P as L,G as K}from"./iframe-Bw01G05S.js";import{c as J}from"./get-PLF287kI.js";import{c as q,r as ee,j as O,s as te,k as v,e as W}from"./resolveDefaultProps-BX9yAQwT.js";import{g as $}from"./DOMUtils-CB0xgJC5.js";import{a as F}from"./isWellBehavedNumber-BdaQsoH1.js";const C=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,H=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,ne=/^(px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q)$/,se=/(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,re={cm:96/2.54,mm:96/25.4,pt:96/72,pc:96/6,in:96,Q:96/(2.54*40),px:1},ae=["cm","mm","pt","pc","in","Q","px"];function ie(t){return ae.includes(t)}const T="NaN";function oe(t,e){return t*re[e]}const c=class c{constructor(e,n){this.num=e,this.unit=n,this.num=e,this.unit=n,q(e)&&(this.unit=""),n!==""&&!ne.test(n)&&(this.num=NaN,this.unit=""),ie(n)&&(this.num=oe(e,n),this.unit="px")}static parse(e){const[,n,r]=se.exec(e)??[];return n==null?c.NaN:new c(parseFloat(n),r??"")}add(e){return this.unit!==e.unit?new c(NaN,""):new c(this.num+e.num,this.unit)}subtract(e){return this.unit!==e.unit?new c(NaN,""):new c(this.num-e.num,this.unit)}multiply(e){return this.unit!==""&&e.unit!==""&&this.unit!==e.unit?new c(NaN,""):new c(this.num*e.num,this.unit||e.unit)}divide(e){return this.unit!==""&&e.unit!==""&&this.unit!==e.unit?new c(NaN,""):new c(this.num/e.num,this.unit||e.unit)}toString(){return`${this.num}${this.unit}`}isNaN(){return q(this.num)}};c.NaN=new c(NaN,"");let g=c;function M(t){if(t==null||t.includes(T))return T;let e=t;for(;e.includes("*")||e.includes("/");){const[,n,r,l]=C.exec(e)??[],o=g.parse(n??""),s=g.parse(l??""),a=r==="*"?o.multiply(s):o.divide(s);if(a.isNaN())return T;e=e.replace(C,a.toString())}for(;e.includes("+")||/.-\d+(?:\.\d+)?/.test(e);){const[,n,r,l]=H.exec(e)??[],o=g.parse(n??""),s=g.parse(l??""),a=r==="+"?o.add(s):o.subtract(s);if(a.isNaN())return T;e=e.replace(H,a.toString())}return e}const U=/\(([^()]*)\)/;function le(t){let e=t,n;for(;(n=U.exec(e))!=null;){const[,r]=n;e=e.replace(U,M(r))}return e}function ce(t){let e=t.replace(/\s+/g,"");return e=le(e),e=M(e),e}function de(t){try{return ce(t)}catch{return T}}function k(t){const e=de(t.slice(5,-1));return e===T?"":e}const X=/[ \f\n\r\t\v\u2028\u2029]+/,Z=({children:t,breakAll:e,style:n})=>{try{let r=[];W(t)||(e?r=t.toString().split(""):r=t.toString().split(X));const l=r.map(s=>({word:s,width:$(s,n).width})),o=e?0:$(" ",n).width;return{wordsWithComputedWidth:l,spaceWidth:o}}catch{return null}};function G(t){return t==="start"||t==="middle"||t==="end"||t==="inherit"}function B(t){return W(t)||typeof t=="string"||typeof t=="number"||typeof t=="boolean"}const j=(t,e,n,r)=>t.reduce((l,{word:o,width:s})=>{const a=l[l.length-1];if(a&&s!=null&&(e==null||r||a.width+s+n<Number(e)))a.words.push(o),a.width+=s+n;else{const u={words:[o],width:s};l.push(u)}return l},[]),Q=t=>t.reduce((e,n)=>e.width>n.width?e:n),ue="…",z=(t,e,n,r,l,o,s,a)=>{const u=t.slice(0,e),d=Z({breakAll:n,style:r,children:u+ue});if(!d)return[!1,[]];const i=j(d.wordsWithComputedWidth,o,s,a);return[i.length>l||Q(i).width>Number(o),i]},he=({maxLines:t,children:e,style:n,breakAll:r},l,o,s,a)=>{const u=v(t),d=String(e),i=j(l,s,o,a);if(!u||a||!(i.length>t||Q(i).width>Number(s)))return i;let f=0,x=d.length-1,b=0,_;for(;f<=x&&b<=d.length-1;){const w=Math.floor((f+x)/2),A=w-1,[h,N]=z(d,A,r,n,t,s,o,a),[p]=z(d,w,r,n,t,s,o,a);if(!h&&!p&&(f=w+1),h&&p&&(x=w-1),!h&&p){_=N;break}b++}return _||i},D=t=>[{words:W(t)?[]:t.toString().split(X),width:void 0}],R=({width:t,scaleToFit:e,children:n,style:r,breakAll:l,maxLines:o})=>{if((t||e)&&!K.isSsr){let s,a;const u=Z({breakAll:l,children:n,style:r});if(u){const{wordsWithComputedWidth:d,spaceWidth:i}=u;s=d,a=i}else return D(n);return he({breakAll:l,children:n,maxLines:o,style:r},s,a,t,!!e)}return D(n)},Y="#808080",pe={angle:0,breakAll:!1,capHeight:"0.71em",fill:Y,lineHeight:"1em",scaleToFit:!1,textAnchor:"start",verticalAnchor:"end",x:0,y:0},S=L.forwardRef((t,e)=>{const{x:n,y:r,lineHeight:l,capHeight:o,fill:s,scaleToFit:a,textAnchor:u,verticalAnchor:d,...i}=ee(t,pe),m=L.useMemo(()=>R({breakAll:i.breakAll,children:i.children,maxLines:i.maxLines,scaleToFit:a,style:i.style,width:i.width}),[i.breakAll,i.children,i.maxLines,a,i.style,i.width]),{dx:f,dy:x,angle:b,className:_,breakAll:w,...A}=i;if(!O(n)||!O(r)||m.length===0)return null;const h=Number(n)+(v(f)?f:0),N=Number(r)+(v(x)?x:0);if(!F(h)||!F(N))return null;let p;switch(d){case"start":p=k(`calc(${o})`);break;case"middle":p=k(`calc(${(m.length-1)/2} * -${l} + (${o} / 2))`);break;default:p=k(`calc(${m.length-1} * -${l})`);break}const P=[],V=m[0];if(a&&V!=null){const E=V.width,{width:y}=i;P.push(`scale(${v(y)&&v(E)?y/E:1})`)}return b&&P.push(`rotate(${b}, ${h}, ${N})`),P.length&&(A.transform=P.join(" ")),L.createElement("text",{...te(A),ref:e,x:h,y:N,className:J("recharts-text",_),textAnchor:u,fill:s.includes("url")?Y:s},m.map((E,y)=>{const I=E.words.join(w?"":" ");return L.createElement("tspan",{x:h,dy:y===0?p:l,key:`${I}-${y}`},I)}))});S.displayName="Text";try{G.displayName="isValidTextAnchor",G.__docgenInfo={description:"",displayName:"isValidTextAnchor",filePath:"/__w/recharts/recharts/src/component/Text.tsx",methods:[],props:{},tags:{}}}catch{}try{B.displayName="isRenderableText",B.__docgenInfo={description:"",displayName:"isRenderableText",filePath:"/__w/recharts/recharts/src/component/Text.tsx",methods:[],props:{},tags:{}}}catch{}try{R.displayName="getWordsByLines",R.__docgenInfo={description:"",displayName:"getWordsByLines",filePath:"/__w/recharts/recharts/src/component/Text.tsx",methods:[],props:{scaleToFit:{defaultValue:null,declarations:[{fileName:"recharts/src/component/Text.tsx",name:"TextProps"}],description:`When true, scales the text to fit within the specified width.
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
- Requires \`width\` to be set for line breaking to occur`,name:"maxLines",parent:{fileName:"recharts/src/component/Text.tsx",name:"TextProps"},required:!1,tags:{},type:{name:"number"}}},tags:{}}}catch{}try{S.displayName="Text",S.__docgenInfo={description:"",displayName:"Text",filePath:"/__w/recharts/recharts/src/component/Text.tsx",methods:[],props:{textAnchor:{defaultValue:null,declarations:[{fileName:"recharts/src/component/Text.tsx",name:"TextProps"}],description:`Horizontal text alignment within the text element.
- 'start': Text starts at the x coordinate (left-aligned for LTR text)
- 'middle': Text is centered on the x coordinate
- 'end': Text ends at the x coordinate (right-aligned for LTR text)
- 'inherit': Inherits the text-anchor from parent element

**Note:** This controls horizontal alignment only and does not affect RTL text behavior.`,name:"textAnchor",parent:{fileName:"recharts/src/component/Text.tsx",name:"TextProps"},required:!1,tags:{defaultValue:"'start'"},type:{name:"enum",raw:"TextAnchor",value:[{value:'"inherit"'},{value:'"end"'},{value:'"middle"'},{value:'"start"'}]}},angle:{defaultValue:null,declarations:[{fileName:"recharts/src/component/Text.tsx",name:"TextProps"}],description:`Text rotation angle in degrees.
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
Also used in verticalAnchor calculations for positioning the text block.`,name:"lineHeight",parent:{fileName:"recharts/src/component/Text.tsx",name:"TextProps"},required:!1,tags:{defaultValue:"'1em'"},type:{name:"string | number"}}},tags:{}}}catch{}export{S as T,G as a,B as i};
