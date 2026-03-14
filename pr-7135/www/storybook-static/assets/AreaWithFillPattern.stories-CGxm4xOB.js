import{e as t}from"./iframe-CMkrvckg.js";import{R as p}from"./arrayEqualityCheck-C-j9cVnD.js";import{C as m}from"./ComposedChart-BskBKFZP.js";import{A as r}from"./Area-DsjBu-y3.js";import{R as s}from"./RechartsHookInspector-LPNgAumr.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-0hHUpMbb.js";import"./immer-CyD0Wx6o.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B_AEo7CP.js";import"./index-l2b25tqQ.js";import"./hooks-z2F_PL2D.js";import"./axisSelectors-DiKss4V_.js";import"./d3-scale-fpsdvWAN.js";import"./zIndexSlice-CRGV0CLv.js";import"./renderedTicksSlice-DRtBvqzi.js";import"./CartesianChart-mSJGg3IH.js";import"./chartDataContext-Dg6bbq-C.js";import"./CategoricalChart-Bl6nS1b9.js";import"./Curve-D0J3TcJs.js";import"./types-h_n1Y6CX.js";import"./step-BgKCtsuA.js";import"./Layer-4Y2Bpro8.js";import"./ReactUtils-koRtCpPb.js";import"./Label-CK8WpSeL.js";import"./Text-CfL4AkJ2.js";import"./DOMUtils-CY4V2W-_.js";import"./ZIndexLayer--DEMgBxJ.js";import"./ActivePoints-DPO6sfmL.js";import"./Dot-WqWz8qFp.js";import"./RegisterGraphicalItemId-B_jKurhL.js";import"./GraphicalItemClipPath-CdBUcuRI.js";import"./SetGraphicalItem-D8O9NSBD.js";import"./useAnimationId-Dnz94C6_.js";import"./getRadiusAndStrokeWidthFromDot-BtVMYfvn.js";import"./graphicalItemSelectors-CC8-ccz9.js";import"./index-BpykTG3u.js";import"./ChartSizeDimensions-tEh5XVCc.js";import"./OffsetShower-CI6ZxkzS.js";import"./PlotAreaShower-CiPqTN59.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const et=["FillPattern"];export{e as FillPattern,et as __namedExportsOrder,tt as default};
