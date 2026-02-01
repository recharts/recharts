import{e as t}from"./iframe-CJsZiOdQ.js";import{R as p}from"./arrayEqualityCheck-DmoSYxVB.js";import{C as m}from"./ComposedChart-BnSciooP.js";import{A as r}from"./Area-C0G1duXf.js";import{R as s}from"./RechartsHookInspector-Cp7SH18f.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BsN_5Oop.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-C6hoNl5r.js";import"./hooks-rVLXmLp9.js";import"./axisSelectors-CRJt1Qbh.js";import"./zIndexSlice-DOwFRgwN.js";import"./CartesianChart-_elP97Nq.js";import"./chartDataContext-D1i6v4HN.js";import"./CategoricalChart-FSCxQE7m.js";import"./Curve-5kCuP2Ri.js";import"./types--3K6j7TR.js";import"./Layer-saDXbA70.js";import"./ReactUtils-B6les9Ok.js";import"./Label-B5dudWmS.js";import"./Text-B5Zl5I22.js";import"./DOMUtils-xNMyZWBQ.js";import"./ZIndexLayer-B2Kkx2Li.js";import"./ActivePoints-s1VLO5u4.js";import"./Dot-C-IcEIkw.js";import"./RegisterGraphicalItemId-B2S5SyCV.js";import"./GraphicalItemClipPath-CTITSRsG.js";import"./SetGraphicalItem-wLUZTpUq.js";import"./useAnimationId-992q7OPb.js";import"./getRadiusAndStrokeWidthFromDot-B69isiT9.js";import"./graphicalItemSelectors-Bd1Nknsx.js";import"./index-B5U_62lg.js";import"./ChartSizeDimensions-Cywz4jFM.js";import"./OffsetShower-qPlPbWlS.js";import"./PlotAreaShower-e-2A-3GR.js";const N={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
