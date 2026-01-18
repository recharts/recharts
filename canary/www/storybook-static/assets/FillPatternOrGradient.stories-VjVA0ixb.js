import{e as t}from"./iframe-E6stEF2S.js";import{R as s}from"./arrayEqualityCheck-CwuTMurj.js";import{C as l}from"./ComposedChart-E1uEID_9.js";import{B as r}from"./Bar-DQsKOvjK.js";import{R as m}from"./RechartsHookInspector-DWDZSsYq.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DpBS-wta.js";import"./PolarUtils-BcxrLtWd.js";import"./RechartsWrapper-CZ-4KBI2.js";import"./hooks-B7vED1ex.js";import"./axisSelectors-CGOr44mz.js";import"./zIndexSlice-DWahER7A.js";import"./CartesianChart-BDrQ5wVQ.js";import"./chartDataContext-mxEGBICQ.js";import"./CategoricalChart-HONQPrlU.js";import"./Layer-BegbPFb9.js";import"./tooltipContext-Cla1oypE.js";import"./ReactUtils-ofTPTzz1.js";import"./Label-rhvib36b.js";import"./Text-Da_5tIJ5.js";import"./DOMUtils-DelYEp0F.js";import"./ZIndexLayer-CZ3aFF1-.js";import"./types-FSWLiQQw.js";import"./ActiveShapeUtils-vlVDSwIy.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DJCClTE6.js";import"./useAnimationId-jacrtTCV.js";import"./Trapezoid-BRnSAzjS.js";import"./Sector-DQ6bsa91.js";import"./Symbols-BofiGE9Z.js";import"./Curve-CjjQKwtg.js";import"./RegisterGraphicalItemId-RdaYGkCK.js";import"./ErrorBarContext-C4-NhtXv.js";import"./GraphicalItemClipPath-D7GqE0xr.js";import"./SetGraphicalItem-CJIPhBZp.js";import"./getZIndexFromUnknown-D6WMOSBT.js";import"./graphicalItemSelectors-BELaDFI-.js";import"./index-D_N7o97v.js";import"./ChartSizeDimensions-Bkhb3coG.js";import"./OffsetShower-C8PKcIaU.js";import"./PlotAreaShower-Tf4T6ETR.js";const tt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(m,null)))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
