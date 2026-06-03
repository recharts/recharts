import{P as s}from"./iframe-CSdIsBuA.js";import{r as f}from"./index-Cpoemtz2.js";import{ag as m,ah as x,aa as I,ab as g,a3 as y,a8 as c,H as w}from"./zIndexSlice-Cwyv9NeI.js";function u({zIndex:r,children:l}){const d=m()&&r!==void 0&&r!==0,p=x(),i=s.useRef(void 0),a=s.useRef(new Set),n=I(),o=g(e=>y(e,r,p));if(s.useLayoutEffect(()=>{if(!d){const e=a.current;e.forEach(t=>{n(c({zIndex:t}))}),e.clear(),i.current=void 0;return}if(a.current.has(r)||(n(w({zIndex:r})),a.current.add(r)),o){i.current=o;const e=a.current;e.forEach(t=>{t!==r&&(n(c({zIndex:t})),e.delete(t))})}},[n,r,d,o]),s.useLayoutEffect(()=>{const e=a.current;return()=>{e.forEach(t=>{n(c({zIndex:t}))}),e.clear()}},[n]),!d)return l;const h=o??i.current;return h?f.createPortal(l,h):null}try{u.displayName="ZIndexLayer",u.__docgenInfo={description:`A layer that renders its children into a portal corresponding to the given zIndex.
We can't use regular CSS \`z-index\` because SVG does not support it.
So instead, we create separate DOM nodes for each zIndex layer
and render the children into the corresponding DOM node using React portals.

This component must be used inside a Chart component.`,displayName:"ZIndexLayer",filePath:"/__w/recharts/recharts/src/zIndex/ZIndexLayer.tsx",methods:[],props:{zIndex:{defaultValue:null,declarations:[{fileName:"recharts/src/zIndex/ZIndexLayer.tsx",name:"TypeLiteral"}],description:`Z-Index of this component and its children.

The higher the value, the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.

If \`undefined\` or \`0\`, the content is rendered in the default layer without portals.`,name:"zIndex",required:!0,tags:{},type:{name:"number | undefined"}},children:{defaultValue:null,declarations:[{fileName:"recharts/src/zIndex/ZIndexLayer.tsx",name:"TypeLiteral"}],description:`The content to render inside this zIndex layer.
Undefined children are allowed and will render nothing and will still report the zIndex to the portal system.`,name:"children",required:!1,tags:{},type:{name:"ReactNode"}}},tags:{param:`zIndex numeric zIndex value, higher values are rendered on top of lower values
children the content to render inside this zIndex layer`,since:"3.4"}}}catch{}export{u as Z};
