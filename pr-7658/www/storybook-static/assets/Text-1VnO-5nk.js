import{r as p,G as le}from"./iframe-BEU0VEzj.js";import{c as ce}from"./get-C2VjdU0L.js";import{p as M,r as de,i as E,c as U,b as ue,a as $}from"./resolveDefaultProps-3wYQv28v.js";import{g as B}from"./DOMUtils-B3nT0fft.js";import{a as X}from"./isWellBehavedNumber-C2k8qIGv.js";import{u as he}from"./useId-DlO5xKwO.js";import{u as pe}from"./useBackwardsCompatibleTheme-DbNZLS-G.js";const z=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,D=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,me=/^(px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q)$/,fe=/(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,xe={cm:96/2.54,mm:96/25.4,pt:96/72,pc:96/6,in:96,Q:96/(2.54*40),px:1},we=["cm","mm","pt","pc","in","Q","px"];function ge(t){return we.includes(t)}const T="NaN";function Te(t,e){return t*xe[e]}const c=class c{constructor(e,n){this.num=e,this.unit=n,this.num=e,this.unit=n,M(e)&&(this.unit=""),n!==""&&!me.test(n)&&(this.num=NaN,this.unit=""),ge(n)&&(this.num=Te(e,n),this.unit="px")}static parse(e){const[,n,r]=fe.exec(e)??[];return n==null?c.NaN:new c(parseFloat(n),r??"")}add(e){return this.unit!==e.unit?new c(NaN,""):new c(this.num+e.num,this.unit)}subtract(e){return this.unit!==e.unit?new c(NaN,""):new c(this.num-e.num,this.unit)}multiply(e){return this.unit!==""&&e.unit!==""&&this.unit!==e.unit?new c(NaN,""):new c(this.num*e.num,this.unit||e.unit)}divide(e){return this.unit!==""&&e.unit!==""&&this.unit!==e.unit?new c(NaN,""):new c(this.num/e.num,this.unit||e.unit)}toString(){return`${this.num}${this.unit}`}isNaN(){return M(this.num)}};c.NaN=new c(NaN,"");let N=c;function te(t){if(t==null||t.includes(T))return T;let e=t;for(;e.includes("*")||e.includes("/");){const[,n,r,i]=z.exec(e)??[],o=N.parse(n??""),s=N.parse(i??""),a=r==="*"?o.multiply(s):o.divide(s);if(a.isNaN())return T;e=e.replace(z,a.toString())}for(;e.includes("+")||/.-\d+(?:\.\d+)?/.test(e);){const[,n,r,i]=D.exec(e)??[],o=N.parse(n??""),s=N.parse(i??""),a=r==="+"?o.add(s):o.subtract(s);if(a.isNaN())return T;e=e.replace(D,a.toString())}return e}const Z=/\(([^()]*)\)/;function be(t){let e=t,n;for(;(n=Z.exec(e))!=null;){const[,r]=n,i=te(r);e=e.replace(Z,()=>i)}return e}const ye=1e3;function Ne(t){if(t.length>ye)return T;let e=t.replace(/\s+/g,"");return e=be(e),e=te(e),e}function ve(t){try{return Ne(t)}catch{return T}}function F(t){const e=ve(t.slice(5,-1));return e===T?"":e}const ne=/[ \f\n\r\t\v\u2028\u2029]+/,se=({children:t,breakAll:e,style:n})=>{try{let r=[];$(t)||(e?r=t.toString().split(""):r=t.toString().split(ne));const i=r.map(s=>({word:s,width:B(s,n).width})),o=e?0:B(" ",n).width;return{wordsWithComputedWidth:i,spaceWidth:o}}catch{return null}};function Q(t){return t==="start"||t==="middle"||t==="end"||t==="inherit"}function j(t){return $(t)||typeof t=="string"||typeof t=="number"||typeof t=="boolean"}const re=(t,e,n,r)=>t.reduce((i,{word:o,width:s})=>{const a=i[i.length-1];if(a&&s!=null&&(e==null||r||a.width+s+n<Number(e)))a.words.push(o),a.width+=s+n;else{const f={words:[o],width:s};i.push(f)}return i},[]),ae=t=>t.reduce((e,n)=>e.width>n.width?e:n),Pe="…",Y=(t,e,n,r,i,o,s,a)=>{const f=t.slice(0,e),l=se({breakAll:n,style:r,children:f+Pe});if(!l)return[!1,[]];const d=re(l.wordsWithComputedWidth,o,s,a);return[d.length>i||ae(d).width>Number(o),d]},_e=({maxLines:t,children:e,style:n,breakAll:r},i,o,s,a)=>{const f=E(t),l=String(e),d=re(i,s,o,a);if(!f||a||!(d.length>t||ae(d).width>Number(s)))return d;let w=0,x=l.length-1,u=0,A;for(;w<=x&&u<=l.length-1;){const m=Math.floor((w+x)/2),L=m-1,[b,V]=Y(l,L,r,n,t,s,o,a),[v]=Y(l,m,r,n,t,s,o,a);if(!b&&!v&&(w=m+1),b&&v&&(x=m-1),!b&&v){A=V;break}u++}return A||d},K=t=>[{words:$(t)?[]:t.toString().split(ne),width:void 0}],O=({width:t,scaleToFit:e,children:n,style:r,breakAll:i,maxLines:o})=>{if((t||e)&&!le.isSsr){let s,a;const f=se({breakAll:i,children:n,style:r});if(f){const{wordsWithComputedWidth:l,spaceWidth:d}=f;s=l,a=d}else return K(n);return _e({breakAll:i,children:n,maxLines:o,style:r},s,a,t,!!e)}return K(n)},ie="#808080",J={angle:0,breakAll:!1,capHeight:"0.71em",fill:ie,lineHeight:"1em",scaleToFit:!1,textAnchor:"start",verticalAnchor:"end",x:0,y:0},ee={},q=p.forwardRef((t,e)=>{const n=pe(h=>h.typography,ee,ee),r=he(),{x:i,y:o,lineHeight:s,capHeight:a,fill:f,scaleToFit:l,textAnchor:d,verticalAnchor:R,style:w,textPath:x,...u}=de(t,J),A=n.fill,{angle:m,dx:L,dy:b,className:V,breakAll:v,...H}=u,{width:W}=H,P=Number(i)+(E(L)?L:0),I=Number(o)+(E(b)?b:0),k=p.useMemo(()=>{const{fill:h,...g}=n;return{...g,...t.fill==null&&h!==void 0?{fill:h}:{},...w}},[t.fill,w,n]),y=p.useMemo(()=>O({breakAll:u.breakAll,children:u.children,maxLines:u.maxLines,scaleToFit:l,style:k,width:u.width}),[u.breakAll,u.children,u.maxLines,l,k,u.width]),C=p.useMemo(()=>{const h=[],g=y[0];if(l&&g!=null){const _=g.width;h.push(`scale(${E(W)&&E(_)?W/_:1})`)}return m&&x==null&&h.push(`rotate(${m}, ${P}, ${I})`),h},[l,y,W,m,P,I,x]),G=t.fill??(w==null?void 0:w.color)??n.color??A??f??J.fill,oe=p.useMemo(()=>{const h=m&&x!=null?`rotate(${m}deg)`:void 0;return{...h!=null?{transform:h,transformOrigin:"center",transformBox:"fill-box"}:{},...k}},[k,m,x]);if(!U(i)||!U(o)||y.length===0||!X(P)||!X(I))return null;let S;switch(R){case"start":S=F(`calc(${a})`);break;case"middle":S=F(`calc(${(y.length-1)/2} * -${s} + (${a} / 2))`);break;default:S=F(`calc(${y.length-1} * -${s})`);break}return p.createElement("text",{transform:C.length>0?C.join(" "):void 0,...ue(H),style:oe,ref:e,x:P,y:I,className:ce("recharts-text",V),textAnchor:d,fill:G.includes("url")?ie:G},x==null?y.map((h,g)=>{const _=h.words.join(v?"":" ");return p.createElement("tspan",{x:P,dy:g===0?S:s,key:`${_}-${g}`},_)}):p.createElement(p.Fragment,null,p.createElement("defs",null,p.createElement("path",{id:r,d:x})),p.createElement("textPath",{xlinkHref:`#${r}`},u.children)))});q.displayName="Text";try{Q.displayName="isValidTextAnchor",Q.__docgenInfo={description:"",displayName:"isValidTextAnchor",filePath:"/__w/recharts/recharts/src/component/Text.tsx",methods:[],props:{},tags:{}}}catch{}try{j.displayName="isRenderableText",j.__docgenInfo={description:"",displayName:"isRenderableText",filePath:"/__w/recharts/recharts/src/component/Text.tsx",methods:[],props:{},tags:{}}}catch{}try{O.displayName="getWordsByLines",O.__docgenInfo={description:"",displayName:"getWordsByLines",filePath:"/__w/recharts/recharts/src/component/Text.tsx",methods:[],props:{scaleToFit:{defaultValue:null,declarations:[{fileName:"recharts/src/component/Text.tsx",name:"TextProps"}],description:`When true, scales the text to fit within the specified width.
The text will be scaled down proportionally to fit the available space.

**Important interactions:**
- Requires \`width\` to be defined to have any effect. If width is undefined, scaleToFit does nothing.
- When enabled, \`maxLines\` restrictions are bypassed and ellipsis truncation is disabled.
- Uses the first line's width to calculate the scale factor.
- The scaling transform is applied as \`scale(width / lineWidth)\`.`,name:"scaleToFit",parent:{fileName:"recharts/src/component/Text.tsx",name:"TextProps"},required:!1,tags:{defaultValue:"false"},type:{name:"boolean"}},breakAll:{defaultValue:null,declarations:[{fileName:"recharts/src/component/Text.tsx",name:"TextProps"}],description:`When true, enables character-level breaking instead of word-level breaking.
- false: Text breaks at word boundaries (spaces, tabs, etc.)
- true: Text can break between any characters, useful for languages without spaces

**Note:** Only effective when \`width\` is defined to enable line breaking.
Ignored when \`textPath\` is set because path text is not split into lines.`,name:"breakAll",parent:{fileName:"recharts/src/component/Text.tsx",name:"TextProps"},required:!1,tags:{defaultValue:"false"},type:{name:"boolean"}},maxLines:{defaultValue:null,declarations:[{fileName:"recharts/src/component/Text.tsx",name:"TextProps"}],description:`Maximum number of lines to display when text wrapping is enabled.
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
- Ignored when \`textPath\` is set because path text is rendered directly without truncation`,name:"maxLines",parent:{fileName:"recharts/src/component/Text.tsx",name:"TextProps"},required:!1,tags:{},type:{name:"number"}}},tags:{}}}catch{}try{q.displayName="Text",q.__docgenInfo={description:"",displayName:"Text",filePath:"/__w/recharts/recharts/src/component/Text.tsx",methods:[],props:{textAnchor:{defaultValue:null,declarations:[{fileName:"recharts/src/component/Text.tsx",name:"TextProps"}],description:`Horizontal text alignment within the text element.
- 'start': Text starts at the x coordinate (left-aligned for LTR text)
- 'middle': Text is centered on the x coordinate
- 'end': Text ends at the x coordinate (right-aligned for LTR text)
- 'inherit': Inherits the text-anchor from parent element

**Note:** This controls horizontal alignment only and does not affect RTL text behavior.
This prop is also used when \`textPath\` is set.`,name:"textAnchor",parent:{fileName:"recharts/src/component/Text.tsx",name:"TextProps"},required:!1,tags:{defaultValue:"'start'"},type:{name:"enum",raw:"TextAnchor",value:[{value:'"end"'},{value:'"middle"'},{value:'"inherit"'},{value:'"start"'}]}},angle:{defaultValue:null,declarations:[{fileName:"recharts/src/component/Text.tsx",name:"TextProps"}],description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,name:"angle",parent:{fileName:"recharts/src/component/Text.tsx",name:"TextProps"},required:!1,tags:{defaultValue:"0"},type:{name:"number"}},textPath:{defaultValue:null,declarations:[{fileName:"recharts/src/component/Text.tsx",name:"TextProps"}],description:"When set, renders the text along the SVG path described by this `d` attribute.\nIn path mode, `breakAll`, `lineHeight`, `maxLines`, and `verticalAnchor` are ignored.",name:"textPath",parent:{fileName:"recharts/src/component/Text.tsx",name:"TextProps"},required:!1,tags:{since:"3.11"},type:{name:"string"}},verticalAnchor:{defaultValue:null,declarations:[{fileName:"recharts/src/component/Text.tsx",name:"TextProps"}],description:`Vertical text alignment relative to the y coordinate.
- 'start': Text baseline starts at y coordinate (text appears below the y position)
- 'middle': Text is vertically centered on the y coordinate
- 'end': Text baseline ends at y coordinate (text appears above the y position)

**Note:** This controls vertical positioning only and does not affect RTL (right-to-left) text behavior.
The alignment calculation uses capHeight and lineHeight to determine the starting dy offset.
Ignored when \`textPath\` is set because the path controls the text's positioning.`,name:"verticalAnchor",parent:{fileName:"recharts/src/component/Text.tsx",name:"TextProps"},required:!1,tags:{defaultValue:"'end'"},type:{name:"enum",raw:"TextVerticalAnchor",value:[{value:'"end"'},{value:'"middle"'},{value:'"start"'}]}},scaleToFit:{defaultValue:null,declarations:[{fileName:"recharts/src/component/Text.tsx",name:"TextProps"}],description:`When true, scales the text to fit within the specified width.
The text will be scaled down proportionally to fit the available space.

**Important interactions:**
- Requires \`width\` to be defined to have any effect. If width is undefined, scaleToFit does nothing.
- When enabled, \`maxLines\` restrictions are bypassed and ellipsis truncation is disabled.
- Uses the first line's width to calculate the scale factor.
- The scaling transform is applied as \`scale(width / lineWidth)\`.`,name:"scaleToFit",parent:{fileName:"recharts/src/component/Text.tsx",name:"TextProps"},required:!1,tags:{defaultValue:"false"},type:{name:"boolean"}},breakAll:{defaultValue:null,declarations:[{fileName:"recharts/src/component/Text.tsx",name:"TextProps"}],description:`When true, enables character-level breaking instead of word-level breaking.
- false: Text breaks at word boundaries (spaces, tabs, etc.)
- true: Text can break between any characters, useful for languages without spaces

**Note:** Only effective when \`width\` is defined to enable line breaking.
Ignored when \`textPath\` is set because path text is not split into lines.`,name:"breakAll",parent:{fileName:"recharts/src/component/Text.tsx",name:"TextProps"},required:!1,tags:{defaultValue:"false"},type:{name:"boolean"}},maxLines:{defaultValue:null,declarations:[{fileName:"recharts/src/component/Text.tsx",name:"TextProps"}],description:`Maximum number of lines to display when text wrapping is enabled.
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
- Ignored when \`textPath\` is set because path text is rendered directly without truncation`,name:"maxLines",parent:{fileName:"recharts/src/component/Text.tsx",name:"TextProps"},required:!1,tags:{},type:{name:"number"}},lineHeight:{defaultValue:null,declarations:[{fileName:"recharts/src/component/Text.tsx",name:"TextProps"}],description:`Line height for multi-line text.
Can be a number (height in pixels) or a string with CSS units.
Used to calculate spacing between lines when text wraps to multiple lines.
Also used in verticalAnchor calculations for positioning the text block.
Ignored when \`textPath\` is set because the text is rendered along a single path.`,name:"lineHeight",parent:{fileName:"recharts/src/component/Text.tsx",name:"TextProps"},required:!1,tags:{defaultValue:"'1em'"},type:{name:"string | number"}}},tags:{}}}catch{}export{q as T,j as a,Q as i};
