import{R as t}from"./iframe-CcUePkZz.js";import{R as p}from"./zIndexSlice-DSc4KC75.js";import{C as m}from"./ComposedChart-CRM55qGb.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-D2vMVcZg.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-VeyOR81A.js";import"./index-Z6USwMiQ.js";import"./index-CJTFlpIe.js";import"./get-UnfM8TPj.js";import"./resolveDefaultProps-BXf8ljNz.js";import"./isWellBehavedNumber-CXwth3qC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DA0Yxt9x.js";import"./index-C-Pbn--W.js";import"./index-C1-J5F4u.js";import"./renderedTicksSlice-BL5Mffta.js";import"./axisSelectors-BlPxUPB7.js";import"./d3-scale-ac-XiUen.js";import"./string-B6fdYHAA.js";import"./CartesianChart-D-BudT5K.js";import"./chartDataContext-VDW5Tgrh.js";import"./CategoricalChart-CG91Q5ky.js";import"./Layer-CKbs6a8D.js";import"./AnimatedItems-BbZPIVL8.js";import"./Label-dVerXnTS.js";import"./Text-BLCpim0o.js";import"./DOMUtils-CgmzxpAH.js";import"./ZIndexLayer-B4p-btGn.js";import"./useAnimationId-CH023PHf.js";import"./ActivePoints-D-HwpVLA.js";import"./Dot-CijEuNsy.js";import"./types-C4zY2OW7.js";import"./RegisterGraphicalItemId-Dk2pKOym.js";import"./GraphicalItemClipPath-Bc96kw55.js";import"./SetGraphicalItem-D7jXrYhk.js";import"./getRadiusAndStrokeWidthFromDot-CTEsWB1S.js";import"./ActiveShapeUtils-CRuYv9Bp.js";import"./Curve-Dhf7CAZi.js";import"./step-w_kmAd5Q.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors--W1TUejg.js";const $={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
