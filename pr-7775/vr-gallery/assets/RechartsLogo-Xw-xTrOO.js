import{j as t}from"./lightTheme-lBxNBN17.js";import{L as r}from"./Label-DSTUw4Xd.js";import{L as i}from"./Line-OkLLBATk.js";import{X as c}from"./XAxis-Chccv81G.js";import{Y as n}from"./YAxis-CaIM6U9A.js";import{L as x}from"./LineChart-CMQGqi7U.js";const a=3,d=[{x:0,y:0},{x:a,y:1}],l=[{x:0,y:0},{x:a,y:-1}],o=a*11.5,f=[{x:o,y:-1.5},{x:o+a,y:1.5}],y=[{x:o+a*1.5,y:1},{x:o+a*2.5,y:0}],h=[{x:o+a*1.5,y:-1},{x:o+a*2.5,y:0}],s=e=>t.jsx(i,{dataKey:"y",dot:!1,activeDot:{stroke:"var(--color-surface-base)"},strokeWidth:1.5,stroke:"var(--color-solid-brand-1, black)",isAnimationActive:!1,...e});function u(){return t.jsxs(x,{width:200,height:60,children:[t.jsx("style",{type:"text/css",children:`<![CDATA[
            .recharts-text {
              font-family: var(--font-family-code), monospace;
              font-weight: 300;
              font-size: var(--font-size-xl, 18px);
              white-space: nowrap;
            }
      ]]>`}),t.jsx(c,{type:"number",dataKey:"x",hide:!0}),t.jsx(n,{dataKey:"y",domain:[-5,5],hide:!0}),t.jsx(s,{data:d}),t.jsx(s,{data:l}),t.jsx(s,{data:f}),t.jsx(s,{data:y}),t.jsx(s,{data:h}),t.jsx(r,{position:"insideLeft",offset:13,width:10,fill:"var(--color-solid-brand-1, black)",children:"Recharts"})]})}export{u as R};
