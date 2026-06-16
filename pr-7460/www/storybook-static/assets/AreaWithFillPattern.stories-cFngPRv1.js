import{R as t}from"./iframe-DmhIhH2M.js";import{R as p}from"./zIndexSlice-DeBpIagA.js";import{C as m}from"./ComposedChart-ChlzmAy5.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DRlV6HPt.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-lqUHKS7P.js";import"./index-jeKHcbLZ.js";import"./index-DoUdCFad.js";import"./get-BMOKRRSC.js";import"./resolveDefaultProps-Bb5qdflA.js";import"./isWellBehavedNumber-yi49kod_.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bp3OJDnk.js";import"./index-DVATRPgd.js";import"./index-DTLQy6FQ.js";import"./renderedTicksSlice-ChRjHL_p.js";import"./axisSelectors-BcE8uUaD.js";import"./d3-scale-BlfVJ3Lp.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BNQnxap5.js";import"./chartDataContext-Bz86G8Ko.js";import"./CategoricalChart-Be8j81vN.js";import"./Layer-BQ4TD7AW.js";import"./AnimatedItems-D_A-W6sA.js";import"./Label-C1lSOaos.js";import"./Text-DpOGyDW1.js";import"./DOMUtils-qv8kyUnk.js";import"./ZIndexLayer-qAObD_uq.js";import"./useAnimationId-CIds5Px0.js";import"./ActivePoints-Bn_C34jU.js";import"./Dot-D4RDD7gw.js";import"./types-ChCyCTKP.js";import"./RegisterGraphicalItemId-qPPfux8b.js";import"./GraphicalItemClipPath-CjnHXIjf.js";import"./SetGraphicalItem-BDK57120.js";import"./getRadiusAndStrokeWidthFromDot-C1-mcmXd.js";import"./ActiveShapeUtils-D7yUxD2X.js";import"./Curve-CUt78Byo.js";import"./step-Cfvx5huc.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CW756Y0s.js";const $={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
