import{e as t}from"./iframe-BRxwlzhD.js";import{P as a}from"./PlotAreaShower-DOh-p-fE.js";import{c as p}from"./hooks-fHD2lOQN.js";import{R as s}from"./arrayEqualityCheck-CQCuJwd9.js";import{C as n}from"./ComposedChart-C4oxbzZd.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-1L_TT1FV.js";import{X as h}from"./XAxis-Dh51v0ko.js";import{Y as c}from"./YAxis-CnCAr5FI.js";import{L as g}from"./Legend-DrmVSKu9.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-VvfCpTvE.js";import"./immer-Cx9cWUVd.js";import"./axisSelectors-D3m0qTvR.js";import"./d3-scale-Bx12rmbF.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CynxUrzr.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BxIOqnbY.js";import"./index-DRLqonpR.js";import"./zIndexSlice-1DtIfeN0.js";import"./renderedTicksSlice-CaDUjXCY.js";import"./CartesianChart-DCUx-fIz.js";import"./chartDataContext-DyuUFUXu.js";import"./CategoricalChart-C7nGcUHo.js";import"./Layer-BVhxWlBa.js";import"./ReactUtils-B9lhcmHi.js";import"./Label-BA79Nyf7.js";import"./Text-lrriYnC0.js";import"./DOMUtils-Dl_fPRop.js";import"./ZIndexLayer-S9493XiC.js";import"./ActivePoints-Cs5vmxH5.js";import"./Dot-Dqr59ASu.js";import"./types-CSb1fpov.js";import"./RegisterGraphicalItemId-C8eWu06V.js";import"./ErrorBarContext-D6ju5024.js";import"./GraphicalItemClipPath-mwssqMPM.js";import"./SetGraphicalItem-DUVzJXp_.js";import"./useAnimationId-BIq3Zr7i.js";import"./getRadiusAndStrokeWidthFromDot-D4qF164R.js";import"./ActiveShapeUtils-D4OjEAgF.js";import"./isPlainObject-BY5Vlzsd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B51QCHw4.js";import"./Trapezoid-LOBSkskr.js";import"./Sector-lTYUfjnl.js";import"./Symbols-Cg1rHhLz.js";import"./symbol-DhbO_5Le.js";import"./step-DIees0vo.js";import"./Curve-CgFRM1Qr.js";import"./CartesianAxis-B1fxs7Xq.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DZ0xnJbD.js";import"./uniqBy-DBDVCLff.js";import"./iteratee-DSZa7zM1.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
