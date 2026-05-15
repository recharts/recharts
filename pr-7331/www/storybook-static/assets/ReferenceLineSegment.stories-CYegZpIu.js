import{e}from"./iframe-CFLjOTm5.js";import{g as i}from"./arrayEqualityCheck-ChmsrC0B.js";import{C as p}from"./ComposedChart-FER9Vi0e.js";import{p as a}from"./Page-DPte-9pC.js";import{C as n}from"./CartesianGrid-eqSTPiFt.js";import{X as s}from"./XAxis-CPArG0UG.js";import{Y as c}from"./YAxis-D1od4iBb.js";import{L as d}from"./Line-Vg9WsR_0.js";import{R as g}from"./ReferenceLine-DawPesqO.js";import{R as f}from"./RechartsHookInspector-BDSD1XTs.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BU0Jf3lU.js";import"./immer-e_Tfrumf.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D7LYgHfU.js";import"./index-DU898aRA.js";import"./hooks-C_Gw3bpR.js";import"./axisSelectors-DczBvRuT.js";import"./d3-scale-CTwBFda5.js";import"./zIndexSlice-Cx77az4x.js";import"./renderedTicksSlice-odoaHiua.js";import"./CartesianChart-Dkwg52u_.js";import"./chartDataContext-CdLUr7Zf.js";import"./CategoricalChart-BQR3q1EG.js";import"./CartesianAxis-BpdXJUIh.js";import"./Layer-CWq3y3ul.js";import"./Text-BZYuARJv.js";import"./DOMUtils-DJPQYNDH.js";import"./Label-BSOdMnMn.js";import"./ZIndexLayer-D7dGD0_V.js";import"./types-CgNdS23P.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DhONHYWu.js";import"./ActivePoints-9HVyXSwD.js";import"./Dot-BsIP-wxa.js";import"./RegisterGraphicalItemId-E3PAioKC.js";import"./ErrorBarContext--tEIgjZN.js";import"./GraphicalItemClipPath-Diu1h3xz.js";import"./SetGraphicalItem-Tg4ql8Pw.js";import"./useAnimationId-DK1cyyuV.js";import"./getRadiusAndStrokeWidthFromDot-CiQZJYhU.js";import"./ActiveShapeUtils-DrwY_Mc1.js";import"./isPlainObject-CzNO0PsU.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DwfIT2qv.js";import"./Trapezoid-B5Lh4oRr.js";import"./Sector-DsUts6aH.js";import"./Symbols-CkgCxPkV.js";import"./symbol-BeYyKtHZ.js";import"./step-BuRaAczm.js";import"./Curve-BhvAwYBS.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-xA73MIG_.js";import"./ChartSizeDimensions-DagJBs5z.js";import"./OffsetShower-CbRTjXXF.js";import"./PlotAreaShower-Bz-8aerp.js";const ye={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const Ee=["Segment"];export{t as Segment,Ee as __namedExportsOrder,ye as default};
