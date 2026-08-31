import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{d as r,f as i}from"./get-Dwxa5DI5.js";import{C as a,c as o,f as s,m as c,n as l,p as u,t as d,u as f,w as p}from"./resolveDefaultProps-CQ5bxg0S.js";import{r as m}from"./isWellBehavedNumber-Dv8NthpO.js";import{n as h,t as g}from"./useBackwardsCompatibleTheme-BRhOyG6I.js";import{n as ee,t as _}from"./DOMUtils-DSWwZ_j3.js";import{n as te,t as v}from"./useId-DYBiduZi.js";import{n as y,r as b}from"./iframe-CMWlATf5.js";function x(e){return N.includes(e)}function S(e,t){return e*M[t]}function C(e){if(e==null||e.includes(P))return P;let t=e;for(;t.includes(`*`)||t.includes(`/`);){let[,e,n,r]=O.exec(t)??[],i=F.parse(e??``),a=F.parse(r??``),o=n===`*`?i.multiply(a):i.divide(a);if(o.isNaN())return P;t=t.replace(O,o.toString())}for(;t.includes(`+`)||/.-\d+(?:\.\d+)?/.test(t);){let[,e,n,r]=k.exec(t)??[],i=F.parse(e??``),a=F.parse(r??``),o=n===`+`?i.add(a):i.subtract(a);if(o.isNaN())return P;t=t.replace(k,o.toString())}return t}function w(e){let t=e,n;for(;(n=I.exec(t))!=null;){let[,e]=n,r=C(e);t=t.replace(I,()=>r)}return t}function T(e){if(e.length>L)return P;let t=e.replace(/\s+/g,``);return t=w(t),t=C(t),t}function E(e){try{return T(e)}catch{return P}}function D(e){let t=E(e.slice(5,-1));return t===P?``:t}var O,k,A,j,M,N,P,F,I,L;function R(){return(R=t((()=>{o(),O=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,k=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,A=/^(px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q)$/,j=/(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,M={cm:96/2.54,mm:96/25.4,pt:96/72,pc:16,in:96,Q:96/101.6,px:1},N=[`cm`,`mm`,`pt`,`pc`,`in`,`Q`,`px`],P=`NaN`,F=class e{static parse(t){let[,n,r]=j.exec(t)??[];return n==null?e.NaN:new e(parseFloat(n),r??``)}static{this.NaN=new e(NaN,``)}constructor(e,t){this.num=e,this.unit=t,this.num=e,this.unit=t,f(e)&&(this.unit=``),t!==``&&!A.test(t)&&(this.num=NaN,this.unit=``),x(t)&&(this.num=S(e,t),this.unit=`px`)}add(t){return this.unit===t.unit?new e(this.num+t.num,this.unit):new e(NaN,``)}subtract(t){return this.unit===t.unit?new e(this.num-t.num,this.unit):new e(NaN,``)}multiply(t){return this.unit!==``&&t.unit!==``&&this.unit!==t.unit?new e(NaN,``):new e(this.num*t.num,this.unit||t.unit)}divide(t){return this.unit!==``&&t.unit!==``&&this.unit!==t.unit?new e(NaN,``):new e(this.num/t.num,this.unit||t.unit)}toString(){return`${this.num}${this.unit}`}isNaN(){return f(this.num)}},I=/\(([^()]*)\)/,L=1e3})))()}function ne(e){return e.fill!=null||e.color==null?e:{...e,fill:e.color}}function z(e){return e===`start`||e===`middle`||e===`end`||e===`inherit`}function B(e){return s(e)||typeof e==`string`||typeof e==`number`||typeof e==`boolean`}var V,H,U,W,G,K,q,J,Y,X,Z,Q,re,$;function ie(){return(ie=t((()=>{V=e(n()),H=n(),i(),o(),b(),ee(),R(),a(),v(),g(),d(),U=/[ \f\n\r\t\v\u2028\u2029]+/,W=({children:e,breakAll:t,style:n})=>{try{let r=[];return s(e)||(r=t?e.toString().split(``):e.toString().split(U)),{wordsWithComputedWidth:r.map(e=>({word:e,width:_(e,n).width})),spaceWidth:t?0:_(`\xA0`,n).width}}catch{return null}},G=(e,t,n,r)=>e.reduce((e,{word:i,width:a})=>{let o=e[e.length-1];if(o&&a!=null&&(t==null||r||o.width+a+n<Number(t)))o.words.push(i),o.width+=a+n;else{let t={words:[i],width:a};e.push(t)}return e},[]),K=e=>e.reduce((e,t)=>e.width>t.width?e:t),q=`…`,J=(e,t,n,r,i,a,o,s)=>{let c=e.slice(0,t),l=W({breakAll:n,style:r,children:c+q});if(!l)return[!1,[]];let u=G(l.wordsWithComputedWidth,a,o,s);return[u.length>i||K(u).width>Number(a),u]},Y=({maxLines:e,children:t,style:n,breakAll:r},i,a,o,s)=>{let l=c(e),u=String(t),d=G(i,o,a,s);if(!l||s||!(d.length>e||K(d).width>Number(o)))return d;let f=0,p=u.length-1,m=0,h;for(;f<=p&&m<=u.length-1;){let t=Math.floor((f+p)/2),i=t-1,[c,l]=J(u,i,r,n,e,o,a,s),[d]=J(u,t,r,n,e,o,a,s);if(!c&&!d&&(f=t+1),c&&d&&(p=t-1),!c&&d){h=l;break}m++}return h||d},X=e=>[{words:s(e)?[]:e.toString().split(U),width:void 0}],Z=({width:e,scaleToFit:t,children:n,style:r,breakAll:i,maxLines:a})=>{if((e||t)&&!y.isSsr){let o,s,c=W({breakAll:i,children:n,style:r});if(c){let{wordsWithComputedWidth:e,spaceWidth:t}=c;o=e,s=t}else return X(n);return Y({breakAll:i,children:n,maxLines:a,style:r},o,s,e,!!t)}return X(n)},Q={fill:`#808080`},re={angle:0,breakAll:!1,capHeight:`0.71em`,lineHeight:`1em`,scaleToFit:!1,textAnchor:`start`,verticalAnchor:`end`,x:0,y:0},$=(0,H.forwardRef)((e,t)=>{let n=h(e=>e.typography,{fill:e.fill},Q),i=l(e,re),a=te(),{x:o,y:s,lineHeight:d,capHeight:f,scaleToFit:g,textAnchor:ee,verticalAnchor:_,style:v,textPath:y,...b}=i,{angle:x,dx:S,dy:C,className:w,breakAll:T,...E}=b,{width:O}=E,k=Number(o)+(c(S)?S:0),A=Number(s)+(c(C)?C:0),j=(0,H.useMemo)(()=>ne({...n,...v}),[v,n]),M=(0,H.useMemo)(()=>Z({breakAll:b.breakAll,children:b.children,maxLines:b.maxLines,scaleToFit:g,style:j,width:b.width}),[b.breakAll,b.children,b.maxLines,g,j,b.width]),N=(0,H.useMemo)(()=>{let e=[],t=M[0];if(g&&t!=null){let n=t.width;e.push(`scale(${c(O)&&c(n)?O/n:1})`)}return x&&y==null&&e.push(`rotate(${x}, ${k}, ${A})`),e},[g,M,O,x,k,A,y]),P=(0,H.useMemo)(()=>{let e=x&&y!=null?`rotate(${x}deg)`:void 0;return{...e==null?{}:{transform:e,transformOrigin:`center`,transformBox:`fill-box`},...j}},[j,x,y]);if(!u(o)||!u(s)||M.length===0||!m(k)||!m(A))return null;let F;switch(_){case`start`:F=D(`calc(${f})`);break;case`middle`:F=D(`calc(${(M.length-1)/2} * -${d} + (${f} / 2))`);break;default:F=D(`calc(${M.length-1} * -${d})`)}return V.createElement(`text`,{transform:N.length>0?N.join(` `):void 0,...p(E),style:P,ref:t,x:k,y:A,className:r(`recharts-text`,w),textAnchor:ee},y==null?M.map((e,t)=>{let n=e.words.join(T?``:` `);return V.createElement(`tspan`,{x:k,dy:t===0?F:d,key:`${n}-${t}`},n)}):V.createElement(V.Fragment,null,V.createElement(`defs`,null,V.createElement(`path`,{id:a,d:y})),V.createElement(`textPath`,{xlinkHref:`#${a}`},b.children)))}),$.displayName=`Text`;try{z.displayName=`isValidTextAnchor`,z.__docgenInfo={description:``,displayName:`isValidTextAnchor`,filePath:`/__w/recharts/recharts/src/component/Text.tsx`,methods:[],props:{},tags:{}}}catch{}try{B.displayName=`isRenderableText`,B.__docgenInfo={description:``,displayName:`isRenderableText`,filePath:`/__w/recharts/recharts/src/component/Text.tsx`,methods:[],props:{},tags:{}}}catch{}try{Z.displayName=`getWordsByLines`,Z.__docgenInfo={description:``,displayName:`getWordsByLines`,filePath:`/__w/recharts/recharts/src/component/Text.tsx`,methods:[],props:{scaleToFit:{defaultValue:null,declarations:[{fileName:`recharts/src/component/Text.tsx`,name:`TextProps`}],description:`When true, scales the text to fit within the specified width.
The text will be scaled down proportionally to fit the available space.

**Important interactions:**
- Requires \`width\` to be defined to have any effect. If width is undefined, scaleToFit does nothing.
- When enabled, \`maxLines\` restrictions are bypassed and ellipsis truncation is disabled.
- Uses the first line's width to calculate the scale factor.
- The scaling transform is applied as \`scale(width / lineWidth)\`.`,name:`scaleToFit`,parent:{fileName:`recharts/src/component/Text.tsx`,name:`TextProps`},required:!1,tags:{defaultValue:`false`},type:{name:`boolean`}},breakAll:{defaultValue:null,declarations:[{fileName:`recharts/src/component/Text.tsx`,name:`TextProps`}],description:`When true, enables character-level breaking instead of word-level breaking.
- false: Text breaks at word boundaries (spaces, tabs, etc.)
- true: Text can break between any characters, useful for languages without spaces

**Note:** Only effective when \`width\` is defined to enable line breaking.
Ignored when \`textPath\` is set because path text is not split into lines.`,name:`breakAll`,parent:{fileName:`recharts/src/component/Text.tsx`,name:`TextProps`},required:!1,tags:{defaultValue:`false`},type:{name:`boolean`}},maxLines:{defaultValue:null,declarations:[{fileName:`recharts/src/component/Text.tsx`,name:`TextProps`}],description:`Maximum number of lines to display when text wrapping is enabled.
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
- Ignored when \`textPath\` is set because path text is rendered directly without truncation`,name:`maxLines`,parent:{fileName:`recharts/src/component/Text.tsx`,name:`TextProps`},required:!1,tags:{},type:{name:`number`}}},tags:{}}}catch{}try{$.displayName=`Text`,$.__docgenInfo={description:``,displayName:`Text`,filePath:`/__w/recharts/recharts/src/component/Text.tsx`,methods:[],props:{textAnchor:{defaultValue:null,declarations:[{fileName:`recharts/src/component/Text.tsx`,name:`TextProps`}],description:`Horizontal text alignment within the text element.
- 'start': Text starts at the x coordinate (left-aligned for LTR text)
- 'middle': Text is centered on the x coordinate
- 'end': Text ends at the x coordinate (right-aligned for LTR text)
- 'inherit': Inherits the text-anchor from parent element

**Note:** This controls horizontal alignment only and does not affect RTL text behavior.
This prop is also used when \`textPath\` is set.`,name:`textAnchor`,parent:{fileName:`recharts/src/component/Text.tsx`,name:`TextProps`},required:!1,tags:{defaultValue:`'start'`},type:{name:`enum`,raw:`TextAnchor`,value:[{value:`"end"`},{value:`"middle"`},{value:`"inherit"`},{value:`"start"`}]}},angle:{defaultValue:null,declarations:[{fileName:`recharts/src/component/Text.tsx`,name:`TextProps`}],description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,name:`angle`,parent:{fileName:`recharts/src/component/Text.tsx`,name:`TextProps`},required:!1,tags:{defaultValue:`0`},type:{name:`number`}},verticalAnchor:{defaultValue:null,declarations:[{fileName:`recharts/src/component/Text.tsx`,name:`TextProps`}],description:`Vertical text alignment relative to the y coordinate.
- 'start': Text baseline starts at y coordinate (text appears below the y position)
- 'middle': Text is vertically centered on the y coordinate
- 'end': Text baseline ends at y coordinate (text appears above the y position)

**Note:** This controls vertical positioning only and does not affect RTL (right-to-left) text behavior.
The alignment calculation uses capHeight and lineHeight to determine the starting dy offset.
Ignored when \`textPath\` is set because the path controls the text's positioning.`,name:`verticalAnchor`,parent:{fileName:`recharts/src/component/Text.tsx`,name:`TextProps`},required:!1,tags:{defaultValue:`'end'`},type:{name:`enum`,raw:`TextVerticalAnchor`,value:[{value:`"end"`},{value:`"middle"`},{value:`"start"`}]}},textPath:{defaultValue:null,declarations:[{fileName:`recharts/src/component/Text.tsx`,name:`TextProps`}],description:"When set, renders the text along the SVG path described by this `d` attribute.\nIn path mode, `breakAll`, `lineHeight`, `maxLines`, and `verticalAnchor` are ignored.",name:`textPath`,parent:{fileName:`recharts/src/component/Text.tsx`,name:`TextProps`},required:!1,tags:{since:`3.11`},type:{name:`string`}},scaleToFit:{defaultValue:null,declarations:[{fileName:`recharts/src/component/Text.tsx`,name:`TextProps`}],description:`When true, scales the text to fit within the specified width.
The text will be scaled down proportionally to fit the available space.

**Important interactions:**
- Requires \`width\` to be defined to have any effect. If width is undefined, scaleToFit does nothing.
- When enabled, \`maxLines\` restrictions are bypassed and ellipsis truncation is disabled.
- Uses the first line's width to calculate the scale factor.
- The scaling transform is applied as \`scale(width / lineWidth)\`.`,name:`scaleToFit`,parent:{fileName:`recharts/src/component/Text.tsx`,name:`TextProps`},required:!1,tags:{defaultValue:`false`},type:{name:`boolean`}},lineHeight:{defaultValue:null,declarations:[{fileName:`recharts/src/component/Text.tsx`,name:`TextProps`}],description:`Line height for multi-line text.
Can be a number (height in pixels) or a string with CSS units.
Used to calculate spacing between lines when text wraps to multiple lines.
Also used in verticalAnchor calculations for positioning the text block.
Ignored when \`textPath\` is set because the text is rendered along a single path.`,name:`lineHeight`,parent:{fileName:`recharts/src/component/Text.tsx`,name:`TextProps`},required:!1,tags:{defaultValue:`'1em'`},type:{name:`string | number`}},breakAll:{defaultValue:null,declarations:[{fileName:`recharts/src/component/Text.tsx`,name:`TextProps`}],description:`When true, enables character-level breaking instead of word-level breaking.
- false: Text breaks at word boundaries (spaces, tabs, etc.)
- true: Text can break between any characters, useful for languages without spaces

**Note:** Only effective when \`width\` is defined to enable line breaking.
Ignored when \`textPath\` is set because path text is not split into lines.`,name:`breakAll`,parent:{fileName:`recharts/src/component/Text.tsx`,name:`TextProps`},required:!1,tags:{defaultValue:`false`},type:{name:`boolean`}},maxLines:{defaultValue:null,declarations:[{fileName:`recharts/src/component/Text.tsx`,name:`TextProps`}],description:`Maximum number of lines to display when text wrapping is enabled.
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
- Ignored when \`textPath\` is set because path text is rendered directly without truncation`,name:`maxLines`,parent:{fileName:`recharts/src/component/Text.tsx`,name:`TextProps`},required:!1,tags:{},type:{name:`number`}}},tags:{}}}catch{}})))()}export{z as i,ie as n,B as r,$ as t};