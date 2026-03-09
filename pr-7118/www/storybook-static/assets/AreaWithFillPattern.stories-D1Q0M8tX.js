import{e as t}from"./iframe-C-iVd-D9.js";import{R as p}from"./arrayEqualityCheck-CykFyG3w.js";import{C as m}from"./ComposedChart-BhT7kidc.js";import{A as r}from"./Area-DXD_ipnP.js";import{R as s}from"./RechartsHookInspector-BmWQIBw0.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CaPMqnUf.js";import"./immer-9akI4mGC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-OZYl-Tz6.js";import"./index-D7iAvCJZ.js";import"./hooks-DgAj9GmX.js";import"./axisSelectors-B51mUxQh.js";import"./d3-scale-BLCaIo2v.js";import"./zIndexSlice-DM0eYjRM.js";import"./renderedTicksSlice-XpTaEf7K.js";import"./CartesianChart-DCeJ5hMu.js";import"./chartDataContext-Dod_jDwP.js";import"./CategoricalChart-DQuyNjww.js";import"./Curve-6NVtDyjZ.js";import"./types-DAf5tiec.js";import"./step-Ca8O5Pe5.js";import"./Layer-PcuWobZF.js";import"./ReactUtils-nzFm5ghx.js";import"./Label-B2Hnjv9f.js";import"./Text-DV9U-A1x.js";import"./DOMUtils-CDMIcntA.js";import"./ZIndexLayer-CF1VRPo3.js";import"./ActivePoints-D0xySLpj.js";import"./Dot-BoKtt_Pl.js";import"./RegisterGraphicalItemId-DBYhzviE.js";import"./GraphicalItemClipPath-DlmVzEBx.js";import"./SetGraphicalItem-D9P8g2wE.js";import"./useAnimationId-DF-bmt8J.js";import"./getRadiusAndStrokeWidthFromDot-DYJAnKvi.js";import"./graphicalItemSelectors-CGXQJwpT.js";import"./index-4pvBd6R2.js";import"./ChartSizeDimensions-7dl-q0eS.js";import"./OffsetShower-DgEJieR9.js";import"./PlotAreaShower-Dw5kcDju.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
