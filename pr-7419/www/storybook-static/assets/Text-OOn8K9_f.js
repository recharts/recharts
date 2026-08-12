import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{d as r,f as i}from"./get-Dwxa5DI5.js";import{C as a,S as o,d as s,f as c,l,n as u,p as d,s as f,t as p}from"./resolveDefaultProps-ID4Oeddf.js";import{r as m}from"./isWellBehavedNumber-CH-UiSEU.js";import{n as h,t as ee}from"./RechartsThemeContext-mzha7--t.js";import{n as g,t as _}from"./DOMUtils-BKV8_hqR.js";import{n as v,r as y}from"./iframe-Co6KBzke.js";function b(e){return M.includes(e)}function x(e,t){return e*j[t]}function S(e){if(e==null||e.includes(N))return N;let t=e;for(;t.includes(`*`)||t.includes(`/`);){let[,e,n,r]=D.exec(t)??[],i=P.parse(e??``),a=P.parse(r??``),o=n===`*`?i.multiply(a):i.divide(a);if(o.isNaN())return N;t=t.replace(D,o.toString())}for(;t.includes(`+`)||/.-\d+(?:\.\d+)?/.test(t);){let[,e,n,r]=O.exec(t)??[],i=P.parse(e??``),a=P.parse(r??``),o=n===`+`?i.add(a):i.subtract(a);if(o.isNaN())return N;t=t.replace(O,o.toString())}return t}function C(e){let t=e,n;for(;(n=F.exec(t))!=null;){let[,e]=n,r=S(e);t=t.replace(F,()=>r)}return t}function w(e){if(e.length>I)return N;let t=e.replace(/\s+/g,``);return t=C(t),t=S(t),t}function T(e){try{return w(e)}catch{return N}}function E(e){let t=T(e.slice(5,-1));return t===N?``:t}var D,O,k,A,j,M,N,P,F,I;function L(){return(L=t((()=>{f(),D=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,O=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,k=/^(px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q)$/,A=/(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,j={cm:96/2.54,mm:96/25.4,pt:96/72,pc:16,in:96,Q:96/101.6,px:1},M=[`cm`,`mm`,`pt`,`pc`,`in`,`Q`,`px`],N=`NaN`,P=class e{static parse(t){let[,n,r]=A.exec(t)??[];return n==null?e.NaN:new e(parseFloat(n),r??``)}static{this.NaN=new e(NaN,``)}constructor(e,t){this.num=e,this.unit=t,this.num=e,this.unit=t,l(e)&&(this.unit=``),t!==``&&!k.test(t)&&(this.num=NaN,this.unit=``),b(t)&&(this.num=x(e,t),this.unit=`px`)}add(t){return this.unit===t.unit?new e(this.num+t.num,this.unit):new e(NaN,``)}subtract(t){return this.unit===t.unit?new e(this.num-t.num,this.unit):new e(NaN,``)}multiply(t){return this.unit!==``&&t.unit!==``&&this.unit!==t.unit?new e(NaN,``):new e(this.num*t.num,this.unit||t.unit)}divide(t){return this.unit!==``&&t.unit!==``&&this.unit!==t.unit?new e(NaN,``):new e(this.num/t.num,this.unit||t.unit)}toString(){return`${this.num}${this.unit}`}isNaN(){return l(this.num)}},F=/\(([^()]*)\)/,I=1e3})))()}function R(e){return e===`start`||e===`middle`||e===`end`||e===`inherit`}function z(e){return s(e)||typeof e==`string`||typeof e==`number`||typeof e==`boolean`}var B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;function te(){return(te=t((()=>{B=e(n()),V=n(),i(),f(),y(),g(),L(),o(),p(),ee(),H=/[ \f\n\r\t\v\u2028\u2029]+/,U=({children:e,breakAll:t,style:n})=>{try{let r=[];return s(e)||(r=t?e.toString().split(``):e.toString().split(H)),{wordsWithComputedWidth:r.map(e=>({word:e,width:_(e,n).width})),spaceWidth:t?0:_(`\xA0`,n).width}}catch{return null}},W=(e,t,n,r)=>e.reduce((e,{word:i,width:a})=>{let o=e[e.length-1];if(o&&a!=null&&(t==null||r||o.width+a+n<Number(t)))o.words.push(i),o.width+=a+n;else{let t={words:[i],width:a};e.push(t)}return e},[]),G=e=>e.reduce((e,t)=>e.width>t.width?e:t),K=`…`,q=(e,t,n,r,i,a,o,s)=>{let c=e.slice(0,t),l=U({breakAll:n,style:r,children:c+K});if(!l)return[!1,[]];let u=W(l.wordsWithComputedWidth,a,o,s);return[u.length>i||G(u).width>Number(a),u]},J=({maxLines:e,children:t,style:n,breakAll:r},i,a,o,s)=>{let c=d(e),l=String(t),u=W(i,o,a,s);if(!c||s||!(u.length>e||G(u).width>Number(o)))return u;let f=0,p=l.length-1,m=0,h;for(;f<=p&&m<=l.length-1;){let t=Math.floor((f+p)/2),i=t-1,[c,u]=q(l,i,r,n,e,o,a,s),[d]=q(l,t,r,n,e,o,a,s);if(!c&&!d&&(f=t+1),c&&d&&(p=t-1),!c&&d){h=u;break}m++}return h||u},Y=e=>[{words:s(e)?[]:e.toString().split(H),width:void 0}],X=({width:e,scaleToFit:t,children:n,style:r,breakAll:i,maxLines:a})=>{if((e||t)&&!v.isSsr){let o,s,c=U({breakAll:i,children:n,style:r});if(c){let{wordsWithComputedWidth:e,spaceWidth:t}=c;o=e,s=t}else return Y(n);return J({breakAll:i,children:n,maxLines:a,style:r},o,s,e,!!t)}return Y(n)},Z=`#808080`,Q={angle:0,breakAll:!1,capHeight:`0.71em`,fill:Z,lineHeight:`1em`,scaleToFit:!1,textAnchor:`start`,verticalAnchor:`end`,x:0,y:0},$=(0,V.forwardRef)((e,t)=>{let n=h(),{x:i,y:o,lineHeight:s,capHeight:l,fill:f,scaleToFit:p,textAnchor:ee,verticalAnchor:g,style:_,...v}=u(e,Q),y=n.typography?.fill,b=(0,V.useMemo)(()=>{let{fill:t,...r}=n.typography??{};return{...r,...e.fill==null&&t!==void 0?{fill:t}:{},..._}},[e.fill,_,n.typography]),x=e.fill??_?.color??n.typography?.color??y??f??Q.fill,S=(0,V.useMemo)(()=>X({breakAll:v.breakAll,children:v.children,maxLines:v.maxLines,scaleToFit:p,style:b,width:v.width}),[v.breakAll,v.children,v.maxLines,p,b,v.width]),{dx:C,dy:w,angle:T,className:D,breakAll:O,...k}={...v,style:b};if(!c(i)||!c(o)||S.length===0)return null;let A=Number(i)+(d(C)?C:0),j=Number(o)+(d(w)?w:0);if(!m(A)||!m(j))return null;let M;switch(g){case`start`:M=E(`calc(${l})`);break;case`middle`:M=E(`calc(${(S.length-1)/2} * -${s} + (${l} / 2))`);break;default:M=E(`calc(${S.length-1} * -${s})`)}let N=[],P=S[0];if(p&&P!=null){let e=P.width,{width:t}=v;N.push(`scale(${d(t)&&d(e)?t/e:1})`)}return T&&N.push(`rotate(${T}, ${A}, ${j})`),N.length&&(k.transform=N.join(` `)),B.createElement(`text`,{...a(k),ref:t,x:A,y:j,className:r(`recharts-text`,D),textAnchor:ee,fill:x.includes(`url`)?Z:x},S.map((e,t)=>{let n=e.words.join(O?``:` `);return B.createElement(`tspan`,{x:A,dy:t===0?M:s,key:`${n}-${t}`},n)}))}),$.displayName=`Text`;try{R.displayName=`isValidTextAnchor`,R.__docgenInfo={description:``,displayName:`isValidTextAnchor`,filePath:`/__w/recharts/recharts/src/component/Text.tsx`,methods:[],props:{},tags:{}}}catch{}try{z.displayName=`isRenderableText`,z.__docgenInfo={description:``,displayName:`isRenderableText`,filePath:`/__w/recharts/recharts/src/component/Text.tsx`,methods:[],props:{},tags:{}}}catch{}try{X.displayName=`getWordsByLines`,X.__docgenInfo={description:``,displayName:`getWordsByLines`,filePath:`/__w/recharts/recharts/src/component/Text.tsx`,methods:[],props:{scaleToFit:{defaultValue:null,declarations:[{fileName:`recharts/src/component/Text.tsx`,name:`TextProps`}],description:`When true, scales the text to fit within the specified width.
The text will be scaled down proportionally to fit the available space.

**Important interactions:**
- Requires \`width\` to be defined to have any effect. If width is undefined, scaleToFit does nothing.
- When enabled, \`maxLines\` restrictions are bypassed and ellipsis truncation is disabled.
- Uses the first line's width to calculate the scale factor.
- The scaling transform is applied as \`scale(width / lineWidth)\`.`,name:`scaleToFit`,parent:{fileName:`recharts/src/component/Text.tsx`,name:`TextProps`},required:!1,tags:{defaultValue:`false`},type:{name:`boolean`}},breakAll:{defaultValue:null,declarations:[{fileName:`recharts/src/component/Text.tsx`,name:`TextProps`}],description:`When true, enables character-level breaking instead of word-level breaking.
- false: Text breaks at word boundaries (spaces, tabs, etc.)
- true: Text can break between any characters, useful for languages without spaces

**Note:** Only effective when \`width\` is defined to enable line breaking.`,name:`breakAll`,parent:{fileName:`recharts/src/component/Text.tsx`,name:`TextProps`},required:!1,tags:{defaultValue:`false`},type:{name:`boolean`}},maxLines:{defaultValue:null,declarations:[{fileName:`recharts/src/component/Text.tsx`,name:`TextProps`}],description:`Maximum number of lines to display when text wrapping is enabled.
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
- Requires \`width\` to be set for line breaking to occur`,name:`maxLines`,parent:{fileName:`recharts/src/component/Text.tsx`,name:`TextProps`},required:!1,tags:{},type:{name:`number`}}},tags:{}}}catch{}try{$.displayName=`Text`,$.__docgenInfo={description:``,displayName:`Text`,filePath:`/__w/recharts/recharts/src/component/Text.tsx`,methods:[],props:{textAnchor:{defaultValue:null,declarations:[{fileName:`recharts/src/component/Text.tsx`,name:`TextProps`}],description:`Horizontal text alignment within the text element.
- 'start': Text starts at the x coordinate (left-aligned for LTR text)
- 'middle': Text is centered on the x coordinate
- 'end': Text ends at the x coordinate (right-aligned for LTR text)
- 'inherit': Inherits the text-anchor from parent element

**Note:** This controls horizontal alignment only and does not affect RTL text behavior.`,name:`textAnchor`,parent:{fileName:`recharts/src/component/Text.tsx`,name:`TextProps`},required:!1,tags:{defaultValue:`'start'`},type:{name:`enum`,raw:`TextAnchor`,value:[{value:`"end"`},{value:`"middle"`},{value:`"inherit"`},{value:`"start"`}]}},angle:{defaultValue:null,declarations:[{fileName:`recharts/src/component/Text.tsx`,name:`TextProps`}],description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,name:`angle`,parent:{fileName:`recharts/src/component/Text.tsx`,name:`TextProps`},required:!1,tags:{defaultValue:`0`},type:{name:`number`}},verticalAnchor:{defaultValue:null,declarations:[{fileName:`recharts/src/component/Text.tsx`,name:`TextProps`}],description:`Vertical text alignment relative to the y coordinate.
- 'start': Text baseline starts at y coordinate (text appears below the y position)
- 'middle': Text is vertically centered on the y coordinate
- 'end': Text baseline ends at y coordinate (text appears above the y position)

**Note:** This controls vertical positioning only and does not affect RTL (right-to-left) text behavior.
The alignment calculation uses capHeight and lineHeight to determine the starting dy offset.`,name:`verticalAnchor`,parent:{fileName:`recharts/src/component/Text.tsx`,name:`TextProps`},required:!1,tags:{defaultValue:`'end'`},type:{name:`enum`,raw:`TextVerticalAnchor`,value:[{value:`"end"`},{value:`"middle"`},{value:`"start"`}]}},scaleToFit:{defaultValue:null,declarations:[{fileName:`recharts/src/component/Text.tsx`,name:`TextProps`}],description:`When true, scales the text to fit within the specified width.
The text will be scaled down proportionally to fit the available space.

**Important interactions:**
- Requires \`width\` to be defined to have any effect. If width is undefined, scaleToFit does nothing.
- When enabled, \`maxLines\` restrictions are bypassed and ellipsis truncation is disabled.
- Uses the first line's width to calculate the scale factor.
- The scaling transform is applied as \`scale(width / lineWidth)\`.`,name:`scaleToFit`,parent:{fileName:`recharts/src/component/Text.tsx`,name:`TextProps`},required:!1,tags:{defaultValue:`false`},type:{name:`boolean`}},breakAll:{defaultValue:null,declarations:[{fileName:`recharts/src/component/Text.tsx`,name:`TextProps`}],description:`When true, enables character-level breaking instead of word-level breaking.
- false: Text breaks at word boundaries (spaces, tabs, etc.)
- true: Text can break between any characters, useful for languages without spaces

**Note:** Only effective when \`width\` is defined to enable line breaking.`,name:`breakAll`,parent:{fileName:`recharts/src/component/Text.tsx`,name:`TextProps`},required:!1,tags:{defaultValue:`false`},type:{name:`boolean`}},maxLines:{defaultValue:null,declarations:[{fileName:`recharts/src/component/Text.tsx`,name:`TextProps`}],description:`Maximum number of lines to display when text wrapping is enabled.
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
- Requires \`width\` to be set for line breaking to occur`,name:`maxLines`,parent:{fileName:`recharts/src/component/Text.tsx`,name:`TextProps`},required:!1,tags:{},type:{name:`number`}},lineHeight:{defaultValue:null,declarations:[{fileName:`recharts/src/component/Text.tsx`,name:`TextProps`}],description:`Line height for multi-line text.
Can be a number (height in pixels) or a string with CSS units.
Used to calculate spacing between lines when text wraps to multiple lines.
Also used in verticalAnchor calculations for positioning the text block.`,name:`lineHeight`,parent:{fileName:`recharts/src/component/Text.tsx`,name:`TextProps`},required:!1,tags:{defaultValue:`'1em'`},type:{name:`string | number`}}},tags:{}}}catch{}})))()}export{R as i,te as n,z as r,$ as t};