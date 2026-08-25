import{R as t}from"./iframe-BISZbF8S.js";import{R as p}from"./zIndexSlice-tLqWCh4O.js";import{C as m}from"./ComposedChart-Bb88RiXV.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-C_S2TKe5.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-qMyvzBrr.js";import"./index-hSuJddDh.js";import"./index-DIL3iNST.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Wc0qnLHS.js";import"./isWellBehavedNumber-C9XsHOt-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-een6OCKs.js";import"./index-BW9K1TDZ.js";import"./index-Ce0beIqY.js";import"./axisSelectors-SJG9ph2l.js";import"./d3-scale-DNcorMEn.js";import"./renderedTicksSlice-bJIEIhcB.js";import"./CartesianChart-GFukGdve.js";import"./chartDataContext-iswJ2W_c.js";import"./CategoricalChart-CluxlQf_.js";import"./Layer-qSEbrkuT.js";import"./AnimatedItems-DssiNuXL.js";import"./Label--u0r0Ebh.js";import"./Text-DWq927Nt.js";import"./DOMUtils-CTLtTqZ2.js";import"./useId-DvaMlJaB.js";import"./useBackwardsCompatibleTheme-DE0n-uz4.js";import"./ZIndexLayer-DScewirg.js";import"./useAnimationId-BeL21vg8.js";import"./ActivePoints-Ccjhq822.js";import"./Dot-ClbVOSp4.js";import"./types-DYnGyjc0.js";import"./RegisterGraphicalItemId-DfyOG4VN.js";import"./GraphicalItemClipPath-b6ezYgAg.js";import"./SetGraphicalItem-DKxsB3By.js";import"./getRadiusAndStrokeWidthFromDot-CSyFsC-5.js";import"./ActiveShapeUtils-PTy3S8F2.js";import"./Curve-DnqgdcKJ.js";import"./step-DstMREJ8.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-C6O1LkkN.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const rt=["FillPattern"];export{e as FillPattern,rt as __namedExportsOrder,et as default};
