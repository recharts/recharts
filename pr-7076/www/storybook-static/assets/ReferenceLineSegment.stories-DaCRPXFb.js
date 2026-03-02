import{e}from"./iframe-DJ6q0UO-.js";import{R as i}from"./arrayEqualityCheck-BTG2-4hW.js";import{C as p}from"./ComposedChart-C7rLgjOW.js";import{C as a}from"./CartesianGrid-UPpwW0-A.js";import{X as n}from"./XAxis-DlTasNrE.js";import{Y as s}from"./YAxis-BkUPDN4D.js";import{L as c}from"./Line-6rxOW2Ea.js";import{R as d}from"./ReferenceLine-n6lLRgqq.js";import{R as g}from"./RechartsHookInspector-CMjN7xhZ.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-ClNXOKlU.js";import"./immer-DZ05EljQ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CC4bWY2k.js";import"./index-h_islmiW.js";import"./hooks-BoprsZkg.js";import"./axisSelectors-tM2Ez228.js";import"./d3-scale-_iIYR1pZ.js";import"./zIndexSlice-BmNGt8JH.js";import"./renderedTicksSlice-D51KP5us.js";import"./CartesianChart-CehgIYHu.js";import"./chartDataContext-CvUYCtAC.js";import"./CategoricalChart-CFoaXUlO.js";import"./CartesianAxis-CbTmm20n.js";import"./Layer-DYjtWcck.js";import"./Text-DLyfATo-.js";import"./DOMUtils-DG6JE6vP.js";import"./Label-Cfw2XXr5.js";import"./ZIndexLayer-nrCDqpeq.js";import"./types-Ds0jwWEi.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-eTAsrJ6L.js";import"./ActivePoints-BPWixHwU.js";import"./Dot-p8yv5QeN.js";import"./RegisterGraphicalItemId-CMX_3-4x.js";import"./ErrorBarContext-Dz-CTdIG.js";import"./GraphicalItemClipPath-DQW1wzar.js";import"./SetGraphicalItem-DKRiAGC0.js";import"./useAnimationId-DdUAPJ1J.js";import"./getRadiusAndStrokeWidthFromDot-BC9cTS7x.js";import"./ActiveShapeUtils-BXYjh8cu.js";import"./isPlainObject-BG7kj9kW.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BMamn6k9.js";import"./Trapezoid-BT8qRaiE.js";import"./Sector-CzkjfA5d.js";import"./Symbols-CZ9XpzM5.js";import"./symbol-C9svRAEA.js";import"./step-B8mY4Wsq.js";import"./Curve-CUiTauC8.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Drj3rz67.js";import"./ChartSizeDimensions-Az2tJg6r.js";import"./OffsetShower-FoNPoJYn.js";import"./PlotAreaShower-DMVJxorS.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
