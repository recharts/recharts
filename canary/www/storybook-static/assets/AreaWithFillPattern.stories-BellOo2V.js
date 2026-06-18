import{R as t}from"./iframe-BBGBS6DV.js";import{R as p}from"./zIndexSlice-C7go6sDc.js";import{C as m}from"./ComposedChart-KBOCL7OW.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-D-oOzCuC.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-u2-xWsf6.js";import"./index-sfHPztcf.js";import"./index-BfdY1IDa.js";import"./get-BV7Nc0IZ.js";import"./resolveDefaultProps-CdaEo1sJ.js";import"./isWellBehavedNumber-DqttSiMx.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CZVIAxqy.js";import"./index-CLfBpOwp.js";import"./index-Bl5evuWS.js";import"./renderedTicksSlice-DeFm9vmM.js";import"./axisSelectors-DUU6Ovr8.js";import"./d3-scale-Ceq_dgL5.js";import"./string-B6fdYHAA.js";import"./CartesianChart-8bJyHLLZ.js";import"./chartDataContext-6hP0GYiP.js";import"./CategoricalChart-BNe26d_a.js";import"./Layer-C7b9GhMV.js";import"./AnimatedItems-alz79Juh.js";import"./Label-Iqg4BS5e.js";import"./Text-CCZTp9OW.js";import"./DOMUtils-Da1klpxA.js";import"./ZIndexLayer-WmfwTIzB.js";import"./useAnimationId-CCG8jh7R.js";import"./ActivePoints-9mxUzEHn.js";import"./Dot-DdV24ZDH.js";import"./types-Bj7fEVXg.js";import"./RegisterGraphicalItemId-B9dZ270Y.js";import"./GraphicalItemClipPath-CkBiEPpf.js";import"./SetGraphicalItem-QS7NgdyV.js";import"./getRadiusAndStrokeWidthFromDot-DsI7ajDG.js";import"./ActiveShapeUtils-NLKbpFnA.js";import"./Curve-D7BUefvS.js";import"./step-Deq8dNp2.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-7U3n1hMO.js";const $={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
