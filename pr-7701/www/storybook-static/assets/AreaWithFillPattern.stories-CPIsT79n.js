import{R as t}from"./iframe-B6gM4DBh.js";import{R as p}from"./zIndexSlice-B4H70akx.js";import{C as m}from"./ComposedChart-DAUNCbv-.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BLbVr_R7.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CinY1Cg6.js";import"./index-CaHvefGu.js";import"./index-DbvGR5AH.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-HOpiV2UA.js";import"./isWellBehavedNumber-oWfLE68q.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D2vZVe4g.js";import"./axisSelectors-D78GfHI7.js";import"./d3-scale-CI-CA5sR.js";import"./index-kpSUoDvk.js";import"./index-8y1uh0JJ.js";import"./renderedTicksSlice-C9ov5r2C.js";import"./index-CgCBhtWH.js";import"./CartesianChart-DHo5twJf.js";import"./chartDataContext-SMCrbflL.js";import"./CategoricalChart-COvMpWfW.js";import"./Layer-BvISteiU.js";import"./AnimatedItems-DoXh_8P-.js";import"./Label-uI-6_naX.js";import"./Text-D8H4cfwv.js";import"./DOMUtils-BD82E1of.js";import"./useId-DmdpXOpx.js";import"./useBackwardsCompatibleTheme-9Vtrcjiv.js";import"./ZIndexLayer-C4neE0Nt.js";import"./useAnimationId-B9APFvDh.js";import"./ActivePoints-Dyp1po5C.js";import"./Dot-DPENikpb.js";import"./types-B56u5L7u.js";import"./RegisterGraphicalItemId-Bqoy6nT5.js";import"./GraphicalItemClipPath-BlpQx9et.js";import"./SetGraphicalItem-CtntmLYm.js";import"./getRadiusAndStrokeWidthFromDot-B_TRGaiU.js";import"./ActiveShapeUtils-DnLJRiwf.js";import"./Curve-BJ4EcGmY.js";import"./step-hz5YCF7J.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CO1r96aW.js";const rt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const it=["FillPattern"];export{e as FillPattern,it as __namedExportsOrder,rt as default};
