import{e as t}from"./iframe-BTtdS09W.js";import{P as a}from"./PlotAreaShower-4F-cactL.js";import{c as p}from"./hooks-D1OOIbEZ.js";import{R as s}from"./arrayEqualityCheck-Cr7uheU5.js";import{C as n}from"./ComposedChart-llfZcW-b.js";import{L as l}from"./Line-BlgG3M-A.js";import{X as d}from"./XAxis-BIGryZaf.js";import{Y as h}from"./YAxis-CGeIp8Ig.js";import{L as c}from"./Legend-CcmMXJ4b.js";import{p as g}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-DNML0thn.js";import"./immer-h2tBWHbd.js";import"./axisSelectors-C-C-XPOd.js";import"./d3-scale-cMqm19h5.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BNjLFhbQ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CVSfFbBC.js";import"./index-qoIXPrbj.js";import"./zIndexSlice-upTe-uMW.js";import"./renderedTicksSlice-DJkpJNhd.js";import"./CartesianChart-ClmLpAb4.js";import"./chartDataContext-ByF2cza-.js";import"./CategoricalChart-DC4azccj.js";import"./Layer-CG03jz1V.js";import"./ReactUtils-DVOsTE35.js";import"./Label-DQKpHpKK.js";import"./Text-bWAVTtUg.js";import"./DOMUtils-WKcDWUte.js";import"./ZIndexLayer-CbMDIpL4.js";import"./ActivePoints-B3QE05Z9.js";import"./Dot-PYiq21Zo.js";import"./types-DbbwF8j4.js";import"./RegisterGraphicalItemId-3lWinSBd.js";import"./ErrorBarContext-amKR2pcK.js";import"./GraphicalItemClipPath-5TXw2OKP.js";import"./SetGraphicalItem-BR57Hu8e.js";import"./useAnimationId-D12e2U_3.js";import"./getRadiusAndStrokeWidthFromDot-B3UN4p5A.js";import"./ActiveShapeUtils-BJOC9-wX.js";import"./isPlainObject-LS29Qx7o.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CIL45UrG.js";import"./Trapezoid-DqH5uCSa.js";import"./Sector-U4JfKldd.js";import"./Symbols-DPD-AVYc.js";import"./symbol-C5fxreGH.js";import"./step-8k9vNXVF.js";import"./Curve-DdtOV6ZM.js";import"./CartesianAxis-Bttov5cI.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CBCTXrKZ.js";import"./uniqBy-i0BZM8rB.js";import"./iteratee-sVBPIoKX.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:g,margin:r.margin,style:r.style},t.createElement(l,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <PlotAreaShower />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ft=["UsePlotArea"];export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
