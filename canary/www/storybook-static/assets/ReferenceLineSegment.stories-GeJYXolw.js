import{e}from"./iframe-BRxwlzhD.js";import{R as i}from"./arrayEqualityCheck-CQCuJwd9.js";import{C as p}from"./ComposedChart-C4oxbzZd.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-BVkRE_ic.js";import{X as s}from"./XAxis-Dh51v0ko.js";import{Y as c}from"./YAxis-CnCAr5FI.js";import{L as d}from"./Line-1L_TT1FV.js";import{R as g}from"./ReferenceLine-CigBXofm.js";import{R as f}from"./RechartsHookInspector-B_B-yc0r.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CynxUrzr.js";import"./immer-Cx9cWUVd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BxIOqnbY.js";import"./index-DRLqonpR.js";import"./hooks-fHD2lOQN.js";import"./axisSelectors-D3m0qTvR.js";import"./d3-scale-Bx12rmbF.js";import"./zIndexSlice-1DtIfeN0.js";import"./renderedTicksSlice-CaDUjXCY.js";import"./CartesianChart-DCUx-fIz.js";import"./chartDataContext-DyuUFUXu.js";import"./CategoricalChart-C7nGcUHo.js";import"./CartesianAxis-B1fxs7Xq.js";import"./Layer-BVhxWlBa.js";import"./Text-lrriYnC0.js";import"./DOMUtils-Dl_fPRop.js";import"./Label-BA79Nyf7.js";import"./ZIndexLayer-S9493XiC.js";import"./types-CSb1fpov.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-B9lhcmHi.js";import"./ActivePoints-Cs5vmxH5.js";import"./Dot-Dqr59ASu.js";import"./RegisterGraphicalItemId-C8eWu06V.js";import"./ErrorBarContext-D6ju5024.js";import"./GraphicalItemClipPath-mwssqMPM.js";import"./SetGraphicalItem-DUVzJXp_.js";import"./useAnimationId-BIq3Zr7i.js";import"./getRadiusAndStrokeWidthFromDot-D4qF164R.js";import"./ActiveShapeUtils-D4OjEAgF.js";import"./isPlainObject-BY5Vlzsd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B51QCHw4.js";import"./Trapezoid-LOBSkskr.js";import"./Sector-lTYUfjnl.js";import"./Symbols-Cg1rHhLz.js";import"./symbol-DhbO_5Le.js";import"./step-DIees0vo.js";import"./Curve-CgFRM1Qr.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-U7yqHMm0.js";import"./ChartSizeDimensions-VvfCpTvE.js";import"./OffsetShower-CdhB882n.js";import"./PlotAreaShower-DOh-p-fE.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine segment={[{
          x: 'Page A',
          y: 0
        }, {
          x: 'Page E',
          y: 1500
        }]} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ye=["Segment"];export{t as Segment,ye as __namedExportsOrder,Re as default};
