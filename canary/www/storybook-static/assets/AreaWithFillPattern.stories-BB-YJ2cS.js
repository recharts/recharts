import{R as t}from"./iframe-CfFwYGba.js";import{R as p}from"./zIndexSlice-DfErsUYp.js";import{C as m}from"./ComposedChart-9_Y3XLOf.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CWep9Iqs.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-ChF14mwi.js";import"./index-B1M76gQx.js";import"./index-DKyALkfw.js";import"./get-VqHCUeFt.js";import"./resolveDefaultProps-CNXn3RtZ.js";import"./isWellBehavedNumber-DNsnRpQn.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BG04mOMU.js";import"./index-jr7opHAK.js";import"./index-DNhYiVbG.js";import"./renderedTicksSlice-CeRHVXP-.js";import"./axisSelectors-DhigzgEo.js";import"./d3-scale-CO_OUUyv.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BKL_0SO1.js";import"./chartDataContext-CvyqEHRa.js";import"./CategoricalChart-D8Sfn5Og.js";import"./Layer-CIeZ6xN1.js";import"./AnimatedItems-DufJJ5tM.js";import"./Label-BfJ1m9lw.js";import"./Text-6g8FEB5n.js";import"./DOMUtils-CelkDAhh.js";import"./ZIndexLayer-CO0_v3Z6.js";import"./useAnimationId-q4Azt8JP.js";import"./ActivePoints-BvFcDKGx.js";import"./Dot-CQusYe0D.js";import"./types-B8Ju2LTD.js";import"./RegisterGraphicalItemId-DuA2mhLl.js";import"./GraphicalItemClipPath-CycB6t93.js";import"./SetGraphicalItem-BVwnEQ5r.js";import"./getRadiusAndStrokeWidthFromDot-ClnovYdE.js";import"./ActiveShapeUtils-BoiiDjBc.js";import"./Curve-CvFToXA1.js";import"./step-Cz7LQHZ8.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-2gG6urOn.js";const $={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
