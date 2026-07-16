import{R as t}from"./iframe-DUrcY2US.js";import{R as p}from"./zIndexSlice-D23NNcc-.js";import{C as m}from"./ComposedChart-BFk3L6F0.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-bOyepCR-.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-u55YHgne.js";import"./index-CZQ13dE7.js";import"./index-DfVYeqBk.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Bkhh-EU7.js";import"./isWellBehavedNumber-U-rEAUF7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-FovoggR2.js";import"./index-CeyJFFE6.js";import"./index-CE9cEvcF.js";import"./renderedTicksSlice-BAoXnBM4.js";import"./axisSelectors-BmIoikMn.js";import"./d3-scale-CjT_6rZL.js";import"./CartesianChart-UL0Qt6Ls.js";import"./chartDataContext-BTSN0B0I.js";import"./CategoricalChart-BS_7Qovh.js";import"./Layer-CYHvsOgc.js";import"./AnimatedItems-BfwNRs0j.js";import"./Label-Dq5ZDKy5.js";import"./Text-DMamusUo.js";import"./DOMUtils-B_GdkGLj.js";import"./ZIndexLayer-bKTnWuHr.js";import"./useAnimationId-DrcrHxjP.js";import"./ActivePoints-CxX0cO8w.js";import"./Dot-CQSe7hSi.js";import"./types-BMr8FEQl.js";import"./RegisterGraphicalItemId-BwmS1f__.js";import"./GraphicalItemClipPath-BTF9cLBi.js";import"./SetGraphicalItem-CXjv9Cz3.js";import"./getRadiusAndStrokeWidthFromDot-CXn6OxOm.js";import"./ActiveShapeUtils-DSfcbHhF.js";import"./Curve-CuMyGQ3o.js";import"./step-C_R_L_9o.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-pAvrXMwD.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
