import{R as t}from"./iframe-FiuXs261.js";import{R as p}from"./zIndexSlice-D8yz0c_i.js";import{C as m}from"./ComposedChart-SOQGKxcc.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BUlyOWJe.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BihUq3X9.js";import"./throttle-CYeAiCIk.js";import"./index-LYf9fdMT.js";import"./index-CrJ_p8tR.js";import"./RechartsWrapper-PYqIov25.js";import"./axisSelectors-C9DIlOnm.js";import"./polarAxisSelectors-C8b7BSTM.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CtDFr3v-.js";import"./index-I95GPJkK.js";import"./index-CGxDoIWw.js";import"./renderedTicksSlice-B2WUnf26.js";import"./index-C5CBIWPP.js";import"./CartesianChart-BGhHw0Sw.js";import"./ZIndexPortal-a8T82K_T.js";import"./CategoricalChart-C7XeD-rb.js";import"./Layer-BMNQgcyM.js";import"./LabelList-DRqt9mVh.js";import"./Label-DgCFchF-.js";import"./Text-CNbe1Pgb.js";import"./DOMUtils-DMtknFU5.js";import"./ZIndexLayer-BuK4cbp4.js";import"./ActivePoints-Ddv2UM3f.js";import"./Dot-BFh-_60U.js";import"./types-CG6SsZFp.js";import"./activeStyles-DrCvysIi.js";import"./useAnimationId-DgiqBF0b.js";import"./dataEntryStyles-BABJdaaS.js";import"./Symbols-vnM3HbbD.js";import"./symbol-DlnVlajL.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-CXpshRR6.js";import"./getRadiusAndStrokeWidthFromDot-4di0vwKC.js";import"./ActiveShapeUtils-D11w1Cqa.js";import"./Curve-CjJsHvFZ.js";import"./step-AV-3KlMf.js";import"./useEffectiveDataKey-BS1bhAcI.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,rt as __namedExportsOrder,et as default};
