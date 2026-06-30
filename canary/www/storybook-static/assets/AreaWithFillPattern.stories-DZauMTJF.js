import{R as t}from"./iframe-BAw0s5ot.js";import{R as p}from"./zIndexSlice-BeH27P2U.js";import{C as m}from"./ComposedChart-DteFOQlI.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CHUfzM-K.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CMKSqw9i.js";import"./index-CjVdCyN5.js";import"./index-BK18-1Z2.js";import"./get-CSAr6kNF.js";import"./resolveDefaultProps-BuFdbqch.js";import"./isWellBehavedNumber-9WEl6uBx.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bttwz4rr.js";import"./index-B1DwQ2Om.js";import"./index-46sIyfq_.js";import"./renderedTicksSlice-lnlzRSDk.js";import"./axisSelectors-CrQ5YVkn.js";import"./d3-scale-8J52VcxR.js";import"./CartesianChart-qH9nTYaZ.js";import"./chartDataContext-Bg-IfXwk.js";import"./CategoricalChart-BcYU7xxq.js";import"./Layer-CnD0sOVo.js";import"./AnimatedItems-DKynRxAN.js";import"./Label-RqhE4qn6.js";import"./Text-CHY17Wwg.js";import"./DOMUtils-DRw43MBp.js";import"./ZIndexLayer-B6NdRg2s.js";import"./useAnimationId-D83gTctj.js";import"./ActivePoints-x13vM-lM.js";import"./Dot-DM8ASB1e.js";import"./types-3486df9G.js";import"./RegisterGraphicalItemId-BYWDLggr.js";import"./GraphicalItemClipPath-CFCGDJ4D.js";import"./SetGraphicalItem-BtUL3que.js";import"./getRadiusAndStrokeWidthFromDot-Dj6bNAvM.js";import"./ActiveShapeUtils-DPtxPHYL.js";import"./Curve-DDP5uwdK.js";import"./step-BMQa1wmq.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-jSDhtP4D.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
