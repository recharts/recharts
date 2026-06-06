import{R as t}from"./iframe-BiXVY0YN.js";import{R as p}from"./zIndexSlice-nY6JNSg8.js";import{C as m}from"./ComposedChart-Cf4jkg33.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CvZPAbOr.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Bguoov5l.js";import"./index-nFhQ5GlG.js";import"./index-C9pEG8B_.js";import"./get-DSfNO7n4.js";import"./resolveDefaultProps-DD4XGInB.js";import"./isWellBehavedNumber-DE5idxcf.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C7VFUx7Q.js";import"./index-BDCsY1Bp.js";import"./index-PSniF_G7.js";import"./renderedTicksSlice-D3zVHdBs.js";import"./axisSelectors-aUKbGV01.js";import"./d3-scale-Bqjw06G0.js";import"./string-B6fdYHAA.js";import"./CartesianChart-D3egFHKO.js";import"./chartDataContext-CjUfDHdj.js";import"./CategoricalChart-BzNcO88n.js";import"./Layer-uuEILT3S.js";import"./AnimatedItems-DfhrJO_Z.js";import"./Label-BJ6MA63M.js";import"./Text-DmK0i7Bz.js";import"./DOMUtils-C2cF8Szu.js";import"./ZIndexLayer-6ebEplbW.js";import"./useAnimationId-CfBicigm.js";import"./ActivePoints-B-SHt4Wz.js";import"./Dot-BnLwvEMd.js";import"./types-CLXMlpTC.js";import"./RegisterGraphicalItemId-MDxIerXT.js";import"./GraphicalItemClipPath-DNkkSszT.js";import"./SetGraphicalItem-AeS5weMQ.js";import"./getRadiusAndStrokeWidthFromDot-LZlKw0gF.js";import"./ActiveShapeUtils-RN-LxFg0.js";import"./Curve-D7wuzLSQ.js";import"./step-BzaqppXW.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-C0O5oaAS.js";const $={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
