import{e}from"./iframe-BMuWxLAr.js";import{R as i}from"./arrayEqualityCheck-CqiNO7U9.js";import{C as a}from"./ComposedChart-BCldfKHH.js";import{C as p}from"./CartesianGrid-BGa4GjxM.js";import{X as n}from"./XAxis-WAtQ1axi.js";import{Y as s}from"./YAxis-Ce7Q5R0b.js";import{L as c}from"./Line-91vdzmkR.js";import{R as d}from"./ReferenceLine-BnGdQsO8.js";import{R as g}from"./RechartsHookInspector-zXV2QGE7.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-5NLO6c-f.js";import"./PolarUtils-TfsB6rvw.js";import"./RechartsWrapper-DX7_Ztwr.js";import"./hooks-sLtblQr0.js";import"./axisSelectors-DkziLgOX.js";import"./zIndexSlice-BTEUYv6U.js";import"./CartesianChart-FY0XM-zb.js";import"./chartDataContext-CANLYf-Z.js";import"./CategoricalChart-DViLh9Ev.js";import"./CartesianAxis-HpZ4NVBh.js";import"./Layer-B3GdCeOT.js";import"./Text-Cd5r0d0D.js";import"./DOMUtils-X92SmXv_.js";import"./Label-BDcobJj_.js";import"./ZIndexLayer-5mbugvqo.js";import"./types-DTEjZcuz.js";import"./ReactUtils-CnoqxUjn.js";import"./ActivePoints-uR3BYcLE.js";import"./Dot-D-B6iTph.js";import"./RegisterGraphicalItemId-CCrV6fDN.js";import"./ErrorBarContext-DEke2_6E.js";import"./GraphicalItemClipPath-C7bBKX3e.js";import"./SetGraphicalItem-U0-JS-G0.js";import"./useAnimationId-CV7m1u0T.js";import"./getRadiusAndStrokeWidthFromDot-BFaAXNYg.js";import"./ActiveShapeUtils-DpBW0Bti.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-TwJi8_LR.js";import"./Trapezoid-CkjHCqiS.js";import"./Sector-BljMkyic.js";import"./Symbols-BPsutJwu.js";import"./Curve-vG_gbHgm.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-B4xTjkvp.js";import"./ChartSizeDimensions-CDGd01Cb.js";import"./OffsetShower-BqR0syDI.js";import"./PlotAreaShower-C3Up4AFj.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
