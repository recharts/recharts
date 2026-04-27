import{e as t}from"./iframe-Qs6O8wpy.js";import{R as s}from"./arrayEqualityCheck-DiPmtVsh.js";import{C as m}from"./ComposedChart-DbT19AeO.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as e}from"./Bar-D953sRZs.js";import{R as c}from"./RechartsHookInspector-D6-uk_4z.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DkvZoiFw.js";import"./immer-BUNCc4EX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DXH9h8qa.js";import"./index-BLhY0zjE.js";import"./hooks-C6T0ux6I.js";import"./axisSelectors-BqhGWF7A.js";import"./d3-scale-C7QcSE0p.js";import"./string-B6fdYHAA.js";import"./zIndexSlice-BdRBx_3M.js";import"./renderedTicksSlice-Si7G1rdh.js";import"./CartesianChart-CZ-ONe5U.js";import"./chartDataContext-Dx6fqFLh.js";import"./CategoricalChart-D7dhNxwj.js";import"./Layer-CICKsHec.js";import"./tooltipContext-BMHzdSd6.js";import"./AnimatedItems-Bmk-Vn6E.js";import"./Label-DJKNn60w.js";import"./Text-DQ28Uic0.js";import"./DOMUtils-C3QfuTRj.js";import"./ZIndexLayer-Dzi2jwDH.js";import"./useAnimationId-Bx8YWNYj.js";import"./types-Cs32UOA0.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils--dL8_NPS.js";import"./isPlainObject-CN0NSOTq.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bukdiqfq.js";import"./Trapezoid-CT6ZG2gE.js";import"./Sector-ByAF8mSb.js";import"./Symbols-B1g8PGM_.js";import"./symbol-DP01-Acw.js";import"./step-6wxOI7IM.js";import"./Curve-uoVbw7SZ.js";import"./RegisterGraphicalItemId-D_GbpICU.js";import"./ErrorBarContext-DiylhWX0.js";import"./GraphicalItemClipPath-97GOlLPd.js";import"./SetGraphicalItem-CPtdCQ7b.js";import"./getZIndexFromUnknown-CkiqRHgB.js";import"./graphicalItemSelectors-CFCx3oIW.js";import"./index-COAE6_R9.js";import"./ChartSizeDimensions-h_Vewza7.js";import"./OffsetShower-Dv7qO3Dx.js";import"./PlotAreaShower-CTCwIg18.js";const lt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(c,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const ct=["Fill"];export{r as Fill,ct as __namedExportsOrder,lt as default};
