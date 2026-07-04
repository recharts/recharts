import{R as t}from"./iframe-Cdy9NYu9.js";import{R as p}from"./zIndexSlice-C2_e4Jbl.js";import{C as m}from"./ComposedChart-CGyVRna3.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DwtJU27a.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-t9dcJkBi.js";import"./index-BZ9Fe99a.js";import"./index-DsFTIXEw.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-CG6sO-97.js";import"./isWellBehavedNumber-CJulqOvD.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D4IxCG7a.js";import"./index-Bcb8rKnp.js";import"./index-CaPeX6FT.js";import"./renderedTicksSlice-DWXzhFAM.js";import"./axisSelectors-ByTu7Vcx.js";import"./d3-scale-DTNVMcZf.js";import"./CartesianChart-C4yHSY79.js";import"./chartDataContext-C2Y_0_Vz.js";import"./CategoricalChart-BucM35ky.js";import"./Layer-Hq_4dnpr.js";import"./AnimatedItems-BSQ2aAGr.js";import"./Label-BIfqnFjj.js";import"./Text-DMhYSqT7.js";import"./DOMUtils-DBN2rZ60.js";import"./ZIndexLayer-BxN8McgO.js";import"./useAnimationId-DO_gOZxo.js";import"./ActivePoints-MMq034Vb.js";import"./Dot-B4nh6ym9.js";import"./types-C9NSKw4l.js";import"./RegisterGraphicalItemId-WMzFziJE.js";import"./GraphicalItemClipPath-GIg3EkdR.js";import"./SetGraphicalItem-CgtgTGFl.js";import"./getRadiusAndStrokeWidthFromDot-BJvaJANi.js";import"./ActiveShapeUtils-CMZtEUn5.js";import"./Curve-CX0sCCUr.js";import"./step-Dtj-YZD0.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-ClwBgY3L.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const $=["FillPattern"];export{e as FillPattern,$ as __namedExportsOrder,Z as default};
