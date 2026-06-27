import{R as t}from"./iframe-D4-JHLuy.js";import{R as p}from"./zIndexSlice-Bl2qFY1A.js";import{C as m}from"./ComposedChart-mEpO2gCy.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-X7iF9TJ7.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-M-cM6uYj.js";import"./index-CU6oIHEI.js";import"./index-CTDSjMzl.js";import"./get-Bi1X6SaN.js";import"./resolveDefaultProps-EHkzfb1T.js";import"./isWellBehavedNumber-c1UrbL-U.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DcHNLFvh.js";import"./index-CeIhzw3-.js";import"./index-BhPwJBge.js";import"./renderedTicksSlice-CQdRGRjO.js";import"./axisSelectors-BZHqEull.js";import"./d3-scale-DE_Hgqpo.js";import"./CartesianChart-DqNanfGA.js";import"./chartDataContext-CvNOo9hu.js";import"./CategoricalChart-D1W7mN8j.js";import"./Layer-DnbVmNuk.js";import"./AnimatedItems-BaefG7CY.js";import"./Label-Dbayb2l5.js";import"./Text-hRlne3oO.js";import"./DOMUtils-BF23epo9.js";import"./ZIndexLayer-BIs2Zanq.js";import"./useAnimationId-v_oz9FgZ.js";import"./ActivePoints-CUhH8-xa.js";import"./Dot-ColQ7WFS.js";import"./types-B4cCoOJo.js";import"./RegisterGraphicalItemId-D8VEn74g.js";import"./GraphicalItemClipPath-DMJ0OWmb.js";import"./SetGraphicalItem-CpRH4JNE.js";import"./getRadiusAndStrokeWidthFromDot-5SFlDmNV.js";import"./ActiveShapeUtils-DA9DBhpV.js";import"./Curve-CDHj8CQ7.js";import"./step-DP0d975A.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-_Htsgb84.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
