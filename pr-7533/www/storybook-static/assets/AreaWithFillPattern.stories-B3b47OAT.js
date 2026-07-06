import{R as t}from"./iframe-HmoKwHFX.js";import{R as p}from"./zIndexSlice-6UlwHzZx.js";import{C as m}from"./ComposedChart-DNBXzl8_.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-TawRDwfL.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CggiDJGE.js";import"./index-DbZ1xFPe.js";import"./index-V8abjlH7.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BgbskIps.js";import"./isWellBehavedNumber-ChlLFPsN.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-j2c0QQIE.js";import"./index-BOpt7wnK.js";import"./index-B9uDrVyK.js";import"./renderedTicksSlice-CKWPLZmb.js";import"./axisSelectors-BQeYBj0I.js";import"./d3-scale-BDs_cJTc.js";import"./CartesianChart-BAb-9k9W.js";import"./chartDataContext-DrbaCNot.js";import"./CategoricalChart-5OT8W9pW.js";import"./Layer-DCuDnFq8.js";import"./AnimatedItems-BP2JMedo.js";import"./Label-COwIarxU.js";import"./Text-CF2LDoBf.js";import"./DOMUtils-DNQlLACq.js";import"./ZIndexLayer-wTJ88r9x.js";import"./useAnimationId-C1cJfoVB.js";import"./ActivePoints-Dx7sR-Q2.js";import"./Dot-FYCRb0hm.js";import"./types-DRVdcYGb.js";import"./RegisterGraphicalItemId-YabdkJxn.js";import"./GraphicalItemClipPath-DDhZ52Wg.js";import"./SetGraphicalItem-R8P5CdUS.js";import"./getRadiusAndStrokeWidthFromDot-BxzB0c_Y.js";import"./ActiveShapeUtils-0piQNROf.js";import"./Curve-C2csUcTT.js";import"./step-BqUqaVR3.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-XBEF56zP.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
