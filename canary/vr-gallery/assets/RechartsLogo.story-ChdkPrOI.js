import{j as t}from"./entry-qgXU13cC.js";import{L as r}from"./LineChart-Pd0wsQcB.js";import{X as i}from"./XAxis-C5HyFOdp.js";import{Y as c}from"./YAxis-C0Lna3Oi.js";import{L as n}from"./Label-DpdE3DhB.js";import{L as x}from"./Line-BErWpNjW.js";const o=3,l=[{x:0,y:0},{x:o,y:1}],d=[{x:0,y:0},{x:o,y:-1}],e=o*11.5,f=[{x:e,y:-1.5},{x:e+o,y:1.5}],y=[{x:e+o*1.5,y:1},{x:e+o*2.5,y:0}],h=[{x:e+o*1.5,y:-1},{x:e+o*2.5,y:0}],a=s=>t.jsx(x,{dataKey:"y",dot:!1,activeDot:{stroke:"var(--color-surface-base)"},strokeWidth:1.5,stroke:"var(--color-solid-brand-1, black)",isAnimationActive:!1,...s});function m(){return t.jsxs(r,{width:200,height:60,children:[t.jsx("style",{type:"text/css",children:`<![CDATA[
            .recharts-text {
              font-family: var(--font-family-code), monospace;
              font-weight: 300;
              font-size: var(--font-size-xl, 18px);
              white-space: nowrap;
            }
      ]]>`}),t.jsx(i,{type:"number",dataKey:"x",hide:!0}),t.jsx(c,{dataKey:"y",domain:[-5,5],hide:!0}),t.jsx(a,{data:l}),t.jsx(a,{data:d}),t.jsx(a,{data:f}),t.jsx(a,{data:y}),t.jsx(a,{data:h}),t.jsx(n,{position:"insideLeft",offset:13,width:10,fill:"var(--color-solid-brand-1, black)",children:"Recharts"})]})}const p=()=>t.jsx(m,{}),k=Object.freeze(Object.defineProperty({__proto__:null,RechartsLogo:p},Symbol.toStringTag,{value:"Module"}));export{k as _};
