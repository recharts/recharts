import{j as t}from"./lightTheme-lBxNBN17.js";import{L as r}from"./LineChart-CtMVaAWo.js";import{X as i}from"./XAxis-DDihsVfh.js";import{Y as c}from"./YAxis-D2wMjK-5.js";import{L as n}from"./Label-IqhW0fr2.js";import{L as x}from"./Line-8ZCgcBtG.js";const a=3,d=[{x:0,y:0},{x:a,y:1}],l=[{x:0,y:0},{x:a,y:-1}],o=a*11.5,f=[{x:o,y:-1.5},{x:o+a,y:1.5}],y=[{x:o+a*1.5,y:1},{x:o+a*2.5,y:0}],h=[{x:o+a*1.5,y:-1},{x:o+a*2.5,y:0}],s=e=>t.jsx(x,{dataKey:"y",dot:!1,activeDot:{stroke:"var(--color-surface-base)"},strokeWidth:1.5,stroke:"var(--color-solid-brand-1, black)",isAnimationActive:!1,...e});function u(){return t.jsxs(r,{width:200,height:60,children:[t.jsx("style",{type:"text/css",children:`<![CDATA[
            .recharts-text {
              font-family: var(--font-family-code), monospace;
              font-weight: 300;
              font-size: var(--font-size-xl, 18px);
              white-space: nowrap;
            }
      ]]>`}),t.jsx(i,{type:"number",dataKey:"x",hide:!0}),t.jsx(c,{dataKey:"y",domain:[-5,5],hide:!0}),t.jsx(s,{data:d}),t.jsx(s,{data:l}),t.jsx(s,{data:f}),t.jsx(s,{data:y}),t.jsx(s,{data:h}),t.jsx(n,{position:"insideLeft",offset:13,width:10,fill:"var(--color-solid-brand-1, black)",children:"Recharts"})]})}export{u as R};
