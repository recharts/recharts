import{r as s,a as f}from"./iframe-7k9yEKZX.js";import{d as m,c as I,u as x,b as g}from"./arrayEqualityCheck-DyKOzX9B.js";import{s as y,u as c,r as w}from"./zIndexSlice-CzkFlcL3.js";function p({zIndex:t,children:l}){const i=m()&&t!==void 0&&t!==0,h=I(),d=s.useRef(void 0),o=s.useRef(new Set),n=x(),a=g(e=>y(e,t,h));if(s.useLayoutEffect(()=>{if(!i){const e=o.current;e.forEach(r=>{n(c({zIndex:r}))}),e.clear(),d.current=void 0;return}if(o.current.has(t)||(n(w({zIndex:t})),o.current.add(t)),a){d.current=a;const e=o.current;e.forEach(r=>{r!==t&&(n(c({zIndex:r})),e.delete(r))})}},[n,t,i,a]),s.useLayoutEffect(()=>{const e=o.current;return()=>{e.forEach(r=>{n(c({zIndex:r}))}),e.clear()}},[n]),!i)return l;const u=a??d.current;return u?f.createPortal(l,u):null}try{p.displayName="ZIndexLayer",p.__docgenInfo={description:`A layer that renders its children into a portal corresponding to the given zIndex.
We can't use regular CSS \`z-index\` because SVG does not support it.
So instead, we create separate DOM nodes for each zIndex layer
and render the children into the corresponding DOM node using React portals.

This component must be used inside a Chart component.`,displayName:"ZIndexLayer",props:{zIndex:{defaultValue:null,description:`Z-Index of this component and its children.

The higher the value, the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.

If \`undefined\` or \`0\`, the content is rendered in the default layer without portals.`,name:"zIndex",required:!0,type:{name:"number | undefined"}},children:{defaultValue:null,description:`The content to render inside this zIndex layer.
Undefined children are allowed and will render nothing and will still report the zIndex to the portal system.`,name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{p as Z};
