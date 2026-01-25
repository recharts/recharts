import{r as d,n as l,a as c}from"./iframe-zYnk8EOr.js";import{d as p,c as u,u as h,b as m}from"./arrayEqualityCheck-R2aAAI7x.js";import{r as f,u as I,s as x}from"./zIndexSlice-BvNEMV0a.js";function a({zIndex:e,children:r}){const n=p()&&e!==void 0&&e!==0,s=u(),t=h();d.useLayoutEffect(()=>n?(t(f({zIndex:e})),()=>{t(I({zIndex:e}))}):l,[t,e,n]);const o=m(i=>x(i,e,s));return n?o?c.createPortal(r,o):null:r}try{a.displayName="ZIndexLayer",a.__docgenInfo={description:`A layer that renders its children into a portal corresponding to the given zIndex.
We can't use regular CSS \`z-index\` because SVG does not support it.
So instead, we create separate DOM nodes for each zIndex layer
and render the children into the corresponding DOM node using React portals.

This component must be used inside a Chart component.`,displayName:"ZIndexLayer",props:{zIndex:{defaultValue:null,description:`Z-Index of this component and its children.

The higher the value, the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.

If \`undefined\` or \`0\`, the content is rendered in the default layer without portals.`,name:"zIndex",required:!0,type:{name:"number | undefined"}},children:{defaultValue:null,description:`The content to render inside this zIndex layer.
Undefined children are allowed and will render nothing and will still report the zIndex to the portal system.`,name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{a as Z};
