import{u as s,t as f}from"./iframe-CA2bza4n.js";import{af as m,ag as I,a9 as x,aa as g}from"./arrayEqualityCheck-DAdSVd1l.js";import{b as y,u as c,r as w}from"./zIndexSlice-CSAGQhtB.js";function p({zIndex:t,children:l}){const i=m()&&t!==void 0&&t!==0,h=I(),d=s.useRef(void 0),a=s.useRef(new Set),n=x(),o=g(e=>y(e,t,h));if(s.useLayoutEffect(()=>{if(!i){const e=a.current;e.forEach(r=>{n(c({zIndex:r}))}),e.clear(),d.current=void 0;return}if(a.current.has(t)||(n(w({zIndex:t})),a.current.add(t)),o){d.current=o;const e=a.current;e.forEach(r=>{r!==t&&(n(c({zIndex:r})),e.delete(r))})}},[n,t,i,o]),s.useLayoutEffect(()=>{const e=a.current;return()=>{e.forEach(r=>{n(c({zIndex:r}))}),e.clear()}},[n]),!i)return l;const u=o??d.current;return u?f.createPortal(l,u):null}try{p.displayName="ZIndexLayer",p.__docgenInfo={description:`A layer that renders its children into a portal corresponding to the given zIndex.
We can't use regular CSS \`z-index\` because SVG does not support it.
So instead, we create separate DOM nodes for each zIndex layer
and render the children into the corresponding DOM node using React portals.

This component must be used inside a Chart component.`,displayName:"ZIndexLayer",props:{zIndex:{defaultValue:null,description:`Z-Index of this component and its children.

The higher the value, the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.

If \`undefined\` or \`0\`, the content is rendered in the default layer without portals.`,name:"zIndex",required:!0,type:{name:"number | undefined"}},children:{defaultValue:null,description:`The content to render inside this zIndex layer.
Undefined children are allowed and will render nothing and will still report the zIndex to the portal system.`,name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{p as Z};
