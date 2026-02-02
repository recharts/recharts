import{e as t}from"./iframe-Cce3OzqZ.js";import{R as s}from"./arrayEqualityCheck-Db-Wlt3-.js";import{C as l}from"./ComposedChart-D9Jq7hVy.js";import{B as r}from"./Bar-DiVCktwA.js";import{R as m}from"./RechartsHookInspector-eGeMVAmo.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-clrD5nAI.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-BB7xPYUQ.js";import"./hooks-CvLdkisu.js";import"./axisSelectors-Bcvcu9k5.js";import"./zIndexSlice-Cor1sHRq.js";import"./CartesianChart-CWSN6Hlp.js";import"./chartDataContext-CgfT6HWr.js";import"./CategoricalChart-9DlpQFFM.js";import"./Layer-CFkQXCn1.js";import"./tooltipContext-Bb15o9BC.js";import"./ReactUtils-Nar3liya.js";import"./Label-C4rMK4zH.js";import"./Text-CY2c_dSA.js";import"./DOMUtils-T3Cy7g6m.js";import"./ZIndexLayer-BKOy02ft.js";import"./types-b_fBODQO.js";import"./ActiveShapeUtils-BMdNKtxM.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C3wzWw1S.js";import"./useAnimationId-CDstBXSk.js";import"./Trapezoid-kBqI72Ws.js";import"./Sector-CPI45FrX.js";import"./Symbols-BhodARnK.js";import"./Curve-Fkz9pikW.js";import"./RegisterGraphicalItemId-9_Paa6o8.js";import"./ErrorBarContext-DV0NqXL1.js";import"./GraphicalItemClipPath-BC3qMhyN.js";import"./SetGraphicalItem-DtwoVgdz.js";import"./getZIndexFromUnknown-BixKmGcV.js";import"./graphicalItemSelectors-CwDqIOjA.js";import"./index-DVt7NuEo.js";import"./ChartSizeDimensions-g60a5Ajl.js";import"./OffsetShower-TfY9mri6.js";import"./PlotAreaShower-CZOh-CeP.js";const tt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(m,null)))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const et=["Fill"];export{e as Fill,et as __namedExportsOrder,tt as default};
