import{j as p}from"./resolveDefaultProps-D6R4bRBz.js";import{q as x,x as I,c as y,f as g,d as w,y as Z,z as h,A as E}from"./zIndexSlice-rByxwPq2.js";import{r as l}from"./iframe-z45XlhiT.js";import{a as z}from"./index-DhBnsQMm.js";const P=(e,t,c)=>{const a=x();if(a==null)return c==null?t:p(t,c);const d=e(a);return d==null?t:p(t,d)};function m({zIndex:e,children:t}){const a=I()&&e!==void 0&&e!==0,d=y(),u=l.useRef(void 0),o=l.useRef(new Set),s=g(),i=w(r=>Z(r,e,d));if(l.useLayoutEffect(()=>{if(!a){const r=o.current;r.forEach(n=>{s(h({zIndex:n}))}),r.clear(),u.current=void 0;return}if(o.current.has(e)||(s(E({zIndex:e})),o.current.add(e)),i){u.current=i;const r=o.current;r.forEach(n=>{n!==e&&(s(h({zIndex:n})),r.delete(n))})}},[s,e,a,i]),l.useLayoutEffect(()=>{const r=o.current;return()=>{r.forEach(n=>{s(h({zIndex:n}))}),r.clear()}},[s]),!a)return t;const f=i??u.current;return f?z.createPortal(t,f):null}try{m.displayName="ZIndexLayer",m.__docgenInfo={description:`A layer that renders its children into a portal corresponding to the given zIndex.
We can't use regular CSS \`z-index\` because SVG does not support it.
So instead, we create separate DOM nodes for each zIndex layer
and render the children into the corresponding DOM node using React portals.

This component must be used inside a Chart component.`,displayName:"ZIndexLayer",filePath:"/__w/recharts/recharts/src/zIndex/ZIndexLayer.tsx",methods:[],props:{zIndex:{defaultValue:null,declarations:[{fileName:"recharts/src/zIndex/ZIndexLayer.tsx",name:"TypeLiteral"}],description:`Z-Index of this component and its children.

The higher the value, the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.

If \`undefined\` or \`0\`, the content is rendered in the default layer without portals.`,name:"zIndex",required:!0,tags:{},type:{name:"number | undefined"}},children:{defaultValue:null,declarations:[{fileName:"recharts/src/zIndex/ZIndexLayer.tsx",name:"TypeLiteral"}],description:`The content to render inside this zIndex layer.
Undefined children are allowed and will render nothing and will still report the zIndex to the portal system.`,name:"children",required:!1,tags:{},type:{name:"ReactNode"}}},tags:{param:`zIndex numeric zIndex value, higher values are rendered on top of lower values
children the content to render inside this zIndex layer`,since:"3.4"}}}catch{}export{m as Z,P as u};
