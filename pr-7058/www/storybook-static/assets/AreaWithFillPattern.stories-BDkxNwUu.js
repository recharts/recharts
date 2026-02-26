import{e as t}from"./iframe-Cff4EXi3.js";import{R as p}from"./arrayEqualityCheck-VW91KjqU.js";import{C as m}from"./ComposedChart-B12oAa8n.js";import{A as r}from"./Area-D5Hlk5S_.js";import{R as s}from"./RechartsHookInspector-qCKXCEwx.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-pLSVnyPY.js";import"./immer-Cixy3ajB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DMPfsW98.js";import"./index-B-6vBbA8.js";import"./hooks-DQBeyb0n.js";import"./axisSelectors-D22FLxk-.js";import"./d3-scale-DMGDf7_x.js";import"./zIndexSlice-C-izguCE.js";import"./renderedTicksSlice-B92sUlvw.js";import"./CartesianChart-B_TDMZX3.js";import"./chartDataContext-OdHOh49w.js";import"./CategoricalChart-CTT0iB0s.js";import"./Curve-1dMXeL2S.js";import"./types-CtvHHRW4.js";import"./step-YwxG2wvl.js";import"./Layer-D22mEoCB.js";import"./ReactUtils-BhGfO_gM.js";import"./Label-KYKyDNcr.js";import"./Text-DvkJV6Cf.js";import"./DOMUtils-CF14m3lA.js";import"./ZIndexLayer-UZz4JYvU.js";import"./ActivePoints-D5hExdQG.js";import"./Dot-CzO0WPbv.js";import"./RegisterGraphicalItemId-CvWcZdp6.js";import"./GraphicalItemClipPath-MuxXQAh9.js";import"./SetGraphicalItem-CGKCADpx.js";import"./useAnimationId-CJEIt2ET.js";import"./getRadiusAndStrokeWidthFromDot-uV2f5Ecx.js";import"./graphicalItemSelectors-B6viA6C5.js";import"./index-lBMzeJSk.js";import"./ChartSizeDimensions-Bz5WY-XJ.js";import"./OffsetShower-C9tHURwR.js";import"./PlotAreaShower-iGisZace.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
