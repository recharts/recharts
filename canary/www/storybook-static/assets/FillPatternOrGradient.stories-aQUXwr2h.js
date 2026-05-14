import{e as t}from"./iframe-BRxwlzhD.js";import{R as s}from"./arrayEqualityCheck-CQCuJwd9.js";import{C as m}from"./ComposedChart-C4oxbzZd.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as e}from"./Bar-fXfyQiPe.js";import{R as c}from"./RechartsHookInspector-B_B-yc0r.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CynxUrzr.js";import"./immer-Cx9cWUVd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BxIOqnbY.js";import"./index-DRLqonpR.js";import"./hooks-fHD2lOQN.js";import"./axisSelectors-D3m0qTvR.js";import"./d3-scale-Bx12rmbF.js";import"./zIndexSlice-1DtIfeN0.js";import"./renderedTicksSlice-CaDUjXCY.js";import"./CartesianChart-DCUx-fIz.js";import"./chartDataContext-DyuUFUXu.js";import"./CategoricalChart-C7nGcUHo.js";import"./Layer-BVhxWlBa.js";import"./tooltipContext-DDSY3pJ7.js";import"./ReactUtils-B9lhcmHi.js";import"./Label-BA79Nyf7.js";import"./Text-lrriYnC0.js";import"./DOMUtils-Dl_fPRop.js";import"./ZIndexLayer-S9493XiC.js";import"./types-CSb1fpov.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-D4OjEAgF.js";import"./isPlainObject-BY5Vlzsd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B51QCHw4.js";import"./useAnimationId-BIq3Zr7i.js";import"./Trapezoid-LOBSkskr.js";import"./Sector-lTYUfjnl.js";import"./Symbols-Cg1rHhLz.js";import"./symbol-DhbO_5Le.js";import"./step-DIees0vo.js";import"./Curve-CgFRM1Qr.js";import"./RegisterGraphicalItemId-C8eWu06V.js";import"./ErrorBarContext-D6ju5024.js";import"./GraphicalItemClipPath-mwssqMPM.js";import"./SetGraphicalItem-DUVzJXp_.js";import"./getZIndexFromUnknown-gwhnqJev.js";import"./graphicalItemSelectors-jpCGMroj.js";import"./index-U7yqHMm0.js";import"./ChartSizeDimensions-VvfCpTvE.js";import"./OffsetShower-CdhB882n.js";import"./PlotAreaShower-DOh-p-fE.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(c,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const lt=["Fill"];export{r as Fill,lt as __namedExportsOrder,mt as default};
