import{e as t}from"./iframe-BLLNbNku.js";import{R as p}from"./arrayEqualityCheck-Co8h5dnX.js";import{C as m}from"./ComposedChart-BPKhM1pc.js";import{A as r}from"./Area-BAhzFrZA.js";import{R as s}from"./RechartsHookInspector-0ZdSIZYh.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BEjwQWgd.js";import"./PolarUtils-DXjI68e5.js";import"./RechartsWrapper-DHcwqX8r.js";import"./hooks-Ch251T4B.js";import"./axisSelectors-CmF5TL99.js";import"./zIndexSlice-DcR9U4FZ.js";import"./CartesianChart-BHDODL1m.js";import"./chartDataContext-a-oaLnie.js";import"./CategoricalChart-MybRLE0p.js";import"./Curve-k7SSPeeE.js";import"./types-C2V5y-Kb.js";import"./Layer-BCxNAEKV.js";import"./ReactUtils-DqoF2LGV.js";import"./Label-BoL4zXeM.js";import"./Text-DzNeFpe7.js";import"./DOMUtils-Bb3zeSfI.js";import"./ZIndexLayer-rdL7qpG4.js";import"./ActivePoints--yuiW4Rq.js";import"./Dot-CQehOVCl.js";import"./RegisterGraphicalItemId-CwVFZemd.js";import"./GraphicalItemClipPath-B4KkXTlk.js";import"./SetGraphicalItem-BZa4lgFq.js";import"./useAnimationId-Brx318jV.js";import"./getRadiusAndStrokeWidthFromDot-Duh5yQ_0.js";import"./graphicalItemSelectors-C0tmLhQc.js";import"./index-Dyt5IQSl.js";import"./ChartSizeDimensions-CgN2NQMs.js";import"./OffsetShower-FR5I6nlk.js";import"./PlotAreaShower-B06uRIML.js";const N={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
