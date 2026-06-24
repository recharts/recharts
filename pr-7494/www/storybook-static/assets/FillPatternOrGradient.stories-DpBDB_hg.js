import{R as t}from"./iframe-BeltcMgq.js";import{R as s}from"./zIndexSlice-ChbQV9za.js";import{C as l}from"./ComposedChart-naju1Utf.js";import{p as m}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-b7Q_u2oZ.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BYDh_fcZ.js";import"./index-DdbLs963.js";import"./index-D1BJqAdU.js";import"./get-Blzhyn8O.js";import"./resolveDefaultProps-Bi5xr7q4.js";import"./isWellBehavedNumber-Ho-XzrAB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-afo15-1c.js";import"./index-DN-_Sx45.js";import"./index-BWKSKuqG.js";import"./renderedTicksSlice-BWzIqvlP.js";import"./axisSelectors-DoBuhKXQ.js";import"./d3-scale-D9qfoPRi.js";import"./CartesianChart-DU3tYN-2.js";import"./chartDataContext-BTBnexhV.js";import"./CategoricalChart-CYbFsyR9.js";import"./Layer-CtUZ3qxP.js";import"./tooltipContext-DYDElE1r.js";import"./AnimatedItems-Dkw2Nvms.js";import"./Label-CRfC-ZbS.js";import"./Text-zWkWuZ8O.js";import"./DOMUtils-BiPI68kE.js";import"./ZIndexLayer-CXY-gIuZ.js";import"./useAnimationId-CnyBiRCJ.js";import"./types-BjpCNPaQ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-tmcejSqz.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BaRNo4pA.js";import"./RegisterGraphicalItemId-B1kcHgmx.js";import"./ErrorBarContext-DUSNqADu.js";import"./GraphicalItemClipPath-CSrYVdhv.js";import"./SetGraphicalItem-D8n7ZbTI.js";import"./getZIndexFromUnknown-C9Oh7hor.js";import"./graphicalItemSelectors-rHdypOwQ.js";const Z={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:m},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
