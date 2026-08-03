import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{d as r,f as i}from"./get-JYKwurb5.js";import{C as a,S as o,d as s,f as c,l,n as u,p as d,s as f,t as p}from"./resolveDefaultProps-CQN_Mtsc.js";import{r as m}from"./isWellBehavedNumber-DWTa1CTO.js";import{n as h,t as g}from"./DOMUtils-BobZlIhC.js";import{n as _,r as v}from"./iframe-DzyTDh7l.js";function y(e){return j.includes(e)}function b(e,t){return e*A[t]}function x(e){if(e==null||e.includes(M))return M;let t=e;for(;t.includes(`*`)||t.includes(`/`);){let[,e,n,r]=E.exec(t)??[],i=N.parse(e??``),a=N.parse(r??``),o=n===`*`?i.multiply(a):i.divide(a);if(o.isNaN())return M;t=t.replace(E,o.toString())}for(;t.includes(`+`)||/.-\d+(?:\.\d+)?/.test(t);){let[,e,n,r]=D.exec(t)??[],i=N.parse(e??``),a=N.parse(r??``),o=n===`+`?i.add(a):i.subtract(a);if(o.isNaN())return M;t=t.replace(D,o.toString())}return t}function S(e){let t=e,n;for(;(n=P.exec(t))!=null;){let[,e]=n;t=t.replace(P,x(e))}return t}function C(e){let t=e.replace(/\s+/g,``);return t=S(t),t=x(t),t}function w(e){try{return C(e)}catch{return M}}function T(e){let t=w(e.slice(5,-1));return t===M?``:t}var E,D,O,k,A,j,M,N,P;function F(){return(F=t((()=>{f(),E=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,D=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,O=/^(px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q)$/,k=/(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,A={cm:96/2.54,mm:96/25.4,pt:96/72,pc:96/6,in:96,Q:96/101.6,px:1},j=[`cm`,`mm`,`pt`,`pc`,`in`,`Q`,`px`],M=`NaN`,N=class e{static parse(t){let[,n,r]=k.exec(t)??[];return n==null?e.NaN:new e(parseFloat(n),r??``)}static{this.NaN=new e(NaN,``)}constructor(e,t){this.num=e,this.unit=t,this.num=e,this.unit=t,l(e)&&(this.unit=``),t!==``&&!O.test(t)&&(this.num=NaN,this.unit=``),y(t)&&(this.num=b(e,t),this.unit=`px`)}add(t){return this.unit===t.unit?new e(this.num+t.num,this.unit):new e(NaN,``)}subtract(t){return this.unit===t.unit?new e(this.num-t.num,this.unit):new e(NaN,``)}multiply(t){return this.unit!==``&&t.unit!==``&&this.unit!==t.unit?new e(NaN,``):new e(this.num*t.num,this.unit||t.unit)}divide(t){return this.unit!==``&&t.unit!==``&&this.unit!==t.unit?new e(NaN,``):new e(this.num/t.num,this.unit||t.unit)}toString(){return`${this.num}${this.unit}`}isNaN(){return l(this.num)}},P=/\(([^()]*)\)/})))()}function I(e){return e===`start`||e===`middle`||e===`end`||e===`inherit`}function L(e){return s(e)||typeof e==`string`||typeof e==`number`||typeof e==`boolean`}var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z;function Q(){return(Q=t((()=>{R=e(n()),z=n(),i(),f(),v(),h(),F(),o(),p(),B=/[ \f\n\r\t\v\u2028\u2029]+/,V=({children:e,breakAll:t,style:n})=>{try{let r=[];return s(e)||(r=t?e.toString().split(``):e.toString().split(B)),{wordsWithComputedWidth:r.map(e=>({word:e,width:g(e,n).width})),spaceWidth:t?0:g(`\xA0`,n).width}}catch{return null}},H=(e,t,n,r)=>e.reduce((e,{word:i,width:a})=>{let o=e[e.length-1];if(o&&a!=null&&(t==null||r||o.width+a+n<Number(t)))o.words.push(i),o.width+=a+n;else{let t={words:[i],width:a};e.push(t)}return e},[]),U=e=>e.reduce((e,t)=>e.width>t.width?e:t),W=`…`,G=(e,t,n,r,i,a,o,s)=>{let c=e.slice(0,t),l=V({breakAll:n,style:r,children:c+W});if(!l)return[!1,[]];let u=H(l.wordsWithComputedWidth,a,o,s);return[u.length>i||U(u).width>Number(a),u]},K=({maxLines:e,children:t,style:n,breakAll:r},i,a,o,s)=>{let c=d(e),l=String(t),u=H(i,o,a,s);if(!c||s||!(u.length>e||U(u).width>Number(o)))return u;let f=0,p=l.length-1,m=0,h;for(;f<=p&&m<=l.length-1;){let t=Math.floor((f+p)/2),i=t-1,[c,u]=G(l,i,r,n,e,o,a,s),[d]=G(l,t,r,n,e,o,a,s);if(!c&&!d&&(f=t+1),c&&d&&(p=t-1),!c&&d){h=u;break}m++}return h||u},q=e=>[{words:s(e)?[]:e.toString().split(B),width:void 0}],J=({width:e,scaleToFit:t,children:n,style:r,breakAll:i,maxLines:a})=>{if((e||t)&&!_.isSsr){let o,s,c=V({breakAll:i,children:n,style:r});if(c){let{wordsWithComputedWidth:e,spaceWidth:t}=c;o=e,s=t}else return q(n);return K({breakAll:i,children:n,maxLines:a,style:r},o,s,e,!!t)}return q(n)},Y=`#808080`,X={angle:0,breakAll:!1,capHeight:`0.71em`,fill:Y,lineHeight:`1em`,scaleToFit:!1,textAnchor:`start`,verticalAnchor:`end`,x:0,y:0},Z=(0,z.forwardRef)((e,t)=>{let{x:n,y:i,lineHeight:o,capHeight:s,fill:l,scaleToFit:f,textAnchor:p,verticalAnchor:h,...g}=u(e,X),_=(0,z.useMemo)(()=>J({breakAll:g.breakAll,children:g.children,maxLines:g.maxLines,scaleToFit:f,style:g.style,width:g.width}),[g.breakAll,g.children,g.maxLines,f,g.style,g.width]),{dx:v,dy:y,angle:b,className:x,breakAll:S,...C}=g;if(!c(n)||!c(i)||_.length===0)return null;let w=Number(n)+(d(v)?v:0),E=Number(i)+(d(y)?y:0);if(!m(w)||!m(E))return null;let D;switch(h){case`start`:D=T(`calc(${s})`);break;case`middle`:D=T(`calc(${(_.length-1)/2} * -${o} + (${s} / 2))`);break;default:D=T(`calc(${_.length-1} * -${o})`)}let O=[],k=_[0];if(f&&k!=null){let e=k.width,{width:t}=g;O.push(`scale(${d(t)&&d(e)?t/e:1})`)}return b&&O.push(`rotate(${b}, ${w}, ${E})`),O.length&&(C.transform=O.join(` `)),R.createElement(`text`,{...a(C),ref:t,x:w,y:E,className:r(`recharts-text`,x),textAnchor:p,fill:l.includes(`url`)?Y:l},_.map((e,t)=>{let n=e.words.join(S?``:` `);return R.createElement(`tspan`,{x:w,dy:t===0?D:o,key:`${n}-${t}`},n)}))}),Z.displayName=`Text`;try{I.displayName=`isValidTextAnchor`,I.__docgenInfo={description:``,displayName:`isValidTextAnchor`,filePath:`/__w/recharts/recharts/src/component/Text.tsx`,methods:[],props:{},tags:{}}}catch{}try{L.displayName=`isRenderableText`,L.__docgenInfo={description:``,displayName:`isRenderableText`,filePath:`/__w/recharts/recharts/src/component/Text.tsx`,methods:[],props:{},tags:{}}}catch{}try{J.displayName=`getWordsByLines`,J.__docgenInfo={description:``,displayName:`getWordsByLines`,filePath:`/__w/recharts/recharts/src/component/Text.tsx`,methods:[],props:{scaleToFit:{defaultValue:null,declarations:[{fileName:`recharts/src/component/Text.tsx`,name:`TextProps`}],description:`When true, scales the text to fit within the specified width.
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
- Requires \`width\` to be set for line breaking to occur`,name:`maxLines`,parent:{fileName:`recharts/src/component/Text.tsx`,name:`TextProps`},required:!1,tags:{},type:{name:`number`}}},tags:{}}}catch{}try{Z.displayName=`Text`,Z.__docgenInfo={description:``,displayName:`Text`,filePath:`/__w/recharts/recharts/src/component/Text.tsx`,methods:[],props:{textAnchor:{defaultValue:null,declarations:[{fileName:`recharts/src/component/Text.tsx`,name:`TextProps`}],description:`Horizontal text alignment within the text element.
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
Also used in verticalAnchor calculations for positioning the text block.`,name:`lineHeight`,parent:{fileName:`recharts/src/component/Text.tsx`,name:`TextProps`},required:!1,tags:{defaultValue:`'1em'`},type:{name:`string | number`}}},tags:{}}}catch{}})))()}export{I as i,Q as n,L as r,Z as t};