import{e as t}from"./iframe-DjYpiCK1.js";import{R as p}from"./arrayEqualityCheck-ChWij-6b.js";import{C as m}from"./ComposedChart-DGjTVrS3.js";import{A as r}from"./Area-JacCHeD0.js";import{R as s}from"./RechartsHookInspector-ycUhMjsN.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BKyQYHPq.js";import"./immer-Q7LYndgz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BsT6E87M.js";import"./index-Dcc_DcJs.js";import"./hooks-DA7ZLRAz.js";import"./axisSelectors-DRA31YxA.js";import"./d3-scale-D4J-_PMg.js";import"./zIndexSlice-DD29w02m.js";import"./renderedTicksSlice-CQl_TKKG.js";import"./CartesianChart-DMb_0zJ6.js";import"./chartDataContext-A4NUbCSz.js";import"./CategoricalChart-DDH3jH2P.js";import"./Curve-CcdovDiP.js";import"./types-uugzObvO.js";import"./step-e2Z4FnHn.js";import"./Layer-DTpB7dpX.js";import"./ReactUtils-Bc2S-2Ko.js";import"./Label-BjhhnV9x.js";import"./Text-tzBe5md3.js";import"./DOMUtils-C_4MXzyf.js";import"./ZIndexLayer-DPHhTAxg.js";import"./ActivePoints-CFK0b_hi.js";import"./Dot-Dv-nlLLJ.js";import"./RegisterGraphicalItemId-CzheeRaZ.js";import"./GraphicalItemClipPath-BAi4t0TL.js";import"./SetGraphicalItem-DCV_XwVp.js";import"./useAnimationId-DKdTeHc-.js";import"./getRadiusAndStrokeWidthFromDot-BlTuKxo4.js";import"./graphicalItemSelectors-DBaAmjf3.js";import"./index-DQOJXr3R.js";import"./ChartSizeDimensions-Bar3NlUL.js";import"./OffsetShower-EZRykoXG.js";import"./PlotAreaShower-BUEMDiZc.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <defs>
            <pattern id="left" width="12" height="4" patternUnits="userSpaceOnUse">
              <rect width="4" height="4" fill="#8884d8" />
            </pattern>
            <pattern id="right" width="8" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="4" height="4" fill="#82ca9d" />
            </pattern>
          </defs>
          <Area type="monotone" dataKey="x" stroke="#8884d8" fillOpacity={1} fill="url(#left)" />
          <Area type="monotone" dataKey="y" stroke="#82ca9d" fillOpacity={1} fill="url(#right)" />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const et=["FillPattern"];export{e as FillPattern,et as __namedExportsOrder,tt as default};
