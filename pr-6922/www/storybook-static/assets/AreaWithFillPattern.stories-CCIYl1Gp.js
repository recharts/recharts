import{e as t}from"./iframe-3ssOB91Q.js";import{R as p}from"./arrayEqualityCheck-RWElLsK2.js";import{C as m}from"./ComposedChart-4-taPps0.js";import{A as r}from"./Area-S5JUVFrB.js";import{R as s}from"./RechartsHookInspector-DHP-9GZN.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-ctxcgNcU.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-8idYzD5u.js";import"./hooks-6a0TNfIB.js";import"./axisSelectors-DTH02zf7.js";import"./zIndexSlice-ho1ylgk9.js";import"./CartesianChart-D-chxrPJ.js";import"./chartDataContext-CBnI5hri.js";import"./CategoricalChart-CW0qn3M9.js";import"./Curve-D5W7Bwp2.js";import"./types-CfIL69ww.js";import"./Layer-W17HINYn.js";import"./ReactUtils-DVrxVJVb.js";import"./Label-DzudoiWU.js";import"./Text-BvProlO0.js";import"./DOMUtils-DJ-ugNhO.js";import"./ZIndexLayer-CTlKz5-T.js";import"./ActivePoints-CGehM9Vx.js";import"./Dot-BXBhG_dq.js";import"./RegisterGraphicalItemId-K0GLMkuF.js";import"./GraphicalItemClipPath-BNmYXfJz.js";import"./SetGraphicalItem-D9Cn0Thc.js";import"./useAnimationId-C6CpCegT.js";import"./getRadiusAndStrokeWidthFromDot-NOrRJQ9f.js";import"./graphicalItemSelectors-B4H_9SOi.js";import"./index-Cewrc6A2.js";import"./ChartSizeDimensions-BSxBFCsp.js";import"./OffsetShower-BDSx3j6G.js";import"./PlotAreaShower-DLNjbvna.js";const N={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const Q=["FillPattern"];export{e as FillPattern,Q as __namedExportsOrder,N as default};
