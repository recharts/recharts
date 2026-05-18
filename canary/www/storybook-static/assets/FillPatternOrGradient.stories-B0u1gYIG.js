import{e as t}from"./iframe-BmdG6Yuj.js";import{g as s}from"./arrayEqualityCheck-Cs0ODbAq.js";import{C as m}from"./ComposedChart-CzsBStAV.js";import{p as l}from"./Page-DPte-9pC.js";import{B as e}from"./Bar-DagYBrKQ.js";import{R as c}from"./RechartsHookInspector-C9gdculA.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CzKMDris.js";import"./immer-r1hs1aui.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BRt9rj0a.js";import"./index-emtiH1OM.js";import"./hooks-DLMhcoxZ.js";import"./axisSelectors-B5YNmqFl.js";import"./d3-scale-BCNqbAE1.js";import"./zIndexSlice-CernrlT2.js";import"./renderedTicksSlice-BiizQght.js";import"./CartesianChart-n72JXqS8.js";import"./chartDataContext-DC8YgnRR.js";import"./CategoricalChart-mKbdU8Ir.js";import"./Layer-CTqkrp1s.js";import"./tooltipContext-CU_0oZz_.js";import"./ReactUtils-BDG3-ZiE.js";import"./Label-BahHfmoK.js";import"./Text-DqTFRyGd.js";import"./DOMUtils-Cpgve9lL.js";import"./ZIndexLayer-BALln1nu.js";import"./types-HBeXaxhb.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DLVI0LAd.js";import"./isPlainObject-B7mW1TAl.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dr2ikaiy.js";import"./useAnimationId-DYvcKDoo.js";import"./Trapezoid-BUVaAWPm.js";import"./Sector-CrLZSk6O.js";import"./Symbols-iO_juYq8.js";import"./symbol-Dl25fcAc.js";import"./step-B9kksXJi.js";import"./Curve-o1yfXHk1.js";import"./RegisterGraphicalItemId-Bh3Gr8bc.js";import"./ErrorBarContext-DmBcQTJi.js";import"./GraphicalItemClipPath-CCzofO3U.js";import"./SetGraphicalItem-A_fx4pfl.js";import"./getZIndexFromUnknown-BrfeAXTD.js";import"./graphicalItemSelectors-NT01alJS.js";import"./index-C_lgB8BG.js";import"./ChartSizeDimensions-DqzMb5LP.js";import"./OffsetShower-DFfLZ4K8.js";import"./PlotAreaShower-CawkEE7f.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(c,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
