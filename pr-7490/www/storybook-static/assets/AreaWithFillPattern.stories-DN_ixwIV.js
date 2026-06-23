import{R as t}from"./iframe-bG7_G66g.js";import{R as p}from"./zIndexSlice-BYtx9lI3.js";import{C as m}from"./ComposedChart-CgJhKHi6.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-C8xlThZy.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DhTjJvAV.js";import"./index-B_EgrjTd.js";import"./index-7ZZfYU54.js";import"./get-CKlYZxfa.js";import"./resolveDefaultProps-BJM1u8ue.js";import"./isWellBehavedNumber-CMDCTp3P.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BMMQbU53.js";import"./index-BEtPY2hf.js";import"./index-CrGTyESs.js";import"./renderedTicksSlice-0KFrvLOH.js";import"./axisSelectors-SAI4sVeE.js";import"./d3-scale-FKA3mwBv.js";import"./CartesianChart-VkV_7YNc.js";import"./chartDataContext-BcyTHSzL.js";import"./CategoricalChart-BHq-0gkK.js";import"./Layer-ky2aT-iX.js";import"./AnimatedItems-C0ftWhjM.js";import"./Label-B0PcRW41.js";import"./Text-BQWDG8GB.js";import"./DOMUtils-C65D4AnI.js";import"./ZIndexLayer-BRupmzoF.js";import"./useAnimationId-NfEwsoHb.js";import"./ActivePoints-CoLkUcGQ.js";import"./Dot-CaSI3883.js";import"./types-DAUYWUcJ.js";import"./RegisterGraphicalItemId-Bi5SE-vz.js";import"./GraphicalItemClipPath-CwKLVu4X.js";import"./SetGraphicalItem-DrtiSYcp.js";import"./getRadiusAndStrokeWidthFromDot-Bb0n7Rxm.js";import"./ActiveShapeUtils-BZT2pA_A.js";import"./Curve-D0BbINzH.js";import"./step-B_0-Bz-G.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DMrbzbso.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
