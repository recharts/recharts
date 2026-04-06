import{e}from"./iframe-D7aX3J5h.js";import{R as i}from"./arrayEqualityCheck-DLuUv4yo.js";import{C as p}from"./ComposedChart-CmEEfZPd.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-CkxeYeVM.js";import{X as s}from"./XAxis-EjrrpAWt.js";import{Y as c}from"./YAxis-ByFth8eE.js";import{L as d}from"./Line-Bj-b8hiQ.js";import{R as g}from"./ReferenceLine-AxVms-S4.js";import{R as f}from"./RechartsHookInspector-BTqr9y2h.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DDSKwV2V.js";import"./immer-DIW08hxt.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-_XTZaGgp.js";import"./index-BM0_uYzm.js";import"./hooks-D1J8v2Uc.js";import"./axisSelectors-I1seAFnS.js";import"./d3-scale-Mn_kc0sV.js";import"./zIndexSlice-uyR3EFO5.js";import"./renderedTicksSlice-OcRGvYoz.js";import"./CartesianChart-CKcNyqW5.js";import"./chartDataContext-davdrOpe.js";import"./CategoricalChart-XTP8dVhI.js";import"./CartesianAxis-Bj6Nx-J-.js";import"./Layer-CJYXhEUr.js";import"./Text-CWxCeK9x.js";import"./DOMUtils-DCfT5r3n.js";import"./Label-UZajBuhN.js";import"./ZIndexLayer-CkNFgsWD.js";import"./types-4ix9MfJ6.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CbiuaN3U.js";import"./ActivePoints-3vBr6ZBc.js";import"./Dot-BDZGqa2C.js";import"./RegisterGraphicalItemId-CN0LR0Zv.js";import"./ErrorBarContext-DUsuoaJE.js";import"./GraphicalItemClipPath-DCnzaJaS.js";import"./SetGraphicalItem-BA9LnDto.js";import"./useAnimationId-m-yYskNq.js";import"./getRadiusAndStrokeWidthFromDot-TfJWcB_w.js";import"./ActiveShapeUtils-ozGWPntb.js";import"./isPlainObject-C2gpCQxZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C5iIq7iY.js";import"./Trapezoid-DY_CkLjE.js";import"./Sector-B9JMeRk8.js";import"./Symbols-BNYsC8j_.js";import"./symbol-BUFbd2WM.js";import"./step-lYGPVUHl.js";import"./Curve-C0dUv9vi.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BUdbPquH.js";import"./ChartSizeDimensions-CBUuBi2H.js";import"./OffsetShower-YsWSeMxm.js";import"./PlotAreaShower-BsknmqpH.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
