import{R as t}from"./iframe-Bah9cDPf.js";import{R as p}from"./zIndexSlice-D6NwopLq.js";import{C as m}from"./ComposedChart-082vf-Dq.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-B3Lcpjn7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-zC5o00WN.js";import"./throttle-BjlLZ4wO.js";import"./index-D6Fwvcda.js";import"./index-CvqzOiHn.js";import"./RechartsWrapper-CuqmEJPa.js";import"./axisSelectors-BJF83DO6.js";import"./polarAxisSelectors-CEDelL9A.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BLITEdPK.js";import"./index-FRb1AgAe.js";import"./index-CadkBFdQ.js";import"./renderedTicksSlice-CiPoI8vI.js";import"./index-flr5alNa.js";import"./fillDefinitions-BbHKQE2Y.js";import"./CartesianChart-DT-YIr9t.js";import"./chartDataContext-9AmAFOH8.js";import"./CategoricalChart-DcONsU4c.js";import"./Layer-CD06LZri.js";import"./dataEntryStyles-BkXi-SmE.js";import"./Label-BLtLxFh_.js";import"./Text-Ct-0y4jN.js";import"./ZIndexLayer-DdBSJIQM.js";import"./ActivePoints-CMlYxCeA.js";import"./Dot-OGnZYrwe.js";import"./types-C6A66RfZ.js";import"./activeStyles-C-zEEDQQ.js";import"./useAnimationId-DEYdhNFn.js";import"./Symbols-CAXKij6d.js";import"./symbol-BgjIZi1V.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-DSHrOFY_.js";import"./getRadiusAndStrokeWidthFromDot-DWUFIa-L.js";import"./ActiveShapeUtils-CHFZOTDo.js";import"./Curve-KDiJn0MP.js";import"./step-CoC1wfrs.js";import"./useEffectiveDataKey-cBqedM3V.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,et as __namedExportsOrder,tt as default};
