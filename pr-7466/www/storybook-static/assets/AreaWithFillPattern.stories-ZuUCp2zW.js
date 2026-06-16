import{R as t}from"./iframe-D8_PwwQn.js";import{R as p}from"./zIndexSlice-D3hIREVO.js";import{C as m}from"./ComposedChart-DWabK0Ov.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BQ2_MWLm.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-B4u9UiQz.js";import"./index-ComLpA2A.js";import"./index-Bf27XMU5.js";import"./get-VOiq-nzz.js";import"./resolveDefaultProps-CDlH06hb.js";import"./isWellBehavedNumber-I9OE6uzw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DSRWnM09.js";import"./index-BYYXq0C_.js";import"./index-DGMH0rdv.js";import"./renderedTicksSlice-Dazc5DIT.js";import"./axisSelectors-GpzB0aa8.js";import"./d3-scale-B_gxMkbZ.js";import"./string-B6fdYHAA.js";import"./CartesianChart-VfOncxQc.js";import"./chartDataContext-CFZ_6_Pd.js";import"./CategoricalChart-DVNyDBwI.js";import"./Layer-DIbVHc_A.js";import"./AnimatedItems-Bi3B25M2.js";import"./Label-DYAIx6Pc.js";import"./Text-Dcw4f9im.js";import"./DOMUtils-BuLBbKXn.js";import"./ZIndexLayer-Dhl_4keR.js";import"./useAnimationId-BP5XfAv2.js";import"./ActivePoints-C2Pj95p4.js";import"./Dot-BJ21P9KG.js";import"./types-C59kAQfA.js";import"./RegisterGraphicalItemId-I3cDOhkS.js";import"./GraphicalItemClipPath-DA-AqBBR.js";import"./SetGraphicalItem-Clhc-wET.js";import"./getRadiusAndStrokeWidthFromDot-B9utXb_M.js";import"./ActiveShapeUtils-TdP-NoHF.js";import"./Curve-BnWchyuA.js";import"./step-ebfpa1zR.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-BeCJiYni.js";const $={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const tt=["FillPattern"];export{e as FillPattern,tt as __namedExportsOrder,$ as default};
