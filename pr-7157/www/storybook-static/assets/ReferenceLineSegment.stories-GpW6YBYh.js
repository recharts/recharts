import{e}from"./iframe-C-50EfA7.js";import{R as i}from"./arrayEqualityCheck-C4RXKFVZ.js";import{C as p}from"./ComposedChart-Ck4Ct4W9.js";import{C as a}from"./CartesianGrid-BmEmiUwG.js";import{X as n}from"./XAxis-90LmsjPO.js";import{Y as s}from"./YAxis-D2KQalCb.js";import{L as c}from"./Line-Ch8yl9X2.js";import{R as d}from"./ReferenceLine-k1EihaiF.js";import{R as g}from"./RechartsHookInspector-B1kq2kh2.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DyfkEz9s.js";import"./immer-4zqQKvZM.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-4XlXwyP0.js";import"./index-DgChmAdf.js";import"./hooks-B8m9isT1.js";import"./axisSelectors-CpmXiDAA.js";import"./d3-scale-B6NfZS7A.js";import"./zIndexSlice-B4bKHPxl.js";import"./renderedTicksSlice-DmzhzySp.js";import"./CartesianChart-CGym5D6x.js";import"./chartDataContext-CVjjKugU.js";import"./CategoricalChart-BhkXQps_.js";import"./CartesianAxis-CA7owa59.js";import"./Layer-CjzK_mik.js";import"./Text-Bjbs5yvb.js";import"./DOMUtils-BJ8awGJ7.js";import"./Label-D4RxJjz3.js";import"./ZIndexLayer-CEEBNKDA.js";import"./types--ddu9raC.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CO3iMEw6.js";import"./ActivePoints-DJzgHe1Z.js";import"./Dot-DJCM9NbX.js";import"./RegisterGraphicalItemId-CwXq2ePK.js";import"./ErrorBarContext-DKJlMfPG.js";import"./GraphicalItemClipPath-BG4MlZY6.js";import"./SetGraphicalItem-k5xaJlVz.js";import"./useAnimationId-DEOKae8V.js";import"./getRadiusAndStrokeWidthFromDot-Bfo0EhLe.js";import"./ActiveShapeUtils-BQKoRXiq.js";import"./isPlainObject-C7QiIDX3.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DylkAvEv.js";import"./Trapezoid-CVfMGfer.js";import"./Sector-BqYe_ni4.js";import"./Symbols-DEUKzo69.js";import"./symbol-B7uWDEKo.js";import"./step-D-hsF5Bn.js";import"./Curve-BrkfeITg.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-D0wRUjZQ.js";import"./ChartSizeDimensions-CLZ_38hy.js";import"./OffsetShower-B2bw8EI-.js";import"./PlotAreaShower-GeIkbIXn.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
