import{e}from"./iframe-ZneQOoj5.js";import{R as i}from"./arrayEqualityCheck-BNajb9_C.js";import{C as a}from"./ComposedChart-BAOyItJh.js";import{C as p}from"./CartesianGrid-9pcoHFJE.js";import{X as n}from"./XAxis-iiI74VtB.js";import{Y as s}from"./YAxis-B0TStWJD.js";import{L as c}from"./Line-DO-PR6R0.js";import{R as d}from"./ReferenceLine-Dbfa4aC_.js";import{R as g}from"./RechartsHookInspector-o16may3G.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Ca5bm1S2.js";import"./PolarUtils-kb3Ynomj.js";import"./RechartsWrapper-Cti5RU63.js";import"./hooks-f5tcO63K.js";import"./axisSelectors-Bn4oM41D.js";import"./zIndexSlice-D_yw_EwD.js";import"./CartesianChart-CYjuCTh1.js";import"./chartDataContext-B0ByfYA8.js";import"./CategoricalChart-Dsfzrp1E.js";import"./CartesianAxis-ZVfszaWr.js";import"./Layer-CxIF_InE.js";import"./Text-BSmPk6IU.js";import"./DOMUtils-CY6Iwyv6.js";import"./Label-s2gAZUId.js";import"./ZIndexLayer-DbAXPfU_.js";import"./types-D_7qF1fe.js";import"./ReactUtils-Bw9y5ciT.js";import"./ActivePoints-DBydqYpl.js";import"./Dot-EaxYnBY2.js";import"./RegisterGraphicalItemId-GDWraSC2.js";import"./ErrorBarContext-ZUCqOgTN.js";import"./GraphicalItemClipPath-D0RDiP4j.js";import"./SetGraphicalItem-xtvvD71Q.js";import"./useAnimationId-qX2h62Hn.js";import"./getRadiusAndStrokeWidthFromDot-CBuap8aJ.js";import"./ActiveShapeUtils-DknnfoXI.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-gyHsx_3Q.js";import"./Trapezoid-aiu3Rixu.js";import"./Sector-CIuTmDEF.js";import"./Symbols-DOSg8I_W.js";import"./Curve-D5OcxVms.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BhzpkJlR.js";import"./ChartSizeDimensions-DcPBcGoe.js";import"./OffsetShower-D0qLOk-K.js";import"./PlotAreaShower-kc5kHvIr.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const se=["Segment"];export{t as Segment,se as __namedExportsOrder,ne as default};
