import{R as t}from"./iframe-IxvRXYOM.js";import{R as p}from"./zIndexSlice-Dia8XTL2.js";import{C as m}from"./ComposedChart-BzuXDUIC.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-MRvUeX41.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DoVSkdKP.js";import"./index-BXDqCn7f.js";import"./index-D34-i1nc.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C8gKTQR0.js";import"./isWellBehavedNumber-1PbkiApc.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DouzT1Jm.js";import"./axisSelectors-CsegCW8b.js";import"./d3-scale-FVb6w9iL.js";import"./index-BFt1Ny-W.js";import"./index-WdtNPuBq.js";import"./renderedTicksSlice-CchY5W_H.js";import"./index-C1qZei_h.js";import"./CartesianChart-D4DhIf-5.js";import"./chartDataContext-DPXilm1s.js";import"./CategoricalChart-CGmBQpoA.js";import"./Layer-DXPk_QPv.js";import"./AnimatedItems-DJiaeq4S.js";import"./Label-DYJa0Pce.js";import"./Text-VVpkyRHU.js";import"./DOMUtils-7IYxeTO_.js";import"./useId-BCDrS8Ec.js";import"./useBackwardsCompatibleTheme-niu8PbB-.js";import"./ZIndexLayer-D3BGhz3Z.js";import"./useAnimationId-B5Gku1OT.js";import"./ActivePoints-lXhg7PyY.js";import"./Dot-Ckx8C-Ql.js";import"./types-D8hPxmLy.js";import"./RegisterGraphicalItemId-CCZFRoFR.js";import"./GraphicalItemClipPath-B3n8HZ3n.js";import"./SetGraphicalItem-CU9UT-3r.js";import"./getRadiusAndStrokeWidthFromDot-B0LLmdQO.js";import"./ActiveShapeUtils-BrhiJYt9.js";import"./Curve-B1Tl1par.js";import"./step-C5uaOgJB.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-U0g776Bm.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
