import{R as t}from"./iframe-DJpt453r.js";import{R as p}from"./zIndexSlice-BEI9HpJP.js";import{C as m}from"./ComposedChart-kTyvHFJc.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-C5iZQyLW.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DmwBytCC.js";import"./index-DoMIVr-B.js";import"./index-BXFZGfKa.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CLx3DpUR.js";import"./isWellBehavedNumber-DKWCRCpD.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DPF1jiXq.js";import"./index-D2X8nAMV.js";import"./index-DNypUe5l.js";import"./renderedTicksSlice--nt2FmmR.js";import"./axisSelectors-CK35li4D.js";import"./d3-scale-B7WR5FSF.js";import"./CartesianChart-m4WNSH7S.js";import"./chartDataContext-D5OCzkMp.js";import"./CategoricalChart-Dhlk9IOH.js";import"./Layer-BYTSm4Ec.js";import"./AnimatedItems-CECphMY_.js";import"./Label-dDyJmDxJ.js";import"./Text-Bi21htDl.js";import"./DOMUtils-DAtMTnWN.js";import"./ZIndexLayer-K-94Fkyc.js";import"./useAnimationId-BTloGm3i.js";import"./ActivePoints-DNbR-YxP.js";import"./Dot-1UuNdg9e.js";import"./types-C91tVnYw.js";import"./RegisterGraphicalItemId-DBh3uGfr.js";import"./GraphicalItemClipPath-CbnfZ2S6.js";import"./SetGraphicalItem-CyMh2I00.js";import"./graphicalItemIdentity-DEqpaJdn.js";import"./ActiveShapeUtils-ML-GG5dE.js";import"./Curve-DXMTS4fM.js";import"./step-DLRDUC9Q.js";import"./path-DyVhHtw_.js";import"./RechartsThemeContext-DM-6Q2RL.js";import"./graphicalItemSelectors-DJW39wIa.js";const $={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
