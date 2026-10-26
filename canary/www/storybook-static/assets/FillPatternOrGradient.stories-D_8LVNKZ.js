import{R as t}from"./iframe-D3XpTouC.js";import{R as s}from"./zIndexSlice-nnBmRw_5.js";import{C as m}from"./ComposedChart-e1zdTWw-.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-D8KbmtPG.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DlZqYg6P.js";import"./throttle-B0HYRial.js";import"./index-DHhgNiiB.js";import"./index-DTv10PLm.js";import"./RechartsWrapper-sYdg_-aY.js";import"./axisSelectors-DLLpPrx1.js";import"./polarAxisSelectors-C3Rr3kNg.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-k39_yHUv.js";import"./index-CSVEFX3e.js";import"./index-nr8cRX1L.js";import"./renderedTicksSlice-BzU7dsOB.js";import"./index-BIeNSbTD.js";import"./CartesianChart-DoW6CJ46.js";import"./chartDataContext-BRwGn-1-.js";import"./CategoricalChart-C7DNEYYD.js";import"./Layer-D4bzgnBD.js";import"./activeStyles-CSOHGyzI.js";import"./Label-C-8XXSAc.js";import"./Text-B7A0Zl2p.js";import"./pageBackground-BB2_LToU.js";import"./useId-2hxDKCu1.js";import"./ZIndexLayer-DtbAElLD.js";import"./dataEntryStyles-lBmwmj-v.js";import"./useAnimationId-SaX7cxM4.js";import"./types-BmT-ScX1.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-pIaUnyaB.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DcUYSyXw.js";import"./tooltipContext-CoMR-16p.js";import"./RegisterGraphicalItemId-BJwNChl_.js";import"./ErrorBarContext-6Mnl7Bdn.js";import"./SetGraphicalItem-9ERbeIZR.js";import"./getZIndexFromUnknown-lf0XNuk4.js";import"./useEffectiveDataKey-BFS5aOAm.js";import"./omit-B4fJ_quc.js";import"./isArguments-yB-y1yaH.js";import"./isBuffer-AZzsDYE7.js";const it={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},ot=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{e as Fill,ot as __namedExportsOrder,it as default};
