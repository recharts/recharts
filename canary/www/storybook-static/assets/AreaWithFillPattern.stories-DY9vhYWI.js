import{R as t}from"./iframe-CsUJaUxM.js";import{R as p}from"./zIndexSlice-DR8GOdx_.js";import{C as m}from"./ComposedChart-v1mD6g8I.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DpA0DwKi.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-jYQKZYpr.js";import"./index-DwbFMAfW.js";import"./index-CuzTPq-B.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-wCngT9vT.js";import"./isWellBehavedNumber-B1KHZ9NA.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-T8mD1Lc3.js";import"./axisSelectors-CPJkZcPs.js";import"./d3-scale-BlcUMonb.js";import"./index-B6LqR4R9.js";import"./index-LRMsLTDO.js";import"./renderedTicksSlice-DMUlxU_r.js";import"./index-BkMQdhAs.js";import"./CartesianChart-9AGq9zI6.js";import"./chartDataContext-Dl9PHzyn.js";import"./CategoricalChart-BPTMFHzn.js";import"./Layer-BL2WKRfB.js";import"./AnimatedItems-BwJboHDv.js";import"./Label-BBIMhlH3.js";import"./Text-Ca7ex0z4.js";import"./DOMUtils-DV9i-gvX.js";import"./useId-DskunR0V.js";import"./useBackwardsCompatibleTheme-CzetmO85.js";import"./ZIndexLayer-y8FwKDfZ.js";import"./useAnimationId-CIIiKuIL.js";import"./ActivePoints-DgXpbHzY.js";import"./Dot-3GIj0k7o.js";import"./types-DY32nFAv.js";import"./RegisterGraphicalItemId-BOfAVeru.js";import"./GraphicalItemClipPath-yorSgC5b.js";import"./SetGraphicalItem-y4Qrn0nd.js";import"./getRadiusAndStrokeWidthFromDot-qziiS-Bg.js";import"./ActiveShapeUtils-CrmNWRMG.js";import"./Curve-BBNZ0-qm.js";import"./step-E2BXM1O_.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-Dtj6CrmT.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
