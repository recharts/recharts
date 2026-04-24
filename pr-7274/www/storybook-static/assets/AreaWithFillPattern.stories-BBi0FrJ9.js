import{e as t}from"./iframe-BRqvrPpX.js";import{R as p}from"./arrayEqualityCheck-DDSezW49.js";import{C as m}from"./ComposedChart-CsblHqYu.js";import{c as s}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-oHUu1qHc.js";import{R as l}from"./RechartsHookInspector-DZUw7Ce3.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C4ONjF6w.js";import"./immer-DXV4etqU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DbCr_zla.js";import"./index-DUtVgLrP.js";import"./hooks-rzyNGUcJ.js";import"./axisSelectors-DItQVmXo.js";import"./d3-scale-BRJXbGMx.js";import"./zIndexSlice-DNL_rR3e.js";import"./renderedTicksSlice-rp2kTmjY.js";import"./CartesianChart-BrkX4WEt.js";import"./chartDataContext-nwhDY5FS.js";import"./CategoricalChart-CODQ6PLu.js";import"./Curve-CtnWwKXB.js";import"./types-2nLFc4aE.js";import"./step-G_hwVzeG.js";import"./Layer-KJ5xksxy.js";import"./ReactUtils-BAJ1kPIP.js";import"./Label-_Khr6uJ_.js";import"./Text-c5kux5xS.js";import"./DOMUtils-GlaEK2cB.js";import"./ZIndexLayer-Cc4doPfJ.js";import"./ActivePoints--bg5w8iT.js";import"./Dot-Db-uTVSA.js";import"./RegisterGraphicalItemId-RZfbywjl.js";import"./GraphicalItemClipPath-oDzU52PH.js";import"./SetGraphicalItem-BAyig2Fq.js";import"./useAnimationId-CvzXleYE.js";import"./getRadiusAndStrokeWidthFromDot-BeKpyACI.js";import"./graphicalItemSelectors-D6QdulDI.js";import"./index-BPkAalLa.js";import"./ChartSizeDimensions-DojjfuX5.js";import"./OffsetShower-Cx7s2ylo.js";import"./PlotAreaShower-CGKQg4jU.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:s},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(l,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
