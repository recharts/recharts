import{e}from"./iframe-1sJLl6DZ.js";import{R as i}from"./arrayEqualityCheck-CBQMjkzv.js";import{C as p}from"./ComposedChart-B5sHxVOV.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-CKBoXX0H.js";import{X as s}from"./XAxis-BKluPuIm.js";import{Y as c}from"./YAxis-70kmgyRU.js";import{L as d}from"./Line-Cr1_NgX_.js";import{R as g}from"./ReferenceLine-CzANMFFp.js";import{R as f}from"./RechartsHookInspector-FiK4LEfR.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BwudvEcy.js";import"./immer-D3lmb_Hz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BarrelpQ.js";import"./index-BefZ4p5Z.js";import"./hooks-BSV0CDFu.js";import"./axisSelectors-DfOHronC.js";import"./d3-scale-UoHoc1Us.js";import"./zIndexSlice-DewuM9Kl.js";import"./renderedTicksSlice-B18XtuK2.js";import"./CartesianChart-DajRV7bT.js";import"./chartDataContext-BDPauSBm.js";import"./CategoricalChart-Bp51RrNo.js";import"./CartesianAxis-DRKzcyAj.js";import"./Layer-gI7ebry7.js";import"./Text-D1w4IOeM.js";import"./DOMUtils-Cz4f8MMH.js";import"./Label-B09ck5aR.js";import"./ZIndexLayer-D-ka0Tcp.js";import"./types-OZuhW1zj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-E47kjf1a.js";import"./ActivePoints-7h-OJP_5.js";import"./Dot-CHPbrrnb.js";import"./RegisterGraphicalItemId-B5rT-TGw.js";import"./ErrorBarContext-Db0NPWQr.js";import"./GraphicalItemClipPath-CGdaFH3i.js";import"./SetGraphicalItem-BDCPoYU4.js";import"./useAnimationId-BG884krZ.js";import"./getRadiusAndStrokeWidthFromDot-B2FefomC.js";import"./ActiveShapeUtils-Cjl2bV4c.js";import"./isPlainObject-Cn3itabH.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CPIg9-tb.js";import"./Trapezoid-rVOglQPc.js";import"./Sector-CjSRrVkn.js";import"./Symbols-Bj_BiyXA.js";import"./symbol-Bipgyq1s.js";import"./step-CdTAn4vV.js";import"./Curve-D1t5c_n4.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CQyn9y4S.js";import"./ChartSizeDimensions-D07aYOSB.js";import"./OffsetShower-CPwA5xGr.js";import"./PlotAreaShower-7dIAXo4S.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
