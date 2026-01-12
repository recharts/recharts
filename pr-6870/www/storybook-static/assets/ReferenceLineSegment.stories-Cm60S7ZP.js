import{e}from"./iframe-C9kyXynm.js";import{R as i}from"./arrayEqualityCheck-BdbBdFIu.js";import{C as a}from"./ComposedChart-CNIVaO9y.js";import{C as p}from"./CartesianGrid-C8kB-52l.js";import{X as n}from"./XAxis-DlZ1onwt.js";import{Y as s}from"./YAxis-V3Y4BL5v.js";import{L as c}from"./Line-wjUPJFe4.js";import{R as d}from"./ReferenceLine-d5qVXLKN.js";import{R as g}from"./RechartsHookInspector-CKajdCMN.js";import{p as f}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BCZIpR14.js";import"./PolarUtils-B_1hBJ6O.js";import"./RechartsWrapper-ultCJT0w.js";import"./hooks-BzniDeZ2.js";import"./axisSelectors-50fqgJ0X.js";import"./zIndexSlice-cJxKJ8ug.js";import"./CartesianChart-EinDqxZ_.js";import"./chartDataContext-CZ4PAiww.js";import"./CategoricalChart-5uqkh1gH.js";import"./CartesianAxis-DH1-Rlhr.js";import"./Layer-LG3hnzpE.js";import"./Text-BcrXlrdS.js";import"./DOMUtils-CQZn70zK.js";import"./Label-C-oa8ua5.js";import"./ZIndexLayer-7ELyukPI.js";import"./types-BfqR7E8K.js";import"./ReactUtils-D_EEBxyT.js";import"./ActivePoints-B59gHKqE.js";import"./Dot-BiJvCsb9.js";import"./RegisterGraphicalItemId-oP_vlkHV.js";import"./ErrorBarContext-CHSQnyV_.js";import"./GraphicalItemClipPath-DJAtFFUQ.js";import"./SetGraphicalItem-DyyRaUbx.js";import"./useAnimationId-XLZTjrUv.js";import"./getRadiusAndStrokeWidthFromDot-Bxt3ny70.js";import"./ActiveShapeUtils-CGirhXo2.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DSM7deum.js";import"./Trapezoid-91tzOikz.js";import"./Sector-D1DtIzuz.js";import"./Symbols-DR9F1KQK.js";import"./Curve-WEIhibNB.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DVm8rubF.js";import"./ChartSizeDimensions-COOovYk2.js";import"./OffsetShower-D9P9ThB2.js";import"./PlotAreaShower-B7fr2_CT.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
