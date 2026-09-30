import{R as t}from"./iframe-DrNDVdUV.js";import{R as p}from"./zIndexSlice-CtU9gDeX.js";import{C as m}from"./ComposedChart-CI3FiMk_.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CBVVgSG-.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-yi_4PIaU.js";import"./index-CcUsqpS-.js";import"./index-uubsNt5S.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CGCnXzV6.js";import"./isWellBehavedNumber-6ms7Qni5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CftVGGIb.js";import"./axisSelectors-83UqlNkf.js";import"./d3-scale-Dtw5RV1H.js";import"./index-C02YBhOv.js";import"./index-DG6hdvW2.js";import"./renderedTicksSlice-D-gEAZZ9.js";import"./index-f04P2rVP.js";import"./CartesianChart-AI3x8M6-.js";import"./chartDataContext-B5-7BCeK.js";import"./CategoricalChart-CAcrwHX_.js";import"./Layer-MqQXVAAH.js";import"./AnimatedItems-BSenOuGe.js";import"./Label-S1smMv2d.js";import"./Text-B6IFXijX.js";import"./DOMUtils-CJOGT8qc.js";import"./useId-DvlibiBq.js";import"./useBackwardsCompatibleTheme-D28mWunQ.js";import"./ZIndexLayer-DVXiBMpv.js";import"./useAnimationId-CQqGpr63.js";import"./ActivePoints-BXxdB6el.js";import"./Dot-Djo_ehgJ.js";import"./types-xpc3POF2.js";import"./RegisterGraphicalItemId-yZiy6jFu.js";import"./GraphicalItemClipPath-BWcxuFET.js";import"./SetGraphicalItem-Cpl9rbNJ.js";import"./getRadiusAndStrokeWidthFromDot-pk4w0c3i.js";import"./ActiveShapeUtils-DMJhm59f.js";import"./Curve-zuUGMSY-.js";import"./step-H8KTZm7H.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CyeNl3AJ.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
