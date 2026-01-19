import{e}from"./iframe-CpNu1JlZ.js";import{R as i}from"./arrayEqualityCheck-BJH8Jf6v.js";import{C as a}from"./ComposedChart-BI4mwn7j.js";import{C as p}from"./CartesianGrid-I2wQTv9V.js";import{X as n}from"./XAxis-4Sxw4UkR.js";import{Y as s}from"./YAxis-B8FElgTt.js";import{L as c}from"./Line-D-KlkcmY.js";import{R as d}from"./ReferenceLine-2PnDgo1L.js";import{R as g}from"./RechartsHookInspector-BmpKM6Nz.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-W5bbcHB0.js";import"./PolarUtils-D3v-RsLH.js";import"./RechartsWrapper-0hOTWq_R.js";import"./hooks-C6Ia6Lfs.js";import"./axisSelectors-BBvb1V6K.js";import"./zIndexSlice-DY-K2-IQ.js";import"./CartesianChart-DJav-J6T.js";import"./chartDataContext-D9xDPkuR.js";import"./CategoricalChart-BHgD9gAO.js";import"./CartesianAxis-DHgD0c-6.js";import"./Layer-CgGUTlVA.js";import"./Text-CcMcwnEY.js";import"./DOMUtils-Bq1JWBRd.js";import"./Label-BZ3pAw6v.js";import"./ZIndexLayer-BhjXIlXu.js";import"./types-DLbIt3jn.js";import"./ReactUtils-DkvyTuz_.js";import"./ActivePoints-DW3qXorP.js";import"./Dot-DHMhFj_F.js";import"./RegisterGraphicalItemId-D7Qen5Xd.js";import"./ErrorBarContext-CPEIMkdr.js";import"./GraphicalItemClipPath-CxPnAcc7.js";import"./SetGraphicalItem-B-5mlAj6.js";import"./useAnimationId-B5QsM2o0.js";import"./getRadiusAndStrokeWidthFromDot-CA6t2h0u.js";import"./ActiveShapeUtils-DXbdTG-x.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DpK3ty__.js";import"./Trapezoid-DLjeAkOF.js";import"./Sector-CFrzjDGx.js";import"./Symbols-BLQ2T1a8.js";import"./Curve-BgSSBByK.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BjecE5DL.js";import"./ChartSizeDimensions-Q_MjQJbH.js";import"./OffsetShower-CV2zUXL0.js";import"./PlotAreaShower-Bf09ZPlm.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
