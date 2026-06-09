import{R as t}from"./iframe-Dn7uhoyL.js";import{R as s}from"./zIndexSlice-CVPi3ttj.js";import{C as l}from"./ComposedChart-CB9Nre2s.js";import{p as m}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-BrBh0euE.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-jPz9tOCf.js";import"./index-Cy5HZ0nr.js";import"./index-CSiJtewq.js";import"./get-BWJg7GwY.js";import"./resolveDefaultProps-CdaF0R9o.js";import"./isWellBehavedNumber-CWLsfq8q.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BxRk2Gdp.js";import"./index-Bq40lsYa.js";import"./index-DD0InOiJ.js";import"./renderedTicksSlice-C-NsLko8.js";import"./axisSelectors-CcayQcVn.js";import"./d3-scale-Cgmb0cG0.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BTxfKGwU.js";import"./chartDataContext-CxM1m1he.js";import"./CategoricalChart-vFRRVoOy.js";import"./Layer-0_0lU0ce.js";import"./tooltipContext-Cbb2NkgC.js";import"./AnimatedItems-BOxaWbpG.js";import"./Label-BkxCdWVF.js";import"./Text-Coel_U_-.js";import"./DOMUtils-DMf79wlK.js";import"./ZIndexLayer-DWtyWVlG.js";import"./useAnimationId-DyeHQUGR.js";import"./types-Bnw4G7MR.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C7YkQMq8.js";import"./ActiveShapeUtils-dzMUbVJX.js";import"./RegisterGraphicalItemId-DNlA1n-y.js";import"./ErrorBarContext-8EwqaTjA.js";import"./GraphicalItemClipPath-Ml5Lm9cP.js";import"./SetGraphicalItem-r_k8Lha2.js";import"./getZIndexFromUnknown-DWMqRqlW.js";import"./graphicalItemSelectors-aMcZFkec.js";const Z={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:m},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={pageData}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <pattern id="star" width="10" height="10" patternUnits="userSpaceOnUse">
              <polygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2" />
            </pattern>
            <pattern id="stripe" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="2" height="4" fill="red" />
            </pattern>
          </defs>
          <Bar dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          <Bar dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#stripe)" />
          <Bar dataKey="amt" stroke="#8884d8" fillOpacity={1} fill="url(#star)" />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const $=["Fill"];export{e as Fill,$ as __namedExportsOrder,Z as default};
