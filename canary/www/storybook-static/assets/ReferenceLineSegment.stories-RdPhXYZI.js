import{e}from"./iframe-C2m-yPM5.js";import{R as i}from"./arrayEqualityCheck-TbGkdOW0.js";import{C as a}from"./ComposedChart-CnOpfs4O.js";import{C as p}from"./CartesianGrid-_Vu6X4Ru.js";import{X as n}from"./XAxis-pwIeR2Z_.js";import{Y as s}from"./YAxis-UtKchpqB.js";import{L as c}from"./Line-DQZ-cp1P.js";import{R as d}from"./ReferenceLine-C8JTj_jm.js";import{R as g}from"./RechartsHookInspector-hZPAuXLN.js";import{p as f}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BmyS9k2s.js";import"./PolarUtils-CURfmLFn.js";import"./RechartsWrapper-Cw8RxtHF.js";import"./hooks-DAeXdWPb.js";import"./axisSelectors-DcRH2ohT.js";import"./zIndexSlice-C6669BzF.js";import"./CartesianChart-DhCLRkDZ.js";import"./chartDataContext-BYudZTMM.js";import"./CategoricalChart-DyutkFbX.js";import"./CartesianAxis-BexRodkO.js";import"./Layer-Iud-sCq9.js";import"./Text-DUKp4QGC.js";import"./DOMUtils-CU85nTnD.js";import"./Label-BXoaurZ0.js";import"./ZIndexLayer-Cl-H5N7h.js";import"./types-8dUwYk5q.js";import"./ReactUtils-DmzHw7gD.js";import"./ActivePoints-VAc3oi-v.js";import"./Dot-CZbIvFZH.js";import"./RegisterGraphicalItemId-DCftStFv.js";import"./ErrorBarContext-DcTW_4BU.js";import"./GraphicalItemClipPath-DhdF9Via.js";import"./SetGraphicalItem-qvQ4SGUj.js";import"./useAnimationId-Du8Fxdxx.js";import"./getRadiusAndStrokeWidthFromDot-j4oCpZf6.js";import"./ActiveShapeUtils-BOZBV2Pi.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BQHai8ZT.js";import"./Trapezoid-CwALKVJk.js";import"./Sector-DFUU7h0Y.js";import"./Symbols-vGEzJ5HY.js";import"./Curve-Bma3Kx5X.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Dd7KOolC.js";import"./ChartSizeDimensions-DjDyxBi1.js";import"./OffsetShower-DXH-cEhk.js";import"./PlotAreaShower-lLRwtmjO.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
