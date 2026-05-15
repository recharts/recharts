import{e as t}from"./iframe-BhgNWdm2.js";import{R as s}from"./arrayEqualityCheck-BPYeEWp9.js";import{C as m}from"./ComposedChart-ByWdqqEr.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as e}from"./Bar-hdvsx9ij.js";import{R as c}from"./RechartsHookInspector-BwLyLCbr.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D43Wpvex.js";import"./immer-B8rRfUkI.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D_AVgKr-.js";import"./index-CqC_U7ug.js";import"./hooks-jOaINvHQ.js";import"./axisSelectors-CZf8mr5P.js";import"./d3-scale-D8GbsE5m.js";import"./zIndexSlice-Lcr8coq9.js";import"./renderedTicksSlice-D9cY7pVC.js";import"./CartesianChart-D0cl_oJT.js";import"./chartDataContext-Cguc2YyF.js";import"./CategoricalChart-DQs5NoOs.js";import"./Layer-BkasUZxz.js";import"./tooltipContext-DrWmxDnN.js";import"./ReactUtils-BDMzm1YE.js";import"./Label-BRyOnYfu.js";import"./Text-2yWCgbKe.js";import"./DOMUtils-Cxmm0Icy.js";import"./ZIndexLayer-Do4fofgT.js";import"./types-Bn2_ZBIB.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-C2ogWYAN.js";import"./isPlainObject-B6h9wQ2y.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-jY469onx.js";import"./useAnimationId-Bo7L-9bR.js";import"./Trapezoid-DpB5l6Kj.js";import"./Sector-DfYOmxzx.js";import"./Symbols-CuqnOXh1.js";import"./symbol-CDKmn_1O.js";import"./step-CB53NYyG.js";import"./Curve-CxXqlxgs.js";import"./RegisterGraphicalItemId-Db3TPLUh.js";import"./ErrorBarContext-CdlIyLD3.js";import"./GraphicalItemClipPath-BH2oacZ_.js";import"./SetGraphicalItem-C_WqfzHK.js";import"./getZIndexFromUnknown-L_-Coo5G.js";import"./graphicalItemSelectors-B2BxqOJH.js";import"./index-owEklC_q.js";import"./ChartSizeDimensions-J0Tmkxsz.js";import"./OffsetShower-C_q72LRF.js";import"./PlotAreaShower-CDcLHpUT.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(c,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
