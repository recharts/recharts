import{e as t}from"./iframe-DSWYlzWY.js";import{R as s}from"./arrayEqualityCheck-Fy9pCvBq.js";import{C as m}from"./ComposedChart-CsltzT4x.js";import{B as r}from"./Bar-cASxdDTM.js";import{R as l}from"./RechartsHookInspector-f6frTyp5.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BiAk_CPB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DVh3xt6X.js";import"./hooks-B7BbWUVY.js";import"./axisSelectors-C1uR2G3h.js";import"./zIndexSlice-CwHVazMP.js";import"./renderedTicksSlice-soMCmbpR.js";import"./CartesianChart-BFtDWNyw.js";import"./chartDataContext-DGfmnKNf.js";import"./CategoricalChart-DpkOEink.js";import"./Layer-BJ-1LjgN.js";import"./tooltipContext-CyOsvigW.js";import"./ReactUtils-cJI4Ub_j.js";import"./Label-DAbjiZ3-.js";import"./Text-CcJbWbw0.js";import"./DOMUtils-9Gl4sMzI.js";import"./ZIndexLayer-DdgNL7UI.js";import"./types-C3ofbdQr.js";import"./ActiveShapeUtils-CIyCCcXD.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BMuMjxhY.js";import"./useAnimationId-C_vJY8DS.js";import"./Trapezoid-COd96k2O.js";import"./Sector-BpUrusHe.js";import"./Symbols-DBQdL11F.js";import"./Curve-kGDkBF5o.js";import"./RegisterGraphicalItemId-BBtGsgZd.js";import"./ErrorBarContext-W32xCQ7P.js";import"./GraphicalItemClipPath-SnzIRqgJ.js";import"./SetGraphicalItem-BwFpDELA.js";import"./getZIndexFromUnknown-BAzIcvHZ.js";import"./graphicalItemSelectors-DN5wHNNo.js";import"./index-CFzpIqAG.js";import"./ChartSizeDimensions-B4hBN_oD.js";import"./OffsetShower-Dq8TEAZv.js";import"./PlotAreaShower-CsbtiMRd.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const rt=["Fill"];export{e as Fill,rt as __namedExportsOrder,et as default};
