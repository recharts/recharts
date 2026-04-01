import{e as t}from"./iframe-D2iPyEE3.js";import{R as p}from"./arrayEqualityCheck-BQ52A-KD.js";import{C as m}from"./ComposedChart-C_oRmZ51.js";import{c as s}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-C55odWf9.js";import{R as l}from"./RechartsHookInspector-pMynMK3d.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B2qn9BK_.js";import"./immer-5DUlJX3y.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D9hxchsK.js";import"./index-CGzhf8ES.js";import"./hooks-DmQVapf1.js";import"./axisSelectors-Bf33qp9J.js";import"./d3-scale-D333UmOT.js";import"./zIndexSlice-B-uvLuMe.js";import"./renderedTicksSlice-Cw8jJmSY.js";import"./CartesianChart-C44XCUUQ.js";import"./chartDataContext-B0bZnblU.js";import"./CategoricalChart-kNyVXZoh.js";import"./Curve-gyPLT6fj.js";import"./types-DfbbSUKg.js";import"./step-NQkLQHEn.js";import"./Layer-CIGoVUHw.js";import"./ReactUtils-DlxpINgd.js";import"./Label-CjmamkRK.js";import"./Text-B4mK5G2Y.js";import"./DOMUtils-BDNid5QK.js";import"./ZIndexLayer-ClfHdlij.js";import"./ActivePoints-DO1blp6A.js";import"./Dot-D8o3tU3P.js";import"./RegisterGraphicalItemId-De4zP5NP.js";import"./GraphicalItemClipPath-oM0pOvEZ.js";import"./SetGraphicalItem-3fLhXJ7X.js";import"./useAnimationId-fkVW7SyB.js";import"./getRadiusAndStrokeWidthFromDot-CFwxR8E8.js";import"./graphicalItemSelectors-DEHTmw7m.js";import"./index-DZX1BXuq.js";import"./ChartSizeDimensions-CYgvj-Lj.js";import"./OffsetShower-BwoPAHAo.js";import"./PlotAreaShower-phVVNo9A.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:s},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(l,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
