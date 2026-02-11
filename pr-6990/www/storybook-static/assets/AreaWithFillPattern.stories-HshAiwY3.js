import{e as t}from"./iframe-DEzN-0IH.js";import{R as p}from"./arrayEqualityCheck-Dj5rgmpF.js";import{C as m}from"./ComposedChart-DnQI112R.js";import{A as r}from"./Area-DaaQ-iMs.js";import{R as s}from"./RechartsHookInspector-f3uqQnpf.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps--GysF_k-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D226X-in.js";import"./hooks-DVXAe2RE.js";import"./axisSelectors-DVjOWlPF.js";import"./zIndexSlice-BLXDXR0o.js";import"./renderedTicksSlice-C4pdhuYh.js";import"./CartesianChart-CKWYeFyd.js";import"./chartDataContext-DDAsV3h8.js";import"./CategoricalChart-ChS4DbUW.js";import"./Curve-Een90XLK.js";import"./types-MnMW5XmF.js";import"./Layer-DoKHSLik.js";import"./ReactUtils-BQDy0BEl.js";import"./Label-CwNS2FmH.js";import"./Text-BWRoC5xn.js";import"./DOMUtils-CUVpLAf7.js";import"./ZIndexLayer-DsNBC3BS.js";import"./ActivePoints-DHUEXfUz.js";import"./Dot-Dv2iwbT4.js";import"./RegisterGraphicalItemId-BvrhgEWi.js";import"./GraphicalItemClipPath-BhXQU-ZR.js";import"./SetGraphicalItem-k6zlk5Ce.js";import"./useAnimationId-DpL3ZrLE.js";import"./getRadiusAndStrokeWidthFromDot-DCgdaaPW.js";import"./graphicalItemSelectors-DhQyscN-.js";import"./index-UhpklWmI.js";import"./ChartSizeDimensions-BGz0NRwX.js";import"./OffsetShower-Hv6zXz6F.js";import"./PlotAreaShower-xiASrx7K.js";const Q={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const X=["FillPattern"];export{e as FillPattern,X as __namedExportsOrder,Q as default};
