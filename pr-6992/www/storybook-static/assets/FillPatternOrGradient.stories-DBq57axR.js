import{e as t}from"./iframe-BHl6feHg.js";import{R as s}from"./arrayEqualityCheck-JXPmVnXy.js";import{C as l}from"./ComposedChart-k9Vt-A54.js";import{B as r}from"./Bar-BZcsjnhw.js";import{R as m}from"./RechartsHookInspector-CQ8dXbzy.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Cbmc1eDK.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DNWAu01W.js";import"./hooks-Dg4O0IDH.js";import"./axisSelectors-DkCd3lVb.js";import"./zIndexSlice-BJqVcMRI.js";import"./CartesianChart-a-Nu4Djb.js";import"./chartDataContext-U6yYzpZX.js";import"./CategoricalChart-DPTMtwYi.js";import"./Layer-lCm_g64d.js";import"./tooltipContext-C_JbhibV.js";import"./ReactUtils-CAG2pm7w.js";import"./Label-K4IXz_WW.js";import"./Text-D9u3Lv_0.js";import"./DOMUtils-Cw8uC_z6.js";import"./ZIndexLayer-BG8-MmnW.js";import"./types-D0Ktdl0_.js";import"./ActiveShapeUtils-B7nFKqHq.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DXzfAzil.js";import"./useAnimationId-BLeXX0yF.js";import"./Trapezoid-Df-d7Ics.js";import"./Sector-C4gW7qc9.js";import"./Symbols-Cg9YUet5.js";import"./Curve-BK3JDrZL.js";import"./RegisterGraphicalItemId-C0ySl-rG.js";import"./ErrorBarContext-B_05VW9R.js";import"./GraphicalItemClipPath-pdN9VU--.js";import"./SetGraphicalItem-Cw07hcJH.js";import"./getZIndexFromUnknown-DQ2ueRH6.js";import"./graphicalItemSelectors-J-ZsJNTR.js";import"./index-fMMWXo17.js";import"./ChartSizeDimensions-HMEMc6fo.js";import"./OffsetShower-BfTyamfA.js";import"./PlotAreaShower-DtEQ72Vu.js";const tt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(m,null)))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
